---
title: Detecting p-rigidity and describing maximal p-extensions by radicals
kind: theorem
summary: 'For odd p and a field F containing a primitive pth root of unity, p-rigidity is detected by equality of two third-layer Galois extensions. When it holds, a basis of pth-power classes gives F(p) by non-nested radicals, and its Galois group has an explicit cyclotomic semidirect-product structure.'
tags: [galois-groups, pro-p-groups, galois-cohomology, reconstruction-algorithms]
edges:
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "The cohomological characterization uses quadraticity of Galois cohomology [@cheboluminacquadrelli2015, proof of Corollary 3.19]."}
  - {to: elementary-type-conjecture, label: addresses, note: "The finitely generated case is a known case of elementary type [@minacpasiniquadrellitan2021, §6.1]."}
  - {to: abelian-by-central-galois-cohomology, label: analogous-to, note: "Both extract information from early Galois quotients; here equality of two layers detects an explicit structure for the full maximal pro-p group."}
---

**Setting.** Let $p$ be odd, let $F$ contain a primitive $p$th root of unity, and assume $F^\times/F^{\times p}\ne0$. Write $F(p)$ for its maximal pro-$p$ extension and $G=\mathrm{Gal}(F(p)/F)$. The field is *$p$-rigid* if, for every $a\in F^\times\setminus F^{\times p}$,

$$
N_{F(\sqrt[p]{a})/F}\bigl(F(\sqrt[p]{a})^\times\bigr)
\subseteq\bigcup_{j=0}^{p-1}a^jF^{\times p}
$$

[@cheboluminacquadrelli2015, §3, definition following (3.1)].

**Detection in early layers (Chebolu–Mináč–Quadrelli).** Put $F^{(2)}=F(\sqrt[p]{a}:a\in F^\times)$. Let $F^{\{3\}}$ be the compositum of all cyclic degree-$p$ extensions of $F^{(2)}$, and let $F^{(3)}$ be the compositum of those that are also Galois over $F$. Then

$$
F\text{ is }p\text{-rigid}\quad\Longleftrightarrow\quad F^{(3)}=F^{\{3\}}
$$

[@cheboluminacquadrelli2015, Theorem A]. Equivalently on the cohomological side, cup product identifies $H^*(G,\mathbb F_p)$ with the exterior algebra on $H^1(G,\mathbb F_p)$ exactly when $F$ is $p$-rigid [@cheboluminacquadrelli2015, Corollary 3.19].

**Explicit extension and group.** Suppose $F$ is $p$-rigid, and let $k\ge1$ be maximal with $\mu_{p^k}\subseteq F$, allowing $k=\infty$. For finite $k$, choose representatives $\zeta_{p^k},a_i$ ($i\in I$) of a basis of $F^\times/F^{\times p}$; for $k=\infty$, choose representatives $a_i$ alone. Choose compatible roots in $F(p)$. Then

$$
F(p)=\bigcup_{n\ge1}F\bigl(\zeta_{p^{k+n}},a_i^{1/p^n}:i\in I\bigr),
$$

omitting the displayed root of unity when $k=\infty$ [@cheboluminacquadrelli2015, §4.2, basis convention before Theorem 4.7, and Corollary 4.9(b)]. Thus the radicals have radicands in $F$.

Moreover,

$$
G\cong
\begin{cases}
\left(\prod_{i\in I}\mathbb Z_p\right)\rtimes\mathbb Z_p,&k<\infty,\\
\prod_{i\in I}\mathbb Z_p,&k=\infty.
\end{cases}
$$

For finite $k$, a generator $\sigma$ of the right factor acts on the left factor by $\sigma\tau\sigma^{-1}=\tau^{1+p^k}$; that right factor identifies with $\mathrm{Gal}(F(\mu_{p^\infty})/F)$ [@cheboluminacquadrelli2015, Theorem 4.10(b) and following discussion through (4.6)]. No finite-generation hypothesis is needed for these formulas. With $F^\times/F^{\times p}$ finite, this supplies the $p$-rigid case of the [elementary type conjecture](elementary-type-conjecture.md) [@minacpasiniquadrellitan2021, §6.1].
