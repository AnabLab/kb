---
title: Kummerian and 1-smooth oriented pro-p groups
kind: definition
summary: A pro-p pair is Kummerian when twisted degree-one classes lift from mod p to every p-power coefficient module, and 1-smooth when this holds on every subgroup. For torsion-free orientations, a canonical quotient of the kernel detects the Kummerian condition.
tags: [pro-p-groups, galois-cohomology, galois-groups]
---

**Oriented pairs and coefficients.** Fix a prime $p$. An *oriented pro-$p$ group*, or *cyclotomic pro-$p$ pair*, is $(G,\theta)$ with $G$ pro-$p$ and $\theta:G\to1+p\mathbb Z_p$ continuous. Let $\mathbb Z/p^n(1)_\theta$ denote $\mathbb Z/p^n$ with action $g\cdot a=\theta(g)a$; at $n=1$ this action is trivial [@quadrelli2022analytic, p. 54, equation (1.1) and preceding paragraphs].

**Kummerian and 1-smooth.** The pair is *Kummerian* if reduction gives surjections
$$
H^1(G,\mathbb Z/p^n(1)_\theta)\longrightarrow H^1(G,\mathbb F_p)
\qquad(n\ge1).
$$
It is *1-smooth* if $(H,\theta|_H)$ is Kummerian for every closed subgroup $H\subseteq G$ [@quadrelli2022analytic, p. 54, equation (1.1) and following paragraph]. It suffices to require this for open subgroups; the closed-subgroup condition follows by a limit argument [@quadrelli2022smooth, Definition 2.1 and following paragraph]. The orientation is then also called *1-cyclotomic* [@quadrelli2022smooth, paragraph following Definition 2.1].

**Torsion-free pairs.** The pair is called *torsion-free* when $\operatorname{Im}\theta$ has no nonidentity element of finite order [@efratquadrelli2019, §2, p. 3]. This holds automatically for odd $p$, and holds at $p=2$ if $\operatorname{Im}\theta\subseteq1+4\mathbb Z_2$. It does not assert that $G$ is torsion-free: a finite cyclic $p$-group with trivial orientation is a torsion-free pair [@quadrelli2022smooth, §2.1, paragraphs preceding equation (2.1)].

**The kernel criterion.** Define
$$
K_\theta(G)=\overline{\langle h^{-\theta(g)}ghg^{-1}:g\in G,\ h\in\ker\theta\rangle}.
$$
This subgroup is normal and lies in $\ker\theta$, and $\ker\theta/K_\theta(G)$ is abelian [@efratquadrelli2019, §3, p. 4]. For a torsion-free pair, the cohomological Kummerian condition above is equivalent to this quotient being a free abelian pro-$p$ group [@quadrelli2022smooth, Proposition 2.2]. The original quotient-based definition is [@efratquadrelli2019, Definition 3.4]; its equivalence with lifting for finitely generated torsion-free pairs is [@efratquadrelli2019, Theorem 7.1].

**The theta-center.** Set
$$
Z_\theta(G)=\{h\in\ker\theta:ghg^{-1}=h^{\theta(g)}\text{ for every }g\in G\}.
$$
This is an abelian normal subgroup. A torsion-free pair is *$\theta$-abelian* when $Z_\theta(G)=\ker\theta$ and this group is free abelian pro-$p$; equivalently, the pair is Kummerian and $K_\theta(G)=1$ [@quadrelli2022smooth, equation (2.2) and Remark 2.5, conditions (ii)–(iii)].

**Formal Hilbert 90.** Merkurjev–Scavia use this lifting requirement on open subgroups for a general profinite group with a character into $\mathbb Z_p^\times$, keeping the induced action on the mod-$p$ target [@merkurjevscavia2025hilbert90, §2.2, p. 4]. For the pro-$p$ pairs above, it is exactly 1-smoothness: $\theta\equiv1\pmod p$ identifies that target with $\mathbb F_p$, and open and closed subgroups give equivalent conditions. See the [Massey vanishing theorem under formal Hilbert 90](formal-hilbert-90-and-massey-vanishing.md).

These definitions underlie the [Kummerian obstruction to Galois realizability](kummerian-obstruction-to-galois-realizability.md), the [smoothness conjecture](smoothness-conjecture.md), and the [recovery of orientations from normal abelian subgroups](normal-abelian-subgroups-recover-cyclotomic-orientation.md).
