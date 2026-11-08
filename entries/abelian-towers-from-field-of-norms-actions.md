---
title: Abelian local towers from their field-of-norms actions
kind: theorem
summary: 'Keating recovers a totally ramified abelian tower of local fields from its field of norms together with the tower Galois action. This is an equivalence of categories, including groups that are not finitely generated; the base may have characteristic zero or p.'
tags: [local-fields, galois-groups, ramification]
edges:
  - {to: fontaine-wintenberger-field-of-norms, label: uses, note: "Retains the faithful tower action on its field of norms [@keating2009, §1, pp. 665–666]."}
  - {to: ramification-filtration, label: uses, note: "The realization also matches lower ramification filtrations [@keating2009, Corollary 1.2, p. 666]."}
---

**Data.** Fix a finite field $k$ of characteristic $p$. Let $\mathcal A$ consist of totally ramified abelian Galois extensions $E/F$, where $F$ is a complete discretely valued field with residue field identified with $k$. Require $[E:F]=\infty$ when $\operatorname{char}F=0$; finite extensions are allowed in characteristic $p$. The field $E$ carries its valuation topology and is not replaced by its completion. Let $\mathcal B$ consist of pairs $(K,A)$, where $K\cong k((T))$ and $A$ is a closed abelian subgroup of $\operatorname{Aut}_k(K)$. Here automorphisms are continuous, fix the residue field, and carry the topology of congruence on a uniformizer [@keating2009, §1, pp. 665–666].

**Morphisms.** In $\mathcal A$, a map $E/F\to E'/F'$ is a continuous embedding $\rho:E\hookrightarrow E'$ inducing the identity on $k$, with both $E'/\rho(E)$ and $F'/\rho(F)$ finite separable. In $\mathcal B$, a map $(K,A)\to(K',A')$ is a continuous $k$-embedding $\sigma:K\hookrightarrow K'$ with $K'/\sigma(K)$ finite separable, such that $A'$ stabilizes $\sigma(K)$ and its restriction has open image in $A$. In both categories the induced group map goes from the second group to the first and has finite kernel and cokernel [@keating2009, §1, pp. 665–666].

**Theorem (Wintenberger–Keating).** The [field-of-norms](fontaine-wintenberger-field-of-norms.md) functor
$$
\mathcal A\longrightarrow\mathcal B,\qquad
E/F\longmapsto\bigl(X_F(E),\operatorname{Gal}(E/F)\bigr),
$$
where the group acts faithfully on the norm field, is an equivalence [@keating2009, Theorem 1.1, p. 666]. Thus every pair occurs, and every morphism of pairs lifts uniquely to a morphism of towers. In particular, the isomorphism statement recovers $E/F$ up to continuous residue-preserving isomorphism from the norm field with its action; the isomorphism must carry the full acting subgroup onto the other one. Wintenberger established the equivalence for abelian $p$-adic Lie groups; Keating removes that restriction [@keating2009, discussion after Theorem 1.1, p. 666].

**Ramification.** For $r\ge0$, put
$$
A[r]=\{\sigma\in A:v_K(\sigma(T)-T)\ge r+1\},
\qquad v_K(T)=1.
$$
The pair has a realization with an isomorphism $A\cong\operatorname{Gal}(E/F)$ carrying $A[r]$ onto the lower ramification subgroup $\operatorname{Gal}(E/F)[r]$ for every $r\ge0$ [@keating2009, Corollary 1.2, p. 666; equation (2.2), p. 667].

**Scope.** The reconstruction retains the action on $K$, not just the abstract group $A$ or the norm field alone. The theorem's morphisms include finite-extension and open-image conditions; it makes no assertion for arbitrary continuous homomorphisms of the acting groups. All citations use the printed pages of the published article.
