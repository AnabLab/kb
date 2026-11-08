---
title: Schemes over sub-p-adic fields from their étale topoi
kind: theorem
summary: 'Carlson–Stix reconstruct finite-type schemes over a fixed sub-p-adic field from their étale topoi, after inverting universal homeomorphisms. For a seminormal source, scheme morphisms correspond to geometric morphisms of topoi that send closed points to closed points.'
tags: [fundamental-groups, local-fields, number-fields, reconstruction-algorithms]
edges:
  - {to: voevodsky-etale-topos-reconstruction, label: generalizes, note: 'Carlson–Stix explicitly recover Voevodsky''s normal case over finitely generated characteristic-zero fields [@carlsonstix2024, Introduction, p. 1].'}
  - {to: mochizuki-hom-theorem-for-hyperbolic-curves, label: uses, note: "The proof reduces to maps to the tripod and applies Mochizuki's Hom theorem [@carlsonstix2024, Proposition 4.5, pp. 13–14]."}
  - {to: purely-inseparable-invariance-of-galois-groups, label: analogous-to, note: "Universal homeomorphisms preserve the entire étale topos, explaining the localization here."}
---

**Data.** Fix a sub-$p$-adic field $K$, meaning a subfield of a finitely generated extension of $\mathbb Q_p$. For a finite-type $K$-scheme $X$, retain its topos $X_{\mathrm{\acute et}}$ of étale sheaves of sets and its structural map to $K_{\mathrm{\acute et}}=(\operatorname{Spec}K)_{\mathrm{\acute et}}$. A geometric morphism is *pinned* if its induced map of underlying spaces preserves closed points [@carlsonstix2024, Introduction, p. 1, and §2.1, pp. 3–4].

**Theorem (Carlson–Stix).** Writing $\mathrm{UH}$ for universal homeomorphisms, the functor
$$
\bigl(\mathrm{Sch}^{\mathrm{ft}}_K[\mathrm{UH}^{-1}]\bigr)
\longrightarrow \mathrm{RTop}^{\mathrm{pin}}_K,
\qquad X\longmapsto X_{\mathrm{\acute et}}
$$
is fully faithful. The target consists of coherent topoi over $K_{\mathrm{\acute et}}$, pinned geometric morphisms, and their natural isomorphisms [@carlsonstix2024, Theorem 4.1, pp. 12–14]. Concretely, if $X$ is seminormal and $Y$ is any finite-type $K$-scheme, then
$$
\operatorname{Hom}_K(X,Y)\longrightarrow
\operatorname{Hom}^{\mathrm{pin}}_K
 (X_{\mathrm{\acute et}},Y_{\mathrm{\acute et}})
$$
is an equivalence from a discrete groupoid. If both schemes are seminormal, their $K$-isomorphisms correspond to equivalences of topoi over $K_{\mathrm{\acute et}}$; equivalences are automatically pinned [@carlsonstix2024, Theorem B(1)–(2), p. 2].

**Why the qualifications matter.**

- Universal homeomorphisms induce equivalences of étale topoi, including nilpotent thickenings [@stacks2026, Proposition 59.45.4, Tag 03SI]. In characteristic zero, seminormalization realizes this localization [@carlsonhainewolf2025, Corollary 1.15(1) and Lemma 1.32, pp. 6 and 9]. Seminormality is the local ring condition that $x^3=y^2$ admits a unique $a$ with $x=a^2$ and $y=a^3$ [@stacks2026, Definitions 29.48.1 and 29.48.3, Tag 0EUK].
- Pinning is essential even over $K$: a continuous section of $G_{K(t)}\to G_K$ induces a morphism $(\operatorname{Spec}K)_{\mathrm{\acute et}}\to(\mathbb P^1_K)_{\mathrm{\acute et}}$ landing at the generic point, which cannot come from a $K$-point [@carlsonhainewolf2025, Example 2.30, p. 15].
- The arithmetic base matters. Over an algebraically closed characteristic-zero field, smooth proper curves of the same genus have equivalent étale topoi [@carlsonhainewolf2025, Example 2.31, p. 16].

**Mechanism and scope.** The proof uses the [Hom theorem for hyperbolic curves](mochizuki-hom-theorem-for-hyperbolic-curves.md) after reducing to the tripod $\mathbb P^1\setminus\{0,1,\infty\}$ [@carlsonstix2024, Lemma 4.3 and Proposition 4.5, pp. 13–14]. The retained object is the full topos over the specified base, with no structure sheaf supplied.

Carlson–Haine–Wolf also prove the localized reconstruction statement over every infinite finitely generated field, including positive characteristic, where the reconstructed objects are perfections [@carlsonhainewolf2025, Theorem 0.1 and Corollary 1.15(2), pp. 2 and 6]. This is the scheme-level counterpart of the [purely inseparable ambiguity](purely-inseparable-invariance-of-galois-groups.md).

**Sources.** Carlson–Stix is cited in arXiv version 2, a preprint. Carlson–Haine–Wolf is published; locations here use arXiv version 1 under its earlier title.
