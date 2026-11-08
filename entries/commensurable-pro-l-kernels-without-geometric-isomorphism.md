---
title: Commensurable pro-ℓ kernels without geometric isomorphism
kind: theorem
summary: 'After a finite extension of any finitely generated characteristic-0 field, Hoshi–Iijima construct geometrically nonisomorphic quasi-full curves with commensurable pro-$\ell$ kernels: type $(1,1)$ for every $\ell$, and type $(0,4)$ for $\ell=2$.'
tags: [curves, fundamental-groups, galois-groups, counterexample]
edges:
  - {to: monodromically-full-hyperbolic-curve, label: uses, note: "The examples satisfy quasi-fullness."}
  - {to: quasi-full-curves-from-commensurable-pro-l-kernels, label: analogous-to, note: "The examples show that its list of allowed types cannot simply be enlarged to include (1,1) or (0,4) [@hoshiiijima2023, Remark 5.3, p. 25]."}
  - {to: pro-l-kernels-determine-monodromically-full-genus-zero-curves, label: analogous-to, note: "The four-punctured examples have quasi-fullness and commensurable kernels; that theorem assumes fullness and equal kernels."}
---

**Counterexamples (Hoshi–Iijima).** Let $k$ be finitely generated over $\mathbb Q$ and fix $\bar k$. In each of the following cases there are a finite extension $K/k$ in $\bar k$ and two hyperbolic curves $X_1,X_2/K$ such that:

- both are quasi-$\ell$-monodromically full;
- the kernels of their pro-$\ell$ outer Galois representations are commensurable as closed subgroups of $G_K=\mathrm{Gal}(\bar k/K)$;
- $X_{1,\bar k}\not\cong_{\bar k}X_{2,\bar k}$.

The cases are type $(1,1)$ for any prescribed prime $\ell$ [@hoshiiijima2023, Proposition 5.1, p. 25], and type $(0,4)$ for $\ell=2$ [@hoshiiijima2023, Proposition 5.2, p. 25]. Commensurability means that the intersection of the kernels is open in each, as in the [reconstruction theorem](quasi-full-curves-from-commensurable-pro-l-kernels.md).

**Mechanism in the cited proofs.** The once-punctured elliptic curves arise from non-CM elliptic curves related by a degree-$\ell$ isogeny. Such an isogeny gives commensurable outer kernels, while these elliptic curves are geometrically nonisomorphic [@hoshiiijima2023, Lemmas 5.4 and 5.7 and proof of Proposition 5.1, pp. 26–28]. The four-punctured examples follow by comparing the pro-$2$ kernels for the Legendre family and for the four-punctured line [@hoshiiijima2023, Lemmas 5.9–5.10 and proof of Proposition 5.2, pp. 28–29].

**Scope.** These are counterexamples to extending the commensurability criterion to types $(1,1)$ and $(0,4)$ [@hoshiiijima2023, Remark 5.3, p. 25]. Type $(1,2)$ is also excluded from the [reconstruction theorem](quasi-full-curves-from-commensurable-pro-l-kernels.md), but is not settled by these counterexamples. The assertions recorded here concern commensurable kernels; no equality of the two kernels over $K$ is asserted. They do not contradict the theorem for [full genus-$0$ curves with equal kernels](pro-l-kernels-determine-monodromically-full-genus-zero-curves.md).
