---
title: Slim finite-step solvable Galois quotients
kind: theorem
summary: 'Yamaguchi proves that maximal m-step solvable Galois quotients are slim for every m at least two over Hilbertian fields, sub-p-adic fields and higher local fields of positive dimension.'
tags: [galois-groups, solvable-quotients, local-fields, number-fields]
edges:
  - {to: m-step-solvable-quotient, label: uses}
  - {to: m-step-solvable-filtered-local-fields, label: analogous-to, note: 'Rigidity of local solvable quotients; slimness requires no ramification filtration.'}
---

**Theorem (Yamaguchi).** Suppose $K$ is Hilbertian, [sub-$p$-adic](mochizuki-hom-theorem-for-hyperbolic-curves.md) for some prime $p$, or a [higher local field](positive-characteristic-higher-local-fields-from-galois-groups.md) of positive dimension. For every $m\ge2$, the [maximal $m$-step solvable quotient](m-step-solvable-quotient.md) $G_K^m$ is *slim*:
$$
C_{G_K^m}(U)=1\qquad\text{for every open subgroup }U\subseteq G_K^m
$$
[@yamaguchi2026abfaithfulness, Corollary D; Proposition 5.2 and Example 6.7(2)–(3)].

**Criterion.** A profinite group $G$ is *ab-faithful* if $H/N$ acts faithfully on $N^{\mathrm{ab}}$ whenever $N\triangleleft H\subseteq G$ are open [@yamaguchi2026abfaithfulness, Definition 1.1]. If $G_K$ is ab-faithful, then $G_K^m$ is centre-free for $m\ge2$. It is slim if $K(\mu_{\ell^\infty})/K$ is infinite for every prime $\ell\ne\operatorname{char}K$, and, in characteristic $p>0$, $K$ has a cyclic extension of degree $p$ [@yamaguchi2026abfaithfulness, Corollary 6.6].

These are results of the cited October 2026 preprint. They concern $G_K^m$; slimness of $\operatorname{Out}(G_K^m)$ is not asserted.
