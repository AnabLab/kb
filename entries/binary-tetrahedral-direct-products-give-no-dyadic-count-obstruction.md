---
title: Binary tetrahedral direct products cannot obstruct dyadic lifting
kind: theorem
summary: 'Over a dyadic field, every tame automorphism preserves all marked surjection counts to SL2(F3) times any finite 2-group. The proof factors the counts using the absence of a common nontrivial quotient; it covers every tame marking of these targets, including SL2(F3) times C2 of order 48.'
tags: [local-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: uses, note: 'Uses its cubic marked count and its degree-one cohomology dimension, not just invariance of solvability.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked surjection counts and the fact that a tame automorphism fixes every unramified marking.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes all tame markings of binary tetrahedral direct products with finite 2-groups from giving a count obstruction; no full lift is constructed.'}
---

**Statement (proved here).** Let $k/\mathbb Q_2$ be finite of degree $d$, let $G=G_k$, and write $\pi:G\twoheadrightarrow\Gamma$ for its tame quotient. Put
$$
B=Q_8\rtimes C_3\cong\operatorname{SL}_2(\mathbb F_3),\qquad
r_0:B\twoheadrightarrow C_3,
$$
where a generator $c$ cycles $i,j,ij$ in $Q_8$. Let $R$ be any finite $2$-group, including the trivial group, and set $H=B\times R$. For every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$ and $r:H\twoheadrightarrow D$, the [marked surjection counts](finite-quotient-criterion-for-frobenius-shift-lifting.md) satisfy
$$
e_r(q\pi)=e_r(q\alpha\pi),\qquad
e_r(\eta)=\#\{f:G\twoheadrightarrow H\text{ continuous}:rf=\eta\}.
\tag{1}
$$
Maps are counted without identifying conjugates. In particular, every tame marking of the order-$48$ target $B\times C_2$ satisfies (1).

**Proof.** We first check surjectivity to the product, then determine all possible tame quotients of that product.

*1. Independent surjections give a surjection to the product.* Every homomorphism from $B$ to a finite $2$-group is trivial. Indeed it kills $c$, which has order three; the relations $cic^{-1}=j$ and $cjc^{-1}=ij$ then give equal images for $i,j,ij$, forcing those images to be the identity.

Let $a:G\twoheadrightarrow B$ and $b:G\twoheadrightarrow R$ be continuous epimorphisms. The subgroup $N=a(\ker b)$ is normal in $B$, and $a$ induces a surjection $G/\ker b\twoheadrightarrow B/N$. Thus $B/N$ is a $2$-group, so $N=B$ by the preceding paragraph. Consequently the image of $(a,b)$ contains $B\times1$, and its projection onto $R$ is surjective. Multiplication by elements of $B\times1$ shows that it is all of $B\times R$. Conversely, every epimorphism onto this product has surjective coordinate maps. This proves a bijection between product epimorphisms and pairs of coordinate epimorphisms, retaining the actual maps.

*2. All tame quotient maps separate into cubic and dyadic parts.* Let $I\subseteq\Gamma$ be tame inertia. The group $q(I)$ is cyclic, normal and of odd order, while $D/q(I)$ is cyclic. Each Sylow $2$-subgroup of $D$ injects into $D/q(I)$ and is therefore cyclic.

In particular, $r(Q_8\times1)$ is cyclic. The map on $Q_8$ kills $[Q_8,Q_8]=\{\pm1\}$ and factors through $V=Q_8/\{\pm1\}\cong\mathbb F_2^2$. Its kernel in $V$ is stable under $c$, which cycles the three nonzero vectors. A nontrivial cyclic image of $V$ would have order two and a one-dimensional kernel, but no such kernel is stable under this action. Hence $r(Q_8\times1)=1$.

It follows that $D_3=r(B\times1)$ has order one or three, and $D_2=r(1\times R)$ is a cyclic $2$-group. These two subgroups commute, have trivial intersection and generate $D$. They therefore give the canonical decomposition
$$D=D_3\times D_2.$$
Write $r_3:B\twoheadrightarrow D_3$ and $r_2:R\twoheadrightarrow D_2$ for the restricted maps. Every $\eta:G\twoheadrightarrow D$ has components $\eta_3,\eta_2$. Step 1 proves the exact factorization
$$
e_r(\eta)=
\#\{a:G\twoheadrightarrow B:r_3a=\eta_3\}\,
\#\{b:G\twoheadrightarrow R:r_2b=\eta_2\}.
\tag{2}
$$
Thus no independence of Galois characters is being assumed: surjectivity follows from the absence of a common quotient proved in Step 1.

*3. Invariance of both factors.* A map from the pro-odd group $I$ to the $2$-group $D_2$ is trivial. Therefore $q_2:\Gamma\to D_2$ factors through the unramified quotient $\Gamma/I$. Every tame automorphism induces the identity on that quotient, as established in the [marked-count criterion](finite-quotient-criterion-for-frobenius-shift-lifting.md). Hence $q_2\alpha=q_2$, and the second factor of (2) is unchanged.

If $D_3=1$, the first factor simply counts all epimorphisms $G\twoheadrightarrow B$, independently of the marking. If $D_3\ne1$, write $r_3=\beta r_0$ for an isomorphism $\beta:C_3\to D_3$. The [binary tetrahedral theorem](binary-tetrahedral-embedding-counts-over-dyadic-fields.md) gives, for every continuous epimorphism $\epsilon:G\twoheadrightarrow C_3$,
$$
\#\{a:G\twoheadrightarrow B:r_0a=\epsilon\}
=F_d:=2^{d+4}\bigl(2^{2d-1}+(-1)^d2^{d-1}-1\bigr).
$$
Apply this with $\epsilon=\beta^{-1}q_3\pi$ and $\epsilon'=\beta^{-1}q_3\alpha\pi$. Both counts are $F_d$, including when it is zero. Equation (2) proves (1). $\square$

**Order-$48$ checks.** For $R=C_2$ and $r=(r_0,\operatorname{id}):B\times C_2\to C_3\times C_2$, the second factor of (2) is one. Every fixed tame marking onto $C_3\times C_2$ therefore has exactly $F_d$ lifts. For $r=r_0\operatorname{pr}_B$ onto $C_3$, that factor is the number of nonzero quadratic characters of $G$. It is $2^{d+2}-1$, by the degree-one cohomology dimension in Step 1 of the binary tetrahedral entry. Thus every fixed cubic marking has exactly
$$ (2^{d+2}-1)F_d $$
lifts to $B\times C_2$. These cases, together with $D=1,C_2$ where the marking is unchanged, exhaust the tame quotients by Step 2.

Over the unramified quadratic dyadic field $U_2$, one has $F_2=576$. For tame generators $\sigma,\tau$ with $\sigma\tau\sigma^{-1}=\tau^4$, write $C_3\times C_2=\langle u\rangle\times\langle v\rangle$. The three markings
$$q_a(\tau)=u,\qquad q_a(\sigma)=u^a v,\qquad a\in\mathbb Z/3$$
are epimorphisms and are cycled by the Frobenius shift. Each has $576$ lifts through $(r_0,\operatorname{id})$. With only the corresponding cubic marking fixed, there are $15\cdot576=8640$ lifts: the quadratic coordinate may then be any nonzero character, including ramified ones. At $d=1$, $F_1=0$, so none of these product targets has a surjective lift above a cubic marking.

**Scope.** The theorem handles every tame quotient map of $B\times R$, with no bound on $|R|$ or requirement that $R$ be abelian. It does not assert an analogous product factorization when the factors have a common nontrivial quotient, classify all targets of order $48$, or construct a lift to $G_k$. The full Frobenius-shift problem remains open.
