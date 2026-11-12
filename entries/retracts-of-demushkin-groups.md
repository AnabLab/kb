---
title: Virtual retractions and inert retracts in Demushkin groups
kind: theorem
summary: 'Every finitely generated closed subgroup of a Demushkin group of rank at least three is a retract of an open subgroup. Actual retracts satisfy $d(H\cap K)\le d(K)$. Thus every such subgroup is inert in some open overgroup, though it need not be inert in the whole group.'
tags: [pro-p-groups, galois-groups, local-fields]
edges:
  - {to: demushkin-group, label: uses, note: 'The definition and the open-subgroup rank formula.'}
  - {to: hanna-neumann-inequality-for-demushkin-groups, label: analogous-to, note: 'Both bound subgroup intersections; inertia imposes a retraction hypothesis and gives a bound independent of the rank of the retract.'}
  - {to: maximal-pro-p-galois-groups-of-p-adic-fields, label: uses, note: 'Only for the final application to local Galois groups.'}
---

**Setting.** Let $G$ be a [Demushkin pro-$p$ group](demushkin-group.md) with $d(G)\ge3$, where $d(P)$ is the least number of topological generators of $P$. All subgroups are closed, and finite generation means topological finite generation. A subgroup $H\subseteq G$ is a *retract* if a continuous homomorphism $r:G\to H$ restricts to the identity on $H$. It is a *virtual retract* if it is a retract of some open subgroup containing it. Call $H$ *inert* in $G$ if $d(H\cap K)\le d(K)$ for every finitely generated $K\subseteq G$.

**Theorems.**

1. **Virtual retraction (Shusterman–Zalesskii).** Every finitely generated $H\subseteq G$ is a virtual retract [@shustermanzalesskii2020, Theorem 1.1, p. 2].
2. **Inertia (Souza).** Every retract $H$ of $G$ is inert in $G$ [@souza2021retracts, Theorem 1.1, p. 1]. A proper retract is a finitely generated free pro-$p$ group [@souza2021retracts, Proposition 3.2, p. 4].

Both assertions include $p=2$ and impose no condition on the canonical character. In the definition above, *inert* describes a rank inequality, not a ramification subgroup.

**Corollary (proved here).** For every finitely generated $H\subseteq G$ there is a single open subgroup $U\supseteq H$ such that
$$
d(H\cap K)\le d(K)\qquad\text{for every finitely generated }K\subseteq U.
$$

*Proof.* Choose $U$ by part 1. Open subgroups of $G$ are again Demushkin groups, with $d(U)-2=[G:U](d(G)-2)$, so $d(U)\ge3$ [@souza2021retracts, §2, equation (2.1), p. 2]. Part 2 applied to the retract $H$ of $U$ gives the inequality. The choice of $U$ depends on $H$, not on $K$. $\square$

**The ambient group matters (proved here).** Virtual retraction does not imply inertia in $G$. Indeed, take any proper open subgroup $H\subsetneq G$. It is a virtual retract by taking $U=H$, whereas the same rank formula gives
$$
d(H)=2+[G:H](d(G)-2)>d(G).
$$
Taking $K=G$ contradicts the inequality required for inertia in $G$. Thus the corollary controls intersections inside its chosen open overgroup. For arbitrary finitely generated subgroups of $G$, the [Hanna Neumann bound](hanna-neumann-inequality-for-demushkin-groups.md) supplies a different estimate.

**Local Galois application (proved here).** If $k/\mathbb Q_p$ is finite and contains a primitive $p$th root of unity, then $G_k(p)$ is Demushkin of rank $[k:\mathbb Q_p]+2\ge3$, by the [local structure theorem](maximal-pro-p-galois-groups-of-p-adic-fields.md). Substituting this group for $G$ gives both theorems and the corollary for $G_k(p)$, including every finite dyadic $k$.
