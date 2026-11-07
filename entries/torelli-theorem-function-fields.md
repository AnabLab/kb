---
title: A Torelli theorem for higher-dimensional function fields
kind: theorem
summary: For a function field $K|k$ of transcendence degree at least $2$ over an algebraically closed field embedded in $\mathbb{C}$, the mixed Hodge structure on $H^1(K|k, \Lambda(1))$ and the kernel of the cup product determine the isomorphism type of $K|k$, even with rational coefficients.
tags: [function-fields, milnor-k-theory]
edges:
  - {to: bogomolov-pop-conjecture, label: analogous-to, note: "Mixed Hodge structures replace Galois groups, with the cup product as the two-step nilpotent data."}
  - {to: pro-l-strategy-for-bogomolov-pop, label: motivated-by, note: "It combines 1-motives with reconstruction methods from birational anabelian geometry [@topaz2025, §1.2]."}
---

**Statement.** Let $k$ be an algebraically closed field with an embedding into $\mathbb{C}$, let $\Lambda$ be a subring of $\mathbb{Q}$, and let $K|k$ be a function field with $\mathrm{trdeg}(K|k) \ge 2$. Define $H^i(K|k, \Lambda(j))$ as the colimit of Betti cohomology over nonempty open subvarieties of a model. The isomorphism type of $K|k$ is determined by the mixed Hodge structure $H^1(K|k, \Lambda(1))$ together with the set of pairs $(x, y)$ of its elements with $x \cup y = 0$ [@topaz2025, Theorem A].

**Method.** The proof combines Deligne's comparison of a 1-motive with its Hodge realization, the Picard 1-motive, and reconstruction methods of Bogomolov, Bogomolov–Tschinkel and Pop. For $\Lambda = \mathbb{Q}$, the known global methods break down, and arguments connecting algebraic dependence with the cup product replace them [@topaz2025, §1.2].
