---
title: The global semistabilizing degree and the sharp Minkowski bound
kind: theorem
summary: 'For an abelian variety over a number field, the minimum semistabilizing degree is the least common multiple of its local finite monodromy orders. It divides M(2g), and Philip proves that this dimension bound is attained for every g.'
tags: [abelian-varieties, number-fields, local-fields, ramification]
edges:
  - {to: finite-torsion-recovers-semistable-inertia, label: uses, note: 'Uses the finite inertia obstruction and its local degree divisibility in the local-global formula.'}
  - {to: minimal-galois-semistabilizing-degree, label: analogous-to, note: 'That entry minimizes over Galois extensions of a local field; the global formula here allows arbitrary finite extensions.'}
---

**Setting.** Let $A/K$ have dimension $g\ge1$, with $K$ a number field. For each finite place $v$, let $\Phi_{A,v}=I_{K_v}/J_{A,v}$ be its [finite monodromy group](finite-torsion-recovers-semistable-inertia.md). Define
$$
d(A)=\min\{[L:K]:L/K\text{ finite and }A_L\text{ semistable at every finite place}\}.
$$

**Local-global theorem (Philip).** One has
$$
d(A)=\operatorname{lcm}_{v\text{ finite}}|\Phi_{A,v}|.
\tag{1}
$$
Moreover, $d(A)$ divides the degree of every semistabilizing extension [@philip2022semistability, Theorem 2.4 and Remark 2.5, p. 6].

**Mechanism in the source.** Sum the local degree divisibilities over $w\mid v$ for the lower bound. For attainment, enlarge each local semistabilizing field unramifiedly to degree $d$ from (1). Weak approximation supplies a degree-$d$ global field with those completions [@philip2022semistability, Lemma 2.1, Proposition 2.3 and proof of Theorem 2.4, pp. 4–6]. This summarizes Philip's proof.

**Optimal dimension bound.** Put
$$
M(2g)=\prod_{\ell\text{ prime}}\ell^{r(2g,\ell)},\qquad
r(2g,\ell)=\sum_{i\ge0}\left\lfloor\frac{2g}{\ell^i(\ell-1)}\right\rfloor.
$$
Then $d(A)\mid M(2g)$ [@philip2022semistability, Corollary 2.6, p. 6]. In his 2024 preprint, Philip proves that for every $g\ge1$ some $g$-dimensional abelian variety over some number field has $d(A)=M(2g)$ [@philip2024monodromy, Theorem 1.2, p. 2; formula for $M$, p. 5; Theorem 4.3, pp. 30–31].

**Scope.** The number field in the sharpness assertion can vary with $g$. The extensions in (1) need not be Galois. For the additional local Galois constraint, see the [central Frobenius-lift formula](minimal-galois-semistabilizing-degree.md).
