---
title: Norm reciprocity for p-Demushkin fields
kind: theorem
summary: With a primitive pth root of unity and finite pth-power class dimension at least two, a field's maximal pro-p Galois group is Demushkin exactly when cyclic degree-p extensions correspond bijectively, by their norm groups, to index-p multiplicative subgroups.
tags: [galois-groups, pro-p-groups, galois-cohomology, valuations]
edges:
  - {to: demushkin-group, label: uses}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "The degree-two case supplies generation of Brauer p-torsion by symbols in the source's proof."}
  - {to: rigid-subgroups-and-valuations, label: analogous-to, note: "Norm hyperplanes supply multiplicative data used in valuation recovery; this theorem itself does not construct a valuation."}
---

**Setting.** Let $\operatorname{char}K\ne p$, let $\mu_p\subset K$, and assume
$$2\le\dim_{\mathbb F_p}V<\infty,\qquad V=K^\times/K^{\times p}.$$
For a cyclic degree-$p$ extension $L/K$, put $\overline N_L=N_{L/K}(L^\times)/K^{\times p}\le V$.

**Theorem.** The group $G_K(p)$ is [Demushkin](demushkin-group.md) if and only if every $\overline N_L$ is a hyperplane and
$$L\longmapsto\overline N_L$$
is a bijection from cyclic degree-$p$ extensions in a fixed separable closure to hyperplanes of $V$ [@koenigsmannstrommen2024, Proposition 2.15, p. 9]. Every index-$p$ subgroup of $K^\times$ contains $K^{\times p}$, so these hyperplanes are equally the index-$p$ multiplicative subgroups.

**Cohomological description.** For $L=K(\sqrt[p]{a})$,
$$\overline N_L=\{\bar b\in V:(a)\cup(b)=0\},$$
where a choice of primitive $p$th root of unity identifies Kummer classes with $H^1(G_K(p),\mathbb F_p)$. Thus the correspondence is the orthogonal-complement map from lines to hyperplanes for the cup pairing. Its bijectivity characterizes nondegeneracy with one-dimensional target; generation of $H^2$ by symbols supplies the target-generation hypothesis [@koenigsmannstrommen2024, Definition 2.13, p. 8, and Propositions 2.14–2.15, p. 9]. The finite-dimensional hypothesis is retained here for the converse, as in that proof.

At $p=2$, when $G_K(2)$ is Demushkin, equality of the norm subgroups for $K(\sqrt a)$ and $K(\sqrt b)$ is therefore equivalent to equality of the square classes of $a$ and $b$ [@koenigsmannstrommen2024, Remark 2.16, p. 9]. This norm correspondence is an input to the [valuation-recovery conjecture](pro-p-galois-recovery-of-p-adic-valuations.md); it does not assert that a field satisfying it is a local field.
