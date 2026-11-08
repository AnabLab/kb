---
title: Galois realizability of p-adic analytic pro-p groups
kind: theorem
summary: 'For finitely generated p-adic analytic pro-p groups, Quadrelli proves that admitting a 1-smooth orientation, quadratic mod-p cohomology for every closed subgroup, and Galois realizability are equivalent, with extra conditions at 2. The orientation forces a scalar semidirect-product structure.'
tags: [galois-groups, pro-p-groups, galois-cohomology]
edges:
  - {to: one-smooth-oriented-pro-p-group, label: uses, note: "the definitions of 1-smooth and theta-abelian pairs"}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "The implication from Galois realizability to the Bloch–Kato property uses norm residue [@quadrelli2022analytic, proof of Corollary 5.9, p. 65]."}
  - {to: cohomological-tests-do-not-characterize-galois-groups, label: analogous-to, note: "Here the analytic hypothesis and cohomology of every closed subgroup give a sufficient test; the target's Koszul condition concerns the group's own cohomology."}
---

**Criterion (Quadrelli).** Let $G$ be a finitely generated $p$-adic analytic pro-$p$ group. The following are equivalent [@quadrelli2022analytic, Theorem 1.1, p. 54]:

1. There is a continuous orientation $\theta:G\to1+p\mathbb Z_p$ making $(G,\theta)$ [1-smooth](one-smooth-oriented-pro-p-group.md), with $\operatorname{Im}\theta\subseteq1+4\mathbb Z_2$ if $p=2$.
2. For every closed subgroup $H\subseteq G$, the continuous cohomology algebra $H^*(H,\mathbb F_p)$ is generated in degree one with relations generated in degree two. If $p=2$, require also $\alpha\cup\alpha=0$ for every $\alpha\in H^1(G,\mathbb F_2)$.
3. $G\cong G_F(p)$ for a field $F$ containing a primitive $p$th root of unity, and also $\sqrt{-1}$ if $p=2$.

The cohomological condition on all closed subgroups is the *Bloch–Kato property* [@quadrelli2022analytic, Definition 3.3(ii), p. 59]. The term $p$-adic analytic describes $G$; the realizing field $F$ is unrestricted apart from the stated roots of unity.

**Structure.** Every orientation in (1) makes $G$ *$\theta$-abelian*: the kernel $A=\ker\theta$ is free abelian pro-$p$, the sequence splits, and

$$
G\cong A\rtimes(G/\ker\theta),\qquad ghg^{-1}=h^{\theta(g)}\quad(g\in G,\ h\in A).
$$

Thus conjugation on the kernel is scalar [@quadrelli2022analytic, equation (2.3), pp. 56–57, Definition 2.1, p. 57, and Theorem 5.7, p. 63]. The converse holds too: within this analytic class, such a structure with torsion-free orientation satisfies all three conditions [@quadrelli2022analytic, proof of Corollary 5.9, pp. 64–65].

**Why 1-smoothness matters.** For odd $p$, the pro-$p$ Heisenberg group of upper unitriangular $3\times3$ matrices over $\mathbb Z_p$ is analytic and Kummerian with the trivial orientation, but admits no 1-smooth orientation [@quadrelli2022analytic, Example 5.4, p. 62]. Lifting in degree one only for $G$ itself therefore misses a subgroup obstruction.
