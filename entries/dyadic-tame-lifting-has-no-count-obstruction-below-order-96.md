---
title: Dyadic tame lifting has no count obstruction below order 96
kind: theorem
summary: 'Every automorphism of a dyadic tame Galois group preserves marked surjection counts to all targets of order less than 96. Quaternion-by-odd factorization handles order 72; elementary group arguments handle orders 80 and 88. The full lifting problem remains open.'
tags: [local-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: dyadic-tame-lifting-has-no-count-obstruction-below-order-72, label: uses, note: 'Supplies the smaller-order bound, the wild-abelian reduction, and the reduction for targets with a normal odd-order subgroup and a 2-group quotient.'}
  - {to: dyadic-tame-lifting-has-no-count-obstruction-below-order-48, label: uses, note: 'Supplies the classification and automorphism calculations for nonabelian groups of order eight, and the direct-product reduction.'}
  - {to: quaternion-by-odd-targets-give-no-dyadic-count-obstruction, label: uses, note: 'Handles every tame marking of all quaternion-by-order-nine targets.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Every unequal marked-count witness for the dyadic shift must have target order at least 96; no full lift is constructed.'}
---

**Statement (proved here).** Let $k/\mathbb Q_2$ be finite, $G=G_k$, and $\pi:G\twoheadrightarrow\Gamma$ its tame quotient. For every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$, $r:H\twoheadrightarrow D$, the [marked surjection counts](finite-quotient-criterion-for-frobenius-shift-lifting.md) satisfy
$$
e_r(q\pi)=e_r(q\alpha\pi)\quad\text{if }|H|<96,
\qquad e_r(\eta)=\#\{f:G\twoheadrightarrow H:rf=\eta\}.
\tag{1}
$$
Maps are continuous and are not identified under conjugacy.

**Proof.** We use the [bound below order $72$](dyadic-tame-lifting-has-no-count-obstruction-below-order-72.md), including its two reductions: targets for which every epimorphism has abelian wild image cannot obstruct; neither can targets having a normal odd-order subgroup with $2$-group quotient.

If neither reduction applies, choose an epimorphism to $H$ with nonabelian wild image $R$. It is a normal $2$-subgroup with $|R|\ge8$. Targets that are $2$-groups are already covered. For $72\le|H|<96$, divisibility by eight leaves only
$$|H|=72,\ 80,\ 88.$$
We handle all three without a table of finite groups.

*Order seventy-two.* Here $|R|=8$. A Sylow $3$-subgroup $A$ has order nine, intersects $R$ trivially and satisfies $H=RA$, so $H=R\rtimes A$. The [order-eight calculation](dyadic-tame-lifting-has-no-count-obstruction-below-order-48.md) gives $R=D_8$ or $Q_8$, with automorphism groups of orders eight and twenty-four respectively. The $D_8$ action is trivial, giving a direct product of a $2$-group and an odd-order group. For $Q_8$, the [quaternion-by-odd theorem](quaternion-by-odd-targets-give-no-dyadic-count-obstruction.md) proves (1), for every action and every tame marking. This includes both $A=C_9$ and $A=C_3^2$.

*A group-theoretic fact for order eighty.* No nonabelian group $S$ of order sixteen has an automorphism of order five. Indeed set $\Phi=S^2[S,S]$ and $V=S/\Phi\cong\mathbb F_2^t$. Lifts of a basis of $V$ generate $S$: any proper subgroup lies in a maximal subgroup, which has index two and contains $\Phi$. Thus $t\ge1$, while $t=4$ would give $\Phi=1$ and make $S$ elementary abelian. Hence $1\le t\le3$.

The orders of $\operatorname{GL}_t(\mathbb F_2)$ for $t=1,2,3$ are $1,6,168$, none divisible by five. An automorphism $a$ of order five therefore acts trivially on $V$. Each $\Phi$-coset is stable under $a$ and has power-of-two cardinality. Its orbits have lengths one or five, so it contains a fixed element. Choose fixed lifts of a basis of $V$. They generate $S$, forcing $a=1$, a contradiction.

*Order eighty.* Now $|R|=8$ or $16$. If $|R|=16$, Cauchy's theorem supplies a complement $C_5$ and $H=R\rtimes C_5$. The preceding fact makes the action trivial. This is a direct product already covered.

If $|R|=8$, the quotient $H/R$ has order ten and a unique subgroup of order five, since its number of Sylow $5$-subgroups divides two and is congruent to one modulo five. Let $E$ be its inverse image. Then $E\triangleleft H$ has order forty. Cauchy's theorem gives $E=R\rtimes C_5$. The order-eight automorphism calculations make the action trivial, so $E=R\times C_5$. Its subgroup $O\cong C_5$ is unique, since every map from a group of order five into $R$ is trivial. Thus $O$ is characteristic in $E$ and normal in $H$. Since $H/O$ has order sixteen, the normal-odd-subgroup reduction proves (1).

*Order eighty-eight.* Here $|R|=8$ and Cauchy's theorem gives $H=R\rtimes C_{11}$. Neither $\operatorname{Aut}(D_8)$ nor $\operatorname{Aut}(Q_8)$ has order divisible by eleven, so the action is trivial. The direct-product reduction applies. These cases, together with the bound below order $72$, prove (1). $\square$

**Checks and scope.** At order $72$, treating only cyclic cubic markings would miss both full order-nine markings and partial markings with distinct zero and positive counts; the quaternion-by-odd factorization covers all of them. At order $80$, the normal wild image of order eight need not be a Sylow subgroup, which is why its case is treated separately.

The bound concerns target order, not an index in a canonical quotient diagram. It gives no assertion for order $96$, constructs no automorphism of $G_k$, and leaves the full Frobenius-shift and dyadic classification problems open.
