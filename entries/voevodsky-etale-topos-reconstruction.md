---
title: Voevodsky's reconstruction of normal schemes from étale topoi
kind: theorem
summary: 'Over a fixed finitely generated characteristic-zero field, normal finite-type schemes and their morphisms are recovered from their étale topoi over the base, with geometric morphisms required to send closed points to closed points.'
tags: [etale-topoi, fundamental-groups, number-fields]
---

**Data.** Fix a field $k$ finitely generated over $\mathbb Q$. Retain the étale topos $X_{\mathrm{\acute et}}$ and its structural morphism to $k_{\mathrm{\acute et}}=(\operatorname{Spec}k)_{\mathrm{\acute et}}$. A coherent geometric morphism over this base is *admissible* if its induced map $|X|\to|Y|$ sends closed points to closed points. Voevodsky gives the relative-site and admissibility definitions in [@voevodsky1991etale, Definition 1.3 and the following paragraph, p. 513].

**Theorem (normal case).** For normal finite-type $k$-schemes $X,Y$, the natural map
$$
\operatorname{Hom}_k(X,Y)\longrightarrow
\pi_0\operatorname{Hom}^{\mathrm{adm}}_{k_{\mathrm{\acute et}}}
 (X_{\mathrm{\acute et}},Y_{\mathrm{\acute et}})
$$
is bijective; $\pi_0$ means isomorphism classes of admissible morphisms [@voevodsky1991etale, Theorem 3.1, p. 519]. In particular, an equivalence of these étale topoi over $k_{\mathrm{\acute et}}$ implies $X\cong_kY$ [@voevodsky1991etale, Corollary 3.1, p. 519].

Barwick–Glasman–Haine state the modern formulation: $X\mapsto X_{\mathrm{\acute et}}$ is fully faithful from normal finite-type $k$-schemes into bounded coherent $\infty$-topoi over the base with admissible coherent geometric morphisms [@barwickglasmanhaine2020, §14.4.3 and Theorem 14.4.6, p. 232]. This is the scheme-reconstruction input to the [Galois-category theorem](galois-categories-reconstruct-normal-schemes.md) [@barwickglasmanhaine2020, discussion preceding Theorem 14.4.7, p. 233].

**Scope.** Voevodsky suggests that a modified proof should work over finitely generated positive-characteristic fields of transcendence degree at least one; this is a claim in the introduction, rather than a theorem proved there [@voevodsky1991etale, Introduction, p. 511]. The [later reconstruction entry](etale-topos-reconstruction-over-sub-p-adic-fields.md) records extensions beyond the normal characteristic-zero case.

**Source.** Voevodsky's original paper appeared in Russian in 1990. Locations here refer to the 1991 English translation; the cited statements and definitions were checked there, without an independent audit of the proof.
