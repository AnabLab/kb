---
title: Punctured projective lines over positive-characteristic local fields
kind: theorem
summary: Hoshi–Tsujimura's 2026 preprint determines projective lines minus at least three rational points over Fq((t)) up to Frobenius twist from their full etale fundamental groups, with compatibility over a field-induced isomorphism of base Galois groups.
tags: [curves, fundamental-groups, local-fields, positive-characteristic]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: purely-inseparable-invariance-of-galois-groups, label: uses, note: "Relative Frobenius preserves the fundamental group in the forward implication."}
  - {to: grothendieck-conjecture-over-finitely-generated-fields-of-characteristic-p, label: analogous-to, note: "A local-field reconstruction result with Frobenius ambiguity."}
---

**Theorem (Hoshi–Tsujimura, preprint).** For $i=1,2$, let $\mathbb F_i$ be a finite field of characteristic $p_i$, put $K_i=\mathbb F_i((t))$, and let $S_i\subset\mathbb P^1(K_i)$ be finite with $|S_i|\ge3$. Set $X_i=\mathbb P^1_{K_i}\setminus S_i$ and $\Pi_i=\pi_1(X_i)$. Write $X_i(n)$ for base change along the $p_i^n$-power endomorphism of $K_i$. Then these conditions are equivalent:

1. For some $n\ge0$, there is an isomorphism of schemes $X_1\cong X_2(n)$ or $X_2\cong X_1(n)$.
2. There is a continuous isomorphism $\alpha:\Pi_1\xrightarrow{\sim}\Pi_2$ lying over a continuous isomorphism $G_{K_1}\xrightarrow{\sim}G_{K_2}$ induced by an isomorphism $K_2^{\mathrm{sep}}\xrightarrow{\sim}K_1^{\mathrm{sep}}$ restricting to $K_2\xrightarrow{\sim}K_1$.

This is [@hoshitsujimura2026artinschreier, Theorem 6.1, pp. 48–49]. Condition 2 is called *base-geometric* [@hoshitsujimura2026artinschreier, Definition 2.3, p. 15]. It specifies compatibility with a field isomorphism; the conclusion is an existence criterion for curve isomorphism classes. Isotrivial curves are included.

The Frobenius ambiguity reflects [invariance of fundamental groups](purely-inseparable-invariance-of-galois-groups.md): relative Frobenius induces $\pi_1(X_i)\cong\pi_1(X_i(n))$ over $G_{K_i}$ [@hoshitsujimura2026artinschreier, Remark 2.5.1, pp. 16–17].
