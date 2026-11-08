---
title: Proper curves over finite fields from large sets of primes
kind: theorem
summary: Saïdi–Tamagawa recover proper hyperbolic curves over finite fields from geometrically pro-Sigma fundamental groups when each Jacobian's omitted-prime Tate representation has nontrivial kernel. Any finite set of primes may be omitted.
tags: [curves, fundamental-groups, function-fields]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: mochizuki-grothendieck-conjecture-proper-curves-finite-fields, label: generalizes, note: "Taking Sigma to be all primes recovers the full fundamental-group statement [@saiditamagawa2018refined, Theorems A and C, pp. 1–3]."}
  - {to: prime-to-p-anabelian-curves-over-finite-fields, label: analogous-to, note: "For proper curves the geometric prime set may be reduced further; that entry also treats affine curves."}
---

**Input.** Let $X_i/k_i$ be smooth, proper, geometrically connected curves of genus at least $2$ over finite fields of characteristic $p_i$. Choose a set of primes $\Sigma_i$ containing a prime different from $p_i$. Let $\Delta_i$ be the maximal pro-$\Sigma_i$ quotient of $\pi_1(X_i\times_{k_i}\bar k_i)$, and put
$$
\Pi_i=\pi_1(X_i)/\ker\bigl(\pi_1(X_i\times_{k_i}\bar k_i)\to\Delta_i\bigr).
$$
Thus $1\to\Delta_i\to\Pi_i\to G_{k_i}\to1$ retains the full Galois group of the constants [@saiditamagawa2018refined, §0, p. 2].

**Prime-set hypothesis.** Write $J_i$ for the Jacobian and $\Sigma_i'=\mathrm{Primes}\setminus\Sigma_i$. Require the representation
$$
\rho_{J_i,\Sigma_i'}:G_{k_i}\longrightarrow
\operatorname{Aut}\left(\prod_{\ell\in\Sigma_i'}T_\ell(J_i)\right)
$$
to have nontrivial kernel, for both $i=1,2$. Here $T_\ell(J_i)=\varprojlim_n J_i[\ell^n](\bar k_i)$, including when $\ell=p_i$. The authors call $\Sigma_i$ *$J_i$-large* [@saiditamagawa2018refined, Definition 2.6 and preceding paragraph, p. 13].

**Theorem (Saïdi–Tamagawa).** Under these hypotheses, every topological isomorphism $\alpha:\Pi_1\to\Pi_2$ arises from a unique commutative diagram
$$
\begin{array}{ccc}
\widetilde X_1&\xrightarrow{\sim}&\widetilde X_2\\
\downarrow&&\downarrow\\
X_1&\xrightarrow{\sim}&X_2
\end{array}
$$
whose horizontal arrows are scheme isomorphisms inducing $\alpha$ and whose vertical arrows are the profinite étale coverings corresponding to $\Pi_i$ [@saiditamagawa2018refined, Theorem 4.22, p. 41].

**Scope.** The prime-set hypothesis holds whenever each omitted set $\Sigma_i'$ is finite [@saiditamagawa2018refined, paragraph after Theorem C, p. 3]. No identification of constant fields or Frobenius marking is supplied. The groups intrinsically determine $\Delta_i$, $G_{k_i}$ and $\Sigma_i$; under the stated hypothesis they also determine $p_i$, arithmetic Frobenius and $|k_i|$ [@saiditamagawa2018refined, Proposition 1.7, p. 10; Lemma 2.7 and Proposition 2.5, pp. 12–14].
