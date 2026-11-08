---
title: Reconstruction of affine curves from geometrically solvable fundamental groups
kind: theorem
summary: 'Yamaguchi reconstructs affine hyperbolic curves from tame arithmetic fundamental groups with geometric kernels of solvable length 2 or 3 over finite fields, and 4 or 5 over finitely generated fields, with a nonisotriviality condition in positive characteristic.'
tags: [curves, fundamental-groups, function-fields, number-fields, solvable-quotients]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: m-step-solvable-quotient, label: uses, note: 'The derived series is taken inside the geometric kernel; the full base Galois group is retained.'}
  - {to: prime-to-p-anabelian-curves-over-finite-fields, label: analogous-to, note: 'Both reconstruct curves over finite fields from quotients of arithmetic fundamental groups; here the geometric quotient has bounded solvable length and the curves are affine.'}
  - {to: m-step-solvable-neukirch-uchida, label: analogous-to, note: 'Both recover isomorphism types from bounded solvable data; here only the geometric kernel is truncated.'}
---

**Quotients.** Let $U=X\setminus E$ be an affine [hyperbolic curve](hyperbolic-curve.md) of type $(g,r)$ over $k$, with $X$ smooth, proper and geometrically connected and $E/k$ finite étale of degree $r>0$. Put
$$\Delta_U=\pi_1^{\mathrm{tame}}(U_{k^{\mathrm{sep}}}),\qquad
\Pi_U^{(m)}=\pi_1^{\mathrm{tame}}(U)/\Delta_U^{[m]}.$$
Here $\Delta_U^{[m]}$ is the $m$-th closed derived subgroup. Thus the kernel of $\Pi_U^{(m)}\to G_k$ has solvable length at most $m$, while the full $G_k$ is retained [@yamaguchi2024affine, Notation (c), (f), (g)].

**Sufficient bounds.** The two statements below use the corresponding column, with $(g,r)$ the type of $U_1$.

| Type of $U_1$ | Finite fields | Finitely generated fields |
|---|---|---|
| $r\ge3$ and $(g,r)\notin\{(0,3),(0,4)\}$ | $m\ge2$ | $m\ge4$ |
| All remaining affine hyperbolic types | $m\ge3$ | $m\ge5$ |

**Finite fields.** For affine hyperbolic curves $U_i/k_i$ over finite fields, an isomorphism of profinite groups $\Pi_{U_1}^{(m)}\cong\Pi_{U_2}^{(m)}$ exists if and only if $U_1\cong U_2$ as schemes. The base Galois quotients and their Frobenius elements are recovered from the groups [@yamaguchi2024affine, Theorem 2.16 and its proof].

**Finitely generated fields.** Let $U_1,U_2$ be affine hyperbolic curves over the same field $k$, finitely generated over its prime field, and put $p=\operatorname{char}(k)$. If $p>0$, assume that $U_{1,\bar k}$ does not descend to a curve over $\overline{\mathbb F}_p$. Then an isomorphism
$$\Pi_{U_1}^{(m)}\cong\Pi_{U_2}^{(m)}\quad\text{over }G_k$$
exists exactly when $U_1\cong_k U_2$ for $p=0$, or when $U_1^{(a)}\cong_k U_2^{(b)}$ for some $a,b\ge0$ for $p>0$. Here $U^{(a)}$ denotes the $a$-th relative Frobenius twist [@yamaguchi2024affine, Introduction, definition of the category $\mathfrak S_k$; Theorem 4.12]. These are statements about existence of curve isomorphisms.

**Method.** The finite-field proof reconstructs decomposition groups and then the multiplication and addition of the function field. The relative proof spreads out and specializes using the general discrete-valuation-ring form of the [metabelian good-reduction criterion](oda-good-reduction-criterion.md) [@yamaguchi2024affine, Introduction, proof sketch, Steps 1–6].
