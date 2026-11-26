---
title: Ramification of torsion semistable representations with arbitrary weights
kind: theorem
summary: 'For odd p, Caruso–Liu bound the upper ramification and different of a p^n-torsion quotient of semistable lattices with weights in [0,r] using only n, e and log_p(nr/(p-1)), for every r and e. When nr/(p-1) is a power of p, their written proof gives a slightly larger bound.'
tags: [local-fields, ramification, hodge-theory, galois-representations]
edges:
  - {to: ramification-filtration, label: uses, note: 'The cutoff below uses Serre upper numbering.'}
  - {to: fontaine-ramification-bound-for-finite-flat-torsion, label: analogous-to, note: 'Caruso–Liu allow arbitrary semistable weight bounds; Fontaine gives a sharper bound for finite flat torsion.'}
  - {to: torsion-crystalline-quotients-detect-crystallinity, label: analogous-to, note: 'That criterion tests actual bounded-weight lattice quotients; this theorem bounds their ramification.'}
  - {to: caruso-liu-ramification-conjecture, label: addresses, note: 'For n = 1 the conjecture is the sharper form of this theorem, apart from the boundary case below.'}
---

**Data.** Let $p>2$, let $K/\mathbb Q_p$ be finite, normalize $v_K(K^\times)=\mathbb Z$, and put $e=v_K(p)$. Fix integers $n,r\ge1$. Let $T=L/L'$ be killed by $p^n$, where $L'\subseteq L$ are full $G_K$-stable lattices in a semistable representation with Hodge–Tate weights in $\{0,\ldots,r\}$, taking $\mathbb Q_p(1)$ to have weight $1$. Let $F/K$ be the finite Galois extension cut out by the action on $T$.

**Bounds (Caruso–Liu).** Write
$$
\frac{nr}{p-1}=p^\alpha\beta,
\qquad \alpha\in\mathbb Z_{\ge0},\qquad \frac1p<\beta\le1.
$$
In Serre [upper numbering](ramification-filtration.md),
$$
G_K^u\text{ acts trivially on }T
\quad\text{if}\quad
u>e\left(n+\alpha+\max\left\{\beta,\frac1{p-1}\right\}\right).
$$
Extending $v_K$ to $F$, the different also satisfies
$$
v_K(\mathfrak D_{F/K})
<1+e(n+\alpha+\beta)-p^{-(n+\alpha)}
$$
[@carusoliu2008ramification, Theorem 1.3, p. 2; §4.3, pp. 23–24].

**Sharper cutoff.** The author-hosted version, whose numbering is the one used in later citations of the published article, lowers the upper cutoff and keeps the bound on the different:
$$
G_K^u\text{ acts trivially on }T
\quad\text{if}\quad
u>e(n+\alpha)+\max\left\{e\beta-\frac1{p^{n+\alpha}},\ \frac{e}{p-1}\right\}
$$
[@carusoliu2011ramification, Theorem 1.1, p. 2; §4.3, pp. 19–20]. This never exceeds the cutoff above. The arXiv proof already gives it: before the final simplification, its inequalities bound the last break, in Fontaine numbering, by the larger of $1+e(s+1/(p-1))$ and $1+es+e\beta-p^{-s}$, with $s=n+\alpha$ [@carusoliu2008ramification, §4.3, pp. 23–24]. For $n=r=1$ the sharper cutoff is $e(1+1/(p-1))$. The $p$-torsion of the Tate curve whose parameter is a uniformizer attains it, so it cannot be lowered there; see [Caruso's bound](caruso-ramification-bound-for-torsion-semistable-representations.md), which agrees with it for $n=1$.

**Boundary case.** Both versions normalize $1/p<\beta\le1$, but their written proofs cover only $\beta<1$. With their choice of constants, Section 4 fixes an integer $s>n+\log_p(nr/(p-1))$. The proof of both bounds then takes $s=n+\alpha$, which equals $n+\log_p(nr/(p-1))$ when $\beta=1$ [@carusoliu2008ramification, §4, p. 17; §4.3, p. 23] [@carusoliu2011ramification, §4, p. 14; §4.3, p. 19]. The computation uses only $nr/(p-1)=p^\alpha\beta$ and the hypothesis on $s$, so it proves both bounds with the normalization $1/p\le\beta<1$ instead.

The two normalizations differ only when $nr/(p-1)=p^t$ for an integer $t\ge0$, for example when $n=1$ and $r=p-1$, or when $r=1$ and $n=p-1$. There the proof gives $\alpha=t+1$ and $\beta=1/p$, so:

- both upper cutoffs become $e(n+t+1+1/(p-1))$, instead of the stated $e(n+t+1)$ and $e(n+t+1)-p^{-(n+t)}$;
- the different bound becomes $1+e(n+t+1+1/p)-p^{-(n+t+1)}$, instead of the stated $1+e(n+t+1)-p^{-(n+t)}$.

Čoupek makes this observation for $n=1$ [@coupek2022crystalline, Remark 5.16(2), p. 35]. These sources do not settle whether the stated bounds hold in this case. [Caruso's bound](caruso-ramification-bound-for-torsion-semistable-representations.md), as stated, implies the stated upper cutoffs here too, but its proof is only sketched.

**Indexing.** The source uses Fontaine's $G_K^{(\mu)}=G_K^{\mu-1}$, so its upper cutoff has an additional $1$ [@carusoliu2008ramification, Introduction, p. 2; §4.2, p. 21]. The conversion is explicit in [@fontaine1985, Introduction, p. 515; §1.2(i), p. 518].

**Scope.** There is no restriction on $e$ or $r$; dependence on $r$ is logarithmic [@carusoliu2008ramification, Introduction, pp. 2–3]. Caruso and Liu [conjecture](caruso-liu-ramification-conjecture.md) that $nr/(p-1)$ can be replaced by $r/(p-1)$, which removes $n$ from the logarithmic term, and Caruso proved this for the upper cutoff. The [bounded-weight torsion criterion](torsion-crystalline-quotients-detect-crystallinity.md) tests actual realizations at every exponent. For finite flat torsion, [Fontaine's theorem](fontaine-ramification-bound-for-finite-flat-torsion.md) gives the sharper cutoff $e(n+1/(p-1))-1$ [@fontaine1985, Theorem A, p. 515].
