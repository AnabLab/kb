---
title: Finite discriminant data distinguishes local fields but does not certify geometric automorphisms
kind: theorem
summary: A finite characteristic Galois quotient with normal-subextension discriminants distinguishes any fixed pair of nonisomorphic p-adic fields, uniformly in bounded absolute degree. For odd p, every finite quotient still misses nongeometric automorphisms.
tags: [local-fields, galois-groups, ramification, reconstruction-algorithms]
edges:
  - {to: galois-subextension-discriminants-recover-ramification, label: uses, note: "Preservation of all finite Galois subextension discriminants characterizes geometric outer isomorphisms."}
  - {to: local-galois-group-presentations, label: uses, note: "Finite generation for every prime, including 2, makes the characteristic quotients finite."}
  - {to: tame-automorphisms-lift-to-the-absolute-galois-group-for-odd-p, label: uses, note: "Part 4 gives an infinite outer automorphism group for every finite extension of Q_p when p is odd."}
---

**Finite data.** Fix a prime $p$. For a finite extension $K/\mathbb Q_p$ write $G_K=\operatorname{Gal}(\bar K/K)$ and, for $m\ge1$, put
$$
C_m(G_K)=\bigcap_{\substack{N\trianglelefteq G_K\text{ open}\\[G_K:N]\le m}}N,
\qquad Q_m(K)=G_K/C_m(G_K).
\tag{1}
$$
For every normal subgroup $\bar U$ of $Q_m(K)$, let $U$ be its inverse image in $G_K$ and attach the integer
$$
\Delta_{K,m}(\bar U)=v_K\bigl(\operatorname{disc}(\mathcal O_{\bar K^U}/\mathcal O_K)\bigr),
\tag{2}
$$
where $v_K$ is normalized. Denote this finite group with its attached integers by $S_m(K)$. An isomorphism $S_m(K)\cong S_m(L)$ means a group isomorphism that preserves (2) on every normal subgroup. The data include which subgroup carries each integer, rather than only the multiset of integers.

**Theorem (proved here).**

1. For finite $K,L/\mathbb Q_p$, one has $K\cong_{\mathbb Q_p}L$ if and only if $S_m(K)\cong S_m(L)$ for every $m$. Consequently, any fixed nonisomorphic pair is distinguished at a finite level. For every $d\ge1$ there is an $M=M(p,d)$ such that $S_M$ distinguishes all $\mathbb Q_p$-isomorphism classes with absolute degree at most $d$. These assertions include $p=2$.
2. If $p$ is odd, then for every finite $K/\mathbb Q_p$ and every $m$ there is a nongeometric outer automorphism with a representative $\alpha\in\operatorname{Aut}(G_K)$ inducing the identity on $Q_m(K)$. In particular, for any $B\ge1$, there is such an $\alpha$ satisfying
$$
\alpha(U)=U,\qquad
\Delta_K(\alpha(U))=\Delta_K(U)
\quad\text{for every open }U\le G_K\text{ with }[G_K:U]\le B,
\tag{3}
$$
where $\Delta_K(U)$ is the discriminant exponent of $\bar K^U/K$, also when this extension is not Galois. Nevertheless, $\alpha$ fails the discriminant equality at some open normal subgroup of larger index.

Here an outer automorphism is *geometric* if it is induced by a $\mathbb Q_p$-automorphism of $K$.

**Proof of 1.** The group $G_K$ is topologically finitely generated for every $p$ [@jardenshusterman2023, Theorem 2.1, p. 2]. If a profinite group $G$ has $r$ generators, it has only finitely many open normal subgroups of index at most $m$: there are finitely many finite groups of order at most $m$, and a homomorphism to any one is determined by the images of those $r$ generators. Thus $C_m(G)$ is open and characteristic. These subgroups decrease with $m$ and are cofinal among open normal subgroups, since $C_{[G:N]}(G)\subseteq N$. Hence
$$
G\cong\varprojlim_m G/C_m(G).
\tag{4}
$$

The essential compatibility is intrinsic to the finite quotients. For $n\ge m$, the normal subgroups of $G$ of index at most $m$ all contain $C_n(G)$. The subgroup correspondence therefore gives
$$
C_m\bigl(G/C_n(G)\bigr)=C_m(G)/C_n(G).
\tag{5}
$$
Any isomorphism $Q_n(K)\cong Q_n(L)$ descends to one at level $m$. If it preserves the discriminants, its descended map does too: a normal subgroup at level $m$ and its inverse image at level $n$ have the same inverse image in the absolute group, hence the same field in (2).

Let $A_m$ be the finite set of isomorphisms $S_m(K)\cong S_m(L)$. Suppose all $A_m$ are nonempty. Equation (5) supplies restriction maps $A_n\to A_m$, though they need not be surjective. There is still a compatible sequence: in the compact product $\prod_m A_m$, every finite collection of compatibility equations is satisfied by choosing an element at the largest index involved and restricting it, and then filling the other coordinates arbitrarily. The closed equations consequently have a common solution. By (4), this sequence induces an isomorphism $\alpha:G_K\cong G_L$.

Every open normal $U$ contains some $C_m(G_K)$, so compatibility and (2) imply
$$
\Delta_K(U)=\Delta_L(\alpha(U))
\quad\text{for every open normal }U\trianglelefteq G_K.
$$
The [Galois-subextension discriminant criterion](galois-subextension-discriminants-recover-ramification.md) makes this outer isomorphism geometric: it recovers the upper ramification filtration on every finite quotient and applies [@mochizuki1997, Theorem 4.2, pp. 7–8]. Thus $K\cong_{\mathbb Q_p}L$. Conversely, a field isomorphism preserves (1) and normalized discriminants, and gives an isomorphism at every level.

For the uniform assertion, there are only finitely many $\mathbb Q_p$-isomorphism classes of fields of degree at most $d$, by the classical finiteness recalled in [@pauliroblot2001, Abstract and §1, p. 1641]. Choose one distinguishing level for each pair of distinct classes, and take their maximum together with $1$. An isomorphism at this maximum level would descend by (5) to each earlier level, which proves the assertion. $\square$

**Proof of 2.** Put $A=\operatorname{Aut}(G_K)$ and
$$
A_m=\ker\bigl(A\longrightarrow\operatorname{Aut}(Q_m(K))\bigr).
$$
Its index in $A$ is finite. Its image $H_m$ in $\operatorname{Out}(G_K)$ therefore also has finite index. For odd $p$, [tame lifting, part 4](tame-automorphisms-lift-to-the-absolute-galois-group-for-odd-p.md) shows that $\operatorname{Out}(G_K)$ is infinite. Hence $H_m$ is infinite. Only finitely many outer classes are geometric, since $\operatorname{Aut}_{\mathbb Q_p}(K)$ is finite. Choose a nongeometric class in $H_m$ and a representative in $A_m$.

To obtain (3), use this argument with $m=B!$. If $[G_K:U]=b\le B$, the action on its cosets gives an open normal core $N\subseteq U$ of index at most $b!\le B!$. Thus $C_{B!}(G_K)\subseteq U$. An automorphism inducing the identity modulo this characteristic subgroup fixes $U$ itself, proving (3). If the discriminant equality also held for every open normal subgroup of index greater than $B$, it would hold for all open normal subgroups. The same discriminant criterion would make the outer class geometric, a contradiction. $\square$

**Scope.** Part 1 gives a finite invariant for distinguishing fields within any fixed degree bound, without an explicit bound for $M(p,d)$. It does not assert that an isomorphism of one finite signature lifts to an isomorphism of absolute Galois groups. Part 2 shows why a finite identification of the field cannot certify that a specified Galois-group automorphism is geometric. Its odd-prime restriction comes from the input on the size of the outer automorphism group. The compactness deductions here make no claim of novelty beyond the knowledgebase.
