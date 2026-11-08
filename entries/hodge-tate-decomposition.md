---
title: Hodge–Tate comparison recovers differential forms
kind: theorem
summary: 'For a smooth proper variety over a p-adic field, twisting its p-adic étale cohomology and taking Galois invariants recovers each Hodge cohomology group. In degree one this recovers global differentials, the first step in Mochizuki''s anabelian Hom theorem.'
tags: [hodge-theory, local-fields, reconstruction-algorithms]
edges:
  - {to: ax-sen-tate-fixed-field-theorem, label: uses, note: "The invariant formula uses the vanishing of nonzero cyclotomic twist invariants."}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, put $C=\widehat{\bar K}$, and write $C(q)=C\otimes_{\mathbb Q_p}\mathbb Q_p(q)$ with its diagonal $G_K$-action. Let $X/K$ be smooth and proper and $n\ge0$.

**Comparison (Faltings).** There is a canonical isomorphism of semilinear $C$-representations
$$
C\otimes_{\mathbb Q_p}H^n_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)
\cong \bigoplus_{q=0}^n C(-q)\otimes_K H^{n-q}(X,\Omega^q_{X/K}),
$$
where $G_K$ acts through $C(-q)$ on the right [@brinonconrad2009, Theorem 2.2.3, p. 13]. No good-reduction hypothesis is needed.

**Recovering the pieces.** Canonically,
$$
\left(H^n_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)\otimes_{\mathbb Q_p}C(q)\right)^{G_K}
\cong H^{n-q}(X,\Omega^q_{X/K})
\qquad(0\le q\le n)
$$
[@brinonconrad2009, discussion following Remark 2.3.2, p. 17]. Indeed, twist the comparison by $q$: the summand indexed by $r$ contains $C(q-r)$. Its invariants vanish unless $r=q$, when $C^{G_K}=K$, by [Tate–Sen](ax-sen-tate-fixed-field-theorem.md) [@brinonconrad2009, Theorem 2.2.7, p. 15].

For a proper smooth curve this reads
$$
\left(H^1_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)\otimes C(1)\right)^{G_K}
\cong H^0(X,\Omega^1_{X/K}).
$$
Mochizuki applies this operation to a Galois-equivariant injection on $H^1$, obtaining an injection on global differentials in his [Hom theorem](mochizuki-hom-theorem-for-hyperbolic-curves.md) [@mochizuki1999, Introduction, pp. 8–9]. For smooth proper $X$ of dimension $d$, the case $n=q=d$ similarly recovers $H^0(X,\Omega^d_{X/K})$.

**Scope.** Open varieties require the [logarithmic comparison](logarithmic-hodge-tate-comparison.md) on a compactification, which [Carlson's proof for polycurves](grothendieck-conjecture-for-hyperbolic-polycurves.md) uses [@carlson2026, §3.1, paragraph preceding Definition 3.7, p. 13]. The formulas above use the given natural action on $C$; Carlson distinguishes this input from the abstract profinite group [@carlson2026, Remark 3.8, p. 13].
