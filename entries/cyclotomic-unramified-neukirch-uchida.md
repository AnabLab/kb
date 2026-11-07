---
title: Neukirch–Uchida for the maximal unramified extension of the maximal cyclotomic extension
kind: theorem
summary: Ozaki shows that if $L_i$ is the maximal unramified extension of $k_i(\mu_\infty)$ for number fields $k_i$, every isomorphism $\mathrm{Gal}(L_1/k_1) \to \mathrm{Gal}(L_2/k_2)$ comes from a unique field isomorphism. This is an analogue of the Grothendieck conjecture over finite fields.
tags: [number-fields, galois-groups]
edges:
  - {to: neukirch-uchida-theorem, label: analogous-to, note: "Described as a Neukirch–Uchida variant in [@karshonshusterman2026, §1]. Ozaki himself frames it through the Grothendieck conjecture over finite fields."}
  - {to: uchida-solvably-closed-theorem, label: analogous-to, note: "The final step adapts the method of Uchida [@ozaki2025, §3]."}
  - {to: arithmetic-equivalence-from-galois-isomorphism, label: analogous-to, note: "The first step is the same kind of statement, for these smaller groups [@ozaki2025, Proposition 1]."}
---

**Statement.** Let $k_1, k_2$ be number fields, and let $L_i$ be the maximal unramified extension of $k_i(\mu_\infty)$. For every isomorphism of profinite groups $\varphi : \mathrm{Gal}(L_1/k_1) \to \mathrm{Gal}(L_2/k_2)$, there is a unique field isomorphism $\tau : L_1 \to L_2$ with $\tau(k_1) = k_2$ and $\varphi(x) = \tau x \tau^{-1}$ for all $x$ [@ozaki2025, Theorem 1].

**Analogy.** Regard $k(\mu_\infty)/k$ as the analogue of the constant field extension of a function field over a finite field. Then the sequence $1 \to \mathrm{Gal}(L/k(\mu_\infty)) \to \mathrm{Gal}(L/k) \to \mathrm{Gal}(k(\mu_\infty)/k) \to 1$ is the analogue of the fundamental exact sequence of a proper curve [@ozaki2025, §1].

**Status of the source.** This entry cites an arXiv preprint, which has not been checked for publication or refereeing.
