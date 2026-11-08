---
title: Characterizing local fields of positive characteristic by Galois and Brauer data
kind: theorem
summary: 'A field $K$ with $G_K \cong G_{\mathbb{F}_q((t))}$, imperfect exponent at most $1$, $\mathrm{Br}(K)[p] \cong \mathbb{Z}/p$ and the local duality pairing is isomorphic to $\mathbb{F}_q((t))$. The Galois group alone does not suffice: Efrat and Fesenko found examples of other kinds.'
tags: [local-fields, galois-groups]
edges:
  - {to: neukirch-local-theory, label: analogous-to, note: "Both characterize local fields by Galois data, but this one needs extra data at $p$."}
  - {to: fontaine-wintenberger-field-of-norms, label: uses, note: "only for an explicit field of characteristic $0$ in the remark on why extra data is needed"}
  - {to: bloch-gabber-kato-theorem, label: uses, note: "The Milnor K-theoretic reformulation of the imperfection hypothesis uses the differential symbol [@dittmann2025, §2, p. 5]."}
  - {to: brauer-duality-forces-local-completeness, label: uses, note: "The proof applies Proposition 4.7 after Galois theory supplies a suitable valuation [@dittmann2025, proof of Theorem 1.1, p. 12]."}
---

**Statement.** Let $p$ be a prime and $q = p^n$. Let $K$ be a field such that:

- $G_K \cong G_{\mathbb{F}_q((t))}$.
- $K$ has exponent of imperfection at most $1$.
- $\mathrm{Br}(K)[p] \cong \mathbb{Z}/p$.
- The natural pairing $\mathrm{Hom}(G_K, \mathbb{Z}/p) \times K^\times/K^{\times p} \to \mathrm{Br}(K)[p]$ induces an isomorphism $K^\times/K^{\times p} \cong \mathrm{Hom}(\mathrm{Hom}(G_K, \mathbb{Z}/p), \mathrm{Br}(K)[p])$.

Then $K \cong \mathbb{F}_q((t))$ [@dittmann2025, Theorem 1.1]. Conversely, $\mathbb{F}_q((t))$ satisfies these axioms [@dittmann2025, §1].

**Completeness mechanism.** Galois theory first supplies a nontrivial henselian valuation with residue field admitting a cyclic degree-$p$ extension. The [Brauer-duality completeness theorem](brauer-duality-forces-local-completeness.md) then makes it a complete discrete valuation with finite residue field; its entry also defines the pairing in the fourth hypothesis [@dittmann2025, Corollary 3.3, p. 7; Proposition 4.7, p. 11; proof of Theorem 1.1, p. 12].

**Milnor K-theoretic form.** The first and third hypotheses force $\operatorname{char}K=p$ [@dittmann2025, Lemma 2.3, p. 4]. In characteristic $p$, the [differential-symbol theorem](bloch-gabber-kato-theorem.md) gives
$$
[K:K^p]\le p\quad\Longleftrightarrow\quad K_2^M(K)/p=0.
$$
Thus the imperfection hypothesis may be replaced by this vanishing condition, retaining the Galois group, Brauer group and pairing hypotheses [@dittmann2025, §2, p. 5]. For the full cohomological statement and coefficient dictionary, see the [Kato-cohomology formulation](kato-cohomology-and-local-field-reconstruction.md). Its perfection example isolates the Brauer hypothesis.

**Why extra data is needed.** Efrat and Fesenko analysed the fields whose absolute Galois group is isomorphic to that of $\mathbb{F}_q((t))$. Their examples include fields of characteristic $0$, fields of arbitrarily large imperfection degree, and fields with imperfect residue field [@dittmann2025, §1]. An explicit field of characteristic $0$ of this kind is $U(\mu_{p^\infty})$, where $U$ is the unramified extension of $\mathbb{Q}_p$ of degree $n$, by the corollary in the entry on the [Fontaine–Wintenberger theorem](fontaine-wintenberger-field-of-norms.md). Absolute Galois groups in characteristic $p$ carry little information at $p$, and the extra axioms supply it [@dittmann2025, §1].

**Comparison with the $p$-adic case.** This is stronger than the $p$-adic characterization, because $p$-adic local fields cannot be distinguished Galois-theoretically from the larger class of [$p$-adically closed fields](galois-characterization-of-p-adically-closed-fields.md) [@dittmann2025, §1]. The theorem does not address functorial reconstruction of the field [@dittmann2025, §1].

**Status of the source.** The paper is published in Compositio Mathematica. Locations here refer to the arXiv version, and the journal version has not been compared with it.
