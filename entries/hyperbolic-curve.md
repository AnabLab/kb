---
title: Hyperbolic curve
kind: definition
summary: 'A curve of type $(g, r)$ over $K$ becomes a proper genus-$g$ curve minus $r$ points over $\bar K$, and is hyperbolic if $2g - 2 + r > 0$. Its fundamental group is an extension of $G_K$ by the geometric fundamental group, or by that group''s maximal pro-$p$ quotient.'
tags: [curves, fundamental-groups]
---

**Definition.** Let $K$ be a field with algebraic closure $\bar K$. A *curve* over $K$ is a smooth, one-dimensional, geometrically connected $K$-scheme. A curve $X$ over $K$ has *type* $(g, r)$ if $X \otimes_K \bar K$ is obtained from a proper curve of genus $g$ over $\bar K$ by removing $r$ distinct $\bar K$-points. It is *hyperbolic* if $2g - 2 + r \ge 1$ [@mochizuki1999, §0, p. 14].

**Which types are hyperbolic.** This is checked here. If $g \ge 2$, then $2g - 2 \ge 2$. If $g = 1$, the condition is $r \ge 1$, and if $g = 0$, it is $r \ge 3$. So the curves that are not hyperbolic are those of types $(0, 0)$, $(0, 1)$, $(0, 2)$ and $(1, 0)$. Over $\bar K$ these are the projective line, the affine line, the projective line minus two points, and proper curves of genus $1$. Examples of hyperbolic curves are the projective line minus three points, a proper curve of genus at least $2$, and an elliptic curve minus its origin. Mochizuki uses the last of these in the proof that $G_K$ has trivial centre for every subfield $K$ of a finitely generated extension of $\mathbb{Q}_p$ [@mochizuki1999, Lemma 15.8].

**Fundamental groups.** Fix a geometric base point of $X$. Write $\Pi^{\mathrm{prf}}_X = \pi_1(X)$ for the étale fundamental group. The structure morphism $X \to \mathrm{Spec}\, K$ induces a map $\Pi^{\mathrm{prf}}_X \to G_K$, whose kernel, the *geometric fundamental group* $\Delta^{\mathrm{prf}}_X$, may be identified with $\pi_1(X \otimes_K \bar K)$ [@mochizuki1999, Introduction, p. 1]. For a prime $p$, let $\Delta_X$ be the maximal pro-$p$ quotient of $\Delta^{\mathrm{prf}}_X$. The kernel of $\Delta^{\mathrm{prf}}_X \to \Delta_X$ is characteristic, hence normal in $\Pi^{\mathrm{prf}}_X$, and dividing by it gives a group $\Pi_X$ with an exact sequence
$$1 \to \Delta_X \to \Pi_X \to G_K \to 1$$
[@mochizuki1999, Introduction, pp. 1–2]. Mochizuki makes the same construction for any $K$-scheme $X$, writing $\Delta^{\mathrm{prf}}_X$ for the kernel of $\pi_1(X) \to G_K$ [@mochizuki1999, Introduction, p. 2]. He writes $\Gamma_K$ for $G_K$, and $\Pi_{X_K}$ for $\Pi_X$.

Conjugation in $\Pi_X$ gives the outer Galois representation $\rho_X : G_K \to \mathrm{Out}(\Delta_X)$. In his §0, where $K$ is a $\mathbb{Q}_p$-algebra, Mochizuki notes, citing Tamagawa, that the extension can be recovered from $\rho_X$ [@mochizuki1999, §0, pp. 14–15]. If $K$ has characteristic $0$, then $\Delta_X$ is topologically finitely generated [@mochizuki1999, §0, p. 15].

**Why hyperbolic.** Grothendieck's anabelian conjecture predicts that for certain fields $K$, the functor $X \mapsto (\Pi^{\mathrm{prf}}_X \to G_K)$, with outer homomorphisms over $G_K$ as morphisms, is fully faithful on suitable classes of $K$-varieties, called anabelian. The varieties expected to be anabelian were the sufficiently hyperbolic ones, and hyperbolic curves are the basic case, since their fundamental groups tend to be highly nonabelian [@mochizuki1999, Introduction, pp. 1–2]. For hyperbolic curves over subfields of finitely generated extensions of $\mathbb{Q}_p$, see [Mochizuki's Hom theorem](mochizuki-hom-theorem-for-hyperbolic-curves.md).
