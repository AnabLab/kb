---
title: Wickelgren's two-nilpotent birational real section theorem
kind: theorem
summary: 'For a smooth proper geometrically connected real curve with a chosen real tangent direction, Wickelgren recovers its real points with tangent directions as the abelian birational section classes that lift to the geometric class-two quotient.'
tags: [curves, function-fields, galois-groups, section-conjecture]
edges:
  - {to: two-nilpotent-real-section-theorem, label: uses, note: "The proof applies the real section theorem to shrinking Zariski opens [@wickelgren2014real, proof of Corollary 4.1, p. 15]."}
  - {to: birational-sections-over-local-fields, label: analogous-to, note: "A birational section theorem over the real numbers using a quotient of the geometric Galois group."}
---

**Setting.** Let $X/\mathbb{R}$ be a smooth proper geometrically connected curve. Write
$$X(\mathbb{R})^{\pm}=\{(x,[v]):x\in X(\mathbb{R}),\ 0\ne v\in T_xX(\mathbb{R}),\ [v]=\mathbb{R}_{>0}v\},$$
and choose $b\in X(\mathbb{R})^{\pm}$. Thus each real point has two tangent directions. Put $G=\mathrm{Gal}(\mathbb{C}/\mathbb{R})$, $P=G_{\mathbb{C}(X)}$ and $E=G_{\mathbb{R}(X)}$, using a common algebraic closure. Define $\Gamma_1=P$ and $\Gamma_{n+1}=\overline{[P,\Gamma_n]}$. For $n=1,2$, let $S_n$ be the continuous sections of
$$1\longrightarrow P/\Gamma_{n+1}\longrightarrow E/\Gamma_{n+1}\longrightarrow G\longrightarrow1$$
modulo conjugation by $P/\Gamma_{n+1}$.

**Theorem (Wickelgren).** Tangential sections give a natural bijection
$$X(\mathbb{R})^{\pm}\xrightarrow{\ \sim\ }\operatorname{im}(S_2\longrightarrow S_1)$$
[@wickelgren2014real, Corollary 1.2, p. 3; Corollary 4.1, p. 14]. In particular, the quotient $E/\Gamma_3\to G$ recovers this set. The classified objects are abelian section classes admitting a lift.

**Construction and argument in the source.** At a real point, a local parameter $z$ embeds the function field into the Puiseux field $\bigcup_{m\ge1}\mathbb{C}((z^{1/m}))$. Coefficientwise conjugation gives a section whose conjugacy class depends only on the tangent direction [@wickelgren2014real, §4, p. 14].

The proof identifies $X(\mathbb{R})^{\pm}$ with $\varprojlim_U\pi_0(U(\mathbb{R}))$, over nonempty Zariski opens $U\subseteq X$. It applies the [two-nilpotent real section theorem](two-nilpotent-real-section-theorem.md) to these opens and uses injectivity of
$$H^1(G,P^{\mathrm{ab}})\longrightarrow\varprojlim_U H^1(G,\pi_1(U_{\mathbb{C}})^{\mathrm{ab}})$$
[@wickelgren2014real, proof of Corollary 4.1, p. 15].
