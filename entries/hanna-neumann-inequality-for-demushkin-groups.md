---
title: Hanna Neumann inequality and commensurators in Demushkin groups
kind: theorem
summary: 'In a Demushkin group of rank at least three, finitely generated subgroups satisfy the strengthened Hanna Neumann bound. A nontrivial finitely generated subgroup H of infinite index has a closed free commensurator C with [C:H] finite, bounded by d(H)-1 if d(H) is at least two.'
tags: [pro-p-groups, galois-groups]
edges:
  - {to: demushkin-group, label: uses}
  - {to: demushkin-groups-of-rank-at-least-three-are-elastic, label: uses, note: 'Only part 1, that finitely generated closed subgroups of infinite index are free, for the commensurator corollary.'}
  - {to: demushkin-groups-inside-their-automorphism-groups, label: motivated-by, note: 'Subgroup-intersection control inside D does not control the intersection of two copies inside Aut(D); see Scope.'}
---

**Setting.** Let $G$ be a [Demushkin pro-$p$ group](demushkin-group.md) with $d(G)\ge3$, where $d(P)$ is the least number of topological generators of a pro-$p$ group $P$. All subgroups below are closed. In this class, the rank condition is equivalent to nonsolvability [@jaikinzapirainshusterman2019, discussion after Theorem 1.1, p. 2].

**Theorem (Jaikin-Zapirain–Shusterman).** For nontrivial finitely generated subgroups $U,W\subseteq G$, the set
$$
S(U,W)=\{UgW\in U\backslash G/W:U\cap gWg^{-1}\ne1\}
$$
is finite, every intersection $U\cap gWg^{-1}$ is finitely generated, and
$$
\sum_{UgW\in S(U,W)}\bigl(d(U\cap gWg^{-1})-1\bigr)
\le\bigl(d(U)-1\bigr)\bigl(d(W)-1\bigr).
\tag{1}
$$
This is the strengthened Hanna Neumann inequality [@jaikinzapirainshusterman2019, Theorem 1.1, p. 2]. The finite-generation input is also stated explicitly in the proof of Corollary 3.5 [@jaikinzapirainshusterman2019, pp. 8–9]. Thus $G$ has the *Howson property*: intersections of finitely generated closed subgroups are finitely generated. Finiteness of $S(U,W)$ is stronger than (1) alone, since a nontrivial procyclic intersection contributes zero.

**Corollary (proved here).** Let $1\ne H\subseteq G$ be finitely generated and of infinite index. Define
$$
C=\operatorname{Comm}_G(H)
=\{g\in G:[H:H\cap gHg^{-1}]<\infty,
\ [gHg^{-1}:H\cap gHg^{-1}]<\infty\}.
$$
Then $C$ is a closed finitely generated free pro-$p$ group, $H$ is open in $C$, and
$$
d(H)-1=[C:H]\bigl(d(C)-1\bigr).
\tag{2}
$$
Moreover, $C$ contains every closed subgroup of $G$ commensurate with $H$. Hence it is the largest member of that commensurability class and the unique largest closed overgroup in which $H$ is open. If $d(H)\ge2$, then
$$
[\operatorname{N}_G(H):H]\le[C:H]\le d(H)-1.
\tag{3}
$$
In particular, if $d(H)=2$, then $C=H$ and $H$ is self-normalizing. If $d(H)=1$, then $C$ is procyclic; the bound in (3) is not asserted.

*Proof.* The linked infinite-index subgroup theorem makes $H$ a nontrivial free pro-$p$ group, hence infinite. Commensurability is transitive and preserved by conjugation, so $C$ is a subgroup containing $H$. For $g\in C$, the intersection $H\cap gHg^{-1}$ is open in $H$, hence nontrivial. Therefore $C$ is a union of double cosets from the finite set $S(H,H)$. Each such double coset $HgH$ has exactly $[H:H\cap gHg^{-1}]$ right $H$-cosets, a finite number. It follows that $[C:H]$ is finite. As a finite union of cosets of compact $H$, $C$ is compact and closed in $G$. Adjoining finitely many coset representatives to generators of $H$ topologically generates $C$.

Since $H$ has infinite index in $G$, so does $C$. The [infinite-index subgroup theorem](demushkin-groups-of-rank-at-least-three-are-elastic.md), part 1, makes $C$ free pro-$p$. Applying the free pro-$p$ Schreier formula to its open subgroup $H$ gives (2); the formula is used in [@jaikinzapirainshusterman2019, proof of Proposition 3.3, equation (3.19), p. 8].

If a closed subgroup $L$ is commensurate with $H$, then for each $l\in L$ the subgroups $lHl^{-1}$ and $lLl^{-1}=L$ are commensurate. Transitivity with $L$ and $H$ gives $l\in C$, so $L\subseteq C$. Since $H$ is open in $C$, this proves both maximality statements. Finally $\operatorname{N}_G(H)\subseteq C$. If $d(H)\ge2$, equation (2) forces $d(C)\ge2$ and gives (3); if $d(H)=1$, it forces $d(C)=1$. $\square$

**Scope.** Both the theorem and the corollary include $p=2$ and every canonical-character image. They concern subgroups of the same Demushkin group. In [Tsujimura's question](demushkin-groups-inside-their-automorphism-groups.md), a rival normal copy $N$ and the inner copy $D$ instead lie in $\operatorname{Aut}(D)$; the theorem supplies no Howson property for that ambient group. Their intersection in case (b) of [the reduction](demushkin-groups-of-rank-at-least-three-are-elastic.md), Corollary 2, is not finitely generated, so it is also outside the commensurator corollary. No case of that question is settled here. The corollary is an elementary consequence of the cited theorem and the linked freeness result; no novelty is claimed.
