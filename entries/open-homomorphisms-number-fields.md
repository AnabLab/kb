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

**Cyclotomic criterion.** Hoshi proved that a continuous open homomorphism compatible with the cyclotomic characters arises from a field homomorphism, for solvably closed Galois groups in general [@hoshi2026, Introduction]. For maximal prosolvable quotients, this is recorded as an equivalence in [@maosaidi2025open, §1, Theorem 1.2]. Hoshi's Tôhoku paper, which proves this, has not been opened for this entry.

**Solvable quotients.** There are conditional versions for $m$-step solvable quotients, and the case over $\mathbb{Q}$ is unconditional [@coratosaidi2023, Introduction]. An $m$-step form of the cyclotomic criterion, for open homomorphisms $G_K^{m+3} \to G_L^{m+3}$ with $m \ge 2$, is [@maosaidi2025open, Theorem 1.5]. These two sources are arXiv preprints, each whose arXiv page lists no journal reference as of November 2026.
