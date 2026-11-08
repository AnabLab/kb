---
title: The abelianized Galois group does not determine a number field
kind: theorem
summary: 'Non-isomorphic number fields can have isomorphic $G_K^{\mathrm{ab}}$. All imaginary quadratic fields of class number 1 other than $\mathbb{Q}(i)$ and $\mathbb{Q}(\sqrt{-2})$ have $G_K^{\mathrm{ab}} \cong \widehat{\mathbb{Z}}^2 \times \prod_{n \ge 1} \mathbb{Z}/n\mathbb{Z}$.'
tags: [number-fields, galois-groups, counterexample]
edges:
  - {to: global-class-field-theory, label: uses, note: "The computation starts from the class-field-theoretic idele quotient [@angelakisstevenhagen2013, §2, p. 3]."}
---

**Statement.** There are non-isomorphic number fields $K, K'$ with $G_K^{\mathrm{ab}} \cong G_{K'}^{\mathrm{ab}}$ as profinite groups. Explicitly, an imaginary quadratic field $K \ne \mathbb{Q}(i), \mathbb{Q}(\sqrt{-2})$ of class number $1$ has

$$G_K^{\mathrm{ab}} \cong \widehat{\mathbb{Z}}^2 \times \prod_{n \ge 1} \mathbb{Z}/n\mathbb{Z}$$

[@angelakisstevenhagen2013, Theorem 4.1]. This covers seven fields, namely $\mathbb{Q}(\sqrt{-d})$ for $d = 3, 7, 11, 19, 43, 67, 163$.

**Method.** The computation uses [global class field theory](global-class-field-theory.md): for imaginary quadratic $K$, reciprocity identifies $G_K^{\mathrm{ab}}$ with the finite idele group modulo diagonal $K^\times$ [@angelakisstevenhagen2013, §2, equation (3), p. 3].

**History.** The phenomenon was discovered by Onabe, using Kubota's description of the character group through Ulm invariants. The explicit pair $\mathbb{Q}(\sqrt{-2}), \mathbb{Q}(\sqrt{-5})$ in Onabe's main theorem is incorrect, because of an error in Kubota's value for the finite Ulm invariants at $2$ [@angelakisstevenhagen2013, §1].

**Abundance.** More than 97% of the 2356 imaginary quadratic fields of odd prime class number below 100 have this same group, and Angelakis and Stevenhagen conjecture that infinitely many fields do [@angelakisstevenhagen2013, §1].

**Contrast.** Adding L-series data to $G_K^{\mathrm{ab}}$ [does determine the field](l-series-reconstruction-global-fields.md).
