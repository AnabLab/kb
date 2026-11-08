---
title: Simultaneous values from recovered pro-ell rational quotients
kind: theorem
summary: 'Matched divisorial inertia and commuting pro-$\ell$ rational quotient maps force simultaneous point values. With the coefficient-free field-recovery theorem, they yield an isomorphism of perfect closures in transcendence degree at least $2$; scalar compatibility remains separate.'
tags: [function-fields, reconstruction-algorithms, valuations]
edges:
  - {to: divisoriality-from-completed-curve-subfields, label: uses, note: "Part 3 supplies the divisorial matching, rational-subfield correspondence and commuting quotient maps assumed here."}
  - {to: field-recovery-from-simultaneous-point-values, label: uses, note: "The coefficient-free theorem turns the simultaneous-value condition proved here into an isomorphism of perfect closures."}
  - {to: pro-l-strategy-for-bogomolov-pop, label: addresses, note: "A field-existence step from the recovered rational quotients; compatibility with the original character isomorphism is not asserted."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Applies the field-theoretic argument of the mod-ell manuscript to the recovered pro-ell quotients of the earlier manuscript."}
---

**Setting.** Let $K/k$ and $L/l$ be function fields of transcendence degree at least $2$ over algebraically closed fields of characteristic different from a fixed prime $\ell$. Write $W_F=\mathrm{Hom}(F^\times,\mathbb Z_\ell)$ with its pointwise topology. For a prime divisor $v$ trivial on the constants, normalize $vF=\mathbb Z$ and write $I_v=\mathbb Z_\ell v$. For a relatively algebraically closed rational subfield $E\subset K$, restriction is $\rho_E:W_K\to W_E$.

Suppose a continuous $\mathbb Z_\ell$-linear isomorphism $\varphi:W_L\to W_K$ comes with:

1. A bijection $v\mapsto w$ of prime divisors with $\varphi(I_w)=I_v$.
2. A bijection $E\mapsto P_E$ of the relatively algebraically closed rational subfields, and continuous isomorphisms $\varphi_E:W_{P_E}\to W_E$ satisfying
   $$\rho_E\circ\varphi=\varphi_E\circ\rho_{P_E},$$
   which match the point inertia lines in both directions.

These are outputs of part 3 of [divisoriality from completed curve subfields](divisoriality-from-completed-curve-subfields.md), conditional on that entry's hypotheses [@openai2026bp, Propositions 6.6–6.7, pp. 22–23]. No total decomposition graph or class-two lift is assumed here.

**Statement.** Put $\mathcal T=\{t\in K\setminus k:k(t)\text{ is relatively algebraically closed in }K\}$. For every $t\in\mathcal T$, choose a generator $t'\in L$ of $P_{k(t)}$. The point matching defines $B_t:\mathbb P^1(k)\to\mathbb P^1(l)$ by
$$\varphi_{k(t)}(I_{B_t(a)})=I_a.$$
Change $t'$ by a projective linear transformation so that $B_t(\infty)=\infty$. Choices for different $t$ need not be coordinated. Then:

- For every matched pair $v,w$ and every finite $a\in k$,
  $$v(t-a)>0\quad\Longleftrightarrow\quad w(t'-B_t(a))>0.\tag{1}$$
- For any finite tuple $\mathbf t$ in $\mathcal T$, let $X_{\mathbf t}$ and $Y_{\mathbf t}$ be its relation variety and that of the tuple $\mathbf t'$ in the respective products of projective lines. There are dense opens $U\subset X_{\mathbf t}$ and $U'\subset Y_{\mathbf t}$ such that
  $$\Bigl(\prod_i B_{t_i}\Bigr)(U(k))\subset Y_{\mathbf t}(l),\qquad
  \Bigl(\prod_i B_{t_i}^{-1}\Bigr)(U'(l))\subset X_{\mathbf t}(k).\tag{2}$$
- Consequently there are isomorphisms $\sigma:k\to l$ and $\alpha:K^i\to L^i$ with $\alpha|_k=\sigma$ and $\alpha(k(t)^i)=P_{k(t)}^i$ for every $t\in\mathcal T$. Here $F^i$ denotes the perfect closure.

**Proof.** *Centres survive ramification.* A nontrivial restriction of $v$ to $E=k(t)$ is $e\,\mathrm{ord}_a$ for a unique $a\in\mathbb P^1(k)$ and an integer $e>0$. Thus
$$\rho_E(I_v)=e\mathbb Z_\ell\mathrm{ord}_a,\qquad
\operatorname{Sat}_{W_E}(\rho_E(I_v))=I_a.$$
The point line is saturated: a local uniformizer evaluates its generator to $1$. The same holds for $w$ on $P_E$. The commuting square gives equality of the actual subgroups
$$\varphi_E(\rho_{P_E}(I_w))=\rho_E(I_v).$$
It therefore matches zero images and, for nonzero images, their saturations. Consequently the restrictions are both trivial, or have centres $a$ and $B_t(a)$. A finite centre $a$ is equivalent to $v(t-a)>0$, proving (1), including its converse. No ramification multiplicity has been replaced by its residue modulo $\ell$.

*One divisor records a tuple.* In positive characteristic $p$, a $t\in\mathcal T$ cannot lie in $K^p$: its $p$th root would be algebraic over $k(t)$ but not in $k(t)$. Since $k$ is perfect, $dt\ne0$. In characteristic zero this is immediate as well. Choose a smooth affine model open $V$ on which all $t_i$ are regular and every $dt_i$ is nonzero at every point. At any closed point $q$, put $a_i=t_i(q)$. The exceptional divisor of the blowup at $q$ has normalized valuation $v_q$ satisfying
$$v_q(t_i-a_i)=1\quad\text{for every }i.$$
Indeed these functions have nonzero images in $\mathfrak m_q/\mathfrak m_q^2$, and the exceptional-divisor order on a regular local ring is its maximal-ideal order. The residue field of $v_q$ has transcendence degree $\dim V-1$ over $k$, so it is a prime divisor of the required kind. Equation (1) implies that its match $w$ has all $t_i'$ regular in its valuation ring with residues $B_{t_i}(a_i)$. Reducing every polynomial relation over $l$ among the $t_i'$ shows that this tuple lies in $Y_{\mathbf t}(l)$.

The image of $V$ in $X_{\mathbf t}$ is constructible and dense, hence contains a dense open $U$. Every $k$-point of $U$ has a closed preimage, because its nonempty fibre has finite type over the algebraically closed field $k$. This gives the first inclusion of (2). Apply the same argument to the finite tuple $\mathbf t'$ in $L$, using the inverse correspondences, to obtain the second. This is the proof of the simultaneous-value lemma, using saturated pro-$\ell$ inertia images in place of mod-$\ell$ images [@openai2026modl, Lemma 7.1, p. 27].

*Enough functions and field recovery.* The set $\mathcal T$ contains every ratio $a/b$ of two independent local parameters at a smooth closed point. To see relative algebraic closedness, the exceptional divisor has purely transcendental residue field with $\bar a/\bar b$ as a rational coordinate. The relative algebraic closure of $k(a/b)$ in $K$ is finite, carries the trivial valuation and embeds in that residue field, where $k(\bar a/\bar b)$ is relatively algebraically closed. Thus it is $k(a/b)$ itself. For any $f\in K^\times$, choose such a point where $f$ is a unit; both $a/b$ and $fa/b$ have the same property. Their quotient is $f$. Hence these ratios generate $K$. The same argument in $L$ shows that its relatively algebraically closed rational subfields generate $L$. As every such subfield is matched, $L=l(t':t\in\mathcal T)$ [@openai2026modl, proof of Lemma 6.4, pp. 25–26].

All hypotheses of [field recovery from simultaneous point values](field-recovery-from-simultaneous-point-values.md) now hold, with (2) as its condition (SV). That coefficient-free theorem yields $\sigma$ and $\alpha$, and the stated correspondence of perfected rational subfields. Its constant-field and field-operation arguments use only (SV) and the supply of transverse-parameter ratios, not the coefficient ring of the original character groups [@openai2026modl, Lemmas 6.4–6.5 and §7, pp. 25–32]. $\square$

**Checks and scope.** Saturation matters even for rational surfaces. In $K=k(x,y)$, take $v=\mathrm{ord}_{x=0}$ and $t=x^\ell y$. Then $K=k(t)(x)$, so $k(t)$ is relatively algebraically closed, but $\rho_{k(t)}(I_v)=\ell\mathbb Z_\ell\mathrm{ord}_{t=0}$. Its reduction modulo $\ell$ is zero; its saturation still gives the centre $0$. The proof uses the same matched divisor for all members of a tuple, so separate point bijections without the common quotient squares would not supply (2).

This gives field existence from the stated recovered data in every transcendence degree at least $2$, without invoking Pop's reconstruction theorems. It does not prove that $\alpha$ induces $\varphi$ up to one scalar, nor uniqueness modulo Frobenius. Those are further requirements of the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md). The earlier recovery of the data remains subject to its explicit hypotheses; this entry does not verify the full manuscript. The two manuscripts used here are not peer reviewed.
