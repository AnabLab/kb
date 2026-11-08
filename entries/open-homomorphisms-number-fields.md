---
title: Open homomorphisms between Galois groups of number fields
kind: theorem
summary: An open homomorphism between solvably closed Galois groups of number fields comes from a field embedding if it is injective, if it is well behaved on decomposition groups, if it respects cyclotomic characters, or if the source base field is $\mathbb{Q}$. The embedding is unique when it exists.
tags: [number-fields, galois-groups]
edges:
  - {to: uchida-homomorphism-conjecture, label: addresses, note: "Conditional cases and the case $k_1 = \\mathbb{Q}$."}
  - {to: uchida-solvably-closed-theorem, label: generalizes, note: "Isomorphisms satisfy the condition on decomposition groups, by the local theory."}
---

**Setting.** Let $k_1, k_2$ be number fields, let $\Omega_i/k_i$ be solvably closed Galois extensions with Galois groups $G_i$, and let $\sigma : G_1 \to G_2$ be a continuous homomorphism.

**Uchida's results.**

- A field injection $\tau : \Omega_2 \to \Omega_1$ with $\tau \cdot \sigma(g) = g \tau$ for all $g \in G_1$ is unique if it exists [@uchida1981, Proposition 2].
- If $\sigma(G_1)$ is open and $k_1 = \mathbb{Q}$, such a $\tau$ exists [@uchida1981, Theorem 1].
- Suppose that $\sigma$ is nontrivial on every decomposition group of a finite prime of $k_1$, and sends it onto an open subgroup of a decomposition group of a finite prime of $k_2$. Then $\sigma(G_1)$ is open and such a $\tau$ exists [@uchida1981, Theorem 2].

**Injective case.** A continuous open injective homomorphism is covered by [Uchida's theorem](uchida-solvably-closed-theorem.md) [@hoshi2026, Introduction].

**Cyclotomic criterion.** Hoshi proved that a continuous open homomorphism $\sigma$ comes from a field homomorphism $\Omega_2 \to \Omega_1$ compatible with the actions if and only if $\chi_2 \circ \sigma = \chi_1$, where $\chi_i : G_i \to \widehat{\mathbb{Z}}^\times$ are the cyclotomic characters [@hoshi2025cyclotomic, Theorem 3.4, p. 12]. In the proof he reduces to surjective $\sigma$ and to totally imaginary finite Galois subextensions of $\Omega_2/k_2$. When $k_2$ is totally imaginary and the cyclotomic condition holds, $\sigma$ maps the decomposition group at a prime of absolute degree one and odd residue characteristic into a decomposition group at a prime of the same residue characteristic and absolute residue degree one, and the induced map on abelianizations modulo $2$ preserves Frobenius elements [@hoshi2025cyclotomic, Lemma 3.3, pp. 10–11]. A criterion for full faithfulness of functors on number fields, inspired by work of Smit, finishes the proof [@hoshi2025cyclotomic, §1, p. 2, and proof of Theorem 3.4, pp. 12–13]. For maximal prosolvable quotients, this is recorded as an equivalence in [@maosaidi2025open, §1, Theorem 1.2].

**Solvable quotients.** There are conditional versions for $m$-step solvable quotients [@coratosaidi2023, Theorem 6.1, p. 32], and the case over $\mathbb{Q}$ is unconditional [@coratosaidi2023, Theorem 7.6, p. 37]. An $m$-step form of the cyclotomic criterion, for open homomorphisms $G_K^{m+3} \to G_L^{m+3}$ with $m \ge 2$, is [@maosaidi2025open, Theorem 1.5, p. 4]. See [the precise bounded-solvable statements](m-step-solvable-homomorphisms-number-fields.md), including which level carries the recovered field map. These two sources are arXiv preprints, neither of whose arXiv pages lists a journal reference as of November 2026.

**The general case.** These are partial results toward [Uchida's conjecture](uchida-homomorphism-conjecture.md). The full statement is proved in a 2026 manuscript that is not peer reviewed, whose last step is the cyclotomic criterion. See [the resolving theorem](open-homomorphisms-of-solvably-closed-galois-groups-come-from-embeddings.md).
