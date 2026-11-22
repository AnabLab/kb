---
title: Crystalline period dimensions from adjacent weight quotients
kind: theorem
summary: 'Adjacent weight quotients recover monodromy ranks and crystalline period dimensions for semistable representations with potential single-weight filtrations. Galois isomorphisms preserve these dimensions and the finite local condition for all de Rham coefficients with such filtrations.'
tags: [local-fields, galois-groups, galois-cohomology, hodge-theory, reconstruction]
edges:
  - {to: canonical-weight-filtrations-and-potentially-ordinary-transport, label: uses, note: 'Its canonical flag, ordinary graded pieces for semistable representations, and crystalline and semistable transport for every potential single-weight filtration.'}
  - {to: weakly-admissible-filtered-modules, label: uses, note: 'The exact Colmez–Fontaine equivalence realizes the monodromy image inside a single-weight crystalline piece as a Galois subrepresentation.'}
  - {to: de-rham-criterion-for-single-weight-filtrations, label: uses, note: 'De Rham transport also applies to extensions by the trivial representation, since repetitions of weights are allowed.'}
  - {to: p-adic-monodromy-theorem, label: uses, note: 'A de Rham coefficient and its de Rham extension become semistable over a common finite extension.'}
  - {to: bloch-kato-local-conditions, label: uses, note: 'The period-ring definition of the finite condition; its extension interpretation is used without assuming the coefficient crystalline.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, let $K_0$ be its maximal unramified subfield, and put $f=[K_0:\mathbb Q_p]$. Use covariant period modules and the convention that $\mathbb Q_p(1)$ has Hodge–Tate weight $1$, hence filtration degree $-1$. Representations are finite-dimensional and continuous over $\mathbb Q_p$. A *potential single-weight filtration* is a filtration after finite extension whose pieces are Hodge–Tate with one weight each, with repetitions allowed, as in the [de Rham criterion](de-rham-criterion-for-single-weight-filtrations.md).

For a de Rham representation $X$ with such a filtration, write $F^{\ge h}X$ for the step of its [canonical weight flag](canonical-weight-filtrations-and-potentially-ordinary-transport.md) containing exactly the weights at least $h$. In particular it is $X$ below the smallest weight and $0$ above the largest. Put
$$
Q_h(X)=F^{\ge h}X/F^{\ge h+1}X,\qquad
W_h(X)=F^{\ge h}X/F^{\ge h+2}X.
$$
There is an exact sequence $0\to Q_{h+1}(X)\to W_h(X)\to Q_h(X)\to0$, allowing zero terms.

**Theorem (proved here).**

1. Suppose $X$ is semistable. For every integer $h$ there is a unique smallest $G_K$-stable subspace $S_h(X)\subseteq Q_{h+1}(X)$ such that $W_h(X)/S_h(X)$ is crystalline. If $m_h(X)=\dim_{\mathbb Q_p}S_h(X)$, then
   $$\dim_{K_0}D_{\mathrm{cris},K}(X)=\dim_{\mathbb Q_p}X-\sum_{h\in\mathbb Z}m_h(X).\tag{1}$$
   Only finitely many summands can be nonzero.
2. Let $\alpha:G_L\xrightarrow{\sim}G_K$ be a continuous isomorphism of absolute Galois groups of finite extensions of $\mathbb Q_p$. For semistable $X$ as in part 1, $X'=\alpha^*X$ is semistable and
   $$m_h(X')=m_h(X),\qquad
   \dim_{L_0}D_{\mathrm{cris},L}(X')=\dim_{K_0}D_{\mathrm{cris},K}(X).\tag{2}$$
3. For every de Rham $V$ with a potential single-weight filtration, without assuming semistability over $K$,
   $$\alpha^*H^1_f(K,V)=H^1_f(L,\alpha^*V).\tag{3}$$
   The assertion also holds for stable lattices, with the finite condition defined by inverse image from rational cohomology, and over every pair of finite extensions matched by $\alpha$.

There is no restriction on the occurrence of weights $0$ and $1$, on $p$, or on ramification.

**Period inputs.** The [Colmez–Fontaine equivalence](weakly-admissible-filtered-modules.md) is exact, and realizes every weakly admissible filtered $(\varphi,N)$-module [@colmezfontaine2000, Theorem A, p. 2; Proposition 4.2 and following paragraph, p. 23]. Weak admissibility requires $t_H=t_N$ and $t_H(D')\le t_N(D')$ on every $\varphi,N$-stable subspace, with the induced filtration [@colmezfontaine2000, §3.4, pp. 21–22]. Also
$$D_{\mathrm{cris}}(X)=\ker\bigl(N:D_{\mathrm{st}}(X)\to D_{\mathrm{st}}(X)\bigr);
$$
for semistable $X$, crystallinity is equivalent to $N=0$ [@brinonconrad2009, Lemma 9.2.12 and its proof, p. 145]. The defining relation is $N\varphi=p\varphi N$ [@colmezfontaine2000, §3.3, p. 21].

**Proof of parts 1–2.**

*Single-weight crystalline modules.* For a crystalline representation of single weight $j$, its filtered module $D$ has its only filtration jump at $-j$ and has $N=0$. Set $T=\varphi^f$, a $K_0$-linear automorphism. Group the generalized eigenvalues of $T$ by their $p$-adic valuations. This gives a decomposition over $K_0$: each group of roots is invariant under the absolute Galois group of $K_0$, so its polynomial factor and primary subspace are defined over $K_0$. Each subspace is also $\varphi$-stable, since $\varphi$ commutes with $T$ semilinearly and the Frobenius of $K_0$ preserves valuations.

On a primary subspace $D_a$ whose eigenvalues have valuation $fa$,
$$t_N(D_a)=f^{-1}v_p\det(T|_{D_a})=a\dim D_a,\qquad t_H(D_a)=-j\dim D_a.$$
Weak admissibility gives $a\ge-j$. The equality $t_N(D)=t_H(D)=-j\dim D$ forces every $a=-j$. Consequently all eigenvalues of $T$ have valuation $-jf$.

Every $\varphi$-stable subspace $R\subseteq D$ is itself weakly admissible with its induced filtration: it and all its $\varphi$-stable subspaces have the same pure filtration degree $-j$ and eigenvalue valuation $-jf$, so their Hodge and Newton numbers agree. By Colmez–Fontaine, such $R$ corresponds to a crystalline Galois subrepresentation of the original representation. The inclusion corresponds to an injective map, by exactness and faithfulness of the equivalence. This observation will be used only inside a single-weight piece.

*Separate the weights of $D_{\mathrm{st}}(X)$.* Put $D=D_{\mathrm{st},K}(X)$. By the canonical-flag theorem, each $Q_j(X)$ is an unramified representation twisted by $\mathbb Q_p(j)$, hence crystalline of single weight $j$. Exactness of $D_{\mathrm{st}}$ along the canonical flag and the preceding calculation show that
$$D=\bigoplus_jD_j,$$
where the eigenvalues of $T$ on $D_j$ have valuation $-jf$. In particular
$$D_{\mathrm{st}}(F^{\ge h}X)=\bigoplus_{j\ge h}D_j.$$
Indeed, this submodule has precisely the eigenvalue groups belonging to its graded pieces; each has its full multiplicity in $D$, so the primary decomposition identifies the submodule with their direct sum. No splitting of the Galois representation or of its Hodge filtration is asserted.

Since $T N=p^{-f}NT$, the operator $N$ takes the generalized eigenvalue group $D_j$ into $D_{j+1}$. More explicitly, an eigenvalue $\lambda$ is changed to $p^{-f}\lambda$, including on generalized eigenspaces. Write this map as $N_j:D_j\to D_{j+1}$. Its images lie in distinct direct summands, whence
$$\operatorname{rank}_{K_0}N=\sum_j\operatorname{rank}_{K_0}N_j.\tag{4}$$

*Recover one rank by a crystalline quotient.* Exactness identifies the underlying Frobenius module of $D_{\mathrm{st}}(W_h(X))$ with $D_h\oplus D_{h+1}$. Its only possible monodromy is $N_h:D_h\to D_{h+1}$; the next map is killed by taking the quotient by $F^{\ge h+2}X$. In this two-weight quotient, the submodule $D_{\mathrm{st}}(Q_{h+1}(X))$ is the $D_{h+1}$ summand with its pure induced filtration. We use this filtration on $D_{h+1}$ here; no assertion about its induced filtration inside the original $D$ is needed.

The image $R_h=N_h(D_h)\subseteq D_{h+1}$ is $\varphi$-stable. It has the filtration induced from the single-weight piece $Q_{h+1}(X)$, so the single-weight observation realizes it as a subrepresentation $S_h(X)\subseteq Q_{h+1}(X)$. For any stable subspace $S\subseteq Q_{h+1}(X)$, exactness gives
$$W_h(X)/S\text{ crystalline}
\quad\Longleftrightarrow\quad R_h\subseteq D_{\mathrm{st}}(S).
$$
The right side is equivalent to $S_h(X)\subseteq S$, by the equivalence and its compatibility with kernels and images. This proves existence and uniqueness of the smallest subspace, with $m_h(X)=\operatorname{rank}N_h$. Equations (4) and $D_{\mathrm{cris}}(X)=\ker N$ prove (1).

*Transport.* Pullback preserves the canonical flag, its weights and its dimensions: it transports a single-weight flag to one with the same weights, and that flag is unique. All subquotients under consideration still have potential single-weight filtrations, by intersecting and projecting a defining filtration after finite extension. The canonical-flag theorem therefore transports their crystallinity, as well as the semistability of $X$.

The $G_K$-stable subspaces of $Q_{h+1}(X)$ are exactly the $G_L$-stable subspaces of its pullback, on the same underlying vector space. Crystallinity of $W_h(X)/S$ is preserved for each of them. Hence the same smallest subspace defines $S_h(X')$, and its dimension is unchanged. Equation (1) now proves (2). $\square$

**Proof of part 3.** Write $E_c$ for the extension $0\to V\to E_c\to\mathbb Q_p\to0$ represented by $c\in H^1(K,V)$. The definition
$$H^1_f(K,V)=\ker\bigl(H^1(K,V)\to H^1(K,B_{\mathrm{cris}}\otimes V)\bigr)
$$
means that $c$ is finite exactly when its extension splits after tensoring with $B_{\mathrm{cris}}$ [@blochkato1990tamagawa, (3.7.2), p. 353]. Equivalently, $1\in D_{\mathrm{cris}}(\mathbb Q_p)=K_0$ has an invariant lift in $B_{\mathrm{cris}}\otimes E_c$. Left exactness thus gives, without requiring $V$ crystalline,
$$c\in H^1_f(K,V)
\quad\Longleftrightarrow\quad
\dim_{K_0}D_{\mathrm{cris}}(E_c)=\dim_{K_0}D_{\mathrm{cris}}(V)+1.\tag{5}$$

We also need finite-extension detection of this condition. For every finite $F/K$,
$$c\in H^1_f(K,V)\quad\Longleftrightarrow\quad
\operatorname{res}_{F/K}c\in H^1_f(F,V).\tag{6}$$
The forward implication restricts a splitting. For the converse, pass to a finite Galois extension $F_1/K$ containing $F$. If $z\in B_{\mathrm{cris}}\otimes E_c$ is $G_{F_1}$-invariant and lifts $1$, then
$$[F_1:K]^{-1}\sum_{g\in\operatorname{Gal}(F_1/K)}g(z)
$$
is a $G_K$-invariant lift of $1$. The sum is well-defined independently of the representatives since $z$ is $G_{F_1}$-invariant. It is permitted to divide by $[F_1:K]$ in $\mathbb Q_p$, even for ramified extensions of degree divisible by $p$. This proves (6).

Since $H^1_f\subseteq H^1_g$, it suffices first to test whether $c\in H^1_g(K,V)$. For de Rham $V$ this is equivalent to $E_c$ being de Rham [@blochkato1990tamagawa, remark after (3.7.4), p. 354]. Appending its trivial quotient gives $E_c$ a potential single-weight filtration, even if $V$ already has weight $0$. The de Rham criterion transports de Rham-ness of both $V$ and $E_c$, so it transports this initial test in both directions.

Suppose the test succeeds. By the p-adic monodromy theorem, take a common finite extension $F/K$ over which both $V$ and $E_c$ are semistable. Let $M/L$ be matched by $\alpha$, so $G_M=\alpha^{-1}(G_F)$. Semistable transport makes their pullbacks semistable over $M$. Apply part 2 separately to $V|_{G_F}$ and $E_c|_{G_F}$: their crystalline period dimensions over $F_0$ equal those of their pullbacks over $M_0$. Thus the dimension equality (5) holds over $F$ exactly when it holds over $M$. Equation (6) descends these equivalent tests to $K$ and $L$, proving (3).

For a lattice $T\subset V$, taking inverse images under $H^1(K,T)\to H^1(K,V)$ proves the integral assertion, including torsion classes [@blochkato1990tamagawa, (3.7.3), p. 354]. Restriction to any matched finite extensions preserves de Rham-ness and the filtration hypothesis, so the same proof applies there. $\square$

**Checks and scope.** For a crystalline $X$, every $m_h=0$. For a [split Tate curve](kummer-extensions-and-tate-curve-periods.md), its weights are $1,0$ and its nonzero rank-one monodromy gives $m_0=1$; thus (1) gives one crystalline period. A gap between two consecutive occurring weights larger than one contributes no monodromy map. Higher powers of $N$ need not vanish: (4) adds the ranks of the individual maps, even along a chain of three or more adjacent weights.

Part 3 extends finite-condition transport to the noncrystalline coefficients with both weights $0$ and $1$ left outside the earlier [potentially ordinary local-condition theorem](bloch-kato-local-conditions-for-potentially-ordinary-representations.md). Formula (1) is asserted over a field where $X$ is semistable; part 3 uses (6) to handle coefficients that become semistable only after extension. It does not identify crystalline period modules, Frobenius eigenvalues, exponential maps, or field addition across $\alpha$. This is a deduction from the linked results and the opened inputs, with no novelty claimed beyond the knowledgebase.
