---
title: Reciprocal cyclic extraspecial counts over dyadic fields
kind: theorem
summary: 'For explicit extraspecial kernels with two distinct dual cyclic constituents, every marked surjection count over a dyadic field depends only on its degree and the target. A closed formula allows repeated constituents and excludes every tame marking of this family from count obstructions.'
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: local-tate-duality, label: uses, note: 'The two cohomology spaces have equal dimension and a perfect finite-field-valued cup pairing.'}
  - {to: irreducible-cyclic-extraspecial-counts-over-dyadic-fields, label: analogous-to, note: 'Here the cyclic action has two distinct dual constituents, rather than one self-dual irreducible constituent.'}
  - {to: repeated-cubic-extraspecial-counts-over-dyadic-fields, label: analogous-to, note: 'Both impose independence for repeated constituents; here the two distinct constituents give separate rank conditions and a bilinear obstruction.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked surjection counts.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes this family of nonabelian wild targets from every marked-count obstruction; no automorphism is lifted.'}
---

**Targets.** Put $F=\mathbb F_{2^t}$, $Q=2^t$, and $T=\operatorname{Tr}_{F/\mathbb F_2}$. Choose $\lambda\in F^\times$ of odd order $m>1$ such that
$$
\mathbb F_2(\lambda)=F,\qquad
\lambda^{-1}\notin\{\lambda,\lambda^2,\ldots,\lambda^{2^{t-1}}\}.
\tag{1}
$$
For $r\ge1$, define $E=F^r\times F^r\times\mathbb F_2$ by
$$
(x,y,a)(x',y',a')
=(x+x',y+y',a+a'+T(\textstyle\sum_jx_jy'_j)).
\tag{2}
$$
Bilinearity of the last term proves associativity. With $z=(0,0,1)$, the commutator form on $V=E/\langle z\rangle=F^r\oplus F^r$ is
$$
B((x,y),(x',y'))=T\bigl(\textstyle\sum_j(x_jy'_j+x'_jy_j)\bigr).
$$
It is nondegenerate by the finite-field trace pairing. Thus $Z(E)=[E,E]=\langle z\rangle\cong C_2$: $E$ is extraspecial of order $2Q^{2r}$. The automorphism
$$
s(x,y,a)=(\lambda x,\lambda^{-1}y,a)
$$
preserves (2) and has order $m$. Fix $H=E\rtimes C_m$ and its projection $p:H\twoheadrightarrow C_m=\langle s\rangle$.

The two modules $U_+=F$ and $U_-=F$, on which $s$ acts by $\lambda$ and $\lambda^{-1}$, are nontrivial irreducible $\mathbb F_2[C_m]$-modules. Their endomorphism fields are $F$, and (1) makes them nonisomorphic. The pairing $T(uv)$ identifies $U_-$ with the dual of $U_+$.

**Theorem (proved here).** Let $k/\mathbb Q_2$ have degree $d$, and fix a continuous epimorphism $\epsilon:G_k\twoheadrightarrow C_m$. For $r\le d$, put
$$
R_{d,r}=\prod_{i=0}^{r-1}(Q^d-Q^i).
$$
Then the number of continuous surjections to the fixed target, counted without identifying conjugates, is
$$
\#\{\rho:G_k\twoheadrightarrow H:p\rho=\epsilon\}
=2^{d+1}Q^{2r}R_{d,r}
\bigl(R_{d,r}+(-1)^rQ^{r(r-1)/2}\bigr).
\tag{3}
$$
For $r>d$ the count is zero. In particular it is independent of the cyclic extension specified by $\epsilon$, including its ramification.

Moreover, write $\pi:G_k\twoheadrightarrow\Gamma$ for the tame quotient. For every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$, $a:H\twoheadrightarrow D$,
$$
\#\{\rho:G_k\twoheadrightarrow H:a\rho=q\pi\}
=\#\{\rho:G_k\twoheadrightarrow H:a\rho=q\alpha\pi\}.
\tag{4}
$$

**Proof.** All cohomology is continuous. Regard $U_\pm$ as $G_k$-modules through $\epsilon$, and identify $\mathbb F_2=\mu_2$.

*1. A perfect $F$-valued pairing.* Put $W_\pm=H^1(k,U_\pm)$. The invariants of both coefficient modules vanish. They are Tate dual through $T(uv)$, so their second cohomology groups also vanish. Local duality and the Euler characteristic therefore give
$$
\dim_F W_+=\dim_F W_-=d,\qquad
|H^1(k,\mathbb F_2)|=2^{d+2}
$$
[@milne2006adt, I, Corollary 2.3, p. 28, and Theorem 2.8, p. 31].

Multiplication $U_+\times U_-\to F$, with trivial action on the last module, induces an $F$-bilinear cup pairing
$$
P:W_+\times W_-\longrightarrow H^2(k,F)=F.
$$
Here $H^2(k,F)=H^2(k,\mathbb F_2)\otimes_{\mathbb F_2}F$, using the local invariant to identify the first factor with $\mathbb F_2$. The pairing $T(P(-,-))$ is precisely the perfect local-duality pairing. Consequently $P$ is perfect over $F$. Choose dual $F$-bases of $W_+,W_-$, in which $P(u,v)=\sum_{i=1}^du_iv_i$.

*2. Surjectivity gives two rank conditions.* Maps to $A=V\rtimes C_m$ above $\epsilon$ are cocycles with coefficients in $V=U_+^r\oplus U_-^r$. Their classes are tuples
$$
(u_1,\ldots,u_r,v_1,\ldots,v_r)\in W_+^r\oplus W_-^r.
$$
Let $L$ be the fixed field of $\ker\epsilon$. Since the positive-degree cohomology of $C_m$ on a module killed by two vanishes, restriction identifies
$$
W_\pm=\operatorname{Hom}_{C_m}(G_L,U_\pm).
\tag{5}
$$
This is inflation-restriction, with the two outer groups zero [@milnecft, II, Corollary 1.31, p. 70; Remark 1.35(a), p. 72; continuous-cohomology discussion, p. 88].

The image of $G_L$ in $V$ is stable under $s$. The minimal polynomials of $\lambda$ and $\lambda^{-1}$ are coprime; polynomial projections in $s$ therefore split that image into its two components. Each component is an $F$-subspace, since $\mathbb F_2[\lambda]=\mathbb F_2[\lambda^{-1}]=F$. The first component is proper exactly when some nonzero $F$-linear functional on $F^r$ annihilates it, equivalently, by (5), when $\sum_jc_ju_j=0$ for some nonzero coefficient tuple. The same argument applies to the second component.

Thus a map to $A$ is surjective exactly when the $u_j$ are $F$-linearly independent and the $v_j$ are $F$-linearly independent. In the dual bases of step 1, these are two matrices $X,Y\in M_{d\times r}(F)$ of rank $r$. Each class has $|V|=Q^{2r}$ cocycle representatives, since $V^{G_k}=0$.

*3. The central obstruction.* For cocycle coordinates $u_j(g),v_j(g)$, the section of $H\to A$ obtained by setting the central coordinate to zero has pulled-back factor set
$$
(g,h)\longmapsto
T\bigl(\textstyle\sum_j u_j(g)\,g v_j(h)\bigr).
$$
This follows directly from (2) and the semidirect product law. Its cohomology class is $T(\sum_jP(u_j,v_j))$. A lift exists exactly when that continuous factor set is a coboundary. Hence the unobstructed surjective classes are precisely the rank-$r$ matrix pairs with
$$
T\bigl(\textstyle\sum_{i,j}x_{ij}y_{ij}\bigr)=0.
\tag{6}
$$

Every unobstructed map to $A$ has $2^{d+2}$ lifts, because two lifts differ exactly by a character $G_k\to\langle z\rangle$. Each lift is surjective: its image on $G_L$ projects onto $V$, and two image elements with commutator pairing one supply $z$. That image is then all of $E$, and the cyclic quotient is already surjective.

*4. Counting the matrix pairs.* Write $\psi(c)=(-1)^{T(c)}$. There are $R_{d,r}$ full-rank matrices $X$. For any fixed such $X$, a change of basis on $F^d$, with the inverse transpose change on $Y$, preserves ranks and $\sum x_{ij}y_{ij}$ and reduces $X$ to the first $r$ columns of the identity. Thus the number of suitable $Y$ is independent of $X$.

Let
$$
S_{d,r}=\sum_{\operatorname{rank}Y=r}
\psi\bigl(\textstyle\sum_{j=1}^r y_{jj}\bigr).
$$
We claim $S_{d,r}=(-1)^rQ^{r(r-1)/2}$. Set $S_{d,0}=1$. For $r\ge1$, fix independent first columns $y_1,\ldots,y_{r-1}$ with span $M$, and let $\ell_r:F^d\to F$ be the $r$th coordinate functional. The sum over permitted last columns is
$$
\sum_{v\notin M}\psi(\ell_r(v))
=-\sum_{v\in M}\psi(\ell_r(v)).
$$
The complete sum over $F^d$ is zero. The displayed value is $-Q^{r-1}$ if $M\subseteq\ker\ell_r$, and zero otherwise, by character orthogonality on the $F$-space $M$. On that hyperplane the first $r-1$ coordinate functionals remain independent, so
$$
S_{d,r}=-Q^{r-1}S_{d-1,r-1}.
$$
Induction proves the claim. Consequently the number of full-rank $Y$ satisfying (6), for each fixed $X$, is
$$
\frac{R_{d,r}+(-1)^rQ^{r(r-1)/2}}2.
$$
Multiply by $R_{d,r}$, the $Q^{2r}$ cocycles per class, and the $2^{d+2}$ lifts per cocycle to obtain (3). If $r>d$, step 2 makes surjectivity impossible.

*5. Every tame marking.* A finite dyadic tame quotient $D$ has a cyclic normal odd-order inertia image and a cyclic quotient by it. Every Sylow $2$-subgroup of $D$ is therefore cyclic. Thus $a(E)$ is cyclic, and $a|_E$ kills $[E,E]=\langle z\rangle$. Since $V$ has exponent two, $a(E)$ is either trivial or $C_2$. The latter would give a nonzero $C_m$-invariant functional $V\to\mathbb F_2$, impossible because $\lambda-1$ and $\lambda^{-1}-1$ act invertibly. Hence $a(E)=1$ and $a=\bar a p$ for an epimorphism $\bar a:C_m\to D$.

Every epimorphism $G_k\to C_m$ factors through $\Gamma$: wild inertia is pro-$2$ and $m$ is odd. The left side of (4) is the sum of (3) over all epimorphisms $\epsilon_0:\Gamma\to C_m$ with $\bar a\epsilon_0=q$. Precomposition by $\alpha$ bijects these with those satisfying $\bar a\epsilon_0=q\alpha$. The summands are equal, proving (4), including proper cyclic markings and $D=1$. $\square$

**Checks and scope.** For $r=1$, the rank condition is $u,v\ne0$. Each nonzero $u\in F^d$ admits exactly $Q^d/2-1$ nonzero $v$ with $T(P(u,v))=0$, recovering (3) directly. At $r=d=2$, one can check $S_{2,2}=Q$ without the recurrence. Every rank-one matrix is $uv^{\mathsf T}$ for nonzero $u,v\in F^2$, in exactly $Q-1$ ways. Its trace is $v^{\mathsf T}u$, so the character sum over rank-one matrices is $-(Q^2-1)/(Q-1)=-(Q+1)$. The sum over all matrices is zero and the zero matrix contributes one; subtracting gives $Q$ for the full-rank matrices.

Take $t=3$, $m=7$, $r=1$ and a primitive $\lambda\in\mathbb F_8$. Its Frobenius exponents are $1,2,4$ modulo seven, whereas the inverse exponent is six, so (1) holds. The target has order $896$, and above every cyclic degree-seven quotient of $G_{\mathbb Q_2}$ the count is
$$
2^2\cdot8^2\cdot(8-1)(8-2)=10\,752.
$$
Over $U_3$, the tame markings $\tau\mapsto s,\ \sigma\mapsto s^b$ for $b\in\mathbb Z/7$ are cycled by the Frobenius shift; (3) gives equal counts for them. Targets exist for every $t\ge3$: take $\lambda$ primitive and $m=2^t-1$, since $2^j+1<2^t-1$ for $0\le j<t$.

The distinctness in (1) is essential to step 2: if the two modules coincide, stable images can mix their components, and separate independence tests no longer imply surjectivity. That case includes the cubic action and belongs to the separate [repeated cubic calculation](repeated-cubic-extraspecial-counts-over-dyadic-fields.md). This entry supplies neither a lift of a tame automorphism nor a classification of arbitrary reducible cyclic actions. The [finite-quotient criterion](finite-quotient-criterion-for-frobenius-shift-lifting.md) still requires all finite targets.
