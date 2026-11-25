---
title: Kummer-tower restriction retains crystalline morphisms
kind: theorem
summary: 'Restriction to the tower of p-power roots of a uniformizer is fully faithful on crystalline representations and their stable lattices, including at p=2. It therefore recovers morphisms of p-divisible groups over the original integer ring. Tate curves show that semistability does not suffice.'
tags: [local-fields, hodge-theory, galois-representations, reconstruction]
edges:
  - {to: breuil-crystalline-restriction-conjecture, label: resolves, note: 'The rational theorem answers the full-faithfulness question for every finite extension of Q_p.'}
  - {to: crystalline-lattices-and-p-divisible-groups, label: uses, note: 'Its equivalence identifies integral Tate modules and morphisms in the corollary.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: uses, note: 'The uniformizer Kummer extension supplies the semistable counterexample.'}
  - {to: fontaine-wintenberger-field-of-norms, label: analogous-to, note: 'The field-of-norms equivalence describes the tower subgroup; full faithfulness here concerns restriction from the original local Galois group.'}
---

**Data.** Let $K/\mathbb Q_p$ be finite, choose a uniformizer $\pi$ and compatible roots $\pi_0=\pi$, $\pi_{n+1}^p=\pi_n$ in $\bar K$, and put
$$
K_\infty=\bigcup_{n\ge0}K(\pi_n),\qquad G_\infty=\operatorname{Gal}(\bar K/K_\infty)\subseteq G_K.
$$

**Theorem (Kisin, proving Breuil's conjecture).** For crystalline $\mathbb Q_p$-representations $V,W$, restriction induces a bijection
$$
\operatorname{Hom}_{\mathbb Q_p[G_K]}(V,W)
\xrightarrow{\sim}
\operatorname{Hom}_{\mathbb Q_p[G_\infty]}(V,W).
$$
The same holds integrally for $G_K$-stable finite free lattices $T,T'$ with crystalline rationalizations:
$$
\operatorname{Hom}_{\mathbb Z_p[G_K]}(T,T')
\xrightarrow{\sim}
\operatorname{Hom}_{\mathbb Z_p[G_\infty]}(T,T').
$$
There is no bound on the Hodge–Tate weights or ramification index, and $p=2$ is included. Bhatt–Scholze state the rational theorem and reprove the integral version [@bhattscholze2023prismatic, Theorem 1.4, p. 4; Corollary 7.10 and proof, p. 33].

**Corollary for p-divisible groups (deduced here).** If $\mathcal G,\mathcal H$ are $p$-divisible groups over $\mathcal O_K$, then
$$
\operatorname{Hom}_{\mathcal O_K}(\mathcal G,\mathcal H)
\xrightarrow{\sim}
\operatorname{Hom}_{\mathbb Z_p[G_\infty]}(T_p\mathcal G,T_p\mathcal H).
$$
In particular, an isomorphism between their restricted integral Tate modules lifts uniquely to an isomorphism over $\mathcal O_K$.

**Proof.** The [crystalline classification](crystalline-lattices-and-p-divisible-groups.md) identifies the left side with the $G_K$-equivariant integral Hom group, and its Tate modules have crystalline rationalizations [@scholzeweinstein2013moduli, Corollary 6.2.3 and proof, p. 58]. Apply the integral theorem. For an isomorphism, lift both it and its inverse; faithfulness makes their two compositions identities. $\square$

**Semistable failure (worked example).** The [Kummer representation](kummer-extensions-and-tate-curve-periods.md) $V_\pi$ has basis $e,f$ and action
$$
g(e)=\chi_{\mathrm{cyc}}(g)e,\qquad g(f)=f+c_\pi(g)e,
$$
where $g(\pi_n)/\pi_n=\zeta_{p^n}^{c_\pi(g)}$ for compatible primitive roots $\zeta_{p^n}$. It is semistable and noncrystalline [@brinonconrad2009, Lemma 8.3.9 and proof, p. 125]. Every element of $G_\infty$ fixes the $\pi_n$, so $c_\pi|_{G_\infty}=0$. Thus $s:\mathbb Q_p\to V_\pi$, $s(1)=f$, is $G_\infty$-equivariant. It is not $G_K$-equivariant: otherwise $c_\pi$ would vanish identically and $\pi_1$ would belong to $K$, contrary to $v_K(\pi_1)=1/p$ for the valuation normalized by $v_K(\pi)=1$. Hence restriction is not full on semistable representations. This supplies an explicit morphism for the Tate-curve example in [@brinonconrad2009, Exercise 11.4.4, p. 185].

**Scope.** The base field and subgroup inclusion are fixed. The theorem requires crystallinity over $K$; it does not recognize which arbitrary $G_\infty$-modules admit such an extension, or reconstruct $K$ from an abstract tower group.
