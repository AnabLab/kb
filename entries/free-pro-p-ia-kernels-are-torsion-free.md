---
title: Torsion-free IA kernels for free pro-p groups of arbitrary rank
kind: theorem
summary: 'For a free pro-p group of any rank, the kernel of the action on its full abelianization is torsion-free. Finite free retractions handle infinite rank; the assertion concerns integral abelianization, not the mod-p Frattini quotient.'
tags: [pro-p-groups, galois-groups]
edges:
  - {to: free-pro-p-groups-inside-their-automorphism-groups, label: analogous-to, note: 'Extends the torsion-free IA filtration used in the cited finite-rank argument to free pro-p groups of arbitrary rank; it does not extend the automorphism-tower theorem.'}
---

**Theorem (proved here).** Let $F$ be a free pro-$p$ group, with no restriction on its rank. All automorphisms are continuous and all commutator subgroups are closed. Then
$$
\ker\bigl(\operatorname{Aut}(F)\longrightarrow
\operatorname{Aut}(F^{\mathrm{ab}})\bigr)
\quad\text{is torsion-free}.
\tag{1}
$$
Here $F^{\mathrm{ab}}=F/[F,F]$ is the full compact $\mathbb Z_p$-module, rather than its reduction modulo $p$.

**Proof.** Put $F_1=F$ and $F_{j+1}=[F,F_j]$.

*1. Finite free retractions.* Choose a free basis $B$ converging to $1$: every open subgroup contains all but finitely many elements of $B$. We use freeness with respect to such convergent families [@ribes2012profinitelecture2, Definitions 2.2.1–2.2.2 and Proposition 2.2.3, pp. 4–5]. For finite $S\subseteq B$, let $F(S)$ be the free pro-$p$ group on $S$, and let $r_S:F\twoheadrightarrow F(S)$ fix $S$ and kill $B\setminus S$. The universal property also embeds $F(S)$ back into $F$, so this is a retraction. Every map from $F$ to a finite group kills all but finitely many basis elements, and therefore factors through some $r_S$. In particular, the kernels of these retractions have intersection $1$.

For every $j$, surjectivity and compactness give $r_S(F_j)=F(S)_j$: the image of a closed commutator subgroup is the closed commutator subgroup of the images. Moreover,
$$
F_j=\bigcap_{S\subseteq B\text{ finite}}r_S^{-1}(F(S)_j).
\tag{2}
$$
To prove the reverse inclusion, let $x$ belong to its right-hand side. The compact sets
$$
\{y\in F_j:r_S(y)=r_S(x)\}
$$
are nonempty. They have the finite intersection property, since a solution for the union of finitely many sets $S$ is a solution for each of them. A common element $y$ satisfies $r_S(y)=r_S(x)$ for every $S$, hence $y=x$.

For a finite-rank free pro-$p$ group, the graded Lie algebra of the closed lower central series is free over $\mathbb Z_p$, so each $F(S)_j/F(S)_{j+1}$ is torsion-free; this identification is recalled in [@tsujimura2026freeaut, proof of Proposition 1.2(ii), p. 4]. Ranks zero and one are immediate. By (2), the natural map
$$
F_j/F_{j+1}\longrightarrow
\prod_{S\subseteq B\text{ finite}}F(S)_j/F(S)_{j+1}
$$
is injective. Thus $F_j/F_{j+1}$ is torsion-free also in infinite rank. Further, $\bigcap_jF_j=1$: the image of $F_j$ in any finite $p$-group vanishes for sufficiently large $j$, because that finite group is nilpotent.

*2. The automorphism filtration.* Set
$$
K_i=\ker\bigl(\operatorname{Aut}(F)\longrightarrow
\operatorname{Aut}(F/F_{i+1})\bigr),\qquad i\ge1.
$$
An automorphism in $K_1$ acts trivially on every $F_j/F_{j+1}$. Indeed, iterated commutators of length $j$ topologically generate that factor. Replacing any argument by its product with an element of $F_2$ changes such a commutator only by an element of $F_{j+1}$, by the commutator identities and $[F_a,F_b]\subseteq F_{a+b}$. Since an automorphism in $K_1$ changes every argument this way, it fixes the generators of that factor, and continuity gives the assertion. If $\alpha\in K_i$, the map
$$
J_i(\alpha)(x)=\alpha(x)x^{-1}\pmod{F_{i+2}}
$$
is a continuous homomorphism $F\to F_{i+1}/F_{i+2}$. To check multiplicativity, expand $\alpha(xy)(xy)^{-1}$ as $\alpha(x)x^{-1}\,x(\alpha(y)y^{-1})x^{-1}$ and use $[F,F_{i+1}]\subseteq F_{i+2}$. It therefore factors through $F^{\mathrm{ab}}$. For $\alpha,\beta\in K_i$, the identity $\alpha\beta(x)x^{-1}=\alpha(\beta(x)x^{-1})\,\alpha(x)x^{-1}$, together with the trivial action of $\alpha$ on $F_{i+1}/F_{i+2}$, gives $J_i(\alpha\beta)=J_i(\alpha)+J_i(\beta)$. The kernel of $J_i$ is exactly $K_{i+1}$. Hence
$$
K_i/K_{i+1}\hookrightarrow
\operatorname{Hom}_{\mathrm{cont}}(F^{\mathrm{ab}},F_{i+1}/F_{i+2})
$$
is injective, and its target is torsion-free by Step 1.

If $\alpha\in K_1$ has finite order, its image in $K_1/K_2$ is zero, then its image in $K_2/K_3$ is zero, and so on. Consequently $\alpha(x)x^{-1}\in\bigcap_iF_{i+1}=1$ for every $x$, proving (1). $\square$

**Scope.** The retractions in Step 1 need not be preserved by $\alpha$; they establish torsion-freeness of the lower central factors before the automorphism argument. Replacing $F^{\mathrm{ab}}$ by $F/\Phi(F)$ would make (1) false: inversion on the rank-one group $\mathbb Z_2$ has order two and acts trivially modulo $2$.
