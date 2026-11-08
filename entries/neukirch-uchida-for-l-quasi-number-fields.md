---
title: Neukirch–Uchida for l-quasi-number fields
kind: theorem
summary: 'Minamide–Sawada–Tsujimura extend Neukirch–Uchida, in a 2026 preprint, to algebraic extensions of Q whose Galois closures have bounded l-part of their degree, for one common prime l. This includes subfields of maximal prime-to-l extensions of number fields.'
tags: [number-fields, galois-groups, galois-cohomology]
edges:
  - {to: neukirch-uchida-theorem, label: generalizes, note: "Number fields satisfy the degree condition for every prime; the new fields need not be finite over Q."}
  - {to: neukirch-local-theory, label: analogous-to, note: "Decomposition groups are again identified through degree-two Galois cohomology, now for possibly infinite algebraic extensions [@minamidesawadatsujimura2026, Proposition 4.4]."}
  - {to: mono-anabelian-reconstruction-number-fields, label: analogous-to, note: "The corresponding algorithm for l-quasi-number fields is asked for, rather than constructed, in [@minamidesawadatsujimura2026, Remark 4.13.1]."}
---

**Fields.** Fix a prime $\ell$. An algebraic extension $K/\mathbb Q$ is an *$\ell$-quasi-number field* if its Galois closure $L/\mathbb Q$ has bounded $\ell$-part of its degree: there is an integer $b$ such that
$$
v_\ell([E:\mathbb Q])\le b
\quad\text{for every finite subextension }\mathbb Q\subseteq E\subseteq L.
$$
Here $v_\ell$ is the exponent of $\ell$ in an integer. This is a condition on the Galois closure, and $K$ itself need not be Galois [@minamidesawadatsujimura2026, Definition 4.1, p. 27].

**Theorem (Minamide–Sawada–Tsujimura).** For two $\ell$-quasi-number fields $K_1,K_2$, the natural contravariant map
$$
\operatorname{Isom}(K_2,K_1)
\longrightarrow \operatorname{OutIsom}(G_{K_1},G_{K_2})
$$
is bijective. The right side consists of continuous group isomorphisms modulo inner automorphisms of the target. Inside a fixed $\overline{\mathbb Q}$, every continuous isomorphism $G_{K_1}\to G_{K_2}$ is conjugation by an element of $G_{\mathbb Q}$ [@minamidesawadatsujimura2026, Theorem 4.12 and Corollary 4.13, pp. 34–35].

**Examples.** Every subfield of the maximal pro-prime-to-$\ell$ extension of any number field qualifies. Here the maximal extension is Galois, with Galois group an inverse limit of finite groups of order prime to $\ell$. The class is closed under taking subfields and finite extensions [@minamidesawadatsujimura2026, Proposition 4.2(i)–(iii), pp. 27–28].

**Local ingredient.** For such a $K$, its nonarchimedean decomposition subgroups are precisely the maximal closed subgroups $H\subseteq G_K$ with the following property: for some prime $r$ there is an open subgroup $V\subseteq H$ such that
$$
\dim_{\mathbb F_r}H^2_{\mathrm{cont}}(U,\mathbb F_r)=1
\quad\text{for every open subgroup }U\subseteq V,
$$
with trivial coefficient action [@minamidesawadatsujimura2026, Proposition 4.4(iii), pp. 28–29]. This extends the cohomological approach to [local correspondence](neukirch-local-theory.md).

**Scope and status.** The group in the theorem is the full absolute Galois group. The same prime $\ell$ is required for both fields. The cited August 2026 preprint leaves the version with different primes unanswered [@minamidesawadatsujimura2026, Remark 4.12.1, pp. 34–35], and asks for an explicit [group-theoretic reconstruction algorithm](mono-anabelian-reconstruction-number-fields.md) in this class [@minamidesawadatsujimura2026, Remark 4.13.1, p. 35].
