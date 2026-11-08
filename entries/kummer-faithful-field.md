---
title: Kummer-faithful fields
kind: definition
summary: 'A perfect field is Kummer-faithful if semi-abelian varieties over its finite extensions have no nonzero infinitely divisible rational points. The condition combines the abelian-variety and toral variants; sub-p-adic fields satisfy it.'
tags: [base-fields, kummer-theory]
---

**Definition.** For an abelian group $M$, write $M_{\mathrm{div}}=\bigcap_{n\geq 1}nM$. A perfect field $k$ is *Kummer-faithful* if, for every finite extension $L/k$ and every semi-abelian variety $A/L$,
$$A(L)_{\mathrm{div}}=\{0\}.$$
Here a semi-abelian variety is an extension of an abelian variety by a torus [@ozekitaguchi2022, arXiv v1, Definitions 2.1–2.2 and proof of Proposition 2.3, pp. 2–3]. Mochizuki's original definition treats characteristic zero; Murotani calls the condition without perfectness *pre-Kummer-faithfulness* [@mochizuki2015, author's copy, Definition 1.5, p. 32] [@murotani2023higher, Definition 3.1, p. 14].

**Kummer interpretation.** In characteristic zero this is equivalent to injectivity of the full Kummer map
$$A(L)\longrightarrow H^1(G_L,TA),\qquad TA=\varprojlim_{n\geq 1}A[n](\bar L),$$
for every such $L$ and $A$. Here $G_L=\operatorname{Gal}(\bar L/L)$, and the transition from $A[m]$ to $A[n]$ for $n\mid m$ is multiplication by $m/n$ [@mochizuki2015, author's copy, Definition 1.5 (a)–(b), p. 32].

**Variants.** For a perfect field $k$, impose the same condition over every finite $L/k$, with the following restrictions on $A$:

- *AVKF* (abelian variety Kummer-faithful): only abelian varieties [@hoshimochizukitsujimura2025, Definition 6.1 (iii), p. 99].
- *Torally Kummer-faithful*: only tori [@ozekitaguchi2022, arXiv v1, §3.2, paragraph before Proposition 3.5, p. 8].

Kummer-faithfulness is equivalent to the conjunction of these two conditions. More precisely, a perfect field $k$ is Kummer-faithful exactly when $B(k)_{\mathrm{div}}=0$ for every abelian variety $B/k$ and
$$\bigcap_{n\geq 1}(L^\times)^n=\{1\}\qquad\text{for every finite }L/k$$
[@ozekitaguchi2022, arXiv v1, Proposition 2.3, pp. 2–3]. The characteristic-zero equivalence with AVKF plus toral Kummer-faithfulness is also stated in [@hoshimochizukitsujimura2025, Remark 6.1.3, p. 100].

**Reduction to the base field.** In the definition of Kummer-faithfulness one may test just $L=k$, still allowing every semi-abelian variety over $k$ [@ozekitaguchi2022, arXiv v1, paragraph after Definition 2.2, p. 2]. In characteristic zero, Mochizuki explains this reduction by Weil restriction and states it for the toral variant too [@mochizuki2015, author's copy, Remark 1.5.2, p. 32].

**Examples and obstruction.** Every [sub-$p$-adic field](mochizuki-hom-theorem-for-hyperbolic-curves.md), hence every number field and every finite extension of $\mathbb Q_p$, is Kummer-faithful [@mochizuki2015, author's copy, Remark 1.5.4 (i), p. 33]. A torally Kummer-faithful field has only finitely many $\ell$-power roots of unity in each finite extension, for every prime $\ell$. Thus a field containing $\mu_{\ell^\infty}$ for some $\ell\ne\operatorname{char}k$ fails even the toral condition [@hoshimochizukitsujimura2025, Lemma 6.2 (iv×), p. 101]. For instance, $\mathbb Q(\mu_{\ell^\infty})$ is not Kummer-faithful [@ozekitaguchi2022, arXiv v1, Introduction, p. 1].

**Use in the graph.** This is the base-field condition in [semi-absolute reconstruction of function fields](semi-absolute-reconstruction-over-kummer-faithful-fields.md). The AVKF and toral variants also help distinguish it from the TKND-AVKF condition in [reconstruction of configuration spaces](grothendieck-conjecture-for-configuration-spaces-over-tknd-avkf-fields.md).
