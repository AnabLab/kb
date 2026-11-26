---
title: Prismatic ramification bounds for mod-p cohomology
kind: theorem
summary: 'For odd p, Čoupek bounds upper ramification and the different for smooth proper mod-p cohomology over arbitrarily ramified p-adic fields, without assuming a bounded-weight crystalline lattice realization.'
tags: [local-fields, ramification, hodge-theory, galois-representations]
edges:
  - {to: ramification-filtration, label: uses}
  - {to: ramification-bounds-for-torsion-semistable-representations, label: analogous-to, note: 'Geometric torsion is treated directly, without a semistable lattice realization.'}
  - {to: wach-module-ramification-bound-for-mod-p-crystalline-representations, label: analogous-to, note: 'That theorem covers unramified bases and includes p=2.'}
---

**Setting.** Let $p>2$, let $K/\mathbb Q_p$ be finite, normalize $v_K(K^\times)=\mathbb Z$, and put $e=v_K(p)$. Let $X$ be a smooth proper $p$-adic formal scheme over $\mathcal O_K$, and $i\ge1$. Write
$$T=H^i_{\mathrm{\acute et}}(X_{\mathbb C_K},\mathbb Z/p\mathbb Z),$$
and let $L/K$ be the finite Galois extension cut out by $T$.

**Theorem (Čoupek).** Put
$$
\alpha=\left\lfloor\log_p\left(\max\left\{\frac{ip}{p-1},\frac{(i-1)e}{p-1}\right\}\right)\right\rfloor+1,
\qquad
\beta=\frac{iep/(p-1)-1}{p^\alpha}.
$$
Then $G_K^u$ acts trivially on $T$ in Serre [upper numbering](ramification-filtration.md) whenever
$$u>e\alpha+\max\left\{\beta,\frac{e}{p-1}\right\},$$
and, extending $v_K$ to $L$,
$$v_K(\mathfrak D_{L/K})<1+e\alpha+\beta$$
[@coupek2022crystalline, Theorem 1.1, p. 2; Theorem 5.15, pp. 33–34]. The source uses $G_K^{(\mu)}=G_K^{\mu-1}$ [@coupek2022crystalline, Remark 5.1, p. 28].

**Scope.** No restriction on $e$ or $i$, or torsion-freeness of integral cohomology, is imposed. A [semistable lattice quotient](ramification-bounds-for-torsion-semistable-representations.md) with weights in $[0,i]$ is not assumed [@coupek2022crystalline, Introduction, p. 3; Remark 5.16(1), p. 35].
