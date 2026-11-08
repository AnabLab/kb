---
title: Ax–Sen–Tate fixed fields and cyclotomic twist invariants
kind: theorem
summary: 'For mixed-characteristic complete discretely valued K with perfect residue, C^H is the completed algebraic fixed field for every closed subgroup H. Nonzero cyclotomic twists C(n) have no G_K-invariants, and the Hodge–Tate period ring has invariant field K.'
tags: [local-fields, galois-groups, hodge-theory]
---

**Setting.** Let $K$ be a complete discretely valued field of mixed characteristic $(0,p)$ with perfect residue field. Choose an algebraic closure $\bar K$, put $C=\widehat{\bar K}$, and extend the natural action of $G_K=\operatorname{Gal}(\bar K/K)$ to $C$ by continuity [@tate1967pdivisible, §3, opening hypotheses, p. 170; opening of (3.3), p. 175].

**Fixed fields (Ax–Sen–Tate).** For every closed subgroup $H\subseteq G_K$, put $L=\bar K^H$. Then, as subfields of $C$,
$$
C^H=\widehat L.
$$
Here $\widehat L$ is the closure of $L$ in $C$. The subgroup need not be open or normal, and $L/K$ may be infinite. Tate records this closed-subgroup statement following Sen's result, and notes Ax's direct proof [@tate1967pdivisible, §3, Remarks 2–3 after Theorem 1, p. 176]. The base-field identity
$$
C^{G_K}=K
$$
is [@tate1967pdivisible, §3, Theorem 1, p. 176].

**Cyclotomic twists (Tate–Sen).** Write $C(n)=C\otimes_{\mathbb Q_p}\mathbb Q_p(n)$, where $G_K$ acts on $\mathbb Q_p(n)$ by the $n$th power of the cyclotomic character. For every integer $n\ne0$,
$$
C(n)^{G_K}=0.
$$
This holds in the same setting, including infinite perfect residue fields [@brinonconrad2009, Definition 1.3.1, p. 7; §2, p. 11; Theorem 2.2.7, p. 15]. The graded Hodge–Tate period ring consequently satisfies
$$
B_{\mathrm{HT}}=\bigoplus_{n\in\mathbb Z}C(n),\qquad
B_{\mathrm{HT}}^{G_K}=K,
$$
with $K$ in degree zero [@brinonconrad2009, Definition 2.4.7 and following discussion, p. 22]. This is the invariant identity used in the [non-Galois Lubin–Tate argument](non-galois-lubin-tate-representations-are-not-aut-intrinsically-hodge-tate.md).

**Role in the graph.** The base-field identity identifies the field of definition in the [Berkovich section criterion](berkovich-points-fixed-by-p-adic-sections.md). It also enters the local proof of [Tate full faithfulness](tate-full-faithfulness-for-p-divisible-groups.md), through descent of points and tangent vectors and linear independence of invariant vectors [@tate1967pdivisible, §4.1, proof of Proposition 11, Steps 3 and 7, pp. 178–179]. The input here includes the natural action on the topological field $C$.
