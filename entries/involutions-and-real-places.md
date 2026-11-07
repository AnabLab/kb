---
title: Involutions in Galois groups of number fields and real places
kind: theorem
summary: For $K \subseteq \bar{\mathbb{Q}}$, the subgroups of order $2$ in $G_K$ are the decomposition groups at archimedean primes over real places of $K$. So $G_K$ counts the real places, and an algebraic extension of $\mathbb{Q}$ with $|G_K| = 2$ is isomorphic to $\bar{\mathbb{Q}} \cap \mathbb{R}$.
tags: [number-fields, galois-groups, orderings]
edges:
  - {to: artin-schreier-theorem, label: uses}
  - {to: neukirch-local-theory, label: analogous-to, note: "The archimedean counterpart: subgroups of order 2 play the role of p-adic decomposition groups, and part 3 mirrors [@neukirch1977, Lemma 3]."}
---

**Setting.** Fix $\bar{\mathbb{Q}} \subset \mathbb{C}$, let $c \in G_{\mathbb{Q}}$ be complex conjugation and let $\mathbb{R}_{\mathrm{alg}} = \bar{\mathbb{Q}} \cap \mathbb{R}$ be its fixed field. Every field embedding $\iota : \bar{\mathbb{Q}} \to \mathbb{C}$ has image $\bar{\mathbb{Q}}$, so it is an element of $G_{\mathbb{Q}}$, and we put $c_\iota = \iota^{-1} c \iota$. An archimedean prime of $\bar{\mathbb{Q}}$ is such an $\iota$ up to replacing it by $c\iota$, and its decomposition group in $G_{\mathbb{Q}}$ is $\{g : \iota g \in \{\iota, c\iota\}\} = \{1, c_\iota\}$.

**Statement.** Let $K$ be a subfield of $\bar{\mathbb{Q}}$.

1. Every element of order $2$ in $G_{\mathbb{Q}}$ is $c_\iota$ for some $\iota$, so it is conjugate to $c$. Distinct archimedean primes of $\bar{\mathbb{Q}}$ have distinct decomposition groups.
2. The subgroups of order $2$ in $G_K$ are exactly the groups $\{1, c_\iota\}$ with $\iota(K) \subseteq \mathbb{R}$, that is, the decomposition groups in $G_K$ of the archimedean primes of $\bar{\mathbb{Q}}$ over real places of $K$. Their conjugacy classes under $G_K$ correspond bijectively to the real places of $K$. In particular $G_K$ is torsion-free exactly when $K$ has no real place.
3. If $G_K$ is finite and nontrivial, then $K = \tau(\mathbb{R}_{\mathrm{alg}})$ for some $\tau \in G_{\mathbb{Q}}$. Since every algebraic extension of $\mathbb{Q}$ embeds in $\bar{\mathbb{Q}}$, every algebraic extension of $\mathbb{Q}$ with finite nontrivial absolute Galois group is isomorphic to $\mathbb{R}_{\mathrm{alg}}$.

For number fields $K, L$, any isomorphism $G_K \cong G_L$ therefore preserves the number of real places. This is an elementary piece of what the [Neukirch–Uchida theorem](neukirch-uchida-theorem.md) gives in full.

**Proof.** (1) Let $\sigma \in G_{\mathbb{Q}}$ have order $2$, with fixed field $F$. By the [Artin–Schreier theorem](artin-schreier-theorem.md), $\bar{\mathbb{Q}} = F(i)$ and the nonzero squares of $F$ are the positive elements of an ordering. This ordering is archimedean: if $x^n + a_{n-1}x^{n-1} + \dots + a_0 = 0$ with $a_j \in \mathbb{Q}$ and $|x| > 1$, then $|x|^n \le M(|x|^n - 1)/(|x| - 1)$ for $M = \max_j |a_j|$, so $|x| < 1 + M$. Hence $\mathbb{Q}$ is dense in $F$, and $\varphi(x) = \sup\{q \in \mathbb{Q} : q < x\}$ is an embedding of fields $F \to \mathbb{R}$. Indeed, by density the rationals below $x + y$ are exactly the sums of a rational below $x$ and a rational below $y$, and for $x, y > 0$ the positive rationals below $xy$ are exactly the products of a positive rational below $x$ and one below $y$. Since $\varphi(x)$ is a root of the minimal polynomial of $x$ over $\mathbb{Q}$, $\varphi(F) \subseteq \mathbb{R}_{\mathrm{alg}}$. Extend $\varphi$ to $\iota : \bar{\mathbb{Q}} = F(i) \to \mathbb{C}$ by $i \mapsto i$, an element of $G_{\mathbb{Q}}$ by the setting. Then $\iota(F) \subseteq \mathbb{R}_{\mathrm{alg}}$, and both have index $2$ in $\bar{\mathbb{Q}}$, so $\iota(F) = \mathbb{R}_{\mathrm{alg}}$. Thus $\iota \sigma \iota^{-1}$ is the nontrivial element of $G_{\mathbb{Q}}$ fixing $\mathbb{R}_{\mathrm{alg}}$, which is $c$, and $\sigma = c_\iota$.

If $c_\iota = c_{\iota'}$, then $\theta = \iota' \iota^{-1}$ commutes with $c$, so it restricts to an automorphism of $\mathbb{R}_{\mathrm{alg}}$. That automorphism preserves squares, hence the ordering, and fixes $\mathbb{Q}$, which is dense, so it is the identity. Thus $\theta \in \{1, c\}$, and $\iota, \iota'$ define the same archimedean prime.

(2) By (1), the elements of order $2$ in $G_K$ are the $c_\iota$ lying in $G_K$. Since $c_\iota$ fixes $x \in \bar{\mathbb{Q}}$ exactly when $\iota(x) \in \mathbb{R}$, this means $\iota(K) \subseteq \mathbb{R}$. The archimedean primes over a real place $\rho$ of $K$ are represented by the $\iota$ extending $\rho$. Any two such satisfy $\iota' = \iota g$ with $g = \iota^{-1} \iota' \in G_K$, and $c_{\iota g} = g^{-1} c_\iota g$. With the injectivity in (1), this gives the bijection.

(3) By the Artin–Schreier theorem $G_K = \{1, \sigma\}$ with $\sigma$ of order $2$. By (1), $\sigma = \iota^{-1} c \iota$, so $K$, the fixed field of $\sigma$, is $\iota^{-1}(\mathbb{R}_{\mathrm{alg}})$.

**Comparison with the $p$-adic case.** Part 3 is the archimedean analogue of Neukirch's lemma that an algebraic extension $K$ of $\mathbb{Q}$ with $G_K \cong G_{\mathbb{Q}_p^a}$ is isomorphic to the field $\mathbb{Q}_p^a$ of algebraic $p$-adic numbers [@neukirch1977, Lemma 3]. The restriction to algebraic extensions of $\mathbb{Q}$ matters in both cases, since $\mathbb{R}$ also has absolute Galois group of order $2$. Part 2 is the analogue of the recognition of [nonarchimedean decomposition groups](neukirch-local-theory.md), and is simpler: every subgroup of order $2$ is a decomposition group, with no maximality condition.

Conrad notes that $\bar{\mathbb{Q}}$ is characterized among algebraically closed fields by its automorphism group having nontrivial torsion elements that are all conjugate, referring to Baer and to Bourbaki [@conradartinschreier, §4]. Part 1 is the half of this that concerns $\bar{\mathbb{Q}}$ itself.
