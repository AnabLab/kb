---
title: Demushkin amalgams that are not maximal pro-p Galois groups
kind: theorem
summary: 'For primes at least five, Quadrelli gives Demushkin amalgams with a unique Kummerian orientation, quadratic cohomology and triple and strong fourfold Massey vanishing, but no 1-smooth orientation. They are not maximal pro-p Galois groups over fields containing pth roots of unity.'
tags: [galois-groups, galois-cohomology, pro-p-groups, counterexample]
edges:
  - {to: demushkin-group, label: uses}
  - {to: one-smooth-oriented-pro-p-group, label: uses, note: "the distinction between a Kummerian pair and a 1-smooth pair"}
  - {to: kummerian-obstruction-to-galois-realizability, label: uses, note: "only Galois necessity, which rules out realizability when no orientation is 1-smooth [@quadrelli2022smooth, Theorem 2.8]"}
  - {to: strong-massey-vanishing, label: uses, note: "the definition, here satisfied at length four"}
  - {to: elementary-type-conjecture, label: analogous-to, note: "Free products of canonically oriented Demushkin groups are 1-smooth, but these procyclic amalgams are not [@quadrelli2024chasing, Introduction, following Theorem 1.1]."}
---

**Family.** Let $p\ge5$ be prime and let $d_1,d_2$ be positive odd integers. Use closed subgroups and pro-$p$ presentations, with $[a,b]=a^{-1}b^{-1}ab$. Put
$$
G=\langle x,y_1,\ldots,y_{d_1},z_1,\ldots,z_{d_2}\mid r_1=r_2=1\rangle,
$$
where
$$
\begin{aligned}
r_1&=y_1^p[y_1,x][y_2,y_3]\cdots[y_{d_1-1},y_{d_1}],\\
r_2&=z_1^p[z_1,x][z_2,z_3]\cdots[z_{d_2-1},z_{d_2}].
\end{aligned}
$$
The products after $[y_1,x]$ and $[z_1,x]$ are empty when the corresponding $d_i=1$. No orientation $G\to1+p\mathbb Z_p$ is [1-smooth](one-smooth-oriented-pro-p-group.md). Thus $G$ is not $G_F(p)$ for any field $F$ containing a primitive $p$th root of unity, and is not the absolute Galois group of any field [@quadrelli2024chasing, Theorem 1.1, case (1.1.b), and Corollary 1.2].

**Compatible orientations are insufficient.** The subgroups $G_1=\overline{\langle x,y_1,\ldots,y_{d_1}\rangle}$ and $G_2=\overline{\langle x,z_1,\ldots,z_{d_2}\rangle}$ are [Demushkin groups](demushkin-group.md), and $G$ is their proper amalgamated free pro-$p$ product over $\overline{\langle x\rangle}\cong\mathbb Z_p$ [@quadrelli2024chasing, Introduction, following Theorem 1.1, and §3.2]. There is exactly one orientation making $G$ Kummerian:
$$
\theta(x)=(1-p)^{-1},\qquad \theta(y_i)=\theta(z_j)=1.
$$
Its restrictions are the canonical orientations of the two factors [@quadrelli2024chasing, §5.1 and Proposition 5.1].

**A subgroup detects the failure.** Define $\phi_i:G_i\to(\mathbb Z/p)^2$ by sending $x$ to $(1,0)$, $y_1$ or $z_1$ to $(0,1)$, and the other generators to zero. Put $U_i=\ker\phi_i$ and
$$
H=\overline{\langle U_1,U_2,z_1^{-1}y_1\rangle}.
$$
Then $(H,\theta|_H)$ is not Kummerian [@quadrelli2024chasing, §5.2 and Proposition 5.3].

**Tests passed.** The algebra $H^*(G,\mathbb F_p)$ is quadratic, every defined triple Massey product of degree-one classes contains zero, and $G$ has [strong fourfold Massey vanishing](strong-massey-vanishing.md) [@quadrelli2024chasing, Proposition 1.3 (i), (iii.b)]. These examples therefore require the subgroup condition in the Hilbert 90 obstruction even after these cohomological tests on $G$ itself pass.
