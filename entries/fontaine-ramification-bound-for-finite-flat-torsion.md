---
title: Fontaine's upper ramification bound for finite flat torsion
kind: theorem
summary: A finite flat group scheme killed by p^n has trivial Galois action above upper break e(n+1/(p-1))-1. This also bounds every crystalline lattice with weights 0 and 1. A rank-two crystalline lattice attains the boundary at p=2.
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

**The endpoint can occur (proved here).** Take $K=\mathbb Q_2$ and $n=1$. Let $V=\mathbb Q_2e_0\oplus\mathbb Q_2e_1$, with $g(e_0)=e_0$ and $g(e_1)=\chi_2(g)e_1$, where $\chi_2$ is the $2$-adic cyclotomic character. This is the rational Tate module of $\mu_{2^\infty}\oplus(\mathbb Q_2/\mathbb Z_2)_{\mathbb Z_2}$, hence crystalline with weights $0,1$ by the same classification. Put
$$f_1=e_1,\qquad f_2=e_0+\frac12e_1,\qquad T=\mathbb Z_2f_1\oplus\mathbb Z_2f_2.$$
Then
$$
\rho_T(g)=
\begin{pmatrix}
\chi_2(g)&(\chi_2(g)-1)/2\\
0&1
\end{pmatrix}.
$$
Since $\chi_2(g)$ is odd, $T$ is stable. Modulo $2$, the action is trivial exactly when $\chi_2(g)\equiv1\pmod4$. Its splitting field is therefore $L=\mathbb Q_2(i)$. The classification also realizes $T/2T$ as the geometric points of a finite flat group scheme of rank four killed by $2$.

Put $\pi=i-1$. The equation $\pi^2+2\pi+2=0$ is Eisenstein, and $\pi$ is a uniformizer. With $v_L(\pi)=1$, the valuations of $a$ and $b\pi$, for $a,b\in\mathbb Q_2$, have opposite parity when both are nonzero. Thus integrality of $a+b\pi$ is equivalent to $a,b\in\mathbb Z_2$, proving $\mathcal O_L=\mathbb Z_2[\pi]$.

For the nonidentity $\sigma\in\operatorname{Gal}(L/\mathbb Q_2)$,
$$v_L(\sigma(\pi)-\pi)=v_L(-2i)=2.$$
Since $\pi$ generates the integer ring, the lower groups are $G_0=G_1=G$ and $G_x=1$ for $x>1$. The Herbrand function is the identity on $[0,1]$, so $G^1=G\ne1$ and $G^u=1$ for $u>1$. Here $e=n=1$ and $c_1=1$: the universal bound cannot replace $u>c_n$ by $u\ge c_n$. $\square$
