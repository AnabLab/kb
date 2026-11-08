---
title: The prosupersolvable variant of Neukirch–Uchida
kind: theorem
summary: 'Karshon and Shusterman suggested a prosupersolvable Neukirch–Uchida theorem. Answer, proved in the graph: the maximal prosupersolvable quotient of $G_K$ determines a number field $K$, and a field isomorphism inducing a given isomorphism of these quotients is unique, but it need not exist.'
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: pro-l-by-cyclotomic-neukirch-uchida, label: motivated-by}
  - {to: prosupersolvable-quotient-determines-number-field, label: uses, note: "part 1"}
  - {to: automorphisms-of-maximal-prosupersolvable-galois-groups, label: uses, note: "part 2"}
  - {to: isomorphisms-of-maximal-prosupersolvable-galois-groups, label: uses, note: "part 3"}
---

**Question.** Let $K, L$ be number fields. If the maximal prosupersolvable quotients of $G_K$ and $G_L$ are isomorphic as profinite groups, must $K \cong L$? And does an isomorphism of these quotients come from a unique isomorphism of the corresponding fields? This is a formulation of the variant proposed in [@karshonshusterman2026, §1].

**Context.** The maximal pronilpotent-by-abelian quotient [determines $K$](pro-l-by-cyclotomic-neukirch-uchida.md). The maximal prosupersolvable quotient lies strictly between that quotient and the maximal pronilpotent quotient. The maximal pro-$\ell$ extension of $K(\mu_\ell)$ is a prosupersolvable extension of $K$, which is the source of the suggestion [@karshonshusterman2026, §1].

**Answer.** Both questions are settled in the graph, the first positively and the second negatively. Write $G_K^{\mathrm{ss}}$ for the maximal prosupersolvable quotient, and let $K, K_1, K_2$ be number fields.

1. *The weak form holds.* If $G_{K_1}^{\mathrm{ss}} \cong G_{K_2}^{\mathrm{ss}}$, then $K_1 \cong K_2$. This is [the prosupersolvable quotient determines a number field](prosupersolvable-quotient-determines-number-field.md).
2. *The functorial form fails.* Each isomorphism $G_{K_1}^{\mathrm{ss}} \to G_{K_2}^{\mathrm{ss}}$ is induced by at most one field isomorphism $K_1^{\mathrm{ss}} \to K_2^{\mathrm{ss}}$, because $G_K^{\mathrm{ss}}$ has trivial centre. But for every $K$, $\mathrm{Out}(G_K^{\mathrm{ss}})$ contains a copy of $\mathrm{Gal}(K^{\mathrm{ab}}(2)/K)$, and no nontrivial element of it is induced by a field automorphism. This is parts 2–4 of [centre and automorphisms of the maximal prosupersolvable Galois group](automorphisms-of-maximal-prosupersolvable-galois-groups.md).
3. *How far it fails.* An isomorphism $G_{K_1}^{\mathrm{ss}} \to G_{K_2}^{\mathrm{ss}}$ is the same as a family of isomorphisms of field extensions $\Omega_\ell(K_1)/K_1 \to \Omega_\ell(K_2)/K_2$, one for each prime $\ell$, with a common restriction to $K_1$. It comes from a field isomorphism exactly when their restrictions to the fields $\Omega_\ell(K_1) \cap K_1^{\mathrm{ab}}$ are all restrictions of one isomorphism $K_1^{\mathrm{ab}} \to K_2^{\mathrm{ab}}$. And $\mathrm{Out}(G_K^{\mathrm{ss}}) \cong \bigl(\prod_\ell \mathrm{Gal}(E_\ell(K)/K)\bigr) \rtimes \mathrm{Aut}(K)$, where the field-induced classes form the complement $\mathrm{Aut}(K)$. This is [isomorphisms of maximal prosupersolvable Galois groups](isomorphisms-of-maximal-prosupersolvable-galois-groups.md), which defines $\Omega_\ell(K)$ and $E_\ell(K)$.

**Status of the inputs.** Part 1, and the identification of all isomorphisms in part 3, rest on Karshon and Shusterman's Theorem 9.4, adapted in the entry for part 1. That input is an arXiv preprint of January 2026 and has not been independently audited here. Part 2 does not use it: its proof uses Kummer theory, approximation and Chebotarev's theorem.

A literature search in November 2026, which was not exhaustive, found no answer to either question earlier than these entries.
