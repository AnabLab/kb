---
title: Cubic actions on small 2-groups force central Frattini subgroups
kind: theorem
summary: 'A finite 2-group of order at most 32 admitting an automorphism of order three has central Frattini subgroup. A proof using generator ranks and a central moving factor avoids a table of groups. The order bound fails at 64.'
tags: [group-theory, local-fields, embedding-problems]
edges:
  - {to: dyadic-tame-lifting-has-no-count-obstruction-below-order-72, label: uses, note: 'Step 2 classifies nonabelian order-sixteen groups admitting an order-three automorphism; both have generator rank three and central Frattini subgroup.'}
  - {to: dyadic-tame-lifting-has-no-count-obstruction-below-order-48, label: uses, note: 'Step 2 gives the order-eight groups and their automorphism actions.'}
  - {to: elementary-moving-factor-for-central-frattini-2-groups, label: motivated-by, note: 'The rank-three case applies its averaging construction inside an order-sixteen subgroup, where centrality is first proved.'}
---

**Theorem (proved here).** Let $S$ be a finite $2$-group with $|S|\le32$. If $a\in\operatorname{Aut}(S)$ has order three, then $\Phi(S)\subseteq Z(S)$.

Here $\Phi(S)=S^2[S,S]$. Lifts of a basis of $S/\Phi(S)$ generate $S$: a proper subgroup lies in a maximal subgroup, which has index two and contains $\Phi(S)$. For a normal subgroup $N\subseteq\Phi(S)$, squares and commutators also give $\Phi(S/N)=\Phi(S)/N$, so the quotient has the same generator rank.

**Proof.** The [order-eight calculation](dyadic-tame-lifting-has-no-count-obstruction-below-order-48.md), Step 2, and the [order-sixteen calculation](dyadic-tame-lifting-has-no-count-obstruction-below-order-72.md), Step 2, handle smaller nonabelian groups. The latter shows, in particular, that a nonabelian group of order sixteen with such an automorphism has generator rank three. Abelian groups already have central Frattini subgroup. Thus assume $|S|=32$.

Put $F=\Phi(S)$ and $V=S/F$, and write $t=\dim_{\mathbb F_2}V$. The action of $a$ on $V$ is nontrivial. Otherwise every $F$-coset is stable under $a$ and has power-of-two cardinality, so its orbits of lengths one and three include a fixed point. Fixed lifts of a basis would generate $S$, forcing $a=1$.

If $t=1$, $S$ is cyclic, whose automorphism group has $2$-power order. If $t=4$ or $5$, $|F|\le2$, so $F$ is central. It remains to consider $t=2,3$.

*1. Rank two.* Here $|F|=8$, and $V$ is the irreducible two-dimensional $\mathbb F_2[C_3]$-module. Set
$$
L=F^2[S,F].
$$
This is characteristic and proper in $F$. Indeed, the nonzero vector space $\operatorname{Hom}(F,C_2)$ has a nonzero $S$-fixed vector: under a $2$-group action its number of fixed vectors is even, by counting orbits, and includes zero. Such a character kills $F^2[S,F]$. Thus $|L|=1,2$ or $4$.

If $|L|=1$, centrality follows directly. If $|L|=2$, $L$ is central. The quotient $S/L$ has order sixteen and generator rank two, and its automorphism induced by $a$ still has order three. By the smaller-order result it must be abelian. Hence $S'\subseteq L$ is central of exponent at most two. Commutator identities then give $[x^2,y]=[x,y]^2=1$, so $F=S^2S'$ is central.

Suppose $|L|=4$. We first show $L\subseteq Z(S)$. If $a$ acts nontrivially on $L$, then $L=C_2^2$. The conjugation image of $S$ in $\operatorname{Aut}(L)=S_3$ is a $2$-subgroup normalized by a three-cycle, and is therefore trivial. If $a$ fixes $L$ pointwise, its conjugation image is a $2$-subgroup of $\operatorname{Aut}(L)$ of order at most two, whether $L=C_4$ or $C_2^2$. A nontrivial image would give an $a$-invariant epimorphism $S\to C_2$, contrary to irreducibility of $V$. This proves centrality in both cases.

Now $S/L$ has order eight, generator rank two and an automorphism of order three, so it is $Q_8$. Indeed the dihedral automorphism group has order eight, while $C_4\times C_2$ has a nonzero invariant squaring map from its generator quotient to $C_2$, incompatible with the irreducible action. Choose generators $x,y$ of $S$ lifting quaternion generators. With $c=[x,y]$, their images satisfy
$$
x^2L=y^2L=cL.
$$
Since $L$ is central, $[x,x^2]=[y,y^2]=1$ gives $[x,c]=[y,c]=1$. Thus $S'=\langle c\rangle$ is central. Also $[x^2,y]=1$, since $x^2\in cL$, and the class-two identity gives $c^2=1$. Again all squares commute with $S$, proving $F\subseteq Z(S)$.

*2. Rank three.* Now $|F|=4$, and averaging gives $V=V_0\oplus V_1$, with $\dim V_0=1$ fixed and $V_1$ an irreducible plane. If $a$ acts nontrivially on $F$, then $F=C_2^2$ and the same normalized-$2$-subgroup argument in $S_3$ proves $F$ central. Assume instead that $a$ fixes $F$ pointwise.

The conjugation image of $S$ in $\operatorname{Aut}(F)$ has order at most two and is fixed by $a$. Its map factors through $V$ and kills $V_1$. Consequently the inverse image $E$ of $V_1$ in $S$ centralizes $F$. Here $|E|=16$, $E/F=V_1$, and $E^a=F$.

We spell out the moving-factor construction in $E$. Let $A=E'$. Two lifts of a basis of $E/F$, together with central $F$, generate $E$. Their commutator generates $A$ and has order at most two, because their squares lie in $F$. On the abelian group $M=E/A$, the averaging idempotent
$$
e=3^{-1}(1+a+a^2)
$$
has image $F/A$, and its kernel maps isomorphically to $V_1$. Here multiplication by three is invertible on the finite abelian $2$-group $M$. Let $R$ be the inverse image of $\ker e$ in $E$. Then
$$
E=FR,\qquad R\cap F=A,\qquad
R'=E'=A,\qquad R/A\cong V_1.
$$
In particular $\Phi(R)=A$, and $R$ is either $C_2^2$ or $Q_8$; if $|A|=2$, the order-eight calculation excludes $D_8$. This construction of $R$ is preserved by every automorphism of $E$ that preserves $F$ and commutes with $a$.

Choose an $a$-fixed lift $x$ of the nonzero vector in $V_0$. It exists by the fixed-point argument on its four-element $F$-coset. Conjugation by $x$ preserves $E,F,R$ and commutes with $a$. It acts trivially on $R/A$, since $S/F$ is abelian. For $R=C_2^2$ this already gives the identity. For $R=Q_8$, the kernel on $R/\Phi(R)$ consists of the four sign changes of quaternion generators. Its only element commuting with a cubic permutation of the three quaternion directions is the identity: the three signs must agree, while the sign on $ij$ is the product of those on $i,j$.

Thus $x$ centralizes $R$. Their images generate $V$, so $S=\langle x,R\rangle$. Its Frattini subgroup is generated by $x^2$ and $\Phi(R)$, both central. This finishes the proof. $\square$

**Boundary check (proved here).** At order sixty-four, let $S=D_{16}\times C_2^2$ and let $a$ fix the dihedral factor and cycle the three nonzero vectors of $C_2^2$. Then $a$ has order three, but $\Phi(S)=\langle r^2\rangle\cong C_4$ is not central: a reflection inverts $r^2$, where $r$ is the rotation of order eight. Thus the size restriction is necessary. The proof only concerns cubic automorphisms; it does not classify all odd-order actions on larger $2$-groups.
