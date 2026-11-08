---
title: Absolute pro-p recognition of ordinary good reduction
kind: theorem
summary: 'Hoshi reconstructs ordinarity from the abstract geometrically pro-$p$ arithmetic fundamental group of a proper curve over a $p$-adic field. For ordinary curves, this group also determines stable and good reduction, without a given field map or rational base point.'
tags: [curves, local-fields, fundamental-groups, reconstruction-algorithms]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: local-field-galois-invariants, label: uses, note: 'The reconstruction recognizes inertia in the recovered local Galois quotient [@hoshi2018propgood, Theorem 3.7 (iii), p. 24].'}
  - {to: crystalline-fundamental-group-good-reduction, label: analogous-to, note: 'Both detect good reduction at the residue prime; this criterion uses the abstract arithmetic group and assumes ordinarity, while the crystalline criterion uses a field and geometric section.'}
  - {to: stable-reduction-of-curves, label: uses, note: 'Ordinarity is defined through the stable model after a finite extension, which exists by the stable reduction theorem.'}
---

**Setting.** Let $K/\mathbb{Q}_p$ be finite and $X/K$ a smooth proper geometrically connected curve of genus $g\ge 2$. Write $\Delta_X$ for the maximal pro-$p$ quotient of $\pi_1(X_{\bar K})$, and $\Pi_X$ for the geometrically pro-$p$ arithmetic fundamental group, with
$$1\longrightarrow\Delta_X\longrightarrow\Pi_X\longrightarrow G_K\longrightarrow 1.$$
Let $\bar X_s$ be the geometric special fibre of the stable model after a finite extension. In Hoshi's terminology, $X$ is *ordinary* if
$$g=\gamma(\bar X_s),\qquad
\gamma(\bar X_s)=\dim_{\mathbb{F}_p}H^1_{\mathrm{\acute et}}(\bar X_s,\mathbb{F}_p).$$
Equivalently, the normalization of every irreducible component of $\bar X_s$ is ordinary. This definition does not assume stable reduction over $K$ itself [@hoshi2018propgood, Definitions 1.1–1.4, pp. 4–6; Definition 2.2, pp. 8–9; Definition 2.6 and Lemma 2.7 (i), p. 13].

**Theorem (Hoshi).** From the abstract profinite group $\Pi_X$, functorial group-theoretic constructions recognize ordinarity and, for ordinary $X$, stable and good reduction over $\mathcal O_K$ [@hoshi2018propgood, Theorem 3.7 (xi)–(xiii), pp. 27–28]. More precisely, if $X_i/K_i$ are such curves and $\Pi_{X_1}\cong\Pi_{X_2}$, then their residue characteristics agree, and $X_1$ is ordinary exactly when $X_2$ is. If either is ordinary, they have stable reduction simultaneously and good reduction simultaneously [@hoshi2018propgood, Corollary 3.8 (i), (iv)–(vi), p. 29].

**Reconstructed data.** The group $\Delta=\Delta_X$ is characterized intrinsically as the unique maximal nontrivial topologically finitely generated normal closed pro-$\ell$ subgroup, allowing any prime $\ell$; this also identifies $p$. The quotient recovers $G_K$ and its inertia subgroup $I$ [@hoshi2018propgood, Theorem 3.7 (i)–(iv), p. 24]. Put $M=\Delta^{\mathrm{ab}}$. Among its torsion-free quotients stable under some open $J\subseteq G_K$, let $M_{\mathrm{et}}$ be the maximal one on which $J\cap I$ acts trivially, and $M_{\mathrm{cmb}}$ the maximal one on which $J$ acts trivially; $J$ may vary with the quotient. Then
$$g=\tfrac12\operatorname{rank}_{\mathbb Z_p}M,\qquad
\gamma(\bar X_s)=\operatorname{rank}_{\mathbb Z_p}M_{\mathrm{et}},\qquad
b_1(\bar X_s)=\operatorname{rank}_{\mathbb Z_p}M_{\mathrm{cmb}},$$
where $b_1$ is the first Betti number of the dual graph [@hoshi2018propgood, Lemma 3.4 (ii), pp. 19–20; Theorem 3.7 (vi)–(vii), pp. 25–26].

**The ordinary good-reduction test.** Set
$$V=M\otimes_{\mathbb Z_p}\mathbb Q_p,\qquad
L=\operatorname{Hom}_{\mathbb Z_p}(H^2(\Delta,\mathbb Z_p),\mathbb Q_p).$$
For ordinary $X$, stable reduction over $K$ is equivalent to the existence of an exact sequence of $I$-representations
$$0\longrightarrow L^{\oplus g}\longrightarrow V\longrightarrow\mathbb Q_p^{\oplus g}\longrightarrow 0,$$
with trivial action on the right-hand term. Good reduction over $K$ is equivalent to this condition together with
$$b_1(P)=0\quad\text{for every open subgroup }P\subseteq\Pi_X.$$
Here $b_1(P)$ is obtained by applying the same reconstruction to $P$ [@hoshi2018propgood, Theorem 3.7 (xii)–(xiii), p. 28]. Thus the test involves the dual graphs throughout the covering tower, as well as descent of stable reduction to $K$.

**Scope.** The input is the arithmetic group $\Pi_X$. A projection to a specified field's Galois group and a rational-point section are not supplied. The ordinary hypothesis belongs to the stated criterion; Hoshi explains why the [crystalline criterion](crystalline-fundamental-group-good-reduction.md) does not immediately remove it in absolute pro-$p$ anabelian geometry [@hoshi2018propgood, Remark 3.8.2 (ii)–(iii), pp. 31–32].
