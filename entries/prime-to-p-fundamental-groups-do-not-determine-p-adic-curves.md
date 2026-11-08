---
title: Prime-to-p fundamental groups of good-reduction curves recover only the special fibre
kind: theorem
summary: 'For proper hyperbolic curves with good reduction over a fixed p-adic field, geometrically prime-to-p fundamental groups are isomorphic over the absolute Galois group exactly when the special fibres are isomorphic as schemes. Infinitely many genus-two lifts can share this group.'
tags: [curves, local-fields, fundamental-groups, counterexample]
edges:
  - {to: prime-to-p-sections-of-p-adic-curves, label: uses, note: "The specialization square for proper curves with good reduction is cartesian."}
  - {to: prime-to-p-anabelian-curves-over-finite-fields, label: uses, note: "To reconstruct the special fibre from the quotient by the inertia subgroup described below."}
  - {to: mochizuki-hom-theorem-for-hyperbolic-curves, label: analogous-to, note: "The geometrically pro-p group in that theorem determines the generic fibre over the same p-adic base field."}
---

**Setting.** Fix a finite extension $k/\mathbb Q_p$, its residue field $F$, and the reduction map $r:G_k\to G_F$ with kernel $I_k$. For a proper [hyperbolic curve](hyperbolic-curve.md) $X/k$ with good reduction, let $X_s/F$ be the special fibre of a smooth proper model. Put $\Sigma=\{\ell:\ell\ne p\}$, let $\Delta_X$ be the maximal pro-$\Sigma$ quotient of $\pi_1(X_{\bar k})$, and define
$$
\Pi_X=\pi_1(X)/\ker\bigl(\pi_1(X_{\bar k})\to\Delta_X\bigr),
\qquad \pi_X:\Pi_X\to G_k.
$$
Define $\Pi_{X_s}\to G_F$ in the same way. The full arithmetic quotient $G_k$ is retained.

**Proposition (deduced here).** For two such curves $X,Y/k$,
$$
\Pi_X\cong_{G_k}\Pi_Y
\quad\Longleftrightarrow\quad
X_s\cong Y_s\ \text{as schemes}.
$$
The right side allows an automorphism of $F$. If $F=\mathbb F_p$, it is simply an $F$-isomorphism. Moreover, the special-fibre group is recovered directly from the extension by
$$
N_X=C_{\Pi_X}(\Delta_X)\cap\pi_X^{-1}(I_k),
\qquad
\Pi_X/N_X\cong\Pi_{X_s}.
$$
Thus the extension recovers the special fibre up to scheme isomorphism, while the family below shows that it does not determine its characteristic-zero lift.

**Proof.** Specialization identifies $\Delta_X$ with $\Delta_{X_s}$ and gives
$$
\Pi_X\cong\Pi_{X_s}\times_{G_F}G_k
$$
over $G_k$ [@saidi2010goodsections, diagram (4.5) and Lemma 4.2.2, PDF p. 46]. The geometric group has trivial centre [@saidi2010goodsections, Lemma 4.1.1, PDF p. 44]. In this fibre product an element over $I_k$ has the form $(a,i)$ with $a\in\Delta_{X_s}$. It centralizes $\Delta_X$ exactly when $a$ is central, hence exactly when $a=1$. Consequently $N_X=\{(1,i):i\in I_k\}$, a closed normal subgroup, and first projection induces the asserted quotient isomorphism. This projection is surjective because $r$ is surjective.

An isomorphism over $G_k$ preserves $\Delta_X=\ker\pi_X$, the displayed centralizer and the inverse image of $I_k$. It therefore induces $\Pi_{X_s}\cong\Pi_{Y_s}$. The finite-field prime-to-$p$ anabelian theorem gives a scheme isomorphism $X_s\cong Y_s$ [@saiditamagawa2009, Theorem 3.9, p. 173]. Conversely, such a scheme isomorphism induces an isomorphism of special-fibre groups over $G_F$: its map on the finite constant field may be nontrivial, but the induced map on $G_F$ fixes the canonical arithmetic Frobenius and hence is the identity. Pulling back along $r$ gives an isomorphism over $G_k$. $\square$

**An infinite family of indistinguishable lifts (proved here).** Over $k=\mathbb Q_7$, let $t\in4+7\mathbb Z_7$ and let $C_t$ be the smooth proper curve with affine equation
$$
y^2=x(x-1)(x-2)(x-3)(x-t).
$$
Every $C_t$ has genus $2$ and good reduction, and all have the same special fibre. Their groups $\Pi_{C_t}\to G_{\mathbb Q_7}$ are therefore isomorphic. Nevertheless the family contains infinitely many geometric isomorphism classes.

To check good reduction explicitly, glue this affine equation over $\mathbb Z_7$ to
$$
v^2=u(1-u)(1-2u)(1-3u)(1-tu)
$$
using $u=x^{-1}$ and $v=yx^{-3}$. These two charts give a finite flat double cover of $\mathbb P^1_{\mathbb Z_7}$, hence a proper flat model. In both the generic and special fibres the branch points are distinct: they are $0,1,2,3,t,\infty$, and their reductions are $0,1,2,3,4,\infty$. As $2$ is invertible, a singular point in either affine chart would require a repeated root of its right side. Thus both fibres are smooth; the flat model is smooth over $\mathbb Z_7$. Each fibre is geometrically connected because a polynomial with a simple root is not a square over the algebraic closure of its constant field. The double cover has six simple branch points, so Riemann–Hurwitz gives genus $2$. Its reduction is independent of $t$.

For finiteness of each geometric isomorphism class in the family, the regular differentials $dx/y$ and $x\,dx/y$ form a basis of $H^0(C_t,\Omega^1)$, so the canonical map is precisely the degree-two map with coordinate $x$. Their regularity at a finite branch point follows from a local parameter $y$; at infinity the orders of $x,y,dx$ are $-2,-5,-3$, giving orders $2,0$ for the two differentials. They are linearly independent and the genus is $2$. Hence an isomorphism $C_t\cong C_{t_0}$ over $\overline{\mathbb Q}_7$ induces a Möbius transformation carrying
$$
\{0,1,2,3,t,\infty\}\ \text{onto}\ \{0,1,2,3,t_0,\infty\}.
$$
There are at most $6\cdot5\cdot4=120$ possibilities for this transformation, determined by the ordered images of $0,1,\infty$. For each, the condition on the image of $t$ leaves at most six values of $t$. Thus at most $720$ parameters in the family can be geometrically isomorphic to any fixed member. The parameter set is infinite, proving the claim. $\square$

**Scope.** The pullback and centralizer calculation work for every nonempty set $\Sigma$ omitting $p$. Recovering the special fibre in the proposition uses all primes different from $p$, as required by the cited finite-field theorem. The proposition concerns extensions over the fixed group $G_k$; it makes no assertion about identifying that quotient from an unmarked abstract group. The section-theoretic consequence of the same pullback is recorded in [prime-to-$p$ Galois sections](prime-to-p-sections-of-p-adic-curves.md).
