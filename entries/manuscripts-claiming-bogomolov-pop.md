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

**What has been checked.** The entries below check components of the first manuscript. Each takes the outputs of earlier steps as explicit hypotheses, as stated in the entry.

- [Characteristic-free recovery of quasi-divisor chains](characteristic-free-quasi-divisor-recovery.md) checks Lemmas 3.2–3.4 and the local induction of Proposition 3.5, including residue characteristic $\ell$, for isomorphisms of character groups that preserve alternating pairs. Topaz's local results on valuative subspaces and the approximation theorem for independent valuations are cited there, not re-proved. Lemma 3.1, which supplies such isomorphisms from pairing-compatible ones, is cited there and not re-proved either. The corresponding theorem of Topaz is recorded in [a Kummer criterion for commuting-liftable pairs](kummer-duality-for-commuting-lifts.md), and its proof uses the Merkurjev–Suslin theorem.
- [Recognizing finite constants and point inertia in residual curves](recognition-of-finite-constant-residual-curves.md) records Pop's residual-curve criterion, which Proposition 3.7 cites, and proves that it transports along isomorphisms matching the required inertia and decomposition groups. Constructing that matching is a separate step.
- [The uniform support bound for Kummer pencils](uniform-support-bound-for-kummer-pencils.md) checks the finite residual tests of Lemma 4.1, and the pencil bound and finite supports of Theorem 5.1 and Corollary 5.2 for isomorphisms that match residual curves. The Bertini lemma, Lemma 4.2, and standard spreading-out results are not re-proved.
- [Completed curve subfields under matched Kummer isomorphisms](completed-curve-subfield-correspondence.md) checks the curve-subfield correspondence of Theorem 6.1 and Lemmas 6.2–6.5, for isomorphisms that match the local data of Propositions 3.5 and 3.7. It replaces the manuscript's appeal to Deligne's finiteness theorem with the finite residual tests. Grothendieck's results on limited families and Hilbert schemes are cited, not re-proved.
- [Divisoriality and rational quotients from completed curve subfields](divisoriality-from-completed-curve-subfields.md) checks §6.4, Propositions 6.6–6.7: assuming the quasi-divisorial and curve-subfield correspondences, it recognizes divisorial valuations, point inertia and the rational quotients.
- [Pairing-compatible isomorphisms lift to abelian-by-central groups](pairing-compatible-isomorphisms-lift-to-abelian-by-central-groups.md) proves Lemma 2.3, which lets Pop's theorems apply to pairing-compatible isomorphisms.

In §7, Proposition 7.1(1) restates [@pop2018, Proposition 2.4, p. 9]. Proposition 7.1(2), on which the final step rests, cites Pop's 2012 papers in Inventiones and in the Lang memorial volume [@openai2026bp, §7, pp. 23–24]. Those papers have not been opened here, so the passage from the recovered quotients to the field is not checked. Steps not listed above have not been checked either. These are component checks made by AI agents. They do not verify the full reconstruction claim, and they are not a substitute for peer review. The proofs of the mod-$\ell$ and modulo-characteristic manuscripts have not been checked here. The other statements and contents above come from the first pages of each manuscript.
