---
title: Squareclass actions of dyadic classification involutions
kind: theorem
summary: 'For finite K/Q2 without i, the involution on the squareclasses of K(i), even with the image of K marked, depends only on the degree of K. Odd degree gives a free F2[C2]-module; even degree gives degree-many regular blocks and two trivial blocks.'
tags: [local-fields, galois-groups, galois-cohomology, kummer-theory]
edges:
  - {to: dyadic-galois-groups-from-outer-involutions, label: addresses, note: 'The induced squareclass module, even with the restriction image marked, cannot distinguish the outer involutions for fields of the same degree.'}
  - {to: isomorphism-classes-of-p-adic-galois-groups, label: addresses, note: 'Removes this linear test for the remaining dyadic conjugacy question; it proves no new isomorphism of absolute Galois groups.'}
  - {to: multiplicative-group-of-a-p-adic-field, label: uses, note: 'The squareclass dimension of a dyadic field of degree d is d+2.'}
  - {to: local-class-field-theory, label: uses, note: 'Norm subgroups have the index of the corresponding abelian extension; norm compatibility gives the parity calculation for K(i)/K.'}
  - {to: kummer-theory, label: uses, note: 'Identifies squareclasses with mod-2 characters, equivariantly for the quadratic Galois action.'}
---

**Setting.** Let $K/\mathbb Q_2$ be finite of degree $n$, and let $L=K(\sqrt a)$ be a quadratic extension. Write $C_2=\langle\sigma\rangle=\operatorname{Gal}(L/K)$ and
$$
B=K^\times/K^{\times2},\qquad V=L^\times/L^{\times2},\qquad
r:B\longrightarrow V,\qquad W=r(B).
$$
These are vector spaces over $\mathbb F_2$, written additively. Put $\varepsilon=1$ if $-1\in N_{L/K}(L^\times)$, and $\varepsilon=0$ otherwise. A regular block means the two-dimensional module $\mathbb F_2[C_2]$; a trivial block means $\mathbb F_2$ with trivial action.

**Theorem (proved here).**

1. For every such quadratic extension,
   $$
   V\cong\mathbb F_2[C_2]^{\,n+1-\varepsilon}
       \oplus\mathbb F_2^{\,2\varepsilon}.
   \tag{1}
   $$
   Moreover
   $$
   (\sigma-1)V\subseteq W\subseteq V^{C_2},\qquad
   \dim W=n+1,\qquad \dim V^{C_2}=n+1+\varepsilon.
   \tag{2}
   $$
   The isomorphism class of the pair $(V,W)$, under $C_2$-equivariant linear isomorphisms carrying the indicated subspace onto the indicated subspace, depends only on $(n,\varepsilon)$.
2. Suppose $i\notin K$ and $L=K(i)$, where $i^2=-1$. Then $\varepsilon=1$ exactly when $n$ is even. Thus
   $$
   V\cong
   \begin{cases}
   \mathbb F_2[C_2]^{\,n+1},&n\text{ odd},\\
   \mathbb F_2[C_2]^{\,n}\oplus\mathbb F_2^2,&n\text{ even}.
   \end{cases}
   \tag{3}
   $$
   In particular, the pair $(V,W)$ depends only on $n$, without a ramification assumption on $L/K$.

**Proof of part 1.** The [multiplicative structure](multiplicative-group-of-a-p-adic-field.md) gives
$$
\dim B=n+2,\qquad \dim V=2n+2.
$$
Indeed, for a dyadic field of degree $d$, the valuation factor and the nontrivial cyclic group of $2$-power roots of unity each contribute one squareclass dimension, its free principal-unit factor contributes $d$, and its residue roots of unity have odd order [@fesenkovostokov2002, Chapter IV, proof of (1.2), p. 113; (1.4), pp. 114–115].

The kernel of $r$ is the line $\langle[a]\rangle$. To check this directly, if $b\in K^\times$ is a square in $L$, write $b=(u+v\sqrt a)^2$ with $u,v\in K$. The coefficient $2uv$ of $\sqrt a$ vanishes. Hence either $b$ is a square in $K$ or $b=av^2$. Since $a$ is not a square in $K$, this proves the kernel assertion and $\dim W=n+1$.

The norm induces a linear map $\nu:V\to B$. Its image is
$$
H=N_{L/K}(L^\times)/K^{\times2}\subset B,
$$
because $N_{L/K}(b)=b^2$ for $b\in K^\times$. Local reciprocity gives $[K^\times:N_{L/K}(L^\times)]=2$, so $\dim H=n+1$ [@milnecft, Chapter I, Theorem 1.1(b), p. 20]. Also $N_{L/K}(\sqrt a)=-a$, so $[a]\in H$ exactly when $-1$ is a norm. Consequently
$$
\dim(H\cap\ker r)=\varepsilon.
$$
For $x\in L^\times$, the squareclass of $x\sigma(x)$ is both $r\nu([x])$ and $(\sigma-1)[x]$, since subtraction equals addition over $\mathbb F_2$. It follows that
$$
\operatorname{rank}(\sigma-1)=\dim r(H)=n+1-\varepsilon.
\tag{4}
$$
The endomorphism $T=\sigma-1$ satisfies $T^2=0$. Choose a basis $z_1,\ldots,z_t$ of $\operatorname{im}T$ and vectors $e_j$ with $Te_j=z_j$. The vectors $e_j,z_j$ are independent: applying $T$ to a linear relation first kills all coefficients of the $e_j$. Extend the $z_j$ to a basis of $\ker T$ by vectors $u_1,\ldots,u_s$. These vectors together form a basis of $V$, and each span $\langle e_j,z_j\rangle$ is a regular block, while each $\langle u_j\rangle$ is trivial. Equation (4) gives $t=n+1-\varepsilon$ and $s=(2n+2)-2t=2\varepsilon$, proving (1).

The inclusion $\operatorname{im}T\subseteq W$ follows from $T=r\nu$, while $W\subseteq\ker T$ holds because $\sigma$ fixes $K$. Rank-nullity proves the last dimension in (2). If $\varepsilon=0$, both inclusions are equalities. If $\varepsilon=1$, choose $u_1\in W$ whose image spans $W/\operatorname{im}T$, and $u_2\in\ker T$ whose image completes this to a basis of $\ker T/\operatorname{im}T$. The preceding block basis then has
$$
W=\langle z_1,\ldots,z_n,u_1\rangle.
$$
This describes the pair by $(n,\varepsilon)$ alone. $\square$

**Proof of part 2.** Write $\operatorname{rec}_F$ for local reciprocity. Its compatibility with norms gives
$$
\operatorname{rec}_K(-1)|_{\mathbb Q_2(i)}
=\operatorname{rec}_{\mathbb Q_2}\bigl(N_{K/\mathbb Q_2}(-1)\bigr)|_{\mathbb Q_2(i)}
=\operatorname{rec}_{\mathbb Q_2}((-1)^n)|_{\mathbb Q_2(i)}
\tag{5}
$$
[@milnecft, Chapter III, Lemma 3.2, p. 107]. This does not require $K/\mathbb Q_2$ to be Galois: apply the lemma inside a finite Galois extension of $\mathbb Q_2$ containing $K(i)$ and then restrict to $\mathbb Q_2(i)$.

The element $-1$ is not a norm from $\mathbb Q_2(i)$: an equation $x^2+y^2=-1$ over $\mathbb Q_2$ would, after scaling by a power of $2$, give a zero of $X^2+Y^2+Z^2$ in $\mathbb Z_2^3$ with at least one coordinate odd, which is impossible modulo $4$. The norm-kernel statement of reciprocity therefore makes $\operatorname{rec}_{\mathbb Q_2}(-1)$ nontrivial on $\mathbb Q_2(i)$ [@milnecft, Chapter I, Theorem 1.1(b), p. 20]. Since an automorphism fixing $K$ fixes $K(i)$ exactly when it fixes $i$, equation (5) and the same norm-kernel statement for $L/K$ show that $-1$ is a norm from $L$ exactly when $n$ is even. Part 1 now gives (3) and the assertion about $W$. $\square$

**Application to the classification.** The [outer involution](dyadic-galois-groups-from-outer-involutions.md) $\iota_K$ acts on $H^1(G_{K(i)},\mathbb F_2)$. Inner automorphisms act trivially on characters. The Kummer identification with $V$ is equivariant [@milnecft, Chapter III, §4, Step 2, p. 112]: if $s\in G_K$ induces $\sigma$, then the character of $\sigma(a)$ sends $g$ to the character of $a$ evaluated at $s^{-1}gs$. Under the same identification, $W$ is the restriction image of $H^1(G_K,\mathbb F_2)$. Thus for any two fields of the same degree without $i$, their induced involutions are conjugate in the general linear group, even with these restriction images marked.

**Small checks.** For $K=\mathbb Q_2$, the norms of $1+i$ and $1+2i$ are $2$ and $5$. The classes of $2$ and $5$ remain independent in $L$: a relation would make $2^\alpha5^\beta$ equal to a square or minus a square in $\mathbb Q_2$, with $\alpha,\beta\in\{0,1\}$. Valuation parity forces $\alpha=0$, and $5$ and $-5$ are not squares modulo $8$, forcing $\beta=0$. Thus $T$ has rank at least $2$; since $T^2=0$ and $\dim V=4$, its rank is exactly $2$, as (3) predicts. For the even-degree field $K=\mathbb Q_2(\sqrt{-2})$, one has $i\notin K$ and
$$
N_{K(i)/K}(1+\sqrt{-2}\,i)=1-2=-1.
$$
This explicitly realizes $\varepsilon=1$, giving two regular and two trivial blocks by (1). In degree $4$, formula (3) gives four regular blocks and two trivial blocks; $W$ has dimension $5$, while the fixed space has dimension $6$.

**Scope.** This removes the unpaired mod-$2$ character module, even with its restriction image, as a way to distinguish the involutions in the remaining [dyadic classification](isomorphism-classes-of-p-adic-galois-groups.md). The constructed linear conjugacy is not shown to preserve cup products or to come from an automorphism of $G_{K(i)}$. Conjugacy in the full outer automorphism group remains open.
