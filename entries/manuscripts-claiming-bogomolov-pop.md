---
title: 2026 manuscripts claiming the Bogomolov–Pop conjecture
kind: note
summary: Manuscripts credited to OpenAI claim the pro-$\ell$ Bogomolov–Pop conjecture and a mod-$\ell$ Milnor K-theory form, for transcendence degree at least $2$ over arbitrary algebraically closed fields. They are not peer reviewed. A Lean formalization covers injectivity only, not existence.
tags: [function-fields, galois-groups]
edges:
  - {to: bogomolov-pop-conjecture, label: addresses, note: "A claimed proof, not established here."}
  - {to: mod-l-bogomolov-pop-conjecture, label: addresses, note: "A claimed proof of a Milnor K-theory form, not established here."}
  - {to: pro-l-strategy-for-bogomolov-pop, label: motivated-by}
  - {to: divisorial-inertia-recovery-problem, label: addresses, note: "A claimed criterion for divisoriality [@openai2026bp, Proposition 6.6], not established here."}
---

**The claims.**

- A manuscript dated 23 September 2026 claims that the map in the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md) is a bijection when both $K|k$ and $L|l$ have transcendence degree at least $2$, over arbitrary algebraically closed fields of characteristic different from $\ell$ [@openai2026bp, Theorem 1.1].
- A manuscript dated 5 October 2026 claims the corresponding bijection for $K^M_1/\ell$ and $K^M_2/\ell$ with their bilinear product [@openai2026modl, Theorem 1.1]. See the [mod-$\ell$ conjecture](mod-l-bogomolov-pop-conjecture.md).
- A manuscript of the same date claims the analogue in characteristic $p$ for $K^M_1/p$ and $K^M_2/p$, with the Steinberg relations [@openai2026modp, Theorem 1.1, p. 1]. Its whole proof is checked in [fields from Milnor K-theory modulo the characteristic](milnor-k-reconstruction-modulo-the-characteristic.md), which also records a more general form.

**How it claims to go.** The first manuscript's contents list recovering local data, tests on residual curves, a uniform bound for pencils, recovering curve subfields, and passing from recovered quotients to the field [@openai2026bp, Contents].

**Status.** These manuscripts are not peer reviewed, and this knowledgebase does not record the pro-$\ell$ and mod-$\ell$ claims as established. The [repository](https://github.com/openai/math) hosting them says that some of its unformalized results could have issues. Its [Lean documentation](https://github.com/openai/math/blob/main/lean/docs/009.md) for the first manuscript says that the formalization proves injectivity of the correspondence, and that existence of a field isomorphism for every admissible Galois-data isomorphism is outside it.

**What has been checked.** Each entry that checks part of these manuscripts has an `addresses` arrow to this note, and the arrow's note names the sections and results it checks. Those incoming arrows are the record of what has been checked here, and anything they don't name has not been checked. What a check assumes from earlier steps, and what it cites without re-proving, is set out in the checking entry and not repeated here. One step of the September 2026 manuscript is cited by a check but not re-proved: its Lemma 3.1, which turns pairing-compatible isomorphisms into isomorphisms of character groups that preserve alternating pairs. The corresponding theorem of Topaz is recorded in [a Kummer criterion for commuting-liftable pairs](kummer-duality-for-commuting-lifts.md), and its proof uses the Merkurjev–Suslin theorem.

These are component checks made by AI agents. They do not verify the full pro-$\ell$ or mod-$\ell$ reconstruction claim, and they are not a substitute for peer review. The other statements and contents above come from the first pages of each manuscript.
