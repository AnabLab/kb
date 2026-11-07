---
title: Numerical invariants determining the absolute Galois group of a p-adic field
kind: theorem
summary: 'When $\zeta_p \in K$ (and $\zeta_4 \in K$ if $p = 2$), the group $G_K$ of a finite extension $K/\mathbb{Q}_p$ is determined by four numerical invariants: degree, residue degree, tame $p$-power roots of unity and a Frobenius number. Other cases are less secure here.'
tags: [local-fields, galois-groups]
---

**Statement with roots of unity.** Suppose $\zeta_p \in K$, and $\zeta_4 \in K$ if $p = 2$. Let $n = [K:\mathbb{Q}_p]$ and let $f$ be the residue degree. Let $r + d$ be the largest $j$ with $\zeta_{p^j}$ in the maximal tamely ramified extension of $K$. Let $s$ be the integer with $1 \le s \le p^{r+d} - 1$ such that Frobenius sends $\zeta_{p^{r+d}}$ to $\zeta_{p^{r+d}}^s$. Then $n, f, r + d, s$ determine $G_K$ as a topological group [@jardenritter1979, p. 6]. The definitions are at [@jardenritter1979, p. 2].

**Yamagata's more general statement.** Yamagata states, citing Jakovlev and Zel'venskii, that for odd $p$ and without a hypothesis on roots of unity, $G_K$ is determined by $n$, $f$, the $p$-power order $q$ of the roots of unity in the maximal tame extension, and two numbers describing how the tame generators act on them. For $p = 2$ he states this with only one such number, and only when $q \ge 4$ [@yamagata1976, §1]. The sources opened here do not cover $p = 2$ with $q = 2$, as for $\mathbb{Q}_2$.

**Attribution.** These results are credited to Jakovlev for $p \ne 2$ and Zel'venskii for $p = 2$. Jarden and Ritter note that, according to a paper of Koch, the generators and relations given by Jakovlev are not in fact such a system for $G_K$, but that Koch proves that $G_K$ is determined by their parameters $n, f, r + d, s$ [@jardenritter1979, p. 6, footnote 2]. That correction concerns Jakovlev's work, which Yamagata's statement for odd $p$ also relies on, so that statement should be treated with care. The original papers have not been opened for this entry.

**Use.** This is the input to the [Jarden–Ritter theorem](jarden-ritter-theorem.md).
