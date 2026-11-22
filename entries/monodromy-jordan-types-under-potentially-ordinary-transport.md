---
title: Monodromy Jordan types under potentially ordinary Galois transport
kind: theorem
summary: 'For semistable representations with potential single-weight filtrations, Galois isomorphisms preserve all monodromy power ranks. Crystalline periods after tensoring with symmetric powers of a Tate-curve module recover every monodromy Jordan block.'
tags: [local-fields, galois-groups, hodge-theory, reconstruction]
edges:
  - {to: crystalline-period-dimensions-from-adjacent-weight-quotients, label: uses, note: 'Part 2 preserves crystalline period dimensions for every semistable tensor construction used below.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: uses, note: 'The Tate-curve representation with parameter p is semistable, has weights 1 and 0, and has one monodromy block of size two.'}
  - {to: canonical-weight-filtrations-and-potentially-ordinary-transport, label: uses, note: 'Semistability is preserved over the base fields and every pair of matched finite extensions.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite and let $K_0$ be its maximal unramified subfield. Use covariant period modules and put
$$D_K(V)=D_{\mathrm{st},K}(V),\qquad N_V=N|_{D_K(V)}.$$
A potential single-weight filtration means a filtration after finite extension on whose graded pieces an open subgroup of inertia acts by integer powers of the cyclotomic character; repetitions are allowed, as in the [de Rham criterion](de-rham-criterion-for-single-weight-filtrations.md). All representations are finite-dimensional over $\mathbb Q_p$.

Fix $T=V_p(E_p)$, the rational Tate module of the [Tate curve with parameter $p$](kummer-extensions-and-tate-curve-periods.md) over $K$. Thus $T$ is semistable, fits into $0\to\mathbb Q_p(1)\to T\to\mathbb Q_p\to0$, and $N_T$ has one Jordan block of size two. For a semistable $V$ put
$$c_0(V)=0,\qquad c_r(V)=\dim_{K_0}D_{\mathrm{cris},K}\bigl(V\otimes\operatorname{Sym}^{r-1}T\bigr)\quad(r\ge1).$$

**Theorem (proved here).**

1. For every semistable $V$, without a filtration hypothesis,
   $$c_r(V)=\dim_{K_0}\ker(N_V^r)\qquad(r\ge1).\tag{1}$$
   The number of monodromy Jordan blocks of size exactly $r$ is
   $$2c_r(V)-c_{r-1}(V)-c_{r+1}(V).\tag{2}$$
2. Let $\alpha:G_L\xrightarrow{\sim}G_K$ be a continuous isomorphism for another finite extension $L/\mathbb Q_p$. If $V$ is semistable with a potential single-weight filtration, then $V'=\alpha^*V$ is semistable and
   $$\operatorname{rank}_{L_0}(N_{V'}^r)=\operatorname{rank}_{K_0}(N_V^r)\qquad(r\ge0).\tag{3}$$
   In particular the Jordan block sizes and their multiplicities agree.
3. If $V$ is merely de Rham with a potential single-weight filtration, the same Jordan-type equality holds over every pair of finite extensions $F/K$ and $M/L$ matched by $\alpha$ for which $V|_{G_F}$ is semistable. Here $G_M=\alpha^{-1}(G_F)$, and $V'|_{G_M}$ is semistable too.

**Period inputs.** Semistable representations are closed under tensor and symmetric powers, and $D_{\mathrm{st}}$ commutes with these operations [@brinonconrad2009, Theorem 5.2.1(2)–(3), p. 68, and its symmetric-power argument, p. 71]. Their monodromy on a tensor product is $N\otimes1+1\otimes N$, with the induced operator on a symmetric power [@brinonconrad2009, §8.2, p. 113]. Also $D_{\mathrm{cris}}(W)=\ker N_W$ [@brinonconrad2009, Lemma 9.2.12 and its proof, p. 145].

**Proof of part 1.** Choose a basis $u,v$ of $D_K(T)$ with $N_Tu=0$ and $N_Tv=u$. On $\operatorname{Sym}^{r-1}D_K(T)$, $N(u^{r-1})=0$ and
$$N\bigl(u^{r-1-i}v^i\bigr)=i\,u^{r-i}v^{i-1}\qquad(1\le i\le r-1).$$
This operator has a single Jordan block of size $r$: the $(r-1)$st iterate on $v^{r-1}$ is $(r-1)!u^{r-1}\ne0$. This includes $r=1$, when the symmetric power is the trivial line.

We use an elementary calculation over any field $k$. Let $J_a$ and $J_r$ be nilpotent single blocks of sizes $a$ and $r$. Model their tensor product as
$$A=k[x,y]/(x^a,y^r),$$
so that $J_a\otimes1+1\otimes J_r$ is multiplication by $x+y$. Its kernel and cokernel have equal dimensions because it is an endomorphism of one finite-dimensional space. Its cokernel is
$$A/(x+y)A\cong k[x]/(x^a,(-x)^r),$$
of dimension $\min(a,r)$. Thus
$$\dim_k\ker(J_a\otimes1+1\otimes J_r)=\min(a,r).\tag{4}$$

The nilpotent operator $N_V$ has Jordan blocks over $K_0$; write their sizes as $a_1,\dots,a_s$. The period inputs and (4) give
$$c_r(V)=\sum_{i=1}^s\min(a_i,r)=\dim_{K_0}\ker(N_V^r),$$
which proves (1). The difference $c_r-c_{r-1}$ counts blocks of size at least $r$, so subtracting the next difference gives (2). $\square$

**Proof of part 2.** The [canonical-weight theorem](canonical-weight-filtrations-and-potentially-ordinary-transport.md) transports semistability of $V$ and $T$. Put $T'=\alpha^*T$. By [crystalline-period-dimension transport](crystalline-period-dimensions-from-adjacent-weight-quotients.md),
$$\dim_{L_0}D_{\mathrm{cris},L}(T')=\dim_{K_0}D_{\mathrm{cris},K}(T)=1.$$
Since $\dim T'=2$, its monodromy is nonzero and has one block of size two. Consequently the proof of (1) works over $L$ with $T'$ in place of $T$, regardless of whether $T'$ is realized by a Tate curve over $L$.

For each $r\ge1$, the semistable representation $W_r=V\otimes\operatorname{Sym}^{r-1}T$ has a potential single-weight filtration. Indeed, after a common finite extension, refine the tensor filtrations into pieces that are tensor products of the original single-weight pieces. On each such piece inertia acts by the sum of the weights. Symmetric powers are quotients of tensor powers; intersecting a filtration with a subrepresentation and projecting to a quotient preserve the single-weight property, after omitting zero pieces. Repetitions of the resulting weights are permitted.

Pullback commutes with these tensor constructions. Apply crystalline-period-dimension transport to $W_r$ to obtain
$$\dim_{K_0}D_{\mathrm{cris},K}\bigl(V\otimes\operatorname{Sym}^{r-1}T\bigr)
=\dim_{L_0}D_{\mathrm{cris},L}\bigl(V'\otimes\operatorname{Sym}^{r-1}T'\bigr).$$
By (1) these dimensions are the dimensions of $\ker N_V^r$ and $\ker N_{V'}^r$. The period spaces of the semistable $V,V'$ have the same dimension $\dim_{\mathbb Q_p}V$, giving (3) and then the common Jordan type by (2). The case $r=0$ is the equality of their dimensions. $\square$

**Proof of part 3.** Restriction preserves the potential filtration hypothesis by passing to a common finite extension with one defining the original filtration. Apply part 2 to $\alpha|_{G_M}:G_M\xrightarrow{\sim}G_F$ and $V|_{G_F}$. $\square$

**Checks and scope.** For crystalline $V$ of dimension $d$, every $c_r=d$. For $V=\operatorname{Sym}^{a-1}T$, the monodromy is a single block of size $a$ and $c_r=\min(a,r)$. In dimension four the partitions $(3,1)$ and $(2,2)$ both have $c_1=2$, while $c_2$ is respectively $3$ and $4$: higher tests retain information beyond the original crystalline period dimension. For $d>0$, tests through $r=d$ determine the whole partition, using $c_{d+1}=d$ in (2).

This is a rational assertion, valid for every $p$ and without a ramification bound. Even when $p$ divides $(r-1)!$, that coefficient is invertible in $K_0$; the symmetric-power step uses characteristic zero. The transported invariant is the nilpotent Jordan type. Frobenius eigenvalues and the Hodge filtration are additional data of a period module. No novelty beyond the knowledgebase is claimed.
