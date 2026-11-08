---
title: Uniform support bound for mod-ell Kummer pencils
kind: theorem
summary: A mod-ell Kummer isomorphism matching terminal quasi-divisors and finite-constant residual point lines sends every pencil to classes of uniformly bounded divisor-support degree. Five anchors give the bound, including at ell = 2.
tags: [function-fields, milnor-k-theory, valuations, curves]
edges:
  - {to: uniform-support-bound-for-kummer-pencils, label: uses, note: "Only part 1, the geometric finite residual test at q = ell; its pro-ell isomorphism theorem is not applied to a mod-ell map."}
  - {to: quasi-prime-divisor, label: uses}
  - {to: kummer-theory, label: uses, note: "Bounds the finite kernel of multiplicative classes in a finitely generated extension."}
  - {to: mod-l-bogomolov-pop-conjecture, label: addresses, note: "The uniform pencil bound is an input to the recovery of curve subfields, with the local matching assumed here."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks Lemma 4.1 and Propositions 4.3-4.4 of the mod-ell manuscript using the existing geometric finite test; the outputs of sections 2-3 remain explicit hypotheses."}
---

**Setting and hypotheses.** Let $\Lambda=\mathbb F_\ell$, and let $K/k$ and $L/l$ be function fields of the same transcendence degree $d\ge2$ over algebraically closed fields of characteristic different from $\ell$. Put $V_F=F^\times/F^{\times\ell}$ and $A_F=\operatorname{Hom}(F^\times,\Lambda)$, with pointwise convergence on $A_F$. Evaluation identifies $V_F$ with the continuous dual of $A_F$: after choosing a basis of $V_F$, a continuous linear form on its product dual depends on finitely many coordinates [@openai2026modl, §2, p. 5].

For a valuation $v$, put $I_v=U_v^\perp$ and $D_v=(U_v^1)^\perp$. For a quasi-prime $r$-divisor, $vF/v\kappa\cong\mathbb Z^r$, the residue constants $\kappa v$ are algebraically closed, and restriction to units gives $D_v/I_v\cong A_{Fv}$ [@openai2026modl, Definition 2.3 and Lemma 2.4, p. 7]. Indeed, the exact sequence
$$0\longrightarrow(Fv)^\times/(\kappa v)^\times\longrightarrow F^\times/(\kappa^\times U_v^1)\longrightarrow vF/v\kappa\longrightarrow0$$
splits because its last term is free. Dualizing into $\Lambda$ is exact, and characters annihilate the divisible constant groups. A $v$-unit therefore induces its residue class on $D_v/I_v$.

Let $\Theta:V_K\to V_L$ be a linear isomorphism and $\Phi=\Theta^*:A_L\to A_K$ its continuous dual. Assume:

1. For every quasi-prime $(d-1)$-divisor $w$ of $L/l$, there is such a divisor $v$ of $K/k$ with $\Phi(I_w)=I_v$ and $\Phi(D_w)=D_v$.
2. Whenever $lw$ is algebraic over a finite field, so is $kv$, and the induced isomorphism $\bar\Phi:A_{Lw}\to A_{Kv}$ maps the complete families of point inertia lines bijectively. A point inertia line on a smooth projective curve is $\Lambda\operatorname{ord}_P$.

These are the outputs required from Corollary 2.9 and Proposition 3.5 of the manuscript [@openai2026modl, pp. 10 and 14]. They are hypotheses here; no lift of $\Theta$ to pro-$\ell$ characters is assumed.

Fix a normal integral projective model $X\subseteq\mathbb P^N_l$ of $L/l$. For $h\in V_L$ define
$$s_X(h)=\sum_{\operatorname{ord}_D(h)\ne0\text{ in }\Lambda}\deg D.$$
This is well defined and finite, since changing a representative by an $\ell$-th power changes every order by a multiple of $\ell$.

**Theorem.** For every $t\in K\setminus k$, there is a constant $B_t$ such that
$$s_X\bigl(\Theta([t-a])\bigr)\le B_t\qquad(a\in k).$$
This is Proposition 4.4 of the manuscript [@openai2026modl, pp. 18–19], under the stated matching hypotheses.

**Finite inputs.** Two facts supply the finite-coefficient argument.

- If $E/F$ is finitely generated, $\operatorname{char}F\ne\ell$ and $\mu_\ell\subset F$, then $\ker(V_F\to V_E)$ is finite dimensional [@openai2026modl, Lemma 4.1, p. 15]. To check this, choose a transcendence basis $x$ with $[E:F(x)]=N<\infty$. Every finite subextension $F_1/F$ of the relative algebraic closure of $F$ in $E$ has $[F_1:F]=[F_1(x):F(x)]\le N$. The degrees have a maximum; a subextension attaining it contains all others, since their composita have the same bound. Thus that relative algebraic closure $F'/F$ is finite. If $r$ independent classes of $V_F$ vanish in $V_E$, their $\ell$-th roots belong to $F'$, and Kummer theory gives an extension of degree $\ell^r$ inside $F'$. Hence $\ell^r\le[F':F]$.
- There is $G_X\ge0$ depending only on $X$ such that any finite independent list $[g_j]\in V_L$ can be tested on one residual curve: a quasi-prime $(d-1)$-divisor $w$ has $lw$ an algebraic closure of a finite field of characteristic different from $\ell$, residual curve $C_w$ of genus at most $G_X$, and all $g_j$ are $w$-units with independent residue classes and
$$\#\{P\in C_w(lw):\operatorname{ord}_P(\bar g_j)\not\equiv0\pmod\ell\}=s_X([g_j]).$$
This is Proposition 4.3 [@openai2026modl, pp. 16–18]. It follows directly from part 1 of the [geometric finite residual test](uniform-support-bound-for-kummer-pencils.md) with $q=\ell$: preservation of every relation gives independence, and its support-count assertion gives the equality. That part is independent of any character isomorphism. Its Bertini and spreading-out inputs are inherited, rather than re-proved here.

**Proof.** Write $h_a=\Theta([t-a])$.

*1. Discard finitely many parameters.* The classes $[t-a]$, $a\in k$, are independent in $V_{k(t)}$, by their orders at the finite points of $\mathbb P^1_k$. The first finite input makes the kernel in $V_{k(t)}\to V_K$ finite dimensional. A basis for its intersection with their span involves a finite set $S\subset k$ of parameters. Consequently the classes with indices in $A=k\setminus S$ are independent in $V_K$: a relation supported outside $S$ would lie both in the span supported on $S$ and in its complementary coordinate subspace.

Choose five distinct anchors $a_1,\ldots,a_5\in A$ and put $N_i=s_X(h_{a_i})$. In characteristic zero, include $b_0,b_0+1,b_0+\ell$ among them; this is possible by avoiding the finitely many forbidden values of $b_0$. Put
$$c_\ell=5(1-1/\ell)-2=3-5/\ell>0,\qquad B=\max\left\{1,\frac{2G_X-2+\sum_{i=1}^5N_i}{c_\ell}\right\}.$$

*2. Normalize six independent classes to a residual pencil.* Fix $a\in A$ outside the anchors, set $a_6=a$, and choose representatives $g_j$ of $h_{a_j}$. The finite curve test gives $w$ and $C_w$ for these six independent classes. Their evaluations on $D_w$ are independent, since restriction surjects onto $A_{Lw}$ and evaluation detects their independent residues. The first matching hypothesis therefore makes the evaluations of $u_j=t-a_j$ on $D_v$ independent.

Their values are all equal. If $v(u_i)>v(u_j)$, then $u_j/(a_i-a_j)=1+u_i/(a_i-a_j)$ is a principal unit; since characters kill constants, $[u_j]$ would vanish on $D_v$. Write $\gamma$ for the common value. Each $v(a_i-a_j)\ge\gamma$, and strict inequality would make $u_i/u_j$ a principal unit, giving equal evaluations. Thus every difference has value $\gamma$. In particular $b=a_2-a_1\in k^\times$ has this value. Set
$$\tau_0=\overline{(t-a_1)/b},\qquad\beta_j=\overline{(a_j-a_1)/b}\in kv.$$
The $\beta_j$ are pairwise distinct and the residues of $u_j/b$ are $\tau_0-\beta_j$. These classes correspond individually to $[\bar g_j]$ under the dual of $\bar\Phi$, by evaluating on $D_w$ and $D_v$. They are independent; in particular $\tau_0\notin kv$, since constants have zero class.

In positive characteristic, $\operatorname{char}(kv)=\operatorname{char}(k)\ne\ell$. In characteristic zero the three specified anchors give $v(1)=v(\ell)=\gamma=0$, so again $\operatorname{char}(kv)\ne\ell$. This normalization uses only the independence just proved; no assertion about the value group of $k(t)$ is needed.

*3. Compare genera and orders.* The second matching hypothesis gives a smooth projective residual curve $C_v/kv$ with finite-field constants and a bijection of all its point lines with those of $C_w$. On a smooth projective curve $C$ in characteristic different from $\ell$, the common kernel of point orders in $V_{\kappa(C)}$ is $\operatorname{Pic}(C)[\ell]$: write $\operatorname{div}(f)=\ell D$ and map $[f]$ to $[D]$. Torsion gives surjectivity, and divisibility of constants gives injectivity. Its dimension is $2g(C)$ [@openai2026modl, Lemma 3.4, p. 13] [@stacks2026, Lemma 53.17.1, Tag 0C1Z]. The dual of $\bar\Phi$ identifies these kernels, so $g(C_v)=g(C_w)\le G_X$. Matched point generators differ by a nonzero scalar, so for every $j$ the number of nonzero point orders of $\tau_0-\beta_j$ is exactly $s_X(h_{a_j})$.

*4. Bound the separable degree with five fibers.* Write $p=\operatorname{char}(kv)>0$. Choose $r\ge0$ maximal with $\tau_0=\tau^{p^r}$ in $Kv$. Such an $r$ exists because $p^r$ divides any fixed nonzero point order of the nonconstant function $\tau_0$. Then $\tau\notin(Kv)^p$ defines a separable morphism $\tau:C_v\to\mathbb P^1_{kv}$, of degree $n\ge1$. Here one uses the standard one-variable criterion: over perfect constants the kernel of $d:Kv\to\Omega_{Kv/kv}$ is $(Kv)^p$, and nonzero differential is equivalent to separability [@stacks2026, proof of Lemma 53.13.3] [@stacks2026, Lemma 53.12.1, Tag 0C1C]. Put $\beta'_j=\beta_j^{1/p^r}$. Then
$$\tau_0-\beta_j=(\tau-\beta'_j)^{p^r}.$$
Since $p\ne\ell$, multiplication of orders by $p^r$ preserves vanishing modulo $\ell$.

In the fiber over $\beta'_i$, at most $N_i$ points have ramification index prime to $\ell$; every other point has index at least $\ell$. If that fiber has $r_i$ points, then $r_i\le N_i+n/\ell$, since its indices sum to $n$. Its contribution to the different is at least
$$\sum_{P\mapsto\beta'_i}(e_P-1)=n-r_i\ge(1-1/\ell)n-N_i.$$
The five fibers are disjoint. Riemann–Hurwitz, with the different exponent at least $e_P-1$ even in wild ramification [@stacks2026, Lemma 53.12.4, Tag 0C1F], gives
$$2g(C_v)-2+2n\ge5(1-1/\ell)n-\sum_{i=1}^5N_i.$$
Thus $c_\ell n\le2G_X-2+\sum_iN_i$, and $n\le B$.

*5. Return to the support on $X$.* All zeros and poles of $\tau-\beta'_6$ lie in its fibers over $\beta'_6$ and $\infty$, which together contain at most $2n$ points. Steps 2–3 therefore give $s_X(h_a)\le2B$, independently of $a$ and of the residual curve chosen for that test. Taking the maximum with the finitely many values for $a\in S\cup\{a_1,\ldots,a_5\}$ gives $B_t$. $\square$

**Checks and scope.** Finite exceptional parameters are necessary: for $K=k(x,y)$ and $t=x^\ell$, the class $[t]$ vanishes in $V_K$. Five anchors are necessary for this estimate at $\ell=2$, since four give coefficient zero, whereas $c_2=1/2$. Removing the inseparable $p$-power preserves precisely the orders modulo $\ell$ needed here, and using the different inequality allows wild ramification. The curve may depend on the sixth parameter; the genus bound and the five anchor supports do not.

This records the finite-kernel and pencil argument of §4 of the manuscript dated 5 October 2026, using the previously recorded geometric finite test for Proposition 4.3. Its geometric construction and Lemma 4.2 are not independently re-proved here. The local matching hypotheses and subsequent curve-subfield and field reconstruction remain separate inputs and tasks. The manuscript is not peer reviewed; this component check does not establish its full reconstruction theorem.
