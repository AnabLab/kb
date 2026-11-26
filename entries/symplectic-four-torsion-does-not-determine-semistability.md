---
title: Symplectic four-torsion does not determine semistability
kind: theorem
summary: 'Over a p-adic field containing i, p odd, two elliptic curves have isomorphic full 4-torsion Galois modules with their Weil pairings, but finite monodromy groups 1 and C_2. A degree-three quotient changes the pairing sign in the ramified quadratic-twist example.'
tags: [elliptic-curves, local-fields, ramification, reconstruction-algorithms]
edges:
  - {to: four-torsion-does-not-determine-semistable-reduction, label: uses, note: 'Parts 1 and 2 supply the pairing-inverting isomorphism and the two different semistable inertia subgroups used here.'}
  - {to: weil-pairing-and-cyclotomic-character, label: uses, note: 'Uses the canonical Weil pairings on elliptic torsion; isogeny compatibility is cited separately below.'}
  - {to: finite-torsion-recovers-semistable-inertia, label: uses, note: 'Its definition of J and its inertia-index criterion transfer the semistabilizing degrees to the quotient curve.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite with $p$ odd, assume $i\in K$ is a primitive fourth root of unity, and choose a uniformizer $\pi$. Put $L=K(\sqrt\pi)$, and let $\varepsilon:G_K\to\{\pm1\}$ be its quadratic character. Take the Tate curve $E=E_\pi$ and its quadratic twist $D=E^\varepsilon$ from [the level-four example](four-torsion-does-not-determine-semistable-reduction.md). Write $e_{C,4}$ for the canonical Weil pairing of an elliptic curve $C$.

Tate uniformization identifies $E(\bar K)$ with $\bar K^\times/\pi^{\mathbb Z}$ [@kedlaya2004tate, Theorem 1, p. 3]. The image $C\subset E[3]$ of $\mu_3$ is a $G_K$-stable subgroup of order three. Let $\varphi:D_L\xrightarrow{\sim}E_L$ be the twisting isomorphism, and put
$$C_D=\varphi^{-1}(C),\qquad B=D/C_D.$$

**Theorem (proved here).** The quotient $B$ and its degree-three isogeny $f:D\to B$ are defined over $K$.

1. There is an isomorphism of full $G_K$-modules $\psi:E[4]\xrightarrow{\sim}B[4]$ satisfying
   $$e_{B,4}(\psi P,\psi Q)=e_{E,4}(P,Q).$$
   In fact every $G_K$-isomorphism $E[4]\to B[4]$ preserves the Weil pairings. Both four-torsion fields equal $K(\pi^{1/4})$.
2. $E$ is semistable, whereas $B$ is not. Their unipotent-inertia subgroups and finite monodromy groups are
   $$J_E=I_K,\qquad J_B=I_K\cap G_L,\qquad\Phi_E=1,\qquad\Phi_B\simeq C_2.$$
   Their minimum semistabilizing degrees, for either arbitrary or Galois extensions, are respectively one and two.

**Proof.** *The quotient over $K$.* No nonidentity root of unity lies in $\pi^{\mathbb Z}$, by valuation, so $C$ has order three. Uniformization is $G_K$-equivariant, so $C$ is $G_K$-stable, even when its individual points are not $K$-rational. The twisting identity is
$$\varphi(gP)=\varepsilon(g)\,g(\varphi(P)).$$
Consequently $C_D$ is stable under $G_K$: both Galois action and negation preserve $C$. A Galois-stable finite subgroup is the kernel of a separable isogeny defined over the base field [@sutherland2025isogenykernels, Theorem 5.11 and the following field-of-definition paragraph, p. 5]. Its degree is the order of its kernel [@sutherland2025isogenykernels, Theorem 5.8, p. 3]. Thus $f$ is defined over $K$ and has degree three.

*The pairing sign.* The dual isogeny satisfies $\widehat f f=[3]$ and $f\widehat f=[3]$ [@sutherland2025torsion, Theorem 6.7, p. 3; Lemma 6.10, p. 5]. Since multiplication by three is invertible on four-torsion, $f_4:D[4]\to B[4]$ is a $G_K$-isomorphism, with inverse $[3]\widehat f$ on four-torsion. Isogeny compatibility and bilinearity of the Weil pairing give
$$e_{B,4}(fR,fS)=e_{D,4}(R,\widehat f fS)=e_{D,4}(R,S)^3$$
[@sutherland2025weil, Theorem 23.23, p. 10].

Part 1 of [the level-four example](four-torsion-does-not-determine-semistable-reduction.md) supplies a $G_K$-isomorphism $\psi_0:E[4]\to D[4]$, and every such isomorphism inverts the pairing. Hence $\psi=f_4\psi_0$ satisfies
$$e_{B,4}(\psi P,\psi Q)=e_{E,4}(P,Q)^{-3}=e_{E,4}(P,Q),$$
because its values lie in $\mu_4$. Every other $G_K$-isomorphism $\eta:E[4]\to B[4]$ has $f_4^{-1}\eta:E[4]\to D[4]$ pairing-inverting, so the same calculation applies to $\eta$. The four-torsion fields of $E$ and $D$ are both $K(\pi^{1/4})$ by that example; the equivariant isomorphism $f_4$ gives the same field for $B$.

*The inertia obstruction.* On $T_2$, the same dual-isogeny identities make $T_2f$ a $G_K$-equivariant isomorphism: three is a unit in $\mathbb Z_2$. Thus each inertia element acts unipotently on $T_2B$ exactly when it does on $T_2D$, so $J_B=J_D$. Part 2 of the level-four example gives $J_E=I_K$ and $J_D=I_K\cap G_L$. The semistable criterion and the degree divisibility in [finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md), part 2, now give all the assertions in part 2; the ramified quadratic Galois extension $L/K$ attains the bound for $B$. $\square$

**Scope.** This strengthens the failure of reconstruction at level four to include the canonical principal polarizations through their Weil pairings. For example, it applies over $\mathbb Q_5$. It does not claim an isomorphism of polarized Tate modules or of higher torsion modules, and makes no novelty claim beyond the deduction above.
