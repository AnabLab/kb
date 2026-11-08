---
title: Are p-adic absolute Galois groups characteristic in their automorphism groups?
kind: problem
summary: 'Tsujimura asks whether, for finite $K/\mathbb{Q}_p$, $G_K$ is characteristic in $\mathrm{Aut}(G_K)$ and $\mathrm{Out}(\mathrm{Aut}(G_K)) = 1$, as for free pro-$p$ groups. A rival normal subgroup isomorphic to $G_K$ can neither contain nor lie in $G_K$. For number fields, it depends on $K$.'
tags: [local-fields, galois-groups]
edges:
  - {to: free-pro-p-groups-inside-their-automorphism-groups, label: motivated-by}
  - {to: automorphism-towers-of-number-field-galois-groups, label: analogous-to, note: "The global analogue holds exactly when the fixed field of $\\mathrm{Aut}(K)$ has no nontrivial automorphisms."}
---

**Question.** Let $K/\mathbb{Q}_p$ be finite. The group $G_K$ is slim [@mochizuki2012, Theorem 1.7 (ii), p. 14], so in particular it has trivial centre, and it is topologically finitely generated (see [the presentations of $G_K$](local-galois-group-presentations.md)). So conjugation identifies $G_K$ with the closed normal subgroup $\mathrm{Inn}(G_K)$ of $\mathrm{Aut}(G_K)$, which is a profinite group with the topology defined by the characteristic open subgroups of $G_K$ [@mochizuki2012, §0, p. 9].

1. Is $G_K$ characteristic in $\mathrm{Aut}(G_K)$, that is, preserved by every continuous automorphism of $\mathrm{Aut}(G_K)$? More strongly, is it the only closed normal subgroup of $\mathrm{Aut}(G_K)$ isomorphic to $G_K$?
2. Is $\mathrm{Out}(\mathrm{Aut}(G_K)) = 1$?

A positive answer to 1 gives one to 2, by Burnside's criterion [@tsujimura2026freeaut, Introduction, p. 2].

**Attribution.** Tsujimura asks the first question after his Q.2 and the second in Remark 3.2.1, and he reports no partial answers [@tsujimura2026freeaut, Introduction, p. 2] [@tsujimura2026freeaut, Remark 3.2.1, p. 9]. His Q.2 asks the same for nonabelian Demushkin groups and profinite surface groups [@tsujimura2026freeaut, Introduction, p. 2]. When $\zeta_p \in K$, the maximal pro-$p$ quotient of $G_K$ is a Demushkin group (see [maximal pro-$p$ Galois groups of $p$-adic fields](maximal-pro-p-galois-groups-of-p-adic-fields.md)).

**Status.** Open as far as the sources opened here show.

**Context.**

- The answers are yes for [free pro-$p$ groups](free-pro-p-groups-inside-their-automorphism-groups.md) of finite rank at least $2$.
- For a number field $K$, $\mathrm{Aut}(G_K)$ is the absolute Galois group of the fixed field $K_1$ of $\mathrm{Aut}(K)$, and $G_K$ is characteristic in $\mathrm{Aut}(G_K)$, or equivalently $\mathrm{Out}(\mathrm{Aut}(G_K)) = 1$, exactly when $\mathrm{Aut}(K_1) = 1$ ([automorphism towers of number-field Galois groups](automorphism-towers-of-number-field-galois-groups.md)). Both fail for $\mathbb{Q}(\sqrt[4]{2})$.
- That argument does not carry over. Conjugation still embeds $G_{K_1}$ in $\mathrm{Aut}(G_K)$ when $K \subset \bar{\mathbb{Q}}_p$ and $K_1$ is the fixed field of $\mathrm{Aut}(K)$, since $G_{\mathbb{Q}_p}$ is slim [@mochizuki2012, Theorem 1.7 (ii), p. 14]. But $\mathrm{Out}(G_K)$ can be much larger than $\mathrm{Aut}(K)$: it is infinite for odd $p$ and $K \ne \mathbb{Q}_p$ Galois over $\mathbb{Q}_p$ ([field automorphisms inside the outer automorphism group](field-theoretic-subgroup-of-outer-automorphisms.md)), and $G_{\mathbb{Q}_p}$ has outer automorphisms for odd $p$ although $\mathrm{Aut}(\mathbb{Q}_p) = 1$ ([the presentations of $G_K$](local-galois-group-presentations.md)).

**A reduction.** This is proved here. Let $N \subseteq \mathrm{Aut}(G_K)$ be a closed normal subgroup isomorphic to $G_K$. Then $N \cap G_K \ne 1$. If $N \subseteq G_K$ or $G_K \subseteq N$, then $N = G_K$. So for question 1 it is enough to show that every such $N$ lies in $G_K$, which is how Tsujimura's proof ends in the free case.

*Proof.* Write $G = G_K$ and $A = \mathrm{Aut}(G)$.

- If $N \cap G = 1$, then $[N, G] \subseteq N \cap G = 1$, because both are normal in $A$. An $\alpha \in A$ that commutes with every inner automorphism satisfies $\mathrm{inn}(\alpha(g)) = \alpha \circ \mathrm{inn}(g) \circ \alpha^{-1} = \mathrm{inn}(g)$, so $\alpha(g) = g$ for all $g$, as $G$ has trivial centre. Then $N = 1$, which is impossible.
- Suppose $N \subseteq G$. Then $N$ is a nontrivial, topologically finitely generated, closed normal subgroup of $G$. Since $G$ is elastic [@mochizuki2012, Theorem 1.7 (ii), p. 14], meaning that every topologically finitely generated closed normal subgroup of an open subgroup is trivial or of finite index [@mochizuki2012, Definition 1.1 (ii), p. 10], $N$ is open, so $N = G_L$ for a finite extension $L/K$. For finite $F/\mathbb{Q}_p$, local class field theory gives $\dim_{\mathbb{Q}_p}(G_F^{\mathrm{ab}} \otimes \mathbb{Q}_p) = [F : \mathbb{Q}_p] + 1$ [@mochizuki2012, Proof of Theorem 1.7, p. 15]. As $G_L \cong G_K$, this gives $[L : \mathbb{Q}_p] = [K : \mathbb{Q}_p]$, so $L = K$ and $N = G$.
- Suppose $G \subseteq N$, and choose an isomorphism $\theta : N \to G$. As $G$ is normal in $A$, it is normal in $N$, so $\theta(G)$ is a nontrivial closed normal subgroup of $G$ isomorphic to $G$. By the previous case, $\theta(G) = G = \theta(N)$, so $N = G$. $\square$
