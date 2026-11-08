---
title: Cofinality of Galois cup products
kind: theorem
summary: 'Every augmented bilinear map over $\mathbb F_p$ satisfying the Kummer identities embeds into a field''s mod-p cup product, with its target identified with $H^2$ (Bar-On–Efrat). Degree one may need to grow, as the four-cycle example shows.'
tags: [galois-cohomology, milnor-k-theory, pro-p-groups]
edges:
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "It identifies Galois cohomology as a purely quadratic algebra determined by its degree-one product [@baronefrat2026, §4, pp. 5–7]."}
  - {to: cohomological-tests-do-not-characterize-galois-groups, label: analogous-to, note: "The four-cycle example there also shows why the degree-one enlargement in this theorem can be necessary."}
  - {to: right-angled-artin-pro-p-galois-groups, label: analogous-to, note: "At p = 2 the same forbidden induced graphs characterize realization of the augmented cup-product data [@baronefrat2026, Theorem 10.5]."}
---

**Setting.** Fix a prime $p$. An *augmented bilinear map* consists of $\mathbb F_p$-vector spaces $V,W$, a bilinear map $b:V\times V\to W$, and $\epsilon\in V$ such that

$$
2\epsilon=0,\qquad b(v,\epsilon+v)=0\quad(v\in V).
$$

These are the identities satisfied by a field's cup product with $\epsilon=(-1)_F$, the Kummer class of $-1$ [@baronefrat2026, §2, p. 3, and §4, pp. 5–6]. Write $H^i(F)=H^i(G_F,\mathbb F_p)$ with trivial coefficients.

**Theorem** (Bar-On–Efrat). For every such $(V,W,b,\epsilon)$ there is a field $F$ containing a primitive $p$th root of unity, an injective linear map $f_1:V\to H^1(F)$, and a linear isomorphism $f_2:W\to H^2(F)$ satisfying

$$
f_1(\epsilon)=(-1)_F,\qquad
f_1(v)\cup f_1(w)=f_2(b(v,w)).
$$

No finite-dimensionality or surjectivity assumption on $b$ is needed [@baronefrat2026, Theorem 8.1, pp. 13–14].

Without an augmentation, the same conclusion concerning $f_1,f_2$ and products holds for every skew-symmetric bilinear map $b$, meaning $b(v,w)=-b(w,v)$. At $p=2$ this allows nonzero diagonal values [@baronefrat2026, Lemma 2.2, p. 4, and Corollary 8.2, p. 14].

**Construction.** The proof extends the domain one dimension at a time, using generic splitting fields to enforce the prescribed products while preserving injectivity. A maximality argument covers $V$; a final extension makes $f_2$ surjective [@baronefrat2026, Proposition 7.1 and proof of Theorem 8.1, pp. 10–14].

**Scope.** Cofinality concerns the bilinear data, with degree one allowed to grow. Even when the values of $b$ span $W$, $f_1$ cannot always be an isomorphism: at $p=2$, the augmented cup product of the four-cycle [right-angled Artin group](right-angled-artin-pro-p-galois-groups.md) is not of field type [@baronefrat2026, Theorem 10.5 and Example 10.6, pp. 18–19]. Its common-slot obstruction is recorded in [the example passing unipotent and Massey tests](cohomological-tests-do-not-characterize-galois-groups.md).
