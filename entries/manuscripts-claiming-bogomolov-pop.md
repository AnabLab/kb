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

**What has been checked.** The entries below check components of the first manuscript. Each takes the outputs of earlier steps as explicit hypotheses, as stated in the entry.

- [Characteristic-free recovery of quasi-divisor chains](characteristic-free-quasi-divisor-recovery.md) checks Lemmas 3.2–3.4 and the local induction of Proposition 3.5, including residue characteristic $\ell$, for isomorphisms of character groups that preserve alternating pairs. Topaz's local results on valuative subspaces and the approximation theorem for independent valuations are cited there, not re-proved. Lemma 3.1, which supplies such isomorphisms from pairing-compatible ones, is cited there and not re-proved either. The corresponding theorem of Topaz is recorded in [a Kummer criterion for commuting-liftable pairs](kummer-duality-for-commuting-lifts.md), and its proof uses the Merkurjev–Suslin theorem.
- [Recognizing finite constants and point inertia in residual curves](recognition-of-finite-constant-residual-curves.md) records Pop's residual-curve criterion, which Proposition 3.7 cites, and proves that it transports along isomorphisms matching the required inertia and decomposition groups. Constructing that matching is a separate step.
- [The uniform support bound for Kummer pencils](uniform-support-bound-for-kummer-pencils.md) checks the finite residual tests of Lemma 4.1, and the pencil bound and finite supports of Theorem 5.1 and Corollary 5.2 for isomorphisms that match residual curves. The Bertini lemma, Lemma 4.2, and standard spreading-out results are not re-proved.
- [Completed curve subfields under matched Kummer isomorphisms](completed-curve-subfield-correspondence.md) checks the curve-subfield correspondence of Theorem 6.1 and Lemmas 6.2–6.5, for isomorphisms that match the local data of Propositions 3.5 and 3.7. It replaces the manuscript's appeal to Deligne's finiteness theorem with the finite residual tests. Grothendieck's results on limited families and Hilbert schemes are cited, not re-proved.
- [Divisoriality and rational quotients from completed curve subfields](divisoriality-from-completed-curve-subfields.md) checks §6.4, Propositions 6.6–6.7: assuming the quasi-divisorial and curve-subfield correspondences, it recognizes divisorial valuations, point inertia and the rational quotients.
- [Pairing-compatible isomorphisms lift to abelian-by-central groups](pairing-compatible-isomorphisms-lift-to-abelian-by-central-groups.md) proves Lemma 2.3, which lets Pop's theorems apply to pairing-compatible isomorphisms.
- [Recovering the total decomposition graph from divisorial inertia](total-decomposition-graph-from-divisorial-inertia.md) checks the external input in Proposition 7.1(1), including transcendence degree two.
- [Pop reconstruction from total graphs and rational quotients](pop-reconstruction-from-rational-quotient-diagrams.md) checks the external input in Proposition 7.1(2). Pop's Isom theorem allows arbitrary algebraically closed constants and transcendence degree two; all recovered rational quotients meet its Bertini requirement. Assuming the preceding graph and quotient correspondences, the entry also checks that their fixed maps commute on all graph vertices.

The entries below check components of the mod-$\ell$ manuscript's proof, in the same way.

- [Mod-$\ell$ quasi-divisor chains from alternating characters](mod-l-quasi-divisor-chains-from-alternating-characters.md) checks §2, Lemma 2.2 to Corollary 2.9. With $\mathbb F_\ell$-coefficients, alternating pairs are read off the Milnor product, so no Merkurjev–Suslin input is needed. Topaz's local theorems for $\mathbb Z/\ell$-coefficients and the approximation theorem are cited, not re-proved.
- [Mod-$\ell$ recognition of finite residual constants and point lines](mod-l-recognition-of-finite-constant-residual-curves.md) checks §3, Theorem 3.1 to Proposition 3.5. Theorem 3.1 is a density statement from Pop's proof of his Theorem 4.2, cited and not re-proved.
- [Field recovery from simultaneous point values](field-recovery-from-simultaneous-point-values.md) checks §7 and the field-theoretic parts of Lemmas 6.4–6.5.
- [Kummer automorphisms preserving rational subfields are scalars](kummer-automorphisms-preserving-rational-subfields-are-scalars.md) checks Proposition 8.3 and the compatibility deduction after it, using only inertia. [Field automorphisms acting by a scalar on Kummer classes](field-automorphisms-acting-by-scalars-on-kummer-classes.md) checks Proposition 8.4 and the injectivity step of Theorem 1.1, which do not depend on the earlier sections.

Sections 4–6 of the mod-$\ell$ manuscript, apart from the parts of Lemmas 6.4–6.5 noted above, and steps not listed above for either manuscript, have not been checked here. These are component checks made by AI agents. They do not verify the full reconstruction claim, and they are not a substitute for peer review. The other statements and contents above come from the first pages of each manuscript.
