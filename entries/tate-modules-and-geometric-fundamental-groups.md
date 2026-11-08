---
title: Tate modules and geometric fundamental groups
kind: theorem
summary: 'Over a characteristic-zero field, the geometric fundamental group of an abelian variety is the product of its Tate modules, Galois-equivariantly. Abel–Jacobi identifies a proper curve’s abelianized group with this product, and surjective homomorphisms induce surjections on rational Tate modules.'
tags: [curves, fundamental-groups, galois-representations]
edges:
  - {to: geometric-fundamental-groups-of-curves, label: uses, note: "The fundamental exact sequence and its splitting at a rational point give the Galois actions used below."}
---

**Setting.** Let $k$ have characteristic $0$, fix an algebraic closure $\bar k$, and put $G_k=\operatorname{Gal}(\bar k/k)$. For an abelian variety $A/k$ of dimension $g$ and a prime $\ell$, set
$$T_\ell A=\varprojlim_n A[\ell^n](\bar k),\qquad V_\ell A=T_\ell A\otimes_{\mathbb Z_\ell}\mathbb Q_\ell,$$
with transition maps multiplication by $\ell$. The module $T_\ell A$ is free of rank $2g$ [@milne1986abelian, Remark 8.4, p. 14]. Write $H^{(\ell)}$ for the maximal pro-$\ell$ quotient of a profinite group $H$.

**Fundamental group.** There is a canonical isomorphism
$$\pi_1(A_{\bar k},0)\cong\varprojlim_{n\ge1} A[n](\bar k)\cong\prod_\ell T_\ell A,$$
where the transition from $A[m](\bar k)$ to $A[n](\bar k)$ for $n\mid m$ is multiplication by $m/n$. Thus the group is abelian, and its maximal pro-$\ell$ quotient is $T_\ell A$ [@milne1986abelian, Remark 15.3, p. 28].

These identifications are functorial for homomorphisms of abelian varieties and $G_k$-equivariant. Indeed, the quotient maps come from the covers $[n]:A_{\bar k}\to A_{\bar k}$, whose fibres at $0$ are $A[n](\bar k)$ [@milne1986abelian, proof of Theorem 15.1(a), p. 27]. The covers and their distinguished points $0$ are defined over $k$, and a homomorphism commutes with $[n]$. Consequently the maps on their fibres commute both with that homomorphism and with $G_k$. The action on the fundamental group is the one supplied by the section at $0$ of the [fundamental exact sequence](geometric-fundamental-groups-of-curves.md).

**Curves.** Let $C/k$ be smooth, projective and geometrically connected, with $P\in C(k)$ and Jacobian $J_C$. Abel–Jacobi based at $P$ induces an isomorphism
$$\pi_1(C_{\bar k},P)^{\mathrm{ab}}\xrightarrow{\sim}\pi_1((J_C)_{\bar k},0)$$
[@milne1986jacobian, Proposition 9.1, p. 30]. It is $G_k$-equivariant because the pointed map is defined over $k$. Combining with the preceding identification gives
$$\big(\pi_1(C_{\bar k},P)^{\mathrm{ab}}\big)^{(\ell)}\cong T_\ell J_C$$
as $G_k$-modules.

**Rational surjectivity (proved here).** A surjective homomorphism $f:A\to B$ induces a surjection $V_\ell f:V_\ell A\to V_\ell B$ for every $\ell$.

To prove it, let $N=(\ker f)^0$, an abelian subvariety in characteristic $0$ [@milne1986abelian, opening of §8, p. 12]. Choose an abelian subvariety $A'\subseteq A$ such that $N\times A'\to A$ is an isogeny [@milne1986abelian, Proposition 12.1, p. 19]. Then $f|_{A'}$ has finite kernel: geometrically, each nonempty intersection of $A'$ with a component of $\ker f$ is a translate of the finite group $A'\cap N$, and there are finitely many components. Also $\dim A'=\dim A-\dim N=\dim B$, so $u=f|_{A'}:A'\to B$ is an isogeny [@milne1986abelian, Proposition 8.1, p. 12]. If $d=\deg u$, there is an isogeny $v:B\to A'$ with $vu=[d]_{A'}$ [@milne1986abelian, paragraph after Proposition 8.1, p. 12]. Surjectivity of $u$ also gives $uv=[d]_B$, since these maps agree after composition with $u$. Thus $V_\ell u$ has inverse $d^{-1}V_\ell v$, and its factorization through $V_\ell f$ proves the assertion.

Rational coefficients matter: for $g>0$, $[\ell]:A\to A$ is surjective but its image on $T_\ell A$ is the proper subgroup $\ell T_\ell A$.

These are the Tate-module inputs in the [transfer of A-qLT-type by unramified correspondences](unramified-correspondences-preserve-a-qlt-type.md), Step 6. In particular, over a $p$-adic field they apply also to $\ell=p$, since the field has characteristic $0$.
