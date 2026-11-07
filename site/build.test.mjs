import assert from "node:assert/strict";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, test } from "node:test";
import { build } from "./build.mjs";

const directories = [];

function site(entries) {
  const root = mkdtempSync(join(tmpdir(), "kb-site-"));
  directories.push(root);
  mkdirSync(join(root, "entries"));
  writeFileSync(join(root, "references.bib"), "@article{uchida1976,\n  author = {Uchida, K\\^oji},\n  title = {Isomorphisms of {G}alois groups},\n  journal = {J. Math. Soc. Japan},\n  year = {1976},\n  url = {https://example.org/paper},\n}\n");
  for (const [id, text] of Object.entries(entries)) writeFileSync(join(root, "entries", `${id}.md`), text);
  const out = join(root, "dist");
  build({ root, out });
  return { out, read: (path) => readFileSync(join(out, "kb", path), "utf8") };
}

const entry = (kind, body = "Text.", extra = "") => `---\ntitle: A title\nkind: ${kind}\nsummary: A summary with $\\pi_1$.\n${extra}---\n\n${body}\n`;

after(() => directories.forEach((directory) => rmSync(directory, { recursive: true, force: true })));

test("an empty knowledgebase still builds a welcoming page", () => {
  const { read } = site({});
  assert.match(read("index.html"), /first entries are on their way/);
  assert.deepEqual(JSON.parse(read("index.json")), { entries: [], wanted: [] });
});

test("each entry gets a page and raw Markdown, and everything sits under /kb", () => {
  const source = entry("theorem");
  const { read, out } = site({ "a-theorem": source });
  assert.equal(read("a-theorem.md"), source);
  assert.match(read("a-theorem/index.html"), /<h1>A title<\/h1>/);
  assert.match(read("index.html"), /href="\/kb\/a-theorem\/"/);
  assert.ok(!/(?:href|src)="\/(?!kb\/)/.test(read("index.html")), "every internal URL starts with /kb");
  for (const file of ["kb/404.html", "kb/index.json", "kb/references.bib", "kb/assets/style.css", "kb/assets/client.js", "kb/assets/katex/katex.min.css", "_headers"]) assert.ok(existsSync(join(out, file)), file);
  assert.match(readFileSync(join(out, "_headers"), "utf8"), /^\/kb\/\*/);
});

test("math renders, including where Markdown would otherwise interfere", () => {
  const { read } = site({ a: entry("note", "Inline $a_1 * b_2 * c$ and display\n\n$$\\pi_1(X)$$\n") });
  const page = read("a/index.html");
  assert.match(page, /class="katex"/);
  assert.match(page, /katex-display/);
  assert.ok(!page.includes("<em>"), "underscores and stars in math aren't treated as Markdown");
  const spacing = site({ b: entry("note", "$$a \\; b$$\n") }).read("b/index.html");
  assert.match(spacing, /a \\; b<\/annotation>/, "backslash commands reach KaTeX intact");
});

test("citations link to a reference list", () => {
  const { read } = site({ a: entry("theorem", "This is [@uchida1976, Corollary 2].") });
  const page = read("a/index.html");
  assert.match(page, /href="#ref-uchida1976">\[Uchida 1976, Corollary 2\]</);
  assert.match(page, /id="ref-uchida1976"/);
  assert.match(page, /href="https:\/\/example\.org\/paper"/);
  assert.match(page, /Uchida, Kôji\./, "TeX accents are decoded");
});

test("math in a reference title renders", () => {
  const root = mkdtempSync(join(tmpdir(), "kb-site-"));
  directories.push(root);
  mkdirSync(join(root, "entries"));
  writeFileSync(join(root, "references.bib"), "@article{a2020,\n  author = {A, B},\n  title = {The $m$-step case},\n  year = {2020},\n}\n");
  writeFileSync(join(root, "entries/a.md"), entry("theorem", "See [@a2020, p. 1]."));
  build({ root, out: join(root, "dist") });
  const page = readFileSync(join(root, "dist/kb/a/index.html"), "utf8");
  assert.ok(!page.includes("$m$"));
  assert.match(page, /<cite>The <span class="katex">/);
});

test("links go to entries, wanted entries are marked, and arrows appear both ways", () => {
  const { read } = site({
    source: entry("idea", "See [the target](target.md), [later](not-written.md) and [someday](later.md).", "edges:\n  - {to: target, label: uses, note: only part}\n  - {to: not-written, label: addresses}\n"),
    target: entry("definition"),
  });
  const page = read("source/index.html");
  assert.match(page, /href="\/kb\/target\/">the target</);
  assert.match(page, /class="wanted-link" href="\/kb\/#wanted-not-written"/);
  assert.match(page, /<h3>Uses<\/h3>/);
  assert.match(page, /only part/);
  assert.match(read("target/index.html"), /<h3>Used by<\/h3>/);
  const dashboard = read("index.html");
  assert.match(dashboard, /data-from="source" data-to="target" data-label="uses"/);
  assert.match(dashboard, /id="wanted-not-written"/);
  assert.ok(!dashboard.includes('data-id="later"'), "an entry only mentioned in a body has no node");
  assert.match(dashboard, /data-id="not-written" data-kind="wanted"/);
});

test("status is shown in words", () => {
  const { read } = site({
    guess: entry("problem"),
    result: entry("theorem", "Text.", "edges:\n  - {to: guess, label: uses}\n"),
    plan: entry("idea"),
    counterexample: entry("theorem", "Text.", "edges:\n  - {to: plan, label: refutes}\n"),
    claim: entry("theorem", "Text.", "tags: [contested]\n"),
  });
  assert.match(read("result/index.html"), /Conditional\.<\/strong> Rests on/);
  assert.match(read("plan/index.html"), /Refuted\.<\/strong>/);
  assert.match(read("claim/index.html"), /Contested\.<\/strong>/);
  assert.ok(!read("index.html").match(/id="active-ideas"[\s\S]*?<\/section>/)[0].includes('href="/kb/plan/"'), "a refuted idea isn't listed as active");
});

test("raw HTML and unsafe links in entries are neutralized", () => {
  const { read } = site({ a: entry("note", '<script>alert(1)</script>\n\n<img src=x onerror=alert(1)>\n\n[click](javascript:alert(1)) and ![pic](https://example.org/a.png)') });
  const page = read("a/index.html");
  assert.ok(!page.includes("<script>alert"));
  assert.ok(!page.includes("<img"));
  assert.ok(!page.includes("javascript:"));
  assert.ok(!page.includes("https://example.org/a.png"));
});

test("an invalid corpus fails the build", () => {
  assert.throws(() => site({ a: "no frontmatter" }), /the corpus has problems/);
});

test("the layout is the same on every build", () => {
  const entries = { a: entry("theorem", "Text.", "edges:\n  - {to: b, label: uses}\n"), b: entry("definition"), c: entry("note", "Text.", "edges:\n  - {to: a, label: motivated-by}\n") };
  const transforms = (page) => page.match(/transform="translate[^"]*"/g);
  assert.deepEqual(transforms(site(entries).read("index.html")), transforms(site(entries).read("index.html")));
});
