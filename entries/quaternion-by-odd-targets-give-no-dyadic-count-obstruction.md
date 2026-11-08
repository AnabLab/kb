---
title: Quaternion-by-odd targets give no dyadic count obstruction
kind: theorem
summary: 'For a dyadic field, every tame automorphism preserves all marked surjection counts to Q8 semidirect any finite odd-order group. For nontrivial actions, the counts factor into the binary tetrahedral count and a count entirely on the tame quotient, including noncyclic odd complements.'
tags: [local-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: uses, note: 'Its count above every cyclic cubic epimorphism supplies the uniform factor.'}
  - {to: dyadic-tame-lifting-has-no-count-obstruction-below-order-48, label: uses, note: 'Supplies the automorphism calculations for Q8 and the direct-product case when the odd-order action is trivial.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked counts of actual surjections, without quotienting by conjugacy.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes every tame marking of quaternion-by-odd semidirect products; it constructs no full lift.'}
---

**Statement (proved here).** Let $k/\mathbb Q_2$ be finite of degree $d$, let $G=G_k$, and let $\pi:G\twoheadrightarrow\Gamma$ be the tame quotient. For every finite odd-order group $A$, every action of $A$ on $Q_8$, and
$$H=Q_8\rtimes A,$$
every $\alpha\in\operatorname{Aut}(\Gamma)$ preserves all [marked surjection counts](finite-quotient-criterion-for-frobenius-shift-lifting.md): for finite epimorphisms $q:\Gamma\twoheadrightarrow D$ and $r:H\twoheadrightarrow D$,
$$
e_r(q\pi)=e_r(q\alpha\pi),\qquad
e_r(\eta)=\#\{f:G\twoheadrightarrow H:rf=\eta\}.
\tag{1}
$$
All maps are continuous, and conjugate maps are counted separately.

For a nontrivial action, every such $r$ kills $Q_8$, so it induces an epimorphism $\bar r:A\twoheadrightarrow D$. There is the more precise factorization
$$
e_r(q\pi)=C_d\,\#\{c:\Gamma\twoheadrightarrow A:\bar r c=q\},
\qquad
C_d=2^{d+4}\bigl(2^{2d-1}+(-1)^d2^{d-1}-1\bigr).
\tag{2}
$$
No cyclicity or existence of a tame realization is assumed for $A$. If the set on the right is empty, the count is zero.

**Proof.** The [order-eight calculations](dyadic-tame-lifting-has-no-count-obstruction-below-order-48.md) show that $|\operatorname{Aut}(Q_8)|=24$, and that all its subgroups of order three are conjugate. Thus a nontrivial odd-order action has image $C_3$. After identifying that image with the standard action cycling the quaternion directions, write it as
$$\chi:A\twoheadrightarrow C_3.$$
Put $B=Q_8\rtimes C_3$ and let $r_0:B\twoheadrightarrow C_3$ be its quotient. There is an isomorphism
$$
H\xrightarrow{\sim}B\times_{C_3}A,\qquad
(x,a)\longmapsto((x,\chi(a)),a).
\tag{3}
$$

*Every tame marking kills the quaternion kernel.* A finite tame group $D$ has a cyclic normal odd-order inertia subgroup and cyclic quotient by it. A Sylow $2$-subgroup injects into that cyclic quotient, so is cyclic. Hence $r(Q_8)$ is cyclic. A map from $Q_8$ to a cyclic group kills $Z(Q_8)=[Q_8,Q_8]$, and factors through $V=Q_8/Z(Q_8)\cong\mathbb F_2^2$. Its kernel in $V$ is stable under the cubic action, which cycles the three nonzero vectors. A nontrivial cyclic image would have order two and a stable line as kernel. This is impossible, so $r(Q_8)=1$ and $r=\bar r\circ\operatorname{pr}_A$.

*Surjectivity in the fiber product.* Under (3), a homomorphism $f:G\to H$ is a pair $(b,c)$ of maps to $B,A$ with $r_0b=\chi c$. If $f$ is onto, both coordinates are onto. Conversely, suppose both coordinates are onto and let $T$ be the image in the fiber product. The kernel $L$ of $T\to A$ is a subgroup of $Q_8$. Since $T$ surjects onto $B$, the integer $|T|$ is divisible by eight. But $|T|=|L||A|$ and $|A|$ is odd, so $|L|=8$. Thus $T$ contains the full kernel $Q_8$ and maps onto $A$, giving $T=H$.

*Counting.* Every map $G\to A$ kills wild inertia, since it is pro-$2$ and $A$ has odd order. It therefore factors uniquely through $\pi$. Fix an epimorphism $c:\Gamma\twoheadrightarrow A$ with $\bar r c=q$. The compatible $B$-coordinates are exactly the epimorphisms $b:G\twoheadrightarrow B$ above the cyclic cubic epimorphism $\chi c\pi$. The [binary tetrahedral theorem](binary-tetrahedral-embedding-counts-over-dyadic-fields.md) counts these as $C_d$, independently of $c$. The preceding surjectivity argument counts precisely the required epimorphisms to $H$. Summing gives (2).

Precomposition $c\mapsto c\alpha$ bijects the tame maps counted for $q$ with those counted for $q\alpha$, proving (1). If the action is trivial, $H=Q_8\times A$ is covered by the direct-product assertion of the bound below order $48$. This completes the proof. $\square$

**Checks.** Taking $A=C_3$ and $\chi$ the identity recovers the binary tetrahedral count. Taking $A=C_9$ with $\chi$ reduction modulo three, or $A=C_3^2$ with any nonzero $\chi$, covers the nontrivial actions for both order-nine complements. For the full marking $H\to A$, each fixed tame epimorphism to $A$ has exactly $C_d$ lifts. In particular this is $576$ over the unramified quadratic dyadic field. At $d=1$, $C_d=0$, so all the nontrivial-action counts vanish, even if the tame count is positive.

Counts for a smaller marking need not be constant as the marking varies. For example, take $k=U_2$, $A=C_9=\mathbb Z/9$, and $r:H\to C_3$ induced by $\chi$. For a tame cubic character $\epsilon$, its extensions $c:\Gamma\to C_9$ must satisfy
$$3c(\tau)=0,\qquad c\bmod3=\epsilon,$$
by $\sigma\tau\sigma^{-1}=\tau^4$. Thus a ramified $\epsilon$ has no such extension. For an unramified nonzero $\epsilon$, there are three choices each for $c(\sigma)$ and $c(\tau)$; all nine maps are onto. Formula (2) gives respectively $0$ and $9\cdot576=5184$ lifts. Every tame automorphism preserves these counts by the same precomposition bijection.

**Scope.** The semidirect-product hypothesis is explicit. This entry does not classify arbitrary extensions of odd-order groups by $Q_8$, or lift an automorphism to $G_k$. It leaves the full Frobenius-shift problem open.
