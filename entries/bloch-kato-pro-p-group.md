---
title: Bloch–Kato pro-p groups
kind: definition
summary: 'A pro-p group is Bloch–Kato when each closed subgroup has quadratic mod-p cohomology: generators in degree one, relations in degree two. Maximal pro-p Galois groups of fields with a primitive pth root of unity satisfy this; quadratic cohomology of the group alone is weaker.'
tags: [galois-groups, galois-cohomology, pro-p-groups]
edges:
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "It gives the Bloch–Kato property of maximal pro-p Galois groups over fields containing a primitive pth root of unity [@quadrelli2012blochkato, §2, p. 3]."}
---

**Quadratic cohomology.** Fix a prime $p$. For a pro-$p$ group $H$, use continuous cohomology with trivial discrete coefficients $\mathbb F_p$. Put $V_H=H^1(H,\mathbb F_p)$ and
$$
R_H=\ker\bigl(V_H\otimes_{\mathbb F_p}V_H\xrightarrow{\cup}H^2(H,\mathbb F_p)\bigr).
$$
The cohomology algebra is *quadratic* if cup product induces an isomorphism
$$
T_{\mathbb F_p}(V_H)/(R_H)\xrightarrow{\sim}H^*(H,\mathbb F_p),
$$
where $T$ is the ordinary graded tensor algebra and $(R_H)$ is the two-sided ideal it generates. Thus degree-one classes generate the algebra, and the degree-two relations generate every relation [@snopcezalesskii2022, Introduction, p. 2].

**Definition.** A pro-$p$ group $G$ is *Bloch–Kato* if $H^*(H,\mathbb F_p)$ is quadratic for every closed subgroup $H\subseteq G$. Neither finite generation nor an orientation is part of the definition [@snopcezalesskii2022, Introduction, p. 2].

**Galois source.** If $F$ has characteristic different from $p$ and contains a primitive $p$th root of unity, its maximal pro-$p$ Galois group $G_F(p)$ is Bloch–Kato, by the norm residue theorem. In characteristic $p$, the maximal pro-$p$ group is free pro-$p$ and is also Bloch–Kato [@quadrelli2012blochkato, §2, p. 3].

**Why every subgroup matters.** Quadratic cohomology of $G$ alone does not give the Bloch–Kato property. All right-angled Artin pro-$p$ groups associated to finite graphs have quadratic cohomology; the four-cycle gives $S\times S$ with $S$ free pro-$p$ of rank two [@snopcezalesskii2022, Introduction, p. 2, and proof of Theorem 1.2, p. 12]. This product is not Bloch–Kato [@quadrelli2012blochkato, Theorem 5.6, pp. 14–15]. See the [subgroup obstruction](cohomological-tests-do-not-characterize-galois-groups.md) and the [right-angled Artin classification](right-angled-artin-pro-p-galois-groups.md).

**The prime two.** Quadraticity does not require degree-one squares to vanish at $p=2$. The nontrivial finite Bloch–Kato pro-$2$ groups are exactly $(\mathbb Z/2\mathbb Z)^r$ with $1\le r<\infty$; at odd $p$, Bloch–Kato pro-$p$ groups are torsion-free [@quadrelli2012blochkato, §2, p. 3, and §4.1, pp. 7–8]. Additional hypotheses at $2$ in the [Tits alternative](tits-alternative-for-bloch-kato-pro-p-groups.md) must therefore be kept separate from the definition.
