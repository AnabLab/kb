---
title: Global class field theory and reciprocity kernels
kind: theorem
summary: 'Global reciprocity classifies finite abelian extensions by open norm subgroups of the idele class group. For number fields its kernel is the identity component; for function fields the idele class group injects densely into the abelianized Galois group.'
tags: [number-fields, function-fields, galois-groups]
edges:
  - {to: local-class-field-theory, label: uses, note: "The global Artin map restricts at each nonarchimedean place to local reciprocity followed by the decomposition-group map."}
---

**Setting.** Let $K$ be a global field. Its idele group is $I_K=\prod'_v K_v^\times$, restricted with respect to $\mathcal O_v^\times$ at nonarchimedean places; put $C_K=I_K/K^\times$ with the quotient topology. For number fields these definitions are in [@milnecft, Chapter V, §4, pp. 168–171]; for function fields see [@milne2006adt, Chapter I, Appendix A, p. 132].

**Reciprocity and existence.** The continuous global Artin map

$$\mathrm{rec}_K:I_K\longrightarrow G_K^{\mathrm{ab}}$$

restricts to local reciprocity at each place, followed by the decomposition-group map, and kills diagonal $K^\times$. Milne's Chapter V is stated for number fields [@milnecft, Chapter V, p. 147]; the map and these properties are Proposition 5.2 and Theorem 5.3 there [@milnecft, Chapter V, pp. 178–179]. The function-field construction from local reciprocity and its vanishing on $K^\times$ are given separately in [@milne2006adt, Chapter I, Appendix A, construction preceding Lemma A.10 and Lemma A.10, pp. 133–134]. For every finite abelian $L/K$ it induces

$$C_K/N_{L/K}(C_L)\xrightarrow{\sim}\mathrm{Gal}(L/K).$$

For number fields this is [@milnecft, Chapter V, Theorem 5.3(b), p. 179]; for function fields it is the finite-quotient reciprocity isomorphism in [@milne2006adt, Chapter I, proof of Theorem 1.3 and Example 1.6(c), pp. 18–19; Appendix A, Corollary A.9, p. 133].

The assignment $L\mapsto N_{L/K}(C_L)$ bijects finite abelian extensions in a fixed separable closure with open finite-index subgroups of $C_K$, reversing inclusions. Milne explicitly states that the existence theorem is valid for all global fields [@milnecft, Chapter V, Theorem 5.5, the paragraph following it, and Corollary 5.6, p. 179].

**Infinite-level distinction.** For a number field, reciprocity induces an isomorphism

$$C_K/C_K^0\xrightarrow{\sim}G_K^{\mathrm{ab}},$$

where $C_K^0$ is the identity component. For imaginary quadratic $K$, this component is the image of the single archimedean factor $\mathbb C^\times$ [@angelakisstevenhagen2013, §2, p. 3]. For a global function field, $C_K\to G_K^{\mathrm{ab}}$ is injective with dense proper image; thus $\ker(\mathrm{rec}_K:I_K\to G_K^{\mathrm{ab}})=K^\times$ [@milnecft, Chapter V, Remark 5.7, pp. 179–180].

**Anabelian use.** For a curve over a finite field $k$, [Tamagawa's affine-curve reconstruction](tamagawa-grothendieck-conjecture-for-affine-curves.md) recovers $K^\times$ from a reciprocity kernel after quotienting the local factors at points of the affine curve. The nonempty boundary is essential: the proper-curve version gives only $K^\times/k^\times$ [@tamagawa1997, proof of Theorem (4.3), pp. 165–166].
