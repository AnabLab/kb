---
title: Does the maximal prosupersolvable quotient determine a number field?
kind: problem
summary: 'Karshon and Shusterman suggest a prosupersolvable variant of Neukirch–Uchida. The maximal prosupersolvable quotient of $G_K$ does determine $K$ up to isomorphism (proved here). Open: whether every isomorphism of these quotients comes from a unique isomorphism of the fields.'
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: pro-l-by-cyclotomic-neukirch-uchida, label: motivated-by}
---

**Question.** Let $K, L$ be number fields. If the maximal prosupersolvable quotients of $G_K$ and $G_L$ are isomorphic as profinite groups, must $K \cong L$? And does an isomorphism of these quotients come from a unique isomorphism of the corresponding fields? This is a formulation of the variant proposed in [@karshonshusterman2026, §1].

**Known.** The maximal pronilpotent-by-abelian quotient [determines $K$](pro-l-by-cyclotomic-neukirch-uchida.md). The maximal prosupersolvable quotient lies strictly between that quotient and the maximal pronilpotent quotient. The maximal pro-$\ell$ extension of $K(\mu_\ell)$ is a prosupersolvable extension of $K$, which is the source of the suggestion [@karshonshusterman2026, §1].

**Progress.** The first question has a positive answer, proved here in [the prosupersolvable quotient determines a number field](prosupersolvable-quotient-determines-number-field.md) from Karshon and Shusterman's methods. For each prime $\ell$, an isomorphism of the quotients induces an isomorphism of the Galois groups of the maximal pro-$\ell$ extensions of the maximal abelian extensions of exponent dividing $\ell - 1$. That isomorphism comes from a unique isomorphism of field extensions, and these field isomorphisms agree on the base fields. The same entry shows that, in the second question, existence is equivalent to every automorphism of $G_K^{\mathrm{ss}}$ that is inner on each of these quotients being inner, and uniqueness is equivalent to $G_K^{\mathrm{ss}}$ having trivial centre.

**Status.** The second question is open as far as is known here. The source, from January 2026, poses the variant as a direction for future research. A literature search in November 2026 found no answer to either question before the entry above, but that search was not exhaustive.
