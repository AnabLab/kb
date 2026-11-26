---
title: Logarithmic torsion weights detect crystallinity and semistability
kind: theorem
summary: 'Gao proves that a rank-d p-adic lattice is crystalline or semistable if every p-power quotient has such a realization with weights in [-h(n),0] and h(n) < log_16(n)/(2d) eventually. The realizations need no compatibility; every prime is allowed.'
tags: [local-fields, hodge-theory, galois-representations]
edges:
  - {to: torsion-crystalline-quotients-detect-crystallinity, label: analogous-to, note: 'Refines the fixed-weight test by allowing slow logarithmic growth; Gao states the negative-weight version.'}
---

**Setting.** Let $p$ be any prime, $k$ a perfect field of characteristic $p$, and $K$ a finite totally ramified extension of $\operatorname{Frac}(W(k))$. Let $T$ be a rank-$d$ finite free $\mathbb Z_p$-module with continuous $G_K$-action, with $d\ge1$. Take $\mathbb Q_p(1)$ to have Hodge–Tate weight $1$.

**Theorem (Gao).** Suppose that, for every $n\ge1$,
$$T/p^nT\cong L_n/L'_n,$$
where $L'_n\subseteq L_n$ are full $G_K$-stable lattices in a crystalline, respectively semistable, representation with weights in $[-h(n),0]$, for nonnegative integers $h(n)$. If
$$h(n)<\frac{1}{2d}\log_{16}(n)\qquad\text{for all sufficiently large }n,$$
then $T\otimes_{\mathbb Z_p}\mathbb Q_p$ is crystalline, respectively semistable [@gao2018unboundedweights, Definition 1.1, p. 2; Theorem 1.5 and weight convention, p. 3].

The realizing representations and lattices need no compatibility. The proof treats $p=2$ explicitly, including the crystalline case [@gao2018unboundedweights, Theorem 3.1 and proof, pp. 9–10]. This is a sufficient growth condition, with no optimality assertion. It supplies an intermediate test between [fixed weight bounds and unrestricted crystalline lifts](torsion-crystalline-quotients-detect-crystallinity.md).
