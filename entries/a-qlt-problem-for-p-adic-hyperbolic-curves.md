---
title: Are fundamental groups of all p-adic hyperbolic curves of A-qLT-type?
kind: problem
summary: 'Mochizuki asks whether, for every hyperbolic curve $X$ over a $p$-adic field, Lubin–Tate characters on inertia occur in Tate modules of Jacobians of finite étale covers of $X$. This is known when a cover maps dominantly to $\mathbb{P}^1 \setminus \{0,1,\infty\}$, never the case for proper $X$.'
tags: [curves, fundamental-groups, local-fields, hodge-theory]
edges:
  - {to: lubin-tate-criterion-for-semi-absolute-anabelian-geometry, label: motivated-by, note: "A positive answer would make the geometricity of semi-absolute homomorphisms hold for every target curve."}
---

**Question.** Let $X$ be a [hyperbolic curve](hyperbolic-curve.md) over a finite extension $k$ of $\mathbb{Q}_p$. Is the extension $\pi_1(X) \to G_k$ always of A-qLT-type? Mochizuki poses this as an unresolved problem [@mochizuki2015, Appendix, (CM5), pp. 1153–1154]. The definition is in [Lubin–Tate characters and semi-absolute geometricity](lubin-tate-criterion-for-semi-absolute-anabelian-geometry.md) [@mochizuki2012, Definition 3.1 (v)]. Mochizuki paraphrases it as follows: every Lubin–Tate character on the inertia subgroup of an open subgroup of $G_k$ arises, after restriction to a smaller open subgroup, from a subquotient of the $p$-adic Tate module of the Jacobian of a finite étale cover of $X$ [@mochizuki2015, pp. 1153–1154].

**Known.**

- *Tamagawa's criterion.* The answer is yes when $X$ has a finite étale cover that maps dominantly to a copy of the projective line minus three points over $k$ [@mochizuki2012, Remark 3.8.1]. This was derived from a statement on abelian varieties with complex multiplication, which Mochizuki later verified [@mochizuki2015, Appendix, (CM5)]. The derivation uses Belyi maps, and Mochizuki notes that the problem is of particular interest for classes of curves to which Belyi maps cannot be applied, such as proper $X$ [@mochizuki2015, p. 1154].
- *Proper curves are never covered.* This is checked here. Let $X$ be proper and $Y \to X$ finite étale. Then $Y$ is proper over $k$. Since $P = \mathbb{P}^1 \setminus \{0, 1, \infty\}$ is separated, the image of a $k$-morphism $Y \to P$ is closed, and with its reduced structure it is a closed subscheme of $P$ that is proper over $k$. Being also affine, it is finite over $k$, so it is not all of $P$. So no such morphism is dominant, and Tamagawa's criterion never applies to a proper curve.
- *Analogy.* Mochizuki compares the problem with Belyi injectivity and with André's theorems, which he regards as a kind of $p$-adic Belyi injectivity. For those, versions for arbitrary hyperbolic curves were obtained by combinatorial anabelian geometry [@mochizuki2015, p. 1154], by Hoshi and Mochizuki in both cases (for Belyi injectivity, see [injectivity of outer Galois representations](injectivity-of-outer-galois-representations.md)). He adds that it was not clear to him how to apply those techniques here [@mochizuki2015, p. 1154].

**Why it matters.** A positive answer would remove Tamagawa's criterion from the geometricity theorem for semi-absolute homomorphisms, which would then hold for homomorphisms into $\pi_1$ of every hyperbolic curve over a $p$-adic field [@mochizuki2012, Corollary 3.8 (g)]. For isomorphisms, the conclusion is now known for all hyperbolic curves over $p$-adic fields by a different route, through resolution of nonsingularities and decomposition groups of closed points (see [the absolute Grothendieck conjecture over $p$-adic fields](absolute-grothendieck-conjecture-for-p-adic-curves.md)). That route does not address homomorphisms that are not isomorphisms, or the A-qLT property itself.

**Status.** Open as far as the sources opened here show. The question was posed in a paper published in 2015. A literature search in November 2026 found no answer, but that search was not exhaustive.
