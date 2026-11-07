---
title: Characterizing local fields of positive characteristic by Galois and Brauer data
kind: theorem
summary: 'A field $K$ with $G_K \cong G_{\mathbb{F}_q((t))}$, imperfect exponent at most $1$, $\mathrm{Br}(K)[p] \cong \mathbb{Z}/p$ and the local duality pairing is isomorphic to $\mathbb{F}_q((t))$. The Galois group alone does not suffice: Efrat and Fesenko found examples of other kinds.'
tags: [local-fields, galois-groups]
edges:
  - {to: neukirch-local-theory, label: analogous-to, note: "Both characterize local fields by Galois data, but this one needs extra data at $p$."}
---

**Statement.** Let $p$ be a prime and $q = p^n$. Let $K$ be a field such that:

- $G_K \cong G_{\mathbb{F}_q((t))}$.
- $K$ has exponent of imperfection at most $1$.
- $\mathrm{Br}(K)[p] \cong \mathbb{Z}/p$.
- The natural pairing $\mathrm{Hom}(G_K, \mathbb{Z}/p) \times K^\times/K^{\times p} \to \mathrm{Br}(K)[p]$ induces an isomorphism $K^\times/K^{\times p} \cong \mathrm{Hom}(\mathrm{Hom}(G_K, \mathbb{Z}/p), \mathrm{Br}(K)[p])$.

Then $K \cong \mathbb{F}_q((t))$ [@dittmann2025, Theorem 1.1]. Conversely, $\mathbb{F}_q((t))$ satisfies these axioms [@dittmann2025, §1].

**Why extra data is needed.** Efrat and Fesenko analysed the fields whose absolute Galois group is isomorphic to that of $\mathbb{F}_q((t))$. Their examples include fields of characteristic $0$, fields of arbitrarily large imperfection degree, and fields with imperfect residue field [@dittmann2025, §1]. Absolute Galois groups in characteristic $p$ carry little information at $p$, and the extra axioms supply it [@dittmann2025, §1].

**Comparison with the $p$-adic case.** This is stronger than the $p$-adic characterization, because $p$-adic local fields cannot be distinguished Galois-theoretically from the larger class of $p$-adically closed fields [@dittmann2025, §1]. The theorem does not address functorial reconstruction of the field [@dittmann2025, §1].

**Status of the source.** The paper is published in Compositio Mathematica. Locations here refer to the arXiv version, and the journal version has not been compared with it.
