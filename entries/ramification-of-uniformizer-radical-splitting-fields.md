---
title: Ramification of uniformizer radical splitting fields
kind: theorem
summary: 'For every prime p and finite K/Q_p, the splitting field of X^(p^m)-pi, with pi a uniformizer, has last upper ramification break e(m+1/(p-1)). The polynomial ramification criterion proves this also at p=2, without adjoining roots of unity to the base.'
tags: [local-fields, ramification]
edges:
  - {to: ramification-filtration, label: uses, note: 'Normality of absolute upper groups identifies the cutoff for a root field with that of its Galois closure.'}
---

**Statement (deduced here).** Let $p$ be any prime, $K/\mathbb Q_p$ finite, $v_K(K^\times)=\mathbb Z$, $e=v_K(p)$ and $\pi$ a uniformizer. For $m\ge1$, choose $a$ with $a^{p^m}=\pi$ and a primitive $p^m$th root of unity $\zeta_{p^m}$. The splitting field
$$S_m=K(a,\zeta_{p^m})$$
has last upper ramification break, in Serre numbering,
$$b_m=e\left(m+\frac1{p-1}\right).$$
Thus $\operatorname{Gal}(S_m/K)^{b_m}\ne1$ and $\operatorname{Gal}(S_m/K)^u=1$ for every $u>b_m$. This includes $p=2$, arbitrary ramification of $K$, and bases not containing $\mu_p$.

**Polynomial criterion used.** For a separable Eisenstein polynomial $f$ of degree $d\ge2$ over a complete discretely valued field $N$ with perfect residue field of positive characteristic, with roots $z_1,\ldots,z_d$, put
$$s=\sum_{k\ne i}v_N(z_k-z_i)=v_N(f'(z_i)),\qquad
\alpha=\max_{k\ne i}v_N(z_k-z_i).$$
These quantities are independent of $i$. Hattori's general criterion says that $G_N^{(j)}\subseteq G_{N(z_i)}$ exactly when $j>s+\alpha$, where $G_N^{(j)}=G_N^{j-1}$ [@hattori2008ramification, Lemma 5.2 and Corollary 5.3, pp. 23–24; Introduction, p. 1]. The local-field hypotheses are restated before Lemma 5.2 and impose no odd-prime condition. The equality uses $\mathcal O_N[T]/(f)=\mathcal O_{N(z_i)}$; the inequality alone for a nonmaximal order would not suffice.

**Proof.** Put $d=p^m$ and $f(T)=T^d-\pi$. This is Eisenstein, so $F=K(a)$ is totally ramified of degree $d$. Moreover $\mathcal O_F=\mathcal O_K[a]$: in the unique expansion $\sum_{i=0}^{d-1}c_i a^i$, the terms have distinct valuation classes modulo $d$ for the normalized valuation of $F$. An integral sum therefore has all $c_i\in\mathcal O_K$. The algebra is finite flat and a relative complete intersection, as required by the criterion.

Extend $v_K$ to $\bar K$. For a primitive $p^k$th root of unity $\xi$, one has
$$v_K(1-\xi)=\frac{e}{p^{k-1}(p-1)}.$$
Indeed $\Phi_{p^k}(1)=p$, and the factors $1-\xi^h$ with $p\nmid h$ have equal valuation: their ratios with $1-\xi$ are integral units. The roots of $f$ are $a\zeta_{p^m}^i$, so their distance multiset is independent of $i$, and
$$s=me+\frac{d-1}{d},\qquad
\alpha=\frac1d+\frac{e}{p-1}.$$
The first identity follows from $f'(a)=d a^{d-1}$; the maximum in the second is attained when the ratio of the two roots has order $p$. Hence $s+\alpha=1+b_m$.

The criterion gives $G_K^u\subseteq G_F$ exactly when $u>b_m$. Each $G_K^u$ is normal in $G_K$, so containment in $G_F$ is equivalent to containment in the intersection of all its conjugates, which is $G_{S_m}$. Compatibility of upper numbering with quotients now gives both assertions, including nontriviality at $u=b_m$. $\square$
