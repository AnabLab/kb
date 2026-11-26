---
title: Bounded-weight torsion quotients detect crystallinity and semistability
kind: theorem
summary: 'Crystallinity and semistability with bounded weights can be tested on every p-power quotient, without compatible realizations. The weight bound is essential: unrestricted crystalline lifts exist for every finite p-primary Galois representation.'
tags: [local-fields, hodge-theory, galois-representations]
edges:
  - {to: fontaine-bounded-weight-torsion-conjecture, label: resolves, note: 'Liu proves the assertion for crystalline and semistable representations, for every prime and arbitrary ramification.'}
  - {to: crystalline-lattices-and-p-divisible-groups, label: analogous-to, note: 'The weight range 0,1 also occurs in the integral classification of p-divisible groups.'}
  - {to: fontaine-ramification-bound-for-finite-flat-torsion, label: analogous-to, note: 'That entry tests numerical ramification bounds on torsion; this criterion requires actual realizations by lattice quotients.'}
---

**Data.** Let $K/\mathbb Q_p$ be finite, $T$ a finite free $\mathbb Z_p$-module with continuous $G_K$-action, and $r>0$ a fixed integer. Take $\mathbb Q_p(1)$ to have Hodge–Tate weight $1$.

**Theorem (Liu, proving Fontaine's conjecture).** The following are equivalent, with either choice of crystalline or semistable throughout:

1. $T\otimes_{\mathbb Z_p}\mathbb Q_p$ is crystalline, respectively semistable, with weights in $\{0,\ldots,r\}$.
2. For every $n\ge1$, there are full $G_K$-stable $\mathbb Z_p$-lattices $L'_n\subseteq L_n$ in a finite-dimensional $\mathbb Q_p$-representation $W_n$ of $G_K$ that is crystalline, respectively semistable, over $K$, with weights in $\{0,\ldots,r\}$, such that
   $$T/p^nT\cong L_n/L'_n$$
   as $\mathbb Z_p[G_K]$-modules.

The $W_n$, their dimensions, and their lattices may vary with $n$, with no compatibility assumed. This includes $p=2$ and arbitrary ramification [@liu2007torsion, §1, Conjecture 1.0.1 and following paragraph, p. 633; §§7.2–8, pp. 669–673].

**Unrestricted lifts (Gao–Liu).** Every finite $p$-primary $G_K$-module $M$ with continuous action admits a surjection
$$\widetilde L\twoheadrightarrow M$$
from a finite free $\mathbb Z_p$-representation whose rationalization is crystalline. Such a surjection is a *loose crystalline lift*, with no minimal-rank requirement [@gaoliu2018loose, Definition 3.1.1(2), p. 13; Theorem 3.3.2, p. 18; Convention 3.3.3(2), p. 19]. Thus unrestricted crystalline realizability of the individual quotients supplies no condition on $T$. For a tower $T/p^nT$, the source's construction allows the weight range to grow linearly with $n$ [@gaoliu2018loose, Remark 3.3.5(1)–(2), p. 21].

**Role.** The fixed range $\{0,1\}$ connects this torsion criterion to [crystalline lattices and p-divisible groups](crystalline-lattices-and-p-divisible-groups.md). Its realizations carry more information than the numerical cutoffs in [Fontaine's ramification bound](fontaine-ramification-bound-for-finite-flat-torsion.md).
