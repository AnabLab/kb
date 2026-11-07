---
title: Does the metabelian quotient determine a number field?
kind: problem
summary: 'If $K, L$ are number fields with $G_K^2 \cong G_L^2$ as profinite groups, must $K \cong L$? This is known for $G_K^3$ and false for $G_K^1$. It remained open as of 2023, despite a counterexample for the smaller class-2 nilpotent quotient.'
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: m-step-solvable-neukirch-uchida, label: motivated-by}
  - {to: abelian-galois-group-does-not-determine-number-field, label: motivated-by, note: "The same conclusion fails one step lower."}
  - {to: m-step-solvable-filtered-local-fields, label: analogous-to, note: "The local analogue holds once ramification filtrations are added."}
---

**Question.** Let $K, L$ be number fields and let $G_K^2, G_L^2$ be the [maximal metabelian quotients](m-step-solvable-quotient.md) of their absolute Galois groups. If $G_K^2 \cong G_L^2$ as profinite groups, must $K \cong L$ [@saiditamagawa2022, §0, Questions]?

**Known.**

- The answer is yes [for $G_K^3$](m-step-solvable-neukirch-uchida.md), and no [for $G_K^1$](abelian-galois-group-does-not-determine-number-field.md).
- The answer is no for [the maximal class-2 nilpotent quotient](two-step-nilpotent-not-anabelian.md), which is a quotient of $G_K^2$.
- From $G_K^2$ one can recover [part of the cyclotomic character](m-step-solvable-local-theory.md).
- For $p$-adic fields, [the filtered metabelian quotient](m-step-solvable-filtered-local-fields.md) determines the field.

**Status.** Koymans and Pagano state that the case of $2$-solvable quotients remains open [@koymanspagano2024, §1.3]. Their arXiv version is dated January 2023. A list of Neukirch–Uchida variants in a January 2026 preprint gives the three-step result and no metabelian one [@karshonshusterman2026, §1]. A literature search in November 2026 found no solution, but that search was not exhaustive.
