---
title: Neukirch's local theory for Galois groups of number fields
kind: theorem
summary: The absolute Galois group of the field of algebraic $p$-adic numbers characterizes that field among all algebraic extensions of $\mathbb{Q}$. Decomposition groups are recognizable as the maximal closed subgroups that look like Galois groups of $p$-adic fields.
tags: [number-fields, local-fields, galois-groups]
edges:
  - {to: brauer-local-global-principle, label: uses, note: "Both local-global injectivity and prescription at two places enter the henselianity argument [@neukirch1977, proof of Lemma 3, pp. 70–71]."}
  - {to: artin-schreier-theorem, label: analogous-to, note: "Described as a p-adic counterpart to it [@koymanspagano2024, §1.1]."}
---

**Statement.** Let $\mathbb{Q}_p^a$ be the field of algebraic $p$-adic numbers. If $K$ is an algebraic extension of $\mathbb{Q}$ with $G_K \cong G_{\mathbb{Q}_p^a}$, then $K \cong \mathbb{Q}_p^a$ [@neukirch1977, Lemma 3].

**Decomposition groups.** Let $\tilde F$ be a solvably closed Galois extension of a number field $F$. Sending a nonarchimedean prime of $\tilde F$ to its decomposition group gives a bijection onto the set of maximal closed subgroups of $\mathrm{Gal}(\tilde F/F)$ that are isomorphic to the absolute Galois group of a finite extension of some $\mathbb{Q}_p$ [@hoshi2019, Lemma 3.4].

**Method.** Let $K$ be an algebraic extension of $\mathbb{Q}$ that is Henselian, with residue characteristic $p$. It contains a smallest Henselian subfield $K_0 \cong \mathbb{Q}_p^a$, and its local degree is $n(K) = [K : K_0]$. Put $\chi_l(G_K) = \sum_{q=0}^{2} (-1)^q \dim H^q(G_K, \mathbb{F}_l)$. If $l$ divides $n(K)$ only finitely often, then $\chi_l(G_K) = 0$ for $l \ne p$ and $\chi_p(G_K) = -n(K)$ [@neukirch1977, Lemma 1]. The proof of Lemma 3 first shows that $K$ is Henselian, using the injectivity of $H^2(G_K, \mathbb{F}_l) \to \prod_v H^2(G_{K_v}, \mathbb{F}_l)$ from [@neukirch1977, Lemma 2], and then reads off $p$ and $n(K)$ from these Euler characteristics.

The [local-global lemma](brauer-local-global-principle.md) also permits prescription at any finite set of places. For this step Neukirch chooses $l\ne2,p$. After passing to the extension corresponding to $\mathbb Q_p^a(\mu_l)$, he has $H^2(G_L,\mathbb F_l)\cong\mathbb F_l$ for every finite further extension $L$. Injectivity finds a nonarchimedean place with nonzero local $H^2$. If it split in such an $L$, two prolongations would each have local $H^2\cong\mathbb F_l$, contradicting surjectivity from $\mathbb F_l$ to $\mathbb F_l^2$. This forces henselianity [@neukirch1977, proof of Lemma 3, pp. 70–71].

**Use.** This gives the weak form of the [Neukirch–Uchida theorem](neukirch-uchida-theorem.md) for normal number fields, via Chebotarev density [@neukirch1977, Lemma 4]. It has been described as a $p$-adic counterpart to the [Artin–Schreier characterization of real closed fields](artin-schreier-theorem.md) [@koymanspagano2024, §1.1]. For number fields, the archimedean counterpart of the statement on decomposition groups is that [the subgroups of order 2 are the decomposition groups at real places](involutions-and-real-places.md).
