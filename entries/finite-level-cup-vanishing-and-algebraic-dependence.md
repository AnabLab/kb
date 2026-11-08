---
title: Finite-level cup vanishing does not detect algebraic dependence
kind: theorem
summary: 'For every prime power $N$, a rational function field of transcendence degree two has algebraically independent functions with independent Kummer classes and zero mod-N cup product. Their Milnor symbol survives modulo the next prime power.'
tags: [function-fields, milnor-k-theory, galois-cohomology, reconstruction-algorithms]
edges:
  - {to: milnor-k-ring, label: uses}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "For the translation of the Milnor-symbol calculation to cup products, using the prime-power form stated in [@cheboluefratminac2012, §1]."}
  - {to: milnor-k-reconstruction-function-fields, label: analogous-to, note: "Contrasts with its algebraic-dependence test modulo infinitely divisible elements; a fixed prime-power quotient does not admit the same test."}
  - {to: mod-l-reconstruction-from-rational-quotients, label: analogous-to, note: "Shows a limitation of testing individual pairs by cup vanishing; it does not obstruct reconstruction using the whole ring and rational subgroups."}
---

**Example, proved here.** Let $k$ be algebraically closed, let $\ell\ne\operatorname{char}k$ be prime, and fix $m\ge1$. Put $N=\ell^m$ and
$$
K=k(s,t),\qquad x=s t^N,\qquad y=1-s,
$$
where $s,t$ are independent variables. Then:

1. $x,y$ are algebraically independent over $k$.
2. Their classes generate a copy of $(\mathbb Z/N)^2$ in $K^\times/(K^\times)^N$.
3. $\{x,y\}=0$ in $K^M_2(K)/N$, but $\{x,y\}\ne0$ in $K^M_2(K)/\ell^{m+1}$.

Consequently, their Kummer classes have zero cup product in $H^2(K,\mu_N^{\otimes2})$ and nonzero cup product at level $\ell^{m+1}$. Here the classes at the two levels are those of the same functions. This translation uses the prime-power norm-residue isomorphism [@cheboluefratminac2012, §1].

**Proof.** Since $s=1-y$ and $t^N=x/(1-y)$, the field $K$ is algebraic over $k(x,y)$. Thus $k(x,y)$ has transcendence degree two. If $x^a y^b$ is an $N$th power, the valuations at $s=0$ and $s=1$ give $N\mid a$ and $N\mid b$, respectively. This proves the first two assertions.

Bilinearity and the Steinberg relation give the integral identity
$$
\{x,y\}=\{s,1-s\}+N\{t,1-s\}=N\{t,1-s\}.
$$
This proves vanishing modulo $N$. To check survival at the next level, use the tame symbol at $t=0$,
$$
\partial_t:K^M_2(K)\longrightarrow k(s)^\times,
$$
with the convention $\partial_t\{u,t\}=\bar u$ for a unit $u$. Existence and this convention are given in [@stacks2026, Remark 42.6.4 (Tag 0EAY) and §42.5, properties (2) and (6) (Tag 0EAH)]. It sends $\{x,y\}$ to $(1-s)^{-N}$. Composing with $\operatorname{ord}_{s=1}:k(s)^\times\to\mathbb Z$ therefore sends the symbol to $-N$. If the symbol belonged to $\ell^{m+1}K^M_2(K)$, this integer would be divisible by $\ell^{m+1}$, a contradiction.

**What the example excludes.** The dependent pair $(s,1-s)$ and the independent pair $(s t^N,1-s)$ have identical images in $(K^\times/(K^\times)^N)^2$. Thus algebraic dependence of particular function representatives is not even a well-defined relation on these finite-level classes. The valuation argument also shows that $\{x,y\}$ is not infinitely $\ell$-divisible. This is compatible with the [dependence test modulo infinitely divisible elements](milnor-k-reconstruction-function-fields.md), and does not disprove reconstruction from the entire finite-level ring. The same construction works after adjoining any number of independent variables, using the same two valuations.
