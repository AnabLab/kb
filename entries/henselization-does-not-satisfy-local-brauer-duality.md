---
title: Henselization preserves local Galois and Brauer groups but loses full duality
kind: theorem
summary: The t-adic henselization of F_q(t) has the Galois group, Brauer group and imperfection degree of F_q((t)), but is countable. Its cyclic-algebra pairing is nondegenerate in both variables, yet does not identify pth-power classes with the full dual of Artin–Schreier classes.
tags: [local-fields, positive-characteristic, galois-cohomology, counterexample]
edges:
  - {to: local-fields-characteristic-p-brauer-characterization, label: motivated-by, note: "The example satisfies its Galois, imperfection and Brauer axioms, but fails precisely the pairing axiom."}
  - {to: artin-schreier-and-pro-p-galois-groups, label: uses, note: "Artin–Schreier theory identifies the character group with the additive quotient used below."}
  - {to: imperfection-is-essential-in-local-brauer-reconstruction, label: analogous-to, note: "Fehm's example retains full duality and drops the imperfection bound; this example retains the bound and loses full duality."}
---

**Example, checked here.** Fix $q=p^n$, $n\ge1$, and let $K$ be the henselization of $k=\mathbb F_q(t)$ at its t-adic valuation, embedded in $F=\mathbb F_q((t))$. Then
$$
G_F\xrightarrow{\sim}G_K,\qquad
\operatorname{Br}(K)\xrightarrow{\sim}\operatorname{Br}(F)\cong\mathbb Q/\mathbb Z,
\qquad [K:K^p]=p.
$$
Nevertheless $K$ is countable and is not a local field. Writing $\wp(x)=x^p-x$ and $B=\operatorname{Br}(K)[p]\cong\mathbb Z/p$, its cyclic-algebra pairing
$$
[\ ,\ )\colon K/\wp(K)\times K^\times/K^{\times p}\longrightarrow B
$$
is nondegenerate in both variables, but the induced map
$$
\Phi_K\colon K^\times/K^{\times p}\longrightarrow
\operatorname{Hom}(K/\wp(K),B)
$$
is not surjective. Here $\operatorname{Hom}$ means all homomorphisms of discrete groups, as in Dittmann's pairing axiom [@dittmann2025, §2, p. 3].

**Galois and Brauer comparisons.** The henselization has value group $\mathbb Z$, residue field $\mathbb F_q$ and completion $F$; it is separably algebraic over $k$ [@saitohenselianexcerpt, Proposition 1.4.8, p. 14]. Completion of a henselian discretely valued field induces an equivalence on finite separable extensions, giving the Galois isomorphism [@saitohenselianexcerpt, Proposition 1.4.7, pp. 13–14]. It also induces an isomorphism on Brauer groups [@colliottheleneskorobogatov2019draft, Proposition 6.1.10, pp. 147–148]. Finally, the local invariant identifies $\operatorname{Br}(F)$ with $\mathbb Q/\mathbb Z$ [@dittmann2025, proof of Proposition 2.2, p. 4]. Since $k$ is countable and $K/k$ is algebraic, $K$ is countable; its completion $F$ has cardinality $2^{\aleph_0}$. Thus $K\ne F$, and countability also excludes an abstract isomorphism with any local field.

**Imperfection, checked here.** For every finite intermediate extension $k\subseteq L\subseteq K$, Frobenius gives $[L^p:k^p]=[L:k]$. Comparing degrees in the two towers over $k^p$ gives
$$
[L:L^p]=[k:k^p]=p.
$$
Also $t\notin L^p$, since $v(t)=1$ and $vL\subseteq vK=\mathbb Z$. Hence $1,t,\ldots,t^{p-1}$ is a basis of $L$ over $L^p$. Taking the union over these finite extensions gives the same basis for $K/K^p$. Grouping Laurent-series exponents modulo $p$ gives this basis for $F/F^p$ too. Consequently
$$
K\cap F^p=K^p:
$$
if $b=\sum_{i=0}^{p-1}t^i b_i^p\in K$ is a pth power in $F$, uniqueness of the basis expansion in $F$ forces $b_i=0$ for $i>0$. Thus $K^\times/K^{\times p}\to F^\times/F^{\times p}$ is injective.

**Failure of surjectivity, checked here.** The classes $t^{-m}$, for positive $m$ prime to $p$, are linearly independent over $\mathbb F_p$ in $K/\wp(K)$. A nonzero finite combination has valuation $-M$ with $p\nmid M$. But $v(\wp(x))=p\,v(x)$ when $v(x)<0$, and $v(\wp(x))\ge0$ otherwise. Since $K$ is countable, $K/\wp(K)$ therefore has dimension exactly $\aleph_0$. Its full dual to the order-$p$ group $B$ has cardinality $p^{\aleph_0}=2^{\aleph_0}$, whereas $K^\times/K^{\times p}$ is countable. This proves that $\Phi_K$ is not surjective.

**Nondegeneracy still holds, checked here.** Artin–Schreier theory and the Galois comparison give $K/\wp(K)\cong F/\wp(F)$. The cyclic-algebra pairing commutes with extension to $F$ [@dittmann2025, §2, pp. 3–4]. Local duality makes $\Phi_F$ an isomorphism [@dittmann2025, Proposition 2.2, p. 4]. The injectivity on pth-power classes proved above therefore makes $\Phi_K$ injective.

For the other variable, take $a\notin\wp(K)$. Local duality supplies $b_F\in F^\times$ with $[a,b_F)\ne0$. Choose $N\ge0$ with $v(a)\ge-N$. Then $[a,1+t^{N+1}\mathbb F_q[[t]])=0$ [@dittmann2025, Lemma 4.1, pp. 7–8]. Density supplies $b\in K^\times$ with $b/b_F$ in this subgroup, so $[a,b)=[a,b_F)\ne0$. The Brauer comparison gives the same nonvanishing over $K$.

Thus the first three axioms of the [local-field characterization](local-fields-characteristic-p-brauer-characterization.md) do not suffice, even with a pairing nondegenerate in both variables. Its surjectivity onto the full discrete dual is essential.

**Sources.** Dittmann's locations refer to arXiv:2309.05398v3; Colliot-Thélène–Skorobogatov's to their draft dated 31 October 2019; Saito's to the internal page numbers of his 41-page manuscript excerpt. Published versions and the references cited inside these sources were not compared.
