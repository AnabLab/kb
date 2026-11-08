---
title: Uniform symbol-length bounds for elementary-type groups
kind: theorem
summary: 'Efrat bounds pullbacks of a fixed cohomology class uniformly over standard elementary-type pro-p groups. For such groups, every value of an m-fold Massey product has symbol length at most $\lfloor m^2/4\rfloor+m$.'
tags: [galois-cohomology, pro-p-groups, milnor-k-theory]
edges:
  - {to: massey-vanishing-conjecture, label: analogous-to, note: 'Controls the symbol length of every value of a defined product.'}
---

**Setting.** Fix a prime $p$. Let $(G,\theta)$ belong to the standard class $\mathcal E_p$ of [elementary-type pairs](elementary-type-conjecture.md) [@efrat2024symbol, Examples 2.4 and 3.2, pp. 8–10]. Write $H^n(G)=H^n(G,\mathbb F_p)$ with trivial coefficients. A *symbol* is a cup product of $n$ degree-one classes; $\mathrm{sl}(\omega)$ is the least positive number of symbols summing to $\omega$, or $\infty$ if unavailable [@efrat2024symbol, Introduction, p. 2].

**Uniform pullbacks (Efrat).** For any pro-$p$ group $Q$, $n\ge2$ and $\eta\in H^n(Q)$, there is $M=M(Q,n,\eta)<\infty$, independent of $(G,\theta)\in\mathcal E_p$ and the continuous homomorphism $\rho:G\to Q$, such that
$$\mathrm{sl}(\rho^*\eta)\le M.$$
The bound is explicit for finite $Q$ [@efrat2024symbol, Theorem A, p. 3, and Theorem 8.3, p. 23].

**Massey values.** For $m\ge2$ and $a_1,\ldots,a_m\in H^1(G)$, every $\omega\in\langle a_1,\ldots,a_m\rangle\subseteq H^2(G)$ satisfies
$$\mathrm{sl}(\omega)\le\left\lfloor\frac{m^2}{4}\right\rfloor+m$$
[@efrat2024symbol, Theorem B, p. 5, and Theorem 9.3, p. 25]. This bounds every value whenever the product is defined.

**Scope.** Extending these assertions to every finitely generated $G_F(p)$ for $F$ containing a primitive $p$th root of unity is conditional on the elementary type conjecture [@efrat2024symbol, Example 3.2, p. 10, and §9, p. 24].
