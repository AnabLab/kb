---
title: Class-2 quotients behave differently for number fields and higher-dimensional function fields
kind: note
summary: 'For number fields and curves, $H^2(G_K, \mathbb{Q}/\mathbb{Z}) = 0$ makes the commutator subgroup of the class-2 quotient a profinite exterior square. For $\dim X \ge 2$ this $H^2$ is far from trivial, and the resulting kernel is what the theory of commuting pairs exploits.'
tags: [number-fields, function-fields, galois-groups]
edges:
  - {to: two-step-nilpotent-not-anabelian, label: motivated-by}
  - {to: bogomolov-pop-conjecture, label: motivated-by}
---

**Number fields.** By a result of Tate, $H^2(G_K, \mathbb{Q}/\mathbb{Z}) = 0$ for a number field $K$. So the commutator subgroup of the maximal class-2 quotient $G_K^{\mathrm{nil},2}$ is identified with the profinite exterior square of $G_K^{\mathrm{ab}}$. Its maximal pro-$\ell$ quotient is then an extension of $G_K^{\mathrm{ab}}(\ell)$ by the exterior square of that group, both explicitly known. [Koymans and Pagano](two-step-nilpotent-not-anabelian.md) encode the extension class in a pseudo-random graph, which is how non-isomorphic fields come to have isomorphic quotients [@koymanspagano2024, §1.4].

**Higher-dimensional function fields.** Unlike global fields and function fields of curves, $H^2(G_{k(X)}, \mathbb{Q}/\mathbb{Z})$ is far from trivial when $\dim X \ge 2$. So the natural surjection from the profinite exterior square of $\Pi^a_{k(X)}$ onto the commutator subgroup of $\Pi^c_{k(X)}$ is not an isomorphism. Its kernel is precisely what the theory of [commuting pairs](commuting-liftable-pairs-and-valuations.md) exploits [@koymanspagano2024, §1.4].

**Why it matters.** The [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md) predicts that a quotient of the same kind determines a function field of transcendence degree at least $2$. This comparison proves nothing by itself in either direction.
