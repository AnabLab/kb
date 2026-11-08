---
title: Positive-characteristic higher local fields from absolute Galois groups
kind: theorem
summary: 'Murotani shows that a positive-dimensional higher local field of positive characteristic is determined up to field isomorphism by its absolute Galois group alone, by recovering its dimension and final residue-field cardinality. This is a weak Isom theorem.'
tags: [local-fields, galois-groups, positive-characteristic, reconstruction-algorithms]
edges:
  - {to: two-dimensional-local-grothendieck-theorem-characteristic-p, label: analogous-to, note: 'Here the field isomorphism class is recovered without ramification or P-topology data; the target identifies compatible automorphisms.'}
  - {to: local-field-galois-invariants, label: analogous-to, note: 'Both recover numerical local-field invariants from the absolute Galois group.'}
---

**Fields.** A $d$-dimensional local field has a chain $K=K_d,\ldots,K_0$ of successive complete discrete valuation fields ending in $K_0=\mathbb F_q$. In positive characteristic it has the form
$$K\cong\mathbb F_q((t_1))\cdots((t_d))$$
[@murotani2023higher, Definition 1.1 and Theorem 1.3(i), pp. 5–6].

**Theorem (Murotani).** For such fields $K,L$ of positive dimensions, an isomorphism of profinite groups $G_K\cong G_L$ implies $K\cong L$. No ramification filtration is supplied. This determines the field's isomorphism class; it does not identify the given group isomorphism with a field map [@murotani2023higher, Theorem 2.16 and Remark 2.17, p. 14].

**Reconstruction.** Put $G=G_K$, and write $G(\ell)$ for the maximal pro-$\ell$ quotient. The characteristic $p$ is the unique prime for which $G(p)$ is not topologically finitely generated [@murotani2023higher, Proposition 1.12, pp. 9–10]. For $\ell\ne p$, let $\ell^{a_\ell(G)}$ be the torsion exponent of $G(\ell)^{\mathrm{ab}}$. Then
$$
q=1+\prod_{\ell\ne p}\ell^{a_\ell(G)},\qquad
d=\max_{\substack{\ell\ne p\\H\subseteq G\text{ open}}}
\dim_{\mathbb F_\ell}H^1(H,\mathbb F_\ell)-1.
$$
Only finitely many product factors differ from $1$ [@murotani2023higher, Lemma 2.5, Definitions 2.6 and 2.8, and Theorem 2.15(i), pp. 11–13].

**Dimension zero.** Finite fields are excluded: their absolute Galois groups are all $\widehat{\mathbb Z}$ [@murotani2023higher, Proposition 2.1(i), p. 11].

Locations refer to the March 2021 RIMS-1944 preprint.
