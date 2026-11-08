---
title: Abelian birational sections and divisors of degree one
kind: theorem
summary: 'For a smooth proper curve over a number field, if its Jacobian has finite Tate–Shafarevich group, the geometrically abelian birational Galois sequence splits exactly when the index is 1 (Esnault–Wittenberg). The same equivalence holds unconditionally over p-adic fields.'
tags: [curves, number-fields, local-fields, galois-cohomology, section-conjecture]
edges:
  - {to: birational-section-conjecture, label: addresses, note: "An exact criterion for sections after abelianizing the geometric kernel, under the hypotheses below."}
  - {to: section-conjecture-period-index, label: analogous-to, note: "Here a section of a birational quotient forces index 1; that entry concerns sections of the étale fundamental group."}
  - {to: birational-sections-over-local-fields, label: uses, note: "only for the final comparison: a full birational section over a p-adic field forces a rational point"}
---

**Sequence.** Let $X/k$ be a smooth proper geometrically connected curve in characteristic $0$. Inside $G_{k(X)}$, put $N = G_{\bar k(X)}$ and
$$
G_{k(X)}^{[\mathrm{ab}]} = G_{k(X)}/\overline{[N,N]}.
$$
An *abelian birational section* is a continuous splitting of
$$
1 \longrightarrow N^{\mathrm{ab}} \longrightarrow G_{k(X)}^{[\mathrm{ab}]} \longrightarrow G_k \longrightarrow 1.
$$
Only the geometric kernel is abelianized; the quotient retains the full arithmetic group $G_k$ [@esnaultwittenberg2010, §2, (2.1)–(2.2), p. 3].

**Theorem (Esnault–Wittenberg).** This sequence splits if and only if $X$ has a divisor of degree $1$, provided either:

- $k$ is a number field and the Tate–Shafarevich group of the Jacobian of $X$ is finite [@esnaultwittenberg2010, Theorem 2.1, p. 3]; or
- $k$ is finite over $\mathbb{Q}_p$ [@esnaultwittenberg2010, Remarks 2.3 (ii), p. 5].

A divisor here is an integral linear combination of closed points, allowing negative coefficients. Its existence is equivalent to $I(X)=1$, where $I(X)$ is the [index](section-conjecture-period-index.md). The implication from a degree-$1$ divisor to a section holds over every characteristic-$0$ field, without a finiteness assumption [@esnaultwittenberg2010, §2, paragraph preceding Theorem 2.1, p. 3].

**Proof mechanism.** A section gives a retraction $\operatorname{Br}(X)\to\operatorname{Br}(k)$. Over number fields, compatible local retractions yield a family of local degree-$1$ divisors orthogonal to $\operatorname{Br}(X)$ under the Brauer–Manin pairing. Finiteness of the Tate–Shafarevich group then supplies a global degree-$1$ divisor [@esnaultwittenberg2010, proof of Theorem 2.1, pp. 3–5].

**Limit.** A degree-$1$ divisor need not give a rational point. Such curves exist even over $p$-adic fields [@esnaultwittenberg2010, Remarks 2.3 (ii), p. 5]. There the quotient sequence splits, while the [full birational sequence](birational-sections-over-local-fields.md) has no section if $X(k)=\varnothing$.
