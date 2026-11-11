---
title: Rival copies of a p-adic absolute Galois group inside its automorphism group
kind: theorem
summary: 'For finite $K/\mathbb{Q}_p$, a closed normal subgroup $N \ne G_K$ of $\mathrm{Aut}(G_K)$ isomorphic to $G_K$ meets $G_K$ either openly in both, making $NG_K/G_K$ a nontrivial finite solvable normal subgroup of $\mathrm{Out}(G_K)$, or in an infinitely generated subgroup of infinite index in both.'
tags: [local-fields, galois-groups]
edges:
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: addresses, note: "Splits the case left open by the reduction there into two cases and excludes neither. Case (a) would be excluded by the absence of nontrivial finite elementary abelian normal subgroups in $\\mathrm{Out}(G_K)$."}
  - {to: local-galois-group-presentations, label: uses, note: "Only that every $G_L$, for $L/\\mathbb{Q}_p$ finite, is topologically finitely generated [@jardenshusterman2023, Theorem 2.1]."}
  - {to: demushkin-groups-of-rank-at-least-three-are-elastic, label: analogous-to, note: "Its Corollary 2 is the same dichotomy for Demushkin groups of rank at least $3$, where case (a) gives a finite normal $p$-subgroup."}
  - {to: local-field-galois-invariants, label: uses, note: "Only in the closing remarks: automorphisms of $G_K$ preserve inertia and wild inertia."}
---

**Setting.** Let $K/\mathbb{Q}_p$ be finite of degree $d$, and put $G = G_K$. Mochizuki proves that $G$ is *slim* and *elastic* [@mochizuki2012, Theorem 1.7 (ii), p. 14]. Slim means that every open subgroup of $G$ has trivial centralizer [@mochizuki2012, §0, p. 8], so in particular $G$ has trivial centre. Elastic means that every topologically finitely generated closed normal subgroup of an open subgroup of $G$ is trivial or of finite index in $G$ [@mochizuki2012, Definition 1.1 (ii), p. 10]. Both properties are invariant under isomorphism of profinite groups. As $G$ is centre-free and topologically finitely generated, conjugation identifies $G$ with the closed normal subgroup $\mathrm{Inn}(G)$ of the profinite group $A = \mathrm{Aut}(G)$, and $A/G = \mathrm{Out}(G)$ [@mochizuki2012, §0, p. 9].

Call a closed normal subgroup $N$ of $A$ a *rival copy* of $G$ if $N \cong G$ and $N \ne G$. The stronger form of question 1 in [Tsujimura's question](p-adic-galois-groups-in-their-automorphism-groups.md) asks whether rival copies exist. The reduction proved there shows that a rival copy neither contains $G$ nor lies in $G$.

**Theorem.** This is proved here. Let $N$ be a rival copy of $G$, and put $M = N \cap G$.

1. *Common structure.* $M \ne 1$, and $\alpha(M) = M$ for every automorphism $\alpha$ of $G$. Moreover $[N, G] \subseteq M$, so every element of $N$ acts on $G$ by an automorphism inducing the identity on $G/M$, and $NG/M$ is the internal direct product of $G/M$ and $N/M$.
2. *Dichotomy.* Exactly one of the following holds.
   - (a) $M$ is open in both $G$ and $N$, and $(G : M) = (N : M) \ge 2$. Then $M = G_L$ for a finite Galois extension $L/K$ of degree $(G : M)$, and $NG/G \cong N/M$ is a nontrivial finite solvable closed normal subgroup of $\mathrm{Out}(G)$.
   - (b) $M$ has infinite index in both $G$ and $N$, and is not topologically finitely generated.
3. *Case (a) and $\mathrm{Out}(G)$.* In case (a), $\mathrm{Out}(G)$ has a nontrivial finite elementary abelian $\ell$-subgroup $V$, for some prime $\ell$, that is normal in $\mathrm{Out}(G)$ and whose centralizer is open in $\mathrm{Out}(G)$.

So if $\mathrm{Out}(G_K)$ has no nontrivial finite elementary abelian normal subgroup, then every rival copy of $G_K$ is of type (b). In that case the stronger form of question 1, that $G_K$ is the only closed normal subgroup of $\mathrm{Aut}(G_K)$ isomorphic to $G_K$, holds for $K$ exactly when no rival copy of type (b) exists.

**Proof of part 1.** Both $N$ and $G$ are normal in $A$, so $M$ is normal in $A$, and $[N, G] \subseteq N \cap G = M$. For $\alpha \in A$ and $g \in G$ we have $\alpha \circ \mathrm{inn}(g) \circ \alpha^{-1} = \mathrm{inn}(\alpha(g))$, so under the identification of $G$ with $\mathrm{Inn}(G)$, conjugation by $\alpha$ restricts to $\alpha$ itself on $G$. As $M$ is normal in $A$, this gives $\alpha(M) = M$. For $n \in N$ and $g \in G$, the element $ngn^{-1}g^{-1}$ lies in $M$, so the automorphism $n$ of $G$ sends $g$ into $gM$.

If $M = 1$, then every $n \in N$ commutes with every $\mathrm{inn}(g)$, so $\mathrm{inn}(n(g)) = \mathrm{inn}(g)$ and $n(g) = g$ for all $g$, because $G$ has trivial centre. Then $N = 1$, which is impossible since $N \cong G \ne 1$.

In $NG/M$, the subgroups $G/M$ and $N/M$ are normal, since $G$ and $N$ are, and they commute elementwise, since $[N, G] \subseteq M$. They generate $NG/M$. If $gM = nM$ with $g \in G$ and $n \in N$, then $n^{-1}g \in M \subseteq G$, so $n \in N \cap G = M$. So $G/M \cap N/M = 1$, and $NG/M$ is their internal direct product. $\square$

**Proof of part 2.** First, $M$ is open in $G$ if and only if it is open in $N$. Suppose $M$ is open in $G$. By Galois theory $M = G_L$ for a finite extension $L/K$, which is Galois because $M$ is normal in $G$, and $[L : K] = (G : M)$. So $M$ is topologically finitely generated ([presentations of $G_K$](local-galois-group-presentations.md)). Since $M$ is normal in $A$, it is a nontrivial, topologically finitely generated, closed normal subgroup of $N$. As $N \cong G$ is elastic, applying the definition with the open subgroup $N$ of $N$ shows that $M$ has finite index in $N$, and a closed subgroup of finite index is open. The hypotheses are symmetric in $G$ and $N$: both are closed normal subgroups of $A$ isomorphic to $G_K$, with intersection $M$. So the same argument shows that $M$ is open in $G$ if it is open in $N$.

*If $M$ is open.* Fix an isomorphism $\theta : N \to G_K$. Then $\theta(M)$ is open of index $(N : M)$ in $G_K$, so $\theta(M) = G_{L'}$ for a finite extension $L'/K$ with $[L' : K] = (N : M)$. For every finite extension $F/\mathbb{Q}_p$, local class field theory gives $\dim_{\mathbb{Q}_p}(G_F^{\mathrm{ab}} \otimes \mathbb{Q}_p) = [F : \mathbb{Q}_p] + 1$ [@mochizuki2012, Proof of Theorem 1.7, p. 15]. Applying this to $F = L$ and $F = L'$, and using $M \cong \theta(M)$, gives
$$(G : M)\, d + 1 = [L : \mathbb{Q}_p] + 1 = [L' : \mathbb{Q}_p] + 1 = (N : M)\, d + 1.$$
As $d \ge 1$, $(G : M) = (N : M)$. If this index were $1$, then $G = M = N$, contrary to assumption, so it is at least $2$.

The product $NG$ is the image of the compact space $N \times G$ under multiplication, so it is closed, and it is normal in $A$ because $N$ and $G$ are. The natural map $N/M \to NG/G$ is a continuous bijection of compact Hausdorff groups, hence an isomorphism. So $NG/G$ is a closed normal subgroup of $A/G = \mathrm{Out}(G)$ of order $(N : M) \ge 2$. The absolute Galois group of a finite extension of $\mathbb{Q}_p$ is prosolvable [@mochizuki2012, Remark 1.4.1, p. 12], so its finite quotient $N/M$ is solvable, as $N \cong G_K$. This is (a).

*If $M$ is not open.* Then it is not open in either group, so it has infinite index in both, since closed subgroups of finite index are open. If $M$ were topologically finitely generated, the elasticity of $G$, applied with the open subgroup $G$ of $G$, would make $M$ trivial or of finite index in $G$. Neither holds, by part 1 and the previous sentence. This is (b).

The two cases exclude each other, because $M$ is open in (a) and of infinite index in (b). $\square$

**Proof of part 3.** Put $F = NG/G$, a nontrivial finite solvable normal subgroup of $\mathrm{Out}(G)$ by (a). The last nontrivial term $D$ of the derived series of $F$ is abelian and characteristic in $F$. Choose a prime $\ell$ dividing $|D|$, and let $V$ be the set of $x \in D$ with $x^\ell = 1$. It is a nontrivial elementary abelian $\ell$-group, characteristic in $D$ and hence in $F$. Conjugation by any element of $\mathrm{Out}(G)$ restricts to an automorphism of the normal subgroup $F$, which preserves $V$. So $V$ is normal in $\mathrm{Out}(G)$. The conjugation action $\mathrm{Out}(G) \times V \to V$ is continuous and $V$ is finite and discrete, so the centralizer of $V$, the kernel of the induced homomorphism $\mathrm{Out}(G) \to \mathrm{Aut}(V)$, is closed of finite index, hence open. $\square$

**What remains.**

- *Case (a).* Part 3 turns case (a) into a question about $\mathrm{Out}(G_K)$ alone. Whether $\mathrm{Out}(G_K)$ has a nontrivial finite normal subgroup is not decided here. Parts 1 and 2 say that in case (a), $M = G_L$ for a finite Galois extension $L/K$ of degree at least $2$ whose absolute Galois group is preserved by every automorphism of $G_K$. This alone does not exclude (a), since such fields exist for every $K$. For example, let $I_K$ be the inertia subgroup. Every automorphism of $G_K$ preserves $I_K$ ([invariants recovered from $G_K$](local-field-galois-invariants.md)), and $G_K/I_K \cong \widehat{\mathbb{Z}}$ has exactly one open subgroup of each index $m$. So the absolute Galois group of the unramified extension of $K$ of degree $m$ is preserved by every automorphism of $G_K$.
- *Case (b).* Here $M$ is a closed subgroup of $G_K$ that is not topologically finitely generated, has infinite index, and is preserved by every automorphism of $G_K$. The inertia and wild inertia subgroups are of this kind. Both are preserved by every automorphism ([invariants recovered from $G_K$](local-field-galois-invariants.md)), both have infinite index, since $G_K/I_K \cong \widehat{\mathbb{Z}}$ is infinite, and neither is topologically finitely generated, by elasticity, since both are nontrivial closed normal subgroups of $G_K$. So part 1 alone does not exclude (b).
