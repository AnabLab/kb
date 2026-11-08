---
title: Automorphism towers of absolute Galois groups of number fields
kind: theorem
summary: 'For a number field $K$, $\mathrm{Aut}(G_K) \cong G_{K_1}$, where $K_1 = K^{\mathrm{Aut}(K)}$. So $G_K$ is characteristic in $\mathrm{Aut}(G_K)$ iff $\mathrm{Aut}(K_1) = 1$, which fails for $\mathbb{Q}(\sqrt[4]{2})$. The automorphism tower of $G_K$ has height at most $\log_2[K:\mathbb{Q}]$.'
tags: [number-fields, galois-groups]
edges:
  - {to: neukirch-uchida-theorem, label: uses, note: "in Uchida's form: an isomorphism between open subgroups of $G_{\\mathbb{Q}}$ extends to an inner automorphism of $G_{\\mathbb{Q}}$ [@uchida1976, Theorem, p. 617]"}
  - {to: free-pro-p-groups-inside-their-automorphism-groups, label: analogous-to, note: "A free pro-$p$ group of finite rank at least $2$ is always characteristic in its automorphism group; $G_K$ is only for some $K$."}
---

**Setting.** Fix an algebraic closure $\bar{\mathbb{Q}}$ of $\mathbb{Q}$. Number fields are subfields of finite degree, and $G_F = \mathrm{Gal}(\bar{\mathbb{Q}}/F)$. For a number field $F$, $\mathrm{Aut}(F)$ is its finite group of field automorphisms, and $F^{\mathrm{Aut}(F)}$ is the fixed field. For a number field $K$, put $K_0 = K$ and $K_{n+1} = K_n^{\mathrm{Aut}(K_n)}$, so that $K = K_0 \supseteq K_1 \supseteq K_2 \supseteq \cdots$.

$\mathrm{Aut}(G)$ means the group of continuous automorphisms of a profinite group $G$. For $G = G_F$, give $\mathrm{Aut}(G_F)$ the topology of uniform convergence, in which the sets $\{\alpha : \alpha(g)g^{-1} \in U \text{ and } \alpha^{-1}(g)g^{-1} \in U \text{ for all } g\}$, for open normal subgroups $U$ of $G_F$, form a basis of neighbourhoods of the identity. Write $\Omega(m)$ for the number of prime factors of $m$, counted with multiplicity.

**Theorem.** This is proved here. Let $K$ be a number field.

1. Conjugation, $\rho \mapsto (g \mapsto \rho g \rho^{-1})$, is an isomorphism of profinite groups $c_K : G_{K_1} \to \mathrm{Aut}(G_K)$ that maps $G_K$ onto $\mathrm{Inn}(G_K)$.
2. $\mathrm{Out}(\mathrm{Aut}(G_K)) \cong \mathrm{Aut}(K_1)$.
3. $G_K$ is characteristic in $\mathrm{Aut}(G_K)$, that is, preserved by every continuous automorphism of $\mathrm{Aut}(G_K)$, if and only if $\mathrm{Aut}(K_1) = 1$. When $\mathrm{Aut}(K_1) \ne 1$, $G_K$ is also not the only closed normal subgroup of $\mathrm{Aut}(G_K)$ isomorphic to $G_K$.
4. Let $A_0 = G_K$ and $A_{n+1} = \mathrm{Aut}(A_n)$, with $A_n \to A_{n+1}$ given by inner automorphisms. There are isomorphisms $A_n \cong G_{K_n}$ under which these maps become the inclusions $G_{K_n} \subseteq G_{K_{n+1}}$. The map $A_n \to A_{n+1}$ is bijective exactly when $\mathrm{Aut}(K_n) = 1$, and then all later maps are bijective. The least such $n$, the height of the tower, is at most $\Omega([K:\mathbb{Q}])$, and hence at most $\log_2 [K:\mathbb{Q}]$.

The conditions in parts 2 and 3 hold when $K/\mathbb{Q}$ is Galois, where $K_1 = \mathbb{Q}$, and when $\mathrm{Aut}(K) = 1$, where $K_1 = K$.

**Example.** Let $\alpha = \sqrt[4]{2} > 0$ and $K = \mathbb{Q}(\alpha)$. The polynomial $X^4 - 2$ is irreducible by Eisenstein's criterion at $2$, and its roots are $\pm\alpha$ and $\pm i\alpha$. Only $\pm\alpha$ lie in $K \subset \mathbb{R}$, so $\mathrm{Aut}(K) = \{1, \alpha \mapsto -\alpha\}$. Its fixed field contains $\alpha^2 = \sqrt{2}$ and has index $2$ in $K$, so $K_1 = \mathbb{Q}(\sqrt{2})$. Then $\mathrm{Aut}(K_1)$ has order $2$ and $K_2 = \mathbb{Q}$.

So $\mathrm{Out}(\mathrm{Aut}(G_K))$ has order $2$, and $G_K$ is not characteristic in $\mathrm{Aut}(G_K)$. Concretely, choose $\rho \in G_{\mathbb{Q}}$ with $\rho(\alpha) = i\alpha$. Then $\rho(\sqrt{2}) = -\sqrt{2}$, so $\rho$ normalizes $G_{K_1}$, while $\rho(K) = \mathbb{Q}(i\alpha) \ne K$ because $i\alpha \notin \mathbb{R}$. The continuous automorphism of $\mathrm{Aut}(G_K) \cong G_{\mathbb{Q}(\sqrt{2})}$ given by conjugation by $\rho$ carries $\mathrm{Inn}(G_K)$, which corresponds to $G_K$, to the subgroup corresponding to $G_{\mathbb{Q}(i\alpha)}$. Since $(i\alpha)^2 = -\sqrt{2}$, this is another normal subgroup of index $2$, and it is isomorphic to $G_K$. The automorphism tower is $G_K \subset G_{\mathbb{Q}(\sqrt{2})} \subset G_{\mathbb{Q}}$, of height $2 = \Omega(4)$.

More generally, let $K = \mathbb{Q}(2^{1/2^m})$ with $2^{1/2^m}$ real. The same argument gives $K_j = \mathbb{Q}(2^{1/2^{m-j}})$ for $0 \le j \le m$, so the tower has height exactly $m = \Omega(2^m)$. The bound in part 4 is therefore attained, and heights are unbounded.

**Proof.** The proof combines Uchida's theorem with Galois theory.

*Step 1: normalizers.* Let $F$ be a number field and $S = \{\rho \in G_{\mathbb{Q}} : \rho(F) = F\}$. Then $S = N_{G_{\mathbb{Q}}}(G_F) = G_{F^{\mathrm{Aut}(F)}}$, and restriction to $F$ induces $S/G_F \cong \mathrm{Aut}(F)$.

Indeed, $\rho G_F \rho^{-1} = G_{\rho(F)}$, and $G_{F'} = G_F$ only if $F' = F$, so $S$ is the normalizer. Restriction $S \to \mathrm{Aut}(F)$ has kernel $G_F$, and it is surjective because every embedding $F \to \bar{\mathbb{Q}}$ extends to an automorphism of $\bar{\mathbb{Q}}$. So $S$ is a finite union of cosets of $G_F$, hence closed. An element of $\bar{\mathbb{Q}}$ fixed by $S$ is fixed by $G_F$, so lies in $F$, and is then fixed by every element of $\mathrm{Aut}(F)$. Conversely $S$ fixes $F^{\mathrm{Aut}(F)}$. By Galois theory $S = G_{F^{\mathrm{Aut}(F)}}$.

*Step 2: centralizers.* $G_{\mathbb{Q}}$ is slim [@mochizuki2012, Theorem 1.7 (iii), p. 14], which means that every open subgroup has trivial centralizer [@mochizuki2012, §0, p. 8]. So the centralizer of $G_F$ in $G_{\mathbb{Q}}$ is trivial, and in particular $G_F$ has trivial centre.

*Step 3: part 1.* By Step 1, every $\rho \in G_{K_1}$ normalizes $G_K$, so $c_K$ is a well-defined homomorphism. It is injective by Step 2. It is surjective by Uchida's theorem: every topological automorphism of the open subgroup $G_K$ of $G_{\mathbb{Q}}$ extends to an inner automorphism of $G_{\mathbb{Q}}$ [@uchida1976, Theorem, p. 617], say conjugation by $\rho$. Then $\rho G_K \rho^{-1} = G_K$, so $\rho \in G_{K_1}$ by Step 1.

It is continuous: given $U$, choose an open normal subgroup $W$ of $G_{K_1}$ contained in $U$. For $\rho \in W$ and $g \in G_K$, we have $\rho g \rho^{-1} g^{-1} = \rho \cdot (g\rho^{-1}g^{-1}) \in W \subseteq U$, as $W$ is normal in $G_{K_1} \ni g$, and likewise for $\rho^{-1}$. The topology of uniform convergence is Hausdorff, so $c_K$, a continuous bijection from a compact space, is a homeomorphism. By definition $c_K(G_K) = \mathrm{Inn}(G_K)$.

*Step 4: parts 2 and 3.* Transport along $c_K$. By part 1 for $K_1$, which has $(K_1)_1 = K_2$, every continuous automorphism of $G_{K_1}$ is conjugation by a unique $\rho \in G_{K_2}$, and the inner ones are those with $\rho \in G_{K_1}$. So $\mathrm{Out}(\mathrm{Aut}(G_K)) \cong \mathrm{Out}(G_{K_1}) \cong G_{K_2}/G_{K_1} \cong \mathrm{Aut}(K_1)$, by Step 1.

Conjugation by $\rho \in G_{K_2}$ carries $G_K$ to $G_{\rho(K)}$. So $G_K$ is characteristic exactly when $\rho(K) = K$ for all $\rho \in G_{K_2}$, that is, when $G_{K_2} \subseteq N_{G_{\mathbb{Q}}}(G_K) = G_{K_1}$, that is, when $K_1 \subseteq K_2$. As $K_2 \subseteq K_1$ always, this means $K_2 = K_1$, so that $\mathrm{Aut}(K_1)$ fixes $K_1$ pointwise, which means $\mathrm{Aut}(K_1) = 1$. If a continuous automorphism $\Phi$ of $\mathrm{Aut}(G_K)$ does not preserve $\mathrm{Inn}(G_K)$, then $\Phi(\mathrm{Inn}(G_K))$ is a second closed normal subgroup isomorphic to $G_K$.

*Step 5: part 4.* Each $G_{K_n}$ has trivial centre by Step 2, so the tower is defined, and part 1 applied to $K_n$ gives the isomorphisms by induction on $n$. The map $A_n \to A_{n+1}$ corresponds to $G_{K_n} \subseteq G_{K_{n+1}}$, which by Step 1 has index $|\mathrm{Aut}(K_n)|$. If $\mathrm{Aut}(K_n) = 1$, then $K_{n+1} = K_n$ and the sequence is constant from then on. Otherwise $[K_n : K_{n+1}] \ge 2$ divides $[K_n : \mathbb{Q}]$, so $\Omega([K_{n+1}:\mathbb{Q}]) \le \Omega([K_n:\mathbb{Q}]) - 1$. Hence the height is at most $\Omega([K:\mathbb{Q}])$. $\square$

**Relation to the literature.** Tsujimura states that, by the Neukirch–Uchida theorem, the natural map $\mathrm{Aut}(G_K) \to \mathrm{Aut}(\mathrm{Aut}(G_K))$ is an isomorphism for every number field $K$, so that $\mathrm{Out}(\mathrm{Aut}(G_K)) = 1$ [@tsujimura2026freeaut, Remark 3.2.1, p. 9]. He also states that $G_K$ has the property of [free pro-$p$ groups](free-pro-p-groups-inside-their-automorphism-groups.md), and in particular is characteristic in its automorphism group [@tsujimura2026freeaut, Introduction, p. 2]. By parts 2 and 3, this holds exactly when $\mathrm{Aut}(K_1) = 1$, and the example above shows that it can fail. The $p$-adic question he raises is recorded [here](p-adic-galois-groups-in-their-automorphism-groups.md).
