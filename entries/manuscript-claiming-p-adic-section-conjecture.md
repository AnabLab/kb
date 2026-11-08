---
title: A 2026 manuscript claiming the p-adic section conjecture
kind: note
summary: An October 2026 OpenAI manuscript proves the p-adic section conjecture. Its local proof and global finite-descent deductions are checked here; its Selmer-corank-zero elliptic-target case additionally uses an unaudited companion theorem. Neither manuscript is peer reviewed.
tags: [curves, local-fields, section-conjecture]
edges:
  - {to: section-conjecture, label: addresses, note: "Proves the local analogue and global cases under a finite-descent equality. The deductions are checked in section-conjecture-from-finite-descent; the extra Selmer-converse input in Corollary 8.4 has not had its proof audited."}
  - {to: valuative-section-theorem-for-p-adic-curves, label: uses, note: "The proof starts from Pop–Stix localization [@openai2026padicsections, §7, pp. 16–18]."}
  - {to: birational-sections-over-local-fields, label: uses, note: "The proof applies Koenigsmann after lifting a localized section [@openai2026padicsections, Lemma 7.2, pp. 16–17]."}
---

**Local results.** For every finite $k/\mathbb Q_p$ and every smooth proper geometrically connected curve $X/k$ of genus at least two, the manuscript proves a bijection
$$
X(k)\longrightarrow
\{s:G_k\to\pi_1(X)\mid s\text{ is a continuous section}\}/\pi_1(X_{\bar k}),
$$
with conjugation by the full geometric group [@openai2026padicsections, Theorem 1.1, p. 2]. The main step is a completion theorem for the universal étale function field $\widetilde K$: its completion at every rank-one valuation extending the $p$-adic one contains the separable closure of $K = k(X)$ [@openai2026padicsections, Theorem 1.2, p. 3]. The deduction combines this with [Pop–Stix localization](valuative-section-theorem-for-p-adic-curves.md) and [Koenigsmann's theorem](birational-sections-over-local-fields.md) [@openai2026padicsections, Corollary 7.1, Lemma 7.2 and proof of Theorem 1.1, pp. 16–18].

Both results were checked here and are recorded, with an outline of the proofs and a list of the checks, as [the $p$-adic section theorem](p-adic-section-theorem.md) and [the completion theorem](completion-of-the-universal-etale-function-field.md).

**Global scope.** For a proper hyperbolic curve $C/F$ over a number field, the manuscript's global consequence assumes that the modified adelic locus surviving every finite-cover descent obstruction equals the diagonal $C(F)$ [@openai2026padicsections, Theorem 8.2, p. 20]. From descent results of Stoll, it derives this equality, and hence the global section conjecture, in two cases. The first is a curve with a nonconstant map to an abelian variety $A$ with $A(F)$ finite and trivial divisible part of its Tate–Shafarevich group, or whose Jacobian has these properties [@openai2026padicsections, Corollary 8.3, p. 20]. The second is the modular curves $X_0(N)$ and $X_1(N)$ over $\mathbb{Q}$ of genus at least two [@openai2026padicsections, Corollary 8.5, p. 21].

The further elliptic-target case, assuming Selmer corank zero at one prime, uses a companion theorem asserting rank zero and finiteness of the entire Tate–Shafarevich group [@openai2026padicsections, Corollary 8.4, p. 21]. The companion's statement matches this application, but its proof has not been audited here [@openai2026selmerconverse, Theorem 1.1, p. 3]. Section 8.3 also constrains every ordinary adelic representative of a localization tuple by linear descent and Brauer–Manin, and gives finite images at each finite place when $F$ contains no CM subfield [@openai2026padicsections, §8.3, p. 21].

**Verification status.** The local proofs were checked as described in their entries. The [finite-descent entry](section-conjecture-from-finite-descent.md) checks Proposition 8.1, Theorem 8.2 and Corollaries 8.3 and 8.5 against Harari–Stix, Stix and Stoll. It also checks §8.3 against Harari–Stix and Betts–Stix, including the ordinary-adelic and archimedean conventions. The deduction of Corollary 8.4 is checked conditional on its additional companion theorem; only that theorem's statement and hypotheses were checked. These audits do not prove the general finite-descent equality or the general global section conjecture. The hosting [repository's README](https://github.com/openai/math/blob/4eaee87548250b2682affda7d05d947c05554bae/README.md) presents the collection as research data and warns that unformalized results may contain issues. Its previously opened [formalization catalogue](https://github.com/openai/math/blob/4eaee87548250b2682affda7d05d947c05554bae/lean/formalization.yaml) does not list this paper. Neither manuscript is peer reviewed.
