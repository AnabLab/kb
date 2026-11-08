---
title: Faithfulness of field automorphisms on Galois groups
kind: theorem
summary: 'Hoshi and Tsujimura prove that $\mathrm{Aut}(k) \to \mathrm{Out}(G_k)$ is injective for finitely generated transcendental fields and subfields of mixed-characteristic local fraction fields. For the former, a radical quotient suffices, hence so does the metabelian quotient.'
tags: [galois-groups, function-fields, local-fields, solvable-quotients]
edges:
  - {to: field-theoretic-subgroup-of-outer-automorphisms, label: generalizes, note: "Only the injectivity in its Setting paragraph, not the assertions about conjugates or normality."}
  - {to: m-step-solvable-quotient, label: uses, note: "For the metabelian consequence proved below."}
---

**The map.** Lifting field automorphisms to a separable closure gives

$$\theta_k:\mathrm{Aut}(k)\longrightarrow\mathrm{Out}(G_k).$$

**Theorem (Hoshi–Tsujimura).** The map $\theta_k$ is injective if either:

1. $k$ is finitely generated with positive transcendence degree over some subfield [@hoshitsujimura2023, Corollary 1.6]; or
2. $k$ embeds in $\mathrm{Frac}(R)$ for a Noetherian local domain $R$ with characteristic $0$ and positive residue characteristic [@hoshitsujimura2023, Corollary 4.1].

The second case includes every finite extension of $\mathbb{Q}_p$, by taking its valuation ring for $R$. It gives the injectivity used to define the [field-theoretic subgroup](field-theoretic-subgroup-of-outer-automorphisms.md).

**Radical quotient.** For a prime $\ell\ne\mathrm{char}\,k$, put

$$k_\ell=k\bigl(\alpha\in k^{\mathrm{sep}}:\alpha^{\ell^n}\in k\text{ for some }n\ge1\bigr),\qquad Q_\ell=\mathrm{Gal}(k_\ell/k).$$

[@hoshitsujimura2023, Definition 1.1(i)]. In case 1, $\mathrm{Aut}(k)\to\mathrm{Out}(Q_\ell)$ is injective, without fixing the chosen subfield [@hoshitsujimura2023, Theorem 1.5].

**Metabelian consequence.** In case 1,

$$\mathrm{Aut}(k)\longrightarrow\mathrm{Out}(G_k^2)$$

is injective, where $G_k^2$ is the [maximal metabelian quotient](m-step-solvable-quotient.md). Here is the deduction. Every lift of a field automorphism preserves $k_\ell$, since it carries roots of $X^{\ell^n}-a$ to roots of $X^{\ell^n}-\sigma(a)$. Put $F=k(\mu_{\ell^\infty})\subseteq k_\ell$. The group $\mathrm{Gal}(F/k)$ is abelian. For $h\in\mathrm{Gal}(k_\ell/F)$ and every radical generator $\alpha\ne0$, the ratio $h(\alpha)/\alpha$ is an $\ell$-power root of unity. Since all such $h$ fix these roots of unity, the ratios give an injective homomorphism from $\mathrm{Gal}(k_\ell/F)$ into a product of groups of roots of unity. Thus $Q_\ell$ is metabelian and restriction factors through $G_k^2$. A field automorphism acting by an inner automorphism on $G_k^2$ therefore acts by an inner automorphism on $Q_\ell$, and Theorem 1.5 makes it the identity. This proves faithfulness for a fixed field, without asserting reconstruction from arbitrary metabelian group isomorphisms.

**Boundary.** For perfect $k$ of characteristic $p>0$, $\theta_k$ kills Frobenius and is injective exactly when $k=\mathbb{F}_p$ [@hoshitsujimura2023, Remark 2.4.1(i)].
