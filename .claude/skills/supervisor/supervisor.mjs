#!/usr/bin/env node
// Helper for the supervisor skill: finds work, shows it safely, and posts verdicts.
// Instructions for using it are in SKILL.md, and for running it in SETUP.md.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, realpathSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const OWNER = "AnabLab";
const NAME = "kb";
const REPO = `${OWNER}/${NAME}`;
const BASE_BRANCH = "main";
const REQUIRED_CHECK = "validate";
const MEMBER_ASSOCIATIONS = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
// The supervisor approves mathematical content only; anything else goes to a maintainer.
const APPROVABLE_PATH = /^(entries\/[^/]+\.md|references\.bib)$/;
const REVIEW_EVENTS = { approve: "APPROVE", "request-changes": "REQUEST_CHANGES", comment: "COMMENT" };
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");
const WORK_DIR = join(ROOT, ".supervisor");

// Marks the supervisor's posts, because it may share an account with a person.
export const MARKER = "<sub>supervisor agent</sub>";

const POST = "id authorAssociation author { __typename login } body createdAt reactionGroups { content viewerHasReacted }";
const PR_FIELDS = `
  number title state isDraft baseRefName authorAssociation author { __typename login } headRefOid body changedFiles
  autoMergeRequest { enabledAt }
  timelineItems(last: 20, itemTypes: [AUTO_MERGE_ENABLED_EVENT, AUTO_MERGE_DISABLED_EVENT]) { nodes {
    __typename
    ... on AutoMergeEnabledEvent { createdAt }
    ... on AutoMergeDisabledEvent { createdAt }
  } }
  files(first: 100) { nodes { path changeType } }
  commits(last: 1) { nodes { commit { statusCheckRollup { contexts(first: 50) { nodes {
    ... on CheckRun { name status conclusion }
  } } } } } }
  reviews(last: 50) { nodes { ${POST} state commit { oid } } }
  reviewThreads(last: 30) { nodes { isResolved comments(last: 5) { nodes { ${POST} path line } } } }
  comments(last: 20) { nodes { ${POST} } }`;
const DISCUSSION_FIELDS = `
  number title ${POST}
  comments(last: 20) { nodes { ${POST} replies(last: 20) { nodes { ${POST} } } } }`;

// GitHub calls an App "name[bot]" when it is the viewer, but "name", of type Bot, when it is an author.
function isAccount(author, viewer) {
  if (!author) return false;
  if (viewer.endsWith("[bot]")) return author.__typename === "Bot" && `${author.login}[bot]` === viewer;
  return author.__typename !== "Bot" && author.login === viewer;
}

const isMember = (post) => MEMBER_ASSOCIATIONS.has(post.authorAssociation);
const isOwnPost = (post, viewer) => isAccount(post.author, viewer) && (post.body ?? "").includes(MARKER);
const isKnownPost = (post, viewer) => isMember(post) || isOwnPost(post, viewer);
const isSeen = (post) => (post.reactionGroups ?? []).some((group) => group.content === "EYES" && group.viewerHasReacted);
const byCreatedAt = (a, b) => a.createdAt.localeCompare(b.createdAt);

export function ciState(pr) {
  const contexts = pr.commits.nodes[0]?.commit.statusCheckRollup?.contexts.nodes ?? [];
  const runs = contexts.filter((context) => context.name === REQUIRED_CHECK);
  if (runs.length === 0 || runs.some((run) => run.status !== "COMPLETED")) return "pending";
  return runs.every((run) => run.conclusion === "SUCCESS") ? "success" : "failure";
}

export function approvalBlockers(pr, viewer) {
  const blockers = [];
  const files = pr.files.nodes;
  if (isAccount(pr.author, viewer)) blockers.push("GitHub does not let an account approve its own PR");
  if (pr.baseRefName !== BASE_BRANCH) blockers.push(`the PR targets ${pr.baseRefName}, not ${BASE_BRANCH}`);
  if (pr.isDraft) blockers.push("the PR is a draft");
  if (pr.changedFiles > files.length) blockers.push("the PR changes too many files to check");
  const outside = files.filter((file) => !APPROVABLE_PATH.test(file.path)).map((file) => file.path);
  if (outside.length > 0) blockers.push(`only a maintainer can approve changes to: ${outside.join(", ")}`);
  const removed = files.filter((file) => ["DELETED", "RENAMED"].includes(file.changeType)).map((file) => file.path);
  if (removed.length > 0) blockers.push(`entries must not be deleted or renamed: ${removed.join(", ")}`);
  return blockers;
}

function verdictsAtHead(pr, viewer) {
  return pr.reviews.nodes.filter((review) => isOwnPost(review, viewer) && review.commit?.oid === pr.headRefOid);
}

// The supervisor's standing decision on the current commit. Comments don't change it.
function decisiveVerdict(pr, viewer) {
  return verdictsAtHead(pr, viewer)
    .filter((review) => ["APPROVED", "CHANGES_REQUESTED"].includes(review.state))
    .at(-1);
}

function autoMergeTurnedOff(pr) {
  return pr.timelineItems.nodes.at(-1)?.__typename === "AutoMergeDisabledEvent";
}

// Auto-merge is retried only if nothing has happened to it since the approval. Any event means
// that it was turned on, or that someone turned it off, which must not be undone.
export function needsAutoMergeRetry(pr, viewer) {
  if (pr.autoMergeRequest) return false;
  const verdict = decisiveVerdict(pr, viewer);
  if (verdict?.state !== "APPROVED") return false;
  return !pr.timelineItems.nodes.some((event) => event.createdAt >= verdict.createdAt);
}

function latestPost(posts, viewer) {
  return posts.filter((post) => isKnownPost(post, viewer)).at(-1) ?? null;
}

// The newest post by a member or the supervisor, if the supervisor still has to deal with it.
function pendingPost(posts, viewer) {
  const last = latestPost(posts, viewer);
  return last && !isOwnPost(last, viewer) && !isSeen(last) ? last : null;
}

export function prPosts(pr) {
  const inline = pr.reviewThreads.nodes.flatMap((thread) => thread.comments.nodes);
  const reviews = pr.reviews.nodes.filter((review) => review.body);
  return [...pr.comments.nodes, ...reviews, ...inline].sort(byCreatedAt);
}

export function threadPosts(discussion) {
  const { comments, ...root } = discussion;
  const posts = [root];
  for (const { replies, ...comment } of comments.nodes) {
    posts.push(comment);
    for (const reply of replies.nodes) posts.push({ ...reply, replyToId: comment.id });
  }
  return posts.sort(byCreatedAt);
}

function discussionTitle(discussion, viewer) {
  return isKnownPost(discussion, viewer) ? discussion.title : "[hidden: title from a non-member]";
}

export function planWork(viewer, prs, discussions) {
  const plan = { viewer, automerge: [], review: [], prComments: [], discussions: [], waiting: [], ignored: [] };

  for (const pr of prs) {
    const { number, title, headRefOid: head } = pr;
    const wait = (reason) => plan.waiting.push({ pr: number, reason });
    if (!isMember(pr)) {
      plan.ignored.push({ pr: number, association: pr.authorAssociation });
      continue;
    }
    if (pr.baseRefName !== BASE_BRANCH) {
      wait(`targets-${pr.baseRefName}`);
      continue;
    }
    if (pr.isDraft) {
      wait("draft");
      continue;
    }
    const verdicts = verdictsAtHead(pr, viewer);
    if (verdicts.length === 0) {
      const ci = ciState(pr);
      if (ci === "success") {
        const blockers = approvalBlockers(pr, viewer);
        plan.review.push({ number, title, author: pr.author?.login, head, canApprove: blockers.length === 0, blockers });
      } else {
        wait(`ci-${ci}`);
      }
      continue;
    }
    if (verdicts.every((review) => review.state === "DISMISSED")) {
      // Someone or something withdrew the verdict at this commit, so don't simply repeat it.
      wait("verdict-dismissed");
    } else if (decisiveVerdict(pr, viewer)?.state === "APPROVED") {
      if (needsAutoMergeRetry(pr, viewer)) plan.automerge.push({ number, head });
      else if (!pr.autoMergeRequest) wait("auto-merge-turned-off");
      else if (pr.reviewThreads.nodes.some((thread) => !thread.isResolved)) wait("unresolved-threads");
    }
    const post = pendingPost(prPosts(pr), viewer);
    if (post) plan.prComments.push({ number, title, head, commentId: post.id, author: post.author?.login });
  }

  for (const discussion of discussions) {
    const posts = threadPosts(discussion);
    const last = pendingPost(posts, viewer);
    if (last) {
      plan.discussions.push({ number: discussion.number, title: discussionTitle(discussion, viewer), lastId: last.id, author: last.author?.login });
    } else if (!posts.some((post) => isKnownPost(post, viewer))) {
      plan.ignored.push({ discussion: discussion.number, association: discussion.authorAssociation });
    }
  }
  return plan;
}

// Non-members' words are left out entirely, because they may be written to steer an agent.
function renderPost(post, viewer) {
  if (isOwnPost(post, viewer)) return `you, in an earlier pass:\n${post.body}`;
  return isMember(post) ? `${post.author?.login ?? "ghost"} (${post.authorAssociation}):\n${post.body}` : "[hidden: from a non-member]";
}

export function renderThread(discussion, viewer) {
  const sections = [`# Discussion #${discussion.number}: ${discussionTitle(discussion, viewer)}`];
  for (const post of threadPosts(discussion)) {
    const target = post.replyToId ?? (post.id === discussion.id ? null : post.id);
    const ids = target ? `id: ${post.id}; to reply here use --to ${target}` : `id: ${post.id}`;
    sections.push(`## ${ids}\n${renderPost(post, viewer)}`);
  }
  return sections.join("\n\n");
}

export function renderPr(pr, viewer, contents) {
  const blockers = approvalBlockers(pr, viewer);
  const sections = [
    `# PR #${pr.number}: ${pr.title}`,
    [
      `author: ${pr.author?.login} (${pr.authorAssociation})`,
      `base: ${pr.baseRefName}`,
      `head: ${pr.headRefOid}`,
      `CI: ${ciState(pr)}`,
      `auto-merge: ${pr.autoMergeRequest ? "on" : "off"}`,
      `can approve: ${blockers.length === 0 ? "yes" : `no; ${blockers.join("; ")}`}`,
      "files:",
      ...pr.files.nodes.map((file) => `  ${file.changeType} ${file.path}`),
    ].join("\n"),
    `## Description\n${pr.body || "(none)"}`,
  ];
  for (const review of pr.reviews.nodes.filter((item) => isKnownPost(item, viewer))) {
    const heading = `## Review ${review.id}, ${review.state}, at ${review.commit?.oid?.slice(0, 7)}`;
    sections.push(`${heading}\n${review.body ? renderPost(review, viewer) : `${review.author?.login}: (no text)`}`);
  }
  for (const thread of pr.reviewThreads.nodes) {
    const status = thread.isResolved ? "resolved" : "unresolved";
    for (const comment of thread.comments.nodes) {
      sections.push(`## Inline comment ${comment.id}, ${status}, on ${comment.path}:${comment.line ?? "?"}\n${renderPost(comment, viewer)}`);
    }
  }
  for (const comment of pr.comments.nodes) sections.push(`## Comment ${comment.id}\n${renderPost(comment, viewer)}`);
  for (const [path, text] of contents) sections.push(`## ${path} at ${pr.headRefOid.slice(0, 7)}\n${text}`);
  return sections.join("\n\n");
}

function fail(message) {
  throw new Error(message);
}

function git(...args) {
  return execFileSync("git", args, { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
}

function gh(args, input) {
  return execFileSync("gh", args, { cwd: ROOT, encoding: "utf8", input, stdio: ["pipe", "pipe", "pipe"], maxBuffer: 2 ** 26 });
}

function graphql(query, variables = {}) {
  return JSON.parse(gh(["api", "graphql", "--input", "-"], JSON.stringify({ query, variables }))).data;
}

function assertCleanMain() {
  if (git("rev-parse", "--abbrev-ref", "HEAD") !== BASE_BRANCH) fail(`the supervisor runs only on ${BASE_BRANCH}; switch this clone to ${BASE_BRANCH}`);
  if (git("status", "--porcelain") !== "") fail(`this clone has local changes; the supervisor needs a clean ${BASE_BRANCH}`);
}

function syncMain() {
  git("fetch", "--quiet", "origin", BASE_BRANCH);
  git("merge", "--ff-only", "--quiet", `origin/${BASE_BRANCH}`);
}

function fetchPr(number) {
  const data = graphql(
    `query ($owner: String!, $name: String!, $number: Int!) {
      viewer { login }
      repository(owner: $owner, name: $name) { pullRequest(number: $number) { ${PR_FIELDS} } }
    }`,
    { owner: OWNER, name: NAME, number },
  );
  return { viewer: data.viewer.login, pr: data.repository.pullRequest };
}

function fetchDiscussion(number) {
  const data = graphql(
    `query ($owner: String!, $name: String!, $number: Int!) {
      viewer { login }
      repository(owner: $owner, name: $name) { discussion(number: $number) { ${DISCUSSION_FIELDS} } }
    }`,
    { owner: OWNER, name: NAME, number },
  );
  return { viewer: data.viewer.login, discussion: data.repository.discussion };
}

// Reading records the newest post, so that the supervisor can't answer without seeing what has
// arrived since, or post something it hasn't read at all.
const readRecord = (kind, number) => join(WORK_DIR, `read-${kind}-${number}`);

function recordRead(kind, number, posts, viewer) {
  mkdirSync(WORK_DIR, { recursive: true });
  writeFileSync(readRecord(kind, number), latestPost(posts, viewer)?.id ?? "none");
}

function assertNothingNew(kind, number, posts, viewer) {
  const record = readRecord(kind, number);
  if (!existsSync(record)) fail(`read ${kind} ${number} before posting to it`);
  if (readFileSync(record, "utf8") !== (latestPost(posts, viewer)?.id ?? "none")) {
    fail(`something new was posted to ${kind} ${number} after you read it; read it again`);
  }
}

// Posted text can only come from the supervisor's own folder, so that an agent steered by
// something it read can't be made to publish other files.
function readBody(file) {
  const inWorkDir = existsSync(file) && existsSync(WORK_DIR) && dirname(realpathSync(file)) === realpathSync(WORK_DIR);
  if (!inWorkDir || !statSync(file).isFile()) fail(`posted text must be a file directly inside ${WORK_DIR}`);
  const body = readFileSync(file, "utf8").trim();
  if (body === "") fail(`${file} is empty`);
  return `${body}\n\n${MARKER}`;
}

function enableAutoMerge(number, sha) {
  gh(["pr", "merge", String(number), "-R", REPO, "--auto", "--squash", "--match-head-commit", sha]);
}

function assertReviewable(pr, sha) {
  if (pr.state !== "OPEN") fail(`PR #${pr.number} is ${pr.state}`);
  if (!isMember(pr)) fail(`PR #${pr.number} is from a non-member`);
  if (pr.headRefOid !== sha) fail(`the head moved to ${pr.headRefOid}; review the new commit first`);
}

function assertApprovable(pr, viewer) {
  const blockers = approvalBlockers(pr, viewer);
  if (ciState(pr) !== "success") blockers.push(`the ${REQUIRED_CHECK} check has not passed`);
  if (blockers.length > 0) fail(`cannot approve: ${blockers.join("; ")}; post a comment instead`);
}

function runQueue() {
  syncMain();
  const data = graphql(
    `query ($owner: String!, $name: String!) {
      viewer { login }
      repository(owner: $owner, name: $name) {
        pullRequests(states: OPEN, first: 50, orderBy: { field: UPDATED_AT, direction: DESC }) { nodes { ${PR_FIELDS} } }
        discussions(first: 30, orderBy: { field: UPDATED_AT, direction: DESC }) { nodes { ${DISCUSSION_FIELDS} } }
      }
    }`,
    { owner: OWNER, name: NAME },
  );
  const { pullRequests, discussions } = data.repository;
  console.log(JSON.stringify(planWork(data.viewer.login, pullRequests.nodes, discussions.nodes), null, 2));
}

function runPr(number) {
  const { viewer, pr } = fetchPr(number);
  if (!isMember(pr)) fail(`PR #${number} is from a non-member, so it isn't shown`);
  const contents = [];
  for (const { path, changeType } of pr.files.nodes) {
    if (changeType === "DELETED" || !/^entries\/.*\.md$/.test(path)) continue;
    const url = `repos/${REPO}/contents/${encodeURI(path)}?ref=${pr.headRefOid}`;
    contents.push([path, gh(["api", url, "-H", "Accept: application/vnd.github.raw"])]);
  }
  recordRead("pr", number, prPosts(pr), viewer);
  console.log(renderPr(pr, viewer, contents));
}

function runReview(number, sha, verdict, file) {
  const event = REVIEW_EVENTS[verdict];
  if (!event) fail(`the verdict must be one of ${Object.keys(REVIEW_EVENTS).join(", ")}`);
  const body = readBody(file);
  const { viewer, pr } = fetchPr(number);
  assertReviewable(pr, sha);
  assertNothingNew("pr", number, prPosts(pr), viewer);
  if (verdict === "request-changes" && isAccount(pr.author, viewer)) {
    fail("GitHub does not let an account request changes on its own PR; use comment");
  }
  if (verdict === "approve") assertApprovable(pr, viewer);
  gh(["api", `repos/${REPO}/pulls/${number}/reviews`, "--method", "POST", "--input", "-"], JSON.stringify({ commit_id: sha, event, body }));
  rmSync(file);
  rmSync(readRecord("pr", number));
  console.log(`posted ${verdict} on PR #${number} at ${sha.slice(0, 7)}`);
  if (verdict !== "approve") return;
  if (autoMergeTurnedOff(pr)) {
    console.log("auto-merge was turned off on this PR, so it stays off; a maintainer can merge it");
  } else {
    enableAutoMerge(number, sha);
    console.log("auto-merge is on");
  }
}

function runAutomerge(number, sha) {
  const { viewer, pr } = fetchPr(number);
  assertReviewable(pr, sha);
  assertApprovable(pr, viewer);
  if (!needsAutoMergeRetry(pr, viewer)) fail(`PR #${number} has no approval at ${sha.slice(0, 7)} waiting for auto-merge, so nothing was changed`);
  enableAutoMerge(number, sha);
  console.log(`auto-merge is on for PR #${number}`);
}

function runThread(number) {
  const { viewer, discussion } = fetchDiscussion(number);
  recordRead("discussion", number, threadPosts(discussion), viewer);
  console.log(renderThread(discussion, viewer));
}

function runReply(number, file, replyToId) {
  const body = readBody(file);
  const { viewer, discussion } = fetchDiscussion(number);
  assertNothingNew("discussion", number, threadPosts(discussion), viewer);
  const data = graphql(
    `mutation ($discussionId: ID!, $replyToId: ID, $body: String!) {
      addDiscussionComment(input: { discussionId: $discussionId, replyToId: $replyToId, body: $body }) { comment { url } }
    }`,
    { discussionId: discussion.id, replyToId: replyToId ?? null, body },
  );
  rmSync(file);
  rmSync(readRecord("discussion", number));
  console.log(data.addDiscussionComment.comment.url);
}

function runSeen(id) {
  graphql(
    `mutation ($id: ID!) {
      addReaction(input: { subjectId: $id, content: EYES }) { clientMutationId }
    }`,
    { id },
  );
  console.log(`marked ${id} as seen`);
}

const USAGE = `usage:
  supervisor.mjs queue                                     sync main and list what is waiting
  supervisor.mjs pr <number>                               show a PR and its changed entries
  supervisor.mjs review <number> <head> <verdict> <file>   post approve, request-changes or comment
  supervisor.mjs automerge <number> <head>                 retry auto-merge on a PR you approved
  supervisor.mjs thread <number>                           show a discussion
  supervisor.mjs reply <number> <file> [--to <id>]         post to a discussion
  supervisor.mjs seen <id>                                 mark a post as dealt with

Posted text is read from <file>, which must be directly inside .supervisor/ and is deleted once posted.`;

function commandFor(command, args) {
  const number = Number(args[0]);
  const hasNumber = Number.isInteger(number) && number > 0;
  if (command === "queue" && args.length === 0) return runQueue;
  if (command === "pr" && args.length === 1 && hasNumber) return () => runPr(number);
  if (command === "review" && args.length === 4 && hasNumber) return () => runReview(number, args[1], args[2], args[3]);
  if (command === "automerge" && args.length === 2 && hasNumber) return () => runAutomerge(number, args[1]);
  if (command === "thread" && args.length === 1 && hasNumber) return () => runThread(number);
  if (command === "reply" && args.length === 2 && hasNumber) return () => runReply(number, args[1]);
  if (command === "reply" && args.length === 4 && hasNumber && args[2] === "--to") return () => runReply(number, args[1], args[3]);
  if (command === "seen" && args.length === 1) return () => runSeen(args[0]);
  return null;
}

function main([command, ...args]) {
  const run = commandFor(command, args);
  if (!run) {
    console.error(USAGE);
    process.exitCode = 2;
    return;
  }
  assertCleanMain();
  run();
}

if (process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error((error.stderr || error.message).trim());
    process.exitCode = 1;
  }
}
