---
title: Wach-module ramification bounds for mod-p crystalline representations
kind: theorem
summary: 'Over an unramified p-adic field, Čoupek bounds the upper ramification of mod-p crystalline lattice subquotients and smooth proper mod-p cohomology in arbitrary positive degree. The bound is logarithmic in the weight or degree and includes p=2.'
tags: [local-fields, ramification, hodge-theory, galois-representations]
edges:
  - {to: ramification-filtration, label: uses, note: 'The displayed cutoff uses Serre upper numbering.'}
  - {to: ramification-bounds-for-torsion-semistable-representations, label: analogous-to, note: 'Here the base is unramified, the torsion is killed by p and the hypotheses are crystalline; the semistable theorem allows arbitrary ramification and p-power exponent.'}
  - {to: torsion-crystalline-quotients-detect-crystallinity, label: analogous-to, note: 'This gives a necessary numerical bound on crystalline realizations; that criterion requires the realizations themselves.'}
---

**Data.** Let $K/\mathbb Q_p$ be finite and unramified, and let $i\ge1$. Let $T$ be a finite continuous $\mathbb F_p[G_K]$-module satisfying either hypothesis:

1. $T$ is a subquotient of a stable lattice in a crystalline representation with Hodge–Tate weights in $[-i,0]$, retaining the source's weight convention.
2. $T$ is a subquotient of $H^i_{\mathrm{\acute et}}(X_{\mathbb C_K},\mathbb Z/p\mathbb Z)$ for the generic fibre $X$ of a smooth proper $p$-adic formal scheme over $\mathcal O_K$.

**Theorem (Čoupek).** Let $\alpha\ge0$ be the least integer with
$$p^\alpha>\frac{ip}{p-1}.$$
Then, in Serre [upper numbering](ramification-filtration.md), $G_K^u$ acts trivially on $T$ for
$$
u>\alpha+\max\left\{0,\frac{ip}{p^\alpha(p-1)}-\frac1{p-1}\right\}
$$
[@coupek2026wach, Theorem 1.1, p. 1; Theorem 4.12, p. 13]. This includes $p=2$ and has no upper restriction on $i$.

**Indexing.** In the proof, the source uses $G^{(v)}=G^{v-1}$ and bounds the splitting field's last nontrivial index by $1+\alpha+\max\{0,ip/(p^\alpha(p-1))-1/(p-1)\}$ [@coupek2026wach, §2.2, pp. 4–5; Theorem 4.12, p. 13].

**Scope.** The two hypotheses are separate: integral cohomological torsion obstructs identifying geometric mod-$p$ cohomology with a crystalline lattice quotient [@coupek2026wach, Introduction, p. 1].
