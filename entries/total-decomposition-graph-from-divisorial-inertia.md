---
title: Recovering the total decomposition graph from divisorial inertia
kind: theorem
summary: Pop recovers every divisorial flag, its inertia and decomposition groups, and the residual quotient maps from the pro-ell abelian-by-central group with true divisorial inertia. This intermediate step holds in transcendence degree two as well as higher dimensions.
tags: [function-fields, galois-groups, valuations]
edges:
  - {to: abelian-by-central-galois-group, label: uses}
  - {to: quasi-prime-divisor, label: uses, note: "Only the true divisors and their compositions, trivial on the constants, occur here."}
  - {to: pro-l-strategy-for-bogomolov-pop, label: motivated-by, note: "The output of the local theory includes the maps on all residue groups."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks the cited input in Proposition 7.1(1), not the final field-reconstruction step [@openai2026bp, pp. 23–24]."}
---

**Statement.** Let $K/k$ be a function field of transcendence degree $d\ge2$, with $k$ algebraically closed and $\mathrm{char}(k)\ne\ell$. Set
$$\mathrm{In.div}(K)=\bigcup_v T_v\subset\Pi^a_K,$$
where $v$ runs over the prime divisors trivial on $k$. Pop gives a group-theoretic procedure recovering the total decomposition graph from $\Pi^c_K\to\Pi^a_K$ and this union. For another such function field $L/l$, an isomorphism $\Pi^c_K\to\Pi^c_L$ whose abelianization carries the union onto $\mathrm{In.div}(L)$ carries the recovered graph onto that for $L/l$ [@pop2018, Proposition 2.4(2)–(3), p. 9].

**What the graph retains.** Include the trivial valuation. For every composition $\tilde v$ of successive true prime divisors, the vertex carries $\Pi^a_{K\tilde v}=Z_{\tilde v}/T_{\tilde v}$. A next divisor $\tilde w/\tilde v$ carries the pair
$$T_{\tilde w}/T_{\tilde v}\ \subset\ Z_{\tilde w}/T_{\tilde v}\ \subset\ Z_{\tilde v}/T_{\tilde v},$$
and the projection to $Z_{\tilde w}/T_{\tilde w}$. Thus recovery includes the subgroup embeddings and residual quotient maps [@pop2018, §2B, pp. 6–8, especially Remark 2.1].

**Recognition criterion.** Write $A''$ for the full inverse image of a closed subgroup $A\subset\Pi^a_K$, and $J=\overline{\mathrm{In.div}(K)}$ for topological closure. The same proposition recovers $d$ as the greatest rank of a subgroup $\Delta\cong\mathbb Z_\ell^d$ with $\Delta''$ abelian. Its flag criterion selects maximal nested systems
$$Z_1\supset\cdots\supset Z_r,\qquad T_1\subset\cdots\subset T_r,\qquad T_m\subseteq Z_m,$$
subject to
$$\Delta\subseteq Z_r,\quad \Delta\cong\mathbb Z_\ell^d,\quad \Delta''\text{ abelian},\qquad
T_r\subseteq J,\quad T_m\cong\mathbb Z_\ell^m,\quad T_m''=\mathrm Z(Z_m'').$$
These are precisely the inertia and decomposition systems of prime-divisor flags [@pop2018, Proposition 2.4(1), p. 9]. Here $\mathrm Z$ denotes the centre.

**Scope of the check.** Section 2B assumes $d>1$, so this graph-recovery statement includes surfaces over arbitrary algebraically closed constants. Recovering the *field* from divisorial inertia in [the later theorem](pop-reconstruction-from-divisorial-inertia.md) has the stronger hypothesis $d>2$ [@pop2018, §2B, p. 6 and Theorem 1.1, p. 3]. The former statement is exactly the input cited in Proposition 7.1(1) of the [2026 manuscript](manuscripts-claiming-bogomolov-pop.md) [@openai2026bp, pp. 23–24]. This entry checks that citation and its hypotheses; it does not re-prove Pop's valuation recognition theorem, recover the supplied true divisorial inertia, or verify Proposition 7.1(2), which invokes different reconstruction results.
