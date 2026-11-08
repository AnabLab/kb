---
title: The Massey vanishing conjecture
kind: problem
summary: 'Mináč–Tân predict that every defined mod-$p$ Massey product of degree-one Galois classes contains zero. Known cases include triples, fourfold products at $p=2$, number fields, and fields of virtual cohomological dimension at most one.'
tags: [galois-groups, galois-cohomology, number-fields]
edges:
  - {to: norm-residue-isomorphism-theorem, label: analogous-to, note: "Both constrain absolute Galois groups through cohomology; Massey products also involve the continuous cochain algebra."}
---

**Conjecture (Mináč–Tân).** Let $F$ be any field, $p$ any prime, and $n\geq3$. With trivial coefficients $\mathbb{F}_p$ and continuous Galois cohomology, the assertion is

$$\langle x_1,\ldots,x_n\rangle\ne\varnothing
\quad\Longrightarrow\quad
0\in\langle x_1,\ldots,x_n\rangle
\qquad(x_i\in H^1(G_F,\mathbb{F}_p)).$$

There is no root-of-unity or characteristic hypothesis. This is Conjecture 1.1 of [@minactan2016, p. 2]; the authors explain that their earlier formulation assumed a primitive $p$-th root of unity [@minactan2016, §1, p. 1].

**Meaning of defined and vanishing.** The product is a subset of $H^2(G_F,\mathbb{F}_p)$ obtained by varying its defining system of continuous cochains. It is *defined* when at least one defining system exists and *vanishes* when at least one such system gives the zero class. Vanishing does not mean that every value is zero [@harpazwittenberg2023, §1, p. 1].

For a concrete formulation, let $U_{n+1}(\mathbb{F}_p)$ be the upper unitriangular group and let $Z=\{I+tE_{1,n+1}:t\in\mathbb{F}_p\}$ be its center. Dwyer's criterion says that the product is defined exactly when there is a continuous homomorphism $G_F\to U_{n+1}/Z$ whose first superdiagonal is $(x_1,\ldots,x_n)$, and vanishes exactly when there is one to $U_{n+1}$ with that superdiagonal [@merkurjevscavia2025fourfold, §1, pp. 1–2]. The conjecture asks for the latter homomorphism to exist; it does not ask to lift each fixed homomorphism to $U_{n+1}/Z$.

**Known cases.**

- $n=3$, every field and every prime: the [triple Massey vanishing theorem](triple-massey-products-in-galois-cohomology.md) [@minactan2016, Theorem 1.2, p. 2].
- $n=4$, $p=2$, every field: Merkurjev–Scavia [@merkurjevscavia2025fourfold, Theorem 1.2, p. 3].
- Every $n\geq3$ and every prime over number fields: Harpaz–Wittenberg [@harpazwittenberg2023, Theorem 1.3, p. 3].
- Every $n\geq3$ and every prime for fields of virtual cohomological dimension at most one: Pál–Szabó proved strong vanishing for degree-one classes [@palszabo2026, Theorem 1.7, p. 155]. Pál–Quick's [formality theorem](galois-cochain-formality-in-virtual-dimension-one.md) extends strong vanishing to arbitrary degrees [@palquick2025, Theorem 1.10, p. 1836]. For odd $p$, ordinary vanishing is immediate from $H^2(G_F,\mathbb F_p)=0$; the substantive case is $p=2$ [@palquick2025, Remarks 1.4 and 1.9, pp. 1834 and 1836].

For the last bullet, strong vanishing implies the stated conjecture as follows. In a defining system, $\delta a_{i,i+2}=a_{i,i+1}\cup a_{i+1,i+2}$, so each adjacent cup product $x_i\cup x_{i+1}$ is zero in cohomology. Strong vanishing then gives $0\in\langle x_1,\ldots,x_n\rangle$.

**The stronger assertion is false.** Strong Massey vanishing asks that the weaker hypothesis

$$x_i\cup x_{i+1}=0\qquad(1\leq i<n)$$

already imply $0\in\langle x_1,\ldots,x_n\rangle$. Definedness always implies these adjacent cup products vanish [@merkurjevscavia2025fourfold, §1, p. 1], but the converse fails already for $n=4$. In the Harpaz–Wittenberg counterexample, take $F=\mathbb{Q}$, $p=2$ and the Kummer classes of $(34,2,17,34)$. All three adjacent cup products are zero, but the fourfold Massey product is undefined [@guillotminactopazwittenberg2018, Example A.15, p. 35]. An undefined product does not contradict the conjecture stated above.

**Status.** The general assertion remains conjectural in the literature checked on 8 November 2026. Pál–Quick's October 2026 preprint still states it as a conjecture and explicitly records the triple, fourfold-at-$2$, and number-field cases [@palquick2026, §1, first paragraph, pp. 1–2]. A search through that date found no general resolution; it was not exhaustive.
