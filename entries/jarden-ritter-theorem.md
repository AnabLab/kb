---
title: Jarden–Ritter theorem on p-adic fields with isomorphic Galois groups
kind: theorem
summary: 'For finite $K, L/\mathbb{Q}_p$ with $\zeta_p \in K$ (and $\zeta_4 \in K$ if $p = 2$), $G_K \cong G_L$ holds exactly when $[K:\mathbb{Q}_p] = [L:\mathbb{Q}_p]$ and $K, L$ have the same maximal abelian subextension over $\mathbb{Q}_p$.'
tags: [local-fields, galois-groups]
edges:
  - {to: local-field-galois-invariants, label: uses, note: "Further numerical invariants are recovered in the same way in [@jardenritter1979, Lemma 1] and [@jardenritter1979, Corollary, p. 5]."}
  - {to: local-galois-group-presentations, label: uses, note: "Results of Jakovlev, Zel'venskii and Koch show that these invariants determine $G_K$ [@jardenritter1979, p. 6]."}
---

**Statement.** Let $K, L$ be finite extensions of $\mathbb{Q}_p$ inside a fixed algebraic closure, and let $K^0, L^0$ be their maximal subextensions abelian over $\mathbb{Q}_p$. Suppose $\zeta_p \in K$, and $\zeta_4 \in K$ if $p = 2$. Then $G_L \cong G_K$ if and only if $[L:\mathbb{Q}_p] = [K:\mathbb{Q}_p]$ and $L^0 = K^0$ [@jardenritter1979, p. 2]. The proof concludes at [@jardenritter1979, Theorem, p. 9].

**Method.** Under the hypothesis on roots of unity, $G_K$ is determined by $n = [K:\mathbb{Q}_p]$, the residue degree $f$, the number $r + d$ describing $p$-power roots of unity in the maximal tame extension, and a Frobenius number $s$. Local class field theory shows that $G_K$ determines these numbers. The paper then shows that they correspond exactly to the data of $n$ and $K^0$ [@jardenritter1979, Lemmas 5–7].

**Scope of the hypotheses.**

- The paper proves the theorem under the stated hypothesis on roots of unity, and defers the remaining case to a subsequent paper [@jardenritter1979, p. 2].
- One direction holds without the hypothesis: $G_K$ always determines $[K:\mathbb{Q}_p]$ and $K^0$ [@mochizuki1997, §1, Remark after Corollary 1.3].
- Equality of the subfields $K^0, L^0$ cannot be weakened to equality of their degrees. The fields $\mathbb{Q}_3(\zeta_3)$ and the unramified quadratic extension of $\mathbb{Q}_3$ are both abelian of degree $2$, but they have different residue degrees, so their absolute Galois groups differ by [@jardenritter1979, Lemma 1].

**Consequence.** The theorem gives [explicit counterexamples](nonisomorphic-p-adic-fields-with-isomorphic-galois-groups.md) to a naive local analogue of Neukirch–Uchida.
