---
title: Attacking the metabelian problem through reciprocity data
kind: idea
summary: Try to recover, from $G_K^2$ alone, the primes, norms and Frobenius elements in $G_K^1$, then finish with the L-series theorem as Saïdi and Tamagawa do from $G_K^3$. The class-2 nilpotent quotient cannot see this data, so any proof must use the rest of $G_K^2$.
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: metabelian-neukirch-uchida-problem, label: addresses}
  - {to: l-series-reconstruction-global-fields, label: uses, note: "The final step, in its form with norms and Frobenius elements."}
  - {to: m-step-solvable-local-theory, label: motivated-by}
---

**Idea.** Let $\tau : G_K^2 \to G_L^2$ be an isomorphism inducing $\tau_1 : G_K^1 \to G_L^1$. Suppose one could produce from $\tau$ a bijection $\varphi$ between the nonarchimedean primes of $K$ and $L$ that preserves norms, matches ramification in corresponding finite abelian extensions, and satisfies $\tau_1(\mathrm{Frob}_{\mathfrak{p}}) = \mathrm{Frob}_{\varphi(\mathfrak{p})}$. Then the [L-series theorem](l-series-reconstruction-global-fields.md) gives $K \cong L$, which answers [the metabelian problem](metabelian-neukirch-uchida-problem.md).

**Known.**

- This is how Saïdi and Tamagawa finish their weak theorem, with $G_K^3$ in place of $G_K^2$, using their local theory and the equivalence (ii) $\Leftrightarrow$ (iv) of [@cornelissen2019, Theorem 3.1]. See [@saiditamagawa2022, §2].
- Their recovery of decomposition groups in $G_K^1$ starts from $G_K^3$ [@saiditamagawa2022, Theorem 1.25]. From $G_K^2$ they recover only the $l$-part of the cyclotomic character up to twists by finite characters, using annihilators of Iwasawa modules [@saiditamagawa2022, §0].
- For the class-2 nilpotent quotient $G_K^{\mathrm{nil},2}$, the commutator subgroup is the profinite exterior square of $G_K^{\mathrm{ab}}$, because $H^2(G_K, \mathbb{Q}/\mathbb{Z}) = 0$ [@koymanspagano2024, §1.4].
- By class field theory, $X_K = \mathrm{Gal}(K_2/K_1)$ is the inverse limit under norms of the profinite completions of the idèle class groups of the finite subextensions of $K_1/K$. This is standard, and the formulation here is ours.

**A deduction.** This is our own observation, not taken from a source. Let $K, L$ be a [non-isomorphic pair with isomorphic class-2 nilpotent quotients](two-step-nilpotent-not-anabelian.md). Since $K \not\cong L$, the L-series theorem shows that no isomorphism $G_K^{\mathrm{ab}} \to G_L^{\mathrm{ab}}$ is compatible with a norm-preserving bijection of primes matching Frobenius elements. So reciprocity data has no group-theoretic recovery from the class-2 nilpotent quotient, and a proof along these lines must use the part of $G_K^2$ beyond it.

**Speculative.** The natural place to look is the module $X_K$ over the completed group ring of $G_K^1$, together with the extension class of $G_K^2$. The idèle class groups above are assembled from local pieces indexed by primes, and the stabilizers of the primes of $K_1$ are the decomposition groups in $G_K^1$. One may hope to read these stabilizers off the module structure of $X_K$. No such reconstruction is known to us.

**Would fail if.**

- The metabelian problem has a negative answer.
- Some isomorphism $G_K^2 \to G_L^2$ fails to carry decomposition groups in $G_K^1$ to decomposition groups in $G_L^1$, even when $K \cong L$. This would rule out a functorial argument, though perhaps not a weak one that uses only special isomorphisms.
- The module $X_K$ with its extension class is too homogeneous to separate primes, as the commutator subgroup of $G_K^{\mathrm{nil},2}$ is.
