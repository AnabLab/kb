---
title: Unramified Galois cohomology
kind: definition
summary: Unramified Galois classes have zero residue at every divisorial valuation. For a finite group, stable unramified cohomology consists of its classes that remain unramified in the invariant field of a faithful representation, independently of that representation.
tags: [function-fields, galois-cohomology, valuations]
---

**Fields.** Let $K/k$ be a function field over an algebraically closed field, $\ell\ne\operatorname{char}(k)$, $n,i\ge1$ and $M=\mathbb Z/\ell^n$. Write $H^i(K,M)=H^i(G_K,M)$ for continuous cohomology of the absolute Galois group. Fix roots of unity to suppress Tate twists. Each divisorial valuation $v$ trivial on $k$ has a residue map
$$
\partial_v:H^i(K,M)\longrightarrow H^{i-1}(\kappa(v),M).
$$
Define
$$
H^i_{\mathrm{nr}}(K/k,M)=\bigcap_v\ker(\partial_v).
$$
Here divisorial valuations are those arising from prime divisors on normal models of $K/k$; the intersection ranges over all such models [@bogomolovpetrovtschinkel2008, §6, p. 16].

**Finite groups.** Let $G$ be finite with $|G|$ invertible in $k$, $V$ a faithful $k$-representation and $F=k(V)^G$. The natural map $G_F\to G$ defines
$$
H^i_s(G,M)=\operatorname{im}\bigl(H^i(G,M)\to H^i(F,M)\bigr),
\qquad
H^i_{s,\mathrm{nr}}(G,M)=H^i_s(G,M)\cap H^i_{\mathrm{nr}}(F/k,M).
$$
These groups, with their natural identifications, are independent of $V$; the ground field $k$ remains part of the data [@bogomolovpetrovtschinkel2008, Proposition 4.3, p. 13; §6 and Proposition 6.2, pp. 16–17].
