---
title: Caruso's ramification bound for torsion semistable representations
kind: theorem
summary: 'For odd p, Caruso bounds the upper ramification of p^n-torsion quotients of semistable lattices with weights in [0,r] by e(n+a)+max(eb-p^(-n-a), e/(p-1)) in Serre numbering, where r/(p-1)=p^a b. This is part (1) of the Caruso–Liu conjecture. The bound is attained for r=1.'
tags: [local-fields, ramification, hodge-theory, galois-representations]
edges:
  - {to: caruso-liu-ramification-conjecture, label: addresses, note: 'Proves part (1). The source does not state part (2), on the different.'}
  - {to: ramification-bounds-for-torsion-semistable-representations, label: uses, note: 'The sketched proof is the Caruso–Liu argument with one lemma generalized. The cutoff here is never larger than theirs.'}
  - {to: ramification-filtration, label: uses, note: 'Stated in Fontaine numbering, G^{(mu)} = G^{mu-1} in Serre numbering.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: uses, note: 'The Tate module of the Tate curve with parameter a uniformizer is semistable, which gives the sharpness example for r = 1.'}
  - {to: fontaine-ramification-bounds-do-not-detect-crystallinity, label: uses, note: 'Its matrix formula for the Galois action on that Tate module identifies the field cut out by the p^n-torsion.'}
  - {to: ramification-of-uniformizer-radical-splitting-fields, label: uses, note: 'The exact last break of that field shows that the cutoff is attained for r = 1.'}
---

**Data.** As in the [Caruso–Liu bounds](ramification-bounds-for-torsion-semistable-representations.md): $p>2$, $K/\mathbb Q_p$ finite, $v_K(K^\times)=\mathbb Z$, $e=v_K(p)$, integers $n,r\ge1$, and $T=L/L'$ killed by $p^n$ for $G_K$-stable lattices $L'\subseteq L$ in a semistable representation with Hodge–Tate weights in $\{0,\ldots,r\}$, where $\mathbb Q_p(1)$ has weight $1$. Write $G_K^{(\mu)}=G_K^{\mu-1}$ for Fontaine's numbering of the [upper ramification groups](ramification-filtration.md).

**Theorem (Caruso).** Write
$$
\frac{r}{p-1}=p^{\alpha}\beta,\qquad \alpha\in\mathbb Z_{\ge0},\qquad \frac1p<\beta\le1.
$$
Then $G_K^{(\mu)}$ acts trivially on $T$ for every
$$
\mu>1+e(n+\alpha)+\max\left\{e\beta-\frac1{p^{n+\alpha}},\ \frac{e}{p-1}\right\}
$$
[@caruso2013phitau, Théorème 3.28, p. 48]. In Serre numbering, $G_K^u$ acts trivially on $T$ for $u>e(n+\alpha)+\max\{e\beta-p^{-(n+\alpha)},e/(p-1)\}$.

The source writes both $\alpha,\beta$ and $\alpha',\beta'$ for these two numbers. Caruso introduces the theorem as the statement of part (1) of the [Caruso–Liu conjecture](caruso-liu-ramification-conjecture.md), so its numbering is theirs [@caruso2013phitau, Introduction, p. 3; §3.4, p. 48].

**Proof in the source.** Caruso only sketches the proof. It follows Caruso–Liu with different quotients of Witt vectors. Its key input is a generalization of a lemma of theirs on the action of $\operatorname{Gal}(\bar K/K(\pi^{1/p^s}))$, with $\pi$ a uniformizer, valid for every integer $s>n-1+\log_p r$. The rest is said to be identical to their argument and is not written out [@caruso2013phitau, proof of Théorème 3.28, p. 49]. The sketch does not discuss the case $\beta=1$, where the written Caruso–Liu argument needs a shifted normalization (see the boundary case in their entry).

**Comparison with Caruso–Liu.** Their cutoff is the same expression computed from $nr/(p-1)$ instead of $r/(p-1)$. So the two agree for $n=1$, and in general the cutoff here is never larger. To see this, let $C(x)$ be the cutoff computed from $x=p^\alpha\beta$, for $x>1/p$.

- For $p^{\alpha-1}<x\le p^\alpha$ the exponent $\alpha$ is fixed, and $C$ is non-decreasing in $x$.
- At $x=p^\alpha$, where $\beta=1$, one has $C=1+e(n+\alpha+1)-p^{-(n+\alpha)}$. Indeed $e-p^{-(n+\alpha)}\ge e/(p-1)$, because $e(p-2)/(p-1)\ge\frac12$ and $p^{-(n+\alpha)}\le\frac13$ for $p\ge3$.
- For $p^\alpha<x\le p^{\alpha+1}$, the exponent is $\alpha+1$ and $C\ge1+e(n+\alpha+1)+e/(p-1)$.

So $C$ is non-decreasing, and $C(r/(p-1))\le C(nr/(p-1))$. For example, if $r=1$ and $2\le n<p-1$, their cutoff is $1+en+en/(p-1)-p^{-n}$, and the one here is smaller by $e(n-1)/(p-1)-p^{-n}>0$.

**Sharpness for $r=1$.** Let $\pi$ be a uniformizer of $K$, choose compatible $\pi_m$ with $\pi_m^{p^m}=\pi$ and compatible primitive $p^m$th roots of unity $\zeta_{p^m}$, and let $E_\pi$ be the Tate curve with parameter $\pi$. Then $g\in G_K$ acts on its Tate module by
$$
\begin{pmatrix}\chi_p(g)&c(g)\\0&1\end{pmatrix},\qquad g(\pi_m)/\pi_m=\zeta_{p^m}^{c(g)},
$$
as recorded in the proof of the [Fontaine cutoff example](fontaine-ramification-bounds-do-not-detect-crystallinity.md). So $V_pE_\pi$ is an extension of $\mathbb Q_p$ by $\mathbb Q_p(1)$, which is [semistable](kummer-extensions-and-tate-curve-periods.md) with weights $0$ and $1$. Modulo $p^n$, $g$ acts trivially exactly when $\chi_p(g)\equiv1$ and $c(g)\equiv0$, that is, when $g$ fixes $\zeta_{p^n}$ and $\pi_n$. So $E_\pi[p^n]$ cuts out $K(\zeta_{p^n},\pi_n)$, whose last upper break in Serre numbering is $e(n+1/(p-1))$ by the [radical splitting-field calculation](ramification-of-uniformizer-radical-splitting-fields.md).

For $r=1$ one has $\alpha=0$ and $\beta=1/(p-1)$. Since $e\beta-p^{-n}<e/(p-1)$, the cutoff above is also $e(n+1/(p-1))$ in Serre numbering. So $G_K^{(\mu)}$ acts nontrivially on $E_\pi[p^n]$ at $\mu=1+e(n+1/(p-1))$, and for $r=1$ the cutoff cannot be lowered, for any $n$ and $e$. For $r=1<p-1$ the cutoff is also Hattori's, and Hattori notes that his bound is sharp for $r\le1$ [@hattori2009ramification, Theorem 1.1 and the sentence after it, p. 2].

**Convention.** Dualizing $T$ does not change the field it cuts out, and dualizing $V$ exchanges the two sign conventions for Hodge–Tate weights. So the theorem and the example do not depend on the convention.
