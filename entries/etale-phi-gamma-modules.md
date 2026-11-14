---
title: Étale Frobenius-Gamma modules classify p-adic representations
kind: theorem
summary: 'Fontaine identifies all continuous p-adic representations of a local Galois group with étale Frobenius-Gamma modules. Cherbonnier–Colmez show that every such module descends to overconvergent coefficients, providing the analytic input for p-adic monodromy.'
tags: [local-fields, galois-groups, hodge-theory]
edges:
  - {to: fontaine-wintenberger-field-of-norms, label: uses, note: 'Identifies the cyclotomic kernel with the absolute Galois group of the norm field.'}
---

**Rings.** Let $K/\mathbb Q_p$ be finite, $K_\infty=K(\mu_{p^\infty})$, $H_K=G_{K_\infty}$, and $\Gamma_K=G_K/H_K$. Fontaine's cyclotomic Cohen ring $A_K$ lifts the [norm field](fontaine-wintenberger-field-of-norms.md) $X_K(K_\infty)$. Let $A$ be its completed maximal unramified extension in Fontaine's period rings, and put
$$
B_K=A_K[1/p],\qquad B=A[1/p],\qquad B^{H_K}=B_K.
$$
These carry commuting Frobenius and Galois actions. The construction and compatible embeddings are in [@brinonconrad2009, §13.5, Definition 13.5.5 and Lemma 13.5.7, pp. 223–224; Example 13.6.2, p. 225].

**Objects.** A $(\varphi,\Gamma_K)$-module is a finite-dimensional $B_K$-vector space with commuting semilinear Frobenius and continuous semilinear $\Gamma_K$-action. Continuity uses the weak period-ring topology. It is *étale* if it has a $\varphi$- and $\Gamma_K$-stable $A_K$-lattice $D_A$ whose linearized Frobenius
$$
A_K\otimes_{\varphi,A_K}D_A\longrightarrow D_A,\qquad a\otimes x\longmapsto a\varphi(x)
$$
is an isomorphism [@brinonconrad2009, Definition 13.6.4 and the discussion following Example 13.6.6, pp. 226–227].

**Classification (Fontaine).** The functors
$$
D(V)=(B\otimes_{\mathbb Q_p}V)^{H_K},\qquad
V(D)=(B\otimes_{B_K}D)^{\varphi=1}
$$
are inverse exact equivalences between continuous finite-dimensional $\mathbb Q_p$-representations of $G_K$ and étale $(\varphi,\Gamma_K)$-modules. The inverse uses the diagonal $G_K$-action, acting on $D$ through $\Gamma_K$ [@brinonconrad2009, Theorem 13.6.5 and its rational-coefficient version after Example 13.6.6, pp. 226–227].

**Overconvergence (Cherbonnier–Colmez).** Let $B_K^\dagger\subset B_K$ be the overconvergent coefficient ring: in a suitable norm-field parameter its Laurent series have bounded coefficients and converge on some annulus $r<|T|<1$. Every étale $D$ has a largest finite free $B_K^\dagger$-submodule $D^\dagger$ stable under $\varphi$ and $\Gamma_K$, and
$$
B_K\otimes_{B_K^\dagger}D^\dagger\simeq D
$$
[@berger2002differential, §0.1 and Theorem 0.1, pp. 2–3]. Thus overconvergence holds for every continuous representation here; it is an input to the differential-equation proof of [p-adic monodromy](p-adic-monodromy-theorem.md), rather than a de Rham hypothesis [@berger2002differential, §0.1, p. 3].
