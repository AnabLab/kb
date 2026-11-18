---
title: Projective kernels of open curve-group maps
kind: theorem
summary: 'An open constants-compatible map of proper finite-field curve groups with hyperbolic target has projective full kernel. If the kernel is nontrivial, each of its Sylow subgroups at primes different from the characteristic is free pro-ell of countably infinite rank.'
tags: [curves, fundamental-groups, finite-fields, galois-cohomology]
edges:
  - {to: finite-character-kernels-of-open-curve-group-maps, label: uses, note: 'A nontrivial full kernel has infinitely many characters at every prime different from the characteristic.'}
  - {to: genus-bound-and-equality-for-open-fundamental-group-maps, label: uses, note: 'Identifies the geometric image with the geometric group of the finite etale image cover.'}
  - {to: geometric-fundamental-groups-of-curves, label: uses, note: 'Finite generation of the geometric source group gives a countable topology on its closed subgroups.'}
  - {to: frattini-modules-of-kernels-between-demushkin-groups, label: analogous-to, note: 'That entry treats kernels after taking maximal pro-ell quotients; here the full kernel and its actual Sylow subgroups are considered.'}
  - {to: properness-and-point-surjectivity-of-fundamental-group-maps, label: addresses, note: 'Constrains the full kernel in the remaining proper-source surjectivity problem; does not construct a punctured-target lift.'}
---

**Setting.** Let $C,D$ be smooth, proper, geometrically integral curves over a finite field $k$ of characteristic $p$, with $g(C)\ge2$. Write $\Pi_X=\pi_1(X)$ and $\Delta_X=\pi_1(X_{\bar k})$. Suppose that $\phi:\Pi_D\to\Pi_C$ is continuous, has open image $H$, and induces the identity on $G_k$. Put $N=\ker\phi$.

**Theorem (proved here).**

1. The full profinite group $N$ is projective. Equivalently, $\operatorname{cd}_\ell(N)\le1$ for every prime $\ell$. Thus for any finite epimorphism $A\twoheadrightarrow B$ and continuous map $N\to B$, a continuous lift $N\to A$ exists; the lift need not be surjective.
2. If $N\ne1$, then for every $\ell\ne p$ its Sylow pro-$\ell$ subgroups are free pro-$\ell$ groups of countably infinite rank. In particular $\operatorname{cd}_\ell(N)=1$ for all these primes.

No well-behavedness assumption is required.

**Cohomological inputs.** For a smooth proper connected curve $Z/\bar k$, the comparison map
$$H^2(\pi_1(Z),\mathbb F_\ell)\longrightarrow H^2_{\mathrm{\acute et}}(Z,\mathbb F_\ell)\tag{1}$$
is injective for every prime $\ell$, including $p$ [@esnaultshustermansrinivas2021, equation (3.2) in the proof of Corollary 3.3, p. 11]. For $\ell\ne p$, choosing a primitive $\ell$th root identifies the coefficient sheaf with $\mu_\ell$. Kummer theory and divisibility of $\operatorname{Pic}^0(Z)$ identify
$$H^2_{\mathrm{\acute et}}(Z,\mu_\ell)=\operatorname{Pic}(Z)/\ell\cong\mathbb Z/\ell$$
by degree [@milne2013lec, Propositions 14.1–14.2, pp. 89–90]. A finite etale cover of degree $d$ therefore acts on this group by multiplication by $d$: its pullback takes a point divisor to a divisor of degree $d$. Also $H^1(\pi_1(Z),\mathbb F_\ell)$ has dimension $2g(Z)$, by the degree-one comparison in the same equation (3.2) and Milne's Proposition 14.2.

For $\ell=p$, Artin–Schreier gives
$$H^2_{\mathrm{\acute et}}(Z,\mathbb F_p)=\operatorname{coker}\bigl(F-1:H^1(Z,\mathcal O_Z)\to H^1(Z,\mathcal O_Z)\bigr)=0.\tag{2}$$
Here coherent cohomology above degree one vanishes, and $F-1$ is surjective on the finite-dimensional $\bar k$-vector space with its Frobenius-semilinear action [@stacks2026, Section 59.63 and Lemma 59.63.2, tags 0A3J and 0A3L]. Consequently (1) makes $H^2(\pi_1(Z),\mathbb F_p)=0$ as well.

**Proof.** The [image-cover argument](genus-bound-and-equality-for-open-fundamental-group-maps.md) gives a geometrically integral finite etale cover $Y\to C$ corresponding to $H$, and a surjection
$$q:\Delta_D\twoheadrightarrow\Delta_Y,\qquad\ker q=N.$$
Its target curve has genus at least two.

We first show that
$$H^2(S,\mathbb F_\ell)=0\quad\text{for every closed }S\subseteq N\text{ and every prime }\ell.\tag{3}$$
For constant finite coefficients, continuous cochains give
$$H^2(S,\mathbb F_\ell)=\varinjlim_{S\subseteq U\subseteq\Delta_D,\ U\text{ open}}H^2(U,\mathbb F_\ell),\tag{4}$$
with restriction as transition maps. To justify this continuity identity, a continuous cochain on the compact space $S^r$ factors through $(S/(S\cap W))^r$ for a sufficiently small open normal $W\subseteq\Delta_D$. It extends to $SW$ using $SW/W\cong S/(S\cap W)$. The same argument for cocycle identities and for a cochain witnessing a coboundary proves (4).

Every $U$ in (4) is the geometric fundamental group of a smooth proper finite etale cover of $D_{\bar k}$. Equation (2) and (1) make its degree-two mod-$p$ cohomology zero. Fix instead $\ell\ne p$. The subgroup $q(U)$ is open in $\Delta_Y$, so it is the fundamental group of a finite etale cover of $Y_{\bar k}$, still of genus at least two. Its degree-one mod-$\ell$ character space is nonzero by the input above. Choose an index-$\ell$ subgroup $V\subseteq q(U)$ and put
$$U'=U\cap q^{-1}(V).$$
Then $[U:U']=\ell$ and $S\subseteq U'$, since $q(S)=1$. Pullback on the curve's degree-two etale cohomology is zero, being multiplication by $\ell$. Naturality and injectivity of (1) imply that restriction $H^2(U,\mathbb F_\ell)\to H^2(U',\mathbb F_\ell)$ is zero. Thus every class in (4) dies, proving (3).

Apply (3) to a Sylow pro-$\ell$ subgroup $S_\ell$ of $N$. For a pro-$\ell$ group, vanishing of $H^2(-,\mathbb F_\ell)$ implies cohomological dimension at most one; and $\operatorname{cd}_\ell(N)=\operatorname{cd}_\ell(S_\ell)$ [@gilleszamuely2006, Lemma 6.1.4 and Proposition 6.1.5, pp. 137–138]. The equivalence of cohomological dimension at most one with projectivity, and freeness in the pro-$\ell$ case, is recalled in [@esnaultshustermansrinivas2021, Introduction, p. 4]. This proves part 1 and freeness of every $S_\ell$.

If $N\ne1$, the [finite-character theorem](finite-character-kernels-of-open-curve-group-maps.md) makes $H^1(N,\mathbb F_\ell)$ infinite-dimensional for $\ell\ne p$. Restriction to $S_\ell$ is injective [@gilleszamuely2006, Corollary 4.2.14, p. 90], so the same holds for $H^1(S_\ell,\mathbb F_\ell)$. The finitely generated profinite group $\Delta_D$ has a countable basis of open subgroups; its closed subgroup $S_\ell$ is therefore countably based. A compact space with a countable basis has only countably many clopen subsets, hence only countably many continuous maps to $\mathbb F_\ell$. Its infinite character dimension is consequently exactly $\aleph_0$. For a free pro-$\ell$ group this dimension is its free rank: by the universal property, continuous characters are exactly the finitely supported functions on a free basis converging to $1$. This proves part 2. $\square$

**Scope.** This concerns the full kernel, rather than only the kernels between maximal pro-$\ell$ quotients. Projectivity supplies weak solutions to embedding problems on $N$; it supplies no open map from $\Pi_D$ to a punctured-target fundamental group. The [remaining point-surjectivity question](properness-and-point-surjectivity-of-fundamental-group-maps.md) stays open. If $\phi$ identifies the source with its finite etale image-cover group, then $N=1$ and part 1 holds with cohomological dimension zero.

Openness is essential. If $C$ has a $k$-rational point $c$, the map $s_c\circ p_D$ through its point section has kernel $\Delta_D$. For $g(D)\ge2$ and $\ell\ne p$, this kernel has $H^2(\Delta_D,\mathbb F_\ell)\cong\mathbb F_\ell$ by the curve's group-cohomology comparison [@stacks2026, Proposition 64.29.3, tag 03VM] and the computation above, so it is not projective.
