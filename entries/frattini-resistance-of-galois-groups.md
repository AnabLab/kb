---
title: Frattini-resistance of maximal pro-p Galois groups
kind: theorem
summary: 'For $F$ containing $\mu_p$ and also $\sqrt{-1}$ if $p=2$, inclusion among closed subgroups of $G_F(p)$ is reflected by their Frattini subgroups. A product of two nontrivial pro-$p$ groups has this property only if one factor is torsion-free abelian (Snopce–Tanushevski).'
tags: [galois-groups, pro-p-groups, galois-cohomology]
edges:
  - {to: one-smooth-oriented-pro-p-group, label: uses, note: "the definition of a 1-smooth cyclotomic pair in the implication below"}
  - {to: cohomological-tests-do-not-characterize-galois-groups, label: analogous-to, note: "A structural restriction on direct products complements the cohomological tests considered there."}
---

**Definition.** For a pro-$p$ group $G$, put $\Phi(H)=\overline{H^p[H,H]}$. The group is *strongly Frattini-resistant* if, for all closed subgroups $H,K\subseteq G$,

$$H\subseteq K\quad\Longleftrightarrow\quad\Phi(H)\subseteq\Phi(K).$$

Without “strongly”, require this only for topologically finitely generated $H,K$ [@snopcetanushevski2020frattini, Introduction, p. 2]. An equivalent test in the strong case is

$$x^p\in\Phi(H)\ \Longrightarrow\ x\in H\qquad(x\in G,\ H\subseteq G\text{ closed})$$

[@snopcetanushevski2023products, Proposition 2.1(ii), p. 3].

**Galois necessity.** Let $F$ contain a primitive $p$th root of unity, and also $\sqrt{-1}$ if $p=2$. Then $G_F(p)$ is strongly Frattini-resistant [@snopcetanushevski2020frattini, Theorem 1.6, p. 3]. The extra hypothesis at $2$ matters: $G_{\mathbb R}(2)=C_2$ is not even Frattini-injective [@snopcetanushevski2020frattini, §7, p. 25].

More generally, a torsion-free pro-$p$ group admitting a [1-smooth cyclotomic orientation](one-smooth-oriented-pro-p-group.md) $\theta:G\to1+p\mathbb Z_p$, with image in $1+4\mathbb Z_2$ if $p=2$, is strongly Frattini-resistant [@snopcetanushevski2020frattini, Theorem 1.11, p. 4].

**Direct products.** Call a pro-$p$ group *absolutely torsion-free* if every closed subgroup has torsion-free abelianization. For nontrivial pro-$p$ groups $G_1,G_2$, the product $G_1\times G_2$ is strongly Frattini-resistant exactly when, after interchanging factors, $G_1$ is torsion-free abelian and $G_2$ is absolutely torsion-free [@snopcetanushevski2023products, Theorem A(ii), p. 2].

For fields there is a sharper statement, attributed there to Koenigsmann. If $\mu_p\subset F$ and $G_F(p)\cong G_1\times G_2$ with both factors nontrivial, then all $p$-power roots of unity in $F(p)$ already lie in $F$, and the factors have the structure just described [@snopcetanushevski2023products, Corollary 1.2, p. 2]. This statement does not assume $\sqrt{-1}\in F$ at $p=2$; its proof treats that case separately [@snopcetanushevski2023products, §5, pp. 12–13].

These are necessary restrictions on Galois realizability; no general converse is asserted.
