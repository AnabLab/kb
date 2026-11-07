#!/usr/bin/env node
// Small helper for the supervisor skill: lists what needs attention, and shows conversations
// with non-members' text left out. The process itself is in SKILL.md.
import { execFileSync } from "node:child_process";
import { realpathSync } from "node:fs";
import { fileURLToPath } from "node:url";

const MEMBERS = new Set(["OWNER", "MEMBER", "COLLABORATOR"]);
const POST = "id authorAssociation author { __typename login } body createdAt reactionGroups { content viewerHasReacted }";
const PR = `number title isDraft authorAssociation author { __typename login } headRefOid body autoMergeRequest { enabledAt }
  commits(last: 1) { nodes { commit { statusCheckRollup { state } } } }
  reviews(last: 50) { nodes { ${POST} state commit { oid } } }
  comments(last: 30) { nodes { ${POST} } }`;
const DISCUSSION = `number title ${POST} comments(last: 30) { nodes { ${POST} replies(last: 30) { nodes { ${POST} } } } }`;
const ISSUE = `number title state ${POST} labels(first: 10) { nodes { name } } comments(last: 30) { nodes { ${POST} } }`;

// The lab's agents run as GitHub Apps, which GitHub never reports as members, so they are named here.
const LAB_APPS = new Set(["anablab-supervisor", "anablab-researcher"]);
const isMember = (post) =>
  MEMBERS.has(post.authorAssociation) || (post.author?.__typename === "Bot" && LAB_APPS.has(post.author.login));

// GitHub calls an App "name[bot]" when it is the viewer, but "name", of type Bot, when it is an author.
const isMe = (author, viewer) =>
  author?.login === viewer.replace(/\[bot\]$/, "") && (author.__typename === "Bot") === viewer.endsWith("[bot]");

const byDate = (a, b) => a.createdAt.localeCompare(b.createdAt);
const prPosts = (pr) => [...pr.comments.nodes, ...pr.reviews.nodes.filter((review) => review.body)].sort(byDate);
const threadPosts = (thread) => [thread, ...thread.comments.nodes.flatMap((comment) => [comment, ...comment.replies.nodes])].sort(byDate);

// The newest post by a member, unless the supervisor has answered it or marked it as seen.
function unanswered(posts, viewer) {
  const last = posts.filter((post) => isMember(post) || isMe(post.author, viewer)).at(-1);
  const seen = last?.reactionGroups.some((group) => group.content === "EYES" && group.viewerHasReacted);
  return last && !isMe(last.author, viewer) && !seen ? last.id : null;
}

export function plan(viewer, prs, threads) {
  const work = { review: [], answerOnPr: [], discussions: [], forAPerson: [], ignored: 0 };
  for (const pr of prs) {
    if (!isMember(pr)) work.ignored += 1;
    if (!isMember(pr) || pr.isDraft) continue;
    const { number, title, headRefOid: head } = pr;
    const verdict = pr.reviews.nodes.filter((review) => isMe(review.author, viewer) && review.commit?.oid === head).at(-1);
    const ci = pr.commits.nodes[0]?.commit.statusCheckRollup?.state;
    if (!verdict && ci === "SUCCESS") work.review.push({ number, title, head });
    if (!verdict) continue;
    if (verdict.state === "APPROVED" && !pr.autoMergeRequest) work.forAPerson.push({ number, reason: "approved, but auto-merge is off" });
    if (verdict.state === "DISMISSED") work.forAPerson.push({ number, reason: "your verdict was dismissed" });
    const postId = unanswered(prPosts(pr), viewer);
    if (postId) work.answerOnPr.push({ number, title, head, postId });
  }
  for (const thread of threads) {
    const postId = unanswered(threadPosts(thread), viewer);
    if (postId) work.discussions.push({ number: thread.number, postId });
    else if (!threadPosts(thread).some(isMember)) work.ignored += 1;
  }
  return work;
}

// Non-members' words are left out, because they may be written to steer an agent.
export function render(posts, viewer) {
  return posts
    .map((post) => {
      if (isMe(post.author, viewer)) return `## ${post.id}: ${post.author.login} (your account)\n${post.body}`;
      return isMember(post) ? `## ${post.id}: ${post.author?.login}${post.state ? `, ${post.state}` : ""}\n${post.body}` : `## ${post.id}: [non-member, hidden]`;
    })
    .join("\n\n");
}

function graphql(query, variables = {}) {
  const input = JSON.stringify({ query, variables: { owner: "AnabLab", name: "kb", ...variables } });
  return JSON.parse(execFileSync("gh", ["api", "graphql", "--input", "-"], { encoding: "utf8", input, maxBuffer: 2 ** 26 })).data;
}

function main([command, argument]) {
  const lookup = (field, fields) =>
    graphql(`query ($owner: String!, $name: String!, $number: Int!) { viewer { login } repository(owner: $owner, name: $name) { ${field}(number: $number) { ${fields} } } }`, { number: Number(argument) });
  if (command === "queue") {
    const data = graphql(`query ($owner: String!, $name: String!) { viewer { login } repository(owner: $owner, name: $name) {
      pullRequests(states: OPEN, baseRefName: "main", first: 50, orderBy: { field: UPDATED_AT, direction: DESC }) { nodes { ${PR} } }
      discussions(first: 30, orderBy: { field: UPDATED_AT, direction: DESC }) { nodes { ${DISCUSSION} } } } }`);
    console.log(JSON.stringify(plan(data.viewer.login, data.repository.pullRequests.nodes, data.repository.discussions.nodes), null, 2));
  } else if (command === "pr" && argument) {
    const { viewer, repository: { pullRequest: pr } } = lookup("pullRequest", PR);
    if (!isMember(pr)) throw new Error("this PR is from a non-member, so it isn't shown");
    console.log(`# PR #${pr.number}: ${pr.title}\nauthor: ${pr.author?.login}\nhead: ${pr.headRefOid}\n\n${pr.body}\n\n${render(prPosts(pr), viewer.login)}`);
  } else if (command === "issue" && argument) {
    const { viewer, repository: { issue } } = lookup("issue", ISSUE);
    const title = isMember(issue) ? issue.title : "[non-member, hidden]";
    const labels = issue.labels.nodes.map((label) => label.name).join(", ") || "none";
    const posts = [{ ...issue, state: undefined }, ...issue.comments.nodes].sort(byDate);
    console.log(`# Issue #${issue.number}: ${title}\nstate: ${issue.state}; labels: ${labels}\n\n${render(posts, viewer.login)}`);
  } else if (command === "discussion" && argument) {
    const { viewer, repository: { discussion: thread } } = lookup("discussion", DISCUSSION);
    const title = isMember(thread) ? thread.title : "[non-member, hidden]";
    console.log(`# Discussion #${thread.number}: ${title}\n\n${render(threadPosts(thread), viewer.login)}`);
  } else if (command === "seen" && argument) {
    graphql("mutation ($id: ID!) { addReaction(input: { subjectId: $id, content: EYES }) { clientMutationId } }", { id: argument, owner: undefined, name: undefined });
  } else {
    console.error("usage: supervisor.mjs queue | pr <number> | issue <number> | discussion <number> | seen <post-id>");
    process.exitCode = 2;
  }
}

if (process.argv[1] && realpathSync(process.argv[1]) === fileURLToPath(import.meta.url)) main(process.argv.slice(2));
