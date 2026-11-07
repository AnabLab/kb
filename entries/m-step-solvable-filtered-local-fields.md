---
title: The m-step solvable Grothendieck conjecture for filtered p-adic Galois groups
kind: theorem
summary: For $p$-adic fields, Hyeon shows that isomorphic filtered maximal metabelian quotients imply isomorphic fields, and that a filtered isomorphism of $G_K^{m+3}$ induces on $G_K^{m+1}$ conjugation by a field isomorphism of maximal $(m+1)$-step solvable extensions.
tags: [local-fields, galois-groups, solvable-quotients, ramification]
edges:
  - {to: mochizuki-local-fields-theorem, label: motivated-by, note: "A refinement, proved with a few adjustments to Mochizuki's method [@hyeon2025, §1]."}
  - {to: m-step-solvable-neukirch-uchida, label: analogous-to}
  - {to: ramification-filtration, label: uses}
  - {to: m-step-solvable-quotient, label: uses}
---

**Weak form.** Let $K_\circ, K_\bullet$ be finite extensions of $\mathbb{Q}_p$ and $\mathbb{Q}_{p'}$. If the maximal metabelian quotients $G_{K_\circ}^2, G_{K_\bullet}^2$ are isomorphic as filtered profinite groups, for the [ramification filtrations](ramification-filtration.md), then $K_\circ \cong K_\bullet$ [@hyeon2025, Theorem 1.2].

**Functorial form.** Let $m \ge 0$ and let $\alpha_{m+3} : G_{K_\circ}^{m+3} \to G_{K_\bullet}^{m+3}$ be an isomorphism of filtered profinite groups. Write $K^n$ for the maximal $n$-step solvable extension of $K$, and $\alpha_{m+1}$ for the isomorphism of $G^{m+1}$ induced by $\alpha_{m+3}$. There is an isomorphism $\theta_{m+1} : K_\circ^{m+1} \to K_\bullet^{m+1}$ with $\alpha_{m+1}(\sigma) = \theta_{m+1} \sigma \theta_{m+1}^{-1}$ for all $\sigma \in G_{K_\circ}^{m+1}$. For $m \ge 1$ the isomorphism $\theta_{m+1}$ is uniquely determined by $\alpha_{m+3}$, and for $m = 0$ its restriction to $K_\circ$ is [@hyeon2025, Theorem 1.3].

**Role of the filtration.** Without the filtration the statements fail at every level, because [isomorphic $G_K$ for non-isomorphic $K$](nonisomorphic-p-adic-fields-with-isomorphic-galois-groups.md) induce isomorphic quotients $G_K^m$.

**Open.** It remains unknown whether these theorems can be made mono-anabelian, although some invariants have explicit group-theoretic reconstructions [@hyeon2025, §1].
