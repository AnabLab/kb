---
title: Higher cohomology products reconstruct completed group algebras
kind: theorem
summary: 'For a pro-p p-adic Lie group, Wang-Erickson reconstructs its completed group algebra from the minimal A-infinity structure on continuous cohomology. Operations from tensor powers of degree one to degree two give its relations.'
tags: [pro-p-groups, galois-cohomology, reconstruction-algorithms]
edges:
  - {to: minimal-galois-cohomology-quotient, label: analogous-to, note: "There degree-one and degree-two cohomology with the cup product determine a small Galois quotient; here higher operations determine a completed algebra."}
  - {to: non-formality-of-galois-cochains, label: analogous-to, note: "Both concern information retained by cochains beyond their cohomology ring."}
  - {to: p-adic-analytic-pro-p-galois-groups, label: analogous-to, note: "A reconstruction result for the same analytic class of pro-p groups."}
---

**Setting.** Let $G$ be a pro-$p$ $p$-adic Lie group and $k$ a finite field of characteristic $p$. Put $H=H^*_{\mathrm{cont}}(G,k)$. Transferring continuous cochains gives a minimal $A_\infty$-structure $m$ on $H$, with $m_1=0$, $m_2=\cup$ and $\deg m_n=2-n$, unique up to $A_\infty$-isomorphism [@wangerickson2024, §3.2 and Notation 4.0.1].

**Theorem (Wang-Erickson).** The $A_\infty$-isomorphism class of $(H,m)$ determines the complete augmented algebra
$$
\Omega=k[[G]]=\varprojlim_{U\triangleleft_{\mathrm{open}}G}k[G/U].
$$
No torsion-free hypothesis is required [@wangerickson2024, Theorems 1.2.2, 3.5.1 and 4.2.1, and Corollary 4.1.6].

**Construction.** Form the completed dual bar construction $B=\mathrm{Bar}^*(H,m)$. Its classical hull $\mathcal A(B)$ kills the nonzero graded pieces and boundaries from degree $-1$. Then
$$
\Omega\cong\mathcal A(B).
$$
It has generators dual to $H^1$ and relations given by the sums of the suspended duals of $m_n:(H^1)^{\otimes n}\to H^2$ for $n\ge2$ [@wangerickson2024, §§3.3–3.5 and Remark 3.5.2].

**Scope for anabelian reconstruction.** The output is an associative algebra, with no reconstructed coproduct specified. This entry makes no claim that it determines $G$. The input includes a coherent minimal $A_\infty$-model. Compare the [small Galois quotient determined by degree-one and degree-two cup-product data](minimal-galois-cohomology-quotient.md) [@efratminac2017functors, Theorem B and Corollary 7.3(1)]. The [analytic Galois-realizability criterion](p-adic-analytic-pro-p-galois-groups.md) supplies the related field-theoretic setting.
