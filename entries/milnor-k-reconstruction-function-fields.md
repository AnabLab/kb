---
title: Reconstructing function fields from Milnor K-theory
kind: theorem
summary: For regular extensions $F/k$ of transcendence degree at least $2$ over a perfect field, $F^\times/k^\times$ with the relation of algebraic dependence determines $F/k$ functorially (Cadoret–Pirutka). Over algebraically closed or finite fields, the Milnor K-ring detects that relation.
tags: [milnor-k-theory, function-fields]
edges:
  - {to: milnor-k-ring-determines-field-question, label: addresses}
  - {to: milnor-k-ring, label: uses}
---

**Algebraic dependence.** Let $k, k'$ be perfect fields of the same characteristic, and let $F/k$, $F'/k'$ be finitely generated regular extensions of transcendence degree at least $2$. Then the canonical map from field isomorphisms $F \to F'$ carrying $k$ to $k'$, to isomorphisms $F^\times/k^\times \to F'^\times/k'^\times$ preserving algebraic dependence, taken modulo $\psi \mapsto \psi^{-1}$, is a bijection [@cadoretpirutka2021, Theorem 4].

**Detecting it.** A function field has type $1$ if its constant field is algebraically closed, and type $2$ if it is finite [@cadoretpirutka2021, §2.2]. For type $1$ take the Milnor K-ring modulo divisible elements, and for type $2$ modulo torsion. This ring detects algebraic dependence. For $x_1, \ldots, x_n$, vanishing of the symbol implies that $k(x_1, \ldots, x_n)$ has transcendence degree at most $n - 1$, and the converse holds in the cases stated in the source [@cadoretpirutka2021, Theorem 7].

**Consequence.** For fields of the same type and characteristic, of transcendence degree at least $2$ over their fields of constants, the map from field isomorphisms to isomorphisms of these quotients of the Milnor K-ring, taken modulo the natural action of $\mathbb{Z}/2$, is bijective [@cadoretpirutka2021, Corollary 10].

**Earlier form.** Bogomolov and Tschinkel obtain a homomorphism of fields from a compatible injective map on the quotients by infinitely divisible elements, for function fields of transcendence degree at least $2$ over algebraically closed fields, under a condition excluding images in one-dimensional subfields, and up to a rational power [@bogomolovtschinkel2012, Theorem 8]. That survey states no characteristic hypothesis, while Cadoret and Pirutka record the original result as characteristic $0$ [@cadoretpirutka2021, §1.2]. The original paper has not been opened for this entry.
