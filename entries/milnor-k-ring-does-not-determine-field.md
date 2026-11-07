---
title: The Milnor K-ring does not determine a field in general
kind: theorem
summary: 'Cadoret and Pirutka asked whether $K^M_*(F)$ determines a field $F$. In general it does not: all solvably closed subfields of $\bar{\mathbb{Q}}$ have isomorphic Milnor K-rings. The naive functorial form also fails, even on classes of fields where the answer is positive, such as finite fields.'
tags: [milnor-k-theory, counterexample]
edges:
  - {to: milnor-k-ring, label: uses}
---

**Question.** Does the [Milnor K-ring](milnor-k-ring.md) $K^M_*(F)$ determine the isomorphism class of the field $F$ [@cadoretpirutka2019, Question 1]?

**Negative answer.** All solvably closed subfields of $\bar{\mathbb{Q}}$ have isomorphic Milnor K-rings [@cadoretpirutka2019, §1]. For example, $\bar{\mathbb{Q}}$ and the maximal solvable extension of $\mathbb{Q}$ are not isomorphic, since the second is not algebraically closed. The example of this pair is ours.

**Proof.** Let $F$ be such a field. Every polynomial $T^n - x$ over $F$ splits, so $K^M_2(F)$ is uniquely divisible. It is also a quotient of the inductive limit of $K^M_2$ of number fields $E$. Each of these is torsion: the tame symbols map $K_2(E)$ to the direct sum of the multiplicative groups of the finite residue fields, and the kernel is finite, a result due to Garland in the number field case [@kunyavskii2025, Lemma 4.2]. So $K^M_2(F)$ is torsion as well as uniquely divisible, hence trivial, and it remains to compare multiplicative groups. Since $F^\times$ is divisible and countable, it is the direct sum of its torsion subgroup, the group of all roots of unity in $\bar{\mathbb{Q}}$, and a countable-dimensional $\mathbb{Q}$-vector space [@cadoretpirutka2019, §1]. The source credits the counterexample to a referee [@cadoretpirutka2019, §1, footnote 2]. At the torsion step the source says only that the kernel is finitely generated, but finiteness is needed, as the example of $\mathbb{Q}$ as an inductive limit of copies of $\mathbb{Z}$ shows. Garland's paper itself has not been opened for this entry.

**Note on versions.** The arXiv version, which predates the referee reports, says instead that no counterexample seems to be known [@cadoretpirutka2021, §1].

**Functoriality.** Even on a class of fields where the answer is positive, the naive functorial form fails. For a finite field $F$, the ring $K^M_*(F)$ has extra automorphisms induced by $x \mapsto x^u$ for $u$ prime to $|F| - 1$ on $K^M_1(F)$ [@cadoretpirutka2019, §1].

**Positive results.**

- [Function fields of transcendence degree at least $2$](milnor-k-reconstruction-function-fields.md) over algebraically closed or finite fields, using a quotient of the ring.
- [Fields of absolute transcendence degree at least $5$](algebraic-dependence-in-milnor-k-theory.md), up to purely inseparable extensions, using the rational Milnor K-ring.
- Finitely generated fields of absolute transcendence degree at least $2$, with no need to pass to inseparable extensions [@topaz2022, §1].

These do not cover all fields of small positive absolute transcendence degree that are not finitely generated. For example, $\bar{\mathbb{Q}}(t)$ has transcendence degree $1$ over its constants and is not finitely generated, so all three miss it. This observation is ours, and no source opened here says whether that case is open.
