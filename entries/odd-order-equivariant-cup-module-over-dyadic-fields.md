---
title: The nontrivial cup module of an odd-order dyadic extension
kind: theorem
summary: 'For an odd-order Galois extension L/k of dyadic fields, the nontrivial part of H1(L,F2), with its cup pairing, is equivariantly isometric to d copies of the augmentation module with its dot product, where d is the degree of k over Q2.'
tags: [local-fields, galois-cohomology, representation-theory]
edges:
  - {to: local-tate-duality, label: uses, note: 'Duality and the Euler characteristic determine the pairing and the multiplicity of every nontrivial simple module.'}
  - {to: uniform-cyclic-lift-counts-for-central-frattini-kernels, label: motivated-by, note: 'Extends its step 1 cup-module model and step 2 isometry argument from odd cyclic groups to arbitrary odd-order groups.'}
---

**Statement (proved here).** Let $k/\mathbb Q_2$ have degree $d$, and let $L/k$ be a finite Galois extension with odd-order group $T$. Identify $\mathbb F_2=\mu_2$ and $H^2(L,\mathbb F_2)=\mathbb F_2$ by the local invariant. Put
$$
U=H^1(L,\mathbb F_2),\qquad
e=\sum_{g\in T}g\in\mathbb F_2[T],\qquad W=(1-e)U.
$$
Let $I_T=\ker(\mathbb F_2[T]\xrightarrow{\mathrm{aug}}\mathbb F_2)$, with the left regular action, and give $J_d=I_T^{\oplus d}$ the form
$$
b_d(x,y)=\sum_{\ell=1}^d\sum_{g\in T}x_{\ell,g}y_{\ell,g}.
$$
There is a $T$-linear isometry
$$
(W,\cup)\simeq(J_d,b_d).
\tag{1}
$$
In particular this paired module depends only on $d$ and the abstract group $T$, rather than on the extension realizing $T$.

**Proof.**

*1. The underlying module.* Since $|T|$ is odd, averaging splits every $\mathbb F_2[T]$-module into simples. For a simple module $S$, write
$$
F_S=\operatorname{End}_T(S)=\mathbb F_{2^{t_S}},\qquad
r_S=\dim_{F_S}S.
$$
The endomorphism ring is a finite field, and the corresponding simple algebra is $M_{r_S}(F_S)$. Thus $S$ occurs $r_S$ times in the regular module. These semisimple-algebra facts follow from [@milnecft, IV, Theorem 1.17, pp. 124–125; Theorem 4.1, p. 138; Theorems 5.4–5.5, pp. 142–143].

For nontrivial $S$, both $S$ and its dual have zero invariants. Local duality and the Euler characteristic give
$$
H^2(k,S)=0,\qquad
\dim_{\mathbb F_2}H^1(k,S)=d\dim_{\mathbb F_2}S
\tag{2}
$$
[@milne2006adt, I, Corollary 2.3, p. 28; Theorem 2.8, p. 31]. Positive-degree cohomology of $T$ on an $\mathbb F_2$-module vanishes, since it is killed by both $|T|$ and two. Restriction therefore gives
$$
H^1(k,S)\simeq (U\otimes S)^T
\simeq\operatorname{Hom}_T(S^*,U).
\tag{3}
$$
Here we use inflation-restriction and its continuous version [@milnecft, II, Corollary 1.31, p. 70; Remark 1.35(a), p. 72; continuous-cohomology discussion, p. 88]. Equations (2)–(3) show that $S^*$ occurs in $U$ with multiplicity $dr_S$. As $S$ and $S^*$ have the same dimensions and endomorphism fields, these are exactly the multiplicities in $J_d$. Hence $W\simeq J_d$ as modules.

The cup form $b$ on $U$ is perfect, symmetric and $T$-invariant. The averaging idempotent is self-adjoint, so $U=U^T\mathbin{\perp}W$. Thus $b|_W$ is nondegenerate. The function $x\mapsto b(x,x)$ is an invariant $\mathbb F_2$-linear functional, and vanishes on $W$. Therefore $b|_W$ is alternating. The dot product on $J_d$ is also alternating and nondegenerate: in each regular summand, the all-ones vector has norm one and orthogonal complement $I_T$.

*2. No nontrivial absolutely simple module is self-dual.* Work over $\overline{\mathbb F}_2$ and suppose a nontrivial absolutely simple module $A$ were self-dual. Then $(A\otimes A)^T$ has dimension one. Let $\tau$ interchange the two tensor factors and let
$$
P=|T|^{-1}\sum_{g\in T}\rho(g)\otimes\rho(g)
$$
be the projection onto this invariant line. As $\tau$ commutes with $P$ and $\tau^2=1$, its action on the line is the identity in characteristic two. Consequently $\operatorname{tr}(\tau P)=1$. But the matrix identity $\operatorname{tr}(\tau(M\otimes M))=\operatorname{tr}(M^2)$ gives
$$
\operatorname{tr}(\tau P)
=|T|^{-1}\sum_{g\in T}\operatorname{tr}(\rho(g^2))
=|T|^{-1}\sum_{g\in T}\operatorname{tr}(\rho(g))=0.
$$
Squaring permutes $T$: its exponent is odd, so an inverse power to squaring exists. The last sum is the trace of the averaging projection onto $A^T=0$. This contradiction proves the assertion.

*3. Uniqueness of the form.* We show that any semisimple $\mathbb F_2[T]$-module with no trivial constituents has at most one nondegenerate invariant alternating form up to $T$-linear isometry. Isotypic blocks are orthogonal unless their simples are dual, because a pairing is a module map to the dual.

For a pair of distinct dual simples, each block is totally isotropic and the form pairs the two blocks perfectly. An isomorphism on one block determines the required isomorphism on the other through this perfect pairing. Thus this part has a unique isometry class.

Let $S$ instead be a nontrivial self-dual simple over $\mathbb F_2$. Choose a nonzero invariant bilinear form $c$ on $S$. If $c+c^{\mathrm t}\ne0$, use that sum in place of $c$; otherwise $c$ is already symmetric. The resulting symmetric form $b_0$ is nondegenerate by simplicity, and alternating because $x\mapsto b_0(x,x)$ is an invariant linear functional. Its adjoint on the field $F=\operatorname{End}_T(S)$ is an involution $a\mapsto\bar a$.

This involution is nontrivial. Indeed, the simple algebra $M_{r_S}(F)$ splits over $\overline{\mathbb F}_2$ into one matrix algebra for each embedding of $F$. The corresponding summands of $S\otimes\overline{\mathbb F}_2$ are absolutely simple. If the adjoint fixed $F$ pointwise, it would fix each of the central idempotents after scalar extension. Each summand would then pair nondegenerately with itself, contradicting step 2. Hence $F$ has even degree over $\mathbb F_2$, with $\bar a=a^{\sqrt{|F|}}$.

On $S^n$, any invariant bilinear form has the unique expression
$$
\sum_{i,j}b_0(a_{ij}x_i,y_j),\qquad a_{ij}\in F.
$$
It is symmetric exactly when $a_{ji}=\bar a_{ij}$, and nondegenerate exactly when the matrix is invertible. Thus its isometry classification is that of nondegenerate hermitian forms over $F$ with this involution. All such forms of a given dimension are isometric. To check this, a nonzero hermitian form has a vector of nonzero norm: otherwise expansion at $x+y$ puts all its values in the fixed field, and scaling $x$ by an element outside that field forces all values to be zero. Rescale the chosen vector to norm one, using surjectivity of $F^\times\to(F^{\bar{\ }})^\times$, $a\mapsto a\bar a$, and continue in its orthogonal complement. Norm surjectivity follows from cyclicity of the multiplicative group of a finite field. This proves the asserted uniqueness, and applying it to step 1 gives (1). $\square$

**Scope.** This describes only the nontrivial summand. The cup form on $U^T=H^1(k,\mathbb F_2)$ need not be alternating. Odd order is essential to the proof: for example $\mathbb F_2[C_2]$ is not semisimple, and its augmentation line has degenerate dot product. For cyclic $T$, $r_S=1$; for noncyclic $T$, the multiplicity is $dr_S$, rather than $d$.
