---
title: Prime-to-p anabelian geometry of curves over finite fields
kind: theorem
summary: Saïdi–Tamagawa determine a hyperbolic curve over a finite field of characteristic p, including a proper curve, functorially from its geometrically pro-prime-to-p arithmetic fundamental group. The full Galois group of the constants is retained.
tags: [curves, fundamental-groups, function-fields]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: tamagawa-grothendieck-conjecture-for-affine-curves, label: analogous-to, note: "The finite-field hyperbolic case with a smaller geometric quotient, also allowing proper curves."}
---

**Setting.** Let $U/k$ be a [hyperbolic curve](hyperbolic-curve.md) over a finite field of characteristic $p$. Set $\bar U = U\times_k\bar k$, let $\Delta_U$ be the maximal pro-prime-to-$p$ quotient of $\pi_1(\bar U)$, and put
$$\Pi_U = \pi_1(U)/\ker\bigl(\pi_1(\bar U)\to\Delta_U\bigr).$$
Thus
$$1\to\Delta_U\to\Pi_U\to G_k\to1.$$
All of $G_k\cong\widehat{\mathbb Z}$ is retained [@saiditamagawa2009, §0, p. 137].

**Theorem (Saïdi–Tamagawa).** For hyperbolic curves $U/k_U$ and $V/k_V$ over finite fields, every topological isomorphism $\alpha:\Pi_U\to\Pi_V$ arises from a unique commutative diagram
$$\begin{array}{ccc}
\widetilde U&\xrightarrow{\sim}&\widetilde V\\
\downarrow&&\downarrow\\
U&\xrightarrow{\sim}&V
\end{array}$$
whose horizontal arrows are scheme isomorphisms inducing $\alpha$ and whose vertical maps are the profinite étale coverings corresponding to $\Pi_U,\Pi_V$. Proper curves are included [@saiditamagawa2009, Theorem 1, p. 137; Theorem 3.9 and Corollary 3.10, pp. 173–175].

**Intrinsic data.** No map of constant fields or Frobenius marking is supplied. The subgroup $\Delta_U$, quotient $G_k$, arithmetic Frobenius, characteristic, cardinality of $k$, genus and number of geometric punctures are recoverable from $\Pi_U$ [@saiditamagawa2009, Proposition 1.15 (i)–(v), (viii), pp. 150–152]. The theorem uses all primes different from the characteristic.

For proper curves, a [later refinement](proper-curves-over-finite-fields-from-large-prime-sets.md) allows any finite set of primes to be omitted, and more generally any omitted set for which the Jacobian's corresponding Tate representation has nontrivial kernel [@saiditamagawa2018refined, Theorem C and following paragraph, p. 3].

**Method.** For proper curves, cuspidalization recovers Kummer theory on affine opens $X\setminus S$, where the finite set of removed closed points $S$ avoids a finite exceptional set $E_X$. Kummer theory then determines, up to Frobenius twist, the multiplicative group of rational functions whose divisor avoids $E_X$. Functions with one pole recover addition [@saiditamagawa2009, §0, pp. 138–139].
