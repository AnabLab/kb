---
title: Good rational subfields and simultaneous point values modulo ell
kind: theorem
summary: 'In transcendence degree at least 2, nonzero divisorial inertia images recognize the rational curve subfields with every point detected. Transverse-parameter ratios supply enough of them, and matched character maps give the divisor-value condition for field recovery. Checks section 6 of a manuscript.'
tags: [function-fields, valuations, curves, milnor-k-theory]
edges:
  - {to: mod-l-divisoriality-from-curve-subfields, label: uses, note: "Supplies true-divisor matching from the two explicitly assumed correspondences."}
  - {to: divisoriality-from-completed-curve-subfields, label: analogous-to, note: "With finite coefficients, retain nonzero point inertia images; saturation cannot restore vanished images."}
  - {to: mod-l-bogomolov-pop-conjecture, label: addresses, note: "Provides the rational subfields and point-value matching used in the subsequent field-recovery step, conditional on preceding correspondences."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks Proposition 6.3 and Lemmas 6.4–6.5, with an explicit comparison to the hypotheses of the checked section 7."}
---

**Setting and inputs.** Use $V_F$, $A_F$, $I_v$ and $D_v$ as in [true divisors from mod-ell curve subfields](mod-l-divisoriality-from-curve-subfields.md). Let $K/k$ and $L/l$ have transcendence degree at least two over algebraically closed constants of characteristic different from $\ell$. Assume a linear isomorphism $\Theta:V_K\to V_L$ and a bijection $E\leftrightarrow P$ of curve subfields with $\Theta(V_E)=V_P$. Assume its continuous dual $\Phi:A_L\to A_K$ matches all quasi-divisorial pairs in both directions. The linked criterion then matches true divisors $v\leftrightarrow w$.

For a curve subfield $E$ of $F/\kappa$, let $C_E$ be its smooth projective curve, $\delta_x=\mathrm{ord}_x\bmod\ell\in A_E$ its point characters, and $\rho_E:A_F\to A_E$ restriction. This is a continuous surjection, dual to $V_E\subset V_F$. Define the set of distinct nonzero lines
$$Q_E=\{\rho_E(I_v):v\text{ a true prime divisor},\ \rho_E(I_v)\ne0\}.$$
A curve subfield is *good* if it is rational over $\kappa$ and $Q_E$ contains every point line $\Lambda\delta_x$; a good function is a generator of a good subfield [@openai2026modl, Definition 6.2, p. 25].

**Recognition.** The subspaces $V_E$ of good subfields are preserved by $\Theta$, and matched good subfields have canonically matched point lines, hence a bijection of their projective-line points [@openai2026modl, Proposition 6.3, p. 25].

To verify this, normalize $vF=\mathbb Z$ for a true divisor. Its restriction to $E$ is either trivial or $e\,\mathrm{ord}_x$ for some point $x$ and integer $e>0$. Properness gives its centre on $C_E$; at a closed centre every function is a uniformizer power times a local unit. Consequently
$$\rho_E(I_v)=\Lambda(e\bmod\ell)\delta_x.$$
In particular $Q_E$ is a subfamily of point lines, with multiplicities divisible by $\ell$ contributing zero.

For any smooth projective curve over algebraically closed constants, the $\delta_x$ are nonzero and pairwise nonproportional, by approximation at distinct point valuations. Each function has finite divisor support, so the family tends to zero outside finite sets in $A_E$. The continuous sum
$$s_E:\prod_{x\in C_E(\kappa)}\Lambda\longrightarrow A_E,\qquad
(a_x)_x\longmapsto\sum_xa_x\delta_x$$
has exactly the constant families as kernel [@openai2026modl, Lemma 3.4, p. 13]. Indeed a family in its kernel defines a homomorphism $\mathrm{Div}(C_E)\to\Lambda$ vanishing on principal divisors, hence one from $\mathrm{Pic}(C_E)$. Its restriction to $\mathrm{Pic}^0(C_E)(\kappa)$ vanishes because that group is divisible [@stacks2026, Proposition 39.9.11(4), Tag 03RP]. It therefore factors through degree, giving a constant coefficient family. Constant families conversely annihilate every principal divisor.

Choose any nonzero generator on each line of $Q_E$. These generators still tend to zero, since $\Lambda$ is finite. The resulting product-summation map has a one-dimensional kernel with a generator nonzero in every coordinate exactly when $Q_E$ is the full point family. For a proper subfamily, extend a relation by zero at a missing point; the preceding kernel description forces it to vanish. Changing generators only rescales coordinates.

Once all points occur, their common annihilator in $V_E$ is $\mathrm{Pic}(C_E)[\ell]$: send a class $[f]$ with $\mathrm{div}(f)=\ell D$ to $[D]$. Torsion gives surjectivity; the kernel is zero because $\kappa^\times$ is $\ell$-divisible. Its dimension is $2g(C_E)$ [@stacks2026, Lemma 53.17.1(1), Tag 0C1Z]. Vanishing recognizes genus zero, hence rationality, since an algebraically closed constant field supplies a point of degree one [@stacks2026, Proposition 53.10.4, Tag 0C6U].

For matched curve subfields $\Theta(V_E)=V_P$, dualizing the restriction defines $\Phi_E:A_P\to A_E$ and gives the actual commuting square
$$\rho_E\circ\Phi=\Phi_E\circ\rho_P.\tag{2}$$
True-divisor matching therefore carries $Q_P$ onto $Q_E$. The sum-kernel and genus tests are topological linear invariants, proving recognition and the point bijection. No independent rescaling of quotient maps enters (2).

**Supply of good functions.** Let $q$ be a smooth closed point on a model of $F/\kappa$ of dimension $d\ge2$, and let $a,b$ vanish at $q$ with independent cotangent classes. Then $t=a/b$ is good [@openai2026modl, Lemma 6.4, pp. 25–26].

For relative algebraic closedness, blow up $q$. The exceptional divisor has valuation $v_q$ and residue field $\kappa(\mathbb P^{d-1})$, in which the residue of $a/b$ is one rational coordinate, the ratio of the independent initial linear forms of $a$ and $b$. Thus $v_q$ is trivial on $\kappa(t)$, and its residue image is relatively algebraically closed in that residue field. The relative algebraic closure of $\kappa(t)$ in $F$ is finite; the valuation remains trivial on it, so it embeds by reduction in that residue field. It must equal $\kappa(t)$.

For each $c\in\kappa$, $a-cb$ is a regular parameter at $q$. Its local zero divisor is prime with multiplicity one, and $b$ is a unit at its generic point. The corresponding true divisor satisfies $v(t-c)=1$. The divisor defined by $b$ similarly gives a simple pole of $t$. All point lines, including infinity, are therefore detected with nonzero mod-$\ell$ inertia.

Given $f\in F^\times$, choose $q$ where $f$ is a unit and choose $a,b$ there. Both $t=a/b$ and $ft=(fa)/b$ are good, since the cotangent class of $fa$ is $f(q)$ times that of $a$. Thus $f=(ft)/t$: good functions generate $F$ and their classes span $V_F$.

The same construction checks the common-partner assertion [@openai2026modl, Lemma 6.5, p. 26]. Given finitely many good $t_i$, choose $q$ where they are regular and put $s=a/b$. For every $c\ne0$, $(t_ib+ca)/b=t_i+cs$ is good, because its numerator has cotangent class $t_i(q)b+ca$, independent of $b$. At the exceptional divisor, $s$ has transcendental residue whereas the restriction to $\kappa(t_i)$ has residue field $\kappa$, since $v_q(t_i-t_i(q))>0$. Algebraicity of $s$ over $\kappa(t_i)$ would put it in this relatively algebraically closed subfield and contradict its residue. Hence $s$ is independent of every $t_i$.

**Exact point-value output.** For every good function $t\in K$, choose a generator $t'\in L$ of its matched good subfield and use the matched point lines to obtain
$$B_t:\mathbb P^1(k)\longrightarrow\mathbb P^1(l).$$
Choose the coordinate $t'$ so that $B_t(\infty)=\infty$. For every pair of matched true divisors $v\leftrightarrow w$, (2) proves
$$v(t-a)=1\ \Longrightarrow\ w(t'-B_t(a))>0\quad(a\in k),\tag{3}$$
$$w(t'-b)=1\ \Longrightarrow\ v(t-B_t^{-1}(b))>0\quad(b\in l).\tag{4}$$

Indeed $v(t-a)=1$ makes $\rho_{k(t)}(I_v)$ the nonzero point line at $a$. Equation (2) forces $\rho_{l(t')}(I_w)$ to be the nonzero line at $B_t(a)$. The restriction of $w$ is therefore $e\,\mathrm{ord}_{B_t(a)}$ with $e>0$ and $\ell\nmid e$, giving (3). The inverse argument is identical.

Let $\mathcal T$ be all good functions of $K$. The supply result contains the transverse-parameter family $\mathcal T_0(K)$ in $\mathcal T$. Bijection on good subfields and generation on $L$ give $L=l(t':t\in\mathcal T)$. Thus (3)–(4) are precisely condition (D), with the same hypotheses and normalization, of [field recovery from simultaneous point values](field-recovery-from-simultaneous-point-values.md). This verifies the interface to its checked section 7; no compatibility of the resulting field isomorphism with $\Theta$ is asserted here.

**Checks and limits.** Vanishing inertia cannot be repaired by saturation over $\mathbb F_\ell$. For $F=\kappa(x,y)$, $t=x^\ell y$ and $v=\mathrm{ord}_{x=0}$, the field $E=\kappa(t)$ is relatively algebraically closed since $F=E(x)$, yet $v|_E=\ell\,\mathrm{ord}_{t=0}$ and $\rho_E(I_v)=0$. This explains both the nonzero-image condition and the multiplicity-one hypothesis in (3). The full point-family relation works also at $\ell=2$; among the two point-family tests, only the genus test uses the stipulated characteristic different from $\ell$.

The quasi-divisorial and curve-subfield correspondences remain explicit inputs. This checks the remaining assertions of section 6 of the [October 2026 manuscript](manuscripts-claiming-bogomolov-pop.md), not its preceding recovery arguments or the complete reconstruction theorem. No gap was found in this component. The manuscript is not peer reviewed; this check does not replace that review.
