---
title: Uniform dyadic lift counts with arbitrary odd-order complements
kind: theorem
summary: 'With a fixed central elementary-abelian Frattini subgroup and no fixed quotient vectors, every odd-order complement gives degree-only dyadic surjection counts above its full marking. An augmentation-module formula excludes every tame marked-count obstruction for these targets.'
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: odd-order-equivariant-cup-module-over-dyadic-fields, label: uses, note: 'Supplies the equivariant isometry for arbitrary odd-order Galois extensions.'}
  - {to: uniform-cyclic-lift-counts-for-central-frattini-kernels, label: generalizes, note: 'Removes cyclicity of the complement; the central and fixed-vector hypotheses are retained.'}
  - {to: local-tate-duality, label: uses, note: 'Determines the number of central lifts and the perfect pairing in the nonabelian-complement example.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked counts of actual surjections.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes all tame markings of the targets below from count obstructions; constructs no full lift.'}
---

**Setting.** Let a finite odd-order group $T$ act on a finite $2$-group $E$. Suppose $Z=\Phi(E)$ is central and elementary abelian, and $T$ fixes $Z$ pointwise. Put
$$
V=E/Z,\qquad v=\dim_{\mathbb F_2}V,\qquad
a=\dim_{\mathbb F_2}Z,\qquad H=E\rtimes T,
$$
and assume $V^T=0$. Write $p:H\twoheadrightarrow T$ and write $Z$ additively. Commutators define an alternating bilinear map $B:V\times V\to Z$.

Let $(J_d,b_d)=(I_T^{\oplus d},b_d)$ be the paired augmentation module in the [odd-order cup-module theorem](odd-order-equivariant-cup-module-over-dyadic-fields.md). For a basis $e_i$ of $V$ and its dual basis $\xi_i$, define
$$
\Omega(f)=\sum_{i<j}B(e_i,e_j)b_d(f(\xi_i),f(\xi_j)),
\qquad
N_d=\#\{f:V^*\hookrightarrow J_d\text{ $T$-linear}:\Omega(f)=0\}.
\tag{1}
$$
Here $V^*$ has its contragredient action. The contraction is independent of the chosen basis: the alternating form on $V^*$ gives an element of $\bigwedge^2V$, to which $B$ is applied.

**Theorem (proved here).** Let $k/\mathbb Q_2$ have degree $d$. For every continuous epimorphism $\epsilon:G_k\twoheadrightarrow T$,
$$
\#\{\rho:G_k\twoheadrightarrow H:p\rho=\epsilon\}
=2^{v+a(d+2)}N_d.
\tag{2}
$$
Thus the count depends on the field only through $d$, independently of the extension specified by $\epsilon$. For a nontrivial simple $S$, put $r_S=\dim_{\operatorname{End}_T(S)}S$. If its multiplicity in $V^*$ exceeds $dr_S$, the count is zero.

Moreover, let $\pi:G_k\twoheadrightarrow\Gamma$ be the tame quotient. For finite epimorphisms $q:\Gamma\twoheadrightarrow D$ and $r:H\twoheadrightarrow D$, every $\alpha\in\operatorname{Aut}(\Gamma)$ satisfies
$$
\#\{\rho:G_k\twoheadrightarrow H:r\rho=q\pi\}
=\#\{\rho:G_k\twoheadrightarrow H:r\rho=q\alpha\pi\}.
\tag{3}
$$
Maps are counted individually, including conjugate maps.

**Proof.** Let $L$ be cut out by $\epsilon$. Inflation-restriction identifies classes of cocycles $G_k\to V$ with $T$-equivariant homomorphisms $\phi:G_L\to V$, since positive-degree cohomology of $T$ with these coefficients vanishes [@milnecft, II, Corollary 1.31, p. 70; Remark 1.35(a), p. 72; continuous-cohomology discussion, p. 88]. Dually these are maps
$$
f:V^*\longrightarrow W\subset H^1(L,\mathbb F_2),
$$
where $W$ is the nontrivial summand. A cocycle gives a surjection to $V\rtimes T$ precisely when $\phi$ is onto, or equivalently when $f$ is injective. Each class has $|V|=2^v$ actual cocycle representatives, since $V^{G_k}=V^T=0$.

The extension $1\to Z\to H\to V\rtimes T\to1$ is central. To compute its obstruction, choose lifts $t_i\in E$ of $e_i$. With $c_i=t_i^2\in Z$, the ordered section $\sum x_ie_i\mapsto\prod_i t_i^{x_i}$ has factor set
$$
F(x,y)=\sum_i c_ix_iy_i+\sum_{i<j}B(e_i,e_j)x_jy_i.
\tag{4}
$$
Squares give the diagonal terms and interchanging factors gives the commutator terms. On $G_L$, the obstruction of $f$ is consequently
$$
\sum_i c_i\,(u_i\cup u_i)+
\sum_{i<j}B(e_i,e_j)(u_j\cup u_i),\qquad u_i=f(\xi_i).
$$
The cup form on $W$ is alternating, so the square terms vanish. Its equivariant isometry with $(J_d,b_d)$ identifies the remaining expression with $\Omega(f)$. Restriction $H^2(k,Z)\to H^2(L,Z)$ is injective: corestriction after restriction multiplies by odd $|T|$ [@milnecft, II, Proposition 1.30, p. 70; continuous-cohomology discussion, p. 88]. Thus a quotient map lifts exactly when $\Omega(f)=0$. Conjugation by an element of $V$ lifts to conjugation by an element of $E$, so this criterion is the same for every representative of the cocycle class.

For each unobstructed representative, the lifts form a torsor under $H^1(k,Z)$, of size $2^{a(d+2)}$ by local duality and the Euler characteristic [@milne2006adt, I, Corollary 2.3, p. 28; Theorem 2.8, p. 31]. Every lift is onto: its image $S$ on $G_L$ satisfies $S\Phi(E)=E$, which forces $S=E$, since any proper subgroup lies in a maximal subgroup containing $\Phi(E)$. This proves (2). The multiplicity bound follows from the cup-module theorem.

For (3), a finite dyadic tame group has cyclic normal odd-order inertia image and cyclic quotient by it. Its Sylow $2$-subgroups are therefore cyclic, so $r(E)$ is cyclic. If $r(E)\ne1$, reduction modulo squares gives a nonzero $T$-invariant character $V\to C_2$: conjugation by $T$ on $r(E)$ is trivial, because the automorphism group of a cyclic $2$-group is a $2$-group. This contradicts $V^T=0$ and semisimplicity. Hence $r(E)=1$ and $r=\bar r p$.

Every map to the odd-order group $T$ kills wild inertia. The left side of (3) is therefore
$$
2^{v+a(d+2)}N_d\,
\#\{c:\Gamma\twoheadrightarrow T:\bar r c=q\}.
\tag{5}
$$
Precomposition $c\mapsto c\alpha$ bijects this finite set with the set for $q\alpha$, proving (3). Formula (5) also covers complements admitting no tame realization, when both sets are empty. $\square$

**A faithful nonabelian complement (proved here).** Let $F=\mathbb F_8$, choose $\lambda\in F^\times$ of order seven, and put
$$
E=F\times F\times\mathbb F_2,\qquad
(x,y,z)(x',y',z')=(x+x',y+y',z+z'+\operatorname{Tr}_{F/\mathbb F_2}(yx')).
$$
The bilinear factor makes this associative. Its commutator form on $F\oplus F$ is $\operatorname{Tr}(yx'+y'x)$, which is nondegenerate. Thus its centre, commutator subgroup and Frattini subgroup are all the last factor $C_2$; squares also lie there. In particular $E$ is extraspecial of order $128$.

The automorphisms
$$
a(x,y,z)=(\lambda x,\lambda^{-1}y,z),\qquad
s(x,y,z)=(x^2,y^2,z)
$$
preserve the factor set and satisfy $a^7=s^3=1$ and $sas^{-1}=a^2$. They generate a faithful action of $T=C_7\rtimes C_3$. The two summands $S=F$ and $S^*=F$ of $V$ are simple and nonisomorphic: on $C_7$ their eigenvalue orbits are $\{\lambda,\lambda^2,\lambda^4\}$ and their disjoint inverses. An endomorphism commuting with $a$ is multiplication by an element of $F$, and commuting with $s$ restricts it to $\mathbb F_2$. Hence $r_S=r_{S^*}=3$, and $V^T=0$.

For every full marking $\epsilon:G_k\twoheadrightarrow T$, each of $H^1(k,S)$ and $H^1(k,S^*)$ has dimension $3d$. Their cup product, evaluated by $\operatorname{Tr}(yx)$, is a perfect pairing by local Tate duality. The displayed factor set gives exactly this obstruction. Surjectivity requires both classes to be nonzero, since the two simple constituents are distinct. For a nonzero first class, its orthogonal hyperplane has $2^{3d-1}-1$ nonzero elements. Thus, for $|H|=128\cdot21=2688$,
$$
\#\{\rho:G_k\twoheadrightarrow H:p\rho=\epsilon\}
=2^{d+8}(2^{3d}-1)(2^{3d-1}-1).
\tag{6}
$$
This is $10\,752$ at $d=1$. Such a marking exists over $\mathbb Q_2$: the splitting field of $X^7-2$ is obtained by adjoining a seventh root of two to the unramified cubic extension, which contains $\mu_7$. It has degree $21$, and Frobenius conjugates tame inertia by squaring. This action on $V$ is faithful and does not factor through a cyclic group, so the cyclic theorem alone does not cover it.

**Scope.** No faithfulness or irreducibility of the general $T$-action is assumed, and $Z$ can have any rank. The theorem retains the hypotheses that $Z$ is central elementary abelian, that $T$ fixes it, and that $V^T=0$. Counts for a smaller marking need not depend only on $d$: the additional tame count in (5) remains. No assertion about targets outside this family, compatible finite lifts, or the full dyadic classification follows.
