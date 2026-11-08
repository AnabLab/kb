---
title: Voevodsky's reconstruction of normal schemes from étale topoi
kind: theorem
summary: 'Over a fixed finitely generated characteristic-zero field, normal finite-type schemes and their morphisms are recovered from their étale topoi over the base, with geometric morphisms required to send closed points to closed points.'
tags: [etale-topoi, fundamental-groups, number-fields]
---

**Data in Voevodsky's formulation.** Fix a field $k$ finitely generated over $\mathbb Q$. Here $X_{\mathrm{\acute et}}$ denotes the étale site: its objects are separated étale $X$-schemes of finite type, with jointly surjective coverings. Retain its structural morphism to $k_{\mathrm{\acute et}}=(\operatorname{Spec}k)_{\mathrm{\acute et}}$. A morphism $\varphi:X_{\mathrm{\acute et}}\to Y_{\mathrm{\acute et}}$ is given by a functor $\varphi^{-1}$ preserving fibre products and coverings; being over the base includes a specified natural isomorphism with the structural functors [@voevodsky1991etale, Definitions 1.2–1.3, pp. 511–513]. It is *admissible* if the induced map $T(\varphi):|X|\to|Y|$ sends closed points to closed points [@voevodsky1991etale, Proposition 1.1, p. 512, and the admissibility definition later on p. 513].

**Theorem (normal case).** For normal finite-type $k$-schemes $X,Y$, the natural map
$$
\operatorname{Mor}_k(X,Y)\longrightarrow
\operatorname{Mor}^0_k(X_{\mathrm{\acute et}},Y_{\mathrm{\acute et}})
$$
is bijective [@voevodsky1991etale, Theorem 3.1, p. 519]. Here $\operatorname{Mor}^0_k$ is the set of isomorphism classes of admissible morphisms of étale sites over $k_{\mathrm{\acute et}}$ [@voevodsky1991etale, definition of $\operatorname{Mor}^0_k$, p. 513]. In particular, a homeomorphism of these étale sites over $k_{\mathrm{\acute et}}$ implies $X\cong_kY$ [@voevodsky1991etale, Corollary 3.1, p. 519].

Barwick–Glasman–Haine state the modern formulation: $X\mapsto X_{\mathrm{\acute et}}$ is fully faithful from normal finite-type $k$-schemes into bounded coherent $\infty$-topoi over the base with admissible coherent geometric morphisms [@barwickglasmanhaine2020, §14.4.3 and Theorem 14.4.6, p. 232]. This is the scheme-reconstruction input to the [Galois-category theorem](galois-categories-reconstruct-normal-schemes.md) [@barwickglasmanhaine2020, discussion preceding Theorem 14.4.7, p. 233].

**Scope.** Voevodsky suggests that a modified proof should work over finitely generated positive-characteristic fields of transcendence degree at least one; this is a claim in the introduction, rather than a theorem proved there [@voevodsky1991etale, Introduction, p. 511]. The [later reconstruction entry](etale-topos-reconstruction-over-sub-p-adic-fields.md) records extensions beyond the normal characteristic-zero case.

**Source.** Voevodsky's original paper appeared in Russian in 1990. Locations here refer to the 1991 English translation; the cited statements and definitions were checked there, without an independent audit of the proof.
