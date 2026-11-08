---
title: Unipotent groupoids recover metric stable reduction graphs
kind: theorem
summary: 'For a hyperbolic curve over a p-adic field and a prime $\ell\ne p$, the Galois-equivariant geometric $\mathbb Q_\ell$-pro-unipotent fundamental groupoid determines its stable reduction graph, including edge lengths and component genera (Betts–Dogra, preprint).'
tags: [curves, local-fields, fundamental-groups, reconstruction-algorithms]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: oda-good-reduction-criterion, label: analogous-to}
---

Let $K/\mathbb Q_p$ be finite, $\ell\ne p$, and $X/K$ a [hyperbolic curve](hyperbolic-curve.md). Write $\mathcal P_\ell(X)$ for its geometric $\mathbb Q_\ell$-pro-unipotent étale fundamental groupoid: objects $X(\bar K)$, affine path schemes, composition, inverses, and continuous $G_K$-action [@bettsdogra2020, §1.3, p. 9].

Choose a regular semistable model over $\mathcal O_L$, for finite $L/K$. Its geometric dual graph has vertices for components, edges for nodes, and infinite half-edges for punctures. Give each finite edge length $1/e(L/K)$ and each vertex its component's geometric genus. Up to subdivision, this metric graph $\Gamma_X$ is model-independent [@bettsdogra2020, Definition 1.3.4, p. 8].

**Theorem (Betts–Dogra, preprint).** For such $X,Y/K$,
$$\mathcal P_\ell(X)\cong_{G_K}\mathcal P_\ell(Y)
\quad\Longrightarrow\quad
\Gamma_X\cong\Gamma_Y$$
by a genus-preserving isometry [@bettsdogra2020, Theorem 1.3.5, p. 9].

**Reconstruction.** After choosing $\mathbb Q_\ell\hookrightarrow\mathbb C$, topological closure of the unipotent Kummer image recovers the graph; counts of reductions of finite-extension points recover lengths; monodromy invariants recover genera [@bettsdogra2020, Propositions 11.0.1, 11.0.3–11.0.4, pp. 88–90].

**Scope.** The field and entire geometric-point object set are part of the input. The theorem concerns isomorphisms of these groupoids, and does not reconstruct $X$ itself [@bettsdogra2020, §1.3, pp. 8–9].
