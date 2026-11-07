---
title: Two-step nilpotent quotients do not determine a number field
kind: theorem
summary: 'Koymans and Pagano show that non-isomorphic number fields can have isomorphic maximal quotients of nilpotency class 2 of their absolute Galois groups. For example, any two of $\mathbb{Q}(\sqrt{-d})$ with $d = 11, 19, 43, 67, 163$ have this property.'
tags: [number-fields, galois-groups, counterexample]
edges:
  - {to: abelian-galois-group-does-not-determine-number-field, label: implies, note: "Abelianizing the isomorphic class-2 quotients gives isomorphic abelianizations. This gives only the existence statement of the target."}
  - {to: metabelian-neukirch-uchida-problem, label: analogous-to, note: "It does not settle the problem, since this quotient is smaller than the metabelian one, but it may give insight [@koymanspagano2024, §1.3]."}
---

**Statement.** Let $K^{\mathrm{nil},2}$ be the compositum of the finite Galois extensions of $K$ with Galois group nilpotent of class at most $2$, and let $G_K^{\mathrm{nil},2}$ be its Galois group over $K$. The source writes this group as $G_K^2$. There are non-isomorphic number fields with isomorphic $G_K^{\mathrm{nil},2}$ [@koymanspagano2024, Theorem 1.1]. Explicitly, one may take any two of $\mathbb{Q}(\sqrt{-d})$ for $d = 11, 19, 43, 67, 163$ [@koymanspagano2024, Corollary 1.3].

**Pro-$\ell$ version.** Let $\ell$ be a prime, and let $K_1, K_2$ be imaginary quadratic fields with $\mathrm{Cl}(K_i)[\ell] = 0$. For $\ell = 2$, assume also that $2$ is inert in both. For $\ell = 3$, assume also that $K_i \otimes_{\mathbb{Q}} \mathbb{Q}_3 \not\cong \mathbb{Q}_3(\zeta_3)$. Then the maximal pro-$\ell$ quotients of $G_{K_1}^{\mathrm{nil},2}$ and $G_{K_2}^{\mathrm{nil},2}$ are isomorphic [@koymanspagano2024, Theorem 1.2].

**Method.** These groups are described combinatorially in terms of decorated Rado graphs, using the back-and-forth method from model theory [@koymanspagano2024, §1.4].

**Context.** Quotients of this kind are the ones used in Bogomolov's birational program for function fields over algebraically closed fields, and the paper settles whether they suffice for number fields [@koymanspagano2024, §1.2]. Compare the [metabelian problem](metabelian-neukirch-uchida-problem.md).
