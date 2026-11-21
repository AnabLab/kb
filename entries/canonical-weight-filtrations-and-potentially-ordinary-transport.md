---
title: Canonical weight filtrations descend and preserve potentially ordinary crystallinity
kind: theorem
summary: 'For de Rham representations filtered by single weights after finite extension, the decreasing weight filtration descends uniquely to the base field. It detects semistability there and extends crystalline and semistable transport to every representation with such a potential filtration.'
tags: [local-fields, galois-groups, hodge-theory]
edges:
  - {to: de-rham-criterion-for-single-weight-filtrations, label: uses, note: "Its part 2 supplies a decreasing filtration after finite extension for each de Rham representation with a single-weight filtration."}
  - {to: galois-isomorphisms-preserve-crystalline-ordinary-representations, label: uses, note: "Parts 2 and 3 apply over the original base once semistability makes the descended filtration ordinary."}
  - {to: sen-inertia-criterion, label: uses, note: "A single-weight piece becomes unramified after the opposite Tate twist and a finite extension."}
  - {to: local-field-galois-invariants, label: uses, note: "Galois isomorphisms transport inertia, the cyclotomic character and open subgroups."}
---

**Setting.** Let $K/\mathbb Q_p$ be finite and let $V$ be a nonzero finite-dimensional continuous $\mathbb Q_p$-representation of $G_K$, with action $\rho$. Write $I_K$ for inertia and $\chi_K$ for the cyclotomic character, with $\mathbb Q_p(1)$ of Hodge–Tate weight $1$. Assume that $V$ has a [single-weight filtration](de-rham-criterion-for-single-weight-filtrations.md): over some finite extension $E/K$ it has a stable filtration whose pieces are Hodge–Tate with one weight each. Weights may recur, and no order is assumed. This includes every [potentially ordinary representation](potentially-ordinary-representations-are-aut-intrinsically-hodge-tate.md) in the convention used here.

**Theorem.** This is proved here.

1. If $V$ is de Rham, let $h_1>\cdots>h_m$ be its distinct Hodge–Tate weights. There is a unique $G_K$-stable flag
   $$0=F_0\subsetneq F_1\subsetneq\cdots\subsetneq F_m=V$$
   such that $Q_i=F_i/F_{i-1}$ has the single weight $h_i$. The same flag is the unique flag with these properties after restriction to any finite extension of $K$. Each $U_i=Q_i(-h_i)$ has finite inertia image.
2. For de Rham $V$, it is semistable over $K$ if and only if every $U_i$ is unramified over $K$. Equivalently, its canonical flag is ordinary over $K$: all of $I_K$ acts on $Q_i$ by $\chi_K^{h_i}$.
3. Let $L/\mathbb Q_p$ be finite and $\alpha:G_L\xrightarrow{\sim}G_K$ a continuous isomorphism. For every $V$ with a single-weight filtration, without assuming it de Rham,
   $$V\text{ is semistable over }K
   \quad\Longleftrightarrow\quad
   V\circ\alpha\text{ is semistable over }L,$$
   and the same equivalence holds with crystalline in place of semistable. These equivalences also hold over every pair of finite extensions matched by $\alpha$.

The filtration has one step for each distinct weight, with its entire multiplicity in that step. Uniqueness does not assert uniqueness of refinements inside a piece.

**Standard inputs.** Hodge–Tate subquotients remain Hodge–Tate, their weight multiplicities add in exact sequences, and finite extension preserves weights [@brinonconrad2009, Proposition 2.4.4 and Theorem 2.4.6, pp. 19–20]. Semistable subquotients and Tate twists remain semistable [@brinonconrad2009, Theorem 5.2.1 (2)–(3), p. 68; Example 9.1.12, p. 135]. Semistability and crystallinity can be checked after restriction to $I_K=G_{\widehat{K^{\mathrm{un}}}}$; a representation with finite image is semistable exactly when it is unramified [@brinonconrad2009, Proposition 9.3.1 and Corollary 9.3.2, pp. 146–147].

Uniqueness of Greenberg's ordinary filtration is standard; Pottharst records it while distinguishing filtrations of Galois representations from more general filtrations of their $(\varphi,\Gamma)$-modules [@pottharst2013selmer, Example 3.6, p. 1604; Example 3.10, pp. 1605–1606]. We give the uniqueness and descent arguments needed here.

**Proof of part 1.** By part 2 of the [de Rham criterion](de-rham-criterion-for-single-weight-filtrations.md), after a finite extension $E/K$ the representation has a stable single-weight flag with strictly decreasing weights. Its weights are exactly the $h_i$, and the dimension of its $i$th piece is the multiplicity of $h_i$ in $V$.

First prove uniqueness over $E$. A map between Hodge–Tate representations with disjoint weight sets is zero: its image is a Hodge–Tate subquotient of both, so its weights lie in the intersection of those sets. For two decreasing flags $F_\bullet,F'_\bullet$, the composite
$$F_1\longrightarrow V\longrightarrow V/F'_1$$
is therefore zero, since its source has only weight $h_1$ and its target has only smaller weights. Thus $F_1\subseteq F'_1$; their dimensions are the same full multiplicity of $h_1$, so they are equal. Induction on the quotient gives equality of the flags. This argument also proves uniqueness after every further finite extension, because all the weights and multiplicities persist.

Enlarge $E$ to be Galois over $K$. For $g\in G_K$, the translated flag $\rho(g)F_\bullet$ is $G_E$-stable because $G_E$ is normal. If an open subgroup $J\subseteq I_E$ acts on a piece of weight $h_i$ by $\chi_K^{h_i}$, then $gJg^{-1}$ acts on the corresponding translated piece by the same character, since $\chi_K(gu g^{-1})=\chi_K(u)$. Hence the translated flag has the same decreasing single weights. Uniqueness gives $\rho(g)F_i=F_i$ for every $g$ and $i$, so all the subspaces are $G_K$-stable. Their quotient weights over $K$ are the same as over $E$.

For an arbitrary finite extension $K'/K$, the descended flag still has the required weights, so the same uniqueness argument over $K'$ identifies it with any such flag there. Finally [Sen's inertia criterion](sen-inertia-criterion.md) applied to $Q_i(-h_i)$ gives its finite inertia image. $\square$

**Proof of part 2.** Suppose $V$ is semistable. Each $Q_i$ is a semistable subquotient, so $U_i=Q_i(-h_i)$ is semistable. By part 1 its inertia image is finite. Proposition 9.3.1 lets us restrict to $I_K$; over $\widehat{K^{\mathrm{un}}}$ the finite-image criterion of Corollary 9.3.2 forces that action to be trivial, since this field has algebraically closed residue field. Thus each $U_i$ is unramified.

Conversely, if all the $U_i$ are unramified, the canonical flag is ordinary over $K$. The assumed de Rham property and part 2 of [ordinary crystalline and semistable transport](galois-isomorphisms-preserve-crystalline-ordinary-representations.md) make $V$ semistable over $K$. $\square$

**Proof of part 3.** Pullback along $\alpha$ preserves the single-weight-filtration hypothesis: it matches open subgroups, inertia and cyclotomic characters, as in part 3 of the [de Rham criterion](de-rham-criterion-for-single-weight-filtrations.md).

If $V$ is semistable, it is de Rham, and parts 1–2 give it an ordinary flag over $K$ itself. Part 3 of [ordinary crystalline and semistable transport](galois-isomorphisms-preserve-crystalline-ordinary-representations.md) therefore makes $V\circ\alpha$ semistable over $L$. If $V$ is crystalline, it is semistable and the same ordinary flag lets that theorem transport crystallinity as well. Apply these two implications to $\alpha^{-1}$ and $V\circ\alpha$ for the converses.

For a finite extension $K'/K$, let $G_{L'}=\alpha^{-1}(G_{K'})$. The restriction $V|_{G_{K'}}$ still has a single-weight filtration, by passing to a common finite extension with one that defines the original filtration. Apply the established result to $\alpha|_{G_{L'}}:G_{L'}\to G_{K'}$. $\square$

**Scope.** Part 3 extends the base-field conclusion that the ordinary transport entry left open for filtrations defined only after finite extension. It does not transport period modules or field addition. Representations with no potential single-weight filtration, including the irreducible Lubin–Tate counterexamples in the [Aut-intrinsic Hodge–Tate overview](aut-intrinsic-hodge-tate-representations.md), remain outside it.
