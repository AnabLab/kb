---
title: The mod-l Bogomolov–Pop conjecture
kind: problem
summary: 'The mod-$\ell$ analogue of the Bogomolov–Pop conjecture replaces $\Pi^a, \Pi^c$ by $G^a, G^c$ from the Zassenhaus filtration. With one injectivity statement it would imply the pro-$\ell$ conjecture. A 2026 manuscript, not peer reviewed, claims a Milnor K-theory form, whose proof is checked here.'
tags: [function-fields, galois-groups, milnor-k-theory]
edges:
  - {to: bogomolov-pop-conjecture, label: addresses, note: "It reduces that conjecture to the injectivity of a map on isomorphism sets, as stated in [@topaz2016, §1.2]."}
  - {to: abelian-by-central-galois-group, label: uses}
---

**Conjecture.** Let $K|k$ and $L|l$ be function fields over algebraically closed fields with $\mathrm{char}\, K \ne \ell$ and $\mathrm{trdeg}(K|k) \ge 2$. Let $\overline{\mathrm{Isom}}^c(G^a_L, G^a_K)$ be the set of isomorphisms $G^a_L \to G^a_K$ compatible with the [mod-$\ell$ commutator pairing](abelian-by-central-galois-group.md), modulo $(\mathbb{Z}/\ell)^\times$. Then the canonical map $\mathrm{Isom}^i_F(K,L) \to \overline{\mathrm{Isom}}^c(G^a_L, G^a_K)$ is a bijection [@topaz2016, Conjecture 2].

**Relation to the pro-$\ell$ conjecture.** This map factors through the map in the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md). So this conjecture reduces that one to proving that $\overline{\mathrm{Isom}}^c(\Pi^a_L, \Pi^a_K) \to \overline{\mathrm{Isom}}^c(G^a_L, G^a_K)$ is injective [@topaz2016, §1.2].

**Why it is harder.** The [pro-$\ell$ strategy](pro-l-strategy-for-bogomolov-pop.md) fails, because $K^\times/\ell$ has no apparent subset to which projective geometry over $k$ applies. The local theory is understood as well as in the pro-$\ell$ case [@topaz2016, §1.3].

**Known.** [Reconstruction with rational quotients](mod-l-reconstruction-from-rational-quotients.md) in transcendence degree at least $5$ reduces the conjecture in that range to recovering the rational quotients from $G^c_K$ [@topaz2016, §1.4].

**Status.** A [manuscript credited to OpenAI](manuscripts-claiming-bogomolov-pop.md) and dated 5 October 2026 claims a form of this for $K^M_1/\ell$ and $K^M_2/\ell$ with their product, in transcendence degree at least $2$ [@openai2026modl, Theorem 1.1]. It is not peer reviewed. Its proof has been checked here component by component, and [function fields from mod-ℓ Milnor K-theory](mod-l-milnor-k-reconstruction-of-function-fields.md) composes those checks into a proof of that form and of the conjecture. These are checks by AI agents, not peer review. Kummer duality and Topaz's comparison of the commutator pairing with $k^M_2$ [@topaz2016, Theorem 8.6] show that this Milnor form is [equivalent to the conjecture above](milnor-and-galois-forms-of-mod-l-bogomolov-pop.md). A literature search in November 2026 found no refereed proof, but that search was not exhaustive.
