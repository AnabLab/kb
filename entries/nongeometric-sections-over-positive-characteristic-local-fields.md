---
title: Nongeometric sections over positive-characteristic local fields
kind: theorem
summary: 'Hoshi–Tsujimura show that a genus-at-least-two curve over Fq((t)) with smooth proper reduction having no Fq-point has no point even over the perfect closure, yet its birational Galois sequence and its etale fundamental group sequence both split.'
tags: [curves, local-fields, positive-characteristic, galois-groups, section-conjecture]
edges:
  - {to: section-conjecture, label: analogous-to, note: "Failure of the positive-characteristic local analogue; the target conjecture is over fields finitely generated over Q."}
  - {to: birational-section-conjecture, label: analogous-to, note: "Even existence of a birational section does not force a rational point over these local fields."}
  - {to: birational-sections-over-local-fields, label: analogous-to, note: "The positive-characteristic local analogue of the p-adic conclusion fails."}
---

**Theorem (Hoshi–Tsujimura, preprint).** Let $k=\mathbb F_q$ have characteristic $p$, set $K=k((t))$ and $R=k[[t]]$, and let $\mathcal C\to\operatorname{Spec}R$ be a smooth proper curve with geometrically connected fibres of genus at least $2$. Write $C=\mathcal C_K$ and $C_0=\mathcal C_k$. If $C_0(k)=\varnothing$, then
$$
C(K^{\mathrm{perf}})=\varnothing,
$$
but both natural surjections
$$
G_{K(C)}\longrightarrow G_K,\qquad \pi_1(C)\longrightarrow G_K
$$
admit continuous sections [@hoshitsujimura2026artinschreier, Remark 1.8.1(i)–(iii), pp. 10–11]. Thus these sections cannot come from rational points, even after passing to the [perfect closure](purely-inseparable-invariance-of-galois-groups.md).

**Construction in the source.** Properness would specialize a $K^{\mathrm{perf}}$-point to a $k$-point of $C_0$, since the valuation ring of $K^{\mathrm{perf}}$ has residue field $k$. This proves the asserted absence of points [@hoshitsujimura2026artinschreier, Remark 1.8.1(i), p. 10].

Let $L$ be the completion of $K(C)$ at the generic point of $C_0$. Its residue field is $k(C_0)$ and $t$ is a uniformizer. Projectivity of $G_k\cong\widehat{\mathbb Z}$ supplies a section of $G_{k(C_0)}\to G_k$. The corresponding unramified extension $M/L$ has $G_{k_M}\cong G_k$ on residue fields. The restriction $G_M\to G_K$ is surjective and induces an isomorphism of maximal tamely ramified quotients, so its kernel is pro-$p$. Since $\operatorname{cd}_p(G_K)\le1$, this surjection splits. Composing a splitting with
$$
G_M\longrightarrow G_{K(C)}\longrightarrow\pi_1(C)
$$
gives the two claimed sections [@hoshitsujimura2026artinschreier, Remark 1.8.1(ii)–(iii), pp. 10–11].

**Existence and scope.** The authors state existence of such counterexamples in Theorem A(ii). Remark 1.8.1 sketches the production of nonisotrivial examples by deforming a smooth proper curve over $k$ without $k$-points; it supplies neither an equation nor a detailed deformation argument [@hoshitsujimura2026artinschreier, Theorem A(ii), p. 3, and Remark 1.8.1, p. 10]. The theorem above records the precise conditional statement proved in that remark. The model is smooth over $R$; a merely semistable model is not the hypothesis used here.

This failure contrasts with [Koenigsmann's birational theorem over $p$-adic fields](birational-sections-over-local-fields.md). In the same positive-characteristic setting, [injectivity for affine varieties](artin-schreier-injectivity-of-galois-sections.md) and [reconstruction of punctured projective lines](punctured-projective-lines-over-positive-characteristic-local-fields.md) remain possible.
