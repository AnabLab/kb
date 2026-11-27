---
title: Different bounds for torsion semistable quotients with weights 0 and 1
kind: theorem
summary: 'For odd p, a p^n-torsion quotient of semistable lattices with Hodge–Tate weights 0 and 1 has different exponent below 1+e(n+1/(p-1))-p^(-s(d-s)), with d the dimension and s the multiplicity of Frobenius slope -1. So the Caruso–Liu different conjecture holds for r=1 when d <= 3.'
tags: [local-fields, ramification, hodge-theory, galois-representations]
edges:
  - {to: caruso-liu-ramification-conjecture, label: addresses, note: 'Proves part (2) for r = 1 when V is crystalline or s(d-s) <= n, in particular for every V of dimension at most 3. The Kato monodromy bound proves part (2) for r = 1 in every dimension.'}
  - {to: fontaine-ramification-bound-for-finite-flat-torsion, label: uses, note: 'Its upper cutoff for torsion of crystalline lattices with weights 0 and 1 is applied to the two crystalline pieces, and its different bound gives the crystalline case.'}
  - {to: weakly-admissible-filtered-modules, label: uses, note: 'The exact Colmez–Fontaine equivalence turns the slope -1 part of the filtered module into a crystalline subrepresentation with crystalline quotient.'}
  - {to: ramification-filtration, label: uses, note: 'Stated in Fontaine numbering, G^{(mu)} = G^{mu-1} in Serre numbering.'}
  - {to: ramification-bounds-for-torsion-semistable-representations, label: uses, note: 'For n = r = 1 its different bound is part (2) of the conjecture, which part 3 uses when n = 1. It equals the bound here with s(d-s) = 1.'}
---

**Data.** Let $p>2$, let $K/\mathbb Q_p$ be finite, normalize $v_K(K^\times)=\mathbb Z$, and put $e=v_K(p)$. Fix $n\ge1$. Let $V$ be a semistable representation of $G_K$ of dimension $d$ with Hodge–Tate weights in $\{0,1\}$, taking $\mathbb Q_p(1)$ to have weight $1$. Let $L'\subseteq L$ be $G_K$-stable lattices in $V$ with $p^nL\subseteq L'$, put $T=L/L'$, and let $F/K$ be the finite Galois extension cut out by $T$, with $G=\operatorname{Gal}(F/K)$. Write $G^{(\mu)}=G^{\mu-1}$ for Fontaine's numbering of the [upper ramification groups](ramification-filtration.md) [@fontaine1985, Introduction, p. 515], and put
$$
c=e\Bigl(n+\frac1{p-1}\Bigr),\qquad C=1+c .
$$
Let $D=D_{\mathrm{st}}(V)$ be the covariant filtered $(\varphi,N)$-module of the [Colmez–Fontaine equivalence](weakly-admissible-filtered-modules.md), and $D=\bigoplus_\alpha D(\alpha)$ the slope decomposition of its underlying isocrystal [@brinonconrad2009, Lemma 8.1.11, p. 107]. Let $s=\dim_{K_0}D(-1)$ be the multiplicity of the slope $-1$.

**Theorem.**

1. *Structure.* $V$ has a $G_K$-stable subspace $V_1$ of dimension $s$ such that $V_1$ and $V/V_1$ are crystalline with Hodge–Tate weights in $\{0,1\}$. All weights of $V_1$ equal $1$. If $V$ is not crystalline, then $0<s<d$.
2. *Different.* Let $T_1=(L'+L\cap V_1)/L'$, a $G_K$-submodule of $T$, and $T_2=T/T_1$. Put $m=\dim_{\mathbb F_p}T_1[p]\cdot\dim_{\mathbb F_p}(T_2/pT_2)$, so that $m\le s(d-s)$. Then
$$
v_K(\mathfrak D_{F/K})<C-p^{-m}=1+e\Bigl(n+\frac1{p-1}\Bigr)-p^{-m}.
$$
If $V$ is crystalline, then $v_K(\mathfrak D_{F/K})<c$.
3. *The Caruso–Liu conjecture for $r=1$.* Part (2) of the [Caruso–Liu conjecture](caruso-liu-ramification-conjecture.md) holds for $r=1$ whenever $V$ is crystalline or $s(d-s)\le n$. In particular it holds for every $V$ of dimension at most $3$, and for every $V$ with $d^2\le4n$.

The proof combines cited results, and the combination is new here.

**Conventions.** With the covariant functor, the filtration on $D_K=K\otimes_{K_0}D$ is that of $D_{\mathrm{dR}}(V)$, and $\operatorname{gr}^iD_{\mathrm{dR}}(V)\cong(\mathbb C_K(i)\otimes V)^{G_K}$ for de Rham $V$ [@brinonconrad2009, proof of Proposition 6.3.3, pp. 77–78]. So weight $w$ corresponds to filtration degree $-w$, and $\mathbb Q_p(1)$ has degree $-1$. Thus $\operatorname{Fil}^{-1}D_K=D_K$ and $\operatorname{Fil}^1D_K=0$. The same then holds for the subspace filtration on $D'_K$ for every subobject $D'$, and for the quotient filtration on every quotient object, so their Hodge numbers $t_H$ lie between $-\dim$ and $0$. Dualizing $T$ does not change $F$, and dualizing $V$ exchanges the two sign conventions for the weights, so the theorem does not depend on the convention. For the same reason, input (a) below applies whatever convention its source uses.

**Proof of 1.** Weak admissibility says $t_H(D')\le t_N(D')$ for every subobject $D'$ (stable under $\varphi$ and $N$) and $t_N(D'')\le t_H(D'')$ for every quotient object $D''$ [@brinonconrad2009, Definition 8.2.9, p. 114]. Also $N(D(\alpha))\subseteq D(\alpha-1)$, so $\bigoplus_{\alpha\le a}D(\alpha)$ is a subobject for every $a$ [@brinonconrad2009, Example 8.2.7, p. 113], and $t_N$ is $\sum_\alpha\alpha\dim D(\alpha)$ and additive in exact sequences [@brinonconrad2009, pp. 106–107].

- *No slope is below $-1$.* Otherwise $D'=\bigoplus_{\alpha<-1}D(\alpha)$ is a nonzero subobject with $t_N(D')<-\dim D'\le t_H(D')$.
- *No slope is above $0$.* Otherwise the quotient $D''=D/\bigoplus_{\alpha\le0}D(\alpha)$ is nonzero, and $t_N(D'')>0\ge t_H(D'')$.
- *$N(D)\subseteq D(-1)$.* For a slope $\alpha<0$, $D(\alpha-1)=0$ since $\alpha-1<-1$, so $N(D(\alpha))=0$. The only remaining slope is $0$, and $N(D(0))\subseteq D(-1)$.

Let $D_1=D(-1)$. It is stable under $\varphi$, and $N(D_1)\subseteq D(-2)=0$, so it is a subobject. Since $t_N(D_1)=-\dim D_1\le t_H(D_1)\le t_N(D_1)$, equality holds, and every subobject of $D_1$ is a subobject of $D$ and satisfies $t_H\le t_N$. So $D_1$ is weakly admissible, and $t_H(D_1)=-\dim D_1$ says that its filtration has the single jump $-1$. Then $D/D_1$ is weakly admissible [@brinonconrad2009, Proposition 8.2.10, p. 114], and its monodromy is $0$ because $N(D)\subseteq D_1$.

The Colmez–Fontaine functor is an exact equivalence, so $D_1\subseteq D$ corresponds to a subrepresentation $V_1\subseteq V$ of dimension $s$ with $D_{\mathrm{st}}(V_1)=D_1$ and $D_{\mathrm{st}}(V/V_1)=D/D_1$. Both have monodromy $0$, so both are crystalline (see the [Colmez–Fontaine entry](weakly-admissible-filtered-modules.md)), and their filtration jumps lie in $\{-1,0\}$, with only $-1$ for $V_1$. If $s=0$ or $s=d$, then $N(D)\subseteq D_1$ and $N(D_1)=0$ give $N=0$, so $V$ is crystalline. $\square$

**Proof of 2.** *Integral pieces.* Put $L_1=L\cap V_1$ and $L_1'=L'\cap V_1$, lattices in $V_1$, and let $L_2,L_2'$ be the images of $L,L'$ in $V_2=V/V_1$, lattices in $V_2$. Then $T_1\cong L_1/L_1'$, since $L'\cap L_1=L_1'$, and $T_2=L/(L_1+L')\cong L_2/L_2'$. Since $p^nL\subseteq L'$, also $p^nL_i\subseteq L_i'$, so $T_i$ is a quotient of $L_i/p^nL_i$. Since $L_1$ has rank $s$ and $L_2$ has rank $d-s$, $\dim T_1[p]\le s$ and $\dim T_2/pT_2\le d-s$, so $m\le s(d-s)$.

*Three ramification inputs.* The image of $G_K^{(\mu)}$ in $G$ is $G^{(\mu)}$, and $G^{(\mu)}=1$ exactly when $\mu>u_{F/K}$, where $u_{F/K}$ is the largest $\mu$ with $G^{(\mu)}\ne1$ [@fontaine1985, §1.1, p. 518; Remark 1.2(ii), p. 518].

- (a) Hattori: for $r=1<p-1$, $G_K^{(\mu)}$ acts trivially on every $p^n$-torsion quotient of $G_K$-stable lattices in a semistable representation with weights in $\{0,1\}$ when $\mu>1+e(n+1/(p-1))$ [@hattori2009ramification, Theorem 1.1 and Corollary 1.3(1), pp. 2–3]. Applied to $T$, this gives $u_{F/K}\le C$.
- (b) For $n\ge2$, apply (a) at level $n-1$ to $T/p^{n-1}T=L/(L'+p^{n-1}L)$. So $G_K^{(\mu)}$ acts trivially on $T/p^{n-1}T$ for $\mu>C-e$, and $C-e\le c$.
- (c) $V_1$ and $V_2$ are crystalline with weights in $\{0,1\}$. By [Fontaine's theorem](fontaine-ramification-bound-for-finite-flat-torsion.md), applied to the $p$-divisible groups with Tate modules $L_i$, $G_K^{(\mu)}$ acts trivially on $L_i/p^nL_i$, hence on $T_i$, for $\mu>c$ [@fontaine1985, Theorem A, p. 515].

*The top of the filtration is small.* Let $\mu>c$ and $g\in G^{(\mu)}$. By (c), $g$ acts trivially on $T_1$ and on $T/T_1$, so $g-1$ maps $T$ into $T_1$ and kills $T_1$. If $n\ge2$, (b) gives $(g-1)T\subseteq p^{n-1}T$. Since $p\cdot p^{n-1}T=0$, $(g-1)T\subseteq T_1[p]$, and $g-1$ kills $pT$. If $n=1$, these two facts hold because $pT=0$. So $g-1$ induces a homomorphism $\nu(g):T_2/pT_2\to T_1[p]$. For $g,h\in G^{(\mu)}$,
$$
gh-1=(g-1)+(h-1)+(g-1)(h-1),
$$
and $(g-1)(h-1)=0$ because $h-1$ lands in $T_1$, which $g-1$ kills. So $\nu$ is a homomorphism. It is injective, since $\nu(g)=0$ means $g$ acts trivially on $T$. Hence
$$
|G^{(\mu)}|\le p^m\qquad\text{for every }\mu>c.
$$

*Fontaine's formula.* Fontaine shows $v_K(\mathfrak D_{F/K})=u_{F/K}-i_{F/K}$ [@fontaine1985, Proposition 1.3, p. 518], where
$$
i_{F/K}=\tilde\psi_{F/K}(u_{F/K}),\qquad \tilde\psi_{F/K}(u)=\int_0^u\frac{dy}{|G^{(y)}|}
$$
[@fontaine1985, §1.1, pp. 517–518]. If $F=K$ there is nothing to prove, so let $F\ne K$. Then $u=u_{F/K}\ge0$, because Fontaine's lower indices are valuations of integral ideals and his function $\tilde\varphi_{L/K}$ satisfies $\tilde\varphi_{L/K}(0)=0$ [@fontaine1985, §1.1, p. 517].

- If $u\le c$: then $v_K(\mathfrak D_{F/K})=u-\tilde\psi_{F/K}(u)\le u\le c$. If $u>0$, then $\tilde\psi_{F/K}(u)>0$, and if $u=0$, then $v_K(\mathfrak D_{F/K})=0$. Either way $v_K(\mathfrak D_{F/K})<c\le C-p^{-m}$, since $C-c=1$ and $p^{-m}\le1$.
- If $u>c$: the bound on $|G^{(y)}|$ for $y>c$ gives
$$
\tilde\psi_{F/K}(u)=\tilde\psi_{F/K}(c)+\int_c^u\frac{dy}{|G^{(y)}|}\ge\tilde\psi_{F/K}(c)+\frac{u-c}{p^m}>\frac{u-c}{p^m},
$$
since $\tilde\psi_{F/K}(c)>0$. So $v_K(\mathfrak D_{F/K})<u-(u-c)p^{-m}$. The right side is nondecreasing in $u$, and $u\le C$ by (a), so it is at most $C-(C-c)p^{-m}=C-p^{-m}$.

*Crystalline case.* If $V$ is crystalline, $L=T_pH$ for a $p$-divisible group $H$ over $\mathcal O_K$, and $T$ is a quotient of $L/p^nL\cong H[p^n](\bar K)$ (see [Fontaine's theorem](fontaine-ramification-bound-for-finite-flat-torsion.md)). So $F$ lies in the field $F'$ cut out by $H[p^n]$. Fontaine's corollary gives $v_K(\mathfrak D_{F'/K})<e(n+1/(p-1))=c$ [@fontaine1985, Corollary, p. 516], and $\mathfrak D_{F'/K}=\mathfrak D_{F'/F}\mathfrak D_{F/K}$ gives $v_K(\mathfrak D_{F/K})\le v_K(\mathfrak D_{F'/K})$. $\square$

**Proof of 3.** For $r=1$, $r/(p-1)=1/(p-1)$ lies in $(1/p,1]$, so the conjecture's $\alpha'=0$ and $\beta'=1/(p-1)$, and its part (2) asserts $v_K(\mathfrak D_{F/K})<C-p^{-n}$. If $V$ is crystalline, part 2 gives $v_K(\mathfrak D_{F/K})<c<C-p^{-n}$. If $s(d-s)\le n$, then $m\le n$ and $C-p^{-m}\le C-p^{-n}$. Always $s(d-s)\le d^2/4$. For $d\le3$, $s(d-s)\le2$, which settles every $n\ge2$. For $n=1$, the conjecture is the Caruso–Liu different bound for $n=r=1$, $1+e(1+1/(p-1))-1/p$, which is not in their boundary case because $1/(p-1)$ is not a power of $p$ (see [their entry](ramification-bounds-for-torsion-semistable-representations.md)). $\square$

**Remarks.**

- *What is new.* Hattori's different bound for $r=1$ is $v_K(\mathfrak D_{F/K})<C$ [@hattori2009ramification, Corollaries 1.2 and 1.3(1), pp. 2–3]. Part 2 improves it by $p^{-m}$, using that above $c$ the Galois action is unipotent with respect to $T_1\subseteq T$ and has exponent $p$.
- *Where it stops.* The argument only bounds $|G^{(\mu)}|$ for $\mu>c$ by counting homomorphisms, so it needs $m\le n$ for the conjecture. For a non-crystalline $V$ with $s(d-s)>n\ge2$, part (2) of the conjecture for $r=1$ is not settled by this argument. The [Kato monodromy bound](kato-monodromy-bound-for-weight-one-semistable-torsion.md) settles it in every dimension: above $c$ the action factors through a Kummer character of a uniformizer of order at most $p$, so $v_K(\mathfrak D_{F/K})<C-1/p$.
- *Prime $2$.* Input (a) needs $1<p-1$, so the theorem says nothing for $p=2$.
