---
title: Kummer extensions and the periods of Tate curves
kind: theorem
summary: 'Every extension of $\mathbb Q_p$ by $\mathbb Q_p(1)$ over a p-adic field is semistable; the crystalline classes are exactly the Kummer classes of units. For Tate curves, the filtered semistable module recovers log(q)/v_p(q), which classifies their rational Tate modules.'
tags: [local-fields, galois-cohomology, hodge-theory, elliptic-curves]
edges:
  - {to: kummer-theory, label: uses, note: 'The finite-level cohomological Kummer isomorphisms give the extension parameter after completion and rationalization.'}
  - {to: p-adic-monodromy-theorem, label: analogous-to, note: 'An explicit family that is already semistable over the given field.'}
  - {to: crystalline-tate-module-good-reduction, label: analogous-to, note: 'For a Tate curve, the nonzero monodromy below witnesses the failure of crystallinity and hence of good reduction.'}
  - {to: sen-operator-hodge-tate-criterion, label: analogous-to, note: 'All these extensions have Hodge–Tate weights 0 and 1; those weights do not distinguish their crystalline and noncrystalline members.'}
---

**Kummer classes.** Let $K/\mathbb Q_p$ be finite, $K_0$ its maximal unramified subfield, and $v_p(p)=1$. Write
$$
\widehat{K^\times}_p=\varprojlim_n K^\times/(K^\times)^{p^n},\qquad
\mathcal K_K=\mathbb Q_p\otimes_{\mathbb Z_p}\widehat{K^\times}_p.
$$
[Kummer theory](kummer-theory.md) identifies $\mathcal K_K$ with $H^1(G_K,\mathbb Q_p(1))$, classifying extensions
$$
0\longrightarrow\mathbb Q_p(1)\longrightarrow V\longrightarrow\mathbb Q_p\longrightarrow0
$$
with the end terms identified. Every such $V$ is semistable. It is crystalline exactly when its Kummer class lies in the rationalized completion of $\mathcal O_K^\times$, equivalently in $\ker(v_p:\mathcal K_K\to\mathbb Q_p)$. This is a hyperplane of dimension $[K:\mathbb Q_p]$ [@brinonconrad2009, Lemma 8.3.9 and proof, p. 125]. There is no exclusion of $p=2$.

**Explicit periods.** Fix the logarithm on $K^\times$ with $\log_p(p)=0$. For $q\in K^\times$, choose compatible systems $q_n^{p^n}=q$ and primitive roots $\zeta_{p^n}$, defining $c_q(g)\in\mathbb Z_p$ by $g(q_n)/q_n=\zeta_{p^n}^{c_q(g)}$. The corresponding representation has basis $e,f$ with
$$
g(e)=\chi_{\mathrm{cyc}}(g)e,\qquad g(f)=f+c_q(g)e.
$$
Set $h=v_p(q)$ and $\ell=\log_p(q)$. There is a $K_0$-basis $x,y$ of $D_{\mathrm{st}}(V_q)$ such that
$$
\varphi(x)=p^{-1}x,\quad \varphi(y)=y,\qquad N(x)=0,\quad N(y)=h x,
$$
and on $D_K=K\otimes_{K_0}D_{\mathrm{st}}(V_q)$,
$$
\operatorname{Fil}^iD_K=
\begin{cases}
D_K&i\le -1,\\
K(y+\ell x)&i=0,\\
0&i\ge 1.
\end{cases}
$$
Here $\varphi$ is semilinear over $K_0$. We use Berger's convention $N=-d/dY$ for $Y=\log[\widetilde p]$, the negative of Brinon–Conrad's convention [@berger2004introduction, §II.3.3, pp. 14–15]. Berger gives the period basis and filtration for unramified $K$ [@berger2004introduction, §§II.4.2–II.4.4, pp. 17–19]. The following calculation also treats ramified $K$.

**Period calculation (checked here).** The logarithmic period $u=\log[\widetilde q]\in B_{\mathrm{st}}$ satisfies
$$
g(u)=u+c_q(g)t,\quad \varphi(u)=pu,\quad N(u)=-h,\quad
u\in B_{\mathrm{dR}}^+,\quad\theta(u)=\ell,
$$
where $g(t)=\chi_{\mathrm{cyc}}(g)t$, $\varphi(t)=pt$ and $N(t)=0$. These identities follow from the logarithm construction, with $N(u)$ computed by the valuation-normalized derivation [@brinonconrad2009, Definition 9.2.3 and following construction, pp. 138–139; Lemmas 9.2.6–9.2.7 and Examples 9.2.8–9.2.9, pp. 139–143]. Inverting $q$ handles negative valuation. The vectors
$$
x=t^{-1}e,\qquad y=f-u t^{-1}e
$$
are invariant and independent, hence form a basis; applying $\varphi,N$ gives the displayed matrices. For $a,b\in K$, the vector $ax+by$ is in $\operatorname{Fil}^0$ exactly when $(a-bu)/t\in B_{\mathrm{dR}}^+$, or $a=b\ell$. Both basis vectors lie in $\operatorname{Fil}^{-1}$. Membership in $\operatorname{Fil}^1$ forces $b=0$ from the $f$-coefficient, then $a=0$ from the $e$-coefficient. Finally
$$
D_{\mathrm{cris}}(V_q)=D_{\mathrm{st}}(V_q)^{N=0},
$$
since $B_{\mathrm{st}}^{N=0}=B_{\mathrm{cris}}$ [@brinonconrad2009, Lemma 9.2.12 and proof, p. 145]. Thus its dimension is two for $h=0$ and one otherwise, checking the crystalline criterion for actual Kummer parameters.

**Tate-curve reconstruction (proved here).** If $0<|q|_p<1$, let $E_q$ be the Tate elliptic curve with analytic uniformization $\mathbb G_m^{\mathrm{an}}/q^{\mathbb Z}$. Its rational Tate module is $V_q$ [@brinonconrad2009, Example 9.2.1, p. 136]; the uniformization and torsion calculation are described for unramified $K$ in [@berger2004introduction, §§II.4.1–II.4.2, pp. 16–17]. For two such parameters in the same $K$,
$$
V_p(E_q)\cong V_p(E_{q'})\quad\Longleftrightarrow\quad
\frac{\log_p(q)}{v_p(q)}=\frac{\log_p(q')}{v_p(q')}.
$$
Indeed, replace $x$ by $X=hx$ and write $Y=y$. Then $N(Y)=X$, while $\operatorname{Fil}^0=K(Y+(\ell/h)X)$. Put $f_0=[K_0:\mathbb Q_p]$. The two distinct eigenvalues $p^{-f_0},1$ of $\varphi^{f_0}$ force every isomorphism commuting with $\varphi$ to preserve the lines of $X,Y$. Its diagonal coefficients lie in $\mathbb Q_p$, since they are fixed by Frobenius. Commuting with $N$ makes those coefficients equal. Such an isomorphism preserves the filtration exactly when the two ratios agree. Full faithfulness of $D_{\mathrm{st}}$ gives the equivalence with representation isomorphism [@brinonconrad2009, Proposition 9.2.14, p. 146].

Thus forgetting the filtration makes all these Tate-curve $(\varphi,N)$-modules isomorphic. For example, $q=p$ and $q'=p(1+p^2)$ have different ratios, since the logarithm series has nonzero leading term $p^2$ and all subsequent terms have larger valuation. Their rational Tate modules differ despite identical unfiltered modules and Hodge–Tate weights $0,1$ (with $\mathbb Q_p(1)$ of weight $1$). Also $q$ and $q^m$, for positive integers $m$, have the same ratio: the rational module does not recover the individual parameter.
