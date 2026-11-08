---
title: Hilbert 90 and multiplicative Galois cocycles
kind: theorem
summary: 'Multiplicative Galois cocycles are coboundaries: H1(G_K,(K^sep)^times)=0 for every field K. At finite cyclic level, the elements of norm one are exactly sigma(b)/b. This vanishing supplies Kummer theory and the characteristic-p multiplicative coefficient used in local reconstruction.'
tags: [galois-groups, galois-cohomology, kummer-theory]
---

**Finite Galois form (Hilbert–Noether).** Let $L/K$ be a finite Galois extension and $G=\operatorname{Gal}(L/K)$, acting naturally on $L^\times$. Then
$$
H^1(G,L^\times)=0.
$$
Explicitly, any map $c:G\to L^\times$ satisfying
$$
c(\sigma\tau)=c(\sigma)\,\sigma(c(\tau))
$$
has the form $c(\sigma)=\sigma(b)/b$ for some $b\in L^\times$ [@milnecft, Chapter II, Proposition 1.22, p. 67].

**Cyclic norm form.** If $G=\langle\sigma\rangle$ is cyclic, then
$$
\ker(N_{L/K}:L^\times\to K^\times)
=\{\sigma(b)/b:b\in L^\times\}.
$$
This is Hilbert's original Theorem 90; the general finite Galois form is Noether's generalization [@milnecft, Chapter II, Corollary 1.23 and the following historical paragraph, p. 67].

**Absolute Galois form.** For any field $K$, put $G_K=\operatorname{Gal}(K^{\mathrm{sep}}/K)$. With the natural action and the discrete topology on $(K^{\mathrm{sep}})^\times$, continuous cohomology satisfies
$$
H^1\bigl(G_K,(K^{\mathrm{sep}})^\times\bigr)=0.
$$
No perfectness or characteristic restriction is needed [@stacks2026, Example 59.59.3, Tag 03QV].

**Role in reconstruction.** This is the vanishing used in the [Kummer isomorphism](kummer-theory.md) for integers invertible in $K$ [@milnecft, Chapter III, §4, Step 2, p. 112]. In characteristic $p$, the same absolute Galois form is the input to the calculation with $(K^{\mathrm{sep}})^\times/((K^{\mathrm{sep}})^\times)^p$ in [Kato cohomology and local-field reconstruction](kato-cohomology-and-local-field-reconstruction.md).
