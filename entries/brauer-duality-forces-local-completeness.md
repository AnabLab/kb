---
title: Brauer duality forces completeness in characteristic p
kind: theorem
summary: 'For a characteristic-p field with countable Artin–Schreier quotient, imperfection degree at most one and Brauer p-torsion of order p, Dittmann’s duality axiom makes a nontrivial p-henselian valuation with non-p-closed residue complete and discrete with finite residue field.'
tags: [local-fields, galois-cohomology, positive-characteristic]
edges:
  - {to: bloch-gabber-kato-theorem, label: uses, note: "Only for the equivalent Milnor K-theoretic formulation of the imperfection hypothesis below."}
---

**Pairing.** Fix a prime $p$ and a field $K$ of characteristic $p$. Write $\wp(x)=x^p-x$ and $B=\operatorname{Br}(K)[p]$. Artin–Schreier theory identifies $K/\wp(K)$ with the discrete group of continuous characters $\operatorname{Hom}(G_K,\mathbb Z/p)$. For such a character $\chi$ and $b\in K^\times$, set
$$
(\chi,b)=\delta(\chi)\cup b\in H^2(G_K,(K^{\mathrm{sep}})^\times)=\operatorname{Br}(K),
$$
where $\delta$ is the boundary map for $0\to\mathbb Z\xrightarrow{p}\mathbb Z\to\mathbb Z/p\to0$. This cyclic-algebra class gives a bilinear pairing
$$
[\ ,\ )\colon K/\wp(K)\times K^\times/K^{\times p}\longrightarrow B.
$$
For $a\notin\wp(K)$, $[a,b)=0$ exactly when $b$ is a norm from the degree-$p$ extension defined by $u^p-u=a$ [@dittmann2025, §2 and Lemma 2.1, p. 3; §4, p. 7].

**Theorem (Dittmann).** Suppose that:

1. $K/\wp(K)$ is countable and $[K:K^p]\le p$.
2. $B\cong\mathbb Z/p$ and the pairing induces an isomorphism
   $$
   K^\times/K^{\times p}\xrightarrow{\sim}\operatorname{Hom}(K/\wp(K),B).
   $$
   The right side includes all homomorphisms of the indicated discrete groups.
3. $v$ is a nontrivial $p$-henselian valuation on $K$, and $Kv$ has a cyclic extension of degree $p$. Here $p$-henselianity means that $v$ extends uniquely to every cyclic degree-$p$ extension of $K$; in characteristic $p$ it is equivalent to $\mathfrak m_v\subseteq\wp(K)$.

Then $(K,v)$ is complete and discretely valued, with finite residue field. Thus $K\cong\mathbb F_{p^f}((t))$ for some $f\ge1$ [@dittmann2025, §4 standing assumptions, p. 7, and Proposition 4.7, p. 11]. The imperfection condition is equivalently $K_2^M(K)/p=0$, by the [differential-symbol theorem](bloch-gabber-kato-theorem.md) [@dittmann2025, §2, p. 5].

**Proof, following Dittmann.** Lemma 4.5 first gives $vK\cong\mathbb Z$ and finite $Kv$. Lemma 4.6 then gives
$$
K^\times/K^{\times p}\xrightarrow{\sim}\widehat K^\times/\widehat K^{\times p},
$$
where $\widehat K$ is the completion. It compares the pairings over $K$ and $\widehat K$: both the Artin–Schreier quotients and the $p$-torsion Brauer groups map isomorphically, and local class field theory gives the required duality over $\widehat K$ [@dittmann2025, Lemmas 4.5–4.6, pp. 10–11; Proposition 2.2, p. 4].

Let $\pi$ be a uniformiser and $x\in\widehat K$. The preceding isomorphism gives $y\in K^\times$ and $z\in\widehat K^\times$ with
$$
y=z^p(1+\pi x^p).
$$
The elements $1,\pi,\ldots,\pi^{p-1}$ form a basis of $K$ over $K^p$, and also of $\widehat K$ over $\widehat K^p$. Write $y=\sum_{i=0}^{p-1}\pi^i y_i^p$ with $y_i\in K$. Comparing coefficients in $\widehat K$ gives $y_0=z$ and $y_1=zx$, so $x=y_1/y_0\in K$. Hence $K=\widehat K$ [@dittmann2025, proof of Proposition 4.7, p. 11].

**Role and limit.** In the [local-field characterization](local-fields-characteristic-p-brauer-characterization.md), Galois theory supplies the valuation; this theorem supplies completeness. The imperfection hypothesis is essential: Dittmann gives a construction, attributed to Arno Fehm, of a noncomplete henselian field satisfying the remaining hypotheses, even with the full absolute Galois group of a positive-characteristic local field [@dittmann2025, Remark 4.8, p. 11].

**Source.** Locations refer to arXiv:2309.05398v3. The journal version was not compared; Dittmann's references were not opened independently.
