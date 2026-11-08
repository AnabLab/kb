---
title: The Bogomolov–Positselski freeness conjecture
kind: problem
summary: 'After adjoining all $p$-power roots of elements of a field containing $\mu_p$ (and $\sqrt{-1}$ for $p=2$), is the maximal pro-$p$ Galois group free? Positselski predicts yes. This holds for elementary-type groups and follows from a stronger module Koszulity conjecture.'
tags: [galois-groups, galois-cohomology, pro-p-groups]
edges:
  - {to: one-smooth-oriented-pro-p-group, label: uses, note: "the Kummerian condition, the subgroup $K_\theta$ and the kernel criterion"}
  - {to: kummerian-obstruction-to-galois-realizability, label: uses, note: "only Galois necessity, which makes the cyclotomic pair Kummerian [@quadrelli2022smooth, Theorem 2.8]"}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "It supplies the quadratic cohomology hypothesis of the cohomological criterion below."}
  - {to: elementary-type-conjecture, label: uses, note: "only for the known case and conditional consequence below"}
  - {to: positselski-koszulity-conjecture, label: analogous-to, note: "The stronger module Koszulity condition discussed there implies this freeness conjecture [@positselski2005, Theorem 2, p. 3]."}
---

**Conjecture** (Positselski, extending Bogomolov). Let $p$ be a prime and $K$ a field of characteristic different from $p$ containing a primitive $p$-th root of unity, and also $\sqrt{-1}$ if $p=2$. In a separable closure set
$$
L=K\bigl(\sqrt[p^n]{a}:a\in K^\times,\ n\ge1\bigr).
$$
Then the maximal pro-$p$ Galois group $G_L(p)$ is free pro-$p$ [@positselski2005, §1.3, Conjecture 2, p. 2]. No finite generation assumption is imposed.

**Group formulation.** Put $G=G_K(p)$ and let $\theta:G\to1+p\mathbb Z_p$ be its cyclotomic character. Define
$$
N=K_\theta(G)=\overline{\langle h^{-\theta(g)}ghg^{-1}:g\in G,\ h\in\ker\theta\rangle}.
$$
The pair is [Kummerian](one-smooth-oriented-pro-p-group.md), so $\ker\theta/N$ is free abelian pro-$p$; for $p=2$ the hypothesis on $K$ gives $\theta(G)\subseteq1+4\mathbb Z_2$ [@feuerpfeil2026, §1.1, pp. 1–2]. The identification $G_L(p)\cong N$ makes the conjecture exactly the assertion that $N$ is free [@quadrelliweigel2022bp, §3.1, p. 7]. If $K$ contains all $p$-power roots of unity, $\theta=1$ and $N=\overline{[G,G]}$ [@quadrelliweigel2022bp, §1, p. 2]. Positselski also states a stronger conjecture asking that a Sylow pro-$p$ subgroup of the full $G_L$ be free [@positselski2005, §1.2–1.3, Conjecture 1, p. 2].

**Known case.** Quadrelli–Weigel prove freeness whenever $(G,\theta)$ is of [elementary type](elementary-type-conjecture.md), with $\theta(G)\subseteq1+4\mathbb Z_2$ for $p=2$. Consequently the elementary type conjecture would establish the assertion for every $K$ as above with $K^\times/K^{\times p}$ finite [@quadrelliweigel2022bp, Theorem 1.2 and preceding paragraph, pp. 2–3; Remark 5.10(a), p. 19].

**Cohomological criterion.** Write $Q=G/N$. The [norm residue theorem](norm-residue-isomorphism-theorem.md) makes $H^*(G,\mathbb F_p)$ quadratic [@feuerpfeil2026, §1.1, p. 3]. In the Hochschild–Serre spectral sequence
$$
E_2^{s,t}=H^s\bigl(Q,H^t(N,\mathbb F_p)\bigr)
\Longrightarrow H^{s+t}(G,\mathbb F_p),
$$
$N$ is free if and only if
$$
d_2^{2,1}:H^2\bigl(Q,H^1(N,\mathbb F_p)\bigr)
\longrightarrow H^4(Q,\mathbb F_p)
$$
is injective [@quadrelliweigel2022bp, Theorem 4.5, pp. 12–13]. The coefficient action is induced by conjugation.

A stronger sufficient condition uses $V=H^1(G,\mathbb F_p)$ and the kernel $J$ of the natural map $\Lambda^*(V)\to H^*(G,\mathbb F_p)$: $J$ should have a linear resolution over $\Lambda^*(V)$ starting in degree $2$, the shifted module Koszulity condition discussed in [Positselski's Koszulity conjecture](positselski-koszulity-conjecture.md) [@positselski2005, Theorem 2, p. 3]. Feuerpfeil states this criterion in its Galois-cohomology form [@feuerpfeil2026, §1.1, equation (1.2) and the following theorem, p. 3], and proves the stronger condition for elementary-type pairs with torsion-free orientation [@feuerpfeil2026, Theorem C, p. 4].

**Status.** The general assertion remains a conjecture in Feuerpfeil's January 2026 manuscript [@feuerpfeil2026, §1.1, p. 2]. A literature search on 8 November 2026 found no general resolution; it was not exhaustive.
