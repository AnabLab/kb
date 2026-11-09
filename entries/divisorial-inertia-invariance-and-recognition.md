---
title: Divisorial inertia invariance and the recognition recipe
kind: note
summary: 'Every bracket-compatible isomorphism preserves divisorial inertia in transcendence degree at least $2$, by the checked pro-ℓ proof. This gives invariant transport; the completed-curve criterion still needs a description of its test subgroups from the abstract group.'
tags: [function-fields, galois-groups, valuations, reconstruction-algorithms]
edges:
  - {to: divisorial-inertia-recovery-problem, label: addresses, note: "Separates the proved isomorphism-invariance statement from the remaining request for a recognition recipe using the abstract group."}
  - {to: pro-l-abelian-by-central-reconstruction-of-function-fields, label: uses, note: "Steps 0–5 prove divisorial matching; the commutator argument in part 4 applies this to isomorphisms of Π^c."}
  - {to: divisoriality-from-completed-curve-subfields, label: uses, note: "Part 1 gives the recognition criterion once the completed curve subfields are specified."}
  - {to: completed-curve-subfield-correspondence, label: uses, note: "Its theorem transports completed curve subfields but does not characterize them among arbitrary submodules of the Kummer dual."}
---

**Checked invariance.** Fix a prime $\ell$. Let $K|k$ and $L|l$ be function fields over algebraically closed fields of characteristic different from $\ell$, both of transcendence degree at least $2$. Every continuous bracket-compatible isomorphism
$$\Phi:\Pi^a_L\longrightarrow\Pi^a_K$$
maps the divisorial inertia and decomposition pairs of $L|l$ bijectively onto those of $K|k$. In particular,
$$\Phi\bigl(\mathrm{In.div}(L)\bigr)=\mathrm{In.div}(K),$$
where $\mathrm{In.div}(F)$ is the union of the inertia subgroups of prime divisors. The same conclusion holds for the abelianization of every isomorphism $\Pi^c_L\to\Pi^c_K$.

**Justification.** Steps 0–4 of [the pro-$\ell$ reconstruction proof](pro-l-abelian-by-central-reconstruction-of-function-fields.md) give the matching of quasi-divisorial pairs and of completed curve subfields. These are exactly the hypotheses of part 3 of [the divisoriality theorem](divisoriality-from-completed-curve-subfields.md). Step 5 therefore gives the asserted bijection of full divisorial pairs under the Kummer identifications. A change of Tate-module identification multiplies characters by a unit and leaves each inertia and decomposition subgroup unchanged. Taking the union gives the displayed equality. An isomorphism of $\Pi^c$ preserves its closed commutator subgroup, so its abelianization is bracket-compatible, as checked in part 4 of the reconstruction theorem. Neither its final field-isomorphism step nor Pop's reconstruction theorem is needed for this consequence. There is no restriction excluding $\ell=2$ or transcendence degree $2$.

**What remains to be specified.** Pop asks for recovery from the abstract group datum, and states recovery and invariance as separate assertions [@pop2018, §1, pp. 2–3; Theorem 1.2(2)–(3), p. 3]. These statements do not impose a computability or first-order requirement. No such extra requirement is imposed here, but invariance alone is not being substituted for a recognition recipe.

In the checked criterion, a quasi prime divisor $v$ is divisorial exactly when
$$D_v^\perp\cap H=0\quad\text{for some }H\in\mathcal C_K,\qquad
\mathcal C_K=\{\widehat E:E\text{ a curve subfield of }K|k\}.$$
The annihilator lies in $\widehat K=\mathrm{Hom}_{\mathrm{cont}}(W_K,\mathbb Z_\ell)$. Once $\mathcal C_K$ is specified, this is a test using the recovered local groups and their evaluation dual. The remaining task for this route is to select $\mathcal C_K$ from the abstract group data without supplying the subfields of $K$ as additional input.

The [curve-subfield theorem](completed-curve-subfield-correspondence.md) proves that evaluation duals of matched isomorphisms carry $\mathcal C_K$ onto $\mathcal C_L$. Its proof starts with a curve subfield $E$ and a model of the other field; it does not supply a condition on an arbitrary submodule $H$ that recognizes membership in $\mathcal C_K$.

Invariance does make transport through a field realization well-defined. If $i_j:\Pi^c_{F_j}\to G$ are two realizations satisfying the hypotheses above, then the abelianization of $i_1^{-1}i_2$ preserves divisorial inertia by the checked consequence. Thus the two transported subsets of $G^{\mathrm{ab}}$ agree. This determines a subset independently of the chosen realization, but does not provide the subgroup test above without one. This note retains an `addresses` arrow to [the problem](divisorial-inertia-recovery-problem.md) until a recognition recipe is specified; it does not assert that none can be extracted from the reconstruction proof. The underlying 2026 manuscript and the checks composed here are not peer reviewed.
