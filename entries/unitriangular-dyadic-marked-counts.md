---
title: Unitriangular targets of arbitrary class give no dyadic count obstruction
kind: theorem
summary: 'For UT_n(F_Q) with Q a power of two greater than n, a cyclic scalar action gives explicit dyadic surjection counts invariant under every tame automorphism and every tame marking. The Sylow two-subgroup has class n-1 and noncentral Frattini subgroup for n at least four.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: nontrivial-central-action-in-dyadic-lift-counts, label: uses, note: 'Applies its central elementary-abelian Frattini-layer theorem successively to root-height layers.'}
  - {to: local-tate-duality, label: uses, note: 'Duality and the Euler characteristic compute the cohomology of the scalar module.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: motivated-by, note: 'Its complete marked-count test motivates excluding this family of targets with noncentral Frattini subgroup.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Rules out a count obstruction from these targets even with Sylow two-subgroups of arbitrarily high nilpotency class.'}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$, and let $\pi:G_k\twoheadrightarrow\Gamma$ be its tame quotient. Fix $n\ge3$, a power $Q=2^a>n$, and a generator $\lambda$ of $\mathbb F_Q^\times$. Let $P=\operatorname{UT}_n(\mathbb F_Q)$ be the group of upper unitriangular matrices. The cyclic group $T=\langle s\rangle$ of order $Q-1$ acts on $P$ by conjugation with
$$
\operatorname{diag}(\lambda^{n-1},\lambda^{n-2},\ldots,\lambda,1).
$$
Put $H=P\rtimes T$ and let $p:H\twoheadrightarrow T$ be projection. All maps below are continuous, and counts distinguish actual maps, including conjugate ones.

**Theorem (proved here).** For every epimorphism $\epsilon:\Gamma\twoheadrightarrow T$,
$$
\#\{F:G_k\twoheadrightarrow H:pF=\epsilon\pi\}
=C_{n,Q}(d),
\qquad
C_{n,Q}(d)=Q^{n-1+(d+1)(n-1)(n-2)/2}
\prod_{j=0}^{n-2}(Q^d-Q^j).
\tag{1}
$$
The count is zero when $d<n-1$, and positive otherwise. Every epimorphism $r:H\twoheadrightarrow D$ to a finite tame quotient kills $P$, and hence factors as $r=\bar r p$. For every epimorphism $q:\Gamma\twoheadrightarrow D$,
$$
\#\{F:G_k\twoheadrightarrow H:rF=q\pi\}
=C_{n,Q}(d)\,
\#\{\epsilon:\Gamma\twoheadrightarrow T:\bar r\epsilon=q\}.
\tag{2}
$$
Consequently every $\alpha\in\operatorname{Aut}(\Gamma)$ preserves every marked count in (2), on replacing $q$ by $q\alpha$.

**Proof.** *1. The root-height filtration.* Let $P_h$ consist of matrices whose entries in positions $(i,j)$ with $0<j-i<h$ vanish. Thus $P_1=P$ and $P_n=1$. Multiplying strictly upper triangular matrices adds their minimum heights, giving
$$
[P_b,P_c]\subseteq P_{b+c},\qquad
P_h/P_{h+1}\cong\mathbb F_Q^{\,n-h}.
\tag{3}
$$
Write $x_{ij}(u)=1+uE_{ij}$. These root elements of heights at least $h$ generate $P_h$: clear entries in increasing height, since such operations alter only higher entries. For $i<j<\ell$, direct multiplication gives
$$
[x_{ij}(u),x_{j\ell}(v)]=x_{i\ell}(uv),
\tag{4}
$$
with commutator $[x,y]=xyx^{-1}y^{-1}$. Every root of height at least two is therefore a commutator. Since $P/P_2$ is elementary abelian, this proves
$$
\Phi(P)=P^2[P,P]=[P,P]=P_2,
\qquad V=P/P_2\cong\mathbb F_Q^{\,n-1}.
\tag{5}
$$
The action of $s$ on a root of height $h$ is multiplication by $\lambda^h$. For $2\le h\le n-1$, the kernel $P_h/P_{h+1}$ is central in $P/P_{h+1}$ by (3), lies in its Frattini subgroup by (5), and has no $T$-fixed vectors: $0<h<Q-1$. Here Frattini subgroups commute with quotients, directly from their description by squares and commutators. Apply the [central-action lifting theorem](nontrivial-central-action-in-dyadic-lift-counts.md) to the successive maps
$$
H/P_{h+1}\longrightarrow H/P_h.
$$
Every epimorphism to $H/P_2=V\rtimes T$ has exactly
$$
\prod_{h=2}^{n-1}|P_h/P_{h+1}|^{d+1}
=Q^{(d+1)(n-1)(n-2)/2}
\tag{6}
$$
lifts to $H$, all surjective. Centrality is needed only in these quotients, not for $P_2$ in $P$.

*2. Count maps to the first quotient.* Fix $\epsilon$ and let $U=\mathbb F_Q$ with $g\in G_k$ acting by multiplication by $\lambda^{\epsilon\pi(g)}$, identifying $T$ with $\mathbb Z/(Q-1)$. Both $U$ and its $\mathbb F_2$-linear dual have no invariant vectors, since multiplication by $\lambda-1$ is invertible. As $\mu_2\subset k$, local duality gives $H^2(k,U)=0$, and the Euler characteristic gives
$$
\dim_{\mathbb F_Q}H^1(k,U)=d
$$
[@milne2006adt, I, Corollary 2.3, p. 28; Theorem 2.8, p. 31].

Put $m=n-1$ and $N=\ker(\epsilon\pi)$. A homomorphism to $V\rtimes T$ above $\epsilon\pi$ is an $m$-tuple of cocycles in $U$. Restriction
$$
H^1(k,U)\longrightarrow\operatorname{Hom}_{\mathrm{cont}}(N,U)
$$
is injective: a cocycle vanishing on $N$ factors through $T$, whose positive-degree cohomology with these coefficients vanishes because its odd order is invertible [@milnecft, II, Corollary 1.31, p. 70]. Coboundaries restrict to zero on $N$.

The image of $N$ in $V$ is an $\mathbb F_2$-subspace stable under multiplication by $\lambda$: conjugation acts on $V$ through the surjection to $T$. Since $\lambda$ generates $\mathbb F_Q^\times$, this image is an $\mathbb F_Q$-subspace. It is proper exactly when a nonzero $\mathbb F_Q$-linear functional annihilates it. By restriction injectivity, that is equivalent to a nonzero linear relation among the $m$ coordinate cohomology classes. Thus the homomorphism is surjective precisely when these classes are independent: its image projects onto $T$, and its intersection with $V$ is exactly the image of $N$.

There are $\prod_{j=0}^{m-1}(Q^d-Q^j)$ ordered independent tuples. Each has $Q^m$ cocycle representatives, since the coboundary group of $V$ has order $|V|/|V^{G_k}|=Q^m$. This gives $Q^m\prod_j(Q^d-Q^j)$ epimorphisms to $V\rtimes T$. Multiplication by (6) proves (1). If $d<m$, no independent tuple exists and the displayed product contains its zero factor at $j=d$.

*3. Retain every tame marking.* A finite dyadic tame quotient has an odd-order normal subgroup, the image of tame inertia, with cyclic quotient. Every Sylow two-subgroup embeds in that cyclic quotient and is cyclic. Hence $r(P)$ is cyclic and kills $[P,P]=P_2$. By (5) it is elementary abelian as well, so has order at most two. The restriction to $V$ is therefore a $T$-invariant map to a trivial module. It vanishes because $(s-1)V=V$. This proves $r(P)=1$, so $r=\bar r p$; in particular $D$ is cyclic of odd order.

For every surjection $F:G_k\twoheadrightarrow H$, the map $pF$ kills wild inertia because $T$ has odd order. It is uniquely $\epsilon\pi$ for an epimorphism $\epsilon:\Gamma\twoheadrightarrow T$. Equation (1), summed over the $\epsilon$ with $\bar r\epsilon=q$, proves (2). Precomposition $\epsilon\mapsto\epsilon\alpha$ bijects these with the epimorphisms satisfying $\bar r\epsilon=q\alpha$, proving the asserted invariance. $\square$

**Checks and scope (proved here).** Equations (3) and (4) show that $P$ has nilpotency class $n-1$: commutators of length $n$ vanish, whereas an iterated commutator along successive adjacent roots reaches $x_{1n}(1)\ne1$. For $n\ge4$, its Frattini subgroup is noncentral, since
$$
[x_{13}(1),x_{34}(1)]=x_{14}(1)\ne1.
$$
The case $(n,Q)=(3,4)$ recovers the order-192 example in the central-action entry. The case $(4,8)$ has $|H|=7\cdot8^6$, class-three Sylow two-subgroup, and zero counts for $d<3$. At $d=3$, (1) is the positive number $8^{15}(512-1)(512-8)(512-64)$. Taking $d\ge n-1$ gives nonzero examples of arbitrarily high class. The condition $Q>n$ keeps every root layer moving; at $n=Q$, the last layer has $\lambda^{n-1}=1$, so this argument no longer applies. These targets give no finite count obstruction; this does not decide the full Frobenius-shift lifting problem or the dyadic classification question.
