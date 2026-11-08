---
title: Perfectoid tilting preserves finite extensions and Galois groups
kind: theorem
summary: 'A perfectoid field and its characteristic-p tilt have equivalent categories of finite extensions, preserving degrees, and isomorphic absolute Galois groups. Tilting preserves the value group and residue field; the sharp map generally does not preserve addition.'
tags: [galois-groups, local-fields, hodge-theory]
edges:
  - {to: fontaine-wintenberger-field-of-norms, label: analogous-to, note: "Scholze presents tilting as extending the Fontaine–Wintenberger correspondence [@scholze2012, §1, p. 2]."}
---

**Tilt.** A *perfectoid field* $K$ is complete for a nondiscrete rank-one nonarchimedean valuation, has residue characteristic $p>0$, and has surjective Frobenius on $K^\circ/p$, where $K^\circ$ is its valuation ring [@scholze2012, Definition 3.1, p. 15]. Its characteristic-$p$ tilt has multiplicative monoid
$$
K^\flat=\varprojlim_{x\mapsto x^p}K.
$$
For $0\ne\varpi\in K^\circ$ with $|p|\le|\varpi|<1$, the ring structure comes from
$$
K^{\flat\circ}\cong\varprojlim_{\Phi}K^\circ/(\varpi),\qquad \Phi(x)=x^p.
$$
Projection gives $x\mapsto x^\sharp$ with $|x|_{K^\flat}=|x^\sharp|_K$; the tilt is perfectoid with the same value group and residue field. In characteristic $p$, $K^\flat\cong K$ [@scholze2012, Lemma 3.4, pp. 15–17].

**Theorem (Scholze).** Every finite extension $L/K$ is perfectoid, and $L\mapsto L^\flat$ gives a degree-preserving equivalence between the finite extensions of $K$ and of $K^\flat$ [@scholze2012, Theorem 3.7, p. 17; proof, p. 29]. Their absolute Galois groups are isomorphic, with the usual dependence on separable closures [@scholze2012, Theorem 1.3, p. 2].

**Example.** Scholze pairs
$$
K=\widehat{\mathbb Q_p(p^{1/p^\infty})},\qquad
K^\flat=\widehat{\mathbb F_p((t))(t^{1/p^\infty})}.
$$
Here $t^\sharp=p$; the sharp map is multiplicative but nonadditive [@scholze2012, §1, p. 2]. These are completed towers; the discretely valued [field of norms](fontaine-wintenberger-field-of-norms.md) is a different object.

**Source.** Locations use arXiv:1111.4914v1.
