---
title: Specialization of fundamental groups of smooth curves
kind: theorem
summary: 'For a smooth proper family, specialization surjects on geometric fundamental groups and is an isomorphism on prime-to-p quotients, where p is the special characteristic. With a finite étale boundary, tame groups specialize and prime-to-p quotients remain unchanged.'
tags: [curves, fundamental-groups, local-fields]
---

**Notation.** For a profinite group $G$ and a prime $p$, write $G^{p'}$ for its maximal quotient that is an inverse limit of finite groups of order prime to $p$. All fundamental groups below are geometric; specialization maps are understood up to inner automorphisms, after choosing compatible geometric points and paths.

**Proper specialization (Grothendieck).** Let $f:X\to S$ be smooth and proper with geometrically connected fibres, with $S$ locally noetherian. Let $s$ be a specialization of $t$, and choose geometric fibres $X_{\bar t}$ and $X_{\bar s}$. There is a continuous surjection
$$
\operatorname{sp}_{t,s}:\pi_1(X_{\bar t})\longrightarrow\pi_1(X_{\bar s}).
$$
If the residue field $\kappa(s)$ has characteristic $p>0$, it induces an isomorphism
$$
\pi_1(X_{\bar t})^{p'}\xrightarrow{\sim}\pi_1(X_{\bar s})^{p'}.
$$
If $\kappa(s)$ has characteristic $0$, the full specialization map is an isomorphism. The construction and surjectivity are in [@grothendieck1971sga1, Exp. X, Corollary 2.4, p. 207]; the smooth specialization theorem and both isomorphism statements are [@grothendieck1971sga1, Exp. X, Theorem 3.8 and Corollary 3.9, p. 217]. This statement applies in every relative dimension.

**Punctured curves.** Let $R$ be a complete discrete valuation ring with fraction field $K$ and residue field $k$ of characteristic $p>0$. Let $\mathcal X/R$ be a smooth proper curve with geometrically connected fibres and $\mathcal D\subset\mathcal X$ a reduced relative divisor finite étale over $R$, possibly empty. Put $\mathcal U=\mathcal X\setminus\mathcal D$. The tame fundamental group of a geometric fibre classifies its finite étale covers tamely ramified along the omitted points. There is a surjection
$$
\pi_1^{\mathrm t}(\mathcal U_{\bar K})\longrightarrow
\pi_1^{\mathrm t}(\mathcal U_{\bar k}),
$$
inducing an isomorphism
$$
\pi_1(\mathcal U_{\bar K})^{p'}\xrightarrow{\sim}
\pi_1(\mathcal U_{\bar k})^{p'}.
$$
These are the curve case of [@grothendieck1971sga1, Exp. XIII, Corollaries 2.8–2.9 and construction 2.10, pp. 288–290]. In mixed characteristic the generic tame group is the full $\pi_1(\mathcal U_{\bar K})$; the source explicitly uses this surjection and prime-to-$p$ isomorphism in [@grothendieck1971sga1, Exp. XIII, proof of Corollary 2.12, pp. 291–292]. Specialization also carries an inertia subgroup at a generic boundary point onto an inertia subgroup at its specialization [@grothendieck1971sga1, Exp. XIII, Lemma 2.11, p. 290].

**Scope and uses.** The finite étale boundary hypothesis keeps the punctures distinct in the special fibre. The prime-to-$p$ invariance is an input to the [presentation of geometric curve groups](geometric-fundamental-groups-of-curves.md). Full or tame groups in characteristic $p$ can still vary in smooth families; see [variation of fundamental groups](variation-of-fundamental-groups-of-curves-in-positive-characteristic.md). For affine curves in equal characteristic $p$, the tame specialization map is available, whereas an analogous map between the full étale groups is unavailable in general [@saiditamagawa2017, Remark 3.11(i), p. 8].

**Sources.** SGA 1 is cited by the printed pages of the recomposed edition, arXiv:math/0206203v2. Saïdi–Tamagawa is cited in arXiv:1510.06867v1.
