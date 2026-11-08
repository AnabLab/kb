---
title: The section conjecture for generic pointed curves
kind: theorem
summary: "Luo–Watanabe's 2026 preprint classifies full profinite and geometrically pro-$\\ell$ sections of the generic complete genus-$g$ curve with $n$ markings over $k(\\mathcal M_{g,n})$, for $k/\\mathbb Q$ finitely generated, $g\\ge3$, $n\\ge1$: exactly the $n$ marked points, for every prime $\\ell$."
tags: [curves, fundamental-groups, function-fields, section-conjecture, hodge-theory]
edges:
  - {to: section-conjecture, label: addresses, note: "Proves it for generic pointed curves with g at least 3, in the cited preprint."}
  - {to: section-conjecture-for-universal-curves, label: uses, note: "The rational-point input is Hain's Theorem 1 [@luowatanabe2026, proof of Corollary 9.3, p. 39]."}
  - {to: mochizuki-hom-theorem-for-hyperbolic-curves, label: uses, note: "The full profinite classification uses the open Hom theorem [@luowatanabe2026, Proposition 8.5 and its proof, p. 36]."}
---

**Source status.** These are results of Luo–Watanabe's October 2026 preprint, cited at version 1.

**Setting.** Let $k/\mathbb Q$ be finitely generated, $g\ge3$, $n\ge1$, and $K=k(\mathcal M_{g,n/k})$. Let $C/K$ be the generic universal **complete** curve, with marked points $x_1,\ldots,x_n$. The markings are retained, so this is a proper curve. Put $\Delta=\pi_1(C_{\bar K})$, $\Pi=\pi_1(C)$, and, for a prime $\ell$,
$$
\Delta_\ell=\Delta^{(\ell)},\qquad
\Pi_\ell=\Pi/\ker(\Delta\longrightarrow\Delta_\ell).
$$
The quotient gives $1\to\Delta_\ell\to\Pi_\ell\to G_K\to1$; only the geometric kernel is replaced. Write $\mathrm{Sec}_K(\Delta)$ and $\mathrm{Sec}_K(\Delta_\ell)$ for continuous sections modulo conjugation by the indicated kernel [@luowatanabe2026, §§2.1–2.3, pp. 3–5].

**Classification.** For every prime $\ell$, the natural maps
$$
C(K)=\{x_1,\ldots,x_n\}
\longrightarrow\mathrm{Sec}_K(\Delta)
\longrightarrow\mathrm{Sec}_K(\Delta_\ell)
$$
are bijections: both section sets consist of exactly the $n$ distinct tautological classes [@luowatanabe2026, Theorems 9.1–9.2 and Corollary 9.3, pp. 37–39].

The same classification holds over the moduli stack: with $\mathcal C\to\mathcal M_{g,n/k}$ its universal complete curve, the sections of $\pi_1(\mathcal C)\to\pi_1(\mathcal M_{g,n/k})$, and of its geometrically pro-$\ell$ quotient, are exactly the tautological ones up to geometric conjugacy. Restriction to the generic point is bijective on these section classes [@luowatanabe2026, Theorems 9.1–9.2, pp. 37–38].

**From unipotent to full sections.** Hain's [pointed result](section-conjecture-for-universal-curves.md) classifies unipotent sections for $g\ge5$ under its stated hypotheses [@hain2011, Theorem 3, p. 3]. Here integral conjugation and moving a marking lift unipotent conjugacy to pro-$\ell$ conjugacy [@luowatanabe2026, Propositions 4.6 and 5.3, pp. 15–19]. For full profinite sections, the argument uses configuration spaces and [Mochizuki's open Hom theorem](mochizuki-hom-theorem-for-hyperbolic-curves.md) [@luowatanabe2026, Proposition 8.5 and proof of Theorem 9.2, pp. 36–38]. The theorem covers genera three and four but requires $n\ge1$; the [unpointed generic curves](generic-curve-nonsplitting-in-small-genus.md) have a separate entry.
