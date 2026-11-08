---
title: Local class field theory and upper ramification
kind: theorem
summary: 'For a nonarchimedean local field, reciprocity identifies its completed multiplicative group with its abelianized absolute Galois group. Uniformizers give unramified Frobenius, principal units give upper ramification groups, and norm subgroups classify finite abelian extensions.'
tags: [local-fields, galois-groups, ramification]
edges:
  - {to: ramification-filtration, label: uses, note: "Reciprocity carries the unit filtration to the upper-numbering filtration on the abelianized Galois group."}
---

**Reciprocity.** Let $K$ be a nonarchimedean local field. Complete $K^\times$ using its open subgroups of finite index. The local Artin map induces a canonical topological isomorphism

$$\mathrm{rec}_K:\widehat{K^\times}\xrightarrow{\sim}G_K^{\mathrm{ab}}.$$

Every uniformizer maps to arithmetic Frobenius on the maximal unramified extension [@milnecft, Chapter I, Theorem 1.1, p. 20; §1.10, p. 23]. Choosing a uniformizer identifies $\widehat{K^\times}$ with $\mathcal O_K^\times\times\widehat{\mathbb Z}$ [@milnecft, Chapter I, §1.10, p. 23].

**Finite extensions.** For each finite abelian extension $L/K$, reciprocity gives

$$K^\times/N_{L/K}(L^\times)\xrightarrow{\sim}\mathrm{Gal}(L/K).$$

The assignment $L\mapsto N_{L/K}(L^\times)$ is an inclusion-reversing bijection between finite abelian extensions inside $K^{\mathrm{sep}}$ and open subgroups of finite index in $K^\times$ [@milnecft, Chapter I, Theorem 1.1 and Corollary 1.5, pp. 20–22]. In characteristic $p$, finite-index subgroups need not be open [@milnecft, Chapter I, §1.7, p. 22].

**Ramification.** Put $U_K^0=\mathcal O_K^\times$ and $U_K^n=1+\mathfrak m_K^n$ for $n\ge1$. For the quotient [upper-numbering filtration](ramification-filtration.md),

$$\mathrm{rec}_K(U_K^n)=(G_K^{\mathrm{ab}})^n\qquad(n\ge0).$$

In particular, units correspond to the image of inertia [@milnecft, Chapter I, §1.11, p. 24].

This is the multiplicative input in [local Galois reconstruction](local-field-galois-invariants.md). Even retaining the entire abelianized ramification filtration [does not determine the local field](filtered-abelian-galois-groups-do-not-determine-local-fields.md).
