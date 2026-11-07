---
title: Uchida's conjecture on homomorphisms of Galois groups
kind: problem
summary: For solvably closed Galois extensions of number fields, must every continuous homomorphism with open image between their Galois groups come from a unique injection of the fields? This is Uchida's 1981 conjecture. A 2026 manuscript, not peer reviewed, claims a proof.
tags: [number-fields, galois-groups]
edges:
  - {to: uchida-solvably-closed-theorem, label: motivated-by, note: "Uchida asks whether the isomorphism can be replaced by a homomorphism [@uchida1981, p. 595]."}
---

**Conjecture.** Let $k_1, k_2$ be number fields, let $\Omega_i/k_i$ be solvably closed Galois extensions, and put $G_i = \mathrm{Gal}(\Omega_i/k_i)$. Let $\sigma : G_1 \to G_2$ be a continuous homomorphism such that $\sigma(G_1)$ is open in $G_2$. Then there is a unique injection of fields $\tau : \Omega_2 \to \Omega_1$ such that $\tau \cdot \sigma(g) = g \tau$ for all $g \in G_1$ [@uchida1981, Conjecture, p. 595].

**Known.** Uniqueness holds, the case $k_1 = \mathbb{Q}$ holds, and the conjecture holds for injective homomorphisms, under a condition on decomposition groups, and under compatibility with cyclotomic characters. See [open homomorphisms](open-homomorphisms-number-fields.md).

**Equivalent forms.** Hoshi shows that the existence statement of the conjecture is equivalent to each of the following. In both, $F \subseteq K \subseteq \bar{\mathbb{Q}}$, the extension $F/\mathbb{Q}$ is finite, $K/F$ is Galois, and $\mathrm{Gal}(K/F)$ is isomorphic to an open subgroup of $G_{\mathbb{Q}}^{\mathrm{sol}}$, the [maximal prosolvable quotient](m-step-solvable-quotient.md) of $G_{\mathbb{Q}}$ [@hoshi2026, Theorem B].

- For all primes $l$ and all but finitely many primes $p$, every $l$-th root of $p$ in $\bar{\mathbb{Q}}$ lies in $K$.
- If $F/\mathbb{Q}$ is moreover Galois, then $K/\mathbb{Q}$ is Galois.

**Status.** A manuscript credited to OpenAI and dated 5 October 2026 claims a proof of the conjecture in full, including for infinite extensions and with no hypothesis on the kernel [@openai2026, Theorem 1.1]. It is not peer reviewed, and this entry does not record it as established. The [repository](https://github.com/openai/math) that hosts it says that some of its unformalized results could have issues, and its formalization catalogue listed nothing for this manuscript in November 2026.

Earlier sources treat the statement as a conjecture: [@coratosaidi2023, Introduction], for absolute Galois groups, and [@hoshi2026, Introduction]. The work in [@maosaidi2025open, §1] is conditional in the same way. A literature search in November 2026 found no refereed proof, but that search was not exhaustive.
