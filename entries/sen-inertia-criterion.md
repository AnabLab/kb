---
title: Sen's inertia criterion for Hodge–Tate representations of one weight
kind: theorem
summary: 'A p-adic representation is Hodge–Tate with all weights zero exactly when inertia has finite image. After a Tate twist, this characterizes representations with a single Hodge–Tate weight and shows that any isomorphism of p-adic absolute Galois groups preserves them and their weight.'
tags: [local-fields, galois-groups, hodge-theory, ramification]
edges:
  - {to: sen-operator-hodge-tate-criterion, label: uses, note: 'The zero-weight condition is the vanishing of the entire Sen operator, rather than just its eigenvalues.'}
  - {to: local-field-galois-invariants, label: uses, note: 'Transport of the single-weight condition uses functorial recovery of inertia and the cyclotomic character.'}
  - {to: aut-intrinsic-hodge-tate-representations, label: addresses, note: 'Gives an arbitrary-dimensional class of Aut-intrinsically Hodge–Tate representations: those with one Hodge–Tate weight.'}
  - {to: p-adic-monodromy-theorem, label: analogous-to, note: 'At Hodge–Tate weight zero, Sen gives potential unramifiedness directly, without assuming de Rham admissibility.'}
---

**Data.** Let $K/\mathbb Q_p$ be finite, $C=\widehat{\bar K}$, and $\rho:G_K\to\operatorname{GL}_{\mathbb Q_p}(V)$ a continuous representation of dimension $d>0$. Write $I_K$ for inertia and $\chi_K$ for the cyclotomic character. Use the convention that $\mathbb Q_p(1)$ has Hodge–Tate weight $1$.

**Criterion (Sen).** The following are equivalent:

1. $\rho(I_K)$ is finite, or equivalently $V$ becomes unramified over a finite extension of $K$.
2. $V$ is $C$-admissible: the natural map
   $$C\otimes_K(C\otimes_{\mathbb Q_p}V)^{G_K}\longrightarrow C\otimes_{\mathbb Q_p}V$$
   is an isomorphism. Equivalently, $V$ is Hodge–Tate with all weights zero.
3. The [Sen operator](sen-operator-hodge-tate-criterion.md) $\Theta_V$ is zero.

Berger proves $2\Leftrightarrow3$ and $2\Rightarrow1$ in [@berger2002differential, Propositions 5.21–5.22, p. 59; proof of Proposition 5.22, p. 61]. The full equivalence with finite inertia image is stated in [@berger2004introduction, §I.2.3, p. 6; §IV.4.2, p. 30]. Berger's proof of the difficult implication uses overconvergent differential equations and Tsuzuki's theorem, rather than assuming de Rham admissibility.

**One weight and transport (proved here).** Fix $h\in\mathbb Z$. Then $V$ is Hodge–Tate with all weights $h$ if and only if some open subgroup $J\subseteq I_K$ satisfies
$$\rho(g)=\chi_K(g)^h\operatorname{id}_V\qquad(g\in J).$$
Consequently, if $L/\mathbb Q_p$ is finite and $\alpha:G_L\xrightarrow{\sim}G_K$ is a continuous isomorphism, then $\rho\circ\alpha$ is Hodge–Tate with all weights $h$ exactly when $\rho$ is. In particular, every representation with a single Hodge–Tate weight is [Aut-intrinsically Hodge–Tate](aut-intrinsic-hodge-tate-representations.md), in every dimension and also for $p=2$.

*Proof.* The twist $W=V\otimes_{\mathbb Q_p}\mathbb Q_p(-h)$ has all weights zero exactly when $V$ has all weights $h$. Its inertia action has finite image exactly when its kernel on $I_K$ is open, which is precisely the displayed condition. Apply Sen's criterion to $W$.

The [functorial Galois invariants](local-field-galois-invariants.md) give $\alpha(I_L)=I_K$ and $\chi_K\circ\alpha=\chi_L$; these are the group-theoretic constructions recalled in [@hoshi2024, §2, p. 6 and Remark 2.4.1(i)–(ii), p. 7]. Thus $\alpha^{-1}(J)$ is open in $I_L$, and on it $\rho\circ\alpha=\chi_L^h\operatorname{id}_V$. The criterion just proved gives the assertion over $L$; applying the same argument to $\alpha^{-1}$ gives the converse. $\square$

**Limits of the criterion.** Vanishing generalized weights alone is insufficient: the logarithmic cyclotomic self-extension has weights $0,0$ but a nonzero nilpotent Sen operator [@berger2004introduction, §II.1.2, p. 9]. No semisimplicity of $V$ is assumed in the criterion; it is the Sen operator that must vanish.

Already at weight zero, every representation satisfying the criterion is de Rham, and its filtered period space is $K^d$ with $\operatorname{Fil}^0=K^d$ and $\operatorname{Fil}^1=0$. This filtered space retains only the dimension, losing the finite inertial action [@brinonconrad2009, Example 6.3.9 and following discussion, pp. 81–82]. Recovering that action requires more than the filtered de Rham period space.
