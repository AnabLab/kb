---
title: Local theory for m-step solvable Galois groups of number fields
kind: theorem
summary: From $G_K^{m+2}$ one recovers group-theoretically the decomposition groups in $G_K^m$ at nonarchimedean primes, for $m \ge 1$. From $G_K^3$ one also recovers the cyclotomic character, and from $G_K^2$ its $l$-part up to twists by finite characters.
tags: [number-fields, galois-groups, solvable-quotients]
edges:
  - {to: neukirch-local-theory, label: motivated-by, note: "The classical proof characterizes decomposition groups by the method of Brauer groups [@saiditamagawa2022, §0]."}
  - {to: m-step-solvable-quotient, label: uses}
---

**Statement.** For $m \ge 2$, the set of decomposition groups in $G_K^m$ at nonarchimedean primes of $K_m$, hence the set of these primes, can be recovered group-theoretically from $G_K^{m+2}$. For $m = 1$, the same holds for the decomposition groups in $G_K^1$ and the nonarchimedean primes of $K$ [@saiditamagawa2022, Theorem 1.25]. Thus an isomorphism $G_K^{m+2} \to G_L^{m+2}$ induces a compatible bijection of primes that preserves residue characteristic, local degree, ramification index, residue degree and norm, and matches Frobenius elements [@saiditamagawa2022, Corollary 1.27].

**Separatedness.** For $m \ge 2$, the natural map from nonarchimedean primes of $K_m$ to decomposition groups in $G_K^m$ is bijective [@saiditamagawa2022, Corollary 1.6].

**Method.** For $m \ge 2$ and a prime $l$, a closed subgroup of $G_K^m$ satisfies a condition $(\star_l)$ exactly when it is open in an $l$-Sylow subgroup of a decomposition group at a prime of residue characteristic different from $l$ [@saiditamagawa2022, Proposition 1.22]. The condition can be detected from $G_K^{m+1}$ [@saiditamagawa2022, Remark 1.21].

**Cyclotomic character.** For $m \ge 3$, the cyclotomic character of $G_K^m$ can be recovered from $G_K^m$ [@saiditamagawa2022, Theorem 1.26]. From $G_K^2$, one can recover the $l$-part of the cyclotomic character up to twists by finite characters, and this cannot be done from $G_K^1$ alone [@saiditamagawa2022, §0].
