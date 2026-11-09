---
title: For odd p, the automorphism group of a p-adic absolute Galois group is not an absolute Galois group
kind: theorem
summary: 'For odd $p$ and every finite $k/\mathbb{Q}_p$, $\mathrm{Aut}(G_k)$ has an involution $c$, trivial on $G_k/P_k$, whose fixed points in $G_k$ map onto $G_k/P_k$. So $c$ has infinite centralizer, and neither $\mathrm{Aut}(G_k)$ nor $G_k \rtimes \langle c \rangle$ is an absolute Galois group.'
tags: [local-fields, galois-groups, pro-p-groups, mono-anabelian]
edges:
  - {to: finite-subgroups-of-p-adic-outer-automorphism-groups, label: uses, note: "Nishio's involutions for $[k:\\mathbb{Q}_p] \\ge 3$, which lie in the group of automorphisms inducing the identity on $G_k/P_k$ [@nishio2026finite, proof of Theorem 2.8, pp. 13–14]."}
  - {to: involutive-outer-automorphisms-of-tame-p-adic-galois-groups, label: uses, note: "The involution $\\gamma_K$ for tamely ramified $K$ (parts 1 and 2), and the fact that involutions in absolute Galois groups are self-centralizing (proof of part 3). Part 1 here generalizes the lemma in that proof."}
  - {to: artin-schreier-theorem, label: uses, note: "Through the self-centralizing property of involutions in absolute Galois groups."}
  - {to: automorphism-towers-of-number-field-galois-groups, label: analogous-to, note: "For a number field $K$, $\\mathrm{Aut}(G_K)$ is an absolute Galois group; for every $p$-adic $k$ with $p$ odd it is not."}
---

**Setting.** Let $p$ be an odd prime, $k$ a finite extension of $\mathbb{Q}_p$, $G_k$ its absolute Galois group, $I_k$ its inertia subgroup and $P_k$ its wild inertia subgroup. $\mathrm{Aut}(G_k)$ is the group of continuous automorphisms, and $\mathrm{inn}_x(g) = xgx^{-1}$. For an automorphism $c$ of a group $J$, write $J^c = \{x \in J : c(x) = x\}$. The group $G_k$ is torsion-free [@nishio2026finite, Lemma 2.1 (iv), p. 8] and slim [@nishio2026finite, proof of Theorem 3.3, p. 14], hence centre-free, so $x \mapsto \mathrm{inn}_x$ is an isomorphism of $G_k$ onto $\mathrm{Inn}(G_k)$.

**Theorem.** This is proved here, from theorems of Nishio and the involution of [the tame case](involutive-outer-automorphisms-of-tame-p-adic-galois-groups.md).

1. *Fixed points in cosets.* Let $J$ be a profinite group, $P \subseteq J$ a closed normal pro-$p$ subgroup, and $c$ a continuous automorphism of $J$ with $c^2 = 1$ and $c(P) = P$. If $g \in J$ satisfies $c(g) \in gP$, then $c$ fixes some element of $gP$. In particular, if $c$ induces the identity on $J/P$, then $J^c$ maps onto $J/P$.
2. *An involution trivial on the tame quotient.* There is $c \in \mathrm{Aut}(G_k)$ with $c^2 = 1 \ne c$ that induces the identity on $G_k/P_k$. It is not inner.
3. *Its centralizer.* For $c$ as in part 2, the closed subgroup $G_k^c$ maps onto $G_k/P_k$ and is infinite. The centralizer of $c$ in $\mathrm{Aut}(G_k)$ contains $\langle c \rangle \times \mathrm{Inn}(G_k^c) \cong \mathbb{Z}/2 \times G_k^c$.
4. *Not an absolute Galois group.* Let $A \subseteq \mathrm{Aut}(G_k)$ be any subgroup containing $c$ and $\mathrm{Inn}(H)$ for some open subgroup $H \subseteq G_k$. Then $A$ is not isomorphic, even as an abstract group, to the absolute Galois group of any field. This applies to $A = \mathrm{Aut}(G_k)$, and to $A = \mathrm{Inn}(G_k)\langle c\rangle$, which is isomorphic to the semidirect product $G_k \rtimes \mathbb{Z}/2$ in which the generator acts by $c$.

For tamely ramified $k$, part 4 for $A = \mathrm{Aut}(G_k)$ is part 3 of [the tame case](involutive-outer-automorphisms-of-tame-p-adic-galois-groups.md), and for $[k:\mathbb{Q}_p] \ge 5$ it is consequence 5 of [the entry on Nishio's finite subgroups](finite-subgroups-of-p-adic-outer-automorphism-groups.md). The new case is that of the wildly ramified $k$ with $[k:\mathbb{Q}_p] \in \{3, 4\}$, such as $\mathbb{Q}_3(\sqrt[3]{3})$.

**Proof of part 1.** First, the open normal subgroups $U$ of $J$ with $c(U) = U$ have trivial intersection. Indeed, for any open normal $U$, the subgroup $U \cap c(U)$ is open, normal and $c$-stable, since $c$ is a homeomorphism and $c^2 = 1$. The open normal subgroups of a profinite group intersect in $1$.

Fix such a $U$. Then $c$ induces an automorphism $c_U$ of the finite group $J/U$ with $c_U^2 = 1$. The image of $gP$ in $J/U$ is the coset $gPU/U$ of $PU/U \cong P/(P \cap U)$. This is a finite quotient of the pro-$p$ group $P$, so its order is a power of $p$, which is odd. The coset is $c_U$-stable, because $c(g)c(P)U = c(g)PU = gPU$. So $c_U$ permutes an odd number of elements with orbits of size $1$ or $2$, and fixes one of them. Every element of $gPU/U$ is the image of an element of $gP$. So the set
$$X_U = \{x \in gP : x^{-1}c(x) \in U\}$$
is nonempty. It is closed, as the preimage of the closed set $U$ under a continuous map, and $gP$ is compact. Since $X_{U_1 \cap U_2} \subseteq X_{U_1} \cap X_{U_2}$, and $U_1 \cap U_2$ is again open, normal and $c$-stable, the sets $X_U$ have the finite intersection property. So there is $x \in gP$ lying in every $X_U$. Then $x^{-1}c(x)$ lies in every $c$-stable open normal subgroup, so $c(x) = x$.

If $c$ induces the identity on $J/P$, then $c(g) \in gP$ for every $g$, so every coset of $P$ meets $J^c$. $\square$

The lemma in the proof of part 3 of [the tame case](involutive-outer-automorphisms-of-tame-p-adic-galois-groups.md) is the case where $J$ itself is pro-$p$.

*The prime $2$ is excluded.* In $J = \mathbb{Z}/4$ with $P = 2\mathbb{Z}/4$ and $c(x) = -x$, the automorphism $c$ induces the identity on $J/P$, but swaps the two elements of the coset $1 + P$.

**Proof of part 2.** Let $d = [k:\mathbb{Q}_p]$. Nishio writes $d_k$ for the degree of $k$ over the smallest local field it contains, which is $\mathbb{Q}_p$ [@nishio2026finite, §0, p. 4].

- *Case $d \ge 3$.* Then $m = \lfloor (d-1)/2 \rfloor \ge 1$, and the hyperoctahedral group $(\mathbb{Z}/2)^m \rtimes \mathfrak{S}_m$ has a subgroup of order $2$, for instance one generated by a sign change. Its order is prime to $p$. By Nishio's Theorem 2.8, $\mathrm{Aut}(G_k)$ has a subgroup $\{1, c\}$ of order $2$ [@nishio2026finite, Theorem 2.8, p. 13]. The proof produces it as a splitting of an extension $1 \to \mathrm{Aut}_{G/P^{p,2,s}}(G) \to \Pi \to H_2 \to 1$, where $G = G_k$, $P = P(G)$ and $\Pi$ is a subgroup of $\mathrm{Aut}_{G/P}(G)$ [@nishio2026finite, proof of Theorem 2.8, pp. 13–14]. Here $\mathrm{Aut}_{G/P}(G)$ is the group of automorphisms of $G$ that preserve $P$ and induce the identity on $G/P$ [@nishio2026finite, §0, p. 4], and $P(G_k)$ is the wild inertia subgroup $P_k$ [@nishio2026finite, §2, p. 8]. So $c$ induces the identity on $G_k/P_k$.
- *Case $d \le 2$, and more generally $k$ tamely ramified.* If $d \le 2$, the ramification index of $k/\mathbb{Q}_p$ is at most $2 < p$, so $k$ is tamely ramified. For tamely ramified $k$, [the tame case](involutive-outer-automorphisms-of-tame-p-adic-galois-groups.md) gives an involution $\gamma$ of $G_{\mathbb{Q}_p}$ that induces the identity on $G_{\mathbb{Q}_p}/V$, where $V$ is the wild inertia subgroup of $G_{\mathbb{Q}_p}$, and shows that $c = \gamma|_{G_k}$ is an automorphism of $G_k$ with $c^2 = 1 \ne c$ (parts 1 and 2 there). As $k$ lies in the maximal tamely ramified extension $T$ of $\mathbb{Q}_p$, and every tamely ramified extension of $k$ is tamely ramified over $\mathbb{Q}_p$, the maximal tamely ramified extension of $k$ is $T$, so $P_k = V$. For $g \in G_k$, $c(g) = \gamma(g) \in gV = gP_k$. So $c$ induces the identity on $G_k/P_k$.

In both cases $c$ is not inner. If $c = \mathrm{inn}_x$, then $\mathrm{inn}_{x^2} = c^2 = 1$, so $x^2 = 1$ because $G_k$ is centre-free, so $x = 1$ because $G_k$ is torsion-free, and $c = 1$, a contradiction. $\square$

**Proof of part 3.** $P_k$ is a closed normal pro-$p$ subgroup of $G_k$ [@nishio2026finite, Lemma 2.1 (i), p. 8], and $c(P_k) = P_k$: for $g \in P_k$ we have $c(g) \in gP_k = P_k$, so $c(P_k) \subseteq P_k$, and equality follows from $c^2 = 1$. By part 1, $G_k^c$ maps onto $G_k/P_k$. This group is infinite, since it maps onto $G_k/I_k \cong \widehat{\mathbb{Z}}$ [@nishio2026finite, Lemma 2.1 (iii), p. 8]. So $G_k^c$ is infinite. It is closed, as the equalizer of two continuous maps to a Hausdorff space.

For $x \in G_k^c$, $c \circ \mathrm{inn}_x \circ c^{-1} = \mathrm{inn}_{c(x)} = \mathrm{inn}_x$. So $c$ commutes with $\mathrm{Inn}(G_k^c)$, which is isomorphic to $G_k^c$ since $G_k$ is centre-free. Also $\langle c \rangle \cap \mathrm{Inn}(G_k) = 1$, because $\mathrm{Inn}(G_k) \cong G_k$ is torsion-free and $c$ has order $2$. So $c$ and $\mathrm{Inn}(G_k^c)$ generate an internal direct product $\langle c \rangle \times \mathrm{Inn}(G_k^c)$ inside the centralizer of $c$. $\square$

**Proof of part 4.** The subgroup $H \cap G_k^c$ has index at most $[G_k : H]$ in $G_k^c$, which is infinite by part 3. So it contains some $x \ne 1$. Then $\mathrm{inn}_x \in \mathrm{Inn}(H) \subseteq A$ commutes with $c$ by part 3. Also $\mathrm{inn}_x \ne 1$, because $G_k$ is centre-free, and $\mathrm{inn}_x \ne c$, because $c$ is not inner. So the centralizer of the element $c$ of order $2$ in $A$ has at least three elements.

In the absolute Galois group of any field, the centralizer of an element of order $2$ has exactly two elements. This is proved, from the [Artin–Schreier theorem](artin-schreier-theorem.md), in part 3 of [the tame case](involutive-outer-automorphisms-of-tame-p-adic-galois-groups.md). The property is preserved by isomorphisms of abstract groups, and $A$ does not have it.

For the two examples: $\mathrm{Aut}(G_k)$ contains $c$ and $\mathrm{Inn}(G_k)$. The subgroup $\mathrm{Inn}(G_k)$ is normal in $\mathrm{Aut}(G_k)$ and meets $\langle c \rangle$ trivially, so $\mathrm{Inn}(G_k)\langle c \rangle = \mathrm{Inn}(G_k) \rtimes \langle c \rangle$. The isomorphism $G_k \to \mathrm{Inn}(G_k)$, $x \mapsto \mathrm{inn}_x$, satisfies $c\,\mathrm{inn}_x c^{-1} = \mathrm{inn}_{c(x)}$, so it extends to an isomorphism from $G_k \rtimes \mathbb{Z}/2$, with the generator acting by $c$, onto $\mathrm{Inn}(G_k) \rtimes \langle c \rangle$. $\square$

**Scope and remarks.**

- Nothing is claimed about $\mathrm{Out}(G_k)$. The inner automorphisms in the centralizer become trivial there. For $[k:\mathbb{Q}_p] \ge 5$, $\mathrm{Out}(G_k)$ is not an absolute Galois group by consequence 5 of [the entry on Nishio's finite subgroups](finite-subgroups-of-p-adic-outer-automorphism-groups.md); for smaller degrees the question is not settled here.
- The case $p = 2$ is not covered. Part 1 fails for $p = 2$, by the example above, and the sources opened here give no involution of $\mathrm{Aut}(G_k)$ when $p = 2$.
- For tamely ramified $k$, part 1 gives a second route to part 3 of [the tame case](involutive-outer-automorphisms-of-tame-p-adic-galois-groups.md): a fixed point of $\gamma$ in a coset $gP_k$ with $g \notin P_k$ is a nontrivial element whose inner automorphism commutes with $\gamma_k$. That proof found one inside $P_k$ instead.

**Taken from the sources without re-verification.** Nishio's Theorem 2.8, including the lifting result (his Proposition 2.6) and the pro-$p$ kernel theorem (his Theorem 1.2) on which its proof rests, and the inputs listed in the corresponding paragraph of [the tame case](involutive-outer-automorphisms-of-tame-p-adic-galois-groups.md) for its involution $\gamma$.
