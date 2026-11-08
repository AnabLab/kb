---
title: Ax–Sen–Tate fixed-field theorem
kind: theorem
summary: 'For a complete discretely valued field K of mixed characteristic with perfect residue field, the invariants of its completed algebraic closure under any closed subgroup H of G_K are the completion of the algebraic fixed field. In particular, the full Galois group fixes exactly K.'
tags: [local-fields, galois-groups, hodge-theory]
---

**Setting.** Let $K$ be a complete discretely valued field of mixed characteristic $(0,p)$ with perfect residue field. Choose an algebraic closure $\bar K$, put $C=\widehat{\bar K}$, and extend the natural action of $G_K=\operatorname{Gal}(\bar K/K)$ to $C$ by continuity [@tate1967pdivisible, §3, pp. 170, 174].

**Fixed fields (Ax–Sen–Tate).** For every closed subgroup $H\subseteq G_K$, put $L=\bar K^H$. Then, as subfields of $C$,
$$
C^H=\widehat L.
$$
Here $\widehat L$ is the closure of $L$ in $C$. The subgroup need not be open or normal, and $L/K$ may be infinite. Tate records this closed-subgroup statement following Sen's result, and notes Ax's direct proof [@tate1967pdivisible, §3, Remarks 2–3 after Theorem 1, p. 176]. The base-field identity
$$
C^{G_K}=K
$$
is [@tate1967pdivisible, §3, Theorem 1, p. 176].

**Role in the graph.** The base-field identity identifies the field of definition in the [Berkovich section criterion](berkovich-points-fixed-by-p-adic-sections.md). It also enters the local proof of [Tate full faithfulness](tate-full-faithfulness-for-p-divisible-groups.md), through descent of points and tangent vectors and linear independence of invariant vectors [@tate1967pdivisible, §4.1, proof of Proposition 11, Steps 3 and 7, p. 178]. The input here includes the natural action on the topological field $C$.
