---
title: Logarithmic Hodge–Tate comparison for smooth varieties
kind: theorem
summary: 'For smooth $X$ over a $p$-adic field with an snc compactification $(\bar X,D)$, twisting $H^n_{\mathrm{\acute et}}$ by $q$ and taking invariants gives $H^{n-q}(\bar X,\Omega^q(\log D))$, naturally. For $q=n$: global log $n$-forms, equal to $H^0(\Omega^n(D))$ in top degree, not in general below it.'
tags: [hodge-theory, local-fields]
edges:
  - {to: hodge-tate-decomposition, label: generalizes, note: "The case $D=\\emptyset$, that is, $X$ proper."}
  - {to: ax-sen-tate-fixed-field-theorem, label: uses, note: "Only $C^{G_K}=K$ and $C(i)^{G_K}=0$ for $i\\ne0$, to pass from the decomposition to the invariants."}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, with algebraic closure $\bar K$, $G_K=\mathrm{Gal}(\bar K/K)$ and $C=\widehat{\bar K}$. Write $C(q)=C\otimes_{\mathbb Q_p}\mathbb Q_p(q)$ with the diagonal action, as in [Hodge–Tate comparison](hodge-tate-decomposition.md). Let $X$ be a smooth variety over $K$.

An *snc compactification* of $X$ is a dense open immersion $j:X\hookrightarrow\bar X$ into a smooth proper $K$-variety whose complement $D$, with its reduced structure, is a simple normal crossings divisor. Near a point of $\bar X$, choose local coordinates $z_1,\dots,z_d$ in which $D$ is $z_1\cdots z_r=0$. The sheaf $\Omega^1_{\bar X}(\log D)\subseteq j_*\Omega^1_X$ of forms with logarithmic poles along $D$ is locally free with basis $dz_1/z_1,\dots,dz_r/z_r,dz_{r+1},\dots,dz_d$, and $\Omega^q_{\bar X}(\log D)=\wedge^q\Omega^1_{\bar X}(\log D)$.

A *morphism of pairs* $(X,\bar X)\to(Y,\bar Y)$ is a morphism $\bar f:\bar X\to\bar Y$ with $\bar f(X)\subseteq Y$. It is a morphism of the associated log schemes [@beilinson2012padic, §3.2, p. 12], so pulling back forms gives maps $\bar f^*:H^b(\bar Y,\Omega^q_{\bar Y}(\log D_Y))\to H^b(\bar X,\Omega^q_{\bar X}(\log D_X))$. Carlson assumes that snc compactifications exist and can be chosen compatibly with given morphisms [@carlson2026, §3.1, p. 14, and proof of Proposition 3.15, p. 16]. This is Hironaka's resolution of singularities in characteristic $0$, which is not checked against a source here.

**Theorem.** Let $(X,\bar X)$ be an snc compactification with boundary $D$, and let $n\ge0$.

1. *Decomposition.* There is a $G_K$-equivariant isomorphism
$$C\otimes_{\mathbb Q_p}H^n_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)\cong\bigoplus_{q=0}^{n}C(-q)\otimes_K H^{n-q}(\bar X,\Omega^q_{\bar X}(\log D)),$$
natural for morphisms of pairs: pullback in étale cohomology corresponds to $\bar f^*$ on each summand.
2. *Invariants.* For $0\le q\le n$, naturally for morphisms of pairs,
$$\left(H^n_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)\otimes_{\mathbb Q_p}C(q)\right)^{G_K}\cong H^{n-q}(\bar X,\Omega^q_{\bar X}(\log D)).$$
For $q=n$ the right side is the space $H^0(\bar X,\Omega^n_{\bar X}(\log D))$ of global logarithmic $n$-forms, and a morphism of pairs acts on it by pulling back forms.
3. *Top degree.* If $X$ has pure dimension $d$, then $\Omega^d_{\bar X}(\log D)=\Omega^d_{\bar X}\otimes\mathcal O_{\bar X}(D)$, so the case $n=q=d$ of part 2 is $H^0(\bar X,\Omega^d_{\bar X}(D))$.
4. *Two consequences for $q=n$.*
   - (a) Both sides of part 2 vanish for $q=n>\dim X$.
   - (b) Let $U\subseteq X$ be a dense open subset and $(U,\bar U)\to(X,\bar X)$ a morphism of pairs extending the inclusion. Then the restriction map $(H^n_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)\otimes C(n))^{G_K}\to(H^n_{\mathrm{\acute et}}(U_{\bar K},\mathbb Q_p)\otimes C(n))^{G_K}$ is injective.

For $D=\emptyset$, parts 1 and 2 recover the statements of Faltings's comparison for smooth proper varieties. By part 2, the spaces attached to two snc compactifications of $X$ are canonically isomorphic, through the left side.

**Sources.** Bhatt states the decomposition for an arbitrary variety over $K$ as $H^n_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)\otimes C\cong\bigoplus_j\mathrm{gr}^j_FH^n_{\mathrm{dR}}(X/K)\otimes_KC(-j)$, with Deligne's Hodge filtration, and says that it comes out of Beilinson's approach to the $p$-adic comparison theorems [@bhatt2019hodgetate, Remark 1.2.6, p. 7]. Carlson cites that remark for the case $q=n$ [@carlson2026, §3.1, paragraph preceding Definition 3.7, p. 13]. The proof below derives parts 1 and 2, with their naturality, from Beilinson's theorem. It is checked here, as are parts 3 and 4.

**Proof.** *Step 1: the filtered de Rham complex.* Over any field of characteristic $0$, Beilinson defines Deligne's de Rham complex $R\Gamma_{\mathrm{dR}}(X)$, with Deligne's Hodge filtration, through the h-sheafification of the presheaf $(V,\bar V)\mapsto R\Gamma(\bar V,\Omega^\bullet_{\bar V}(\log D_V))$ of filtered complexes on pairs. For a pair, the canonical map $R\Gamma(\bar X,\Omega^\bullet_{\bar X}(\log D))\to R\Gamma_{\mathrm{dR}}(X)$ is a filtered quasi-isomorphism [@beilinson2012padic, §3.4, (3.4.1) and Proposition (i), p. 13]. The source carries the Hodge filtration $F^q=\Omega^{\ge q}_{\bar X}(\log D)$. The map is natural for morphisms of pairs, because it is the sheafification map of a presheaf on pairs. Hence
$$H^n\big(\mathrm{gr}^q_FR\Gamma_{\mathrm{dR}}(X)\big)\cong H^n\big(\bar X,\Omega^q_{\bar X}(\log D)[-q]\big)=H^{n-q}\big(\bar X,\Omega^q_{\bar X}(\log D)\big).$$

*Step 2: the period map.* Beilinson constructs a $G_K$-equivariant morphism
$$\rho:R\Gamma_{\mathrm{dR}}(X)\otimes_KB^+_{\mathrm{dR}}\to R\Gamma_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)\otimes_{\mathbb Q_p}B^+_{\mathrm{dR}}$$
[@beilinson2012padic, §3.5, Remark (i) and (3.5.5), p. 14], compatible with pullbacks [@beilinson2012padic, proof of Theorem 3.6, part (b), p. 15]. Its $B_{\mathrm{dR}}$-linear extension is a filtered quasi-isomorphism [@beilinson2012padic, Theorem 3.6, p. 14], applied to $X_{\bar K}$, whose de Rham complex is $R\Gamma_{\mathrm{dR}}(X)\otimes_K\bar K$ by the same Remark (i). The filtrations are the tensor product of the Hodge filtration with the filtration of $B_{\mathrm{dR}}$ by powers of its maximal ideal $\mathfrak m_{\mathrm{dR}}$ on the left, and the latter alone on the right [@beilinson2012padic, Introduction, p. 1].

*Step 3: graded pieces.* $B_{\mathrm{dR}}$ is a complete discretely valued field with valuation ring $B^+_{\mathrm{dR}}$, residue field $C$ and cotangent line $\mathfrak m_{\mathrm{dR}}/\mathfrak m_{\mathrm{dR}}^2=C(1)$ [@beilinson2012padic, Introduction, p. 1]. Since $\mathfrak m_{\mathrm{dR}}$ is principal, $\mathfrak m^i_{\mathrm{dR}}/\mathfrak m^{i+1}_{\mathrm{dR}}\cong(\mathfrak m_{\mathrm{dR}}/\mathfrak m^2_{\mathrm{dR}})^{\otimes_C i}\cong C(i)$, $G_K$-equivariantly, for every $i\in\mathbb Z$. A filtered quasi-isomorphism induces quasi-isomorphisms on graded pieces, and over a field the graded pieces of a tensor product filtration are sums of tensor products of graded pieces. So $\mathrm{gr}^0$ of the filtered quasi-isomorphism of step 2 is a $G_K$-equivariant quasi-isomorphism
$$\bigoplus_q\mathrm{gr}^q_FR\Gamma_{\mathrm{dR}}(X)\otimes_KC(-q)\simeq R\Gamma_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)\otimes_{\mathbb Q_p}C.$$
Taking $H^n$ and using step 1 gives part 1, since the summands with $q>n$ have $H^{n-q}=0$. Naturality follows from the naturality in steps 1 and 2.

*Part 2.* Twist part 1 by $q$. The summand indexed by $r$ becomes $C(q-r)\otimes_KH^{n-r}(\bar X,\Omega^r_{\bar X}(\log D))$, with $G_K$ acting through the first factor. The second factor is finite-dimensional over $K$, as $\bar X$ is proper, so the invariants are $C(q-r)^{G_K}\otimes_KH^{n-r}(\bar X,\Omega^r_{\bar X}(\log D))$. By [Tate's theorem](ax-sen-tate-fixed-field-theorem.md), $C(i)^{G_K}=0$ for $i\ne0$ and $C^{G_K}=K$ [@bhatt2019hodgetate, Theorem 1.1.8, p. 4], so only $r=q$ contributes. Naturality comes from part 1.

*Part 3.* With local coordinates as in the setting, $\Omega^d_{\bar X}(\log D)$ is generated by
$$\frac{dz_1}{z_1}\wedge\cdots\wedge\frac{dz_r}{z_r}\wedge dz_{r+1}\wedge\cdots\wedge dz_d=(z_1\cdots z_r)^{-1}\,dz_1\wedge\cdots\wedge dz_d,$$
which generates $\Omega^d_{\bar X}\otimes\mathcal O(D)$ inside $j_*\Omega^d_X$, because $z_1\cdots z_r$ is a local equation of the reduced divisor $D$.

*Part 4.* (a) $\Omega^q_{\bar X}(\log D)=0$ for $q>\dim\bar X=\dim X$. (b) By part 2, the map is $\bar f^*:H^0(\bar X,\Omega^n_{\bar X}(\log D_X))\to H^0(\bar U,\Omega^n_{\bar U}(\log D_U))$. Since $\bar f$ restricts to the inclusion $U\subseteq X$, composing with restriction to $U$ gives the composite of the restrictions $H^0(\bar X,\Omega^n_{\bar X}(\log D_X))\to H^0(X,\Omega^n_X)\to H^0(U,\Omega^n_U)$. Both are injective, because the sheaves are locally free on reduced schemes, $X$ is dense in $\bar X$ and $U$ is dense in $X$. Hence $\bar f^*$ is injective. $\square$

**Lower degrees.** For $n<\dim X$, the sheaves $\Omega^n_{\bar X}(\log D)$ and $\Omega^n_{\bar X}\otimes\mathcal O(D)$ need not agree, and replacing logarithmic forms by $\Omega^n(D)$ in part 2 is not valid in general. They do agree when $D=\emptyset$, for instance when $X$ is proper. For an example where they give different answers, take $X=\mathbb G_m^2\subset\bar X=\mathbb P^1\times\mathbb P^1$, so that $D$ is four lines, of class $(2,2)$, and $n=q=1$; this is checked here. Then $\Omega^1_{\bar X}(\log D)\cong\mathcal O^2$, with basis $dx/x$ and $dy/y$, has two independent global sections. That matches $(H^1\otimes C(1))^{G_K}=K^2$, since $H^1_{\mathrm{\acute et}}(X_{\bar K},\mathbb Q_p)\cong\mathbb Q_p(-1)^2$. But $\Omega^1_{\bar X}\otimes\mathcal O(D)\cong\mathcal O(0,2)\oplus\mathcal O(2,0)$ has six.

**Use in Carlson's polycurve proof.** Carlson states the case $q=n$ as $(H^n(X_{\bar K},\mathbb Q_p)\otimes C(n))^{G_K}\cong H^0(\bar X,\Omega^n_{\bar X/K}(D))$ for every $n$, and defines $\mathrm{HT}(X)=\bigoplus_nH^0(\bar X,\Omega^n_{\bar X/K}(D))$ [@carlson2026, §3.1, paragraph preceding Definition 3.7, p. 13]. By part 3, this is right for $n=\dim X$. Below top degree it is not valid in general, by the example above, and the sheaf that works in every degree is $\Omega^n_{\bar X/K}(\log D)$.

In [his proof for polycurves](grothendieck-conjecture-for-hyperbolic-polycurves.md), Carlson shows that a stably Hodge–Tate injective map $\pi_1(X)\to\pi_1(Y)$ is nondegenerate, with $n=\dim Y$. The proof applies the formula to $Y$, where $n$ is the top degree, but also to the source $X$ and a dense open $U\subseteq X$, through compatible snc compactifications [@carlson2026, proof of Proposition 3.15, p. 16]. These may have dimension larger than $n$. For instance, Corollary 3.16 applies Proposition 3.15 to the composites $\pi_1(X)\to\pi_1(Y_m)$ for each step $Y_m$ of a tower of parametrizing morphisms [@carlson2026, proof of Corollary 3.16, p. 17]. With logarithmic forms the argument goes through as written, as checked here. A factorization through $\pi_1(Z)$ with $\dim Z<n$ makes the composite on invariants factor through the invariants for $Z$, which vanish by part 4 (a). The map on invariants for $Y$ to those for $X$ is injective by assumption. The restriction from $X$ to $U$ is injective by part 4 (b), which Carlson deduces from the birationality of $\bar U\to\bar X$. So Carlson's argument needs part 2 with $q=n$ in every dimension, natural for open immersions, and not only its top-degree case.
