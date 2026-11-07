#!/usr/bin/env node
// Validates the entries in this repo and answers questions about their graph.
// Usage is documented in INSTRUCTIONS.md.
import { existsSync, lstatSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { parse as parseYaml } from "yaml";

export const KINDS = ["definition", "theorem", "problem", "idea", "note"];
export const LABELS = [
  "uses",
  "implies",
  "generalizes",
  "addresses",
  "refutes",
  "analogous-to",
  "motivated-by",
];

const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const ENTRY_FIELDS = new Set(["title", "kind", "summary", "tags", "edges"]);
const EDGE_FIELDS = new Set(["to", "label", "note"]);
const MAX_SUMMARY_LENGTH = 300;
const IGNORED_FILES = new Set([".gitkeep"]);
const BIB_NON_ENTRIES = new Set(["comment", "string", "preamble"]);

// Layout and macro commands can draw over the page, or hide what an entry says.
const FORBIDDEN_TEX = /\\(rule|raisebox|kern|mkern|hskip|mskip|hspace|smash|[lrc]lap|math[lrc]lap|def|gdef|edef|xdef|let|newcommand|renewcommand|color|textcolor|colorbox|fcolorbox)(?![a-zA-Z])/;

function checkTex(text, where, problems) {
  const match = FORBIDDEN_TEX.exec(text);
  if (match) problems.push(`${where}: the LaTeX command "\\${match[1]}" is not allowed`);
}

const isSingleLine = (value) =>
  typeof value === "string" && value.trim() !== "" && !value.includes("\n");

// Removes code and math, whose brackets would otherwise look like links or citations.
function stripCodeAndMath(body) {
  return body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`\n]*`/g, "")
    .replace(/\$\$[\s\S]*?\$\$/g, "")
    .replace(/\$[^$\n]+\$/g, "");
}

function parseBibKeys(text, problems) {
  const keys = new Set();
  for (const [, type, key] of text.matchAll(/^\s*@(\w+)\s*\{\s*([^,\s]+)\s*,/gm)) {
    if (BIB_NON_ENTRIES.has(type.toLowerCase())) continue;
    if (keys.has(key)) problems.push(`references.bib: duplicate key "${key}"`);
    keys.add(key);
  }
  return keys;
}

function checkCitations(text, where, bibKeys, problems) {
  for (const [, key, location] of text.matchAll(/\[@([^\],\s]+)\s*(?:,([^\]]*))?\]/g)) {
    if (!bibKeys.has(key)) {
      problems.push(`${where}: citation key "${key}" is not in references.bib`);
    }
    const trimmed = (location ?? "").trim();
    if (trimmed === "" || /^<.*>$/.test(trimmed)) {
      problems.push(`${where}: citation "${key}" needs an exact location, as in [@${key}, Theorem 3]`);
    } else if (trimmed.includes("@")) {
      problems.push(`${where}: cite one source per bracket, near "${key}"`);
    }
  }
}

function collectLinks(body, where, problems) {
  const links = new Set();
  for (const [, target] of body.matchAll(/\[[^\]]*\]\(\s*([^)\s]+)[^)]*\)/g)) {
    if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith("#")) continue;
    const match = target.match(/^([a-z0-9-]+)\.md(?:#.*)?$/);
    if (match && ID.test(match[1])) {
      links.add(match[1]);
    } else {
      problems.push(`${where}: link "${target}" should be an entry in this folder, as in other-entry.md`);
    }
  }
  return [...links].sort();
}

function checkEdges(edges, id, where, bibKeys, problems) {
  if (edges === undefined) return [];
  if (!Array.isArray(edges)) {
    problems.push(`${where}: "edges" must be a list`);
    return [];
  }
  const seen = new Set();
  const valid = [];
  for (const edge of edges) {
    if (edge === null || typeof edge !== "object" || Array.isArray(edge)) {
      problems.push(`${where}: each edge must have "to" and "label"`);
      continue;
    }
    for (const field of Object.keys(edge)) {
      if (!EDGE_FIELDS.has(field)) problems.push(`${where}: unknown edge field "${field}"`);
    }
    const { to, label, note } = edge;
    if (typeof to !== "string" || !ID.test(to)) {
      problems.push(`${where}: edge "to" must be an entry ID, got ${JSON.stringify(to)}`);
      continue;
    }
    if (!LABELS.includes(label)) {
      problems.push(`${where}: unknown edge label ${JSON.stringify(label)}; use one of ${LABELS.join(", ")}`);
      continue;
    }
    if (to === id) problems.push(`${where}: an entry cannot have an edge to itself`);
    const signature = `${label} ${to}`;
    if (seen.has(signature)) problems.push(`${where}: duplicate edge "${label}" to "${to}"`);
    seen.add(signature);
    if (note !== undefined) {
      if (isSingleLine(note)) {
        checkCitations(note, where, bibKeys, problems);
        checkTex(note, where, problems);
      } else {
        problems.push(`${where}: edge "note" must be one line of text`);
      }
    }
    valid.push(note === undefined ? { to, label } : { to, label, note });
  }
  return valid;
}

function checkTags(tags, where, problems) {
  if (tags === undefined) return [];
  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== "string" || !ID.test(tag))) {
    problems.push(`${where}: "tags" must be a list of lowercase-hyphenated words`);
    return [];
  }
  if (new Set(tags).size !== tags.length) problems.push(`${where}: "tags" has duplicates`);
  return tags;
}

function parseEntry(file, text, bibKeys, problems) {
  const where = `entries/${file}`;
  const id = file.slice(0, -".md".length);
  if (!ID.test(id)) {
    problems.push(`${where}: filename must be lowercase words joined by hyphens`);
    return null;
  }
  const match = text.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---(?:\n([\s\S]*))?$/);
  if (!match) {
    problems.push(`${where}: must start with a frontmatter block between --- lines`);
    return null;
  }
  let meta;
  try {
    meta = parseYaml(match[1]);
  } catch (error) {
    problems.push(`${where}: frontmatter is not valid YAML (quote values containing a colon): ${error.message.split("\n")[0]}`);
    return null;
  }
  if (meta === null || typeof meta !== "object" || Array.isArray(meta)) {
    problems.push(`${where}: frontmatter must be a set of fields`);
    return null;
  }
  for (const field of Object.keys(meta)) {
    if (!ENTRY_FIELDS.has(field)) problems.push(`${where}: unknown field "${field}"`);
  }
  if (!isSingleLine(meta.title)) problems.push(`${where}: "title" is required and must be one line`);
  if (!KINDS.includes(meta.kind)) {
    problems.push(`${where}: "kind" must be one of ${KINDS.join(", ")}`);
  }
  if (!isSingleLine(meta.summary)) {
    problems.push(`${where}: "summary" is required and must be one line`);
  } else if (meta.summary.length > MAX_SUMMARY_LENGTH) {
    problems.push(`${where}: "summary" is over ${MAX_SUMMARY_LENGTH} characters`);
  }
  const body = (match[2] ?? "").trim();
  if (body === "") problems.push(`${where}: the body is empty`);
  checkTex([meta.title, meta.summary, body].filter((text) => typeof text === "string").join("\n"), where, problems);
  const prose = stripCodeAndMath(body);
  checkCitations(prose, where, bibKeys, problems);
  return {
    id,
    title: meta.title,
    kind: meta.kind,
    summary: meta.summary,
    tags: checkTags(meta.tags, where, problems),
    edges: checkEdges(meta.edges, id, where, bibKeys, problems),
    links: collectLinks(prose, where, problems),
    body,
  };
}

export function loadCorpus(root) {
  const problems = [];
  const bibPath = join(root, "references.bib");
  let bibKeys = new Set();
  if (!existsSync(bibPath)) problems.push("references.bib: file is missing");
  else if (!lstatSync(bibPath).isFile()) problems.push("references.bib: must be a regular file, not a link");
  else {
    const bibliography = readFileSync(bibPath, "utf8");
    bibKeys = parseBibKeys(bibliography, problems);
    checkTex(bibliography, "references.bib", problems);
  }

  const entries = new Map();
  const entriesDir = join(root, "entries");
  if (!existsSync(entriesDir)) {
    problems.push("entries/: folder is missing");
    return { entries, problems };
  }
  for (const item of readdirSync(entriesDir, { withFileTypes: true })) {
    if (IGNORED_FILES.has(item.name)) continue;
    if (!item.isFile() || !item.name.endsWith(".md")) {
      problems.push(`entries/${item.name}: entries/ holds only .md files, with no subfolders`);
      continue;
    }
    const entry = parseEntry(item.name, readFileSync(join(entriesDir, item.name), "utf8"), bibKeys, problems);
    if (entry) entries.set(entry.id, entry);
  }
  return { entries, problems };
}

// Follows edges with the given label from an entry, returning every ID reached.
export function closure(entries, startId, label) {
  const reached = new Set();
  const pending = [startId];
  while (pending.length > 0) {
    for (const edge of entries.get(pending.pop())?.edges ?? []) {
      if (edge.label !== label || edge.to === startId || reached.has(edge.to)) continue;
      reached.add(edge.to);
      pending.push(edge.to);
    }
  }
  return [...reached].sort();
}

export function buildIndex(entries) {
  const incoming = new Map();
  const backlinks = new Map();
  const wanted = new Map();
  const addTo = (map, key, value) => map.set(key, [...(map.get(key) ?? []), value]);

  for (const entry of entries.values()) {
    for (const { to, label, note } of entry.edges) {
      addTo(incoming, to, note === undefined ? { from: entry.id, label } : { from: entry.id, label, note });
    }
    for (const link of entry.links) addTo(backlinks, link, entry.id);
    for (const target of [...entry.edges.map((edge) => edge.to), ...entry.links]) {
      if (!entries.has(target)) wanted.set(target, new Set([...(wanted.get(target) ?? []), entry.id]));
    }
  }

  const byFrom = (a, b) => a.from.localeCompare(b.from) || a.label.localeCompare(b.label);
  const summaries = [...entries.values()]
    .sort((a, b) => a.id.localeCompare(b.id))
    .map(({ body, ...entry }) => ({
      ...entry,
      incoming: (incoming.get(entry.id) ?? []).sort(byFrom),
      backlinks: (backlinks.get(entry.id) ?? []).sort(),
      // Open entries that this theorem rests on through chains of "uses" edges.
      conditionalOn:
        entry.kind === "theorem"
          ? closure(entries, entry.id, "uses").filter((id) => ["problem", "idea"].includes(entries.get(id)?.kind))
          : [],
      refutedBy: (incoming.get(entry.id) ?? [])
        .filter((edge) => edge.label === "refutes")
        .map((edge) => edge.from)
        .sort(),
    }));

  return {
    entries: summaries,
    wanted: [...wanted.entries()]
      .map(([id, referencedBy]) => ({ id, referencedBy: [...referencedBy].sort() }))
      .sort((a, b) => a.id.localeCompare(b.id)),
  };
}

function reportProblems(problems) {
  for (const problem of [...problems].sort()) console.error(problem);
}

function runValidate({ entries, problems }) {
  reportProblems(problems);
  const { wanted } = buildIndex(entries);
  for (const { id, referencedBy } of wanted) {
    console.log(`wanted: ${id} (referenced by ${referencedBy.join(", ")})`);
  }
  console.log(`${entries.size} entries, ${wanted.length} wanted, ${problems.length} problems`);
  return problems.length === 0 ? 0 : 1;
}

function runIndex({ entries, problems }) {
  reportProblems(problems);
  if (problems.length > 0) return 1;
  console.log(JSON.stringify(buildIndex(entries), null, 2));
  return 0;
}

function describe(entries, id) {
  const entry = entries.get(id);
  return entry ? `${id} [${entry.kind}]: ${entry.summary}` : `${id} [not written yet]`;
}

function runShow({ entries }, id) {
  const index = buildIndex(entries);
  const entry = entries.get(id);
  if (!entry) {
    const want = index.wanted.find((item) => item.id === id);
    console.error(want ? `${id} is not written yet; referenced by ${want.referencedBy.join(", ")}` : `no entry "${id}"`);
    return 1;
  }
  const summary = index.entries.find((item) => item.id === id);
  console.log(`# ${entry.title}\nid: ${id}\nkind: ${entry.kind}`);
  if (entry.tags.length > 0) console.log(`tags: ${entry.tags.join(", ")}`);
  if (summary.conditionalOn.length > 0) console.log(`conditional on: ${summary.conditionalOn.join(", ")}`);
  if (summary.refutedBy.length > 0) console.log(`refuted by: ${summary.refutedBy.join(", ")}`);
  console.log(`\n${entry.summary}\n\n${entry.body}`);
  const withNote = (note) => (note ? ` (${note})` : "");
  if (entry.edges.length > 0) {
    console.log("\n## Outgoing edges");
    for (const { to, label, note } of entry.edges) console.log(`- ${label} -> ${describe(entries, to)}${withNote(note)}`);
  }
  if (summary.incoming.length > 0) {
    console.log("\n## Incoming edges");
    for (const { from, label, note } of summary.incoming) console.log(`- ${describe(entries, from)} -> ${label}${withNote(note)}`);
  }
  return 0;
}

function runClosure({ entries }, id, label) {
  if (!LABELS.includes(label)) {
    console.error(`unknown label "${label}"; use one of ${LABELS.join(", ")}`);
    return 1;
  }
  if (!entries.has(id)) {
    console.error(`no entry "${id}"`);
    return 1;
  }
  for (const reached of closure(entries, id, label)) console.log(describe(entries, reached));
  return 0;
}

const USAGE = `usage:
  kb.mjs validate              check every entry; lists wanted entries
  kb.mjs index                 print the whole graph as JSON
  kb.mjs show <id>             print an entry with its neighbours' summaries
  kb.mjs closure <id> [label]  list everything reached by following one label (default: uses)`;

function main(argv) {
  const [command, ...args] = argv;
  const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
  const corpus = loadCorpus(root);
  switch (command) {
    case "validate":
      return runValidate(corpus);
    case "index":
      return runIndex(corpus);
    case "show":
      if (args.length === 1) return runShow(corpus, args[0]);
      break;
    case "closure":
      if (args.length === 1 || args.length === 2) return runClosure(corpus, args[0], args[1] ?? "uses");
      break;
  }
  console.error(USAGE);
  return 2;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  process.exitCode = main(process.argv.slice(2));
}
