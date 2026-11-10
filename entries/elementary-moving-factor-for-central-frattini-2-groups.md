---
title: Central Frattini odd actions have an elementary moving factor
kind: theorem
summary: 'If an odd-order action fixes a central Frattini subgroup of a finite 2-group, the group is a central product of its fixed subgroup and a moving factor whose Frattini subgroup equals its elementary-abelian commutator subgroup. No exponent bound on the original centre is needed.'
tags: [group-theory, local-fields, embedding-problems]
edges:
  - {to: central-product-decomposition-for-odd-actions-on-2-groups, label: generalizes, note: 'Removes the elementary-abelian hypothesis on the central Frattini subgroup and identifies the moving factor through the abelianization of its inverse image.'}
---

**Statement (proved here).** Let a finite odd-order group $T$ act on a finite $2$-group $P$. Suppose $Z=\Phi(P)$ is central and $T$ fixes $Z$ pointwise. Set
$$
V=P/Z,\qquad V_0=V^T,\qquad
V_1=\ker\left(\sum_{t\in T}t:V\longrightarrow V\right).
$$
There are $T$-stable subgroups $C,R\subseteq P$ such that
$$
C=P^T,\quad P=CR,\quad [C,R]=1,\quad
A=C\cap R=\Phi(R)=R',\quad R/A\cong V_1.
\tag{1}
$$
Here $A$ is central elementary abelian, although $Z$ need not be. Thus multiplication gives the central-product description
$$
P\cong(C\times R)/\{(a,a^{-1}):a\in A\}.
\tag{2}
$$
The action on $C$ is trivial and $(R/\Phi(R))^T=0$. For every homomorphism $r:P\rtimes T\to D$ to a finite quotient of a dyadic tame Galois group, one has $r(R)=1$, so $r$ factors through $(C/A)\times T$.

**Proof.** *Separate the fixed quotient vectors.* Since $Z$ is central, $P$ has nilpotency class at most two. Moreover $x^2\in Z$ for every $x\in P$, and therefore
$$
[x,y]^2=[x^2,y]=1.
\tag{3}
$$
Consequently $P'$ is central elementary abelian. Commutators induce a $T$-invariant alternating $\mathbb F_2$-bilinear map $B:V\times V\to Z[2]$.

If $xZ\in V_0$, write $t(x)=xz_t$ with $z_t\in Z$. Since $T$ fixes $Z$, the map $t\mapsto z_t$ is a homomorphism from the odd-order group $T$ to the $2$-group $Z$, hence is trivial. Thus $C=P^T$ is the inverse image of $V_0$ and contains $Z$. Let $E$ be the inverse image of $V_1$. Averaging shows that $V=V_0\oplus V_1$. For $v_0\in V_0$, $v_1\in V_1$, invariance gives
$$
B(v_0,v_1)=\sum_{t\in T}B(v_0,tv_1)=0,
$$
because $|T|$ is odd. Hence $P=CE$, $[C,E]=1$, and $C\cap E=Z$.

*Use the abelianization of $E$.* Write $A=E'$, which is contained in $Z[2]$ by (3), and put $M=E/A$. This is a finite abelian $2$-group with an exact sequence of $T$-modules
$$
0\longrightarrow Z/A\longrightarrow M\longrightarrow V_1\longrightarrow0.
\tag{4}
$$
On any finite abelian $2$-group with $T$-action, the endomorphism
$$
e=|T|^{-1}\sum_{t\in T}t
$$
is an idempotent with image the fixed subgroup: multiplication by the odd integer $|T|$ is invertible. Applied to (4), its image on $M$ is exactly $Z/A$, since this kernel is fixed and $V_1^T=0$. Therefore $\ker(e:M\to M)$ maps isomorphically onto $V_1$.

Define $R$ as the inverse image of this kernel in $E$. Then $E=RZ$, $R\cap Z=A$, and $R/A\cong V_1$. Centrality of $Z$ gives
$$
R'=(RZ)'=E'=A.
$$
Since $R/A$ is elementary abelian, $R^2\subseteq A$ as well, so $\Phi(R)=R^2R'=A$. Combining these identities with $P=CE$ proves (1) and (2). The subgroup $R$ is normal in $P\rtimes T$, since it is $T$-stable and $P=CR$ with $[C,R]=1$.

*Tame images.* Such a group $D$ has a cyclic normal odd-order subgroup, the image of tame inertia, with cyclic quotient. Every $2$-subgroup of $D$ embeds in the cyclic quotient and is cyclic. Thus $r(R)$ is cyclic. Its automorphism group is a $2$-group, so the odd-order group $T$ acts trivially on it. If $r(R)\ne1$, reduction modulo squares gives a nonzero $T$-invariant character
$$
R/\Phi(R)\cong V_1\longrightarrow\mathbb F_2.
$$
But such a character takes the same value on a vector and on its average, which is zero. This contradiction proves $r(R)=1$. Quotienting (2) by $R$ gives $(P\rtimes T)/R\cong(C/A)\times T$. $\square$

**Checks and scope.** If $V_1=0$, then $E=Z$, $A=1$ and $R=1$. If $P$ is abelian and $T$ fixes $\Phi(P)$, the moving factor is elementary abelian. If $V_0=0$, then $C=Z$ and $P=ZR$; because $Z$ is finite abelian and $Z=\Phi(P)=Z^2A$, the quotient $Z/A$ equals its subgroup of squares and is therefore trivial. Thus $Z=A$ and $P=R$ has elementary-abelian Frattini subgroup. Centrality is essential to this proof; it gives both (3) and the inclusion $E'\subseteq Z$ used in (4).
