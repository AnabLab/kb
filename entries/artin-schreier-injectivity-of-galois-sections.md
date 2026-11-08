---
title: Artin–Schreier injectivity of Galois sections
kind: theorem
summary: 'Hoshi–Tsujimura prove that distinct rational points of any affine geometrically integral variety over a field of characteristic p give distinct Galois section classes, provided the field has a Galois extension of degree p. Smoothness and hyperbolicity are not required.'
tags: [fundamental-groups, positive-characteristic, galois-cohomology, section-conjecture]
edges:
  - {to: section-conjecture-injectivity, label: analogous-to, note: "An injectivity theorem in positive characteristic, for affine varieties rather than hyperbolic curves over sub-p-adic fields."}
  - {to: section-conjecture, label: analogous-to, note: "It concerns the point-to-section map in characteristic p; the target conjecture is stated in characteristic zero."}
---

**Setting.** Let $A$ be a field of characteristic $p>0$, and let $V$ be an affine, separated, finite-type, geometrically integral $A$-scheme. Choose compatible geometric base points and put $\Pi=\pi_1(V)$ and $\Delta=\pi_1(V_{A^{\mathrm{sep}}})$. Each $v\in V(A)$ determines a continuous section of $\Pi\to G_A$, well defined up to conjugation by $\Delta$. These are the variety and section-class conventions of [@hoshitsujimura2026artinschreier, Definitions 1.3 and 1.6, pp. 7–8].

**Theorem (Hoshi–Tsujimura, preprint).** If $A$ has a finite Galois extension of degree $p$, then
$$
V(A)\longrightarrow \{\text{continuous sections of }\Pi\to G_A\}/\Delta
$$
is injective. There is no smoothness, dimension, or hyperbolicity hypothesis [@hoshitsujimura2026artinschreier, Theorem 1.8, pp. 9–10].

**Argument in the source.** Write $\wp(a)=a^p-a$. Artin–Schreier theory identifies
$$
\Gamma(V,\mathcal O_V)/\wp\Gamma(V,\mathcal O_V)\cong H^1(\Pi,\mathbb F_p),
\qquad A/\wp(A)\cong H^1(G_A,\mathbb F_p).
$$
Pullback by the section of $v$ corresponds to evaluation of regular functions at $v$ [@hoshitsujimura2026artinschreier, Lemma 1.7, pp. 8–9]. After embedding $V$ in affine space and projecting to coordinates, it suffices to distinguish points of $\mathbb A^1_A$. If two section classes agree and their coordinate difference is $b$, evaluation of $cz$ for every $c\in A$ gives $cb\in\wp(A)$. But $\wp(A)\ne A$ by the Galois-extension hypothesis, and for $b\ne0$ multiplication by $b$ maps $A$ onto $A$. Hence $b=0$ [@hoshitsujimura2026artinschreier, Lemma 1.2, p. 7, and proof of Theorem 1.8, pp. 9–10].

The same paper records [failure of surjectivity over positive-characteristic local fields](nongeometric-sections-over-positive-characteristic-local-fields.md). Its [reconstruction of punctured projective lines](punctured-projective-lines-over-positive-characteristic-local-fields.md) also uses Artin–Schreier Galois evaluation.
