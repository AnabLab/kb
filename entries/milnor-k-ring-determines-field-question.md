---
title: Does the Milnor K-ring determine the field?
kind: problem
summary: 'Cadoret and Pirutka ask whether $K^M_*(F)$ determines the isomorphism class of a field $F$. No counterexample was known to them, and the naive functorial form fails for finite fields. Answers are known in several cases, some only up to purely inseparable extensions.'
tags: [milnor-k-theory, function-fields]
edges:
  - {to: milnor-k-ring, label: uses}
  - {to: bogomolov-pop-conjecture, label: analogous-to, note: "The Bloch–Kato theorem relates mod-$\\ell$ Milnor K-theory to Galois cohomology [@topaz2016, §1.6]."}
---

**Question.** Does the [Milnor K-ring](milnor-k-ring.md) $K^M_*(F)$ determine the isomorphism class of the field $F$ [@cadoretpirutka2021, Question 1]?

**Functoriality.** The naive functorial form fails: for a finite field $F$, the ring $K^M_*(F)$ has extra automorphisms induced by $x \mapsto x^u$ for $u$ prime to $|F| - 1$ on $K^M_1(F)$ [@cadoretpirutka2021, §1].

**Known.**

- [Function fields of transcendence degree at least $2$](milnor-k-reconstruction-function-fields.md) over algebraically closed or finite fields, using a quotient of the ring.
- [Fields of absolute transcendence degree at least $5$](algebraic-dependence-in-milnor-k-theory.md), up to purely inseparable extensions, using the rational Milnor K-ring.
- Finitely generated fields of absolute transcendence degree at least $2$, with no need to pass to inseparable extensions [@topaz2022, §1].

**Status.** Cadoret and Pirutka state that no counterexample seems to be known [@cadoretpirutka2021, §1]. A literature search in November 2026 found no complete answer, but that search was not exhaustive.
