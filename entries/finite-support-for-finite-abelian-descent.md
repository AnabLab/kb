---
title: Finite support forces rationality in finite abelian descent
kind: theorem
summary: 'For a positive-genus curve over a number field, an adelic point surviving finite abelian descent is rational if its components lie in one finite subscheme at density-one many places (Stoll). No finiteness assumption on the Tate–Shafarevich group is needed.'
tags: [curves, number-fields, section-conjecture]
edges:
  - {to: descent-obstructions-for-galois-sections, label: analogous-to, note: "Finite descent there identifies adelic families of point sections; finite abelian descent here forces rationality once finite support is known."}
---

**Convention.** For a proper $k$-scheme $X$ over a number field, use the corrected modified adeles
$$
X(\mathbb A_k)_\bullet=
\prod_{v\nmid\infty}X(k_v)\times
\prod_{v\text{ real}}\pi_0(X(k_v)).
$$
Complex factors are omitted, including for disconnected torsors and finite subschemes [@stoll2017descenterrata, §1, p. 1].

**Descent.** The locus $C(\mathbb A_k)_\bullet^{\mathrm{f\text{-}ab}}$ consists of points lifting to an adelic point on some twist of every torsor over $C$ under a finite commutative $k$-group scheme [@stoll2007descent, Definitions 5.2 and 5.4, pp. 362 and 364].

**Theorem (Stoll).** Let $C/k$ be smooth, projective and geometrically connected of genus at least $1$, and let $Z\subset C$ be a finite subscheme. If $P\in C(\mathbb A_k)_\bullet^{\mathrm{f\text{-}ab}}$ satisfies $P_v\in Z(k_v)$ for a density-one set of finite places, then $P$ is the diagonal image of a point of $Z(k)$. No assumption on the Tate–Shafarevich group is needed [@stoll2007descent, Theorem 8.2, pp. 383–384]. For curves, this descent locus equals $C(\mathbb A_k)_\bullet^{\mathrm{Br}}$ [@stoll2007descent, Corollary 7.3, pp. 379–380].

**Real-place caution.** The conclusion specifies real connected components, not individual real points. In the application to fibres of a morphism, membership in the fibre can fail at real places; the density-one hypothesis suffices [@stoll2017descenterrata, §3, p. 2].
