---
title: The p-adic section conjecture
kind: problem
summary: For every finite extension k of Q_p and every smooth proper geometrically connected curve X/k of genus at least 2, does the map from X(k) to continuous sections of pi_1(X) to G_k, modulo conjugation by the full geometric fundamental group, give a bijection?
tags: [curves, local-fields, fundamental-groups, section-conjecture]
edges:
  - {to: section-conjecture, label: analogous-to, note: "The local analogue over finite extensions of Q_p [@koenigsmann2005, §2.1, p. 9]."}
---

**Conjecture.** Let $p$ be a prime, let $k$ be a finite extension of $\mathbb{Q}_p$, and let $X/k$ be a smooth, proper, geometrically connected curve of genus at least $2$. Is the map
$$
X(k) \longrightarrow \{s:G_k\to\pi_1(X)\mid s\text{ is a continuous group-homomorphic section of }\pi_1(X)\to G_k\}/\pi_1(X_{\bar k})
$$
bijective? The map sends a rational point to the class of its section, and the quotient is by conjugation by the full geometric étale fundamental group.

**History.** Koenigsmann conjectures this section property for all smooth complete curves of genus greater than one over finite extensions of $\mathbb{Q}_p$ [@koenigsmann2005, §2.1, p. 9]. Injectivity was already known in this setting [@koenigsmann2005, Proposition 2.3(1), p. 9]; see [injectivity in the section conjecture](section-conjecture-injectivity.md). The remaining question was surjectivity. The [Pop–Stix valuative theorem](valuative-section-theorem-for-p-adic-curves.md) records a reduction of this question to localizing sections at valuations.

**Recorded answer.** A manuscript credited to OpenAI and dated 6 October 2026 gives an affirmative answer with exactly these hypotheses and this full geometric conjugacy relation [@openai2026padicsections, Theorem 1.1, p. 2]. Its proof, the checks previously recorded by the lab, and its publication status are in [the $p$-adic section theorem](p-adic-section-theorem.md). The manuscript is not peer reviewed.
