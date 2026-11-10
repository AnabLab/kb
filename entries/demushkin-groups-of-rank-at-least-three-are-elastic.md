---
title: Demushkin groups of rank at least 3 are elastic
kind: theorem
summary: 'In a Demushkin group, closed subgroups of infinite index have $H^2 = 0$, so finitely generated ones are free. In rank $\ge 3$, every nontrivial finitely generated closed normal subgroup of an open subgroup is open. So $G_K(p)$ is elastic when $\zeta_p \in K$.'
tags: [pro-p-groups, galois-groups, galois-cohomology]
edges:
  - {to: demushkin-group, label: uses, note: "the definition, the abelianization, and Serre's theorem that open subgroups are Demushkin groups with the index formula"}
  - {to: maximal-pro-p-galois-groups-of-p-adic-fields, label: uses, note: "only for Corollary 1, that $G_K(p)$ is a Demushkin group of rank $[K : \\mathbb{Q}_p] + 2$ when $\\zeta_p \\in K$"}
  - {to: rank-two-demushkin-groups-inside-their-automorphism-groups, label: uses, note: "only part 1(b), for the example showing that part 2 fails in rank $2$"}
  - {to: demushkin-groups-inside-their-automorphism-groups, label: addresses, note: "Corollary 2: for $D$ of rank at least $3$, a closed normal subgroup $N \\cong D$ of $\\mathrm{Aut}(D)$ other than $D$ meets $D$ either in a subgroup open in both, with $ND/D$ a nontrivial finite normal $p$-subgroup of $\\mathrm{Out}(D)$, or in a subgroup of infinite index in both that is not finitely generated. It is a reduction, not an answer."}
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: analogous-to, note: "The reduction there uses Mochizuki's elasticity of $G_K$ in the same way that Corollary 2 uses part 2 here."}
---

**Setting.** Let $p$ be a prime and $G$ a [Demushkin group](demushkin-group.md) of rank $n$. Cohomology is continuous cochain cohomology with coefficients $\mathbb{Z}/p$ and trivial action, written $H^i(B)$ for a profinite group $B$, so $H^1(B) = \mathrm{Hom}(B, \mathbb{Z}/p)$. For $a, b \in H^1(B)$ the cup product $a \cup b$ is the class of the $2$-cocycle $(x, y) \mapsto a(x)b(y)$, and the coboundary of a continuous map $\gamma : B \to \mathbb{Z}/p$ is $(x, y) \mapsto \gamma(x) + \gamma(y) - \gamma(xy)$. Following Mochizuki, a profinite group is *elastic* if every topologically finitely generated closed normal subgroup of an open subgroup is trivial or of finite index [@mochizuki2012, Definition 1.1 (ii), p. 10]. The inputs are these.

- For a pro-$p$ group $B$, $H^q(B)$ is the direct limit of the $H^q(B/B_0)$ over the open normal subgroups $B_0$ of $B$ [@serre1963, §2, p. 145].
- Elements $x_1, \dots, x_m$ generate a pro-$p$ group $B$ topologically if and only if every $f \in H^1(B)$ vanishing on all of them is zero. So $B$ is a quotient of the free pro-$p$ group $F(m)$ if and only if $\dim H^1(B) \le m$ [@serre1963, 2.1, p. 145]. In particular $H^1(B) \ne 0$ if $B \ne 1$.
- $B \cong F(m)$ if and only if $H^2(B) = 0$ and $\dim H^1(B) = m$ [@serre1963, 2.2, p. 146].
- $G^{\mathrm{ab}} \cong \mathbb{Z}_p^n$ or $\mathbb{Z}/q \times \mathbb{Z}_p^{n-1}$ [@serre1963, §3 b, p. 146].
- $G$ is infinite exactly when $n \ge 2$ [@serre1963, §9, p. 153]. Then every open subgroup $U$ of $G$ is a Demushkin group, with $n(U) - 2 = (G : U)(n - 2)$ [@serre1963, 9.2, pp. 153–154].

**Theorem.** This is proved here.

1. Let $n \ge 2$. Every closed subgroup $B$ of $G$ of infinite index has $H^2(B) = 0$. If $B$ is also topologically finitely generated, it is a free pro-$p$ group of rank $\dim H^1(B)$.
2. Let $n \ge 3$. Then $G$ is elastic: if $U \subseteq G$ is open and $H \ne 1$ is a topologically finitely generated closed normal subgroup of $U$, then $H$ is open in $G$.
3. Let $n \ge 3$. A nontrivial closed normal subgroup of an open subgroup of $G$ that has infinite index in $G$ is not topologically finitely generated.

Part 3 is part 2 restated. Part 2 fails in rank $2$. By [the rank-two entry](rank-two-demushkin-groups-inside-their-automorphism-groups.md), part 1(b), the group $D_U = \mathbb{Z}_p \rtimes U$ there is a Demushkin group of rank $2$, and its translation subgroup $\{(a, 1)\} \cong \mathbb{Z}_p$ is normal, finitely generated and of infinite index, with quotient $U \cong \mathbb{Z}_p$. The proof below uses $n \ge 3$ only through the index formula, in Steps 1 and 3.

No novelty is claimed. Statements of this kind may well be in the literature, but no source stating them was opened, so they are proved here from the inputs above.

**Corollary 1 ($p$-adic fields).** Let $K/\mathbb{Q}_p$ be finite and contain a primitive $p$-th root of unity, and let $G_K(p)$ be the Galois group of the maximal $p$-extension of $K$. It is a Demushkin group of rank $[K : \mathbb{Q}_p] + 2 \ge 3$ ([maximal pro-$p$ Galois groups of $p$-adic fields](maximal-pro-p-galois-groups-of-p-adic-fields.md)). So $G_K(p)$ is elastic, and its topologically finitely generated closed subgroups of infinite index are free pro-$p$ groups.

**Corollary 2 (Tsujimura's question).** This is proved here. Let $D$ be a Demushkin group of rank $n \ge 3$ with trivial centre, identified with $\mathrm{Inn}(D)$ inside $A = \mathrm{Aut}(D)$, as in [the problem](demushkin-groups-inside-their-automorphism-groups.md). Let $N \ne D$ be a closed normal subgroup of $A$ isomorphic to $D$, and put $M = N \cap D$. Then $M \ne 1$, and exactly one of the following holds.

- (a) $M$ is open in both $D$ and $N$, with $(D : M) = (N : M) > 1$. Then $ND/D \cong N/M$ is a nontrivial finite normal $p$-subgroup of $\mathrm{Out}(D) = A/D$.
- (b) $M$ has infinite index in both $D$ and $N$, and is not topologically finitely generated.

So to show that $D$ is the only closed normal copy of itself in $A$, it is enough to exclude (a) and (b). If $\mathrm{Out}(D)$ has no nontrivial finite normal $p$-subgroup, (a) cannot occur.

**Proof of part 1.**

*Lemma A.* Let $U$ be a Demushkin group and $V \subsetneq U$ an open subgroup. Then restriction $H^2(U) \to H^2(V)$ is zero.

*Proof.* The core $V_0$ of $V$ in $U$ is open and normal in $U$. In the finite $p$-group $U/V_0$, the proper subgroup $V/V_0$ lies in a maximal subgroup, which is normal of index $p$. So $V \subseteq U_1 = \ker f$ for some nonzero $f \in H^1(U)$. As the cup product on $H^1(U)$ is nondegenerate and $\dim H^2(U) = 1$, there is $h \in H^1(U)$ such that $f \cup h$ spans $H^2(U)$. Its restriction to $U_1$ is $f|_{U_1} \cup h|_{U_1} = 0$. So restriction to $U_1$ is zero, and so is restriction to $V$. $\square$

Now let $B \subseteq G$ be closed of infinite index, and $z \in H^2(B)$. By the direct limit description, $z$ is inflated from $H^2(B/B_0)$ for some open normal subgroup $B_0$ of $B$. In the subspace topology, $B_0$ contains $B \cap U$ for some open normal subgroup $U$ of $G$, so after inflating further, $z$ is the inflation of some $x \in H^2(B/(B \cap U))$. Put $V = BU$, an open subgroup of $G$. Inclusion induces an isomorphism $B/(B \cap U) \to V/U$, and the composite $B \to V \to V/U$ equals $B \to B/(B \cap U) \to V/U$. So if $y \in H^2(V)$ is the inflation of the class corresponding to $x$ in $H^2(V/U)$, then $z$ is the restriction of $y$ to $B$.

As $B$ is closed, it is the intersection of the open subgroups $BU'$, for $U' \subseteq U$ open and normal in $G$. As $B$ is not open, $B \ne V$, so some $V' = BU'$ satisfies $B \subseteq V' \subsetneq V$. Since $n \ge 2$, $V$ is a Demushkin group, and Lemma A shows that $y$ restricts to $0$ on $V'$. Hence $z = 0$, because $B \subseteq V'$. So $H^2(B) = 0$.

If $B$ is topologically generated by $m$ elements, then $\dim H^1(B) \le m$ by the generation criterion, and $B$ is free of rank $\dim H^1(B)$ by Serre's criterion. $\square$

**Proof of part 2.** The open subgroup $U$ is a Demushkin group with $n(U) - 2 = (G : U)(n - 2) \ge 1$, and $H$ is open in $G$ if it is open in $U$. So we may replace $G$ by $U$, which still has rank at least $3$, and assume that $H$ is normal in $G$. Suppose, for a contradiction, that $H$ has infinite index. Put $r = \dim H^1(H)$. Then $r \ge 1$ as $H \ne 1$, and $r$ is finite as $H$ is topologically finitely generated, so $H$ is topologically generated by $r$ elements.

*Step 1: an element of infinite order modulo $H$.* The open subgroups $HU'$, for $U'$ open and normal in $G$, have intersection $H$. If their indices were bounded, choose $U_0$ with $(G : HU_0)$ largest. For open normal $U' \subseteq U_0$, $HU' \subseteq HU_0$ forces $HU' = HU_0$. These $U'$ are cofinal among all open normal subgroups, so $H = HU_0$ would be open. So there is an open $V \supseteq H$ with $(G : V) \ge r$, and then $n(V) - 1 = (G : V)(n - 2) + 1 \ge r + 1$, using $n \ge 3$. By the description of the abelianization, applied to the Demushkin group $V$, the $\mathbb{Z}_p$-module $V^{\mathrm{ab}}$ has rank at least $n(V) - 1$. The image of $H$ in $V^{\mathrm{ab}}$ is a quotient of $H^{\mathrm{ab}}$, which is generated by $r$ elements, so it has rank at most $r$. So $V^{\mathrm{ab}}$ modulo the image of $H$ has positive rank, and some $v \in V$ maps to an element of infinite order in it. Then $v^m \notin H$ for every $m \ge 1$.

Let $C$ be the closed subgroup generated by $v$. It is procyclic and pro-$p$, and infinite since no power of $v$ is $1$, so $C \cong \mathbb{Z}_p$. Its nontrivial closed subgroups contain powers of $v$, so $C \cap H = 1$. Hence $W = HC$ is a closed subgroup with $W = H \rtimes C$ and $W/H \cong \mathbb{Z}_p$. For $k \ge 0$ let $C_k$ be the closed subgroup generated by $v^{p^k}$, and put $W_k = HC_k$. Then $(W : W_k) = (C : C_k) = p^k$.

*Step 2: a bound on $H^1$.* A homomorphism $W_k \to \mathbb{Z}/p$ that vanishes on $H$ factors through $W_k/H \cong C_k \cong \mathbb{Z}_p$, so the kernel of restriction $H^1(W_k) \to H^1(H)$ has dimension $1$. Hence $\dim H^1(W_k) \le r + 1$ for every $k$.

*Step 3: $W$ is not open.* If $W$ were open, each $W_k$ would be open with $(G : W_k) = p^k(G : W)$, and $n(W_k) - 2 = p^k (G : W)(n - 2) \ge p^k$, using $n \ge 3$. For $p^k > r - 1$ this contradicts Step 2.

*Step 4: $W$ does not have infinite index.* Suppose $W$ has infinite index in $G$. The group $C$ acts on the finite set $H^1(H)$ by $(c \cdot \psi)(h) = \psi(c^{-1}hc)$, which is well defined as $H$ is normal. The kernel of this action is the intersection, over $\psi \in H^1(H)$ and $h \in H$, of the closed sets $\{c : \psi(c^{-1}hc) = \psi(h)\}$, so it is a closed subgroup of finite index, hence open, and it contains some $C_k$. Replace $v$ by $v^{p^k}$, $C$ by $C_k$ and $W$ by $W_k$. Then still $W = H \rtimes C$ with $C \cong \mathbb{Z}_p$, $W$ still has infinite index in $G$, and now $C$ acts trivially on $H^1(H)$. By part 1, $H^2(W) = 0$.

Let $t : W \to W/H \cong C \to \mathbb{Z}/p$ be the homomorphism with $t(H) = 0$ and $t(v) = 1$. Choose $\varphi \in H^1(H)$ nonzero, and define $\tilde\varphi : W \to \mathbb{Z}/p$ by $\tilde\varphi(hc) = \varphi(h)$ for $h \in H$, $c \in C$. It is continuous, because multiplication $H \times C \to W$ is a continuous bijection of compact Hausdorff spaces, hence a homeomorphism. It is a homomorphism, because $(hc)(h'c') = h(ch'c^{-1})\,cc'$ and $\varphi(ch'c^{-1}) = \varphi(h')$, as $C$ fixes $\varphi$.

Since $H^2(W) = 0$, $t \cup \tilde\varphi = 0$, so there is a continuous $\gamma : W \to \mathbb{Z}/p$ with
$$t(x)\tilde\varphi(y) = \gamma(x) + \gamma(y) - \gamma(xy) \qquad \text{for all } x, y \in W.$$
For $x, y \in H$ the left side is $0$, so $\psi = \gamma|_H$ lies in $H^1(H)$. Let $h \in H$. Taking $(x, y) = (v, h)$ gives $\varphi(h) = \gamma(v) + \gamma(h) - \gamma(vh)$. Taking $(x, y) = (vhv^{-1}, v)$, and using $vhv^{-1} \in H$ and $(vhv^{-1})v = vh$, gives $0 = \gamma(vhv^{-1}) + \gamma(v) - \gamma(vh)$. Subtracting, $\varphi(h) = \psi(h) - \psi(vhv^{-1})$. But $\psi(vhv^{-1}) = (v^{-1} \cdot \psi)(h) = \psi(h)$, since $C$ acts trivially on $H^1(H)$. So $\varphi = 0$, a contradiction.

Steps 3 and 4 exclude both possibilities for $W$, so $H$ has finite index in $G$, and is open, being closed. $\square$

**Proof of Corollary 2.** Both $N$ and $D$ are normal in $A$, so $[N, D] \subseteq M$. If $M = 1$, every $\alpha \in N$ commutes with every inner automorphism, so $\mathrm{inn}(\alpha(d)) = \alpha \circ \mathrm{inn}(d) \circ \alpha^{-1} = \mathrm{inn}(d)$ and $\alpha(d) = d$ for all $d \in D$, as $D$ has trivial centre. Then $N = 1$, which is impossible. So $M \ne 1$.

$N$ is a Demushkin group of rank $n$, and $M$ is a closed normal subgroup of both $D$ and $N$. If $M$ is open in $D$, it is a Demushkin group, so $H^2(M) \ne 0$, and part 1, applied in $N$, shows that $M$ is open in $N$. By symmetry, $M$ is open in $D$ if and only if it is open in $N$.

If $M$ is open in both, then $n(M) - 2 = (D : M)(n - 2) = (N : M)(n - 2)$, and $n \ge 3$ gives $(D : M) = (N : M)$. If this index were $1$, then $D = M = N$, contrary to assumption. The product $ND$ is a closed normal subgroup of $A$, and $ND/D \cong N/M$ is a group of order $(N : M)$, a power of $p$. This is (a).

Otherwise $M$ has infinite index in both. If it were topologically finitely generated, part 2 would make it open in $D$, as it is a nontrivial closed normal subgroup of $D$. This is (b). $\square$
