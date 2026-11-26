---
title: Ramification of torsion semistable representations with arbitrary weights
kind: theorem
summary: 'For odd p, Caruso–Liu bound the upper ramification and different of a p^n-torsion quotient of semistable lattices using only n, the absolute ramification index and a logarithmic function of the weight bound, with no restriction on that bound.'
tags: [local-fields, ramification, hodge-theory, galois-representations]
edges:
  - {to: ramification-filtration, label: uses, note: 'The cutoff below uses Serre upper numbering.'}
  - {to: fontaine-ramification-bound-for-finite-flat-torsion, label: analogous-to, note: 'Caruso–Liu allow arbitrary semistable weight bounds; Fontaine gives a sharper bound for finite flat torsion.'}
  - {to: torsion-crystalline-quotients-detect-crystallinity, label: analogous-to, note: 'That criterion tests actual bounded-weight lattice quotients; this theorem bounds their ramification.'}
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

**Indexing.** The source uses Fontaine's $G_K^{(\mu)}=G_K^{\mu-1}$, so its upper cutoff has an additional $1$ [@carusoliu2008ramification, Introduction, p. 2; §4.2, p. 21]. The conversion is explicit in [@fontaine1985, Introduction, p. 515; §1.2(i), p. 518].

**Scope.** There is no restriction on $e$ or $r$; dependence on $r$ is logarithmic [@carusoliu2008ramification, Introduction, pp. 2–3]. The [bounded-weight torsion criterion](torsion-crystalline-quotients-detect-crystallinity.md) tests actual realizations at every exponent. For finite flat torsion, [Fontaine's theorem](fontaine-ramification-bound-for-finite-flat-torsion.md) gives the sharper cutoff $e(n+1/(p-1))-1$ [@fontaine1985, Theorem A, p. 515].
