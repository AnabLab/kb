---
title: Kummer-faithfulness from bounded ramification
kind: theorem
summary: 'Ozeki–Taguchi show that bounded upper ramification at each finite place makes a Galois extension of a number field highly Kummer-faithful. Their bounded-torsion constructions give Kummer-faithful fields that are not sub-p-adic for any prime.'
tags: [number-fields, ramification, kummer-theory, galois-cohomology]
edges:
  - {to: ramification-filtration, label: uses}
  - {to: kummer-faithful-field, label: uses}
  - {to: cohomological-kummer-faithfulness, label: analogous-to, note: 'High Kummer-faithfulness requires vanishing with every Tate twist away from weight zero; the quasi-high condition recorded there requires only the untwisted positive-degree case [@ozekitaguchi2022, arXiv v1, Definition 2.6, p. 4].'}
---

**Cohomological condition.** A characteristic-zero field $K$ is *highly Kummer-faithful* if
$$H^i_{\mathrm{\acute et}}(X_{\bar L},\mathbb Q_\ell(r))_{G_L}=0$$
for every finite $L/K$, proper smooth $X/L$, prime $\ell$, and integers $i\ge0,r$ with $i\ne2r$. Subscripts mean coinvariants [@ozekitaguchi2022, arXiv v1, Definition 2.6, p. 4].

**Ramification criterion.** Let $K/k$ be Galois, with $k$ a number field. Suppose that, at each finite place $v$ of $k$, a decomposition group $D_w\subseteq\operatorname{Gal}(K/k)$ has $D_w^{c_v}=1$ for some real $c_v>0$, in [upper numbering](ramification-filtration.md). The bounds may depend on $v$. Then $K$ is highly Kummer-faithful [@ozekitaguchi2022, arXiv v1, Definition 2.15 and Corollary 2.16, p. 6]. For Galois extensions of Kummer-faithful fields, even quasi-high Kummer-faithfulness implies [Kummer-faithfulness](kummer-faithful-field.md) [@ozekitaguchi2022, arXiv v1, Proposition 2.9, p. 4].

**Bounded-torsion examples.** Fix $g\ge1$ and nonnegative integers $m_\ell$, one per prime. Adjoin to $k$ the coordinates of $A[\ell^{m_\ell}]$ for every semi-abelian $A/k$ of dimension at most $g$ and every $\ell$. The resulting field $k_{g,\mathbf m}$ satisfies the criterion [@ozekitaguchi2022, arXiv v1, Theorem 3.3, pp. 7–8]. If infinitely many $m_\ell$ are positive, it is Kummer-faithful but not sub-$p$-adic for any $p$ [@ozekitaguchi2022, arXiv v1, Remark 3.4, p. 8].
