---
title: Finite flat torsion detects geometric local Galois homomorphisms
kind: theorem
summary: 'An open homomorphism of p-adic absolute Galois groups is geometric exactly when pullback preserves finite flat p-primary realizability on every matched open subgroup. Testing the torsion of p-divisible groups suffices, including at p=2.'
tags: [local-fields, galois-groups, hodge-theory, reconstruction]
edges:
  - {to: raynaud-finite-flat-torsion-criterion, label: uses, note: 'Turns independent finite flat models of every pulled-back torsion level into one p-divisible group.'}
  - {to: crystalline-lattices-and-p-divisible-groups, label: uses, note: 'Identifies p-divisible Tate modules with crystalline lattices of weights 0,1.'}
  - {to: hodge-tate-geometricity-criterion, label: uses, note: 'Mochizuki also characterizes geometric open homomorphisms by 01-qLT-type in the same Theorem 3.5(i).'}
  - {to: lubin-tate-criterion-for-semi-absolute-anabelian-geometry, label: analogous-to, note: 'Both force geometricity by preserving the Hodge–Tate weights 0,1 of quasi-Lubin–Tate characters over open subgroups.'}
---

**Setting.** Let $K,L/\mathbb Q_p$ be finite and $\alpha:G_L\to G_K$ a continuous open homomorphism. For an open subgroup $U\le G_K$ put
$$F_U=\bar K^U,\qquad V_U=\alpha^{-1}(U),\qquad E_U=\bar L^{V_U}.$$
Pullback along $\alpha|_{V_U}$ takes finite $G_{F_U}$-modules to finite $G_{E_U}$-modules. A finite module has a *finite flat model* if it is the geometric generic fibre of a finite flat commutative group scheme over the corresponding ring of integers.

**Theorem (proved here).** The following conditions are equivalent:

1. The outer class of $\alpha$ is induced by an embedding $K\hookrightarrow L$.
2. For every open $U\le G_K$, pullback preserves the existence of finite flat models for all finite $p$-primary $G_{F_U}$-modules.
3. For every open $U\le G_K$, every $p$-divisible group $\mathcal H/\mathcal O_{F_U}$ and every $n\ge1$, the pulled-back module $\mathcal H[p^n](\bar K)$ has a finite flat model over $\mathcal O_{E_U}$.
4. For every open $U\le G_K$, pullback preserves crystalline $\mathbb Q_p$-representations whose Hodge–Tate weights lie in $\{0,1\}$.

Here $\mathbb Q_p(1)$ has weight $1$. No ramification restriction or odd-prime hypothesis is imposed. Every nongeometric open homomorphism has a finite witness of the form in (3).

**Proof.** A field embedding inducing $\alpha$ extends to the algebraic closures. It carries $F_U$ into $E_U$ and their rings of integers into one another. Base change of a finite flat group scheme proves (1)$\Rightarrow$(2), and (2)$\Rightarrow$(3) is immediate.

Assume (3). If $W$ is crystalline over $F_U$ with weights $0,1$, choose a stable lattice $T\subset W$. The [integral classification](crystalline-lattices-and-p-divisible-groups.md) gives $T=T_p\mathcal H$ for some $\mathcal H/\mathcal O_{F_U}$. By (3), every quotient of the pulled-back lattice by $p^n$ has a finite flat model. The [Raynaud criterion](raynaud-finite-flat-torsion-criterion.md) makes its rationalization crystalline of weights $0,1$. This proves (4).

It remains to prove (4)$\Rightarrow$(1). We check Mochizuki's *01-qLT* condition. A character $\rho:G_F\to A^\times$, for a finite coefficient field $A/\mathbb Q_p$, is quasi-Lubin–Tate if, after a finite extension of $F$, it agrees on an open subgroup of inertia with the Lubin–Tate character attached to an embedding of $A$ into that extension. Its underlying $\mathbb Q_p$-representation has weights $1,0,\ldots,0$ [@mochizuki2012, Definition 3.1(iii), p. 36; Proposition 3.3, p. 37].

Such a representation becomes crystalline of weights $0,1$ over a finite extension. By Lubin–Tate reciprocity, the character in the definition is inertially equivalent to the Tate representation of a Lubin–Tate $p$-divisible group over $\mathcal O_A$, restricted to the larger field [@mochizuki2012, Definition 3.1(ii)–(iii) and Remark 3.1.1, pp. 35–36]. Choose a further open subgroup whose intersection with inertia lies inside the subgroup where the characters agree. On its full inertia the two representations are isomorphic. Crystallinity can be checked on inertia, and Hodge–Tate weights are unchanged by inertial restriction or finite extension [@brinonconrad2009, Proposition 9.3.1, p. 146; Theorem 2.4.6, p. 20]. Thus the asserted potential crystallinity, with the same weights, follows from the crystalline Tate-module classification.

Now let $U_1\le G_L$ and $U_2\le G_K$ be open with $\alpha(U_1)\subseteq U_2$, and let $\rho:U_2\to A^\times$ be quasi-Lubin–Tate, with all $\mathbb Q_p$-conjugates of $A$ contained in both fixed fields, as required in the 01-qLT test. Choose an open $U'_2\le U_2$ on which its underlying representation is crystalline with weights $0,1$. By (4), its pullback to $\alpha^{-1}(U'_2)$ is crystalline with those weights. Restrict further to $U_1\cap\alpha^{-1}(U'_2)$. This subgroup is open in $U_1$, so finite-extension invariance of the Hodge–Tate decomposition implies that $\rho\circ\alpha|_{U_1}$ is Hodge–Tate with weights $0,1$. Consequently $\alpha$ is of 01-qLT-type [@mochizuki2012, Definition 3.1(iv), p. 36]. Mochizuki's theorem makes it geometric [@mochizuki2012, Theorem 3.5(i), p. 38]. This proves (1). $\square$

**Scope.** The tests concern existence of models; no choices of models or transition maps are supplied. They run over every open target subgroup and every torsion level. The conclusion gives a finite witness for each specified nongeometric homomorphism, without an effective bound on the subgroup index, the height of the $p$-divisible group or the torsion exponent. This is a deduction from the cited results, with no novelty claim beyond the knowledgebase.
