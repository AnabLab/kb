---
title: Sen's operator detects Hodge–Tate representations
kind: theorem
summary: 'For a finite extension K of Q_p, a p-adic representation is Hodge–Tate exactly when its Sen operator is semisimple with integral eigenvalues. Integral generalized weights alone do not suffice: the logarithmic cyclotomic self-extension has weights 0,0 and a nonzero nilpotent Sen operator.'
tags: [local-fields, galois-groups, hodge-theory]
edges:
  - {to: ax-sen-tate-fixed-field-theorem, label: uses, note: 'The scalar fixed field for cyclotomic descent is $C^{H_K}=\widehat K_\infty$ [@brinonconrad2009, proof of Theorem 15.1.2, p. 258].'}
  - {to: p-adic-cyclotomic-tower, label: uses, note: 'The infinitely ramified cyclotomic character supplies the setup for classical Sen theory [@brinonconrad2009, opening of §15, p. 257].'}
---

**Data.** Let $K/\mathbb Q_p$ be finite, $C=\widehat{\bar K}$, and $V$ a continuous $d$-dimensional $\mathbb Q_p$-representation of $G_K$. Put
$$
K_\infty=K(\mu_{p^\infty}),\qquad
H_K=\ker\chi_{\mathrm{cyc}},\qquad
\Gamma_K=\operatorname{Gal}(K_\infty/K).
$$
This is the [cyclotomic tower](p-adic-cyclotomic-tower.md).
Sen's descent gives a unique $G_K$-stable $d$-dimensional $K_\infty$-subspace $D_{\mathrm{Sen}}(V)\subset C\otimes_{\mathbb Q_p}V$, fixed by $H_K$, with
$$
C\otimes_{K_\infty}D_{\mathrm{Sen}}(V)
\cong C\otimes_{\mathbb Q_p}V
$$
[@brinonconrad2009, Theorem 15.1.2, pp. 257–258]. Its $K_\infty$-linear *Sen operator* $\Theta_V$ is characterized by
$$
\gamma(x)=\exp\bigl(\log_p\chi_{\mathrm{cyc}}(\gamma)\,\Theta_V\bigr)(x)
$$
for each $x\in D_{\mathrm{Sen}}(V)$ and all $\gamma$ in a sufficiently small open subgroup of $\Gamma_K$ depending on $x$. This qualification matters because the $\Gamma_K$-action is semilinear [@brinonconrad2009, Theorem 15.1.7 and Remark 15.1.8(1)–(2), p. 261].

**Criterion (Sen).** There is a $C$-linear $G_K$-equivariant decomposition
$$
C\otimes_{\mathbb Q_p}V\cong\bigoplus_{j=1}^d C(h_j),\qquad h_j\in\mathbb Z,
$$
if and only if $\Theta_V$ is semisimple with eigenvalues in $\mathbb Z$. This is the Hodge–Tate condition. Here $C(h)=C\otimes_{\mathbb Q_p}\mathbb Q_p(h)$ uses $\chi_{\mathrm{cyc}}^h$, so $\mathbb Q_p(1)$ has weight $1$. For arbitrary $V$, the eigenvalues of $\Theta_V$, with multiplicity, are called its *generalized Hodge–Tate weights* [@berger2004introduction, §II.1.2, p. 9].

**Integral weights are insufficient.** Berger gives
$$
\rho(g)=\begin{pmatrix}1&\log_p\chi_{\mathrm{cyc}}(g)\\0&1\end{pmatrix},
\qquad
\Theta_V=\begin{pmatrix}0&1\\0&0\end{pmatrix}.
$$
Its generalized weights are $0,0$, but $V$ is not Hodge–Tate [@berger2004introduction, §II.1.2, p. 9]. The first coordinate line and the quotient both have trivial action. Thus even an extension of two trivial representations can fail to be Hodge–Tate.

**Role.** This describes the representation-theoretic condition tested in [Hodge–Tate representations under Galois automorphisms](aut-intrinsic-hodge-tate-representations.md).
