---
title: Small Galois quotients detect compatible valuations
kind: theorem
summary: If F contains a primitive p-th root of unity and -1 is a p-th power, Efrat–Mináč detect valuations with non-p-divisible value group and p-th-power principal units from the central image of a small Galois quotient, under rigidity and finiteness hypotheses, and bound the value group modulo p.
tags: [galois-groups, valuations, milnor-k-theory, reconstruction]
edges:
  - {to: milnor-k-ring, label: uses}
  - {to: commuting-liftable-pairs-and-valuations, label: analogous-to, note: "Both use commutation in small Galois quotients to detect valuations."}
  - {to: w-groups-and-witt-rings, label: analogous-to, note: "For p = 2 the quotient here is the W-group [@efratminac2012valuations, §1, p. 7]."}
---

Let $F$ contain a primitive $p$-th root of unity, with $p$ prime, and assume $-1\in F^{\times p}$. Write $G=G_F$ and
$$
G^{(2)}=G^p[G,G],\qquad
Q=G/\bigl(G^{\delta p}[G^{(2)},G]\bigr),\qquad
\delta=\begin{cases}1&p>2,\\2&p=2.\end{cases}
$$
Products and generated subgroups are closed. Put $\bar Z=\operatorname{im}(Z(Q)\to G/G^{(2)})$ and $\bar Z^\vee=\operatorname{Hom}_{\mathrm{cont}}(\bar Z,\mu_p)$ [@efratminac2012valuations, §1 and §4, pp. 7 and 13].

Call $F^{\times p}$ *totally rigid* if the natural map
$$
\bigwedge_{\mathbb F_p}^{*}(F^\times/F^{\times p})\longrightarrow K_*^M(F)/p
$$
is an isomorphism [@efratminac2012valuations, §6, p. 14].

**Valuation theorem.** Call $v$ *compatible* if $1+\mathfrak m_v\subseteq F^{\times p}$, and put $\Gamma_v=v(F^\times)$.

- For every compatible $v$, $\Gamma_v/p\Gamma_v$ is a quotient of $\bar Z^\vee$.
- If $F^{\times p}$ is not totally rigid, and either $p=2$ or $F^\times/F^{\times p}$ is finite, some compatible $v$ satisfies $\Gamma_v/p\Gamma_v\cong\bar Z^\vee$. Consequently such a $v$ with $\Gamma_v\ne p\Gamma_v$ exists exactly when $\bar Z\ne1$.
- If $F^{\times p}$ is totally rigid, some compatible $v$ admits a surjection $\bar Z^\vee\twoheadrightarrow\Gamma_v/p\Gamma_v$ with kernel of order dividing $p$.

These are [@efratminac2012valuations, Theorem 6.3 and Corollary 6.4, p. 15].
