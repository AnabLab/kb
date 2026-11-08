---
title: Crystalline lattices classify p-divisible groups over discrete valuation rings
kind: theorem
summary: Over a complete mixed-characteristic discrete valuation ring with perfect residue field, integral Tate modules identify p-divisible groups with Galois-stable lattices in crystalline representations of Hodge–Tate weights 0 and 1, with no ramification bound.
tags: [local-fields, galois-groups, hodge-theory, reconstruction]
edges:
  - {to: tate-full-faithfulness-for-p-divisible-groups, label: uses, note: 'Tate supplies full faithfulness; the essential-image statement is the additional input [@scholzeweinstein2013moduli, proof of Corollary 6.2.3, p. 58].'}
  - {to: scholze-weinstein-classification-of-p-divisible-groups, label: uses, note: 'The essential-image proof uses Theorem 6.2.1, whose proof applies the classification over a spherically complete algebraically closed field [@scholzeweinstein2013moduli, §6.2, pp. 57–58].'}
  - {to: crystalline-tate-module-good-reduction, label: analogous-to, note: 'Both characterize geometric realization through crystallinity: here realization of a lattice by a p-divisible group, there good reduction of a given abelian variety.'}
---

**Setting.** Let $K/\mathbb Q_p$ be a complete discretely valued nonarchimedean field with perfect residue field, and let $G_K=\operatorname{Gal}(\bar K/K)$.

**Theorem (Breuil–Kisin, as recovered by Scholze–Weinstein).** The functor
$$
G\longmapsto T_pG=\varprojlim_nG[p^n](\bar K)
$$
is an equivalence between $p$-divisible groups over $\mathcal O_K$ and finite free $\mathbb Z_p$-modules $T$ with continuous $G_K$-action such that $T\otimes_{\mathbb Z_p}\mathbb Q_p$ is crystalline with Hodge–Tate weights contained in $\{0,1\}$. Here $\mathbb Q_p(1)$ has weight $1$. Morphisms on the representation side are $G_K$-equivariant $\mathbb Z_p$-linear maps [@scholzeweinstein2013moduli, Corollary 6.2.3 and preceding paragraph, p. 58].

The statement includes every stable lattice, arbitrary ramification, and $p=2$. It supplies the essential image that the [full-faithfulness theorem](tate-full-faithfulness-for-p-divisible-groups.md) alone does not specify. Scholze–Weinstein's proof uses Tate for full faithfulness and their period-map image theorem for existence [@scholzeweinstein2013moduli, proof of Corollary 6.2.3, p. 58].
