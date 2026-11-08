---
title: Anabelian presentation of the motivic Galois group
kind: theorem
summary: 'For a complex-embedded field, Ayoub recovers its motivic Galois group from tensor autoequivalences of the functor of geometric-origin local systems on smooth varieties. The result includes the derived structure and has a classical affine-group formulation.'
tags: [galois-groups, fundamental-groups, hodge-theory]
edges:
  - {to: abelian-by-central-ihara-oda-matsumoto, label: analogous-to, note: "A motivic version of the same reconstruction pattern; Ayoub discusses the pro-ell and mod-ell versions [@ayoub2026motivic, Introduction, pp. 2–3]."}
  - {to: hodge-theoretic-hom-theorem, label: analogous-to, note: "Both use characteristic-zero local-system categories; here natural tensor symmetries recover a motivic Galois group, while Wang recovers maps between curves using a Hodge action."}
---

**Data.** Fix a field embedding $\sigma:k\hookrightarrow\mathbb C$. For a finite-type $k$-scheme $X$, let $X^{\mathrm{an}}$ be its complex analytification. For a commutative coefficient ring $A$, define $\mathrm{Sh}_{\sigma\text{-}\mathrm{geo}}(X;A)$ inside ind-constructible derived sheaves on $X^{\mathrm{an}}$ by closing the objects $\mathrm Rf_*A$, for proper $k$-morphisms $f:Y\to X$, under colimits and desuspension. Let $\mathrm{LS}_{\sigma\text{-}\mathrm{geo}}(X;A)$ be its full subcategory generated under colimits by dualizable objects. Its ordinary heart is denoted $\mathrm{LS}_{\sigma\text{-}\mathrm{geo}}(X;A)^\heartsuit$ [@ayoub2026motivic, Definition 1.6.1 and Remark 1.6.2, p. 49; Definition 4.4.14, p. 248].

**Theorem (Ayoub, classical form).** Let $\mathcal G^{\mathrm{cl}}_{\mathrm{mot}}(k,\sigma)$ be the classical affine group scheme underlying Ayoub's motivic Galois group for the Betti realisation associated to $\sigma$ [@ayoub2026motivic, Definition 1.4.3 and Remark 1.4.12, pp. 36 and 39]. For every ordinary commutative $\mathbb Q$-algebra $A$, naturally in $A$,
$$
\mathcal G^{\mathrm{cl}}_{\mathrm{mot}}(k,\sigma)(A)
\simeq
\operatorname{Auteq}^{\otimes}_A
\bigl(X\longmapsto\mathrm{LS}_{\sigma\text{-}\mathrm{geo}}(X;A)^\heartsuit\bigr),
$$
where $X$ ranges over smooth finite-type $k$-schemes. The right side is the groupoid of $A$-linear tensor autoequivalences of this contravariant functor, compatible with every pullback. It is equivalent to a discrete group: its equivalence classes recover precisely the $A$-points of the motivic Galois group [@ayoub2026motivic, Definition 4.4.14 and Corollary 4.4.15, pp. 248–249].

**Torsion coefficients.** For any characteristic-zero field $k$, an algebraic closure $\bar k$, and a nonzero connected ordinary commutative torsion ring $A$, let $E(X;A)$ be the category of étale locally constant sheaves of $A$-modules on $X\otimes_k\bar k$. Ayoub also identifies $\operatorname{Gal}(\bar k/k)$ with the discrete Picard groupoid of $A$-linear tensor autoequivalences of the functor $X\mapsto E(X;A)$ on smooth finite-type $k$-schemes, compatible with every pullback [@ayoub2026motivic, Corollary 4.4.16, p. 249].

**Which completion.** For connected $X$ and a complex point $x$, the finite-dimensional ordinary geometric-origin local systems, with fibre functor at $x$, have Tannakian group $\pi_1^{\mathrm{geo}}(X,x)_{\mathbb Q}$. This is a quotient of the pro-algebraic completion of $\pi_1(X^{\mathrm{an}},x)$ [@ayoub2026motivic, Notation and conventions, p. 12; Remark 4.5.2, p. 250]. The theorem retains the tensor categories and their functoriality across smooth varieties.

**Derived form and method.** Theorem 4.4.2 identifies the full motivic Galois group with the prestack of tensor autoequivalences of the stable local-system functor, allowing commutative ring spectra as coefficients [@ayoub2026motivic, Definition 4.4.1 and Theorem 4.4.2, pp. 233–234]. Triviality of the derived structure remains conjectural [@ayoub2026motivic, Remark 12, p. 7]. The proof first handles constructible sheaves using the universality of motivic sheaves, then recovers their symmetries from local systems using monodromic specialisation [@ayoub2026motivic, Introduction, pp. 8–10; Theorem 2.2.3, p. 71].

**Source version.** Locations refer to the author's 257-page PDF accessed on 8 November 2026. The publisher lists the article in *Forum of Mathematics, Sigma* 14 (2026), e139; the published text has not been compared in full.
