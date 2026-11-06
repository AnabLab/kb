#!/usr/bin/env node
// Helper for the supervisor skill: finds work, shows it safely, and posts verdicts.
// Instructions for using it are in SKILL.md.
import { execFileSync } from "node:child_process";
import { readFileSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const OWNER = "AnabLab";
const NAME = "kb";
const REPO = `${OWNER}/${NAME}`;
const REQUIRED_CHECK = "validate";
const MEMBER_ASSOCIATIONS = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
// The supervisor approves mathematical content only; anything else goes to a maintainer.
const APPROVABLE_PATH = /^(entries\/[^/]+\.md|references\.bib)$/;
const REVIEW_EVENTS = { approve: "APPROVE", "request-changes": "REQUEST_CHANGES", comment: "COMMENT" };
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../../..");

// Marks the supervisor's posts, because it may share an account with a person.
export const MARKER = "<sub>supervisor agent</sub>";

const REACTIONS = "reactionGroups { content viewerHasReacted }";
const POST = `id authorAssociation author { login } body createdAt ${REACTIONS}`;
const PR_FIELDS = `
  number title state isDraft authorAssociation author { login } headRefOid body changedFiles
  autoMergeRequest { enabledAt }
  files(first: 100) { nodes { path changeType } }
  commits(last: 1) { nodes { commit { statusCheckRollup { contexts(first: 50) { nodes {
    ... on CheckRun { name status conclusion }
  } } } } } }
  reviews(last: 50) { nodes { author { login } authorAssociation state body commit { oid } } }
  comments(last: 20) { nodes { ${POST} } }`;
const DISCUSSION_FIELDS = `
  number title ${POST}
  comments(last: 20) { nodes { ${POST} replies(last: 20) { nodes { ${POST} } } } }`;

// GitHub calls an App "name[bot]" when it is the viewer, but "name" when it is an author.
const accountName = (login) => login?.replace(/\[bot\]$/, "");
const isAccount = (author, viewer) => accountName(author?.login) === accountName(viewer);
const isMember = (post) => MEMBER_ASSOCIATIONS.has(post.authorAssociation);
const isOwnPost = (post, viewer) => isAccount(post.author, viewer) && (post.body ?? "").includes(MARKER);
const isSeen = (post) => (post.reactionGroups ?? []).some((group) => group.content === "EYES" && group.viewerHasReacted);

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
  if (pr.isDraft) blockers.push("the PR is a draft");
  if (pr.changedFiles > files.length) blockers.push("the PR changes too many files to check");
  const outside = files.filter((file) => !APPROVABLE_PATH.test(file.path)).map((file) => file.path);
  if (outside.length > 0) blockers.push(`only a maintainer can approve changes to: ${outside.join(", ")}`);
  const removed = files.filter((file) => ["DELETED", "RENAMED"].includes(file.changeType)).map((file) => file.path);
  if (removed.length > 0) blockers.push(`entries must not be deleted or renamed: ${removed.join(", ")}`);
  return blockers;
}

// The newest post by a member or the supervisor, if the supervisor still has to deal with it.
function pendingPost(posts, viewer) {
  const last = posts.filter((post) => isMember(post) || isOwnPost(post, viewer)).at(-1);
  return last && !isOwnPost(last, viewer) && !isSeen(last) ? last : null;
}

export function threadPosts(discussion) {
  const { comments, ...root } = discussion;
  const posts = [root];
  for (const { replies, ...comment } of comments.nodes) {
    posts.push(comment);
    for (const reply of replies.nodes) posts.push({ ...reply, replyToId: comment.id });
  }
  return posts.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

export function planWork(viewer, prs, discussions) {
  const plan = { viewer, automerge: [], review: [], prComments: [], discussions: [], waiting: [], ignored: [] };

  for (const pr of prs) {
    const { number, title, headRefOid: head } = pr;
    if (!isMember(pr)) {
      plan.ignored.push({ pr: number });
      continue;
    }
    if (pr.isDraft) {
      plan.waiting.push({ pr: number, reason: "draft" });
      continue;
    }
    const verdicts = pr.reviews.nodes.filter((item) => isOwnPost(item, viewer) && item.commit?.oid === head);
    if (verdicts.length === 0) {
      const ci = ciState(pr);
      if (ci === "success") {
        const blockers = approvalBlockers(pr, viewer);
        plan.review.push({ number, title, author: pr.author?.login, head, canApprove: blockers.length === 0, blockers });
      } else {
        plan.waiting.push({ pr: number, reason: `ci-${ci}` });
      }
      continue;
    }
    if (verdicts.some((item) => item.state === "APPROVED") && !pr.autoMergeRequest) {
      plan.automerge.push({ number, head });
    }
    const comment = pendingPost(pr.comments.nodes, viewer);
    if (comment) plan.prComments.push({ number, title, head, commentId: comment.id, author: comment.author?.login });
  }

  for (const discussion of discussions) {
    const posts = threadPosts(discussion);
    const last = pendingPost(posts, viewer);
    if (last) {
      plan.discussions.push({ number: discussion.number, title: discussion.title, lastId: last.id, author: last.author?.login });
    } else if (!posts.some((post) => isMember(post) || isOwnPost(post, viewer))) {
      plan.ignored.push({ discussion: discussion.number });
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
  const sections = [`# Discussion #${discussion.number}: ${discussion.title}`];
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
      `head: ${pr.headRefOid}`,
      `CI: ${ciState(pr)}`,
      `can approve: ${blockers.length === 0 ? "yes" : `no; ${blockers.join("; ")}`}`,
      "files:",
      ...pr.files.nodes.map((file) => `  ${file.changeType} ${file.path}`),
    ].join("\n"),
    `## Description\n${pr.body || "(none)"}`,
  ];
  for (const item of pr.reviews.nodes.filter((review) => isMember(review) || isOwnPost(review, viewer))) {
    sections.push(`## Review, ${item.state}, by ${item.author?.login}, at ${item.commit?.oid?.slice(0, 7)}\n${item.body || "(no text)"}`);
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

function syncMain() {
  if (git("rev-parse", "--abbrev-ref", "HEAD") !== "main") fail("the supervisor runs only on main; switch this clone to main");
  if (git("status", "--porcelain") !== "") fail("this clone has local changes; the supervisor needs a clean main");
  git("fetch", "--quiet", "origin", "main");
  git("merge", "--ff-only", "--quiet", "origin/main");
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

function runThread(number) {
  const { viewer, discussion } = fetchDiscussion(number);
  console.log(renderThread(discussion, viewer));
}

function readBody(file) {
  const body = readFileSync(resolve(file), "utf8").trim();
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
  console.log(renderPr(pr, viewer, contents));
}

function runReview(number, sha, verdict, file) {
  const event = REVIEW_EVENTS[verdict];
  if (!event) fail(`the verdict must be one of ${Object.keys(REVIEW_EVENTS).join(", ")}`);
  const body = readBody(file);
  const { viewer, pr } = fetchPr(number);
  assertReviewable(pr, sha);
  if (verdict === "request-changes" && isAccount(pr.author, viewer)) {
    fail("GitHub does not let an account request changes on its own PR; use comment");
  }
  if (verdict === "approve") {
    const blockers = approvalBlockers(pr, viewer);
    if (ciState(pr) !== "success") blockers.push(`the ${REQUIRED_CHECK} check has not passed`);
    if (blockers.length > 0) fail(`cannot approve: ${blockers.join("; ")}; post a comment instead`);
  }
  gh(["api", `repos/${REPO}/pulls/${number}/reviews`, "--method", "POST", "--input", "-"], JSON.stringify({ commit_id: sha, event, body }));
  rmSync(resolve(file));
  console.log(`posted ${verdict} on PR #${number} at ${sha.slice(0, 7)}`);
  if (verdict === "approve") {
    enableAutoMerge(number, sha);
    console.log("auto-merge is on");
  }
}

function runAutomerge(number, sha) {
  const { viewer, pr } = fetchPr(number);
  assertReviewable(pr, sha);
  const approved = pr.reviews.nodes.some((item) => isOwnPost(item, viewer) && item.commit?.oid === sha && item.state === "APPROVED");
  if (!approved) fail(`the supervisor has not approved ${sha.slice(0, 7)}`);
  enableAutoMerge(number, sha);
  console.log(`auto-merge is on for PR #${number}`);
}

function runReply(number, file, replyToId) {
  const body = readBody(file);
  const { discussion } = fetchDiscussion(number);
  const data = graphql(
    `mutation ($discussionId: ID!, $replyToId: ID, $body: String!) {
      addDiscussionComment(input: { discussionId: $discussionId, replyToId: $replyToId, body: $body }) { comment { url } }
    }`,
    { discussionId: discussion.id, replyToId: replyToId ?? null, body },
  );
  rmSync(resolve(file));
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

Posted text is read from <file>, which is deleted once the text is posted.`;

function main([command, ...args]) {
  const number = Number(args[0]);
  if (command === "queue" && args.length === 0) return runQueue();
  if (command === "pr" && args.length === 1 && number) return runPr(number);
  if (command === "review" && args.length === 4 && number) return runReview(number, args[1], args[2], args[3]);
  if (command === "automerge" && args.length === 2 && number) return runAutomerge(number, args[1]);
  if (command === "thread" && args.length === 1 && number) return runThread(number);
  if (command === "reply" && args.length === 2 && number) return runReply(number, args[1]);
  if (command === "reply" && args.length === 4 && number && args[2] === "--to") return runReply(number, args[1], args[3]);
  if (command === "seen" && args.length === 1) return runSeen(args[0]);
  console.error(USAGE);
  process.exitCode = 2;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    main(process.argv.slice(2));
  } catch (error) {
    console.error((error.stderr || error.message).trim());
    process.exitCode = 1;
  }
}
