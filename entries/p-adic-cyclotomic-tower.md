---
title: Cyclotomic towers over p-adic fields
kind: theorem
summary: 'The p-power cyclotomic layers over Q_p are totally ramified of degree p^(m-1)(p-1). Over any finite extension K, the cyclotomic character has open inertia image, and K(mu_{p^infinity}) becomes a totally ramified Z_p-extension after a finite cyclotomic layer.'
tags: [local-fields, galois-groups, ramification, hodge-theory]
edges:
  - {to: ramification-filtration, label: uses, note: "Inertia measures the ramification of the cyclotomic tower."}
---

**Finite layers.** Fix a prime $p$, and let $\zeta_{p^m}$ be a primitive $p^m$th root of unity, with $m\ge1$. The extension
$$
F_m=\mathbb Q_p(\zeta_{p^m})
$$
is totally ramified of degree $p^{m-1}(p-1)$, the element $1-\zeta_{p^m}$ is a uniformizer, and
$$
\mathcal O_{F_m}=\mathbb Z_p[\zeta_{p^m}].
$$
These assertions hold also for $p=2$ [@fesenkovostokov2002, Chapter IV, (1.3), pp. 113–114].

**Cyclotomic character.** Let $K/\mathbb Q_p$ be finite and put
$$
K_m=K(\mu_{p^m}),\qquad K_\infty=\bigcup_{m\ge1}K_m.
$$
The continuous character $\chi_{\mathrm{cyc}}:G_K\to\mathbb Z_p^\times$ is determined by
$g(\zeta)=\zeta^{\chi_{\mathrm{cyc}}(g)}$ on every $p$-power root of unity. Its kernel fixes $K_\infty$ [@brinonconrad2009, §1.1, p. 5].

The inertia image $\chi_{\mathrm{cyc}}(I_K)$ is infinite, so $K_\infty/K$ is infinitely ramified [@brinonconrad2009, Example 1.1.5, p. 5]. Both this image and
$$
\Gamma_K=\operatorname{Gal}(K_\infty/K)
=\chi_{\mathrm{cyc}}(G_K)
$$
are open in $\mathbb Z_p^\times$. For sufficiently large $m_0$, the extension $K_\infty/K_{m_0}$ is totally ramified and
$$
\operatorname{Gal}(K_\infty/K_{m_0})\cong\mathbb Z_p,\qquad
\operatorname{Gal}(K_m/K_{m_0})\cong\mathbb Z/p^{m-m_0}\mathbb Z
\quad(m\ge m_0)
$$
[@brinonconrad2009, Example 13.1.1, pp. 198–199].

**Role.** The finite-layer statement supplies the ramification input in the [cyclotomic field-of-norms corollary](fontaine-wintenberger-field-of-norms.md). The infinitely ramified character and its quotient $\Gamma_K$ supply the tower used in [Sen theory](sen-operator-hodge-tate-criterion.md).
