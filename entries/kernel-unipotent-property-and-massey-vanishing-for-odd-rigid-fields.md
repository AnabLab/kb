---
title: Odd rigid fields satisfy the kernel-unipotent and Massey vanishing conjectures
kind: theorem
summary: 'Mináč–Tân: for odd $p$ and any $p$-rigid field $F$, each Zassenhaus term $G_{(n)}$ of $G_F(p)$ is the intersection of the kernels of all representations into $U_n(\mathbb F_p)$, and every defined mod-$p$ Massey product of degree-one classes contains zero.'
tags: [galois-groups, galois-cohomology, pro-p-groups]
edges:
  - {to: kernel-unipotent-conjecture, label: addresses, note: "Proves it for every $n$ when $p$ is odd and $F$ is $p$-rigid [@minactan2015kernel, Theorem 5.2, p. 13]."}
  - {to: massey-vanishing-conjecture, label: addresses, note: "Proves it for every $n \\ge 3$ when $p$ is odd and $F$ is $p$-rigid [@minactan2015kernel, Theorem 8.5, p. 20]."}
  - {to: p-rigid-fields, label: uses, note: "The source takes the structure of $G_F(p)$ and of its Zassenhaus quotients from Chebolu–Mináč–Quadrelli [@minactan2015kernel, Theorem 4.2 and Corollary 4.3, pp. 11–12]."}
  - {to: massey-products-with-equal-entries-vanish, label: uses, note: "Rigidity reduces every defined product to one with all entries equal [@minactan2015kernel, proof of Theorem 8.5, p. 20]."}
---

**Rigid fields.** Let $p$ be an odd prime and $F$ a field containing a primitive $p$th root of unity. For $a\in F^\times$ let $\chi_a\in H^1(G_F,\mathbb F_p)=H^1(G_F(p),\mathbb F_p)$ be its Kummer character. An element $a\in F^\times\setminus F^{\times p}$ is *$p$-rigid* if $\chi_a\cup\chi_b=0$ implies $b\in a^iF^{\times p}$ for some $i\ge0$, and $F$ is *$p$-rigid* if all such $a$ are [@minactan2015kernel, Definition 4.1, p. 11]. The condition $\chi_a\cup\chi_b=0$ holds exactly when $b$ is a norm from $F(\sqrt[p]{a})$ [@cheboluminacquadrelli2015, §3.2, p. 8], so this is the definition used in [the entry on $p$-rigid fields](p-rigid-fields.md). The source states its Theorem 5.2 for "a prime number", but it defines rigidity, and quotes the structure of $G_F(p)$, only for odd $p$ [@minactan2015kernel, §4, p. 11].

Let $G=G_F(p)$, and let $k\in\mathbb N\cup\{\infty\}$ be maximal with $\mu_{p^k}\subseteq F$. For finite $k$, $G\cong(\prod_I\mathbb Z_p)\rtimes\mathbb Z_p$, where a generator $\sigma$ of the right factor acts by $\sigma\tau\sigma^{-1}=\tau^{1+p^k}$. For $k=\infty$, $G\cong\prod_I\mathbb Z_p$ [@minactan2015kernel, Theorem 4.2, p. 11]. The index set $I$ may be infinite.

**Theorem (Mináč–Tân).** Let $p$ be odd, $F$ a $p$-rigid field and $G=G_F(p)$, with $p$-Zassenhaus filtration $G_{(n)}$ as in [the kernel-unipotent conjecture](kernel-unipotent-conjecture.md).

1. *Kernel-unipotent property.* For every $n\ge1$,
$$G_{(n)}=\bigcap_{\rho:G\to U_n(\mathbb F_p)}\ker\rho,$$
over all continuous homomorphisms [@minactan2015kernel, Theorem 5.2, p. 13].
2. *Massey vanishing.* For every $n\ge3$ and all $\alpha_1,\ldots,\alpha_n\in H^1(G_F,\mathbb F_p)$, the $n$-fold Massey product $\langle\alpha_1,\ldots,\alpha_n\rangle$ contains zero whenever it is defined [@minactan2015kernel, Theorem 8.5, p. 20].

The authors describe this as the first significant family of fields, besides those whose maximal pro-$p$ Galois group is free, for which both conjectures are verified [@minactan2015kernel, Abstract, p. 1].

**Outline of part 1** [@minactan2015kernel, §5, pp. 12–13].

- *One inclusion holds for every pro-$p$ group.* $U_n(\mathbb F_p)_{(n)}=1$, so every representation into $U_n(\mathbb F_p)$ kills $G_{(n)}$ [@minactan2015kernel, Lemma 2.5(b), p. 6].
- *Reduction.* If $p^{s-1}<n\le p^s$, then $G_{(n)}=G^{p^s}$, and $G/G_{(n)}$ is $(\prod_I\mathbb Z/p^s)\rtimes\mathbb Z/p^s$, with the same action, or $\prod_I\mathbb Z/p^s$ when $k=\infty$ [@minactan2015kernel, Corollary 4.3, p. 12]. So $G_{(p^s+1)}=\cdots=G_{(p^{s+1})}$, and as $U_m(\mathbb F_p)$ embeds in $U_n(\mathbb F_p)$ for $m\le n$, it is enough to take $n=p^s+1$ [@minactan2015kernel, proof of Theorem 5.2, p. 13].
- *Explicit representations.* Let $n=p^s+1$, let $X\in M_n(\mathbb F_p)$ have ones at the positions $(i,i+1)$ and zeros elsewhere, and put $B=1+X$, of order $p^{s+1}$. There is $A\in U_n(\mathbb F_p)$ with $ABA^{-1}=B^{1+p^k}$, of order dividing $p^{s+1}$ [@minactan2015kernel, Lemma 3.4 and Proposition 3.6, pp. 9–11]. Write an element of $H=G/G_{(n)}$ as $uv$, with $u$ in the abelian factor and $v$ in the cyclic factor. If $v\ne1$, send the abelian factor to $1$ and the generator $\sigma$ to $B$. If $v=1$ and $u\ne1$, choose a coordinate where $u$ is nontrivial, send that coordinate's generator to $B$, the other coordinates to $1$ and $\sigma$ to $A$. In both cases the image of $uv$ is a nontrivial power of $B$ [@minactan2015kernel, Proposition 5.1, pp. 12–13]. When $k=\infty$, $H$ is abelian, and one sends the generator of a coordinate where the element is nontrivial to $B$ and the other coordinates to $1$.

**Outline of part 2** [@minactan2015kernel, proof of Theorem 8.5, p. 20]. Write $\alpha_i=\chi_{a_i}$. If some $a_i$ is a $p$th power, that entry is zero and the source concludes directly. Otherwise, definedness gives $\chi_{a_i}\cup\chi_{a_{i+1}}=0$ for each $i$, so rigidity gives $\chi_{a_{i+1}}=c_i\chi_{a_i}$ with $c_i\in\mathbb F_p^\times$. Massey products are compatible with scaling the entries, so it is enough to treat $\langle\chi,\ldots,\chi\rangle$ with one character $\chi$. That product [is defined and contains zero](massey-products-with-equal-entries-vanish.md) over every field containing a primitive $p$th root of unity.

**Scope and related results.**

- *Finitely many classes.* When $F^\times/F^{\times p}$ is finite, $G_F(p)$ is finitely generated and of elementary type, and Quadrelli's later strong vanishing theorem for elementary-type groups gives more than part 2 in that case. Both facts are recorded in [the elementary type conjecture](elementary-type-conjecture.md). Part 1 and the case of infinitely many classes are not covered there.
- *Demushkin groups of rank two.* The same method proves the kernel-unipotent property for every $n$ for Demushkin groups of rank two, at every prime [@minactan2015kernel, Lemma 5.3 and Proposition 5.4, p. 14]; that case is listed in [the conjecture's entry](kernel-unipotent-conjecture.md).
