---
title: Unitriangular targets over any fixed field of order at least four give no dyadic count obstruction
kind: theorem
summary: 'For every n at least three and every power Q of two at least four, a cyclic scalar action on UT_n(F_Q) gives explicit dyadic surjection counts invariant under every tame automorphism and every tame marking, even when central root layers are fixed by the complement.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: noncentral-frattini-layers-in-dyadic-lift-counts, label: uses, note: 'Applies its zero-coinvariant lifting theorem to elementary-abelian kernels between doubled root heights.'}
  - {to: local-tate-duality, label: uses, note: 'Duality and the Euler characteristic compute the cohomology of the scalar module.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: motivated-by, note: 'Its complete marked-count test motivates excluding this family of targets with noncentral Frattini subgroup.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Rules out a count obstruction from these targets even with Sylow two-subgroups of arbitrarily high nilpotency class.'}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$, and let $\pi:G_k\twoheadrightarrow\Gamma$ be its tame quotient. Fix $n\ge3$, a power $Q=2^a\ge4$, and a generator $\lambda$ of $\mathbb F_Q^\times$. There is no bound on $n$ in terms of $Q$. Let $P=\operatorname{UT}_n(\mathbb F_Q)$ be the group of upper unitriangular matrices. The cyclic group $T=\langle s\rangle$ of order $Q-1$ acts on $P$ by conjugation with
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

**Proof.** *1. Doubling root heights.* Let $P_h$ consist of matrices whose entries in positions $(i,j)$ with $0<j-i<h$ vanish, and set $P_h=1$ for $h\ge n$. Thus $P_1=P$. Multiplying strictly upper triangular matrices adds their minimum heights, giving
$$
[P_b,P_c]\subseteq P_{b+c},\qquad
P_h/P_{h+1}\cong\mathbb F_Q^{\,n-h}\quad(1\le h<n).
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
For a power $h=2^r$ with $r\ge1$ and $h<n$, put $W_h=P_h/P_{2h}$. Products of two strictly upper triangular matrices of minimum height $h$ have minimum height $2h$. Thus $W_h$ is elementary abelian, although it need not be central in $P/P_{2h}$. It lies in $\Phi(P/P_{2h})$ by (5), since Frattini subgroups of finite $2$-groups commute with quotients by their description as squares and commutators. It is also a Frattini kernel in $H/P_{2h}$ by the comparison paragraph of the [noncentral lifting theorem](noncentral-frattini-layers-in-dyadic-lift-counts.md).

We claim
$$
[P,W_h]=P_{h+1}/P_{2h},\qquad
(W_h)_P=P_h/P_{h+1}.
\tag{6}
$$
The containment from left to right follows from (3). For the converse, every root $x_{ij}(u)$ of height $h+1\le j-i<2h$ equals $[x_{i,i+1}(u),x_{i+1,j}(1)]$ by (4), with the second factor in $P_h$. These roots generate $P_{h+1}/P_{2h}$, proving (6).

On the right side of (6), $s$ acts by the scalar $\lambda^h$. It is not one: the odd integer $Q-1>1$ cannot divide a power of two. Hence
$$
(W_h)_{H/P_{2h}}=((W_h)_P)_T=0.
$$
The noncentral lifting theorem applies to each map $H/P_{2h}\to H/P_h$. Starting with $h=2$ and repeatedly doubling until $P_{2h}=1$ shows that every epimorphism to $H/P_2=V\rtimes T$ has exactly
$$
\prod_{\substack{h=2^r<n\\r\ge1}}|P_h/P_{2h}|^{d+1}
=|P_2|^{d+1}=Q^{(d+1)(n-1)(n-2)/2}
\tag{7}
$$
lifts to $H$, all surjective. The product telescopes, including its last truncated layer.

*2. Count maps to the first quotient.* Fix $\epsilon$ and let $U=\mathbb F_Q$ with $g\in G_k$ acting by multiplication by $\lambda^{\epsilon\pi(g)}$, identifying $T$ with $\mathbb Z/(Q-1)$. Both $U$ and its $\mathbb F_2$-linear dual have no invariant vectors, since multiplication by $\lambda-1$ is invertible. As $\mu_2\subset k$, local duality gives $H^2(k,U)=0$, and the Euler characteristic gives
$$
\dim_{\mathbb F_Q}H^1(k,U)=d
$$
[@milne2006adt, I, Corollary 2.3, p. 28; Theorem 2.8, p. 31].

Put $m=n-1$ and $N=\ker(\epsilon\pi)$. A homomorphism to $V\rtimes T$ above $\epsilon\pi$ is an $m$-tuple of cocycles in $U$. Restriction
$$
H^1(k,U)\longrightarrow\operatorname{Hom}_{\mathrm{cont}}(N,U)
$$
is injective: a cocycle vanishing on $N$ factors through $T$ and is a coboundary by averaging. Explicitly, if $c:T\to U$ is a cocycle, put $b=|T|^{-1}\sum_{t\in T}c(t)$. The cocycle identity gives $c(g)=b-gb$. Coboundaries restrict to zero on $N$.

The image of $N$ in $V$ is an $\mathbb F_2$-subspace stable under multiplication by $\lambda$: conjugation acts on $V$ through the surjection to $T$. Since $\lambda$ generates $\mathbb F_Q^\times$, this image is an $\mathbb F_Q$-subspace. It is proper exactly when a nonzero $\mathbb F_Q$-linear functional annihilates it. By restriction injectivity, that is equivalent to a nonzero linear relation among the $m$ coordinate cohomology classes. Thus the homomorphism is surjective precisely when these classes are independent: its image projects onto $T$, and its intersection with $V$ is exactly the image of $N$.

There are $\prod_{j=0}^{m-1}(Q^d-Q^j)$ ordered independent tuples. Each has $Q^m$ cocycle representatives, since the coboundary group of $V$ has order $|V|/|V^{G_k}|=Q^m$. This gives $Q^m\prod_j(Q^d-Q^j)$ epimorphisms to $V\rtimes T$. Multiplication by (7) proves (1). If $d<m$, no independent tuple exists and the displayed product contains its zero factor at $j=d$.

*3. Retain every tame marking.* A finite dyadic tame quotient has an odd-order normal subgroup, the image of tame inertia, with cyclic quotient. Every Sylow two-subgroup embeds in that cyclic quotient and is cyclic. Hence $r(P)$ is cyclic and kills $[P,P]=P_2$. By (5) it is elementary abelian as well, so has order at most two. The restriction to $V$ is therefore a $T$-invariant map to a trivial module. It vanishes because $(s-1)V=V$. This proves $r(P)=1$, so $r=\bar r p$; in particular $D$ is cyclic of odd order.

For every surjection $F:G_k\twoheadrightarrow H$, the map $pF$ kills wild inertia because $T$ has odd order. It is uniquely $\epsilon\pi$ for an epimorphism $\epsilon:\Gamma\twoheadrightarrow T$. Equation (1), summed over the $\epsilon$ with $\bar r\epsilon=q$, proves (2). Precomposition $\epsilon\mapsto\epsilon\alpha$ bijects these with the epimorphisms satisfying $\bar r\epsilon=q\alpha$, proving the asserted invariance. $\square$

**Checks and scope (proved here).** Equations (3) and (4) show that $P$ has nilpotency class $n-1$: commutators of length $n$ vanish, whereas an iterated commutator along successive adjacent roots reaches $x_{1n}(1)\ne1$. For $n\ge4$, its Frattini subgroup is noncentral, since
$$
[x_{13}(1),x_{34}(1)]=x_{14}(1)\ne1.
$$
The case $(n,Q)=(3,4)$ recovers the order-192 example in the [central-action entry](nontrivial-central-action-in-dyadic-lift-counts.md). The case $(4,4)$ already has a fixed central root layer: $P_3$ is fixed by $T$, since $\lambda^3=1$. For $W_2=P_2$, conjugation by $P$ fixes precisely $P_3$, while its coinvariants are $P_2/P_3$, on which $T$ acts by $\lambda^2$. Thus $W_2^H=P_3\ne0$ and $(W_2)_H=0$. The formula still applies, giving zero for $d<3$ and $4^{15}(64-1)(64-4)(64-16)$ at $d=3$.

Keeping $Q=4$ fixed and taking $d\ge n-1$ gives nonzero examples of arbitrarily high nilpotency class. The bound $Q>n$ needed when lifting through individual central root heights is unnecessary for the doubled layers. The hypothesis $Q\ge4$ is retained: at $Q=2$ the scalar complement is trivial, so the coinvariant vanishing used above fails. These targets give no finite count obstruction; this does not decide the full Frobenius-shift lifting problem or the dyadic classification question.
