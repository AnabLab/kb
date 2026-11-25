---
title: Kummer-tower restriction for torsion crystalline representations
kind: theorem
summary: 'Kummer-tower restriction retains torsion crystalline morphisms when e(r-1)<p-1. Finite flat generic modules work at every ramification index; Tate-curve torsion shows the weight bound matters, including at p=2.'
tags: [local-fields, hodge-theory, galois-representations, reconstruction]
edges:
  - {to: kummer-tower-full-faithfulness-for-crystalline-representations, label: analogous-to, note: 'The torsion counterpart requires a weight bound.'}
  - {to: raynaud-full-faithfulness-for-finite-flat-group-schemes, label: analogous-to, note: 'Here restriction recovers generic Galois morphisms; Raynaud recovers integral morphisms from the generic fibre.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, $e=v_K(p)$ for the normalized valuation, and $r\ge1$. Choose a uniformizer $\pi=\pi_0$ and compatible roots $\pi_{n+1}^p=\pi_n$; put $K_\infty=\bigcup_nK(\pi_n)$ and $G_\infty=G_{K_\infty}$. A finite continuous $G_K$-module is *torsion crystalline of weights $[0,r]$* if it is $L/L'$ for full stable lattices in a crystalline representation of those weights, with $\mathbb Q_p(1)$ of weight $1$.

**Full faithfulness (Ozeki).** If $e(r-1)<p-1$, restriction gives
$$
\operatorname{Hom}_{\mathbb Z_p[G_K]}(T,T')
\xrightarrow{\sim}
\operatorname{Hom}_{\mathbb Z_p[G_\infty]}(T,T')
$$
for any such $T,T'$. At $r=1$, these are exactly finite flat generic modules; every $e$ and prime, including $2$, is allowed [@ozeki2018equivariance, Theorem 1.2 and preceding and following paragraphs, p. 171].

**Failure (Ozeki).** For
$$r\ge1+\frac{p-1}{\gcd(e,p-1)},$$
the modules $E_\pi[p]$ and $\mathbb F_p(1)\oplus\mathbb F_p$ lie in that category and become isomorphic over $G_{K(\pi_1)}$, although they are nonisomorphic over $G_K$. Here $E_\pi$ is the Tate curve with parameter $\pi$. They witness nonfullness on restriction to $G_{K(\pi_1)}$ and $G_\infty$ [@ozeki2018equivariance, Lemma 5.13, pp. 211–212; Corollary 5.15 and proof, p. 212].

**Scope.** The recovered maps are between generic representations. Their recovery does not assert uniqueness of [finite flat models](raynaud-full-faithfulness-for-finite-flat-group-schemes.md).
