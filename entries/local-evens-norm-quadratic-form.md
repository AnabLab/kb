---
title: The quadratic form of a local index-two Evens norm
kind: theorem
summary: 'For a quadratic extension k(sqrt(d))/k of dyadic local fields, the Evens norm on squareclasses is a nonsingular quadratic form with Arf invariant (2,d). If the extension is unramified, the invariant is v_k(2) modulo 2, giving an exact zero count.'
tags: [local-fields, galois-cohomology, embedding-problems]
edges:
  - {to: local-tate-duality, label: uses, note: 'Perfect cup products and the Euler characteristic give nonsingularity and the squareclass dimensions.'}
  - {to: deep-unit-evens-norms-over-dyadic-fields, label: analogous-to, note: 'Computes the full scalar norm and its zero count, complementing its vanishing on a specified unit subgroup.'}
  - {to: frobenius-shift-lifting-problem, label: motivated-by, note: 'Supplies a scalar quadratic-obstruction count, not a lift or a comparison for general coefficient modules.'}
---

**Setting.** Let $k/\mathbb Q_2$ be finite of degree $n$, let $d\in k^\times\setminus k^{\times2}$, and put $L=k(\sqrt d)$ with nonidentity automorphism $\sigma$. Identify $H^2(k,\mathbb F_2)=\operatorname{Br}(k)[2]$ with $\mathbb F_2$ by sending Brauer invariant $1/2$ to $1$. Write $(a,b)_k$ for the resulting additive Hilbert symbol, and $[a]$ for a squareclass. Put
$$
V=H^1(L,\mathbb F_2),\qquad
Q(x)=N^{\mathrm{Ev}}_{L/k}(x)\in\mathbb F_2.
$$
The index-two Evens norm is a multiplicative cohomological transfer, not the field norm or additive corestriction. Write $\operatorname{res}$ and $\operatorname{cor}$ for the latter cohomological maps.

**Theorem (proved here).** The polar form of $Q$ is
$$
B(x,y)=Q(x+y)+Q(x)+Q(y)
=\operatorname{cor}(x\cup\sigma y).
\tag{1}
$$
It is nonsingular, and $\dim_{\mathbb F_2}V=2n+2$. With $\epsilon=(2,d)_k$,
$$
\operatorname{Arf}(Q)=\epsilon,\qquad
\#Q^{-1}(0)=2^{2n+1}+(-1)^\epsilon2^n,\qquad
\#Q^{-1}(1)=2^{2n+1}-(-1)^\epsilon2^n.
\tag{2}
$$
If $L/k$ is unramified and $e=v_k(2)$ for the normalized integer-valued valuation, then $\epsilon=e\bmod2$.

**Proof.** Kahn's addition formula for the index-two norm is
$$
Q(x+y)+Q(x)+Q(y)
=\operatorname{cor}(x\cup y)
+\operatorname{cor}(x)\cup\operatorname{cor}(y)
$$
[@kahn1984stiefelwhitney, Proposition I.2.4(a), p. 231]. The projection formula and $\operatorname{res}\operatorname{cor}(y)=y+\sigma y$ give (1). Corestriction preserves the local Brauer invariant, so it is an isomorphism in degree two [@milnecft, III, equation (30), p. 105]. The cup pairing on $V$ is perfect by [local Tate duality](local-tate-duality.md). Since $\sigma$ is invertible, $B$ is nonsingular. It is alternating because it is the polar form of $Q$ with $Q(0)=0$.

The local Euler characteristic gives $\dim H^1(k,\mathbb F_2)=n+2$ and $\dim V=2n+2$: in each case $H^0$ and $H^2$ have dimension one [@milne2006adt, I, Corollary 2.3, p. 28; Theorem 2.8, p. 31]. The kernel of restriction on squareclasses is precisely $\langle[d]\rangle$: if a nonsquare of $k$ becomes a square in $L$, its quadratic field is $L$. Thus
$$
A=\operatorname{res}H^1(k,\mathbb F_2)\subset V
$$
has dimension $n+1$. Equation (1) and $\operatorname{cor}\operatorname{res}=2=0$ show that $B|_{A\times A}=0$. Hence $A=A^\perp$.

We need the values of $Q$, not just its polar form. Kahn's explicit formula says
$$
Q([a])=
\begin{cases}
(\operatorname{Tr}_{L/k}a,-dN_{L/k}a)_k+(2,d)_k,
&\operatorname{Tr}_{L/k}a\ne0,\\
(2,d)_k,&\operatorname{Tr}_{L/k}a=0
\end{cases}
\tag{3}
$$
[@kahn1984stiefelwhitney, Lemma II.2.1, p. 241]. For $a\in k^\times$, its trace is $2a$ and its norm is $a^2$, so (3) gives
$$
Q(\operatorname{res}[a])=(a,-d)_k.
\tag{4}
$$
Here $(2,-1)_k=0$, as recorded just after Kahn's lemma, cancels the constant terms. Put $h=[\sqrt d]\in V$. Its trace is zero and its field norm is $-d$, so
$$
Q(h)=(2,d)_k=\epsilon,\qquad
B(\operatorname{res}[a],h)=(a,-d)_k.
\tag{5}
$$
The second equality follows from (1) by the projection formula; the conjugate of $\sqrt d$ has the same norm $-d$.

For completeness, sum $(-1)^{Q(x)}$ by cosets of $A$. On a coset $t+A$ the sum is
$$
(-1)^{Q(t)}\sum_{a\in A}(-1)^{Q(a)+B(t,a)}.
$$
Since $B|_A=0$, $Q|_A$ is linear. By (4)–(5) the inner character is trivial exactly when $B(t+h,A)=0$, equivalently $t\in h+A$. Every other coset contributes zero, giving
$$
\sum_{x\in V}(-1)^{Q(x)}=(-1)^\epsilon|A|
=(-1)^\epsilon2^{n+1}.
$$
For a nonsingular quadratic form of dimension $2n+2$, this sign defines its Arf invariant. Adding and subtracting this sum from $|V|=2^{2n+2}$ proves (2).

Finally, if $L/k$ is unramified quadratic, its norm group consists of the elements of even valuation: norms of uniformizers have valuation two, and every unit is a norm [@milnecft, III, Proposition 1.2, p. 98]. The Hilbert-symbol norm criterion [@milnecft, III, Theorem 4.4(d), pp. 113–114] therefore gives $(2,d)_k=v_k(2)\bmod2$. $\square$

**Checks and scope.** Over $k=\mathbb Q_2$, the unramified quadratic extension gives six zeros and ten ones among its sixteen squareclasses. For $L=\mathbb Q_2(i)$, $(2,-1)_k=0$, so the counts are ten and six instead. Formula (3) includes trace-zero representatives explicitly; dividing by their trace would lose the class $h$ that determines the sign. These are counts for the full scalar Evens norm. They neither compare all marked finite surjection counts nor establish the full dyadic Galois presentation or classification.
