---
title: Deligne's close fields and bounded-ramification Galois groups
kind: theorem
summary: Deligne's truncated valuation-ring triple determines the Galois quotient obtained by killing the m-th upper ramification group. For every m, a sufficiently ramified finite extension of Q_p has the same quotient as F_p((t)), despite their different characteristics.
tags: [local-fields, galois-groups, ramification, counterexample]
edges:
  - {to: ramification-filtration, label: uses}
  - {to: abrashkin-local-grothendieck-theorem, label: analogous-to, note: "Abrashkin reconstructs a local field using its full filtered Galois group; Deligne compares quotients at a fixed ramification cutoff."}
  - {to: fontaine-wintenberger-field-of-norms, label: analogous-to, note: "Both compare Galois data across characteristics; here the fields remain discretely valued and only bounded-ramification quotients are compared."}
---

**Truncated data.** Let $F$ be a complete discretely valued field with perfect residue field of characteristic $p>0$, valuation ring $\mathcal O_F$, maximal ideal $\mathfrak m_F$ and absolute Galois group $G_F$. For an integer $m\ge1$, define Deligne's triple
$$
\operatorname{Tr}_m(F)=
\left(R_m=\mathcal O_F/\mathfrak m_F^m,
M_m=\mathfrak m_F/\mathfrak m_F^{m+1},
\epsilon_m:M_m\longrightarrow R_m\right),
$$
where $M_m$ is a free rank-one $R_m$-module and $\epsilon_m$ is induced by inclusion. An isomorphism of triples consists of a ring isomorphism and a compatible semilinear module isomorphism commuting with $\epsilon_m$ [@ganapathy2019parahoric, §2.A, p. 1478].

**Deligne's theorem.** An isomorphism $\operatorname{Tr}_m(F)\cong\operatorname{Tr}_m(F')$ induces an isomorphism
$$
G_F/G_F^m\xrightarrow{\ \sim\ }G_{F'}/G_{F'}^m,
$$
well defined up to inner automorphism, where $G_F^m$ is the $m$-th [upper ramification group](ramification-filtration.md). Equivalently, it gives an equivalence between the categories of finite separable extensions whose normal closures $N/F$ satisfy $\operatorname{Gal}(N/F)^m=1$ [@ganapathy2019parahoric, §2.A, equation (2-1) and the following paragraph, pp. 1478–1479].

**Different characteristics at every fixed cutoff.** The following explicit consequence is proved here. Fix $p$ and $m\ge1$. For any integer $e\ge m+1$, put
$$
K_e=\mathbb Q_p(\pi),\qquad \pi^e=p,
\qquad F=\mathbb F_p((t)).
$$
Then $\operatorname{Tr}_m(K_e)\cong\operatorname{Tr}_m(F)$, hence
$G_{K_e}/G_{K_e}^m\cong G_F/G_F^m$, although $K_e$ and $F$ have different characteristics.

*Proof.* The polynomial $X^e-p$ is Eisenstein, so $[K_e:\mathbb Q_p]=e$. Extend the valuation with $v(p)=1$; then $v(\pi)=1/e$. Every element has a unique expression $\sum_{i=0}^{e-1}a_i\pi^i$ with $a_i\in\mathbb Q_p$. Its nonzero summands have valuations $v_p(a_i)+i/e$ that are pairwise distinct modulo $\mathbb Z$. Thus the valuation of the sum is their minimum. It is nonnegative exactly when every $a_i$ belongs to $\mathbb Z_p$. Consequently $\mathcal O_{K_e}=\mathbb Z_p[\pi]$, its maximal ideal is $(\pi)$, and its residue field is $\mathbb F_p$. Since $e\ge m+1$,
$$
\mathcal O_{K_e}/(\pi^{m+1})
\cong\mathbb Z_p[X]/(X^e-p,X^{m+1})
\cong\mathbb F_p[X]/(X^{m+1})
\cong\mathcal O_F/(t^{m+1}).
$$
The isomorphism $\pi\mapsto t$ identifies the maximal ideals, their quotients modulo the $(m+1)$-st powers, and the projections to the length-$m$ rings. It therefore identifies all three parts of the triples. Apply Deligne's theorem. $\square$

**Scope.** Thus no single ramification cutoff detects characteristic uniformly among these local fields. The field $K_e$ varies with the cutoff. This does not supply one mixed-characteristic field with compatible quotient isomorphisms at every depth, as would be needed to compare full filtered groups in [Abrashkin's reconstruction theorem](abrashkin-local-grothendieck-theorem.md).

**Source.** Deligne's original 1984 paper was not opened; the theorem is reported through Ganapathy's precise restatement. The example and its proof are supplied here.
