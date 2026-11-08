---
title: Finite quotients detect failure to lift a tame automorphism
kind: theorem
summary: 'A tame automorphism of a p-adic field lifts exactly when every canonical finite quotient diagram admits a lift; independent finite lifts suffice. Thus failure has a finite witness. For the Frobenius shift over Q_3, an index bound of 18 suffices.'
tags: [local-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Reformulates the question as nonemptiness of explicitly defined finite sets of automorphisms; no obstruction over an unramified 2-adic field is found here.'}
  - {to: local-galois-group-presentations, label: uses, note: 'Only finite generation in every residue characteristic is needed, not an explicit presentation [@jardenshusterman2023, Theorem 2.1, p. 2].'}
  - {to: maximal-pro-p-galois-groups-of-p-adic-fields, label: uses, note: 'The pro-3 generator ranks distinguish the two quadratic subgroups in the finite obstruction over Q_3.'}
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

**Application to the 2-adic question.** Take $G=G_{U_f}$, $\Gamma=\Gamma_f$ and $\alpha(\sigma_f)=\sigma_f\tau$, $\alpha(\tau)=\tau$ as in the [Frobenius-shift problem](frobenius-shift-lifting-problem.md). Finite generation holds even in residue characteristic two: $G_{U_f}$ has $f+2$ generators [@jardenshusterman2023, Theorem 2.1, p. 2]. The theorem gives an exact finite-quotient reformulation of that problem. In particular, a negative answer would be witnessed by one empty $A_n(\alpha)$, rather than solely by an incompatibility among lifts existing at every level.

**A finite obstruction over $\mathbb Q_3$.** For comparison, put $G=G_{\mathbb Q_3}$ and let $\pi$ be its tame quotient. Choose tame generators $\sigma,\tau$ with $\sigma\tau\sigma^{-1}=\tau^3$, and let $\alpha(\sigma)=\sigma\tau$, $\alpha(\tau)=\tau$. Then

$$A_{18}(\alpha)=\varnothing.$$

This bound is proved here; no minimality is claimed. The two totally ramified quadratic fields

$$K_+=\mathbb Q_3(\sqrt3),\qquad K_-=\mathbb Q_3(\sqrt{-3})$$

are tame, and $\alpha$ exchanges their corresponding index-two subgroups of $\Gamma$, by the quadratic-field calculation in the problem entry. Let $H_\pm=G_{K_\pm}\subset G$. As $K_-=\mathbb Q_3(\zeta_3)$ whereas $\zeta_3\notin K_+$, their maximal pro-$3$ quotients have ranks $4$ and $3$, respectively [@jardenshusterman2023, proof of Theorem 2.1, Cases A and B, pp. 2–3]. Characters are dual to the Frattini quotient of a finitely generated pro-$3$ group, whose dimension is its generator rank. Thus

$$\dim_{\mathbb F_3}\mathrm{Hom}_{\mathrm{cont}}(H_-,\mathbb F_3)=4,
\qquad\dim_{\mathbb F_3}\mathrm{Hom}_{\mathrm{cont}}(H_+,\mathbb F_3)=3.$$

Every such character already factors through $H_\pm/C_{18}(G)$. Indeed, the kernel $N$ of a nonzero character is normal of index $3$ in the index-two normal subgroup $H=H_\pm$. For $s\in G\setminus H$, its core in $G$ is $N\cap sNs^{-1}$, since $N$ is normal in $H$. Its index in $G$ is at most $2\cdot3^2=18$, so it contains $C_{18}(G)$; the zero character also factors. Hence the same unequal dimensions hold for the two finite subgroups $H_\pm/C_{18}(G)$ of $G_{18}$.

Both tame index-two subgroups contain $C_{18}(\Gamma)$. Thus any $b\in A_{18}(\alpha)$ would exchange their preimages $H_\pm/C_{18}(G)$ under $\pi_{18}$, giving an isomorphism between these finite groups. Their unequal dimensions of $\mathbb F_3$-valued character spaces rule this out. $\square$

**Scope.** Once $G_n$, $\Gamma_n$, $\pi_n$ and $\alpha_n$ are supplied as finite groups and maps, testing $A_n(\alpha)$ is finite: enumerate automorphisms of $G_n$ and check the displayed equality. This entry does not construct these data for $U_f$, give an effective bound on $n$, or decide its lifting problem. The finite-generation argument also does not apply to arbitrary profinite groups. The finite witness over $\mathbb Q_3$ coexists with the [lift below upper ramification one](frobenius-shift-lifts-below-upper-ramification-one.md); that single quotient is not a test of all the diagrams above.
