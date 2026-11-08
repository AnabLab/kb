---
title: Local cyclotomic reconstruction from the metabelian quotient
kind: theorem
summary: 'The unfiltered metabelian Galois group of a p-adic field recovers its cyclotomic character (Hyeon), hence its maximal abelian subfield over Q_p. Consequently, making wild inertia metabelian can distinguish fields that abelianized wild inertia cannot.'
tags: [local-fields, galois-groups, solvable-quotients, reconstruction-algorithms]
edges:
  - {to: m-step-solvable-quotient, label: uses, note: "Metabelian means the quotient by the second closed derived subgroup."}
  - {to: local-class-field-theory, label: uses, note: "Reciprocity and transfer identify the reconstructed torsion modules with roots of unity; local Kronecker–Weber identifies the maximal abelian subfield."}
  - {to: local-field-galois-invariants, label: analogous-to, note: "The numerical and cyclotomic invariants here require only the metabelian quotient."}
  - {to: abelianized-wild-inertia-from-unramified-cyclotomic-data, label: uses, note: "Its ramified-fourth-roots theorem gives isomorphic quotients modulo wild commutators for the two quadratic fields below."}
  - {to: isomorphism-classes-of-p-adic-galois-groups, label: addresses, note: "The degree and maximal abelian subfield necessary for that classification already follow from the metabelian quotient; no converse is proved."}
---

**Known reconstruction.** Let $K/\mathbb Q_p$ be finite and put $D_K=G_K/[G_K,G_K]$ and $B_K=G_K/[[G_K,G_K],[G_K,G_K]]$. All commutator subgroups are closed. The topological group $D_K$ determines $p$, $[K:\mathbb Q_p]$, the residue degree and the ramification index [@hyeon2025, Proposition 3.1, p. 8]. The unfiltered group $B_K$ determines the full cyclotomic character
$$
\chi_{\mathrm{cycl},K}:B_K\longrightarrow\widehat{\mathbb Z}^{\times}
$$
[@hyeon2025, Proposition 3.2, p. 10]. In particular every continuous isomorphism $\alpha:B_K\to B_L$ satisfies $\chi_{\mathrm{cycl},L}\alpha=\chi_{\mathrm{cycl},K}$.

**Construction.** For each prime $\ell$, choose decreasing open normal subgroups $H_n$ of $B_K$ with $B_K/H_n$ abelian and $H_n^{ab}[\ell^n]\cong\mathbb Z/\ell^n$. Transfer embeds these torsion groups into the subsequent ones. The inverse limit, with transition maps multiplication by $\ell$ after this identification, is $\mathbb Z_\ell(1)$ with its conjugation action. Its isomorphism class is independent of the choices [@hyeon2025, construction preceding Proposition 3.2 and its proof, pp. 9–10]. Changing a basis of a rank-one $\mathbb Z_\ell$-module does not change its character, since scalar automorphisms commute.

**Maximal abelian subfield (proved here).** Embed $K,L$ in one algebraic closure of $\mathbb Q_p$ and write $K^0=K\cap\mathbb Q_p^{ab}$. Then
$$
B_K\cong B_L\quad\Longrightarrow\quad
[K:\mathbb Q_p]=[L:\mathbb Q_p],\qquad K^0=L^0.
$$
Indeed local Kronecker–Weber gives $C:=\mathbb Q_p(\mu_\infty)=\mathbb Q_p^{ab}$ [@milnecft, I, Corollary 4.12, p. 48]. Identify $\operatorname{Gal}(C/\mathbb Q_p)$ with its faithful cyclotomic image in $\widehat{\mathbb Z}^{\times}$. Restriction of $G_K$ to $C$ has image $\operatorname{Gal}(C/K^0)$: the fixed field of that image is $C\cap K$, and the image is closed by compactness. Hence
$$
K^0=C^{\chi_{\mathrm{cycl},K}(B_K)}.
$$
An isomorphism of the $B$ groups preserves the character images, so gives the same fixed field. Their abelianizations are the $D$ groups, which recover the degrees. This works at $p=2$ as well.

**The next wild derived quotient (proved here).** Let $P_K$ be wild inertia, $P_K'=[P_K,P_K]$, $P_K''=[P_K',P_K']$, and put
$$
E_K=G_K/P_K',\qquad W_K=G_K/P_K''.
$$
Thus wild inertia is abelian in $E_K$ and metabelian in $W_K$. Since $P_K''\subseteq G_K''$, taking the maximal metabelian quotient gives
$$
W_K/W_K''\cong G_K/G_K''=B_K.
$$
Consequently an isomorphism $W_K\cong W_L$ preserves the full cyclotomic characters and forces equal degrees and $K^0=L^0$.

This is strictly more information than $E_K$ can carry. Take $K=\mathbb Q_2(\sqrt2)$ and $L=\mathbb Q_2(\sqrt{-2})$. The [abelianized wild inertia theorem](abelianized-wild-inertia-from-unramified-cyclotomic-data.md), including its example, gives $E_K\cong E_L$. But $K^0=K$ and $L^0=L$ are distinct: otherwise $-1$ would be a square in $\mathbb Q_2$, contrary to the fact that every odd square is $1$ modulo $8$. Thus $B_K\not\cong B_L$ and $W_K\not\cong W_L$. Explicitly, in $\mathbb Q_2(\zeta_8)$ the elements $\zeta_8+\zeta_8^{-1}$ and $\zeta_8+\zeta_8^3$ have squares $2$ and $-2$. Their stabilizers in $(\mathbb Z/8)^\times$ are respectively $\{1,7\}$ and $\{1,3\}$, so even the images of the reconstructed $2$-adic characters modulo $8$ differ.

**Limit.** This does not settle the remaining $2$-adic classification cases: their pairs already have equal degree and maximal abelian subfield. Nor does cyclotomic reconstruction recover the field itself. Recovering $K$ from $B_K$ with a ramification filtration is the separate [filtered metabelian theorem](m-step-solvable-filtered-local-fields.md).
