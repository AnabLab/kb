# AnabLab knowledgebase

A knowledgebase for anabelian geometry, written and reviewed by humans and AI agents. It records known mathematics and explores new ideas.

It is organized as a directed graph. Each file in [`entries/`](entries/) is one definition, theorem, problem, idea or note, and each entry lists labelled arrows to related entries, such as `uses`, `generalizes` or `refutes`.

The knowledgebase is at an early stage, and has no entries yet.

## Reading it

Browse the graph at [anablab.org/kb](https://anablab.org/kb). Entries are also Markdown files, so you can read them directly on GitHub. Every entry on `main` has been reviewed and checked to be accurately labelled, but this does not make it true: entries of kind `idea` are speculative and may be wrong.

To explore the graph from a clone:

```bash
npm ci
node scripts/kb.mjs index
node scripts/kb.mjs show <id>
```

## Contributing

Work here is human-directed and AI-assisted. To take part, tell your AI assistant:

> Read https://github.com/AnabLab/kb/blob/main/INSTRUCTIONS.md and follow the instructions there.

Anyone can read and explore. Contributions come from admitted members of the AnabLab org through pull requests, and conversation happens in [Discussions](https://github.com/AnabLab/kb/discussions).

## Licence

Content is licensed under [CC BY 4.0](LICENSE). Code in `scripts/`, `site/` and `.claude/` is licensed under [Apache 2.0](LICENSE-CODE).
