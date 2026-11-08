---
title: Symmetric cubic tame markings cannot obstruct dyadic lifting
kind: theorem
summary: 'Every automorphism of a dyadic tame Galois group preserves each symmetric cubic marking up to conjugacy, so those marked surjection counts agree for every finite target. All tame markings of GL2(F3) are covered, excluding another target of order 48.'
tags: [local-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: "Uses its marked surjection counts; conjugate markings have equal counts by conjugating the target."}
  - {to: tame-automorphisms-lift-modulo-wild-commutators, label: uses, note: "Uses only the tame presentation and Step 1, which shows that every tame automorphism preserves inertia and acts identically on the unramified quotient."}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: "Excludes every symmetric cubic marking, and all tame markings of GL2(F3), from witnessing a failure to lift; no full lift is constructed."}
---

**Statement (proved here).** Let $k/\mathbb Q_2$ be finite, let $G=G_k$, and let $\pi:G\twoheadrightarrow\Gamma$ be the tame quotient. Fix $\alpha\in\operatorname{Aut}(\Gamma)$. For finite epimorphisms $q:\Gamma\twoheadrightarrow D$ and $r:H\twoheadrightarrow D$, use the [marked surjection counts](finite-quotient-criterion-for-frobenius-shift-lifting.md)
$$e_r(\eta)=\#\{f:G\twoheadrightarrow H\text{ continuous}:rf=\eta\}.$$
They count maps without identifying conjugates. If $D$ is a quotient of $S_3$, then
$$e_r(q\pi)=e_r(q\alpha\pi).\tag{1}$$
There is no restriction on $H$ in this assertion.

Moreover, (1) holds for every finite tame marking $D$ if $H$ has a normal subgroup $R\cong Q_8$, with $H/R\cong S_3$, and the inverse image of $A_3\subseteq S_3$ acts transitively by conjugation on the three cyclic subgroups of order four in $R$. This includes $H=\operatorname{GL}_2(\mathbb F_3)$, of order $48$.

**Proof.** Write $2^f$ for the residue-field cardinality, and let $I\subseteq\Gamma$ be tame inertia. The tame presentation and Step 1 of [lifting modulo wild commutators](tame-automorphisms-lift-modulo-wild-commutators.md) give generators $\tau$ of $I$ and a Frobenius lift $\sigma$, with
$$\sigma\tau\sigma^{-1}=\tau^{2^f},\qquad
\alpha(\tau)=\tau^u,\qquad \alpha(\sigma)=\sigma\tau^h,$$
where $u\in(\prod_{\ell\ne2}\mathbb Z_\ell)^\times$ and $h\in\prod_{\ell\ne2}\mathbb Z_\ell$. In particular $\alpha$ acts identically on $\Gamma/I$.

*1. Symmetric cubic markings.* Suppose $D=S_3$. The image $q(I)$ is cyclic, normal and of odd order. It cannot be trivial, since $\Gamma/I$ is procyclic, so $q(I)=A_3$. Put $a=q(\tau)$ and $b=q(\sigma)$. Then $a$ is a three-cycle and $b$ is a transposition. The relation forces $2^f\equiv-1\pmod3$, hence $f$ is odd.

The pair of images under $q\alpha$ is
$$a'=a^u\in\{a,a^{-1}\},\qquad b'=ba^h.$$
There is $d\in S_3$ that simultaneously conjugates $(a,b)$ to $(a',b')$. First use $1$ or $b$ to arrange the desired image of $a$; this leaves $b$ fixed. Then conjugate by a power of $a$. This fixes $a'$ and moves $b$ through all three transpositions, since $a^jba^{-j}=ba^{-2j}$. Thus $q\alpha=c_dq$, where $c_d$ denotes conjugation by $d$.

For $D=C_2$, the pro-odd group $I$ has trivial image, so $q\alpha=q$; for $D=1$ this is immediate. These exhaust the quotients of $S_3$, whose only normal subgroups are $1,A_3,S_3$.

In each case choose $d\in D$ with $q\alpha=c_dq$ and choose $z\in H$ with $r(z)=d$. The map
$$f\longmapsto c_z\circ f$$
is a bijection between the two sets counted in (1), with inverse $c_{z^{-1}}$. Conjugation preserves continuity and surjectivity. This proves the first assertion, including equality when either count is zero.

*2. Quaternion kernels force these markings.* Now assume the hypotheses on $R$. For any finite tame quotient $D$, its cyclic normal odd-order subgroup $q(I)$ has cyclic quotient $D/q(I)$. Every Sylow $2$-subgroup of $D$ injects into that quotient, so it is cyclic. Consequently $r(R)$ is cyclic. A map from $Q_8$ to a cyclic group kills $[R,R]=Z(R)$ and factors through
$$V=R/Z(R)\cong\mathbb F_2^2.$$
The kernel in $V$ is stable under conjugation by $H$. The stipulated cubic action cycles its three nonzero vectors, so it preserves no line. A nontrivial cyclic image of $V$ would have order two and a line as kernel, which is impossible. Hence $r(R)=1$ and $D$ is a quotient of $H/R\cong S_3$. Step 1 applies to every marking.

*3. The target $\operatorname{GL}_2(\mathbb F_3)$.* Its action on the four points of $\mathbb P^1(\mathbb F_3)$ has kernel the scalar matrices $Z=\{\pm1\}$: a matrix fixing the coordinate lines is diagonal, and fixing their sum makes it scalar. Since $|H|=(3^2-1)(3^2-3)=48$, this identifies $H/Z$ with $S_4$.

Over $\mathbb F_3$, the matrices
$$i=\begin{pmatrix}0&1\\-1&0\end{pmatrix},\qquad
j=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$$
satisfy $i^2=j^2=-1$ and $ij=-ji$. They generate $R=\{\pm1,\pm i,\pm j,\pm ij\}\cong Q_8$. Each of $i,j,ij$ squares to $-1$ and therefore fixes no projective point, since $-1$ is not a square in $\mathbb F_3$. Their projective images are the three double transpositions. Thus $R$ is the inverse image of the normal Klein four subgroup of $S_4$, and $H/R\cong S_3$. Conjugation by a three-cycle of $S_4$ cycles those double transpositions. Their inverse images in $R$ are exactly its three cyclic subgroups of order four, verifying the remaining hypothesis. Step 2 proves (1) for every tame marking of this target. $\square$

**Checks and scope.** A symmetric cubic tame quotient exists precisely when $f$ is odd: conversely, a three-cycle and a transposition satisfy the tame relation in that case and give a continuous epimorphism. When $f$ is even, the quaternion-target argument still applies; its possible tame markings are then only $1$ and $C_2$. The proof establishes invariance of the kernel of an $S_3$ marking under $\alpha$ rather than assuming it.

The order-$48$ example lies beyond the [bound excluding all smaller targets](dyadic-tame-lifting-has-no-count-obstruction-below-order-48.md). This entry does not exclude every target of order $48$, compute the counts themselves, or construct an automorphism of $G_k$. The full lifting problem remains open.
