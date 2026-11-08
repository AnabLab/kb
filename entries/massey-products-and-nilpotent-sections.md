---
title: Massey products obstruct nilpotent Galois sections
kind: theorem
summary: 'For the thrice-punctured line in characteristic zero, if an abelian section class $(a,b)$ lifts to the geometric class-$n$ quotient, then each $n$-fold Massey product of $n-1$ copies of $-a$ and one $-b$ contains zero, with cyclotomic coefficients, away from primes at most $n$ (Wickelgren).'
tags: [curves, fundamental-groups, section-conjecture, galois-cohomology]
edges:
  - {to: section-conjecture, label: addresses, note: "Necessary conditions on abelianized sections for the affine version, obtained from nilpotent quotients."}
  - {to: triple-massey-products-in-galois-cohomology, label: analogous-to, note: "Here coefficients are cyclotomically twisted and defining systems come from geometric lifts; the target concerns arbitrary mod-p classes with trivial coefficients."}
---

**Setting.** Let $k$ have characteristic zero, $G_k$ its absolute Galois group, and $X=\mathbb{P}^1_k\setminus\{0,1,\infty\}$, based at the unit tangent at $0$. Fix $n\geq2$, let $\Sigma$ be the primes not dividing $n!$, and put $A=\prod_{\ell\in\Sigma}\mathbb{Z}_\ell$. Write $A(j)$ for the cyclotomic twist. Let $\pi=\pi_1(X_{\bar k})^\Sigma$, its maximal pro-$\Sigma$ quotient, and $[\pi]_1=\pi$, $[\pi]_{r+1}=\overline{[\pi,[\pi]_r]}$. Puncture loops identify $\pi^{\mathrm{ab}}=A(1)^2$ [@wickelgren2012nilpotent, §3.11, p. 17]. All cohomology is continuous.

**Lifting.** The central extension

$$1\longrightarrow[\pi]_r/[\pi]_{r+1}\longrightarrow\pi/[\pi]_{r+1}\longrightarrow\pi/[\pi]_r\longrightarrow1$$

gives a boundary map

$$\delta_r:H^1(G_k,\pi/[\pi]_r)\longrightarrow H^2(G_k,[\pi]_r/[\pi]_{r+1}).$$

A class lifts to $H^1(G_k,\pi/[\pi]_{r+1})$ exactly when its boundary vanishes. Starting with an abelian class, one must consider all its lifts at each successive stage [@wickelgren2012three, §12.2.3, pp. 11–12].

**Theorem (Wickelgren).** If $(a,b)\in H^1(G_k,A(1))^2$ lies in the image of

$$H^1(G_k,\pi/[\pi]_{n+1})\longrightarrow H^1(G_k,\pi^{\mathrm{ab}}),$$

then

$$0\in\langle-a,\ldots,-a,-b,-a,\ldots,-a\rangle\subseteq H^2(G_k,A(n))$$

for every position of the single $-b$ among the $n$ entries [@wickelgren2012nilpotent, Corollary 3.12, p. 18]. The coefficient twist follows [@wickelgren2012nilpotent, Definition 2.3, p. 5].

More precisely, a cocycle with values in $\pi/[\pi]_n$ supplies defining systems whose Massey values are the corresponding degree-$n$ Magnus coefficients of $\delta_n$ [@wickelgren2012nilpotent, Proposition 2.12 and Remark 2.13, p. 12].

**Rational points and scope.** A point $t\in X(k)$ has abelianized Kummer class $(\kappa(t),\kappa(1-t))$, where $\kappa:k^\times\to H^1(G_k,A(1))$ is the Kummer map [@wickelgren2012three, (12.15), p. 10]. The theorem gives necessary conditions, without asserting a converse or a characterization of rational points. Compare [triple Massey vanishing](triple-massey-products-in-galois-cohomology.md), which allows the defining system to vary.
