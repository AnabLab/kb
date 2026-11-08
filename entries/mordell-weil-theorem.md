---
title: Mordell–Weil finite generation and the Lang–Néron theorem
kind: theorem
summary: 'An abelian variety over a field finitely generated over its prime field has finitely generated rational points. Over a finitely generated regular extension K/k, Lang–Néron gives finite generation after quotienting by the k-points of the K/k-trace.'
tags: [number-fields, function-fields, abelian-varieties, kummer-theory]
---

**Theorem (Mordell–Weil–Néron).** Let $K$ be a field finitely generated over its prime field and $A/K$ an abelian variety. Then $A(K)$ is a finitely generated abelian group [@conrad2006trace, author's copy, Corollary 7.2 and preceding paragraph, p. 23]. This includes number fields and fields finitely generated over $\mathbb Q$ or $\mathbb F_p$.

**Relative form (Lang–Néron).** Let $K/k$ be a finitely generated regular extension: it is separable and $k$ is algebraically closed in $K$. The $K/k$-trace of $A$ is an abelian variety $B/k$ with a homomorphism $\tau:B_K\to A$ universal for homomorphisms to $A$ from abelian varieties defined over $k$ [@conrad2006trace, §1, p. 1]. Then
$$
A(K)/\tau(B(k))
$$
is finitely generated [@conrad2006trace, Theorem 7.1, p. 23]. Constant points can obstruct finite generation of $A(K)$ when $k$ is algebraically closed; the trace quotient accounts for them [@conrad2006trace, §2, p. 3].

**Use for sections.** The Kummer proof of [section-conjecture injectivity](section-conjecture-injectivity.md), part 3, uses finite generation of the Jacobian's rational points. In [Hain's theorem on universal curves](section-conjecture-for-universal-curves.md), the case of a base field finitely generated over $\mathbb Q$ uses Mordell–Weil to obtain finite generation of the relative Jacobian's section group [@hain2011, Proposition 11.2, p. 37].
