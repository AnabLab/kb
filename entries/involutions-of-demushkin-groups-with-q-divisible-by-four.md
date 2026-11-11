---
title: Involutions of Demushkin groups with q divisible by four act nontrivially modulo torsion
kind: theorem
summary: 'For a pro-2 Demushkin group of rank at least three with nonzero q divisible by four, the kernels of Aut(D) and Out(D) acting on the abelianization modulo torsion have no nontrivial finite 2-power torsion. This includes G_K(2) for dyadic fields containing i.'
tags: [pro-p-groups, galois-groups, local-fields]
edges:
  - {to: order-p-automorphisms-of-demushkin-groups-act-nontrivially-modulo-torsion, label: analogous-to, note: 'Extends its method to p = 2 and nonzero q divisible by four; the propagation and cofinality steps are proved below.'}
  - {to: torsion-free-finite-extensions-of-demushkin-groups, label: uses, note: 'Theorem parts 1 and 2 give the invariant ranks; Corollary 1 lifts an outer involution acting trivially modulo torsion to an actual involution.'}
  - {to: classification-of-demushkin-groups, label: uses, note: 'The normal form for q different from two gives the index-two subgroup in Step 3.'}
  - {to: demushkin-group, label: uses, note: 'Abelianizations, the index formula and canonical characters.'}
  - {to: subgroups-of-demushkin-groups-of-rank-at-least-three, label: uses, note: 'Infinite Demushkin groups are torsion-free, and those of rank at least three are centre-free.'}
  - {to: maximal-pro-p-galois-groups-of-p-adic-fields, label: uses, note: 'Only for the local-field application.'}
  - {to: demushkin-groups-inside-their-automorphism-groups, label: addresses, note: 'Excludes finite 2-power torsion in the kernel of the action modulo torsion for this class. It does not show that finite normal subgroups of Out(D) lie in that kernel.'}
---

**Setting.** For a pro-$2$ [Demushkin group](demushkin-group.md) $B$, put
$$
V_B=B^{\mathrm{ab}}/\mathrm{torsion},\qquad K_B=\ker(B\longrightarrow V_B).
$$
All homomorphisms and automorphisms are continuous. Assume throughout the proof that $n(B)\ge3$ and $q(B)=2^s$ with $2\le s<\infty$. Then $n(B)$ is even, hence at least four, and $V_B$ has rank $n(B)-1$ over $\mathbb Z_2$ [@labute1967, p. 106].

**Theorem (proved here).** Let $D$ satisfy these assumptions. If $\sigma\in\operatorname{Aut}(D)$ satisfies $\sigma^2=1$ and acts trivially on $V_D$, then $\sigma=1$. Consequently the kernels of
$$
\operatorname{Aut}(D)\longrightarrow\operatorname{GL}(V_D),\qquad
\operatorname{Out}(D)\longrightarrow\operatorname{GL}(V_D)
$$
contain no nonidentity element of finite $2$-power order. In particular every finite $2$-subgroup of either automorphism group acts faithfully on $V_D$.

**Proof.** This follows the method of the [odd-prime theorem](order-p-automorphisms-of-demushkin-groups-act-nontrivially-modulo-torsion.md). The following argument checks the steps at $2$ rather than applying that theorem outside its hypotheses.

*1. Nonzero $q$ persists on open subgroups.* The canonical character of $B$ has image $1+2^s\mathbb Z_2$ [@labute1967, p. 106]. On an open subgroup $U$, the canonical character is its restriction: the dualizing module restricts to the dualizing module of $U$, as used in the proof of part 2 of the [torsion-free extension theorem](torsion-free-finite-extensions-of-demushkin-groups.md). The image of $U$ has finite index in that of $B$, so it is infinite and contained in $1+4\mathbb Z_2$. Thus $q(U)$ is again nonzero and divisible by four. Also
$$
n(U)-2=(B:U)(n(B)-2)
$$
[@serre1963, 9.2, pp. 153–154]. If a torsion-free pro-$2$ group $E$ contains $U$ as an open normal subgroup, part 1 of the torsion-free extension theorem makes $E$ Demushkin. Since $q(U)\ne0$, its part 2 gives $\delta(E)\le\delta(U)=0$, so
$$
\dim_{\mathbb Q_2}\operatorname{Hom}(U,\mathbb Q_2)^{E/U}
=1+\frac{n(U)-2}{(E:U)}.
\tag{1}
$$
Here $\delta(G)=1$ for $q(G)=0$, and zero otherwise. Thus the loss of equality of the two $\delta$'s at $p=2$ causes no problem in this setting.

*2. Propagation to an abelian cover.* Suppose $\tau^2=1$ on $B$ and $\tau$ acts trivially on $V_B$. Let $U$ be open with $K_B\subseteq U$. Then $U$ is normal in $B$, is $\tau$-stable, and $\tau$ acts trivially on $B/U$. Form $E=B\rtimes\langle t\rangle$, where $t^2=1$ acts by $\tau$. Put $a=(B:U)$ and
$$
G=E/U=(B/U)\times\langle\bar t\rangle,\qquad
M=\operatorname{Hom}(U,\mathbb Q_2).
$$
An element of order two in $E$ has the form $bt$, since $B$ is torsion-free. Its square is $b\tau(b)=1$. In $V_B$ this says $2[b]=0$, hence $b\in K_B$. Therefore all involutions of $E$ map to $\bar t$ in $G$.

If a cyclic subgroup $C\subseteq G$ does not contain $\bar t$, its preimage in $E$ has no involution and is torsion-free: any nontrivial finite-order element of a pro-$2$ group has a power of order two. Formula (1) gives
$$
\dim M^C=1+\frac{n(U)-2}{|C|}.
\tag{2}
$$
Restriction identifies $\operatorname{Hom}(B,\mathbb Q_2)$ with $M^{B/U}$: the restriction map is injective, and (1) shows equal dimensions. This identification commutes with $\tau$. Since $\tau$ acts trivially on $V_B$, it follows that
$$
\dim M^G=n(B)-1.
\tag{3}
$$

Write $\chi$ for the character of $M$. For any $g\in G$, its odd powers have the same trace. Indeed, if $g$ has order $2^b$, decompose $M$ using the factors $\Phi_{2^j}$ of $X^{2^b}-1$. Each $\Phi_{2^j}$ is irreducible over $\mathbb Q_2$, by Eisenstein after replacing $X$ by $X+1$ for $j\ge1$. On each summand the eigenvalues are conjugate primitive $2^j$-th roots, so an odd power has the same field trace.

We claim $\chi(g)=1$ for $g\notin\{1,\bar t\}$. The cyclic group $C=\langle g\rangle$ cannot contain $\bar t$: writing $g=(b,\bar t^i)$, a power equal to $\bar t$ would have odd exponent and force $b=1$, contrary to the choice of $g$. Induct on the order of $g$. The nongenerators of $C$ form its subgroup of index two. Except for $1$, they have trace one by induction, and $\chi(1)=n(U)-1$. The generators all have trace $\chi(g)$ by the preceding paragraph. Summing traces and using (2) gives
$$
|C|+n(U)-2
=n(U)-2+\frac{|C|}{2}+\frac{|C|}{2}\chi(g),
$$
proving the claim. Equations (3) and $|G|=2a$ now give
$$
2a(n(B)-1)=\sum_{g\in G}\chi(g)
=n(U)-1+(2a-2)+\chi(\bar t).
$$
Using $n(U)-2=a(n(B)-2)$ yields $\chi(\bar t)=n(U)-1=\dim M$. An involution over $\mathbb Q_2$ is diagonalizable with eigenvalues $1,-1$, so $\bar t$ acts trivially on $M$. Hence $\tau$ acts trivially on $V_U$, since $\operatorname{Hom}(U,\mathbb Z_2)$ is its full integral dual.

*3. An index-two cover detects every mod-two character.* We prove that there is an open normal subgroup $B_1\subseteq B$ of index two containing $K_B$ such that
$$
f(K_{B_1})=0\quad\text{for every }f:B\longrightarrow\mathbb F_2.
\tag{4}
$$
Use the [normal form](classification-of-demushkin-groups.md)
$$
B=\langle x_1,\ldots,x_n\mid
x_1^q(x_1,x_2)(x_3,x_4)\cdots(x_{n-1},x_n)=1\rangle,
\qquad (x,y)=x^{-1}y^{-1}xy,
$$
with $q=q(B)$ [@labute1967, p. 106, equation (1)]. Let $A=\mathbb Z_2[c]/(c^2-1)$, and let $\Gamma=A\rtimes C_2$, with $c$ acting by multiplication on $A$. Define a map to $\Gamma$ by
$$
x_1\longmapsto(c-1,1),\quad x_3\longmapsto(0,c),\quad
x_4\longmapsto(q,1),\quad x_j\longmapsto(0,1)\ (j\ne1,3,4).
$$
The power term maps to $(q(c-1),1)$ and $(x_3,x_4)$ maps to $(q(1-c),1)$; all other commutators map to one. Thus the map descends to $B$. Let $B_1$ be the kernel of its projection to $C_2$. This projection kills the torsion class of $x_1$ in $B^{\mathrm{ab}}$, and so $K_B\subseteq B_1$.

Taking the coefficient of $1\in A$ defines a homomorphism $h:B_1\to\mathbb Z_2$. Its reduction modulo two is the restriction of the character $\theta:B\to\mathbb F_2$ with $\theta(x_1)=1$, $\theta(x_j)=0$ for $j\ne1$. To check this, use the generators
$$
x_j,\ x_3x_jx_3^{-1}\ (j\ne3),\qquad x_3^2
$$
of $B_1$. They generate because their closed generated subgroup is normalized by $x_3$, contains every other generator of $B$, and has quotient generated by $x_3$ of order at most two. On the two conjugates of $x_1$, the coefficients are $-1,1$, both odd; on those of $x_4$ they are $q,0$, both even; all other values are zero. Thus $\theta(K_{B_1})=0$. Any $f-f(x_1)\theta$ lifts to a homomorphism $B\to\mathbb Z_2$, since it kills $x_1$ and the other generators freely generate $V_B$. Its restriction vanishes on $K_{B_1}$ too. This proves (4).

*4. Cofinality and conclusion.* Call a subgroup reachable if it is the last term of a finite chain starting at $D$, in which each next term is open and contains the kernel $K$ of the preceding term's map to its abelianization modulo torsion. Such subgroups are cofinal among open subgroups. Here is the index induction, valid for every $B$ in Step 1. Let $W\triangleleft B$ be open and proper, and choose $B_1$ as in Step 3. If $W\subseteq B_1$, apply induction to $B_1,W$, whose index is smaller. Otherwise $B_1W=B$. Choose a nonzero $f:B/W\to\mathbb F_2$, and put $B_2=B_1\cap\ker f$. Since $f(B_1)=f(B)\ne0$ and (4) holds, $B_2$ is open of index two in $B_1$ and contains $K_{B_1}$. Also $W\cap B_1=W\cap B_2$ is normal in $B_2$, of index $(B:W)/2$. Apply induction there. The base case is $W=B$; passing to the normal core handles every open subgroup.

By Step 2, $\sigma$ preserves each reachable $U$ and acts trivially on $V_U$. Induct along its chain to show, in addition, that $d=x\sigma(x)^{-1}\in K_U$ for every $x\in D$. This holds at $U=D$. At a next term $U$, the previous assertion puts $d$ in $U$. Since $d\sigma(d)=1$ and $\sigma$ acts trivially on $V_U$, its image in $V_U$ is killed by two, hence zero. Thus $d\in K_U$. Cofinality now puts $d$ in every open normal subgroup of $D$, so $d=1$ and $\sigma=1$.

An automorphism of order $2^a>1$ in the kernel would have a nontrivial power of order two. An outer involution in the kernel lifts to an actual involution by Corollary 1 of the [torsion-free extension theorem](torsion-free-finite-extensions-of-demushkin-groups.md), contradicting what was just proved. Taking powers excludes all finite $2$-power orders in the outer kernel too. The assertion about finite $2$-subgroups follows by applying this to the kernel of their action. $\square$

**Application and limits.** For a finite extension $K/\mathbb Q_2$ containing $i$, the [maximal pro-two Galois group](maximal-pro-p-galois-groups-of-p-adic-fields.md) $G_K(2)$ has rank $[K:\mathbb Q_2]+2$ and nonzero $q$ divisible by four, so the theorem applies. It does not address the case $q=2$, or prove that $D$ is characteristic in $\operatorname{Aut}(D)$: the assertion that finite normal subgroups of $\operatorname{Out}(D)$ act trivially on $V_D$ has been proved here only for odd primes in [the finite-conjugacy theorem](outer-automorphisms-of-demushkin-groups-with-finitely-many-conjugates.md).

Rank at least three is essential. For $q=4$ and rank two the relation is equivalent to $y^{-1}xy=x^{-3}$. The map $x\mapsto x^{-1}$, $y\mapsto y$ preserves this relation, squares to one and fixes $V_D$, generated by the class of $y$. It is nonidentity: the semidirect product $\mathbb Z_2\rtimes\mathbb Z_2$ in which $y^{-1}$ acts on $\langle x\rangle$ by multiplication by $-3\in1+4\mathbb Z_2$ realizes this relation with $x$ of infinite order. The theorem makes no assertion about odd-order torsion in either kernel.
