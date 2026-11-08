---
title: Recovering cyclotomic orientations from normal abelian subgroups
kind: theorem
summary: 'For a 1-smooth pro-p pair of generator rank at least two, with orientation in 1+4Z2 at p=2, the theta-center is the unique maximal closed abelian normal subgroup. When nontrivial, its conjugation action determines the orientation.'
tags: [galois-groups, galois-cohomology, pro-p-groups, reconstruction-algorithms]
edges:
  - {to: one-smooth-oriented-pro-p-group, label: uses, note: "the definitions of 1-smoothness and the theta-center"}
  - {to: kummerian-obstruction-to-galois-realizability, label: uses, note: "only the Galois case, where the cyclotomic pair is 1-smooth [@quadrelli2022smooth, Theorem 2.8]"}
  - {to: galois-characterization-of-henselianity, label: analogous-to, note: "Normal abelian subgroups detect valuations there; here their conjugation action recovers an orientation."}
  - {to: p-rigid-fields, label: analogous-to, note: "There scalar conjugation gives a semidirect-product description; here it recovers the orientation from a normal subgroup."}
---

**Setting.** Let $G$ be pro-$p$ and $\theta:G\to1+p\mathbb Z_p$ continuous, with $\theta(G)\subseteq1+4\mathbb Z_2$ if $p=2$. Assume $(G,\theta)$ is [1-smooth](one-smooth-oriented-pro-p-group.md) and $d(G)\ge2$, where $d(G)$ is the minimal number of topological generators.

**Theorem (Quadrelli).** The group $G$ is torsion-free. Its $\theta$-center

$$
A_\theta=\{a\in\ker\theta: gag^{-1}=a^{\theta(g)}\text{ for every }g\in G\}
$$

is its unique maximal closed abelian normal subgroup, and $G/A_\theta$ is torsion-free. Finite generation is not required [@quadrelli2022smooth, equation (2.2), Remark 2.5 and Theorem 3.5].

**Recovery (deduced here).** If $A_\theta\ne1$, the abstract topological group $G$ determines $\theta$ among orientations satisfying the setting. Indeed, for another such $\theta'$, the theorem identifies $A_{\theta'}=A_\theta$, since both are the unique maximal closed abelian normal subgroup. Choose $1\ne a\in A_\theta$. For every $g\in G$,

$$
a^{\theta(g)}=gag^{-1}=a^{\theta'(g)}.
$$

Since $G$ is torsion-free, $\overline{\langle a\rangle}\cong\mathbb Z_p$ and $\lambda\mapsto a^\lambda$ is injective. Thus $\theta(g)=\theta'(g)$. Explicitly, recover $\theta(g)$ as the unique exponent $\lambda$ with $gag^{-1}=a^\lambda$; the result is independent of the chosen nonidentity $a$.

**Galois case.** For $\operatorname{char}F\ne p$ with $\mu_p\subset F$ and also $\sqrt{-1}\in F$ if $p=2$, its cyclotomic pair is 1-smooth [@quadrelli2022smooth, §2.2 and Theorem 2.8]. Thus this recovery applies to $G_F(p)$ when $d(G_F(p))\ge2$ and it has a nontrivial closed abelian normal subgroup.

**Limits.** Free pro-$p$ groups of rank at least two admit arbitrary 1-smooth orientations [@quadrelli2022smooth, Example 2.4(a)]. On $\mathbb Z_p$ this holds despite the group itself being abelian and normal [@quadrelli2022smooth, Remarks 2.7 and 3.6]. The rank and nontriviality hypotheses cannot simply be omitted.
