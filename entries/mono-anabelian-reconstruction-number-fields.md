---
title: Mono-anabelian reconstruction of number fields
kind: theorem
summary: Hoshi gives a functorial group-theoretic algorithm that takes an abstract profinite group isomorphic to the absolute Galois group of a number field, and more generally a solvably closed Galois group, and constructs the field with its Galois action.
tags: [number-fields, galois-groups, mono-anabelian]
edges:
  - {to: uchida-solvably-closed-theorem, label: uses, note: "In the form of [@hoshi2019, Theorem 3.3]. It plays a crucial role, so the algorithm gives no new proof of it [@hoshi2019, Remark 5.11.3]."}
  - {to: neukirch-uchida-theorem, label: motivated-by}
  - {to: neukirch-local-theory, label: uses, note: "Decomposition groups are identified through [@hoshi2019, Lemma 3.4]."}
  - {to: local-field-galois-invariants, label: uses, note: "The local reconstruction is reviewed in [@hoshi2019, §1]."}
---

**Statement.** Call a profinite group of AGSC-type if it is isomorphic to $\mathrm{Gal}(\tilde F/F)$, for a number field $F$ and an extension $\tilde F/F$ with $\tilde F$ solvably closed and Galois over $\mathbb{Q}$. Absolute Galois groups of number fields are of this type. There is a functorial group-theoretic algorithm that constructs, from a profinite group $G$ of AGSC-type, an absolutely Galois solvably closed field $\tilde F(G)$ with an action of $G$. The invariants $\tilde F(G)^G$ form a number field, and the action gives an isomorphism $G \to \mathrm{Gal}(\tilde F(G)/\tilde F(G)^G)$ [@hoshi2019, Theorem A].

**General solvably closed case.** Hoshi later removed the requirement that the field be Galois over $\mathbb{Q}$, obtaining the same kind of algorithm for all Galois groups of solvably closed Galois extensions of number fields [@hoshi2022, Introduction, Summary].

**Meaning.** The [Neukirch–Uchida theorem](neukirch-uchida-theorem.md) compares two given fields and is bi-anabelian: it does not explicitly reconstruct a field from its group. The input here is a single abstract profinite group [@hoshi2019, Introduction].

**Small quotients.** See [reconstruction from m-step solvable quotients](m-step-mono-anabelian-reconstruction.md).
