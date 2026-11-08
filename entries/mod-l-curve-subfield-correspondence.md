---
title: Curve subfields from matched mod-ell local data and bounded pencils
kind: theorem
summary: 'For function fields of transcendence degree at least two, a mod-$\ell$ Kummer isomorphism matching quasi-divisorial pairs and having bounded pencil supports in both directions bijects curve subfields. Checks section 5 of a 2026 manuscript, conditional on those inputs.'
tags: [function-fields, curves, valuations, kummer-theory, reconstruction-algorithms]
edges:
  - {to: finite-coefficient-curve-subfield-descent, label: uses, note: "Finite-dimensional Kummer kernels, intersections of curve subfields, and exact descent through a finite incidence extension."}
  - {to: completed-curve-subfield-correspondence, label: uses, note: "Only its coefficient-independent incidence lemma D, applied with q equal to ell; its construction also gives M = LP_0."}
  - {to: uniform-support-bound-for-kummer-pencils, label: uses, note: "Only the independent finite residual test in part 1, with q equal to ell, to bound the divisor-order kernel. The mod-ell pencil bound is a hypothesis here."}
  - {to: quasi-prime-divisor, label: uses}
  - {to: mod-l-bogomolov-pop-conjecture, label: addresses, note: "Recovers the curve-subfield images, conditional on the local and bounded-support outputs."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks Lemma 5.3 and Theorem 5.4 of the mod-ell manuscript [@openai2026modl, pp. 21–24]; sections 2–4 remain hypotheses."}
---

**Setting and inputs.** Fix a prime $\ell$ and put $\Lambda=\mathbb F_\ell$, $V_F=F^\times/F^{\times\ell}$ and $A_F=\operatorname{Hom}(F^\times,\Lambda)$, with pointwise topology. Let $K/k$ and $L/l$ be finitely generated extensions of algebraically closed fields of characteristic different from $\ell$, both of transcendence degree $d\ge2$. Let $\Theta:V_K\to V_L$ be a linear isomorphism with evaluation dual $\Phi:A_L\to A_K$. For a valuation $v$ let $I_v=U_v^\perp\subseteq D_v=(1+\mathfrak m_v)^\perp$. Assume:

- **(Q)** $\Phi$ maps the set of pairs $(I_w,D_w)$ for [quasi prime divisors](quasi-prime-divisor.md) of $L/l$ onto that set for $K/k$.
- **(B)** There are normal integral projective embedded models $X$ of $L/l$ and $Y$ of $K/k$ such that, for every $t\in K\setminus k$,
  $$\sup_{a\in k}\sum_{D\in\operatorname{supp}_X\Theta[t-a]}\deg D<\infty,$$
  and the same holds for $\Theta^{-1}$, every $s\in L\setminus l$, and $Y$. Here the support of a mod-$\ell$ class consists of prime divisors with nonzero order modulo $\ell$.

These are explicit inputs. The manuscript obtains (Q) in Proposition 2.7 and (B) in Proposition 4.4, using its preceding local and residual-curve theory [@openai2026modl, Proposition 2.7, p. 9] [@openai2026modl, Proposition 4.4, pp. 18–19]. **Their derivation from the Milnor product is not checked here.** No lift of $\Theta$ to pro-$\ell$ coefficients is assumed.

**Theorem** [@openai2026modl, Theorem 5.4, pp. 23–24]. For every curve subfield $E\subseteq K$ there is a unique curve subfield $P\subseteq L$ with
$$\Theta(V_E)=V_P.$$
Here a curve subfield contains the constants, is relatively algebraically closed, and has transcendence degree one. Its map on $V$ is injective. The assignment $E\mapsto P$ is a bijection.

**Proof.** *1. A bounded family is infinite.* Fix $E$ and $t\in E\setminus k$. Put $H=\Theta(V_E)$ and
$$\mathcal S=\bigcup_{a\in k}\operatorname{supp}_X\Theta[t-a].$$
By (B), every divisor in $\mathcal S$ has bounded degree. The common kernel of all divisor orders $V_L\to\bigoplus_D\Lambda$ is finite dimensional: part 1 of the [finite residual test](uniform-support-bound-for-kummer-pencils.md), with $q=\ell$, carries any finite independent subset of that kernel to independent classes on a curve of genus at most $G_X$, all with zero point orders. That point-order kernel has dimension at most $2G_X$, as in fact 2 of [finite-coefficient descent](finite-coefficient-curve-subfield-descent.md). On the other hand the $[t-a]$ span an infinite-dimensional space in $V_E$, by fact 1 there. Their images are still infinite dimensional in $V_L$. If $\mathcal S$ were finite, their order vectors and the kernel would both be finite dimensional, a contradiction [@openai2026modl, proof of Theorem 5.4, p. 23].

*2. Cofinite residue tests.* For $D\in\mathcal S$, let $w=\operatorname{ord}_D$ and choose the quasi prime divisor $v$ matched by (Q). The restriction of $I_v$ to $V_E$ is nonzero, because some $\Theta[t-a]$ has nonzero $D$-order. Characters annihilate the divisible group $k^\times$, and $vK/vk\cong\mathbb Z$. Thus $vE/vk$ is a nonzero subgroup of $\mathbb Z$. The valuation transcendence-degree inequality for the curve field $E/k$ gives $Ev=kv$, since $kv$ is algebraically closed. If $z\in E^\times$ has value in $vk$, multiply it by a constant to make it a unit, then by a constant to give residue $1$. Every character in $D_v$ therefore kills $z$. It follows that the image of $D_v$ on $V_E$ has dimension at most one. The nonzero image of $I_v\subseteq D_v$ is consequently this same line.

Let $g\in L^\times$ have $[g]\in H$. For every $D\in\mathcal S$ with integral $\operatorname{ord}_D(g)=0$, its class annihilates $I_w$, hence, by the preceding line equality and duality, also $D_w$. For the true divisor $w$, restriction to units induces
$$D_w/I_w\cong A_{l(D)}.$$
Indeed $L^\times/(1+\mathfrak m_w)$ is an extension of $\mathbb Z$ by $l(D)^\times$, split by a uniformizer; applying $\operatorname{Hom}(-,\Lambda)$ proves the assertion. Evaluation on all characters detects classes in $V_{l(D)}$, so $g|_D\in l(D)^{\times\ell}$. A rational function has nonzero integral order at only finitely many prime divisors. Thus, for each such $g$,
$$\operatorname{ord}_D(g)=0,\qquad g|_D\in l(D)^{\times\ell}
\quad\text{for all but finitely many }D\in\mathcal S.\tag{1}$$
This uses nonzero inertia modulo $\ell$, rather than merely nonzero integral restriction; multiplicities divisible by $\ell$ cause no inference here [@openai2026modl, proof of Theorem 5.4, p. 23].

*3. One incidence field for all classes.* Apply Lemma D of [completed curve-subfield correspondence](completed-curve-subfield-correspondence.md) to the pairs $(g,\ell)$ in (1). This is a geometric lemma about power residues, independent of the coefficient ring of $\Theta$. It supplies $M/L$ finite and a one-variable field $P_0/l$ with $M/P_0$ regular, such that every $g$ has an $\ell$-th root in $M\overline{P_0}$. Its construction also gives
$$M=LP_0.\tag{2}$$
it takes an integral parameter curve $T'$ in a Hilbert parameter space and its incidence variety $Z'\subseteq X\times T'$, with $M=l(Z')$ and $P_0=l(T')$. The function field of this integral locally closed subvariety is generated by the pullbacks from the two factors, proving (2). Regular descent, fact 4 of [finite-coefficient descent](finite-coefficient-curve-subfield-descent.md), now gives
$$\operatorname{im}(H\to V_M)\subseteq\operatorname{im}(V_{P_0}\to V_M).$$
This checks the extra compositum assertion and conclusion of the manuscript's Lemma 5.3 [@openai2026modl, Lemma 5.3, pp. 21–23].

The incidence curve is fixed before testing any class. For each $g$, splitting on the dense set of passing fibres gives geometric generic splitting. A separate finite normalization of the parameter space extends its root over the smooth unit locus by normality, and then over the generic point of the fixed curve. Thus no intersection of infinitely many open subsets, or countability of the constants, is needed. These are precisely the fixed-curve and normality steps of Lemma D; smooth base change preserves normality [@stacks2026, Lemma 35.18.2, Tag 034F].

*4. Exact descent and equality.* The space $H$ is infinite dimensional, so the [finite-coefficient descent theorem](finite-coefficient-curve-subfield-descent.md), using (2), gives a curve subfield $P\subseteq L$ with $\Theta(V_E)\subseteq V_P$. Apply steps 1–3 and that theorem to $\Theta^{-1}$ and $P$, using the inverse parts of (Q) and (B). They give a curve subfield $E_1\subseteq K$ with
$$V_E\subseteq\Theta^{-1}(V_P)\subseteq V_{E_1}.$$
The finite-intersection fact in the descent entry forces $E_1=E$, so both inclusions are equalities. That fact also gives uniqueness, and the same argument for the inverse gives bijectivity. $\square$

**Checks and limits.** The algebraic descent permits $\ell\mid[M:L]$ and inseparable finite normal closures. The argument works at $\ell=2$ and with arbitrary algebraically closed constant fields of characteristic different from $\ell$. For the identity map or a scalar map, the result returns $P=E$. This checks section 5, together with its finite-kernel input, conditional on (Q) and (B); it does not check sections 2–4 or the later recognition of true divisors and good rational subfields. The [2026 manuscript](manuscripts-claiming-bogomolov-pop.md) is not peer reviewed, and this check is not a substitute for peer review.
