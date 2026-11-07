#!/usr/bin/env node
// Builds the static site published at anablab.org/kb from the entries in this repo.
// Usage: node build.mjs [--root <repo>] [--out <dir>]
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { copyFileSync, cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation, forceX, forceY } from "d3-force";
import katex from "katex";
import { Marked } from "marked";
import { KINDS, LABELS, buildIndex, loadCorpus } from "../scripts/kb.mjs";

const BASE = "/kb";
const REPO_URL = "https://github.com/AnabLab/kb";
const SITE_DIR = dirname(fileURLToPath(import.meta.url));

const KIND_NAMES = { definition: "Definition", theorem: "Theorem", problem: "Open problem", idea: "Idea", note: "Note" };
const KIND_PLURALS = { definition: "Definitions", theorem: "Theorems", problem: "Open problems", idea: "Ideas", note: "Notes" };
// How to read an arrow from its source, and from its target.
const LABEL_WORDS = {
  uses: ["Uses", "Used by"],
  implies: ["Implies", "Implied by"],
  generalizes: ["Generalizes", "Generalized by"],
  addresses: ["Addresses", "Addressed by"],
  refutes: ["Refutes", "Refuted by"],
  "analogous-to": ["Analogous to", "Analogous from"],
  "motivated-by": ["Motivated by", "Motivated"],
};
// These relate ideas rather than assert logic, so the graph draws them dashed.
const SOFT_LABELS = new Set(["analogous-to", "motivated-by"]);

const escapeHtml = (text) =>
  String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

const renderMath = (tex, displayMode) => katex.renderToString(tex, { displayMode, throwOnError: false });

// A readable approximation of LaTeX, for places that can't show rendered math.
const GREEK = { alpha: "α", beta: "β", gamma: "γ", delta: "δ", ell: "ℓ", lambda: "λ", mu: "μ", nu: "ν", pi: "π", rho: "ρ", sigma: "σ", tau: "τ", phi: "φ", chi: "χ", Gamma: "Γ", Pi: "Π", Sigma: "Σ" };
const plainText = (text) =>
  text
    .replace(/\$\$?([^$]+)\$\$?/g, (_, tex) => tex.replace(/\\([a-zA-Z]+)\s*/g, (__, name) => GREEK[name] ?? "").replace(/[{}]/g, ""))
    .replace(/[*`]/g, "");

const TEX_ACCENTS = { "'": "\u0301", "`": "\u0300", "^": "\u0302", '"': "\u0308", "~": "\u0303", "=": "\u0304", ".": "\u0307" };
const cleanBibText = (text) =>
  text
    .replace(/\\(['`^"~=.])\{?([a-zA-Z])\}?/g, (_, accent, letter) => (letter + TEX_ACCENTS[accent]).normalize("NFC"))
    .replace(/[{}]/g, "")
    .replace(/--/g, "–")
    .replace(/\s+/g, " ")
    .trim();

function parseBib(text) {
  const references = new Map();
  for (const [, type, key, rest] of text.matchAll(/@(\w+)\s*\{\s*([^,\s]+)\s*,([\s\S]*?)(?=\n\s*@\w+\s*\{|$)/g)) {
    if (["comment", "string", "preamble"].includes(type.toLowerCase())) continue;
    const fields = {};
    for (const [, name, braced, quoted] of rest.matchAll(/(\w+)\s*=\s*(?:\{((?:[^{}]|\{[^{}]*\})*)\}|"([^"]*)")/g)) {
      fields[name.toLowerCase()] = cleanBibText(braced ?? quoted);
    }
    references.set(key, fields);
  }
  return references;
}

function citationLabel(reference) {
  const family = (author) => (author.includes(",") ? author.split(",")[0] : author.split(" ").at(-1)).trim();
  const authors = (reference?.author ?? "").split(/\s+and\s+/).filter(Boolean).map(family);
  const names = authors.length > 2 ? `${authors[0]} et al.` : authors.join(" and ");
  return [names, reference?.year].filter(Boolean).join(" ");
}

function renderReference(key, reference, inline) {
  const venue = [reference.journal ?? reference.booktitle ?? reference.publisher, reference.volume, reference.year && `(${reference.year})`, reference.pages]
    .filter(Boolean)
    .join(" ");
  const url = reference.url ?? (reference.doi && `https://doi.org/${reference.doi}`);
  const link = /^https?:\/\//.test(url ?? "") ? ` <a href="${escapeHtml(url)}">Link</a>` : "";
  return `<li id="ref-${escapeHtml(key)}">${escapeHtml(reference.author ?? "")}. <cite>${inline(reference.title ?? key)}</cite>. ${escapeHtml(venue)}.${link}</li>`;
}

// Renders entry Markdown. Raw HTML and unsafe links are neutralized, because entries come from pull requests.
function makeMarkdown(index, references) {
  const written = new Set(index.entries.map((entry) => entry.id));
  return new Marked({
    gfm: true,
    extensions: [
      {
        name: "mathBlock",
        level: "block",
        start: (src) => src.indexOf("$$"),
        tokenizer(src) {
          const match = /^\$\$([\s\S]+?)\$\$(?:\n+|$)/.exec(src);
          if (match) return { type: "mathBlock", raw: match[0], tex: match[1] };
        },
        renderer: (token) => renderMath(token.tex, true),
      },
      {
        name: "mathInline",
        level: "inline",
        start: (src) => src.indexOf("$"),
        tokenizer(src) {
          const match = /^\$\$([^$]+)\$\$|^\$([^$\n]+)\$/.exec(src);
          if (match) return { type: "mathInline", raw: match[0], tex: match[1] ?? match[2], display: match[1] !== undefined };
        },
        renderer: (token) => renderMath(token.tex, token.display),
      },
      {
        name: "citation",
        level: "inline",
        start: (src) => src.indexOf("[@"),
        tokenizer(src) {
          const match = /^\[@([^\],\s]+)\s*,\s*([^\]]+)\]/.exec(src);
          if (match) return { type: "citation", raw: match[0], key: match[1], location: match[2].trim() };
        },
        renderer: (token) => `<a class="citation" href="#ref-${escapeHtml(token.key)}">[${escapeHtml(citationLabel(references.get(token.key)))}, ${escapeHtml(token.location)}]</a>`,
      },
    ],
    renderer: {
      html: (token) => escapeHtml(token.raw ?? token.text),
      image: (token) => escapeHtml(token.text),
      link(token) {
        const text = this.parser.parseInline(token.tokens);
        const entry = /^([a-z0-9-]+)\.md(#.*)?$/.exec(token.href);
        if (entry && written.has(entry[1])) return `<a href="${BASE}/${entry[1]}/${escapeHtml(entry[2] ?? "")}">${text}</a>`;
        if (entry) return `<a class="wanted-link" href="${BASE}/#wanted-${entry[1]}" title="Not written yet">${text}</a>`;
        return /^(https?:|mailto:)/i.test(token.href) ? `<a href="${escapeHtml(token.href)}">${text}</a>` : text;
      },
    },
  });
}

function lastChanged(root) {
  const dates = new Map();
  try {
    const log = execFileSync("git", ["log", "--format=%x00%cI", "--name-only", "--", "entries"], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], maxBuffer: 2 ** 28 });
    for (const commit of log.split("\0").filter(Boolean)) {
      const [date, ...paths] = commit.trim().split("\n");
      for (const path of paths) {
        const match = /^entries\/([^/]+)\.md$/.exec(path.trim());
        if (match && !dates.has(match[1])) dates.set(match[1], date.slice(0, 10));
      }
    }
  } catch {
    // Without git history, entries just don't show dates.
  }
  return dates;
}

const NODE_RADIUS = { min: 6.5, max: 13 };
const LABEL_LENGTH = 34;
const CHAR_WIDTH = 7;
const shortTitle = (title) => (title.length > LABEL_LENGTH ? `${title.slice(0, LABEL_LENGTH - 1)}…` : title);
// Written-out names for entries that don't exist yet.
const wantedName = (id) => id.charAt(0).toUpperCase() + id.slice(1).replaceAll("-", " ");

// Lays out the graph once, at build time, so that it is stable and needs no work in the browser.
const GRAPH_ASPECT = 1.1;

export function layoutGraph(index) {
  const arrowTargets = new Set(index.entries.flatMap((entry) => entry.edges.map((edge) => edge.to)));
  const nodes = [
    ...index.entries.map((entry) => ({ id: entry.id, kind: entry.kind, title: plainText(entry.title), refuted: entry.refutedBy.length > 0, degree: entry.edges.length + entry.incoming.length })),
    // Only arrows form the graph, so an entry that is only mentioned in a body has no node.
    ...index.wanted.filter((item) => arrowTargets.has(item.id)).map((item) => ({ id: item.id, kind: "wanted", title: wantedName(item.id), degree: 0 })),
  ];
  const byId = new Map(nodes.map((node) => [node.id, node]));
  const edges = index.entries.flatMap((entry) => entry.edges.filter((edge) => byId.has(edge.to)).map((edge) => ({ from: entry.id, to: edge.to, label: edge.label })));
  for (const edge of edges) if (byId.get(edge.to).kind === "wanted") byId.get(edge.to).degree += 1;
  const maxDegree = Math.max(1, ...nodes.map((node) => node.degree));
  for (const node of nodes) node.r = NODE_RADIUS.min + (NODE_RADIUS.max - NODE_RADIUS.min) * Math.sqrt(node.degree / maxDegree);

  const links = edges.map((edge) => ({ source: edge.from, target: edge.to }));
  forceSimulation(nodes)
    .force("link", forceLink(links).id((node) => node.id).distance(105).strength(0.35))
    .force("charge", forceManyBody().strength(-560))
    .force("collide", forceCollide().radius((node) => node.r + 24))
    .force("x", forceX().strength(0.045))
    .force("y", forceY().strength(0.07))
    .force("center", forceCenter())
    .stop()
    .tick(600);

  // Stretch the layout towards the shape of its card, within limits.
  const spanOf = (values) => Math.max(1, Math.max(...values) - Math.min(...values));
  if (nodes.length > 2) {
    const stretch = Math.min(1.5, Math.max(0.75, Math.sqrt((GRAPH_ASPECT * spanOf(nodes.map((node) => node.y))) / spanOf(nodes.map((node) => node.x)))));
    for (const node of nodes) {
      node.x *= stretch;
      node.y /= stretch;
    }
  }

  // Text keeps its size on screen, so a graph drawn smaller than its layout has relatively larger labels.
  const unit = nodes.length === 0 ? 1 : Math.max(1, spanOf(nodes.map((node) => node.x)) / 700, spanOf(nodes.map((node) => node.y)) / 520);
  const lineHeight = 18 * unit;

  // Label the most connected nodes first, trying each side, and skipping any label that would still collide.
  const placed = [];
  for (const node of [...nodes].sort((a, b) => b.degree - a.degree || a.id.localeCompare(b.id))) {
    const width = shortTitle(node.title).length * CHAR_WIDTH * unit;
    const gap = node.r + 6;
    const baseline = 4 * unit;
    const candidates = [
      { x: gap, y: baseline, anchor: "start", box: { left: node.x + gap - 2, right: node.x + gap + width, top: node.y - lineHeight / 2, bottom: node.y + lineHeight / 2 } },
      { x: -gap, y: baseline, anchor: "end", box: { left: node.x - gap - width, right: node.x - gap + 2, top: node.y - lineHeight / 2, bottom: node.y + lineHeight / 2 } },
      { x: 0, y: gap + 10 * unit, anchor: "middle", box: { left: node.x - width / 2, right: node.x + width / 2, top: node.y + gap - 2, bottom: node.y + gap + lineHeight - 2 } },
      { x: 0, y: -gap - 2, anchor: "middle", box: { left: node.x - width / 2, right: node.x + width / 2, top: node.y - gap - lineHeight + 2, bottom: node.y - gap + 2 } },
    ];
    const overlaps = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    const isClear = ({ box }) =>
      !placed.some((other) => overlaps(box, other)) &&
      !nodes.some((other) => other !== node && overlaps(box, { left: other.x - other.r, right: other.x + other.r, top: other.y - other.r, bottom: other.y + other.r }));
    const choice = candidates.find(isClear);
    node.label = choice ?? candidates[0];
    node.labelled = node.kind !== "wanted" && Boolean(choice);
    if (node.labelled) placed.push(choice.box);
  }

  const padding = 48;
  const labelBoxes = nodes.filter((node) => node.labelled).map((node) => node.label.box);
  const xs = [...nodes.flatMap((node) => [node.x - node.r, node.x + node.r]), ...labelBoxes.flatMap((box) => [box.left, box.right])];
  const ys = [...nodes.flatMap((node) => [node.y - node.r - 6, node.y + node.r + 6]), ...labelBoxes.flatMap((box) => [box.top, box.bottom])];
  const viewBox = nodes.length === 0 ? [0, 0, 800, 400] : [Math.min(...xs) - padding, Math.min(...ys) - padding, Math.max(...xs) - Math.min(...xs) + 2 * padding, Math.max(...ys) - Math.min(...ys) + 2 * padding];
  return { nodes, edges, byId, viewBox: viewBox.map((value) => Number(value.toFixed(1))) };
}

function nodeMark(kind, r) {
  const n = (value) => Number(value.toFixed(2));
  if (kind === "definition") return `<rect class="mark" x="${n(-r * 0.9)}" y="${n(-r * 0.9)}" width="${n(r * 1.8)}" height="${n(r * 1.8)}" rx="2"/>`;
  if (kind === "problem") return `<path class="mark" d="M0 ${n(-r * 1.25)}L${n(r * 1.25)} 0L0 ${n(r * 1.25)}L${n(-r * 1.25)} 0Z"/>`;
  if (kind === "idea") return `<path class="mark" d="M0 ${n(-r * 1.25)}L${n(r * 1.15)} ${n(r * 0.85)}L${n(-r * 1.15)} ${n(r * 0.85)}Z"/>`;
  return `<circle class="mark" r="${n(kind === "note" ? r * 0.8 : r)}"/>`;
}

const kindIcon = (kind) => `<svg class="kind-icon kind-${kind}" viewBox="-10 -10 20 20" aria-hidden="true">${nodeMark(kind, 7.5)}</svg>`;

function edgePath(edge, graph, seen) {
  const from = graph.byId.get(edge.from);
  const to = graph.byId.get(edge.to);
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const length = Math.hypot(dx, dy) || 1;
  // Bend arrows that share a pair of nodes, so that they don't overlap.
  const pair = [edge.from, edge.to].sort().join(" ");
  const count = seen.get(pair) ?? 0;
  seen.set(pair, count + 1);
  const hasReverse = graph.edges.some((other) => other.from === edge.to && other.to === edge.from);
  const bend = hasReverse || count > 0 ? 18 * (count + 1) * (edge.from < edge.to ? 1 : -1) : 0;
  const controlX = (from.x + to.x) / 2 - (dy / length) * bend;
  const controlY = (from.y + to.y) / 2 + (dx / length) * bend;
  const towards = (node, gap) => {
    const offsetX = controlX - node.x;
    const offsetY = controlY - node.y;
    const distance = Math.hypot(offsetX, offsetY) || 1;
    return [node.x + (offsetX / distance) * gap, node.y + (offsetY / distance) * gap];
  };
  const [startX, startY] = towards(from, from.r + 2);
  const [endX, endY] = towards(to, to.r + 7);
  const n = (value) => value.toFixed(1);
  return {
    d: `M${n(startX)} ${n(startY)}Q${n(controlX)} ${n(controlY)} ${n(endX)} ${n(endY)}`,
    labelX: n((startX + 2 * controlX + endX) / 4),
    labelY: n((startY + 2 * controlY + endY) / 4),
  };
}

function renderGraph(graph) {
  const seen = new Map();
  const edges = graph.edges
    .map((edge) => {
      const path = edgePath(edge, graph, seen);
      const style = edge.label === "refutes" ? " is-refutes" : SOFT_LABELS.has(edge.label) ? " is-soft" : "";
      const marker = edge.label === "refutes" ? "arrow-refutes" : "arrow";
      return `<g class="edge${style}" data-from="${edge.from}" data-to="${edge.to}" data-label="${edge.label}"><title>${escapeHtml(`${graph.byId.get(edge.from).title}: ${edge.label}: ${graph.byId.get(edge.to).title}`)}</title><path class="edge-hit" d="${path.d}"/><path class="edge-line" d="${path.d}" marker-end="url(#${marker})"/><text x="${path.labelX}" y="${path.labelY}">${edge.label}</text></g>`;
    })
    .join("");
  const nodes = graph.nodes
    .map((node) => {
      const href = node.kind === "wanted" ? `${BASE}/#wanted-${node.id}` : `${BASE}/${node.id}/`;
      const kindName = node.kind === "wanted" ? "Not written yet" : KIND_NAMES[node.kind];
      const classes = ["node", `kind-${node.kind}`, node.refuted && "is-refuted", node.labelled && "is-labelled"].filter(Boolean).join(" ");
      return `<a class="${classes}" href="${href}" data-id="${node.id}" data-kind="${node.kind}" data-title="${escapeHtml(node.title)}" data-kind-name="${escapeHtml(kindName)}" aria-label="${escapeHtml(`${kindName}: ${node.title}`)}" transform="translate(${node.x.toFixed(1)} ${node.y.toFixed(1)})"><circle class="hit" r="${Math.max(14, node.r + 5).toFixed(1)}"/>${nodeMark(node.kind, node.r)}<text x="${node.label.x.toFixed(1)}" y="${node.label.y.toFixed(1)}" text-anchor="${node.label.anchor}">${escapeHtml(shortTitle(node.title))}</text></a>`;
    })
    .join("");
  return `<svg class="graph" viewBox="${graph.viewBox.join(" ")}" role="group" aria-label="Graph of entries and the labelled arrows between them. The table view lists the same entries.">
<defs>
<marker id="arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 .8L7 4L0 7.2Z"/></marker>
<marker id="arrow-refutes" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 .8L7 4L0 7.2Z"/></marker>
</defs>
<g class="viewport"><g class="edges">${edges}</g><g class="nodes">${nodes}</g></g></svg>`;
}

function statusNotes(entry, titleOf, inline) {
  const list = (ids) => ids.map((id) => `<a href="${BASE}/${id}/">${inline(titleOf(id))}</a>`).join(", ");
  const notes = [];
  const contested = entry.tags.includes("contested");
  if (entry.refutedBy.length > 0) {
    notes.push(`<p class="status status-critical"><span aria-hidden="true">✕</span> <strong>${contested ? "Disputed" : "Refuted"}.</strong> See ${list(entry.refutedBy)}.</p>`);
  } else if (contested) {
    notes.push(`<p class="status status-warning"><span aria-hidden="true">!</span> <strong>Contested.</strong> This claim is under genuine dispute.</p>`);
  }
  if (entry.conditionalOn.length > 0) {
    notes.push(`<p class="status status-warning"><span aria-hidden="true">!</span> <strong>Conditional.</strong> Rests on ${list(entry.conditionalOn)}, which ${entry.conditionalOn.length === 1 ? "is" : "are"} open.</p>`);
  }
  return notes.join("");
}

function relationGroups(entry, titleOf, inline, isWritten) {
  const link = (id, note) => {
    const name = isWritten(id) ? `<a href="${BASE}/${id}/">${inline(titleOf(id))}</a>` : `<a class="wanted-link" href="${BASE}/#wanted-${id}" title="Not written yet">${escapeHtml(wantedName(id))}</a>`;
    return `<li>${name}${note ? `<span class="relation-note"> ${inline(note)}</span>` : ""}</li>`;
  };
  const groups = [];
  for (const label of LABELS) {
    const outgoing = entry.edges.filter((edge) => edge.label === label);
    if (outgoing.length > 0) groups.push(`<div><h3>${LABEL_WORDS[label][0]}</h3><ul>${outgoing.map((edge) => link(edge.to, edge.note)).join("")}</ul></div>`);
  }
  for (const label of LABELS) {
    const incoming = entry.incoming.filter((edge) => edge.label === label);
    if (incoming.length > 0) groups.push(`<div><h3>${LABEL_WORDS[label][1]}</h3><ul>${incoming.map((edge) => link(edge.from, edge.note)).join("")}</ul></div>`);
  }
  return groups.join("");
}

// Changes with the file, so that browsers pick up new versions.
const assetVersion = (file) => createHash("sha256").update(readFileSync(join(SITE_DIR, file))).digest("hex").slice(0, 10);

function page({ title, description, body, bodyClass = "" }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="stylesheet" href="${BASE}/assets/katex/katex.min.css">
<link rel="stylesheet" href="${BASE}/assets/style.css?v=${assetVersion("style.css")}">
<link rel="icon" href="${BASE}/assets/icon.svg" type="image/svg+xml">
<link rel="alternate" type="application/json" href="${BASE}/index.json" title="The whole graph as JSON">
</head>
<body class="${bodyClass}">
<header class="site-header">
<a class="brand" href="${BASE}/">AnabLab <span>knowledgebase</span></a>
<nav><a href="${REPO_URL}/blob/main/INSTRUCTIONS.md">Contribute</a><a href="${REPO_URL}/discussions">Discussions</a><a href="${REPO_URL}">GitHub</a></nav>
</header>
${body}
<footer class="site-footer">
<p>Every entry has been reviewed to check that it is accurately labelled, which is not the same as true. Entries marked as ideas are speculative and may be wrong.</p>
<p>For agents: <a href="${BASE}/index.json">index.json</a> holds the whole graph, and each entry is at <code>${BASE}/&lt;id&gt;.md</code>. Content is <a href="${REPO_URL}/blob/main/LICENSE">CC BY 4.0</a>.</p>
</footer>
</body>
</html>
`;
}

function renderDashboard(index, graph, dates, inline, titleOf, isWritten) {
  const { entries, wanted } = index;
  const arrowCount = entries.reduce((sum, entry) => sum + entry.edges.length, 0);
  const counts = Object.fromEntries(KINDS.map((kind) => [kind, entries.filter((entry) => entry.kind === kind).length]));
  const tile = (label, value, icon = "") => `<div class="tile"><dt>${icon}${label}</dt><dd>${value}</dd></div>`;
  const tiles = [
    tile("Entries", entries.length),
    ...["theorem", "problem", "idea", "definition", "note"].map((kind) => tile(KIND_PLURALS[kind], counts[kind], kindIcon(kind))),
    tile("Arrows", arrowCount),
    tile("Wanted", wanted.length),
  ].join("");

  if (entries.length === 0) {
    return `<main class="dashboard"><dl class="tiles">${tiles}</dl>
<section class="empty"><h2>The first entries are on their way</h2><p>This graph will fill in as reviewed entries reach the knowledgebase. To take part, tell your AI assistant to read <a href="${REPO_URL}/blob/main/INSTRUCTIONS.md">the instructions</a> and follow them.</p></section></main>`;
  }

  const item = (entry) => `<li><a href="${BASE}/${entry.id}/">${inline(entry.title)}</a><p>${inline(entry.summary)}</p></li>`;
  const byConnections = (a, b) => b.edges.length + b.incoming.length - (a.edges.length + a.incoming.length) || a.id.localeCompare(b.id);
  const problems = entries.filter((entry) => entry.kind === "problem").sort(byConnections);
  const ideas = entries.filter((entry) => entry.kind === "idea" && entry.refutedBy.length === 0).sort(byConnections);
  const recent = entries.filter((entry) => dates.has(entry.id)).sort((a, b) => dates.get(b.id).localeCompare(dates.get(a.id)) || a.id.localeCompare(b.id));
  const listSection = (id, heading, items, renderItem, empty) => `<section class="list" id="${id}"><h2>${heading}</h2>${items.length > 0 ? `<ul>${items.slice(0, 8).map(renderItem).join("")}</ul>` : `<p class="muted">${empty}</p>`}</section>`;

  const kindChips = [...KINDS.map((kind) => [kind, KIND_PLURALS[kind], kindIcon(kind)]), ...(graph.nodes.some((node) => node.kind === "wanted") ? [["wanted", "Not written yet", kindIcon("wanted")]] : [])]
    .map(([kind, name, icon]) => `<label class="chip"><input type="checkbox" data-filter-kind="${kind}" checked>${icon}${name}</label>`)
    .join("");
  const labelChips = LABELS.filter((label) => graph.edges.some((edge) => edge.label === label))
    .map((label) => `<label class="chip chip-edge"><input type="checkbox" data-filter-label="${label}" checked><span class="edge-key${label === "refutes" ? " is-refutes" : SOFT_LABELS.has(label) ? " is-soft" : ""}"></span>${label}</label>`)
    .join("");

  const templates = entries
    .map(
      (entry) => `<template id="panel-${entry.id}"><p class="panel-kind">${kindIcon(entry.kind)}${KIND_NAMES[entry.kind]}</p><h2><a href="${BASE}/${entry.id}/">${inline(entry.title)}</a></h2><p class="panel-summary">${inline(entry.summary)}</p>${statusNotes(entry, titleOf, inline)}<div class="relations">${relationGroups(entry, titleOf, inline, isWritten)}</div><p><a class="button" href="${BASE}/${entry.id}/">Open entry</a></p></template>`,
    )
    .join("");
  const wantedTemplates = wanted
    .map((item_) => `<template id="panel-${item_.id}"><p class="panel-kind">${kindIcon("wanted")}Not written yet</p><h2>${escapeHtml(wantedName(item_.id))}</h2><div class="relations"><div><h3>Referenced by</h3><ul>${item_.referencedBy.map((id) => `<li><a href="${BASE}/${id}/">${inline(titleOf(id))}</a></li>`).join("")}</ul></div></div></template>`)
    .join("");

  const rows = entries
    .map((entry) => {
      const search = escapeHtml(`${entry.id} ${plainText(entry.title)} ${plainText(entry.summary)} ${entry.tags.join(" ")}`.toLowerCase());
      return `<tr data-id="${entry.id}" data-kind="${entry.kind}" data-search="${search}"><td><a href="${BASE}/${entry.id}/">${inline(entry.title)}</a><p>${inline(entry.summary)}</p></td><td class="nowrap">${kindIcon(entry.kind)}${KIND_NAMES[entry.kind]}</td><td class="num">${entry.edges.length}</td><td class="num">${entry.incoming.length}</td><td class="nowrap num">${dates.get(entry.id) ?? ""}</td></tr>`;
    })
    .join("");

  return `<main class="dashboard" data-explorer>
<dl class="tiles">${tiles}</dl>
<section class="explorer">
<form class="filters" role="search">
<input type="search" data-filter-search placeholder="Search entries" aria-label="Search entries">
<fieldset><legend>Kinds</legend>${kindChips}</fieldset>
<fieldset><legend>Arrows</legend>${labelChips}</fieldset>
<p class="filter-count" data-filter-count aria-live="polite"></p>
</form>
<div class="explorer-body">
<figure class="graph-card">
${renderGraph(graph)}
<div class="graph-controls"><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="out" aria-label="Zoom out">−</button><button type="button" data-zoom="fit">Fit</button></div>
<p class="graph-hint">Drag to move around. Hold Ctrl and scroll to zoom.</p>
<div class="graph-tooltip" data-tooltip hidden></div>
</figure>
<aside class="panel" data-panel aria-live="polite"><div data-panel-default><h2>Explore the graph</h2><p>Each shape is an entry, and each arrow says how one entry relates to another. Select a node to see its summary and connections here.</p><p class="muted">Solid arrows are logical, dashed arrows relate ideas, and red arrows refute their target. A red outline marks a refuted entry, and a dashed circle marks an entry not written yet.</p></div><div data-panel-content hidden></div></aside>
</div>
<details class="table-view"><summary>Table view: every entry, with these filters applied</summary>
<div class="table-scroll"><table><thead><tr><th>Entry</th><th>Kind</th><th class="num">Arrows out</th><th class="num">Arrows in</th><th class="num">Updated</th></tr></thead><tbody>${rows}</tbody></table></div>
</details>
</section>
<div class="lists">
${listSection("open-problems", "Open problems", problems, item, "None yet.")}
${listSection("active-ideas", "Active ideas", ideas, item, "None yet.")}
${listSection("recent", "Recently updated", recent, (entry) => `<li><a href="${BASE}/${entry.id}/">${inline(entry.title)}</a><p>${kindIcon(entry.kind)}${KIND_NAMES[entry.kind]} · ${dates.get(entry.id)}</p></li>`, "No history yet.")}
<section class="list" id="wanted"><h2>Wanted entries</h2>${wanted.length > 0 ? `<ul>${wanted.map((want) => `<li id="wanted-${want.id}">${escapeHtml(wantedName(want.id))}<p>Referenced by ${want.referencedBy.map((id) => `<a href="${BASE}/${id}/">${inline(titleOf(id))}</a>`).join(", ")}</p></li>`).join("")}</ul>` : `<p class="muted">Nothing is waiting to be written.</p>`}</section>
</div>
${templates}${wantedTemplates}
<script src="${BASE}/assets/client.js?v=${assetVersion("client.js")}" defer></script>
</main>`;
}

function renderEntry(entry, source, body, dates, inline, titleOf, isWritten, references) {
  const citedIn = (text) => [...text.matchAll(/\[@([^\],\s]+)\s*,/g)].map((match) => match[1]);
  const cited = [...new Set([...citedIn(source), ...entry.edges.flatMap((edge) => citedIn(edge.note ?? ""))])];
  const tags = entry.tags.length > 0 ? `<ul class="tags">${entry.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>` : "";
  const relations = relationGroups(entry, titleOf, inline, isWritten);
  const referenceList = cited.filter((key) => references.has(key)).map((key) => renderReference(key, references.get(key), inline)).join("");
  const updated = dates.has(entry.id) ? ` Last changed ${dates.get(entry.id)}.` : "";
  return `<main class="entry">
<article>
<p class="entry-kind">${kindIcon(entry.kind)}${KIND_NAMES[entry.kind]}</p>
<h1>${inline(entry.title)}</h1>
<p class="entry-summary">${inline(entry.summary)}</p>
${statusNotes(entry, titleOf, inline)}
<div class="prose">${body}</div>
${referenceList ? `<section class="references"><h2>References</h2><ol>${referenceList}</ol></section>` : ""}
</article>
<aside class="entry-side">
${relations ? `<h2>Connections</h2><div class="relations">${relations}</div>` : `<p class="muted">No connections yet.</p>`}
${tags}
<p class="entry-meta"><a href="${REPO_URL}/blob/main/entries/${entry.id}.md">Source on GitHub</a> · <a href="${BASE}/${entry.id}.md">Markdown</a><br>ID: <code>${entry.id}</code>.${updated}</p>
</aside>
</main>`;
}

const HEADERS = `${BASE}/*
  Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; base-uri 'none'; form-action 'none'; frame-ancestors 'none'
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

${BASE}/index.json
  Access-Control-Allow-Origin: *

${BASE}/assets/katex/*
  Cache-Control: public, max-age=31536000, immutable
`;

const ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#104281"/><path d="M9 22L16 9l7 13" fill="none" stroke="#cde2fb" stroke-width="2"/><circle cx="16" cy="9" r="3.5" fill="#fff"/><circle cx="9" cy="22" r="3.5" fill="#fff"/><circle cx="23" cy="22" r="3.5" fill="#fff"/></svg>`;

export function build({ root = resolve(SITE_DIR, ".."), out = join(SITE_DIR, "dist") } = {}) {
  const { entries: corpus, problems } = loadCorpus(root);
  if (problems.length > 0) throw new Error(`the corpus has problems:\n${problems.join("\n")}`);
  const index = buildIndex(corpus);
  const references = parseBib(readFileSync(join(root, "references.bib"), "utf8"));
  const dates = lastChanged(root);
  const markdown = makeMarkdown(index, references);
  const inline = (text) => markdown.parseInline(text);
  const titleOf = (id) => corpus.get(id)?.title ?? wantedName(id);
  const isWritten = (id) => corpus.has(id);
  const graph = layoutGraph(index);

  // URLs map directly onto files: /kb/x/ is dist/kb/x/index.html.
  const dist = out;
  rmSync(dist, { recursive: true, force: true });
  out = join(dist, BASE);
  mkdirSync(join(out, "assets/katex/fonts"), { recursive: true });
  for (const file of ["style.css", "client.js"]) copyFileSync(join(SITE_DIR, file), join(out, "assets", file));
  const katexDir = dirname(fileURLToPath(import.meta.resolve("katex/dist/katex.min.css")));
  copyFileSync(join(katexDir, "katex.min.css"), join(out, "assets/katex/katex.min.css"));
  copyFileSync(join(katexDir, "..", "LICENSE"), join(out, "assets/katex/LICENSE"));
  for (const font of readdirSync(join(katexDir, "fonts")).filter((name) => name.endsWith(".woff2"))) {
    copyFileSync(join(katexDir, "fonts", font), join(out, "assets/katex/fonts", font));
  }
  writeFileSync(join(out, "assets/icon.svg"), ICON);
  writeFileSync(join(dist, "_headers"), HEADERS);
  cpSync(join(root, "references.bib"), join(out, "references.bib"));
  writeFileSync(join(out, "index.json"), `${JSON.stringify(index, null, 2)}\n`);

  writeFileSync(
    join(out, "index.html"),
    page({
      title: "AnabLab knowledgebase",
      description: "A graph of known mathematics and new ideas in anabelian geometry, written and reviewed by humans and AI agents.",
      body: renderDashboard(index, graph, dates, inline, titleOf, isWritten),
    }),
  );
  writeFileSync(join(out, "404.html"), page({ title: "Not found · AnabLab knowledgebase", description: "This page doesn't exist.", body: `<main class="entry-missing"><h1>This entry doesn't exist</h1><p>It may not have been written yet. <a href="${BASE}/">Go to the knowledgebase</a>, or see its <a href="${BASE}/#wanted">wanted entries</a>.</p></main>` }));

  for (const entry of index.entries) {
    mkdirSync(join(out, entry.id));
    const source = corpus.get(entry.id);
    writeFileSync(
      join(out, entry.id, "index.html"),
      page({
        title: `${plainText(entry.title)} · AnabLab knowledgebase`,
        description: plainText(entry.summary),
        body: renderEntry(entry, source.body, markdown.parse(source.body), dates, inline, titleOf, isWritten, references),
        bodyClass: "entry-page",
      }),
    );
    copyFileSync(join(root, "entries", `${entry.id}.md`), join(out, `${entry.id}.md`));
  }
  return { entries: index.entries.length, wanted: index.wanted.length };
}

function argument(name) {
  const position = process.argv.indexOf(name);
  return position > -1 ? resolve(process.argv[position + 1]) : undefined;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const { entries, wanted } = build({ root: argument("--root"), out: argument("--out") });
  console.log(`built ${entries} entries, ${wanted} wanted`);
}
