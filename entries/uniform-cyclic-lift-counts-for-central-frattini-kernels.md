---
title: Uniform cyclic lift counts for central Frattini kernels over dyadic fields
kind: theorem
summary: 'For odd cyclic actions fixing a central elementary-abelian Frattini subgroup, with no fixed quotient vectors, dyadic lift counts depend only on the field degree and target. An augmentation-module formula handles repeated constituents and simultaneous central obstructions.'
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: local-tate-duality, label: uses, note: 'Duality and the Euler characteristic determine the nontrivial cyclic part of the cup-pairing module.'}
  - {to: irreducible-cyclic-extraspecial-counts-over-dyadic-fields, label: generalizes, note: 'Its extraspecial kernel and irreducible action satisfy the hypotheses below; the present formula does not evaluate the finite count in closed form.'}
  - {to: mixed-cyclic-extraspecial-counts-over-dyadic-fields, label: generalizes, note: 'Allows arbitrary multiplicities and dual pairs in place of distinct self-dual constituents.'}
  - {to: reciprocal-cyclic-extraspecial-counts-over-dyadic-fields, label: generalizes, note: 'Its explicit kernel has central Frattini subgroup of order two and no fixed vectors on the quotient.'}
  - {to: repeated-cubic-extraspecial-counts-over-dyadic-fields, label: generalizes, note: 'Its diagonal cubic central products are included; its quaternion normal form is also used in the example.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked surjection counts.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes all targets in this family from every marked-count obstruction; no tame automorphism is lifted.'}
---

**Setting.** Let $C=C_m$ be a fixed cyclic group of odd order $m>1$ acting on a finite $2$-group $E$. Suppose its Frattini subgroup $Z=\Phi(E)$ is central and elementary abelian, and $C$ fixes $Z$ pointwise. Put
$$
V=E/Z,\qquad v=\dim_{\mathbb F_2}V,\qquad
a=\dim_{\mathbb F_2}Z,
$$
and assume $V^C=0$. Here $V$ is elementary abelian, and $\Phi(E)$ is the intersection of the maximal subgroups of $E$. Write $Z$ additively. The commutator induces an alternating bilinear map
$$
B:V\times V\longrightarrow Z.
$$
Set $H=E\rtimes C$ and let $p:H\twoheadrightarrow C$ be the projection. No irreducibility, faithfulness or nondegeneracy of $B$ is assumed.

**A finite model.** In the permutation module $\mathbb F_2^C$, let
$$
I=\{(x_g)_{g\in C}:\textstyle\sum_gx_g=0\},\qquad
J_d=I^{\oplus d},\qquad
b_d(x,y)=\sum_{\ell=1}^d\sum_{g\in C}x_{\ell,g}y_{\ell,g}.
$$
The group $C$ acts by left translation. The form $b_d$ is alternating and nondegenerate: in each permutation summand the all-ones vector has self-pairing one, and its orthogonal complement is $I$.

Choose a basis $e_1,\ldots,e_v$ of $V$ and its dual basis $\xi_1,\ldots,\xi_v$. Give $V^*=\operatorname{Hom}(V,\mathbb F_2)$ its contragredient action. For a $C$-linear map $f:V^*\to J_d$, define
$$
\Omega(f)=\sum_{i<j} B(e_i,e_j)\,
b_d\bigl(f(\xi_i),f(\xi_j)\bigr)\in Z,
\qquad
N_d=\#\{f:V^*\hookrightarrow J_d\text{ $C$-linear}:\Omega(f)=0\}.
\tag{1}
$$
The expression contracts the alternating form $B$ with the alternating form on $V^*$ pulled back by $f$, so it is independent of the basis. It is a finite calculation using only $d$ and the target action and commutators.

**Theorem (proved here).** Let $k/\mathbb Q_2$ have degree $d$, and fix any continuous epimorphism $\epsilon:G_k\twoheadrightarrow C$. Then
$$
\#\{\rho:G_k\twoheadrightarrow H:p\rho=\epsilon\}
=2^{v+a(d+2)}N_d.
\tag{2}
$$
Maps are counted individually, without identifying conjugates. Thus the count is independent of the cyclic extension specified by $\epsilon$, including its ramification. If any nontrivial simple constituent of $V^*$ has multiplicity greater than $d$, the count is zero.

Moreover, let $\pi:G_k\twoheadrightarrow\Gamma$ be the tame quotient. For every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$ and $r:H\twoheadrightarrow D$,
$$
\#\{\rho:G_k\twoheadrightarrow H:r\rho=q\pi\}
=\#\{\rho:G_k\twoheadrightarrow H:r\rho=q\alpha\pi\}.
\tag{3}
$$

**Proof.** All cohomology and maps are continuous. Identify $\mathbb F_2=\mu_2$ and use the local invariant to identify $H^2(F,\mathbb F_2)$ with $\mathbb F_2$ for each finite $F/\mathbb Q_2$.

*1. The nontrivial cyclic cup module.* Let $L$ be cut out by $\epsilon$ and put $U=H^1(L,\mathbb F_2)$. The cup pairing $b$ on $U$ is symmetric, perfect, and $C$-invariant. Perfectness and the dimensions below follow from local duality and the Euler characteristic [@milne2006adt, I, Corollary 2.3, p. 28, and Theorem 2.8, p. 31]. Let
$$
e=\sum_{g\in C}g\in\mathbb F_2[C],\qquad W=(1-e)U.
$$
As $m$ is odd, $e^2=e$ and $eU=U^C$. The averaging operator is self-adjoint for $b$, so $U=U^C\mathbin{\perp}W$ and $b|_W$ is nondegenerate. The function $x\mapsto b(x,x)$ is a $C$-invariant linear functional. It vanishes on $W$, which has no trivial constituents. Hence $b|_W$ is alternating.

For every nontrivial simple $\mathbb F_2[C]$-module $S$ of dimension $t$, both $S$ and its dual have no invariants. Duality gives $H^2(k,S)=0$, and the Euler characteristic gives $\dim H^1(k,S)=td$. Positive-degree cohomology of $C$ on a module killed by two vanishes: it is killed by both $m$ and two. Inflation-restriction therefore gives
$$
H^1(k,S)\cong\operatorname{Hom}_C(G_L,S)
\cong\operatorname{Hom}_C(S^*,U).
\tag{4}
$$
These restriction facts follow from [@milnecft, II, Corollary 1.31, p. 70; Remark 1.35(a), p. 72; continuous-cohomology discussion, p. 88]. Since $\mathbb F_2[C]=\mathbb F_2[X]/(X^m-1)$ is a product of fields, $\operatorname{End}_C(S)=\mathbb F_{2^t}$. Equation (4) shows that each nontrivial simple occurs in $W$ with multiplicity $d$. The same is true of $J_d$, since the regular module contains each simple once.

*2. Uniqueness of the invariant alternating form.* We prove that a semisimple $C$-module with no trivial constituents has at most one nondegenerate invariant alternating form up to $C$-linear isometry. Distinct isotypic blocks are orthogonal unless their simples are dual: a pairing induces a $C$-map from either block to the dual of the other.

For a pair $S,S^*$ of nonisomorphic simples, the form is zero on each block and pairs them perfectly. An arbitrary $C$-linear isomorphism on the $S$-block determines an isomorphism on the dual block preserving the pairing. Thus there is only one form on such a paired block of specified multiplicity.

For a nontrivial self-dual simple, write $S=F=\mathbb F_{2^t}$ with a generator of $C$ acting by $\lambda$, where $\mathbb F_2(\lambda)=F$. Self-duality means $\lambda^{-1}$ is a Frobenius conjugate of $\lambda$. It differs from $\lambda$ because $\lambda$ has odd order greater than one. The automorphism sending $\lambda$ to $\lambda^{-1}$ has order two; therefore $t=2h$ and it is $c\mapsto\bar c=c^{2^h}$.

On a block $F^n$, invariance gives $b(cx,y)=b(x,\bar c y)$. The nondegenerate field trace pairing defines a unique $F$-valued form $h_0$ by
$$
b(cx,y)=\operatorname{Tr}_{F/\mathbb F_2}\bigl(c\,h_0(x,y)\bigr)
\quad(c\in F).
$$
This identity shows that $h_0$ is linear in its first variable, conjugate-linear in its second, and $h_0(y,x)=\overline{h_0(x,y)}$. It is a nondegenerate hermitian form. Such a form has an orthonormal basis, as follows. If all $h_0(x,x)$ were zero, expansion at $x+y$ would put every $h_0(x,y)$ in the fixed field $F_0=\mathbb F_{2^h}$. Scaling $x$ by $c\notin F_0$ would then force every $h_0(x,y)=0$, a contradiction. Choose a vector of nonzero norm. Rescale it to norm one using the surjective finite-field norm $F^\times\to F_0^\times$, and repeat in its nondegenerate orthogonal complement. Norm surjectivity follows from cyclicity of $F^\times$, since $c\bar c=c^{2^h+1}$. Thus this block also has just one form. This proves uniqueness, including arbitrary multiplicities and all dual pairs.

Applying this to step 1 gives a $C$-linear isometry
$$
(W,b)\cong(J_d,b_d).
\tag{5}
$$

*3. Surjectivity and the central obstruction.* Maps to $A=V\rtimes C$ above $\epsilon$ are cocycles with coefficients in $V$. As in (4), their classes correspond to equivariant homomorphisms $\phi:G_L\to V$, or equivalently to $C$-linear maps
$$
f:V^*\longrightarrow U,\qquad f(\xi)=\xi\circ\phi.
$$
Their images lie in $W$ because $V^*$ has no trivial constituents. The image of $G_L$ in $V$ is all of $V$ exactly when $f$ is injective. This is also equivalent to surjectivity of the map to $A$: an element mapping into $V$ comes from $G_L$. Each class has $|V|=2^v$ cocycle representatives, since $V^{G_k}=0$.

The extension $1\to Z\to H\to A\to1$ is central. Choose lifts $t_i\in E$ of the basis $e_i$, and write $a_i=t_i^2\in Z$ and $b_{ij}=B(e_i,e_j)$. The ordered section $\sum x_ie_i\mapsto\prod_i t_i^{x_i}$ has factor set
$$
F(x,y)=\sum_i a_i x_i y_i+\sum_{i<j}b_{ij}x_jy_i.
\tag{6}
$$
Indeed, squares contribute the diagonal terms and interchanging ordered factors contributes the commutators. Centrality and exponent two of $Z$ give exactly this formula.

Let $u_i=f(\xi_i)\in W$. Restricting the lifting obstruction to $G_L$ and using (6) gives
$$
\sum_i a_i\,(u_i\cup u_i)+\sum_{i<j}b_{ij}\,(u_j\cup u_i)
\in H^2(L,Z)=Z.
\tag{7}
$$
The diagonal terms vanish because $b|_W$ is alternating. Cup symmetry and the isometry (5) identify the remaining expression with $\Omega(f)$ in (1). Thus square data have not been discarded by assumption: their contributions vanish on this particular cohomology summand.

Restriction $H^2(k,Z)\to H^2(L,Z)$ is injective, because corestriction after restriction multiplies by odd $m$ [@milnecft, II, Proposition 1.30, p. 70; continuous-cohomology discussion, p. 88]. Consequently a map to $A$ lifts precisely when $\Omega(f)=0$. This is the usual factor-set criterion: a central correction to a chosen lift is a $1$-cochain whose coboundary is its pulled-back factor set. Conjugations by $V$ lift to conjugations by $E$, so all cocycle representatives of a class have the same obstruction.

Each unobstructed representative has $|H^1(k,Z)|=2^{a(d+2)}$ lifts: their ratios are exactly the characters $G_k\to Z$, and $Z$ is a trivial module. Here the Euler characteristic gives $|H^1(k,\mathbb F_2)|=2^{d+2}$ from $|H^0|=|H^2|=2$. Every lift of a surjection to $A$ is surjective to $H$. Its image $S\subseteq E$ on $G_L$ satisfies $S\Phi(E)=E$. If $S$ were proper, it would lie in a maximal subgroup containing $\Phi(E)$, a contradiction. Multiplying the class count, representatives and central lifts proves (2). The multiplicity bound follows from (5).

*4. All tame markings.* A finite dyadic tame quotient $D$ has cyclic normal odd-order inertia image and a cyclic quotient by that image. Each Sylow $2$-subgroup of $D$ injects into the latter quotient and is cyclic. Thus $r(E)$ is cyclic. If nontrivial, its quotient by squares has order two. The composite $E\to r(E)/r(E)^2$ is a nonzero $C$-invariant character and factors through $V=E/\Phi(E)$. Semisimplicity and $V^C=0$ exclude such a character. Hence $r(E)=1$ and $r=\bar r p$ for an epimorphism $\bar r:C\to D$.

Every map $G_k\to C$ kills wild inertia and factors through $\Gamma$. The left side of (3) is the sum of the common value (2) over all epimorphisms $\epsilon_0:\Gamma\to C$ with $\bar r\epsilon_0=q$. Precomposition by $\alpha$ bijects these with the epimorphisms satisfying $\bar r\epsilon_0=q\alpha$. This proves (3), including proper cyclic markings and $D=1$. $\square$

**A simultaneous-obstruction example (proved here).** Let $E=Q_8\times Q_8$, with the same cubic action on each quaternion factor, so $Z=C_2^2$ and $V=\mathbb F_4^2$. Then $|H|=192$. For $d=2$, the [quaternion normal form](repeated-cubic-extraspecial-counts-over-dyadic-fields.md) identifies each component cohomology space with $\mathbb F_4^2$ and its obstruction with $q(x,y)=x^3+y^3$. Its nine nonzero zeros have both coordinates nonzero. Surjectivity requires two independent columns, and the two central coordinates require each column's obstruction to vanish separately. There are $9(9-3)=54$ ordered pairs: after the first column, its three nonzero scalar multiples are the dependent choices among the nine zeros. Thus every cubic marking gives
$$
2^{4+2(2+2)}\cdot54=221\,184
$$
surjections. Identifying the two central involutions instead gives the order-96 central product. There only the sum of the obstructions must vanish, and the existing repeated cubic calculation gives $18\,432$ maps. Both counts respect the repeated-constituent rank condition. At $d=1$ neither target admits a marked surjection, since multiplicity two cannot inject into multiplicity one.

**Scope.** Extraspecial groups have central Frattini subgroup of order two, fixed by every automorphism, so every odd cyclic action on an extraspecial kernel with $V^C=0$ is included. The theorem also handles a larger center of lifting obstructions, as the example shows. Formula (1) is an explicit finite linear-algebra count, rather than a closed formula for every target. It imposes all $a$ central obstruction equations simultaneously and retains injectivity even for repeated constituents.

The hypotheses exclude fixed vectors on $V$, a nontrivial action on $Z$, and noncentral or nonelementary Frattini subgroups. No degree-only count is asserted for arbitrary proper tame markings: (3) gives invariance for a fixed field. This family of tests supplies no compatible finite lifts or automorphism of $G_k$, and leaves the full Frobenius-shift and dyadic classification problems open.
