---
title: Invariants of a p-adic field recovered from its absolute Galois group
kind: theorem
summary: 'For a finite extension $K/\mathbb{Q}_p$, the topological group $G_K$ determines $p$, the degree, the residue degree, inertia, wild inertia, Frobenius, the cyclotomic character, the multiplicative group $K^\times$ and the maximal abelian subextension over $\mathbb{Q}_p$.'
tags: [local-fields, galois-groups]
edges:
  - {to: local-class-field-theory, label: uses, note: "Reciprocity identifies the abelianization with the completed multiplicative group in the reconstruction of numerical invariants."}
  - {to: local-tate-duality, label: uses, note: "Top cohomology recognizes the cyclotomic twist in the recovery of the p-adic cyclotomic character."}
---

**Statement.** Let $K$ be a finite extension of $\mathbb{Q}_p$. The following can be recovered group-theoretically from $G_K$:

- $p$, the degree $d = [K:\mathbb{Q}_p]$, the residue degree $f$ and the ramification index $e$ [@hoshi2019, Theorem 1.4].
- The inertia subgroup $I_K$, the wild inertia subgroup $P_K$, and the Frobenius element in $G_K/I_K$ [@hoshi2019, Theorem 1.4].
- The groups $K^\times$ and $\mathcal{O}_K^\times$, and the group of roots of unity of an algebraic closure [@hoshi2019, Theorem 1.4].
- The cyclotomic character, since the isomorphism on Tate modules of roots of unity respects the Galois actions [@hoshi2019, Theorem 1.4]. For the $p$-adic part, see [@mochizuki1997, Proposition 1.1].
- The additive group of an algebraic closure $\bar K$ with its $G_K$-action [@mochizuki1997, Proposition 2.1].
- The maximal subfield of $K$ abelian over $\mathbb{Q}_p$ [@mochizuki1997, §1, Remark after Corollary 1.3].

"Group-theoretically" means that an isomorphism of topological groups $G_K \to G_{K'}$ carries each object for $K$ to the corresponding object for $K'$ [@mochizuki1997, §1].

**Method.** [Local class field theory](local-class-field-theory.md) gives $G_K^{\mathrm{ab}} \cong (K^\times)^\wedge$, which yields the numerical invariants. Applying this to open subgroups detects inertia. [Local Tate duality](local-tate-duality.md) detects the $p$-adic cyclotomic character, since a module $M \cong \mathbb{Z}/p^n$ is isomorphic to $\mathbb{Z}/p^n(1)$ exactly when $H^2(K, M) \cong \mathbb{Z}/p^n$ [@mochizuki1997, §1]. Frobenius is preserved because of its conjugation action on tame inertia [@jardenritter1979, Lemma 3].

**Limit.** The field structure of $K$ is not on this list, and it cannot be: there are [non-isomorphic $p$-adic fields with isomorphic absolute Galois groups](nonisomorphic-p-adic-fields-with-isomorphic-galois-groups.md), so no functorial group-theoretic algorithm reconstructs it [@hoshi2019, Remark 1.4.1]. The additive and multiplicative groups are each recoverable. What is missing is how they fit together [@mochizuki1997, §2, after Proposition 2.1].
