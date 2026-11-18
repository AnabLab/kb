---
title: Dyadic counts for regular quaternion wreath targets
kind: theorem
summary: 'For every nontrivial finite 2-group S of order n, each pair of dyadic surjections to C3 and S has exactly 2^((3n-2)d+3n)(2^(2d)-1) surjective lifts to (Q8 wr S) ⋊ C3, with diagonal cubic action. The count depends only on n and the field degree d; every tame marked count is invariant.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: dyadic-counts-for-the-quaternion-wreath-target, label: generalizes, note: 'Its target and count are the case S = C2.'}
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: uses, note: 'Steps 2–5 give the quaternion obstruction, its nondegenerate polarization, and the numbers of cocycles and central lifts over the S-extension.'}
  - {to: local-tate-duality, label: uses, note: 'Identifies the transfer kernel as the orthogonal of the restriction subspace.'}
  - {to: noncentral-frattini-layers-in-dyadic-lift-counts, label: uses, note: 'Its comparison paragraph gives Φ(P) ⊆ Φ(H).'}
  - {to: tame-automorphisms-lift-modulo-wild-commutators, label: uses, note: 'Step 1 shows that every tame automorphism fixes the unramified quotient.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes these regular wreath targets from finite tame marked-count obstructions; constructs no full lift.'}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$ and tame quotient $\pi:G_k\twoheadrightarrow\Gamma$. Let $S$ be a nontrivial finite $2$-group of order $n$. Put $B=Q_8\rtimes C_3$, where a generator $c$ cycles $i,j,ij$, and write $\rho:B\twoheadrightarrow C_3$. Let $S$ act on $B^S$ by $(a\cdot b)_s=b_{sa}$, and set
$$
H=\{(b_s)_{s\in S}a\in B^S\rtimes S:\rho(b_s)\text{ is independent of }s\}.
$$
Thus $H=(Q_8\wr S)\rtimes C_3$, with diagonal cubic action commuting with $S$. Write $P=Q_8\wr S$ and
$$
\kappa:H\twoheadrightarrow C_3\times S,\qquad ((b_s),a)\mapsto(\rho(b_1),a).
$$
All homomorphisms below are continuous, and counts distinguish actual maps, including conjugate ones.

**Theorem (proved here).** For any epimorphisms $\epsilon:G_k\twoheadrightarrow C_3$ and $\delta:G_k\twoheadrightarrow S$, the number of epimorphisms $F:G_k\twoheadrightarrow H$ with $\kappa F=(\epsilon,\delta)$ is
$$
C_{d,n}=2^{(3n-2)d+3n}(2^{2d}-1).
\tag{1}
$$
In particular it is independent of both quotient maps and their ramification. For every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$, $r:H\twoheadrightarrow D$,
$$
\#\{F:G_k\twoheadrightarrow H:rF=q\pi\}
=\#\{F:G_k\twoheadrightarrow H:rF=q\alpha\pi\}.
\tag{2}
$$

**Proof.** Let $L$ be the fixed field of $N=\ker\delta$, so $[L:\mathbb Q_2]=nd$. The restriction $\epsilon|_N$ remains surjective, since $[G_k:N]=n$ is prime to three. Write $V=Q_8/\{\pm1\}\cong\mathbb F_2^2$, with its irreducible cubic action, and let $V_\epsilon$ be the resulting $G_k$-module.

*1. Induction and the number of maps.* Choose $t_s\in G_k$ with $\delta(t_s)=s$ and $t_1=1$, and put
$$
h_{s,g}=t_sgt_{s\delta(g)}^{-1}\in N.
$$
Every homomorphism $F$ above $(\epsilon,\delta)$ is uniquely specified by a homomorphism $\psi:N\to B$ above $\epsilon|_N$ and elements $a_s\in B$ with $a_1=1$ and $\rho(a_s)=\epsilon(t_s)$, through
$$
F(g)=\bigl(a_s^{-1}\psi(h_{s,g})a_{s\delta(g)}\bigr)_{s\in S}\,\delta(g).
\tag{3}
$$
Indeed, $h_{s,gg'}=h_{s,g}h_{s\delta(g),g'}$, so (3) respects multiplication in the wreath product. Each coordinate has cubic image $\epsilon(g)$. Conversely, recover $\psi$ as the first coordinate of $F|_N$ and $a_s$ as the first coordinate of $F(t_s)$; the identity $t_sg=h_{s,g}t_{s\delta(g)}$ forces (3). Thus each $\psi$ gives exactly $8^{n-1}$ maps $F$, before imposing surjectivity.

*2. Surjectivity is detected by transfer.* In the abelianization of $P$, all coordinate copies of $Q_8$ have the same image, since $S$ permutes them transitively. Each copy factors through $V$. The map given by the sum of these coordinates and the image in $S^{\mathrm{ab}}$ identifies $P^{\mathrm{ab}}$ with $V\times S^{\mathrm{ab}}$: the coordinate copy at $1$ and the embedded $S$ give an inverse on abelianizations. Consequently
$$
H/\Phi(P)\cong (V\rtimes C_3)\times S/\Phi(S)=A_4\times S/\Phi(S).
\tag{4}
$$
Here the $V$-coordinate is the sum of the $V$-coordinates of the $b_s$, and the cubic coordinate is their common image. By the comparison paragraph of [the noncentral layer theorem](noncentral-frattini-layers-in-dyadic-lift-counts.md), $\Phi(P)\subseteq\Phi(H)$. Hence $F$ is surjective if and only if its image in (4) is everything.

Its projection onto $S/\Phi(S)$ is surjective. If its projection onto $A_4$ is also surjective, the commutator of its image contains $V\times1$: its projection onto $A_4$ is $[A_4,A_4]=V$, and its other projection is trivial. Its image modulo $V\times1$ is all of $C_3\times S/\Phi(S)$, since it projects onto both factors of coprime orders. Thus it is the full group in (4). This proves that $F$ is surjective exactly when its projection onto $A_4$ is surjective.

Write $\psi\bmod\{\pm1\}$ as $(\xi,\epsilon|_N)$, with $x=[\xi]\in W:=H^1(L,V_\epsilon)$. If $a_s\bmod\{\pm1\}=(u_s,\epsilon(t_s))$, summing the vector coordinates in (3) gives the cocycle
$$
z(g)=\sum_{s\in S}\epsilon(t_s)^{-1}\xi(h_{s,g})+(g-1)w,
\qquad w=\sum_{s\in S}\epsilon(t_s)^{-1}u_s.
\tag{5}
$$
The first sum is the degree-one transfer cocycle. Thus the class of the projection to $A_4$ is $\operatorname{cor}_{L/k}x$; this also follows from transfer as the sum map on an induced module [@milnecft, II, Example 1.29, p. 70; continuous-cohomology discussion, p. 88]. By Step 2 of [the binary tetrahedral count](binary-tetrahedral-embedding-counts-over-dyadic-fields.md), such an $A_4$-map is surjective exactly when its class is nonzero. We have proved
$$
F\text{ is surjective}\quad\Longleftrightarrow\quad\operatorname{cor}_{L/k}x\ne0.
\tag{6}
$$

*3. The obstruction and its restriction subspace.* Steps 2–5 of the binary tetrahedral count, applied over $L$, give $\dim W=2nd$ and a quaternion lifting obstruction $Q_L:W\to H^2(L,\mathbb F_2)=\mathbb F_2$. Its polarization $\beta_L$ is nondegenerate. Each class has four cocycle representatives, and each unobstructed cocycle has exactly $2^{nd+2}$ lifts to $B$.

More precisely, $\beta_L$ is the local cup pairing obtained by contracting $V\otimes V$ with the invariant alternating form
$$
j((a,b),(a',b'))=ab'+ba'.
$$
To check this identification, restrict to the cubic extension that trivializes $V_\epsilon$. Polarizing the quaternion factor set in Step 3 of the binary tetrahedral count leaves exactly the two cross cup products contracted by $j$. Restriction on $H^2(\cdot,\mathbb F_2)$ for this odd-degree extension is injective, since corestriction after restriction is multiplication by three [@milnecft, II, Proposition 1.30, p. 70]. This proves the identification over $L$, and the same argument gives the analogous pairing $\beta_k$ over $k$.

Let
$$
\Lambda=\operatorname{res}_{L/k}H^1(k,V_\epsilon)\subseteq W,
\qquad K=\ker(\operatorname{cor}_{L/k}:W\to H^1(k,V_\epsilon)).
$$
Restriction here is injective: its kernel is $H^1(S,V_\epsilon^N)=0$, since $V_\epsilon^N=0$ [@milnecft, II, Proposition 1.34, p. 71; continuous-cohomology discussion, p. 88]. Thus $\dim\Lambda=2d$ by the binary tetrahedral calculation over $k$. Naturality of the quaternion obstruction gives $Q_L(\operatorname{res}y)=\operatorname{res}Q_k(y)=0$: restriction on the $2$-torsion Brauer group multiplies local invariants by the even degree $n$ [@milnecft, III, Theorem 2.1, diagram (28), p. 103]. Hence $Q_L$ vanishes on $\Lambda$.

The projection formula and compatibility of local invariants with corestriction give
$$
\beta_L(x,\operatorname{res}y)=\beta_k(\operatorname{cor}x,y)
$$
[@milnecft, II, Proposition 1.39(d), p. 74; III, equation (30), p. 105]. Since $\beta_k$ is nondegenerate, $K=\Lambda^\perp$. It has dimension $2nd-2d$. Also $\Lambda\subseteq K$, because $Q_L$ vanishes identically on $\Lambda$, so its polarization does too.

*4. Counting.* In each coset $x+\Lambda$ outside $K$, the function
$$
Q_L(x+\lambda)=Q_L(x)+\beta_L(x,\lambda),\qquad\lambda\in\Lambda,
$$
is a nonconstant affine linear function, since $x\notin\Lambda^\perp$. Exactly half its values are zero. Such cosets partition $W\smallsetminus K$, because $\Lambda\subseteq K$. Therefore
$$
\#\{x\in W:\operatorname{cor}x\ne0,\ Q_L(x)=0\}
=\frac{|W|-|K|}{2}
=2^{2(n-1)d-1}(2^{2d}-1).
\tag{7}
$$
Multiply (7) by $8^{n-1}$ choices in (3), four cocycles per class, and $2^{nd+2}$ central lifts per cocycle. By (6) all resulting maps, and exactly those maps, are surjective. The product is (1).

*5. Every tame marking.* A finite quotient $D$ of $\Gamma$ has a cyclic normal subgroup of odd order, the image of tame inertia, with cyclic quotient. Its Sylow $2$-subgroups are therefore cyclic, so $r(P)$ is cyclic. The odd group $r(C_3)$ centralizes $r(P)$, since a cyclic $2$-group has a $2$-group of automorphisms. Thus $D=r(P)\times r(C_3)$ is abelian. In each coordinate $Q_8$, the elements $i^{-1}c(i)=-ij$ and $j^{-1}c(j)=-i$ generate $Q_8$, so $Q_8^S\subseteq[H,H]$. Consequently $r$ factors through $\kappa$ as a product of epimorphisms
$$
\gamma:C_3\twoheadrightarrow D_3,\qquad\lambda:S\twoheadrightarrow D_2,
$$
where $D=D_3\times D_2$ is its Sylow decomposition.

Write $q_3,q_2$ for the components of $q$. To count the left side of (2), sum (1) over epimorphisms $\epsilon,\delta$ satisfying $\gamma\epsilon=q_3\pi$ and $\lambda\delta=q_2\pi$. If $D_3\cong C_3$, there is exactly one possible $\epsilon$; if $D_3=1$, all cubic epimorphisms are allowed. The same numbers apply to $q_3\alpha$. Every tame automorphism fixes the unramified quotient, by Step 1 of [the tame lifting proof](tame-automorphisms-lift-modulo-wild-commutators.md). Since $q_2$ kills tame inertia, $q_2\alpha=q_2$, so the allowed $\delta$ are exactly the same on both sides. The multiplier $C_{d,n}$ is independent of the pair. This proves (2), including when there is no allowed $\delta$. $\square$

**Checks and scope.** For $S=C_2$, formula (1) is $2^{4d+6}(2^{2d}-1)$, the earlier quaternion wreath count. At $d=1$, the class count (7) is $6$ for $n=2$ and $96$ for $n=4$; multiplying the factors above gives $3072$ and $12582912$, respectively. The case $S=1$ is excluded: then the restriction subspace need not have zero obstruction, and the binary tetrahedral count can vanish. No assumption that $S$ is cyclic or that $L/k$ is unramified enters the proof. The theorem gives an infinite family of invariant finite counts, but no compatible system of lifts and no automorphism of $G_k$; the [Frobenius-shift lifting problem](frobenius-shift-lifting-problem.md) remains open.
