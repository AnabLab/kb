---
title: Chabauty–Kim and locally geometric Galois sections
kind: theorem
summary: 'Betts–Kumpitsch–Lüdtke show that Kim’s conjecture over a density-one set of primes implies the locally geometric section conjecture over Q. They prove the refined conjecture for the thrice-punctured line over Z[1/2] at every odd prime.'
tags: [curves, number-fields, fundamental-groups, section-conjecture, hodge-theory]
edges:
  - {to: section-conjecture, label: addresses, note: "The conclusion concerns sections induced by points at every completion; it does not establish that every section has this property."}
  - {to: refined-selmer-schemes, label: uses, note: "The affine version uses their refined Chabauty–Kim loci [@bettskumpitschludtke2026, Theorem A and Definition 2.16]."}
  - {to: descent-obstructions-for-galois-sections, label: uses, note: "Harari–Stix interpolation identifies the image of localization with the finite descent locus [@bettskumpitschludtke2026, proof of Theorem 2.7]."}
---

**Sections.** Write $\mathrm{Sec}(X/K)$ for sections of $\pi_1(X)\to G_K$ modulo geometric conjugacy. For a smooth projective geometrically connected curve $X/K$ over a number field, a *Selmer section* is one induced by a point of $X(K_v)$ at every place $v$ [@bettskumpitschludtke2026, Definition 1.1].

**Theorem (Betts–Kumpitsch–Lüdtke, preprint).** Let $X/\mathbb Q$ be smooth projective of genus at least $2$, with $X(\mathbb Q)\ne\varnothing$. If its full Chabauty–Kim locus satisfies
$$X(\mathbb Q_p)_\infty=X(\mathbb Q)$$
for every $p$ in a set of Dirichlet density $1$, then every Selmer section comes from a unique rational point [@bettskumpitschludtke2026, Theorem 1.4]. The subscript $\infty$ uses the entire pro-unipotent fundamental group [@bettskumpitschludtke2026, Definition 2.16]. This is a conditional implication from the [Kim conjecture](kim-nonabelian-tate-shafarevich-conjecture.md), without a claim that arbitrary sections are Selmer.

**Descent mechanism.** Their proof uses Harari–Stix interpolation, localization injectivity, and a theorem of the diagonal: the finite descent locus maps into each refined Chabauty–Kim locus, and confinement to a finite subscheme at density-one many primes forces a diagonal rational point [@bettskumpitschludtke2026, Theorems 2.3, 2.7 and 2.9; Lemma 2.19 and Corollary 2.20].

**Computed affine case.** For $\mathcal Y=\mathbb P^1_{\mathbb Z[1/2]}\setminus\{0,1,\infty\}$ and every odd prime $p$,
$$\mathcal Y(\mathbb Z_p)^{\min}_{\{2\},\infty}=\{2,-1,1/2\}$$
[@bettskumpitschludtke2026, Theorem B and Corollary 5.17]. Consequently, sections induced by rational local points at $2$ and $\infty$, and integral local points elsewhere, are precisely those three point sections [@bettskumpitschludtke2026, Definition 1.5 and Theorem C]. The locus here is refined; this does not assert the same computation for the unrefined $S$-integral loci.
