---
title: Removing nontrivial central action from dyadic lift counts
kind: theorem
summary: 'For a dyadic field of degree d, a central elementary-abelian Frattini layer W with no fixed vectors under an odd-order complement contributes exactly |W|^(d+1) lifts per quotient surjection. Every tame marking kills W, reducing its marked counts to those of the quotient.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: frobenius-shift-lifting-problem, label: addresses, note: "Removes nontrivial odd-complement action on central elementary-abelian Frattini layers from the search for a finite count obstruction."}
  - {to: local-tate-duality, label: uses, note: "Duality kills the obstruction group, and the Euler characteristic counts cocycles."}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: "Its abelian-Sylow case proves invariance once the entire Frattini subgroup is removed."}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$, and write $\pi:G_k\twoheadrightarrow\Gamma$ for its tame quotient. Let $P$ be a finite $2$-group, let a finite odd-order group $T$ act on $P$, and put $H=P\rtimes T$. Let
$$
W\subseteq Z(P)\cap\Phi(P)
$$
be a $T$-stable elementary-abelian subgroup, where $\Phi(P)=P^2[P,P]$ is the Frattini subgroup. Assume $W^T=0$. Write $w=\dim_{\mathbb F_2}W$, $\bar H=H/W$, and $\rho:H\to\bar H$. All homomorphisms from profinite groups below are continuous. Counts distinguish actual homomorphisms, without quotienting by conjugacy.

**Theorem (proved here).**

1. Every epimorphism $f:G_k\twoheadrightarrow\bar H$ has exactly
   $$2^{(d+1)w}=|W|^{d+1}\tag{1}$$
   lifts to $H$, and every lift is an epimorphism.
2. Every epimorphism $a:H\twoheadrightarrow D$ to a finite quotient of $\Gamma$ kills $W$, so $a=\bar a\rho$. For every epimorphism $q:\Gamma\twoheadrightarrow D$, define
   $$E_k(H,a;q)=\#\{F:G_k\twoheadrightarrow H:aF=q\pi\}.$$
   Then
   $$E_k(H,a;q)=2^{(d+1)w}E_k(\bar H,\bar a;q).\tag{2}$$
   Thus a tame automorphism $\alpha$ preserves all these marked counts for $H$ if and only if it preserves them for $\bar H$.

**Proof.** *The obstruction and the number of lifts.* Fix $f$ as in part 1. Conjugation makes $W$ a $G_k$-module through the epimorphism $G_k\to\bar H\to T$, since $P$ centralizes $W$. In particular $H^0(k,W)=0$. Averaging over $T$ is an idempotent with image $W^T=0$, because $|T|$ is odd. It follows also that $(W^\vee)^T=0$: an invariant functional takes the same value on a vector and on its average. Since $\mu_2\subset k$, the Tate dual of $W$ is its ordinary $\mathbb F_2$-linear dual. Local duality therefore gives
$$
H^2(k,W)=0
$$
[@milne2006adt, I, Corollary 2.3, p. 28].

Choose a set-theoretic section $u:\bar H\to H$. Its factor set, pulled back along $f$, is a continuous $2$-cocycle with the action just described. Its vanishing class in $H^2(k,W)$ means that a continuous $1$-cochain corrects $u f$ to a homomorphism. Thus a lift exists. After fixing one lift, multiplication by a continuous cocycle identifies all lifts with $Z^1(k,W)$.

The Euler characteristic gives $|H^1(k,W)|=2^{dw}$, since $|H^0|=|H^2|=1$ [@milne2006adt, I, Theorem 2.8, p. 31]. The coboundaries have order $|W|/|W^{G_k}|=2^w$. Hence $|Z^1(k,W)|=2^{(d+1)w}$, proving (1) as a count of maps.

For any lift with image $J\subseteq H$, one has $JW=H$, and therefore $(J\cap P)W=P$. If $J\cap P$ were proper, it would lie in a maximal subgroup of $P$, which also contains $W\subseteq\Phi(P)$. This contradicts $(J\cap P)W=P$. Thus $P\subseteq J$, and $JW=H$ now gives $J=H$.

*Tame markings.* A finite dyadic tame quotient $D$ has a cyclic normal subgroup of odd order, the image of tame inertia, with cyclic quotient. Its Sylow $2$-subgroups embed in that cyclic quotient and are cyclic. Consequently the normal elementary-abelian subgroup $a(W)$ is trivial or has order two. In the latter case it is central, so $a|_W$ would be a nonzero $T$-invariant functional $W\to\mathbb F_2$. Averaging rules this out. Hence $a(W)=1$.

For each map $f$ counted on the right of (2), all its lifts have marking $aF=\bar a f=q\pi$, and part 1 counts them. Conversely every map on the left gives such an $f$. This proves (2). The same positive multiplier occurs for $q$ and $q\alpha$, and markings of $\bar H$ correspond to markings of $H$, proving the last assertion. $\square$

**Reduction to the fixed central part (proved here).** Suppose $Z\subseteq Z(P)\cap\Phi(P)$ is elementary abelian and $T$-stable, without assuming $Z^T=0$. Put
$$
W=[Z,T]=\operatorname{span}_{\mathbb F_2}\{tz-z:t\in T,\ z\in Z\}.
$$
The averaging idempotent gives $Z=Z^T\oplus W$: it kills every $tz-z$, and $z-\sum_{t\in T}tz$ lies in the indicated span. Thus $W^T=0$, and the theorem reduces every marked count for $H$ to one for $H/W$, multiplied by
$$
2^{(d+1)(\dim Z-\dim Z^T)}.
$$
The surviving image $Z/W$ is fixed by $T$. This reduction places no condition on $T$-fixed vectors in $P/\Phi(P)$ and does not require $T$ to be cyclic.

In particular, if $\Phi(P)$ is central elementary abelian and $\Phi(P)^T=0$, take $Z=\Phi(P)$. The quotient $H/W$ has abelian Sylow $2$-subgroups. Its counts are invariant under every tame automorphism by the [abelian-Sylow case of the finite-quotient criterion](finite-quotient-criterion-for-frobenius-shift-lifting.md), since the mod-$2$ cyclotomic character is trivial. Equation (2) proves the same invariance for $H$.

**An order-192 example (proved here).** Put $F=\mathbb F_4$, choose $\lambda\in F^\times$ of order three, and define $P=F^3$ with multiplication
$$
(x,y,z)(x',y',z')=(x+x',y+y',z+z'+xy').
$$
The bilinearity of $xy'$ proves associativity; the identity is $(0,0,0)$ and the inverse of $(x,y,z)$ is $(x,y,z+xy)$. Commutators and squares satisfy
$$
[(x,y,z),(x',y',z')]=(0,0,xy'+x'y),\qquad
(x,y,z)^2=(0,0,xy).
$$
These show $Z(P)=\Phi(P)=W=\{(0,0,z):z\in F\}$: the commutators fill this subgroup, and a vector with $x\ne0$ or $y\ne0$ has a nonzero commutator. Define an automorphism of order three by
$$
s(x,y,z)=(\lambda x,\lambda y,\lambda^2z).
$$
It preserves the multiplication because the cross term is multiplied by $\lambda^2$. For $H=P\rtimes\langle s\rangle$, one has $|H|=192$, $w=2$, $W^{\langle s\rangle}=0$, and
$$
\bar H=(F\oplus F)\rtimes C_3,
$$
where $s$ acts by $\lambda$ on both coordinates. Every tame automorphism preserves every marked count for this $H$ by the preceding corollary.

There is also an explicit count above each epimorphism $\epsilon:\Gamma\twoheadrightarrow C_3$. Let $p:H\to C_3$ be the projection. Then
$$
E_k(H,p;\epsilon)
=16\cdot4^{d+1}(4^d-1)(4^d-4).\tag{3}
$$
To prove this, let $U=F$ with $G_k$ acting by multiplication by $\lambda^{\epsilon\pi(g)}$, identifying $C_3$ with $\mathbb Z/3$. Both $U$ and its Tate dual have no invariants, so the same duality and Euler-characteristic argument gives $H^2(k,U)=0$ and $\dim_F H^1(k,U)=d$.

A map to $\bar H$ above $\epsilon\pi$ is a pair of cocycles in $U$. Write their classes as $u_1,u_2$. Restriction to $L=\ker(\epsilon\pi)$ is injective on $H^1(k,U)$: a cocycle vanishing on $L$ factors through $C_3$, and averaging kills $H^1(C_3,U)$. The image of $L$ in $U\oplus U$ is an $F$-subspace, since it is stable under multiplication by $\lambda$ and $F=\mathbb F_2[\lambda]$. It is proper exactly when a nonzero $F$-linear functional annihilates it. By restriction injectivity, this is equivalent to an $F$-linear relation between $u_1,u_2$. Thus the map is surjective exactly when these two classes are independent.

There are $(4^d-1)(4^d-4)$ ordered independent pairs, each with $|U\oplus U|=16$ cocycle representatives, because $(U\oplus U)^{G_k}=0$. Applying (1) contributes $2^{2(d+1)}=4^{d+1}$ further lifts and proves (3).

**Checks and scope.** At $d=1$, (3) is zero: a one-dimensional $F$-space cannot contain two independent classes. At $d=2$ it is $16\cdot64\cdot15\cdot12=184\,320$, independently of the cubic marking. At $W=0$, (2) has multiplier one. The Frattini condition is needed for every lift to be surjective: if instead $P=W=F$ with the scalar cubic action, the split lift of $\epsilon\pi$ has image just $C_3$, although $W^T=0$. The fixed-vector hypothesis is used on the centre, where it kills $H^2$; invariant central layers can still carry obstructions. The reduction does not treat noncentral Frattini layers or construct a lift to the full absolute Galois group.
