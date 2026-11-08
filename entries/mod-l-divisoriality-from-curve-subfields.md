---
title: True divisors from mod-ell curve subfields
kind: theorem
summary: 'In transcendence degree at least 2, a quasi-prime divisor is trivial on the constants exactly when its decomposition annihilator meets some curve subfield in finite dimension mod ell. So matched quasi-divisorial pairs and curve subfields match true divisors. Checks Proposition 6.1 of a manuscript.'
tags: [function-fields, valuations, milnor-k-theory]
edges:
  - {to: quasi-prime-divisor, label: uses}
  - {to: divisorial-inertia-recovery-problem, label: addresses, note: "A finite-coefficient criterion conditional on knowing the curve-subfield images."}
  - {to: divisoriality-from-completed-curve-subfields, label: analogous-to, note: "Finite-dimensional intersection replaces the zero-intersection criterion for completed coefficients."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks Proposition 6.1 of the mod-ell manuscript with the preceding correspondences assumed."}
---

**Setting.** Fix a prime $\ell$ and put $\Lambda=\mathbb F_\ell$. Let $F/\kappa$ be a function field of transcendence degree $d\ge2$ over an algebraically closed field of characteristic different from $\ell$. Write
$$V_F=F^\times/F^{\times\ell},\qquad A_F=\mathrm{Hom}_\Lambda(V_F,\Lambda).$$
The character space has its topology of pointwise convergence. For a valuation $v$, put $I_v=(\mathcal O_v^\times)^\perp$ and $D_v=(1+\mathfrak m_v)^\perp$ in $A_F$, and take annihilators in $V_F$. A *curve subfield* $E$ contains $\kappa$, has transcendence degree one over it, and is relatively algebraically closed in $F$. Its Kummer space $V_E$ embeds in $V_F$: an $\ell$-th root in $F$ of an element of $E$ is algebraic over $E$, so already belongs to $E$.

**Criterion.** A quasi-prime divisor $v$ of $F/\kappa$ is a true prime divisor, that is, trivial on $\kappa$, if and only if
$$\dim_\Lambda(V_E\cap D_v^\perp)<\infty\tag{1}$$
for some curve subfield $E$ [@openai2026modl, Proposition 6.1, pp. 24–25].

Consequently, suppose $K/k$ and $L/l$ satisfy the same hypotheses, and $\Theta:V_K\to V_L$ is a linear isomorphism. Assume its evaluation dual $\Phi:A_L\to A_K$ matches quasi-divisorial pairs $I_w\subset D_w$ with $I_v\subset D_v$ in both directions. Assume also a bijection $E\leftrightarrow P$ of curve subfields satisfying $\Theta(V_E)=V_P$. Then the matching preserves true divisors and their full inertia-decomposition pairs. These are hypotheses; this entry does not construct either correspondence.

**Finite-kernel input.** If $N/M$ is finitely generated, $\mathrm{char}(M)\ne\ell$ and $\mu_\ell\subset M$, then $\ker(V_M\to V_N)$ is finite dimensional [@openai2026modl, Lemma 4.1, p. 15]. Here is the argument. Choose a transcendence basis $\mathbf z$ with $[N:M(\mathbf z)]=n<\infty$. Every finite algebraic intermediate field $M_1/M$ satisfies
$$[M_1:M]=[M_1(\mathbf z):M(\mathbf z)]\le n.$$
Such intermediate fields form a directed family of bounded degrees, so one of maximal degree contains all the others. The relative algebraic closure $M_0$ of $M$ in $N$ is therefore finite. If $r$ independent Kummer classes of $M$ vanish in $N$, their roots generate a degree $\ell^r$ extension inside $M_0$, bounding $r$.

**Proof of the criterion.** If $v$ is trivial on $\kappa$, then $vF=\mathbb Z$ and $\mathrm{trdeg}(Fv/\kappa)=d-1\ge1$. Choose a unit $t$ with residue transcendental over $\kappa$, and let $E$ be the relative algebraic closure of $\kappa(t)$ in $F$. The valuation is trivial on $\kappa(t)$ and on its algebraic extension $E$, so reduction embeds $E$ in $Fv$.

The kernel of $V_E\to V_{Fv}$ equals $V_E\cap D_v^\perp$. Indeed $D_v$ is dual to $F^\times/((1+\mathfrak m_v)F^{\times\ell})$. For a unit $e\in E^\times$, a residue identity $\bar e=\bar u^\ell$ lifts to $e/u^\ell\in1+\mathfrak m_v$. Conversely, such a principal-unit identity reduces to an $\ell$-th power; a root used in it is a unit because $v(e)=0$ and the value group is torsion free. The extension $Fv/E$ is finitely generated and contains the algebraically closed constants, so the finite-kernel input proves (1). This also checks the use of the residual character identification in the manuscript [@openai2026modl, Lemma 2.4, p. 7].

If $v$ is nontrivial on $\kappa$, let $E$ be any curve subfield. Choose $x\in E\setminus\kappa$ with $v(x)\ge0$, and $c_0\in\kappa^\times$ with $v(c_0)>0$. The elements
$$1+c_0^n x,\qquad n\ge1,$$
are principal units. Their classes are independent in $V_{\kappa(x)}$, since their zeros are the distinct points $x=-c_0^{-n}$ and each has order one. The finite extension $E/\kappa(x)$ kills at most a finite-dimensional subspace by the finite-kernel input. Their images therefore span an infinite-dimensional subspace of $V_E\cap D_v^\perp$. Thus (1) fails for every $E$.

Finally evaluation gives $\Theta(D_v^\perp)=D_w^\perp$ for matched pairs. It preserves dimensions of intersections with matched curve-subfield spaces, so the criterion transports true divisors in both directions. $\square$

**Checks and scope.** For $F=\kappa(x,y)$, $v=\mathrm{ord}_{x=0}$ and $E=\kappa(y)$, reduction on $E$ is the identity and the intersection in (1) is zero. The proof only requires a finite-dimensional kernel in general: unlike with completed coefficients, finite algebraic extensions can kill nonzero mod-$\ell$ classes. For $d=1$ the criterion fails even for true point divisors: the only curve subfield is $F$, and, for a uniformizer $x$, the principal units $1+cx$ with $c\in\kappa^\times$ span an infinite-dimensional space by the same independence and finite-kernel argument.

The argument includes $\ell=2$. It makes no restriction on the residue characteristic of quasi-prime divisors nontrivial on the constants; the specialization argument is used only for true divisors, whose residue field contains $\kappa$ and has characteristic different from $\ell$. This checks one component of the [unreviewed manuscript](manuscripts-claiming-bogomolov-pop.md), not recovery of the assumed curve subfields or quasi-divisorial data.
