---
title: Hodge–Tate reconstruction with algebraic residue fields
kind: theorem
summary: 'For mixed-characteristic complete discretely valued fields with residue fields algebraic over finite fields, Murotani characterizes field embeddings by inertially open Galois homomorphisms of cyclotomic Hodge–Tate type, equivalently by preservation of quasi-Lubin–Tate characters.'
tags: [local-fields, galois-groups, hodge-theory, reconstruction-algorithms]
edges:
  - {to: hodge-tate-geometricity-criterion, label: generalizes, note: "The CHT criterion for geometric open homomorphisms of finite p-adic fields is the finite-residue-field case [@murotani2026geometricity, Corollary 1.10, pp. 8–9]."}
  - {to: field-automorphisms-act-faithfully-on-galois-groups, label: uses, note: "The injectivity in Corollary 1.13 uses Hoshi–Tsujimura's Corollary 4.1 [@murotani2026geometricity, proof of Corollary 1.13, p. 9]."}
---

**Data and conditions.** Let $K_i$ be complete discretely valued fields of mixed characteristic $(0,p)$ with perfect residue fields $k_i$, and let $\alpha:G_{K_1}\to G_{K_2}$ be continuous. Write $I_{K_i}$ for inertia, $\chi_{K_i}$ for the cyclotomic character, and $L=\bar K_1^{\ker\alpha}$. In Murotani's terminology:

- $\alpha$ is *inertially open* if $\alpha(I_{K_1})$ is an open subgroup of $I_{K_2}$.
- It is *geometric* if it is induced by an embedding $\bar K_2\hookrightarrow\bar K_1$ carrying $K_2$ into $K_1$.
- It is of *cyclotomic Hodge–Tate type* (CHT-type) if the topological $G_{K_1}$-module obtained from $\widehat{\bar K_2}$ through $\alpha$ is isomorphic to $\widehat L$, and $\chi_{K_1}=\chi_{K_2}\circ\alpha$.

Here hats denote valuation completions. In particular, the module in the definition is $\widehat L$, which depends on the kernel of $\alpha$ [@murotani2026geometricity, Definition 1.6(ii)–(v), p. 6].

An $E$-valued character, for $E/\mathbb Q_p$ finite, is *quasi-Lubin–Tate* if, after restriction to an open subgroup, it agrees on an open inertia subgroup with a Lubin–Tate character attached to an embedding of $E$ into the corresponding field. The homomorphism $\alpha$ is of *qLT-type* if pullback preserves these characters for every pair of open subgroups $H_i\subset G_{K_i}$ with $\alpha(H_1)\subset H_2$, and every coefficient field $E$ all of whose $\mathbb Q_p$-conjugates lie in both corresponding finite extensions [@murotani2026geometricity, Definitions 1.1(ii), 1.4(i) and 1.6(i), pp. 4–6].

**Theorem (Murotani).** Suppose that each $k_i$ is algebraic over $\mathbb F_p$ and that $\alpha$ is inertially open. Then
$$
\alpha\text{ geometric}
\quad\Longleftrightarrow\quad
\alpha\text{ of CHT-type}
\quad\Longleftrightarrow\quad
\alpha\text{ of qLT-type}.
$$
Every such homomorphism is injective [@murotani2026geometricity, Corollary 1.10, pp. 8–9]. More precisely, field embeddings correspond bijectively to these homomorphisms modulo conjugation by the entire target Galois group:
$$
\operatorname{Hom}(K_2,K_1)
\;\xrightarrow{\sim}\;
\operatorname{Hom}^{\mathrm{IO\text{-}CHT}}(G_{K_1},G_{K_2})
/\operatorname{Inn}(G_{K_2}).
$$
The same holds with qLT in place of CHT [@murotani2026geometricity, Corollary 1.13, p. 9]. The residue fields may be infinite; finiteness over $\mathbb Q_p$ is not assumed.

**What is recovered for general perfect residues.** Let $F_i^{\mathrm{alg}}$ be the relative algebraic closure of $\mathbb Q_p$ in $K_i$, and let $F_i$ be its closure in $K_i$. Without the algebraicity hypothesis on $k_i$, an inertially open qLT-type $\alpha$ still descends through the restriction surjections to an injective geometric map
$$
\widetilde\alpha:G_{F_1}\longrightarrow G_{F_2}.
$$
This is the conclusion for the completed algebraic parts, rather than a geometricity assertion for $\alpha$ on the full fields [@murotani2026geometricity, Theorem 1.7, pp. 6–8]. The proof recovers compatible embeddings of finite extensions of $\mathbb Q_p$ from their Lubin–Tate characters and then passes to the closures [@murotani2026geometricity, proof of Theorem 1.7, pp. 7–8].

**Source.** Published in 2026; the exact locations above refer to arXiv version 2 of December 2023.
