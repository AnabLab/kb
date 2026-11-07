---
title: Mono-anabelian reconstruction from m-step solvable quotients
kind: theorem
summary: Mao and Saïdi give a group-theoretic algorithm reconstructing a number field and its maximal $m$-step solvable extension from $G_K^{m+9}$, for $m \ge 3$. From $G_K^6$ they recover imaginary quadratic fields and $\mathbb{Q}$, and Mao recovers abelian number fields.
tags: [number-fields, galois-groups, solvable-quotients, mono-anabelian]
edges:
  - {to: m-step-solvable-neukirch-uchida, label: uses, note: "For the general theorem only. The results for imaginary quadratic fields and abelian fields do not use it [@maosaidi2025mono, §1] [@mao2025, §1]."}
  - {to: mono-anabelian-reconstruction-number-fields, label: analogous-to, note: "The same kind of statement, starting from a much smaller quotient."}
  - {to: m-step-solvable-local-theory, label: uses}
---

**General theorem.** Let $m \ge 3$ and let $G$ be a profinite group isomorphic to $G_K^{m+9}$ for a number field $K$, with $G^m$ its maximal $m$-step solvable quotient. One can group-theoretically reconstruct a field $F_m(G^m)$ with an action of $G^m$ whose invariants $F(G^m)$ form a number field, such that $\mathrm{Gal}(F_m(G^m)/F(G^m)) \cong G_K^m$, compatibly with Galois-equivariant isomorphisms $F_m(G^m) \cong K_m$ and $F(G^m) \cong K$ [@maosaidi2025mono, Theorem 1].

**Small fields.** If $K$ is imaginary quadratic or $\mathbb{Q}$, a field isomorphic to $K$ can be reconstructed group-theoretically from $G_K^6$ [@maosaidi2025mono, Theorem 2]. Mao obtains the same for every abelian number field, by a different method that does not use the bi-anabelian theorem of Saïdi and Tamagawa [@mao2025, Theorem 1.2].

**Consequence.** For imaginary quadratic fields and $\mathbb{Q}$, this gives another proof that $G_K^6 \cong G_L^6$ implies $K \cong L$ [@maosaidi2025mono, §1].

**Status of the sources.** Both sources are arXiv preprints, neither of whose arXiv pages lists a journal reference as of November 2026.
