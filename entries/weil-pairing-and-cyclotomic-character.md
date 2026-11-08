---
title: The Weil pairing and the cyclotomic determinant
kind: theorem
summary: 'For an elliptic curve over a perfect field, the Weil pairing puts nth roots of unity in the n-torsion field and identifies the Tate-module determinant with the cyclotomic character. Here n and the Tate-module prime are invertible in the base field.'
tags: [curves, galois-groups, galois-cohomology]
---

**Finite torsion.** Let $E/k$ be an elliptic curve over a perfect field, $G_k=\operatorname{Gal}(\bar k/k)$, and $n\ge2$ invertible in $k$. Write $E[n]=E[n](\bar k)$ and $\mu_n=\mu_n(\bar k)$. The Weil pairing
$$e_n:E[n]\times E[n]\longrightarrow\mu_n$$
is bilinear, alternating, nondegenerate and $G_k$-equivariant:
$$e_n(\sigma P,\sigma Q)=\sigma(e_n(P,Q)).$$
If $(P,Q)$ is a basis of $E[n]\cong(\mathbb Z/n\mathbb Z)^2$, then $e_n(P,Q)$ generates $\mu_n$ [@sutherland2025weil, Theorem 23.23, p. 10, and Corollary 23.25, p. 13]. In particular,
$$k(\mu_n)\subseteq k(E[n])$$
by applying [@sutherland2025weil, Corollary 23.24, p. 13] over $k(E[n])$.

**Finite determinant (checked here).** For $\rho_{E,n}:G_k\to\operatorname{Aut}(E[n])$ and the cyclotomic character $\chi_n:G_k\to(\mathbb Z/n\mathbb Z)^\times$,
$$\det\rho_{E,n}=\chi_n.$$
Indeed, put $\zeta=e_n(P,Q)$. Bilinearity and alternation give
$$\zeta^{\det\rho_{E,n}(\sigma)}=e_n(\sigma P,\sigma Q)=\sigma\zeta=\zeta^{\chi_n(\sigma)}.$$
Primitivity of $\zeta$ identifies the exponents modulo $n$. $\square$

**Tate module (checked here).** For a prime $\ell$ invertible in $k$, put $T_\ell E=\varprojlim_r E[\ell^r]$, with multiplication-by-$\ell$ transitions, and $\mathbb Z_\ell(1)=\varprojlim_r\mu_{\ell^r}$, with $\ell$th-power transitions. Let $\rho_{E,\ell^\infty}$ and $\chi_\ell$ be their respective Galois representations. The Weil pairings induce a $G_k$-equivariant isomorphism
$$\bigwedge^2_{\mathbb Z_\ell}T_\ell E\cong\mathbb Z_\ell(1),\qquad\det\rho_{E,\ell^\infty}=\chi_\ell.$$

Indeed, for $P_{r+1},Q_{r+1}\in E[\ell^{r+1}]$, bilinearity and compatibility give
$$e_{\ell^{r+1}}(P_{r+1},Q_{r+1})^\ell
=e_{\ell^{r+1}}(P_{r+1},\ell Q_{r+1})
=e_{\ell^r}(\ell P_{r+1},\ell Q_{r+1})$$
[@sutherland2025weil, Theorem 23.23, p. 10; compatibility proof, p. 12]. Here $\ell Q_{r+1}\in E[\ell^r]$, as required by that compatibility formula. Thus the pairings assemble into a $G_k$-equivariant alternating $\mathbb Z_\ell$-bilinear pairing on $T_\ell E$ with values in $\mathbb Z_\ell(1)$.

The finite torsion groups $E[\ell^r]\cong(\mathbb Z/\ell^r\mathbb Z)^2$ have surjective multiplication-by-$\ell$ transitions. Lifting a basis at level $1$ recursively gives compatible bases $(P_r,Q_r)$: any lifts of a basis at level $r$ are a basis at level $r+1$, since their $\ell^r$ multiples are a basis of $E[\ell]$. These bases identify $T_\ell E$ with $\mathbb Z_\ell^2$ and its reduction modulo $\ell^r$ with $E[\ell^r]$. Each $e_{\ell^r}(P_r,Q_r)$ is primitive by [@sutherland2025weil, Corollary 23.25, p. 13]. Their compatible system generates $\mathbb Z_\ell(1)$, so the induced map on the rank-one exterior square is an isomorphism. Finally, the finite determinant identity at every level $\ell^r$ gives $\det\rho_{E,\ell^\infty}=\chi_\ell$. $\square$

**Use in reconstruction.** The field inclusion supplies the cyclotomic ramification obstruction in the [moderate-points problem](l-moderate-points-and-pro-l-kernel-fields.md). The determinant identity is used both in the reconstruction proof and in the single-prime twist counterexamples for [elliptic torsion fields](torsion-fields-determine-non-cm-elliptic-curves.md).
