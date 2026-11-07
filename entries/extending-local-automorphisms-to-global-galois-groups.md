---
title: Extending automorphisms of decomposition groups to the global Galois group
kind: theorem
summary: For a number field $F$ Galois over $\mathbb{Q}$, an automorphism of a decomposition group in $G_F$ at a nonarchimedean prime extends to an automorphism of $G_F$ exactly when it is compatible with the ramification filtration. This links the local and global theories.
tags: [number-fields, local-fields, galois-groups, ramification]
edges:
  - {to: abrashkin-local-grothendieck-theorem, label: uses, note: "For the 'if' direction. Mochizuki's theorem serves equally, since these local fields have characteristic $0$."}
  - {to: neukirch-uchida-theorem, label: uses, note: "For the 'only if' direction, in the sketch given in this entry."}
  - {to: neukirch-local-theory, label: uses, note: "For the 'only if' sketch in this entry."}
  - {to: ramification-filtration, label: uses}
---

**Statement.** Let $F$ be a number field, Galois over $\mathbb{Q}$, and let $\Gamma_{\bar{\mathfrak{p}}} = \mathrm{Gal}(\bar F_{\bar{\mathfrak{p}}} / F_{\mathfrak{p}}) \subset G_F$ be the decomposition group of a prime $\bar{\mathfrak{p}}$ of $\bar F$ over a nonarchimedean prime $\mathfrak{p}$. An automorphism of $\Gamma_{\bar{\mathfrak{p}}}$ extends to an automorphism of $G_F$ if and only if it is compatible with the ramification filtration [@abrashkin2010, Introduction, Criterion].

**The "if" direction.** By the local analogue of the Grothendieck conjecture, the automorphism is induced by a field automorphism $\bar\mu$ of $\bar F_{\bar{\mathfrak{p}}}$. Then $\bar\mu$ preserves $\bar{\mathbb{Q}}$, hence $\bar F$, and it preserves $F$ because $F$ is Galois over $\mathbb{Q}$. So $\bar\mu$ induces the required automorphism of $G_F$ [@abrashkin2010, Introduction].

**The "only if" direction.** The source does not spell this out. A sketch: by the [Neukirch–Uchida theorem](neukirch-uchida-theorem.md), an automorphism of $G_F$ is conjugation by a field automorphism of $\bar F$. If it preserves $\Gamma_{\bar{\mathfrak{p}}}$, then that field automorphism fixes $\bar{\mathfrak{p}}$, by the [bijection between primes and decomposition groups](neukirch-local-theory.md). It therefore extends continuously to the completion, and so it preserves the filtration.

**Question.** Abrashkin asks how global information about the embedding of a decomposition group into $G_F$ is reflected in local properties of its ramification filtration [@abrashkin2010, Introduction].
