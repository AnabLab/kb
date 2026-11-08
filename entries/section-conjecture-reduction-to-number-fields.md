---
title: Reducing the section conjecture to number fields
kind: theorem
summary: 'Bresciani reduces the section conjecture over finitely generated characteristic-zero fields to number fields for projective hyperelliptic curves and all hyperbolic curves of genus at most two. Weak Bombieri–Lang gives the reduction for every hyperbolic curve.'
tags: [curves, number-fields, function-fields, section-conjecture]
edges:
  - {to: section-conjecture, label: addresses, note: "These are proved conditional reductions, retaining the number-field section conjecture as a hypothesis [@bresciani2025finitetype, Theorems A and B, §§1.4–1.5]."}
  - {to: hyperbolic-curve, label: uses}
---

**Setting.** Let $K$ be finitely generated over $\mathbb Q$, with algebraic closure $\bar K$ and algebraic closure $\bar{\mathbb Q}$ of $\mathbb Q$ inside it. For a smooth [hyperbolic curve](hyperbolic-curve.md) $X/K$, write $\mathrm{SC}(X/K)$ for the assertion that every section of $\pi_1(X)\to G_K$, up to geometric conjugacy, is geometric or cuspidal. For proper $X$, this is the [section conjecture](section-conjecture.md); for affine $X$, sections at rational boundary points are included [@bresciani2025finitetype, §1.1].

A *specialization* of $X$ is, up to extension of fields, a fibre of a smooth proper family with finite étale boundary over an integral scheme whose generic fibre, with that boundary removed, is isomorphic to $X$ after extending fields [@bresciani2025finitetype, §1.3].

**Theorem (Bresciani).** Suppose $\mathrm{SC}$ holds for every specialization of $X$ defined over a number field. If some finite étale cover $Y\to X_{\bar K}$ admits a nonconstant morphism
$$Y\longrightarrow A_{\bar K}$$
to an abelian variety $A/\bar{\mathbb Q}$, then $\mathrm{SC}(X/K)$ holds. No Bombieri–Lang assumption is needed for this implication [@bresciani2025finitetype, Theorem B, §1.5].

**Consequences over all finitely generated extensions of $\mathbb Q$.**

- For each fixed $g\ge2$, $\mathrm{SC}$ for all projective hyperelliptic curves of genus $g$ over number fields implies $\mathrm{SC}$ for all such curves over finitely generated fields [@bresciani2025finitetype, Corollary A, §1.5].
- Fix $0\le g\le2$ and $n\ge0$ with $2g+n\ge3$. The number-field conjecture for curves with compactification genus $g$ and $n$ geometric punctures implies it for that same type over finitely generated fields [@bresciani2025finitetype, Corollary C, §1.5].
- Assuming $\mathrm{SC}$ for every affine hyperbolic curve over every number field, every smooth geometrically connected curve over $K$ has a basis of Zariski open subsets satisfying $\mathrm{SC}$ [@bresciani2025finitetype, Corollary B, §1.5].

**General reduction with Bombieri–Lang.** The abelian-variety hypothesis can be dropped if the weak Bombieri–Lang conjecture holds over all finitely generated extensions of $\mathbb Q$. Alternatively, it suffices to assume weak Bombieri–Lang over $\mathbb Q$ and the geometric Lang conjecture. Both versions retain $\mathrm{SC}$ for every number-field specialization of $X$ as a hypothesis [@bresciani2025finitetype, Theorem A, §1.4].

**Mechanism.** The proof inducts on transcendence degree. Its coherence property turns sections with geometric specializations into geometric generic sections; constant abelian varieties supply this property without Bombieri–Lang, while Bombieri–Lang supplies it for families of geometrically mordellic varieties [@bresciani2025finitetype, Definition 4.1, Propositions 4.3 and 4.5, Corollary 4.8, and §5].

**Source.** Locations refer to the published 2025 article. Its §1.5 labels the abelian-variety statement Theorem B; the repeated statement in §5 is labelled Theorem C.
