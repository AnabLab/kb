---
title: Does formal Hilbert 90 force Massey vanishing in every length?
kind: problem
summary: 'Merkurjev–Scavia ask whether formal Hilbert 90 forces every defined mod-p Massey product of degree-one classes to contain zero. Triples and repeated-endpoint mod-2 quadruples are known; general mod-2 quadruples are unresolved in the checked sources.'
tags: [galois-groups, galois-cohomology, pro-p-groups]
edges:
  - {to: massey-vanishing-conjecture, label: generalizes, note: "Absolute Galois groups satisfy the hypothesis in every characteristic with their canonical orientation [@merkurjevscavia2025hilbert90, Examples 2.1–2.2, p. 4]."}
---

**Hypothesis.** Let $p$ be prime, $G$ profinite and $\theta:G\to\mathbb Z_p^\times$ continuous. For every open subgroup $H\subseteq G$ and every $r\ge1$, require surjectivity of
$$
H^1(H,\mathbb Z/p^r(1)_\theta)\longrightarrow H^1(H,\mathbb Z/p(1)_\theta),
$$
where $(1)_\theta$ denotes the action through $\theta$. This is formal Hilbert 90 [@merkurjevscavia2025hilbert90, §2.2, p. 4].

**Question (Merkurjev–Scavia).** Does the existence of such an orientation imply, for every $n\ge3$ and all $a_i\in H^1(G,\mathbb F_p)$ with trivial coefficients,
$$
\langle a_1,\ldots,a_n\rangle\ne\varnothing
\quad\Longrightarrow\quad
0\in\langle a_1,\ldots,a_n\rangle\subseteq H^2(G,\mathbb F_p)?
$$
This is [@merkurjevscavia2025hilbert90, Question 1.2, p. 2]. Definedness is required; zero adjacent cup products alone do not suffice even for the repeated-endpoint fourfold case [@merkurjevscavia2025hilbert90, paragraph preceding Theorem 1.4, p. 2].

**Known cases and next case.** The [formal Hilbert 90 vanishing theorem](formal-hilbert-90-and-massey-vanishing.md) answers affirmatively for $n=3$, and for $p=2$ and $\langle a,b,c,a\rangle$ [@merkurjevscavia2025hilbert90, Theorems 1.3–1.4, p. 2]. The authors' October 2025 notes still ask the general question and explicitly leave arbitrary fourfold products at $p=2$ unresolved, despite their vanishing theorem for fields [@merkurjevscavia2025liftingnotes, Question 5.3 and Remark 5.6, pp. 28–29].

**Status check.** Scavia's April 2026 memoir again records the two positive cases above [@scavia2026habilitation, §1.2, Theorems 1.8–1.9]. A targeted search through 8 November 2026 found no later resolution; it was not exhaustive. The published article's full text could not be compared.
