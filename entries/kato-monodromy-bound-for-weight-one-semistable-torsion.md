---
title: Kato monodromy bounds the ramification of weight-one semistable torsion
kind: theorem
summary: 'For every p, ramification above e(n+1/(p-1)) in Fontaine numbering acts on p^n-torsion quotients of semistable lattices with weights 0 and 1 through a Kummer character of a uniformizer, of order at most p. So the different is below 1+e(n+1/(p-1))-1/p, proving the Caruso–Liu different bound for r=1.'
tags: [local-fields, ramification, hodge-theory, galois-representations]
edges:
  - {to: caruso-liu-ramification-conjecture, label: addresses, note: 'Proves part (2) for r = 1 in every dimension and at every level n, with p^(-1) in place of p^(-n), and reproves part (1) for r = 1 without the Hattori or Caruso bounds.'}
  - {to: log-p-divisible-groups-classify-semistable-lattices, label: uses, note: 'Every lattice is the Tate module of a log p-divisible group, and its p^n-torsion carries a finite flat action twisted by the Kummer cocycle of the uniformizer.'}
  - {to: fontaine-ramification-bound-for-finite-flat-torsion, label: uses, note: 'Applied to the p^n-torsion of the classical part and to mu_{p^n}.'}
  - {to: ramification-of-uniformizer-radical-splitting-fields, label: uses, note: 'Its cutoffs at levels n-1 and n bound the Kummer character above e(n+1/(p-1)) and above 1+e(n+1/(p-1)), and give sharpness.'}
  - {to: ramification-filtration, label: uses, note: 'Stated in Fontaine numbering, G^{(mu)} = G^{mu-1} in Serre numbering.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: uses, note: 'The Kummer lattice of a uniformizer, the Tate module of the Tate curve, attains the cutoff and the order bound.'}
  - {to: different-of-torsion-semistable-quotients-with-weights-zero-and-one, label: motivated-by, note: 'Replaces the factor p^(-s(d-s)) there by p^(-1) in every dimension. That entry stays sharper, with bound e(n+1/(p-1)), when V is crystalline or m = 0.'}
---

**Data.** Let $p$ be any prime, let $K/\mathbb Q_p$ be finite, normalize $v_K(K^\times)=\mathbb Z$, put $e=v_K(p)$, and let $\pi$ be a uniformizer. Fix $n\ge1$. Let $V$ be a semistable representation of $G_K$ with Hodge–Tate weights in $\{0,1\}$, taking $\mathbb Q_p(1)$ to have weight $1$. Let $L'\subseteq L$ be $G_K$-stable lattices in $V$ with $p^nL\subseteq L'$, put $T=L/L'$, and let $F/K$ be the finite Galois extension cut out by $T$, with $G=\operatorname{Gal}(F/K)$. Write $G^{(\mu)}=G^{\mu-1}$ for Fontaine's numbering of the [upper ramification groups](ramification-filtration.md) [@fontaine1985, Introduction, p. 515], and put
$$
c=e\Bigl(n+\frac1{p-1}\Bigr),\qquad C=1+c .
$$
Choose $\varpi\in\bar K$ with $\varpi^{p^n}=\pi$, and let $\delta(g)=g(\varpi)/\varpi\in\mu_{p^n}$ for $g\in G_K$.

**Theorem.**

1. *Cutoff.* $G_K^{(\mu)}$ acts trivially on $T$ for every $\mu>C$.
2. *The top of the filtration.* Let $\mu>c$. Then $\delta$ restricts to a homomorphism $G_K^{(\mu)}\to\mu_p$, and the action of $g\in G_K^{(\mu)}$ on $T$ depends only on $\delta(g)$. Hence $G^{(\mu)}$ is trivial or cyclic of order $p$.
3. *Different.* $v_K(\mathfrak D_{F/K})<C-\dfrac1p=1+e\Bigl(n+\dfrac1{p-1}\Bigr)-\dfrac1p$.
4. *The Caruso–Liu conjecture for $r=1$.* For odd $p$, part (2) of the [Caruso–Liu conjecture](caruso-liu-ramification-conjecture.md) holds for $r=1$, for every $V$ and every $n$. For $n\ge2$ the bound in part 3 is smaller than the conjectured $C-p^{-n}$.
5. *Sharpness.* There is a rank-two lattice, for every $p$, $K$ and $n$, for which $|G^{(\mu)}|=p$ for all $c<\mu\le C$. So parts 1 and 2 cannot be improved.

The proof combines cited results, and the combination is new here.

**Proof.** *Reduction.* The image of $G_K^{(\mu)}$ in $G$ is $G^{(\mu)}$ [@fontaine1985, Remark 1.2(ii), p. 518], and it is isomorphic to the image of $G_K^{(\mu)}$ in $\operatorname{Aut}(T)$. Since $p^nL\subseteq L'$, $T$ is a $G_K$-equivariant quotient of $L/p^nL$. So it suffices to prove parts 1 and 2 for $L/p^nL$: if the action of $g$ on $L/p^nL$ is trivial or depends only on $\delta(g)$, the same holds on $T$, and the image of $G_K^{(\mu)}$ in $\operatorname{Aut}(T)$ is a quotient of its image in $\operatorname{Aut}(L/p^nL)$.

*The log $p$-divisible group.* By the [Bertapelle–Wang–Zhao classification](log-p-divisible-groups-classify-semistable-lattices.md), $L\cong T_p(H)$ for a dual representable log $p$-divisible group $H$ over $\mathcal O_K$, [@bertapellewangzhao2026log, Theorem 6.12, p. 35], using the chart given by $\pi$ [@bertapellewangzhao2026log, §3.2.1, p. 13]. With $A\xrightarrow{j}B\xrightarrow{q}X$ and $b$ as in that entry, where $B=H^{\mathrm{cl}}[p^n](\bar K)$ for the classical part $H^{\mathrm{cl}}$ of $H$, there is an isomorphism $L/p^nL\cong B$ under which
$$
g*x=gx+j\bigl(b(\delta(g)\otimes q(gx))\bigr)\qquad(g\in G_K,\ x\in B),
$$
where $gx$ is the action on the points of the finite flat group scheme $H^{\mathrm{cl}}[p^n]$ over $\mathcal O_K$, which is killed by $p^n$.

*Two ramification inputs.*

- (a) By [Fontaine's theorem](fontaine-ramification-bound-for-finite-flat-torsion.md), applied to $H^{\mathrm{cl}}[p^n]$ and to $\mu_{p^n}$, the group $G_K^{(\mu)}$ acts trivially on $B$, with its original action $x\mapsto gx$, and on $\mu_{p^n}$ for $\mu>c$ [@fontaine1985, Théorème A, p. 515].
- (b) For $m\ge1$, let $S_m$ be the splitting field of $X^{p^m}-\pi$ over $K$. Its last upper break in Serre numbering is $e(m+1/(p-1))$, so $G_K^{(\mu)}\subseteq G_{S_m}$ for $\mu>1+e(m+1/(p-1))$ (see [radical splitting fields](ramification-of-uniformizer-radical-splitting-fields.md)).

*Proof of 2.* Let $\mu>c$ and $g,h\in G_K^{(\mu)}$. By (a), $g$ fixes $\mu_{p^n}$, so $\delta(gh)=\delta(g)\,g(\delta(h))=\delta(g)\delta(h)$, and $gx=x$ for $x\in B$. Hence
$$
g*x=x+j\bigl(b(\delta(g)\otimes q(x))\bigr),
$$
which depends only on $\delta(g)$. If $n=1$, then $\delta(g)\in\mu_p$. If $n\ge2$, then $\varpi^p$ is a root of $X^{p^{n-1}}-\pi$, so it lies in $S_{n-1}$. Since $e\ge1$,
$$
\mu>c\ge C-e=1+e\Bigl(n-1+\frac1{p-1}\Bigr),
$$
so (b) with $m=n-1$ gives $g(\varpi^p)=\varpi^p$, that is, $\delta(g)^p=1$. So $\delta(G_K^{(\mu)})$ is a subgroup of $\mu_p$, and the image of $G_K^{(\mu)}$ in $\operatorname{Aut}(L/p^nL)$ is a homomorphic image of it, hence trivial or cyclic of order $p$.

*Proof of 1.* Let $\mu>C$ and $g\in G_K^{(\mu)}$. Then $\mu>c$, so the displayed formula holds. By (b) with $m=n$, $g$ fixes $\varpi\in S_n$, so $\delta(g)=1$ and $g*x=x$.

*Proof of 3.* Fontaine shows $v_K(\mathfrak D_{F/K})=u_{F/K}-i_{F/K}$ [@fontaine1985, Proposition 1.3, p. 518]. Here $u_{F/K}$ is the largest $\mu$ with $G^{(\mu)}\ne1$, and
$$
i_{F/K}=\tilde\psi_{F/K}(u_{F/K}),\qquad \tilde\psi_{F/K}(u)=\int_0^u\frac{dy}{|G^{(y)}|}
$$
[@fontaine1985, §1.1, pp. 517–518]. If $F=K$ there is nothing to prove, so let $F\ne K$. Then $u=u_{F/K}\ge0$, because Fontaine's lower indices are valuations of integral ideals and his function $\tilde\varphi_{F/K}$ satisfies $\tilde\varphi_{F/K}(0)=0$ [@fontaine1985, §1.1, p. 517]. By part 1, $u\le C$.

- If $u\le c$: if $u=0$ then $v_K(\mathfrak D_{F/K})=0$, and if $u>0$ then $\tilde\psi_{F/K}(u)>0$ and $v_K(\mathfrak D_{F/K})<u\le c$. Either way $v_K(\mathfrak D_{F/K})<C-1/p$, since $C-c=1>1/p$.
- If $u>c$: by part 2, $|G^{(y)}|\le p$ for $y>c$, so
$$
\tilde\psi_{F/K}(u)=\tilde\psi_{F/K}(c)+\int_c^u\frac{dy}{|G^{(y)}|}\ge\tilde\psi_{F/K}(c)+\frac{u-c}p>\frac{u-c}p,
$$
since $c>0$ gives $\tilde\psi_{F/K}(c)>0$. So $v_K(\mathfrak D_{F/K})<u-(u-c)/p$. The right side is increasing in $u$, and $u\le C$, so it is at most $C-(C-c)/p=C-1/p$.

*Proof of 4.* For $r=1$, $r/(p-1)=1/(p-1)$ lies in $(1/p,1]$, so the conjecture's $\alpha'=0$ and $\beta'=1/(p-1)$, and its part (2) asserts $v_K(\mathfrak D_{F/K})<C-p^{-n}$. Part 3 gives $v_K(\mathfrak D_{F/K})<C-1/p\le C-p^{-n}$, with equality of the two bounds only for $n=1$.

*Proof of 5.* Let $V$ be the extension of $\mathbb Q_p$ by $\mathbb Q_p(1)$ with Kummer class $\pi$, the rational Tate module of the Tate curve with parameter $\pi$. It is semistable with Hodge–Tate weights $0$ and $1$, and it has a basis $e',f'$ with $g(e')=\chi_{\mathrm{cyc}}(g)e'$ and $g(f')=f'+c_\pi(g)e'$, where $c_\pi(g)\in\mathbb Z_p$ is defined by $g(\pi_m)/\pi_m=\zeta_{p^m}^{c_\pi(g)}$ for compatible roots $\pi_m^{p^m}=\pi$ and compatible primitive roots of unity $\zeta_{p^m}$ (see [Kummer extensions and Tate curves](kummer-extensions-and-tate-curve-periods.md)). Take $L=\mathbb Z_pe'\oplus\mathbb Z_pf'$, which is $G_K$-stable, and $L'=p^nL$. Then $g$ acts trivially on $L/p^nL$ exactly when $\chi_{\mathrm{cyc}}(g)\equiv1$ and $c_\pi(g)\equiv0$ modulo $p^n$, that is, when $g$ fixes $\zeta_{p^n}$ and $\pi_n$. So $F=K(\zeta_{p^n},\pi_n)=S_n$, whose last upper break in Serre numbering is $e(n+1/(p-1))$. So $G^{(C)}\ne1$. The filtration decreases, so $G^{(\mu)}\supseteq G^{(C)}\ne1$ for $\mu\le C$, and part 2 gives $|G^{(\mu)}|=p$ for $c<\mu\le C$. The same lattice gives the sharpness of the cutoff in [Caruso's bound](caruso-ramification-bound-for-torsion-semistable-representations.md). $\square$

**Remarks.**

- *What is new.* The [earlier weight-one bound](different-of-torsion-semistable-quotients-with-weights-zero-and-one.md) embeds $G^{(\mu)}$, for $\mu>c$, into a group of homomorphisms of rank $m\le s(d-s)$, which gives $v_K(\mathfrak D_{F/K})<C-p^{-m}$. That bound gives the conjecture only when $m\le n$; the entry also covers crystalline $V$, and $n=1$ through the Caruso–Liu theorem. Kato's description shows that at level $n$ all of the monodromy comes from the single Kummer extension $E_{\pi,p^n}$, so above $c$ the action is cyclic, whatever the dimension. That entry remains sharper when $V$ is crystalline or $m=0$, where it gives $v_K(\mathfrak D_{F/K})<c$.
- *Relation to known cutoffs.* For odd $p$, part 1 is Hattori's cutoff for $r=1$, used as input (a) in the earlier weight-one entry, and it is part (1) of the conjecture for $r=1$. The proof here uses neither Hattori's nor Caruso's theorem.
- *The prime $2$.* Nothing above needs $p$ odd: the classification, Fontaine's theorem, the radical splitting-field theorem and Fontaine's different formula all hold for $p=2$. For $p=2$ the theorem gives the cutoff $1+e(n+1)$ and $v_K(\mathfrak D_{F/K})<1/2+e(n+1)$. The Hattori, Caruso–Liu and Caruso bounds recorded in this knowledgebase all assume $p$ odd.
- *Not claimed.* Whether $C-1/p$ is approached by some $T$ is not settled here. Part 5 only shows that the cutoff and the order bound are attained.
