---
title: Arithmetic Dehn twists in pro-p local Galois groups
kind: theorem
summary: 'For odd p and a finite K/Q_p containing the p-th roots of unity, Gropper proves that Dehn twists from nontrivial one-edge splittings of G_K(p) over Z_p have infinite order in Out(G_K(p)), extending the surface-group construction.'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: maximal-pro-p-galois-groups-of-p-adic-fields, label: uses, note: "identifies the local Galois quotient as a Demushkin group"}
  - {to: demushkin-group, label: uses}
  - {to: field-theoretic-subgroup-of-outer-automorphisms, label: analogous-to, note: "Outer automorphisms of local Galois groups; the twists here concern maximal pro-p quotients."}
---

**Setting.** Let $p$ be odd and $K/\mathbb Q_p$ finite with $\mu_p\subset K$. Its [maximal pro-$p$ Galois group](maximal-pro-p-galois-groups-of-p-adic-fields.md) $G=G_K(p)$ is a [Demushkin group](demushkin-group.md) [@gropper2023, Theorem 69].

**Construction.** Choose a nontrivial one-edge splitting $\alpha$ of $G$ as a proper pro-$p$ amalgamated product or pro-$p$ HNN extension, with edge group $C=\overline{\langle c\rangle}\cong\mathbb Z_p$. Its *Dehn twist* $T_\alpha$ is the continuous automorphism given by:

- For $G=A*_C B$, fix $A$ and send $b\in B$ to $cbc^{-1}$.
- For an HNN extension with base $A$ and convention $t^{-1}ct=\theta(c)$, fix $A$ and send $t$ to $ct$.

These are the graph-of-groups twists of [@gropper2023, Definitions 41 and 43, p. 21], applied to the pro-$p$ splittings of §4.3.2.

**Theorem (Gropper, preprint).** For every integer $k\ne0$, $T_\alpha^k$ is not inner. Thus its class has infinite order in $\operatorname{Out}(G)$ [@gropper2023, Corollary 100, p. 37]. The corollary's proof uses $\mathbb Z_p$-splittings; its displayed statement writes $\mathbb Z$.

**Method.** Up to automorphism, each splitting comes from a discrete cyclic splitting by pro-$p$ completion [@gropper2023, Theorem 93]. Finite $p$-quotients detect the nontrivial powers of the resulting twists [@gropper2023, Lemmas 95–96 and Corollaries 99–100].

This result concerns $G_K(p)$. For constructions on the full absolute Galois group, see [the field-theoretic subgroup of outer automorphisms](field-theoretic-subgroup-of-outer-automorphisms.md).
