---
title: A small Galois quotient and Brauer duality characterize positive-characteristic local fields
kind: theorem
summary: Dittmann characterizes $\mathbb F_q((t))$ using its maximal pro-$\mathcal C$ Galois quotient, imperfection at most one, Brauer $p$-torsion of order $p$ and cyclic-algebra duality.
tags: [local-fields, galois-groups, galois-cohomology, valuations]
edges:
  - {to: local-fields-characteristic-p-brauer-characterization, label: generalizes, note: "Theorem 5.7 replaces the full Galois group in Theorem 1.1 by its maximal pro-C quotient, retaining the other axioms [@dittmann2025, p. 15]."}
  - {to: abelian-by-central-galois-cohomology, label: uses, note: "The characteristic test and valuation construction use Chebolu–Efrat–Mináč's Theorem A [@dittmann2025, Lemma 5.1 and proof of Proposition 5.3, pp. 12 and 14]."}
  - {to: small-galois-quotients-detect-valuations, label: analogous-to, note: "Both obtain valuations from small Galois quotients; the theorem here also uses Brauer duality to force completeness."}
---

**The quotient.** Let $\mathcal C$ consist of the finite groups $E$ admitting an exact sequence
$$
1\longrightarrow N\longrightarrow E\longrightarrow A\longrightarrow1,
\qquad [N,N]\subseteq Z(N),\qquad A\text{ abelian}.
$$
Thus the normal subgroup is nilpotent of class at most two, and the quotient is abelian. For a profinite group $G$, write $G(\mathcal C)$ for its maximal pro-$\mathcal C$ quotient, the inverse limit of its continuous finite quotients belonging to $\mathcal C$ [@dittmann2025, §5, pp. 12–13].

**Theorem (Dittmann).** Fix a prime $p$ and $q=p^n$ with $n\ge1$. Let $K$ be a field satisfying:

- $G_K(\mathcal C)\cong G_{\mathbb F_q((t))}(\mathcal C)$ as profinite groups.
- $K$ has exponent of imperfection at most one.
- $\operatorname{Br}(K)[p]\cong\mathbb Z/p$.
- The cyclic-algebra pairing induces an isomorphism
  $$
  K^\times/K^{\times p}\xrightarrow{\sim}
  \operatorname{Hom}\!\left(\operatorname{Hom}_{\mathrm{cont}}(G_K,\mathbb Z/p),
  \operatorname{Br}(K)[p]\right).
  $$

Then $K\cong\mathbb F_q((t))$ [@dittmann2025, Theorem 5.7, p. 15]. The outer $\operatorname{Hom}$ is between discrete abelian groups. The pairing sends $(\chi,a)$ to the Brauer class of the cyclic algebra associated to $\chi$ and $a$ [@dittmann2025, §2, p. 3]. No characteristic assumption on $K$ is imposed in the theorem.

**How the quotient suffices.** This strengthens the [full-Galois-group characterization](local-fields-characteristic-p-brauer-characterization.md). Dittmann's proof first forces characteristic $p$ using the nonzero Brauer group, then obtains a nontrivial $p$-henselian valuation whose residue field has a cyclic degree-$p$ extension [@dittmann2025, Corollary 5.2 and Proposition 5.3, p. 13]. The characteristic test and valuation construction use [cohomology recovered from small Galois quotients](abelian-by-central-galois-cohomology.md) after suitable finite abelian extensions [@dittmann2025, proof of Lemma 5.1, p. 12 and proof of Proposition 5.3, p. 14].

The countability of the character group needed in Section 4 is already encoded in the abelianized Galois group [@dittmann2025, §5, opening paragraphs, p. 12]. The remaining Brauer, pairing and imperfection axioms therefore yield completeness, a discrete valuation and a finite residue field by Proposition 4.7. The abelianized Galois group then fixes $q$ [@dittmann2025, proof of Theorem 5.7, p. 15].

Locations refer to arXiv:2309.05398v3; the journal version has not been compared. The author notes that $\mathcal C$ can be reduced further, but does not give an optimal class [@dittmann2025, paragraph after Theorem 5.7, p. 15].
