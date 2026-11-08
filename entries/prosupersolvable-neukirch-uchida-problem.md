---
title: The prosupersolvable variant of Neukirch–Uchida
kind: problem
summary: 'Karshon and Shusterman suggested a prosupersolvable Neukirch–Uchida variant: is every isomorphism between the maximal prosupersolvable Galois quotients of two number fields induced by a unique isomorphism of field extensions? And, more weakly, does this quotient determine the number field?'
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: pro-l-by-cyclotomic-neukirch-uchida, label: motivated-by}
---

**Question.** Fix $\bar{\mathbb{Q}}$. For a number field $K \subset \bar{\mathbb{Q}}$, let $K^{\mathrm{ss}}$ be the compositum of the finite Galois extensions $M/K$ with $\mathrm{Gal}(M/K)$ supersolvable, and let $G_K^{\mathrm{ss}} = \mathrm{Gal}(K^{\mathrm{ss}}/K)$, the maximal prosupersolvable quotient of $G_K$. An *isomorphism of field extensions* $\sigma : K_1^{\mathrm{ss}}/K_1 \to K_2^{\mathrm{ss}}/K_2$ is a field isomorphism $\sigma : K_1^{\mathrm{ss}} \to K_2^{\mathrm{ss}}$ with $\sigma(K_1) = K_2$. It *induces* the isomorphism $g \mapsto \sigma g \sigma^{-1}$ from $G_{K_1}^{\mathrm{ss}}$ to $G_{K_2}^{\mathrm{ss}}$. Let $K_1, K_2$ be number fields.

1. *Weak form.* If $G_{K_1}^{\mathrm{ss}} \cong G_{K_2}^{\mathrm{ss}}$ as profinite groups, must $K_1 \cong K_2$?
2. *Functorial form.* Is every isomorphism of profinite groups $\alpha : G_{K_1}^{\mathrm{ss}} \to G_{K_2}^{\mathrm{ss}}$ induced by an isomorphism of field extensions $K_1^{\mathrm{ss}}/K_1 \to K_2^{\mathrm{ss}}/K_2$, and is that isomorphism unique?

A positive answer to question 2 would give one to question 1, since an inducing $\sigma$ restricts to an isomorphism $K_1 \to K_2$.

**History.** Karshon and Shusterman state the Neukirch–Uchida theorem, and their own variants of it, in the form of question 2: an isomorphism of profinite groups between the relevant quotients of $G_{K_1}$ and $G_{K_2}$ is induced by an isomorphism of field extensions, and it is unique [@karshonshusterman2026, §1, Theorems 1.1–1.3, pp. 1–2]. They deduce that the maximal pronilpotent-by-abelian quotient [determines $K$](pro-l-by-cyclotomic-neukirch-uchida.md), and recall that the maximal pronilpotent quotient does not [@karshonshusterman2026, §1, p. 1]. They then note that the maximal prosupersolvable quotient lies strictly between these two, and that the maximal pro-$\ell$ extension of $K(\mu_\ell)$ is prosupersolvable over $K$, being an extension of a pro-$\ell$ group by an abelian group of exponent dividing $\ell - 1$. They conclude that "these observations suggest the prosupersolvable Neukirch-Uchida variant as a direction for future research" [@karshonshusterman2026, §1, p. 2]. Question 2 is that variant. Question 1 is the weaker property, recovery of the isomorphism type of $K$, which is how their abstract describes their results [@karshonshusterman2026, Abstract, p. 1].

**Status.** Both questions are [answered in the graph](prosupersolvable-neukirch-uchida-weak-but-not-functorial.md), the first positively and the second negatively: the inducing isomorphism is unique when it exists, but it need not exist.
