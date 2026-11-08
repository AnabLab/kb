---
title: Non-formality of Galois cochains at every prime
kind: theorem
summary: 'For each prime $p$ and field $F$ of characteristic not $p$, Merkurjev–Scavia construct $L/F$ with zero adjacent cup products but an undefined fourfold Massey product. Hence Galois cochains need not be formal, even with all roots of unity and a quadratic cohomology ring.'
tags: [galois-groups, galois-cohomology, milnor-k-theory, counterexample]
edges:
  - {to: strong-massey-vanishing, label: refutes, note: "Refutes the universal strong assertion at n = 4 for every prime, not the positive result for specified number fields [@merkurjevscavia2025, Theorem 1.3, p. 832]."}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "For the consequence that quadratic Galois cohomology does not imply formality of cochains."}
  - {to: positselski-koszulity-conjecture, label: motivated-by, note: "Theorem 1.2 answers Positselski's question, prompted by his Koszul but non-formal local examples, whether cochains can be non-formal when all $p$-power roots of unity are present [@merkurjevscavia2025, p. 831 and Theorem 1.2]."}
---

**Setup.** Write $C_K=C^*_{\mathrm{cont}}(G_K,\mathbb{F}_p)$. Formality means a zigzag of quasi-isomorphisms of differential graded rings from $C_K$ to $(H^*(C_K),0)$. A Massey product is *defined* when its set of values is nonempty; it *vanishes* when that set contains zero [@merkurjevscavia2025, §2.2, p. 836].

**Theorem (Merkurjev–Scavia).** For every prime $p$ and field $F$ with $\mathrm{char}(F)\ne p$, some extension $L/F$ has characters $\chi_1,\ldots,\chi_4\in H^1(G_L,\mathbb{F}_p)$ satisfying
$$
\chi_1\cup\chi_2=\chi_2\cup\chi_3=\chi_3\cup\chi_4=0,
\qquad
\langle\chi_1,\chi_2,\chi_3,\chi_4\rangle=\varnothing.
$$
Consequently $C_L$ is not formal [@merkurjevscavia2025, Theorem 1.3, p. 832].

**Construction.** After adjoining $\mu_p$ to $F$, take independent variables $x,y$, set $E=F(x,y)$ and $L=E(X)$, where $X$ is the Severi–Brauer variety of the degree-$p$ symbol algebra $(x,y)_p$. The characters are the Kummer classes of $(1-x,x,y,1-y)$. Steinberg relations kill the outer cup products; the middle symbol splits over $E(X)$ [@merkurjevscavia2025, proof of Theorem 1.3, p. 853].

**Why formality fails.** In a graded ring with zero differential, degree-one classes with zero adjacent products have a defining system whose entries beyond the first superdiagonal are zero; its Massey value is zero. For a formal differential graded ring, the corresponding vanishing criterion is [@merkurjevscavia2025, Lemma 2.3, p. 836].

**Consequence for reconstruction.** Choose $F=\mathbb{C}$. Then $L$ contains every root of unity, while the [norm residue theorem](norm-residue-isomorphism-theorem.md) still makes $H^*(G_L,\mathbb{F}_p)$ a quadratic algebra. Thus quadraticity does not imply formality. This distinction matters when using the [cohomology ring recovered from a small Galois quotient](abelian-by-central-galois-cohomology.md): formality cannot supply an automatic passage from that ring to the cochain differential graded ring.

**Massey vanishing distinctions.** Theorem 1.3 disproves the [*strong* Massey vanishing conjecture](strong-massey-vanishing.md) at $n=4$ for every prime $p$: zero adjacent cup products need not make the product vanish [@merkurjevscavia2025, Theorem 1.3, p. 832]. It does not refute the Massey vanishing conjecture of Mináč and Tân, which predicts that every *defined* product of degree-one classes contains zero. Merkurjev and Scavia record that conjecture as proved over arbitrary fields for $n=3$ and every $p$, and for $n=4$ when $p=2$ [@merkurjevscavia2025, p. 832].

