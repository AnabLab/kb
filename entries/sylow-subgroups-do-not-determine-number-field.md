---
title: Sylow subgroups do not determine a number field
kind: theorem
summary: Lubotzky–Neftin exhibit nonisomorphic degree-seven number fields whose absolute Galois groups have conjugate p-Sylow subgroups inside the absolute Galois group of Q for every prime p. Sylow-conjugacy preserves degree and Galois closure but does not determine the field.
tags: [number-fields, galois-groups, counterexample]
edges:
  - {to: neukirch-uchida-theorem, label: motivated-by, note: "Pop asked whether the Sylow subgroups already suffice for reconstruction [@lubotzkyneftin2023, §1, p. 1]."}
  - {to: two-step-nilpotent-not-anabelian, label: analogous-to, note: "Two failures of number-field reconstruction, from Sylow subgroups here and a nilpotent quotient there."}
  - {to: arithmetic-equivalence-from-galois-isomorphism, label: analogous-to, note: "Sylow-conjugacy and arithmetic equivalence are incomparable weakenings of field isomorphism [@lubotzkyneftin2023, §4, Examples 4.1–4.3]."}
---

**Statement.** Fix an algebraic closure $\overline{\mathbb Q}$. Two number fields $K,L\subset\overline{\mathbb Q}$ are *Sylow-conjugate* if, for every prime $p$, a $p$-Sylow subgroup of $G_K$ is conjugate to a $p$-Sylow subgroup of $G_L$ inside $G_{\mathbb Q}$. Lubotzky and Neftin construct nonisomorphic Sylow-conjugate number fields. In particular, knowing the topological isomorphism types of the Sylow subgroups for all primes does not determine a number field [@lubotzkyneftin2023, Definition 1.1 and Claim 1.2, pp. 1–2]. The conjugating element may depend on $p$.

**Finite criterion.** Let $M/\mathbb Q$ be a finite Galois extension containing $K,L$, and put $G=\mathrm{Gal}(M/\mathbb Q)$, $U=\mathrm{Gal}(M/K)$ and $V=\mathrm{Gal}(M/L)$. Then $K,L$ are Sylow-conjugate exactly when, for every prime $p$, the $p$-Sylow subgroups of $U,V$ are conjugate in $G$. Meanwhile $K\cong L$ exactly when $U,V$ themselves are conjugate in $G$ [@lubotzkyneftin2023, Proposition 2.4, p. 3]. Sylow-conjugate number fields have the same degree and the same Galois closure over $\mathbb Q$ [@lubotzkyneftin2023, Corollary 2.5, p. 4].

**Explicit example.** Take $K=\mathbb Q(\alpha)$ and $L=\mathbb Q(\beta)$, where
$$
\alpha^7-7\alpha+3=0,\qquad
\beta^7+14\beta^4-42\beta^2-21\beta+9=0.
$$
These are nonisomorphic Sylow-conjugate degree-seven fields [@lubotzkyneftin2023, Claim 1.2(a), p. 2]. Their common Galois closure has group $\mathrm{PSL}_3(2)$; the two fixing subgroups are the stabilizers of a one-dimensional subspace and a hyperplane of $\mathbb F_2^3$. These subgroups are Sylow-conjugate but nonconjugate [@lubotzkyneftin2023, Examples 2.9–2.10, pp. 5–6]. Degree seven is minimal among nonisomorphic Sylow-conjugate number fields [@lubotzkyneftin2023, Proposition 3.6, pp. 9–11].

**Relation to arithmetic equivalence.** Sylow-conjugacy does not imply equality of Dedekind zeta functions, and arithmetic equivalence does not imply Sylow-conjugacy [@lubotzkyneftin2023, Examples 4.1–4.2, pp. 11–12]. Both properties can hold simultaneously for nonisomorphic fields [@lubotzkyneftin2023, Example 4.3, p. 12].

**Scope.** The invariant here consists of Sylow subgroups of the full absolute Galois group. A maximal pro-$p$ quotient is different data. Karshon and Shusterman list this Sylow-subgroup obstruction among the negative results that precede their [pro-$\ell$-by-cyclotomic reconstruction theorem](pro-l-by-cyclotomic-neukirch-uchida.md) [@karshonshusterman2026, §1, p. 1].

**Sources.** The Lubotzky–Neftin paper was published in 2023; locations above refer to its arXiv version 1. The displayed polynomial example is recorded from the cited paper; no independent computation of its splitting field is claimed here.
