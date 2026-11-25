---
title: Raynaud full faithfulness for finite flat group schemes
kind: theorem
summary: 'If e < p-1, a finite flat commutative p-primary group scheme and all its morphisms are determined by its generic Galois module. At e = p-1, the constant group of order p and mu_p give a sharp failure, including over Q_2.'
tags: [local-fields, group-schemes, galois-representations, reconstruction]
edges:
  - {to: tate-full-faithfulness-for-p-divisible-groups, label: analogous-to, note: 'Tate recovers morphisms of whole p-divisible groups without this ramification restriction; Raynaud recovers morphisms at a single finite level.'}
  - {to: raynaud-finite-flat-torsion-criterion, label: analogous-to, note: 'That criterion produces a unique p-divisible model from independently realizable torsion levels, even where individual finite flat models need not be unique.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, $R=\mathcal O_K$, $k$ its residue field and $e=v_K(p)$ for the normalized valuation. Let $\mathcal F_R$ be the category of finite flat commutative $R$-group schemes killed by a power of $p$. Its generic-fibre functor can be written
$$\mathcal G\longmapsto\mathcal G(\bar K),$$
with values in finite continuous $p$-primary $G_K$-modules: finite group schemes over the characteristic-zero field $K$ are étale.

**Theorem (Raynaud).** If $e<p-1$, this functor is fully faithful. Explicitly, for $\mathcal G,\mathcal H\in\mathcal F_R$,
$$\operatorname{Hom}_R(\mathcal G,\mathcal H)
\xrightarrow{\sim}
\operatorname{Hom}_{G_K}\bigl(\mathcal G(\bar K),\mathcal H(\bar K)\bigr).$$
Moreover, the scheme-theoretic kernel and the fppf cokernel of every such morphism are finite flat. A finite $p$-primary Galois module consequently has at most one finite flat model, up to the unique isomorphism respecting its generic-fibre identification [@raynaud1974schemas, Théorème 3.3.3 and Corollaire 3.3.6(1), p. 268].

**Sharpness (proved here).** For every prime $p$, the conclusion fails over $K=\mathbb Q_p(\zeta_p)$, where $e=p-1$. In particular this includes $p=2$, with $K=\mathbb Q_2$. Put
$$\mathcal C=(\mathbb Z/p\mathbb Z)_R,\qquad \mathcal M=\mu_{p,R}.$$
The map
$$f:\mathcal C\longrightarrow\mathcal M,\qquad a\longmapsto\zeta_p^a$$
is a morphism over $R$ and an isomorphism on generic fibres. Nevertheless it is not an isomorphism over $R$, its generic inverse does not extend, and its scheme-theoretic kernel is not flat.

*Proof.* The polynomial $((1+X)^p-1)/X$ is Eisenstein, so $\zeta_p-1$ is a uniformizer and $e=p-1$; this also holds for $p=2$. Each $\zeta_p^a$ lies in $R^\times$, so the formula defines a group-scheme map. Over $K$ the $p$ roots are distinct and exhaust $\mu_p$, proving that $f_K$ is an isomorphism.

In characteristic $p$ the only $p$th root of unity in a field is $1$. Thus all $\zeta_p^a$ reduce to $1$, and $f_k$ is the zero homomorphism. The special fibre $\mathcal C_k$ has $p$ distinct components, whereas
$$\mathcal M_k=\operatorname{Spec}k[T]/((T-1)^p)$$
is connected and nonreduced. Hence $f$ cannot be an isomorphism.

Generic-fibre restriction on morphisms between finite flat $R$-schemes is always injective: the coordinate ring of the source is torsion-free, so two algebra maps agreeing after inverting a uniformizer agree over $R$. If $f_K^{-1}$ extended to $g$, both composites would therefore be the identity, contradicting the preceding paragraph. This proves failure of fullness as well as uniqueness of models.

Finally, formation of the scheme-theoretic kernel commutes with base change. Its generic fibre is the trivial group scheme, of rank $1$, while its special fibre is all of $\mathcal C_k$, of rank $p$, because $f_k=0$. The kernel is finite as a closed subscheme of $\mathcal C$. If it were flat over the local ring $R$, its rank would be constant. It is therefore not flat. $\square$

**Finite levels versus towers.** The small-ramification hypothesis is a condition for recovering *individual* models. It is not required by [Tate full faithfulness](tate-full-faithfulness-for-p-divisible-groups.md) for entire compatible Tate modules, or by [Raynaud's torsion criterion](raynaud-finite-flat-torsion-criterion.md) for the existence of a $p$-divisible model. For $p=2$, the inequality $e<p-1$ is vacuous; the example explains why no unrestricted finite-level analogue follows from those tower theorems.
