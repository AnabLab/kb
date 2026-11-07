---
title: Non-isomorphic p-adic fields with isomorphic absolute Galois groups
kind: theorem
summary: For every prime $p$, Yamagata gives explicit non-isomorphic finite extensions of $\mathbb{Q}_p$ with isomorphic absolute Galois groups, separated by ramification data. Jarden and Ritter give further examples for odd $p$ and for $p = 2$.
tags: [local-fields, galois-groups, counterexample]
edges:
  - {to: naive-local-neukirch-uchida, label: refutes}
  - {to: jarden-ritter-theorem, label: uses, note: "The Jarden–Ritter examples are derived from it. Yamagata instead compares invariants that determine the group."}
---

**Yamagata's examples.** Let $p$ be odd. Put $K_0 = \mathbb{Q}_p(\sqrt[p]{\zeta_p - 1})$, and for $1 \le i \le p - 2$ put $K_i = \mathbb{Q}_p(\zeta_p, \alpha_i)$ with $\alpha_i^p - \alpha_i = (\zeta_p - 1)^{-i}$. Then the groups $G_{K_i}$ are all topologically isomorphic, but $K_i$ and $K_j$ are not conjugate over $\mathbb{Q}_p$ for $i \ne j$. For $p = 2$, the same holds for $\mathbb{Q}_2(\sqrt{\zeta_4 - 1})$ and $\mathbb{Q}_2(\beta)$ with $\beta^2 - \beta = (\zeta_4 - 1)^{-1}$ [@yamagata1976, Theorem].

A field isomorphism between finite extensions of $\mathbb{Q}_p$ is a $\mathbb{Q}_p$-algebra isomorphism [@hyeon2025, §1], so non-conjugate fields here are non-isomorphic.

**What separates them.** Each $K_i/\mathbb{Q}_p(\zeta_p)$ is totally ramified and cyclic of degree $p$, with a single upper ramification number, which is $p$ for $i = 0$ and $i$ for $i \ge 1$ [@yamagata1976, Proof of the Theorem]. The proof separates the fields by these numbers, which are ramification data over $\mathbb{Q}_p(\zeta_p)$. That the groups $G_{K_i}$ with their [ramification filtrations](ramification-filtration.md) are not isomorphic then follows from [Mochizuki's theorem](mochizuki-local-fields-theorem.md).

**Jarden–Ritter examples.** Let $p$ be odd [@jardenritter1979, §2].

- The fields $\mathbb{Q}_p(\zeta_p, \sqrt[p]{p})$, $\mathbb{Q}_p(\zeta_p, \sqrt[p]{p+1})$ and $\mathbb{Q}_p(\zeta_p, \sqrt[p]{\zeta_p - 1})$ are distinct and have isomorphic absolute Galois groups. The first two are normal over $\mathbb{Q}_p$ with isomorphic Galois groups, and the third is not normal.
- The fields $L_1 = \mathbb{Q}_p(\zeta_{p^2}, \sqrt[p^2]{p})$ and $L_2 = \mathbb{Q}_p(\zeta_{p^2}, \sqrt[p]{p}, \sqrt[p]{p+1})$ are normal over $\mathbb{Q}_p$ with isomorphic absolute Galois groups, but $\mathrm{Gal}(L_1/\mathbb{Q}_p)$ and $\mathrm{Gal}(L_2/\mathbb{Q}_p)$ are not isomorphic. So an isomorphism $G_{L_1} \to G_{L_2}$ cannot extend to an automorphism of the absolute Galois group of their common maximal abelian subfield $\mathbb{Q}_p(\zeta_{p^2})$.

Analogous examples for $p = 2$ are in [@jardenritter1979, §2, footnote 6].
