---
title: The kernel-unipotent conjecture for Galois groups
kind: problem
summary: 'Mináč and Tân conjecture that the $n$th Zassenhaus term of a maximal pro-$p$ Galois group over a field containing a primitive $p$th root of unity is the intersection of kernels of all $n$-dimensional upper unipotent representations over $\mathbb F_p$.'
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

**Known cases.** The equality holds for $n=3$ over every such field [@efrat2021kernel, Theorem 12.2(a) and the discussion following its proof, pp. 25–27]. It holds for every $n$ for free pro-$p$ groups and for [Demushkin groups](demushkin-group.md) of rank two [@minactan2015kernel, Theorem 2.6(a) and Proposition 5.4, pp. 7 and 14].

**Status and scope.** The general assertion is still presented as a conjecture in a 2025 preprint [@hamzamaireminactan2025, §4, p. 20]. It predicts a necessary condition for Galois realizability. Even together with Koszul cohomology and strong Massey vanishing, it is not sufficient: see the [product-of-free-groups example](cohomological-tests-do-not-characterize-galois-groups.md).
