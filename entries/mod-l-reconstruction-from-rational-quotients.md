---
title: Mod-l reconstruction from rational quotients
kind: theorem
summary: In transcendence degree at least $5$, Topaz reconstructs a function field up to inseparable extensions from its mod-$\ell$ abelian-by-central Galois group with the rational quotients, and also from mod-$\ell$ Milnor K-theory in degrees $1, 2$ with the rational subgroups.
tags: [function-fields, galois-groups, milnor-k-theory]
edges:
  - {to: mod-l-bogomolov-pop-conjecture, label: addresses, note: "It reduces the conjecture in this range to recovering the rational quotients from $G^c_K$ [@topaz2016, §1.4]."}
  - {to: combinatorial-geometry-reconstruction, label: uses, note: "It replaces the fundamental theorem of projective geometry, which is unavailable mod $\\ell$ [@topaz2016, §1.3]."}
  - {to: milnor-k-ring, label: uses}
---

**Galois form.** A rational quotient of $G^a_K$ is the map $G^a_K \to G^a_F$ for a subextension $F = k(t)$ of $K|k$ that is relatively algebraically closed in $K$. Let $K|k$ and $L|l$ be function fields over algebraically closed fields with $\mathrm{char}\, K \ne \ell$ and $\mathrm{trdeg}(K|k) \ge 5$. There is an isomorphism-compatible group-theoretic recipe that constructs $K^i|k$ from $G^c_K$ with the collection of rational quotients of $G^a_K$. The canonical map from $\mathrm{Isom}^i_F(K,L)$ to the isomorphisms $G^a_L \to G^a_K$ compatible with the pairing and with rational quotients, up to scalars, is a bijection [@topaz2016, Theorem A].

**Milnor form.** For $\mathrm{char}\, K, \mathrm{char}\, L \ne \ell$ and $\mathrm{trdeg}(K|k) \ge 5$, the same holds with the data $k^M_1(K)$, $k^M_2(K)$, the product $k^M_1 \otimes k^M_1 \to k^M_2$, and the rational subgroups of $k^M_1(K)$ [@topaz2016, Theorem B].

**Open step.** Recovering the rational quotients group-theoretically from $G^c_K$ remained open at the time of the paper [@topaz2016, §1.4].

**Dimension.** Most of the argument works in lower transcendence degree. The bound comes from [the theorem on combinatorial geometries](combinatorial-geometry-reconstruction.md), and Topaz expects the results to hold for transcendence degree at least $3$ [@topaz2016, §1.3].
