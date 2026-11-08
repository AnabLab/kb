---
title: The prosupersolvable Neukirch–Uchida variant holds weakly but not functorially
kind: theorem
summary: 'Number fields with isomorphic maximal prosupersolvable Galois quotients are isomorphic, and an isomorphism of these quotients is induced by at most one isomorphism of field extensions. But for every number field $K$ some automorphisms of $G_K^{\mathrm{ss}}$ are induced by none.'
tags: [number-fields, galois-groups, solvable-quotients, counterexample]
edges:
  - {to: prosupersolvable-neukirch-uchida-problem, label: resolves, note: "Part 1 answers question 1 positively. Parts 2 and 3 answer question 2 negatively: uniqueness holds and existence fails."}
  - {to: prosupersolvable-quotient-determines-number-field, label: uses, note: "part 1"}
  - {to: automorphisms-of-maximal-prosupersolvable-galois-groups, label: uses, note: "parts 2 and 3"}
  - {to: isomorphisms-of-maximal-prosupersolvable-galois-groups, label: uses, note: "part 4"}
---

**Setting.** Notation is as in [the prosupersolvable problem](prosupersolvable-neukirch-uchida-problem.md): $K^{\mathrm{ss}}$ is the maximal prosupersolvable extension of a number field $K$ inside a fixed $\bar{\mathbb{Q}}$, and $G_K^{\mathrm{ss}} = \mathrm{Gal}(K^{\mathrm{ss}}/K)$. An isomorphism of field extensions $\sigma : K_1^{\mathrm{ss}}/K_1 \to K_2^{\mathrm{ss}}/K_2$ is a field isomorphism with $\sigma(K_1) = K_2$, and it induces $g \mapsto \sigma g \sigma^{-1}$. An *automorphism of the extension* $K^{\mathrm{ss}}/K$ is the case $K_1 = K_2 = K$. It need not fix $K$ pointwise. For a prime $\ell$, as in [centre and automorphisms of the maximal prosupersolvable Galois group](automorphisms-of-maximal-prosupersolvable-galois-groups.md):

- $E_\ell(K)$ is the maximal abelian extension of $K$ of exponent dividing $\ell - 1$;
- $\Omega_\ell(K)$ is the maximal pro-$\ell$ extension of $E_\ell(K)$;
- $K^{\mathrm{ab}}(2)$ is the maximal abelian pro-$2$ extension of $K$.

**Theorem.** This is proved here by combining three entries in the graph. Let $K, K_1, K_2$ be number fields.

1. *Weak form.* If $G_{K_1}^{\mathrm{ss}} \cong G_{K_2}^{\mathrm{ss}}$ as profinite groups, then $K_1 \cong K_2$.
2. *Uniqueness.* Each isomorphism of profinite groups $\alpha : G_{K_1}^{\mathrm{ss}} \to G_{K_2}^{\mathrm{ss}}$ is induced by at most one isomorphism of field extensions $K_1^{\mathrm{ss}}/K_1 \to K_2^{\mathrm{ss}}/K_2$.
3. *Existence fails.* There is an injective homomorphism $\mathrm{Gal}(K^{\mathrm{ab}}(2)/K) \to \mathrm{Out}(G_K^{\mathrm{ss}})$. For $g \ne 1$, no automorphism of $G_K^{\mathrm{ss}}$ in the image class of $g$ is induced by an automorphism of the extension $K^{\mathrm{ss}}/K$. In particular, for every $K$ some automorphism of $G_K^{\mathrm{ss}}$ is induced by no automorphism of $K^{\mathrm{ss}}/K$.
4. *How far it fails.* An isomorphism $G_{K_1}^{\mathrm{ss}} \to G_{K_2}^{\mathrm{ss}}$ is the same as a family of isomorphisms of field extensions $\Omega_\ell(K_1)/K_1 \to \Omega_\ell(K_2)/K_2$, one for each prime $\ell$, whose restrictions to $K_1$ are all equal. The isomorphism given by such a family $(\sigma_\ell)_\ell$ is induced by an isomorphism of field extensions $K_1^{\mathrm{ss}}/K_1 \to K_2^{\mathrm{ss}}/K_2$ if and only if some isomorphism $s : K_1^{\mathrm{ab}} \to K_2^{\mathrm{ab}}$ agrees with $\sigma_\ell$ on $\Omega_\ell(K_1) \cap K_1^{\mathrm{ab}}$ for every $\ell$. Moreover $\mathrm{Out}(G_K^{\mathrm{ss}}) \cong \bigl(\prod_\ell \mathrm{Gal}(E_\ell(K)/K)\bigr) \rtimes \mathrm{Aut}(K)$, and the classes induced by automorphisms of $K^{\mathrm{ss}}/K$ form exactly the complement $\mathrm{Aut}(K)$.

**Answer to the problem.** Part 1 answers question 1 of [the problem](prosupersolvable-neukirch-uchida-problem.md) positively. Parts 2 and 3 answer question 2 negatively. An inducing isomorphism of field extensions is unique when it exists, but it need not exist, already for $K_1 = K_2 = K$, and this happens for every number field $K$. Part 4 says exactly which isomorphisms are induced by isomorphisms of field extensions.

**Proof.**

- *Part 1* is part 2 of [the prosupersolvable quotient determines a number field](prosupersolvable-quotient-determines-number-field.md).
- *Part 2* is part 3 of [centre and automorphisms of the maximal prosupersolvable Galois group](automorphisms-of-maximal-prosupersolvable-galois-groups.md). Its proof there, in Step 8, shows that two inducing isomorphisms differ by an automorphism of $K_1^{\mathrm{ss}}$ that fixes $K_1$ pointwise and is central in $G_{K_1}^{\mathrm{ss}}$. That centre is trivial by part 2 there.
- *Part 3* is part 4 of the same entry. For the last sentence, $\mathrm{Gal}(K^{\mathrm{ab}}(2)/K)$ is nontrivial, since it has the infinite quotient $\mathrm{Gal}(K(\mu_{2^\infty})/K)$: the degrees $[\mathbb{Q}(\mu_{2^n}) : \mathbb{Q}] = 2^{n-1}$ are unbounded and $K$ has finite degree. For $g \ne 1$, lift it to $\tilde g \in \mathrm{Gal}(\Omega_2(K)/K)$, which is possible because $K^{\mathrm{ab}}(2) \subseteq \Omega_2(K)$. The automorphism $\alpha_{\tilde g}$ of that entry lies in the class of $g$. That entry says no field automorphism of $K^{\mathrm{ss}}$ induces an automorphism in this class, and an automorphism of the extension $K^{\mathrm{ss}}/K$ is in particular a field automorphism.
- *Part 4* is parts 2–4 of [isomorphisms of maximal prosupersolvable Galois groups](isomorphisms-of-maximal-prosupersolvable-galois-groups.md). $\square$

**Status of the inputs.** Parts 1 and 4 rest on Karshon and Shusterman's Theorem 9.4 [@karshonshusterman2026, Theorem 9.4, p. 19], as adapted in [the entry for part 1](prosupersolvable-quotient-determines-number-field.md). That input is an arXiv preprint of January 2026 and has not been independently audited here. Parts 2 and 3, and so the negative answer to question 2, do not use it. Their proofs use Kummer theory, the approximation theorem and Chebotarev's theorem.

A literature search in November 2026, which was not exhaustive, found no answer to either question earlier than these entries.
