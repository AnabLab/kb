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
- A manuscript of the same date treats Milnor K-theory modulo the characteristic [@openai2026modp, Abstract].

**How it claims to go.** The first manuscript's contents list recovering local data, tests on residual curves, a uniform bound for pencils, recovering curve subfields, and passing from recovered quotients to the field [@openai2026bp, Contents].

**Status.** These manuscripts are not peer reviewed, and this knowledgebase does not record them as established. The [repository](https://github.com/openai/math) hosting them says that some of its unformalized results could have issues. Its [Lean documentation](https://github.com/openai/math/blob/main/lean/docs/009.md) for the first manuscript says that the formalization proves injectivity of the correspondence, and that existence of a field isomorphism for every admissible Galois-data isomorphism is outside it.

**What has been checked.** Lemma 4.1, Theorem 5.1 and Corollary 5.2 of the first manuscript, its finite residual tests and uniform pencil bound, are checked in [the uniform support bound for Kummer pencils](uniform-support-bound-for-kummer-pencils.md). That entry takes the local correspondence of the manuscript's §3 as a hypothesis. The rest of the proofs, including §3 and the recovery of curve subfields in §6, have not been checked here. The other statements and contents above come from the first pages of each manuscript.
