---
title: Rank-two dyadic factors satisfy the coproduct unipotent bound
kind: theorem
summary: 'Finite free pro-$p$ products of finite-rank free, free abelian and Demushkin groups of every rank have the kernel $n$-unipotent property over $\mathbb F$ for $n\le|\mathbb F|+3$. The new case allows rank-two dyadic factors with invariant $q=2$.'
tags: [pro-p-groups, galois-cohomology, galois-groups]
edges:
  - {to: primitive-obstructions-after-the-first-invisible-degree, label: generalizes, note: 'Removes its exclusion of rank-two Demushkin factors with $q=2$, keeping the same bound over every finite coefficient field.'}
  - {to: primitive-obstructions-after-the-first-invisible-degree, label: uses, note: 'Its algebra normal form and coproduct projection argument apply once the additional factors satisfy the two conditions proved below.'}
  - {to: unipotent-detection-in-free-pro-p-products, label: uses, note: 'Theorem, part 1 identifies the invisible ideal of the product; Lemma 1 gives the detection criterion and Corollary 1 handles the first invisible degree.'}
  - {to: kernel-unipotent-property-in-low-degrees-for-free-products, label: uses, note: 'Step 2 identifies the quadratic initial relation with the cup-product tensor, including nonalternating rank-two factors.'}
  - {to: strong-massey-vanishing-for-demushkin-groups-and-p-adic-fields, label: uses, note: 'The cochain proof of part 1, extended to finite coefficient fields, realizes the alternating sequence of covectors used below.'}
  - {to: cyclotomic-semidirect-products-preserve-the-kernel-unipotent-property, label: uses, note: 'Corollary 1 supplies all-degree group detection for the new rank-two factors, which are scalar semidirect products of two copies of $\mathbb Z_2$.'}
  - {to: kernel-unipotent-conjecture, label: addresses, note: 'Proves its equality for $n\le p+3$ whenever the maximal pro-$p$ Galois group is a finite free product of the factors in the theorem. The all-degree question with rank-two factors remains open.'}
---

**Theorem (proved here).** Let $\mathbb F$ be a finite field of characteristic $p$, put $Q=|\mathbb F|$, and let $G=G_1*\cdots*G_s$ be a finite free pro-$p$ product. Each factor may be a free pro-$p$ group of finite rank, a free abelian pro-$p$ group of finite rank, or a [Demushkin group](demushkin-group.md) of any finite rank. Then
$$
G_{(n)}=\bigcap_{\rho:G\to U_n(\mathbb F)}\ker\rho
\qquad(1\le n\le Q+3),
$$
where $G_{(n)}$ is the $p$-Zassenhaus filtration and homomorphisms are continuous. In particular the bound over $\mathbb F_p$ is $n\le p+3$, including $n=5$ at $p=2$ even with rank-two factors of invariant $q=2$.

**Proof.** The [previous coproduct theorem](primitive-obstructions-after-the-first-invisible-degree.md) proves this except when $p=2$ and a rank-two factor has $q=2$. We establish its two missing factor inputs and then give the product argument. Trivial factors can be omitted.

*1. The additional factor.* Let $D$ be such a rank-two pro-$2$ Demushkin group. It has a presentation
$$
D=\langle x,y\mid yxy^{-1}=x^u\rangle,
\qquad u=-1\quad\text{or}\quad u=-(1+2^f),\ f\ge2,
$$
the third and fourth rank-two types in [@minactan2015kernel, subsection opening on p. 13]. These presentations identify $D$ with $\mathbb Z_2\rtimes_u\mathbb Z_2$: collection gives an inverse to the map from the presented group to this semidirect product. Since $u\in1+2\mathbb Z_2$, Corollary 1 of [the scalar semidirect-product theorem](cyclotomic-semidirect-products-preserve-the-kernel-unipotent-property.md) gives $D$ the kernel $n$-unipotent property over $\mathbb F_2$, and hence over $\mathbb F$, for every $n$.

Use the notation of [the invisible-ideal theorem](unipotent-detection-in-free-pro-p-products.md):
$$
A=A(D)\otimes_{\mathbb F_2}\mathbb F,
\qquad K_k=\mathrm{Inv}_k(D,\mathbb F).
$$
Let $X,Y\in A_1$ be the initial forms of $x,y$. They generate $A$, by Lemma 3 there. As $u\equiv-1\pmod4$, expansion of the defining relation to degree two gives
$$YX=XY+X^2.\tag{1}$$
For example, $(1+Y)(1+X)(1+Y)^{-1}$ has degree-two part $YX+XY$, whereas $(1+X)^u$ has degree-two part $X^2$. The initial-relator/cup-product identification used in Step 2 of [the low-degree theorem](kernel-unipotent-property-in-low-degrees-for-free-products.md) therefore gives, in the dual coordinates,
$$
\omega((a,b),(c,e))=ac+ae+bc.\tag{2}
$$
Relation (1) shows that $A_k$ is spanned by $X^aY^{k-a}$, $0\le a\le k$. Indeed, replacing an adjacent $YX$ by $XY+X^2$ decreases the degree-lexicographic word order with $Y>X$, so the process terminates in ordered words. We do not assume these words are independent in arbitrary degrees.

*2. No invisible factor elements through degree $Q$.* For $(s,t)\in\mathbb F^2$ put
$$v=(s,t),\qquad Tv=(s,s+t).$$
Equation (2) gives $\omega(v,Tv)=\omega(Tv,v)=0$. Thus the length-$k$ sequence $v,Tv,v,Tv,\ldots$ is the first superdiagonal of a continuous representation $D\to U_{k+1}(\mathbb F)$.

Here the coefficient-field extension in this assertion can be checked directly from the cochain proof of [strong Massey vanishing](strong-massey-vanishing-for-demushkin-groups-and-p-adic-fields.md). Continuous cochains with values in $\mathbb F$ are the tensor product of those with values in $\mathbb F_2$ with $\mathbb F$, since $\mathbb F/\mathbb F_2$ is finite. Thus the cup form stays nondegenerate and $H^2(D,\mathbb F)$ stays one-dimensional. In Step 3 of that proof, each correction is obtained by solving an equation $a_j\cup z=b$ with $a_j\ne0$; nondegeneracy solves the same equation over $\mathbb F$. Step 1 handles zero entries. The resulting full system gives the asserted representation, also for lengths one and two.

The corner functional of this representation, evaluated on $X^aY^{k-a}$, is the homogeneous polynomial
$$
F_{a,k}(s,t)=s^a\prod_{j=a+1}^k t_j,
\qquad t_j=\begin{cases}t&j\text{ odd},\\s+t&j\text{ even}.\end{cases}
$$
This is the corner formula of Lemma 3 of the invisible-ideal theorem. Its lowest power of $s$ is $s^at^{k-a}$, with coefficient one. Consequently $F_{0,k},\ldots,F_{k,k}$ form a triangular basis of the homogeneous degree-$k$ polynomials in $s,t$.

For $k\le Q$, no nonzero homogeneous degree-$k$ polynomial vanishes on $\mathbb F^2$. To see this, its value at $(1,0)$ first kills the $s^k$ coefficient; its specialization at $t=1$ then has degree at most $k-1<Q$ and has all $Q$ elements as roots, so it is zero. If $\sum_a c_aX^aY^{k-a}$ is invisible, every evaluation $\sum_a c_aF_{a,k}(s,t)$ vanishes. The preceding argument and triangularity force every $c_a=0$. This proves
$$K_k=0\quad(1\le k\le Q),\tag{3}$$
and also proves that the ordered monomials are independent in these degrees.

*3. The coproduct detects degree $Q+1$ factor letters.* The graded group-algebra coproduct has $X,Y$ primitive. Put $d=Q+1$, which is odd, and let $\delta=\Delta_{1,d-1}:A_d\to A_1\otimes A_{d-1}$. Multiplying the coproducts of $X$ and $Y$ in their existing order gives
$$
\delta(X^aY^b)=aX\otimes X^{a-1}Y^b+bY\otimes X^aY^{b-1}
\qquad(a+b=d).
$$
Terms with zero coefficient are omitted. Exactly one of $a,b$ is odd. Thus each ordered monomial has exactly one nonzero image, and these images are distinct members of the tensor-product basis: independence in degree $d-1=Q$ was proved in Step 2. Hence $\delta$ is injective on $A_d$, in particular on $K_d$. This calculation uses (1), rather than a commutative polynomial-algebra description of $A$.

*4. The product.* For every factor write $A_i=A(G_i)\otimes\mathbb F$ and $K_{i,k}=\mathrm{Inv}_k(G_i,\mathbb F)$, and let $J$ be their generated ideal in $A(G)\otimes\mathbb F$. The invisible-ideal theorem gives $J=\mathrm{Inv}(G,\mathbb F)$. The previous coproduct proof supplies the algebra free-product normal form, in which ordered factor runs and their degrees specify direct summands. Its inputs for the original factors, together with Steps 1–3 for the additional factors, now give:

- $K_{i,k}=0$ for every $i$ and $k<d$;
- every factor detects group initial forms in all degrees;
- $\delta_i=\Delta_{1,d-1}$ is injective on every $K_{i,d}$.

There are no product invisible elements below degree $d$. In degree $d$, $J_d=\bigoplus_iK_{i,d}$; retraction to each factor and factor detection rule out a nonzero invisible group initial form. This is also Corollary 1 of the invisible-ideal theorem.

It remains to detect degree $d+1$. Let $z$ be an invisible degree-$d+1$ group initial form. It is primitive: for $g\in G_{(d+1)}$, the additional term in the group-algebra coproduct of $g-1$ is $(g-1)\otimes(g-1)$, of filtration degree $2d+2>d+1$; Jennings' embedding identifies its degree-$d+1$ initial form [@minacpasiniquadrellitan2022mild, Proposition 3.4, p. 9]. Retractions and factor detection kill every pure component of $z$. Since $J$ has no generators below degree $d$, its remaining components belong to
$$
\bigoplus_{i\ne j}\bigl(K_{i,d}\otimes A_{j,1}\bigr)
\ \oplus\ \bigoplus_{i\ne j}\bigl(A_{j,1}\otimes K_{i,d}\bigr).
$$
Project $\Delta(z)$ onto
$$
A_{i,1}\otimes\bigl(A_{i,d-1}\otimes A_{j,1}\bigr).
$$
Only the component $K_{i,d}\otimes A_{j,1}$ contributes, through $\delta_i\otimes1$. The component with reversed run order contributes to the reversed right-hand run order; moving its degree-one exterior letter to the left instead leaves a pure right component. Other factor pairs cannot contribute to the specified colours. Primitivity makes this projection zero, and injectivity of $\delta_i$ kills that component. The reversed projection kills $A_{j,1}\otimes K_{i,d}$. Thus $z=0$.

We have detected all group degrees through $d+1=Q+2$. Lemma 1 of the invisible-ideal theorem gives the claimed equality through matrix size $Q+3$. For odd $p$ there were no additional factors, so the previous coproduct theorem already supplies the conclusion. $\square$

**Scope and checks.** This removes the rank-two $q=2$ exception from the previous bound. It does not settle the all-degree free-product question. At $Q=2$, Step 3 sends $X^3,X^2Y,XY^2,Y^3$ to $X\otimes X^2,Y\otimes X^2,X\otimes Y^2,Y\otimes Y^2$, respectively, so the smallest case requires no division by two or three. The two presentation types have the same quadratic expansion, including $u=-1$, so no nontriviality assumption on the higher $2$-adic part of $u$ is used. Later degrees have additional mixed components not treated here.

**Sources and status.** The factor calculation and its extension of the product bound are proved here. Mináč–Tân's rank-two presentations were opened at the cited location, and the Jennings input was opened at Proposition 3.4. The other proofs are linked results on `main`. A targeted literature search in November 2026 found no statement of this refinement; it was not exhaustive.
