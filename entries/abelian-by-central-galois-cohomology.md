---
title: Abelian-by-central quotients determine Galois cohomology
kind: theorem
summary: For fields containing $\ell^n$-th roots of unity, a homomorphism of maximal pro-$\ell$ Galois groups induces an isomorphism on the mod-$\ell^n$ abelian-by-central quotients exactly when it induces an isomorphism on cohomology with $\mathbb{Z}/\ell^n$ coefficients (Chebolu–Efrat–Mináč).
tags: [galois-groups, milnor-k-theory]
edges:
  - {to: abelian-by-central-galois-group, label: analogous-to, note: "The quotient here comes from the descending central series, not the Zassenhaus filtration used there."}
---

**Statement.** For a group $G$ and a prime $\ell$, put $G^{(1,n)} = G$ and $G^{(i+1,n)} = (G^{(i,n)})^{\ell^n}[G^{(i,n)}, G]$, and put $G^{c,n} = G/G^{(3,n)}$. This descending central series differs from the [Zassenhaus filtration](abelian-by-central-galois-group.md) in general. Let $K, L$ be fields containing the $\ell^n$-th roots of unity, let $G_K$ and $G_L$ be their maximal pro-$\ell$ Galois groups, and let $\Psi : G_K \to G_L$ be a continuous homomorphism. Then $\Psi$ induces an isomorphism $G^{c,n}_K \to G^{c,n}_L$ if and only if it induces an isomorphism $H^*(G_L, \mathbb{Z}/\ell^n) \to H^*(G_K, \mathbb{Z}/\ell^n)$. This is due to Chebolu, Efrat and Mináč [@bogomolovtschinkel2012, Theorem 12].

**Relation to Milnor K-theory.** By the Merkurjev–Suslin theorem, the second cohomology of the absolute Galois group with $\mathbb{Z}/\ell^n$ coefficients is $K^M_2(K)/\ell^n$. Bogomolov and Tschinkel explain that the Bloch–Kato conjecture implies that the abelian-by-central quotient captures the $\ell$-part of the cohomology, and they present this theorem as a related incarnation of that principle [@bogomolovtschinkel2012, §3].

**A formal description.** If $\mu_n \subset K$ and the characteristic of $K$ is prime to $n$, then the Merkurjev–Suslin theorem gives a functorial description of the second graded piece of the mod-$n$ central series of $G_K$ as a group of functions on $K \setminus \{0,1\}$, compatibly with Kummer theory [@topaz2017abc, Theorem 1].

**Attribution.** The original paper of Chebolu, Efrat and Mináč has not been opened for this entry.
