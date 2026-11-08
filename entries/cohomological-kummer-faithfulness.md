---
title: Cohomological criteria for Kummer-faithfulness
kind: theorem
summary: 'Yamamura''s 2026 preprint proves that sub-p-adic fields have vanishing positive-degree etale-cohomology coinvariants. For complete mixed-characteristic discretely valued fields with residue algebraic over a finite field, this condition is equivalent to Kummer-faithfulness.'
tags: [local-fields, galois-cohomology, hodge-theory]
edges:
  - {to: semi-absolute-reconstruction-over-kummer-faithful-fields, label: analogous-to, note: 'Characterizes its Kummer-faithful base-field condition cohomologically in the complete mixed-characteristic setting below.'}
  - {to: hodge-tate-reconstruction-with-algebraic-residue-fields, label: analogous-to, note: 'Both treat complete mixed-characteristic discretely valued fields with residue fields algebraic over finite fields.'}
---

**Condition.** A characteristic-zero field $k$ is *quasi-highly Kummer-faithful* if, for every finite extension $L/k$, proper smooth variety $X/L$, prime $\ell$, and $0<i\le2\dim X$,
$$H^i_{\mathrm{\acute et}}(X_{\bar L},\mathbb Q_\ell)_{G_L}=0.$$
The subscript denotes coinvariants: $V_G=V/\langle gv-v:g\in G,\ v\in V\rangle$ [@yamamura2026weights, Definition 3.1, p. 17].

**Theorems (preprint).** Every [sub-$p$-adic field](mochizuki-hom-theorem-for-hyperbolic-curves.md) satisfies this condition, including for $\ell=p$ [@yamamura2026weights, Theorem 3.7, p. 19].

Let $k$ be complete discretely valued of mixed characteristic $(0,p)$, with residue field $\kappa$ algebraic over $\mathbb F_p$. Then the following are equivalent:

1. $k$ is [Kummer-faithful](semi-absolute-reconstruction-over-kummer-faithful-fields.md).
2. $k$ is quasi-highly Kummer-faithful.
3. $\kappa$ is quasi-finite, meaning $G_\kappa\cong\widehat{\mathbb Z}$.

This is [@yamamura2026weights, Theorem 3.16, p. 23], with the standing residue-field hypothesis on p. 21 made explicit.

**Status.** These are cited results of the August 2, 2026 preprint; their proofs have not been independently audited here.
