---
title: Fontaine's upper ramification bound for finite flat torsion
kind: theorem
summary: A finite flat group scheme killed by p^n has trivial Galois action above upper break e(n+1/(p-1))-1. The bound applies to crystalline lattices of weights 0 and 1 and is attained at every level over every p-power cyclotomic field.
tags: [local-fields, ramification, hodge-theory]
edges:
  - {to: ramification-filtration, label: uses, note: 'The bound uses Serre upper numbering, with inertia at index zero.'}
  - {to: crystalline-lattices-and-p-divisible-groups, label: uses, note: 'The integral crystalline corollary realizes each stable lattice as the Tate module of a p-divisible group.'}
  - {to: finite-flat-group-scheme-ramification-bounds, label: analogous-to, note: 'That entry bounds different exponents from above and below; here the cutoff controls the full upper filtration.'}
---

**Setting.** Let $K$ be a complete discretely valued field of mixed characteristic $(0,p)$ with perfect residue field, and let $e=v_K(p)$ for the integer-normalized valuation. Use the [upper ramification groups](ramification-filtration.md) $G_K^u$ in Serre's convention.

**Theorem (Fontaine).** If $J/\mathcal O_K$ is finite flat and commutative, with $p^nJ=0$ for an integer $n\ge1$, then
$$
G_K^u\text{ acts trivially on }J(\bar K)
\qquad\text{for }u>c_n:=e\left(n+\frac1{p-1}\right)-1.
$$
This holds for every prime, including $2$ [@fontaine1985, Theorem A, p. 515; §2.1, Theorem 1, pp. 525–526].

**Indexing and the different.** Fontaine writes $G^{(v)}=G^{v-1}$ and gives the cutoff $v>e(n+1/(p-1))$ [@fontaine1985, Introduction, p. 515; §1.2(i), p. 518]. Thus the displayed $-1$ is required in Serre numbering. For the splitting field $L=\bar K^{\ker(G_K\to\operatorname{Aut}(J(\bar K)))}$, the theorem equivalently gives $\operatorname{Gal}(L/K)^u=1$ for $u>c_n$. Its different satisfies
$$v_0(\mathfrak D_{L/K})<n+\frac1{p-1},\qquad v_0(p)=1$$
[@fontaine1985, Corollary, p. 516].

**Integral crystalline consequence (deduced here).** Let $T$ be a finite free $\mathbb Z_p$-module with continuous $G_K$-action. If $T\otimes\mathbb Q_p$ is crystalline with Hodge–Tate weights in $\{0,1\}$, taking $\mathbb Q_p(1)$ to have weight $1$, then $G_K^u$ acts trivially on $T/p^nT$ whenever $u>c_n$.

*Proof.* The [integral classification](crystalline-lattices-and-p-divisible-groups.md) realizes $T$ as $T_pF$ for a $p$-divisible group $F/\mathcal O_K$ [@scholzeweinstein2013moduli, Corollary 6.2.3, p. 58]. The projection from the Tate module identifies $T/p^nT$ with $F[p^n](\bar K)$: multiplication by $p$ is surjective on these geometric torsion points. Apply Fontaine's theorem to $F[p^n]$. Thus nontrivial action at even one such pair $(n,u)$ obstructs this crystalline weight range. $\square$

**Sharpness at every level (proved here).** For every prime $p$ and integer $r\ge1$, put
$$K_r=\mathbb Q_p(\zeta_{p^r}),\qquad e_r=p^{r-1}(p-1).$$
There is a single rank-two crystalline lattice $T$ over $K_r$, of weights $0,1$, such that for every $n\ge1$ the splitting field of $T/p^nT$ is $K_{r+n}$ and its last upper ramification break is exactly
$$c_{r,n}=e_r\left(n+\frac1{p-1}\right)-1.$$
Consequently the cutoff is attained by the $p^n$-torsion of a height-two $p$-divisible group over $\mathcal O_{K_r}$, for every $p,r,n$. This includes $K_1=\mathbb Q_2$ when $p=2$.

*The lattice.* Let $V=\mathbb Q_pe_0\oplus\mathbb Q_pe_1$, with $g(e_0)=e_0$ and $g(e_1)=\chi_p(g)e_1$, where $\chi_p$ is the cyclotomic character of $G_{K_r}$. This is the rational Tate module of $\mu_{p^\infty}\oplus(\mathbb Q_p/\mathbb Z_p)_{\mathcal O_{K_r}}$, hence crystalline with weights $0,1$ by the same classification. Put
$$f_1=e_1,\qquad f_2=e_0+p^{-r}e_1,\qquad T=\mathbb Z_pf_1\oplus\mathbb Z_pf_2.$$
Then
$$
\rho_T(g)=
\begin{pmatrix}
\chi_p(g)&(\chi_p(g)-1)/p^r\\
0&1
\end{pmatrix}.
$$
Since $G_{K_r}$ fixes $\mu_{p^r}$, one has $\chi_p(g)\equiv1\pmod{p^r}$, so $T$ is stable. Its action modulo $p^n$ is trivial exactly when $\chi_p(g)\equiv1\pmod{p^{r+n}}$. Thus its splitting field is $L=K_{r+n}$. The integral classification realizes this fixed $T$ as $T_pF$ for a height-two $p$-divisible group $F/\mathcal O_{K_r}$ [@scholzeweinstein2013moduli, Corollary 6.2.3, p. 58]. Then $F[p^n](\bar K_r)\cong T/p^nT$, and $F[p^n]$ is finite flat of rank $p^{2n}$ and exponent $p^n$.

*The ramification calculation.* For every $m\ge1$, the polynomial
$$\Phi_{p^m}(1+X)=\sum_{j=0}^{p-1}(1+X)^{jp^{m-1}}$$
has constant coefficient $p$ and reduces modulo $p$ to $X^{e_m}$. It is Eisenstein, so $K_m/\mathbb Q_p$ is totally ramified of degree $e_m$, with uniformizer $\zeta_{p^m}-1$. Moreover $\mathcal O_{K_m}=\mathbb Z_p[\zeta_{p^m}-1]$: the terms in its power basis, with coefficients in $\mathbb Q_p$, have distinct valuation classes modulo $e_m$, so an integral sum has integral coefficients.

Choose $\zeta=\zeta_{p^{r+n}}$ and $\pi=\zeta-1$. The group $H=\operatorname{Gal}(L/K_r)$ consists of $\sigma_a(\zeta)=\zeta^a$ for $a\equiv1\pmod{p^r}$, modulo $p^{r+n}$, and has order $p^n$. For a nonidentity element put $s=v_p(a-1)$, so $r\le s\le r+n-1$. Since $\zeta^{a-1}$ is primitive of order $p^{r+n-s}$, the preceding uniformizer calculation and the relative ramification index give
$$v_L(\sigma_a(\pi)-\pi)=v_L(\zeta^{a-1}-1)=p^s.$$
The ring $\mathcal O_L=\mathcal O_{K_r}[\pi]$ is generated by $\pi$, so this valuation determines the lower groups. Their breaks are $p^r-1,\ldots,p^{r+n-1}-1$. The group is all of $H$ through the first break, and for $1\le j\le n-1$ its index on
$$p^{r+j-1}-1<x\le p^{r+j}-1$$
is $p^j$. It has order $p$ at the last break and is trivial above it. Hence the last upper break is
$$
\varphi_{L/K_r}(p^{r+n-1}-1)
=p^r-1+\sum_{j=1}^{n-1}\frac{p^{r+j}-p^{r+j-1}}{p^j}
=p^r-1+(n-1)e_r
=c_{r,n},
$$
where the sum is empty for $n=1$. Thus $G_{K_r}^{c_{r,n}}$ acts nontrivially on $T/p^nT$, whereas every $G_{K_r}^u$ with $u>c_{r,n}$ acts trivially. The same lattice attains the endpoint at every level, even though its rational representation splits as $\mathbb Q_p\oplus\mathbb Q_p(1)$. $\square$
