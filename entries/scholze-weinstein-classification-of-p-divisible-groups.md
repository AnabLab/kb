---
title: Scholze–Weinstein classification of p-divisible groups
kind: theorem
summary: Over the integers of a complete algebraically closed p-adic field, a p-divisible group is determined by its integral Tate module and Hodge–Tate subspace. Every such pair occurs, and morphisms are exactly the lattice maps preserving that subspace.
tags: [local-fields, hodge-theory, reconstruction]
edges:
  - {to: tate-full-faithfulness-for-p-divisible-groups, label: analogous-to, note: 'Both recover p-divisible groups and their morphisms from linear data; here the base is the nondiscrete valuation ring of an algebraically closed field, and a Hodge–Tate subspace is part of the data.'}
---

**Setting.** Let $C/\mathbb Q_p$ be a complete algebraically closed nonarchimedean field, with valuation ring $\mathcal O_C$. Put $\mathbb Z_p(1)=\varprojlim_n\mu_{p^n}(C)$, $C(1)=C\otimes_{\mathbb Z_p}\mathbb Z_p(1)$ and $C(-1)=\operatorname{Hom}_{\mathbb Z_p}(\mathbb Z_p(1),C)$.

For a $p$-divisible group $G/\mathcal O_C$, its Tate module $T_pG=\varprojlim_n G[p^n](C)$ fits into the Hodge–Tate sequence
$$
0\longrightarrow \operatorname{Lie}(G)\otimes_{\mathcal O_C}C(1)
\longrightarrow T_pG\otimes_{\mathbb Z_p}C
\longrightarrow
\bigl(\operatorname{Lie}(G^\vee)\otimes_{\mathcal O_C}C\bigr)^*
\longrightarrow0,
$$
where $G^\vee$ is the Cartier dual and $*$ denotes $C$-linear duality [@scholzeweinstein2013moduli, Proposition 5.1.6(iii), p. 50]. Twisting the injection by $-1$ gives a subspace
$$
W_G=\operatorname{Lie}(G)\otimes_{\mathcal O_C}C
\subseteq T_pG\otimes_{\mathbb Z_p}C(-1).
$$

**Classification (Scholze–Weinstein).** The functor
$$
G\longmapsto (T_pG,W_G)
$$
is an equivalence with the category of pairs $(T,W)$, where $T$ is finite free over $\mathbb Z_p$ and $W\subseteq T\otimes_{\mathbb Z_p}C(-1)$ is any $C$-subspace. A morphism $(T,W)\to(T',W')$ is a $\mathbb Z_p$-linear map $f:T\to T'$ satisfying $(f\otimes1)(W)\subseteq W'$. This is an integral classification, including all morphisms [@scholzeweinstein2013moduli, Theorem 5.2.1, pp. 51–52]. Essential surjectivity for general $C$ is completed later; spherical completeness is not a hypothesis of the theorem [@scholzeweinstein2013moduli, §6.2, completion of the proof of Theorem 5.2.1, pp. 57–58].

**Reconstruction data.** The subspace is embedded data, not merely its dimension. Compare [Tate full faithfulness](tate-full-faithfulness-for-p-divisible-groups.md), where a Galois action over a fixed base supplies the reconstruction data, and the [crystalline essential-image theorem](crystalline-lattices-and-p-divisible-groups.md) over a discretely valued base.
