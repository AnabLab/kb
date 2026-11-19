---
title: Pro-p Galois recovery of p-adic valuations
kind: problem
summary: If K and a p-adic field F both contain a primitive pth root of unity and have isomorphic maximal pro-p Galois groups, Koenigsmann–Strommen predict a p-henselian valuation on K matching residue and initial ramification data of some p-adic F' with the same group. Known for Q2.
tags: [local-fields, galois-groups, pro-p-groups, valuations, reconstruction]
edges:
  - {to: maximal-pro-p-galois-groups-of-p-adic-fields, label: uses, note: "The comparison field is allowed to vary within its maximal pro-p Galois isomorphism class."}
  - {to: elementary-type-conjecture, label: analogous-to, note: "Its Demushkin realization prediction asks which groups occur; this conjecture asks for valuations on fields with a specified local group."}
---

**Conjecture (Koenigsmann–Strommen).** Fix a prime $p$, a finite extension $F/\mathbb Q_p$, and an arbitrary field $K$, both containing a primitive $p$th root of unity. Suppose $G_K(p)\cong G_F(p)$, where $G_E(p)$ denotes the maximal pro-$p$ Galois group of a field $E$. Then $\operatorname{char}K=0$, and there exist a nontrivial valuation $v$ on $K$ and a finite extension $F'/\mathbb Q_p$ with $G_{F'}(p)\cong G_F(p)$ such that:

1. $v$ extends uniquely to $K(p)$, the maximal pro-$p$ Galois extension of $K$.
2. $Kv\cong F'w$, where $w$ is the $p$-adic valuation of $F'$.
3. $[vK:p\,vK]=p$.
4. The value group $vK$ has a least positive element $\delta$, and $v(p)=e(F'/\mathbb Q_p)\delta$.

This is [@koenigsmannstrommen2024, Conjecture 1, p. 2], with $p$-henselianity expanded as in Definition 2.1. The integer in item 4 is the ramification index of $F'/\mathbb Q_p$.

**Scope.** The conjecture asks for a valuation on $K$, rather than a field isomorphism $K\cong F$. The substitute $F'$ is essential to the formulation: a maximal pro-$p$ Galois group need not determine the residue degree and ramification index of the original $F$ [@koenigsmannstrommen2024, Introduction, pp. 1–2, and Remarks 2.11 and 2.18]. Having a least positive value does not assert $vK\cong\mathbb Z$; the source explicitly permits higher-rank valuations [@koenigsmannstrommen2024, footnote on p. 2 and Remark 1.1, p. 3].

**Known and remaining work.** The [case $F=\mathbb Q_2$](pro-2-galois-recovery-of-the-2-adic-valuation.md) is proved: $Kv=\mathbb F_2$, $v(2)$ is least positive, and $[vK:2vK]=2$ [@koenigsmannstrommen2024, Theorem 1, p. 3, and Theorem 4.15, p. 21]. The general case is a conjecture in that source. A targeted literature search in November 2026 located no general resolution; it was not exhaustive.

The [norm-reciprocity theorem](norm-reciprocity-for-p-demushkin-fields.md) supplies a bijection between cyclic degree-$p$ extensions and norm hyperplanes. Passing from that multiplicative information to a valuation ring with all four properties is the remaining construction problem. The authors identify recovering the appropriate norm lattice as an obstacle to extending their proof beyond $\mathbb Q_2$ [@koenigsmannstrommen2024, Introduction, pp. 3–4].

Section 5.2 of the source gives an alternative, conditional route from the conjecture to pro-$p$ birational section statements. It explicitly notes that the curve statement is already known independently from [Pop's smaller quotients](metabelian-p-adic-birational-sections.md) [@koenigsmannstrommen2024, §5.2, pp. 22–24].

**Limits on stronger versions.** The source gives fields with the same absolute Galois group as $\mathbb Q_p$ whose relevant valuation has higher rank, and examples with the prescribed pro-$p$ group that are $p$-henselian but not henselian. It also explains why a uniformizer need not be algebraic over $\mathbb Q$ [@koenigsmannstrommen2024, Remark 1.1, p. 3]. None of these is a counterexample to the stated conjecture.
