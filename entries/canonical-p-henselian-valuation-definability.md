---
title: Uniform definability of canonical p-henselian valuations
kind: theorem
summary: Jahnke–Koenigsmann uniformly define canonical p-henselian valuation rings without parameters when the field has characteristic p or contains a primitive pth root of unity, except at p = 2 with Euclidean residue. The exception concerns definability across elementary equivalence.
tags: [valuations, model-theory, galois-groups]
edges:
  - {to: galois-characterization-of-henselianity, label: analogous-to, note: "There the absolute Galois group detects existence of certain henselian valuations; here field operations define a canonical p-henselian valuation ring."}
  - {to: rigid-subgroups-and-valuations, label: analogous-to, note: "Both single out canonical valuations, from all p-henselian valuations here and from a specified multiplicative subgroup there."}
---

**Canonical valuation.** Let $K(p)$ be the maximal Galois pro-$p$ extension of $K$, with $K\ne K(p)$. A valuation is *$p$-henselian* if it extends uniquely to $K(p)$. The canonical valuation $v_K^p$ is the coarsest such valuation with $p$-closed residue field, if one exists; otherwise it is the finest $p$-henselian valuation. Here $F$ is $p$-closed when $F=F(p)$ [@jahnkekoenigsmann2015, §2].

**Uniform theorem.** Assume $\operatorname{char}K=p$ or $K$ contains a primitive $p$th root of unity. Call $v_K^p$ *definable as such* if some parameter-free formula $\phi(x)$ in the ring language satisfies
$$
\phi(L)=\mathcal O_{v_L^p}\qquad\text{for every }L\equiv K.
$$
This holds exactly when $p\ne2$ or $Kv_K^p$ is not Euclidean, meaning $[Kv_K^p(2):Kv_K^p]\ne2$. One formula $\phi_p$ works for every such $K$ [@jahnkekoenigsmann2015, Main Theorem 3.1 and preceding definition].

**Exception at $2$.** On $\mathbb R((t))$, $v_K^2$ is $t$-adic and parameter-free definable, yet not definable as such [@jahnkekoenigsmann2015, Example following Main Theorem 3.1]. In the Euclidean-residue case, a uniform replacement defines the coarsest $2$-henselian valuation with Euclidean residue [@jahnkekoenigsmann2015, Observation 3.2 and Corollary 3.3].

**Input.** This theorem uses the field's ring structure. Compare [Galois detection of henselianity](galois-characterization-of-henselianity.md) and [valuation construction from rigid subgroups](rigid-subgroups-and-valuations.md) for related reconstruction steps.
