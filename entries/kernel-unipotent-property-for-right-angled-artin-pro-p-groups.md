---
title: Right-angled Artin pro-p groups with the kernel-unipotent property
kind: theorem
summary: 'For a finite graph, the right-angled Artin pro-$p$ group has the kernel $n$-unipotent property for every $n$ exactly when the graph is complete multipartite, making the group a product of free groups. Otherwise the property fails for all $n\ge(p+1)(p^2-p+3)+4$.'
tags: [pro-p-groups, galois-groups, galois-cohomology]
edges:
  - {to: kernel-unipotent-conjecture-fails-for-zp2-free-product-zp, label: uses, note: "its Corollary 2(i), for the failure when the graph is not complete multipartite"}
  - {to: right-angled-artin-pro-p-galois-groups, label: uses, note: "the definition of $G_\\Gamma$, and the Snopce–Zalesskii classification in the corollary on Galois groups"}
  - {to: p-zassenhaus-filtration, label: uses, note: "the equality $(G_1\\times G_2)_{(n)}=(G_1)_{(n)}\\times(G_2)_{(n)}$ of item 1; the formulas for $G_{(3)}$ and items 3 and 4 for small degrees"}
  - {to: kernel-unipotent-conjecture, label: addresses, note: "For fields whose $G_K(p)$ is the right-angled Artin pro-$p$ group of a finite graph, the equality holds for every $n$ exactly when $G_K(p)\\cong F\\times\\mathbb Z_p^s$ with $F$ free, and otherwise fails for all large $n$."}
---

**Setting.** Fix a prime $p$. For a finite nonempty simple graph $\Gamma=(V,E)$, the right-angled Artin pro-$p$ group is
$$G_\Gamma=\langle V\mid[v,w]=1\text{ for }\{v,w\}\in E\rangle_{\text{pro-}p}$$
[@snopcezalesskii2022, §1, p. 2]; see [Galois realizability of right-angled Artin groups](right-angled-artin-pro-p-galois-groups.md). A continuous homomorphism from $G_\Gamma$ to a pro-$p$ group $H$ is the same as a map $V\to H$ under which adjacent vertices go to commuting elements.

A pro-$p$ group $H$ has the *kernel $n$-unipotent property* if $H_{(n)}=\bigcap_\rho\ker\rho$, over all continuous $\rho:H\to U_n(\mathbb F_p)$, where $H_{(n)}$ is the [$p$-Zassenhaus filtration](p-zassenhaus-filtration.md) [@minactan2015kernel, Definition 1.2, p. 2]. The inclusion $\subseteq$ holds for every pro-$p$ group [@minactan2015kernel, Lemma 2.5(b), p. 6]. As in [the counterexample](kernel-unipotent-conjecture-fails-for-zp2-free-product-zp.md), put $N=(p+1)(p^2-p+3)$, and $n_0=N+3$ if $p=2$ and $n_0=N+4$ if $p$ is odd. So $n_0=18$ for $p=2$ and $n_0=40$ for $p=3$.

A graph is *complete multipartite* if $V$ is a disjoint union of nonempty sets $V_1,\ldots,V_k$, its *parts*, such that two distinct vertices are adjacent exactly when they lie in different parts. Equivalently, its complement is a disjoint union of complete graphs. The edgeless graph, with $k=1$, and the complete graph, with every part a single vertex, are both complete multipartite.

**Theorem.** This is proved here. For a finite nonempty simple graph $\Gamma$, the following are equivalent.

1. $\Gamma$ has no induced subgraph consisting of an edge and a vertex adjacent to neither of its endpoints.
2. $\Gamma$ is complete multipartite.
3. $G_\Gamma$ is isomorphic to a direct product of finitely many free pro-$p$ groups of finite rank.
4. $G_\Gamma$ has the kernel $n$-unipotent property for every $n\ge1$.
5. $G_\Gamma$ has the kernel $n$-unipotent property for some $n\ge n_0$.

More precisely, if $\Gamma$ is complete multipartite with parts $V_1,\ldots,V_k$, then $G_\Gamma\cong F(V_1)\times\cdots\times F(V_k)$, where $F(V_i)$ is free pro-$p$ on $V_i$. If $\Gamma$ is not complete multipartite, $G_\Gamma$ fails the kernel $n$-unipotent property for every $n\ge n_0$, a bound that does not depend on $\Gamma$.

**Corollary (Galois groups).** This is proved here. Let $K$ be a field containing a primitive $p$th root of unity, with $G_K(p)\cong G_\Gamma$ for a finite nonempty simple graph $\Gamma$. The following are equivalent:

- (a) $G_K(p)$ has the kernel $n$-unipotent property for every $n$;
- (b) $\Gamma$ is complete multipartite with at most one part of more than one vertex;
- (c) $G_K(p)\cong F\times\mathbb Z_p^s$ for a free pro-$p$ group $F$ of finite rank $r$ and some $s\ge0$, with $r+s\ge1$.

If they fail, $G_K(p)$ fails the property for every $n\ge n_0$. Every group in (c) is $G_K(p)$ for some such field $K$.

So, among fields whose maximal pro-$p$ Galois group is a right-angled Artin pro-$p$ group, the [kernel-unipotent conjecture](kernel-unipotent-conjecture.md) holds in every degree exactly for the groups $F\times\mathbb Z_p^s$. These are the cyclotomic semidirect products $\mathbb Z_p^s\rtimes F$ with trivial orientation, for which the property was already known from [cyclotomic semidirect products](cyclotomic-semidirect-products-preserve-the-kernel-unipotent-property.md).

**Examples.**

- *Edgeless graph:* $G_\Gamma$ is free, and has the property for every $n$ [@minactan2015kernel, Theorem 2.6(a), p. 7].
- *Complete graph on $r$ vertices:* $G_\Gamma=\mathbb Z_p^r$. *Star with $r$ leaves:* $G_\Gamma=\mathbb Z_p\times F_r$. Both have the property for every $n$ and are Galois groups.
- *Square:* the four-cycle is complete multipartite with parts the two pairs of opposite vertices, so $G_\Gamma=F_2\times F_2$ has the property for every $n$ and every $p$. It is not $G_K(p)$ for any $K$ containing a primitive $p$th root of unity [@snopcezalesskii2022, Theorem 1.2, (i) and (v), pp. 3–4]. For $p=2$ Hamza, Maire, Mináč and Tân state the property, as a consequence of their remark on direct products [@hamzamaireminactan2025, Remark 4.11, p. 25]; see [unipotent and Massey tests do not characterize Galois groups](cohomological-tests-do-not-characterize-galois-groups.md).
- *An edge and an isolated vertex:* $G_\Gamma=\mathbb Z_p^2*\mathbb Z_p$, which is a Galois group and fails the property for $n\ge n_0$ by [the counterexample](kernel-unipotent-conjecture-fails-for-zp2-free-product-zp.md).
- *Path on four vertices $a,b,c,d$:* the edge $\{c,d\}$ and the vertex $a$ violate condition 1, so the property fails for $n\ge n_0$. More generally it fails whenever $\Gamma$ has an isolated vertex and at least one edge.

So within right-angled Artin pro-$p$ groups, having the property in every degree and being a Galois group are independent conditions: the square has the first only, and an edge with an isolated vertex has the second only.

**Proof of the theorem.**

*1 implies 2.* For vertices $u,v$ write $u\approx v$ if $u=v$ or $u$ and $v$ are not adjacent. This relation is reflexive and symmetric. For transitivity, let $u\approx v\approx w$. If two of $u,v,w$ are equal, $u\approx w$ is immediate. Otherwise $u,v,w$ are distinct, $v$ is adjacent to neither $u$ nor $w$, and if $u$ and $w$ were adjacent, the edge $\{u,w\}$ and the vertex $v$ would violate condition 1. So $u\approx w$. Let $V_1,\ldots,V_k$ be the classes. Two distinct vertices in one class are not adjacent, and two vertices in different classes are distinct and not related, so they are adjacent. Hence $\Gamma$ is complete multipartite with these parts.

*2 implies 3.* Let $P=F(V_1)\times\cdots\times F(V_k)$. Define $\varphi:G_\Gamma\to P$ by sending $v\in V_i$ to $v$ in the $i$th factor. Adjacent vertices lie in different parts, so their images commute, and $\varphi$ is a continuous homomorphism. Let $\psi_i:F(V_i)\to G_\Gamma$ be the continuous homomorphism with $\psi_i(v)=v$. Let $i\ne j$. In $G_\Gamma$ every vertex of $V_i$ commutes with every vertex of $V_j$. Centralizers in a Hausdorff topological group are closed subgroups. So for $w\in V_j$, $\psi_i^{-1}$ of the centralizer of $w$ is a closed subgroup of $F(V_i)$ containing $V_i$, hence all of $F(V_i)$. Thus each $a\in\psi_i(F(V_i))$ commutes with $V_j$, and the same argument with $\psi_j$ shows that $a$ commutes with $\psi_j(F(V_j))$. As the images of the $\psi_i$ commute elementwise, $\psi(f_1,\ldots,f_k)=\psi_1(f_1)\cdots\psi_k(f_k)$ is a continuous homomorphism $P\to G_\Gamma$. The composites $\varphi\psi$ and $\psi\varphi$ are continuous homomorphisms fixing a set of topological generators, so both are identities.

*3 implies 4.* Let $G=H_1\times\cdots\times H_k$ with each $H_i$ free pro-$p$, and let $n\ge1$. By item 1 of [the $p$-Zassenhaus filtration](p-zassenhaus-filtration.md), applied $k-1$ times, $G_{(n)}=(H_1)_{(n)}\times\cdots\times(H_k)_{(n)}$. Let $g=(h_1,\ldots,h_k)\in G\setminus G_{(n)}$. Then $h_i\notin(H_i)_{(n)}$ for some $i$, and since $H_i$ is free there is a continuous $\rho:H_i\to U_n(\mathbb F_p)$ with $\rho(h_i)\ne1$ [@minactan2015kernel, Theorem 2.6(a), p. 7]. Composed with the projection to $H_i$, it is a continuous homomorphism on $G$ that does not kill $g$. With the inclusion $\subseteq$, $G$ has the kernel $n$-unipotent property. This is the direct product argument noted in [cyclotomic semidirect products](cyclotomic-semidirect-products-preserve-the-kernel-unipotent-property.md) and stated by Hamza, Maire, Mináč and Tân [@hamzamaireminactan2025, Remark 4.11, p. 25].

*4 implies 5.* Immediate.

*5 implies 1.* Suppose condition 1 fails: there are vertices $a,b,c$ with $a$ and $b$ adjacent and $c$ adjacent to neither. Let $\Delta$ be the induced subgraph on $\{a,b,c\}$. Its only edge is $\{a,b\}$, so $G_\Delta=\langle a,b,c\mid[a,b]=1\rangle$ is the group $\mathbb Z_p^2*\mathbb Z_p$ of [the counterexample](kernel-unipotent-conjecture-fails-for-zp2-free-product-zp.md), with $(x,y,z)=(a,b,c)$. Let $\sigma:G_\Delta\to G_\Gamma$ send $a,b,c$ to themselves; it is defined because $a$ and $b$ commute in $G_\Gamma$. Let $\tau:G_\Gamma\to G_\Delta$ send $a,b,c$ to themselves and every other vertex to $1$. It is defined: for an edge $\{v,w\}$ of $\Gamma$, either one of $v,w$ goes to $1$, or $\{v,w\}\subseteq\{a,b,c\}$, in which case $\{v,w\}=\{a,b\}$ since $\Delta$ is induced, and $[a,b]=1$ in $G_\Delta$. Then $\tau\sigma$ fixes $a,b,c$, so $\tau\sigma=\mathrm{id}$. By Corollary 2(i) of [the counterexample](kernel-unipotent-conjecture-fails-for-zp2-free-product-zp.md), $G_\Gamma$ fails the kernel $n$-unipotent property for every $n\ge n_0$, contradicting condition 5. $\square$

**Proof of the corollary.** Two observations about a complete multipartite graph. It has no induced path $a,b,c,d$ on four vertices: $c$ and $d$ would both be nonadjacent to $a$, hence in the part of $a$, but they are adjacent. And it has an induced four-cycle exactly when two parts have at least two vertices each: if $a,b,c,d$ is an induced four-cycle, then $a,c$ lie in one part and $b,d$ in one part, and these parts differ as $a$ and $b$ are adjacent; conversely, two vertices from each of two parts form an induced four-cycle.

(a) implies (b): by the theorem, $\Gamma$ is complete multipartite. Since $G_\Gamma\cong G_K(p)$, $\Gamma$ has no induced four-cycle [@snopcezalesskii2022, Theorem 1.2, (v) implies (i), pp. 3–4], so at most one part has more than one vertex. (b) implies (c): number the parts so that $V_2,\ldots,V_k$ have one vertex each. By the theorem, $G_\Gamma\cong F(V_1)\times\mathbb Z_p^{k-1}$, since $F(\{v\})\cong\mathbb Z_p$. (c) implies (a): $\mathbb Z_p$ is free of rank $1$, so this is 3 implies 4 of the theorem. If (a) fails, $\Gamma$ is not complete multipartite by the theorem, and the property fails for every $n\ge n_0$.

For realizability, let $\Gamma$ be the graph with $r+s$ vertices in which $r$ of them are pairwise nonadjacent and every other pair is adjacent. It is complete multipartite, with parts that $r$-element set (if $r\ge1$) and $s$ single vertices, so $G_\Gamma\cong F_r\times\mathbb Z_p^s$ by the theorem. By the two observations it has no induced four-cycle or four-vertex path, so $G_\Gamma$ is $G_K(p)$ for a field $K$ containing a primitive $p$th root of unity [@snopcezalesskii2022, Theorem 1.2, (i) implies (v), pp. 3–4]. $\square$

**Proposition (small degrees).** This is proved here. For every finite nonempty simple graph $\Gamma$ and every prime $p$, $G_\Gamma$ has the kernel $n$-unipotent property for $n\le3$. No realizability hypothesis is needed.

*Proof.* Write $G=G_\Gamma$. For $n=1$ there is nothing to prove, as $G_{(1)}=G$. For $n=2$, $U_2(\mathbb F_p)\cong\mathbb F_p$, and $G/G_{(2)}=G/G^p[G,G]$ is a finite elementary abelian $p$-group, so its homomorphisms to $\mathbb F_p$ separate its points.

Let $n=3$, and put $m=p$ if $p$ is odd and $m=4$ if $p=2$. By the formulas for $G_{(3)}$ in [the filtration entry](p-zassenhaus-filtration.md), $G_{(3)}$ contains $\gamma_3(G)$, every $y^m$ with $y\in G$, and every $c^p$ with $c\in[G,G]$. Hence $Q=G/G_{(3)}$ has class at most two. It is finite, by item 4 of that entry, so it is generated by the images of the vertices, which generate a dense subgroup of $G$. In a group of class at most two, $[xy,z]=[x,z][y,z]$ and $[x,yz]=[x,y][x,z]$, the commutator subgroup is central, and it is generated by the commutators of generators. Fix an order on $V$. Collecting a word in the vertices then shows that every $g\in G$ satisfies
$$g\equiv\prod_{v\in V}v^{a_v}\prod_{v<w}[v,w]^{b_{vw}}\pmod{G_{(3)}}$$
for some integers $a_v$ and $b_{vw}$, where the second product may be taken over nonadjacent pairs, since $[v,w]=1$ for adjacent $v,w$. Suppose that every continuous $\rho:G\to U_3(\mathbb F_p)$ kills $g$. Each such $\rho$ kills $G_{(3)}$, by item 3 of the filtration entry, so it can be evaluated on the right-hand side.

First fix a vertex $u$. Let $\rho$ send $u$ to $M=1+e_{12}+e_{23}$ and every other vertex to $1$. Adjacent vertices go to commuting matrices, since at most one image is not $1$, so $\rho$ is defined, and it kills every $[v,w]$. Hence $\rho(g)=M^{a_u}$. With $X=e_{12}+e_{23}$ we have $X^2=e_{13}$ and $X^3=0$, so $M^k=1+kX+\binom k2e_{13}$. If $p$ is odd, $M^p=1$ and $M\ne1$, so $M$ has order $p$. If $p=2$, $M^2=1+e_{13}\ne1$ and $M^4=1$, so $M$ has order $4$. In both cases $\rho(g)=1$ forces $m\mid a_u$, so $u^{a_u}\in G_{(3)}$. Hence $g\equiv\prod_{v<w}[v,w]^{b_{vw}}$ modulo $G_{(3)}$.

Now fix a nonadjacent pair $v<w$. Let $\rho$ send $v$ to $1+e_{12}$, $w$ to $1+e_{23}$, and every other vertex to $1$. Only $v$ and $w$ have images other than $1$, and they are not adjacent, so $\rho$ is defined. It kills every commutator of a pair other than $\{v,w\}$, and $[1+e_{12},1+e_{23}]=1+e_{13}$, by the commutator formula in item 3 of the filtration entry. Hence $\rho(g)=1+b_{vw}e_{13}$, and $\rho(g)=1$ forces $p\mid b_{vw}$, so $[v,w]^{b_{vw}}\in G_{(3)}$. Therefore $g\in G_{(3)}$. With the inclusion $\subseteq$, this proves the property for $n=3$. $\square$

**Remarks.**

- *Degrees below $n_0$.* For a graph that is not complete multipartite, the theorem says nothing about degrees $n<n_0$. Two ranges are settled. The property holds for $n\le3$ for every graph, by the proposition on small degrees above. If every component of $\Gamma$ is a complete graph, $G_\Gamma$ is the free pro-$p$ product of free abelian pro-$p$ groups, because both have the same universal property, and the property holds for $n\le2p+2$ by [polynomial factor algebras double the detection range](polynomial-factors-double-the-unipotent-detection-range.md). The other degrees below $n_0$ are not decided here.
- *Coefficients.* Replace $U_n(\mathbb F_p)$ by $U_n(\mathbb F_q)$ for a fixed power $q$ of $p$. The positive direction still holds, as $U_n(\mathbb F_p)\subseteq U_n(\mathbb F_q)$ and every continuous homomorphism to $U_n(\mathbb F_q)$ kills the $n$th Zassenhaus term, by item 3 of [the filtration entry](p-zassenhaus-filtration.md). The proof of the negative direction does not transfer. In the notation of the proof of 5 implies 1, the witness $g\in G_\Delta$ of [the counterexample](kernel-unipotent-conjecture-fails-for-zp2-free-product-zp.md) is detected by some continuous $\rho:G_\Delta\to U_n(\mathbb F_q)$ once $q>n-3$, and then $\rho\tau$ detects its image $\sigma(g)$ in $G_\Gamma$.
- *Other free products.* Free products with a nonabelian rank-two Demushkin factor are not covered. Such a factor has torsion in its abelianization, so the product does too, while the abelianization of $G_\Gamma$ is $\mathbb Z_p^V$; so these products are not right-angled Artin pro-$p$ groups.

**Status.** The direct product step is in the literature as a remark [@hamzamaireminactan2025, Remark 4.11, p. 25]. The classification, and the failure for graphs that are not complete multipartite, were not found in the sources opened or in a search through November 2026, which was not exhaustive.
