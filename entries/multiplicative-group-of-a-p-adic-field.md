---
title: Multiplicative groups and abelian pro-p Galois groups of p-adic fields
kind: theorem
summary: 'For finite $K/\mathbb Q_p$ of degree $d$, the multiplicative group splits into a valuation factor, residue roots of unity, and $\mu_{p^\infty}(K)\times\mathbb Z_p^d$. Its maximal abelian pro-p Galois group has rank $d+1$ and torsion precisely $\mu_{p^\infty}(K)$.'
tags: [local-fields, galois-groups]
edges:
  - {to: local-class-field-theory, label: uses, note: "For the identification of the abelian pro-p Galois group with the pro-p completion of the multiplicative group."}
---

**Structure.** Let $K/\mathbb Q_p$ be finite of degree $d$, with residue field $\mathbb F_q$, and put $U_K^1=1+\mathfrak m_K$. Write $\mu_{p^\infty}(K)$ for the finite group of roots of unity in $K$ of $p$-power order. Then
$$
U_K^1\cong\mu_{p^\infty}(K)\times\mathbb Z_p^d
$$
as topological groups [@fesenkovostokov2002, Chapter IV, (1.4), pp. 114–115; Chapter I, Corollary (6.5)(3), pp. 20–21]. The unit group is $\mathcal O_K^\times=\mu_{q-1}(K)\times U_K^1$ [@fesenkovostokov2002, Chapter IV, proof of Proposition (1.2), p. 113]. Choosing a uniformizer splits the valuation map, giving $K^\times\cong\mathbb Z\times\mathcal O_K^\times$ [@milnecft, Chapter I, §1.10, p. 23]. Consequently
$$
K^\times\cong\mathbb Z\times\mu_{q-1}(K)\times\mu_{p^\infty}(K)\times\mathbb Z_p^d.
$$
The splittings are not canonical.

**Pro-p completion (deduction).** Let $G_K^{\mathrm{ab}}(p)$ be the maximal pro-$p$ quotient of $G_K^{\mathrm{ab}}$. Then
$$
G_K^{\mathrm{ab}}(p)\cong\varprojlim_n K^\times/(K^\times)^{p^n}\cong\mathbb Z_p^{d+1}\times\mu_{p^\infty}(K).
$$
Indeed, [local reciprocity](local-class-field-theory.md) identifies $G_K^{\mathrm{ab}}$ with the profinite completion of $K^\times$ [@milnecft, Chapter I, §1.10, p. 23]. In the displayed multiplicative decomposition, taking $p^n$-power quotients kills $\mu_{q-1}(K)$, completes $\mathbb Z$ to $\mathbb Z_p$, and preserves the other two factors in the inverse limit. These quotients are cofinal among the continuous finite $p$-group quotients: every such quotient has exponent dividing some $p^n$, and $(K^\times)^{p^n}$ is open by the decomposition. The free factor is torsion-free, so the torsion subgroup is precisely the reciprocity image of $\mu_{p^\infty}(K)$. $\square$

This supplies the roots-of-unity obstruction in the [tame-automorphism lifting example](tame-automorphisms-lift-modulo-wild-commutators.md), and explains how abelianized local Galois data detect the degree and $p$-power roots of unity in [local reconstruction](local-field-galois-invariants.md).
