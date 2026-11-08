---
title: The pro-l strategy for the Bogomolov–Pop conjecture
kind: note
summary: 'Recover $K^\times/k^\times$ inside the Kummer dual of $\Pi^a_K$, recover the projective lines of $\mathbb{P}_k(K)$, then apply the fundamental theorem of projective geometry. The work splits into a local theory for valuations and a global theory using rational quotients.'
tags: [function-fields, galois-groups]
edges:
  - {to: bogomolov-pop-conjecture, label: addresses}
  - {to: fundamental-theorem-of-projective-geometry, label: uses, note: "The final step recovers the vector-space structure from projective points and lines [@topaz2016, §1.1, p. 3]."}
  - {to: commuting-liftable-pairs-and-valuations, label: uses, note: "The primary tool of the local theory [@topaz2016, §1.1]."}
---

**Three steps.** Let $K|k$ be as in the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md). Kummer theory identifies $\mathrm{Hom}(\Pi^a_K, \mathbb{Z}_\ell)$ with the $\ell$-adic completion of $K^\times$, which contains $K^\times/k^\times$. The strategy, outlined by Pop, has three steps [@topaz2016, §1.1]:

1. Determine $K^\times/k^\times$ as a subset of this dual. It is the infinite-dimensional projective space $\mathbb{P}_k(K)$.
2. Determine the projective lines of $\mathbb{P}_k(K)$. Using the multiplication, it is enough to find those containing $1$.
3. Apply the [fundamental theorem of projective geometry](fundamental-theorem-of-projective-geometry.md) to recover $K$ as a $k$-vector space, then use the multiplication to recover the field.

**Local theory.** Use $\Pi^c_K$ to recover inertia and decomposition groups in $\Pi^a_K$ of divisorial valuations and their Parshin chains. As of 2015, over an arbitrary algebraically closed field, one could [recover this only for quasi-divisorial valuations](quasi-divisorial-groups-recoverable.md) [@topaz2016, §1.1].

**Global theory.** Use the local theory and the rational quotients of $\Pi^a_K$. The main problem is then to reconstruct the rational quotients from the group, which is done [over algebraic closures of finite fields](bogomolov-pop-over-finite-field-closures.md) [@topaz2016, §1.1].

**The mod-$\ell$ case.** This strategy fails from the start in the [mod-$\ell$ setting](mod-l-bogomolov-pop-conjecture.md), since $K^\times/\ell$ contains no apparent object to which projective geometry over $k$ applies [@topaz2016, §1.1].
