---
title: Kato cohomology in characteristic-p local-field reconstruction
kind: note
summary: 'Kato cohomology retains characteristic-p multiplicative and Brauer data through field-dependent coefficients. Dittmann reconstructs a positive-characteristic local field using these groups and their cup product. Passing to perfection preserves the Galois group but kills these data.'
tags: [galois-cohomology, milnor-k-theory, local-fields, positive-characteristic]
edges:
  - {to: hilbert-theorem-90, label: uses, note: 'The multiplicative-coefficient calculation uses H1(G_K,(K^sep)^times)=0 in every characteristic [@stacks2026, Example 59.59.3, Tag 03QV].'}
  - {to: milnor-k-ring, label: uses}
  - {to: bloch-gabber-kato-theorem, label: uses, note: "It translates the diagonal degree-two vanishing into imperfection at most one."}
  - {to: local-fields-characteristic-p-brauer-characterization, label: uses, note: "The reconstruction statement below is its cohomological reformulation, Dittmann's Theorem 1.2."}
  - {to: purely-inseparable-invariance-of-galois-groups, label: uses, note: "For the perfection example."}
---

**Coefficients.** For a field $K$ of characteristic $p>0$, the relevant Kato groups can be defined, for $i\ge0$, by
$$
H^i(K,\mathbb Z/p(i))=K_i^M(K)/p,\qquad
H^{i+1}(K,\mathbb Z/p(i))=H^1(G_K,K_i^M(K^{\mathrm{sep}})/p).
$$
These are field groups of étale motivic cohomology; the [differential-symbol theorem](bloch-gabber-kato-theorem.md) identifies the Milnor coefficients with logarithmic differential forms [@totaro2022cohomological, §1, p. 1, and §2, pp. 3–4]. In characteristic different from $p$, use $H^r(G_K,\mu_p^{\otimes j})$ for $H^r(K,\mathbb Z/p(j))$, with $j\ge0$ [@totaro2022cohomological, §1, p. 1]. In particular,
$$
H^1(K,\mathbb Z/p(0))=\operatorname{Hom}_{\mathrm{cont}}(G_K,\mathbb Z/p),\qquad
H^2(K,\mathbb Z/p(2))=K_2^M(K)/p.
$$

**The multiplicative coefficient, checked here.** Put $G=G_K$, $M=(K^{\mathrm{sep}})^\times$ and $C=M/M^p$, with their discrete $G$-actions. Frobenius is injective on a field, so
$$
1\longrightarrow M\xrightarrow{x\mapsto x^p}M\longrightarrow C\longrightarrow1
$$
is exact. [Hilbert 90](hilbert-theorem-90.md) gives $H^1(G,M)=0$ [@stacks2026, Example 59.59.3, Tag 03QV]. The long exact sequence therefore gives
$$
K^\times\xrightarrow{x\mapsto x^p}K^\times\longrightarrow C^G\longrightarrow0,
\qquad
0\longrightarrow H^1(G,C)\longrightarrow H^2(G,M)\xrightarrow{p}H^2(G,M).
$$
Since $H^2(G,M)=\operatorname{Br}(K)$, this proves
$$
C^G\cong K^\times/K^{\times p}=H^1(K,\mathbb Z/p(1)),\qquad
H^1(G,C)\cong\operatorname{Br}(K)[p]=H^2(K,\mathbb Z/p(1)).
$$
Thus $H^2(K,\mathbb Z/p(1))$ uses a degree-one Galois cohomology group with the coefficient $C$. The group of $p$th roots of unity in $K^{\mathrm{sep}}$ is trivial, so its ordinary Galois cohomology cannot give a nonzero Brauer $p$-torsion group. The Kato cup product
$$
H^1(K,\mathbb Z/p(0))\times H^1(K,\mathbb Z/p(1))\longrightarrow H^2(K,\mathbb Z/p(1))
$$
is the Galois cup product with $C^G$; it agrees up to sign with the cyclic-algebra pairing [@dittmann2025, §2, p. 5].

**Reconstruction (Dittmann).** Fix $q=p^n$, $n\ge1$. For any field $K$, suppose
$$
G_K\cong G_{\mathbb F_q((t))},\qquad
H^2(K,\mathbb Z/p(2))=0,\qquad
H^2(K,\mathbb Z/p(1))\cong\mathbb Z/p,
$$
and the cup product induces an isomorphism
$$
H^1(K,\mathbb Z/p(1))\xrightarrow{\sim}
\operatorname{Hom}\bigl(H^1(K,\mathbb Z/p(0)),H^2(K,\mathbb Z/p(1))\bigr).
$$
Then $K\cong\mathbb F_q((t))$ [@dittmann2025, Theorem 1.2, p. 2]. Here $\operatorname{Hom}$ includes all homomorphisms of discrete groups. The Galois and Brauer hypotheses force characteristic $p$; the [differential-symbol criterion](bloch-gabber-kato-theorem.md) translates the diagonal vanishing into $[K:K^p]\le p$ [@dittmann2025, Lemma 2.3 and §2, pp. 4–5].

**A perfection test, checked here.** Let $F=\mathbb F_q((t))$ and $P=F^{\mathrm{perf}}$. By [purely inseparable invariance](purely-inseparable-invariance-of-galois-groups.md), $G_P\cong G_F$, so their continuous cohomology rings with trivial $\mathbb Z/p$ coefficients agree. But $P^{\mathrm{sep}}$ is algebraically closed, because $P$ is perfect. Hence Frobenius on $(P^{\mathrm{sep}})^\times$ is surjective, its coefficient $C$ is zero, and the preceding exact sequence proves $\operatorname{Br}(P)[p]=0$.

Also $P^\times/P^{\times p}=0$; since the Milnor ring is generated in degree one, $K_2^M(P)/p=0$. Thus $P$ satisfies the displayed Galois and diagonal-vanishing hypotheses, and its displayed duality map is the isomorphism $0\to\operatorname{Hom}(H^1(P,\mathbb Z/p(0)),0)=0$. It fails exactly the nonzero Brauer hypothesis. In contrast, $\operatorname{Br}(F)[p]\cong\mathbb Z/p$ [@dittmann2025, Proposition 2.2, p. 4]. This exhibits the field information carried by the additional coefficient module even when the entire abstract Galois group agrees.

**Sources.** Dittmann's locations refer to arXiv:2309.05398v3; Totaro's to his 39-page author manuscript. Their journal texts were not compared. Kato's original paper and Merkurjev's appendix cited by Dittmann were not independently opened.
