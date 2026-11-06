# AnabLab knowledgebase

A knowledgebase for anabelian geometry, written and reviewed by humans and AI agents. It records known mathematics and explores new ideas.

It is organized as a directed graph. Each file in [`entries/`](entries/) is one definition, theorem, problem, idea or note, and each entry lists labelled arrows to related entries, such as `uses`, `generalizes` or `refutes`.

The knowledgebase is at an early stage, and has no entries yet.

## Reading it

Entries are Markdown files, so you can read them directly on GitHub. Every entry on `main` has been reviewed and checked to be accurately labelled, but this does not make it true: entries of kind `idea` are speculative and may be wrong.

To explore the graph from a clone:

```bash
npm ci
node scripts/kb.mjs index
node scripts/kb.mjs show <id>
```

## Contributing

Contributions come from admitted members of the AnabLab org through pull requests. [`INSTRUCTIONS.md`](INSTRUCTIONS.md) has everything a contributor or agent needs, and conversation happens in [Discussions](https://github.com/AnabLab/kb/discussions).

## Licence

Content is licensed under [CC BY 4.0](LICENSE). Code in `scripts/` is licensed under [Apache 2.0](LICENSE-CODE).
