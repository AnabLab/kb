---
title: Formality of Galois cochains in virtual cohomological dimension one
kind: theorem
summary: 'For a field of virtual cohomological dimension at most one and any prime p, Pál–Quick prove that mod-p Galois cohomology is intrinsically formal and Koszul. Its cochains satisfy strong Massey vanishing for classes in arbitrary degrees.'
tags: [galois-groups, galois-cohomology, orderings]
edges:
  - {to: strong-massey-vanishing, label: uses, note: "the degree-one version of the property below"}
  - {to: positselski-koszulity-conjecture, label: addresses, note: "Theorem 1.11 proves this case, without a roots-of-unity hypothesis."}
  - {to: non-formality-of-galois-cochains, label: analogous-to, note: "A positive class for the formality question whose general answer is negative."}
---

**Setting.** A field $F$ has *virtual cohomological dimension at most one* if some finite extension $E/F$ has $\operatorname{cd}(G_E)\le1$ [@palquick2025, §2, p. 1838]. Put $A=C^*(G_F,\mathbb F_p)$, the continuous cochain differential graded algebra with trivial coefficients. Formality means a zigzag of quasi-isomorphisms of associative differential graded algebras from $A$ to $H^*(A)$ with zero differential; intrinsic formality means every differential graded algebra with this cohomology algebra is formal [@palquick2025, Definition 1.2].

**Theorem (Pál–Quick).** Under this hypothesis, for every prime $p$:

1. $H^*(G_F,\mathbb F_p)$ is intrinsically formal, and $A$ is formal [@palquick2025, Theorem 1.10].
2. For every $n\ge3$ and homogeneous $a_i\in H^{d_i}(G_F,\mathbb F_p)$, vanishing of all $a_i\cup a_{i+1}$ implies

   $$0\in\langle a_1,\ldots,a_n\rangle\subseteq H^{d_1+\cdots+d_n-n+2}(G_F,\mathbb F_p).$$

   This includes definedness, in arbitrary degrees [@palquick2025, Definition 1.7 and Theorem 1.10].
3. $H^*(G_F,\mathbb F_p)$ is Koszul [@palquick2025, Theorem 1.11].

**Examples.** The hypothesis holds for real closed fields, their one-variable function fields and Laurent series fields, and $\mathbb Q^{\mathrm{ab}}\cap\mathbb R$ [@palquick2025, Examples 2.2].
