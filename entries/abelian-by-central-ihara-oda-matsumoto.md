---
title: The abelian-by-central form of Ihara's question and the Oda–Matsumoto conjecture
kind: theorem
summary: Reconstruction gives abelian-by-central forms of Ihara's question and the Oda–Matsumoto conjecture, describing $\mathrm{Gal}_{k_0}$ through automorphisms of geometric data, up to scalars. Pop formulated and proved a pro-$\ell$ form, and Topaz a mod-$\ell$ form in dimension at least $5$.
tags: [function-fields, galois-groups]
edges:
  - {to: pop-reconstruction-from-divisorial-inertia, label: uses, note: "The form in [@pop2018, Theorem 1.3] is an immediate consequence of its Theorem 1.2."}
  - {to: combinatorial-geometry-reconstruction, label: uses, note: "For the mod-$\\ell$ form, where it plays a crucial role [@topaz2018, §1]."}
  - {to: mod-l-reconstruction-from-rational-quotients, label: analogous-to, note: "The mod-$\\ell$ form develops the same kind of global theory [@topaz2018, §1]."}
---

**Pro-$\ell$ form.** Pop first formulated and proved a pro-$\ell$ abelian-by-central strengthening, for certain categories of varieties and for so-called connected subcategories [@topaz2018, §1.3]. His later preprint gives another form. Let $k_0$ be a perfect field of characteristic different from $\ell$, $k$ an algebraic closure, $X$ a geometrically integral $k_0$-variety, and $K$ the function field of $X$ over $k$. Write $\overline{\mathrm{Aut}}^c$ for automorphisms modulo $\ell$-adic units. If $\dim(X) > \dim(k_0) + 1$, there is a canonical exact sequence $1 \to \mathrm{Aut}^F_k(K) \to \overline{\mathrm{Aut}}^c(\Pi^a_K) \to \mathrm{Aut}^F_{k_K}(k) \to 1$, where $k_K$ is the fixed field of the action on $k$, up to Frobenius twists. So if $\mathrm{Aut}^F_k(K) = 1$ and $k_K = k_0$, then $\mathrm{Gal}_{k_0} \to \overline{\mathrm{Aut}}^c(\Pi^a_K)$ is an isomorphism, and the pro-$\ell$ abelian-by-central form and the classical form hold for the system of open neighbourhoods of the generic point of $X$ [@pop2018, Theorem 1.3].

**Mod-$\ell$ form.** Let $k_0$ be an infinite perfect field of characteristic different from $\ell$, and let $\mathcal{U}$ be a birational system of dimension at least $5$, with a finite tuple $\mathbf{a}$ of elements of $k_0^\times$. Then the canonical Galois representation $\mathrm{Gal}_{k_0} \to \overline{\mathrm{Aut}}^c(\pi^a|\mathcal{U}_{\mathbf{a}})$, with the target taken modulo $(\mathbb{Z}/\ell)^\times$, is an isomorphism [@topaz2018, Theorem A]. For precise definitions of these categories, see [@topaz2018, §1].

**Why dimension 5.** The bound enters through the [theorem on combinatorial geometries](combinatorial-geometry-reconstruction.md) and two lemmas in the proof, and it seems to be the best one can presently hope for in the mod-$\ell$ setting [@topaz2018, §1].

**Attribution.** Pop's earlier paper has not been opened for this entry. The form above is taken from a 2018 preprint, whose arXiv page lists no journal reference as of November 2026.
