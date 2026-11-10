---
title: Subgroups of Demushkin groups of rank at least 3
kind: theorem
summary: 'A Demushkin group of rank $n \ge 3$ is torsion-free with procyclic abelian subgroups, nontrivial normal subgroups of open subgroups have trivial centralizer, and no proper closed subgroup is isomorphic to it. In Tsujimura''s question a rival copy of $D$ meets $D$ but neither contains nor lies in it.'
tags: [pro-p-groups, galois-groups]
edges:
  - {to: demushkin-groups-inside-their-automorphism-groups, label: addresses, note: "For every Demushkin group $D$ of rank at least $3$, every $p$ and every $q$: $D$ is centre-free, and a closed normal subgroup $N \\cong D$ of $\\mathrm{Aut}(D)$ meets $D$, has injective conjugation $\\mathrm{Aut}(D) \\to \\mathrm{Aut}(N)$, and equals $D$ if $N \\subseteq D$ or $D \\subseteq N$. It is a reduction, not an answer."}
  - {to: demushkin-group, label: uses, note: "the definition, the abelianization, Serre's theorem that open subgroups are Demushkin groups with the index formula, and that $\\mathbb{Z}_p^2$ is a Demushkin group"}
  - {to: rank-two-demushkin-groups-inside-their-automorphism-groups, label: uses, note: "only part 1: the groups $\\mathbb{Z}_p \\rtimes U$ are Demushkin groups of rank $2$, used in case A of part 3, and they are the centre-free ones, used for the remarks on rank $2$"}
  - {to: lower-central-series-of-pro-p-surface-groups, label: analogous-to, note: "Its parts 3(a) and 3(c) prove centre-freeness and trivial centralizers of normal subgroups for $q = 0$ through the graded Lie algebra. Part 4 here proves them for every $q$ by a cohomological argument."}
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: analogous-to, note: "That entry proves the same reduction for $G_K$, using slimness, elasticity and local class field theory in place of parts 4 and 5 here."}
---

**Setting.** Let $p$ be a prime and $G$ a [Demushkin group](demushkin-group.md) of rank $n$. Cohomology has coefficients $\mathbb{Z}/p$ with trivial action, so $H^1(B) = \mathrm{Hom}(B, \mathbb{Z}/p)$ for a profinite group $B$. Restriction maps are ring homomorphisms for the cup product, and they commute with the Bockstein $\beta : H^1(B) \to H^2(B)$ of $0 \to \mathbb{Z}/p \to \mathbb{Z}/p^2 \to \mathbb{Z}/p \to 0$. The inputs on Demushkin groups are these.

- $G$ is infinite exactly when $n \ge 2$ [@serre1963, §9, p. 153]. Then every open subgroup $U$ of $G$ is a Demushkin group, with $n(U) - 2 = (G : U)(n - 2)$ [@serre1963, 9.2, pp. 153–154].
- $G^{\mathrm{ab}} \cong \mathbb{Z}_p^n$ or $\mathbb{Z}/q \times \mathbb{Z}_p^{n-1}$ [@serre1963, §3 b, p. 146].
- A family of elements generates a pro-$p$ group $B$ topologically if and only if every element of $H^1(B)$ vanishing on it is zero [@serre1963, 2.1, p. 145]. So $B$ is procyclic if and only if $\dim H^1(B) \le 1$.
- $\mathbb{Z}_p^2$ is a Demushkin group. Labute shows that the relation $x_1^q(x_1, x_2)\cdots(x_{n-1}, x_n)$ defines a Demushkin group for every even $n$ and every $q = p^g$ with $g \ge 1$ or $g = \infty$, where $p^\infty = 0$ [@labute1967, p. 106]. For $n = 2$ and $q = 0$ the relation is a commutator of the two generators, and the quotient is the abelianization $\mathbb{Z}_p^2$ of the free pro-$p$ group of rank $2$.

**Theorem.** This is proved here.

1. Let $n \ge 2$. Then $G$ is torsion-free, and every closed subgroup of $G$ that is a Demushkin group is open in $G$.
2. Let $n \ge 3$. Every abelian closed subgroup of $G$ is trivial or isomorphic to $\mathbb{Z}_p$. In particular $G$ has no closed subgroup isomorphic to $\mathbb{Z}_p^2$.
3. Let $n \ge 3$. No closed normal subgroup of $G$ is isomorphic to $\mathbb{Z}_p$, so $G$ has no nontrivial abelian closed normal subgroup.
4. Let $n \ge 3$. If $U \subseteq G$ is open and $M \ne 1$ is a closed normal subgroup of $U$, then the centralizer of $M$ in $G$ is trivial. In particular every open subgroup of $G$ has trivial centre.
5. Let $n \ge 3$. Every closed subgroup of $G$ isomorphic to $G$ is $G$ itself.

Parts 2–5 fail in rank $2$. The Demushkin group $\mathbb{Z}_p^2$ is abelian. The centre-free Demushkin groups of rank $2$ are the groups $D_U = \mathbb{Z}_p \rtimes U$ of [the rank-two entry](rank-two-demushkin-groups-inside-their-automorphism-groups.md), part 1, with $(a, c)(a', c') = (a + ca', cc')$. In $D_U$ the normal subgroup $\{(a, 1)\} \cong \mathbb{Z}_p$ is its own centralizer, and $(a, c) \mapsto (pa, c)$ is an isomorphism of $D_U$ onto its proper open subgroup $\{(pa, c)\}$.

**Corollary (Tsujimura's question).** This is proved here. Let $D$ be a Demushkin group of rank $n \ge 3$, for any $p$ and any $q$. By part 4, $D$ is centre-free, so $d \mapsto c_d$, $c_d(x) = dxd^{-1}$, identifies $D$ with a closed normal subgroup of $\mathrm{Aut}(D)$, as in [the problem](demushkin-groups-inside-their-automorphism-groups.md). Let $N$ be a closed normal subgroup of $\mathrm{Aut}(D)$ isomorphic to $D$. Then:

- (a) $N \cap D \ne 1$;
- (b) conjugation $\mathrm{Aut}(D) \to \mathrm{Aut}(N)$, $\alpha \mapsto (x \mapsto \alpha x\alpha^{-1})$, is injective;
- (c) if $N \subseteq D$ or $D \subseteq N$, then $N = D$.

So the centre-free hypothesis in Tsujimura's question holds automatically in rank at least $3$; together with [the rank-two case](rank-two-demushkin-groups-inside-their-automorphism-groups.md), the question concerns all Demushkin groups of rank at least $3$ and the groups $\mathbb{Z}_p \rtimes U$ of rank $2$. A closed normal copy $N \ne D$ of $D$ in rank at least $3$ would have to meet $D$ without containing it or lying in it. In rank $2$ and for odd $p$, such copies exist and contain $D$.

**Lemma 1.** Let $n \ge 2$, let $U \subseteq G$ be open and $V \subsetneq U$ an open subgroup. Then restriction $H^2(U) \to H^2(V)$ is zero.

*Proof.* The core of $V$ in $U$ is an open normal subgroup $V_0$ of $U$. In the finite $p$-group $U/V_0$, the proper subgroup $V/V_0$ lies in a maximal subgroup, which is normal of index $p$. So $V \subseteq U_1 \subsetneq U$ with $U_1$ open, normal and of index $p$, and $U_1 = \ker f$ for some nonzero $f \in H^1(U)$. Since $U$ is a Demushkin group, $H^2(U)$ has dimension $1$ and the cup product on $H^1(U)$ is nondegenerate, so there is $h \in H^1(U)$ with $f \cup h \ne 0$, and $f \cup h$ spans $H^2(U)$. Its restriction to $U_1$ is $f|_{U_1} \cup h|_{U_1} = 0$. So restriction $H^2(U) \to H^2(U_1)$ is zero, and so is its composite with restriction to $V$. $\square$

**Lemma 2.** Let $n \ge 2$ and let $B \subseteq G$ be a closed subgroup of infinite index. Then $a \cup b = 0$ and $\beta(a) = 0$ for all $a, b \in H^1(B)$.

*Proof.* First, finitely many $a_1, \dots, a_k \in H^1(B)$ extend to some open subgroup $U \supseteq B$. Each $\ker a_i$ is open in $B$, and $B$ carries the subspace topology, so there is an open normal subgroup $W$ of $G$ with $B \cap W \subseteq \ker a_i$ for all $i$. Then $U = BW$ is an open subgroup, and $\tilde a_i(bw) = a_i(b)$ is well defined, because $bw = b'w'$ gives $b'^{-1}b \in B \cap W$. It is a homomorphism, because $bwb'w' = bb' \cdot b'^{-1}wb' \cdot w'$ with $b'^{-1}wb' \in W$, and it is continuous, as it vanishes on $W$.

Second, restriction $H^2(U) \to H^2(B)$ is zero for every open $U \supseteq B$. As $B$ is closed, it is the intersection of the open subgroups containing it. Not all of them contain $U$, since $U$ has finite index and $B$ does not; so there is an open $W' \supseteq B$ with $U \not\subseteq W'$, and $V = U \cap W'$ is open with $B \subseteq V \subsetneq U$. Restriction from $U$ to $B$ factors through restriction from $U$ to $V$, which is zero by Lemma 1.

Now extend $a, b$ to $\tilde a, \tilde b \in H^1(U)$. Then $a \cup b$ and $\beta(a)$ are the restrictions of $\tilde a \cup \tilde b$ and $\beta(\tilde a)$, so they vanish. $\square$

**Proof of the theorem.**

*Part 1.* Suppose $G$ has a nontrivial element of finite order. A suitable power $x$ has order $p$, and $B = \langle x \rangle$ is closed of infinite index, as $G$ is infinite. Let $a : B \to \mathbb{Z}/p$ be an isomorphism. In the exact sequence $H^1(B, \mathbb{Z}/p^2) \to H^1(B) \xrightarrow{\beta} H^2(B)$, every homomorphism $B \to \mathbb{Z}/p^2$ takes values in $p\mathbb{Z}/p^2$, which maps to $0$ in $\mathbb{Z}/p$, so the first map is zero and $\beta$ is injective. So $\beta(a) \ne 0$, contradicting Lemma 2. Next, let $H \subseteq G$ be a closed subgroup that is a Demushkin group. Then $H^1(H) \ne 0$, since otherwise $H = 1$ by the generation criterion and $H^2(H) = 0$, and nondegeneracy gives $a, b \in H^1(H)$ with $a \cup b \ne 0$. By Lemma 2, $H$ has finite index, so it is open.

*Part 2.* Let $A \subseteq G$ be an abelian closed subgroup that is not procyclic. It is a $\mathbb{Z}_p$-module, torsion-free by part 1, and $\dim A/pA = \dim H^1(A) \ge 2$. Choose $a, b \in A$ with linearly independent images in $A/pA$, and let $B$ be the closure of the subgroup they generate. It is the image of $\mathbb{Z}_p^2$ under $(\lambda, \mu) \mapsto a^\lambda b^\mu$, so it is a finitely generated torsion-free $\mathbb{Z}_p$-module, hence free, and its rank is $\dim B/pB = 2$, since $B/pB \to A/pA$ has image of dimension $2$. So $B \cong \mathbb{Z}_p^2$, a Demushkin group of rank $2$. By part 1, $B$ is open in $G$, and the index formula gives $0 = (G : B)(n - 2)$, contradicting $n \ge 3$.

*Part 3.* Let $Z \subseteq G$ be a closed normal subgroup isomorphic to $\mathbb{Z}_p$, with topological generator $z$. Conjugation gives a continuous homomorphism $\kappa : G \to \mathrm{Aut}(Z) = \mathbb{Z}_p^\times$, $gzg^{-1} = z^{\kappa(g)}$, whose image is pro-$p$.

*Case A: $\kappa(G)$ is infinite.* The torsion subgroup of $\mathbb{Z}_p^\times$ is finite, so there is $g \in G$ with $w = \kappa(g)$ of infinite order. The map $\lambda \mapsto w^\lambda$ is injective on $\mathbb{Z}_p$, since its kernel is a closed subgroup of $\mathbb{Z}_p$ and $w$ has infinite order. Let $S$ be the closure of $\langle g \rangle$, the image of $\lambda \mapsto g^\lambda$. If $g^\lambda \in Z$, then $g^\lambda$ commutes with $z$, so $w^\lambda = \kappa(g^\lambda) = 1$ and $\lambda = 0$. Hence $\lambda \mapsto g^\lambda$ is injective, $S \cap Z = 1$, and $B = ZS$ is a closed subgroup, the semidirect product of $Z$ and $S \cong \mathbb{Z}_p$ with $g^\lambda zg^{-\lambda} = z^{w^\lambda}$. Let $U \subseteq \mathbb{Z}_p^\times$ be the closure of $\langle w \rangle$, an infinite procyclic pro-$p$ group, and $D_U = \mathbb{Z}_p \rtimes U$ with $(a, c)(a', c') = (a + ca', cc')$. Then $(a, w^\lambda) \mapsto z^ag^\lambda$ is a continuous bijective homomorphism $D_U \to B$, since $z^ag^\lambda z^{a'}g^\mu = z^{a + w^\lambda a'}g^{\lambda + \mu}$, hence an isomorphism. By [the rank-two entry](rank-two-demushkin-groups-inside-their-automorphism-groups.md), part 1(b), $D_U$ is a Demushkin group of rank $2$. By part 1, $B$ is open in $G$, and the index formula contradicts $n \ge 3$ as in part 2.

*Case B: $\kappa(G)$ is finite.* Then $C = \ker\kappa$ is open, so it is a Demushkin group of rank $n(C) = 2 + (G : C)(n - 2) \ge 3$, and $Z$ is central in $C$. So $C^{\mathrm{ab}}$ has $\mathbb{Z}_p$-rank at least $n(C) - 1 \ge 2$, while the image of $Z$ is procyclic. Hence the quotient of $C^{\mathrm{ab}}$ by the image of $Z$ is a finitely generated $\mathbb{Z}_p$-module of positive rank; choose $c \in C$ whose image in it has infinite order. The closure of the subgroup generated by $c$ and $z$ is abelian and nontrivial, so it is isomorphic to $\mathbb{Z}_p$ by part 2. Its nontrivial closed subgroup $Z$ has finite index $p^k$, so $c^{p^k} \in Z$, and the image of $c$ is killed by $p^k$, a contradiction.

Finally, a nontrivial abelian closed normal subgroup would be isomorphic to $\mathbb{Z}_p$ by part 2.

*Part 4.* First let $M \ne 1$ be a closed normal subgroup of $G$, and suppose that its centralizer $C$, a closed normal subgroup, is nontrivial. Take $1 \ne c \in C$ and $1 \ne m \in M$. They commute, so the closure of $\langle c, m\rangle$ is abelian and nontrivial, hence isomorphic to $\mathbb{Z}_p$ by part 2. In it, the closures of $\langle c \rangle$ and $\langle m \rangle$ are nontrivial closed subgroups, hence of finite index, so they meet nontrivially; they lie in $C$ and in $M$, so $C \cap M \ne 1$. Now $C \cap M$ is a closed normal subgroup of $G$, and it is abelian, as its elements lie in $M$ and centralize $M$. This contradicts part 3.

In general, $U$ is a Demushkin group of rank $2 + (G : U)(n - 2) \ge 3$, so by the first case the centralizer of $M$ in $U$ is trivial. So the centralizer of $M$ in $G$ meets $U$ trivially, hence injects into the finite set $G/U$, and it is trivial by part 1. Taking $M = U$ gives the last claim.

*Part 5.* Let $H \subseteq G$ be closed with $H \cong G$. Then $H$ is a Demushkin group, so it is open by part 1, and the index formula gives $n - 2 = (G : H)(n - 2)$. As $n \ge 3$, $H = G$. $\square$

**Proof of the corollary.** Write $A = \mathrm{Aut}(D)$; then $\alpha c_d\alpha^{-1} = c_{\alpha(d)}$.

(a) If $N \cap D = 1$, then $[N, D] \subseteq N \cap D = 1$, as both are normal in $A$. For $\nu \in N$ and $d \in D$ this gives $c_{\nu(d)} = \nu c_d\nu^{-1} = c_d$, so $\nu(d) = d$ as $D$ is centre-free. So $N = 1$, which is absurd.

(b) Let $\alpha \in A$ commute with every element of $N$, and put $M = N \cap D$, a nontrivial closed normal subgroup of $D$ by (a). For $m \in M$, $c_{\alpha(m)} = c_m$, so $\alpha(m) = m$. For $x \in D$ and $m \in M$, $xmx^{-1} \in M$, so $\alpha(x)m\alpha(x)^{-1} = \alpha(xmx^{-1}) = xmx^{-1}$. So $x^{-1}\alpha(x)$ centralizes $M$, and it is trivial by part 4. Hence $\alpha = 1$.

(c) If $N \subseteq D$, then $N = D$ by part 5. If $D \subseteq N$, choose an isomorphism $\theta : N \to D$. Then $\theta(D)$ is a closed subgroup of $D$ isomorphic to $D$, so $\theta(D) = D = \theta(N)$ by part 5, and $D = N$. $\square$

**Remarks.**

- *Use for Tsujimura's question.* For the pro-$p$ surface groups, Step 1 of [the proof for $q = 0$](pro-p-surface-groups-inside-their-automorphism-groups.md) is (a) and (b), proved there from part 3(c) of [the lower central series](lower-central-series-of-pro-p-surface-groups.md), and its Step 7 deduces $N = D$ from $N \subseteq D$ using openness of normal subgroups of maximal cohomological dimension. Parts 4 and 5 give both steps for every Demushkin group of rank at least $3$, including those with $q \ne 0$ such as $G_K(p)$ for $p$-adic $K$ containing $\zeta_p$ ([maximal pro-$p$ Galois groups of $p$-adic fields](maximal-pro-p-galois-groups-of-p-adic-fields.md)). What remains open for $q \ne 0$ is to show that a closed normal copy $N$ lies in $D$.
- *Sources.* The facts in parts 1–4 are standard for Demushkin groups, but no source stating them was opened, and no novelty is claimed. The proofs use only the inputs listed in the setting. Lemma 2 is the special case needed here of the vanishing of $H^2$ of closed subgroups of infinite index, which is neither proved nor used.
