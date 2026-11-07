---
title: Isomorphic Galois groups imply arithmetic equivalence
kind: theorem
summary: If solvably closed Galois extensions of number fields have isomorphic Galois groups, then corresponding finite subextensions are arithmetically equivalent, meaning every prime number decomposes in the same way in both. This is a result of Neukirch and an early step toward Uchida's theorem.
tags: [number-fields, galois-groups]
---

**Statement.** Let $\Omega_i/k_i$ be solvably closed Galois extensions of number fields and let $\sigma : \mathrm{Gal}(\Omega_1/k_1) \to \mathrm{Gal}(\Omega_2/k_2)$ be a topological isomorphism. Let $K_1$ be a finite extension of $k_1$ in $\Omega_1$, and let $K_2$ be the subfield of $\Omega_2$ corresponding to it under $\sigma$. Then $K_1$ and $K_2$ are arithmetically equivalent, that is, every prime number decomposes in the same manner in both. Uchida attributes this to Neukirch [@uchida1979, p. 360].

**Why this is not enough.** Number fields are not determined up to isomorphism by their zeta functions, as Gaßmann discovered [@cornelissen2019, §1]. Uchida's method [lifts this equivalence to an isomorphism](uchida-solvably-closed-theorem.md), using embedding problems [@uchida1979, pp. 360–361].

**Recent uses.** Saïdi and Tamagawa obtain arithmetic equivalence already from $G_K^3$ [@saiditamagawa2022, Corollary 1.27]. It is also an intermediate step in two recent variants, for [the unramified extension of the maximal cyclotomic extension](cyclotomic-unramified-neukirch-uchida.md) [@ozaki2025, Proposition 1] and for [pro-$\ell$-by-cyclotomic quotients](pro-l-by-cyclotomic-neukirch-uchida.md) [@karshonshusterman2026, §1].
