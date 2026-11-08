---
title: Global scalar rigidity for pro-ell rational quotients
kind: theorem
summary: 'For a function field of transcendence degree at least $2$, a continuous automorphism of its pro-$\ell$ characters that permutes divisorial inertia-decomposition pairs and descends to each rational quotient is multiplication by one global unit.'
tags: [function-fields, reconstruction-algorithms, valuations]
edges:
  - {to: divisoriality-from-completed-curve-subfields, label: uses, note: "Its point-inertia saturation formula is used; its matched divisorial pairs and rational quotient maps supply the rigidity hypotheses."}
  - {to: field-recovery-from-simultaneous-point-values, label: uses, note: "Supplies the field isomorphism in the conditional application when its simultaneous-value hypotheses hold."}
  - {to: simultaneous-values-from-pro-l-rational-quotients, label: uses, note: "Supplies the matched perfect-closure isomorphism from pro-ell rational quotient squares in the final consequence."}
  - {to: pro-l-strategy-for-bogomolov-pop, label: addresses, note: "The global-scalar step after recovering a field isomorphism that matches all rational subfields."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "An integral analogue of Lemmas 8.1–8.2 and Proposition 8.3 of the October 2026 mod-ℓ manuscript [@openai2026modl, pp. 33–34]. With the simultaneous-values entry, it gives the conclusion of the September 2026 manuscript's surjectivity step, a field isomorphism inducing the given map up to one unit, from the outputs of its Propositions 6.6–6.7, without its Proposition 7.1."}
---

**Setting.** Let $K/k$ be a function field, that is, a finitely generated extension, of transcendence degree $d\ge2$ over an algebraically closed field of characteristic different from $\ell$. Put $W_F=\mathrm{Hom}(F^\times,\mathbb Z_\ell)$, with its pointwise topology. For a prime divisor $v$ trivial on $k$, normalize $vK=\mathbb Z$ and put
$$I_v=\mathbb Z_\ell v,\qquad D_v=\{\chi\in W_K:\chi(1+\mathfrak m_v)=0\}.$$
For a relatively algebraically closed rational subfield $E\subset K$, write $\rho_E:W_K\to W_E$ for restriction.

**Rigidity theorem.** Suppose a continuous $\mathbb Z_\ell$-linear automorphism $\Phi$ of $W_K$:

1. permutes the pairs $I_v\subset D_v$ of all prime divisors;
2. for every such rational $E$, descends to a continuous automorphism $\Phi_E$ of $W_E$, with $\rho_E\Phi=\Phi_E\rho_E$.

Then $\Phi=a\,\mathrm{id}$ for one $a\in\mathbb Z_\ell^\times$.

The proof adapts the mod-$\ell$ manuscript's argument to integral characters, with the local matching made an explicit hypothesis [@openai2026modl, Lemmas 8.1–8.2 and Proposition 8.3, pp. 33–34]. No commutator-compatibility assumption is needed once hypotheses 1–2 are given.

**Proof.** *1. Decomposition restrictions detect triviality.* For rational $E=k(t)$,
$$v|_E=0\quad\Longleftrightarrow\quad
\dim_{\mathbb Q_\ell}\bigl(\rho_E(D_v)\otimes_{\mathbb Z_\ell}\mathbb Q_\ell\bigr)\ge2.\tag{1}$$
If $v|_E\ne0$, it is $e\,\mathrm{ord}_x$ for a point $x$ and an integer $e>0$. An $x$-unit $f\in E$ has residue $c\in k^\times$, so $f/c\in1+\mathfrak m_v$. Characters kill the divisible group $k^\times$, hence $\rho_E(D_v)\subset\mathbb Z_\ell\mathrm{ord}_x$. It contains $\rho_E(v)=e\,\mathrm{ord}_x$, so its rank is exactly one, even when $\ell\mid e$.

If $v|_E=0$, reduction embeds $E$ into $Kv$, and $D_v/I_v=W_{Kv}$ [@openai2026bp, Lemma 3.2, p. 8]. Choose distinct finite points $b,c$ of $\mathbb P^1(k)$. Extend their orders from $E$ to $Kv$ by Gauss extension on a transcendence basis and prolongation across the remaining finite extension. Normalized, these valuations restrict to positive integer multiples of $\mathrm{ord}_b,\mathrm{ord}_c$. They are characters of $Kv$ and lift to $D_v$. Their restrictions are linearly independent, as evaluation on $t-b,t-c$ shows. This proves (1).

*2. Rational subfields separate divisors.* If $v_1\ne v_2$, there is a relatively algebraically closed rational $E$ with $v_1|_E=0$ and $v_2|_E\ne0$. Realize both valuations as distinct divisors $D_1,D_2$ on a common normal projective model $X$. One obtains such a model by normalizing the graph of the birational map between models realizing the two valuations; a dominating model retains codimension-one centres since their residue fields have transcendence degree $d-1$.

Choose distinct closed points $P,Q\in D_1\setminus D_2$ and a smooth closed point $R\notin D_1\cup D_2$. Here $d\ge2$ ensures that $D_1$ has positive dimension. Choose an affine open containing these points and meeting $D_2$, with coordinate ring $A$ and prime $\mathfrak p_2$ for $D_2$. The ideals $\mathfrak p_2,\mathfrak m_P,\mathfrak m_Q,\mathfrak m_R^2$ are pairwise comaximal. The Chinese remainder theorem gives $a,b\in A$ with
$$a\equiv0,\ b\equiv1\pmod{\mathfrak p_2},\qquad
(a(P),b(P))=(0,1),\quad(a(Q),b(Q))=(1,1),$$
and with $a,b\in\mathfrak m_R$ having independent cotangent classes at $R$. Then $t=a/b$ has nonconstant residue on $D_1$ and positive value on $D_2$.

The field $k(t)$ is relatively algebraically closed in $K$. Indeed the exceptional divisor at $R$ has residue field $k(\mathbb P^{d-1})$, in which the residue of $t$ is a coordinate. Its valuation is trivial on $k(t)$, hence on its relative algebraic closure $E_0\subset K$, so reduction embeds $E_0$ into $k(\mathbb P^{d-1})$. That rational field has no elements algebraic over its coordinate field except those in the coordinate field. Thus $E_0=k(t)$. This is the transverse-parameter argument in step 0 of [field recovery from simultaneous values](field-recovery-from-simultaneous-point-values.md).

Write $v\mapsto w$ for the permutation in hypothesis 1. Hypothesis 2 preserves the rank in (1), so $v|_E$ is trivial exactly when $w|_E$ is trivial, for every rational $E$. Separation forces $w=v$. Thus every $I_v$ and $D_v$ is fixed.

*3. One scalar on each rational quotient.* Fix $E=k(t)$. Every point line in $W_E$ is the saturation of a nonzero $\rho_E(I_v)$ by [the point-inertia formula](divisoriality-from-completed-curve-subfields.md). Since $I_v$ is fixed, hypothesis 2 shows that $\Phi_E$ fixes each point line. Write
$$\Phi_E(\mathrm{ord}_x)=a_x\mathrm{ord}_x,\qquad a_x\in\mathbb Z_\ell^\times.$$
The net of finite partial sums $\sum_{x\in\mathbb P^1(k)}\mathrm{ord}_x$ converges pointwise to zero, since a rational function has finite divisor of degree zero. Applying the continuous map $\Phi_E$ and evaluating on $t-c$ gives $a_c-a_\infty=0$ for every $c\in k$. Call this common unit $a_E$.

The point orders span a dense submodule of $W_E$: for any $\chi\in W_E$, the finite partial sums of $\sum_{c\in k}\chi(t-c)\mathrm{ord}_c$ converge pointwise to $\chi$, by factorization of rational functions. Continuity therefore gives $\Phi_E=a_E\,\mathrm{id}$ on all of $W_E$.

*4. The scalar is global.* Given $E=k(t)$ and $F=k(s)$ as above, choose a smooth closed point $q$ on a model where $t,s$ are regular and both differentials are nonzero. Such an open exists: in positive characteristic $p$, relative algebraic closedness implies $t,s\notin K^p$; over perfect $k$ their differentials are nonzero. Let $v$ be the exceptional divisor of the blowup at $q$. Then
$$v(t-t(q))=v(s-s(q))=1.$$
As $I_v$ is fixed, $\Phi(v)=a_vv$ for a unit $a_v$. Restricting to $E$ and $F$ gives $a_E=a_v=a_F$. Call the common unit $a$.

For every $f\in K^\times$, choose a smooth closed point $q$ where $f$ is regular and nonzero, and local parameters $u,z$ with independent cotangent classes. Both $t=u/z$ and $ft=fu/z$ are transverse-parameter ratios, since $fu\equiv f(q)u\pmod{\mathfrak m_q^2}$. Hence both generate relatively algebraically closed rational subfields by step 2's exceptional-divisor argument. For every $\chi\in W_K$,
$$\Phi(\chi)(f)=\Phi(\chi)(ft)-\Phi(\chi)(t)
=a\chi(ft)-a\chi(t)=a\chi(f).$$
This proves the theorem. $\square$

**Application to a recovered field.** Let $K/k,L/l$ satisfy the same hypotheses. Suppose a continuous $\mathbb Z_\ell$-linear isomorphism $\varphi:W_L\to W_K$ matches divisorial pairs, matches all relatively algebraically closed rational subfields $E\leftrightarrow P_E$, and commutes with their actual restriction maps. Suppose an isomorphism $\alpha:K^i\to L^i$ carries $k$ onto $l$ and $E^i$ onto $P_E^i$ for every $E$. For example, [field recovery from simultaneous values](field-recovery-from-simultaneous-point-values.md) supplies such an $\alpha$ when its hypotheses hold for all rational subfields.

Perfection does not change character groups: in characteristic $p\ne\ell$, a character extends uniquely by $\chi(f^{p^{-n}})=p^{-n}\chi(f)$. Thus $\alpha$ induces $\alpha^*:W_L\to W_K$. Field isomorphisms carry divisorial pairs to divisorial pairs, and $\alpha(E^i)=P_E^i$ gives the same quotient correspondence. Therefore $\varphi(\alpha^*)^{-1}$ satisfies hypotheses 1–2, so
$$\varphi=a\alpha^*,\qquad\Theta=a\widehat\alpha,$$
where $\Theta:\widehat K\to\widehat L$ is the evaluation dual and $\widehat\alpha$ is the map on multiplicative pro-$\ell$ completions.

In particular, the outputs of part 3 of [divisoriality from completed curve subfields](divisoriality-from-completed-curve-subfields.md) have all the required data: [simultaneous values from pro-$\ell$ rational quotients](simultaneous-values-from-pro-l-rational-quotients.md) supplies $\alpha$, and decomposition pairs are also matched. Their combination with this theorem gives the field isomorphism and compatibility up to one global unit, conditional on that part's preceding correspondences, without Pop's reconstruction theorems.

**Checks and limits.** This proves a conditional integral rigidity statement and its application, using the mod-$\ell$ argument as a template. The displayed proof uses decomposition groups in (1), but integral inertia alone also detects triviality: $\rho_E(I_v)=\mathbb Z_\ell(v|_E)$ is zero exactly when $v|_E=0$, since $\mathbb Z\hookrightarrow\mathbb Z_\ell$. Positive restriction multiplicities can disappear modulo $\ell$; they remain nonzero here, and saturation recovers the point lines. Transcendence degree one fails: on $K=k(t)$, interchange the coordinates $\chi(t),\chi(t-1)$ of $W_K=\prod_{c\in k}\mathbb Z_\ell$ and fix the others. This continuous nonscalar automorphism exchanges $I_0,I_1$, fixes every other point line including $I_\infty$, and permutes all divisorial pairs, since $D_x=I_x$. The only relatively algebraically closed rational subfield is $K$, so hypothesis 2 also holds.

Recovering the assumed local and rational data, and uniqueness of $\alpha$ modulo Frobenius, remain separate steps. The cited 2026 manuscripts are not peer reviewed.
