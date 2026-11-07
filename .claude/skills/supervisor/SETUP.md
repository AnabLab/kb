# Running the supervisor

This is for the maintainer who runs the loop. The agent's own instructions are in `SKILL.md`.

## GitHub App

Running as a dedicated GitHub App lets the supervisor approve PRs from everyone, and keeps its approvals separate from any person's. On a personal account, it can only comment on that account's own PRs.

| Repository permission | Access |
|---|---|
| Contents | Read and write |
| Pull requests | Read and write |
| Discussions | Read and write |
| Checks | Read-only |
| Commit statuses | Read-only |

GitHub adds Metadata (read-only) automatically. Leave everything else at No access, including Workflows, Administration and all organization permissions. Turn the webhook off, install the App on this repo only, and don't add it to the ruleset's bypass list.

**Tokens:** installation tokens expire after an hour, so a fixed `GH_TOKEN` will stop working partway through a loop. Give the session a `gh` wrapper on `PATH` that gets a fresh token for each call. Keep only short-lived credentials where the supervisor runs, because it reads untrusted text.

**Members:** the supervisor only acts on OWNER, MEMBER and COLLABORATOR work, and an App token may not see private org membership. Each member should make theirs public:

```bash
gh api -X PUT orgs/AnabLab/public_members/<login>
```

## The clone

Use a dedicated clone, because the helper only runs on a clean `main`. The repo is public and the supervisor never pushes, so HTTPS needs no credentials.

```bash
git clone https://github.com/AnabLab/kb.git
cd kb
npm ci
```

The machine also needs `gh` 2.94 or later, Node 22 or later, and `poppler-utils`, which Claude Code uses to read PDFs by page when the supervisor checks citations.

## Permissions

Without this, `/loop` stalls: each wakeup asks `Use skill "supervisor"?` and waits. Add a local rule, in `.claude/settings.local.json` in the clone (git ignores it) or in your user settings:

```json
{ "permissions": { "allow": ["Skill(supervisor)"] } }
```

Don't put this in the repo's `.claude/settings.json`, because that would pre-approve the skill for every contributor.

The skill pre-approves the tools it needs for each pass. Anything else it tries stops for approval, which pauses the loop until someone answers.

## Starting it

Check the setup first. The first command should print `<app-slug>[bot]`. In the second, an open PR of yours should appear under `review`, not `ignored`.

```bash
gh api graphql -f query='{viewer{login}}'
.claude/skills/supervisor/supervisor.mjs queue
```

Then start `claude` in the clone and run:

```text
/loop /supervisor
```

Choose the session's model deliberately, because the skill uses whichever one the session has, and a weak one can post false mathematics.

The session must stay open. A loop expires after seven days, and a self-paced loop isn't restored on `--resume`, so run the command again to restart it.

## What to watch for

Each pass ends with one line, which also reports anything that needs a person:

| Reported | Meaning |
|---|---|
| `ignored` | Work from accounts it doesn't see as members. If this includes your own PRs, the App can't see your membership |
| `verdict-dismissed` | Its verdict at the current commit was dismissed, and it won't repeat it on its own |
| `auto-merge-turned-off` | Someone turned off auto-merge on a PR it approved, so a maintainer must merge it |
| `unresolved-threads` | An approved PR is waiting on an inline thread, possibly from a non-member |
| `targets-<branch>` | The PR doesn't target `main`, so it won't be reviewed |
