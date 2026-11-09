---
title: Function fields from their pro-ℓ abelian-by-central Galois groups
kind: theorem
summary: 'From checked parts of a 2026 manuscript: in transcendence degree at least $2$ over algebraically closed fields of characteristic not $\ell$, each bracket-compatible isomorphism of $\Pi^a$ comes from a field isomorphism up to one unit, uniquely up to Frobenius. So the Bogomolov–Pop conjecture holds.'
tags: [function-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: bogomolov-pop-conjecture, label: resolves, note: "Part 3: every pair of fields the conjecture concerns is covered, by part 1 when both satisfy the manuscript's hypotheses and by part 2 otherwise."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks that the component checks of §§2–6 of the September 2026 manuscript compose into its Theorem 1.1 [@openai2026bp, Theorem 1.1, p. 2]. Its Lemma 3.1 is derived from Topaz's criterion, and a coefficient-free route replaces its Proposition 7.1."}
  - {to: kummer-duality-for-commuting-lifts, label: uses, note: "Step 0 and part 2: commuting lifts in Π^c are alternating pairs of characters."}
  - {to: characteristic-free-quasi-divisor-recovery, label: uses, note: "Step 1: transcendence degree and quasi-prime r-divisors with their pairs I ⊂ D."}
  - {to: recognition-of-finite-constant-residual-curves, label: uses, note: "Step 2: finite residual constants and point inertia lines."}
  - {to: uniform-support-bound-for-kummer-pencils, label: uses, note: "Step 3, through the curve-subfield theorem; and in part 2, the identification of D_v/I_v with the residual character group."}
  - {to: completed-curve-subfield-correspondence, label: uses, note: "Step 4: the bijection of completed curve subfields."}
  - {to: divisoriality-from-completed-curve-subfields, label: uses, note: "Step 5: true divisors, rational subfields and their quotient squares."}
  - {to: simultaneous-values-from-pro-l-rational-quotients, label: uses, note: "Step 6: the field isomorphism of perfect closures."}
  - {to: global-scalar-rigidity-for-pro-l-rational-quotients, label: uses, note: "Step 7: the given map is the field map up to one unit."}
  - {to: field-automorphisms-acting-by-scalars-on-kummer-classes, label: uses, note: "Uniqueness modulo Frobenius, from its part 3."}
  - {to: function-fields-of-curves-have-free-galois-groups, label: uses, note: "Part 2, for second fields of transcendence degree one."}
  - {to: artin-schreier-and-pro-p-galois-groups, label: uses, note: "Part 2, for second fields of characteristic ℓ."}
  - {to: abelian-by-central-galois-group, label: uses}
  - {to: kummer-theory, label: uses, note: "Step 0 and step 8: the Kummer identification of Π^a with multiplicative characters."}
---

**Setting.** Fix a prime $\ell$. A *function field* $F|\kappa$ is a finitely generated extension of an algebraically closed field $\kappa$. For any field $F$, let $\Pi^a_F$, $\Pi^c_F$, $\Delta_F$ and the pairing $[\sigma,\tau]_F\in\Delta_F$ be built from the maximal pro-$\ell$ Galois group $G_F(\ell)$ as in [abelian-by-central Galois groups](abelian-by-central-galois-group.md). The same formulas make sense when $\mathrm{char}\,F=\ell$, as in Topaz's statement of the conjecture [@topaz2016, §1, p. 2]. An isomorphism $\Phi:\Pi^a_L\to\Pi^a_K$ is *bracket-compatible* if some isomorphism $\psi:\Delta_L\to\Delta_K$ satisfies $\psi[\sigma,\tau]_L=[\Phi\sigma,\Phi\tau]_K$.

Let $\mathrm{Isom}^i_F(K,L)$ be the set of field isomorphisms $\alpha:K^i\to L^i$ of perfect closures, modulo Frobenius twists. Every such $\alpha$ maps $k$ onto $l$, because $k$ and $l$ are the sets of multiplicatively divisible elements [@topaz2016, §1, p. 2]. Extend $\alpha$ to an isomorphism $\tilde\alpha$ of algebraic closures, and let $\alpha_*:\Pi^a_L\to\Pi^a_K$ be induced by $g\mapsto\tilde\alpha^{-1}g\tilde\alpha$. This map does not depend on $\tilde\alpha$, and the canonical map of the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md) is
$$\Phi_{K,L}:\mathrm{Isom}^i_F(K,L)\longrightarrow\overline{\mathrm{Isom}}^c(\Pi^a_L,\Pi^a_K),\qquad[\alpha]\longmapsto[\alpha_*]$$
[@topaz2016, §1, p. 2] [@openai2026bp, §1.1, p. 2].

Put $W_F=\mathrm{Hom}(F^\times,\mathbb Z_\ell)$, with the topology of pointwise convergence, and $\mathcal G_F=W_F\otimes\mathbb Q_\ell$. If $\mathrm{char}\,F\ne\ell$, fix an isomorphism $\iota_F:\mathbb Z_\ell(1)\to\mathbb Z_\ell$. [Kummer theory](kummer-theory.md) then gives a topological isomorphism $\kappa_F:\Pi^a_F\to W_F$, with $\kappa_F(\sigma)(x)=\iota_F\big((\sigma(x_n)/x_n)_n\big)$ for compatible $\ell^n$-th roots $x_n$ of $x$ [@openai2026bp, §2, p. 4]. A pair in $\mathcal G_F$ is *alternating* if $f(x)g(1-x)=f(1-x)g(x)$ for all $x\in F\setminus\{0,1\}$, as in [quasi-divisor recovery](characteristic-free-quasi-divisor-recovery.md). The notations $I_v\subseteq D_v$, quasi-prime $r$-divisors and $\widehat F$ are as in that entry and in the [uniform support bound](uniform-support-bound-for-kummer-pencils.md).

**Theorem.**

1. Let $K|k$ and $L|l$ be function fields with $\mathrm{char}\,k,\mathrm{char}\,l\ne\ell$ and $\mathrm{trdeg}(K|k),\mathrm{trdeg}(L|l)\ge2$. For every bracket-compatible $\Phi:\Pi^a_L\to\Pi^a_K$ there are a field isomorphism $\alpha:K^i\to L^i$ and a unit $u\in\mathbb Z_\ell^\times$ with $\Phi=u\,\alpha_*$. The class of $\alpha$ modulo Frobenius is unique. So $\Phi_{K,L}$ is bijective, and a bracket-compatible isomorphism forces $\mathrm{char}\,k=\mathrm{char}\,l$ and $\mathrm{trdeg}(K|k)=\mathrm{trdeg}(L|l)$. This is Theorem 1.1 of the September 2026 manuscript [@openai2026bp, Theorem 1.1, p. 2].
2. Let $K|k$ be a function field with $\mathrm{char}\,k\ne\ell$ and $\mathrm{trdeg}(K|k)\ge2$, and let $L|l$ be a function field with $\mathrm{char}\,l=\ell$ or $\mathrm{trdeg}(L|l)\le1$. Then there is no bracket-compatible isomorphism $\Pi^a_L\to\Pi^a_K$, and $\mathrm{Isom}^i_F(K,L)$ is empty.
3. The Bogomolov–Pop conjecture holds as stated: for function fields $K|k$ and $L|l$ with $\mathrm{char}\,K\ne\ell$ and $\mathrm{trdeg}(K|k)\ge2$, the map $\Phi_{K,L}$ is a bijection.
4. For $K|k$ and $L|l$ as in part 3, $K^i\cong L^i$ as fields if and only if $\Pi^c_L\cong\Pi^c_K$ as pro-$\ell$ groups.

**Proof of part 1.** Fix a bracket-compatible $\Phi$, with its $\psi$. Each step quotes a theorem on `main` and checks that its hypotheses are outputs of earlier steps. The hypotheses of every step are symmetric in $K$ and $L$, so each step also applies to the inverse map.

*Step 0: alternating pairs.* Put $\varphi=\kappa_K\circ\Phi\circ\kappa_L^{-1}:W_L\to W_K$. It is a continuous isomorphism of abelian pro-$\ell$ groups, hence $\mathbb Z_\ell$-linear. Let $\Theta:\widehat K\to\widehat L$ be its evaluation dual. As $\psi$ is injective, $[\sigma,\tau]_L=0$ exactly when $[\Phi\sigma,\Phi\tau]_K=0$. By the pro-$\ell$ form of [Topaz's criterion](kummer-duality-for-commuting-lifts.md), for $F=K,L$, $[\sigma,\tau]_F=0$ exactly when $\kappa_F\sigma,\kappa_F\tau$ are alternating. So $\varphi$ preserves alternating pairs in $W$ in both directions. The same holds in $\mathcal G$, because the defining equation is bilinear and powers of $\ell$ move any pair of $\mathcal G_F$ into the torsion-free $W_F$. This is the consequence of the manuscript's Lemma 3.1 that its §3 uses [@openai2026bp, Lemma 3.1 and the paragraph after its proof, pp. 6–7], here derived from Topaz's theorem.

*Step 1: quasi-divisorial data.* [Quasi-divisor recovery](characteristic-free-quasi-divisor-recovery.md) applies to $\varphi$. Both transcendence degrees equal some $d\ge2$. For each $1\le r<d$, $\varphi$ maps the set of pairs $(I_w,D_w)$, for $w$ a quasi-prime $r$-divisor of $L|l$, onto the corresponding set for $K|k$. With $r=1$ and $r=d-1$ this is condition (L1) of [the curve-subfield theorem](completed-curve-subfield-correspondence.md), and it gives condition (M1) of [the support bound](uniform-support-bound-for-kummer-pencils.md).

*Step 2: residual curves.* Let $w$ and $v$ be quasi-prime $(d-1)$-divisors with $\varphi(I_w)=I_v$ and $\varphi(D_w)=D_v$. Step 1 with $r=1$ gives $\varphi\big(\bigcup_uI_u\big)=\bigcup_{u'}I_{u'}$, the unions over the quasi prime divisors of $L|l$ and $K|k$. As $\varphi$ is a homeomorphism, it maps the closure $J_L$ onto $J_K$. So $\varphi$ carries $J_L,I_w,D_w$ to $J_K,I_v,D_v$. By the transport statement of [residual-curve recognition](recognition-of-finite-constant-residual-curves.md), the induced isomorphism $W_{Lw}=D_w/I_w\to D_v/I_v=W_{Kv}$ preserves the subgroup $R$, its maximal procyclic subgroups and Pop's product condition. Pop's criterion applies on both sides, since $\mathrm{char}\,k,\mathrm{char}\,l\ne\ell$ and $d\ge2$. Hence $lw$ is algebraic over a finite field exactly when $kv$ is, and then the induced isomorphism maps the point inertia lines of the curve of $Lw$ onto those of the curve of $Kv$. This is condition (L2), and with step 1 it gives (M2).

*Step 3: bounded pencils.* By steps 1 and 2, $\varphi$ and $\varphi^{-1}$ match residual curves, so part 2 of [the support bound](uniform-support-bound-for-kummer-pencils.md) applies to $\Theta$ and to $\Theta^{-1}$. The curve-subfield theorem uses this internally.

*Step 4: curve subfields.* Steps 1 and 2 say that $\varphi$ matches local data. By [the curve-subfield theorem](completed-curve-subfield-correspondence.md), there is a bijection $E\mapsto P$ from the curve subfields of $K|k$ onto those of $L|l$ with $\Theta(\widehat E)=\widehat P$.

*Step 5: divisors and rational quotients.* Step 1 with $r=1$ and step 4 are the two hypotheses of part 3 of [divisoriality from completed curve subfields](divisoriality-from-completed-curve-subfields.md). That part gives a bijection $w\mapsto v$ from the prime divisors of $L|l$ onto those of $K|k$, with $\varphi(I_w)=I_v$ and $\varphi(D_w)=D_v$. Here a prime divisor is a quasi prime divisor trivial on the constants, so $I_v=\mathbb Z_\ell\,\mathrm{ord}_v$. It also says that the bijection of step 4 restricts to a bijection $E\mapsto P_E$ of the relatively algebraically closed rational subfields, and gives isomorphisms $\varphi_E:W_{P_E}\to W_E$ with
$$\rho_E\circ\varphi=\varphi_E\circ\rho_{P_E}$$
that map the point inertia lines of $P_E$ bijectively onto those of $E$. Here $\rho$ is restriction.

*Step 6: the field isomorphism.* The outputs of step 5 are hypotheses 1 and 2 of [simultaneous values from pro-$\ell$ rational quotients](simultaneous-values-from-pro-l-rational-quotients.md). That entry gives an isomorphism $\alpha:K^i\to L^i$ that restricts to an isomorphism $k\to l$ and has $\alpha(E^i)=P_E^i$ for every relatively algebraically closed rational subfield $E$ of $K$. In particular $\mathrm{char}\,k=\mathrm{char}\,l$.

*Step 7: one unit.* Steps 5 and 6 are the hypotheses of the application of [global scalar rigidity](global-scalar-rigidity-for-pro-l-rational-quotients.md): $\varphi$ matches divisorial pairs, matches the relatively algebraically closed rational subfields with commuting restriction maps, and $\alpha$ carries $k$ onto $l$ and each $E^i$ onto $P_E^i$. So $\varphi=a\,\alpha^*$ for some $a\in\mathbb Z_\ell^\times$, where $\alpha^*:W_L\to W_K$ is $\chi\mapsto\chi\circ\alpha$, with characters extended uniquely to perfect closures.

*Step 8: back to Galois groups.* The extension $\tilde\alpha$ restricts to $\alpha$ on $\mu_{\ell^\infty}\subset k$, so $\iota_L\circ\alpha\circ\iota_K^{-1}$ is multiplication by a unit $c\in\mathbb Z_\ell^\times$. Let $x\in K^\times$ with compatible roots $x_n$. Then the $\tilde\alpha(x_n)$ are compatible roots of $\alpha(x)$, and
$$\frac{(\alpha_*\sigma)(x_n)}{x_n}=\tilde\alpha^{-1}\Big(\frac{\sigma(\tilde\alpha x_n)}{\tilde\alpha x_n}\Big).$$
Applying $\iota_K$ gives $\kappa_K(\alpha_*\sigma)(x)=c^{-1}\kappa_L(\sigma)(\alpha(x))$. Here $\kappa_L(\sigma)$ is evaluated on $\alpha(x)\in(L^i)^\times$ through the unique extension to the perfect closure. The Kummer formula computes that extension: if $y^{p^m}\in L^\times$, the $p^m$-th powers of compatible roots of $y$ are compatible roots of $y^{p^m}$. So $\kappa_K\circ\alpha_*\circ\kappa_L^{-1}=c^{-1}\alpha^*$, and step 7 gives
$$\Phi=\kappa_K^{-1}\circ\varphi\circ\kappa_L=a\,\kappa_K^{-1}\circ\alpha^*\circ\kappa_L=ac\,\alpha_*.$$
Take $u=ac$.

*Uniqueness and bijectivity.* By part 3 of [field automorphisms acting by scalars](field-automorphisms-acting-by-scalars-on-kummer-classes.md), $\Phi_{K,L}$ is injective for every pair of fields. So if $\Phi=u\,\alpha_*=u'\alpha'_*$, then $\alpha'$ is a Frobenius twist of $\alpha$. Surjectivity is the existence just proved. Steps 1 and 6 give the equalities of transcendence degrees and characteristics. $\square$

**Proof of part 2.** First, $\mathrm{Isom}^i_F(K,L)$ is empty. A field isomorphism $K^i\to L^i$ preserves the characteristic and maps $k$ onto $l$. So it preserves the transcendence degree, which perfect closure does not change.

*A commuting pair in $\Pi^a_K$.* Let $v$ be a prime divisor of $K|k$, and put $f=\mathrm{ord}_v\in W_K$. The residue field $Kv$ has transcendence degree $d-1\ge1$ over $k$. So it has a normalized discrete valuation $\mathrm{ord}_P$ trivial on $k$, and an element $\bar b$ with $\mathrm{ord}_P(\bar b)=1$. A prime divisor is a quasi prime divisor, as noted in Lemma C of [the curve-subfield theorem](completed-curve-subfield-correspondence.md). So restriction to units identifies $D_v/I_v$ with $W_{Kv}$, and the class of a $v$-unit induces the class of its residue, as checked in [the support bound](uniform-support-bound-for-kummer-pencils.md). So there is $g\in D_v$ inducing $\mathrm{ord}_P$, and then $g(b)=1$ for every $v$-unit $b$ with residue $\bar b$. Choose such a $b$, and $a\in K^\times$ with $v(a)=1$. Since $f(b)=0$,
$$f(a)g(b)-f(b)g(a)=1.$$
The pair $(f,g)$ is alternating. Let $x\in K\setminus\{0,1\}$. Characters kill $-1$, as $\mathbb Z_\ell$ is torsion-free.

- If $v(x)>0$, then $1-x\in1+\mathfrak m_v$, so $g(1-x)=0=f(1-x)$, and both sides vanish.
- If $v(x)<0$, then $1-x=-x(1-x^{-1})$ with $1-x^{-1}\in1+\mathfrak m_v$, so $g(1-x)=g(x)$ and $f(1-x)=f(x)$, and both sides are $f(x)g(x)$.
- If $v(x)=0$, then $f(x)=0$. If also $v(1-x)>0$, then $x\in1+\mathfrak m_v$ and $g(x)=0$. Otherwise $f(1-x)=0$. Both sides vanish either way.

Put $\sigma=\kappa_K^{-1}f$ and $\tau=\kappa_K^{-1}g$. By Topaz's criterion, $[\sigma,\tau]_K=0$. The maps $x_1(\rho)=\kappa_K(\rho)(a)$ and $x_2(\rho)=\kappa_K(\rho)(b)$, taken modulo $\ell$, are continuous characters $\Pi^a_K\to\mathbb Z/\ell$ with $x_1(\sigma)x_2(\tau)-x_1(\tau)x_2(\sigma)=1$.

*A lifting property of $L$.* Let $H$ be the group of triples $(a_1,a_2,c)\in(\mathbb Z/\ell)^3$ with $(a_1,a_2,c)(a_1',a_2',c')=(a_1+a_1',a_2+a_2',c+c'+a_1a_2')$. These are the upper unitriangular $3\times3$ matrices over $\mathbb Z/\ell$, with entries $a_1,c$ in the first row and $a_2$ in the second. Let $\pi:H\to(\mathbb Z/\ell)^2$ forget $c$. A direct computation gives
$$[(a_1,a_2,c),(a_1',a_2',c')]=(0,0,a_1a_2'-a_1'a_2),$$
so $H$ has nilpotency class $2$. Claim: every continuous homomorphism $\chi:G_L(\ell)\to(\mathbb Z/\ell)^2$ is $\pi\circ h$ for a continuous homomorphism $h:G_L(\ell)\to H$.

- If $\mathrm{char}\,l=\ell$, then $G_L(\ell)$ is free pro-$\ell$ ([Artin–Schreier theory](artin-schreier-and-pro-p-galois-groups.md)), on a basis $X$ converging to $1$. Put $h(x)=(\chi(x),0)$ for $x\in X$. As $\ker\chi$ is open, $h(x)=1$ for almost all $x$, so $h$ extends to a continuous homomorphism by freeness. Then $\pi\circ h$ and $\chi$ agree on $X$, hence everywhere.
- If $\mathrm{trdeg}(L|l)=1$, then the absolute Galois group $G_L$ is free profinite on a basis converging to $1$, with the corresponding universal property ([free Galois groups of curves](function-fields-of-curves-have-free-galois-groups.md)). The same construction lifts $\chi$, composed with $G_L\to G_L(\ell)$, to $G_L\to H$. The lift factors through $G_L(\ell)$, because $H$ is an $\ell$-group.
- If $\mathrm{trdeg}(L|l)=0$, then $L=l$, so $G_L(\ell)=1$ and $h=1$ works.

*Conclusion.* Suppose $\Phi:\Pi^a_L\to\Pi^a_K$ is bracket-compatible. Put $\sigma'=\Phi^{-1}\sigma$ and $\tau'=\Phi^{-1}\tau$. Then $\psi[\sigma',\tau']_L=[\sigma,\tau]_K=0$, so $[\sigma',\tau']_L=0$. The characters $y_i=x_i\circ\Phi$ of $\Pi^a_L$ satisfy $y_1(\sigma')y_2(\tau')-y_1(\tau')y_2(\sigma')=1$. Apply the claim to $\chi=(y_1,y_2)$, composed with $G_L(\ell)\to\Pi^a_L$. Since $H$ has class $2$, the lift $h$ kills $[G_L(\ell),[G_L(\ell),G_L(\ell)]]$, so it induces $\bar h:\Pi^c_L\to H$. For lifts $\tilde\sigma',\tilde\tau'\in\Pi^c_L$ of $\sigma',\tau'$, the commutator formula gives
$$\bar h\big([\tilde\sigma',\tilde\tau']\big)=(0,0,1)\ne1.$$
But $[\tilde\sigma',\tilde\tau']=[\sigma',\tau']_L$ is trivial, a contradiction. $\square$

**Proof of part 3.** Let $K|k$ and $L|l$ be as in the conjecture. If $\mathrm{char}\,l=\ell$ or $\mathrm{trdeg}(L|l)\le1$, part 2 says that both sets are empty, and the empty map is a bijection. Otherwise both fields satisfy the hypotheses of part 1, which proves bijectivity. $\square$

**Proof of part 4.** A field isomorphism $K^i\to L^i$ induces an isomorphism $G_L\to G_K$ of absolute Galois groups, since purely inseparable extensions do not change them. It therefore induces an isomorphism of the maximal pro-$\ell$ quotients and of their abelian-by-central quotients, which are defined by characteristic subgroups. Conversely, let $f:\Pi^c_L\to\Pi^c_K$ be an isomorphism. As $\Delta_F$ is the closed commutator subgroup of $\Pi^c_F$, $f$ maps $\Delta_L$ onto $\Delta_K$. It induces $\Phi:\Pi^a_L\to\Pi^a_K$, and $\psi=f|_{\Delta_L}$ satisfies $\psi[\sigma,\tau]_L=[\Phi\sigma,\Phi\tau]_K$, by computing with lifts as in [the lifting theorem](pairing-compatible-isomorphisms-lift-to-abelian-by-central-groups.md). By part 2, $\mathrm{char}\,l\ne\ell$ and $\mathrm{trdeg}(L|l)\ge2$, and part 1 gives the field isomorphism. $\square$

**Relation to the manuscript's proof.** The manuscript proves steps 0–5 through its Lemma 3.1, Propositions 3.5 and 3.7, §§4–5, Theorem 6.1 and Propositions 6.6–6.7, whose checks are linked above, except that step 0 here uses Topaz's criterion in place of Lemma 3.1. Its last step lifts $\Phi$ to $\Pi^c$ by its Lemma 2.3 and applies Pop's reconstruction theorems, its Proposition 7.1 [@openai2026bp, proof of Theorem 1.1, p. 24]. Those two inputs are checked in [the lifting theorem](pairing-compatible-isomorphisms-lift-to-abelian-by-central-groups.md), [the total decomposition graph](total-decomposition-graph-from-divisorial-inertia.md) and [Pop's reconstruction from rational quotients](pop-reconstruction-from-rational-quotient-diagrams.md). Steps 6 and 7 instead use the coefficient-free route of the October 2026 mod-$\ell$ manuscript, adapted to pro-$\ell$ characters in the linked entries. So the proof above uses neither Lemma 2.3 nor Pop's reconstruction theorems. The manuscript states Theorem 1.1 only for pairs with both transcendence degrees at least $2$ and both characteristics different from $\ell$. Part 2 covers the remaining pairs in the conjecture.

**What the proof rests on.** Parts 1–4 rest only on the entries linked above, all on `main`, and on what those entries cite without re-proving. The main cited inputs are the following.

- Topaz's criterion for commuting lifts, whose proof uses the Merkurjev–Suslin theorem.
- Topaz's local theory of valuative and alternating subspaces and the approximation theorem for independent valuations, in quasi-divisor recovery.
- Pop's criterion for residual curves, with Topaz's appendix for residue characteristic $\ell$.
- Standard spreading-out results and the manuscript's Bertini lemma for quasi-finite maps, its Lemma 4.2, both cited without re-proof in the support bound.
- Grothendieck's limited families and Quot schemes, in Lemma D of the curve-subfield theorem.
- For part 2, the freeness of the Galois groups of curve function fields, due to Douady, Harbater and Pop, and of maximal pro-$\ell$ Galois groups in characteristic $\ell$.

**Checks.**

- *An example for part 2.* Let $K=k(x,y)$, $v=\mathrm{ord}_{x=0}$, $a=x$ and $b=y$. The residue field is $k(y)$, $\mathrm{ord}_P$ is the order at $y=0$, and the determinant is $\mathrm{ord}_v(x)\,g(y)-\mathrm{ord}_v(y)\,g(x)=1$.
- *The prime $2$.* Every step allows $\ell=2$. For $\ell=2$ the group $H$ is dihedral of order $8$, and the commutator formula involves no division by $2$.
- *Transcendence degree $2$ is needed.* For curve function fields, part 4 fails. Over one algebraically closed $k$ of characteristic not $\ell$, the absolute Galois groups of $k(x)$ and of the function field of an elliptic curve are both free profinite of rank $|k|$ ([free Galois groups of curves](function-fields-of-curves-have-free-galois-groups.md)). So their groups $\Pi^c$ are isomorphic. The fields are not: a field isomorphism maps $k$ onto $k$, so it preserves the genus.

**Status.** This composes component checks made by AI agents and reviewed in this knowledgebase. Neither those components nor this composition has been peer reviewed, and neither has the [manuscript](manuscripts-claiming-bogomolov-pop.md). The composition found no mismatch between the outputs of one step and the hypotheses of the next. The manuscript's Lean formalization covers injectivity only, as recorded in that note.
