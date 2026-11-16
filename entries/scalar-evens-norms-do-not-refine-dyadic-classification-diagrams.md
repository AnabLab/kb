---
title: Scalar Evens norms do not refine the marked dyadic squareclass diagram
kind: theorem
summary: 'For K without i, adding the scalar Evens norm from K(i) to K to the rationally marked cup-paired squareclass diagram gives no new invariant. Any isomorphism of the underlying diagrams can be corrected by one transvection to preserve this norm as well.'
tags: [local-fields, galois-cohomology, kummer-theory, embedding-problems]
edges:
  - {to: local-evens-norm-quadratic-form, label: uses, note: 'Its polar formula and its value on restricted squareclasses, specialized to K(i)/K.'}
  - {to: rationally-marked-squareclasses-of-dyadic-classification-involutions, label: uses, note: 'Supplies an isomorphism of the diagrams with every rational squareclass, rational field norm and the class of i marked.'}
  - {to: cup-paired-squareclasses-of-dyadic-classification-involutions, label: uses, note: 'The restriction image is Lagrangian, the involution fixes it pointwise, and the field norm vanishes on it.'}
  - {to: dyadic-galois-groups-from-outer-involutions, label: addresses, note: 'The scalar Evens norm adds no distinction to this marked squareclass test for the classification involutions.'}
  - {to: isomorphism-classes-of-p-adic-galois-groups, label: addresses, note: 'Equal degree and maximal abelian subfield still give identical diagrams after adjoining this cohomology operation.'}
---

**Setting.** Let $K/\mathbb Q_2$ be finite, with $i\notin K$, and put $L=K(i)$. Use additive notation for
$$
B=K^\times/K^{\times2},\qquad V=L^\times/L^{\times2}.
$$
Let $b_K,b_L$ be their additive Hilbert pairings, $r:B\to V$ restriction, $\nu:V\to B$ the field norm on squareclasses, and $\sigma$ the nonidentity element of $\operatorname{Gal}(L/K)$. Set $W=r(B)$. The scalar Evens norm is
$$
Q_K:V=H^1(L,\mathbb F_2)\longrightarrow H^2(K,\mathbb F_2)=\mathbb F_2,
\qquad Q_K(x)=N^{\mathrm{Ev}}_{L/K}(x),
$$
where the last identification sends Brauer invariant $1/2$ to $1$. This operation differs from $\nu$.

**Theorem (proved here).** Let $K'/\mathbb Q_2$, also without $i$, give the corresponding primed data. Suppose $f:B\to B'$ and $g_0:V\to V'$ are isometries for both Hilbert pairings, with
$$
g_0r=r'f,\qquad f\nu=\nu'g_0,\qquad g_0\sigma=\sigma'g_0.
\tag{1}
$$
There is another such isomorphism $(f,g)$ satisfying
$$
Q_{K'}(gx)=Q_K(x)\quad(x\in V),\qquad g|_W=g_0|_W.
\tag{2}
$$
Thus every additional squareclass mark in $W$ is preserved whenever $g_0$ preserves it.

In particular, the diagram with both cup pairings, restriction, field norm, involution, every rational squareclass, the norms to $\mathbb Q_2$, the class of $i$ upstairs, and $Q_K$ is classified by
$$
\left([K:\mathbb Q_2],
\ker\big(\mathbb Q_2^\times/\mathbb Q_2^{\times2}\longrightarrow B\big)\right).
\tag{3}
$$
Equal degree and equal maximal subfield abelian over $\mathbb Q_2$ therefore still give isomorphic diagrams after adjoining $Q_K$.

**Proof.** The [scalar norm computation](local-evens-norm-quadratic-form.md), equations (1) and (4), gives
$$
Q_K(x+y)+Q_K(x)+Q_K(y)=b_L(x,\sigma y),\qquad Q_K(rz)=0.
\tag{4}
$$
For the second identity, its general formula is $Q_K(r[a])=(a,-d)_K$ for $L=K(\sqrt d)$, and here $d=-1$. These formulas follow from Kahn's addition formula and explicit quadratic-extension formula [@kahn1984stiefelwhitney, Proposition I.2.4(a), p. 231; Lemma II.2.1, p. 241].

The [paired squareclass computation](cup-paired-squareclasses-of-dyadic-classification-involutions.md), proof, Steps 1 and 3, shows that $b_L$ is nondegenerate alternating, $W=W^{\perp_{b_L}}$, $\sigma|_W=1$ and $\nu(W)=0$. Also $\sigma$ preserves $b_L$, by invariance of the cup product and the local invariant.

Put $q_0=Q_K$ and $q_1=Q_{K'}\circ g_0$. By (1) and (4), these quadratic forms have the same polar form
$$
\beta(x,y)=b_L(x,\sigma y)
$$
and both vanish on $W$. Consequently $\lambda=q_0+q_1$ is a linear functional vanishing on $W$. Nondegeneracy of $b_L$ supplies a unique $a\in V$ with
$$
\lambda(x)=b_L(x,a)\quad(x\in V).
$$
Since $\lambda(W)=0$ and $W^{\perp_{b_L}}=W$, we have $a\in W$. Define
$$
t(x)=x+\lambda(x)a.
\tag{5}
$$
As $b_L(a,a)=0$, $t^2=1$. Expanding $b_L(tx,ty)$ shows that the two cross terms cancel, so $t$ is a $b_L$-isometry. It fixes $W$ pointwise. Because $\sigma a=a$ and $b_L(\sigma x,a)=b_L(x,a)$, it commutes with $\sigma$. Finally $\nu t=\nu$, since $\nu a=0$.

We have $q_1(a)=0$ and $\beta(x,a)=b_L(x,a)=\lambda(x)$. The quadratic identity therefore gives
$$
q_1(tx)=q_1(x)+\lambda(x)q_1(a)+\lambda(x)\beta(x,a)
=q_1(x)+\lambda(x)=q_0(x).
\tag{6}
$$
Thus $g=g_0t$ satisfies (1) and (2), with the same $f$.

For (3), the [rationally marked diagram theorem](rationally-marked-squareclasses-of-dyadic-classification-involutions.md) supplies $(f,g_0)$ whenever the two invariants there agree. Every rational mark upstairs lies in $W$, as does $[i]_L=[2]_L$, because $(1+i)^2=2i$. These marks survive (5). The base map $f$ and the field norm $\nu$ are unchanged, so the norms to $\mathbb Q_2$ also remain compatible. Conversely, forgetting $Q_K$ recovers the old diagram, which already determines both invariants in (3). The same marked-diagram theorem shows that equal maximal abelian subfields give equal rational restriction kernels. $\square$

**Checks and scope.** If $q_0=q_1$, then $a=0$ and the correction is the identity. For $K=\mathbb Q_2$, $\dim V=4$ and $\dim W=2$; (4) makes $W$ a totally singular Lagrangian for $Q_K$, consistent with its ten zeros and six ones in the scalar norm computation. The transvection preserves the full scalar quadratic map, not only its zero count. No lift of this transvection to $G_L$ is proved. Operations with nontrivial coefficient modules and simultaneous compatibility over other extensions remain outside this result, so the dyadic Galois classification remains open.
