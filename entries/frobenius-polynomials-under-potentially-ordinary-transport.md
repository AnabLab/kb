---
title: Frobenius polynomials under potentially ordinary Galois transport
kind: theorem
summary: 'For semistable representations with potential single-weight filtrations, canonical graded pieces and minimal crystalline quotients recover the Frobenius polynomials on semistable and crystalline periods. Local Galois isomorphisms preserve both polynomials.'
tags: [local-fields, galois-groups, hodge-theory, reconstruction-algorithms]
edges:
  - {to: canonical-weight-filtrations-and-potentially-ordinary-transport, label: uses, note: 'Supplies the canonical weight flag, unramified twisted graded pieces in the semistable case, and semistable transport.'}
  - {to: crystalline-period-dimensions-from-adjacent-weight-quotients, label: uses, note: 'Its minimal subrepresentations S_h and the slope decomposition in its proof identify the monodromy images; transport preserves S_h itself.'}
  - {to: local-field-galois-invariants, label: uses, note: 'Local Galois isomorphisms preserve the residue degree, arithmetic Frobenius and cyclotomic character.'}
  - {to: monodromy-jordan-types-under-potentially-ordinary-transport, label: analogous-to, note: 'That theorem transports nilpotent Jordan types; this one retains Frobenius eigenvalues on semistable periods and on the monodromy kernel.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, with residue field $k$, maximal unramified subfield $K_0$, residue degree $f$ and $q=p^f$. Use covariant period modules and give $\mathbb Q_p(1)$ weight $1$. Let $V$ be semistable with a [potential single-weight filtration](canonical-weight-filtrations-and-potentially-ordinary-transport.md). Write
$$Q_h=F^{\ge h}V/F^{\ge h+1}V,\qquad U_h=Q_h(-h).$$
Thus every $U_h$ is unramified. In
$$W_h=F^{\ge h}V/F^{\ge h+2}V,$$
let $S_h\subseteq Q_{h+1}$ be the unique smallest stable subspace for which $W_h/S_h$ is crystalline, supplied by the [adjacent-weight theorem](crystalline-period-dimensions-from-adjacent-weight-quotients.md). Put $R_h=S_h(-h-1)$, also unramified. Let $A_h$ and $B_h$ denote arithmetic Frobenius on $U_h$ and $R_h$, respectively. Zero spaces contribute determinant $1$.

Define, using the $K_0$-linear operator $\varphi^f$,
$$P_{\mathrm{st},K}(V,z)=\det_{K_0}(1-z\varphi^f\mid D_{\mathrm{st},K}(V)),\qquad
P_{\mathrm{cris},K}(V,z)=\det_{K_0}(1-z\varphi^f\mid D_{\mathrm{cris},K}(V)).$$

**Theorem (proved here).** These polynomials belong to $\mathbb Q_p[z]$ and satisfy
$$P_{\mathrm{st},K}(V,z)=\prod_h\det_{\mathbb Q_p}(1-q^{-h}zA_h^{-1}),\tag{1}$$
$$P_{\mathrm{cris},K}(V,z)=
\frac{\prod_h\det_{\mathbb Q_p}(1-q^{-h}zA_h^{-1})}
{\prod_h\det_{\mathbb Q_p}(1-q^{-h}zB_h^{-1})}.\tag{2}$$
The products are finite and the denominator in (2) divides the numerator.

For every continuous isomorphism $\alpha:G_L\xrightarrow{\sim}G_K$ of absolute Galois groups of $p$-adic fields, $V'=\alpha^*V$ is semistable and
$$P_{*,L}(V',z)=P_{*,K}(V,z)\qquad(*=\mathrm{st},\mathrm{cris}).\tag{3}$$
If $V$ is only de Rham with a potential single-weight filtration, (3) holds after restriction to every pair of matched finite extensions over which it is semistable. No semisimplicity of Frobenius is assumed.

**Unramified comparison.** For an unramified representation $U$, put $C=W(\bar k)[1/p]$ and $G_k=\operatorname{Gal}(\bar k/k)$. Choose a stable $\mathbb Z_p$-lattice $\Lambda\subset U$, which exists by compactness of the Galois image. Completed unramified descent applied to $W(\bar k)\otimes_{\mathbb Z_p}\Lambda$, followed by inverting $p$, gives
$$D_0(U)=(C\otimes_{\mathbb Q_p}U)^{G_k},\qquad \dim_{K_0}D_0(U)=\dim_{\mathbb Q_p}U,$$
and its scalar extension to $C$ is $C\otimes U$ [@brinonconrad2009, Lemma 3.2.6, p. 36]. The Frobenius- and Galois-compatible inclusion $C\subset B_{\mathrm{cris}}$ identifies $D_0(U)$ with $D_{\mathrm{cris},K}(U)$ by the period-dimension bound [@brinonconrad2009, proof of Lemma 8.3.3, p. 118].

Let $F_U$ be arithmetic Frobenius on $U$ and $\sigma$ Witt Frobenius on $C$. Invariance under arithmetic Frobenius says
$$(\sigma^f\otimes F_U)x=x,$$
so $\varphi^f x=(1\otimes F_U^{-1})x$ on $D_0(U)$. After the comparison scalar extension, the latter operator has the matrix of $F_U^{-1}$. Consequently
$$\det_{K_0}(1-z\varphi^f\mid D_{\mathrm{cris},K}(U(h)))
=\det_{\mathbb Q_p}(1-q^{-h}zF_U^{-1}).\tag{4}$$
Here twisting by $h$ multiplies covariant crystalline Frobenius by $p^{-h}$, as follows from its period $t^{-h}$ [@brinonconrad2009, Example 9.1.12, p. 135, dualizing its contravariant calculation]. This argument also covers nonsemisimple $F_U$.

**Proof of (1)–(2).** Put $D=D_{\mathrm{st},K}(V)$ and $T=\varphi^f$. The slope decomposition in the proof of the adjacent-weight theorem gives
$$D=\bigoplus_h D_h,\qquad D_h\simeq D_{\mathrm{cris},K}(Q_h)$$
as Frobenius modules: all eigenvalues of $T|_{D_h}$ have valuation $-hf$, so different weights have disjoint slopes. Exactness along the canonical flag and (4) prove (1).

The relation $N\varphi=p\varphi N$ gives $TN=q^{-1}NT$ [@brinonconrad2009, Definition 8.2.5, p. 112]. Hence $N$ maps $D_h$ to $D_{h+1}$; denote the map by $N_h$. The same adjacent-weight proof identifies
$$\operatorname{im}N_h=D_{\mathrm{cris},K}(S_h)\subseteq D_{h+1}.$$
The isomorphism from $D_h/\ker N_h$ to this image intertwines $T$ on the source with $qT$ on the target, because $N_hT=qTN_h$. Multiplicativity of determinants therefore gives
$$\det(1-zT\mid\ker N_h)=
\frac{\det(1-zT\mid D_h)}
{\det(1-qzT\mid D_{\mathrm{cris},K}(S_h))}.$$
Since $S_h=R_h(h+1)$, equation (4) identifies the denominator with $\det(1-q^{-h}zB_h^{-1})$. Finally
$$D_{\mathrm{cris},K}(V)=\ker N=\bigoplus_h\ker N_h$$
by the period identity [@brinonconrad2009, Lemma 9.2.12 and its proof, p. 145]. Multiplying proves (2), including polynomial divisibility. $\square$

**Proof of transport.** The canonical-weight theorem transports semistability and the canonical flag. Pullback identifies all stable subspaces of $Q_{h+1}$ and preserves crystallinity of every quotient $W_h/S$, by that theorem. Thus it preserves the smallest such subspace $S_h$, not only its dimension. It consequently identifies $U_h,R_h$ with their counterparts for $V'$. Local Galois isomorphisms preserve $p,f$, arithmetic Frobenius and Tate twists, so they identify the operators $A_h,B_h$ as well. Formulas (1)–(2), which have coefficients in the common field $\mathbb Q_p$, prove (3). For matched finite extensions apply this argument to the restricted isomorphism; the canonical flag restricts unchanged and semistability transports there. $\square$

**Checks and scope.** For crystalline $V$, every $S_h=0$ and (2) equals (1). For the Tate-curve module $T_p=V_p(E_p)$ used in the [Jordan-type theorem](monodromy-jordan-types-under-potentially-ordinary-transport.md), $U_0=U_1=R_0=\mathbb Q_p$, with trivial Frobenius. The formulas give
$$P_{\mathrm{st}}(T_p,z)=(1-z)(1-q^{-1}z),\qquad P_{\mathrm{cris}}(T_p,z)=1-q^{-1}z.$$
For an unramified $U$ with Frobenius $A$, the same cancellation for $T_p\otimes U$ leaves $P_{\mathrm{cris}}=\det(1-q^{-1}zA^{-1})$. Thus the factor $q$ in the monodromy-image denominator is necessary. Equation (3) also preserves the local factor explicitly defined by $P_{\mathrm{cris}}^{-1}$. The assertions concern characteristic polynomials; they do not identify the Hodge filtration or assert an isomorphism of entire Frobenius-monodromy modules. No novelty beyond the knowledgebase is claimed.
