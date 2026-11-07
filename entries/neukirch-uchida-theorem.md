---
title: Neukirch–Uchida theorem
kind: theorem
summary: For number fields, every isomorphism of absolute Galois groups is induced by a unique isomorphism of algebraic closures carrying one field to the other. In particular, a number field is determined up to isomorphism by its absolute Galois group.
tags: [number-fields, galois-groups]
edges:
  - {to: neukirch-local-theory, label: uses, note: "The normal case [@neukirch1977, Lemma 4] rests on the proof of [@neukirch1977, Lemma 3], and the theorem's proof uses the normal case."}
  - {to: uchida-global-function-fields, label: analogous-to, note: "The weak form for function fields of one variable over finite constant fields; see the target for what has been checked."}
---

**Statement.** Let $K, L$ be number fields with algebraic closures $\bar K, \bar L$ and absolute Galois groups $G_K, G_L$. For every isomorphism of profinite groups $\tau : G_K \to G_L$ there is a unique field isomorphism $\sigma : \bar K \to \bar L$ with $\tau(g) = \sigma g \sigma^{-1}$ for all $g \in G_K$. In particular $\sigma(K) = L$ [@saiditamagawa2022, §0, Neukirch-Uchida Theorem].

Inside a fixed $\bar{\mathbb{Q}}$, this says that every topological isomorphism $G_{K_1} \to G_{K_2}$ is induced by an inner automorphism of $G_{\mathbb{Q}}$ [@neukirch1977, Theorem, p. 74].

**Attribution.** Neukirch showed that normal number fields with isomorphic absolute Galois groups are isomorphic, which led to the conjecture that $G_{\mathbb{Q}}$ has only inner automorphisms. After preliminary work of Kanno and Komatsu, Uchida solved this in a stronger form. Ikeda independently proved the conjecture, and Iwasawa greatly simplified Ikeda's proof, obtaining essentially Uchida's results [@neukirch1977, Einleitung, p. 67]. See also [@uchida1976, p. 617].

**Related.**

- The theorem holds more generally for [solvably closed Galois extensions](uchida-solvably-closed-theorem.md).
- It fails for [the abelianized Galois group](abelian-galois-group-does-not-determine-number-field.md). For [small solvable quotients](m-step-solvable-neukirch-uchida.md), a weak form holds for $G_K^3$ and a functorial form holds three steps down.
- Its naive [local analogue is false](naive-local-neukirch-uchida.md).
- The analogue for [finitely generated fields](pop-mochizuki-finitely-generated-fields.md) is due to Pop and Mochizuki [@koymanspagano2024, §1.1].
- Variants treat [open homomorphisms](open-homomorphisms-number-fields.md) and [restricted ramification](restricted-ramification-neukirch-uchida.md).
