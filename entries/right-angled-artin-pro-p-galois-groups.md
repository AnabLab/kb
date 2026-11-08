---
title: Galois realizability of right-angled Artin pro-p groups
kind: theorem
summary: 'A finite graph gives a Galois-realizable right-angled Artin pro-p group exactly when it has no induced square or four-vertex path. This is equivalent to hereditary quadratic cohomology, torsion-free subgroup abelianizations, a 1-smooth orientation and universally Koszul cohomology.'
tags: [galois-groups, galois-cohomology, pro-p-groups, reconstruction-algorithms]
edges:
  - {to: elementary-type-conjecture, label: addresses, note: "Within this family, Galois-realizable groups are built using only free pro-p products and direct products with the p-adic integers."}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "The Galois-to-hereditary-quadraticity implication uses it [@snopcezalesskii2022, proof of Theorem 1.2, (v) implies (iv)]."}
  - {to: kummerian-obstruction-to-galois-realizability, label: uses, note: "the definition of a 1-smooth orientation"}
  - {to: positselski-koszulity-conjecture, label: analogous-to, note: "Ordinary Koszulity holds for every graph here; universal Koszulity detects precisely the realizable ones."}
---

**Setting.** Fix a prime $p$ and a finite nonempty simple graph $\Gamma=(V,E)$. Its right-angled Artin pro-$p$ group is
$$
G_\Gamma=\langle v\in V\mid [v,w]=1\text{ for }\{v,w\}\in E\rangle_{\mathrm{pro}\text{-}p}.
$$
An induced subgraph retains every edge between its chosen vertices.

**Classification** (Snopce–Zalesskii). The following are equivalent [@snopcezalesskii2022, Theorem 1.2]:

1. $\Gamma$ contains neither an induced four-cycle $C_4$ nor an induced four-vertex path $P_4$ (called $L_3$ in the source).
2. $G_\Gamma\cong G_K(p)$ for some field $K$ containing a primitive $p$th root of unity.
3. Every closed subgroup $H$ has quadratic $H^*(H,\mathbb F_p)$: generators in degree one, relations in degree two.
4. Every closed subgroup $H$ has torsion-free abelianization $H^{\mathrm{ab}}$.
5. $G_\Gamma$ is built from $\mathbb Z_p$ by free pro-$p$ products and direct products with $\mathbb Z_p$.

These are also equivalent to admitting a [1-smooth orientation](kummerian-obstruction-to-galois-realizability.md); when they hold, the trivial orientation works [@snopcezalesskii2022, Theorem 1.5 and Lemma 4.1].

**Recursive test.** Split disconnected graphs into components. For a connected graph, remove a vertex adjacent to every other vertex; such a vertex exists under condition 1. Repeat until single vertices remain. These steps give respectively free pro-$p$ products and factors $\mathbb Z_p$ [@snopcezalesskii2022, proof of Theorem 1.2, (i) implies (ii) and (vi)].

**Cohomological test.** With degree-one generators $a_v$, the cohomology algebra is
$$
A=H^*(G_\Gamma,\mathbb F_p)
\cong\Lambda_{\mathbb F_p}(a_v:v\in V)/(a_va_w:\{v,w\}\notin E,\ v\ne w)
$$
[@cassellaquadrelli2021, Definition 3.3, Proposition 3.4 and Theorem 5.1]. It is Koszul for every $\Gamma$, but universally Koszul exactly under condition 1 [@cassellaquadrelli2021, Theorem 5.2 and §3.3]. Here universal Koszulity means that $I:(b)=\{a\in A:ab\in I\}$ is generated in degree one whenever $I$ is generated in degree one and $b\in A_1\setminus I_1$ [@cassellaquadrelli2021, Definition 2.4]. The equivalence with Galois realizability is explicitly [@cassellaquadrelli2021, Corollary 1.4].

For $C_4$, $G_\Gamma=F_2\times F_2$ with $F_2$ free pro-$p$ of rank two [@snopcezalesskii2022, proof of Theorem 1.2, (iii) and (iv) imply (i)]. At $p=2$ this is the [example passing unipotent and Massey tests](cohomological-tests-do-not-characterize-galois-groups.md).
