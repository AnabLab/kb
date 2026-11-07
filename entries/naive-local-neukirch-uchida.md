---
title: Naive local analogue of the Neukirch–Uchida theorem
kind: idea
summary: The claim that isomorphic absolute Galois groups force isomorphic $p$-adic fields, or that every isomorphism of these groups comes from a field isomorphism. This is false, and the entry records the failed analogy.
tags: [local-fields, galois-groups]
edges:
  - {to: neukirch-uchida-theorem, label: motivated-by}
---

**Idea.** Transfer the [Neukirch–Uchida theorem](neukirch-uchida-theorem.md) to finite extensions of $\mathbb{Q}_p$, in a weak form ($G_K \cong G_L$ implies $K \cong L$) and in a functorial form (every isomorphism $G_K \to G_L$ arises from a field isomorphism).

**Known.** Both forms are false, by [explicit counterexamples](nonisomorphic-p-adic-fields-with-isomorphic-galois-groups.md). The functorial form fails even for a single field: when $p$ is odd, every finite extension of $\mathbb{Q}_p$ has an outer automorphism of its absolute Galois group that does not arise from a field automorphism [@hoshi2019, Remark 1.4.1]. Mochizuki reports setting out to prove the naive version and discovering that it is false [@mochizuki1997, §0, Historical Remark].

In characteristic $p$, the weak form does hold: for local fields of positive characteristic with finite residue fields, isomorphic abelianized Galois groups already imply that the fields are isomorphic [@yamagata1976, Remark]. See also [@jardenritter1979, p. 2].

**Speculative.** Nothing remains open in this form. The live question is which extra structure on $G_K$ restores the theorem, and the [ramification filtration](mochizuki-local-fields-theorem.md) is one answer.

**Would fail if.** It does fail, as shown by the counterexamples above.
