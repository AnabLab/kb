---
title: Strong Massey vanishing for elementary-type pro-2 groups
kind: theorem
summary: 'Quadrelli proves all-length strong mod-2 Massey vanishing for elementary-type pro-2 groups and their open subgroups, with unrestricted orientation. In particular it holds for Pythagorean fields with finitely many square classes.'
tags: [galois-cohomology, pro-p-groups, quadratic-forms]
edges:
  - {to: strong-massey-vanishing, label: uses, note: "the definition of the strong property"}
  - {to: massey-vanishing-conjecture, label: addresses, note: "all lengths for the maximal pro-2 groups in the field case below"}
---

**Theorem (Quadrelli).** Let $(G,\theta)$ be an oriented pro-$2$ group of [elementary type](elementary-type-conjecture.md). For every open subgroup $H\subseteq G$, including $H=G$, every $n\ge3$ and $a_1,\ldots,a_n\in H^1(H,\mathbb F_2)$,
$$
a_i\cup a_{i+1}=0\quad(1\le i<n)
\quad\Longrightarrow\quad
0\in\langle a_1,\ldots,a_n\rangle.
$$
Thus the product is defined and contains zero [@quadrelli2024pythagorean, Theorem 1.3, p. 2]. There is no restriction on $\theta(G)\subseteq\mathbb Z_2^\times$; the elementary-type construction may include $\mathbb Z/2$ with its nontrivial orientation [@quadrelli2024pythagorean, pp. 2–3 and Definition 3.4, p. 10].

**Field case.** If $K$ has characteristic different from $2$, every sum of two squares in $K$ is a square, and $K^\times/K^{\times2}$ is finite, then $G_K(2)$ satisfies the displayed property [@quadrelli2024pythagorean, Theorem 1.2, p. 2, with $L=K$].

**Method.** Vanishing is equivalent to a continuous representation $H\to U_{n+1}(\mathbb F_2)$ whose $(i,i+1)$ entry is $a_i$, where $U_{n+1}$ is the upper unitriangular group [@quadrelli2024pythagorean, Proposition 2.4, p. 5]. The proof proceeds through the elementary-type construction; the new semidirect-product step treats orientations outside $1+4\mathbb Z_2$ [@quadrelli2024pythagorean, Proposition 4.7 and §4.4, pp. 15–17].

**Earlier result.** For arbitrary $p$, Quadrelli previously proved strong vanishing for elementary-type groups, requiring $\theta(G)\subseteq1+4\mathbb Z_2$ at $p=2$ [@quadrelli2024, Theorem 1.2, p. 3]. The theorem above removes that restriction. The [universal strong assertion](strong-massey-vanishing.md) remains false.
