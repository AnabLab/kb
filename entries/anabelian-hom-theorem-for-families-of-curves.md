---
title: An anabelian Hom theorem for families of hyperbolic curves
kind: theorem
summary: 'Over a normal base of finite type over a sub-p-adic field, dominant maps to a family of hyperbolic curves correspond to open maps of profinite étale homotopy types. Holzschuh–Schmidt–Stix prove this in a 2026 preprint; the source must surject onto the base.'
tags: [curves, fundamental-groups, etale-homotopy]
edges:
  - {to: hyperbolic-polycurve, label: uses, note: "Only its definition of a relative hyperbolic curve is used."}
  - {to: mochizuki-hom-theorem-for-hyperbolic-curves, label: generalizes, note: "The smooth finite-type source and full profinite case is recovered when the base is a field [@holzschuhschmidtstix2026, Theorem 4.1, pp. 10–11]."}
---

**Setting.** Let $S$ be connected and normal, of finite type over a sub-$p$-adic field. Let $X\to S$ be a relative [hyperbolic curve](hyperbolic-polycurve.md). Let $Y$ be connected, with $Y\to S$ smooth, surjective and of finite type, and with geometrically connected generic fibre.

Write $\widehat\Pi(Z)$ for the profinite étale homotopy type of $Z$. Let $\mathrm{Map}^{\mathrm{op}}_B$ denote the mapping space over $B$ restricted to maps whose induced homomorphisms on fundamental groups have open image [@holzschuhschmidtstix2026, §1.1, pp. 1–2].

**Theorem (Holzschuh–Schmidt–Stix).** The natural map
$$
\mathrm{Hom}^{\mathrm{dom}}_S(Y,X)\longrightarrow
\pi_0\mathrm{Map}^{\mathrm{op}}_{\widehat\Pi(S)}
\bigl(\widehat\Pi(Y),\widehat\Pi(X)\bigr)
$$
is bijective [@holzschuhschmidtstix2026, Theorem A, p. 2]. This mapping space is discrete [@holzschuhschmidtstix2026, Remarks 1.1 (2), p. 2 and Theorem 8.4, p. 20]. The comparison uses homotopy types over $\widehat\Pi(S)$.

**Necessary hypothesis.** Surjectivity cannot be dropped. Over a sub-$p$-adic field $k$, take $S=\mathbb A^1_k$ and a hyperbolic open $U\subset S$. Set $X=U\times_k S\to S$ and $Y=S\times_k U\to U\hookrightarrow S$, using second projections. Swapping factors induces an equivalence over $\widehat\Pi(S)$, but no dominant $S$-morphism $Y\to X$ exists [@holzschuhschmidtstix2026, Remarks 1.1 (1), p. 2].

**Status.** Cited from arXiv version 1, submitted 21 August 2026; no journal publication is listed on its arXiv page.
