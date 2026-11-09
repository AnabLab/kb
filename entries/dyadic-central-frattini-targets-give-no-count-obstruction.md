---
title: Dyadic central Frattini targets give no tame count obstruction
kind: theorem
summary: 'Every tame automorphism of a dyadic Galois group preserves all marked surjection counts to P semidirect T when T has odd order and the Frattini subgroup of P is central elementary abelian. Fixed quotient vectors and nontrivial central actions are both allowed.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: central-product-decomposition-for-odd-actions-on-2-groups, label: uses, note: 'Separates the fixed two-group and the moving Frattini quotient, and shows every tame marking kills the moving factor.'}
  - {to: odd-order-equivariant-cup-module-over-dyadic-fields, label: uses, note: 'Makes every central-obstruction fibre of the moving factor independent of its odd-order marking.'}
  - {to: uniform-odd-complement-lift-counts-for-central-frattini-kernels, label: generalizes, note: 'Removes the hypotheses of no fixed quotient vectors and pointwise-fixed Frattini subgroup from its marked-count invariance conclusion.'}
  - {to: nontrivial-central-action-in-dyadic-lift-counts, label: uses, note: 'First removes the nontrivial action on the central elementary-abelian Frattini subgroup.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked counts and the fact that a tame automorphism fixes the unramified quotient pointwise.'}
  - {to: local-tate-duality, label: uses, note: 'Counts central lifts and identifies their obstruction groups.'}
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: uses, note: 'Its quaternion obstruction and zero count evaluate the order-96 example.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes this entire family of split targets from every tame marked-count obstruction; no full lift is constructed.'}
---

**Theorem (proved here).** Let $k/\mathbb Q_2$ be finite of degree $d$, with tame quotient $\pi:G_k\twoheadrightarrow\Gamma$. Let a finite odd-order group $T$ act on a finite $2$-group $P$, and suppose $\Phi(P)$ is central and elementary abelian. Put $H=P\rtimes T$. For every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$, $r:H\twoheadrightarrow D$,
$$
\#\{F:G_k\twoheadrightarrow H:rF=q\pi\}
=\#\{F:G_k\twoheadrightarrow H:rF=q\alpha\pi\}.
\tag{1}
$$
All maps are continuous and counted individually, including conjugate maps. There is no restriction on fixed vectors in $P/\Phi(P)$ or on the action on $\Phi(P)$.

**Proof.** *1. Remove the nontrivial central action.* Put $Z=\Phi(P)$ and $W=[Z,T]$. Averaging gives $Z=Z^T\oplus W$ and $W^T=0$. The [central-action reduction](nontrivial-central-action-in-dyadic-lift-counts.md) shows that $r(W)=1$ and every quotient surjection has exactly $|W|^{d+1}$ surjective lifts. Also $\Phi(P/W)=Z/W$ is central elementary abelian and fixed by $T$. Thus it suffices to prove (1) when $T$ fixes $Z$ pointwise.

Apply the [central-product decomposition](central-product-decomposition-for-odd-actions-on-2-groups.md) in this case. Retain its notation
$$
P=CR,\quad [C,R]=1,\quad A=C\cap R=\Phi(R),\quad
U=R/A,\quad Q=C/A.
$$
Write $u=\dim U$ and $a=\dim A$. The group $T$ fixes $C$ pointwise and $U^T=0$. Multiplication identifies
$$
H=(C\times(R\rtimes T))/\{(z,z^{-1}):z\in A\}.
\tag{2}
$$
In particular there is a central extension
$$
1\longrightarrow A\longrightarrow H
\longrightarrow Q\times(U\rtimes T)\longrightarrow1.
\tag{3}
$$

*2. Count above each fixed two-group map.* Fix epimorphisms $\beta:G_k\twoheadrightarrow Q$ and $\epsilon:G_k\twoheadrightarrow T$. Let
$$
c_\beta\in H^2(k,A)=A
$$
be the obstruction to lifting $\beta$ through $C\to Q$. Here $\mathbb F_2=\mu_2$, and the local invariant identifies $H^2(k,\mathbb F_2)$ with $\mathbb F_2$. We will show that the number of surjections to $H$ above the pair $(\beta,\epsilon)$ depends on $\epsilon$ only through the abstract group $T$.

Let $J_d=I_T^{\oplus d}$ with its invariant alternating form $b_d$, as in the [odd-order cup-module theorem](odd-order-equivariant-cup-module-over-dyadic-fields.md). Commutators of $R$ define $B:U\times U\to A$. For a basis $v_i$ of $U$ with dual $\xi_i$, put
$$
\Omega(f)=\sum_{i<j}B(v_i,v_j)b_d(f(\xi_i),f(\xi_j)),\qquad
N_d(c)=\#\{f:U^*\hookrightarrow J_d\text{ $T$-linear}:\Omega(f)=c\}.
\tag{4}
$$
The contraction in (4) is independent of the basis. The required number is
$$
M(\beta,\epsilon)=2^{u+a(d+2)}N_d(c_\beta).
\tag{5}
$$

To prove (5), let $L$ be cut out by $\epsilon$. A map to $U\rtimes T$ above $\epsilon$ is a cocycle with coefficients in $U$. Inflation-restriction identifies its cohomology class with a $T$-linear map
$$
f:U^*\longrightarrow H^1(L,\mathbb F_2).
$$
Positive-degree cohomology of the odd-order group $T$ on an $\mathbb F_2$-module vanishes [@milnecft, II, Corollary 1.31, p. 70; Remark 1.35(a), p. 72; continuous-cohomology discussion, p. 88]. The image of $f$ lies in the nontrivial summand, which the cup-module theorem identifies isometrically with $J_d$. Its restriction to $G_L$ surjects onto $U$ precisely when $f$ is injective. Each class has $2^u$ cocycle representatives, since $U^T=0$.

Choose lifts $t_i\in R$ of $v_i$. The ordered section of $R\to U$ has factor set
$$
F_R(x,y)=\sum_i t_i^2x_iy_i+
\sum_{i<j}B(v_i,v_j)x_jy_i\quad\text{in }A.
\tag{6}
$$
Upon restriction to $G_L$, this represents the obstruction of the moving cocycle. The square terms vanish because the cup pairing on the nontrivial summand is alternating. The remaining expression is $\Omega(f)$. Restriction on $H^2(k,A)$ is injective, as corestriction after restriction multiplies by odd $|T|$ [@milnecft, II, Proposition 1.30, p. 70; continuous-cohomology discussion, p. 88]. Under the displayed local identifications it is the identity: on each $\mathbb F_2$ coordinate it is an injective map between one-dimensional spaces.

Using a section of $C\to Q$ as well, (2) shows that the factor set of (3) is the sum of the factor sets for $C$ and $R\rtimes T$. The factors commute, so there is no mixed term. Consequently the pair $(\beta,f)$ lifts precisely when
$$
c_\beta+\Omega(f)=0.
\tag{7}
$$
Changing the cocycle representative amounts to conjugation by $U$. It lifts to conjugation by $R$, fixes the $Q$ coordinate, and does not change (7). Every unobstructed actual quotient map has $|H^1(k,A)|=2^{a(d+2)}$ lifts, by local duality and the Euler characteristic [@milne2006adt, I, Corollary 2.3, p. 28; Theorem 2.8, p. 31]. This proves the factors in (5).

For completeness, these lifts are surjective exactly when $f$ is injective. Necessity follows by projecting a surjection onto $U\rtimes T$. For sufficiency, the image of $G_L$ in $P/\Phi(P)=V_0\oplus U$ projects onto $U$ by injectivity of $f$, and onto $V_0$ because $\beta(G_L)=Q$: a quotient of the $2$-group $Q$ of odd order must be trivial. This image is $T$-stable. Indeed conjugation by $G_k$ on $P/\Phi(P)$ is the action through $\epsilon$. Averaging splits the image into its trivial and nontrivial parts, so these two surjective projections force the image to equal $V_0\oplus U$. Its image in $P$ therefore generates modulo $\Phi(P)$, hence is all of $P$ by the Frattini property. The $T$ projection is already surjective. This establishes (5), including zero counts.

*3. Keep the full tame marking.* The decomposition theorem gives $r(R)=1$. Hence $r$ factors through $Q\times T$. The images of $Q$ and $T$ commute and have coprime orders, so
$$
D=D_2\times D_o,\qquad r=(r_2,r_o),
$$
where $r_2:Q\twoheadrightarrow D_2$ and $r_o:T\twoheadrightarrow D_o$. Write $q=(q_2,q_o)$. The map $q_2$ kills tame inertia, since $D_2$ is a $2$-group. Every tame automorphism fixes the unramified quotient pointwise, as recorded in the [finite-quotient criterion](finite-quotient-criterion-for-frobenius-shift-lifting.md). Therefore $q_2\alpha=q_2$.

The left side of (1) is the sum of (5) over
$$
\beta:G_k\twoheadrightarrow Q,\quad r_2\beta=q_2\pi,
\qquad
\epsilon_0:\Gamma\twoheadrightarrow T,\quad r_o\epsilon_0=q_o,
\tag{8}
$$
with $\epsilon=\epsilon_0\pi$. Every map to odd-order $T$ kills wild inertia, so none are omitted. Precomposition $\epsilon_0\mapsto\epsilon_0\alpha$ bijects the second set with that for $q_o\alpha$, while leaving $\beta$ unchanged. Formula (5) gives equal summands. This proves (1), and step 1 restores the original central action. $\square$

**An order-96 example with fixed quotient vectors (proved here).** Let
$$
P=(D_8\times Q_8)/\langle(z_D,z_Q)\rangle,
$$
where $z_D,z_Q$ are the central involutions. Let $T=C_3$ act trivially on $D_8$ and cycle the quaternion directions in $Q_8$. Then $\Phi(P)=C_2$ is central, and $P/\Phi(P)$ has a two-dimensional fixed part and a two-dimensional moving part. Here $C=D_8$, $R=Q_8$, $A=C_2$, $Q=C_2^2$, and $|P\rtimes T|=96$.

Write a surjection $\beta:G_k\twoheadrightarrow C_2^2$ as an independent pair $x,y\in H^1(k,\mathbb F_2)$. Choose the two involution generators of $D_8$ as lifts of the basis; their commutator is $z_D$, so $c_\beta=x\cup y$. The [quaternion calculation](binary-tetrahedral-embedding-counts-over-dyadic-fields.md), steps 3–4, gives $2^{2d-1}+(-1)^d2^{d-1}$ zeros among its $2^{2d}$ cohomology classes. Removing the zero class only from the zero-obstruction fibre, (5) becomes
$$
M(\beta,\epsilon)=2^{d+4}
\begin{cases}
2^{2d-1}+(-1)^d2^{d-1}-1,&x\cup y=0,\\
2^{2d-1}-(-1)^d2^{d-1},&x\cup y=1.
\end{cases}
\tag{9}
$$
For $k=\mathbb Q_2$, these values are $0$ and $96$. Both occur. The perfect cup pairing has dimension three; its diagonal is a nonzero linear functional, since an alternating nondegenerate form has even dimension. For $x\ne0$, the number of independent $y$ with $x\cup y=1$ is $4-(x\cup x)$. There are four $x$ with $x\cup x=1$, giving $7\cdot4-4=24$ such ordered pairs. The other $42-24=18$ independent pairs have cup product zero. Thus there are $24\cdot96=2304$ surjections above each full cubic marking over $\mathbb Q_2$.

The nonzero obstruction of the fixed dihedral factor can cancel the moving quaternion obstruction. Counting only unobstructed lifts of the two factors separately would miss all these maps.

**Scope.** If there are no fixed quotient vectors, (5) reduces to the existing zero-obstruction formula. If the action is trivial, $R=1$ and (8) simply keeps the entire $2$-group map fixed. The theorem permits arbitrary odd-order complements and arbitrary ranks and actions on the central elementary-abelian Frattini subgroup. It gives invariance for a fixed field; it asserts no degree-only formula for the fixed-factor maps or for arbitrary proper markings. Noncentral or nonelementary Frattini subgroups, targets outside the stated semidirect-product class, compatible finite lifts and the full dyadic classification remain outside its conclusion.
