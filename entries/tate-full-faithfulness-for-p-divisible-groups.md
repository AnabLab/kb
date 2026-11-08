---
title: Tate full faithfulness for p-divisible groups
kind: theorem
summary: Over a normal noetherian domain with characteristic-zero fraction field, a p-divisible group and all its morphisms are determined by its integral Galois module. Tate's local proof recovers dimension through Hodge–Tate theory before recovering the integral models.
tags: [local-fields, galois-groups, hodge-theory]
edges:
  - {to: ax-sen-tate-fixed-field-theorem, label: uses, note: 'The local proof uses $C^{G_K}=K$ for descent and linear independence, and $C(-1)^{G_K}=0$ in the dimension argument [@tate1967pdivisible, proof of Proposition 11, Steps 3 and 7, pp. 178–179; proof of Theorem 3, p. 179].'}
  - {to: hodge-tate-geometricity-criterion, label: analogous-to, note: 'Both recover geometry from Galois representations using the completed algebraic closure; here the base ring is fixed.'}
  - {to: finite-flat-group-scheme-ramification-bounds, label: analogous-to, note: 'Here a compatible torsion tower is recovered from its Galois module; there finite-level ramification bounds constrain cotangent data.'}
---

**Data.** Fix a prime $p$. Let $R$ be an integrally closed noetherian domain with fraction field $K$ of characteristic zero, and write $G_K=\operatorname{Gal}(\bar K/K)$. A $p$-divisible group $G/R$ of height $h$ is an inductive system of finite locally free commutative group schemes $G[p^n]$ of rank $p^{nh}$, identified with the kernels of $p^n$ in $G[p^{n+1}]$ [@tate1967pdivisible, §2.1, p. 161]. Its integral Tate module is
$$
T_pG=\varprojlim_n G[p^n](\bar K),
$$
with transition maps multiplication by $p$. It is free of rank $h$ over $\mathbb Z_p$, with continuous $G_K$-action [@tate1967pdivisible, §2.4, pp. 169–170].

**Full faithfulness (Tate).** For $p$-divisible groups $G,H/R$, the natural maps
$$
\operatorname{Hom}_R(G,H)
\xrightarrow{\sim}\operatorname{Hom}_K(G\times_R K,H\times_R K)
\xrightarrow{\sim}\operatorname{Hom}_{\mathbb Z_p[G_K]}(T_pG,T_pH)
$$
are bijective. Every morphism of generic fibres extends uniquely over $R$, and a generic-fibre isomorphism extends to an isomorphism [@tate1967pdivisible, §4.2, Theorem 4, p. 180; Corollaries 1–2, p. 181].

**Hodge–Tate mechanism.** Suppose now that $R$ is a complete discrete valuation ring of mixed characteristic $(0,p)$ with perfect residue field, and put $C=\widehat{\bar K}$. For the Cartier dual $G^D$, Tate identifies
$$
\operatorname{Lie}(G)\otimes_R K
\cong\operatorname{Hom}_{\mathbb Z_p[G_K]}(T_p(G^D),C).
$$
Thus the Galois module determines the dimension as well as the height [@tate1967pdivisible, §4.1, Theorem 3 and Corollary 1, pp. 179–180]. In the proof of full faithfulness, these invariants control the discriminants of the finite torsion schemes; Tate then realizes the graph of a map of Tate modules by a $p$-divisible group [@tate1967pdivisible, proof of Theorem 4 and Proposition 12, pp. 181–183].

**Scope.** The full-faithfulness theorem does not require $R$ to be complete or its residue fields to be perfect. It fixes $R$ and uses the entire compatible integral Tate module; it does not assert that every continuous $\mathbb Z_p$-representation is realized, or recover the base field from its abstract Galois group.
