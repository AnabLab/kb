---
title: Projective profinite groups are exactly the absolute Galois groups of PAC fields
kind: theorem
summary: A profinite group is the absolute Galois group of some PAC field exactly when it is projective, equivalently of cohomological dimension at most one (Lubotzky–van den Dries). Projectivity does not imply profinite freeness, and the group does not recognize whether a field is PAC.
tags: [galois-groups, galois-cohomology, reconstruction-algorithms]
edges:
  - {to: shafarevich-conjecture, label: analogous-to, note: "The example below explains why projectivity alone does not prove the freeness predicted there."}
  - {to: function-fields-of-curves-have-free-galois-groups, label: analogous-to, note: "That entry gives a class of fields with free absolute Galois groups; PAC realization applies to every projective profinite group, including nonfree ones."}
  - {to: cohomological-tests-do-not-characterize-galois-groups, label: analogous-to, note: "Projectivity here is sufficient for absolute Galois realizability; the target's Koszul and Massey tests are not sufficient."}
---

**Definitions.** A field is *pseudo-algebraically closed* (PAC) if every nonempty geometrically integral variety over it has a rational point. A profinite group $P$ is *projective* if every finite embedding problem
$$
\varphi:P\longrightarrow A,\qquad \alpha:B\twoheadrightarrow A
$$
has a continuous weak solution $\gamma:P\to B$ with $\alpha\gamma=\varphi$. The groups $A,B$ are finite; $\gamma$ need not be surjective.

**Characterization.** For any profinite group $P$, the following are equivalent:

1. $P$ is projective.
2. $\operatorname{cd}(P)\le1$.
3. $P$ is isomorphic to a closed subgroup of a free profinite group.
4. $P\cong G_F$ for some PAC field $F$.

Here cohomological dimension is for continuous cohomology with all discrete torsion modules, not just trivial coefficients. This is Lubotzky–van den Dries' characterization [@lubotzkyvandendries1981, §4.8, Proposition, p. 44]. In particular, the implication from PAC to projective holds without a perfectness hypothesis; their proof attributes this direction to Ax and its nonperfect extension to Jarden.

**Projective need not mean free profinite, checked here.** Fix a prime $p$. To solve a finite embedding problem for $P=\mathbb Z_p$, replace $A$ by the cyclic $p$-group $C=\varphi(P)$ and $B$ by $E=\alpha^{-1}(C)$. A Sylow $p$-subgroup $S$ of $E$ maps onto $C$: its image has index dividing $[E:S]$, which is prime to $p$, in the $p$-group $C$. Choose $b\in S$ mapping to $\varphi(1)$. Since $b$ has $p$-power order, $1\mapsto b$ extends to a continuous homomorphism $\mathbb Z_p\to B$, solving the problem. Thus $\mathbb Z_p$ is projective and occurs as the absolute Galois group of a PAC field. It is not free profinite: for any prime $r\ne p$ it has no quotient $\mathbb Z/r$, whereas every nontrivial free profinite group has such a quotient by mapping one free generator to $1$ and all others to $0$.

**PAC itself is not determined by the group, checked here.** Lubotzky–van den Dries report Jarden's construction of PAC algebraic extensions $F/\mathbb Q$ with $G_F$ free profinite of any prescribed positive finite rank [@lubotzkyvandendries1981, §4.2, pp. 41–42]. Taking rank one gives $G_F\cong\widehat{\mathbb Z}$. For any prime power $q$, the union of the cyclic extensions $\mathbb F_{q^n}/\mathbb F_q$, with compatible Frobenius generators, also gives $G_{\mathbb F_q}\cong\widehat{\mathbb Z}$. Yet $\mathbb F_q$ is not PAC: the nonempty geometrically integral affine variety
$$
\operatorname{Spec}\mathbb F_q[t,1/(t^q-t)]
$$
has no $\mathbb F_q$-point. Thus an isomorphism of absolute Galois groups can preserve neither the PAC property nor characteristic. The characterization asserts existence of a PAC realization, not that every field with a projective absolute Galois group is PAC.

**Role and source check.** The [Shafarevich conjecture](shafarevich-conjecture.md) requires freeness beyond projectivity. The characterization above explains the distinction. The cited sections were opened in an online HTML transcription of the original article; its scanned PDF and the original papers of Ax and Jarden have not been checked here.
