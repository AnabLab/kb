---
title: The relative Oda–Tamagawa criterion for unipotent paths
kind: theorem
summary: 'For $\ell\ne p$, two rational points of a hyperbolic curve over a p-adic field have a Galois-invariant unipotent $\ell$-adic path exactly when their images in the stable reduction graph agree. Inertia-invariance is equivalent, and depth three suffices (Betts–Dogra, preprint).'
tags: [curves, local-fields, fundamental-groups, reconstruction-algorithms]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: oda-good-reduction-criterion, label: analogous-to}
---

Let $K/\mathbb Q_p$ be finite, $\ell\ne p$, and $X/K$ a [hyperbolic curve](hyperbolic-curve.md). For $x,y\in X(K)$, put
$$U_x=\pi_1^{\mathbb Q_\ell}(X_{\bar K},x),\qquad
P(x,y)=\pi_1^{\mathbb Q_\ell}(X_{\bar K};x,y),$$
the geometric pro-unipotent group and its étale path torsor, with their $G_K$-actions.

Write $\operatorname{red}:X(\bar K)\to\Gamma_{X,\mathbb Q}$ for component reduction into the [metric stable reduction graph](unipotent-groupoid-reconstruction-of-reduction-graphs.md). It sends a point to its component vertex in a regular semistable model making it integral, using the model conventions following Theorem 1.3.1; its graph position is model-independent [@bettsdogra2020, Definition 1.1.1, p. 3; Definition 1.3.4, p. 8].

**Theorem (Betts–Dogra, preprint).** With $I_K\subset G_K$ inertia,
$$\operatorname{red}(x)=\operatorname{red}(y)
\quad\Longleftrightarrow\quad P(x,y)(\mathbb Q_\ell)^{I_K}\ne\varnothing
\quad\Longleftrightarrow\quad P(x,y)(\mathbb Q_\ell)^{G_K}\ne\varnothing$$
[@bettsdogra2020, Theorem 1.3.1, p. 7; §10, opening paragraph, p. 80].

**Finite depth.** Let $U_{x,n}$ be the maximal quotient of $U_x$ of nilpotency class at most $n$, and $P_n(x,y)$ the pushout of $P(x,y)$ along $U_x\to U_{x,n}$. For every $n\ge3$, both fixed-point conditions remain equivalent to equal reduction with $P_n$ replacing $P$ [@bettsdogra2020, Remark 1.3.2, pp. 7–8].

**Kummer fibres.** The map $j_x:X(K)\to H^1(G_K,U_x)$ sends $y$ to $[P(x,y)]$; its fibres are exactly those of $\operatorname{red}$ [@bettsdogra2020, §2.4, p. 21; §10, opening paragraph, p. 80].
