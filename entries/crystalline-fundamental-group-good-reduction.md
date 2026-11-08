---
title: Crystalline unipotent fundamental groups detect good reduction
kind: theorem
summary: For a proper hyperbolic curve over a p-adic field with semistable reduction and a base point extending through the smooth locus, good reduction is equivalent to crystallinity of its p-adic unipotent fundamental group (Andreatta–Iovita–Kim).
tags: [curves, local-fields, fundamental-groups, hodge-theory]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: crystalline-tate-module-good-reduction, label: uses, note: 'Crystallinity of the second universal object gives good reduction of the Jacobian through the abelian-variety criterion [@andreattaiovitakim2015, paragraph following Theorem 1.9, p. 5].'}
  - {to: oda-good-reduction-criterion, label: analogous-to, note: 'The Oda–Tamagawa criterion tests the outer pro-$\ell$ action of inertia for $\ell \ne p$; here a crystalline condition replaces unramifiedness at $p$.'}
  - {to: hodge-tate-geometricity-criterion, label: analogous-to, note: "Both recover a geometric property using p-adic Hodge conditions on Galois representations; here the property is good reduction, there geometricity of a field homomorphism."}
---

**Setting.** Let $K/\mathbb{Q}_p$ be finite, and let $C/K$ be a smooth proper geometrically connected curve of genus at least $2$. Assume that $C$ admits a regular proper semistable model $\mathcal{C}/\mathcal{O}_K$, and fix a section $b \in \mathcal{C}(\mathcal{O}_K)$ through its smooth locus. Good reduction means that $C$ admits a smooth proper model over $\mathcal{O}_K$. These are the hypotheses used here from [@andreattaiovitakim2015, §1, p. 2; §2, p. 6].

Let $U^{\mathrm{et}} = \pi_1^{\mathrm{un},\mathbb{Q}_p}(C_{\bar K},b)$ be the pro-unipotent algebraic group over $\mathbb{Q}_p$ whose finite-dimensional representations classify unipotent lisse $\mathbb{Q}_p$-sheaves on $C_{\bar K}$, with fibre functor at $b$. The rational base point gives it a $G_K$-action. Let $U^{\mathrm{dR}}$ be the corresponding group for unipotent vector bundles with integrable connection on $C/K$ [@andreattaiovitakim2015, §1, pp. 2–3; §3.7, p. 17].

**Theorem (Andreatta–Iovita–Kim).** Under these hypotheses,
$$C\text{ has good reduction}\quad\Longleftrightarrow\quad U^{\mathrm{et}}\text{ is crystalline}.$$
Here the crystalline condition means that the canonical semistable comparison between $U^{\mathrm{et}}$ and $U^{\mathrm{dR}}$ is already defined over $B_{\mathrm{cris},K} = B_{\mathrm{cris}}\otimes_{K_0}K$, where $K_0$ is the maximal unramified subfield of $K$:
$$U^{\mathrm{et}}\times_{\mathbb{Q}_p}B_{\mathrm{cris},K}\ \cong\ U^{\mathrm{dR}}\times_K B_{\mathrm{cris},K}.$$
The isomorphism is $G_K$-equivariant and extends to the canonical comparison over $B_{\mathrm{st},K}$ [@andreattaiovitakim2015, Theorem 1.4, Definition 1.5 and Theorem 1.6, p. 3].

There is a concrete formulation using finite-dimensional representations. If $E_{n,b}^{\mathrm{et}}$ are the fibres of the universal pointed unipotent local systems constructed in the source, then
$$\mathcal{O}(U^{\mathrm{et}})=\varinjlim_n (E_{n,b}^{\mathrm{et}})^\vee.$$
The criterion is equivalent to every $E_{n,b}^{\mathrm{et}}$ being crystalline as a $G_K$-representation [@andreattaiovitakim2015, Theorem 1.7 (1), p. 3; Theorem 1.9, p. 5]. It concerns this unipotent algebraic group and these representations, rather than assigning crystallinity directly to a profinite pro-$p$ group.

**Why higher unipotent data enter.** Crystallinity of $E_{2,b}^{\mathrm{et}}$ already forces the Tate module of the Jacobian to be crystalline, hence the Jacobian to have good reduction by the [abelian-variety criterion](crystalline-tate-module-good-reduction.md). Good reduction of the Jacobian alone does not detect good reduction of the curve [@andreattaiovitakim2015, §1, p. 2 and the paragraph following Theorem 1.9, p. 5]. The proof identifies semistable monodromy on the universal objects with residues of logarithmic connections, then compares with complex topological monodromy to apply Oda's degeneration criterion [@andreattaiovitakim2015, §6.2, Lemma 6.2 and Proposition 6.3, pp. 30–32].

**Anabelian scope.** This is a criterion with the field and geometric base point given. Hoshi explains two obstacles to reading it as a criterion on the abstract arithmetic fundamental group alone: crystallinity can change after precomposing by a Galois-group automorphism, and recognizing which sections arise from rational points is an additional problem [@hoshi2018propgood, Remark 3.8.2 (i)–(iii), pp. 31–32]. Compare the [Hodge–Tate geometricity criterion](hodge-tate-geometricity-criterion.md) and [Aut-intrinsic Hodge–Tate representations](aut-intrinsic-hodge-tate-representations.md).
