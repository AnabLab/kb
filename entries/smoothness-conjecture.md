---
title: The smoothness conjecture for pro-p groups
kind: problem
summary: 'De Clercq–Florence predict that 1-smooth pro-p pairs are weakly Bloch–Kato: mod-p cohomology classes on open subgroups are sums of corestrictions of symbols. Several cases are known; Florence reported an incomplete general proof in October 2026.'
tags: [galois-groups, galois-cohomology, pro-p-groups]
edges:
  - {to: kummerian-obstruction-to-galois-realizability, label: uses, note: "the 1-smoothness hypothesis"}
  - {to: norm-residue-isomorphism-theorem, label: motivated-by, note: "The conjecture seeks to deduce the surjectivity half from Kummer theory [@declercqflorence2017, Remark 14.26, p. 65]."}
  - {to: massey-vanishing-under-formal-hilbert-90, label: analogous-to, note: "Both ask what higher cohomological properties follow from twisted degree-one lifting on subgroups."}
---

**Hypothesis.** Let $G$ be pro-$p$ with a continuous orientation $\theta:G\to1+p\mathbb Z_p$. Assume that $(G,\theta)$ is [1-smooth](kummerian-obstruction-to-galois-realizability.md): reduction
$$
H^1(H,\mathbb Z/p^r(1)_\theta)\longrightarrow H^1(H,\mathbb F_p)
$$
is surjective for every open subgroup $H\subseteq G$ and every $r\ge1$. The coefficient action on the left is through $\theta$. Requiring all closed subgroups is equivalent [@quadrelli2022smooth, Definition 2.1 and following paragraph].

**Conjecture (De Clercq–Florence, pro-$p$ form).** Every such $G$ is *weakly Bloch–Kato* [@quadrelli2022smooth, Conjecture 2.10]. Explicitly, for every open $U\subseteq G$, every $n\ge1$ and every $\alpha\in H^n(U,\mathbb F_p)$, there are finitely many open subgroups $V_i\subseteq U$ and classes $a_{ij}\in H^1(V_i,\mathbb F_p)$ such that
$$
\alpha=\sum_i\operatorname{cor}_{V_i}^{U}
\bigl(a_{i1}\cup\cdots\cup a_{in}\bigr).
$$
Here $\operatorname{cor}$ is corestriction, all displayed mod-$p$ coefficients are trivial, and the cup products are called *symbols* [@declercqflorence2017, Definitions 14.21 and 14.23 and Conjecture 14.25, pp. 64–65].

This conclusion allows symbols on varying open subgroups. The stronger *Bloch–Kato* property asks that $H^*(H,\mathbb F_p)$ be quadratic for every closed $H\subseteq G$; it implies the weak property [@quadrelli2022smooth, Definition 2.2]. For Galois groups, Milnor K-theory converts corestrictions of symbols into sums of symbols over the base field, explaining the intended new route to the surjectivity half of the [norm residue theorem](norm-residue-isomorphism-theorem.md) [@declercqflorence2017, Remark 14.26, p. 65].

**Known cases.** For finitely generated [$p$-adic analytic groups](p-adic-analytic-pro-p-galois-groups.md), 1-smoothness implies the stronger Bloch–Kato property, assuming $\operatorname{Im}\theta\subseteq1+4\mathbb Z_2$ at $p=2$ [@quadrelli2022analytic, Theorem 1.1, p. 54]. It also does so for solvable $G$ with torsion-free orientation [@quadrelli2022smooth, Corollary 4.5], and for [right-angled Artin pro-$p$ groups](right-angled-artin-pro-p-galois-groups.md) [@quadrelli2022smooth, §2.3, case (c)].

**Status checked 8 November 2026.** Florence's note dated 23 October 2026 explicitly reports that the general proof is incomplete. Its trivial-character formulation retains lifting modulo every $p^r$; the general formulation uses a $(1,\infty)$-cyclotomic pair [@florence2026smoothness, opening paragraph and Conjecture 0.2, p. 1; Remark 0.3, p. 2]. The general pro-$p$ question remains open in the sources checked here.
