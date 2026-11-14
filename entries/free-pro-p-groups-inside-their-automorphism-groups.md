---
title: Free pro-p groups inside their automorphism groups
kind: theorem
summary: Tsujimura's July 2026 preprint characterizes the inner automorphisms of a finite-rank nonabelian free pro-p group F as the unique closed normal copy of F in Aut(F). Consequently every continuous automorphism of Aut(F) is inner.
tags: [pro-p-groups, galois-groups]
edges:
  - {to: neukirch-uchida-theorem, label: analogous-to, note: "The source compares the automorphism towers of free pro-p groups and number-field Galois groups [@tsujimura2026freeaut, Remark 3.2.1, p. 9]."}
---

**Theorem (Tsujimura).** Let $p$ be any prime and $F$ a free pro-$p$ group of finite rank $n\ge2$. Use continuous automorphisms throughout, with the profinite topology on $\operatorname{Aut}(F)$ defined by characteristic open subgroups. Since $F$ is centre-free, identify it with $\operatorname{Inn}(F)$. Then
$$
N\trianglelefteq\operatorname{Aut}(F),\quad N\text{ closed},\quad N\cong F
\quad\Longrightarrow\quad N=\operatorname{Inn}(F),
$$
where the isomorphism is topological [@tsujimura2026freeaut, Notations and conventions, p. 3; Theorem 3.1, p. 8].

Thus $\operatorname{Inn}(F)$ is characteristic, and conjugation gives an isomorphism
$$
\operatorname{Aut}(F)\xrightarrow{\sim}\operatorname{Aut}(\operatorname{Aut}(F));
\qquad\operatorname{Out}(\operatorname{Aut}(F))=1
$$
[@tsujimura2026freeaut, Corollary 3.2 and Remark 3.2.1, p. 9].

**Method and scope.** The proof locates $N$ successively inside $F K_i(F)$, where $K_i(F)=\ker(\operatorname{Aut}(F)\to\operatorname{Aut}(F/\gamma_{i+1}F))$ and $\gamma_iF$ is the closed lower central series [@tsujimura2026freeaut, Definition 1.1, p. 3; Proposition 3.12 and proof of Theorem 3.1, pp. 12–13]. The paper leaves analogues for nonabelian [Demushkin groups](demushkin-group.md), full $p$-adic Galois groups and [free pro-$\Sigma$ groups](free-pro-sigma-groups-inside-their-automorphism-groups.md) for larger sets $\Sigma$ of primes, free profinite groups included, open [@tsujimura2026freeaut, Introduction, Q.1–Q.2 and following paragraph, p. 2]. This is a cited preprint result, without an independent proof audit here.

For arithmetic examples, see [maximal pro-$p$ Galois groups of $p$-adic fields](maximal-pro-p-galois-groups-of-p-adic-fields.md), Structure, part 1.
