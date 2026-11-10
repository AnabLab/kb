---
title: Finite quotients detect failure to lift a tame automorphism
kind: theorem
summary: 'A tame automorphism lifts exactly when all marked finite surjection counts are invariant, equivalently when every canonical finite diagram lifts. Failure has a finite witness. Over a dyadic field, no target of order less than 24 gives a count obstruction.'
tags: [local-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Reformulates the question as nonemptiness of explicitly defined finite sets of automorphisms; no obstruction over an unramified 2-adic field is found here.'}
  - {to: local-galois-group-presentations, label: uses, note: 'Only finite generation in every residue characteristic is needed, not an explicit presentation [@jardenshusterman2023, Theorem 2.1, p. 2].'}
  - {to: affine-cyclotomic-count-obstruction, label: uses, note: 'Its unequal S3 marked counts over Q3 show that the canonical diagram already fails at n = 6.'}
  - {to: cyclotomic-criterion-for-tame-lifting-modulo-wild-commutators, label: uses, note: 'Its lift modulo wild commutators forces equality of marked counts for targets with abelian Sylow p-subgroups.'}
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: analogous-to, note: 'Its order-24 target tests one of the counts in the complete criterion below, at the smallest possible target order for a dyadic obstruction.'}
  - {to: frobenius-shift-lifts-below-upper-ramification-one, label: analogous-to, note: 'A lift below upper ramification one does not rule out an obstruction on the finite diagrams considered here.'}
---

**Canonical finite diagrams.** Let $G$ be a topologically finitely generated profinite group, let $\pi:G\twoheadrightarrow\Gamma$ be a continuous epimorphism, and fix $\alpha\in\mathrm{Aut}(\Gamma)$. All homomorphisms and automorphisms here are continuous. For $H=G$ or $\Gamma$ and $n\ge1$, put

$$
C_n(H)=\bigcap_{\substack{N\triangleleft H\text{ open}\\|H/N|\le n}}N,
\qquad H_n=H/C_n(H).
$$

These are finite quotients by open characteristic subgroups, as proved below. Pullback of normal subgroups gives $\pi(C_n(G))\subseteq C_n(\Gamma)$, so there is an induced epimorphism $\pi_n:G_n\twoheadrightarrow\Gamma_n$. Since $C_n(\Gamma)$ is characteristic, $\alpha$ induces $\alpha_n\in\mathrm{Aut}(\Gamma_n)$. Define the finite set

$$
A_n(\alpha)=\{b\in\mathrm{Aut}(G_n):\pi_n\circ b=\alpha_n\circ\pi_n\}.
$$

**Theorem.** There is $\Phi\in\mathrm{Aut}(G)$ with $\pi\circ\Phi=\alpha\circ\pi$ if and only if $A_n(\alpha)\ne\varnothing$ for every $n\ge1$. The chosen finite lifts need not be compatible. Consequently, if $\alpha$ does not lift, some finite diagram has $A_n(\alpha)=\varnothing$.

**Proof.** If $H$ has $d$ topological generators, a homomorphism $H\to S_n$ is determined by their images, so there are at most $(n!)^d$ such homomorphisms. Each open normal subgroup of index at most $n$ is the kernel of one: use the regular action of its quotient and add fixed points. Thus $C_n(H)$ is a finite intersection of open normal subgroups. Automorphisms permute these subgroups, so $C_n(H)$ is characteristic. The subgroups $C_n(H)$ decrease and form a neighborhood basis of the identity, because $C_{[H:N]}(H)\subseteq N$ for every open normal $N$. Hence $H=\varprojlim_n H_n$. These facts apply to $\Gamma$, which is a finitely generated quotient of $G$.

The essential compatibility is intrinsic to the finite groups. If $m\le n$, the normal subgroups of $G_n$ of index at most $m$ correspond to all the open normal subgroups of $G$ of index at most $m$, since each contains $C_n(G)$. Therefore

$$C_m(G_n)=C_m(G)/C_n(G).$$

Every automorphism of $G_n$ preserves this subgroup, and thus descends to $G_m$. The same holds for $\Gamma_n\to\Gamma_m$, so descent gives maps $A_n(\alpha)\to A_m(\alpha)$ satisfying the transition identities. These maps need not be surjective.

Suppose every $A_n(\alpha)$ is nonempty. In the compact product $\prod_{n\ge1}A_n(\alpha)$, impose all the closed conditions saying that coordinate $n$ descends to coordinate $m$ for $m\le n$. Any finite list of conditions is satisfied by choosing a lift at the largest level involved and descending it; the other coordinates can be chosen arbitrarily. Compactness gives a compatible family $(b_n)_n$. Its inverse family $(b_n^{-1})_n$ is also compatible. Taking inverse limits therefore gives an automorphism $\Phi$ of $G$, and the equalities $\pi_n b_n=\alpha_n\pi_n$ imply $\pi\Phi=\alpha\pi$. Conversely, a lift $\Phi$ preserves every $C_n(G)$ and induces an element of each $A_n(\alpha)$. $\square$

**Marked surjection counts (proved here).** Keep the general profinite setting above. For epimorphisms $q:\Gamma\twoheadrightarrow D$ and $r:H\twoheadrightarrow D$ to finite groups, and a marking $\eta:G\twoheadrightarrow D$, put
$$
e_r(\eta)=\#\{f:G\twoheadrightarrow H\text{ continuous}:r\circ f=\eta\}.
$$
These counts are finite because $G$ is finitely generated. They count maps to the fixed target, without identifying conjugate maps. The following conditions are equivalent:

1. $\alpha$ lifts to an automorphism of $G$ over $\pi$.
2. For every such $q,r$, one has $e_r(q\pi)=e_r(q\alpha\pi)$.
3. For every such $q,r$, $e_r(q\pi)>0$ implies $e_r(q\alpha\pi)>0$.

Thus all marked finite counts together are a complete test, and even preservation of solvability in one direction suffices. In a single test $q$ need not have $\alpha$-stable kernel: $q\pi$ and $q\alpha\pi$ are simply two maps to the same $D$.

*Proof.* If $\Phi$ is a lift, $f\mapsto f\circ\Phi$ is a bijection from the solutions counted by $e_r(q\pi)$ to those counted by $e_r(q\alpha\pi)$; its inverse is precomposition by $\Phi^{-1}$. This proves $1\Rightarrow2$, and $2\Rightarrow3$ is immediate.

For $3\Rightarrow1$, take $H=G_n$, $D=\Gamma_n$, $q:\Gamma\to\Gamma_n$ the canonical projection, and $r=\pi_n$. The canonical projection $\rho_n:G\to G_n$ is a solution for the original marking, so condition 3 supplies an epimorphism $f:G\to G_n$ with $\pi_n f=q\alpha\pi$.

Pulling back normal subgroups of index at most $n$ gives
$$f(C_n(G))\subseteq C_n(G_n)=1,$$
where the equality was proved above. Hence $f=b\rho_n$ for an epimorphism $b:G_n\to G_n$. This is an automorphism since $G_n$ is finite, and surjectivity of $\rho_n$ gives $\pi_n b=\alpha_n\pi_n$. Thus $b\in A_n(\alpha)$. All these sets are nonempty, so the preceding theorem constructs the lift. $\square$

In particular, if lifting fails, some canonical test has
$$e_{\pi_n}(q\pi)>0,\qquad e_{\pi_n}(q\alpha\pi)=0.$$
Unequal positive counts also obstruct lifting, but a failure always has a positive-versus-zero witness somewhere in this full family. Checking a selected target gives no implication in the other direction.

**Application to the 2-adic question.** Take $G=G_{U_f}$, $\Gamma=\Gamma_f$ and $\alpha(\sigma_f)=\sigma_f\tau$, $\alpha(\tau)=\tau$ as in the [Frobenius-shift problem](frobenius-shift-lifting-problem.md). Finite generation holds even in residue characteristic two: $G_{U_f}$ has $f+2$ generators [@jardenshusterman2023, Theorem 2.1, p. 2]. The theorems give two exact finite-quotient reformulations of that problem. In particular, a negative answer would be witnessed by one empty $A_n(\alpha)$, or equivalently one positive-versus-zero marked count, rather than solely by an incompatibility among lifts existing at every level.

**Targets that cannot obstruct (proved here).** More generally let $G=G_k$ for finite $k/\mathbb Q_p$, let $P$ be wild inertia and $\pi:G\to\Gamma=G/P$ its tame quotient. Suppose $\alpha$ preserves the mod-$p$ cyclotomic character. If the finite target $H$ has abelian Sylow $p$-subgroups, then
$$e_r(q\pi)=e_r(q\alpha\pi)$$
for every finite tame marking $q$ and epimorphism $r:H\to D$.

Indeed $f(P)$ is a $p$-subgroup of $H$, hence abelian, for every continuous $f:G\to H$. Every such $f$ therefore factors uniquely through $E=G/[P,P]$. The [cyclotomic criterion](cyclotomic-criterion-for-tame-lifting-modulo-wild-commutators.md) supplies a lift of $\alpha$ to $E$; precomposition with that lift bijects the two solution sets, preserving surjectivity.

There is also no count obstruction whenever $q$ kills tame inertia $I\subseteq\Gamma$: every tame automorphism induces the identity on $\Gamma/I$, by Step 1 of the linked criterion, so the two markings are then equal. In particular, if $H$ is a $p$-group, so is $D$, and $q(I)=1$ because $I$ is pro-prime-to-$p$. This includes nonabelian $p$-group targets.

For $p=2$ every tame automorphism meets the cyclotomic hypothesis. Consequently a count obstruction requires a target with a nonabelian Sylow $2$-subgroup and at least one odd prime factor in its order, so $|H|\ge8\cdot3=24$. This bounds the target order, not the index parameter $n$ of the canonical diagrams. The [binary tetrahedral count](binary-tetrahedral-embedding-counts-over-dyadic-fields.md) tests a group of this first possible order: its $Q_8$ Sylow subgroup avoids the abelian-Sylow argument, but its counts nevertheless agree for the three cubic markings of $U_2$. That one equality leaves the full family of tests open.

**A finite obstruction over $\mathbb Q_3$.** For comparison, put $G=G_{\mathbb Q_3}$ and let $\pi$ be its tame quotient. Choose tame generators $\sigma,\tau$ with $\sigma\tau\sigma^{-1}=\tau^3$, and let $\alpha(\sigma)=\sigma\tau$, $\alpha(\tau)=\tau$. Then

$$A_6(\alpha)=\varnothing.$$

This bound is proved here; no minimality is claimed. Put $q=\bar\chi:\Gamma\twoheadrightarrow C_2$, the mod-$3$ cyclotomic character, and let $r:S_3\twoheadrightarrow C_2$ be the sign map. The [affine cyclotomic count](affine-cyclotomic-count-obstruction.md) gives
$$e_r(q\pi)=24,\qquad e_r(q\alpha\pi)=6.$$

Every epimorphism $G\to S_3$ kills $C_6(G)$, since its kernel has index six. Also $q$ kills $C_6(\Gamma)$, since its kernel has index two. If $b\in A_6(\alpha)$, precomposition by $b$ on the induced maps $G_6\twoheadrightarrow S_3$ would biject the two marked solution sets: writing $q=q_6\rho_{\Gamma,6}$ and $\pi_6:G_6\to\Gamma_6$, one has $q_6\pi_6b=q_6\alpha_6\pi_6$. Its inverse is precomposition by $b^{-1}$. The unequal counts contradict this bijection. $\square$

**Scope.** Once $G_n$, $\Gamma_n$, $\pi_n$ and $\alpha_n$ are supplied as finite groups and maps, testing $A_n(\alpha)$ is finite: enumerate automorphisms of $G_n$ and check the displayed equality. This entry does not construct these data for $U_f$, give an effective bound on $n$, or decide its lifting problem. The finite-generation argument also does not apply to arbitrary profinite groups. The finite witness over $\mathbb Q_3$ coexists with the [lift below upper ramification one](frobenius-shift-lifts-below-upper-ramification-one.md); that single quotient is not a test of all the diagrams above.
