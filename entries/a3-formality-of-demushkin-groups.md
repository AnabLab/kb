---
title: A3-formality of Demushkin group cochains
kind: theorem
summary: Pál–Quick's preprints show that Demushkin cochains of rank at least two are A3-formal exactly when q is not 3. At q = 3, Koszul cohomology and vanishing of every defined degree-one Massey product do not imply A3-formality.
tags: [galois-cohomology, pro-p-groups, local-fields]
edges:
  - {to: demushkin-group, label: uses}
  - {to: non-formality-of-galois-cochains, label: analogous-to, note: "A different obstruction to discarding higher cochain structure, already at the third multiplication."}
  - {to: a-infinity-reconstruction-of-completed-group-algebras, label: analogous-to, note: "The rank-two example below distinguishes cochain structures with identical cohomology rings."}
---

**Setting.** Let $G$ be a pro-$p$ [Demushkin group](demushkin-group.md) of rank $d\ge2$, and put $A=C^*_{\mathrm{cont}}(G,\mathbb F_p)$ and $H=H^*(G,\mathbb F_p)$. Its invariant $q$ is the order of the torsion subgroup of $G^{\mathrm{ab}}$, or $0$ if that subgroup is trivial [@palquick2026two, §1.1].

**Obstruction.** A differential graded algebra is *$A_3$-formal* if its minimal $A_3$-model can be chosen with third multiplication $m_3=0$. Equivalently, its Benson–Krause–Schwede canonical class
$$\gamma_A=[m_3]\in\mathrm{HH}^{3,-1}(H)$$
vanishes, where $\mathrm{HH}$ denotes Hochschild cohomology [@palquick2026odd, Definition 2.10 and Theorem 3.9]. This condition concerns the third multiplication; full formality requires removing all higher multiplications [@palquick2026odd, §2.2, preceding Definition 2.10].

**Theorem (Pál–Quick, preprints).** The algebra $A$ is $A_3$-formal exactly when $q\ne3$. Thus every pro-$2$ Demushkin group of rank at least two satisfies the criterion; the exceptional case is $p=q=3$ [@palquick2026two, Theorem 1.4].

**What Massey products miss.** When $q=3$, $H$ is Koszul and every defined $n$-fold Massey product of degree-one classes, $n\ge3$, contains zero, but $A$ is not $A_3$-formal [@palquick2026odd, Remark 1.9]. Rank-two cyclotomic semidirect products with $q=3$ and $q=9$ both have the exterior cohomology algebra on two degree-one generators over $\mathbb F_3$, while their cochains are not quasi-isomorphic as $A_3$-algebras [@palquick2026odd, Example 1.5].

**Local and global at $2$.** For every place $\ell$ of $\mathbb Q$, the cochains $C^*(G_{\mathbb Q_\ell}(2),\mathbb F_2)$ are $A_3$-formal, whereas $C^*(G_{\mathbb Q},\mathbb F_2)$ is not. Here $G_F(2)$ denotes the maximal pro-$2$ quotient [@palquick2026two, Corollary 1.3].
