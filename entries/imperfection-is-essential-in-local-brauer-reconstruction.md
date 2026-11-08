---
title: Imperfection is essential in local-field reconstruction from Brauer duality
kind: theorem
summary: Fehm constructs a proper dense henselian subfield of $\mathbb F_q((t))$ preserving its Galois group, pth-power classes, Brauer group and cyclic-algebra duality. Its imperfection degree exceeds one, so these data alone do not characterize a local field.
tags: [local-fields, positive-characteristic, galois-cohomology, counterexample]
edges:
  - {to: brauer-duality-forces-local-completeness, label: uses, note: "Only to deduce that the constructed noncomplete field has imperfection degree greater than one."}
  - {to: purely-inseparable-invariance-of-galois-groups, label: analogous-to, note: "Here an inclusion also preserves pth-power classes and the Brauer group, while the imperfection degree still changes."}
---

**Counterexample (Fehm, recorded by Dittmann).** For $q=p^n$, $n\ge1$, put $F=\mathbb F_q((t))$. There is a relatively algebraically closed proper subfield
$$
\mathbb F_q(t)\subseteq K\subsetneq F
$$
for which restriction and inclusion induce isomorphisms
$$
G_F\xrightarrow{\sim}G_K,\qquad
K^\times/K^{\times p}\xrightarrow{\sim}F^\times/F^{\times p},\qquad
\operatorname{Br}(K)\xrightarrow{\sim}\operatorname{Br}(F).
$$
Consequently $K$ satisfies the Galois, Brauer and pairing axioms of the [local-field characterization](local-fields-characteristic-p-brauer-characterization.md), without its imperfection axiom [@dittmann2025, Remark 4.8, p. 11].

**Construction.** Let $\kappa=2^{\aleph_0}$, enumerate $F^\times=(a_\alpha)_{\alpha<\kappa}$, and choose $s\in F$ transcendental over $\mathbb F_q(t)$. Start with the relative algebraic closure $K_0$ of $\mathbb F_q(t)$ in $F$. At successor stages choose
$$
x_\alpha\in a_\alpha F^{\times p}
$$
transcendental over $K_\alpha(s)$ and let $K_{\alpha+1}$ be the relative algebraic closure of $K_\alpha(x_\alpha)$ in $F$. At limits take unions. Set $K=\bigcup_{\alpha<\kappa}K_\alpha$ [@dittmann2025, Remark 4.8, p. 11].

Here are explicit checks of the induction. At every stage,
$$
|K_\alpha|\le\max(\aleph_0,|\alpha|)<\kappa.
$$
Adjoining one element and taking an algebraic closure preserve this bound at successor stages; unions preserve it at limits. An element of $F$ algebraic over a union is algebraic over one stage, hence already belongs to that stage. Thus relative algebraic closedness also persists. The elements algebraic over $K_\alpha(s)$ form a set of size less than $\kappa$, whereas the coset $a_\alpha F^{\times p}$ has size $\kappa$. The choice exists even if the continuum is singular. The pair $(s,x_\alpha)$ is algebraically independent over $K_\alpha$, so adjoining $x_\alpha$ and then algebraic elements keeps $s$ transcendental. This property survives unions because an algebraic relation has finitely many coefficients. Hence $s\notin K$.

Every class in $F^\times/F^{\times p}$ has a representative in $K$ by construction. If an element of $K$ has a pth root in $F$, that root is algebraic over $K$, so it belongs to $K$. This proves the middle isomorphism. The Galois and Brauer comparison isomorphisms are those established in Remark 4.8; compatibility with the cyclic-algebra pairing transfers local duality from $F$ [@dittmann2025, Remark 4.8, p. 11; Proposition 2.2, p. 4].

**The missing hypothesis.** The restricted t-adic valuation $v$ is henselian: a simple residue root lifts in $F$, and the lift is algebraic over $K$, hence in $K$. Since $K$ contains $\mathbb F_q(t)$, it is dense in $F$, with $vK=\mathbb Z$ and $Kv=\mathbb F_q$; its completion is $F$, and it is not complete. Also $\operatorname{Hom}_{\mathrm{cont}}(G_K,\mathbb Z/p)$ is countable, as for $F$ [@dittmann2025, §5, opening paragraphs, p. 12]. All hypotheses of the [Brauer-duality completeness theorem](brauer-duality-forces-local-completeness.md) except $[K:K^p]\le p$ therefore hold. That theorem forces $[K:K^p]>p$. Every positive-characteristic local field has degree $p$ over its pth-power subfield, so $K$ is not even abstractly isomorphic to a local field.

Locations refer to arXiv:2309.05398v3. Its secondary references and the journal version were not independently checked.
