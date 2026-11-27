---
title: The kernel-unipotent conjecture for Galois groups
kind: problem
summary: 'Mináč and Tân conjectured that the $n$th Zassenhaus term of the maximal pro-$p$ Galois group of a field with a primitive $p$th root of unity is the intersection of the kernels of its maps to $U_n(\mathbb F_p)$. It fails for $\mathbb Z_p^2*\mathbb Z_p$ and large $n$.'
tags: [galois-groups, galois-cohomology, pro-p-groups]
edges:
  - {to: massey-vanishing-conjecture, label: analogous-to, note: "Both concern upper unipotent representations; here they must separate elements modulo a filtration term."}
  - {to: demushkin-group, label: uses, note: "only for the known rank-two case"}
---

**Filtration.** For a pro-$p$ group $G$, its $p$-Zassenhaus filtration is

$$G_{(1)}=G,\qquad G_{(n)}=G_{(\lceil n/p\rceil)}^p\prod_{i+j=n}[G_{(i)},G_{(j)}]\quad(n\ge2).$$

Powers and commutators generate closed subgroups. Write $U_n(\mathbb F_p)$ for the upper triangular $n\times n$ matrices with diagonal entries $1$. Every continuous homomorphism $G\to U_n(\mathbb F_p)$ kills $G_{(n)}$ [@minactan2015kernel, §2 and Lemma 2.5(b), pp. 4–6].

**Conjecture (Mináč–Tân).** If $F$ contains a primitive $p$th root of unity and $G=G_F(p)$ is its maximal pro-$p$ Galois group, then, for every $n\ge3$,

$$G_{(n)}=\bigcap_{\rho:G\to U_n(\mathbb F_p)}\ker\rho,$$

where all homomorphisms are continuous [@minactan2015kernel, Conjecture 1.3, p. 3].

**Known cases.** The equality holds for $n=3$ over every such field [@efrat2021kernel, Theorem 12.2(a) and the discussion following its proof, pp. 25–27]. It holds for every $n$ for free pro-$p$ groups and for [Demushkin groups](demushkin-group.md) of rank two [@minactan2015kernel, Theorem 2.6(a) and Proposition 5.4, pp. 7 and 14]. It holds for every $n$ when $p$ is odd and $F$ is $p$-rigid, with no finiteness assumption on $F^\times/F^{\times p}$; see [odd rigid fields](kernel-unipotent-property-and-massey-vanishing-for-odd-rigid-fields.md) [@minactan2015kernel, Theorem 5.2, p. 13].

Mináč and Tân announced a proof for every Demushkin group when $n=3,4$, in a paper then in preparation [@minactan2015kernel, §1, p. 3]. A 2025 preprint attributes the case $n=4$ for finitely generated Demushkin groups to a preprint of theirs [@minactantra2025, §1, p. 2]. Neither proof has been opened here. The knowledgebase proves the equality for every $n$ for every Demushkin group of rank at least $3$, from strong Massey vanishing and a lemma on chains of classes with zero adjacent cup products; with the rank-two case, the conjecture holds for every field whose $G_F(p)$ is a Demushkin group, in particular for every finite extension of $\mathbb Q_p$ containing $\zeta_p$. See [Demushkin groups have the kernel unipotent property](kernel-unipotent-property-for-demushkin-groups.md).

**Status and scope.** The conjecture is false in general. For every prime $p$, the free pro-$p$ product $\mathbb Z_p^2*\mathbb Z_p$ is $G_K(p)$ for some field $K$ containing a primitive $p$th root of unity, and it fails the equality for every $n\ge(p+1)(p^2-p+3)+4$, and for every $n\ge18$ if $p=2$; see [a maximal pro-$p$ Galois group without the kernel-unipotent property](kernel-unipotent-conjecture-fails-for-zp2-free-product-zp.md). Among fields whose $G_K(p)$ is the right-angled Artin pro-$p$ group of a finite graph, the equality holds for every $n$ exactly when $G_K(p)\cong F\times\mathbb Z_p^s$ with $F$ free pro-$p$, and otherwise fails for all large $n$; see [right-angled Artin pro-$p$ groups with the kernel-unipotent property](kernel-unipotent-property-for-right-angled-artin-pro-p-groups.md). The general assertion was still presented as a conjecture in a 2025 preprint [@hamzamaireminactan2025, §4, p. 20]. Had it held, it would have given a necessary condition for Galois realizability. The condition is restrictive: for every $n\ge3$ there is a finitely generated torsion-free pro-$p$ group without it. One takes the free pro-$p$ group $S$ on $N>p^{n(n-1)/2}$ generators $x_1,\ldots,x_N$ modulo the normal closure of $S_3$ and of the elements $[x_1,x_2][x_i,x_j]^{-1}$ for $1\le i<j\le N$, where $S_3$ is the third term of the lower central series [@minactan2015kernel, Appendix, Proposition A.1 and Remarks A.2 (1) and (3), pp. 21–22]. Even together with Koszul cohomology and strong Massey vanishing, it is not sufficient: see the [product-of-free-groups example](cohomological-tests-do-not-characterize-galois-groups.md).
