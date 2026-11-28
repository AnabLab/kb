---
title: Fontaine's ramification conjecture for cohomology with good reduction
kind: problem
summary: 'Fontaine conjectured that for X proper and smooth over O_K, G_K^u acts trivially on H^i(X_Kbar, Z/p^n) for u > e(n+i/(p-1))-1 in Serre numbering, and that the different of the field cut out is below e(n+i/(p-1)). The case i = 1 is proved for every n, e and p.'
tags: [local-fields, ramification, hodge-theory, galois-representations]
edges:
  - {to: ramification-filtration, label: uses, note: 'Fontaine states the conjecture in his numbering $G^{(u)}=G^{u-1}$.'}
  - {to: fontaine-ramification-bound-for-finite-flat-torsion, label: motivated-by, note: 'Fontaine proposes it right after his theorem on finite flat group schemes, which he says gives the case i = 1.'}
---

**Data.** Let $K$ be a complete discretely valued field of characteristic $0$ whose residue field $k$ is perfect of characteristic $p$. Normalize $v_K(K^\times)=\mathbb Z$ and put $e=v_K(p)$. Let $X$ be a proper smooth scheme over $\mathcal O_K$, and let $i\ge0$ and $n\ge1$ be integers. Let $L_{n,i}$ be the field cut out by the action of $G_K$ on $H^i_{\mathrm{\acute et}}(X_{\bar K},\mathbb Z/p^n\mathbb Z)$. For a finite Galois extension $L/K$, Fontaine writes $u_{L/K}$ for the largest $u$ with $\operatorname{Gal}(L/K)^{(u)}\ne1$, where $G^{(u)}=G^{u-1}$ in Serre's [upper numbering](ramification-filtration.md) [@fontaine1985, §1.1, pp. 517–518; §1.2, Remark i), p. 518]. Put $u_{n,i}=u_{L_{n,i}/K}$ and $d_{n,i}=v_K(\mathfrak D_{L_{n,i}/K})$.

**Conjecture (Fontaine).**
$$u_{n,i}\le e\left(n+\frac{i}{p-1}\right)\qquad\text{and}\qquad d_{n,i}<e\left(n+\frac{i}{p-1}\right)$$
[@fontaine1985, §2.2, Remark b), p. 526]. In Serre numbering the first inequality says that $G_K^u$ acts trivially on $H^i_{\mathrm{\acute et}}(X_{\bar K},\mathbb Z/p^n\mathbb Z)$ for every $u>e(n+i/(p-1))-1$. Čoupek states it in this form, with $G_K^{(\mu)}$ acting trivially for $\mu>e(n+i/(p-1))$ [@coupek2026crystalline, §1, p. 142].

The second inequality follows from the first. Fontaine shows $v_K(\mathfrak D_{L/K})=u_{L/K}-i_{L/K}$ [@fontaine1985, Proposition 1.3, p. 518], and $i_{L/K}>0$ when $L/K$ is ramified. The [Caruso–Liu conjecture](caruso-liu-ramification-conjecture.md) entry writes out this step.

**Motivation.** Fontaine's theorem gives the bound $e(n+1/(p-1))$ for the $p^n$-torsion of a finite flat group scheme, and Fontaine says that it implies the case $i=1$ [@fontaine1985, §2.2, Remark b), p. 526]. He also notes that, if the conjecture holds, then for $U=H^i_{\mathrm{\acute et}}(X_{\bar K},\mathbb Z_p)/\text{torsion}$ the constant $c$ in Sen's estimate $u_{L_n/K}\le e(n+c)$, where $L_n$ is the field cut out by $U/p^nU$, can be taken to be $i/(p-1)$, independent of $X$ [@fontaine1985, §2.2, Remark c), p. 526].

**Status.**

- *Degree one.* The case $i=1$ holds for every $n$, $e$ and $p$; see [the degree-one theorem](ramification-bound-for-degree-one-cohomology-with-good-reduction.md), which writes out Fontaine's deduction through the Picard scheme.
- *Absolutely unramified bases.* Čoupek reports that Fontaine proved the case $e=n=1$, $i<p-1$, and Abrashkin the case $e=1$, $i<p-1$ with $n$ arbitrary, both through Fontaine–Laffaille modules [@coupek2026crystalline, §1, p. 142].
- *Logarithmic bounds.* For $n=1$ and every $e$ and $i$, Čoupek proves a [prismatic bound](prismatic-ramification-bound-for-mod-p-cohomology.md) for the étale cohomology of the adic generic fibre of a smooth proper formal scheme: $G_K^{(\mu)}$ acts trivially for $\mu>1+e\alpha+\max\{\beta,e/(p-1)\}$, with $\alpha=\lfloor\log_p\max\{ip/(p-1),(i-1)e/(p-1)\}\rfloor+1$ and $\beta=(iep/(p-1)-1)/p^\alpha$ [@coupek2026crystalline, Theorem 1.1, p. 142]. At $i=1$ this cutoff exceeds the conjectured one, by $1$ for odd $p$ and by $1+e$ for $p=2$. But $p^\alpha$ exceeds $ip/(p-1)$, so $\beta<e$, and the cutoff is at most $1+e+e\alpha\le1+2e+e\log_p\bigl(i\max\{p,e\}/(p-1)\bigr)$. For fixed $e$ and $p$ this is below the conjectured $e(1+i/(p-1))$ for all large $i$. For a scheme $X$ this gives the conjecture with $n=1$ in that range, once $H^i_{\mathrm{\acute et}}(X_{\bar K},\mathbb Z/p\mathbb Z)$ is identified with the cohomology of the adic generic fibre of the $p$-adic completion of $X$; that comparison is not recorded here. Over unramified bases there is also a [Wach-module bound](wach-module-ramification-bound-for-mod-p-crystalline-representations.md), which is likewise logarithmic in $i$.
- *Open.* Čoupek describes the conjecture as partially proved [@coupek2026crystalline, §1, p. 142]. The sources opened here record no cases beyond those above, and in particular none with $n\ge2$, $i\ge2$ and $e\ge2$.
