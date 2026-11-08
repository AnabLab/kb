---
title: Filtered reconstruction with nondegenerate perfect residue fields
kind: theorem
summary: Tsujimura's 2026 preprint identifies field isomorphisms with filtration-preserving outer Galois isomorphisms for mixed-characteristic complete discretely valued fields with nondegenerate perfect residues; its Hodge–Tate criterion also allows imperfect residues.
tags: [local-fields, galois-groups, ramification, hodge-theory]
edges:
  - {to: mochizuki-local-fields-theorem, label: generalizes}
  - {to: hodge-tate-geometricity-criterion, label: generalizes, note: "Only the statement for isomorphisms of HT type; open homomorphisms are not treated [@tsujimura2026cdvf, p. 2 and Proposition 1.3, pp. 3–4]."}
  - {to: ramification-filtration, label: uses}
  - {to: field-automorphisms-act-faithfully-on-galois-groups, label: uses, note: "Injectivity in Corollary 2.7."}
  - {to: hodge-tate-reconstruction-with-algebraic-residue-fields, label: analogous-to}
---

**Filtered theorem (Tsujimura).** Let $K_i$ be complete discretely valued fields of mixed characteristic $(0,p)$ with perfect residue fields $k_i$. Suppose a Sylow $p$-subgroup of each $G_{k_i}$ is nontrivial. Then
$$
\operatorname{Isom}(K_2,K_1)
\xrightarrow{\sim}
\operatorname{OutIsom}^{\mathrm{filt}}(G_{K_1},G_{K_2}),
$$
where the right side consists of continuous isomorphisms preserving the ramification filtrations, modulo inner automorphisms [@tsujimura2026cdvf, Corollary 2.7, pp. 6–7].

**Hodge–Tate criterion.** For arbitrary residue fields, put $C_i=\widehat{\bar K_i}$. If $C_1\cong\varphi^*C_2$ as topological $\mathbb Q_p[G_{K_1}]$-modules, an isomorphism $\varphi:G_{K_1}\to G_{K_2}$ is induced by a field isomorphism $\bar K_2\to\bar K_1$ carrying $K_2$ onto $K_1$ [@tsujimura2026cdvf, Definition 1.1 and Proposition 1.3, pp. 3–4]. The source recovers multiplication from
$$
\operatorname{End}^{\mathrm{cont}}_{\mathbb Q_p[G_K]}(\widehat{\bar K})=K
$$
[@tsujimura2026cdvf, Proposition 1.2, p. 3].

**Scope.** This is an August 2026 preprint. Residues need not be algebraic over $\mathbb F_p$ [@tsujimura2026cdvf, Corollary 2.7, pp. 6–7]. Removing nondegeneracy, or extending the filtered theorem to imperfect residues, remains unresolved there [@tsujimura2026cdvf, Remarks 2.7.2–2.7.3, p. 7].
