---
title: The Massey vanishing conjecture
kind: problem
summary: 'Mináč–Tân predict that every defined mod-$p$ Massey product of degree-one Galois cohomology classes contains zero. This holds for triples, for fourfold products at $p=2$, and over number fields. The stronger adjacent-cup-product criterion is false.'
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

**The stronger assertion is false.** Strong Massey vanishing asks that the weaker hypothesis

$$x_i\cup x_{i+1}=0\qquad(1\leq i<n)$$

already imply $0\in\langle x_1,\ldots,x_n\rangle$. Definedness always implies these adjacent cup products vanish [@merkurjevscavia2025fourfold, §1, p. 1], but the converse fails. In the Harpaz–Wittenberg counterexample, take $F=\mathbb{Q}$, $p=2$ and the Kummer classes of $(34,2,17,34)$. All three adjacent cup products are zero, but the fourfold Massey product is undefined [@guillotminactopazwittenberg2018, Example A.15, p. 35]. An undefined product does not contradict the conjecture stated above.

**Status.** The general assertion remains conjectural in the literature checked on 8 November 2026. Pál–Quick's October 2026 preprint still states it as a conjecture and records the known cases above [@palquick2026, §1, paragraphs 3–5]. A search through that date found no general resolution; it was not exhaustive.
