---
title: Characteristic-free recovery of quasi-divisor chains
kind: theorem
summary: 'Alternating multiplicative characters recover exact minimized inertia and decomposition pairs for quasi-prime divisor chains of length below the transcendence degree, even in residue characteristic $\ell$. This checks the local induction in a 2026 Bogomolov–Pop manuscript.'
tags: [function-fields, valuations, galois-groups]
edges:
  - {to: quasi-prime-divisor, label: uses}
  - {to: quasi-divisorial-groups-recoverable, label: analogous-to, note: "An explicit character-space recognition and residual induction; it also works when a residual field has characteristic ell."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks Lemmas 3.2–3.4 and the local induction of Proposition 3.5 [@openai2026bp, pp. 8–10]; the bracket-to-character input is its Lemma 3.1, pp. 6–7."}
---

**Setting.** Fix a prime $\ell$. For a function field $F/\kappa$ over an algebraically closed field, put
$$W_F=\mathrm{Hom}(F^\times,\mathbb Z_\ell),\qquad G_F=W_F\otimes_{\mathbb Z_\ell}\mathbb Q_\ell.$$
Give $W_F$ the topology of pointwise convergence. Here $G_F$ denotes a character space, not an absolute Galois group. A pair $f,g\in G_F$ is *alternating* if
$$f(x)g(1-x)=f(1-x)g(x)\quad(x\in F\setminus\{0,1\}).$$
For a valuation $v$, write $U_v=\mathcal O_v^\times$, $U_v^1=1+\mathfrak m_v$, $I_v=U_v^\perp\subset W_F$, $D_v=(U_v^1)^\perp$, and $\mathcal I_v=I_v\otimes\mathbb Q_\ell$, $\mathcal D_v=D_v\otimes\mathbb Q_\ell$. These definitions make sense in every characteristic [@openai2026bp, §§3.1–3.2, pp. 6–8]. A quasi-prime $r$-divisor is a composition of $r$ successive [quasi prime divisors](quasi-prime-divisor.md); its relative value group is free of rank $r$, and its residue transcendence degree is $\mathrm{trdeg}(F/\kappa)-r$ [@openai2026bp, §3.2, p. 8].

**Statement.** Let $K/k$ and $L/l$ be such function fields, each of transcendence degree at least $2$, with no characteristic restriction. Suppose a continuous $\mathbb Z_\ell$-module isomorphism $\varphi:W_L\to W_K$ preserves alternating pairs in both directions. Then their transcendence degrees agree, say they are $d$, and for every $1\le r<d$ it carries exactly the pairs $I_w\subset D_w$ of quasi-prime $r$-divisors onto the corresponding pairs for $K/k$. For matched pairs, restriction to units identifies the induced isomorphism with
$$W_{Lw}=D_w/I_w\ \longrightarrow\ D_v/I_v=W_{Kv},$$
and this isomorphism again preserves alternating pairs in both directions. This is the character-space content of the manuscript's Lemmas 3.2–3.4 and Proposition 3.5 [@openai2026bp, pp. 8–10]. Its proof is rebuilt below to check the characteristic-free induction and the exact integral groups.

**Local input.** A subset of $G_F$ is *valuative* if it lies in some $\mathcal I_u$. Topaz proves, for arbitrary fields, that a valuative subset $\Sigma$ has a unique coarsest associated valuation $u_\Sigma$, and that it coarsens every valuation whose inertia space contains $\Sigma$ [@topaz2019galois, Fact 2.1, pp. 4–5]. The valuative elements of an alternating subspace form a valuative subspace $\Sigma$ of codimension at most one, and that alternating subspace lies in $\mathcal D_{u_\Sigma}$ [@topaz2019galois, Corollary 2.7, p. 7]. A character alternating with every member of a valuative subset lies in its associated decomposition space [@topaz2019galois, Lemma 2.5, pp. 5–6]. For $\mathbb Z_\ell$ coefficients every character kills $-1$, so the sign condition in those statements is automatic. The restriction to characteristic different from $\ell$ begins only in that paper's §3; it is absent from these local results.

**Proof.** This follows the manuscript's character-space adaptation of Topaz's Fact 3.2 and Theorem 3.3 [@topaz2019galois, pp. 8–9].

*1. Relative dimension.* Set $s=\mathrm{trdeg}(F/\kappa)$. Since characters kill the divisible group $\kappa^\times$, for every valuation $u$,
$$\dim_{\mathbb Q_\ell}\mathcal I_u\le\mathrm{rrank}(uF/u\kappa),\qquad
\mathrm{rrank}(uF/u\kappa)+\mathrm{trdeg}(Fu/\kappa u)\le s.$$
Here $\mathrm{rrank}$ is dimension after tensoring with $\mathbb Q$. If an alternating subspace $S$ equals its valuative part, these inequalities bound $\dim S$ by $s$. Otherwise its valuative part $\Sigma$ has codimension one. For $u=u_\Sigma$, a member of $S\setminus\Sigma$ has nonzero residual character, so $Fu\ne\kappa u$. The field $\kappa u$ is algebraically closed, hence $\mathrm{trdeg}(Fu/\kappa u)\ge1$, and again $\dim S\le s$. Apply the argument to finite-dimensional subspaces if $S$ is infinite-dimensional. A full discrete flag at a smooth closed point supplies an alternating inertia space of dimension $s$. Thus $s$ is exactly the maximum alternating dimension. If $\dim S=s$, then for $S=\Sigma$ all inequalities $s\le\dim\mathcal I_u\le\mathrm{rrank}(uF/u\kappa)\le s$ are equalities; otherwise all inequalities
$$s-1\le\dim\mathcal I_u\le\mathrm{rrank}(uF/u\kappa)\le s-\mathrm{trdeg}(Fu/\kappa u)\le s-1$$
are equalities. Thus $\Sigma=\mathcal I_u$ and $u$ has no transcendence defect [@openai2026bp, Lemma 3.3, p. 9].

At equality, the relative value group is finitely generated and the residue extension is a function field: choose elements with values rationally independent modulo $u\kappa$ and elements with algebraically independent residues. They form a transcendence basis, and the finite-extension valuation inequality gives both assertions. Divisibility of $u\kappa$ makes $uF/u\kappa$ torsion free, hence free abelian [@openai2026bp, §3.2, p. 8].

*2. Recognition of rank one.* A line $H\subset G_F$ is quasi-divisorial inertia exactly when it is the intersection of two alternating $s$-dimensional subspaces. For the forward implication, take two independent discrete full flags in the residue function field of a quasi prime divisor $v$. They exist by taking distinct prime divisors in a rational subfield, completing them to flags and prolonging to the finite extension. Independence persists under this algebraic extension. Independent valuation approximation makes their inertia spaces disjoint. Composing with $v$ gives the required intersection $\mathcal I_v$ [@openai2026bp, Lemma 3.4, pp. 9–10].

For the converse, write $H=S_1\cap S_2$. Step 1 gives valuative parts $\Sigma_i=\mathcal I_{u_i}$ of dimension at least $s-1$, with each $u_i$ having no transcendence defect. If $u_1$ coarsens $u_2$, then $\Sigma_1\subset\Sigma_2$, so $0\ne\Sigma_1\subset H$ and $H$ is valuative. The reverse comparison is identical. If they are incomparable, let $w$ be their finest common coarsening. Their induced valuations on $Fw$ are independent. For any $a\in U_w$, approximate its nonzero residue by $b$ for the first induced valuation and approximate $1$ by $b$ for the second. Lifting $b$ to a $w$-unit gives
$$a=(a/b)b\in U_{u_1}^1U_{u_2}^1.$$
The approximations require errors of value greater than the value of $a$ and greater than $0$, respectively, exactly as allowed by the independent-valuation theorem [@anscombedittmannfehm2020, Theorem 1.2 and footnote 4]. Conversely both principal-unit groups lie in $U_w$, so $U_w=U_{u_1}^1U_{u_2}^1$. Since $H$ annihilates both factors, $H\subset\mathcal I_w$ is valuative. This argument also covers trivial $w$.

In every case $H=\Sigma_1\cap\Sigma_2$. Its coarsest associated valuation $v=v_H$ coarsens both $u_i$, whence
$$H\subset\mathcal I_v\subset\mathcal I_{u_1}\cap\mathcal I_{u_2}=H.$$
A coarsening of a valuation without transcendence defect has the same property: rational ranks add under composition, and the two valuation inequalities sum to the equality for the finer valuation. Consequently $vF/v\kappa$ is free of rank $\dim\mathcal I_v=1$. Any coarsening with that same relative rank has the same inertia line and would contradict the coarsest-valuation property. Thus $v$ is quasi-prime. If another quasi prime divisor has inertia line $H$, then $v_H$ coarsens it and still has the required relative rank and residue transcendence degree; minimality forces equality. This proves uniqueness [@openai2026bp, Lemma 3.4, p. 10].

*3. Decomposition and the integral groups.* For $0\ne h\in H=\mathcal I_v$,
$$\mathcal D_v=\{f\in G_F:(h,f)\text{ is alternating}\}.$$
One inclusion follows by applying the valuation inequality to $x$ and $1-x$; the other is the local input applied to the valuative line $H$. Moreover
$$I_v=\mathcal I_v\cap W_F,\qquad D_v=\mathcal D_v\cap W_F.$$
Indeed, if a power of $\ell$ times an integral character annihilates a unit group, the character itself does, because $\mathbb Z_\ell$ is torsion free. Thus recognition recovers the full integral pairs, including their generators up to units, with no finite-index choice [@openai2026bp, Lemma 3.4 and the following paragraph, p. 10].

*4. Residues and iteration.* For a quasi-prime $r$-divisor $v$ there is an exact sequence
$$0\to(Fv)^\times/(\kappa v)^\times\to F^\times/(\kappa^\times U_v^1)\to vF/v\kappa\to0.$$
The last term is free, so the sequence splits. Applying $\mathrm{Hom}(-,\mathbb Z_\ell)$ gives $D_v/I_v=W_{Fv}$. The map is continuous, and the induced bijection is a homeomorphism because its source is compact and target Hausdorff. For characters in $D_v$, alternation is equivalent to residual alternation: when $v(x)>0$ the characters kill $1-x$, when $v(x)<0$ they take equal values on $x$ and $1-x$, and the remaining nontrivial case is exactly the residual equation. Conversely every residual element different from $0,1$ lifts to that case [@openai2026bp, Lemma 3.2, p. 8].

If $u$ is a valuation of $Fv$, the inverse images of $I_u$ and $D_u$ under $D_v\to W_{Fv}$ are $I_{u\circ v}$ and $D_{u\circ v}$, by the unit definitions. Starting with steps 1–3, repeat in the residue function fields while their transcendence degree is at least $2$. Their characteristic can be $\ell$: only multiplicative characters and the characteristic-free local input have been used. Applying the procedure to $\varphi$ and $\varphi^{-1}$ gives precisely the pairs of every length $r<d$ and the asserted residual isomorphisms [@openai2026bp, Proposition 3.5, p. 10]. $\square$

**Galois input and scope.** When the top fields have characteristic different from $\ell$, a bracket-compatible isomorphism of their pro-$\ell$ abelian Galois groups supplies the alternating-pair-preserving map, including for $\ell=2$ [@openai2026bp, Lemma 3.1, pp. 6–7]. Thus the characteristic-free induction above verifies the residual step in Proposition 3.5 without interpreting a characteristic-$\ell$ residue character group by Kummer theory. It stops at residual curves: $r=d$ is not claimed. It also does not distinguish true divisors from quasi prime divisors, or recognize finite residue constants and point inertia; the latter is the separate Proposition 3.7.

**Status.** This checks one local component of the [September 2026 manuscript](manuscripts-claiming-bogomolov-pop.md), not its global reconstruction claim. The proof above was rebuilt from its stated local inputs; no gap in this component was found. Topaz's local character theorem and the independent-valuation approximation theorem are cited inputs. No audit of the manuscript's §§4–7 is claimed here.
