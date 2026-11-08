---
title: Birational p-adic sections and unique valuations in higher dimensions
kind: theorem
summary: 'For a normal proper variety over finite $k/\mathbb{Q}_p$, each birational Galois section fixes a unique valuation trivial on $k$ with residue field $k$. For smooth proper varieties, the induced étale sections are exactly those from rational points (Stix).'
tags: [local-fields, function-fields, galois-groups, section-conjecture, model-theory]
edges:
  - {to: birational-sections-over-local-fields, label: generalizes, note: "The classification by valuations extends the geometricity assertion over finite extensions of Q_p to arbitrary dimension; it does not generalize the target's real or general p-adically closed cases."}
  - {to: fields-with-p-adic-absolute-galois-groups, label: uses, note: "The relative form makes the base field an elementary substructure of the fixed field of a section [@stix2013higher, Lemma 1 and proof, pp. 1–2]."}
  - {to: valuative-section-theorem-for-p-adic-curves, label: analogous-to, note: "Here the full birational Galois group yields a valuation trivial on k; there the étale fundamental group yields a valuation prolonging the p-adic valuation."}
---

**Setup.** Let $k/\mathbb{Q}_p$ be finite, let $X/k$ be a normal proper geometrically integral variety of positive dimension, and put $K=k(X)$. Fix an algebraic closure $\bar K$ containing an algebraic closure $\bar k$ of $k$. A *$k$-valuation* is a valuation trivial on $k$. For a valuation $\bar v$ of $\bar K$, write $v=\bar v|_K$ and $D_{\bar v}\subset G_K$ for its stabilizer.

**Theorem (Stix).** Every continuous section $s:G_k\to G_K$ of restriction has

$$s(G_k)\subseteq D_{\bar v}$$

for a unique $k$-valuation $\bar v$ whose restriction $v$ has residue field $\kappa(v)=k$. Up to conjugation by $G_{K\bar k}$, the sections therefore form disjoint nonempty packets indexed by the $k$-valuations $v$ of $K$ with residue field $k$. Every such valuation contributes a packet because its decomposition sequence splits [@stix2013higher, Theorem 8 and proof, p. 6].

The valuation formulation extends beyond function fields: the same existence and uniqueness assertion holds for every nontrivial field extension $F/k$ and every section of $G_F\to G_k$ [@stix2013higher, Theorem 9, pp. 6–7].

**Rational points after passing to the étale quotient.** Suppose that $X$ is smooth and proper. Write $S(K/k)$ for the sections of $G_K\to G_k$ modulo $G_{K\bar k}$-conjugacy, and $S(X/k)$ for the sections of $\pi_1(X)\to G_k$ modulo geometric conjugacy. If $j:\operatorname{Spec}K\to X$ is the generic point and $\kappa:X(k)\to S(X/k)$ the nonabelian Kummer map, then

$$\operatorname{im}\bigl(j_*:S(K/k)\to S(X/k)\bigr)=\kappa(X(k)).$$

Thus an étale section comes from a rational point exactly when it is birationally liftable. Stix constructs lifts of point sections using a regular system of parameters: the corresponding flag valuation has residue field $k$ and a split decomposition sequence with inertia $\widehat{\mathbb Z}(1)^{\dim X}$ [@stix2013higher, Proposition 3 and proof, pp. 2–3].

Properness and smoothness matter for this equality. A rational cusp on an affine hyperbolic curve gives a birationally liftable section outside the image of its rational points. Normality alone does not ensure that every point section lifts: Stix gives a normal proper surface obtained by contracting the diagonal in $C\times C$, for a suitable smooth projective curve $C$ without $k$-points; the section of the contracted rational point is not birationally liftable [@stix2013higher, Remark 4 and Example 5, pp. 3–4].

**Scope.** These results use the full absolute Galois group and hold also for $p=2$. In higher dimension, valuations replace the point valuations of the [curve theorem](birational-sections-over-local-fields.md). The valuations here are trivial on $k$, whereas the [Pop–Stix valuative theorem](valuative-section-theorem-for-p-adic-curves.md) for sections of the étale fundamental group produces valuations prolonging the $p$-adic valuation of $k$.

**Source version.** Locations refer to the author's manuscript dated 2 August 2012. The original arXiv version numbers the main statements Proposition 2 and Theorem 6 and discusses arbitrary field extensions in Remark 7; the published journal text has not been compared.
