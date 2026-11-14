---
title: Are free pro-Σ groups characteristic in their automorphism groups?
kind: problem
summary: 'Tsujimura asks whether a free pro-Σ group F of finite rank at least 2, for a set Σ of primes, is characteristic in Aut(F). Yes for Σ = {p}, and for discrete free groups. Open for larger Σ, where a rival normal copy of F could only meet F in an infinitely generated subgroup of infinite index.'
tags: [group-theory, fundamental-groups]
edges:
  - {to: free-pro-p-groups-inside-their-automorphism-groups, label: motivated-by, note: "Tsujimura poses the question after proving the case $\\Sigma = \\{p\\}$ [@tsujimura2026freeaut, Introduction, Q.1, p. 2]."}
  - {to: demushkin-groups-inside-their-automorphism-groups, label: analogous-to, note: "Tsujimura's Q.2, recorded together with Q.1."}
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: analogous-to, note: "Tsujimura asks it after Q.2, in the same introduction."}
---

**Question (Tsujimura).** Let $\Sigma$ be a nonempty set of primes and $F$ a free pro-$\Sigma$ group of finite rank $n \ge 2$. It has trivial centre ([rival copies](rival-copies-of-free-pro-sigma-groups-in-their-automorphism-groups.md), part 2), so conjugation identifies $F$ with the closed normal subgroup $\mathrm{Inn}(F)$ of the profinite group $\mathrm{Aut}(F)$, whose topology is defined by the characteristic open subgroups of $F$ [@tsujimura2026freeaut, Notations and conventions, p. 3].

1. Is $F$ characteristic in $\mathrm{Aut}(F)$, that is, preserved by every continuous automorphism of $\mathrm{Aut}(F)$?
2. More strongly, is $F$ the only closed normal subgroup of $\mathrm{Aut}(F)$ isomorphic to $F$?

A positive answer to 2 gives one to 1, since a continuous automorphism of $\mathrm{Aut}(F)$ carries $F$ to a closed normal subgroup isomorphic to $F$.

**Attribution.** After proving both forms for free pro-$p$ groups, Tsujimura records as Q.1: "Apart from the nilpotent situations, for a general set of prime numbers $\Sigma$, is a nonabelian free pro-$\Sigma$ group characteristic in its automorphism group?" He reports no partial answers [@tsujimura2026freeaut, Introduction, p. 2]. So Q.1 asks form 1. Form 2 is the form of his theorem for $\Sigma = \{p\}$, and for $\Sigma = \{p\}$ he deduces $\mathrm{Out}(\mathrm{Aut}(F)) = 1$ from form 1 by Burnside's criterion [@tsujimura2026freeaut, Introduction, Theorem A and Corollary B, p. 2]. A free pro-$\Sigma$ group of rank $1$ is abelian, so "nonabelian" means rank at least $2$ and $\Sigma \ne \varnothing$. Tsujimura's Theorem A is stated for finite rank, and the topology on $\mathrm{Aut}(F)$ above needs $F$ to be topologically finitely generated, so finite rank is assumed here.

**Known.**

- *Discrete free groups.* For a nonabelian free group of finite rank, $\mathrm{Inn}$ is characteristic in $\mathrm{Aut}$ (Dyer–Formanek), and is the only normal subgroup of $\mathrm{Aut}$ isomorphic to the group (Formanek), as Tsujimura states [@tsujimura2026freeaut, Introduction, Theorems 0.1 and 0.2, p. 1].
- *One prime.* For $\Sigma = \{p\}$ both forms hold ([free pro-$p$ groups](free-pro-p-groups-inside-their-automorphism-groups.md)).
- *No rival copy meets $F$ openly.* For every nonempty $\Sigma$, a closed normal subgroup $N \ne F$ of $\mathrm{Aut}(F)$ isomorphic to $F$ meets $F$ in a subgroup of infinite index in both $N$ and $F$ that is not topologically finitely generated ([rival copies](rival-copies-of-free-pro-sigma-groups-in-their-automorphism-groups.md), part 3). The proof combines the elasticity of $F$ with Minamide and Tsujimura's theorem that $\mathrm{Out}(F)$ is slim [@minamidetsujimura2024, Lemma 3.4, p. 20], which leaves no room for a finite normal subgroup $NF/F$. So form 2 holds exactly when no rival copy of this infinitely generated kind exists.
- *The outer automorphism group.* For every nonempty $\Sigma$ and $n \ge 2$, $\mathrm{Out}(F)$ is slim [@minamidetsujimura2024, Lemma 3.4, p. 20]. If $\Sigma$ has one element or omits only finitely many primes, $\mathrm{Aut}(F)$ and $\mathrm{Out}(F)$ are strongly indecomposable, that is, no open subgroup is a nontrivial direct product [@minamidetsujimura2024, Corollary 3.5, p. 23]. The authors do not know whether this condition on $\Sigma$ can be dropped [@minamidetsujimura2024, Introduction, p. 3]. For free profinite groups, where $\Sigma$ is the set of all primes, they note that the centre of $\mathrm{Out}(F)$ is trivial, by a theorem of Tamagawa, and that $\mathrm{Out}(F)$ is not topologically finitely generated [@minamidetsujimura2024, Introduction, p. 2].

**An obstacle to the pro-$p$ method.** This is a remark about the method, not about any attempted proof. Tsujimura's proof locates a rival copy inside $FK_i(F)$ for every $i$, where $K_i(F)$ is the kernel of the action on $F/F_{i+1}$ and $(F_i)$ is the closed lower central series ([free pro-$p$ groups](free-pro-p-groups-inside-their-automorphism-groups.md), Method and scope). For a pro-$p$ group the kernels $K_i(F)$ have trivial intersection. If $\Sigma$ contains two primes, then for every rank $n \ge 2$ there is a non-inner automorphism of $F$ in every $K_i(F)$, so the subgroups $FK_i(F)$ meet in more than $F$ ([Andreadakis kernels of free pro-Σ groups](andreadakis-kernels-of-free-pro-sigma-groups.md)). So the lower central series alone cannot place a rival copy inside $F$. This does not decide whether rival copies exist.

**Status.** Open for every $\Sigma$ with at least two primes, in either form, as far as the sources opened here show. Tsujimura's preprint is dated 30 July 2026. A literature search in November 2026 found no answer, but that search was not exhaustive.
