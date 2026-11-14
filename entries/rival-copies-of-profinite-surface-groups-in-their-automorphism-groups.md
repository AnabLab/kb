---
title: Rival copies of a profinite surface group inside its automorphism group
kind: theorem
summary: 'For the profinite surface group $\Pi$ of genus $g \ge 3$, a closed normal $N \ne \Pi$ in $\mathrm{Aut}(\Pi)$ with $N \cong \Pi$ meets $\Pi$ in an infinitely generated subgroup of infinite index in both. For $g = 2$ an open meeting needs index $2$ and a central hyperelliptic class.'
tags: [fundamental-groups, group-theory]
edges:
  - {to: profinite-surface-groups-inside-their-automorphism-groups, label: addresses, note: "Excludes rival copies that meet $\\Pi$ openly when $g \\ge 3$, and restricts them when $g = 2$. Rival copies meeting $\\Pi$ in an infinitely generated subgroup of infinite index are not excluded."}
  - {to: outer-automorphism-groups-of-profinite-surface-groups-are-slim, label: uses, note: "parts 3 and 4 there, for parts 3 and 4 here"}
  - {to: geometric-fundamental-groups-of-curves, label: uses, note: "open subgroups of $\\Pi$ are profinite surface groups, and the genus is read off from the abelianization"}
  - {to: rival-copies-of-p-adic-galois-groups-in-their-automorphism-groups, label: analogous-to, note: "The same dichotomy for $G_K$, where case (a) is not excluded."}
  - {to: demushkin-groups-of-rank-at-least-three-are-elastic, label: analogous-to, note: "Its Corollary 2 is the same dichotomy for Demushkin groups of rank at least $3$."}
---

**Setting.** Let $g \ge 2$, and let $\Pi = \widehat{\Gamma}_{g,0}$ be the profinite surface group of genus $g$, the profinite group on $x_1, y_1, \dots, x_g, y_g$ with the single relation $[x_1, y_1] \cdots [x_g, y_g] = 1$ ([geometric fundamental groups of curves](geometric-fundamental-groups-of-curves.md)). Two properties are taken from Minamide, Sawada and Tsujimura, whose Theorem 3.13 applies to $\Pi$ with $\mathcal{C}$ the class of all finite groups, as recorded in [the slimness entry](outer-automorphism-groups-of-profinite-surface-groups-are-slim.md), Setting.

- *Centralizers.* $\Pi$ has trivial centre, and every nontrivial closed normal subgroup of $\Pi$ has trivial centralizer in $\Pi$ [@minamidesawadatsujimura2022, Theorem 3.13, p. 21; Definition 1.8, p. 9; Proposition 1.7, p. 8].
- *Elasticity.* Every topologically finitely generated closed normal subgroup of an open subgroup of $\Pi$ is trivial or open in $\Pi$. This is their sn-elasticity for $1$-subnormal, that is normal, subgroups, which they note is elasticity in Mochizuki's sense [@minamidesawadatsujimura2022, Theorem 3.13, p. 21; Definition 2.1 (i)–(ii) and Remark 2.1.1, p. 14].

As $\Pi$ is centre-free and topologically finitely generated, conjugation identifies $\Pi$ with the closed normal subgroup $\mathrm{Inn}(\Pi)$ of the profinite group $A = \mathrm{Aut}(\Pi)$, with $A/\Pi = \mathrm{Out}(\Pi)$ [@mochizuki2012, §0, p. 9]. Call a closed normal subgroup $N$ of $A$ a *rival copy* of $\Pi$ if $N \cong \Pi$ and $N \ne \Pi$. [Tsujimura's question](profinite-surface-groups-inside-their-automorphism-groups.md), in its stronger form, asks whether rival copies exist.

**Lemma 1 (open subgroups).** This is checked here. Every open subgroup $U \subseteq \Pi$ of index $m$ is isomorphic to $\widehat{\Gamma}_{h,0}$ with $h - 1 = m(g - 1)$. If $\widehat{\Gamma}_{h,0} \cong \widehat{\Gamma}_{h',0}$, then $h = h'$.

*Proof.* Let $X$ be a proper smooth connected curve of genus $g$ over $\bar{\mathbb{Q}}$, for instance the base change of a curve given by Poonen [@poonen2000hyperelliptic, Theorem 1, p. 1], and fix $\pi_1(X) \cong \Pi$ ([geometric fundamental groups of curves](geometric-fundamental-groups-of-curves.md), part 4). The open subgroup $U$ corresponds to a connected finite étale cover $f : Y \to X$ of degree $m$ with $\pi_1(Y) \cong U$. Then $Y$ is a proper smooth connected curve over $\bar{\mathbb{Q}}$, and Riemann–Hurwitz gives $2h - 2 = m(2g - 2)$ for its genus $h$, with no ramification term because $f$ is étale [@stacks2026, Section 53.12, tag 0C1B]. So $U \cong \widehat{\Gamma}_{h,0}$ by part 4 there. The abelianization of $\widehat{\Gamma}_{h,0}$ is $\widehat{\mathbb{Z}}^{2h}$ (consequence 2 there), and $\widehat{\mathbb{Z}}^{2h}/2 \cong \mathbb{F}_2^{2h}$ determines $h$. $\square$

**Lemma 2 (no nesting).** This is proved here. If $N$ is a closed normal subgroup of $A$ isomorphic to $\Pi$ with $N \subseteq \Pi$ or $\Pi \subseteq N$, then $N = \Pi$.

*Proof.* Suppose $N \subseteq \Pi$. Then $N$ is a nontrivial, topologically finitely generated, closed normal subgroup of $\Pi$, so it is open, of some index $m$, by elasticity. By Lemma 1, $N \cong \widehat{\Gamma}_{h,0}$ with $h - 1 = m(g - 1)$, and $N \cong \Pi$ gives $h = g$. As $g \ge 2$, $m = 1$. Suppose $\Pi \subseteq N$, and fix an isomorphism $\theta : N \to \Pi$. As $\Pi$ is normal in $A$, it is normal in $N$, so $\theta(\Pi)$ is a closed normal subgroup of $\Pi$ isomorphic to $\Pi$. The argument of the first case used only that $N$ is a nontrivial closed normal subgroup of $\Pi$ isomorphic to $\Pi$, so it applies to $\theta(\Pi)$ and shows that $\theta(\Pi)$ has index $1$. So $\theta(\Pi) = \Pi = \theta(N)$ and $N = \Pi$. $\square$

**Theorem.** This is proved here. Let $N$ be a rival copy of $\Pi$, and put $M = N \cap \Pi$.

1. *Common structure.* $M \ne 1$, and $M \ne N$, $M \ne \Pi$ by Lemma 2. Also $\alpha(M) = M$ for every $\alpha \in \mathrm{Aut}(\Pi)$. Moreover $[N, \Pi] \subseteq M$, so every element of $N$ is an automorphism of $\Pi$ inducing the identity on $\Pi/M$, and $N\Pi/M$ is the internal direct product of $\Pi/M$ and $N/M$.
2. *Dichotomy.* Exactly one of the following holds.
   - (a) $M$ is open in both $\Pi$ and $N$, and $(\Pi : M) = (N : M) \ge 2$. Then $N\Pi/\Pi \cong N/M$ is a nontrivial finite normal closed subgroup of $\mathrm{Out}(\Pi)$.
   - (b) $M$ has infinite index in both $\Pi$ and $N$, and is not topologically finitely generated.
3. *Genus at least $3$.* If $g \ge 3$, case (a) does not occur. So $\Pi$ is the only closed normal subgroup of $\mathrm{Aut}(\Pi)$ isomorphic to $\Pi$ exactly when no rival copy of type (b) exists.
4. *Genus $2$.* If $g = 2$ and case (a) occurs, then $(\Pi : M) = (N : M) = 2$, and $N\Pi/\Pi$ is a central subgroup of order $2$ of $\mathrm{Out}(\Pi)$. It is generated by the image of $\iota_*$, for every genus-$2$ curve $C$ over a number field with $\mathrm{Aut}(C_{\bar k}) = \{1, \iota\}$ and every isomorphism $\pi_1(C_{\bar k}) \cong \Pi$. So if, for one such $C$, the class of $\iota_*$ is not central in $\mathrm{Out}(\Pi)$, then case (a) does not occur in genus $2$.

**Proof of part 1.** Both $N$ and $\Pi$ are normal in $A$, so $M$ is normal in $A$ and $[N, \Pi] \subseteq N \cap \Pi = M$. For $\alpha \in A$ and $x \in \Pi$, $\alpha \circ \mathrm{inn}(x) \circ \alpha^{-1} = \mathrm{inn}(\alpha(x))$, so conjugation by $\alpha$ in $A$ restricts to $\alpha$ on $\Pi$, and $\alpha(M) = M$. For $n \in N$ and $x \in \Pi$, $nxn^{-1}x^{-1} \in M$, so the automorphism $n$ sends $x$ into $xM$.

If $M = 1$, then every $n \in N$ commutes with every $\mathrm{inn}(x)$, so $\mathrm{inn}(n(x)) = \mathrm{inn}(x)$ and $n(x) = x$ for all $x$, as $\Pi$ is centre-free. Then $N = 1$, which is impossible.

In $N\Pi/M$ the subgroups $\Pi/M$ and $N/M$ are normal, commute elementwise because $[N, \Pi] \subseteq M$, and generate. If $xM = nM$ with $x \in \Pi$ and $n \in N$, then $n^{-1}x \in M \subseteq \Pi$, so $n \in N \cap \Pi = M$. So $\Pi/M \cap N/M = 1$. $\square$

**Proof of part 2.** Fix an isomorphism $\theta : N \to \Pi$. First, $M$ is open in $\Pi$ if and only if it is open in $N$. Suppose $M$ is open in $\Pi$. By Lemma 1 it is topologically finitely generated. It is a nontrivial closed normal subgroup of $N$, since it is normal in $A$. So $\theta(M)$ is a nontrivial, topologically finitely generated, closed normal subgroup of $\Pi$, hence open by elasticity, and $M$ is open in $N$. The hypotheses are symmetric in $N$ and $\Pi$, both being closed normal subgroups of $A$ isomorphic to $\Pi$ with intersection $M$, so the converse holds too.

*If $M$ is open.* By Lemma 1, applied to $M \subseteq \Pi$ and to $\theta(M) \subseteq \Pi$, $M \cong \widehat{\Gamma}_{h,0}$ with $h - 1 = (\Pi : M)(g - 1) = (N : M)(g - 1)$. As $g \ge 2$, $(\Pi : M) = (N : M)$. If this index were $1$, then $N = M = \Pi$, contrary to assumption. The product $N\Pi$ is closed, as the image of the compact space $N \times \Pi$, and normal in $A$. The map $N/M \to N\Pi/\Pi$ is a continuous bijective homomorphism of compact Hausdorff groups, hence an isomorphism. So $N\Pi/\Pi$ is a closed normal subgroup of $A/\Pi = \mathrm{Out}(\Pi)$ of order $(N : M) \ge 2$. This is (a).

*If $M$ is not open.* Then it is open in neither group, so it has infinite index in both, as closed subgroups of finite index are open. If it were topologically finitely generated, elasticity would make it trivial or open in $\Pi$. Neither holds, by part 1 and the previous sentence. This is (b).

The cases exclude each other, as $M$ is open in (a) and of infinite index in (b). $\square$

**Proof of parts 3 and 4.** If $g \ge 3$, $\mathrm{Out}(\Pi)$ has no nontrivial finite normal closed subgroup ([the slimness entry](outer-automorphism-groups-of-profinite-surface-groups-are-slim.md), part 3), so (a) is impossible, and part 2 gives the equivalence in part 3. If $g = 2$, every nontrivial finite normal closed subgroup of $\mathrm{Out}(\Pi)$ has order $2$, is central, and is generated by the image of $\iota_*$ for every curve $C$ and isomorphism as stated (part 4 there). In case (a), $N\Pi/\Pi$ is such a subgroup, of order $(N : M) = (\Pi : M)$. $\square$

**What remains.**

- *Case (b).* Here $M$ is a closed normal subgroup of $\Pi$ of infinite index that is not topologically finitely generated and is preserved by every automorphism of $\Pi$. Such subgroups exist, for example the closed commutator subgroup, which is characteristic, of infinite index since $\Pi^{\mathrm{ab}} \cong \widehat{\mathbb{Z}}^{2g}$ is infinite, and not topologically finitely generated by elasticity. So part 1 alone does not exclude (b).
- *Genus $2$, case (a).* Part 4 reduces it to the question whether the class of the hyperelliptic involution is central in $\mathrm{Out}(\widehat{\Gamma}_{2,0})$. For each such curve $C$, $\iota$ is defined over some finite extension $L$ of the base field, so by part 1 of [the slimness entry](outer-automorphism-groups-of-profinite-surface-groups-are-slim.md) the class of $\iota_*$ commutes with the image of $G_L$ under the outer Galois representation. The question is about the rest of $\mathrm{Out}(\widehat{\Gamma}_{2,0})$, and it is not decided here. Case (a) in genus $2$ is nevertheless excluded, without deciding centrality, in [the genus-two entry](rival-copies-of-genus-two-profinite-surface-groups.md).
