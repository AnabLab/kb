---
title: Period and index obstructions to Galois sections
kind: theorem
summary: 'For a smooth projective curve of positive genus over a finite extension of $\mathbb{Q}_p$, a section forces its period and index to be powers of $p$, equal for odd $p$ (Stix). This rules out sections of $X^4 + Y^4 = 3Z^4$ over $\mathbb{Q}$ despite its real points.'
tags: [curves, local-fields, fundamental-groups, section-conjecture]
edges:
  - {to: section-conjecture, label: addresses, note: "A local index obstruction excludes sections for some curves over number fields, including the quartic below."}
---

**Setting.** Let $X/K$ be a smooth projective geometrically connected curve of genus $g > 0$, with $K$ finite over $\mathbb{Q}_p$. A section means a continuous splitting of
$$1 \to \pi_1(X_{\bar K}) \to \pi_1(X) \to G_K \to 1.$$
The *index* $I(X)$ is the greatest common divisor of the degrees of its closed points. The *period* $P(X)$ is the least positive $d$ with $\operatorname{Pic}^d_{X/K}(K) \ne \varnothing$, equivalently the order of the torsor $\operatorname{Pic}^1_{X/K}$ under the Jacobian. One has $P(X) \mid I(X)$ [@stix2010, (1.3)–(1.4), p. 2].

**Theorem (Stix).** If the sequence has a section, then $P(X)$ and $I(X)$ are powers of $p$, allowing $1$. For odd $p$, they are equal. For $p = 2$, equality also holds if $X$ admits a finite étale map of even degree to a smooth projective geometrically connected curve of positive genus [@stix2010, Theorem 2, p. 2; Theorems 15–16, pp. 8–9].

**Proof mechanism.** The Brauer obstruction to descending a $K$-rational divisor class vanishes on torsion classes when a section exists [@stix2010, Proposition 12, pp. 7–8]. Using the structure of the Jacobian's $K$-points, Stix deduces that $P(X)$ is a power of $p$ [@stix2010, Corollary 14, p. 8]. Lichtenbaum's constraints give $P(X) \mid I(X) \mid 2P(X)$; if $I(X) = 2P(X)$, then $(g-1)/P(X)$ is odd [@stix2010, Theorem 10, p. 6]. An even-degree finite étale neighbourhood of the section has odd genus. For odd $p$, the parity constraint excludes doubling its period, and its index is a power of $p$. Since $I(X)$ divides the index of any finite cover, this proves the assertion for $I(X)$ too. For $p = 2$, the divisibility constraints already suffice [@stix2010, proof of Theorem 15, p. 8].

**A quartic with real points and no sections over $\mathbb{Q}$.** Consider
$$X : x^4 + y^4 = 3z^4.$$
This is a smooth plane quartic of genus $3$, and $(\sqrt[4]{3}:0:1)$ is a real point. It is a special case of Stix's construction using a cover of a conic [@stix2010, Example 20, p. 11]. Here is a direct check that $I(X_{\mathbb{Q}_3}) = 2$.

The map $(x:y:z) \mapsto (x^2:y^2:z^2)$ lands on the conic $C : u^2 + v^2 = 3w^2$. Let $E/\mathbb{Q}_3$ have odd degree. Its ramification index $e$ and residue degree $f$ are odd, and $-1$ is nonsquare in its residue field $\mathbb{F}_{3^f}$. For a normalized valuation on $E$, any nonzero sum $u^2+v^2$ therefore has valuation $2\min\{v_E(u),v_E(v)\}$, whereas $3w^2$ has odd valuation $e+2v_E(w)$ when $w \ne 0$. The case $w=0$ is also impossible because $-1$ is nonsquare. Thus $C(E)$, and hence $X(E)$, is empty. Every closed point of $X_{\mathbb{Q}_3}$ has even degree.

Conversely, in the unramified quadratic extension $E/\mathbb{Q}_3$, the residue field $\mathbb{F}_9$ contains a fourth root of $2$: a generator of its multiplicative group has fourth power $-1=2$. Hensel's lemma lifts it to $a \in E$ with $a^4=2$, giving $(1:a:1) \in X(E)$. Hence the index is exactly $2$.

Stix's theorem rules out a section over $\mathbb{Q}_3$, since $2$ is not a power of $3$. A section over $\mathbb{Q}$ would induce one over $\mathbb{Q}_3$ by base change [@stix2010, (6.1)–(6.2), pp. 9–10]. Thus $X$ has neither rational points nor sections over $\mathbb{Q}$, while $X(\mathbb{R}) \ne \varnothing$.

**Scope.** These are necessary conditions for an étale section. They do not assert that a section gives index $1$, or that a degree-$1$ divisor gives a rational point.
