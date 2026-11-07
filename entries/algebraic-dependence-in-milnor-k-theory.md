---
title: Algebraic dependence is encoded in rational Milnor K-theory
kind: theorem
summary: Topaz shows that for any field $K$ of absolute transcendence degree at least $5$, the $\mathbb{Q}$-algebra $\mathbb{Q} \otimes K^M_*(K)$ determines $K$ up to purely inseparable extensions, with no other restriction on $K$.
tags: [milnor-k-theory, function-fields]
edges:
  - {to: milnor-k-ring-does-not-determine-field, label: motivated-by, note: "The paper investigates the same question, for fields without finiteness conditions [@topaz2022, §1]."}
  - {to: combinatorial-geometry-reconstruction, label: uses, note: "The key tool for the absolute result [@topaz2022, §5]."}
  - {to: milnor-k-reconstruction-function-fields, label: uses, note: "For the finitely generated case [@topaz2022, Theorem 5.6]."}
  - {to: milnor-k-ring, label: uses}
---

**Statement.** Let $K$ be a field of absolute transcendence degree at least $5$. Then the perfect closure $K^i$ is determined up to isomorphism by the $\mathbb{Q}$-algebra $\mathbb{Q} \otimes_{\mathbb{Z}} K^M_*(K)$ [@topaz2022, Theorem 5.4]. No other restriction is imposed, so this applies to any sufficiently large algebraically closed field [@topaz2022, §1].

**Why rational coefficients.** If $K$ is radically closed, then $K^\times$ modulo torsion is already a $\mathbb{Q}$-vector space, and $t \mapsto t^r$ for $r \in \mathbb{Q}^\times$ gives automorphisms in degree one that arise from field theory only if $r$ is a power of the characteristic. Tensoring with $\mathbb{Q}$ controls this indeterminacy [@topaz2022, §1].

**Finitely generated case.** For a regular function field $K$ over a perfect field $k$ of transcendence degree at least $2$, the field $K|k$ is determined up to isomorphism by its relative Milnor K-theory $K^M_*(K|k)$, using the work of Cadoret and Pirutka [@topaz2022, Theorem 5.6].

**Status of the source.** The source is an arXiv preprint, whose arXiv page lists no journal reference as of November 2026.
