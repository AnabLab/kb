---
title: Quasi-full curves from commensurable pro-ℓ kernels
kind: theorem
summary: 'For quasi-full curves over sub-$\ell$-adic fields, commensurable pro-$\ell$ kernels recover geometric isomorphism for eight small types, with prime and type restrictions. Types $(0,4)$ and $(1,1)$ have counterexamples; $(1,2)$ is not covered.'
tags: [curves, fundamental-groups, galois-groups, reconstruction-algorithms]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: monodromically-full-hyperbolic-curve, label: uses, note: "The hypothesis is quasi-fullness, meaning an open image in universal arithmetic monodromy."}
  - {to: pro-l-kernels-determine-monodromically-full-genus-zero-curves, label: analogous-to, note: "That theorem uses fullness and equal kernels to recover a genus-0 curve over its base field; this one uses quasi-fullness and commensurability to recover selected types geometrically."}
  - {to: injectivity-of-outer-galois-representations, label: analogous-to, note: "Over number fields the profinite outer kernel is trivial for every hyperbolic curve; pro-ell kernels carry the reconstruction information here."}
---

**Setting.** Fix a prime $\ell$, an algebraic closure $\bar k$ of $k$, and write
$$\rho_X^\ell:G_k\longrightarrow\mathrm{Out}\big(\pi_1(X_{\bar k})^{(\ell)}\big),\qquad N_X=\ker\rho_X^\ell.$$
Here $(\ell)$ denotes the maximal pro-$\ell$ quotient. The field $k$ is *sub-$\ell$-adic* if it embeds in a finitely generated extension of $\mathbb Q_\ell$. Two closed subgroups $N_1,N_2\subseteq G_k$ are *commensurable* if $N_1\cap N_2$ is open in each; the comparison takes place inside this same $G_k$, not up to abstract isomorphism [@hoshiiijima2023, Definitions 1.1–1.2, pp. 4–5].

A curve of type $(g,r)$ is *quasi-$\ell$-monodromically full* if its Galois image is open in the image of the universal pro-$\ell$ outer monodromy of $\pi_1(\mathcal M_{g,[r]})$, with the geometric groups identified. Here $\mathcal M_{g,[r]}$ classifies curves with unordered cusps over $k$, and its étale fundamental group maps onto $G_k$ [@hoshiiijima2023, Definitions 1.4 (ii), 1.5 (ii) and 1.7 (ii), pp. 5–7]; see [monodromic fullness](monodromically-full-hyperbolic-curve.md).

**Theorem (Hoshi–Iijima).** Let $k$ be sub-$\ell$-adic and let $X_i/k$ be quasi-$\ell$-monodromically full hyperbolic curves of types $(g_i,r_i)$ for $i=1,2$. Assume:

1. At least one of the two types belongs to
   $$S=\{(0,3),(0,5),(0,6),(0,7),(1,3),(1,4),(2,0),(2,1)\}.$$
2. If $g_1g_2\ne0$, then $\ell=2$.
3. Either $g_1=g_2$ or $r_1=r_2$.

Then
$$X_{1,\bar k}\cong_{\bar k}X_{2,\bar k}\quad\Longleftrightarrow\quad N_{X_1}\text{ and }N_{X_2}\text{ are commensurable in }G_k.$$
In the reverse implication the types also coincide [@hoshiiijima2023, Corollary 4.4 and its proof, pp. 23–24].

The conclusion concerns geometric isomorphism. Compare the [genus-$0$ theorem with equal kernels](pro-l-kernels-determine-monodromically-full-genus-zero-curves.md), whose conclusion is isomorphism over $k$.

**Excluded types.** Among hyperbolic types with $3g-3+r<5$, the three missing from $S$ are $(0,4)$, $(1,1)$ and $(1,2)$. Under the other hypotheses of Theorem 4.2, commensurability still gives moduli-correspondence-equivalence over $\bar k$ for these types [@hoshiiijima2023, Theorem 4.2, p. 21]. The isomorphism criterion of Proposition 1.10 requires $2g-2+r>2$, which all three fail [@hoshiiijima2023, Proposition 1.10, p. 8 and proof of Corollary 4.4, pp. 23–24]. The first two admit [counterexamples to geometric reconstruction](commensurable-pro-l-kernels-without-geometric-isomorphism.md); the manuscript neither proves nor refutes the commensurability criterion for $(1,2)$.

**Version.** Citations use the June 2023 revised author manuscript, with printed pages 1–31. The journal text was not compared.
