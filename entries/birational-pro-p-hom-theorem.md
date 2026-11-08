---
title: Corry–Pop's pro-p birational Hom theorem
kind: theorem
summary: 'Over a sub-$p$-adic field $k$, regular function-field embeddings correspond bijectively to open $G_k$-homomorphisms modulo conjugation by the geometric kernel, using maximal pro-$p$ geometric Galois quotients in every dimension (Corry–Pop).'
tags: [function-fields, galois-groups, local-fields, reconstruction]
edges:
  - {to: mochizuki-hom-theorem-for-hyperbolic-curves, label: uses, note: "Only the function-field case with target of transcendence degree 1, Theorem 16.5 [@corrypop2009, §1.2, p. 3]."}
---

**Data.** Fix a prime $p$ and a sub-$p$-adic field $k$, meaning a subfield of a finitely generated extension of $\mathbb{Q}_p$. Let $K/k$ and $L/k$ be finitely generated extensions of positive transcendence degree with $k$ algebraically closed in each. Fix an algebraic closure $\bar k$. For $F=K,L$, let $\widetilde F$ be a maximal pro-$p$ extension of $F\bar k$, and put $\Pi_F=\mathrm{Gal}(\widetilde F/F)$, with its projection $\pi_F:\Pi_F\to G_k$ [@corrypop2009, §1.2, pp. 2–3].

**Theorem (Corry–Pop).** Restriction gives a bijection
$$
\mathrm{Emb}_k(K,L)\;\longrightarrow\;
\mathrm{Hom}^{\mathrm{open}}_{G_k}(\Pi_L,\Pi_K)/\mathrm{Inn}(\ker\pi_K),
$$
where the homomorphisms are continuous and commute with the projections to $G_k$ [@corrypop2009, Theorem 1, p. 3]. Only the geometric kernel is pro-$p$; $\Pi_F$ retains the full group $G_k$.

**Reconstruction method.** Kummer theory and Mochizuki's one-dimensional theorem produce an embedding $K^\times/k^\times\hookrightarrow L^\times/k^\times$ preserving projective lines. Projective geometry then recovers the field embedding [@corrypop2009, §2, Claims 1–3, pp. 5–7].

The theorem strengthens the full profinite relative Hom form recorded in [Pop's theorem](pop-mochizuki-finitely-generated-fields.md) [@corrypop2009, §1.2, p. 3]. Locations refer to arXiv version 2; the paper appeared in 2009.
