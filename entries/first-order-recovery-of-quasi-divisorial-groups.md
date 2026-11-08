---
title: First-order recovery of mod-l quasi-divisorial groups
kind: theorem
summary: 'For function fields over algebraically closed fields, first-order mod-$\ell$ C-pair formulas identify quasi-divisorial inertia generators; one generator defines minimized inertia and decomposition (Topaz).'
tags: [function-fields, galois-groups, valuations, reconstruction]
edges:
  - {to: quasi-prime-divisor, label: uses}
  - {to: abelian-by-central-galois-group, label: uses}
  - {to: quasi-divisorial-groups-recoverable, label: analogous-to}
---

**Setup.** Fix a prime $\ell$. Let $K|k$ be a function field, $k$ algebraically closed, $\mathrm{char}(k)\ne\ell$, and $d=\mathrm{trdeg}(K|k)\ge2$. On $V=\operatorname{Hom}(K^\times,\mathbb F_\ell)$, set
$$
C(\sigma,\tau)\ \Longleftrightarrow\ \forall x\in K\setminus\{0,1\},\ \sigma(x)\tau(1-x)=\sigma(1-x)\tau(x).
$$
The mod-$\ell$ abelian-by-central Galois quotient encodes $C$ [@topaz2016def, Fact 1.2]. Define
$$
D_\sigma=\{\tau\in V:C(\sigma,\tau)\},\qquad
I_\sigma=\{\tau\in D_\sigma:\forall\rho\in D_\sigma,\ C(\tau,\rho)\}.
$$

**Criterion.** A nonzero $\sigma\in V$ generates minimized inertia of a [quasi prime divisor](quasi-prime-divisor.md) exactly when it extends to linearly independent $\sigma_1=\sigma,\ldots,\sigma_{d-1}$ satisfying:

- $C(\sigma_i,\sigma_j)$ for every $i,j$;
- some $\tau_1,\tau_2\in V$ satisfy $\neg C(\tau_1,\tau_2)$ and $C(\sigma_i,\tau_j)$ for every $i,j$;
- $I_\sigma=\mathbb F_\ell\sigma$.

The corresponding valuation $v$ satisfies
$$
I_\sigma=I_v^1=\operatorname{Hom}(K^\times/\mathcal O_v^\times,\mathbb F_\ell),\qquad
D_\sigma=D_v^1=\operatorname{Hom}(K^\times/(1+\mathfrak m_v),\mathbb F_\ell).
$$
This is Topaz's Theorem D with Theorem B expanded at $n=N=R(1)=1$ [@topaz2016def, §§1.5, 1.7–1.9, Remark 1.4].

**Scope.** For fixed $d,\ell$, generator selection is parameter-free in $(V,+,0,C)$; group recovery uses one parameter [@topaz2016def, Remark 1.6]. Distinguishing divisorial groups is [separate](divisorial-inertia-recovery-problem.md).
