---
title: Sharp bounds for lifting Galois representations modulo p squared
kind: theorem
summary: 'Merkurjev–Scavia classify when all n-dimensional Galois representations lift from k to length-two Witt vectors: uniformly over extensions of F, exactly when char(F) = p, n is at most 2, or k is the two-element field and n is at most 4. Complete flags have the same bounds.'
tags: [galois-groups, galois-cohomology, counterexample]
edges:
  - {to: formal-hilbert-90-and-massey-vanishing, label: analogous-to, note: "Both concern lifting properties of absolute Galois groups; here one lifts matrix representations, whereas formal Hilbert 90 lifts twisted degree-one classes."}
  - {to: massey-vanishing-conjecture, label: analogous-to, note: "Both are lifting problems, with different maps of matrix groups [@merkurjevscavia2025liftingnotes, §§1.3–1.4, p. 5]."}
---

**Setting.** Write $G_E$ for the absolute Galois group of $E$. Let $k$ have characteristic $p>0$, and let $W_2(k)$ be its ring of length-two $p$-typical Witt vectors. Matrix groups have the discrete topology. A lift of $\rho:G_E\to\mathrm{GL}_n(k)$ is a continuous homomorphism to $\mathrm{GL}_n(W_2(k))$ reducing to $\rho$. For $k=\mathbb F_p$, this is lifting modulo $p^2$, since $W_2(\mathbb F_p)\cong\mathbb Z/p^2\mathbb Z$ [@merkurjevscavia2025lifting, §1.1, p. 1; Notation, p. 5; §2.2, p. 7].

**Theorem (Merkurjev–Scavia).** Fix a base field $F$ and an integer $n\ge1$. The following are equivalent:

1. For every extension $K/F$, every continuous $\rho:G_K\to\mathrm{GL}_n(k)$ lifts to $\mathrm{GL}_n(W_2(k))$.
2. For every extension $K/F$, every continuous $G_K\to B_n(k)$ lifts to $B_n(W_2(k))$, where $B_n$ denotes the invertible upper triangular matrices. This means lifting complete flags to flags of free modules with free successive quotients.
3. At least one of $\operatorname{char}F=p$, $n\le2$, or $k=\mathbb F_2$ and $n\le4$ holds.

This is a uniform statement over extensions of $F$; failure asserts existence of an extension and a representation without a lift [@merkurjevscavia2025lifting, Theorem 1.1, p. 2; §1.4, p. 3].

**Cohomological obstruction.** For prime-field coefficients, consider
$$
1\longrightarrow M_n(\mathbb F_p)\longrightarrow
\mathrm{GL}_n(\mathbb Z/p^2\mathbb Z)\longrightarrow
\mathrm{GL}_n(\mathbb F_p)\longrightarrow1,
$$
where $A$ maps to $I+pA$ and the quotient acts on the kernel by conjugation. If $\alpha$ is the extension class, $\rho$ lifts exactly when
$$
\rho^*\alpha=0\quad\text{in }H^2(G_K,M_n(\mathbb F_p)_\rho),
$$
with action $g\cdot A=\rho(g)A\rho(g)^{-1}$. Calling $\alpha$ *negligible over $F$* means this vanishing holds for every $K/F$ and every $\rho$ [@merkurjevscavia2025liftingnotes, §1.4, p. 5; §6.1, p. 33].

**Counterexamples over rational function fields.** For odd $p$, any field $F$ containing a primitive $p$th root of unity, and every $n\ge3$, there is a representation
$$
G_{F(x_1,\ldots,x_p)}\longrightarrow\mathrm{GL}_n(\mathbb F_p)
$$
without a lift modulo $p^2$. The $x_i$ are algebraically independent. The construction uses a generic Galois extension with group $U_3(\mathbb F_p)$, the upper unitriangular $3\times3$ matrices, followed by a block embedding for larger $n$. The theorem applies even when $F$ contains all roots of unity [@merkurjevscavia2024nonlifting, Theorem 1.4 and the following paragraph, p. 4; proof, pp. 19–20].
