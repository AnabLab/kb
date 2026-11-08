---
title: Fargues–Fontaine curves with the same fundamental group need not be isomorphic
kind: theorem
summary: 'For algebraically closed perfectoid F of characteristic p, the schematic Fargues–Fontaine curve X(F,E) has fundamental group G_E and global functions E. Nonisomorphic p-adic fields with isomorphic Galois groups give nonisomorphic curves with the same fundamental group.'
tags: [local-fields, fundamental-groups, hodge-theory, counterexample]
edges:
  - {to: nonisomorphic-p-adic-fields-with-isomorphic-galois-groups, label: uses, note: "The coefficient fields in Joshi's counterexamples are the Jarden–Ritter pairs [@joshi2020fargues, Remark 2.2, p. 6]."}
  - {to: absolute-grothendieck-conjecture-for-p-adic-curves, label: analogous-to, note: "The target reconstructs finite-type hyperbolic curves when the base field may vary; the Fargues–Fontaine schemes here are not of finite type."}
---

**Setting.** Fix a prime $p$, an algebraically closed field $F$ of characteristic $p$ complete for a nontrivial nonarchimedean absolute value, and a finite extension $E/\mathbb Q_p$. Such $F$ is perfectoid. Write $X_{F,E}$ for the schematic Fargues–Fontaine curve, defined by the Proj construction in [@farguesfontaine2018, Definition 6.5.1, pp. 254–255]. It is a connected regular noetherian scheme of dimension one [@farguesfontaine2018, Theorem 6.5.2(1), p. 255; Definition 5.1.1, p. 202].

**Theorem (Joshi).** If $E,E'/\mathbb Q_p$ are nonisomorphic fields with topologically isomorphic absolute Galois groups, then
$$
\pi_1^{\mathrm{\acute et}}(X_{F,E})\cong
\pi_1^{\mathrm{\acute et}}(X_{F,E'}),
\qquad X_{F,E}\not\cong X_{F,E'}
$$
as schemes, even without requiring compatibility with their coefficient fields [@joshi2020fargues, Theorem 2.1(1)–(4), p. 4]. Fundamental groups are taken with geometric base points; the identification with a Galois group is understood up to inner automorphisms.

**The source's proof.** Two calculations separate the invariants:

1. $X_{F,E}\times_E\overline E$ is simply connected [@farguesfontaine2018, Theorem 8.6.1, p. 298]. The arithmetic fundamental group is $\pi_1^{\mathrm{\acute et}}(X_{F,E})\cong G_E$ [@joshi2020fargues, Theorem 2.1(1) and its proof, p. 4].
2. $H^0(X_{F,E},\mathcal O_{X_{F,E}})=E$ [@farguesfontaine2018, §8.2.1.1, pp. 283–284; §6.1.1, p. 244]. Consequently, a scheme isomorphism $X_{F,E}\cong X_{F,E'}$ would induce a field isomorphism $E\cong E'$, contradicting the hypothesis. This is Joshi's first proof [@joshi2020fargues, proof of Theorem 2.1, p. 5].

**Explicit examples.** For every odd $p$, take
$$
F=\widehat{\overline{\mathbb F_p((t))}},\qquad
E=\mathbb Q_p(\zeta_p,\sqrt[p]{p}),\qquad
E'=\mathbb Q_p(\zeta_p,\sqrt[p]{1+p}).
$$
Here $\zeta_p$ is a primitive $p$th root of unity. Joshi records that these Jarden–Ritter fields are nonisomorphic and have isomorphic absolute Galois groups [@joshi2020fargues, Remark 2.2, p. 6]; see the [local counterexamples](nonisomorphic-p-adic-fields-with-isomorphic-galois-groups.md). Nonisomorphism is as abstract fields: every field isomorphism between finite extensions of $\mathbb Q_p$ is a $\mathbb Q_p$-algebra isomorphism [@hyeon2025, §1, p. 1].

**Scope.** These schemes are not of finite type over $E$: their closed-point residue fields are algebraically closed extensions of $E$ [@farguesfontaine2018, Theorem 6.5.2(3)–(4), p. 255]. Thus they lie outside the finite-type setting of [absolute reconstruction for $p$-adic hyperbolic curves](absolute-grothendieck-conjecture-for-p-adic-curves.md). Joshi explicitly distinguishes the two settings [@joshi2020fargues, Introduction, p. 3]. The example transfers the failure of local field reconstruction from $G_E$ to curves used in $p$-adic Hodge theory; the global functions still retain the field itself.

**Sources.** Fargues–Fontaine is cited by the printed pages of the author manuscript dated 16 April 2017. Joshi is cited in arXiv version 4, submitted 16 July 2025; its arXiv record lists no journal reference. The original Jarden–Ritter examples are reported through Joshi here.
