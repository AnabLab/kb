---
title: Rigid fundamental groups detect good reduction in equal characteristic
kind: theorem
summary: For a pointed proper hyperbolic curve with a regular stable model over a positive-characteristic local field, Lazda detects smoothness of that model by extension of the rigid fundamental group's Frobenius and connection. The fourth lower central quotient suffices.
tags: [curves, local-fields, positive-characteristic, fundamental-groups, hodge-theory]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: overconvergent-dieudonne-good-reduction, label: analogous-to, note: 'Lazda extends the cohomological framework for abelian good reduction to a nonabelian invariant for curves [@lazda2017good, Introduction, pp. 757–758].'}
  - {to: crystalline-fundamental-group-good-reduction, label: uses, note: 'The proof deforms the logarithmic special fibre to mixed characteristic and applies the Andreatta–Iovita–Kim criterion [@lazda2017good, §10, pp. 794–797].'}
  - {to: oda-good-reduction-criterion, label: analogous-to, note: 'A Frobenius-and-connection condition gives the equal-characteristic p-adic counterpart of the prime-to-p unramifiedness criterion [@lazda2017good, Introduction, pp. 758–759].'}
---

**Setting.** Put $F=k((t))$, $R=k[[t]]$, and $K=W(k)[1/p]$ for a finite field $k$ of characteristic $p$. Let $X/F$ be smooth, proper, geometrically connected, of genus at least $2$, with $x\in X(F)$. Assume a regular stable model $\mathcal X/R$: étale locally its equation is $uv=t$ or it is smooth, and each geometric component isomorphic to $\mathbb P^1$ meets the other components in at least three points [@lazda2017good, Definition 7.3 and Theorem 7.5, pp. 786–787].

**Invariant.** Let $\mathcal E_K^\dagger$ be the bounded Robba ring: bounded-coefficient Laurent series converging on some annulus $\eta\le |t|<1$. Set $S_K=W(k)[[t]][1/p]$. Here we choose $q=p$, Witt Frobenius on $W(k)$ and $\sigma(t)=t^p$, an allowed specialization of Lazda's Frobenius convention [@lazda2017good, Notations and conventions, p. 760]. Use the derivation $d/dt$ [@lazda2017good, Introduction, p. 756; §7, p. 786]. The unipotent rigid fundamental group
$$U=\pi_1^{\mathrm{rig}}(X/\mathcal E_K^\dagger,x)$$
classifies unipotent overconvergent isocrystals, with fibre functor at $x$. Its coordinate Hopf algebra carries Frobenius and connection [@lazda2017good, §1, p. 762; Definition 5.1 and Theorem 5.3, pp. 775–776]. Call $U$ *non-singular* when this Hopf algebra extends, with both structures, over $S_K$ [@lazda2017good, Definition 7.2 and following paragraph, p. 786].

**Theorem (Lazda).**
$$\mathcal X/R\text{ is smooth}\quad\Longleftrightarrow\quad U\text{ is non-singular}.$$
This is [@lazda2017good, Theorem 7.5, p. 787]. The introduction also states that $U/U_4$ suffices [@lazda2017good, Introduction, p. 759], with numbering $U_1=U$ and $U_{n+1}=[U_n,U]$ [@lazda2017good, paragraph preceding Theorem 10.8, p. 797].

**Mechanism.** Semistable reduction supplies a logarithmic extension; non-singularity means its residue monodromy vanishes [@lazda2017good, Proposition 8.4 and Theorem 9.1, pp. 788–789]. The proof deforms the logarithmic special fibre to mixed characteristic and applies the [crystalline criterion](crystalline-fundamental-group-good-reduction.md) [@lazda2017good, §10, pp. 794–797].
