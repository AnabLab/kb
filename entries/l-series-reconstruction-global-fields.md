---
title: Reconstructing global fields from Dirichlet L-series
kind: theorem
summary: Two global fields are isomorphic exactly when there is an isomorphism of abelianized Galois groups preserving all Dirichlet L-series, or equivalently one matching ideals, norms and Frobenius elements. Neither the zeta function nor the abelianized group suffices alone.
tags: [number-fields, function-fields, galois-groups]
edges:
  - {to: neukirch-uchida-theorem, label: analogous-to, note: "Both recover the field, one from the full Galois group of a number field and one from the abelianization of a global field with extra data."}
---

**Statement.** For global fields $K, L$, the following are equivalent [@cornelissen2019, Theorem 3.1]:

- $K$ and $L$ are isomorphic.
- There is a topological isomorphism $\psi : G_K^{\mathrm{ab}} \to G_L^{\mathrm{ab}}$ with $L_K(\chi) = L_L(\chi \circ \psi^{-1})$ for all Dirichlet characters $\chi$ of $K$.
- There are a norm-preserving monoid isomorphism $\varphi$ between the monoids of integral ideals and a topological isomorphism $\psi : G_K^{\mathrm{ab}} \to G_L^{\mathrm{ab}}$, such that for each finite abelian $K'/K$ with corresponding $L'/L$, the map $\varphi$ is a bijection between the unramified primes with $\psi(\mathrm{Frob}_{\mathfrak{p}}) = \mathrm{Frob}_{\varphi(\mathfrak{p})}$.

The theorem also has a fourth equivalent condition, called a reciprocity isomorphism.

**Number fields.** For a number field $K$ and any $k \ge 3$, there is a single character $\chi$ of order $k$ such that every number field $L$ with a character $\chi'$ satisfying $L_L(\chi') = L_K(\chi)$ is isomorphic to $K$ [@cornelissen2019, §1]. The precise statement is [@cornelissen2019, Theorem 10.1].

**Contrast.** Zeta functions do not determine global fields, by Gaßmann for number fields and by a theorem of Tate for function fields [@cornelissen2019, §1]. The [abelianized Galois group](abelian-galois-group-does-not-determine-number-field.md) does not determine them either.

**Use.** This theorem is the final step in the isomorphy-type statement for [the quotient $G_K^3$](m-step-solvable-neukirch-uchida.md), where the equivalence of the third form with isomorphism of fields is applied to primes, norms and Frobenius elements recovered from $G_K^3$ [@saiditamagawa2022, §2].
