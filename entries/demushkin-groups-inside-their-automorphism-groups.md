---
title: Are Demushkin groups characteristic in their automorphism groups?
kind: problem
summary: 'Tsujimura asks whether a centre-free Demushkin group $D$, identified with its inner automorphisms, is characteristic in $\mathrm{Aut}(D)$, as he proved for free pro-$p$ groups of finite rank at least $2$. Yes when $q = 0$ and $p$ is odd; open for $p = 2$ and for $q \ne 0$, such as $G_K(p)$.'
tags: [pro-p-groups, galois-groups]
edges:
  - {to: free-pro-p-groups-inside-their-automorphism-groups, label: motivated-by}
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: analogous-to, note: "Tsujimura asks both questions; when $\\zeta_p \\in K$ the maximal pro-$p$ quotient of $G_K$ is a Demushkin group."}
  - {to: demushkin-group, label: uses}
---

**Question (Tsujimura).** Let $D$ be a [Demushkin group](demushkin-group.md) with trivial centre. Identify $D$ with $\mathrm{Inn}(D)$ inside the group $\mathrm{Aut}(D)$ of continuous automorphisms, which is a profinite group with the topology defined by the characteristic open subgroups of $D$, since $D$ is topologically finitely generated [@tsujimura2026freeaut, Notations and conventions, p. 3].

1. Is $D$ characteristic in $\mathrm{Aut}(D)$, that is, preserved by every continuous automorphism of $\mathrm{Aut}(D)$? More strongly, is $D$ the only closed normal subgroup of $\mathrm{Aut}(D)$ isomorphic to $D$?
2. Is $\mathrm{Out}(\mathrm{Aut}(D)) = 1$?

A positive answer to 1 gives one to 2, by Burnside's criterion [@tsujimura2026freeaut, Introduction, p. 2].

**Attribution.** Tsujimura proves both statements for free pro-$p$ groups of finite rank at least $2$. He then asks, as his Q.2, whether similar results hold for other highly nonabelian profinite groups: "is a nonabelian Demushkin group or a profinite surface group characteristic in its automorphism group?" He reports no partial answers [@tsujimura2026freeaut, Introduction, p. 2]. He regards a centre-free group as a subgroup of its automorphism group throughout [@tsujimura2026freeaut, Introduction, p. 1], so the question presupposes that $D$ is centre-free; the form above makes this explicit. The question for profinite surface groups is not recorded here.

**Context.**

- *Free pro-$p$ groups.* The answer is yes for [free pro-$p$ groups](free-pro-p-groups-inside-their-automorphism-groups.md) of finite rank at least $2$.
- *$p$-adic fields.* If $K/\mathbb{Q}_p$ is finite of degree $d$ and $\zeta_p \in K$, then $G_K(p)$ is a Demushkin group of rank $d + 2$ ([maximal pro-$p$ Galois groups of $p$-adic fields](maximal-pro-p-galois-groups-of-p-adic-fields.md)). Tsujimura asks the same question for $G_K$ itself; see [the $p$-adic problem](p-adic-galois-groups-in-their-automorphism-groups.md).
- *Automorphisms on the abelianization.* For the Demushkin groups with $q = 0$, the pro-$p$ surface groups of genus $g$, the image of $\mathrm{Aut}(D)$ in $\mathrm{GL}(D^{\mathrm{ab}}) \cong \mathrm{GL}_{2g}(\mathbb{Z}_p)$ is exactly the group of symplectic similitudes, so every scalar lifts to an automorphism ([symplectic similitudes lift](symplectic-similitudes-lift-to-pro-p-surface-groups.md)). For a free pro-$p$ group of rank $n$ the image is all of $\mathrm{GL}_n(\mathbb{Z}_p)$ [@tsujimura2026freeaut, Proposition 1.2 (i), p. 4].

**What the free-group proof uses.** This is a reading of Tsujimura's proof, not a claim about Demushkin groups. Let $F$ be free pro-$p$ of rank $n \ge 2$, with closed lower central series $(F_i)$, and let $K_i(F)$ be the kernel of $\mathrm{Aut}(F) \to \mathrm{Aut}(F/F_{i+1})$. Given a closed normal subgroup $N \cong F$ of $\mathrm{Aut}(F)$, the proof shows $N \subseteq F K_i(F)$ for every $i$, so that $N \subseteq F$, and then $N = F$ [@tsujimura2026freeaut, Definition 1.1, p. 3; Proposition 3.12 and proof of Theorem 3.1, pp. 12–13]. Along the way it uses the following.

1. Conjugation $\mathrm{Aut}(F) \to \mathrm{Aut}(N)$ is injective, because every nontrivial closed normal subgroup of $F$ has trivial centralizer [@tsujimura2026freeaut, Lemma 3.3, p. 9].
2. $\mathrm{GL}_n(\mathbb{F}_p)$ has no nontrivial normal $p$-subgroup, which identifies the kernel of the action of $\mathrm{Aut}(F)$ on $N/\Phi(N)$ [@tsujimura2026freeaut, Lemma 2.1 (i), p. 6, and Lemma 3.5, p. 10].
3. Automorphisms lifting scalar matrices: a nontrivial central element of $\mathrm{GL}(F/\Phi(F))$ for odd $p$, and lifts of $\lambda I \in \mathrm{GL}(F^{\mathrm{ab}})$ [@tsujimura2026freeaut, Proposition 3.8, p. 11, Lemma 3.11 and Proposition 3.12, pp. 12–13].
4. Torsion-freeness and saturation properties of the filtration $K_i(F)$, which rest on the free Lie algebra associated with $F$ [@tsujimura2026freeaut, Proposition 1.2 (ii)–(vii), p. 4].
5. The inner part $FK_2(F)/K_2(F)$ is the unique $\mathrm{Aut}(F)$-invariant direct summand of rank $n$ in $K_1(F)/K_2(F)$, from the decomposition of $\mathrm{Hom}(V, \Lambda^2 V)$ under $\mathrm{SL}_n$ [@tsujimura2026freeaut, Lemma 1.4 and Proposition 1.5, p. 5].
6. A nontrivial topologically finitely generated closed normal subgroup of $F$ is open, and an open subgroup of the same rank is all of $F$ [@tsujimura2026freeaut, proof of Theorem 3.1, p. 13].

For a pro-$p$ surface group, the lifts of scalar matrices in item 3 exist by [the lifting theorem](symplectic-similitudes-lift-to-pro-p-surface-groups.md), and the rank part of item 6 follows from the index formula $n(H) - 2 = (G : H)(n(G) - 2)$ for open subgroups $H$ of a Demushkin group $G$, recorded in [Demushkin group](demushkin-group.md), when the rank is at least $3$. For a pro-$p$ surface group of genus at least $2$, [the lower central series of pro-$p$ surface groups](lower-central-series-of-pro-p-surface-groups.md) computes the graded Lie algebra of $D$ and the Andreadakis quotients. It supplies item 1, and the analogues of Proposition 1.2 (ii), (iii) and (v)–(vii) in item 4. The analogue of the commutator inclusion $[K_i, K_j] \subseteq K_{i+j}$ in Proposition 1.2 (iv) is not proved there, and is not needed. For genus at least $2$ and every $p$, [the inner part of the first Johnson quotient](inner-part-of-the-first-johnson-quotient-for-pro-p-surface-groups.md) supplies item 5, by a weight argument for the symplectic group in place of the decomposition under $\mathrm{SL}_n$. The analogue of item 2, and the odd-$p$ step of item 3 with the lift of $-I$, are proved in [pro-$p$ surface groups inside their automorphism groups](pro-p-surface-groups-inside-their-automorphism-groups.md).

**Status.** For odd $p$, both questions have a positive answer for the pro-$p$ surface groups of genus at least $2$, that is, the Demushkin groups with $q = 0$ and rank at least $4$ ([pro-$p$ surface groups inside their automorphism groups](pro-p-surface-groups-inside-their-automorphism-groups.md)). The case $p = 2$, and Demushkin groups with $q \ne 0$, including $G_K(p)$ for $p$-adic $K$ containing $\zeta_p$, are open as far as the sources opened here show. Tsujimura's paper is dated 30 July 2026. A literature search in November 2026 found no answer, but that search was not exhaustive.
