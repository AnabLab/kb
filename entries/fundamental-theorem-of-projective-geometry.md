---
title: The fundamental theorem of projective geometry
kind: theorem
summary: 'For vector spaces of dimension at least three, including infinite dimension, a bijection of projective points preserving collinearity in both directions lifts to a semilinear isomorphism, unique up to a nonzero scalar. This recovers addition in birational reconstruction.'
tags: [projective-geometry, reconstruction-algorithms]
edges:
  - {to: combinatorial-geometry-reconstruction, label: analogous-to, note: "Algebraic-dependence geometry replaces projective geometry in mod-l reconstruction [@topaz2016, §1.3, p. 6]."}
---

**Statement.** Let $V$ and $W$ be vector spaces over fields $k$ and $l$, respectively, each of dimension at least three; infinite dimensions are allowed. The points of $\mathbb P_k(V)$ are the one-dimensional subspaces, and its lines are the point sets of two-dimensional subspaces. Suppose
$$
\phi:\mathbb P_k(V)\xrightarrow{\sim}\mathbb P_l(W)
$$
preserves collinearity in both directions. Then there are a field isomorphism $\sigma:k\xrightarrow{\sim}l$ and an additive bijection $F:V\xrightarrow{\sim}W$ with
$$
F(av)=\sigma(a)F(v),\qquad \phi(kv)=lF(v)
\quad(a\in k,\ v\ne0).
$$
Any two such semilinear lifts differ by multiplication by an element of $l^\times$ [@pankov2013semilinear, §2, p. 2]. The dimension bound is on the vector spaces: their projective dimensions are at least two.

**Role in field reconstruction.** For a field extension $K/k$, the set $K^\times/k^\times$ is the projective space of the $k$-vector space $K$. In the [pro-l strategy](pro-l-strategy-for-bogomolov-pop.md), recognizing this set and its lines lets projective geometry recover the vector-space structure before the quotient's multiplication is used to recover the field [@topaz2016, §1.1, p. 3]. In the [Torelli reconstruction](torelli-theorem-function-fields.md), the semilinear lift is normalized by $F(1)=1$, and compatibility with multiplication on projective classes then gives a field isomorphism [@topaz2025, Proposition 5.10 and proof, pp. 17–18].
