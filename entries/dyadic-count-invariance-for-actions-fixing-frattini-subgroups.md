---
title: Dyadic count invariance for actions fixing Frattini subgroups
kind: theorem
summary: 'Every tame automorphism preserves marked surjection counts to P semidirect T when T has odd order and fixes the Frattini subgroup of P pointwise. Centrality is unnecessary; a central product of D16 and Q8 gives a noncentral example of order 192.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: odd-actions-fixing-frattini-subgroups-have-central-moving-factors, label: uses, note: 'Separates an arbitrary fixed 2-group from a moving factor with central elementary-abelian Frattini subgroup; every tame marking kills the moving factor.'}
  - {to: dyadic-central-frattini-counts-at-arbitrary-exponent, label: uses, note: 'Extends the obstruction-fibre calculation in proof Steps 2–3 to the new decomposition; Frattini centrality inside the fixed factor is not used in that calculation.'}
  - {to: dyadic-central-frattini-counts-at-arbitrary-exponent, label: analogous-to, note: 'Here the Frattini subgroup may be noncentral but must be fixed pointwise; there it must be central but may have nontrivial odd-order action.'}
  - {to: odd-order-equivariant-cup-module-over-dyadic-fields, label: uses, note: 'Makes every moving obstruction fibre independent of the odd-order marking.'}
  - {to: local-tate-duality, label: uses, note: 'Identifies the central obstruction group and counts lifts through its elementary-abelian kernel.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Supplies marked counts and identity of tame automorphisms on the unramified quotient.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes a family of noncentral Frattini targets from all tame marked-count obstructions, without constructing compatible lifts.'}
---

**Theorem (proved here).** Let $k/\mathbb Q_2$ have degree $d$, with tame quotient $\pi:G_k\twoheadrightarrow\Gamma$. Let a finite odd-order group $T$ act on a finite $2$-group $P$ and fix $\Phi(P)$ pointwise. Set $H=P\rtimes T$. For every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$, $r:H\twoheadrightarrow D$,
$$
\#\{h:G_k\twoheadrightarrow H:rh=q\pi\}
=\#\{h:G_k\twoheadrightarrow H:rh=q\alpha\pi\}.
\tag{1}
$$
All maps are continuous and actual maps are counted separately, including conjugates. There is no assumption on the centrality, exponent or nilpotency class of $\Phi(P)$.

**Proof.** The [decomposition theorem](odd-actions-fixing-frattini-subgroups-have-central-moving-factors.md) gives
$$
C=P^T,\quad R=[P,T],\quad P=CR,\quad [C,R]=1,\quad
A=C\cap R=R'=\Phi(R),\quad U=R/A,\quad Q=C/A.
$$
Here $A$ is central elementary abelian, $T$ fixes $C$ pointwise, and $U^T=0$. Write $a=\dim A$ and $u=\dim U$. Multiplication gives a central extension
$$
1\longrightarrow A\longrightarrow H
\longrightarrow Q\times(U\rtimes T)\longrightarrow1.
\tag{2}
$$
The key point is that the fixed factor $C$ need not have central Frattini subgroup: only the kernel $A$ in (2) must be central.

*1. Retain the obstruction of the entire fixed factor.* Fix epimorphisms $\beta:G_k\twoheadrightarrow Q$ and $\epsilon:G_k\twoheadrightarrow T$. Identify $\mathbb F_2=\mu_2$ and $H^2(k,A)=A$ by the local invariant, and let $c_\beta\in A$ be the obstruction for $C\to Q$ pulled back by $\beta$.

Let $(J_d,b_d)$ be the paired augmentation module of the [odd-order cup-module theorem](odd-order-equivariant-cup-module-over-dyadic-fields.md). Commutators of $R$ give $B:U\times U\to A$. For a basis $v_i$ of $U$ with dual $\xi_i$, define
$$
\Omega(f)=\sum_{i<j}B(v_i,v_j)b_d(f(\xi_i),f(\xi_j)),\qquad
N_d(c)=\#\{f:U^*\hookrightarrow J_d\text{ $T$-linear}:\Omega(f)=c\}.
\tag{3}
$$
This contraction is basis independent: the pulled-back alternating form on $U^*$ is an element of $\bigwedge^2U$, to which $B$ is applied. We claim that the number of surjections to $H$ above $(\beta,\epsilon)$ is
$$
M(\beta,\epsilon)=2^{u+a(d+2)}N_d(c_\beta),
\tag{4}
$$
which is independent of $\epsilon$.

Here is the calculation, making explicit why a noncentral $\Phi(C)$ causes no change to [Steps 2–3 of the central Frattini count proof](dyadic-central-frattini-counts-at-arbitrary-exponent.md). Let $L/k$ be cut out by $\epsilon$. Maps to $U\rtimes T$ over $\epsilon$ are cocycles. Restriction identifies their classes with $T$-linear maps $f:U^*\to H^1(L,\mathbb F_2)$, since positive-degree cohomology of the odd-order group $T$ on $2$-primary modules vanishes by averaging. Because $U^T=0$, the image lies in the nontrivial summand, isometrically $J_d$. A class has $2^u$ representatives, and its restriction to $G_L$ surjects onto $U$ exactly when $f$ is injective.

For lifts $t_i\in R$ of $v_i$, an ordered section of $R\to U$ has factor set
$$
F_R(x,y)=\sum_i t_i^2x_iy_i+
\sum_{i<j}B(v_i,v_j)x_jy_i\quad\text{in }A.
$$
The square terms vanish after pullback because the cup form on the nontrivial summand is alternating. The remaining obstruction is $\Omega(f)$. Restriction $H^2(k,A)\to H^2(L,A)$ is injective: its composition with corestriction is multiplication by odd $|T|$. With the local identifications with $A$ it is the identity, coordinate by coordinate.

A section of $C\to Q$ has a factor set in $A$ regardless of the nilpotency class of $C$. Since $C$ and $R$ commute, the factor set of (2) restricts on $G_L$ to the sum of the two factor sets, without a mixed term. Thus the lift obstruction is $c_\beta+\Omega(f)$. Conjugating by an element of $U$ changes the cocycle representative and lifts to conjugation by $R$, fixing the $Q$ coordinate. Consequently the same obstruction test holds for every representative. Each unobstructed actual quotient map has $|H^1(k,A)|=2^{a(d+2)}$ lifts by [local duality and the Euler characteristic](local-tate-duality.md).

These lifts are surjective when $f$ is injective. Indeed
$$
\Phi(P)=\Phi(C)A,\qquad
P/\Phi(P)\cong Q/\Phi(Q)\oplus U.
\tag{5}
$$
These identities follow by taking squares and commutators in $P=CR$ with commuting factors. The image of $G_L$ in (5) is $T$-stable and projects onto $U$. It projects onto $Q/\Phi(Q)$ as well: $\beta(G_L)=Q$, since $Q/\beta(G_L)$ is both a $2$-group and a quotient of odd-order $T$. Averaging splits the image into the fixed and moving summands, so it is all of (5). The Frattini property then gives the whole subgroup $P$ in the image, and the $T$ projection is already surjective. Conversely every surjection must surject onto $U\rtimes T$, forcing injectivity of $f$. This proves (4), including zero counts.

*2. Preserve the entire tame marking.* The decomposition theorem gives $r(R)=1$. Thus $r$ factors through $Q\times T$, whose two images commute and have coprime orders. Write
$$
D=D_2\times D_o,\qquad r=(r_2,r_o),\qquad q=(q_2,q_o),
$$
with $r_2:Q\twoheadrightarrow D_2$ and $r_o:T\twoheadrightarrow D_o$. Every tame automorphism fixes the unramified quotient pointwise, as in the [finite-quotient criterion](finite-quotient-criterion-for-frobenius-shift-lifting.md). Since $q_2$ kills odd-order tame inertia, $q_2\alpha=q_2$.

The first count in (1) is the sum of (4) over
$$
\beta:G_k\twoheadrightarrow Q,\quad r_2\beta=q_2\pi,
\qquad
\epsilon_0:\Gamma\twoheadrightarrow T,\quad r_o\epsilon_0=q_o,
$$
with $\epsilon=\epsilon_0\pi$. Every odd-order quotient kills wild inertia, so no maps are omitted. Precomposition $\epsilon_0\mapsto\epsilon_0\alpha$ bijects these choices with those for $q_o\alpha$. The allowed $\beta$ are unchanged, and (4) gives equal summands. This proves (1). $\square$

**A noncentral example (proved here).** Let
$$
D_{16}=\langle v,s:v^8=s^2=1,\ svs^{-1}=v^{-1}\rangle,
$$
let $z$ be the central involution of $Q_8$, and set
$$
P=(D_{16}\times Q_8)/\langle(v^4,z)\rangle.
$$
Both factors embed and commute, with common subgroup $\langle v^4\rangle=\langle z\rangle$. Let $T=C_3$ fix $D_{16}$ pointwise and cycle the quaternion generators $i,j,ij$. The action descends because it fixes $z$. Taking squares and commutators gives
$$
|P|=64,\qquad \Phi(P)=\langle v^2\rangle\cong C_4.
$$
This subgroup is fixed by $T$ but is noncentral: $s$ inverts $v^2$, an element of order four. Thus (1) applies to every tame marking of $P\rtimes C_3$, a target of order $192$ outside the central Frattini theorem. Here $C=D_{16}$, $R=Q_8$, $A=C_2$ and $Q=D_8$. Formula (4) retains the obstruction of $D_{16}\to D_8$, including its possible cancellation with the quaternion obstruction.

**Scope.** This treats noncentral Frattini subgroups only when the odd-order action fixes them pointwise. It neither replaces the theorem allowing arbitrary action on a central Frattini subgroup nor treats all noncentral actions. It gives no compatible finite lifts or full lift of a tame automorphism, and leaves the dyadic classification problem open.
