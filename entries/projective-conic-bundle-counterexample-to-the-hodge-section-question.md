---
title: A projective-base conic counterexample to the Hodge section question
kind: theorem
summary: 'An explicit smooth projective conic bundle over a product of elliptic curves has no rational section, although pullback is an equivalence on integral and rational variations of mixed Hodge structure. Thus a projective base does not restore unrestricted Hodge section surjectivity.'
tags: [hodge-theory, section-conjecture, curves]
edges:
  - {to: hodge-theoretic-section-question, label: addresses, note: 'Shows that unrestricted surjectivity can fail even when the base and total space are projective; the fibres have genus zero.'}
  - {to: simply-connected-fibres-and-the-hodge-section-question, label: uses, note: 'Its equivalence theorem applies to the conic bundle constructed here.'}
---

**Theorem (proved here).** There are a smooth projective complex surface $B$ and a smooth projective morphism $f:X\to B$, with every geometric fibre isomorphic to $\mathbb P^1$, such that:

1. $f$ has no rational section, hence no algebraic section;
2. pullback is an equivalence on both categories of variations in [Xu's Hodge section question](hodge-theoretic-section-question.md), integral and rational with an integral structure;
3. the induced maps on topological, étale and Hodge-theoretic fundamental groups are isomorphisms. In particular there is a Hodge-theoretic splitting and one isomorphism class of tensor retractions.

The total space $X$ is also smooth and projective. This extends the [conic example over the affine torus](simply-connected-fibres-and-the-hodge-section-question.md) to a projective base.

**Construction.** Regard the one-dimensional complex tori
$$
E_1=\mathbb C/(\mathbb Z+i\mathbb Z),\qquad
E_2=\mathbb C/(\mathbb Z+i\sqrt2\mathbb Z)
$$
as elliptic curves, and put $B=E_1\times E_2$. For $j=1,2$, let $E'_j\to E_j$ be the double cover obtained by replacing the first lattice generator $1$ by $2$. It is an algebraic étale isogeny. The product $T=E'_1\times E'_2\to B$ is a torsor under $V=(\mathbb Z/2)^2$.

Let the first and second generators of $V$ act on $\mathbb P^1$ through the projective classes of
$$
A=\begin{pmatrix}1&0\\0&-1\end{pmatrix},\qquad
C=\begin{pmatrix}0&1\\1&0\end{pmatrix}.
$$
These classes are commuting involutions, although $AC=-CA$. Define
$$X=(T\times\mathbb P^1)/V,\qquad f:X\longrightarrow B,$$
using the diagonal deck and projective action. The action is free because it is free on $T$. A finite free quotient of a smooth projective variety is smooth and projective; projectivity follows by tensoring the translates of an ample line bundle, with the natural group linearization, and descending it. After the étale base change $T\to B$, the morphism $f$ becomes $T\times\mathbb P^1\to T$. Thus $f$ is smooth with connected conic fibres. Since $X$ is projective and $B$ is separated, the graph of $f$ also makes $f$ projective.

**The obstruction class.** Write $z_1=x_1+i y_1$ and $z_2=x_2+i\sqrt2 y_2$, where the real coordinates are taken modulo one. The classes of $dx_j,dy_j$ form an integral basis of $H^1(B,\mathbb Z)$. The two double covers have classes
$$\alpha=dx_1\bmod2,\qquad \gamma=dx_2\bmod2$$
in $H^1(B,\mathbb Z/2)$. The $\mathrm{PGL}_2$-torsor defining $f$ has a boundary class $\eta\in\operatorname{Br}(B)[2]$ for $1\to\mathbb G_m\to\mathrm{GL}_2\to\mathrm{PGL}_2\to1$ [@colliottheleneskorobogatov2019draft, §3.3, Theorem 3.3.1, p. 79].

Its image in analytic $H^2(B,\mathcal O_B^\times)$ is the image of $\gamma\cup\alpha$ under $\{\pm1\}\hookrightarrow\mathcal O_B^\times$. Here is the cocycle check. On a local trivializing cover write the deck cocycle as $(a_{rs},c_{rs})\in(\mathbb Z/2)^2$, and lift the projective transition to $A^{a_{rs}}C^{c_{rs}}$. The scalar defect on a triple overlap is
$$(-1)^{c_{rs}a_{st}},$$
since $A^2=C^2=1$ and $CA=-AC$. This is precisely the indicated cup product. Over $\mathbb Z/2$, its order does not affect its cohomology class, which is $dx_1\wedge dx_2\bmod2$.

We show this analytic image is nonzero. The exact analytic Kummer sequence
$$1\longrightarrow\{\pm1\}\longrightarrow\mathcal O_B^\times
\xrightarrow{u\mapsto u^2}\mathcal O_B^\times\longrightarrow1$$
says that an element of $H^2(B,\mathbb Z/2)$ has zero image in $H^2(B,\mathcal O_B^\times)$ exactly when it is $c_1(L)\bmod2$ for a holomorphic line bundle $L$. The identification of this boundary with the reduction of $c_1$ follows by taking local logarithms of its transition functions.

Every such $c_1(L)$ has a real representative of type $(1,1)$: choose a Hermitian metric on $L$ and use its Chern curvature. In the integral basis of $H^2(B,\mathbb Z)$ write its cross component as
$$
a\,dx_1\wedge dx_2+b\,dx_1\wedge dy_2+
c\,dy_1\wedge dx_2+d\,dy_1\wedge dy_2,
\qquad a,b,c,d\in\mathbb Z.
$$
The two remaining basis elements are $dx_1\wedge dy_1$ and $dx_2\wedge dy_2$. Wedge with the holomorphic two-form
$$\Omega=(dx_1+i\,dy_1)\wedge(dx_2+i\sqrt2\,dy_2).$$
A $(1,1)$-form wedges to zero with $\Omega$ on a complex surface, so $\int_B c_1(L)\cup[\Omega]=0$. Compute this pairing using the constant differential forms representing the integral basis. The two remaining basis elements wedge to zero, while the displayed cross component gives the coefficient
$$\sqrt2\,a-d+i(b+\sqrt2\,c)$$
of $dx_1\wedge dy_1\wedge dx_2\wedge dy_2$, whose integral is one. Thus this coefficient is zero. Irrationality of $\sqrt2$ forces $a=b=c=d=0$.

Consequently the reduction of any holomorphic Chern class has zero cross component. The class $dx_1\wedge dx_2\bmod2$ does not. The analytic Kummer sequence proves that the analytic image of $\eta$ is nonzero, hence $\eta\ne0$ in the algebraic Brauer group as well.

**No section.** The surface $B$ is regular and integral, so
$$\operatorname{Br}(B)\longrightarrow\operatorname{Br}(\mathbb C(B))$$
is injective [@colliottheleneskorobogatov2019draft, Theorem 3.5.4, p. 88]. The generic conic of $f$ has the nonzero class $\eta|_{\mathbb C(B)}$. A Severi–Brauer variety has a rational point exactly when its Brauer class is zero [@colliottheleneskorobogatov2019draft, Proposition 6.1.3, p. 143]. Hence this conic has no $\mathbb C(B)$-point, proving part 1.

**The Hodge retraction.** All fibres are simply connected. The [equivalence theorem for simply connected fibres](simply-connected-fibres-and-the-hodge-section-question.md), applied to $f$, proves the assertions about variations, tensor retractions and Hodge-theoretic groups. Its rational input is Xu's exact sequence [@xu2025exact, Theorem 2.1, p. 4]. The topological fibre-bundle sequence gives $\pi_1^{\mathrm{top}}(X)\cong\pi_1^{\mathrm{top}}(B)$; profinite completion gives the étale statement. $\square$

**Checks and scope.** The anticommutation is essential: commuting matrix lifts would give zero scalar defect. Likewise the irrational period ratio is used to exclude integral cross Chern classes; replacing $E_2$ by $E_1$ invalidates that exclusion. Pullback to $T$ trivializes the bundle, as its construction requires. The example has genus-zero fibres and does not address surjectivity for families of curves of genus at least two. It proves failure of unrestricted surjectivity even with both varieties projective, rather than settling the question of which families have bijectivity.
