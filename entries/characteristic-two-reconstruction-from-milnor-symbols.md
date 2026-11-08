---
title: Characteristic-two fields from vanishing Milnor symbols
kind: theorem
summary: 'For characteristic-two fields K with finite square degree at least four, the multiplicative square-class group with degree-two Milnor symbol vanishing determines K functorially. Symbol kernels recover projective lines over the square subfield. Square degree two does not suffice.'
tags: [milnor-k-theory, positive-characteristic, reconstruction-algorithms]
edges:
  - {to: milnor-k-ring, label: uses}
  - {to: fundamental-theorem-of-projective-geometry, label: uses, note: "Lifts the recovered projective isomorphism to a semilinear bijection, unique up to scalar."}
  - {to: bloch-gabber-kato-theorem, label: uses, note: "Its degree-two vanishing criterion identifies the symbol kernels used in the proof."}
  - {to: milnor-k-reconstruction-function-fields, label: analogous-to, note: "Here the characteristic is two and finite square degree replaces the hypotheses on constants and transcendence degree."}
  - {to: purely-inseparable-invariance-of-galois-groups, label: analogous-to, note: "The characteristic-prime symbol data here recover the imperfect field itself."}
---

**Statement, proved here.** Let $K,L$ have characteristic $2$, with
$$
4\le [K:K^2]<\infty,\qquad 4\le [L:L^2]<\infty.
$$
Put $U_K=K^\times/(K^\times)^2$, written multiplicatively, and equip it with the relation
$$
Z_K([a],[b])\quad\Longleftrightarrow\quad
\{a,b\}=0\text{ in }K_2^M(K)/2.
$$
Every group isomorphism $\phi:U_K\to U_L$ preserving this relation in both directions is induced by a unique field isomorphism $K\to L$. Conversely every field isomorphism induces such a $\phi$. Thus the zero-symbol relation suffices; the entire degree-two group and product need not be supplied.

**Recovering lines.** Set $C=K^2$. The underlying set of $U_K$ is the set of points of the projective space $\mathbb P_C(K)$. For $c\notin C$, the [differential-symbol criterion](bloch-gabber-kato-theorem.md) gives
$$
Z_K([c],[z])
\quad\Longleftrightarrow\quad [C(c,z):C]\le2
\quad\Longleftrightarrow\quad z\in C(c)^\times
$$
[@dittmann2025, §2, p. 5]. Indeed $[C(c):C]=2$, since $c^2\in C$ and $c\notin C$. Also $C(c)=C+Cc$. For distinct points $[a],[b]$, their joining line is therefore exactly
$$
\mathcal L([a],[b])
=\{[a][z]:[z]\in U_K,\ Z_K([b][a]^{-1},[z])\}
=\mathbb P_C(Ca+Cb).
$$
This formula uses only the given group and relation. It includes both endpoints, since $1,b/a\in C(b/a)$. It follows that $\phi$ takes every projective line onto the corresponding line over $D=L^2$. Subspaces are exactly point sets closed under joining lines, so their inclusion lattices, and hence the finite vector-space dimensions, agree.

**Recovering the field map.** The [fundamental theorem of projective geometry](fundamental-theorem-of-projective-geometry.md) now supplies an additive semilinear bijection $F:K\to L$ inducing $\phi$, unique up to multiplication by $D^\times$ [@taylor2021geometry, Theorem 3.1, pp. 14–15]. Its hypotheses hold because the equal vector-space dimensions are at least four. Since $\phi([1])=[1]$, we have $F(1)\in D^\times$; normalize $F(1)=1$.

For $a\in K^\times$, let $m_a$ denote multiplication by $a$. The semilinear bijections $F\circ m_a$ and $m_{F(a)}\circ F$ induce the same projective map: on a point $[x]$, this is the equality
$$
\phi([ax])=\phi([a])\phi([x]).
$$
By the uniqueness clause of the same theorem they differ by a scalar in $D^\times$. Both send $1$ to $F(a)\ne0$, so that scalar is $1$. Thus $F(ax)=F(a)F(x)$ for all $a,x$; the zero cases follow from additivity. The normalized $F$ is a field isomorphism. Any other inducing field isomorphism is a semilinear lift of the same projective map, so differs by a scalar, and its value at $1$ makes that scalar $1$ too. This proves uniqueness. The converse follows from functoriality of Milnor symbols.

**The square-degree bound matters, checked here.** Take $K=\mathbb F_2(t)$ and $L=\mathbb F_4(t)$. For $E=\mathbb F_q(t)$ with $q=2,4$, one has $E^2=\mathbb F_q(t^2)$ and $[E:E^2]=2$; $t$ is not a square, since its valuation at zero is odd. The criterion above shows that every degree-two symbol vanishes. Unique factorization of rational functions, and the fact that every nonzero constant is a square, identify $U_E$ with a direct sum of copies of $\mathbb Z/2$, one for each monic irreducible polynomial in $\mathbb F_q[t]$. There are countably infinitely many such polynomials for either $q$ (infinitude follows from the usual product-plus-one argument). Thus $(U_K,Z_K)\cong(U_L,Z_L)$. But $K\not\cong L$: their subfields algebraic over $\mathbb F_2$ are respectively $\mathbb F_2$ and $\mathbb F_4$, since a nonconstant rational function in $t$ is transcendental over the constants.
