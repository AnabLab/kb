---
title: Free absolute Galois groups of curves over algebraically closed fields
kind: theorem
summary: 'A curve function field over algebraically closed k has a free absolute Galois group of rank |k|. It has a continuous surjective endomorphism with nontrivial kernel, whereas every k-embedding of the field into itself induces an injective Galois map.'
tags: [function-fields, galois-groups]
edges:
  - {to: birational-pro-p-hom-theorem, label: analogous-to, note: "The obstruction below concerns full Galois groups over algebraically closed constants; the target retains an arithmetic Galois action over sub-p-adic constants."}
---

**Statement.** Let $K|k$ be a function field of transcendence degree $1$ over an algebraically closed field. Then the absolute Galois group $G_K$ is profinite free on $|k|$ generators, as shown by Douady, Harbater and Pop. Therefore its maximal pro-$\ell$ abelian-by-central quotient $\Pi^c_K$, for a prime $\ell\ne\mathrm{char}(k)$, encodes only the cardinality $|k|$ of the base field, hence that of $K$ as well [@pop2018, §1, p. 1]. This is why the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md) assumes transcendence degree at least $2$.

**An explicit obstruction to a Hom form, proved here.** The group $G_K$ has a continuous split surjective endomorphism with nontrivial kernel. No such endomorphism is induced, even up to inner automorphism, by a $k$-embedding $K\hookrightarrow K$.

*Proof.* A free profinite basis $B$ converges to $1$: every open normal subgroup contains all but finitely many elements of $B$. Every map from $B$ to a profinite group that converges to $1$ extends uniquely to a continuous homomorphism [@harbater2009, §2, p. 3]. Since $|B|=|k|$ is infinite, choose distinct $b_0,b_1,\ldots\in B$. Define maps on the basis by
$$
\sigma(b_0)=1,\qquad \sigma(b_{n+1})=b_n,\qquad
\tau(b_n)=b_{n+1}\quad(n\ge0),
$$
and let both maps fix the remaining basis elements. Both assignments converge to $1$: each sends at most finitely many basis elements outside any open normal subgroup, because its nonidentity images are distinct elements of $B$. They therefore extend to continuous endomorphisms of $G_K$. On the basis, $\sigma\circ\tau$ is the identity, hence it is the identity on $G_K$. Thus $\sigma$ is surjective, while $1\ne b_0\in\ker\sigma$.

For a $k$-embedding $\iota:K\hookrightarrow K$, the extension $K/\iota(K)$ is finite. Indeed, for any $t\in K\setminus k$, the field $K$ is finitely generated and algebraic over $k(\iota(t))\subseteq\iota(K)$. Choose a common algebraic closure $\Omega$ of $K$ and $\iota(K)$. The induced Galois homomorphism is, after identifying $G_{\iota(K)}$ with $G_K$, the inclusion
$$
\operatorname{Aut}(\Omega/K)\hookrightarrow
\operatorname{Aut}(\Omega/\iota(K)).
$$
It is injective and has open image, since fixing finitely many algebraic generators is an open condition. This argument also applies to inseparable extensions. Inner automorphisms preserve injectivity, so they cannot turn this map into $\sigma$. $\square$

**Scope of the rational-subfield argument.** Pop also explains an obstruction using rational subfields relatively closed in higher-dimensional function fields [@pop2003, Introduction, Remark 2, p. 2]. That construction does not apply to a nonrational curve function field: if $k(t)\subseteq K$ in transcendence degree $1$, then $K/k(t)$ is finite, so relative algebraic closedness would force $K=k(t)$. The basis construction above gives the curve obstruction directly.

**Attribution.** The freeness theorem is checked in Pop's 2018 account; its original proofs have not been opened. The endomorphism construction and the comparison with field embeddings are proved here from that theorem and the universal property of a free profinite basis.
