---
title: Uchida's theorem for solvably closed Galois extensions
kind: theorem
summary: If $\Omega_i/k_i$ are solvably closed Galois extensions of number fields, every topological isomorphism between their Galois groups is induced by a unique field isomorphism $\Omega_1 \to \Omega_2$. This includes algebraic closures and maximal prosolvable extensions.
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: neukirch-uchida-theorem, label: generalizes, note: "Take each $\\Omega_i$ to be an algebraic closure of $k_i$."}
  - {to: arithmetic-equivalence-from-galois-isomorphism, label: uses}
---

**Statement.** A field is solvably closed if it has no nontrivial finite abelian extension [@hoshi2022, Introduction]. Let $k_1, k_2$ be number fields, let $\Omega_i/k_i$ be solvably closed Galois extensions, and put $G_i = \mathrm{Gal}(\Omega_i/k_i)$. For every topological isomorphism $\sigma : G_1 \to G_2$ there is a unique field isomorphism $\tau : \Omega_1 \to \Omega_2$ with $\sigma(g) = \tau g \tau^{-1}$ for all $g \in G_1$ [@uchida1979, Theorem].

**Consequences.** It follows that $k_1 \cong k_2$, and that $\mathrm{Aut}\, G_1 / \mathrm{Inn}\, G_1$ is isomorphic to a subgroup of $\mathrm{Aut}\, k_1$ [@uchida1979, Remark].

**Method.** Corresponding finite subextensions are arithmetically equivalent, by a result of Neukirch. Existence of $\tau$ then follows from a group-ring argument using split embedding problems. Uniqueness follows because the centralizer of $G_1$ in $\mathrm{Aut}\, \Omega_1$ is trivial [@uchida1979, pp. 360–362].

**Earlier form.** The case of a single $\Omega$ that is normal over $\mathbb{Q}$ with no abelian extension is [@uchida1976, Theorem]. There, an isomorphism between open subgroups of $\mathrm{Gal}(\Omega/\mathbb{Q})$ extends to an inner automorphism. The function field analogue is [Uchida's theorem for global function fields](uchida-global-function-fields.md).
