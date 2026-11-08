---
title: Mochizuki's theorem for proper hyperbolic curves over finite fields
kind: theorem
summary: 'A proper hyperbolic curve over a finite field is determined functorially by its full étale fundamental group, with no map to the Galois group of the constants supplied. Mochizuki proves this through cuspidalization, completing the proper case left open by Tamagawa.'
tags: [curves, fundamental-groups, function-fields]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: tamagawa-grothendieck-conjecture-for-affine-curves, label: analogous-to, note: "The proper case over finite fields, complementary to Tamagawa's affine case."}
  - {to: prime-to-p-anabelian-curves-over-finite-fields, label: analogous-to, note: "The same reconstruction question with a different input group: the geometrically pro-prime-to-p quotient."}
---

**Setting.** Let $X/k_X$ and $Y/k_Y$ be smooth proper geometrically connected curves of genus at least $2$ over finite fields. Write $\Pi_X = \pi_1(X)$ and $\Pi_Y = \pi_1(Y)$ for their full arithmetic étale fundamental groups. Thus
$$1\to\pi_1(X\times_{k_X}\bar k_X)\to\Pi_X\to G_{k_X}\to1$$
[@mochizuki2007cuspidal, §1, p. 6].

**Theorem (Mochizuki).** Every topological isomorphism $\alpha:\Pi_X\xrightarrow{\sim}\Pi_Y$ arises from a unique commutative diagram
$$\begin{array}{ccc}
\widetilde X&\xrightarrow{\sim}&\widetilde Y\\
\downarrow&&\downarrow\\
X&\xrightarrow{\sim}&Y
\end{array}$$
whose horizontal arrows are scheme isomorphisms inducing $\alpha$ and whose vertical arrows are the profinite étale universal coverings determined by $\Pi_X$ and $\Pi_Y$ [@mochizuki2007cuspidal, Theorem 3.2, p. 86].

No identification of $k_X$ with $k_Y$, compatibility with their Galois groups, or preservation of Frobenius is assumed. The Galois quotients are intrinsic, and $\alpha$ preserves arithmetic Frobenius; in particular, $|k_X|=|k_Y|$ [@mochizuki2007cuspidal, Theorem 1.1 (ii), p. 27; Remarks 9 and 11, pp. 32–33].

**Cuspidalization input.** The proof reconstructs quotients of fundamental groups after puncturing the proper curve. Theorem 2.1 recovers the maximal cuspidally abelian groups of affine opens and their function-theoretic information [@mochizuki2007cuspidal, Theorem 2.1, p. 42]. Theorem 3.1 lifts a Frobenius-preserving isomorphism matching two rational points to the maximal cuspidally pro-$\ell$ quotients after removing those points, for every $\ell$ different from the characteristic [@mochizuki2007cuspidal, Theorem 3.1, pp. 80–81]. Corollary 3.1 obtains compatibility with the point-evaluation data called Green's trivializations; Corollary 2.1 then reconstructs the scheme diagram [@mochizuki2007cuspidal, Corollary 3.1 and proof of Theorem 3.2, pp. 85–86; Corollary 2.1, pp. 44–45]. The final theorem requires no chosen rational point.

This complements [Tamagawa's affine theorem](tamagawa-grothendieck-conjecture-for-affine-curves.md). The [prime-to-$p$ theorem](prime-to-p-anabelian-curves-over-finite-fields.md) concerns a different arithmetic group, retaining $G_k$ but replacing the geometric kernel by its maximal pro-prime-to-$p$ quotient [@saiditamagawa2009, §0 and Theorem 1, p. 137].
