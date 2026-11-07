---
title: Neukirch–Uchida with restricted ramification
kind: theorem
summary: Shimizu shows that $G_{K_1,S_1} \cong G_{K_2,S_2}$ implies $K_1 \cong K_2$ for sets of primes with suitably large Dirichlet density, and that the isomorphism comes from a unique isomorphism of the extensions under a density condition. Ivanov treats stable sets.
tags: [number-fields, galois-groups]
edges:
  - {to: neukirch-uchida-theorem, label: generalizes, note: "The case where each $S_i$ contains all primes, so that $G_{K_i,S_i}$ is the absolute Galois group."}
---

**Setting.** For a number field $K$ and a set $S$ of primes of $K$, let $K_S/K$ be the maximal extension unramified outside $S$, and let $G_{K,S} = \mathrm{Gal}(K_S/K)$.

**Weak form.** Let $S_i$ contain the archimedean primes of $K_i$, and let $\tilde K_i$ be the Galois closure of $K_i/\mathbb{Q}$. If $G_{K_1,S_1} \cong G_{K_2,S_2}$ and $\delta_{\sup}(S_1) + \delta_{\inf}(S_2) > 2 - 1/[\tilde K_1 \tilde K_2 : \mathbb{Q}]$, then $K_1 \cong K_2$ [@shimizu2022, Theorem 5.8]. A sharper form has as its main assumption that the Dirichlet density of the set of rational primes all of whose primes above lie in $S_i$, and which split completely in $K_i$, is nonzero for one $i$ [@shimizu2022, Theorem 5.1].

**Functorial form.** Let $\sigma : G_{K_1,S_1} \to G_{K_2,S_2}$ be an isomorphism. Assume that for $i = 1, 2$ and every finite Galois subextension $L_i$ of $K_{i,S_i}/K_i$, the same kind of density, for primes splitting completely in $L_i$, is nonzero. Then $\sigma$ is induced by a unique isomorphism $K_{2,S_2} \to K_{1,S_1}$ carrying $K_2$ to $K_1$ [@shimizu2023, §0]. The precise statement is [@shimizu2023, Theorem 2.4].

**Stable sets.** Ivanov proved the weak form for stable sets, which can have arbitrarily small positive density, under assumptions including that $K_1$ is totally imaginary and Galois over $\mathbb{Q}$ [@ivanov2017, Theorem 1.1]. A direct use of Chebotarev is impossible there [@ivanov2017, §1].

**Key steps.** As for Neukirch–Uchida, one first establishes a local correspondence between decomposition groups [@shimizu2022, Theorem 2.6]. A key step is to recover the $l$-adic cyclotomic character of an open subgroup group-theoretically [@shimizu2022, Abstract]. This adapts the Iwasawa-theoretic methods of [Saïdi–Tamagawa](m-step-solvable-local-theory.md) [@shimizu2022, §0].

**Finite $S$.** For function fields over a finite field and finite $S$, the question was answered by Tamagawa, and the number field analogue of his proof seems out of reach [@ivanov2017, §1].

**Mono-anabelian form.** A group-theoretic reconstruction from $G_{K,S}$, for some sets $S$ of density $1$, is given in [@maowang2025, Abstract].

**Status of the sources.** The source for the mono-anabelian form is an arXiv preprint, whose arXiv page lists no journal reference as of November 2026. Locations for Ivanov's and Shimizu's published papers refer to their arXiv versions.
