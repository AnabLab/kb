---
title: The m-step solvable Neukirch–Uchida theorem
kind: theorem
summary: 'Saïdi and Tamagawa show that $G_K^3 \cong G_L^3$ implies $K \cong L$ for number fields, and that an isomorphism $G_K^{m+3} \to G_L^{m+3}$ induces a field isomorphism $K_m \to L_m$ compatible with $G_K^m \to G_L^m$, unique for $m \ge 2$.'
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: neukirch-uchida-theorem, label: motivated-by, note: "Called a substantial sharpening of the target [@saiditamagawa2022, Abstract]."}
  - {to: m-step-solvable-local-theory, label: uses}
  - {to: l-series-reconstruction-global-fields, label: uses, note: "Only for Theorem 1. The proof of Theorem 2 does not use it, and Theorem 2(i) with $m = 0$ gives another proof of Theorem 1 [@saiditamagawa2022, §0]."}
  - {to: m-step-solvable-quotient, label: uses}
---

**Weak form.** Let $K, L$ be number fields, in the notation of [m-step solvable quotients](m-step-solvable-quotient.md). If there is an isomorphism of profinite groups $G_K^3 \to G_L^3$, then $K \cong L$ [@saiditamagawa2022, Theorem 1]. This does not say how the field isomorphism relates to the given group isomorphism [@saiditamagawa2022, §0].

**Functorial form.** Let $m \ge 0$ and let $\tau_{m+3} : G_K^{m+3} \to G_L^{m+3}$ be an isomorphism, inducing $\tau_m : G_K^m \to G_L^m$ [@saiditamagawa2022, Theorem 2].

- There is a field isomorphism $\sigma_m : K_m \to L_m$ with $\tau_m(g) = \sigma_m g \sigma_m^{-1}$ for all $g \in G_K^m$. In particular it induces an isomorphism $K \to L$.
- For $m \ge 2$, the isomorphism $\sigma_m$ is uniquely determined by this property. For $m = 1$, the induced isomorphism $K \to L$ is uniquely determined.

So the isomorphy type of $K$ is functorially determined by $G_K^4$ [@saiditamagawa2022, §0].

**Limits.** The statement fails for $G_K^1$, as shown by [the abelianized Galois group](abelian-galois-group-does-not-determine-number-field.md). The cases left open are recorded in [the metabelian problem](metabelian-neukirch-uchida-problem.md) and [the problem on sharp solvable length](optimal-solvable-length-problem.md).

**Local analogue.** For $p$-adic fields with ramification filtrations, see [the filtered m-step theorem](m-step-solvable-filtered-local-fields.md).
