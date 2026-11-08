---
title: Chebotarev density for number fields
kind: theorem
summary: 'In a finite Galois extension of number fields with group G, primes whose Frobenius lies in a conjugacy-stable subset C have Dirichlet density |C|/|G|. Restricting to primes of absolute residue degree one preserves that density.'
tags: [number-fields, galois-groups, reconstruction-algorithms]
---

**Density.** For a set $S$ of nonarchimedean primes of a number field $K$, its Dirichlet density, when it exists, is

$$
\delta(S)=\lim_{s\to1^+}
\frac{\sum_{\mathfrak p\in S}(N\mathfrak p)^{-s}}
{\log(1/(s-1))},
\qquad N\mathfrak p=|\mathcal O_K/\mathfrak p|.
$$

This is the density used here [@milnecft, Chapter VI, §4, p. 194].

**Theorem (Chebotarev).** Let $L/K$ be a finite Galois extension of number fields, with group $G$, and let $C\subseteq G$ be stable under conjugation. For an unramified prime $\mathfrak p$, write $\operatorname{Frob}_{\mathfrak p}(L/K)$ for its arithmetic Frobenius conjugacy class. Then

$$
\delta\bigl(\{\mathfrak p:\mathfrak p\text{ unramified in }L,
\ \operatorname{Frob}_{\mathfrak p}(L/K)\subseteq C\}\bigr)
=\frac{|C|}{|G|}
$$

[@milnecft, Chapter VIII, Theorem 7.4, p. 259]. In particular, for abelian $G$, the primes with Frobenius equal to a specified $\sigma\in G$ have density $1/[L:K]$ [@milnecft, Chapter VIII, Corollary 7.3, p. 258].

**Degree-one primes.** Let $T_1$ be the primes of $K$ of residue degree one over $\mathbb Q$. Then $\delta(T_1)=1$, and for every set $S$ having Dirichlet density,

$$
\delta(S\cap T_1)=\delta(S)
$$

[@milnecft, Chapter VI, Proposition 4.5 and Corollary 4.6, pp. 196–197]. Adding or removing finitely many primes also preserves density [@milnecft, Chapter VI, Proposition 4.4(c)–(d), p. 196].

**Role.** The [Kummer-completion argument](algebraic-elements-of-kummer-completions-of-number-fields.md) uses prescribed Frobenius at degree-one primes. [Smit's embedding criterion](l-series-homomorphisms-number-fields.md) uses the density of primes on which a finite-order character is trivial to identify characters [@smit2021hom, proof of Lemma 5.10, pp. 10–11].
