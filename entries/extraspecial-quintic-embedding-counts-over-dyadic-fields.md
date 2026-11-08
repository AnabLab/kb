---
title: Extraspecial quintic embedding counts over dyadic fields
kind: theorem
summary: 'For a dyadic field of degree d, marked surjections onto an explicit group of order 160 above a fixed cyclic quintic quotient depend only on d. Its wild kernel is nonabelian of order 32. The five tame quintic markings cycled by the Frobenius shift over U_4 have equal counts.'
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: local-tate-duality, label: uses, note: 'Duality and the Euler characteristic determine the square-class dimensions and cup-product pairing.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Tests a nonabelian wild kernel over the unramified degree-four field; equal counts do not construct a lift of the shift.'}
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: analogous-to, note: 'Replaces the quaternion wild kernel and cyclic cubic quotient by an extraspecial kernel of order 32 and a cyclic quintic quotient.'}
---

**The finite target.** All vector spaces in the construction are over $\mathbb F_2$. Put
$$
V=\{u=(u_0,\ldots,u_4):\textstyle\sum_i u_i=0\},\qquad
F(u,v)=\sum_{i<j}u_i v_j.
$$
On $E=V\times\mathbb F_2$ define
$$
(u,a)(v,b)=(u+v,a+b+F(u,v)).
$$
Bilinearity of $F$ proves associativity. Write $z=(0,1)$. Squares and commutators are
$$
(u,a)^2=z^{Q(u)},\qquad Q(u)=\sum_{i<j}u_i u_j,\qquad
[(u,a),(v,b)]=z^{B(u,v)},\quad B(u,v)=\sum_i u_i v_i.
$$
Here the commutator formula uses $\sum u_i=\sum v_i=0$. The radical of the dot product on $V$ is zero: its orthogonal complement in $\mathbb F_2^5$ is the all-ones line, which meets $V$ trivially. Thus $Z(E)=[E,E]=\langle z\rangle$, $|E|=32$, and $E/\langle z\rangle=V$. In particular, $E$ is extraspecial, meaning that its center and commutator subgroup coincide and have order two, with elementary abelian central quotient.

Let $s$ cyclically permute the five coordinates. It preserves $F$ on $V$: moving the last coordinate to the first changes $F(u,v)$ by
$$
u_4\sum_{j\ne4}v_j+\Bigl(\sum_{i\ne4}u_i\Bigr)v_4=0.
$$
So $s(u,a)=(su,a)$ defines an order-five automorphism of $E$. Fix
$$
\mathcal B=E\rtimes\langle s\rangle,\qquad
r:\mathcal B\longrightarrow C_5=\langle s\rangle.
$$
This explicitly defines a group of order $160$. Its central quotient by $\langle z\rangle$ is $V\rtimes C_5$.

**Theorem (proved here).** Let $k/\mathbb Q_2$ be finite of degree $d$, and fix a continuous epimorphism $\epsilon:G_k\to C_5$. The number of continuous epimorphisms $\rho:G_k\to\mathcal B$ with $r\rho=\epsilon$ is
$$
\boxed{\quad 2^{d+6}\bigl(2^{4d-1}+(-1)^d2^{2d-1}-1\bigr).\quad}
$$
Maps to the fixed target are counted separately, without quotienting by conjugation. The count is independent of the cyclic quintic extension, including whether it is ramified.

**Proof.** Let $L$ be the fixed field of $\ker\epsilon$, and use the same letter $s$ for the corresponding generator acting on $H=H^1(L,\mathbb F_2)$. All cohomology is continuous, and $\mathbb F_2=\mu_2$ is trivial.

*1. The nontrivial square-class summand.* Averaging over $C_5$ gives
$$
H=H^{C_5}\oplus W,\qquad W=\ker(1+s+s^2+s^3+s^4).
$$
Inflation-restriction identifies $H^{C_5}$ with $H^1(k,\mathbb F_2)$. More generally it identifies $H^1(k,V)$ with $\operatorname{Hom}_{C_5}(G_L,V)$, since the positive-degree cohomology of $C_5$ on an $\mathbb F_2$-module vanishes: it is killed by both five and two. These uses of restriction and inflation follow [@milnecft, II, Corollary 1.31, p. 70, and Remark 1.35(a), p. 72]; the continuous version is discussed on p. 88 of the same source.

Local duality and the Euler characteristic give $H^2(M,\mathbb F_2)=\mathbb F_2$ and $\dim H^1(M,\mathbb F_2)=[M:\mathbb Q_2]+2$ for $M=k,L$, and a nondegenerate cup-product pairing $b$ on $H$ [@milne2006adt, I, Corollary 2.3, p. 28, and Theorem 2.8, p. 31]. Hence $\dim W=4d$. The pairing is symmetric: for homomorphisms $x,y:G_L\to\mathbb F_2$, the cocycle $(g,h)\mapsto x(g)y(h)+y(g)x(h)$, which represents $x\cup y+y\cup x$, is the coboundary of the cochain $g\mapsto x(g)y(g)$. It is also $s$-invariant, and the displayed summands are orthogonal: for invariant $v$ and $w\in W$, averaging gives $b(v,w)=b(v,(1+s+\cdots+s^4)w)=0$. Thus $b|_W$ is nondegenerate. The function $w\mapsto b(w,w)$ is an invariant linear functional, so it vanishes on $W$, again by averaging. Therefore $b|_W$ is alternating.

The polynomial $1+t+t^2+t^3+t^4$ is irreducible over $\mathbb F_2$, since two has order four modulo five. Consequently $V$ is irreducible, and every nonzero cyclic $C_5$-submodule of $W$ has dimension four.

*2. Maps to the central quotient.* A homomorphism $a:G_k\to V\rtimes C_5$ above $\epsilon$ is a $1$-cocycle with coefficients in $V$. Taking its zeroth coordinate on $G_L$ identifies
$$
H^1(k,V)\cong\operatorname{Hom}_{C_5}(G_L,V)\cong W.
$$
Explicitly, $x\in W$ gives the equivariant homomorphism with coordinates $(x,sx,s^2x,s^3x,s^4x)$; their sum is zero. The usual action on characters is $sx(g)=x(h^{-1}gh)$ for a lift $h$ of $s$, so these coordinates transform by the chosen cyclic permutation on $V$. If $x\ne0$, its image is a nonzero stable subspace of the irreducible $V$, hence all of $V$; this is exactly when $a$ is surjective. Each cohomology class has $|V/V^{G_k}|=16$ cocycle representatives, conjugate by $V$.

*3. The obstruction.* The obstruction to lifting $a$ through the central kernel $\langle z\rangle$ is its pulled-back factor set in $H^2(k,\mathbb F_2)$. A lift exists precisely when this continuous factor set is a coboundary, by the definition of the multiplication law. Restriction to $L$ is injective: corestriction after restriction is multiplication by five [@milnecft, II, Proposition 1.30, p. 70, and the continuous-cohomology discussion, p. 88]. Over $L$, the factor set is $F$, so for the coordinates from step 2 its class is
$$
q(x)=\sum_{i<j} b(s^ix,s^jx)=b(x,sx)+b(x,s^2x).
$$
The last equality groups the ten unordered pairs into two cyclic orbits of length five, using symmetry and invariance of $b$. Thus $q(x)=0$ exactly when a lift exists. Conjugation in $V\rtimes C_5$ lifts to conjugation in $\mathcal B$, so all sixteen cocycles of a class have the same obstruction.

The quadratic form $q$ is $s$-invariant and has polarization
$$
q(x+y)+q(x)+q(y)
=b\bigl(x,(s+s^2+s^3+s^4)y\bigr)=b(x,y).
$$
In particular it is nondegenerate on $W$.

*4. Its zero count.* We give an elementary decomposition argument. On any nonzero nondegenerate stable summand of $W$, choose $x$ with $q(x)=1$, possible because the polarization is nonzero. Its cyclic span $U$ is irreducible of dimension four. The radical of $b|_U$ is stable, so $b|_U$ is either zero or nondegenerate. If it were zero, $q|_U$ would be an invariant linear functional, hence zero, contradicting $q(x)=1$. Thus $U$ is nondegenerate, and its orthogonal complement is stable. Induction splits $W$ into $d$ such orthogonal four-dimensional summands.

On each $U$, put $S=\sum_{u\in U}(-1)^{q(u)}$. Nondegeneracy gives
$$
S^2=\sum_{w\in U}(-1)^{q(w)}\sum_{u\in U}(-1)^{b(u,w)}=16.
$$
So $q|_U$ has either six or ten zeros. All nonzero $C_5$-orbits have length five, so its zero count is congruent to one modulo five; it must be six. Hence $S=-4$. Orthogonal sums multiply these sums, giving
$$
\#q^{-1}(0)=\frac{2^{4d}+(-4)^d}{2}
=2^{4d-1}+(-1)^d2^{2d-1}.
$$

*5. Counting proper lifts.* Remove the zero vector to ensure surjectivity to $V\rtimes C_5$, and multiply by sixteen cocycles per class. Each unobstructed map has exactly $|H^1(k,\mathbb F_2)|=2^{d+2}$ lifts, since any two lifts differ by a character into the central kernel. Every lift is surjective. Indeed, its image on $G_L$ maps onto $V$; commutators of lifts of $u,v$ with $B(u,v)=1$ give $z$, so that image is all of $E$. The quotient image is already $C_5$. Multiplication of these factors proves the formula. $\square$

**The Frobenius-shift test.** Let $k=U_4$, the unramified degree-four extension of $\mathbb Q_2$. Its tame quotient has generators $\sigma,\tau$ with $\sigma\tau\sigma^{-1}=\tau^{16}$. For $a\in\mathbb Z/5$, the markings
$$
\epsilon_a(\tau)=s,\qquad \epsilon_a(\sigma)=s^a
$$
are epimorphisms to $C_5$. Precomposition by the [Frobenius shift](frobenius-shift-lifting-problem.md), $\sigma\mapsto\sigma\tau$, $\tau\mapsto\tau$, cycles them. The theorem gives $2^{10}(2^{15}+2^7-1)=33\,684\,480$ marked surjections to $\mathcal B$ above each. Thus this target supplies no obstruction by unequal marked surjection counts. This is the first unramified dyadic base on which tame inertia can map nontrivially to $C_5$, since five divides $2^f-1$ exactly when four divides $f$.

**Checks and limit.** For $d=1$, the quadratic space has six zeros and the count is $16\cdot5\cdot8=640$. For $d=2$, it has $136$ zeros and the count is $16\cdot135\cdot16=34\,560$. The argument uses neither a presentation of $G_k$ nor a lift of a tame automorphism. Counts for this one target do not match all finite quotient diagrams or construct an automorphism of $G_k$; the Frobenius-shift problem and the remaining dyadic classification cases stay open.
