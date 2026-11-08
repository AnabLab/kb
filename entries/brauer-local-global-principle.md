---
title: Local-global degree-two cohomology over algebraic number fields
kind: theorem
summary: 'For every algebraic extension K of Q, degree-two mod-l Galois cohomology injects into its local groups and surjects onto those at any finite set of places (Neukirch). These two properties force henselianity in his characterization of algebraic p-adic fields.'
tags: [number-fields, local-fields, galois-cohomology]
edges:
  - {to: local-correspondence-at-the-boundary, label: analogous-to, note: "With restricted ramification, a class-group term obstructs the corresponding injectivity [@ivanov2014, proof of Proposition 3.5, p. 12]."}
---

**Theorem (Neukirch).** Let $K/\mathbb Q$ be algebraic, possibly infinite, and let $\ell$ be a prime. For each place $v$, choose a henselization $K_v^h$; at archimedean places use a real closure or an algebraic closure, as appropriate. Equivalently, use the fixed field of a decomposition subgroup in an algebraic closure of $K$. Then restriction gives an injection
$$H^2(G_K,\mathbb F_\ell)\longrightarrow
\prod_v H^2(G_{K_v^h},\mathbb F_\ell),$$
and, for every finite set $T$ of places, a surjection
$$H^2(G_K,\mathbb F_\ell)\longrightarrow
\prod_{v\in T}H^2(G_{K_v^h},\mathbb F_\ell).$$
The coefficients have trivial action; no root-of-unity hypothesis is imposed [@neukirch1977, Lemma 2 and its footnote, pp. 69–70].

**Source's proof.** For number fields, Neukirch uses Tate–Poitou duality and local-global injectivity for $\ell$th-power classes. A finite place outside $T$ absorbs the final duality obstruction when it is nonzero. He passes to arbitrary algebraic extensions by an ascent argument [@neukirch1977, proof of Lemma 2, p. 70].

**Brauer comparison.** For a number field $F$ with completions $F_v$, the fundamental exact sequence is
$$0\longrightarrow\operatorname{Br}(F)\longrightarrow
\bigoplus_v\operatorname{Br}(F_v)
\xrightarrow{\ \sum_v\operatorname{inv}_v\ }\mathbb Q/\mathbb Z
\longrightarrow0.$$
Thus global Brauer classes have finite local support and their invariants sum to zero. Complex places contribute zero; real invariants lie in $\frac12\mathbb Z/\mathbb Z$ [@milnecft, VIII, Theorem 4.2 and Example 4.4(b), p. 241].

**Restricted ramification.** Let $F$ be a totally imaginary number field containing $\mu_\ell$, and let $S$ be a finite set containing the archimedean places and all places above two distinct rational primes, one of them $\ell$. Put $G_{F,S}=\operatorname{Gal}(F_S/F)$, where $F_S$ is the maximal extension unramified outside $S$, and let $D_v\subseteq G_{F,S}$ be a decomposition subgroup. Poitou–Tate duality gives
$$0\longrightarrow\operatorname{Cl}_S(F)/\ell
\longrightarrow H^2(G_{F,S},\mathbb F_\ell)
\longrightarrow\bigoplus_{v\in S}H^2(D_v,\mathbb F_\ell),$$
where $\operatorname{Cl}_S(F)$ is the ideal class group of the ring of $S$-integers. The possible kernel explains the obstruction to carrying Neukirch's argument over to [arithmetic curves](local-correspondence-at-the-boundary.md) [@ivanov2014, §1, p. 1 and proof of Proposition 3.5, p. 12].
