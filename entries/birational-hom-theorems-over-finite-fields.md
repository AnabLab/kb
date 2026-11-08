---
title: Birational Hom theorems over finite fields
kind: theorem
summary: 'Saïdi–Tamagawa recover separable embeddings of global function fields from proper, inertia-rigid maps of their full or geometrically prime-to-characteristic Galois groups. Rigid maps suffice without a separate inertia condition; their field embeddings satisfy an extra admissibility condition.'
tags: [function-fields, galois-groups, reconstruction]
edges:
  - {to: uchida-global-function-fields, label: generalizes, note: "The full-group case includes isomorphisms [@saiditamagawa2011hom, Remark 3.5(i), p. 154]."}
  - {to: prime-to-p-uchida-theorem, label: generalizes, note: "The geometrically prime-to-characteristic case includes isomorphisms [@saiditamagawa2011hom, Remark 3.5(i), p. 154]."}
  - {to: birational-pro-p-hom-theorem, label: analogous-to, note: "A Hom theorem in positive characteristic, with conditions on decomposition and inertia rather than a fixed sub-p-adic base."}
---

**Data.** Let $K_i=k_i(X_i)$, where $X_i/k_i$ are smooth proper geometrically connected curves over finite fields of characteristic $p$. For both $i$, take either $\mathcal G_i=G_{K_i}$ or $\mathcal G_i=\Gamma_{K_i}$, the [geometrically prime-to-$p$ quotient](prime-to-p-uchida-theorem.md). The latter retains the full constant-field Galois group. Write $\widetilde K_i$ for the corresponding Galois extension. No genus restriction or identification of constants is imposed [@saiditamagawa2011hom, Introduction, pp. 133–134].

**Conditions on a map.** Let $\sigma:\mathcal G_1\to\mathcal G_2$ be continuous with open image. Let $W_i$ be the prolongations to $\widetilde K_i$ of closed-point valuations of $X_i$, with decomposition groups $D_w$.

- It is **proper** if there is a $\sigma$-equivariant map $\widetilde\phi:W_1\to W_2$ such that $\sigma(D_w)$ is open in $D_{\widetilde\phi(w)}$, and the induced map $\phi:|X_1|\to|X_2|$ on closed points has finite fibers [@saiditamagawa2011hom, Definitions 4.1 and 4.3, p. 161].
- Put $M_i=\varprojlim_{(n,p)=1}\mu_n(\bar k_i)$, with the usual power transition maps. Tame inertia has canonical identifications $j_w:M_i\xrightarrow{\sim}I_w^t$. A proper map is **inertia-rigid** if one isomorphism $\tau:M_1\xrightarrow{\sim}M_2$ of $\widehat{\mathbb Z}^{(p')}$-modules satisfies
  $$\sigma_w^t\circ j_w=j_{\widetilde\phi(w)}\circ(e_w\tau)$$
  for every $w\in W_1$ and some positive integers $e_w$, where $\sigma_w^t$ is the induced map on tame inertia. Thus the local maps share one global identification of roots of unity [@saiditamagawa2011hom, Definition 4.5, pp. 162–163].

**Theorem (Saïdi–Tamagawa).** Restriction induces a bijection
$$
\mathrm{Emb}^{\mathrm{sep}}(K_2,K_1)
\xrightarrow{\sim}
\mathrm{Hom}^{\mathrm{proper,inertia\text{-}rigid}}(\mathcal G_1,\mathcal G_2)/\mathrm{Inn}(\mathcal G_2).
$$
Here separable means that $K_1/\gamma(K_2)$ is finite separable. For a specified $\sigma$, there is a unique equivariant embedding $\widetilde K_2\hookrightarrow\widetilde K_1$ whose restriction is separable [@saiditamagawa2011hom, Theorem 4.8, pp. 164–165]. Equivalently, embeddings of perfections, modulo integral Frobenius powers, correspond to these outer homomorphisms [@saiditamagawa2011hom, Remark 4.9(ii), p. 165].

**Rigid case.** A map is strictly rigid when each $\sigma(D_w)$ equals a target decomposition group, and rigid when its restriction between suitable open subgroups is strictly rigid [@saiditamagawa2011hom, Definition 3.1, p. 153]. Such maps are proper and inertia-rigid automatically [@saiditamagawa2011hom, Remark 4.9(i), p. 165]. They correspond exactly to admissible embeddings: all finite separable embeddings in the full-group case; in the $\Gamma$ case, those whose extension after adjoining algebraically closed constants has Galois closure of degree prime to $p$ [@saiditamagawa2011hom, Definition 3.3 and Theorem 3.4, p. 154]. Theorem 4.8 does not impose this extra degree condition.

**Method and scope.** Kummer theory recovers a multiplicative embedding into a finite purely inseparable extension of $K_1$. After passing to $\mathbb Z_\ell$-extensions of the constants, for $\ell\ne p$, functions with a single pole recover addition [@saiditamagawa2011hom, proof of Theorem 4.8, pp. 176–177]. Class field theory alone gives a norm map in the proper case. The paper does not show that properness forces inertia-rigidity, so that hypothesis remains explicit [@saiditamagawa2011hom, Introduction, pp. 134–135].
