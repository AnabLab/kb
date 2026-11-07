---
title: Abrashkin's local analogue of the Grothendieck conjecture
kind: theorem
summary: For complete discrete valuation fields with finite residue fields of characteristic $p$, in any characteristic, a filtration-preserving isomorphism of Galois groups of maximal $p$-extensions comes from a field isomorphism. This includes $p = 2$ and implies the absolute Galois group form.
tags: [local-fields, galois-groups, ramification]
edges:
  - {to: mochizuki-local-fields-theorem, label: generalizes, note: "The existence part, in any characteristic and for pro-$p$ quotients. The filtrations here include $v = 0$, which is automatic in characteristic $0$ since inertia is group-theoretic [@mochizuki1997, Corollary 1.3]."}
  - {to: ramification-filtration, label: uses}
---

**Statement.** Let $E, E'$ be complete discrete valuation fields with finite residue fields of characteristic $p$. Let $E(p)$ be the maximal $p$-extension of $E$ in a separable closure, and put $\Gamma_E(p) = \mathrm{Gal}(E(p)/E)$. Suppose $g : \Gamma_E(p) \to \Gamma_{E'}(p)$ is a continuous group isomorphism that preserves the ramification subgroups in upper numbering for all $v \ge 0$. Then there is a continuous field isomorphism $\bar\mu : E(p) \to E'(p)$ with $\bar\mu(E) = E'$ that induces $g$ [@abrashkin2010, Theorem A].

**Absolute form.** This easily implies the corresponding statement for separable closures and absolute Galois groups [@abrashkin2010, Introduction].

**Method.** Abrashkin embeds $\Gamma_K(p)$, for $K = k((t))$, into its Magnus algebra, and describes the induced ramification ideals explicitly modulo the cube of the augmentation ideal. An earlier proof by Abrashkin needed $p > 2$, because it used an equivalence between $p$-groups and Lie $\mathbb{Z}_p$-algebras of nilpotent class $2$ [@abrashkin2010, Introduction].
