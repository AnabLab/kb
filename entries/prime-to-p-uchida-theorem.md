---
title: Prime-to-p birational reconstruction over finite fields
kind: theorem
summary: Saïdi–Tamagawa recover function fields of curves over finite fields from their geometrically pro-prime-to-characteristic Galois groups. Every isomorphism of these groups comes from a unique isomorphism of the corresponding field extensions, with no genus restriction or marking of the constants.
tags: [function-fields, galois-groups, reconstruction]
edges:
  - {to: uchida-global-function-fields, label: analogous-to, note: "Birational reconstruction with a smaller geometric quotient; the full Galois group of the constants is retained."}
  - {to: prime-to-p-anabelian-curves-over-finite-fields, label: uses, note: "The published proof applies the curve theorem to hyperbolic affine opens [@saiditamagawa2009, proof of Corollary 3.11, p. 176]."}
---

**Quotient.** Let $X/k$ be a proper, smooth, geometrically connected curve over a finite field of characteristic $p$, and let $K = k(X)$. In a separable closure $K^{\mathrm{sep}}$, let $\bar k$ be the algebraic closure of $k$ and put $H_K = \mathrm{Gal}(K^{\mathrm{sep}}/K\bar k)$. Write $H_K^{(p')}$ for its maximal pro-prime-to-$p$ quotient, and set
$$
N_K = \ker(H_K \to H_K^{(p')}),\qquad
\Gamma_K = G_K/N_K,\qquad
\widetilde K = (K^{\mathrm{sep}})^{N_K}.
$$
Thus $\Gamma_K = \mathrm{Gal}(\widetilde K/K)$ fits into
$$1 \to H_K^{(p')} \to \Gamma_K \to G_k \to 1.$$
The quotient retains all of $G_k$, including its pro-$p$ part [@saiditamagawa2009, p. 175, discussion preceding Corollary 3.11].

**Theorem (Saïdi–Tamagawa).** For two such function fields $K,L$, every topological isomorphism $\alpha:\Gamma_K\to\Gamma_L$ is induced by a unique field isomorphism $\iota:\widetilde K\to\widetilde L$ carrying $K$ onto $L$: $\alpha(g)=\iota g\iota^{-1}$. No genus restriction or identification of the constant fields is assumed [@saiditamagawa2009, Corollary 3.11, p. 176].

**Reconstruction in the proof.** Brauer groups identify decomposition groups at closed points, and local class field theory identifies inertia. Killing inertia at the points of a hyperbolic affine open gives its geometrically prime-to-characteristic fundamental group. The [curve theorem](prime-to-p-anabelian-curves-over-finite-fields.md), applied as the open varies, recovers the field extension [@saiditamagawa2009, proof of Corollary 3.11, p. 176]. This gives a birational counterpart to [Uchida's theorem](uchida-global-function-fields.md) using less geometric Galois data.
