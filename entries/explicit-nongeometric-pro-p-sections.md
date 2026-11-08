---
title: Explicit nongeometric pro-p sections of the thrice-punctured line
kind: theorem
summary: 'For odd regular $p$, over number fields or finite extensions of $\mathbb{Q}_p$ containing $\mu_p$, the pairs $(p^m,p^n)$ with $m,n\ne0$ lift to nongeometric pro-$p$ sections of the thrice-punctured line. Hoshi–Tsujimura also obtain cyclotomic Massey vanishing for these pairs.'
tags: [curves, number-fields, local-fields, fundamental-groups, section-conjecture, galois-cohomology]
edges:
  - {to: section-conjecture, label: analogous-to, note: "Counterexamples to its affine geometrically pro-p analogue, including the allowance for cuspidal sections."}
  - {to: massey-products-and-nilpotent-sections, label: uses, note: "The Massey consequence applies Wickelgren's obstruction [@hoshitsujimura2021sections, proof of Corollary 2.6, p. 12]."}
---

**Setting.** Let $p$ be odd and regular, meaning $p$ does not divide the class number of $\mathbb{Q}(\zeta_p)$. Let $F$ be a number field or finite extension of $\mathbb{Q}_p$ containing $\mu_p$. Put $X=\mathbb{P}^1_F\setminus\{0,1,\infty\}$ and $J=\mathbb{G}_{m,F}^2$, with $i(t)=(t,1-t)$. Write $\Pi_Y\to G_F$ for the geometrically pro-$p$ fundamental group sequence, retaining the full $G_F$.

**Theorem (Hoshi–Tsujimura).** For nonzero integers $m,n$, the section of $\Pi_J\to G_F$ associated with $(p^m,p^n)\in J(F)$ lifts along $i$ to a section of $\Pi_X\to G_F$. These lifts are nongeometric: their images lie in no decomposition group associated with a point of $\mathbb{P}^1(\bar F)$, including cusps [@hoshitsujimura2021sections, Theorem A (iii), p. 3 and Remark 2.5.1, p. 11]. Section classes are taken modulo the geometric kernel.

**Massey consequence.** Let $\kappa_F:F^\times\to H^1(G_F,\mathbb{Z}_p(1))$ be Kummer, and $\mathbb{Z}_p(r)=\mathbb{Z}_p(1)^{\otimes r}$. For $2\le r<p$,

$$0\in\langle\kappa_F(p^m),\ldots,\kappa_F(p^n),\ldots,\kappa_F(p^m)\rangle
\subseteq H^2(G_F,\mathbb{Z}_p(r))$$

for every position of the single $\kappa_F(p^n)$ [@hoshitsujimura2021sections, Corollary 2.6, pp. 11–12]. These are the cyclotomic coefficients of [Wickelgren's section obstruction](massey-products-and-nilpotent-sections.md).

