---
title: Uchida's theorem for global function fields
kind: theorem
summary: Two function fields of one variable over finite constant fields with isomorphic absolute Galois groups are isomorphic. This is the function field analogue of the Neukirch–Uchida theorem.
tags: [function-fields, galois-groups]
---

**Statement.** Let $k_1, k_2$ be function fields of one variable over finite constant fields. If their absolute Galois groups are isomorphic, then $k_1$ and $k_2$ are isomorphic [@jardenritter1979, p. 1]. See also [@cornelissen2019, §1].

**Functorial form.** Tamagawa states Uchida's theorem in functorial form. For finite fields $k_1, k_2$ and proper, smooth, geometrically connected curves $X_i$ over $k_i$, the natural map
$$\mathrm{Isom}(\mathrm{Spec}\, k_1(X_1), \mathrm{Spec}\, k_2(X_2)) \to \mathrm{Isom}(G_{k_1(X_1)}, G_{k_2(X_2)})/\mathrm{Inn}(G_{k_2(X_2)})$$
is bijective [@tamagawa1997, Introduction, p. 138]. Uchida describes his theorem for [solvably closed extensions of number fields](uchida-solvably-closed-theorem.md) as the exact analogue of his function field theorem [@uchida1979, p. 359].

**Method.** Tamagawa summarizes Uchida's proof in three steps, starting from $G_{k(X)}$ [@tamagawa1997, Introduction, pp. 138–139].

1. Characterize the decomposition groups at the closed points of $X$, by a method using Brauer groups, after Neukirch.
2. Recover the multiplicative group $k(X)^\times$ by class field theory, together with the valuation and the reduction at each closed point.
3. Recover the addition on $k(X) = k(X)^\times \cup \{0\}$, using reductions at infinitely many points.

Tamagawa adapts these steps to fundamental groups of affine curves over finite fields, replacing step 1 by an argument with sections and point counts. See [Tamagawa's theorem](tamagawa-grothendieck-conjecture-for-affine-curves.md).

The function field paper itself (Ann. of Math. 106 (1977), 589–598) has not been opened for this entry. The functorial statement and the outline of the proof are as Tamagawa reports them.
