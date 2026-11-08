---
title: Wang's Hodge-theoretic Hom theorem for projective hyperbolic curves
kind: theorem
summary: 'Wang proves in a 2026 preprint that dominant maps between smooth projective complex curves of genus at least 2 correspond to conjugacy classes of finite-index-image homomorphisms of their fundamental groups that respect the Hodge-theoretic action after pro-algebraic completion.'
tags: [curves, fundamental-groups, hodge-theory]
edges:
  - {to: mochizuki-hom-theorem-for-hyperbolic-curves, label: analogous-to, note: "The Hodge-theoretic action replaces the outer Galois action [@wang2026hodge, Introduction, pp. 1–2]."}
  - {to: pointed-torelli-theorem-for-curves, label: analogous-to, note: "Both recover complex curves using Hodge structures on fundamental-group data; here the result concerns dominant maps and uses the full discrete groups with their completed action."}
---

**Data.** Write $\pi_1(Z)$ for the topological fundamental group. Its complex pro-algebraic completion $\pi_1(Z)^{\mathrm{alg}}$ is the Tannakian group of finite-dimensional complex representations. Scaling Higgs fields by $t\in\mathbb{C}^{\times}$ induces an outer action on this completion, with $\mathbb{C}^{\times}$ regarded as a discrete group [@wang2026hodge, §2.2, p. 5].

For a homomorphism $f:\pi_1(X)\to\pi_1(Y)$, taken modulo conjugation in $\pi_1(Y)$, Wang defines:

- *Open:* $f$ has finite-index image.
- *Equivariant:* the conjugacy class of $f^{\mathrm{alg}}$ is fixed under $\mathbb{C}^{\times}$ acting through the source and target actions [@wang2026hodge, Definition 2.2.1].

**Theorem (Wang).** For smooth connected projective complex curves $X,Y$ of genus at least $2$, the natural map
$$\mathrm{Hom}^{\mathrm{dom}}_{\mathbb{C}}(X,Y)\longrightarrow\mathrm{Hom}^{\mathrm{open}}_{\mathbb{C}^{\times}}(\pi_1(X),\pi_1(Y))$$
is bijective [@wang2026hodge, Theorem 3.1.1, pp. 6–7]. The right side retains homomorphisms of discrete groups; completion tests equivariance.

**Method and status.** Wang pulls back the uniformizing local system of $Y$ and constructs the morphism from its period map [@wang2026hodge, proof of Theorem 3.1.1, p. 7]. The source is a March 2026 preprint; no journal version was located.
