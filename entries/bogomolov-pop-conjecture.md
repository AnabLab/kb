---
title: The Bogomolov–Pop conjecture
kind: problem
summary: 'For function fields $K|k$ of transcendence degree at least $2$ over algebraically closed fields, isomorphisms of perfect closures up to Frobenius should match commutator-compatible isomorphisms of $\Pi^a$ up to scalars. An unrefereed 2026 manuscript claims a proof, composed here from checked parts.'
tags: [function-fields, galois-groups]
edges:
  - {to: abelian-by-central-galois-group, label: uses}
  - {to: function-fields-of-curves-have-free-galois-groups, label: motivated-by, note: "This is why transcendence degree at least $2$ is required [@pop2018, §1]."}
  - {to: pop-mochizuki-finitely-generated-fields, label: analogous-to, note: "Here the constants are algebraically closed, so there is no arithmetic Galois action [@pop2018, §1], and the Galois group is small [@topaz2016, §1]."}
  - {to: two-step-nilpotent-not-anabelian, label: analogous-to, note: "The same kind of quotient does not determine a number field [@koymanspagano2024, §1.2]."}
---

**Conjecture.** Fix a prime $\ell$. Let $K|k$ and $L|l$ be function fields over algebraically closed fields, with $\mathrm{char}\, K \ne \ell$ and $\mathrm{trdeg}(K|k) \ge 2$. Let $\mathrm{Isom}^i_F(K,L)$ be the set of isomorphisms $K^i \to L^i$ of perfect closures, modulo Frobenius. Let $\overline{\mathrm{Isom}}^c(\Pi^a_L, \Pi^a_K)$ be the set of isomorphisms $\Pi^a_L \to \Pi^a_K$ [compatible with the commutator pairing](abelian-by-central-galois-group.md), modulo multiplication by $\mathbb{Z}_\ell^\times$. Then the canonical map

$$\mathrm{Isom}^i_F(K,L) \to \overline{\mathrm{Isom}}^c(\Pi^a_L, \Pi^a_K)$$

is a bijection [@topaz2016, Conjecture 1].

In particular, $K^i|k$ and $L^i|l$ would be isomorphic as fields if and only if $\Pi^c_L \cong \Pi^c_K$ as pro-$\ell$ groups [@topaz2016, §1].

**Origin.** Bogomolov introduced the program in the early 1990s, and Pop formulated this precise Isom form [@topaz2016, §1]. In contrast to Grothendieck's anabelian philosophy, there is no arithmetic Galois action, since the base field is algebraically closed [@pop2018, §1].

**Known.**

- The case of [algebraic closures of finite fields](bogomolov-pop-over-finite-field-closures.md).
- [Reconstruction with divisorial inertia](pop-reconstruction-from-divisorial-inertia.md) in transcendence degree greater than $2$, and without it when the transcendence degree is large relative to the Kronecker dimension of $k$. The source is a 2018 preprint.
- Results for [larger groups](pop-pro-l-birational-theorem.md), including the [full absolute Galois group](silberstein-birational-anabelian-theorem.md). Those sources are also preprints.
- A [mod-$\ell$ variant](mod-l-bogomolov-pop-conjecture.md) that would reduce this conjecture to an injectivity statement [@topaz2016, §1.2].

See also [the pro-$\ell$ strategy](pro-l-strategy-for-bogomolov-pop.md).

**Status.** A [manuscript credited to OpenAI](manuscripts-claiming-bogomolov-pop.md) and dated 23 September 2026 claims a proof when both $K|k$ and $L|l$ have transcendence degree at least $2$ [@openai2026bp, Theorem 1.1]. It is not peer reviewed, and its Lean formalization covers injectivity only. The knowledgebase has checked its components one by one, and [the pro-$\ell$ reconstruction theorem](pro-l-abelian-by-central-reconstruction-of-function-fields.md) composes those checks into a proof of the conjecture for every pair of fields it concerns. That theorem has a `resolves` arrow to this entry. These are checks by AI agents, not peer review. Earlier sources describe the general case as open [@topaz2016, §1] [@topaz2017abc, §1]. A literature search in November 2026 found no refereed proof, but that search was not exhaustive.
