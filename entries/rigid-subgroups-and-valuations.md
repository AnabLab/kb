---
title: Rigid elements and canonical valuations
kind: theorem
summary: A multiplicative subgroup contains the units of a valuation exactly when it satisfies rigidity and a preadditivity condition. Such a subgroup determines a unique coarsest valuation, with an explicit formula for its units. Rigidity alone allows an index-two obstruction.
tags: [valuations, galois-groups, reconstruction]
edges:
  - {to: quasi-prime-divisor, label: uses, note: "only the minimized inertia notation in the Kummer interpretation"}
---

**Criterion.** Let $K$ be any field and $H\le K^\times$. Call $H$ *valuative* if $\mathcal O_v^\times\subseteq H$ for some valuation $v$. This holds exactly when $-1\in H$ and both conditions below hold:

1. For every $x\in K^\times\setminus H$, one has $1+x\in H\cup xH$ (rigidity).
2. For $x,y\in K^\times\setminus H$ with $1+x,1+y\in H$, one has $1+x(1+y)\in H$ (preadditivity).

This is [@topaz2017, Lemma 3.1 and Definition 3.3], using Arason–Elman–Jacob's valuation construction. With only $-1\in H$ and condition 1, one still obtains a valuation $v$ with
$$
1+\mathfrak m_v\subseteq H,
\qquad
\big|\mathcal O_v^\times/(\mathcal O_v^\times\cap H)\big|\le 2
$$
[@topaz2017, Theorem 4(1)].

**Canonical valuation.** For valuative $H$, there is a unique coarsest such valuation $v_H$. Its units can be recovered directly:
$$
\mathcal O_{v_H}^\times=
\left\{h\in H:\frac{1+x}{h+x}\in H
\text{ for every }x\in K^\times\setminus H\right\}.
$$
Equivalently, among valuations $w$ with $\mathcal O_w^\times\subseteq H$, the canonical one is characterized by $w(H)$ containing no nonzero convex subgroup of the value group [@topaz2017, Lemma 3.4 and its proof].

**Kummer interpretation.** Suppose $\mathrm{char}(K)\ne\ell$ and $\mu_{\ell^\infty}\subset K$. After choosing the Kummer identification $\Pi_K^a=\operatorname{Hom}(K^\times,\mathbb Z_\ell)$, let $I\le\Pi_K^a$ be closed and $H=\bigcap_{\chi\in I}\ker\chi$. Then $H$ is valuative exactly when $I\subseteq T_v^1$ for some $v$, where $T_v^1$ is [minimized inertia](quasi-prime-divisor.md). Its coarsest such valuation is $v_H$ [@topaz2017, Definition 3.3 and Lemma 3.4]. This is the subgroup-to-valuation step in the [commuting-liftable theory](commuting-liftable-pairs-and-valuations.md) [@topaz2017, Theorem 5].

**Why condition 2 matters (checked here).** In $K=\mathbb F_5$, take $H=\{1,4\}$. Condition 1 holds: the only elements outside $H$ are $2,3$, with $1+2=3\in2H$ and $1+3=4\in H$. But $x=y=3$ violates condition 2, since $1+3(1+3)=3\notin H$. Every valuation of a finite field is trivial: its value group is ordered and hence torsion-free, while $K^\times$ is finite. Thus $H$ cannot contain a valuation's units. The trivial valuation attains the index-two bound above.
