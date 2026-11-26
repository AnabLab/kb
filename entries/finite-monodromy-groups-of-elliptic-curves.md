---
title: Finite monodromy groups of elliptic curves
kind: theorem
summary: 'For potentially good elliptic curves, finite monodromy is cyclic of order 1, 2, 3, 4 or 6, with Dic12 also allowed at p=3 and Q8 or SL2(F3) at p=2. Potentially multiplicative curves have monodromy of order at most two, although their Tate-module inertia image is infinite.'
tags: [elliptic-curves, local-fields, ramification, galois-groups]
edges:
  - {to: finite-torsion-recovers-semistable-inertia, label: uses, note: 'Uses the unipotent-inertia definition of finite monodromy and its minimum-degree formula.'}
  - {to: neron-ogg-shafarevich-criterion, label: uses, note: 'In the potentially good case, finite inertia image detects the smallest good-reduction extension.'}
  - {to: finite-monodromy-groups-of-abelian-varieties, label: uses, note: 'Compares the classical elliptic list with the necessary embedding into automorphisms of the dimension-one semi-abelian reduction.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, let $E/K$ be an elliptic curve, and fix a prime $\ell\ne p$. Write
$$
J_E=\{\sigma\in I_K:\rho_\ell(\sigma)\text{ is unipotent}\},\qquad
\Phi_E=I_K/J_E
$$
for its [finite monodromy group](finite-torsion-recovers-semistable-inertia.md). Put $C_n=\mathbb Z/n\mathbb Z$.

**Classical list for potentially good reduction.** If $E$ has potentially good reduction, then $\Phi_E$ is one of the groups in the corresponding row:

| Residue characteristic | Possible abstract groups |
| --- | --- |
| $p\ge5$ | $C_1,C_2,C_3,C_4,C_6$ |
| $p=3$ | $C_1,C_2,C_3,C_4,C_6,\operatorname{Dic}_{12}$ |
| $p=2$ | $C_1,C_2,C_3,C_4,C_6,Q_8,\operatorname{SL}_2(\mathbb F_3)$ |

Here $Q_8$ is the quaternion group, and $\operatorname{Dic}_{12}=C_3\rtimes C_4$ is the order-twelve dicyclic group: a generator of $C_4$ acts on $C_3$ by inversion. The nontrivial finite inertia images are listed, with attribution to Kraus, in Coppola's published paper [@coppola2026wildcyclic, §1, p. 2]. Freitas–Kraus give the same list over $\mathbb Q_p$ [@freitaskraus2022symplectic, §3.3, pp. 10–11].

**Identification with finite monodromy (deduced here).** In this case $\rho_\ell(I_K)$ is finite [@coppola2026wildcyclic, §1, p. 1]. A finite-order unipotent matrix over $\mathbb Q_\ell$ is the identity: its minimal polynomial divides both $(X-1)^r$ and $X^n-1$, the latter separable in characteristic zero. Consequently
$$
J_E=\ker(\rho_\ell|_{I_K}),\qquad
\Phi_E\simeq\rho_\ell(I_K)
\simeq\operatorname{Gal}(K^{\mathrm{nr}}(E[m])/K^{\mathrm{nr}})
$$
for every $m\ge3$ prime to $p$; the last identification is recorded in [@coppola2026wildcyclic, §1, p. 2]. This proves the table for $\Phi_E$, with $C_1$ precisely the good-reduction case. Its order is the minimum semistabilizing degree by [finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md), part 2; here semistability already gives good reduction because unipotent finite inertia is trivial.

**Potentially multiplicative reduction (deduced here).** In this case $\rho_\ell(I_K)$ is infinite [@coppola2026wildcyclic, §1, p. 1]. Nevertheless $E$ has split multiplicative reduction over $K(\sqrt{-c_6(E)})$, an extension of degree at most two [@dokchitserdokchitser2013local, Lemma A.2, p. 19]. Since this is semistable, the same minimum-degree formula gives $|\Phi_E|\mid2$. Thus $\Phi_E$ is $C_1$ or $C_2$, and no additional abstract groups arise from this case. In particular a Tate curve has $\Phi_E=1$ despite its infinite inertia image.

**Dimension-one comparison (deduced here).** In Philip's [necessary embedding](finite-monodromy-groups-of-abelian-varieties.md), the semi-abelian reduction has dimension one [@philip2024monodromy, §1.1.2 and Proposition 1.6, pp. 2–3]. Its torus and abelian dimensions sum to one, so it is either a one-dimensional torus or an elliptic curve. Over an algebraic closure the torus is $\mathbb G_m$, whose group automorphisms act on its character lattice $\mathbb Z$ by $\pm1$. Every finite subgroup of its automorphism group therefore has order at most two. The potentially good case instead supplies an elliptic special fibre, with the classical restrictions above. This comparison uses the necessary direction, without relying on the preprint's deformation converse.

**Scope.** The table records restrictions on abstract groups; it does not determine the group for a specified curve, the Frobenius action on it, or its ramification filtration. In particular, the minimum degree of a *Galois* semistabilizing extension still depends on the [Frobenius-lift condition](minimal-galois-semistabilizing-degree.md). The classical list is cited through the opened sources above; Kraus's 1990 original was not accessible here.
