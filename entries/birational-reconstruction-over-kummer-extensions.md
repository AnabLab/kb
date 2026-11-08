---
title: Birational reconstruction over Kummer extensions of number fields
kind: theorem
summary: 'Tsujimura''s 2026 preprint reconstructs positive-dimensional function fields over subfields of number-field Kummer extensions, including transcendental extensions of Qab, from absolute Galois groups. Geometrically pro-Sigma quotients suffice for every nonempty Sigma.'
tags: [function-fields, number-fields, galois-groups]
edges:
  - {to: pop-mochizuki-finitely-generated-fields, label: analogous-to, note: 'Extends its characteristic-zero, positive-transcendence range to infinite algebraic constant fields [@tsujimura2026birational, Remark 5.21.1, p. 64].'}
  - {to: field-automorphisms-act-faithfully-on-galois-groups, label: uses, note: 'Theorem 5.21 invokes Hoshi–Tsujimura, Theorem 1.5, for injectivity [@tsujimura2026birational, proof of Theorem 5.21, p. 63].'}
  - {to: grothendieck-conjecture-for-configuration-spaces-over-tknd-avkf-fields, label: analogous-to, note: 'Both reach constants such as Qab; here the objects are function fields and the reconstruction is absolute.'}
---

**Constants and quotient.** For a number field $k_0$, let
$$k_0^{\mathrm{Kum}}=k_0\bigl(\alpha\in\bar k_0:\alpha^n\in k_0^\times\text{ for some }n\ge1\bigr)$$
[@tsujimura2026birational, Definition 1.13, p. 20]. For $i=1,2$, let $X_i/k_i$ be a geometrically integral variety of positive dimension, with $k_i\subseteq k_{0,i}^{\mathrm{Kum}}$ for a number field $k_{0,i}$, and put $F_i=k_i(X_i)$. Given a nonempty set of primes $\Sigma$, put
$$\Delta_i=\ker(G_{F_i}\to G_{k_i}),\qquad
G_{F_i}^{(\Sigma)}=G_{F_i}/\ker(\Delta_i\to\Delta_i^\Sigma),$$
where $\Delta_i^\Sigma$ is the maximal pro-$\Sigma$ quotient. Thus the full arithmetic quotient $G_{k_i}$ remains [@tsujimura2026birational, Introduction, p. 2].

**Theorem (preprint).** The natural map
$$\operatorname{Isom}(F_2,F_1)\longrightarrow
\operatorname{Isom}\bigl(G_{F_1}^{(\Sigma)},G_{F_2}^{(\Sigma)}\bigr)/\operatorname{Inn}\bigl(G_{F_2}^{(\Sigma)}\bigr)$$
is bijective. Taking all primes gives the full absolute Galois groups [@tsujimura2026birational, Theorem 5.21, pp. 62–64]. No compatibility with the arithmetic quotients is imposed: group isomorphisms recover it by Proposition 5.7 [@tsujimura2026birational, Proposition 5.7, p. 57].

**Scope.** In particular, this includes finitely generated transcendental extensions of $\mathbb Q^{\mathrm{ab}}$ [@tsujimura2026birational, Abstract, p. 1]. The theorem is stated only in positive dimension. The source notes that the [Shafarevich conjecture](shafarevich-conjecture.md) would make the dimension-zero analogue fail for $\mathbb Q^{\mathrm{ab}}$: all open subgroups of $G_{\mathbb Q^{\mathrm{ab}}}$ would be isomorphic, while proper finite extensions of $\mathbb Q^{\mathrm{ab}}$ are not isomorphic to it [@tsujimura2026birational, Remark 5.21.2, p. 64]. This entry records the cited July 10, 2026 preprint result, without an independent verification of its proof.
