---
title: Prismatic F-crystals classify crystalline integral lattices
kind: theorem
summary: 'For a complete mixed-characteristic discrete valuation ring with perfect residue, Bhatt–Scholze classify crystalline Galois lattices by prismatic F-crystals, with no prime, weight or ramification restriction. The naive mod-p analogue fails full faithfulness.'
tags: [local-fields, hodge-theory, galois-representations, reconstruction]
edges:
  - {to: weakly-admissible-filtered-modules, label: analogous-to, note: 'That classification uses rational filtered modules; this one retains the integral lattice.'}
  - {to: crystalline-lattices-and-p-divisible-groups, label: analogous-to, note: 'That theorem realizes lattices of weights 0 and 1 by p-divisible groups; this theorem uses prismatic F-crystals with arbitrary weights.'}
---

**Data.** Let $K$ be a complete discretely valued field of mixed characteristic $(0,p)$ with perfect residue field, and set $X=\operatorname{Spf}(\mathcal O_K)$. Its absolute prismatic site $X_\Delta$ has structure sheaf $\mathcal O_\Delta$, Frobenius $\varphi$ and invertible ideal $I_\Delta$ [@bhattscholze2023prismatic, Definition 2.3, p. 5]. A *prismatic F-crystal* is a vector bundle $\mathcal E$ on this ringed site with an isomorphism
$$
\varphi_{\mathcal E}:(\varphi^*\mathcal E)[1/I_\Delta]\xrightarrow{\sim}\mathcal E[1/I_\Delta].
$$
Morphisms are $\mathcal O_\Delta$-linear and commute with these Frobenius isomorphisms [@bhattscholze2023prismatic, Definition 4.1, p. 12].

**Theorem (Bhatt–Scholze).** Étale realization is an equivalence
$$
T_{\mathcal O_K}:\operatorname{Vect}^{\varphi}(X_\Delta,\mathcal O_\Delta)
\xrightarrow{\sim}\operatorname{Rep}^{\mathrm{cris}}_{\mathbb Z_p}(G_K),
$$
where the target consists of finite free $\mathbb Z_p$-modules $T$ with continuous $G_K$-action and crystalline rationalization $T[1/p]$ [@bhattscholze2023prismatic, Theorem 1.2, p. 2; Theorem 5.6, p. 17]. There is no Hodge–Tate weight or ramification bound; $p=2$ is included.

**Role.** The source rederives [Kummer-tower full faithfulness](kummer-tower-full-faithfulness-for-crystalline-representations.md) by evaluating the corresponding F-crystal on a Breuil–Kisin prism and then applying $p$-completed localization [@bhattscholze2023prismatic, Theorem 7.9, pp. 31–32; Corollary 7.10 and proof, p. 33].

**Torsion caveat.** Already for $K=\mathbb Q_p$, étale realization with $\mathcal O_\Delta/p$ coefficients fails full faithfulness [@bhattscholze2023prismatic, Remark 5.8, p. 18].
