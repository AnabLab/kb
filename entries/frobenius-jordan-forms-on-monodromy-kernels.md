---
title: Full Frobenius similarity on monodromy kernels
kind: theorem
summary: 'Maximal crystalline subextensions of adjacent weight quotients recover full Frobenius similarity on crystalline periods. Tate-curve probes extend this to every monodromy kernel, including nonsemisimple Frobenius, and local Galois isomorphisms preserve the result.'
tags: [local-fields, galois-groups, hodge-theory, reconstruction-algorithms]
edges:
  - {to: canonical-weight-filtrations-and-potentially-ordinary-transport, label: uses, note: 'Supplies the canonical flag, unramified twisted graded pieces and transport of crystallinity for all subquotients considered here.'}
  - {to: crystalline-period-dimensions-from-adjacent-weight-quotients, label: uses, note: 'Its proof separates Frobenius slopes and realizes every Frobenius-stable subspace of a single-weight crystalline piece as a subrepresentation.'}
  - {to: weakly-admissible-filtered-modules, label: uses, note: 'The exact equivalence realizes the pure-filtered monodromy kernel as a subrepresentation of the corresponding graded piece.'}
  - {to: frobenius-polynomials-under-potentially-ordinary-transport, label: uses, note: 'Its unramified comparison identifies linear period Frobenius with inverse arithmetic Frobenius after scalar extension; the argument here descends similarity itself.'}
  - {to: frobenius-polynomials-on-monodromy-layers, label: uses, note: 'Its proof identifies the crystalline periods of the rth Tate-curve probe with ker N^r, with linear Frobenius rescaled by q^{1-r}.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, let $K_0$ be its maximal unramified subfield, and put $f=[K_0:\mathbb Q_p]$ and $q=p^f$. Use covariant periods and give $\mathbb Q_p(1)$ weight $1$. Let $X$ be semistable with a [potential single-weight filtration](canonical-weight-filtrations-and-potentially-ordinary-transport.md). Write
$$Q_h(X)=F^{\ge h}X/F^{\ge h+1}X,\qquad
W_h(X)=F^{\ge h}X/F^{\ge h+2}X.$$
Thus $0\to Q_{h+1}(X)\to W_h(X)\to Q_h(X)\to0$ is exact. For a stable subspace $A\subseteq Q_h(X)$, let $W_h(X;A)$ be its inverse image in $W_h(X)$.

**Theorem (proved here).**

1. There is a unique largest $G_K$-stable subspace $C_h(X)\subseteq Q_h(X)$ such that $W_h(X;C_h(X))$ is crystalline. Put
   $$U_h(X)=C_h(X)(-h),\qquad A_h(X)=\text{arithmetic Frobenius on }U_h(X).$$
   Each $U_h(X)$ is unramified. The finite-dimensional $\mathbb Q_p$-space with automorphism
   $$\mathcal C_K(X)=\bigoplus_h\bigl(U_h(X),q^{-h}A_h(X)^{-1}\bigr)\tag{1}$$
   satisfies an isomorphism of spaces with linear operators
   $$\bigl(D_{\mathrm{cris},K}(X),\varphi^f\bigr)
   \simeq K_0\otimes_{\mathbb Q_p}\mathcal C_K(X).\tag{2}$$
   This retains all Frobenius Jordan blocks, without semisimplification.
2. Let $V$ be semistable with a potential single-weight filtration and let $T=V_p(E_p)$ be the rational Tate module of the Tate curve with parameter $p$. For $r\ge1$ put $X_r=V\otimes\operatorname{Sym}^{r-1}T$. Multiply the operator of $\mathcal C_K(X_r)$ by $q^{r-1}$ and call the resulting space with automorphism $\mathcal M_{K,r}(V)$. Then
   $$\bigl(\ker N_V^r,\varphi^f\bigr)
   \simeq K_0\otimes_{\mathbb Q_p}\mathcal M_{K,r}(V).\tag{3}$$
3. Let $\alpha:G_L\xrightarrow{\sim}G_K$ be a continuous isomorphism of local absolute Galois groups, and put $V'=\alpha^*V$. Under the identification of $K_0$ and $L_0$ as unramified extensions of $\mathbb Q_p$ of the same degree, the operators $\varphi^f$ on $\ker N_V^r$ and $\ker N_{V'}^r$ are similar for every $r\ge1$. In particular, they have the same elementary divisors and the same Jordan blocks over $\overline{\mathbb Q}_p$. The assertion also holds over every pair of matched finite extensions where a de Rham $V$ with such a filtration is semistable.

**Recover the maximal subspace.** Put $D=D_{\mathrm{st},K}(X)$ and $F=\varphi^f$. The slope argument in the [adjacent-weight theorem](crystalline-period-dimensions-from-adjacent-weight-quotients.md) gives
$$D=\bigoplus_hD_h,\qquad D_h\simeq D_{\mathrm{cris},K}(Q_h(X)),$$
as Frobenius modules: every eigenvalue of $F|_{D_h}$ has valuation $-hf$, and $N$ maps $D_h$ to $D_{h+1}$. Denote this map by $N_h$. Distinct weights have disjoint eigenvalue valuations, so this decomposition includes generalized eigenspaces, and does not require semisimplicity.

The subspace $Z_h=\ker N_h\subseteq D_{\mathrm{cris},K}(Q_h(X))$ is $\varphi$-stable. Give it the filtration induced from the single-weight piece $Q_h(X)$, rather than from $D$. Every $\varphi$-stable subspace $R$ of that piece, and every $\varphi$-stable subspace of $R$, has pure filtration degree $-h$ and Frobenius eigenvalue valuation $-hf$. Thus $t_H(R)=-h\dim R=t_N(R)$ and all weak-admissibility inequalities hold. The exact [Colmez–Fontaine equivalence](weakly-admissible-filtered-modules.md) therefore realizes $Z_h$ as a subrepresentation $C_h(X)\subseteq Q_h(X)$ [@colmezfontaine2000, Theorem A, p. 2; Proposition 4.2 and following paragraph, p. 23].

For any stable $A\subseteq Q_h(X)$, exactness and the disjoint slopes identify the underlying Frobenius module of $W_h(X;A)$ with
$$D_{\mathrm{cris},K}(Q_{h+1}(X))\oplus D_{\mathrm{cris},K}(A).$$
Its only possible monodromy is $N_h$ on the second summand. A semistable representation is crystalline exactly when its monodromy vanishes [@brinonconrad2009, Lemma 9.2.12 and its proof, p. 145]. Consequently
$$W_h(X;A)\text{ crystalline}
\quad\Longleftrightarrow\quad
D_{\mathrm{cris},K}(A)\subseteq Z_h
\quad\Longleftrightarrow\quad A\subseteq C_h(X).\tag{4}$$
This proves the asserted maximality. Since the monodromy images from different $D_h$ lie in distinct summands,
$$D_{\mathrm{cris},K}(X)=\ker N=\bigoplus_h Z_h
\simeq\bigoplus_hD_{\mathrm{cris},K}(C_h(X))\tag{5}$$
as Frobenius modules. Equation (5) uses the pure filtration only to realize $Z_h$ inside $Q_h(X)$; it asserts no compatibility with the filtration on $D$.

**Keep the full unramified operator.** For an unramified representation $U$ with arithmetic Frobenius $A$, the comparison argument in the [Frobenius-polynomial theorem](frobenius-polynomials-under-potentially-ordinary-transport.md) gives, over $B=W(\bar k)[1/p]$,
$$B\otimes_{K_0}D_{\mathrm{cris},K}(U)
\simeq B\otimes_{\mathbb Q_p}U.$$
It intertwines the $B$-linear extension of $\varphi^f$ on the left with $1\otimes A^{-1}$ on the right. Indeed arithmetic Frobenius invariance on the descended vectors reads $(\sigma^f\otimes A)x=x$. The descent input is [@brinonconrad2009, Lemma 3.2.6, p. 36]; the inclusion $B\subseteq B_{\mathrm{cris}}$ is recorded in the proof of Lemma 8.3.3 on p. 118 of the same source.

Similarity of two matrices over a field descends from any field extension: their invariant factors, or equivalently their ranks under every polynomial in the matrix, are unchanged by scalar extension. Hence
$$\bigl(D_{\mathrm{cris},K}(U(h)),\varphi^f\bigr)
\simeq\bigl(K_0\otimes_{\mathbb Q_p}U,q^{-h}A^{-1}\bigr).\tag{6}$$
The factor $q^{-h}$ follows from the covariant period $t^{-h}$ [@brinonconrad2009, Example 9.1.12, p. 135, dualizing its contravariant convention]. Apply (6) to each $C_h(X)=U_h(X)(h)$ in (5). This proves (1)–(2).

**Probe higher monodromy kernels.** The tensor-filtration argument in the [monodromy Jordan-type theorem](monodromy-jordan-types-under-potentially-ordinary-transport.md) makes every $X_r$ semistable with a potential single-weight filtration. The explicit kernel isomorphism proved in the [monodromy-layer theorem](frobenius-polynomials-on-monodromy-layers.md) is
$$\bigl(D_{\mathrm{cris},K}(X_r),\varphi^f\bigr)
\simeq\bigl(\ker N_V^r,q^{1-r}\varphi^f\bigr).\tag{7}$$
That calculation does not semisimplify Frobenius. Combining (2) and (7) proves (3).

**Transport.** The canonical-weight theorem transports the flag and the crystallinity of every $W_h(X;A)$. Pullback identifies stable subspaces on the same underlying $\mathbb Q_p$-space, so (4) identifies $C_h(X)$ with $C_h(\alpha^*X)$. It also preserves Tate twists, the residue size $q$, and arithmetic Frobenius on unramified representations. Thus it identifies the full operators $\mathcal C_K(X)$ and $\mathcal C_L(\alpha^*X)$.

For the probes, pullback gives $T'=\alpha^*T$. The [Frobenius-polynomial theorem](frobenius-polynomials-under-potentially-ordinary-transport.md) gives its semistable Frobenius eigenvalues $1,q^{-1}$ and a one-dimensional crystalline kernel. Therefore $N_{T'}\ne0$, and there is a basis $u,v$ with $Nu=0$, $Nv=u$, $Fu=q^{-1}u$, $Fv=v$. The proof of (7) applies with $T'$ in place of $T$. Apply the transported (2) to $\alpha^*X_r=V'\otimes\operatorname{Sym}^{r-1}T'$ and rescale by $q^{r-1}$. Both sides of the claimed similarity are scalar extensions of the same rational operator, proving part 3. Restricting to matched open subgroups proves its finite-extension assertion. $\square$

**Checks and scope.** For $N=0$, each $C_h(X)=Q_h(X)$ and every $r$ recovers the full semistable Frobenius operator. For the Tate-curve module, $C_0(T)=0$ and $C_1(T)=\mathbb Q_p(1)$, giving Frobenius $q^{-1}$ on $\ker N$; at $r=2$ formula (3) recovers eigenvalues $1,q^{-1}$. For an unramified representation with arithmetic Frobenius $A=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, (6) retains a size-two Jordan block, distinguishing it from two trivial lines even though both have polynomial $(1-z)^2$. Such a representation is continuous because integer powers of $A$ extend continuously from $\widehat{\mathbb Z}$ through $\mathbb Z_p$. For $V=T\otimes U$ with this unramified $U$, the operators on the first and second monodromy kernels are respectively $q^{-1}A^{-1}$ and $A^{-1}\oplus q^{-1}A^{-1}$, so the second probe also tests nonsemisimple Frobenius in the presence of nonzero monodromy.

For $d=\dim V>0$, probes through $r=d$ suffice, since $N^d=0$; zero representations give zero spaces throughout. The similarity assertion is separate for each $r$. It supplies neither a simultaneous isomorphism intertwining $F,N$ nor identifications of the Hodge filtrations. This is a deduction from the linked entries and the opened period inputs; no novelty beyond the knowledgebase is claimed.
