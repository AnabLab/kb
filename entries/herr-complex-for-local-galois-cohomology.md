---
title: Herr's complex computes local Galois cohomology
kind: theorem
summary: 'For a p-adic representation of a local Galois group, Herr computes continuous cohomology by a three-term complex of its étale Frobenius-Gamma module. Taking invariants under the finite torsion subgroup of Gamma precedes choosing a generator.'
tags: [local-fields, galois-cohomology, hodge-theory]
edges:
  - {to: etale-phi-gamma-modules, label: uses, note: 'Supplies the module D(V), its commuting operators and its coefficient field.'}
  - {to: local-tate-duality, label: analogous-to, note: 'A cohomology computation for rational p-adic representations, beside the duality and Euler characteristic formulas for finite coefficients.'}
---

**Data.** Let $K/\mathbb Q_p$ be finite and $V$ a continuous finite-dimensional $\mathbb Q_p$-representation of $G_K$. Use its [étale module](etale-phi-gamma-modules.md) $D=D(V)$ and $\Gamma_K=\operatorname{Gal}(K(\mu_{p^\infty})/K)$. Let $\Delta_K$ be the finite torsion subgroup of $\Gamma_K$, choose a topological generator $\gamma$ of $\Gamma_K/\Delta_K\simeq\mathbb Z_p$, and put $D'=D^{\Delta_K}$.

**Theorem (Herr).** In degrees $0,1,2$ form the complex of $\mathbb Q_p$-vector spaces
$$
C_{\varphi,\gamma}(D):\quad
D'\xrightarrow{\ d^0\ }D'\oplus D'\xrightarrow{\ d^1\ }D',
$$
where
$$
d^0(z)=((\varphi-1)z,(\gamma-1)z),\qquad
d^1(x,y)=(\gamma-1)x-(\varphi-1)y.
$$
There are natural isomorphisms
$$
H^i(C_{\varphi,\gamma}(D))\simeq H^i_{\mathrm{cont}}(G_K,V)
\quad(i\ge0),
$$
with the left side zero above degree $2$ [@berger2004introduction, §III.2.4, p. 24].

In particular, classes in $H^1(K,V)$ are pairs satisfying $(\gamma-1)x=(\varphi-1)y$, modulo the pairs $d^0(z)$. This is the cohomology of the completed module $D(V)$ in Fontaine's equivalence. The statement uses rational coefficients, including when $p=2$; no assertion about an integral complex is made.
