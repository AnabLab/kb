---
title: Local Tate modules with Weil pairings do not determine isogeny classes
kind: theorem
summary: 'An uncountable family of pairwise geometrically nonisogenous elliptic curves over Q_5 has the same good ordinary special fibre and mutually isomorphic integral Tate modules at every prime, preserving all Weil pairings.'
tags: [local-fields, elliptic-curves, galois-representations, reconstruction-algorithms]
edges:
  - {to: bloch-kato-local-conditions, label: uses, note: 'The finite local-condition dimension formula bounds the rational 5-adic representation types in one ordinary residue disc.'}
  - {to: crystalline-tate-module-good-reduction, label: uses, note: 'Good reduction makes the ordinary extension class crystalline.'}
  - {to: galois-isomorphisms-transport-ordinary-p-divisible-groups, label: uses, note: 'Uses its connected-etale description of ordinary Tate modules, over the single field Q_5.'}
  - {to: faltings-tate-isogeny-theorem, label: analogous-to, note: 'Shows the limit of extending its number-field isogeny conclusion to local fields, even with integral modules at all primes and pairings.'}
  - {to: prime-to-p-tate-modules-do-not-bound-component-groups, label: analogous-to, note: 'Here even the integral p-adic module is fixed; the varying invariant is the geometric isogeny class, with good reduction throughout.'}
  - {to: serre-tate-deformation-theory, label: analogous-to, note: 'Its reconstruction retains a compatible marking of the special fibre; the Tate-module isomorphisms here can change that marking on the p-divisible group.'}
---

**Theorem (proved here).** There is an uncountable family of elliptic curves $E/\mathbb Q_5$, pairwise nonisogenous over $\overline{\mathbb Q}_5$, all with good ordinary reduction
$$E_0/\mathbb F_5:\quad y^2=x^3+x+1,$$
such that, for every two members $E,F$ and every prime $\ell$, there is a $G_{\mathbb Q_5}$-equivariant isomorphism
$$f_\ell:T_\ell E\xrightarrow{\sim}T_\ell F,\qquad
e_{F,\ell}(f_\ell x,f_\ell y)=e_{E,\ell}(x,y).$$
Here $e_{E,\ell}$ is the perfect alternating Weil pairing with values in the fixed module $\mathbb Z_\ell(1)$. Taking the product gives an isomorphism of the entire integral adelic Tate modules with their pairings.

**Proof.**

*1. An uncountable residue disc.* For $t\in\mathbb Z_5$, set
$$E_t:\quad y^2=x^3+x+(1+5t).$$
Its discriminant is $-16(4+27(1+5t)^2)$, a $5$-adic unit, so this equation defines an elliptic scheme over $\mathbb Z_5$ with special fibre $E_0$. The values of $x^3+x+1$ for $x=0,1,2,3,4$ are $1,3,1,1,4$ modulo $5$, giving $\#E_0(\mathbb F_5)=9$. Since this is not $1$ modulo $5$, $E_0$ is ordinary by the point-count criterion [@sutherland2012supersingular, §1, p. 1]. Moreover,
$$j(E_t)=\frac{6912}{4+27(1+5t)^2}$$
is injective in $t$: equality forces $1+5t=\pm(1+5s)$, and reduction modulo $5$ excludes the minus sign. Thus the family has uncountably many geometric isomorphism classes.

*2. At most two rational $5$-adic representation types.* Let $\eta:G_{\mathbb Q_5}\to\mathbb Z_5^\times$ be the unramified character on the Tate module of the étale part of $E_0[5^\infty]$. The ordinary connected–étale sequence gives, for every $t$,
$$0\longrightarrow\mathbb Q_5(1)\eta^{-1}
\longrightarrow V_5E_t\longrightarrow\mathbb Q_5\eta\longrightarrow0.\tag{1}$$
Indeed, the étale quotient over the henselian ring $\mathbb Z_5$ is determined by its special fibre. The connected height-one part is of multiplicative type, and the principal polarization identifies it with the Cartier dual of the étale quotient. This is the ordinary extension description in [@katz1981serretate, proof of Theorem 2.1, pp. 149–150], descended from algebraically closed residue fields by its naturality, and passed through the Artinian quotients.

Put $W=\mathbb Q_5(1)\eta^{-2}$. Good reduction makes $V_5E_t$ crystalline [@gunton2021crystalline, Corollary 5.5, p. 77]. Crystalline representations are closed under subquotients, duals and tensor products [@brinonconrad2009, Theorem 5.2.1(2–3), p. 68; §9.1, p. 133]. Twisting (1) by $\eta^{-1}$ therefore gives a crystalline extension of $\mathbb Q_5$ by $W$. Its class lies in $H^1_f(\mathbb Q_5,W)$ by [@blochkato1990tamagawa, remark after (3.7.4), p. 354].

In the convention that $\mathbb Q_5(1)$ has weight $1$, $W$ has this single weight, so $\dim_{\mathbb Q_5}(D_{\mathrm{dR}}(W)/\operatorname{Fil}^0)=1$. Also $H^0(\mathbb Q_5,W)=0$, since inertia acts through the nontrivial cyclotomic character. Consequently
$$\dim_{\mathbb Q_5}H^1_f(\mathbb Q_5,W)=1$$
by [@blochkato1990tamagawa, Corollary 3.8.4, p. 355]. All nonzero classes in this line give isomorphic middle representations: scaling the subrepresentation scales the extension class by any element of $\mathbb Q_5^\times$. Including the split class gives at most two possibilities for $V_5E_t$.

*3. Only countably many integral types.* In a fixed two-dimensional $\mathbb Q_5$-representation $V$, there are countably many lattices. Fix a lattice $L$; every other lattice lies between $5^nL$ and $5^{-n}L$ for some $n\ge0$. For each $n$, these intermediate lattices correspond to subgroups of the finite group $5^{-n}L/5^nL$. This also bounds the number of Galois-stable lattices. Step 2 therefore gives only countably many isomorphism classes of $T_5E_t$.

There are at most two paired types on any one such module $T$. Fix one perfect alternating pairing $e:T\times T\to\mathbb Z_5(1)$. Every other one is $u e$ for $u\in\mathbb Z_5^\times$, since $\bigwedge^2T$ has rank one. Scalar automorphisms of $T$ identify pairings whose ratio is a square. Hensel's lemma shows that $\mathbb Z_5^\times/(\mathbb Z_5^\times)^2$ has order two. Thus only countably many paired integral $5$-adic types occur.

*4. All other primes are already fixed.* For $\ell\ne5$, the finite group schemes $E_t[\ell^n]$ are finite étale over $\mathbb Z_5$. Their marked special fibres are all $E_0[\ell^n]$. The equivalence between finite étale schemes over a henselian local ring and over its residue field identifies these systems for every $t$, including their Weil pairings and transition maps. Thus all $T_\ell E_t$ are isomorphic with their pairings, simultaneously for every $\ell\ne5$.

*5. Remove the geometric isogenies.* Since a countable union of countable sets is countable, Step 3 leaves an uncountable subfamily with one paired integral $5$-adic type. A geometric isogeny class of elliptic curves in characteristic zero contains only countably many geometric isomorphism classes: an isogeny out of a fixed curve has a finite subgroup as kernel; a subgroup of order $n$ is contained in its finite $n$-torsion, so there are finitely many choices for each $n$. Quotients by these kernels exhaust its isogeny class, using dual isogenies to reverse directions. Choose one member from each geometric isogeny class in the subfamily. Uncountably many remain, and Step 4 supplies all the other paired Tate-module isomorphisms. $\square$

**Scope.** This is an existence proof by countability; it does not select two explicit parameters $t$. The full $G_{\mathbb Q_5}$-action is fixed, with no change of local field or Galois group. [Serre–Tate reconstruction](serre-tate-deformation-theory.md) also retains compatibility with a specified special-fibre marking. The unmarked p-divisible-group isomorphisms supplied by the $5$-adic Tate modules can act nontrivially on that marking.
