---
title: Universal Koszulity for pro-p groups with at most two relations
kind: theorem
summary: 'Quadrelli proves universal Koszulity for quadratic cohomology of finitely generated pro-$p$ groups with at most two relations, requiring zero degree-one squares at $p=2$. This applies to fields with enough roots of unity, finitely many $p$th-power classes and $p$-torsion Brauer rank at most two.'
tags: [galois-cohomology, pro-p-groups, milnor-k-theory]
edges:
  - {to: positselski-koszulity-conjecture, label: addresses}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: 'for the field application'}
---

**Definition.** A graded-commutative quadratic $\mathbb{F}_p$-algebra $A$ is *universally Koszul* if every ideal $I$ generated in degree $1$ satisfies

$$I:(b)=\{a\in A:ab\in I\}=A\bigl(I:(b)\bigr)_1$$

for each $b\in A_1\setminus I_1$. This implies [Koszulity](positselski-koszulity-conjecture.md) [@quadrelli2021few, Definition 2.6 and following paragraph, p. 32].

**Theorem (Quadrelli).** Let $G$ be finitely generated pro-$p$ with at most two defining relations. If $H^*(G,\mathbb{F}_p)$ is quadratic and, at $p=2$, every $a\in H^1(G,\mathbb{F}_2)$ has $a^2=0$, then this algebra is universally Koszul [@quadrelli2021few, Theorem 1.2, p. 29, and its proof, p. 39].

**Fields.** Let $\mathrm{char}(K)\ne p$ and $\mu_p\subset K$, with $\mu_4\subset K$ at $p=2$. If $K^\times/K^{\times p}$ is finite and $\dim_{\mathbb{F}_p}\mathrm{Br}(K)[p]\le2$, then the maximal pro-$p$ Galois group $G_K(p)$ has universally Koszul cohomology. Here $\mathrm{Br}(K)[p]$ is the $p$-torsion subgroup [@quadrelli2021few, Corollaries 1.3 and 4.2, pp. 29 and 40–41].

**Limit.** The three-relation pro-$p$ group

$$G=\langle x,y,z,t\mid[x,y]=[y,z]=[z,t]=1\rangle_{\mathrm{pro}\text{-}p}$$

has quadratic Koszul cohomology that is not universally Koszul [@quadrelli2021few, Example 3.8, p. 39].
