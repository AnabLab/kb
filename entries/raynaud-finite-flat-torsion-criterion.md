---
title: Raynaud's finite flat torsion criterion for p-divisible groups
kind: theorem
summary: 'A p-adic lattice is the Tate module of a p-divisible group over the integers exactly when each p-power quotient has a finite flat model, with no compatibility assumed. Equivalently its rationalization is crystalline with weights 0,1, for every prime and ramification index.'
tags: [local-fields, hodge-theory, galois-representations]
edges:
  - {to: crystalline-lattices-and-p-divisible-groups, label: uses, note: 'Identifies the resulting integral Tate modules with lattices in crystalline representations of weights 0,1.'}
  - {to: torsion-crystalline-quotients-detect-crystallinity, label: analogous-to, note: 'Raynaud tests actual finite flat models; Liu treats bounded-weight lattice quotients in every weight range.'}
  - {to: finite-flat-models-of-tate-curve-torsion, label: analogous-to, note: 'That entry computes exactly which individual torsion levels have models for a Tate curve.'}
---

**Raynaud's theorem.** Let $R$ be a discrete valuation ring of mixed characteristic $(0,p)$ with fraction field $K$. A $p$-divisible group $H/K$ extends to a $p$-divisible group over $R$ if every $H[p^n]$ extends to a finite flat group scheme over $R$. The extension is unique up to the unique isomorphism inducing the given generic-fibre identification. The finite flat models in the hypothesis need not form a compatible system [@raynaud1974schemas, Proposition 2.3.1 and proof, pp. 261–263].

**Lattice form (deduced here).** Let $K/\mathbb Q_p$ be finite and $T$ a finite free $\mathbb Z_p$-module with continuous $G_K$-action. The following are equivalent:

1. Every $T/p^nT$, for $n\ge1$, has a finite flat commutative model over $\mathcal O_K$.
2. $T\cong T_p\mathcal H$ for a $p$-divisible group $\mathcal H/\mathcal O_K$.
3. $T\otimes\mathbb Q_p$ is crystalline with Hodge–Tate weights in $\{0,1\}$, taking $\mathbb Q_p(1)$ to have weight $1$.

These assertions include $p=2$ and arbitrary ramification.

**Proof.** Finite étale $K$-group schemes correspond to finite continuous $G_K$-modules. Apply this to $T/p^nT$, with inclusions $t\bmod p^nT\mapsto pt\bmod p^{n+1}T$. These groups define a $p$-divisible group $H/K$: its multiplication-by-$p^n$ sequence is the exact sequence
$$0\longrightarrow T/p^nT\xrightarrow{p^m}T/p^{n+m}T\xrightarrow{\mathrm{reduction}}T/p^mT\longrightarrow0.$$
Its Tate module, using multiplication by $p$ as transition maps, is $T$. Raynaud's theorem gives (1)$\Rightarrow$(2). Conversely, the groups $\mathcal H[p^n]$ give (2)$\Rightarrow$(1). The equivalence (2)$\Leftrightarrow$(3) is the [integral crystalline classification](crystalline-lattices-and-p-divisible-groups.md) [@scholzeweinstein2013moduli, Corollary 6.2.3, p. 58]. $\square$

**Scope.** Compatibility is a conclusion about some choice of models. It is not asserted for an arbitrary collection of finite flat models supplied in (1), nor are the individual finite flat models asserted to be unique.
