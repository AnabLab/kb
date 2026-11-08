---
title: Deligne–Drinfeld conjecture on the Grothendieck–Teichmüller Lie algebra
kind: problem
summary: 'The Deligne–Drinfeld conjecture asks whether the Grothendieck–Teichmüller Lie algebra is completed free on one generator in each odd weight at least 3. Its resolving theorem records the proof completed in 2026 preprints.'
tags: [fundamental-groups, galois-groups, hodge-theory]
edges:
  - {to: grothendieck-teichmuller-conjecture, label: analogous-to, note: "A pro-unipotent counterpart of asking whether the profinite Grothendieck–Teichmüller group is exhausted by Galois actions."}
  - {to: deligne-ihara-conjecture, label: analogous-to, note: "Both ask for freeness on one generator in each odd weight at least $3$, for different Lie algebras."}
---

**Setting.** Let $K$ be a field of characteristic $0$ and $\mathfrak{grt}_1(K)$ the completed weight-graded Grothendieck–Teichmüller Lie algebra, with the Ihara bracket. Its elements are Lie-like series in $K\langle\langle x,y\rangle\rangle$ satisfying the antisymmetry, hexagon and pentagon equations [@willwacher2026, §§2.1–2.3]. The defining equations and bracket are written out in the [resolving theorem](freeness-of-the-grothendieck-teichmuller-lie-algebra.md).

**Conjecture (Deligne–Drinfeld).** The Lie algebra $\mathfrak{grt}_1(K)$ is the completed free Lie algebra on homogeneous generators $\sigma_3,\sigma_5,\sigma_7,\dots$ of weights $3,5,7,\dots$. More precisely, choose homogeneous $\sigma_{2k+1}$ with nonzero coefficient of $x^{2k}y$, which exist by Drinfeld's result as recorded in [@willwacher2026, Lemma 2.1]. Is the continuous map
$$
\widehat{\operatorname{Lie}}_K(s_3,s_5,s_7,\dots)
\longrightarrow \mathfrak{grt}_1(K),\qquad
s_{2k+1}\longmapsto \sigma_{2k+1}
$$
an isomorphism? The completion is by weight, with $s_{2k+1}$ of weight $2k+1$. This is the conjecture stated in [@willwacher2026, §1] and, over $\mathbb Q$, in [@willwacher2026deligne, §1, (7), p. 1].

**History.** Willwacher calls this the Deligne–Drinfeld conjecture and records Brown's free-subalgebra theorem while still asking whether the subalgebra is all of $\mathfrak{grt}_1$ [@willwacher2015, §9, p. 28]. His August 2026 preprint proves injectivity for every homogeneous family with nonzero leading coefficients [@willwacher2026, Theorem 1.2]. His October 2026 preprint attributes the remaining dimension bound to OpenAI and supplies a simplified proof [@willwacher2026deligne, §1 and Theorem 1.1, pp. 1–2].

The [separate theorem](freeness-of-the-grothendieck-teichmuller-lie-algebra.md) records the complete answer, its proof outline, checks, consequences and preprint status. This entry retains the original question.
