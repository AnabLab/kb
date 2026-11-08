---
title: Fourfold mod-2 Massey products and Brauer groups
kind: theorem
summary: 'Every defined mod-2 fourfold Galois Massey product contains zero (Merkurjev–Scavia). In characteristic different from 2, norm–Brauer criteria characterize definedness and vanishing, and vanishing descends through odd-degree extensions.'
tags: [galois-cohomology, galois-groups]
edges:
  - {to: massey-vanishing-conjecture, label: addresses, note: 'Settles the case of length four and prime 2.'}
  - {to: symbol-length-for-elementary-type-groups, label: analogous-to, note: 'The final paragraph concerns every value, rather than the existence of a zero value.'}
---

**Vanishing (Merkurjev–Scavia).** For every field $F$ and $x_i\in H^1(G_F,\mathbb F_2)$,
$$\langle x_1,x_2,x_3,x_4\rangle\ne\varnothing
\quad\Longrightarrow\quad
0\in\langle x_1,x_2,x_3,x_4\rangle$$
[@merkurjevscavia2025fourfold, Theorem 1.2, p. 3].

**Norm–Brauer criteria.** Suppose $\operatorname{char}F\ne2$ and $a,b,c,d\in F^\times$, viewed as Kummer classes. Set
$$F_a=F[t]/(t^2-a),\qquad F_d=F[u]/(u^2-d),\qquad F_{a,d}=F_a\otimes_F F_d.$$
These are étale algebras, allowing square or dependent endpoints. Write $(\alpha,\delta)$ for the quaternion Brauer class over $F_{a,d}$ [@merkurjevscavia2025fourfold, Notation, p. 4]. Among pairs $\alpha\in F_a^\times$, $\delta\in F_d^\times$ satisfying
$$N_{F_a/F}(\alpha)=b,\qquad N_{F_d/F}(\delta)=c
\quad\text{in }F^\times/F^{\times2},$$
the product $\langle a,b,c,d\rangle$ is:

- **defined** exactly when some pair has $(\alpha,\delta)$ in the image of $\operatorname{Br}(F)[2]\to\operatorname{Br}(F_{a,d})[2]$;
- **vanishing** exactly when some pair has $(\alpha,\delta)=0$.

Both are existential criteria; the witnessing pairs may differ [@merkurjevscavia2025fourfold, Proposition 2.1, p. 5].

**Odd-degree descent.** In this characteristic, $\langle a,b,c,d\rangle$ vanishes over $F$ exactly when it vanishes over some finite odd-degree extension [@merkurjevscavia2025fourfold, Remark 4.1(1), p. 15].

**All values.** For $G_F(2)$ with $\operatorname{char}F\ne2$, Efrat reports, attributing the observation to Merkurjev–Scavia, that every value of a fourfold mod-2 Massey product is a sum of at most four degree-one cup products. The cited passage gives no proof [@efrat2025, §16.5, p. 40]. This differs from asking whether zero occurs. For bounds at every length on elementary-type groups, see [uniform symbol-length bounds](symbol-length-for-elementary-type-groups.md).
