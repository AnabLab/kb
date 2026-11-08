---
title: Étale descent for constant curves over global function fields
kind: problem
summary: 'For curves $C, D$ over a finite field, Creutz and Voloch conjecture that the locally constant adelic points of $C$ over $\mathbb F(D)$ surviving étale descent are the reductions of limits of morphisms $D \to C$. Known for genus 1, and when $J_C$ is not an isogeny factor of $J_D$.'
tags: [curves, function-fields, finite-fields]
edges:
  - {to: section-conjecture-from-finite-descent, label: analogous-to, note: "Over number fields, Stoll conjectures that finite abelian descent cuts out the rational points of a curve of genus at least 2. This conjecture is a function-field analogue for constant curves, with étale descent tested on locally constant adelic points."}
---

**Setting.** Let $\mathbb F$ be a finite field, $C$ and $D$ smooth, proper, geometrically integral curves over $\mathbb F$, and $K = \mathbb F(D)$. Regard $C$ as a curve over $K$. Then $C(K) = \mathrm{Mor}_{\mathbb F}(D, C)$, and the constant maps form $C(\mathbb F)$. Reduction at the places of $K$, using the model $C \times_{\mathbb F} D$ over $D$, gives a continuous retraction $r : C(\mathbb A_K) \to C(\mathbb A_{K,\mathbb F})$ onto the locally constant adelic points [@creutzvoloch2024, §1.1 and §2.1, pp. 2–4]. Let $C(\mathbb A_{K,\mathbb F})^{\mathrm{\acute et}}$ be the locally constant adelic points that survive every torsor under a finite étale $K$-group scheme, as in [étale descent and maps of fundamental groups](etale-descent-and-fundamental-group-maps-over-finite-fields.md). Write $\overline{C(K)}$ for the closure of $C(K)$ in $C(\mathbb A_K)$. Then $r(\overline{C(K)})$ is a closed subset of $C(\mathbb A_{K,\mathbb F})^{\mathrm{\acute et}}$ [@creutzvoloch2024, p. 3].

**Conjecture (Creutz–Voloch)** [@creutzvoloch2024, Conjecture 1.1, p. 3].
$$r\bigl(\overline{C(K)}\bigr) = C(\mathbb A_{K,\mathbb F})^{\mathrm{\acute et}}.$$
In particular, $C(\mathbb A_{K,\mathbb F})^{\mathrm{\acute et}} = C(\mathbb F)$ if and only if every morphism $D \to C$ over $\mathbb F$ is constant.

The closure matters. Whenever there is a nonconstant morphism $D \to C$, composing it with powers of the Frobenius endomorphism of $C$ makes $C(K)$ infinite, and then $C(K) \neq \overline{C(K)}$ [@creutzvoloch2024, p. 3].

**Context.** Creutz and Voloch call this a nonabelian analogue of a conjecture of Poonen over number fields. They note that, by a theorem in their earlier paper, it is equivalent to the equality of $\overline{C(K)}$ with the set $C(\mathbb A_K)^{\text{ét-Br}}$ of adelic points surviving the étale Brauer–Manin obstruction [@creutzvoloch2024, p. 3].

**Known cases.**

- *Genus $1$.* It follows from the Tate conjecture for abelian varieties over finite fields [@creutzvoloch2024, p. 3].
- *$g(D) < g(C)$.* Creutz and Voloch cite their earlier paper for this case [@creutzvoloch2024, p. 3], which proves $C(\mathbb A_K)^{\mathrm{Br}} = C(K) = C(\mathbb F)$ [@creutzvoloch2022, Theorem 1.5, p. 3]. Fact (i) in the proof in [étale descent and maps of fundamental groups](etale-descent-and-fundamental-group-maps-over-finite-fields.md) deduces $C(\mathbb A_{K,\mathbb F})^{\mathrm{\acute et}} = C(\mathbb F)$. Together with $C(K) = C(\mathbb F)$, this is the conjecture for $C$ and $D$.
- *$J_C$ not an isogeny factor of $J_D$.* This is Creutz and Voloch's Theorem 1.3 [@creutzvoloch2024, Theorem 1.3, p. 3], and it contains the previous case when $g(C) \ge 2$. Its proof is checked, with the changes described there, in [étale descent and maps of fundamental groups](etale-descent-and-fundamental-group-maps-over-finite-fields.md).
- *Some cases with $C(K) = C(\mathbb F)$,* due to Creutz, Viray and Voloch, as reported in [@creutzvoloch2024, p. 3]. That paper was not opened here.
- *Equal genus, conditionally.* Embed $C$ in its Jacobian by a divisor of degree $1$, and let $H(C) = (1 - \Phi)^*(C)$, where $\Phi$ is the Frobenius of $J_C$. This is an unramified abelian cover of $C$ with group $J_C(\mathbb F)$, well defined up to twist. Put $H_0(C) = C$ and $H_{n+1}(C) = H_n(H(C))$. Sutherland and Voloch conjecture the following for curves $C, D$ of equal genus at least $2$. If, for every $n$, twists can be chosen so that $H_n(C)$ and $H_n(D)$ have the same $L$-function, then $C$ is isomorphic to a conjugate of $D$ [@creutzvoloch2024, Conjecture 1.4, p. 4]. Assuming this, Creutz and Voloch prove that for $g(C) = g(D) \ge 2$, $C(\mathbb A_{K,\mathbb F})^{\mathrm{\acute et}} \neq C(\mathbb F)$ exactly when there is a nonconstant morphism $D \to C$. This is the last clause of the conjecture in this case [@creutzvoloch2024, Theorem 1.5, p. 4; proof in §4.2, p. 9]. That proof was not checked here.

**Anabelian form.** Let $g(C) \ge 2$. A homomorphism $\pi_1(D) \to \pi_1(C)$ compatible with the projections to $\mathrm{Gal}(\bar{\mathbb F}/\mathbb F)$ is *well behaved* if it maps decomposition groups to open subgroups of decomposition groups. By part 4 of [étale descent and maps of fundamental groups](etale-descent-and-fundamental-group-maps-over-finite-fields.md), some locally constant adelic point outside $C(\mathbb F)$ survives every torsor defined over $\mathbb F$ under a finite étale group scheme exactly when some well-behaved homomorphism has open image. Since $C(\mathbb A_{K,\mathbb F})^{\mathrm{\acute et}}$ is contained in the set of points surviving these torsors, and contains the reduction of every morphism $D \to C$, the last clause of the conjecture follows from the following statement, an instance of the anabelian expectation that open homomorphisms come from morphisms [@creutzvoloch2024, p. 3]:

- A well-behaved homomorphism $\pi_1(D) \to \pi_1(C)$ with open image exists only if a nonconstant morphism $D \to C$ exists.

This deduction is checked here.

**Status.** Open in general as far as the sources opened here show. A brief literature search in November 2026 found no later work on it, but that search was not exhaustive.
