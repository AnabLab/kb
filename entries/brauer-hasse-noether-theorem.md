---
title: Brauer–Hasse–Noether local-global theorem
kind: theorem
summary: 'For a number field K, the Brauer group embeds in the direct sum of its local Brauer groups, with image the kernel of the sum of local invariants. This reciprocity law forces the Brauer–Manin pairings of global Galois sections to vanish.'
tags: [number-fields, local-fields, galois-cohomology]
---

**Local invariants.** Let $K$ be a number field, with completions $K_v$. For each place $v$, the local invariant is an injective map

$$\operatorname{inv}_v:\operatorname{Br}(K_v)\longrightarrow\mathbb Q/\mathbb Z.$$

Its image is $\mathbb Q/\mathbb Z$ at a nonarchimedean place, $\tfrac12\mathbb Z/\mathbb Z$ at a real place, and $0$ at a complex place [@milnecft, Chapter VIII, §4, p. 240 and Example 4.4(b), p. 241].

**Theorem (Brauer–Hasse–Noether).** The sequence

$$
0\longrightarrow\operatorname{Br}(K)
\xrightarrow{\mathrm{res}}\bigoplus_v\operatorname{Br}(K_v)
\xrightarrow{\sum_v\operatorname{inv}_v}\mathbb Q/\mathbb Z
\longrightarrow0
$$

is exact, where $\mathrm{res}$ is localization and the sum includes all places [@milnecft, Chapter VIII, Theorem 4.2, p. 241]. Thus a global Brauer class has only finitely many nonzero local invariants; these sum to zero and determine the class. Conversely, every finitely supported family of invariants in the indicated local images, with sum zero, occurs [@milnecft, Chapter VIII, Example 4.4(b), p. 241].

**Use for sections.** For a global section $s$ of $\pi_1(X)\to G_K$ and $\alpha\in H^2(\pi_1(X),\mu_n)$, Stix applies this reciprocity law to $s^*\alpha\in\operatorname{Br}(K)[n]$. The sum of its local invariants vanishes, giving the [Brauer–Manin condition on sections](descent-obstructions-for-galois-sections.md) [@stix2011bm, proof of Theorem 13, p. 9]. [Wittenberg's nonsplitting criterion](wittenberg-nonsplitting-criterion.md) instead applies the same law to a global Brauer class obtained by pairing a section's cycle class with a cohomology class [@wittenberg2012reichardtlind, end of the proof of Théorème 2.1, p. 5].
