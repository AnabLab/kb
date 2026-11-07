---
title: Mochizuki's Grothendieck conjecture for p-adic local fields
kind: theorem
summary: For finite extensions $K, K'$ of $\mathbb{Q}_p$, the natural map from $\mathbb{Q}_p$-algebra isomorphisms $K \to K'$ to outer isomorphisms $G_K \to G_{K'}$ preserving the higher ramification groups in upper numbering is a bijection.
tags: [local-fields, galois-groups, ramification]
edges:
  - {to: naive-local-neukirch-uchida, label: motivated-by, note: "Mochizuki added the filtration after finding the naive version false [@mochizuki1997, §0, Historical Remark]."}
  - {to: ramification-filtration, label: uses}
  - {to: local-field-galois-invariants, label: uses, note: "The cyclotomic character and inertia are recovered in [@mochizuki1997, §1]."}
  - {to: neukirch-uchida-theorem, label: analogous-to}
---

**Statement.** Let $K, K'$ be finite extensions of $\mathbb{Q}_p$. Let $\mathrm{Out}^{\mathrm{Filt}}(G_K, G_{K'})$ be the set of outer isomorphisms of filtered groups, for the filtrations by higher ramification groups with index $> 0$ in upper numbering. Then the natural map

$$\mathrm{Isom}_{\mathbb{Q}_p}(K, K') \to \mathrm{Out}^{\mathrm{Filt}}(G_K, G_{K'})$$

is a bijection [@mochizuki1997, Theorem 4.2].

**Method.** Outer isomorphisms of this type take Hodge–Tate representations to Hodge–Tate representations, and the proof concludes using the classification of abelian Hodge–Tate representations [@mochizuki1997, §0].

**History.** Mochizuki learned from a referee that this statement had been conjectured in discussions following a talk in Princeton in Fall 1993, and that it may have existed in folklore earlier [@mochizuki1997, §0, Historical Remark].

**Related.** See the [Hodge–Tate criteria](hodge-tate-geometricity-criterion.md), [Abrashkin's version in all characteristics](abrashkin-local-grothendieck-theorem.md), and the [m-step solvable refinement](m-step-solvable-filtered-local-fields.md).
