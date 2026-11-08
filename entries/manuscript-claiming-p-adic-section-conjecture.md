---
title: A 2026 manuscript claiming the p-adic section conjecture
kind: note
summary: An October 2026 manuscript credited to OpenAI claims the full p-adic section conjecture via a completion theorem for the universal etale tower. It is recorded as an unchecked claim, with a separate finite-descent hypothesis for its global consequence.
tags: [curves, local-fields, section-conjecture]
edges:
  - {to: section-conjecture, label: addresses, note: "Claims the local analogue and conditional global cases; no proof is established here."}
  - {to: valuative-section-theorem-for-p-adic-curves, label: uses, note: "The proposed proof starts from Pop–Stix localization [@openai2026padicsections, §7, pp. 16–18]."}
  - {to: birational-sections-over-local-fields, label: uses, note: "The proposed proof applies Koenigsmann after lifting a localized section [@openai2026padicsections, Lemma 7.2, pp. 16–17]."}
---

**Claim.** For every finite $k/\mathbb Q_p$ and every smooth proper geometrically connected curve $X/k$ of genus at least two, the manuscript claims a bijection
$$
X(k)\longrightarrow
\{s:G_k\to\pi_1(X)\mid s\text{ is a continuous section}\}/\pi_1(X_{\bar k}),
$$
with conjugation by the full geometric group [@openai2026padicsections, Theorem 1.1, p. 2].

**Proposed bridge.** Put $K=k(X)$ and let $\widetilde K\subset K^{\mathrm{sep}}$ be the universal étale function field. For every real-valued rank-one norm extending the $p$-adic norm, with a fixed prolongation to $K^{\mathrm{sep}}$, the central assertion is
$$
K^{\mathrm{sep}}\subseteq\widehat{\widetilde K}
\quad\text{inside }\widehat{K^{\mathrm{sep}}}
$$
[@openai2026padicsections, Theorem 1.2, p. 3]. The resulting identification of rank-one decomposition groups would supply birational lifts; the argument combines [Pop–Stix localization](valuative-section-theorem-for-p-adic-curves.md) with [Koenigsmann's theorem](birational-sections-over-local-fields.md), leaving the rational-point case [@openai2026padicsections, Corollary 7.1, Lemma 7.2 and proof of Theorem 1.1, pp. 16–18].

**Global scope.** For a proper hyperbolic curve $C/F$ over a number field, the claimed global consequence assumes that the modified adelic locus surviving every finite-cover descent obstruction equals the diagonal $C(F)$ [@openai2026padicsections, Theorem 8.2, p. 20].

**Verification status.** The statements and the proposed bridge above were checked in the manuscript dated 6 October 2026. The completion argument in §§3–6 has not been independently verified here. The hosting [repository's README](https://github.com/openai/math/blob/4eaee87548250b2682affda7d05d947c05554bae/README.md) presents the collection as research data and warns that unformalized results may contain issues. Its opened [formalization catalogue](https://github.com/openai/math/blob/4eaee87548250b2682affda7d05d947c05554bae/lean/formalization.yaml) does not list this paper. This entry records a manuscript claim, not an established theorem.
