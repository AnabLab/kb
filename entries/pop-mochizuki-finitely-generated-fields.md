---
title: Pop's theorem for finitely generated fields
kind: theorem
summary: Infinite fields finitely generated over a prime field are determined by their absolute Galois groups, up to purely inseparable extensions in positive characteristic. In characteristic $0$ this is a bijection between field isomorphisms and outer isomorphisms of Galois groups.
tags: [function-fields, number-fields, galois-groups]
edges:
  - {to: neukirch-uchida-theorem, label: generalizes, note: "Number fields are the case of transcendence degree $0$ in characteristic $0$."}
  - {to: uchida-global-function-fields, label: generalizes, note: "Up to the purely inseparable extensions in the statement."}
---

**Statement.** Let $K, L$ be infinite fields finitely generated over the prime field, and let $\Phi : G_K \to G_L$ be an isomorphism of profinite groups. Then there are purely inseparable extensions $K'/K$ and $L'/L$ with $K' \cong L'$, and an isomorphism $\varphi$ between their separable closures with $\Phi(g) = \varphi^{-1} \circ g \circ \varphi$ for all $g$ [@szamuely2004, Théorème 1.1]. The purely inseparable extensions cannot be avoided, because restriction $G_K \to G_{K'}$ is an isomorphism for a purely inseparable $K'/K$ [@szamuely2004, Remarques 1.2].

**Characteristic $0$.** Here the rule sending a field isomorphism to the induced isomorphism of Galois groups gives a bijection between field isomorphisms and isomorphisms of Galois groups modulo inner automorphisms [@szamuely2004, Remarques 1.2]. In particular, a field finitely generated over $\mathbb{Q}$ is determined up to isomorphism by its absolute Galois group.

**Mochizuki's relative form.** If $K, L$ are finitely generated over a sub-$p$-adic field $k$, meaning a field embeddable in a finitely generated extension of $\mathbb{Q}_p$, then every $G_k$-morphism $G_K \to G_L$ with open image is induced by a $k$-morphism $L \to K$ [@szamuely2004, §2, p. 406]. Mochizuki states this for function fields $K, L$ over $k$ in which $k$ is algebraically closed, and shows that the $k$-morphisms correspond bijectively to these homomorphisms modulo inner automorphisms by elements of $\ker(G_L \to G_k)$ [@mochizuki1999, Theorem 17.1]. He deduces it from his theorem on hyperbolic curves, which is recorded in [Mochizuki's Hom theorem](mochizuki-hom-theorem-for-hyperbolic-curves.md).

**Attribution.** The theorem and the history above are taken from Szamuely's Bourbaki exposé, except that Mochizuki's relative form has also been checked in his paper. Pop's original papers have not been opened for this entry.
