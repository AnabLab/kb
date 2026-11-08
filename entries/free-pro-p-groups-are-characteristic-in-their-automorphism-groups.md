---
title: Free pro-p groups are characteristic in their automorphism groups
kind: theorem
summary: 'Tsujimura proves, in a 2026 preprint, that a free pro-$p$ group $F$ of finite rank $n \ge 2$ is the only closed normal subgroup of $\mathrm{Aut}(F)$ isomorphic to $F$. So $F$ is characteristic in $\mathrm{Aut}(F)$ and $\mathrm{Out}(\mathrm{Aut}(F)) = 1$, as for discrete free groups.'
tags: [pro-p-groups]
---

**Statement.** Let $p$ be a prime and let $F$ be a free pro-$p$ group of finite rank $n \ge 2$. Then $F$ has trivial centre, so conjugation identifies $F$ with the closed normal subgroup $\mathrm{Inn}(F)$ of the group $\mathrm{Aut}(F)$ of continuous automorphisms. Since $F$ is topologically finitely generated, $\mathrm{Aut}(F)$ is a profinite group, with the topology defined by the characteristic open subgroups of $F$ [@tsujimura2026free, Introduction, p. 2].

1. $F$ is the unique closed normal subgroup of $\mathrm{Aut}(F)$ that is isomorphic to $F$ [@tsujimura2026free, Theorem A, p. 2] [@tsujimura2026free, Theorem 3.1, p. 8].
2. Hence $F$ is characteristic in $\mathrm{Aut}(F)$, meaning that every continuous automorphism of $\mathrm{Aut}(F)$ preserves it. By Burnside's criterion, $\mathrm{Out}(\mathrm{Aut}(F)) = 1$ [@tsujimura2026free, Corollary B, p. 2] [@tsujimura2026free, Corollary 3.2, p. 9].

Part 2 follows from part 1, since an automorphism of $\mathrm{Aut}(F)$ carries $F$ to a closed normal subgroup isomorphic to $F$. The equality $\mathrm{Out}(\mathrm{Aut}(F)) = 1$ says that the automorphism tower of $F$ stops after one step [@tsujimura2026free, Remark 3.2.1, p. 9].

**Status.** This is a preprint, RIMS-1999, dated 30 July 2026. Its proof has not been checked independently here.

**The discrete case.** Tsujimura recalls the discrete analogues. By Dyer and Formanek, a nonabelian free group of finite rank is characteristic in its automorphism group, which therefore has trivial outer automorphism group. By Formanek, it is the unique normal subgroup of its automorphism group isomorphic to it [@tsujimura2026free, Theorems 0.1 and 0.2, p. 1]. Those papers were not opened here. Tsujimura first tried to imitate Formanek's proof using anabelian methods, but could not compute a centralizer needed in rank $2$, so the proof below takes a different route [@tsujimura2026free, Introduction, p. 2].

**Outline of the proof.** Let $N \subseteq \mathrm{Aut}(F)$ be a closed normal subgroup that is free pro-$p$ of rank $n$ [@tsujimura2026free, §3].

- $N \cap F \ne 1$, since otherwise $N$ would centralize $F$. As every nontrivial closed normal subgroup of $F$ has trivial centralizer, conjugation $\mathrm{Aut}(F) \to \mathrm{Aut}(N)$ is injective [@tsujimura2026free, Lemma 3.3, p. 9].
- The kernels of $\mathrm{Aut}(F) \to \mathrm{GL}(F/\Phi(F))$ and $\mathrm{Aut}(N) \to \mathrm{GL}(N/\Phi(N))$ are pro-$p$, and $\mathrm{GL}_n(\mathbb{F}_p)$ has no nontrivial normal $p$-subgroup. So conjugation induces an isomorphism $\mathrm{GL}(F/\Phi(F)) \cong \mathrm{GL}(N/\Phi(N))$ [@tsujimura2026free, Lemma 3.5, p. 10].
- $N$ acts trivially on $F^{\mathrm{ab}}$ [@tsujimura2026free, Proposition 3.8, p. 11]. The case $p = 2$, $n = 2$ needs a separate computation with $2 \times 2$ matrices.
- Let $K_i(F)$ be the kernel of $\mathrm{Aut}(F) \to \mathrm{Aut}(F/F_{i+1})$, where $F_i$ is the lower central series; this is the Andreadakis–Johnson filtration. A pro-$p$ analogue of a theorem of Formanek identifies $F K_2(F)/K_2(F)$ inside $K_1(F)/K_2(F)$ by representation theory of $\mathrm{SL}_n$ in characteristic $0$ [@tsujimura2026free, Proposition 1.5, p. 5]. Induction then gives $N \subseteq F K_i(F)$ for all $i \ge 2$ [@tsujimura2026free, Proposition 3.12, p. 12].
- Since $\bigcap_i F K_i(F) = F$, this gives $N \subseteq F$. A nontrivial topologically finitely generated closed normal subgroup of $F$ is open, and $N$ and $F$ have the same rank, so $N = F$ [@tsujimura2026free, Proof of Theorem 3.1, p. 13].

**Open questions.** Tsujimura asks whether a nonabelian free pro-$\Sigma$ group is characteristic in its automorphism group for a general set of primes $\Sigma$, apart from the nilpotent situations (Q.1). He also asks whether similar results hold for other highly nonabelian profinite groups, such as nonabelian Demushkin groups and profinite surface groups (Q.2) [@tsujimura2026free, Introduction, p. 2]. He does not know whether Theorem 3.1 holds for nonabelian free profinite groups [@tsujimura2026free, Remark 3.1.2, p. 9]. For absolute Galois groups, see [the $p$-adic question](p-adic-galois-groups-in-their-automorphism-groups.md) and [the number-field case](automorphism-towers-of-number-field-galois-groups.md), which holds only for some number fields.
