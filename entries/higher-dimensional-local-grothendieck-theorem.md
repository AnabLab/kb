---
title: Filtered Galois reconstruction of higher-dimensional local fields
kind: theorem
summary: 'For odd p, Abrashkin reconstructs mixed-characteristic higher local fields with a flag of constant subfields from Galois isomorphisms preserving multi-indexed ramification and P-continuity on finite extensions'' abelian p-power quotients.'
tags: [local-fields, galois-groups, ramification, reconstruction-algorithms]
edges:
  - {to: abrashkin-local-grothendieck-theorem, label: analogous-to, note: 'The higher-dimensional theorem uses a flag of constant subfields and an additional continuity hypothesis on abelian quotients.'}
  - {to: fontaine-wintenberger-field-of-norms, label: analogous-to, note: 'The proof uses a higher-dimensional analogue of the field-of-norms functor, compatible with ramification and P-continuity [@abrashkin2007higher, Theorems 2 and 4 and proof of Theorem 6].'}
---

**Fields and extra structure.** An $N$-dimensional local field is obtained by iterating complete discrete valuation fields $N$ times until the final residue field is finite [@morrow2012higher, Definition 2.12, p. 11]. For a complete discrete valuation field $A$, write

$$
A\{\{t\}\}=\left\{\sum_{i\in\mathbb Z}a_i t^i:
\inf_i v_A(a_i)>-\infty,\quad a_i\longrightarrow0\text{ as }i\longrightarrow-\infty\right\}.
$$

Its valuation is $\inf_i v_A(a_i)$ and its residue field is $k_A((t))$, where $k_A$ is the residue field of $A$ [@morrow2012higher, Example 2.6, pp. 9–10]. Thus $\mathbb Q_p\{\{t\}\}$ has first residue field $\mathbb F_p((t))$ [@morrow2012higher, Example 2.8, p. 10].

Fix $N\ge2$ and the basic field

$$F_N=\mathbb Q_p\{\{t_N\}\}\cdots\{\{t_2\}\}.$$

Let $C_N$ be the completion of an algebraic closure of $F_N$ for its first valuation. Abrashkin fixes inside $C_N$ a flag $C_0\subset C_1\subset\cdots\subset C_N$, where $C_i$ for $i\ge1$ is the completed algebraic closure of the basic $i$-dimensional constant field, with $C_1=\mathbb C_p$, and $C_0$ is the completed maximal unramified extension of $\mathbb Q_p$. His category $\mathrm{LF}_0(N)$ consists of finite extensions $K/F_N$ inside $C_N$, equipped with the *constant-subfield flag* $K(i)=K\cap C_i$, called the $F$-structure [@abrashkin2007higher, §3.1, p. 12]. These are subfields, not successive residue fields.

Two further structures enter the theorem:

- The *$P$-topology* on the fields incorporates the successive residue-field topologies, as defined in [@abrashkin2007higher, §1.2, pp. 4–5]. For a finite extension $E/K$ containing $\mu_{p^M}$, it induces a $P$-topology on $G_E^{\mathrm{ab}}/p^M$ through Kummer duality with $E^\times/E^{\times p^M}$ [@abrashkin2007higher, §8.2, p. 34].
- The $F$-structure gives a decreasing upper ramification filtration $G_K^{(j)}$ indexed by $J(N)=\coprod_{r=1}^N J_r$, with $J_r=\{j\in\mathbb Q^r:j\ge(0,\ldots,0)\}$ ordered lexicographically, and every index in $J_{r+1}$ larger than every index in $J_r$ [@abrashkin2007higher, §3.3, pp. 13–14].

**Theorem (Abrashkin).** Suppose $p\ge3$, $K,L\in\mathrm{LF}_0(N)$, and $\iota:G_L\to G_K$ is an isomorphism of profinite groups. Assume:

1. $\iota(G_L^{(j)})=G_K^{(j)}$ for every $j\in J(N)$.
2. For every $M\ge1$ and corresponding finite extensions $E/K$, $E'/L$ with $\iota(G_{E'})=G_E$, whenever both extensions contain $\mu_{p^M}$, the induced map
   $$G_{E'}^{\mathrm{ab}}/p^M\longrightarrow G_E^{\mathrm{ab}}/p^M$$
   is $P$-continuous.

Then there is a unique $P$-continuous field automorphism $f:C_N\to C_N$ preserving the ambient constant-subfield flag, with $f(K)=L$ and

$$\iota(\sigma)=f^{-1}\sigma f\qquad(\sigma\in G_L).$$

This is [@abrashkin2007higher, Theorem 6 and §9.3, pp. 38–40].

**Mechanism and scope.** The proof first reconstructs the one-dimensional constant fields, then passes to suitably ramified towers. The higher-dimensional field-of-norms functor transports the Galois isomorphism to characteristic $p$; its compatibility with the $P$-topologies permits application of the characteristic-$p$ reconstruction theorem. Finally the resulting automorphism lifts back to characteristic $0$ [@abrashkin2007higher, proof of Theorem 6, §§9.3.1–9.3.4, pp. 39–40]. The flag, multi-indexed filtration and continuity condition are supplied data in this statement; it does not assert their recovery from the profinite group alone. The checked theorem assumes odd $p$.

**Source versions.** Abrashkin's locations refer to arXiv:math/0503200v1, not the pagination of the published article. Morrow's locations refer to arXiv:1204.0586v2.
