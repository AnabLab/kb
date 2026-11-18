---
title: Simply connected fibres and the Hodge-theoretic section question
kind: theorem
summary: 'Smooth projective complex families with simply connected fibres induce equivalences on variations of mixed Hodge structure. An explicit conic bundle over the two-dimensional torus has a tensor retraction but no algebraic section; distinct sections of the projective line give the same functor.'
tags: [hodge-theory, section-conjecture, curves]
edges:
  - {to: hodge-theoretic-section-question, label: addresses, note: 'Gives failures of injectivity and surjectivity for unrestricted smooth projective families; does not settle surjectivity for hyperbolic-curve families.'}
---

**Setting.** Use the categories $\mathrm{VMHS}_{\mathbb Z}$ and $\mathrm{VMHS}$ of [Xu's section question](hodge-theoretic-section-question.md). The latter consists of admissible graded-polarizable rational variations admitting an integral structure. Tensor functors are exact and additive. All varieties below are smooth, connected and quasi-projective over $\mathbb C$.

**Theorem (proved here).** Let $f:X\to B$ be smooth and projective with connected fibres, whose analytic fundamental groups are trivial.

1. Pullback $f^*$ is an equivalence for both categories. Its tensor retractions form one isomorphism class. The induced map of Hodge-theoretic fundamental groups is an isomorphism, and its inverse is a Hodge-theoretic splitting.
2. The family
   $$
   B=\operatorname{Spec}\mathbb C[u^{\pm1},v^{\pm1}],\qquad
   X=\{[x:y:z]\in\mathbb P^2_B:\ x^2-u y^2-v z^2=0\}
   \tag{1}
   $$
   satisfies these hypotheses but has no algebraic section, or even a rational section. Thus its tensor retraction is not induced by an algebraic section. Its map on étale fundamental groups is nevertheless an isomorphism.
3. For $\mathbb P^1_{\mathbb C}\to\operatorname{Spec}\mathbb C$, any two points induce isomorphic pullback functors. Thus injectivity also fails among unrestricted smooth projective families.

**Proof.** *1. Rational variations.* Xu's exact sequence is
$$
\pi_1(\mathrm{LS}^{\mathrm{Hdg}}(X_b))\longrightarrow
\pi_1(\mathrm{VMHS}(X))\longrightarrow
\pi_1(\mathrm{VMHS}(B))\longrightarrow1
$$
[@xu2025exact, Theorem 2.1, p. 4]. Since $X_b$ is simply connected, all its local systems are constant. Hence $\mathrm{LS}^{\mathrm{Hdg}}(X_b)$ is the category of rational vector spaces and its Tannakian group is trivial. Exactness makes the middle map an isomorphism; Tannakian duality gives the asserted equivalence. The same argument applied to Xu's Corollary 2.6 makes the map on $\mathrm{LS}^{\mathrm{Hdg}}$ groups an isomorphism [@xu2025exact, Corollary 2.6, pp. 6–7]. The map on $\mathrm{VMHS}$ groups commutes with the maps to the mixed-Hodge-structure group, and restricts to the indicated map on $\mathrm{LS}^{\mathrm{Hdg}}$ groups. The inverses therefore give a map of André's sequences, as required by Xu's definition of a Hodge-theoretic splitting [@xu2025exact, Definition 6.1, pp. 19–20].

*2. Retain the integral structure.* A proper smooth submersion of complex manifolds is a differentiable fibre bundle. The homotopy sequence and connected, simply connected fibre give
$$\pi_1^{\mathrm{top}}(X)\xrightarrow{\sim}\pi_1^{\mathrm{top}}(B).\tag{2}$$
Consequently pullback is an equivalence on integral local systems. Given an integral variation on $X$, first descend its rationalization by part 1. Under a rational descent isomorphism, its integral local system descends by (2) to a lattice in the descended rational local system. Equip this lattice with the rational weight filtration and Hodge filtration already obtained. This is an integral variation: admissibility and graded polarizability are properties of its rationalization. Integral morphisms descend too, since their rational descents preserve the descended lattices. Thus $f^*$ is fully faithful and essentially surjective integrally as well. If torsion local systems are allowed, they descend by (2) and contribute no rational Hodge data.

For any equivalence $E$ with tensor quasi-inverse $Q$, a tensor retraction $F$ satisfies $F\simeq FEQ\simeq Q$. This proves uniqueness up to tensor isomorphism. In particular all algebraic sections of such an $f$ induce isomorphic functors. Taking $f:\mathbb P^1\to\operatorname{Spec}\mathbb C$ proves part 3.

*3. The conic bundle.* Since $u,v$ are invertible, the relative derivatives $2x,-2uy,-2vz$ never vanish simultaneously at a projective point of (1). Thus $f$ is smooth and projective; every complex fibre is a smooth conic, hence a simply connected projective line. The total space is smooth and connected. For example, local analytic choices of square roots of $u,v$ identify this family with the product with the fixed conic $x^2-y^2-z^2=0$. This also gives its local topological trivializations directly. Equation (2), followed by profinite completion, proves the étale assertion.

It remains to exclude a section. Its generic value would be a point of the conic over $\mathbb C(u,v)$, hence over $F=\mathbb C(u)((v))$. Suppose such a point exists. Scale its coordinates so that $x,y,z\in\mathbb C(u)[[v]]$ and at least one is a unit. Modulo $v$ the equation gives
$$\bar x^2=u\bar y^2.$$
The element $u$ is not a square in $\mathbb C(u)$, since its order at $u=0$ is odd. Therefore $\bar x=\bar y=0$ and $z$ is a unit. Now $x^2-u y^2$ is divisible by $v^2$, whereas $v z^2$ has $v$-adic valuation one, a contradiction. Thus the generic conic has no point. This proves part 2. $\square$

**Scope.** These examples answer the unrestricted injectivity and surjectivity tests negatively. They concern genus-zero fibres. They do not contradict Xu's injectivity theorem for families of genus at least two, or settle the remaining existence question for those families. Xu's Tannakian formulation asks *when* the section map is bijective [@xu2025exact, Question 6.2, p. 20]; no universal affirmative claim in that source is being refuted. The conic example also shows that an étale splitting alone does not suffice for a Hodge splitting to come from an algebraic section.
