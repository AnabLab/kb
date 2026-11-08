---
title: Formal Hilbert 90 forces triple Massey vanishing
kind: theorem
summary: 'For profinite groups with a p-adic character satisfying formal Hilbert 90, zero adjacent mod-p cup products imply triple Massey vanishing. At $p=2$, defined products $\langle a,b,c,a\rangle$ also vanish (Merkurjev–Scavia).'
tags: [galois-groups, galois-cohomology, pro-p-groups]
edges:
  - {to: massey-vanishing-under-formal-hilbert-90, label: addresses, note: "Settles the question for triples and for defined repeated-endpoint fourfold products at p = 2 [@merkurjevscavia2025hilbert90, Theorems 1.3–1.4, p. 2]."}
  - {to: kummerian-obstruction-to-galois-realizability, label: analogous-to, note: "The hypothesis imposes the twisted H1 lifting condition on every open subgroup, allowing general profinite groups and characters."}
  - {to: triple-massey-products-in-galois-cohomology, label: generalizes, note: "Absolute Galois groups satisfy formal Hilbert 90 with their canonical orientation [@merkurjevscavia2025hilbert90, Example 2.2, p. 4]."}
---

**Hypothesis.** Let $p$ be prime, $G$ profinite and $\theta:G\to\mathbb{Z}_p^\times$ continuous. Write $\mathbb{Z}/p^n(1)_\theta$ for the module with action through $\theta$. Formal Hilbert 90 means that reduction
$$
H^1(H,\mathbb{Z}/p^n(1)_\theta)\longrightarrow H^1(H,\mathbb{Z}/p(1)_\theta)
$$
is surjective for every open $H\subseteq G$ and every $n\ge1$ [@merkurjevscavia2025hilbert90, §2.2, p. 4].

**Theorem (Merkurjev–Scavia).** Under this hypothesis, for $a,b,c\in H^1(G,\mathbb{F}_p)$ with trivial coefficients,
$$
a\cup b=b\cup c=0
\quad\Longleftrightarrow\quad
\langle a,b,c\rangle\ne\varnothing
\quad\Longleftrightarrow\quad
0\in\langle a,b,c\rangle
$$
[@merkurjevscavia2025hilbert90, Theorem 1.3, p. 2]. For $p=2$ one also has
$$
\langle a,b,c,a\rangle\ne\varnothing
\quad\Longrightarrow\quad
0\in\langle a,b,c,a\rangle
$$
[@merkurjevscavia2025hilbert90, Theorem 1.4, p. 2]. No pro-$p$ or torsion-free-image assumption is required.

**Why open subgroups matter.** The pro-$2$ group
$$G=\langle x,y\mid x^2y=yx^2\rangle$$
has surjective reduction maps $H^1(G,\mathbb{Z}/2^n)\to H^1(G,\mathbb{F}_2)$ for every $n$, with trivial action. Nevertheless, reduction to $\mathbb{F}_2$ fails on an index-two subgroup for $n=2$, and a defined triple Massey product on $G$ does not contain zero [@merkurjevscavia2025hilbert90, Proposition 8.1 and diagram (8.2), pp. 24–25]. Checking only $H=G$ is insufficient.

**Galois case.** Absolute Galois groups satisfy the hypothesis with the cyclotomic character in characteristic different from $p$, and with the trivial character in characteristic $p$ [@merkurjevscavia2025hilbert90, Examples 2.1–2.2, p. 4].
