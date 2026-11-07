---
title: Sharp solvable length in the m-step Neukirch–Uchida theorem
kind: problem
summary: Can the $m+3$ in the functorial m-step solvable Neukirch–Uchida theorem be lowered? Uniformly in $m \ge 0$ only $m+2$ could work, and its case $m = 0$ is the metabelian problem. For all large $m$, none of $m+i$ with $0 \le i \le 2$ is excluded by these arguments.
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: m-step-solvable-neukirch-uchida, label: motivated-by}
  - {to: metabelian-neukirch-uchida-problem, label: generalizes, note: "The metabelian problem is the case $m = 0$ of the first form below."}
---

**Question.** In [the functorial m-step theorem](m-step-solvable-neukirch-uchida.md), an isomorphism $G_K^{m+3} \to G_L^{m+3}$ induces a field isomorphism $K_m \to L_m$. Saïdi and Tamagawa ask whether $m+3$ can be replaced by $m+i$ for some $0 \le i < 3$, and describe this and [the metabelian problem](metabelian-neukirch-uchida-problem.md) as the best improvements one can hope for [@saiditamagawa2022, §0, Questions].

**Making this precise.** The source gives no range of $m$, and the following reformulation is this entry's own. Say that $G_K^{m+i}$ suffices if an isomorphism $G_K^{m+i} \to G_L^{m+i}$ induces on $G_K^m$ conjugation by a field isomorphism $K_m \to L_m$. Taken uniformly over all $m \ge 0$, the values $i = 0$ and $i = 1$ fail, because of [the abelianized Galois group](abelian-galois-group-does-not-determine-number-field.md): $G_K^1$ does not determine $K$. The remaining forms are:

- Does $G_K^{m+2}$ suffice for all $m \ge 0$?
- For which $0 \le i \le 2$ does $G_K^{m+i}$ suffice for all sufficiently large $m$?

One can also ask for the uniqueness of the field isomorphism, as in [@saiditamagawa2022, Theorem 2].

**Known.** In the [local setting with ramification filtrations](m-step-solvable-filtered-local-fields.md), the gap is smaller: a filtered isomorphism of $G_K^{n+2}$ determines a unique isomorphism of the maximal $n$-step solvable extensions for $n \ge 2$ [@hyeon2025, Theorem 1.3].

**Status.** A literature search in November 2026 found no answer, but that search was not exhaustive.
