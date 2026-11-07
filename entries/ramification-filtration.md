---
title: Ramification filtration in upper numbering
kind: definition
summary: The decreasing filtration of the Galois group of a local field by ramification groups in upper numbering. It is compatible with quotients, so it is defined on absolute Galois groups and on their quotients.
tags: [local-fields, ramification]
---

**Finite level.** Let $L/K$ be a finite Galois extension of local fields with group $G$ and separable residue extension, let $v_L$ be the normalized valuation of $L$, and let $A_L$ be its valuation ring. For real $x \ge -1$, put

$$G_x = \{ s \in G : v_L(s(a) - a) \ge x + 1 \text{ for all } a \in A_L \}.$$

Put $\varphi_{L/K}(t) = \int_0^t dx / (G_0 : G_x)$, let $\psi_{L/K}$ be its inverse, and define $G^x = G_{\psi_{L/K}(x)}$ [@yamagata1976, §1].

**Infinite level.** Upper numbering is compatible with quotients: for a closed normal subgroup $N$ of $G$, one has $(G/N)^{(v)} = G^{(v)} N / N$. So for an infinite Galois extension of a local field, the groups $G^{(v)}$ are the inverse limits of their images in the finite quotients [@hyeon2025, §2, Ramification groups in upper numbering].

**Conventions.** Sources differ on the indexing. Some use all $v \ge 0$ [@abrashkin2010, Introduction], and some use only the higher ramification groups with index $> 0$ [@mochizuki1997, Theorem 4.2].
