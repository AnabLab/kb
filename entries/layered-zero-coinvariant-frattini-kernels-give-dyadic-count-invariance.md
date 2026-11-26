---
title: Layered zero-coinvariant Frattini kernels give dyadic count invariance
kind: theorem
summary: 'Let T of odd order act on a 2-group P. If a normal kernel R in Φ(P) has a normal series with elementary-abelian factors with zero coinvariants, each quotient surjection has |R|^(d+1) dyadic lifts and tame markings kill R. If T also fixes Φ(P)/R, all tame marked counts are invariant.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: noncentral-frattini-layers-in-dyadic-lift-counts, label: uses, note: 'Applied once to each factor of the series, starting from the top quotient.'}
  - {to: dyadic-count-invariance-for-actions-fixing-frattini-subgroups, label: uses, note: 'Gives invariance for the quotient by the layered kernel.'}
  - {to: abelian-moving-frattini-kernels-give-dyadic-count-invariance, label: generalizes, note: 'An abelian moving kernel is layered by its 2-power filtration.'}
  - {to: trivial-odd-fixed-subgroups-remove-frattini-kernels, label: generalizes, note: 'A kernel with trivial common fixed subgroup is layered by the central series built in Step 2 of its proof.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes every target whose moving Frattini kernel is layered from tame marked-count obstructions; constructs no lift.'}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$, with tame quotient $\pi:G_k\twoheadrightarrow\Gamma$. Let a finite group $T$ of odd order act on a finite $2$-group $P$, and put $H=P\rtimes T$. All maps are continuous, and counts distinguish actual maps, including conjugate ones. For finite epimorphisms $q:\Gamma\twoheadrightarrow D$ and $r:H\twoheadrightarrow D$ put
$$
E_k(H,r;q)=\#\{u:G_k\twoheadrightarrow H:\ ru=q\pi\}.
$$

Call a normal subgroup $R\trianglelefteq H$ with $R\subseteq\Phi(P)$ *layered* if it has a series
$$
1=R_0\subseteq R_1\subseteq\cdots\subseteq R_n=R
\tag{1}
$$
of normal subgroups of $H$ such that each factor $A_i=R_i/R_{i-1}$ is elementary abelian with zero coinvariants under conjugation:
$$
(A_i)_H=A_i\big/\operatorname{span}_{\mathbb F_2}\{hah^{-1}-a:\ h\in H,\ a\in A_i\}=0,
$$
in additive notation. The *moving kernel* $M$ is the normal closure in $H$ of all $f^{-1}t(f)$ with $f\in\Phi(P)$ and $t\in T$. It is normal, lies in $\Phi(P)$, and $T$ acts trivially on $\Phi(P)/M$. Every normal $R\subseteq\Phi(P)$ on whose quotient $\Phi(P)/R$ the group $T$ acts trivially contains $M$.

**Theorem (proved here).** Let $R$ be layered, with projection $\rho:H\twoheadrightarrow\bar H=H/R$.

1. Every epimorphism $G_k\twoheadrightarrow\bar H$ has exactly $|R|^{d+1}$ lifts to $H$, and all of them are epimorphisms.
2. Every epimorphism $r:H\twoheadrightarrow D$ onto a finite quotient of $\Gamma$ kills $R$. Writing $r=\bar r\rho$,
$$
E_k(H,r;q)=|R|^{d+1}E_k(\bar H,\bar r;q).
\tag{2}
$$
3. If $T$ acts trivially on $\Phi(P)/R$, then for every $\alpha\in\operatorname{Aut}(\Gamma)$ and all finite epimorphisms $q,r$ as above,
$$
E_k(H,r;q)=E_k(H,r;q\alpha).
\tag{3}
$$

In particular (3) holds whenever the moving kernel $M$ is layered.

**Proof.** First, $\Phi(P)\subseteq\Phi(H)$, by the comparison paragraph of the [noncentral layer theorem](noncentral-frattini-layers-in-dyadic-lift-counts.md). Hence each $R_i\subseteq\Phi(H)$. The image of the Frattini subgroup of a finite group lies in the Frattini subgroup of every quotient, because maximal subgroups pull back to maximal subgroups. So $A_i\subseteq\Phi(H/R_{i-1})$. Conjugation on $A_i$ factors through $H/R_{i-1}$, so $A_i$ also has zero coinvariants as a module for that group. Thus the noncentral layer theorem applies to each projection $H/R_{i-1}\twoheadrightarrow H/R_i$, whose kernel is $A_i$.

*1.* Start with an epimorphism onto $H/R_n=\bar H$ and lift successively to $H/R_{n-1},\dots,H/R_0=H$. At the step with kernel $A_i$, the noncentral layer theorem says that every epimorphism has exactly $|A_i|^{d+1}$ lifts, all epimorphisms. Lifts of distinct maps are distinct, so the number of lifts to $H$ is
$$
\prod_{i=1}^n|A_i|^{d+1}=|R|^{d+1}.
$$

*2.* By the noncentral layer theorem for $A_1=R_1\subseteq H$, the marking $r$ kills $R_1$. Applying the same theorem to the induced marking of $H/R_1$ and its kernel $A_2$ shows that $r$ kills $R_2$, and so on up to $R_n=R$. Every surjection $u$ counted on the left of (2) is a lift of the surjection $\rho u$, which is counted on the right with the same marking. By part 1, each map on the right has exactly $|R|^{d+1}$ lifts, and all of them are counted on the left. This proves (2), including the case where both counts vanish.

*3.* The formula $\Phi(P)=P^2[P,P]$ gives $\Phi(P/R)=\Phi(P)/R$, on which $T$ acts trivially by hypothesis. The [pointwise-fixed theorem](dyadic-count-invariance-for-actions-fixing-frattini-subgroups.md) therefore gives (3) for $\bar H=(P/R)\rtimes T$ and every marking $\bar r$. By part 2, both sides of (3) for $H$ are the corresponding counts for $\bar H$ multiplied by the same factor $|R|^{d+1}$. The final assertion is the case $R=M$. $\square$

**The top of the moving kernel (proved here).** Let $[M,H]$ be the subgroup generated by all $mhm^{-1}h^{-1}$ with $m\in M$ and $h\in H$. It is normal in $H$, since conjugation permutes these generators, and
$$
[M,H]=M.
\tag{4}
$$
Indeed, $M/[M,H]$ is abelian, since $[M,M]\subseteq[M,H]$, and $H$ acts trivially on it by conjugation. For fixed $f\in\Phi(P)$, put $c_f(t)=f^{-1}t(f)$. Then $c_f(ts)=c_f(t)\,t(c_f(s))$, so $t\mapsto c_f(t)[M,H]$ is a homomorphism from the odd-order group $T$ to a $2$-group. It is trivial. Thus every generator of $M$ lies in the normal subgroup $[M,H]$, which proves (4). This is the argument of Step 2 of the [abelian moving-kernel theorem](abelian-moving-frattini-kernels-give-dyadic-count-invariance.md), without assuming that $M$ is abelian. Consequently the elementary-abelian factor $M/[M,P]M^2$ has zero coinvariants, since $P$ acts trivially on it and its coinvariants are a quotient of $M/[M,H]=1$. So $M$ is layered as soon as the normal subgroup $[M,P]M^2$ is layered: append this factor to its series. Any obstruction to layering lies in $[M,P]M^2$.

**Earlier cases.**

- *Abelian moving kernels.* If $M$ is abelian, write it additively and choose $m$ with $2^mM=0$. Each $2^jM/2^{j+1}M$ is elementary abelian and is the image of $M/2M$ under the equivariant surjection induced by multiplication by $2^j$. By (4), $M/2M$ has zero coinvariants, so all these factors do. The series $R_i=2^{m-i}M$ shows that $M$ is layered. This is the series used in Step 1 of the [abelian moving-kernel theorem](abelian-moving-frattini-kernels-give-dyadic-count-invariance.md), whose conclusion is therefore the case $R=M$ of part 3.
- *Trivial common fixed subgroups.* If $R\trianglelefteq H$, $R\subseteq\Phi(P)$ and $C_R(T)=1$, Step 2 of the proof of the [trivial fixed subgroup theorem](trivial-odd-fixed-subgroups-remove-frattini-kernels.md) removes the elements of order at most two in $R\cap Z(P)$, and then repeats this in the quotient. The preimages in $R$ of the removed subgroups form a series (1). Each factor is elementary abelian and central in the corresponding quotient of $P$, with no nonzero $T$-fixed vector, hence with zero coinvariants. So $R$ is layered, and that theorem's three parts are the corresponding parts of this one.
- *Unitriangular and simply-laced targets.* The proofs of the [unitriangular](unitriangular-dyadic-marked-counts.md) and [simply-laced](simply-laced-unipotent-dyadic-marked-counts.md) count theorems show that the doubled-height layers $P_h/P_{2h}$, for $h=2,4,8,\dots$, are elementary-abelian Frattini kernels with zero coinvariants. So the subgroup $P_2$ of root height at least two is layered in those examples. Those entries go further and compute the counts explicitly.

**Limits.** Layering is sufficient for count invariance but not necessary. The target $(Q_8\wr C_2)\rtimes C_3$ of order $384$ has moving kernel $M=\Phi(P)\cong Q_8\times C_2$, so $R=M$ is the only candidate, and it is not layered. This is the smallest possible example: see [the smallest moving kernel without zero-coinvariant layers](smallest-moving-frattini-kernel-without-zero-coinvariant-layers.md). Its marked counts are nonetheless invariant, by a direct calculation over the quadratic extension cut out by the swap: see [its dyadic counts](dyadic-counts-for-the-quaternion-wreath-target.md). Whether every finite target $P\rtimes T$ with $T$ of odd order has invariant tame marked counts is not settled here. The theorem constructs no compatible system of lifts and no automorphism of $G_k$, so the [Frobenius-shift lifting problem](frobenius-shift-lifting-problem.md) remains open.
