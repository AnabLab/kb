---
title: Chebotarev density for arithmetic schemes
kind: theorem
summary: 'For an integral normal scheme of finite type over Z and positive dimension, Frobenius classes in a finite quotient of its étale fundamental group have Dirichlet density given by their proportion in the quotient, with the density limit taken at the dimension.'
tags: [galois-groups, fundamental-groups, arithmetic-schemes]
---

**Density.** Let $U$ be an integral normal scheme of finite type over $\mathbb Z$, of dimension $d\geq 1$. Write $|U|$ for its closed points and $N(u)=|k(u)|$. For $S\subseteq |U|$, use

$$
\delta_U(S)=\lim_{s\to d^+}
\frac{\sum_{u\in S}N(u)^{-s}}{\log(1/(s-d))},
$$

when the limit exists, with $s$ real [@tsujimura2026gs, Definition 1.8, p. 8].

**Theorem (Artin–Chebotarev).** Let $V\to U$ be a connected finite étale Galois cover with group $G$. For a conjugacy-stable subset $C\subseteq G$, put

$$
S_C=\{u\in |U|:\operatorname{Frob}_u(V/U)\subseteq C\},
$$

where the arithmetic Frobenius class acts on residue fields by $a\mapsto a^{N(u)}$. Then

$$
\delta_U(S_C)=\frac{|C|}{|G|}
$$

[@jardenrazon2023transfer, Definition 1.11, pp. 493–494, and Theorem 2.4, p. 497]. The theorem applies in both characteristics, without a geometric connectedness hypothesis over the constants. The [number-field entry](chebotarev-density-theorem.md) uses the stronger density convention that the error after subtracting $\delta\log(1/(s-1))$ stays bounded.

**Shrinking.** A proper closed subset of $U$ has density zero. Restricting a set of defined density to a nonempty open subscheme preserves its density, and a set whose restriction has density has that same density on $U$ [@jardenrazon2023transfer, Lemma 2.3(g)–(j), p. 495].

**Use.** The [Grunewald–Segal principle](grunewald-segal-principle-for-semi-abelian-varieties.md) applies this theorem to a finite quotient $\pi_1(U)\twoheadrightarrow Q$: the conjugacy class of a chosen $q\in Q$ occurs on a set of positive density, where finitely many cocycles remain nonzero [@tsujimura2026gs, proof of Proposition 1.9, p. 9].
