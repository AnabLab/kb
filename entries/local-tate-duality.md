---
title: Local Tate duality and Euler characteristics over p-adic fields
kind: theorem
summary: 'For finite Galois modules over a p-adic field, local Tate duality pairs degrees i and 2-i through the cyclotomic dual. Tate''s Euler characteristic formula determines the size of H1; top cohomology recognizes the cyclotomic twist.'
tags: [local-fields, galois-cohomology, galois-groups]
---

**Setting.** Let $K/\mathbb Q_p$ be finite, let $G_K=\operatorname{Gal}(\bar K/K)$, and let $M$ be a finite discrete continuous $G_K$-module killed by $n\ge1$. Its Tate dual is
$$
M^D=\operatorname{Hom}(M,\mu_n(\bar K)),\qquad
(g\phi)(m)=g\bigl(\phi(g^{-1}m)\bigr).
$$
Write $H^i(K,M)=H^i(G_K,M)$.

**Local duality (Tate).** These cohomology groups are finite and vanish for $i>2$. Evaluation, cup product and the local Brauer invariant give perfect pairings, for $i=0,1,2$,
$$
H^i(K,M)\times H^{2-i}(K,M^D)
\longrightarrow H^2(K,\mu_n)
\xrightarrow{\operatorname{inv}_K}\tfrac1n\mathbb Z/\mathbb Z.
$$
Here $H^2(K,\mu_n)\cong\operatorname{Br}(K)[n]$ through the Kummer sequence [@milne2006adt, I, Theorem 2.1, pp. 26–27; Corollary 2.3, p. 28]. No restriction that $n$ be prime to $p$ is imposed.

**Euler characteristic (Tate).** With $m=\#M$ and $d=[K:\mathbb Q_p]$,
$$
\frac{\#H^0(K,M)\,\#H^2(K,M)}{\#H^1(K,M)}
=[\mathcal O_K:m\mathcal O_K]^{-1}
=p^{-d\,v_p(m)}.
$$
Thus the characteristic is $1$ when $p\nmid m$ [@milne2006adt, I, Theorem 2.8 and Lemma 2.9, p. 31].

**Recognizing the twist.** For a $G_K$-module $A$ whose underlying abelian group is $\mathbb Z/p^r$, $r\ge1$,
$$
A\cong\mu_{p^r}\text{ as }G_K\text{-modules}
\quad\Longleftrightarrow\quad
H^2(K,A)\cong\mathbb Z/p^r\text{ as abelian groups}.
$$
Mochizuki states this consequence of duality and uses it to recover the $p$-adic cyclotomic character from $G_K$ [@mochizuki1997, §1, paragraph before Proposition 1.1 and Proposition 1.1, p. 3]. It supplies the duality step in [local Galois invariants](local-field-galois-invariants.md). Duality and the Euler characteristic formula also supply the cohomology calculation in Step 4 of [lifting tame automorphisms modulo wild commutators](tame-automorphisms-lift-modulo-wild-commutators.md).

**Source.** Milne's locations use the printed pagination of the second edition, not PDF page indices. This entry concerns finite Galois modules over characteristic-zero local fields.
