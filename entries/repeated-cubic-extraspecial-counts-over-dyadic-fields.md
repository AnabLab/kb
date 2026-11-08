---
title: Repeated cubic extraspecial counts over dyadic fields
kind: theorem
summary: 'For central products of r quaternion groups with diagonal cubic action, marked surjection counts over a dyadic field of degree d are explicit rank-constrained counts over F4, independent of the cubic marking. The order-96 target gives 18,432 maps at d = 2.'
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: generalizes, note: 'One quaternion factor is its binary tetrahedral target; the proof uses its quadratic obstruction calculation.'}
  - {to: local-tate-duality, label: uses, note: 'Gives the cohomology dimensions and perfect obstruction polarization.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked counts and the cyclic Sylow 2-subgroups of finite dyadic tame quotients.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes this infinite family with repeated cubic constituents from every marked-count obstruction; no tame automorphism is lifted.'}
---

**Targets.** For $r\ge1$, take $r$ copies of $Q_8=\{\pm1,\pm i,\pm j,\pm ij\}$, and form their central product
$$
E_r=Q_8^r/K_r,\qquad
K_r=\{(\varepsilon_1,\ldots,\varepsilon_r)\in\{\pm1\}^r:
\textstyle\prod_i\varepsilon_i=1\}.
$$
The images of the central involutions coincide; denote this involution by $z$. Then $|E_r|=2^{2r+1}$ and
$$
Z(E_r)=[E_r,E_r]=\langle z\rangle,\qquad E_r/\langle z\rangle=V^r,
\quad V=Q_8/\{\pm1\}\cong\mathbb F_2^2.
$$
Indeed the commutator form is the orthogonal sum of the nondegenerate alternating forms on the $r$ copies of $V$. Let $C_3=\langle s\rangle$ act diagonally, cycling $i,j,ij$ in each factor. Put $H_r=E_r\rtimes C_3$ and let $p_r:H_r\twoheadrightarrow C_3$ be the projection. Thus $H_1$ is the binary tetrahedral group and $|H_2|=96$.

**Theorem (proved here).** Let $k/\mathbb Q_2$ have degree $d$, and fix any continuous epimorphism $\epsilon:G_k\twoheadrightarrow C_3$. Define the finite integer
$$
N_{d,r}=\#\left\{X=(x_{ij})\in M_{d\times r}(\mathbb F_4):
\operatorname{rank}_{\mathbb F_4}X=r,\quad
\sum_{i=1}^d\sum_{j=1}^r x_{ij}^3=0\right\}.
$$
Each cube lies in $\mathbb F_2\subset\mathbb F_4$. Then
$$
\#\{\rho:G_k\twoheadrightarrow H_r:p_r\rho=\epsilon\}
=2^{2r+d+2}N_{d,r}.\tag{1}
$$
These are continuous maps to the fixed target, without identifying conjugates. The count depends only on $d,r$, including for ramified cubic extensions. It is zero for $r>d$.

For two quaternion factors the matrix count has the closed form
$$
N_{d,2}=2^{4d-1}-7\cdot2^{2d-1}-(-1)^d2^d+4.\tag{2}
$$
In particular, the order-96 target has $18\,432$ marked surjections for $d=2$ and none for $d=1$.

Moreover every tame marking of $H_r$ has invariant surjection counts under every automorphism of the tame Galois group of $k$, in the sense of the [finite-quotient criterion](finite-quotient-criterion-for-frobenius-shift-lifting.md).

**Proof.** Let $L$ be the cubic extension cut out by $\epsilon$, and regard $V$ as a $G_k$-module through $\epsilon$. Identify $\langle z\rangle=\mathbb F_2=\mu_2$ and $H^2(k,\mathbb F_2)=\mathbb F_2$ by the local invariant. Write $\omega$ for the image of $s$ in $\operatorname{End}_{C_3}(V)=\mathbb F_4$; it satisfies $\omega^2+\omega+1=0$.

*1. The quaternion obstruction has a fixed $\mathbb F_4$-linear normal form.* Put $W=H^1(k,V)$. The coefficient action of $s$ makes $W$ an $\mathbb F_4$-space. Local duality and the Euler characteristic give $\dim_{\mathbb F_2}W=2d$ and $\dim H^1(k,\mathbb F_2)=d+2$ [@milne2006adt, I, Corollary 2.3, p. 28, and Theorem 2.8, p. 31].

The central extension $Q_8\rtimes C_3\to V\rtimes C_3$ defines an obstruction $q:W\to\mathbb F_2$. As proved in steps 2–4 of the [binary tetrahedral count](binary-tetrahedral-embedding-counts-over-dyadic-fields.md), it has $q(0)=0$ and a nondegenerate polarization $\beta$. It is invariant under multiplication by $\omega$: that coefficient action is induced by conjugation by $s$, which lifts to the central extension. Concretely, on restriction to $L$ an ordered quaternion section has factor set
$$
((u,v),(u',v'))\longmapsto uu'+vv'+vu'.
$$
Polarizing its pullback gives the cup product through the commutator form, which is perfect by local duality. Restriction on $H^2(k,\mathbb F_2)$ is injective, since restriction followed by corestriction multiplies by three [@milnecft, II, Proposition 1.30, p. 70; continuous-cohomology discussion, p. 88]. These facts apply to every $\epsilon$.

Here is a normal-form argument that also preserves the coefficient field. On any nonzero nondegenerate $\omega$-stable summand of $W$, choose $x$ with $q(x)=1$; such an $x$ exists because the polarization is nonzero. The plane $\mathbb F_4x$ has all three nonzero vectors of value one. Since $x+\omega x=\omega^2x$, we have $\beta(x,\omega x)=1$, so this plane is nondegenerate. Its orthogonal complement is $\omega$-stable and nondegenerate. Induction therefore gives an $\mathbb F_4$-linear isomorphism
$$
(W,q)\cong\left(\mathbb F_4^d,\ (x_1,\ldots,x_d)\longmapsto\sum_i x_i^3\right).\tag{3}
$$
In particular this normal form depends only on $d$, not the marking.

*2. Surjectivity requires independence.* A map to $A_r=V^r\rtimes C_3$ above $\epsilon$ is a cocycle with coefficients in $V^r$. Its cohomology class is a tuple $(w_1,\ldots,w_r)\in W^r$. Restriction gives an $\mathbb F_4$-linear isomorphism
$$
W\cong\operatorname{Hom}_{C_3}(G_L,V):
$$
the positive-degree cohomology of $C_3$ on an $\mathbb F_2$-module vanishes, and inflation-restriction applies [@milnecft, II, Corollary 1.31, p. 70; Remark 1.35(a), p. 72; continuous-cohomology discussion, p. 88].

The image of $G_L$ in $V^r$ is $C_3$-stable and hence an $\mathbb F_4$-subspace. It is proper exactly when some nonzero $\mathbb F_4$-linear functional $V^r\to V$ annihilates it. Under the restriction isomorphism this is exactly a relation $\sum_j a_jw_j=0$ with $a_j\in\mathbb F_4$ not all zero. Thus the map to $A_r$ is surjective exactly when the $w_j$ are $\mathbb F_4$-linearly independent. Merely asking that the tuple be nonzero would overcount when $r>1$.

*3. The obstruction adds, and all unobstructed surjections lift surjectively.* Quotienting $Q_8^r$ by $K_r$ pushes its central kernel $\mathbb F_2^r$ forward by summation. Therefore the obstruction for the tuple is
$$
Q(w_1,\ldots,w_r)=\sum_j q(w_j).\tag{4}
$$
For an explicit check, restrict to $G_L$ and choose the product of the ordered quaternion sections used in step 1. The factor set in the quotient is the sum of the $r$ quaternion factor sets. Injectivity of restriction in degree two proves (4) over $k$ as well. Thus (3), independence, and (4) count the unobstructed surjective classes by $N_{d,r}$.

Each class has $|V^r|=2^{2r}$ cocycle representatives, since $(V^r)^{G_k}=0$. Conjugation by $V^r$ lifts to conjugation by $E_r$, so all have the same obstruction. Every unobstructed map has $|H^1(k,\mathbb F_2)|=2^{d+2}$ lifts to $H_r$: two lifts differ precisely by a character into its central kernel. Every such lift is surjective. Its image on $G_L$ maps onto $V^r$; two elements with commutator pairing one supply $z$, so that image is all of $E_r$. The cubic quotient is already surjective. This proves (1), including the zero count when $r>d$.

*4. The order-96 calculation.* The normal form (3) has Gauss sum $(-2)^d$, since on each coordinate one vector has value zero and three have value one. Consequently it has
$$
Z_d=\frac{4^d+(-2)^d}{2}
$$
zeros, and $q(x)+q(y)$ has $(16^d+4^d)/2$ zeros on $W^2$.

Nonzero dependent pairs $(x,y)$ lie in exactly one of the five subspaces
$$
\{(a t,b t):t\in W\},\qquad [a:b]\in\mathbb P^1(\mathbb F_4).
$$
These subspaces meet only at zero. The two coordinate-axis subspaces contribute $Z_d-1$ nonzero zeros each. In each of the other three subspaces both $a,b$ are nonzero, so $q(at)+q(bt)=q(t)+q(t)=0$ for every $t$; each contributes $4^d-1$ nonzero zeros. The number of dependent zeros is therefore
$$
1+2(Z_d-1)+3(4^d-1)=4^{d+1}+(-2)^d-4.
$$
Subtracting this from $(16^d+4^d)/2$ proves (2). At $d=2$, $N_{2,2}=72$ and (1) gives $2^8\cdot72=18\,432$.

*5. Every tame marking.* Suppose $a:H_r\twoheadrightarrow D$ and $b:\Gamma\twoheadrightarrow D$, where $\Gamma$ is the tame quotient of $G_k$. A finite dyadic tame quotient has a normal cyclic odd-order inertia subgroup and cyclic quotient by it. Its Sylow $2$-subgroups inject into that cyclic quotient and hence are cyclic. Thus $a(E_r)$ is cyclic. Any such image factors through the elementary abelian group $E_r/[E_r,E_r]=V^r$, so has order at most two. If its order were two, the corresponding nonzero functional $V^r\to\mathbb F_2$ would be $C_3$-invariant, impossible because $V^r$ has no trivial constituent. Hence $a$ kills $E_r$ and factors through $p_r$. In particular, $D$ is either $C_3$ or trivial.

For $D\cong C_3$, the marking fixes a unique epimorphism $\epsilon:G_k\to C_3$, and (1) is independent of this choice. Precomposing $b$ by any $\alpha\in\operatorname{Aut}(\Gamma)$ therefore preserves the marked count. For trivial $D$ the two markings are equal. This proves the last assertion. $\square$

**Checks and scope.** At $r=1$, $N_{d,1}=Z_d-1$ and (1) is the binary tetrahedral formula. At $d=1$ all $r\ge1$ give zero: the only possible nonzero independent column for $r=1$ has nonzero norm. For $r=2$, the full-rank matrix counts at $d=1,2,3,4$ with total cube sum zero are $0,72,1836,31860$, respectively. These can be checked directly over $\mathbb F_4$; they are not an enumeration of Galois representations.

The action on $V^r$ is reducible for $r>1$ but has only one irreducible type. Equation (4) permits two individually obstructed quaternion classes to cancel; multiplying separate binary tetrahedral surjection counts would miss these maps. The result treats this diagonal cubic family. It does not handle arbitrary reducible odd actions or general wild kernels, and supplies no compatible tame lift or answer to the dyadic classification problem.
