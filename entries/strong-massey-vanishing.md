---
title: Strong Massey vanishing
kind: note
summary: 'Zero adjacent cup products imply Massey vanishing for triples, but not universally from length 4 onward. For every odd prime p and number field K without a primitive p-th root of unity, strong vanishing holds at every length, for both absolute and tame Galois groups.'
tags: [galois-groups, galois-cohomology, number-fields, counterexample]
edges:
  - {to: galois-cochain-formality-in-virtual-dimension-one, label: uses, note: "a positive case for all primes and lengths, even with inputs in arbitrary cohomological degrees"}
  - {to: massey-vanishing-conjecture, label: implies, note: "For each fixed field, prime and length, the strong property implies ordinary vanishing; the universal strong assertion is false [@merkurjevscavia2025, p. 832]."}
  - {to: triple-massey-products-in-galois-cohomology, label: uses, note: "The n = 3 case is exactly the triple vanishing theorem."}
---

**Property.** Fix a profinite group $G$, a prime $p$ and $n\ge3$. With continuous cohomology and trivial coefficients, *strong $n$-fold Massey vanishing* means

$$
x_i\cup x_{i+1}=0\quad(1\le i<n)
\quad\Longrightarrow\quad
0\in\langle x_1,\ldots,x_n\rangle
\qquad(x_i\in H^1(G,\mathbb{F}_p)).
$$

Vanishing means the product contains zero, and therefore is defined; an empty product is undefined [@maireminacramakrishnatan2026, Definitions 1.1 and 1.3, pp. 2–3].

**Refuted universal assertion.** The strong Massey vanishing conjecture asked for this property for every $G=G_F$, every prime and every $n\ge3$. Mináč–Tân posed the question. It is stronger than the [ordinary conjecture](massey-vanishing-conjecture.md), which assumes definedness rather than just zero adjacent cup products. For $n=3$, definedness is equivalent to those cup conditions, so the [triple vanishing theorem](triple-massey-products-in-galois-cohomology.md) proves the strong property for every field and prime [@merkurjevscavia2025, p. 832].

For every prime $p$ and base field $F$ of characteristic different from $p$, Merkurjev–Scavia construct an extension $L/F$ with zero adjacent cups but an undefined fourfold product; see [non-formality of Galois cochains](non-formality-of-galois-cochains.md). Appending zero characters gives undefined products at every length $n\ge4$ [@merkurjevscavia2025, Theorem 1.3 and following paragraph, pp. 832–833]. These counterexamples refute the universal strong assertion without refuting ordinary vanishing.

**Positive virtual-dimension theorem.** For a field of virtual cohomological dimension at most one, Pál–Quick prove strong vanishing for every prime and length, including inputs in arbitrary cohomological degrees [@palquick2025, Theorem 1.10]. See [formality of Galois cochains in virtual dimension one](galois-cochain-formality-in-virtual-dimension-one.md).

**Positive number-field theorem (Maire–Mináč–Ramakrishna–Tân).** Let $K$ be a number field, $p$ an odd prime and $\zeta_p\notin K$, where $\zeta_p$ is a primitive $p$-th root of unity. For every $n\ge3$, both

$$G_K=\mathrm{Gal}(\overline K/K)
\quad\text{and}\quad
G_K^{\mathrm{ta}}=\mathrm{Gal}(K^{\mathrm{ta}}/K)
$$

satisfy strong $n$-fold Massey vanishing. Here $K^{\mathrm{ta}}$ is the maximal Galois extension tamely ramified at every finite prime [@maireminacramakrishnatan2026, §1, p. 1, Theorem 1.1, p. 4, and Theorem 4.1, p. 14]. There is no bound $n<p$ or independence hypothesis on the characters. The proof constructs local lifts to upper unitriangular groups and applies a global lifting theorem that introduces only tame ramification [@maireminacramakrishnatan2026, proof of Theorem 4.1, pp. 14–15].
