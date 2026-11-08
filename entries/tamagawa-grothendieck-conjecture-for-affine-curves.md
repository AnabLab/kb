---
title: Tamagawa's theorem on the Grothendieck conjecture for affine curves
kind: theorem
summary: Over finite fields an affine curve is determined functorially by its fundamental group alone, with no map to $G_k$ given, and an affine hyperbolic curve by its tame one. Over fields finitely generated over $\mathbb{Q}$, affine hyperbolic curves satisfy the Grothendieck conjecture.
tags: [curves, fundamental-groups, function-fields, number-fields, section-conjecture]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: pop-mochizuki-finitely-generated-fields, label: uses, note: "Only for the absolute form over fields finitely generated over $\\mathbb{Q}$, Theorem (6.1) [@tamagawa1997, §6, p. 183]."}
  - {to: uchida-global-function-fields, label: analogous-to, note: "The proof over finite fields modifies Uchida's proof of his theorem, but does not apply the theorem [@tamagawa1997, Introduction, p. 138]."}
  - {to: section-conjecture, label: addresses, note: "Proposition (2.8) (iv) is the neighbourhood criterion that reduces the conjecture to its weak form [@tamagawa1997, Proposition (2.8), p. 152]."}
---

**Setting.** Let $k$ be a field of characteristic $p \ge 0$ and $U$ a smooth, geometrically connected curve over $k$, with smooth compactification $X$ and $S = X - U$. Let $g$ be the genus of $X$ and $n$ the number of points of $S(\bar k)$ [@tamagawa1997, §1, p. 140]. The curve $U$ is *affine* if $n > 0$, and *hyperbolic* if $2 - 2g - n < 0$ [@tamagawa1997, Introduction, pp. 136–137], as in the entry on [hyperbolic curves](hyperbolic-curve.md). There is an exact sequence
$$1 \to \pi_1(U \otimes_k k^{\mathrm{sep}}) \to \pi_1(U) \to G_k \to 1$$
[@tamagawa1997, (0-1), p. 135]. The tame fundamental group $\pi_1^{\mathrm{tame}}(U)$ is the quotient that classifies coverings at most tamely ramified along $S$ [@tamagawa1997, §1, p. 141].

**Finite fields.** Let $k_1, k_2$ be finite fields and $U_i$ a curve over $k_i$.

1. If $U_1$ and $U_2$ are affine and hyperbolic, the natural map
$$\mathrm{Isom}(U_1, U_2) \to \mathrm{Isom}(\pi_1^{\mathrm{tame}}(U_1), \pi_1^{\mathrm{tame}}(U_2))/\mathrm{Inn}(\pi_1^{\mathrm{tame}}(U_2))$$
is bijective [@tamagawa1997, Theorem (0.5), p. 138].
2. If $U_1$ and $U_2$ are affine, hyperbolic or not, the same holds with $\pi_1$ in place of $\pi_1^{\mathrm{tame}}$ [@tamagawa1997, Theorem (0.6), p. 138].

Here $\mathrm{Isom}(U_1, U_2)$ is the set of isomorphisms of schemes, and the group isomorphisms are arbitrary isomorphisms of topological groups, with no compatibility with $G_{k_1}$ and $G_{k_2}$ imposed. When $k_1 = k_2 = k$, every isomorphism $\pi_1(U_1) \to \pi_1(U_2)$ commutes with the projections to $G_k$ anyway [@tamagawa1997, Remark (6.4), p. 183]. The precise form is Theorem (4.3), which differs in three ways [@tamagawa1997, §4, pp. 162–164]:

- it needs the hypothesis on only one of the two curves;
- it holds before dividing out inner automorphisms, as a bijection onto the group isomorphisms from the compatible pairs of isomorphisms of the curves and of their universal coverings;
- it holds for the quotient of $\pi_1(U_i)$ in which the geometric fundamental group is replaced by its maximal pro-$\mathcal{C}$ quotient, for any full class $\mathcal{C}$ of finite groups that contains $\mathbb{Z}/l\mathbb{Z}$ for every prime $l$.

The field itself carries much less. For every finite field, $G_k \cong \widehat{\mathbb{Z}}$, so $G_k$ does not determine $|k|$. Every automorphism of $\bar k$ preserves $k$ and induces the identity of $G_k$, while $\mathrm{Aut}(G_k) = \widehat{\mathbb{Z}}^\times$ is large. Yet $\pi_1(U)$ determines $|k|$ and the Frobenius element of $G_k$ group-theoretically [@tamagawa1997, §3, p. 158, and Proposition (3.4), p. 159]. Tamagawa says that Theorem (0.6) answers a slight modification of a question of Harbater affirmatively, and that the original question has a negative answer in general [@tamagawa1997, Introduction, p. 138].

**Fields finitely generated over $\mathbb{Q}$.** Let $k$ be finitely generated over $\mathbb{Q}$, and let $U_1, U_2$ be affine hyperbolic curves over $k$. Then the natural map
$$\mathrm{Isom}_k(U_1, U_2) \to \mathrm{Isom}_{G_k}(\pi_1(U_1), \pi_1(U_2))/\mathrm{Inn}(\pi_1(U_2 \otimes_k \bar k))$$
is bijective, where $\mathrm{Isom}_{G_k}$ denotes isomorphisms compatible with the projections to $G_k$ [@tamagawa1997, Conjecture (0.1) and Theorem (0.3), pp. 136–137]. The absolute form holds as well. If $k_i$ is finitely generated over $\mathbb{Q}$ and $U_i$ is an affine hyperbolic curve over $k_i$, then $\mathrm{Isom}(U_1, U_2) \to \mathrm{Isom}(\pi_1(U_1), \pi_1(U_2))/\mathrm{Inn}(\pi_1(U_2))$ is bijective [@tamagawa1997, Theorem (0.4), p. 137]. Tamagawa deduces it from the relative form and [Pop's theorem](pop-mochizuki-finitely-generated-fields.md) that $G_k$ determines $k$ [@tamagawa1997, §6, p. 183]. This works because $\pi_1(U \otimes_k \bar k)$ is the largest closed normal subgroup of $\pi_1(U)$ that is topologically finitely generated [@tamagawa1997, Proposition (3.2), p. 156]. Again the precise forms, Theorems (6.1) and (6.3), need the hypotheses on only one of the curves [@tamagawa1997, §6, pp. 182–183]. In terms of the outer Galois representation, $\mathrm{Aut}_k(U)$ maps isomorphically onto the centralizer of the image of $G_k$ in $\mathrm{Out}(\pi_1(U \otimes_k \bar k))$ [@tamagawa1997, Remark (7.3) (i), p. 189].

**Decomposition groups from sections.** Uchida, following Neukirch, found the decomposition groups in $G_{k(X)}$ through Brauer groups. For fundamental groups this fails at the points of $U$, where the inertia group is trivial, the decomposition group is $\widehat{\mathbb{Z}}$ and the relevant $H^2$ vanishes [@tamagawa1997, Introduction, p. 138]. Tamagawa uses sections instead [@tamagawa1997, §2, pp. 146–148].

- Let $\Pi = \pi_1(U)$ and $\bar\Pi = \pi_1(U \otimes_k k^{\mathrm{sep}})$.
- Let $\Sigma$ be the set of closed points of the normalization of $X$ in the universal covering of $U$. It includes the points above $S$.
- A *section* over an open subgroup $G \subseteq G_k$ is a continuous homomorphism $s : G \to \Pi$ lifting the inclusion of $G$. It is *geometric* if $s(G)$ lies in the decomposition group $D_v$ of some $v \in \Sigma$ [@tamagawa1997, Definition (2.3), p. 148]. Since $v$ may lie above $S$, cuspidal sections count as geometric.

Suppose that $k$ is finite or a finite extension of $\mathbb{Q}_p$, that $(g, n) \neq (0, 0)$, and that $(g, n) \neq (0, 1), (0, 2)$ if $\mathrm{char}\, k = 0$ or the tame group is used. Alternatively, suppose that $k$ is finitely generated over $\mathbb{Q}$ and $\bar\Pi$ is not abelian. Then the following hold [@tamagawa1997, Corollary (2.10), pp. 154–155].

- The map $v \mapsto D_v$ is injective on $\Sigma$. Each $D_v$ is generated by the images of the geometric sections in one class of an equivalence relation. The relation compares two sections through cohomology classes with values in the Tate modules of the Jacobians of the coverings of $X$ [@tamagawa1997, Definitions (2.5) and (2.7), pp. 149–150].
- A section $s : G \to \Pi$ is geometric exactly when $X_H(L) \neq \emptyset$ for every open subgroup $H \subseteq \Pi$ containing $s(G)$. Here $L = \bar k^G$, and $X_H$ is the smooth compactification of the covering of $U$ that corresponds to $H$ [@tamagawa1997, Proposition (2.8) (iv), p. 152].

Over fields finitely generated over $\mathbb{Q}$, the second statement rests on Faltings' theorem. It makes $Y(k)$ compact in the discrete topology for every proper curve $Y$ of genus at least $2$ [@tamagawa1997, §2, p. 151].

Over a finite field, whether $X_H(L)$ is empty can be read off from $\Pi$ by the Lefschetz trace formula. This formula gives
$$|X(L)| = 1 + |L| - \mathrm{tr}\big(\varphi_L \mid ((\bar\Pi/I(\Pi))^{\mathrm{ab}})^{p'}\big),$$
where $\varphi_L$ is the $|L|$-th power Frobenius element and $I(\Pi)$ is the kernel of $\Pi \to \pi_1(X)$. The Hurwitz formula recovers $I(\Pi)$ from $\Pi$ [@tamagawa1997, Propositions (3.7) and (3.8), pp. 161–162]. So over finite fields $\Pi$ determines the decomposition groups [@tamagawa1997, Introduction, p. 139]. Tamagawa states the simplest case, a proper hyperbolic curve, as his Proposition (0.7). Over fields finitely generated over $\mathbb{Q}$, Tamagawa calls detecting these rational points the most essential problem, "still open" there [@tamagawa1997, §2, p. 155]. He suggests that for finitely generated $k$ every section might be geometric [@tamagawa1997, Remark (2.12), p. 155]. This is a form of the surjectivity in the [section conjecture](section-conjecture.md), with cuspidal sections counted as geometric. Proposition (2.8) (iv) is the neighbourhood criterion that the section conjecture entry cites through Saïdi.

**Other invariants over finite fields.** The group $\Pi$ determines the following [@tamagawa1997, §3, pp. 156–161]:

- $p$ (Proposition (3.1));
- the subgroup $\bar\Pi$ (Proposition (3.3));
- $|k|$ and the Frobenius element (Proposition (3.4));
- $(g, n)$, from the Frobenius weights. Let $P$ be the characteristic polynomial of the $|k|$-th power Frobenius element $\varphi_k$ on $(\bar\Pi^{\mathrm{ab}})^{p'}$. If $n > 0$, then $g$ is half the number of roots of absolute value $|k|^{1/2}$, and $n - 1$ is the number of roots of absolute value $|k|$, counted with multiplicity (Proposition (3.5)).

*Example, checked here.* Let $U = \mathbb{P}^1 - \{0, 1, \infty\}$ over $\mathbb{F}_q$, with the tame fundamental group.
- Since $g = 0$, the Tate module $T(J_X)$ of the Jacobian vanishes. The exact sequence $0 \to \widehat{\mathbb{Z}}^{p'}(1) \to \mathbb{Z}[S(\bar k)] \otimes \widehat{\mathbb{Z}}^{p'}(1) \to \bar\Pi^{\mathrm{ab}} \to T(J_X) \to 0$ [@tamagawa1997, Remark (1.3), (1-4), p. 143] therefore makes $\bar\Pi^{\mathrm{ab}}$ the quotient of $\widehat{\mathbb{Z}}^{p'}(1)^3$ by a copy of $\widehat{\mathbb{Z}}^{p'}(1)$. Here the three cusps are rational, so $G_k$ permutes none of them.
- This quotient is free of rank $2$ [@tamagawa1997, Corollary (1.2), p. 143]. Since $\varphi_k$ acts on $\widehat{\mathbb{Z}}^{p'}(1)$ as multiplication by $q$, it follows that $P(T) = (T - q)^2$.
- Proposition (3.5) then gives $g = 0$ and $n = 2 + 1 = 3$, and the root $q$ gives $|k|$.

**From decomposition groups to the curve.** Let $\mathcal{F} : \Pi_1 \to \Pi_2$ be an isomorphism, over finite fields. By the above, it induces a bijection $f$ of closed points with $\mathcal{F}(D_v) = D_{f(v)}$ [@tamagawa1997, proof of Theorem (4.3), p. 165]. Then the multiplicative group is recovered [@tamagawa1997, pp. 165–166].

- Let $K$ be the function field and $K_v$ its completion at $v$. Local class field theory identifies the preimage of the powers of Frobenius under $D_v^{\mathrm{ab}} \to G_k$. It is $\mathbb{Z}$ at points of $U$, and $K_v^\times$ at points of $S$, or $K_v^\times/(1 + \mathfrak{m}_v)$ for the tame group.
- Global class field theory recovers $K^\times$ as the kernel of the map from the restricted product of these groups to $\Pi^{\mathrm{ab}}$.
- This is the first point in the proof where $n > 0$ is used. For a proper curve, the same construction gives only $K^\times/k^\times$.

Doing this on every open subgroup gives an isomorphism of multiplicative monoids between the function fields of the universal coverings [@tamagawa1997, Corollary (4.5), p. 166].

The main difficulty is to show that this isomorphism is additive [@tamagawa1997, Claim (4.6), p. 166]. Uchida used reductions at infinitely many points. Here the reduction is recovered only at the finitely many points of $S$ [@tamagawa1997, Introduction, p. 139]. Tamagawa proves the following [@tamagawa1997, Lemma (4.7), pp. 167–168]. Let $X_1, X_2$ be proper smooth connected curves over algebraically closed fields $k_1, k_2$, with function fields $K_1, K_2$. Let $F : K_1 \to K_2$ be an isomorphism of multiplicative monoids, and $f : X_1(k_1) \to X_2(k_2)$ a bijection carrying a subset $S_1$ onto $S_2$. Suppose that:

- $\mathrm{ord}_{f(P)} \circ F = \mathrm{ord}_P$ for every point $P$;
- $F(1 + \mathfrak{m}_P) = 1 + \mathfrak{m}_{f(P)}$ for every $P \in S_1$;
- $|S_1| \ge 3$.

Then $F$ is additive. The proof uses *minimal* elements, those $x \in K^\times$ whose polar divisor $D$ has $\dim H^0(X, \mathcal{O}(D)) = 2$. These generate $K^\times$ multiplicatively [@tamagawa1997, Definition (4.8) and Lemma (4.13), pp. 168–170]. Tamagawa applies the lemma to coverings with at least three points at infinity [@tamagawa1997, p. 168].

**From finite fields to fields finitely generated over $\mathbb{Q}$.** Tamagawa proves Theorem (6.3) by reducing modulo primes of good reduction and applying Theorem (4.3) [@tamagawa1997, §6, pp. 185–187].

- At a prime $\mathfrak{p}$, the decomposition group is the absolute Galois group of the henselization $k_{\mathfrak{p}}^h$. Its preimage in $\pi_1(U_i)$ is $\pi_1(U_i \otimes_k k_{\mathfrak{p}}^h)$.
- To pass to the special fibre, he proves a criterion for good reduction. Let $X$ be a proper smooth curve over the fraction field of a discrete valuation ring, and $D$ a relatively étale divisor with $U = X - D$ hyperbolic. Then $(X, D)$ has good reduction exactly when inertia acts trivially on $\pi_1(U \otimes_K K^{\mathrm{sep}})^l$ up to inner automorphisms, for some prime $l$ different from the residue characteristic, or equivalently for all of them [@tamagawa1997, Theorem (5.3), p. 177]. For $D$ empty, this is Oda's theorem [@tamagawa1997, Introduction, p. 140].
- He then recovers the tame fundamental group of the special fibre as a quotient of $\pi_1^{\mathrm{tame}}(U)$ [@tamagawa1997, Theorem (5.7), pp. 181–182].
- For $k$ a number field, Theorem (4.3) at these primes, together with the Weil pairing and a theorem of Chevalley, shows that $\mathcal{F}$ comes from an isomorphism over $k$ [@tamagawa1997, Claim (6.8) and pp. 186–187]. For general $k$, he argues in the same way at closed points of a smooth model of $k$ over $\mathbb{Q}$, and does not need §5 [@tamagawa1997, p. 187].

The hypothesis $n > 0$ enters §6 only through Theorem (4.3) [@tamagawa1997, Remark (6.5), p. 183].

**Consequences.**
- *Profinite free groups.* Let $\mathcal{C}$ be a full class of finite groups containing $\mathbb{Z}/l\mathbb{Z}$ for every prime $l$. Then for $r \ge 2$, the outer automorphism group of the free pro-$\mathcal{C}$ group of rank $r$ has trivial centre. Tamagawa proves this with $U = \mathbb{P}^1 - \mathrm{Spec}\, L$, for a field $L$ of degree $r + 1$ over a field $k$ finitely generated over $\mathbb{Q}$ with $\mathrm{Aut}(L/k) = 1$ [@tamagawa1997, Theorem (7.4), p. 189].
- *Pop's theorem for curves.* For $k$ finitely generated over $\mathbb{Q}$ and proper smooth geometrically connected curves $X_1, X_2$ over $k$, the $k$-isomorphisms $\mathrm{Spec}\, k(X_1) \to \mathrm{Spec}\, k(X_2)$ correspond to the $G_k$-isomorphisms $G_{k(X_1)} \to G_{k(X_2)}$ modulo $\mathrm{Inn}(G_{\bar k(X_2)})$. Tamagawa reproves this from Theorem (6.3), using Nakamura's characterization of inertia groups [@tamagawa1997, §7 C, pp. 189–192]. Mochizuki's relative form in [Pop's theorem](pop-mochizuki-finitely-generated-fields.md) contains it as a special case.

**Later work.** Tamagawa reports that Mochizuki then gave two proofs of the conjecture over fields finitely generated over $\mathbb{Q}$ for all hyperbolic curves, not only affine ones [@tamagawa1997, Notes (i), p. 192].
- The first derives it from a logarithmic Grothendieck conjecture for stable curves over finite fields, which Mochizuki deduced from Theorem (0.5).
- The second derives it from a pro-$p$ Grothendieck conjecture over $p$-adic local fields. Mochizuki proved that by $p$-adic Hodge theory, without Tamagawa's results.

[Mochizuki's Hom theorem](mochizuki-hom-theorem-for-hyperbolic-curves.md), also proved by $p$-adic Hodge theory, contains the theorem over fields finitely generated over $\mathbb{Q}$ for all hyperbolic curves. It holds only over sub-$p$-adic fields, which have characteristic $0$, so it does not cover the theorems over finite fields. Tamagawa's paper leaves open the case $n = 0$ over finite fields; [Mochizuki's proper-case theorem](mochizuki-grothendieck-conjecture-proper-curves-finite-fields.md) settles it for the full fundamental group [@mochizuki2007cuspidal, Theorem 3.2, p. 86]. Saïdi–Tamagawa's theorem treats both proper and affine hyperbolic curves with the geometric group replaced by its maximal pro-prime-to-$p$ quotient: see [prime-to-$p$ anabelian geometry over finite fields](prime-to-p-anabelian-curves-over-finite-fields.md) [@saiditamagawa2009, Theorem 1, p. 137]. Over fields finitely generated over $\mathbb{F}_p$, Stix proved the theorem up to Frobenius twists when one of the two curves is not isotrivial, first for affine curves with tame fundamental groups and then for all hyperbolic curves [@stix2002affine, Theorem 3.2, p. 5], [@stix2002thesis, Theorem 5.1.1, p. 71]. See [the Grothendieck conjecture in characteristic $p$](grothendieck-conjecture-over-finitely-generated-fields-of-characteristic-p.md).
