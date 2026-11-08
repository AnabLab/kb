---
title: The Bloch–Gabber–Kato differential-symbol theorem
kind: theorem
summary: 'For $\operatorname{char}F=p$, $d\log$ identifies $K_n^M(F)/p$ with logarithmic differential forms. A degree-two symbol vanishes exactly when its entries are $p$-dependent, so $K_2^M(F)/p=0$ exactly when $[F:F^p]\le p$.'
tags: [milnor-k-theory, galois-cohomology, positive-characteristic]
edges:
  - {to: milnor-k-ring, label: uses}
  - {to: norm-residue-isomorphism-theorem, label: analogous-to, note: "At the characteristic prime, logarithmic differential forms replace the Galois-cohomological target with roots-of-unity coefficients."}
---

**Differential symbol.** Let $F$ have characteristic $p>0$, and put $\Omega_F^n=\bigwedge_F^n\Omega^1_{F/\mathbb F_p}$. The inverse Cartier operator takes values in closed forms modulo exact forms, viewed inside $\Omega_F^n/d\Omega_F^{n-1}$, and satisfies
$$
C^{-1}\left(x\,\frac{da_1}{a_1}\wedge\cdots\wedge\frac{da_n}{a_n}\right)
=x^p\,\frac{da_1}{a_1}\wedge\cdots\wedge\frac{da_n}{a_n}
\pmod{d\Omega_F^{n-1}}.
$$
Define the additive group of logarithmic forms by
$$
\nu_F(n)=\ker\left(1-C^{-1}:\Omega_F^n\longrightarrow\Omega_F^n/d\Omega_F^{n-1}\right).
$$
The Bloch–Gabber–Kato theorem gives an isomorphism
$$
d\log:K_n^M(F)/p\xrightarrow{\sim}\nu_F(n),\qquad
\{a_1,\ldots,a_n\}\longmapsto\frac{da_1}{a_1}\wedge\cdots\wedge\frac{da_n}{a_n}
$$
for every $n\ge1$ [@blochkato1986, §1.3, p. 112, and Theorem 2.1, p. 113]. In particular, the symbol embeds into $\Omega_F^n$ itself, not just its quotient by exact forms.

**Detecting imperfection.** For $a,b\in F^\times$,
$$
\{a,b\}=0\text{ in }K_2^M(F)/p
\quad\Longleftrightarrow\quad
[F^p(a,b):F^p]\le p.
$$
Consequently $K_2^M(F)/p=0$ exactly when $[F:F^p]\le p$. Dittmann proves these equivalences using the differential symbol and the criterion for linear dependence of $da,db$ [@dittmann2025, §2, p. 5]. The dependence here is over $F^p$, rather than algebraic dependence over a chosen constant field.

**Local example, checked here.** Let $F=\mathbb F_q((t))$, where $q$ is a power of $p$. Then $F^p=\mathbb F_q((t^p))$: Frobenius raises exponents by $p$ and is bijective on the coefficients. Grouping Laurent-series exponents modulo $p$ gives the $F^p$-basis $1,t,\ldots,t^{p-1}$. Hence $[F:F^p]=p$, and the preceding criterion gives $K_2^M(F)/p=0$. In contrast, $\operatorname{Br}(F)[p]\cong\mathbb Z/p$ [@dittmann2025, Proposition 2.2, p. 4]. Thus these two groups cannot be identified at the characteristic prime.

**Role.** The vanishing criterion translates the imperfection hypothesis in the [positive-characteristic local-field characterization](local-fields-characteristic-p-brauer-characterization.md) into Milnor K-theory; the Brauer group and its pairing remain separate data.
