---
title: Injectivity in the section conjecture
kind: theorem
summary: 'Over a sub-$p$-adic field $K$, such as a field finitely generated over $\mathbb{Q}$, distinct $K$-points of a hyperbolic curve give non-conjugate sections of $\pi_1(X) \to G_K$, even in the geometrically pro-$p$ quotient. Over number fields a Kummer argument with Mordell–Weil also proves it.'
tags: [curves, fundamental-groups, number-fields, section-conjecture]
edges:
  - {to: section-conjecture, label: addresses, note: "It proves the injectivity half of the conjecture, so that only surjectivity remains open."}
  - {to: mochizuki-hom-theorem-for-hyperbolic-curves, label: uses, note: "Parts 1 and 2 rest on Theorem C [@mochizuki1999, Theorem 19.1, p. 92]."}
  - {to: hyperbolic-curve, label: uses}
  - {to: mordell-weil-theorem, label: uses, note: 'Only the number-field Kummer proof of part 3 uses finite generation of the Jacobian rational points.'}
---

**Setting.** The notation is that of the [section conjecture](section-conjecture.md). For a [hyperbolic curve](hyperbolic-curve.md) $X$ over a field $K$ of characteristic $0$, the map $\sigma_X : X(K) \to \mathrm{Sect}(G_K, \Pi^{\mathrm{prf}}_X)$ sends a $K$-rational point to the class of its section, modulo conjugation by $\Delta^{\mathrm{prf}}_X$. For a prime $p$, write $\sigma^{(p)}_X : X(K) \to \mathrm{Sect}(G_K, \Pi_X)$ for the analogous map to sections of the geometrically pro-$p$ quotient $\Pi_X \to G_K$, modulo conjugation by $\Delta_X$. A $K$-rational point induces $G_K \to \Pi^{\mathrm{prf}}_X \to \Pi_X$, so $\sigma^{(p)}_X$ is $\sigma_X$ followed by the map on sections induced by the quotient $q : \Pi^{\mathrm{prf}}_X \to \Pi_X$. The groups $\Pi^{\mathrm{prf}}_X \supseteq \Delta^{\mathrm{prf}}_X$ are defined for every curve over $K$, hyperbolic or not, as in the entry on hyperbolic curves, and $\sigma_X$ is defined for every curve in the same way. Part 3 uses this: it includes proper curves of genus $1$, which are not hyperbolic.

**Theorem.**

1. *(Mochizuki.)* If $K$ is sub-$p$-adic and $X$ is a hyperbolic curve over $K$, then $\sigma^{(p)}_X$ is injective [@mochizuki1999, Theorem 19.1, p. 92].
2. *(Profinite injectivity.)* Under the same hypotheses, $\sigma_X$ is injective. In particular this holds for every hyperbolic curve over a field finitely generated over $\mathbb{Q}$.
3. *(Kummer theory.)* If $K$ is a number field and $X$ is a curve over $K$, not necessarily hyperbolic, whose smooth compactification has genus at least $1$, then $\sigma_X$ is injective.

Koenigsmann records part 2 for smooth complete curves of genus at least $2$, citing part 1 [@koenigsmann2005, Remark 1.2 (2), p. 5]. For proper hyperbolic curves over fields finitely generated over $\mathbb{Q}$, Hoshi attributes the injectivity of $\sigma_X$ to Grothendieck, who proved it with the Mordell–Weil theorem [@hoshi2010, Introduction, p. 830], and Stix calls it "only an exercise exploiting the Mordell-Weil Theorem" [@stix2010, (1.2), p. 1]. Part 3 writes out that argument over number fields.

**Proof of part 2.** This is checked here. The quotient $q$ is compatible with the projections to $G_K$ and maps $\Delta^{\mathrm{prf}}_X$ onto $\Delta_X$. If $\sigma_X(x) = \sigma_X(y)$, choose sections $s_x, s_y$ in these classes and $\delta \in \Delta^{\mathrm{prf}}_X$ with $s_y = \delta s_x \delta^{-1}$. Then $q \circ s_y = q(\delta) (q \circ s_x) q(\delta)^{-1}$ with $q(\delta) \in \Delta_X$, so $\sigma^{(p)}_X(x) = \sigma^{(p)}_X(y)$, and $x = y$ by part 1. Every field finitely generated over $\mathbb{Q}$ is sub-$p$-adic for every $p$, as checked in the entry on [Mochizuki's Hom theorem](mochizuki-hom-theorem-for-hyperbolic-curves.md). $\square$

**Proof of part 3.** This is checked here, using the [Mordell–Weil theorem](mordell-weil-theorem.md) [@conrad2006trace, Corollary 7.2, p. 23].

*Reduction to proper curves.* Let $\bar X$ be the smooth compactification of $X$. The open immersion $X \to \bar X$ induces a surjection $\Pi^{\mathrm{prf}}_X \to \Pi^{\mathrm{prf}}_{\bar X}$ over $G_K$ that maps $\Delta^{\mathrm{prf}}_X$ onto $\Delta^{\mathrm{prf}}_{\bar X}$ [@saidi2012, §4.1.1, p. 16]. By functoriality it carries the section of a point $x \in X(K)$ to the section of $x$ viewed in $\bar X(K)$, and it carries conjugate sections to conjugate sections. So injectivity of $\sigma_{\bar X}$ implies injectivity of $\sigma_X$, and we may assume that $X$ is proper, of genus $g \ge 1$.

*The Jacobian.* Let $x, y \in X(K)$ with $\sigma_X(x) = \sigma_X(y)$. Let $J$ be the Jacobian of $X$ and $\iota : X \to J$ the morphism $z \mapsto [z - x]$, defined over $K$, with $\iota(x) = 0$. Put $a = \iota(y) \in J(K)$. The section of a point $z$ is obtained by applying $\pi_1$ to $z : \mathrm{Spec}\, K \to X$, so $\iota$ carries the section of $z$ to the section of $\iota(z)$. Hence the sections $s_0$ and $s_a$ of $\pi_1(J) \to G_K$ attached to $0$ and $a$ are conjugate by an element of $\pi_1(J \otimes_K \bar K)$.

*Kummer theory.* Fix $n \ge 1$. The extension $\pi_1(J) \to G_K$ has a quotient $1 \to J[n] \to \pi^{[n]}_1(J) \to G_K \to 1$ [@stix2010, (A.5), p. 14]. The images $\bar s_0, \bar s_a$ of $s_0, s_a$ in it are conjugate by some $h \in J[n]$. Conjugation by $\bar s_0(\tau)$ acts on $J[n]$ as $\tau$, so writing $J[n]$ additively,
$$\bar s_a(\tau)\, \bar s_0(\tau)^{-1} = h \, \bar s_0(\tau) h^{-1} \bar s_0(\tau)^{-1} = h - \tau(h)$$
for $\tau \in G_K$. This cocycle is therefore a coboundary. By Stix's computation, it represents the image of $a$ under the Kummer boundary map $\delta : J(K)/nJ(K) \to H^1(K, J[n])$, which is injective [@stix2010, Proposition 28, p. 14]. So $a \in nJ(K)$.

*Conclusion.* This holds for every $n \ge 1$. By the Mordell–Weil theorem $J(K)$ is finitely generated, and a finitely generated abelian group $A$ satisfies $\bigcap_n nA = 0$: if $e$ is the exponent of its torsion subgroup and $A = A_{\mathrm{free}} \oplus A_{\mathrm{tors}}$, then $emA = emA_{\mathrm{free}}$, and these subgroups have trivial intersection. So $a = 0$. Since $X$ has a $K$-point, $J(K) = \mathrm{Pic}^0(X)$, so the divisor $y - x$ is principal, say $y - x = \mathrm{div}(f)$. If $y \neq x$, then $f$ has a single simple pole and defines a morphism $X \to \mathbb{P}^1$ of degree $1$, an isomorphism, which is impossible for $g \ge 1$. So $x = y$. $\square$

**Proof of part 1.** See [Mochizuki's Hom theorem](mochizuki-hom-theorem-for-hyperbolic-curves.md), which summarizes it. Two points with the same section give hyperbolic curves $X \setminus \{x\}$ and $X \setminus \{y\}$ with compatible outer Galois actions, and the Grothendieck conjecture for isomorphisms makes them isomorphic compatibly with their inclusions into $X$ [@mochizuki1999, proof of Theorem 19.1, pp. 92–93].

**Where injectivity fails or is weaker.**

- *Separably closed fields.* Here $G_K = 1$, so there is only one section, and $\sigma_X$ is not injective for smooth complete curves [@koenigsmann2005, Remark 1.2 (1), p. 5].
- *The real numbers.* For a smooth projective curve of positive genus over $\mathbb{R}$, the classes of sections correspond bijectively to the connected components of $X(\mathbb{R})$ [@stix2010, Theorem 26, p. 14]. Each component is a circle, so $\sigma_X$ is not injective whenever $X(\mathbb{R}) \neq \emptyset$. Stix's proof of injectivity on components uses the same Kummer computation as part 3, with $n = 2$ [@stix2010, Lemma 27 and Proposition 28, p. 14].
- *$p$-adically closed fields.* A $p$-adically closed field $K$ is sub-$p$-adic exactly when $\sigma_X$ is injective for every smooth complete curve $X$ over $K$ of genus at least $2$ [@koenigsmann2005, Proposition 2.3 (1), p. 9]. If $K$ is not sub-$p$-adic, then $K$ carries a nontrivial henselian valuation whose residue field contains the algebraic part $K \cap \bar{\mathbb{Q}}$. Koenigsmann takes a curve defined over that algebraic part with a rational point, and lifts the point in two ways to distinct points of $X(K)$ with the same section [@koenigsmann2005, proof of Proposition 2.3, pp. 9–10].
- *Pro-$p$ sections.* Part 1 does not bound $X(K)$: for a regular prime $p > 7$, the Fermat curve of exponent $p$ over $\mathbb{Q}(\zeta_p)$ has infinitely many conjugacy classes of sections of $\Pi_X \to G_K$ [@hoshi2010, Theorem B, p. 832]. Hoshi notes that if the set of classes of profinite sections of a proper hyperbolic curve over a number field were finite, injectivity would give finiteness of $X(K)$ [@hoshi2010, Introduction, p. 832].
