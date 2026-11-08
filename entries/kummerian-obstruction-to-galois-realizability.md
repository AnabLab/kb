---
title: Hilbert 90 and a Kummerian obstruction to pro-p Galois realizability
kind: theorem
summary: The cyclotomic character of a maximal pro-$p$ Galois group satisfies a Hilbert 90 lifting condition. Efrat–Quadrelli use it to exclude groups that have quadratic mod-$p$ cohomology and vanishing defined triple Massey products.
tags: [galois-groups, galois-cohomology, pro-p-groups]
edges:
  - {to: elementary-type-conjecture, label: analogous-to, note: "Both constrain maximal pro-$p$ Galois groups together with their cyclotomic orientations."}
  - {to: norm-residue-isomorphism-theorem, label: analogous-to, note: "The example below satisfies the quadraticity restriction on its own cohomology ring but fails the Kummerian condition."}
  - {to: triple-massey-products-in-galois-cohomology, label: analogous-to, note: "The example below also satisfies triple Massey vanishing, so that test does not exclude it."}
---

**Lifting condition.** Let $G$ be pro-$p$ with a continuous orientation $\theta:G\to1+p\mathbb{Z}_p$. Write $\mathbb{Z}/p^n(1)_\theta$ for $\mathbb{Z}/p^n$ with action $g\cdot a=\theta(g)a$. The pair is *Kummerian* if reduction induces surjections
$$
H^1(G,\mathbb{Z}/p^n(1)_\theta)\longrightarrow H^1(G,\mathbb{F}_p)
\qquad(n\ge1).
$$
It is *1-smooth* if every closed subgroup, with the restricted orientation, is Kummerian [@quadrelli2022smooth, Definition 2.1].

**Group-theoretic characterization.** Suppose $G$ is finitely generated and $\operatorname{Im}(\theta)$ is torsion-free. Define the closed normal subgroup
$$
K_\theta(G)=\overline{\langle h^{-\theta(g)}ghg^{-1}:g\in G,\ h\in\ker\theta\rangle}.
$$
Then $(G,\theta)$ is Kummerian exactly when $\ker\theta/K_\theta(G)$ is a free abelian pro-$p$ group [@quadrelli2022smooth, equation (2.1) and Proposition 2.2]. This is the equivalence of the quotient and cohomological definitions proved in [@efratquadrelli2019, Definition 3.4 and Theorem 7.1].

**Galois necessity.** If $F$ has characteristic different from $p$ and contains a primitive $p$-th root of unity, then $(G_F(p),\theta_F)$, with its cyclotomic character, is 1-smooth [@quadrelli2022smooth, Theorem 2.8]. Kummer theory identifies the displayed map with the surjection
$$
F^\times/(F^\times)^{p^n}\longrightarrow F^\times/(F^\times)^p
$$
[@efratquadrelli2019, Remark 7.2].

**An excluded family.** For every prime $p\ge5$, consider the pro-$p$ presentation
$$
G=\langle x_1,x_2,x_3\mid x_1^p[x_2,x_3]=1\rangle,
\qquad [x,y]=x^{-1}y^{-1}xy.
$$
No continuous orientation $\theta:G\to1+p\mathbb{Z}_p$ makes $(G,\theta)$ Kummerian. In particular, $G$ is not $G_F(p)$ for any field $F$ containing a primitive $p$-th root of unity [@efratquadrelli2019, Theorem 8.1(i) and §9, equation (9.1), with $d=3$ and $f=1$]. Nevertheless, $G$ is torsion-free of cohomological dimension $2$, its ring $H^*(G,\mathbb{F}_p)$ is quadratic, and every defined triple Massey product of degree-one classes contains zero [@efratquadrelli2019, Propositions 9.1(e)–(g) and 9.6].

Thus quadraticity of a group's own mod-$p$ cohomology ring and [triple Massey vanishing](triple-massey-products-in-galois-cohomology.md) together do not characterize maximal pro-$p$ Galois groups with $\mu_p$ in the field [@efratquadrelli2019, §9, opening paragraphs]. The Kummerian test retains the cyclotomic action on higher $p$-power coefficients.
