---
title: Finite class-two quotients represent unramified cohomology
kind: theorem
summary: 'Over $k=\overline{\mathbb F}_p$, every unramified $\mathbb Z/\ell^n$ Galois class of degree greater than one, with $\ell\ne p$, comes from stable unramified cohomology of a suitable finite abelian-by-central $\ell$-group (Bogomolov–Tschinkel).'
tags: [function-fields, galois-cohomology, galois-groups]
edges:
  - {to: unramified-cohomology, label: uses}
  - {to: abelian-by-central-galois-group, label: uses}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "The proof starts with its abelian-quotient formulation [@bogomolovtschinkel2014universal, Theorem 5.1 and proof of Theorem 7.1, pp. 21 and 26]."}
  - {to: abelian-by-central-galois-cohomology, label: analogous-to, note: "Both encode Galois cohomology through small quotients; here the representative also satisfies an unramified condition."}
---

**Statement.** Let $k=\overline{\mathbb F}_p$, let $K/k$ be a function field of transcendence degree at least $2$, and fix $\ell\ne p$, $n\ge1$, $i>1$ and $M=\mathbb Z/\ell^n$. Write $\Pi^c_K$ for the [maximal pro-$\ell$ class-two quotient](abelian-by-central-galois-group.md).

For every $\alpha\in H^i_{\mathrm{nr}}(K/k,M)$ there are continuous surjections
$$
\Pi^c_K\longrightarrow C\xrightarrow{q}A,
\qquad 1\longrightarrow Z\longrightarrow C\xrightarrow{q}A\longrightarrow1,
$$
where $C$ is a finite $\ell$-group, $A$ is abelian and $Z$ is central, and a class $\beta\in H^i(A,M)$ such that:

- Inflation along $G_K\to A$ sends $\beta$ to $\alpha$.
- The stable image of $q^*\beta$ lies in $H^i_{s,\mathrm{nr}}(C,M)$, with [stable unramified cohomology](unramified-cohomology.md) taken over $k$.

This is Bogomolov–Tschinkel's Theorem 7.1 [@bogomolovtschinkel2014universal, Theorem 7.1, pp. 25–26; quotient diagram, pp. 26–27].

**Dependence on the class.** The finite quotient can depend on $\alpha$. The proof refines an initial abelian quotient because the induced class on its associated central extension can still be ramified [@bogomolovtschinkel2014universal, proof of Theorem 7.1, pp. 26–27].
