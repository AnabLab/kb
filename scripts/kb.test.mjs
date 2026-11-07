import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, test } from "node:test";
import { buildIndex, closure, loadCorpus } from "./kb.mjs";

const BIB = "@article{smith2001,\n  title = {A paper},\n}\n";
const roots = [];

function corpus(files, bib = BIB) {
  const root = mkdtempSync(join(tmpdir(), "kb-test-"));
  roots.push(root);
  mkdirSync(join(root, "entries"));
  if (bib !== null) writeFileSync(join(root, "references.bib"), bib);
  for (const [name, text] of Object.entries(files)) writeFileSync(join(root, "entries", name), text);
  return loadCorpus(root);
}

function entry({ kind = "note", extra = "", body = "Some text." } = {}) {
  return `---\ntitle: A title\nkind: ${kind}\nsummary: A summary.\n${extra}---\n\n${body}\n`;
}

function assertProblem({ problems }, pattern) {
  assert.ok(problems.some((problem) => pattern.test(problem)), `no problem matching ${pattern} in ${JSON.stringify(problems)}`);
}

after(() => roots.forEach((root) => rmSync(root, { recursive: true, force: true })));

test("an empty corpus is valid", () => {
  assert.deepEqual(corpus({}).problems, []);
});

test("a complete entry is valid", () => {
  const extra = "tags: [curves, number-fields]\nedges:\n  - {to: b, label: uses, note: 'see [@smith2001, Theorem 3]'}\n";
  const { problems, entries } = corpus({
    "a.md": entry({ extra, body: "See [b](b.md#part), [the web](https://example.org) and [@smith2001, p. 4]." }),
    "b.md": entry(),
  });
  assert.deepEqual(problems, []);
  assert.deepEqual(entries.get("a").links, ["b"]);
});

test("required fields are enforced", () => {
  assertProblem(corpus({ "a.md": "no frontmatter" }), /frontmatter block/);
  assertProblem(corpus({ "a.md": "---\nkind: note\nsummary: s\n---\nbody" }), /"title" is required/);
  assertProblem(corpus({ "a.md": "---\ntitle: t\nkind: lemma\nsummary: s\n---\nbody" }), /"kind" must be one of/);
  assertProblem(corpus({ "a.md": "---\ntitle: t\nkind: note\n---\nbody" }), /"summary" is required/);
  assertProblem(corpus({ "a.md": "---\ntitle: t\nkind: note\nsummary: s\n---\n" }), /body is empty/);
  assertProblem(corpus({ "a.md": `---\ntitle: t\nkind: note\nsummary: ${"x".repeat(301)}\n---\nbody` }), /over 300/);
});

test("unknown fields and malformed YAML are rejected", () => {
  assertProblem(corpus({ "a.md": entry({ extra: "status: open\n" }) }), /unknown field "status"/);
  assertProblem(corpus({ "a.md": "---\ntitle: a: b\nkind: note\nsummary: s\n---\nbody" }), /not valid YAML/);
  assertProblem(corpus({ "a.md": entry({ extra: "tags: [Bad Tag]\n" }) }), /"tags" must be/);
});

test("filenames and folder layout are enforced", () => {
  assertProblem(corpus({ "Bad_Name.md": entry() }), /filename must be/);
  assertProblem(corpus({ "notes.txt": "text" }), /only \.md files/);
});

test("edges are checked", () => {
  const edge = (text) => corpus({ "a.md": entry({ extra: `edges:\n  - ${text}\n` }) });
  assertProblem(edge("{to: b, label: extends}"), /unknown edge label/);
  assertProblem(edge("{label: uses}"), /edge "to" must be/);
  assertProblem(edge("{to: a, label: uses}"), /edge to itself/);
  assertProblem(edge("{to: b, label: uses, weight: 2}"), /unknown edge field/);
  assertProblem(corpus({ "a.md": entry({ extra: "edges: b\n" }) }), /"edges" must be a list/);
  assertProblem(
    corpus({ "a.md": entry({ extra: "edges:\n  - {to: b, label: uses}\n  - {to: b, label: uses}\n" }) }),
    /duplicate edge/,
  );
});

test("citations need a known key and an exact location", () => {
  const cite = (text) => corpus({ "a.md": entry({ body: text }) });
  assertProblem(cite("[@missing, Theorem 1]"), /not in references\.bib/);
  assertProblem(cite("[@smith2001]"), /needs an exact location/);
  assertProblem(cite("[@smith2001, <exact location>]"), /needs an exact location/);
  assertProblem(cite("[@smith2001, Thm 1; @smith2001, Thm 2]"), /one source per bracket/);
  assertProblem(corpus({ "a.md": entry({ extra: "edges:\n  - {to: b, label: uses, note: '[@missing, p. 1]'}\n" }) }), /not in references\.bib/);
});

test("references.bib must exist and have unique keys", () => {
  assertProblem(corpus({}, null), /file is missing/);
  assertProblem(corpus({}, `${BIB}${BIB}`), /duplicate key/);
  assert.deepEqual(corpus({}, `@comment{ignored,\n}\n${BIB}`).problems, []);
});

test("layout and macro commands are rejected everywhere", () => {
  const tex = "$\\\\rlap{\\\\rule{9em}{9em}}$";
  assertProblem(corpus({ "a.md": entry({ body: tex }) }), /command "\\rlap" is not allowed/);
  assertProblem(corpus({ "a.md": `---\ntitle: '${tex}'\nkind: note\nsummary: s\n---\nbody` }), /is not allowed/);
  assertProblem(corpus({ "a.md": `---\ntitle: t\nkind: note\nsummary: '${tex}'\n---\nbody` }), /is not allowed/);
  assertProblem(corpus({ "a.md": entry({ extra: `edges:\n  - {to: b, label: uses, note: '${tex}'}\n` }) }), /is not allowed/);
  assertProblem(corpus({}, `${BIB}@article{b2001,\n  title = {${tex}},\n}\n`), /references\.bib.*is not allowed/);
  assert.deepEqual(corpus({ "a.md": entry({ body: "$\\\\left( \\\\pi_1 \\\\right)$ and $\\\\mathrm{Gal}$" }) }).problems, []);
});

test("references.bib can't be a link to another file", () => {
  const root = mkdtempSync(join(tmpdir(), "kb-test-"));
  roots.push(root);
  mkdirSync(join(root, "entries"));
  writeFileSync(join(root, "elsewhere"), BIB);
  symlinkSync(join(root, "elsewhere"), join(root, "references.bib"));
  assertProblem(loadCorpus(root), /must be a regular file/);
});

test("links must be sibling entries, and math and code are ignored", () => {
  assertProblem(corpus({ "a.md": entry({ body: "[x](../other.md)" }) }), /should be an entry/);
  assertProblem(corpus({ "a.md": entry({ body: "[x](other)" }) }), /should be an entry/);
  const body = "$[L:K](x)$ and `[y](z)` and $$[@nope]$$, then [$\\pi_1$](fundamental-group.md).";
  const { problems, entries } = corpus({ "a.md": entry({ body }) });
  assert.deepEqual(problems, []);
  assert.deepEqual(entries.get("a").links, ["fundamental-group"]);
});

test("unwritten targets are wanted, not problems", () => {
  const { problems, entries } = corpus({
    "a.md": entry({ extra: "edges:\n  - {to: later, label: uses}\n", body: "[y](another.md)" }),
    "b.md": entry({ extra: "edges:\n  - {to: later, label: addresses}\n" }),
  });
  assert.deepEqual(problems, []);
  assert.deepEqual(buildIndex(entries).wanted, [
    { id: "another", referencedBy: ["a"] },
    { id: "later", referencedBy: ["a", "b"] },
  ]);
});

test("the index computes incoming edges and backlinks", () => {
  const { entries } = corpus({
    "a.md": entry({ extra: "edges:\n  - {to: b, label: generalizes, note: why}\n", body: "[b](b.md)" }),
    "b.md": entry(),
  });
  const b = buildIndex(entries).entries.find((item) => item.id === "b");
  assert.deepEqual(b.incoming, [{ from: "a", label: "generalizes", note: "why" }]);
  assert.deepEqual(b.backlinks, ["a"]);
  assert.equal(b.body, undefined);
});

test("a theorem resting on open entries is conditional, through chains of uses", () => {
  const uses = (to) => `edges:\n  - {to: ${to}, label: uses}\n`;
  const { entries } = corpus({
    "main.md": entry({ kind: "theorem", extra: uses("lemma") }),
    "lemma.md": entry({ kind: "theorem", extra: uses("guess") }),
    "guess.md": entry({ kind: "problem" }),
    "solid.md": entry({ kind: "theorem", extra: uses("fact") }),
    "fact.md": entry({ kind: "theorem" }),
    "plan.md": entry({ kind: "idea", extra: uses("guess") }),
  });
  const conditional = Object.fromEntries(buildIndex(entries).entries.map((item) => [item.id, item.conditionalOn]));
  assert.deepEqual(conditional.main, ["guess"]);
  assert.deepEqual(conditional.lemma, ["guess"]);
  assert.deepEqual(conditional.solid, []);
  assert.deepEqual(conditional.plan, []);
});

test("an entry with an incoming refutes edge records what refutes it", () => {
  const { entries } = corpus({
    "plan.md": entry({ kind: "idea" }),
    "counterexample.md": entry({ kind: "theorem", extra: "edges:\n  - {to: plan, label: refutes}\n" }),
  });
  const plan = buildIndex(entries).entries.find((item) => item.id === "plan");
  assert.deepEqual(plan.refutedBy, ["counterexample"]);
});

test("closure follows one label and survives cycles", () => {
  const { entries } = corpus({
    "a.md": entry({ extra: "edges:\n  - {to: b, label: uses}\n  - {to: d, label: generalizes}\n" }),
    "b.md": entry({ extra: "edges:\n  - {to: c, label: uses}\n" }),
    "c.md": entry({ extra: "edges:\n  - {to: a, label: uses}\n" }),
    "d.md": entry(),
  });
  assert.deepEqual(closure(entries, "a", "uses"), ["b", "c"]);
});
