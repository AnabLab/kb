---
title: Faltings' Tate-module and isogeny theorems
kind: theorem
summary: Over a number field, rational Tate modules of abelian varieties are semisimple and determine isogeny classes. Galois-equivariant maps between integral Tate modules form the completed group $\operatorname{Hom}_K(A,B)\otimes\mathbb Z_\ell$.
tags: [number-fields, galois-groups]
edges:
  - {to: tate-full-faithfulness-for-p-divisible-groups, label: analogous-to, note: 'Both recover morphisms from Tate modules over a fixed base; here the Hom group is tensored with $\mathbb Z_\ell$.'}
  - {to: mochizuki-hom-theorem-for-hyperbolic-curves, label: analogous-to, note: 'Mochizuki treats the Tate conjecture as the abelian prototype for recovering maps from arithmetic fundamental groups [@mochizuki2003topics, §1, p. 122].'}
---

**Data.** Let $K$ be a number field, let $A,B/K$ be abelian varieties, and let $\ell$ be a prime. Write $G_K=\operatorname{Gal}(\bar K/K)$ and
$$
T_\ell A=\varprojlim_n A[\ell^n](\bar K),\qquad
V_\ell A=T_\ell A\otimes_{\mathbb Z_\ell}\mathbb Q_\ell,
$$
with transition maps multiplication by $\ell$ [@faltings1983, §1, p. 349].

**Theorems (Faltings).**

1. The $\mathbb Q_\ell[G_K]$-module $V_\ell A$ is semisimple [@faltings1983, §5, Satz 3, p. 360].
2. The natural map

   $$
   \operatorname{Hom}_K(A,B)\otimes_{\mathbb Z}\mathbb Z_\ell
   \xrightarrow{\sim}
   \operatorname{Hom}_{\mathbb Z_\ell[G_K]}(T_\ell A,T_\ell B)
   $$
   is an isomorphism [@faltings1983, §5, Satz 4 and Korollar 1, pp. 360–361].

3. The varieties $A$ and $B$ are $K$-isogenous if and only if $V_\ell A\cong V_\ell B$ as $G_K$-representations, equivalently if their local $L$-factors agree at almost all finite places of $K$ [@faltings1983, §5, Korollar 2, p. 361].

The field $K$ and the $G_K$-action are given. Part 3 identifies an isogeny class; part 2 identifies the completed Hom group. Compare [Tate's full faithfulness for $p$-divisible groups](tate-full-faithfulness-for-p-divisible-groups.md), which identifies the Hom group of the $p$-divisible groups themselves [@tate1967pdivisible, §4.2, Corollary 1, p. 181].

**Role in reconstruction.** Mochizuki uses parts 1 and 2 in recovering non-CM elliptic curves from all their finite [torsion fields](torsion-fields-determine-non-cm-elliptic-curves.md) [@mochizuki2003topics, proof of Theorem 1.1, pp. 123–124]. Semisimplicity also holds over every field finitely generated over $\mathbb Q$. Tsujimura records this extension and uses it as the characteristic-zero input to the construction of central regular elements for the [Grunewald–Segal principle](grunewald-segal-principle-for-semi-abelian-varieties.md) [@tsujimura2026gs, Theorem 2.2 and the discussion following Definition 2.6, pp. 10–11].

**Erratum.** The 1984 correction replaces the constant-height assertion in the proof's intermediate Satz 2 by eventual constancy, which suffices for the subsequent arguments [@faltings1984erratum, p. 381].
