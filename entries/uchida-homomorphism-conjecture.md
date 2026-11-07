---
title: Uchida's conjecture on homomorphisms of Galois groups
kind: problem
summary: For solvably closed Galois extensions of number fields, must every continuous homomorphism with open image between their Galois groups come from a unique injection of the fields? This is Uchida's 1981 conjecture, the Hom-form of the Neukirch–Uchida theorem.
tags: [number-fields, galois-groups]
edges:
  - {to: uchida-solvably-closed-theorem, label: motivated-by, note: "Uchida asks whether the isomorphism can be replaced by a homomorphism [@uchida1981, p. 595]."}
---

**Conjecture.** Let $k_1, k_2$ be number fields, let $\Omega_i/k_i$ be solvably closed Galois extensions, and put $G_i = \mathrm{Gal}(\Omega_i/k_i)$. Let $\sigma : G_1 \to G_2$ be a continuous homomorphism such that $\sigma(G_1)$ is open in $G_2$. Then there is a unique injection of fields $\tau : \Omega_2 \to \Omega_1$ such that $\tau \cdot \sigma(g) = g \tau$ for all $g \in G_1$ [@uchida1981, Conjecture, p. 595].

**Known.** Uniqueness holds, the case $k_1 = \mathbb{Q}$ holds, and the conjecture holds under a condition on decomposition groups, or for $\Omega_i$ the maximal prosolvable extensions under compatibility with cyclotomic characters. See [open homomorphisms](open-homomorphisms-number-fields.md).

**Status.** The conjecture is still called a conjecture in [@coratosaidi2023, Introduction], for absolute Galois groups, and later work in [@maosaidi2025open, §1] is conditional in the same way. A literature search in November 2026 found no proof, but that search was not exhaustive.
