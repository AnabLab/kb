---
title: Prime-to-p Tate modules do not bound Néron component groups
kind: theorem
summary: 'Over any fixed p-adic field, Tate curves can share their entire prime-to-p torsion system with all Weil pairings, and their symplectic rational p-adic Tate module, while their Neron component groups have unbounded orders p^(2r).'
tags: [elliptic-curves, local-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: weil-pairing-and-cyclotomic-character, label: uses, note: 'Uses the compatible Weil pairings on torsion and Tate modules; isogeny compatibility is cited below.'}
  - {to: finite-torsion-does-not-determine-good-reduction, label: analogous-to, note: 'Strengthens its unbounded-component-group example from one finite level to the entire paired prime-to-p torsion system over one fixed field.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: analogous-to, note: 'Taking powers of a Tate parameter preserves its rational p-adic module; the square powers here also preserve its pairing.'}
  - {to: finite-torsion-recovers-semistable-inertia, label: analogous-to, note: 'All curves here have trivial finite semistability obstruction, although their Neron component groups grow.'}
---

**Setting.** Fix a finite extension $K/\mathbb Q_p$, with normalized valuation $v_K$, and a uniformizer $\pi$. For every integer $r\ge0$ put
$$E_r=E_{\pi^{p^{2r}}},$$
where $E_q$ denotes the Tate elliptic curve. These curves exist over $K$, have split multiplicative reduction, and admit Galois-equivariant uniformizations $E_q(\bar K)\simeq\bar K^\times/q^{\mathbb Z}$ [@kedlaya2004tate, Theorem 1, p. 3; Theorem 2(b), p. 4]. Write
$$C(E_r)=E_r(K)/E_r^0(K)$$
for the group of rational Néron components, where $E_r^0(K)$ consists of points reducing to the identity component.

**Theorem (deduced here).** The family has the following properties, over the same field $K$.

1. For every $n\ge2$ prime to $p$, there is a $G_K$-equivariant isomorphism $f_{r,n}:E_0[n]\xrightarrow{\sim}E_r[n]$ preserving the canonical Weil pairings. These isomorphisms commute with all torsion inclusions and multiplication transition maps. Equivalently, the integral modules $\prod_{\ell\ne p}T_\ell E_r$ are isomorphic with their pairings.
2. The rational modules $V_pE_r=\mathbb Q_p\otimes_{\mathbb Z_p}T_pE_r$ are also $G_K$-equivariantly isomorphic with their $\mathbb Q_p(1)$-valued Weil pairings.
3. Nevertheless,
   $$C(E_r)\simeq\mathbb Z/p^{2r}\mathbb Z,$$
   so the Tamagawa numbers are unbounded.

**Proof.** For every Tate parameter $q\in K$ there is a degree-$p$ isogeny $E_q\to E_{q^p}$ over $K$, induced on uniformizations by $z\mapsto z^p$ [@dokchitserdokchitser2013local, Theorem A.1, p. 19]. Composing $2r$ such isogenies gives
$$\varphi_r:E_0\longrightarrow E_r,\qquad\deg\varphi_r=p^{2r}.$$
For $r=0$ take the identity. Its dual satisfies $\widehat\varphi_r\varphi_r=[p^{2r}]$ and $\varphi_r\widehat\varphi_r=[p^{2r}]$ [@sutherland2025torsion, Theorem 6.7, p. 3; Lemma 6.10, p. 5].

For $n$ prime to $p$, multiplication by $p^r$ is invertible on $n$-torsion. Define
$$f_{r,n}=[p^r]^{-1}\varphi_r\big|_{E_0[n]}.$$
The dual identities show that $[p^r]^{-1}\widehat\varphi_r$ is its inverse. All these maps are defined over $K$. The inverse of multiplication by $p^r$ is defined on the whole prime-to-$p$ torsion subgroup, so the maps are compatible as $n$ varies.

For an isogeny $\varphi:E\to E'$ of degree $d$, isogeny compatibility and bilinearity give
$$e_{E',n}(\varphi P,\varphi Q)=e_{E,n}(P,\widehat\varphi\varphi Q)=e_{E,n}(P,Q)^d$$
[@sutherland2025weil, Theorem 23.23, p. 10]. Applying this with $d=p^{2r}$ and then scaling both arguments by the inverse of $p^r$ modulo $n$ makes the exponent $1$ modulo $n$. Thus $f_{r,n}$ preserves the pairing, proving part 1.

Passing to Tate modules gives the same pairing identity with multiplier $p^{2r}$. On $V_p$ the map
$$F_{r,p}=p^{-r}V_p(\varphi_r)$$
is defined, has inverse $p^{-r}V_p(\widehat\varphi_r)$, and has pairing multiplier $p^{-2r}p^{2r}=1$. This proves part 2; it concerns rational coefficients at $p$.

Finally, the component group of a Tate curve with $v_K(q)=d$ is cyclic of order $d$ [@cremona2008component, §2.1, theorem and proof, p. 2]. Here $v_K(\pi^{p^{2r}})=p^{2r}$, proving part 3. $\square$

**Scope.** Unlike the comparison with a good-reduction curve at a fixed finite level, this example uses every prime-to-$p$ level compatibly over one fixed field, with its Weil pairing. All curves have toric rank one and are semistable; their Néron component groups are different from the finite inertia obstruction to semistability. Good reduction itself remains detectable from one full prime-to-$p$ Tate module by the [Néron–Ogg–Shafarevich criterion](neron-ogg-shafarevich-criterion.md). The lost information here is the unbounded $p$-primary component-group order.
