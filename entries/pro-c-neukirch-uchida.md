---
title: Shimizu's pro-C Neukirch–Uchida theorem
kind: theorem
summary: 'For a full class C of finite groups whose prime orders have positive upper Dirichlet density, Shimizu shows that every isomorphism between maximal pro-C Galois groups of number fields comes from a unique field isomorphism. For pro-p quotients this is conjectural.'
tags: [number-fields, galois-groups]
edges:
  - {to: neukirch-uchida-theorem, label: generalizes, note: "Take $\\mathcal C$ to be the class of all finite groups, so that $\\Sigma(\\mathcal C)$ is the set of all primes."}
  - {to: uchida-solvably-closed-theorem, label: generalizes, note: "Corollary 7.3 with $\\Sigma$ the set of all primes; Shimizu calls it a generalization of Uchida's theorem [@shimizu2023proc, p. 29]."}
  - {to: restricted-ramification-neukirch-uchida, label: analogous-to, note: "Same author and method: a local correspondence of decomposition groups, then field isomorphisms by modifying Uchida's argument and [@shimizu2023, Proposition 2.1] [@shimizu2023proc, §0, p. 2]."}
  - {to: chebotarev-density-theorem, label: uses, note: "For example in the proof that centralizers are trivial [@shimizu2023proc, Proposition 1.5, p. 6]."}
---

**Setting.** Let $K$ be a number field and $\mathcal C$ a full class of finite groups. Write $K^{\mathcal C}$ for the maximal pro-$\mathcal C$ Galois extension of $K$ and $G_K^{\mathcal C}$ for its Galois group, the maximal pro-$\mathcal C$ quotient of $G_K$. Let $\Sigma(\mathcal C)$ be the set of primes $p$ with $\mathbb Z/p \in \mathcal C$, and call $\mathcal C$ nontrivial if $\Sigma(\mathcal C) \neq \emptyset$ [@shimizu2023proc, Notation, p. 3]. Examples are the class $(\Sigma)$ of finite groups whose order is divisible only by primes in a set $\Sigma$ [@shimizu2023proc, Notation, p. 3], which for $\Sigma$ the set of all primes is the class of all finite groups; the solvable groups in $(\Sigma)$ [@shimizu2023proc, proof of Corollary 7.3, p. 29]; and all finite $p$-groups [@shimizu2023proc, Abstract, p. 1]. A field isomorphism $\tau : K_2^{\mathcal C_2} \to K_1^{\mathcal C_1}$ with $\tau(K_2) = K_1$ induces an isomorphism $G_{K_1}^{\mathcal C_1} \to G_{K_2}^{\mathcal C_2}$ by conjugation. The set of such $\tau$ is written $\mathrm{Iso}(K_2^{\mathcal C_2}/K_2, K_1^{\mathcal C_1}/K_1)$ [@shimizu2023proc, Notation, p. 4].

**Theorem.** Let $K_1, K_2$ be number fields and $\mathcal C_1, \mathcal C_2$ nontrivial full classes of finite groups. Assume that for one $i$ the set $\Sigma(\mathcal C_i)$ of rational primes has positive upper Dirichlet density. Then the canonical map
$$
\mathrm{Iso}(K_2^{\mathcal C_2}/K_2,\, K_1^{\mathcal C_1}/K_1) \to \mathrm{Iso}(G_{K_1}^{\mathcal C_1}, G_{K_2}^{\mathcal C_2})
$$
is bijective. In particular, $G_{K_1}^{\mathcal C_1} \cong G_{K_2}^{\mathcal C_2}$ implies $K_1 \cong K_2$ [@shimizu2023proc, Theorem 7.1, p. 28]. For example, since $\Sigma((\Sigma)) = \Sigma$, the maximal pro-$\Sigma$ quotient of $G_K$ determines $K$ functorially whenever $\Sigma$ has positive upper density, such as the set of odd primes.

The set $\Sigma(\mathcal C)$ can be recovered from $G_K^{\mathcal C}$ [@shimizu2023proc, Lemma 2.1, p. 7]. Whether an isomorphism $G_{K_1}^{\mathcal C_1} \cong G_{K_2}^{\mathcal C_2}$ forces $\mathcal C_1 = \mathcal C_2$ is left open [@shimizu2023proc, Remark 7.2 (i), p. 28].

**Consequences.**

- *Solvably closed form.* Let $\Sigma$ be a set of primes of positive upper density, and let $\Omega_i/K_i$ be Galois extensions such that $\Omega_i$ has no nontrivial abelian pro-$\Sigma$ extension. Then $\mathrm{Iso}(\Omega_2/K_2, \Omega_1/K_1) \to \mathrm{Iso}(\mathrm{Gal}(\Omega_1/K_1), \mathrm{Gal}(\Omega_2/K_2))$ is bijective [@shimizu2023proc, Corollary 7.3, p. 29]. With $\Sigma$ the set of all primes, this is [Uchida's theorem](uchida-solvably-closed-theorem.md).
- *Outer automorphisms.* If $\Sigma(\mathcal C)$ has positive upper density, then $\mathrm{Aut}(K) \cong \mathrm{Out}(G_K^{\mathcal C})$. If moreover $\mathrm{Aut}(K)$ is trivial, every automorphism of $G_K^{\mathcal C}$ is inner [@shimizu2023proc, Corollary 7.6, p. 30].
- *Trivial centralizers, with no density hypothesis.* Let $\mathcal C$ be any nontrivial full class. If a field automorphism $\tau$ of $K^{\mathcal C}$ satisfies $\tau(K) = K$ and commutes with every element of $G_K^{\mathcal C}$, then $\tau$ is trivial [@shimizu2023proc, Proposition 1.5, p. 6]. In particular $G_K^{\mathcal C}$ has trivial centre [@shimizu2023proc, Corollary 1.6, p. 6]. This applies to the maximal pro-$p$ quotient $G_K(p)$.

**Pro-$p$ quotients.** If $\Sigma(\mathcal C)$ has density zero, for example $\Sigma(\mathcal C) = \{p\}$, the theorem does not apply. Shimizu proves a relative form. Let $\Sigma = \Sigma(\mathcal C_1) = \Sigma(\mathcal C_2)$, and let $\sigma : G_{K_1}^{\mathcal C_1} \to G_{K_2}^{\mathcal C_2}$ be an isomorphism. Assume:

- (a) for one $i$, either $2 \in \Sigma(\mathcal C_i)$ or $K_i$ has a complex place;
- (b) $\sigma$ commutes with the restriction maps to the maximal pro-$\Sigma$ quotient of $\mathrm{Gal}(\mathbb Q^{\mathrm{ab}}/\mathbb Q)$.

Then $\sigma$ is induced by a unique element of $\mathrm{Iso}(K_2^{\mathcal C_2}/K_2, K_1^{\mathcal C_1}/K_1)$ [@shimizu2023proc, Corollary 7.11, p. 34]. Theorem 7.9 replaces (b) by a condition on cyclotomic characters at a set of primes of positive upper density [@shimizu2023proc, Theorem 7.9, p. 32].

Shimizu conjectures that (a) alone suffices, "even in the case when $\Sigma = \{p\}$" [@shimizu2023proc, Conjecture 7.12, p. 34, and Remark 7.15 (i), p. 35]. He reduces this to the conjecture that the local correspondence of decomposition groups he constructs preserves residue characteristics [@shimizu2023proc, Conjecture 7.13, p. 34, and Proposition 7.14, p. 35]. For the maximal pronilpotent quotient, which is the product of the $G_K(p)$, see [the pronilpotent problem](pronilpotent-neukirch-uchida-problem.md).

**Method.** Shimizu first recovers part of the set of decomposition groups of $G_K^{\mathcal C}$ group-theoretically, along with part of the cyclotomic character. These give a local correspondence between decomposition groups for an isomorphism. He then shows that, in the cases treated, it preserves local invariants such as residue characteristics; in general this is Conjecture 7.13. Two arguments then produce field isomorphisms, modelled on Uchida's and on Shimizu's earlier work, and a density computation finishes the proof [@shimizu2023proc, §0, p. 2].

**Status of the source.** This entry cites the arXiv preprint, version 1 of March 2023. Its arXiv page lists no journal reference as of November 2026.
