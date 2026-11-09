---
title: 2026 manuscripts claiming the Bogomolov–Pop conjecture
kind: note
summary: The pro-$\ell$ and mod-$\ell$ Bogomolov–Pop claims in 2026 OpenAI manuscripts are recorded here by composing checked components. The manuscripts are not peer reviewed. The pro-$\ell$ Lean formalization covers injectivity, not existence.
tags: [function-fields, galois-groups]
edges:
  - {to: bogomolov-pop-conjecture, label: addresses, note: "The proof's checked components are composed in pro-l-abelian-by-central-reconstruction-of-function-fields, which resolves this conjecture."}
  - {to: mod-l-bogomolov-pop-conjecture, label: addresses, note: "A claimed proof of a Milnor K-theory form. The proof's checked components are composed in a separate theorem entry."}
  - {to: pro-l-strategy-for-bogomolov-pop, label: motivated-by}
  - {to: divisorial-inertia-recovery-problem, label: addresses, note: "The criterion is checked in divisoriality-from-completed-curve-subfields; its transport statement assumes the preceding correspondences."}
---

**The claims.**

- A manuscript dated 23 September 2026 claims that the map in the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md) is a bijection when both $K|k$ and $L|l$ have transcendence degree at least $2$, over arbitrary algebraically closed fields of characteristic different from $\ell$ [@openai2026bp, Theorem 1.1].
- A manuscript dated 5 October 2026 claims the corresponding bijection for $K^M_1/\ell$ and $K^M_2/\ell$ with their bilinear product [@openai2026modl, Theorem 1.1]. See the [mod-$\ell$ conjecture](mod-l-bogomolov-pop-conjecture.md).
- A manuscript of the same date claims the analogue in characteristic $p$ for $K^M_1/p$ and $K^M_2/p$, with the Steinberg relations [@openai2026modp, Theorem 1.1, p. 1]. Its whole proof is checked in [fields from Milnor K-theory modulo the characteristic](milnor-k-reconstruction-modulo-the-characteristic.md), which also records a more general form.

**How it claims to go.** The first manuscript's contents list recovering local data, tests on residual curves, a uniform bound for pencils, recovering curve subfields, and passing from recovered quotients to the field [@openai2026bp, Contents].

**Status.** These manuscripts are not peer reviewed. The pro-$\ell$ claim is recorded as a theorem in [function fields from their pro-ℓ abelian-by-central Galois groups](pro-l-abelian-by-central-reconstruction-of-function-fields.md), which composes checked components into a proof of the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md). The mod-$\ell$ claim is recorded as a theorem in [function fields from mod-ℓ Milnor K-theory](mod-l-milnor-k-reconstruction-of-function-fields.md), which also composes the checked components of its proof. The [repository](https://github.com/openai/math) hosting them says that some of its unformalized results could have issues. Its [Lean documentation](https://github.com/openai/math/blob/main/lean/docs/009.md) for the first manuscript says that the formalization proves injectivity of the correspondence, and that existence of a field isomorphism for every admissible Galois-data isomorphism is outside it.

**What has been checked.** Each entry that checks part of these manuscripts has an `addresses` arrow to this note, and the arrow's note names the sections and results it checks. Those incoming arrows are the record of what has been checked here, and anything they don't name has not been checked. What a check assumes from earlier steps, and what it cites without re-proving, is set out in the checking entry and not repeated here. The reconstruction entries explain how the components compose and which manuscript arguments are replaced by other results.

These checks and their compositions were made by AI agents, and they are not a substitute for peer review. Both reconstruction claims are recorded as theorems here; this does not change the manuscripts' publication status or the scope of the Lean formalization. The other statements and contents above come from the first pages of each manuscript.
