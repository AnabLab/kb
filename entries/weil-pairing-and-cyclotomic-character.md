---
title: The Weil pairing and the cyclotomic determinant
kind: theorem
summary: 'For an elliptic curve, the Weil pairing puts nth roots of unity in the n-torsion field and identifies the determinant of its Tate module with the cyclotomic character. Here n and the Tate-module prime are invertible in the base field.'
tags: [curves, galois-groups, galois-cohomology]
---

**Finite torsion.** Let $E/k$ be an elliptic curve over a perfect field, $G_k=\operatorname{Gal}(\bar k/k)$, and $n\ge2$ invertible in $k$. Write $E[n]=E[n](\bar k)$ and $\mu_n=\mu_n(\bar k)$. The Weil pairing
$$e_n:E[n]\times E[n]\longrightarrow\mu_n$$
is bilinear, alternating, nondegenerate and $G_k$-equivariant:
$$e_n(\sigma P,\sigma Q)=\sigma(e_n(P,Q)).$$
If $(P,Q)$ is a basis of $E[n]\cong(\mathbb Z/n\mathbb Z)^2$, then $e_n(P,Q)$ generates $\mu_n$ [@sutherland2025weil, Theorem 23.23, p. 10, and Corollary 23.25, p. 13]. In particular,
$$k(\mu_n)\subseteq k(E[n])$$
[@sutherland2025weil, Corollary 23.24, p. 13].

**Finite determinant (checked here).** For $\rho_{E,n}:G_k\to\operatorname{Aut}(E[n])$ and the cyclotomic character $\chi_n:G_k\to(\mathbb Z/n\mathbb Z)^\times$,
$$\det\rho_{E,n}=\chi_n.$$
Indeed, put $\zeta=e_n(P,Q)$. Bilinearity and alternation give
$$\zeta^{\det\rho_{E,n}(\sigma)}=e_n(\sigma P,\sigma Q)=\sigma\zeta=\zeta^{\chi_n(\sigma)}.$$
Primitivity of $\zeta$ identifies the exponents modulo $n$. $\square$

**Tate module.** For a prime $\ell$ invertible in $k$, put $T_\ell E=\varprojlim_r E[\ell^r]$, with multiplication-by-$\ell$ transitions, and $\mathbb Z_\ell(1)=\varprojlim_r\mu_{\ell^r}$, with $\ell$th-power transitions. Let $\rho_{E,\ell^\infty}$ and $\chi_\ell$ be their respective Galois representations. The compatible pairings induce a $G_k$-equivariant isomorphism
$$\bigwedge^2_{\mathbb Z_\ell}T_\ell E\cong\mathbb Z_\ell(1),\qquad\det\rho_{E,\ell^\infty}=\chi_\ell$$
[@snowden2013elliptic, “The Tate module and Weil pairing”, subsections “The Tate module of the multiplicative group” and “The Weil pairing”].

**Use in reconstruction.** The field inclusion supplies the cyclotomic ramification obstruction in the [moderate-points problem](l-moderate-points-and-pro-l-kernel-fields.md). The determinant identity is used both in the reconstruction proof and in the single-prime twist counterexamples for [elliptic torsion fields](torsion-fields-determine-non-cm-elliptic-curves.md).
