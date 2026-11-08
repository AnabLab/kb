---
title: Smit's L-series criterion for number-field embeddings
kind: theorem
summary: 'For number fields K and L, Smit identifies embeddings K into L with homomorphisms of their prime-order Dirichlet character groups preserving divisibility of local Euler polynomials, when the prime exceeds the squared degree of a common Galois closure.'
tags: [number-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: l-series-reconstruction-global-fields, label: analogous-to, note: "An L-series criterion for embeddings, using divisibility of local Euler polynomials."}
  - {to: uchida-homomorphism-conjecture, label: analogous-to, note: "Both recover embeddings from maps on Galois data; here Euler polynomials supplement prime-order characters."}
---

**Data.** For a number field $F$ and a prime $\ell$, put

$$
X_\ell(F)=\operatorname{Hom}_{\mathrm{cont}}(G_F,\mu_\ell),
$$

where $\mu_\ell\subset\mathbb C^\times$ has trivial action. These are the Dirichlet characters killed by $\ell$. For a rational prime $p$, define

$$
P_{F,p}(\chi,T)=\prod_{v\mid p}(1-\chi(v)T^{f_v}),
\qquad f_v=[\kappa(v):\mathbb F_p],
$$

with $\chi(v)=\chi(\operatorname{Frob}_v)$ when unramified and $\chi(v)=0$ otherwise. Thus $L_F(\chi,s)=\prod_pP_{F,p}(\chi,p^{-s})^{-1}$ [@smit2021hom, §1, Definitions 1.1–1.3, p. 3].

**Theorem** (Smit, preprint). Embed number fields $K,L$ in $\bar{\mathbb Q}$ and let $N$ be the Galois closure of $KL/\mathbb Q$. If $\ell>[N:\mathbb Q]^2$, there is a natural bijection

$$
\operatorname{Hom}_{\mathrm{fields}}(K,L)
\longrightarrow
\left\{\psi\in\operatorname{Hom}_{\mathrm{groups}}(X_\ell(K),X_\ell(L)):
P_{K,p}(\chi,T)\mid P_{L,p}(\psi(\chi),T)
\text{ for every }p,\chi\right\}.
$$

Divisibility is in $\mathbb C[T]$. The embedding $\tau$ transports characters to $\tau(K)$ and then restricts them to $G_L$ [@smit2021hom, Theorem A, p. 2; Theorem 2.2, p. 4; §5.1, p. 7].

**Reconstruction.** The proof first matches each degree-one prime of $K$ to a prime of $L$ over the same rational prime, with compatible character values. A density argument and Chebotarev then recover the embedding [@smit2021hom, Theorems 5.2 and 5.7, pp. 8–11].

**Scope.** A size restriction is necessary: for each prime $\ell\ge5$, an $S_\ell$-extension $M/\mathbb Q$ and $L=M^{C_\ell}$ give extra homomorphisms $X_\ell(\mathbb Q)\to X_\ell(L)$ satisfying divisibility, beyond the unique field embedding [@smit2021hom, §6, pp. 11–12].
