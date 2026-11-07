---
title: Hodge–Tate criteria for geometricity of local Galois homomorphisms
kind: theorem
summary: An isomorphism of absolute Galois groups of $p$-adic fields comes from a field isomorphism exactly when it is of Hodge–Tate type, equivalently when it preserves the ramification filtration. An open homomorphism arises from a field embedding exactly when it is of cyclotomic Hodge–Tate type.
tags: [local-fields, galois-groups, ramification]
edges:
  - {to: mochizuki-local-fields-theorem, label: generalizes, note: "Mochizuki calls this a generalization of that main result [@mochizuki2012, Introduction]. It addresses existence, not uniqueness."}
---

**Definitions.** Let $k_1, k_2$ be finite extensions of $\mathbb{Q}_{p_1}, \mathbb{Q}_{p_2}$, let $\widehat{\bar k}_i$ be the $p_i$-adic completion of an algebraic closure of $k_i$, and let $\varphi : G_{k_1} \to G_{k_2}$ be an open homomorphism [@mochizuki2012, Definition 3.1].

- $\varphi$ is *geometric* if it arises from a field isomorphism $\bar k_2 \to \bar k_1$ that maps $k_2$ into $k_1$.
- $\varphi$ is of *HT-type* if $p_1 = p_2$ and $\widehat{\bar k}_2$, with $G_{k_1}$ acting through $\varphi$, is isomorphic to $\widehat{\bar k}_1$ as a topological $G_{k_1}$-module.
- $\varphi$ is of *CHT-type* if it is of HT-type and $\chi_{k_1} = \chi_{k_2} \circ \varphi$ for the cyclotomic characters.

**Statements.**

- An open homomorphism $\varphi$ is geometric if and only if it is of CHT-type [@mochizuki2012, Theorem 3.5].
- An isomorphism $\varphi$ is geometric if and only if it is of HT-type [@mochizuki2012, Theorem 3.5].
- An isomorphism $\varphi$ is geometric if and only if it preserves the positively indexed [ramification filtration](ramification-filtration.md) [@mochizuki2012, Corollary 3.7].

The equivalences of the corollary continue to hold for isomorphisms between the maximal pro-$p$ quotients [@mochizuki2012, Remark 3.7.1].

**Related.** Hoshi proved that an open homomorphism is geometric if and only if pulling back along it preserves Hodge–Tate representations [@hoshi2019, Remark 1.4.1]. Mochizuki's proof essentially shows that an outer isomorphism is geometric if and only if, on every open subgroup, it preserves the subgroups of $k^\times$ corresponding to $1 + \mathfrak{m}^n$ [@hoshi2019, Remark 1.4.2].
