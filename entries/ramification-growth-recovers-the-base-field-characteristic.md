---
title: Ramification growth recovers a norm-field tower's base characteristic
kind: theorem
summary: 'For a totally ramified p-adic Lie tower, upper ramification index growth on its norm field recovers the base characteristic and absolute ramification index. For an action of $\mathbb Z_p$, a finite inequality between jumps can certify characteristic zero.'
tags: [local-fields, ramification, reconstruction-algorithms]
edges:
  - {to: fontaine-wintenberger-field-of-norms, label: uses, note: 'Retains the tower action and its ramification filtration.'}
  - {to: ramification-filtration, label: uses}
  - {to: abelian-towers-from-field-of-norms-actions, label: uses, note: 'Supplies an inverse tower for every abelian action considered below.'}
---

**Data.** Let $k$ be finite of characteristic $p$, $X=k((t))$, and $G\subseteq\operatorname{Aut}_k(X)$ a closed compact $p$-adic Lie group of dimension $d\ge1$. Assume $(X,G)$ is the norm field with action of a totally ramified Galois tower $E/F$, where $F$ is a local field with residue field $k$. Normalize $v_F(F^\times)=\mathbb Z$, $v_X(t)=1$, and put
$$
i(g)=v_X(g(t)-t)-1,\qquad
G_s=\{g:i(g)\ge s\},\qquad
\varphi_G(s)=\int_0^s\frac{dr}{[G:G_r]},\qquad
G^u=G_{\varphi_G^{-1}(u)}.
$$
The inverse exists, and these filtrations match the tower's [ramification filtrations](ramification-filtration.md) [@keating2019numerology, §2 and Theorem 2.2, pp. 2–4].

**Theorem (Keating).** With $e_F=v_F(p)$, interpreted as $\infty$ in characteristic $p$,
$$
\ell(G):=\lim_{u\to\infty}\frac{\log_p[G:G^u]}{u}
=\frac d{e_F}.
$$
Thus $\ell(G)=0$ detects characteristic $p$; otherwise $e_F=d/\ell(G)$ [@keating2019numerology, Theorem 3.1, pp. 4–5]. The index here uses **upper** numbering. For abelian $G$, the [inverse-tower equivalence](abelian-towers-from-field-of-norms-actions.md) supplies $E/F$; its existence remains a hypothesis for general $G$.

**A finite certificate for $G\cong\mathbb Z_p$.** Choose a topological generator $\sigma$. Its lower jumps $b_n=i(\sigma^{p^n})$ give upper jumps by
$$
u_0=b_0,\qquad u_n-u_{n-1}=p^{-n}(b_n-b_{n-1}).
$$
If $u_n<p u_{n-1}$ for some $n\ge1$, then
$$
\operatorname{char}F=0,\qquad e_F=u_n-u_{n-1},\qquad
b_j-b_{j-1}=e_Fp^j\quad(j\ge n)
$$
[@keating2013fieldofnorms, slide 16, “Ramification in Zp-Subgroups of A(K)”]. This is a certificate from a finite initial segment, not a claim that failure to find one certifies characteristic $p$.

**Example (proved here).** Let $p$ be odd and set $\sigma(t)=(1+t)^{1+p}-1$ over $\mathbb F_p$. Then
$$
b_n=p^{n+1}-1,\qquad u_n=(n+1)(p-1),
$$
so the certificate at $n=1$ gives $e_F=p-1$.

Indeed composition multiplies the exponents of $1+t$. Binomial expansion inductively gives $(1+p)^{p^n}=1+p^{n+1}c_n$ with $p\nmid c_n$: raising $1+p^rc$ to the $p$th power, for $r\ge1$, has first term $p^{r+1}c$ and all remaining terms divisible by $p^{r+2}$. In characteristic $p$,
$$
(1+t)^{(1+p)^{p^n}}=(1+t)(1+t^{p^{n+1}})^{c_n},
$$
whose first term beyond $1+t$ has degree $p^{n+1}$. This proves the formula for $b_n$ and shows $\sigma$ has infinite order. Its closed generated subgroup is procyclic pro-$p$, hence $\mathbb Z_p$, since every substitution $t\mapsto t+O(t^2)$ has $p$-group image on each truncated ring. The recursion gives $u_n$, and $2(p-1)<p(p-1)$ gives the certificate. $\square$

The reconstruction uses the action on the valued norm field; the abstract group $G$ alone supplies no jump sequence.
