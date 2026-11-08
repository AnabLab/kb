---
title: Kummer isomorphisms and multiplicative Galois duality
kind: theorem
summary: 'For n invertible in K, Kummer theory identifies $K^\times/K^{\times n}$ with $H^1(G_K,\mu_n)$. Roots of unity in K give duality with the exponent-n abelian Galois quotient. For function fields over algebraically closed constants, pro-ell duality uses multiplicative completion.'
tags: [galois-groups, galois-cohomology, kummer-theory]
edges:
  - {to: hilbert-theorem-90, label: uses, note: 'The vanishing of multiplicative H1 gives the cohomological Kummer isomorphism [@milnecft, Chapter III, §4, Step 2, p. 112].'}
---

**Cohomological form.** Let $K$ be a field, let $n\ge2$ be prime to $\operatorname{char}K$ if the characteristic is positive, and put $G_K=\operatorname{Gal}(K^{\mathrm{sep}}/K)$. The Kummer sequence
$$
1\longrightarrow\mu_n\longrightarrow(K^{\mathrm{sep}})^\times
\xrightarrow{x\mapsto x^n}(K^{\mathrm{sep}})^\times\longrightarrow1
$$
and Hilbert 90 give a canonical isomorphism
$$
K^\times/K^{\times n}\xrightarrow{\sim}H^1(G_K,\mu_n).
$$
This does not require $\mu_n\subset K$ [@milnecft, Chapter III, §4, Step 2, p. 112]. The [Hilbert 90](hilbert-theorem-90.md) input is $H^1(G_K,(K^{\mathrm{sep}})^\times)=0$ [@stacks2026, Example 59.59.3, Tag 03QV]; at finite Galois level it is $H^1(\operatorname{Gal}(L/K),L^\times)=0$ [@milnecft, Chapter II, Proposition 1.22, p. 67].

**Character form.** Now assume $\mu_n\subset K$, and put
$$
A_n=G_K/\overline{[G_K,G_K]G_K^n}.
$$
There is a perfect pairing between the profinite group $A_n$ and the discrete group $K^\times/K^{\times n}$,
$$
\langle\sigma,[a]\rangle=\frac{\sigma(\alpha)}{\alpha}\in\mu_n,
\qquad\alpha^n=a.
$$
In particular,
$$
A_n\cong\operatorname{Hom}(K^\times/K^{\times n},\mu_n),\qquad
K^\times/K^{\times n}\cong\operatorname{Hom}_{\mathrm{cont}}(A_n,\mu_n).
$$
The first Hom has the topology of pointwise convergence. Choosing a primitive root $\omega$ identifies $\mu_n$ with $\mathbb Z/n$ by $\omega^i\mapsto i$; the resulting untwisted identifications depend on this choice [@topaz2017abc, §1.1, pp. 3–4].

**Finite extensions.** Finite subgroups $B\subset K^\times/K^{\times n}$ correspond to finite abelian extensions of $K$ of exponent dividing $n$: the extension is $L_B=K(a^{1/n}:[a]\in B)$. The same pairing identifies $\operatorname{Gal}(L_B/K)$ with $\operatorname{Hom}(B,\mu_n)$, and $[L_B:K]=|B|$ [@milne2022fields, Theorem 5.30 and Remark 5.32, pp. 75–76].

**Function fields and pro-$\ell$ duality.** Let $K/k$ be a function field of transcendence degree at least $2$ over an algebraically closed field, and let $\ell\ne\operatorname{char}K$ be prime. Write $\Pi_K^a$ for its maximal abelian pro-$\ell$ Galois group. Then
$$
\operatorname{Hom}_{\mathrm{cont}}(\Pi_K^a,\mathbb Z_\ell(1))
\cong\widehat{K^\times}_{\ell}
=\varprojlim_r K^\times/K^{\times\ell^r}.
$$
Here $\mathbb Z_\ell(1)=\varprojlim_r\mu_{\ell^r}$ with transition maps $\zeta\mapsto\zeta^\ell$. The completion map has kernel $k^\times$. Choosing compatible primitive roots identifies $\mathbb Z_\ell(1)$ with $\mathbb Z_\ell$ [@topaz2016, §1.1, p. 3]. This is the multiplicative input in [abelian-by-central reconstruction](abelian-by-central-galois-group.md); the finite-level pairing supplies the characters in the [commuting-lift criterion](kummer-duality-for-commuting-lifts.md).
