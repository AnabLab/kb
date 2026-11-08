---
title: Irreducible cyclic extraspecial counts over dyadic fields
kind: theorem
summary: 'For an extraspecial 2-group with a faithful irreducible odd cyclic action, marked surjection counts over a dyadic field depend only on its degree and the kernel dimension. Every tame marking of these targets is invariant under tame automorphisms.'
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: local-tate-duality, label: uses, note: 'Duality makes the obstruction polarization nondegenerate; the Euler characteristic gives its dimension.'}
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: generalizes, note: 'The quaternion kernel with its cubic action is the case n = 1, m = 3.'}
  - {to: extraspecial-quintic-embedding-counts-over-dyadic-fields, label: generalizes, note: 'The order-32 kernel with its quintic action is the case n = 2, m = 5.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked-surjection tests and the cyclic Sylow 2-subgroups of finite dyadic tame quotients.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes this family of nonabelian wild targets from every marked-count obstruction, without constructing a lift.'}
---

**Setting.** Let $E$ be a finite $2$-group with
$$
Z(E)=[E,E]=\langle z\rangle\cong C_2,\qquad
V=E/\langle z\rangle\cong\mathbb F_2^{2n},\quad n\ge1.
$$
Such a group is extraspecial. Its commutators define a nondegenerate alternating form $B:V\times V\to\mathbb F_2$ by $[\widetilde v,\widetilde w]=z^{B(v,w)}$: a vector in its radical lifts to the center and hence is zero in $V$.

Suppose $C_m=\langle s\rangle$, with $m>1$ odd, acts on $E$, and its induced action on $V$ is faithful and irreducible. It fixes $z$ and preserves $B$. Put
$$
H=E\rtimes C_m,\qquad r_0:H\twoheadrightarrow C_m.
$$

**Theorem (proved here).** Let $k/\mathbb Q_2$ have degree $d$, and fix a continuous epimorphism $\epsilon:G_k\twoheadrightarrow C_m$. Then
$$
\#\{\rho:G_k\twoheadrightarrow H:r_0\rho=\epsilon\}
=2^{2n+d+2}\bigl(2^{2nd-1}+(-1)^d2^{nd-1}-1\bigr).\tag{1}
$$
All maps are continuous and are counted individually, without identifying conjugates. The count is independent of the cyclic extension specified by $\epsilon$, including its ramification.

Moreover, write $\pi:G_k\twoheadrightarrow\Gamma$ for the tame quotient and $e_r(\eta)=\#\{\rho:G_k\twoheadrightarrow H:r\rho=\eta\}$. For every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$, $r:H\twoheadrightarrow D$, these [marked counts](finite-quotient-criterion-for-frobenius-shift-lifting.md) satisfy
$$
e_r(q\pi)=e_r(q\alpha\pi).\tag{2}
$$

**Proof.** Write $L$ for the fixed field of $\ker\epsilon$. Regard $V$ as a $G_k$-module through $\epsilon$. All cohomology is continuous; identify $\langle z\rangle=\mathbb F_2=\mu_2$ and $H^2(k,\mathbb F_2)=\mathbb F_2$ using the local invariant.

*1. The cohomology space.* Since $V$ is nontrivial irreducible, $H^0(k,V)=0$. The form $B$ identifies $V$ with its Tate dual, so local duality gives $H^2(k,V)=0$ and makes
$$
\beta(a,b)=B_*(a\cup b):W\times W\to\mathbb F_2,
\qquad W=H^1(k,V),
$$
nondegenerate. The Euler characteristic gives $\dim W=2nd$. For the trivial module it gives $\dim H^1(k,\mathbb F_2)=d+2$ [@milne2006adt, I, Corollary 2.3, p. 28, and Theorem 2.8, p. 31].

The positive-degree cohomology of $C_m$ on an $\mathbb F_2$-module vanishes: it is killed by both $m$ and $2$. Inflation-restriction therefore identifies
$$
W\cong\operatorname{Hom}_{C_m}(G_L,V).
$$
Restriction $H^2(k,\mathbb F_2)\to H^2(L,\mathbb F_2)$ is injective, because corestriction after restriction is multiplication by the odd number $m$ [@milnecft, II, Proposition 1.30 and Corollary 1.31, p. 70; Remark 1.35(a), p. 72; continuous-cohomology discussion, p. 88].

*2. The quadratic obstruction and its polarization.* Maps $a:G_k\to A=V\rtimes C_m$ above $\epsilon$ are $1$-cocycles in $V$. Two representatives of a class in $W$ are conjugate by $V$. Such conjugations lift to $H$, so the obstruction to lifting $a$ through
$$
1\to\langle z\rangle\to H\to A\to1
$$
depends only on its class. Denote it by $Q:W\to\mathbb F_2$. A lift exists exactly when the pulled-back factor set is a continuous coboundary. The zero class lifts through the complement $C_m$, so $Q(0)=0$.

Here is a direct verification that
$$
Q(a+b)+Q(a)+Q(b)=\beta(a,b).\tag{3}
$$
Choose an ordered basis of $V$ and lifts $t_i$ in $E$. The section $v\mapsto\prod_i t_i^{v_i}$ has a bilinear factor set $F:V\times V\to\mathbb F_2$: collecting the ordered products contributes terms $v_iw_i$ from squares and $v_iw_j$ from commutators. It satisfies $F(v,w)+F(w,v)=B(v,w)$. Over $G_L$, the restricted cocycles $a,b$ are homomorphisms, and the obstruction of $a$ is represented by $(g,h)\mapsto F(a(g),a(h))$. Polarizing gives
$$
F(a(g),b(h))+F(b(g),a(h)).
$$
Its difference from $B(a(g),b(h))$ is the coboundary of $g\mapsto F(b(g),a(g))$. Thus (3) holds after restriction to $L$, and injectivity of restriction proves it over $k$. Consequently $Q$ is a quadratic form with nondegenerate polarization $\beta$.

*3. The cyclic action fixes its sign.* Acting by $s$ on the coefficients defines an operator $S$ on $W$, since it commutes with the $G_k$-action. Conjugation by the complement element $s$ in $H$ realizes this action on $A$ and fixes the central kernel. Hence $Q(Sa)=Q(a)$.

Let $f_s$ be the irreducible minimal polynomial of $s$ on $V$, of degree $2n$. It annihilates the cochain complex and therefore $W$, so $W$ is a direct sum of copies of the same irreducible cyclic module. Faithfulness implies that every nonzero vector of $W$ has $S$-orbit of length $m$.

We also have $2^n\equiv-1\pmod m$. Indeed, an eigenvalue $\lambda$ of $s$ has order $m$, and its Frobenius orbit has length $2n$. The nondegenerate invariant form $B$ makes $V$ self-dual, so $\lambda^{-1}=\lambda^{2^j}$ for some $0<j<2n$. Thus $2^j\equiv-1\pmod m$, while the order of $2$ modulo $m$ is $2n$. Since $2n$ divides $2j$, necessarily $j=n$.

Put $T=\sum_{a\in W}(-1)^{Q(a)}$. By (3) and nondegeneracy,
$$
T^2=\sum_{w\in W}(-1)^{Q(w)}
\sum_{a\in W}(-1)^{\beta(a,w)}=2^{2nd}.
$$
The number $N$ of zeros of $Q$ is therefore one of
$$
N=\frac{2^{2nd}\mathbin{\pm}2^{nd}}2.
$$
The $S$-orbits give $N\equiv1\pmod m$. Since $2^{nd}\equiv(-1)^d\pmod m$, the two displayed possibilities are congruent to $0$ and $1$ modulo $m$, and this selects
$$
N=2^{2nd-1}+(-1)^d2^{nd-1}.\tag{4}
$$
This argument needs neither a classification of quadratic forms nor primality of $m$.

*4. Counting surjective lifts.* Under step 1's restriction isomorphism, every nonzero class gives a nonzero equivariant homomorphism $G_L\to V$. Its image is stable and hence all of $V$ by irreducibility. Thus the map to $A$ is surjective exactly for nonzero classes. Each class has $2^{2n}$ cocycle representatives, since $V^{G_k}=0$.

Each unobstructed map has $2^{d+2}$ lifts to $H$: their ratios are exactly the characters $G_k\to\langle z\rangle$. Every lift is surjective. Its image on $G_L$ maps onto $V$; choosing two image elements with $B(v,w)=1$ supplies their commutator $z$. This image is therefore all of $E$, and the quotient image is already $C_m$. Removing the zero class from (4) and multiplying these two factors proves (1).

*5. Every tame marking.* A finite quotient $D$ of the dyadic tame group has a normal cyclic odd-order inertia image and cyclic quotient by that image. Its Sylow $2$-subgroups inject into the cyclic quotient, so are cyclic. Thus $r(E)$ is cyclic. The map from $E$ to this cyclic group kills $[E,E]$ and factors through $V$. Its kernel in $V$ is $C_m$-stable; irreducibility and $\dim V\ge2$ exclude a nonzero cyclic image. Hence $r(E)=1$, and $r=\bar r\,r_0$ for an epimorphism $\bar r:C_m\to D$.

Every epimorphism $G_k\to C_m$ kills wild inertia, since $m$ is odd. The count above $q\pi$ is consequently the sum of (1) over all epimorphisms $\epsilon_0:\Gamma\to C_m$ with $\bar r\epsilon_0=q$. Precomposition by $\alpha$ bijects these with the epimorphisms satisfying $\bar r\epsilon_0=q\alpha$. Each summand has the same value (1), which proves (2), including proper quotients of $C_m$ and $D=1$. $\square$

**Targets exist in every dimension (proved here).** For each $n\ge1$, the hypotheses hold with $m=2^n+1$. To construct one, set $F=\mathbb F_{2^{2n}}$, $K=\mathbb F_{2^n}$ and
$$
q_0(x)=\operatorname{Tr}_{K/\mathbb F_2}(x^{2^n+1}).
$$
Its polarization is
$$
B_0(x,y)=\operatorname{Tr}_{F/\mathbb F_2}(x y^{2^n}),
$$
which is nondegenerate: for $x\ne0$, the elements $xy^{2^n}$ range through $F$, and the trace $F\to\mathbb F_2$ is nonzero. Choose an $\mathbb F_2$-basis of $F$ and a bilinear form $F_0$ with $F_0(x,x)=q_0(x)$: take the diagonal and upper-triangular coefficients of the quadratic polynomial $q_0$. The law
$$
(x,a)(y,b)=(x+y,a+b+F_0(x,y))
$$
on $F\times\mathbb F_2$ defines an extraspecial group $E$ of order $2^{2n+1}$, since its commutator form is $B_0$.

Choose $\lambda\in F^\times$ of order $m$ and put $s(x)=\lambda x$. Then $q_0(sx)=q_0(x)$. The order of $2$ modulo $m$ is $2n$: for $0<j\le n$ one has $0<2^j-1<m$, and for $n<j<2n$ the congruence $2^j\equiv-2^{j-n}\pmod m$ also excludes $2^j\equiv1$. Thus multiplication by $\lambda$ is faithful and irreducible on $F$.

It remains to lift this action to $E$. The bilinear form $D(x,y)=F_0(sx,sy)+F_0(x,y)$ has zero diagonal. Choose a quadratic function $c$ with polarization $D$ by taking its upper-triangular coefficients. Then
$$
\widetilde s(x,a)=(sx,a+c(x))
$$
is an automorphism of $E$, as substitution in the group law verifies. Its $m$th power has the form $(x,a)\mapsto(x,a+\ell(x))$ for a linear functional $\ell$. Commutation with $\widetilde s$ makes $\ell$ invariant under $s$. Irreducibility and nontriviality force $\ell=0$. Thus $\widetilde s$ has order exactly $m$, giving the required action. In particular, $n=3,m=9$ gives a target of order $1152$, with $13\,824$ marked surjections above every cyclic degree-nine quotient when $d=1$.

**Checks and scope.** The [binary tetrahedral target](binary-tetrahedral-embedding-counts-over-dyadic-fields.md) has $n=1,m=3$, giving its existing formula and $576$ maps at $d=2$. The [extraspecial quintic target](extraspecial-quintic-embedding-counts-over-dyadic-fields.md) has $n=2,m=5$, giving its existing formula and $640$ maps at $d=1$. At $n=d=1$, the sole unobstructed class is zero and the surjection count is zero; the proof does not presume solvability.

Faithfulness and irreducibility are hypotheses on the action on $V$, not consequences of an arbitrary odd cyclic action on $E$. Reducible actions and general nonabelian $2$-group kernels are outside this statement. Equality (2) rules out these targets in the finite-count test; it supplies no compatible lifts or automorphism of $G_k$, and leaves the Frobenius-shift and dyadic classification questions open.
