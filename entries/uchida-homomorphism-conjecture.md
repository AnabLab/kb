---
title: Uchida's conjecture on homomorphisms of Galois groups
kind: problem
summary: 'Uchida''s 1981 conjecture: for solvably closed Galois extensions $\Omega_i/k_i$ of number fields, does every continuous homomorphism $G_1 \to G_2$ with open image come from a unique embedding $\Omega_2 \to \Omega_1$? Uniqueness is Uchida''s. A 2026 manuscript, not peer reviewed, proves existence.'
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: uchida-solvably-closed-theorem, label: motivated-by, note: "Uchida asks whether the isomorphism can be replaced by a homomorphism [@uchida1981, p. 595]."}
---

**Conjecture.** Let $k_1, k_2$ be number fields, let $\Omega_i/k_i$ be solvably closed Galois extensions, and put $G_i = \mathrm{Gal}(\Omega_i/k_i)$. Let $\sigma : G_1 \to G_2$ be a continuous homomorphism such that $\sigma(G_1)$ is open in $G_2$. Then there is a unique injection of fields $\tau : \Omega_2 \to \Omega_1$ such that $\tau \cdot \sigma(g) = g \tau$ for all $g \in G_1$ [@uchida1981, Conjecture, p. 595].

Uchida notes that the conclusion means that $\tau(\Omega_2)$ is $G_1$-invariant, that $\tau(k_2) \subseteq k_1$, and that $k_1 \cdot \tau(\Omega_2)$ is the Galois extension of $k_1$ cut out by the kernel of $\sigma$, whose Galois group is then isomorphic to an open subgroup of $G_2$. So the conjecture extends [his isomorphism theorem](uchida-solvably-closed-theorem.md) to that extension, which need not be solvably closed [@uchida1981, p. 595]. No hypothesis is put on the kernel of $\sigma$.

With $\Omega_i$ algebraic closures of $k_i$, this is the Hom-form of the birational anabelian conjecture for number fields, as stated in [@coratosaidi2023, Introduction, p. 4].

**Known before 2026.** Uniqueness holds [@uchida1981, Proposition 2, p. 600], so the open part was existence. Existence holds when $k_1 = \mathbb{Q}$, for injective homomorphisms, under a condition on decomposition groups, and under compatibility with the cyclotomic characters, and there are $m$-step solvable versions. See [open homomorphisms](open-homomorphisms-number-fields.md).

**Equivalent forms.** Hoshi shows that the existence statement of the conjecture is equivalent to each of the following. In both, $F \subseteq K \subseteq \bar{\mathbb{Q}}$, the extension $F/\mathbb{Q}$ is finite, $K/F$ is Galois, and $\mathrm{Gal}(K/F)$ is isomorphic to an open subgroup of $G_{\mathbb{Q}}^{\mathrm{sol}}$, the [maximal prosolvable quotient](m-step-solvable-quotient.md) of $G_{\mathbb{Q}}$ [@hoshi2026, Theorem B, pp. 2–3].

- For all primes $l$ and all but finitely many primes $p$, every $l$-th root of $p$ in $\bar{\mathbb{Q}}$ lies in $K$.
- If $F/\mathbb{Q}$ is moreover Galois, then $K/\mathbb{Q}$ is Galois.

**History.** Sources before the 2026 manuscript treat the statement as open: [@coratosaidi2023, Introduction, p. 4], for absolute Galois groups, and [@hoshi2026, Introduction, Conjecture A, p. 2]. Mao and Saïdi call Uchida's result on decomposition groups a conditional solution [@maosaidi2025open, §1, p. 2].

**Status.** A manuscript credited to OpenAI and dated 5 October 2026 claims a proof of the conjecture as stated, including for infinite extensions and with no hypothesis on the kernel [@openai2026, Theorem 1.1, p. 1]. It is not peer reviewed. Its proof was checked step by step for this knowledgebase, and no gap was found: see [the resolving theorem](open-homomorphisms-of-solvably-closed-galois-groups-come-from-embeddings.md), which records the outline and the checks. A literature search in November 2026 found no refereed proof, but that search was not exhaustive.
