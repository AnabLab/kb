---
title: Non-splitting for generic curves in genera three and four
kind: theorem
summary: Over $k$ finitely generated over $\mathbb{Q}$, the generic unpointed genus-$4$ curve has no Galois sections at any full level. This follows from Watanabe's generic descent and Hain's bracket obstruction. Without level, an abelian obstruction also gives genus $3$.
tags: [curves, fundamental-groups, function-fields, section-conjecture]
edges:
  - {to: section-conjecture-for-universal-curves, label: uses, note: "The genus-$4$ deduction uses its topologically ample families and bracket obstruction."}
  - {to: section-conjecture, label: addresses, note: "For these generic curves both the rational-point set and the section set are empty."}
  - {to: birational-section-conjecture, label: addresses, note: "A birational section would induce a section of the fundamental group sequence."}
---

**Statement.** Let $k$ be finitely generated over $\mathbb{Q}$, and let $C/K$ be the generic unpointed curve over $K=k(\mathcal{M}_{g/k}[m])$. Use the connected full level component and roots-of-unity convention in [Hain's theorem](section-conjecture-for-universal-curves.md). The sequence
$$1\longrightarrow\pi_1(C_{\bar K})\longrightarrow\pi_1(C)\longrightarrow G_K\longrightarrow1$$
does not split in either of these cases:

1. $g=4$ and any $m\ge1$;
2. $g=3$ and $m=1$.

**Genus four: deduction from generic descent.** The genus-$4$ assertion is deduced here from results of Watanabe and Hain.

Suppose a section exists. Choose a multiple $r$ of $m$ with $r\ge3$, enlarge the constants to $k'=k(\mu_r)$, and pass to a compatible connected level-$r$ cover. Restriction preserves the hypothetical section. We may therefore work with the smooth fine moduli scheme $T=\mathcal{M}_{4/k'}[r]$, its universal complete curve $X\to T$, and $K'=k'(T)$.

Fix a prime $\ell$. Put $\Pi=\pi_1(X_{\bar\eta})$, $E=\pi_1(X)$, and
$$E^{(\ell)}=E/\ker(\Pi\longrightarrow\Pi^{(\ell)}),$$
where $\Pi^{(\ell)}$ is the maximal pro-$\ell$ quotient. Watanabe's Corollary 9.2 applies to a regular scheme over a finitely generated field, also in characteristic zero. It turns the section over $K'$ into a section of $E^{(\ell)}\to\pi_1(T)$ [@watanabe2019, Corollary 9.2, p. 29].

Here is the passage from this quotient to weighted completion. Set $H=H^1_{\text{ét}}(X_{\bar\eta},\mathbb Q_\ell(1))$, and write $\mathcal G_X\to\mathcal G_T$ for the weighted completions used by Hain. Its kernel is the continuous $\mathbb{Q}_\ell$-unipotent completion of $\Pi$. The image of $\Pi$ in every finite-dimensional unipotent quotient is compact, hence pro-$\ell$, so $E\to\mathcal G_X(\mathbb{Q}_\ell)$ factors through $E^{(\ell)}$. Composing with the descended section and applying the universal property of weighted completion gives a section of $\mathcal G_X\to\mathcal G_T$.

The cyclotomic character of $k'$ has infinite image, as checked in the linked entry. Hain shows that the universal curve at full level is topologically ample under this hypothesis [@hain2011, §11, p. 38]. His completion and graded-quotient constructions would consequently give a $\mathrm{GSp}(H)$-equivariant section of
$$\mathfrak d_{4,1}\longrightarrow\mathfrak d_{4,0}$$
[@hain2011, Proposition 7.1 and Corollary 7.2, pp. 18–19; Corollary 11.6, p. 39]. There is no such section [@hain2011, Proposition 10.4, pp. 34–35]. This is the contradiction. The argument bypasses Hain's Theorem 16.1 and its genus-$4$ gap. Watanabe uses the same descent route in positive characteristic [@watanabe2019, proof of Theorem 2, p. 30].

**Genus three without level: an abelian obstruction.** Li, Litt, Salter and Srinivasan prove a stronger statement without level: for every characteristic-zero field $k$ and $g\ge3$, the generic curve over $K_0=k(\mathcal M_g)$ has a non-split geometrically abelianized sequence. If $\Delta=\pi_1(C_{\bar K_0})$, this sequence is
$$1\longrightarrow\Delta^{\mathrm{ab}}\longrightarrow\pi_1(C)/\overline{[\Delta,\Delta]}\longrightarrow G_{K_0}\longrightarrow1.$$
Their result persists over every finite extension $L/K_0$ whose degree is not divisible by $g-1$ [@lilittsaltersrinivasan2023, Corollary 6.1.3 and Remark 6.1.4, p. 31]. Taking $g=3$ and $L=K_0$ proves case 2. This degree condition does not assert the result for arbitrary full level covers in genus $3$; the authors distinguish their result from Hain's level-cover results [@lilittsaltersrinivasan2023, §1.3.1, p. 4].

**Consequences.** In both cases $C(K)=\emptyset$, since a rational point induces a section. The field $K$ is finitely generated over $\mathbb Q$, so the section conjecture holds for $C$, with both sides empty. A section of $G_{K(C)}\to G_K$ would compose with $G_{K(C)}\to\pi_1(C)$ to split the displayed fundamental group sequence. Thus the birational section conjecture holds for these curves too.
