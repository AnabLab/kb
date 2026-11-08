---
title: Recognizing finite constants and point inertia in residual curves
kind: theorem
summary: Pop's complete-curve criterion recognizes when residual constants are algebraic over a finite field, and then recovers every point inertia subgroup. It uses minimized quasi-divisorial groups and allows residue characteristic $\ell$.
tags: [function-fields, valuations, galois-groups, reconstruction]
edges:
  - {to: quasi-prime-divisor, label: uses}
  - {to: quasi-divisorial-groups-recoverable, label: motivated-by, note: "The criterion uses the recovered quasi-divisorial inertia and a specified residual pair."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks Pop's residual-curve criterion, which Proposition 3.7 of the September 2026 manuscript cites, and its transport along isomorphisms matching the groups of Proposition 3.5 [@openai2026bp, pp. 10–12]; constructing that matching is not checked."}
---

**Input.** Let $K/k$ be a function field of transcendence degree $d\ge2$, with $k$ algebraically closed and $\mathrm{char}(k)\ne\ell$. Set
$$
W_K=\operatorname{Hom}(K^\times,\mathbb Z_\ell),\qquad
I_u=\operatorname{Hom}(K^\times/\mathcal O_u^\times,\mathbb Z_\ell),\qquad
D_u=\operatorname{Hom}(K^\times/(1+\mathfrak m_u),\mathbb Z_\ell),
$$
with pointwise convergence. Let $w$ be a composition of $d-1$ successive [quasi prime divisors](quasi-prime-divisor.md). Put
$$
G_w=D_w/I_w\cong\operatorname{Hom}((Kw)^\times,\mathbb Z_\ell),\qquad
J_K=\overline{\bigcup_{u\text{ quasi prime}}I_u},\qquad
R_w=q_w(J_K\cap D_w),
$$
where $q_w:D_w\to G_w$ is the quotient. The closure is of the union. Let $\mathcal T_w$ be all maximal procyclic subgroups of $G_w$ contained in $R_w$.

**Criterion (Pop).** The field $kw$ is algebraic over a finite field exactly when generators $\tau_T\in T$, for $T\in\mathcal T_w$, can be chosen tending to zero outside finite subsets such that
$$
\prod_{T\in\mathcal T_w}\mathbb Z_\ell\longrightarrow G_w,
\qquad (a_T)_T\longmapsto\sum_Ta_T\tau_T
$$
has diagonal kernel $\mathbb Z_\ell$ and finitely generated cokernel. Then
$$
\mathcal T_w=\{\mathbb Z_\ell\operatorname{ord}_P:P\in C(kw)\},
$$
where $C/kw$ is the smooth projective curve with function field $Kw$ [@pop2015minimized, §4, Theorem 4.2(i)(a) and its concluding assertion, pp. 348–351].

**Scope.** Pop includes these $w$ among valuations satisfying the theorem's hypotheses: $wK$ has no nonzero $\ell$-divisible convex subgroup, and some $k_1\subset K$ satisfies $k_1w=kw$ and $\mathrm{trdeg}(K/k_1)=\mathrm{trdeg}(Kw/k_1w)=1$ [@pop2015minimized, opening of §4, p. 348]. Residue characteristic $\ell$ is allowed; the groups remain multiplicative-character groups [@pop2015minimized, Remark 4.1, p. 349; Appendix, Main Theorem I and Lemma 5, pp. 353–355].

**Transport (proved here).** A continuous module isomorphism carrying $J_K,I_w,D_w$ to their counterparts preserves $R_w$, its maximal procyclic subgroups, and the displayed product condition. The criterion therefore transports finite residue constants and every point inertia subgroup. Matched normalized orders differ by $\mathbb Z_\ell^\times$, since the isomorphism sends a generator of each full subgroup to a generator.

This is the residual-curve step used in the [2026 manuscript](manuscripts-claiming-bogomolov-pop.md), Proposition 3.7; constructing the required local correspondence is a separate step [@openai2026bp, Propositions 3.5 and 3.7, pp. 10–12].
