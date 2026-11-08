---
title: Ramification bounds for finite flat p-primary group schemes
kind: theorem
summary: Hoshi's 2026 preprint bounds the different exponents of the splitting fields of a finite flat p-primary group scheme and its Cartier dual from below in terms of its exponent. A cotangent-space bound is sharp; constant group schemes explain why the dual is needed.
tags: [local-fields, ramification, hodge-theory]
edges:
  - {to: ramification-filtration, label: uses, note: 'Different exponents are computed from the lower ramification groups.'}
  - {to: kummer-faithfulness-from-bounded-ramification, label: analogous-to, note: 'Both relate torsion and ramification; here different exponents are bounded using finite flat group schemes, while there bounded upper ramification implies Kummer-faithfulness.'}
---

**Setting.** Let $R$ be a complete discrete valuation ring of mixed characteristic $(0,p)$ with perfect residue field $k$, put $K=\operatorname{Frac}(R)$ and $K_0=\operatorname{Frac}(W(k))$, and normalize $v_0(p)=1$. Let $G/R$ be finite flat, commutative and killed by a power of $p$. Write $G^D$ for its Cartier dual and $K(G)$ for the fixed field of the kernel of $G_K\to\operatorname{Aut}(G(\bar K))$. Put
$$
n=\min\{r\in\mathbb Z_{\ge0}:p^rG=0\},\qquad
\lambda(G)=v_0\bigl(\operatorname{Ann}_R(e^*\Omega^1_{G/R})\bigr),
$$
where $e$ is the identity section. For finite $L/K$, set $d(L/K)=v_0(\mathfrak D_{L/K})$, and put
$$\epsilon_K=\frac1{p-1}+v_0(\mathfrak D_{K/K_0}).$$
These are the source's level, cotangent level and normalized different exponent [@hoshi2026finiteflat, Introduction, pp. 1–2; Definitions 1.1–1.2, pp. 3–4].

**Bounds (Hoshi).** For every prime $p$, including $2$,
$$
\lambda(G)-\epsilon_K\ \le\ d(K(G)/K)\ <\ n+\frac1{p-1},
$$
and
$$
n-2\epsilon_K\ \le\ \max\{d(K(G)/K),d(K(G^D)/K)\}\ <\ n+\frac1{p-1}
$$
[@hoshi2026finiteflat, Theorem 3.2 (ii)–(iii), p. 7]. The upper bound is attributed there to Fontaine; the lower bounds use truncated Hodge–Tate theory [@hoshi2026finiteflat, Lemmas 1.3, 2.2 and 3.1, pp. 4–7].

**Sharpness and the dual.** Take $K=K_0(\zeta_{p^m})$ and $n\ge m\ge1$. For $G=\mu_{p^n}$, one has $\lambda(G)=n$, $\epsilon_K=m$ and $d(K(G)/K)=n-m$, giving equality in the first lower bound. For its constant dual $(\mathbb Z/p^n\mathbb Z)_R$, the splitting field is $K$ despite arbitrarily large $n$ [@hoshi2026finiteflat, Remark 3.2.1, pp. 7–8].

**Ramification interpretation.** If $H=\operatorname{Gal}(L/K)$ and $H_i$ are its classical lower [ramification groups](ramification-filtration.md), then
$$d(L/K)=\frac{1}{v_L(p)}\sum_{i\ge0}(|H_i|-1),$$
with $v_L$ integer-normalized. This is the different formula; Saito states it using the logarithmic different and gives its relation to the ordinary different [@saitohenselianexcerpt, Definition 1.6.1 and Proposition 1.6.5 (2), pp. 19–21; Definition 1.7.2 and Proposition 1.7.5 (2), pp. 23–25]. The bounds above concern this scalar invariant of the filtration. The cited result is a September 2026 preprint and assumes perfect residue fields.
