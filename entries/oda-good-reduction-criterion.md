---
title: Oda–Tamagawa good reduction and its metabelian refinement
kind: theorem
summary: 'A hyperbolic curve over a p-adic field has good reduction exactly when inertia acts trivially, up to inner automorphisms, on its geometric pro-$\ell$ fundamental group for one prime $\ell\ne p$ (Oda–Tamagawa). Its metabelian quotient already suffices (Yamaguchi).'
tags: [curves, local-fields, fundamental-groups, solvable-quotients]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: m-step-solvable-quotient, label: uses, note: 'The refinement takes the maximal 2-step solvable quotient of the geometric group.'}
  - {to: neron-ogg-shafarevich-criterion, label: uses, note: 'The proof of Tamagawa first applies it to the Jacobian: inertia acts trivially on the abelianization of the geometric pro-$\ell$ group, hence on its quotient $T_\ell(J_X)$ [@tamagawa1997, proof of Theorem (5.3), p. 177].'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, and let $U=X\setminus D$ be a [hyperbolic curve](hyperbolic-curve.md), where $X/K$ is smooth, proper and geometrically connected, and $D$ is a finite étale reduced divisor, possibly empty. Good reduction of $(X,D)$ means that it extends to a smooth proper curve $\mathcal X/\mathcal O_K$ with a relative divisor $\mathcal D\subset\mathcal X$ finite étale over $\mathcal O_K$ [@tamagawa1997, Definition (5.1), p. 176].

Fix a geometric base point and put $\Delta=\pi_1(U_{\bar K})$. For a prime $\ell\ne p$, let $\Delta_\ell$ be its maximal pro-$\ell$ quotient. The arithmetic fundamental group gives an outer action
$$\rho_\ell:G_K\longrightarrow\operatorname{Out}(\Delta_\ell).$$
It is *unramified* if $\rho_\ell(I_K)=1$, where $I_K$ is inertia: each inertia element acts by an inner automorphism [@tamagawa1997, (0-1)–(0-2), p. 135; §5, p. 176].

**Criterion (Oda–Tamagawa).** The pair $(X,D)$ has good reduction if and only if $\rho_\ell$ is unramified for one, equivalently every, prime $\ell\ne p$. No rational point or semistable model is assumed. Oda proved the proper case; Tamagawa treats the punctured case as well [@tamagawa1997, §5, p. 176 and Theorem (5.3), p. 177].

**Metabelian refinement (Yamaguchi).** Write
$$\Delta_\ell^{[0]}=\Delta_\ell,\qquad
\Delta_\ell^{[i+1]}=\overline{[\Delta_\ell^{[i]},\Delta_\ell^{[i]}]},\qquad
\Delta_\ell^m=\Delta_\ell/\Delta_\ell^{[m]}.$$
For every $m\ge2$ and every $\ell\ne p$,
$$ (X,D)\text{ has good reduction}
\quad\Longleftrightarrow\quad
I_K\longrightarrow\operatorname{Out}(\Delta_\ell^m)\text{ is trivial}.$$
Thus $m=2$, the maximal metabelian quotient, suffices. This is the $p$-adic-field specialization of a theorem over arbitrary discrete valuation rings [@yamaguchi2024affine, Notation (c), (g), p. 6; §3, notation, p. 28; Theorem 3.8, p. 31]. The quotient is taken on the geometric group; the acting group remains $G_K$.

**Why nonabelian data matter.** For proper curves, unramifiedness on abelian cohomology alone need not imply good reduction [@andreattaiovitakim2015, §1, p. 2]. At the abelian level, unramifiedness makes inertia act trivially on $\Delta_\ell^{\mathrm{ab}}$, hence on its quotient $T_\ell(J_X)$, where $J_X$ is the Jacobian of $X$. By the [Néron–Ogg–Shafarevich criterion](neron-ogg-shafarevich-criterion.md), this gives good reduction of $J_X$, not of $X$. Tamagawa's proof starts there and then argues on a stable model whose dual graph is a tree [@tamagawa1997, proof of Theorem (5.3), p. 177]. The [crystalline criterion](crystalline-fundamental-group-good-reduction.md) supplies a $p$-adic analogue using the unipotent fundamental group, under its semistability and base-point hypotheses [@andreattaiovitakim2015, Theorems 1.3–1.6, pp. 2–3]. For the classical criterion's role in specialization, see [Tamagawa's reconstruction theorem](tamagawa-grothendieck-conjecture-for-affine-curves.md).
