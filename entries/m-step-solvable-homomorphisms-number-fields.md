---
title: Homomorphisms of bounded-solvable Galois groups of number fields
kind: theorem
summary: 'For $m\ge2$, an open map $G_K^{m+3}\to G_L^{m+3}$ yields a unique equivariant embedding $L_m\to K_m$ exactly when it preserves cyclotomic characters (Mao–Saïdi). With source $\mathbb{Q}$, Corato–Saïdi need no cyclotomic assumption.'
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: m-step-solvable-quotient, label: uses}
  - {to: open-homomorphisms-number-fields, label: analogous-to, note: "Bounded-solvable versions of the cyclotomic criterion and the result with source Q."}
  - {to: m-step-solvable-neukirch-uchida, label: analogous-to, note: "Both recover a field map at level m from group data at level m+3."}
---

Use the notation $K_r$ and $G_K^r$ of [maximal solvable quotients](m-step-solvable-quotient.md).

**Cyclotomic criterion.** Let $K,L$ be number fields, $m\ge2$, and
$$
\alpha_{m+3}:G_K^{m+3}\longrightarrow G_L^{m+3}
$$
a continuous homomorphism with open image. Write $\alpha_m:G_K^m\to G_L^m$ for its induced map, and $\chi_K,\chi_L$ for the cyclotomic characters on these quotients. Mao–Saïdi prove that the following are equivalent [@maosaidi2025open, Theorem 1.5, p. 4]:

- $\chi_L\circ\alpha_m=\chi_K$.
- There is a unique field embedding $\beta:L_m\hookrightarrow K_m$ with $\beta\alpha_m(g)=g\beta$ for every $g\in G_K^m$.

The conclusion concerns $\alpha_m$; the input includes its lift $\alpha_{m+3}$. Their proof recovers finite-level embeddings from Frobenius-preserving maps on abelianizations modulo $2$, then passes to an inverse limit [@maosaidi2025open, Lemma 3.5 and proof of Theorem 1.5, pp. 6–9].

**Source $\mathbb{Q}$.** Let $L$ be a number field and $m\ge2$. If
$$
\sigma_{m+3}:G_{\mathbb{Q}}^{m+3}\longrightarrow G_L^{m+3}
$$
is continuous with open image, then $L=\mathbb{Q}$, its induced $\sigma_m$ is an isomorphism, and there is a unique field automorphism $\tau:\mathbb{Q}_m\to\mathbb{Q}_m$ such that $\sigma_m(g)=\tau g\tau^{-1}$ [@coratosaidi2023, Theorem 7.6, p. 37]. No compatibility with cyclotomic characters is assumed.

For the first step, put $F=L_m^{\sigma_m(G_{\mathbb{Q}}^m)}$. Choose a totally imaginary quadratic extension $E/F$ inside $L_m$, corresponding to a quadratic $K'/\mathbb{Q}$. Write $r_p(M)$ for the largest $r$ such that $M$ has a $\mathbb{Z}_p^r$-extension. The induced open map $G_{K'}^{\mathrm{ab}}\to G_E^{\mathrm{ab}}$ gives
$$
[F:\mathbb{Q}]+1\le r_p(E)\le r_p(K')\le2.
$$
Thus $F=\mathbb{Q}$ [@coratosaidi2023, Proposition 7.1, pp. 33–34].

The open-image hypothesis appears in Theorem 7.6; the introductory formulation on p. 5 omits it. Use the theorem's statement.

**Status.** Both cited versions are preprints; their arXiv records list no journal reference as of November 2026.
