---
title: Frobenius polynomials on every monodromy layer
kind: theorem
summary: 'Symmetric powers of a Tate-curve module recover Frobenius polynomials on every monodromy kernel and on the primitive quotients that label blocks by length. Local Galois isomorphisms preserve these polynomials for semistable representations with potential single-weight filtrations.'
tags: [local-fields, galois-groups, hodge-theory, reconstruction-algorithms]
edges:
  - {to: frobenius-polynomials-under-potentially-ordinary-transport, label: uses, note: 'Preserves the crystalline Frobenius polynomial of every tensor probe and both Frobenius polynomials of the transported Tate-curve module.'}
  - {to: monodromy-jordan-types-under-potentially-ordinary-transport, label: uses, note: 'Its tensor-filtration argument keeps all symmetric-power probes within the potential single-weight class; the calculation here retains Frobenius in its kernel-dimension identity.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: uses, note: 'The Tate curve with parameter p has a period basis with Nu = 0, Nv = u, and Frobenius eigenvalues p^{-1}, 1.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, let $K_0$ be its maximal unramified subfield, and put $f=[K_0:\mathbb Q_p]$ and $q=p^f$. For a semistable representation $V$, use covariant periods and write
$$D=D_{\mathrm{st},K}(V),\qquad F=\varphi^f,\qquad N=N_V.$$
Thus $F$ is $K_0$-linear and $FN=q^{-1}NF$. Put
$$K_0(V,z)=1,\qquad K_r(V,z)=\det_{K_0}(1-zF\mid\ker N^r)\quad(r\ge1).$$
Here $K_r(V,z)$ denotes a polynomial; its subscript is unrelated to the field $K_0$.

Fix $T=V_p(E_p)$, the rational Tate module of the [Tate curve with parameter $p$](kummer-extensions-and-tate-curve-periods.md), and set
$$W_r=V\otimes\operatorname{Sym}^{r-1}T\quad(r\ge1).$$
For a semistable $W$, write $P_{\mathrm{cris},K}(W,z)=\det(1-z\varphi^f\mid D_{\mathrm{cris},K}(W))$, as in the [Frobenius-polynomial theorem](frobenius-polynomials-under-potentially-ordinary-transport.md).

**Theorem (proved here).**

1. For every semistable $V$, without a filtration hypothesis,
   $$K_r(V,z)=P_{\mathrm{cris},K}(W_r,q^{r-1}z)\qquad(r\ge1).\tag{1}$$
2. The $F$-stable primitive quotient
   $$E_r(V)=\ker N^r\big/\bigl(\ker N^{r-1}+N(\ker N^{r+1})\bigr)$$
   has Frobenius polynomial
   $$B_r(V,z)=\det(1-zF\mid E_r(V))
   =\frac{K_r(V,z)K_r(V,q^{-1}z)}{K_{r-1}(V,z)K_{r+1}(V,q^{-1}z)}.\tag{2}$$
   In particular this quotient of polynomials is a polynomial. After scalar extension to $\overline{\mathbb Q}_p$, the $B_r$ determine the pair $(F_s,N)$, where $F_s$ is the semisimple part of $F$: each factor $1-\lambda z$ of $B_r$, with multiplicity, contributes one length-$r$ string with successive Frobenius eigenvalues
   $$\lambda,\ q^{-1}\lambda,\ \ldots,\ q^{1-r}\lambda.$$
3. Suppose $V$ has a [potential single-weight filtration](canonical-weight-filtrations-and-potentially-ordinary-transport.md), and let $\alpha:G_L\xrightarrow{\sim}G_K$ be a continuous isomorphism of local absolute Galois groups. Then $V'=\alpha^*V$ is semistable, all the $K_r,B_r$ lie in $\mathbb Q_p[z]$, and
   $$K_r(V',z)=K_r(V,z),\qquad B_r(V',z)=B_r(V,z).\tag{3}$$
   Consequently the pairs $(F_s,N)$ for $V$ and $V'$ become isomorphic over $\overline{\mathbb Q}_p$. For de Rham $V$ with a potential single-weight filtration, the same conclusions hold over every pair of matched finite extensions over which it is semistable.

**Period inputs.** Semistable periods commute with tensor and symmetric powers [@brinonconrad2009, Theorem 5.2.1(2)–(3), p. 68]. Tensor monodromy is $N\otimes1+1\otimes N$, with the induced operator on symmetric powers [@brinonconrad2009, §8.2, p. 113]. Also $D_{\mathrm{cris}}(W)=\ker N_W$ [@brinonconrad2009, Lemma 9.2.12 and its proof, p. 145].

**Proof of (1).** The explicit Tate-curve periods give a basis $u,v$ with
$$Nu=0,\quad Nv=u,\qquad Fu=q^{-1}u,\quad Fv=v.$$
On its $(r-1)$st symmetric power use the basis
$$e_i=\frac{u^iv^{r-1-i}}{(r-1-i)!}\quad(0\le i\le r-1).$$
Then $Ne_i=e_{i+1}$ for $i<r-1$, $Ne_{r-1}=0$, and $Fe_i=q^{-i}e_i$. Division by these factorials is permitted in characteristic zero, including when $p$ divides them.

A vector $\sum_{i=0}^{r-1}x_i\otimes e_i$ is killed by tensor monodromy exactly when
$$Nx_0=0,\qquad Nx_i+x_{i-1}=0\quad(1\le i\le r-1).$$
Thus projection to $x_{r-1}$ is an isomorphism onto $\ker N^r$, with inverse
$$x\longmapsto\sum_{i=0}^{r-1}(-N)^{r-1-i}x\otimes e_i.$$
Under this isomorphism, tensor Frobenius acts as $q^{1-r}F$. Taking determinants on the monodromy kernel gives (1). No semisimplicity of $F$ was used. $\square$

**Proof of (2) and the string assertion.** Put $H_r=\ker N^r/\ker N^{r-1}$, whose Frobenius polynomial is $K_r(V,z)/K_{r-1}(V,z)$. The map induced by $N$ is injective from $H_{r+1}$ to $H_r$: if $Nx\in\ker N^{r-1}$, then $x\in\ker N^r$. Its image has Frobenius polynomial
$$\frac{K_{r+1}(V,q^{-1}z)}{K_r(V,q^{-1}z)},$$
because $FN=q^{-1}NF$. Its cokernel is exactly $E_r(V)$. Multiplicativity of determinants in this exact sequence proves (2), including its polynomial assertion.

Over $\overline{\mathbb Q}_p$, the operator $N$ takes the generalized $\lambda$-eigenspace of $F$ to the generalized $q^{-1}\lambda$-eigenspace. Therefore $F_sN=q^{-1}NF_s$. We justify a Jordan basis consisting of $F_s$-homogeneous strings. Let $a$ be the largest block length. Choose homogeneous vectors $b_i$ such that the $N^{a-1}b_i$ form a basis of $\operatorname{im}N^{a-1}$. Their strings are independent, by applying successive highest powers of $N$ to any relation. Their span $M$ is stable under $F_s,N$. Choose homogeneous linear functionals $\ell_i$ on $D$ whose restrictions to this string basis of $M$ are $1$ at $N^{a-1}b_i$ and $0$ elsewhere. The map
$$\Pi(y)=\sum_i\sum_{j=0}^{a-1}\ell_i(N^{a-1-j}y)N^jb_i$$
commutes with $N$ and $F_s$, and restricts to the identity on $M$. These assertions follow by shifting the summation index for $N$, and by comparing eigenvalues for $F_s$. Thus $D=M\oplus\ker\Pi$ is a stable decomposition. Since $\operatorname{im}N^{a-1}\subseteq M$, the complement has smaller largest block length. Induction gives a basis of strings
$$b,Nb,\ldots,N^{a-1}b,\qquad F_sb=\lambda b.$$
For a string of length $a$, the quotient $E_r$ vanishes unless $r=a$: for $a<r$ it is killed by $\ker N^{r-1}$, and for $a>r$ it is killed by $N(\ker N^{r+1})$. At $r=a$ it is the line of $b$ modulo the rest of the string. Hence $B_r$ records exactly the top eigenvalues of length-$r$ strings. These strings specify $(F_s,N)$ up to isomorphism. $\square$

**Proof of transport.** By the tensor-filtration argument in the [Jordan-type theorem](monodromy-jordan-types-under-potentially-ordinary-transport.md), every $W_r$ has a potential single-weight filtration. The Frobenius-polynomial theorem preserves $P_{\mathrm{cris}}(W_r,z)$ and puts it in $\mathbb Q_p[z]$.

Pullback transports the probe to $T'=\alpha^*T$, which need not be presented as a Tate curve over $L$. Nevertheless that theorem gives
$$P_{\mathrm{st},L}(T',z)=(1-z)(1-q^{-1}z),\qquad
P_{\mathrm{cris},L}(T',z)=1-q^{-1}z.$$
The common residue size $q$ is preserved. The first equality gives distinct Frobenius eigenlines with eigenvalues $1,q^{-1}$, and the second says that monodromy is nonzero. Its relation with Frobenius forces it to map the first line onto the second. Choose $v$ in the first line and put $u=Nv$. This is precisely the basis used to prove (1). That proof therefore applies to $V'$ with $T'$ as probe. Applying Frobenius-polynomial transport to $W_r$ and using (1) proves the first equality in (3) and rationality of $K_r$. Formula (2) proves the assertions for $B_r$; its quotient, already a polynomial, belongs to $\mathbb Q_p[z]$. The string assertion then proves the claimed isomorphism after semisimplification.

For matched finite extensions apply the result to the restricted Galois isomorphism and representation. The potential filtration persists under restriction, and semistability transports by the canonical-weight theorem. $\square$

**Checks and scope.** If $N=0$, every $K_r$ for $r\ge1$ is the full Frobenius polynomial, $B_1$ is that polynomial and $B_r=1$ for $r>1$. For $V=T$,
$$K_1=1-q^{-1}z,\qquad K_r=(1-z)(1-q^{-1}z)\ (r\ge2),\qquad B_2=1-z,$$
with every other $B_r=1$. Thus the change of variable $q^{r-1}z$ in (1) is necessary. More generally $\operatorname{Sym}^{a-1}T$ has $B_a=1-z$ and all other $B_r=1$.

The degree of $B_r$ is the number of monodromy blocks of length exactly $r$; its coefficients retain their Frobenius labels. For $d=\dim V>0$, probes through $r=d$ suffice, since $N^d=0$ and $K_{d+1}=K_d$. The zero representation has every polynomial equal to $1$. This reconstructs the pair involving the semisimplified linear operator $\varphi^f$; it does not recover its nonsemisimple part, the semilinear operator $\varphi$, or the Hodge filtration. No novelty beyond the knowledgebase is claimed.
