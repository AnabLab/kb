---
title: Grothendieck conjecture for configuration spaces in positive characteristic
kind: theorem
summary: 'Hoshi–Sawada–Tsujimura reconstruct configuration spaces of hyperbolic curves from tame fundamental groups over perfections of finitely generated fields of positive characteristic, with nonisotriviality over infinite fields. A relative version inverts Frobenius.'
tags: [curves, fundamental-groups, function-fields, reconstruction]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: tamagawa-grothendieck-conjecture-for-affine-curves, label: uses, note: 'Only the tame hyperbolic-curve theorem over finite fields, used in the induction base [@hoshisawadatsujimura2024, proof of Theorem 6.7, p. 39].'}
  - {to: mochizuki-grothendieck-conjecture-proper-curves-finite-fields, label: uses, note: 'The proper-curve theorem supplies the other finite-field induction base [@hoshisawadatsujimura2024, proof of Theorem 6.7, p. 39].'}
  - {to: grothendieck-conjecture-for-configuration-spaces-over-tknd-avkf-fields, label: analogous-to, note: 'Both reconstruct configuration spaces from arithmetic fundamental groups; the base fields and hypotheses differ.'}
---

**Groups.** For a [hyperbolic curve](hyperbolic-curve.md) $U=X\setminus D$ over $k$ and $n\ge1$, put
$$U_n=U^n\setminus\bigcup_{i<j}\{x_i=x_j\}.$$
Let $\Pi_{U,n}$ be the arithmetic tame fundamental group relative to the boundary of the canonical compactified configuration space $X^+_{(n)}$, and let $\Delta_{U,n}=\ker(\Pi_{U,n}\to G_k)$ [@hoshisawadatsujimura2024, Definition 2.6, Remark 2.6.1 (i), and Introduction, p. 4].

**Absolute theorem (Hoshi–Sawada–Tsujimura, preprint).** Let $U/k,V/l$ be hyperbolic curves and $n,m\ge1$. Suppose $k,l$ are perfections of finitely generated fields of positive characteristic. If $k$ is infinite, suppose $U$ is nonisotrivial, meaning it is not geometrically constant. Then
$$\mathrm{Isom}_{\mathrm{Sch}}(U_n,V_m)\xrightarrow{\sim}\mathrm{Isom}_{\mathrm{cont}}(\Pi_{U,n},\Pi_{V,m})/\mathrm{Inn}(\Pi_{V,m})$$
is bijective [@hoshisawadatsujimura2024, Theorem 6.7, p. 39].

**Relative theorem.** For a common infinite finitely generated field $k$ of positive characteristic and nonisotrivial $U$, the bijection is
$$\mathrm{Isom}_{k,F^{-1}}(U_n,V_m)\xrightarrow{\sim}\mathrm{Isom}_{G_k}(\Pi_{U,n},\Pi_{V,m})/\Delta_{V,m},$$
where the target uses conjugation by $\Delta_{V,m}$ and the source localizes $k$-varieties at universal homeomorphisms [@hoshisawadatsujimura2024, Corollary 6.9, p. 43, and Introduction, pp. 3–5].

**Mechanism and scope.** Intrinsic recognition of generalized fiber subgroups permits induction on $n$ [@hoshisawadatsujimura2024, Theorem 4.8, p. 28, and proof of Theorem 6.7, pp. 39–40]. Nonisotriviality cannot generally be dropped over infinite fields [@hoshisawadatsujimura2024, Remark 6.7.1]. For products of curves, incompatible Frobenius twists can obstruct the analogous bijection even over finite fields [@hoshisawadatsujimura2024, Remark 6.7.2 (i), pp. 40–42].
