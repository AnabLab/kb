---
title: Purely inseparable extensions are invisible to Galois groups
kind: theorem
summary: 'A purely inseparable extension L/K induces an isomorphism G_L to G_K, even for infinite extensions. Galois groups therefore forget perfection, and Frobenius preserves étale fundamental groups. In characteristic p, degree-one mod-p Milnor K-theory can still distinguish a field from its perfection.'
tags: [galois-groups, fundamental-groups, positive-characteristic, milnor-k-theory]
edges:
  - {to: milnor-k-ring, label: uses, note: "Only the identification of degree one with the multiplicative group is used in the example."}
  - {to: bloch-gabber-kato-theorem, label: analogous-to, note: "Characteristic-p Milnor K-theory detects imperfection that the absolute Galois group forgets."}
---

**Field statement.** Let $K$ have characteristic $p>0$. An extension $L/K$ is *purely inseparable* if every $a\in L$ satisfies $a^{p^r}\in K$ for some $r\ge0$ [@stacks2026, Definition 9.14.1, Tag 09HD]. Such an extension, finite or infinite, induces an isomorphism of profinite groups
$$G_L\xrightarrow{\sim}G_K.$$
Here the map is restriction from $G_L$ to $G_K$ after compatible choices of separable closures.

**Elementary proof.** Choose a common algebraic closure $\Omega$ of $K$ and $L$. Every $K$-automorphism of $\Omega$ fixes $L$: it fixes $a^{p^r}\in K$, and a $p^r$th root in a field is unique. Thus $\operatorname{Aut}(\Omega/L)=\operatorname{Aut}(\Omega/K)$. For either base field $F$, restriction identifies $\operatorname{Aut}(\Omega/F)$ with $G_F$. Indeed, $\Omega/F^{\mathrm{sep}}$ is purely inseparable. Extend $\sigma\in G_F$ by sending $a\in\Omega$ to the unique $p^r$th root of $\sigma(a^{p^r})$, choosing $a^{p^r}\in F^{\mathrm{sep}}$. A common exponent verifies independence of the choice and compatibility with sums and products; the inverse is obtained from $\sigma^{-1}$. The stabilizer of $a$ equals that of $a^{p^r}$, so restriction also respects the profinite topologies. This proves the assertion without a finiteness assumption on $L/K$.

**Perfection.** Inside $\Omega$, put
$$K^{\mathrm{perf}}=\bigcup_{r\ge0}K^{1/p^r},\qquad K^{1/p^r}=\{a\in\Omega:a^{p^r}\in K\}.$$
Each element has a $p$th root in the next field, so $K^{\mathrm{perf}}$ is perfect. The statement gives $G_{K^{\mathrm{perf}}}\cong G_K$. This is the elementary ambiguity behind the purely inseparable qualification in [Pop's reconstruction theorem](pop-mochizuki-finitely-generated-fields.md).

Transporting continuous cochains across $G_L\cong G_K$ also gives $H^*(G_K,\mathbb Z/m)\cong H^*(G_L,\mathbb Z/m)$ with cup products, for every $m\ge1$ and trivial coefficients, including $m=p$.

**Scheme version.** A universal homeomorphism $f:X\to Y$ induces an equivalence of finite étale covers; for connected schemes it induces an isomorphism $\pi_1(X,\bar x)\to\pi_1(Y,f(\bar x))$ [@stacks2026, Proposition 58.8.4, Tag 0BQN]. Absolute and relative Frobenius in characteristic $p$ are universal homeomorphisms [@stacks2026, Lemmas 33.36.3 and 33.36.6, Tags 0CC8 and 0CCB]. Thus Frobenius induces such an isomorphism even when it is not an isomorphism of schemes. This explains the localization at universal homeomorphisms in the [relative configuration-space theorem](grothendieck-conjecture-for-configuration-spaces-in-positive-characteristic.md).

**A distinction at the characteristic prime, checked here.** Take $K=\mathbb F_p(t)$ and $L=K^{\mathrm{perf}}$. The class of $t$ in $K^M_1(K)/p=K^\times/(K^\times)^p$ is nonzero: its valuation at $t=0$ is $1$, whereas a $p$th power has valuation divisible by $p$. But $K^M_1(L)/p=0$ since $L$ is perfect. Hence $K\not\cong L$ and their mod-$p$ Milnor K-rings differ, although $G_K\cong G_L$. The field $L$ is not finitely generated over $\mathbb F_p$: finitely many elements would all lie in one $\mathbb F_p(t^{1/p^r})$, which does not contain $t^{1/p^{r+1}}$, by the same valuation argument. Thus this example concerns arbitrary fields, rather than two fields in Pop's finite-type class.
