---
title: Overconvergent Dieudonné modules detect good and semistable reduction
kind: theorem
summary: Over a finite-field Laurent series field, an abelian variety has good reduction exactly when its Robba-ring Dieudonné module has a horizontal basis, and semistable reduction exactly when that module is unipotent (Lazda–Pál).
tags: [local-fields, positive-characteristic, hodge-theory, abelian-varieties]
edges:
  - {to: crystalline-tate-module-good-reduction, label: analogous-to, note: 'An equal-characteristic p-adic criterion using Dieudonné modules in place of crystalline Tate modules.'}
---

**Setting.** Let $k$ be finite of characteristic $p$, $F=k((t))$, $K=W(k)[1/p]$, and $A/F$ an abelian variety. Use $p$-power Frobenius [@lazdapal2015absolute, §2, p. 15]. The Robba ring $\mathcal R_K$ consists of Laurent series analytic on some annulus $\eta\le |t|<1$; its bounded subring is $\mathcal E_K^\dagger$ [@lazda2017good, Introduction, pp. 756–757].

Let $D^\dagger(A)$ be the overconvergent Dieudonné module of $A[p^\infty]$ over the integral subring $\mathcal O_{\mathcal E_K^\dagger}$. Set
$$
D_{\mathcal R}(A)=D^\dagger(A)\otimes_{\mathcal O_{\mathcal E_K^\dagger}}\mathcal R_K,
$$
with its Frobenius and connection $\nabla=\nabla_{d/dt}$ [@lazdapal2015absolute, Definition 2.8 and discussion preceding Theorem 2.10, p. 17].

**Criterion (Lazda–Pál).** No prior semistability assumption is needed:

- $A$ has good reduction if and only if $D_{\mathcal R}(A)$ has an $\mathcal R_K$-basis killed by $\nabla$.
- $A$ has semistable reduction if and only if $D_{\mathcal R}(A)$ has an $\mathcal R_K$-basis $e_1,\ldots,e_{2\dim A}$ with
  $$\nabla(e_j)\in\sum_{i<j}\mathcal R_K e_i.$$

These are [@lazdapal2015absolute, Theorem 2.17(i)–(ii), p. 21]. Semistability means that the identity component of the Néron special fibre is an extension of an abelian variety by a torus [@lazdapal2015absolute, §2.2, p. 18].

**Relation to curves.** Lazda develops the [rigid fundamental-group criterion](rigid-fundamental-group-good-reduction.md) as a nonabelian extension of this cohomological framework; higher-genus curves require more than unramified cohomology [@lazda2017good, Introduction, pp. 757–758].
