---
title: Bloch–Kato local conditions under potentially ordinary Galois transport
kind: theorem
summary: 'Galois isomorphisms preserve the geometric and exponential local conditions for de Rham representations with potential single-weight filtrations. They also preserve the finite condition for crystalline coefficients and abelian-variety Tate modules in this class.'
tags: [local-fields, galois-cohomology, hodge-theory, abelian-varieties]
edges:
  - {to: bloch-kato-local-conditions-for-tate-twists, label: generalizes, note: 'All rational Tate twists are crystalline representations with a single-weight filtration.'}
  - {to: bloch-kato-local-conditions, label: uses, note: 'Uses the extension criteria for the geometric and finite conditions and exact-annihilator duality between the exponential and geometric conditions.'}
  - {to: de-rham-criterion-for-single-weight-filtrations, label: uses, note: 'Part 3 transports de Rham-ness for representations with a potential single-weight filtration; adjoining the trivial quotient of an extension preserves that hypothesis.'}
  - {to: canonical-weight-filtrations-and-potentially-ordinary-transport, label: uses, note: 'Part 3 transports crystallinity for every representation with a potential single-weight filtration.'}
  - {to: local-field-galois-invariants, label: uses, note: 'Pullback preserves the cyclotomic character, so it identifies the dual Tate twists used in local duality.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: uses, note: 'Only the example: a split Tate curve has its Tate module in an extension of the trivial representation by the cyclotomic representation.'}
---

**Setting.** Let $K,L$ be finite extensions of $\mathbb Q_p$ and let $\alpha:G_L\xrightarrow{\sim}G_K$ be continuous. Let $V$ be a finite-dimensional de Rham $\mathbb Q_p$-representation of $G_K$, and put $V'=\alpha^*V$. Assume that $V$ has a [potential single-weight filtration](de-rham-criterion-for-single-weight-filtrations.md): after a finite extension $K'/K$, it has a stable filtration on whose pieces an open subgroup of inertia acts by integer powers $\chi_K^{h_i}$. Weights may repeat and need not be ordered. This includes potentially ordinary representations in the convention of that entry.

Write $H^1_e,H^1_f,H^1_g$ for the exponential, finite and geometric [Bloch–Kato local conditions](bloch-kato-local-conditions.md), with continuous cohomology throughout.

**Theorem (proved here).**

1. Pullback satisfies
   $$\alpha^*H^1_*(K,V)=H^1_*(L,V')\qquad(*=e,g).$$
2. The same equality holds for $*=f$ if $V$ is crystalline, or if $V=V_pA=T_pA\otimes_{\mathbb Z_p}\mathbb Q_p$ for an abelian variety $A/K$ satisfying the filtration hypothesis. In the latter case no abelian variety realizing $V'$ is required.
3. For a $G_K$-stable lattice $T\subset V$, the same assertions hold with $T$ and $\alpha^*T$ as coefficients, using the integral conditions defined as the inverse images of the rational conditions. Parts 1–3 also hold after restriction to every pair of finite extensions matched by $\alpha$.

There is no restriction on $p$ or on ramification.

**Inputs checked in the source.** A class $c\in H^1(K,V)$ represents an extension
$$0\longrightarrow V\longrightarrow E_c\longrightarrow\mathbb Q_p\longrightarrow0.$$
For de Rham $V$, membership in $H^1_g$ is equivalent to $E_c$ being de Rham; for crystalline $V$, membership in $H^1_f$ is equivalent to $E_c$ being crystalline [@blochkato1990tamagawa, (3.7.2), p. 353, and the remark after (3.7.4), p. 354]. For de Rham $V$, the exponential condition is the exact annihilator of $H^1_g(K,V^\vee(1))$ under local Tate duality [@blochkato1990tamagawa, Proposition 3.8, p. 354]. The integral conditions are defined by inverse image [@blochkato1990tamagawa, (3.7.3), p. 354]. For an abelian-variety Tate module the three conditions coincide with its Kummer image [@blochkato1990tamagawa, Example 3.11, p. 361].

**Proof.**

*Geometric condition.* Every $E_c$ has a potential single-weight filtration: take the filtration of $V$ over $K'$ inside $E_c$ and append $E_c$, whose last quotient is trivial of weight $0$. Repetitions are allowed. Thus part 3 of the [de Rham criterion](de-rham-criterion-for-single-weight-filtrations.md) applies to $E_c$, without assuming that this extension is de Rham. It also makes $V'$ de Rham. Since $\alpha^*E_c$ represents $\alpha^*c$, the extension criterion gives
$$
c\in H^1_g(K,V)
\ \Longleftrightarrow\ E_c\text{ is de Rham}
\ \Longleftrightarrow\ \alpha^*E_c\text{ is de Rham}
\ \Longleftrightarrow\ \alpha^*c\in H^1_g(L,V').
$$

*Exponential condition.* Put $W=V^\vee(1)$. Dualizing the filtration in reverse order and twisting gives a potential single-weight filtration of $W$, with weights $1-h_i$ in reverse order. It is de Rham, since de Rham representations are closed under duals and Tate twists, as recorded in facts (a)–(b) of the de Rham criterion. Hence the geometric-condition result applies to $W$.

The [cyclotomic invariant](local-field-galois-invariants.md) identifies $\alpha^*W$ with $(V')^\vee(1)$. Pullback commutes with the evaluation cup product and induces an isomorphism on $H^2(-,\mathbb Q_p(1))$. Consequently a class in $H^1(K,V)$ pairs to zero with every class in $H^1_g(K,W)$ exactly when its pullback pairs to zero with every class in $H^1_g(L,\alpha^*W)$. Exact-annihilator duality proves the assertion for $H^1_e$. Only vanishing of cup products is used; no normalization of a local invariant map is needed.

*Finite condition.* If $V$ is crystalline, so is $V'$ by part 3 of [potentially ordinary crystalline transport](canonical-weight-filtrations-and-potentially-ordinary-transport.md). That theorem also applies to every $E_c$, by its filtration constructed above. The crystalline extension criterion therefore gives the same chain of equivalences for $H^1_f$.

If $V=V_pA$, the source gives $H^1_e(K,V)=H^1_f(K,V)=H^1_g(K,V)$. Part 1 identifies the exponential and geometric conditions over $L$ with that same subspace under pullback. The inclusions $H^1_e\subseteq H^1_f\subseteq H^1_g$ force the finite condition over $L$ to equal it too. This proves part 2 even when $V'$ is not known to be geometric.

*Lattices and finite extensions.* Pullback commutes with $H^1(K,T)\to H^1(K,V)$, so taking inverse images proves the lattice assertions, including any torsion classes. If $G_{L_1}=\alpha^{-1}(G_{K_1})$, the restriction $V|_{G_{K_1}}$ still has a potential single-weight filtration: pass to a common finite extension of $K_1$ and $K'$. It remains de Rham, remains crystalline when originally crystalline, and is $V_p(A_{K_1})$ in the abelian case. Apply the established assertions to $\alpha|_{G_{L_1}}$. $\square$

**Kummer consequence.** If $B/L$ is an abelian variety and $V_pB\simeq\alpha^*V_pA$, with $V_pA$ satisfying the filtration hypothesis, the resulting cohomology isomorphism carries the rational Kummer image of $A(K)$ onto that of $B(L)$. Here the rational image means the image of
$$\left(\varprojlim_n A(K)/p^nA(K)\right)\otimes_{\mathbb Z_p}\mathbb Q_p\longrightarrow H^1(K,V_pA),$$
and similarly for $B$. Both are the finite conditions identified above. A [split Tate curve](kummer-extensions-and-tate-curve-periods.md) provides a case with noncrystalline coefficients: its Tate module has weights $1,0$, and all three local conditions are transported.

**Scope.** The finite-condition conclusion for general noncrystalline coefficients is not established here unless they are abelian-variety Tate modules as in part 2. The result transports cohomology subspaces, not exponential maps or period modules. It is a deduction from the linked transport theorems and the checked Bloch–Kato inputs; no novelty beyond the knowledgebase is claimed.
