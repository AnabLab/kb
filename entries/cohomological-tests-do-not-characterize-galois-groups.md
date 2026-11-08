---
title: Unipotent and Massey tests do not characterize Galois groups
kind: theorem
summary: 'The product of two free pro-2 groups of rank two has Koszul cohomology, satisfies the kernel-unipotent property and strong Massey vanishing at every length, but is not the maximal pro-2 Galois group of any field.'
tags: [galois-groups, galois-cohomology, pro-p-groups, counterexample]
edges:
  - {to: kernel-unipotent-conjecture, label: analogous-to, note: "This group satisfies every asserted equality, but is not Galois realizable; the conjecture asserts necessity only."}
  - {to: strong-massey-vanishing, label: uses, note: "the definition of the property satisfied by the example"}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "Its restriction on the cohomology of closed subgroups supplies the obstruction to realizability described below."}
---

**Statement.** Let $S$ be the free pro-$2$ group on two generators, and put $G=S\times S$. Hamza, Maire, Mináč and Tân's 2025 preprint records that:

- $H^*(G,\mathbb F_2)$ is Koszul;
- $G$ satisfies the [kernel-unipotent equality](kernel-unipotent-conjecture.md) for every matrix size;
- $G$ satisfies [strong Massey vanishing](strong-massey-vanishing.md) at every length;
- $G$ is not isomorphic to $G_F(2)$ for any field $F$.

These are the assertions of [@hamzamaireminactan2025, §4.5 and Proposition 4.16, pp. 27–28]. Here Koszul means that the trivial module over the graded cohomology algebra admits a graded free resolution whose term in homological degree $i$ is generated in internal degree $i$.

**A subgroup obstruction.** A pro-$p$ group is called *Bloch–Kato* if every closed subgroup has mod-$p$ cohomology generated in degree one with relations in degree two. Maximal pro-$p$ Galois groups over fields containing a primitive $p$th root of unity have this property [@quadrelli2012blochkato, §1–2, pp. 1–3]. Quadrelli proves that the product of two rank-two free pro-$p$ groups fails it: his proof constructs a closed subgroup $\Gamma$ with

$$\dim_{\mathbb F_p}H^1(\Gamma,\mathbb F_p)=3,\qquad \dim_{\mathbb F_p}H^2(\Gamma,\mathbb F_p)=\infty,$$

and concludes that its cohomology is not quadratic [@quadrelli2012blochkato, Theorem 5.6 and its proof, pp. 14–15].

**An obstruction already in cup products.** A bilinear map $b$ has the *common slot property* if every equality $b(v,u)=b(v',u')$ admits $w$ with

$$
b(v,w)=b(v',w)=b(v,u).
$$

Every mod-$2$ Galois cup product over a field of characteristic different from $2$ has this property [@baronefrat2026, Definition 10.3 and Example 10.4, p. 18]. Here $G$ is the [right-angled Artin pro-$2$ group of a four-cycle](right-angled-artin-pro-p-galois-groups.md) [@snopcezalesskii2022, proof of Theorem 1.2, p. 12]. Bar-On and Efrat show that its cup product fails the common slot property. In particular, $(H^1(G),H^2(G),\cup,0)$ is not isomorphic to $(H^1(F),H^2(F),\cup,(-1)_F)$ for any field $F$ of characteristic different from $2$ [@baronefrat2026, Theorem 10.5 and its proof, pp. 18–19]. This supplies the limitation in [cofinality of Galois cup products](cofinality-of-galois-cup-products.md).

**Role.** The positive unipotent, Massey and Koszul tests do not suffice for Galois realizability. The example does not refute the kernel-unipotent conjecture, which gives a necessary condition, or the general Massey vanishing conjecture.
