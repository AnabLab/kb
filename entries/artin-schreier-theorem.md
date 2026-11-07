---
title: Artin–Schreier theorem
kind: theorem
summary: A finite nontrivial absolute Galois group has order $2$, and then the field has characteristic $0$, its algebraic closure is obtained by adjoining $\sqrt{-1}$, and its nonzero squares form an ordering. So every nontrivial element of finite order in any $G_K$ is an involution.
tags: [galois-groups, orderings]
---

**Statement.** Let $F$ be a field whose separable closure is a finite proper extension, that is, $G_F$ is finite and nontrivial. Then $F$ has characteristic $0$ and its algebraic closure is $F(i)$ with $i^2 = -1$, so $G_F$ has order $2$. Moreover, for $a \in F^\times$ exactly one of $a$ and $-a$ is a square in $F$, and every finite sum of nonzero squares in $F$ is a nonzero square [@conradartinschreier, Theorem 4.1]. So the nonzero squares are the positive elements of an ordering of $F$ [@conradartinschreier, §3].

This is Artin and Schreier's characterization of real closed fields [@koymanspagano2024, §1.1]. They proved it in 1926 for fields of characteristic $0$, and removed that hypothesis the following year [@conradartinschreier, §3].

**Torsion in absolute Galois groups.** Let $H$ be a nontrivial finite subgroup of $G_K$, with fixed field $F$ in the separable closure $K^{\mathrm{sep}}$. Then $K^{\mathrm{sep}}$ is a finite Galois extension of $F$ with group $H$, and it is a separable closure of $F$, so $|H| = 2$ by the theorem. Consequently:

- Every nontrivial element of finite order in $G_K$ has order $2$.
- Two distinct involutions $\sigma, \tau \in G_K$ cannot generate a finite group, which would contain the four elements $1, \sigma, \tau, \sigma\tau$. So $\sigma\tau$ has infinite order, and distinct involutions never commute.
- If $G_K$ contains an involution, the ordering of its fixed field restricts to an ordering of $K$, so $-1$ is not a sum of squares in $K$. Hence $G_K$ is torsion-free when $-1$ is a sum of squares in $K$, in particular when $K$ has positive characteristic.

The same argument for automorphism groups of algebraically closed fields is in [@conradartinschreier, §4].

**What the group does not see.** The fields $\mathbb{R}$ and $\mathbb{R} \cap \bar{\mathbb{Q}}$ both have algebraic closure obtained by adjoining $i$ [@conradartinschreier, §1], so both have absolute Galois group of order $2$. They are not isomorphic, since one is countable and the other is not. So an absolute Galois group of order $2$ forces the properties in the statement, but does not determine the field. Among algebraic extensions of $\mathbb{Q}$, however, it [does determine the field](involutions-and-real-places.md).

**Related.** Neukirch's starting point for the [local theory](neukirch-local-theory.md) behind the [Neukirch–Uchida theorem](neukirch-uchida-theorem.md) was that there is a $p$-adic counterpart to this theorem [@koymanspagano2024, §1.1].
