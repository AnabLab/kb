---
title: Dyadic tame lifting has no count obstruction below order 48
kind: theorem
summary: 'Over any dyadic field, every tame automorphism preserves marked surjection counts to targets of order less than 48. Direct products of a 2-group and an odd-order group cannot obstruct at any order. The full lifting problem remains open.'
tags: [local-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked-count formulation and strengthens its target-order lower bound from 24 to 48 in the dyadic case.'}
  - {to: tame-automorphisms-lift-to-joint-wild-abelian-and-pro-p-quotient, label: uses, note: 'Its joint lift handles all direct products of a finite 2-group and a finite odd-order group.'}
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: uses, note: 'Its count, independent of the cyclic cubic marking, handles the sole remaining target type below order 48.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Any unequal marked-count obstruction to the dyadic shift requires a target of order at least 48; existence of a full lift is not proved.'}
---

**Statement (proved here).** Let $k/\mathbb Q_2$ be finite of degree $d$, let $G=G_k$, let $P$ be wild inertia, and write $\pi:G\twoheadrightarrow\Gamma=G/P$ for the tame quotient. Fix $\alpha\in\operatorname{Aut}(\Gamma)$. For finite epimorphisms $q:\Gamma\twoheadrightarrow D$ and $r:H\twoheadrightarrow D$, put
$$
e_r(\eta)=\#\{f:G\twoheadrightarrow H\text{ continuous}:rf=\eta\}.
$$
These are the finite [marked surjection counts](finite-quotient-criterion-for-frobenius-shift-lifting.md), without identifying conjugate maps. Then
$$
e_r(q\pi)=e_r(q\alpha\pi)\qquad\text{if }|H|<48.\tag{1}
$$
The same equality holds at every order when $H$ is a direct product of a finite $2$-group and a finite odd-order group. In particular it holds for every finite nilpotent target.

**Proof.** Every tame automorphism induces the identity on the unramified quotient $\Gamma/I$, where $I$ is tame inertia, as checked in the inputs to the [joint lifting theorem](tame-automorphisms-lift-to-joint-wild-abelian-and-pro-p-quotient.md). We use three reductions.

*1. Targets seen by a quotient on which a lift exists.* Suppose $G\twoheadrightarrow J\twoheadrightarrow\Gamma$ admits a lift $b\in\operatorname{Aut}(J)$ of $\alpha$, and every homomorphism $G\to H$ factors through $J$. Precomposition of the factored maps by $b$ bijects the two sets in (1); its inverse uses $b^{-1}$. Surjectivity is preserved.

If the image of $P$ is abelian for every epimorphism $G\twoheadrightarrow H$, the same argument applies to those epimorphisms with $J=G/[P,P]$. A lift on this quotient exists for every dyadic tame automorphism, by the linked joint theorem. Thus such a target cannot obstruct.

Now let $H=R\times O$ with $R$ a finite $2$-group and $O$ of odd order. Put $A=[P,P]$ and $N=\ker(G\to G_k(2))$. The $R$-coordinate of any homomorphism kills $N$. Its $O$-coordinate kills $P$, since $P$ is pro-$2$, and therefore kills $A$. Hence every map to $H$ kills $A\cap N$. The joint theorem supplies exactly the required lift on $J=G/(A\cap N)$, since $\mu_2\subset k$. This proves the assertion for direct products. A finite nilpotent group is the direct product of its Sylow subgroups, so it is included.

*2. Classifying the remaining small targets.* If $H$ is a $2$-group, then $D$ is a $2$-group and $q(I)=1$, since $I$ is pro-odd. Thus $q\alpha=q$, and the counts agree. If every epimorphism to $H$ has abelian wild image, step 1 applies. Otherwise choose an epimorphism with nonabelian image $R$ of $P$. This $R$ is a normal $2$-subgroup of $H$, with $|R|\ge8$.

Assume $|H|<48$ and $H$ is not a $2$-group. Divisibility then forces $|R|=8$ and $|H|=24$ or $40$. Write $m=3$ or $5$ respectively. An element of order $m$ exists by Cauchy's theorem, maps nontrivially to $H/R$, and provides a complement. Thus $H=R\rtimes C_m$.

For completeness, a nonabelian group of order eight is $D_8$ or $Q_8$. It has an element $x$ of order four, since a group of exponent two is abelian. For $y\notin\langle x\rangle$, conjugation must invert $x$, since otherwise $x,y$ generate an abelian group. Also $y^2\in\langle x\rangle$ is fixed by inversion, so $y^2=1$ or $x^2$. These give the dihedral and quaternion presentations respectively.

An automorphism of $D_8$ sends its rotation generator $x$ to $x$ or $x^{-1}$, and a reflection $y$ to one of the four $x^j y$. Thus its automorphism group has order eight, so every $C_m$-action on $D_8$ is trivial. An automorphism of $Q_8$ has six choices for the image of $i$ and four choices for the image of $j$ outside that cyclic subgroup; each choice respects the quaternion presentation. Its automorphism group therefore has order $24$. A $C_5$-action is trivial. A nontrivial $C_3$-action cyclically permutes the three cyclic subgroups of order four: the kernel of the permutation action consists of four sign changes. All subgroups of order three in this automorphism group are conjugate by Sylow's theorem. Allowing inversion of a generator of the complement, the resulting semidirect product is therefore
$$
B=Q_8\rtimes C_3,
$$
with the action used in the [binary tetrahedral count](binary-tetrahedral-embedding-counts-over-dyadic-fields.md). All other cases are the direct products already treated in step 1.

*3. Every tame marking of the binary tetrahedral target.* Write $r_0:B\twoheadrightarrow C_3$ for the quotient. A finite tame quotient $D$ has a normal cyclic odd-order subgroup $q(I)$ and cyclic quotient by it. Its Sylow $2$-subgroups are cyclic, since they inject into $D/q(I)$. Thus $r(Q_8)$ is cyclic. Any map from $Q_8$ to a cyclic group kills its commutator subgroup $\{\pm1\}$, so the map factors through $V=Q_8/\{\pm1\}\cong\mathbb F_2^2$. The induced kernel in $V$ is $C_3$-stable. This action is irreducible, since it cycles the three nonzero vectors. A nontrivial cyclic image of $V$ would have order two and a one-dimensional kernel, which is impossible. Consequently $r(Q_8)=1$.

Since $r$ is surjective, either $D=1$, when the markings coincide, or $D\cong C_3$ and $r=\beta r_0$ for an isomorphism $\beta:C_3\to D$. In the latter case the two counts are counts above the epimorphisms
$$
\epsilon=\beta^{-1}q\pi,\qquad \epsilon'=\beta^{-1}q\alpha\pi
$$
to $C_3$. The binary tetrahedral theorem gives the same value for every such epimorphism, whether its cubic extension is ramified or unramified:
$$
2^{d+4}\bigl(2^{2d-1}+(-1)^d2^{d-1}-1\bigr).
$$
This handles every $r,q$ and completes the proof. $\square$

**Checks and scope.** Nonabelian Sylow $2$-subgroups alone do not decide the test: the direct-product argument excludes $D_8\times C_3$, $Q_8\times C_3$, $D_8\times C_5$ and $Q_8\times C_5$, while step 3 handles the nontrivial quaternion action. At $d=1$ its count is zero for every cubic marking; at $d=2$ it is $576$ for every marking. Thus the argument compares zero counts as well as positive counts.

The bound concerns the order of the finite target $H$, not the index parameter of canonical finite diagrams. It asserts no obstruction at order $48$, and constructs no automorphism of $G_k$. The [Frobenius-shift problem](frobenius-shift-lifting-problem.md) and the remaining [dyadic classification](isomorphism-classes-of-p-adic-galois-groups.md) cases remain open.
