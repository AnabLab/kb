---
title: Real sections and connected components of real curves
kind: theorem
summary: For a hyperbolic curve over $\mathbb R$, conjugacy classes of fundamental-group sections correspond to connected components of its real points, including for affine curves. For proper curves of positive genus, real points are also detected by 2-torsion and cohomological dimension.
tags: [curves, fundamental-groups, local-fields, galois-cohomology, section-conjecture]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: section-conjecture, label: analogous-to, note: "Over R the section classes classify connected components of real points."}
  - {to: involutions-and-real-places, label: analogous-to, note: "Involutions encode real connected components here and real places of algebraic extensions of Q there."}
  - {to: two-nilpotent-real-section-theorem, label: analogous-to, note: "Wickelgren detects real components among abelian section classes by lifting to the geometric class-two quotient."}
---

**Setting.** Let $X/\mathbb R$ be a smooth geometrically connected curve. Write
$$
1\longrightarrow\Delta_X=\pi_1(X_{\mathbb C})
\longrightarrow\Pi_X=\pi_1(X)
\longrightarrow G_{\mathbb R}=\operatorname{Gal}(\mathbb C/\mathbb R)
\longrightarrow1
$$
for its étale fundamental group sequence, and let $\operatorname{Sect}(X/\mathbb R)$ denote continuous sections modulo conjugation by $\Delta_X$. A real point gives such a class by functoriality, as in the [section conjecture](section-conjecture.md).

**The real section theorem.** If $X$ is [hyperbolic](hyperbolic-curve.md), the point-to-section map factors through a bijection
$$
\pi_0\bigl(X(\mathbb R)\bigr)
\xrightarrow{\ \sim\ }\operatorname{Sect}(X/\mathbb R),
$$
where $\pi_0$ uses the usual real topology. This is Mochizuki's result for both proper and affine hyperbolic curves [@mochizuki2003topics, Corollary 3.13, pp. 142–143]. Thus sections exist exactly when real points do, and two real points give the same section class exactly when they lie in the same connected component. The same bijection holds for every smooth projective geometrically connected curve of genus at least one, including genus one [@stix2010, Theorem 26, p. 14].

**Cohomological detection.** For a smooth projective geometrically connected $X/\mathbb R$ of positive genus, the following are equivalent [@stix2010, Theorem 24, p. 13]:

- $\operatorname{Sect}(X/\mathbb R)\ne\varnothing$;
- $\Pi_X$ contains an element of order $2$;
- $\operatorname{cd}_2(\Pi_X)=\infty$;
- $X(\mathbb R)\ne\varnothing$.

These conditions are also equivalent to
$$
\operatorname{Br}(X/\mathbb R)
:=\ker\bigl(\operatorname{Br}(\mathbb R)\longrightarrow\operatorname{Br}(X)\bigr)=0
$$
[@stix2010, Definition 4, p. 3, and Theorem 21, p. 12].

**Proof mechanisms in the sources.** Mochizuki uses Cox's criterion relating real points to nonvanishing étale mod-$2$ cohomology in arbitrarily high degrees, then applies it to finite étale neighbourhoods of a section [@mochizuki2003topics, Lemma 3.12, its following remark, and proof of Corollary 3.13, pp. 141–143]. In the proper case, Stix obtains a real point from the inverse limit of the nonempty compact real loci of those neighbourhoods. For injectivity on components he uses the Jacobian's mod-$2$ Kummer map and a sign-change argument for real rational functions [@stix2010, proof of Theorem 26, Lemma 27 and Proposition 28, pp. 14–15].
