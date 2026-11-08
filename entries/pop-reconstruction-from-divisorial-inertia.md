---
title: Reconstruction from pro-l abelian-by-central data with divisorial inertia
kind: theorem
summary: Pop reconstructs $K|k$ functorially from $\Pi^c_K$ with the set of divisorial inertia when $\mathrm{td}(K|k) > 2$. Since divisorial inertia is recoverable if $\mathrm{td}(K|k) > \dim(k)$, this gives Bogomolov–Pop when $\mathrm{td}(K|k) > \dim(k) + 1$ or $\mathrm{td}(K|k) > \dim(k) > 1$.
tags: [function-fields, galois-groups]
edges:
  - {to: bogomolov-pop-conjecture, label: addresses}
  - {to: quasi-divisorial-groups-recoverable, label: uses}
  - {to: abelian-by-central-galois-group, label: uses}
  - {to: pairing-compatible-isomorphisms-lift-to-abelian-by-central-groups, label: uses, note: "Identifies Pop's isomorphism set with the pairing-compatible isomorphisms of the conjecture."}
  - {to: total-decomposition-graph-from-divisorial-inertia, label: uses, note: "Step 1 of the reconstruction proof [@pop2018, p. 5]."}
---

**With divisorial inertia.** Let $K|k$ be a function field over an algebraically closed field with $\mathrm{char}(k) \ne \ell$ and $\mathrm{td}(K|k) > 2$. Let $\mathrm{In.div}(K) \subset \Pi^a_K$ be the union of the inertia groups of prime divisors. There is a group-theoretic recipe that reconstructs $K|k$ functorially from $\Pi^c_K$ with $\mathrm{In.div}(K)$. Let $\mathrm{Isom}^F(L, K)$ be the isomorphisms $L^i \to K^i$ up to Frobenius twists, and $\overline{\mathrm{Isom}}^c(\Pi^a_K, \Pi^a_L)$ the abelianizations of isomorphisms $\Pi^c_K \to \Pi^c_L$, modulo $\ell$-adic units. If $\Phi$ in the second set carries $\mathrm{In.div}(K)$ onto $\mathrm{In.div}(L)$, then $\Phi$ arises from a unique element of the first [@pop2018, Theorem 1.1].

**Without it.** Define the Kronecker dimension by $\dim(k) = \mathrm{td}(k|k_0) + \dim(k_0)$ for the prime field $k_0$, with $\dim(\mathbb{F}_p) = 0$ and $\dim(\mathbb{Q}) = 1$. Suppose $\mathrm{td}(K|k) > 1$. If $\mathrm{td}(K|k) > \dim(k)$, then a group-theoretic recipe recovers $\mathrm{In.div}(K)$ from $\Pi^c_K$. So if $\mathrm{td}(K|k) > \dim(k) + 1$ or $\mathrm{td}(K|k) > \dim(k) > 1$, the canonical map $\mathrm{Isom}^F(L, K) \to \overline{\mathrm{Isom}}^c(\Pi^a_K, \Pi^a_L)$ is a bijection [@pop2018, Theorem 1.2]. Since [pairing-compatible isomorphisms of $\Pi^a$ lift to $\Pi^c$](pairing-compatible-isomorphisms-lift-to-abelian-by-central-groups.md), this is the map in the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md) with $K$ and $L$ exchanged.

**Status of the source.** The source is an arXiv preprint dated 2018, whose arXiv page lists no journal reference as of November 2026.
