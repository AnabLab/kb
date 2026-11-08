---
title: Artin–Schreier cohomology and free pro-p Galois groups
kind: theorem
summary: 'In characteristic p, Artin–Schreier theory computes degree-one mod-p Galois cohomology, higher degrees vanish, and the maximal pro-p group is free. The fields F_p(t) and F_p(s,t) have isomorphic pro-p Galois groups but different degree-two mod-p Milnor K-theory.'
tags: [galois-groups, galois-cohomology, pro-p-groups, positive-characteristic, milnor-k-theory]
edges:
  - {to: bloch-gabber-kato-theorem, label: uses, note: "The differential-symbol injection distinguishes the two fields' degree-two mod-p Milnor K-theory."}
  - {to: norm-residue-isomorphism-theorem, label: analogous-to, note: "At the characteristic prime, additive Artin–Schreier classes replace degree-one Kummer classes."}
  - {to: purely-inseparable-invariance-of-galois-groups, label: analogous-to, note: "The example here loses transcendence degree after passing to the maximal pro-p quotient; perfection is invisible even to the full Galois group."}
---

**Artin–Schreier cohomology.** Let $F$ be any field of characteristic $p>0$, let $G_F$ be its absolute Galois group, and write $\wp(x)=x^p-x$. With trivial discrete coefficients,
$$
H^1(G_F,\mathbb F_p)\cong F/\wp(F),\qquad
H^n(G_F,\mathbb F_p)=0\quad(n\ge2).
$$
Indeed, the Artin–Schreier sequence is
$$
0\longrightarrow\mathbb F_p\longrightarrow F^{\mathrm{sep}}
\xrightarrow{\wp}F^{\mathrm{sep}}\longrightarrow0
$$
as additive discrete $G_F$-modules [@stacks2026, Section 59.63, Tag 0A3J]. Surjectivity follows because $X^p-X-a$ is separable. The additive module $F^{\mathrm{sep}}$ has zero cohomology in every positive degree [@stacks2026, Example 59.59.3, Tag 03QQ]. Its long exact sequence gives both assertions; the higher-degree vanishing is also [@stacks2026, Lemma 59.63.1(1), Tag 0A3K]. For $a\in F$, choosing $\alpha^p-\alpha=a$ represents the corresponding character by $\sigma\mapsto\sigma(\alpha)-\alpha$.

**Freeness.** The maximal pro-$p$ quotient $G_F(p)$ is free pro-$p$, without a perfectness or finite-generation hypothesis [@quadrelli2012blochkato, §2, p. 3]. Every continuous character $G_F\to\mathbb F_p$ factors uniquely through it, so the preceding formula also computes $H^1(G_F(p),\mathbb F_p)$.

**Two finite-type fields, checked here.** Fix $p$ and put
$$K=\mathbb F_p(t),\qquad L=\mathbb F_p(s,t),$$
with $s,t$ algebraically independent. Both $G_K(p)$ and $G_L(p)$ are free pro-$p$ of countably infinite free rank, hence are isomorphic.

To check the rank, use the $t$-adic valuation on either field, normalized by $v(t)=1$. The classes of $t^{-m}$, for positive integers $m$ not divisible by $p$, are linearly independent in $F/\wp(F)$. A nonzero finite $\mathbb F_p$-linear combination has valuation $-M$, where $M$ is its largest exponent and $p\nmid M$. But if $v(x)<0$ then $v(x^p-x)=p\,v(x)$; if $v(x)\ge0$ then $v(x^p-x)\ge0$. Such a combination cannot equal $\wp(x)$. Each field is countable, so its quotient $F/\wp(F)$ has dimension exactly $\aleph_0$.

For completeness, a free pro-$p$ basis converges to the identity. Continuous $\mathbb F_p$-valued characters have finite support on that basis, and every finitely supported assignment extends by freeness. Thus the dimension of $H^1$ is the cardinality of a free basis. This proves the asserted common free rank; the universal property identifies free pro-$p$ groups on equally sized bases. The fields themselves are not isomorphic, since their transcendence degrees over their prime fields are $1$ and $2$.

**Milnor K-theory separates them, checked here.** The [Bloch–Gabber–Kato injection](bloch-gabber-kato-theorem.md)
$$d\log:K_2^M(F)/p\hookrightarrow\Omega^2_{F/\mathbb F_p}$$
is valid at the characteristic prime [@blochkato1986, Theorem 2.1, p. 113]. Since $\Omega^1_{K/\mathbb F_p}=K\,dt$, its exterior square is zero, giving $K_2^M(K)/p=0$. For $L$, the differentials $ds,dt$ form an $L$-basis, and
$$d\log\{s,t\}=\frac{ds\wedge dt}{st}\ne0.$$
Hence $K_2^M(L)/p\ne0$. This example shows that the maximal pro-$p$ Galois group in characteristic $p$ determines neither transcendence degree nor degree-two mod-$p$ Milnor K-theory.
