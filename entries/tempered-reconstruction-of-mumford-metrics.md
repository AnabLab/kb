---
title: Tempered fundamental groups recover metrics of Mumford curves
kind: theorem
summary: 'For proper Mumford curves of genus at least two over a p-adic field, any isomorphism of geometric tempered fundamental groups preserves the edge lengths of their stable reduction graphs (Lepage). No Galois action is required.'
tags: [curves, local-fields, fundamental-groups, reconstruction-algorithms]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: unipotent-groupoid-reconstruction-of-reduction-graphs, label: analogous-to, note: "Both recover metric reduction graphs, from different fundamental-group data."}
  - {to: stable-reduction-of-curves, label: uses, note: "The stable reduction graphs are those of stable models over finite extensions, which exist by the stable reduction theorem."}
---

Let $K/\mathbb Q_p$ be finite and $X,Y/K$ smooth proper Mumford curves of genus at least two: the normalized components of their geometric stable reductions are projective lines. Write $\Gamma_X,\Gamma_Y$ for the dual graphs. A node locally given by $uv=a$ contributes an edge of length $v_p(a)=-\log_p|a|$, with $v_p(p)=1$ [@lepage2010metric, Introduction, p. 851, and §4, Definition 4.1, p. 870].

**Theorem (Lepage).** Every topological group isomorphism
$$
\pi_1^{\mathrm{temp}}(X_{\mathbb C_p})\cong
\pi_1^{\mathrm{temp}}(Y_{\mathbb C_p})
$$
induces an isometry $\Gamma_X\cong\Gamma_Y$ [@lepage2010metric, §4.4.1, p. 880, and Theorem 4.13, p. 884]. These are geometric groups, without a specified Galois action.

**Mechanism.** Splitting of $p$-power torsors above vertices detects lengths of loops in finite topological covers; those lengths determine every edge length [@lepage2010metric, proof of Theorem 4.13, pp. 885–888, and Proposition A.1, p. 889].

**Scope.** The full tempered group is essential; its prime-to-$p$ version records the reduction graph of groups without these lengths [@lepage2010metric, Introduction, p. 852]. Compare [reconstruction from Galois-equivariant unipotent groupoids](unipotent-groupoid-reconstruction-of-reduction-graphs.md).
