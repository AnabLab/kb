---
title: Frattini modules of kernels between Demushkin groups
kind: theorem
summary: 'A nontrivial kernel between infinite Demushkin groups is free of infinite rank, and its compact Frattini module has no nonzero finite orbits. Coinvariants over an index-m subgroup have dimension m times the rank difference, plus a zero-or-one inflation defect.'
tags: [pro-p-groups, galois-cohomology, curves, finite-fields]
edges:
  - {to: demushkin-group, label: uses, note: 'Infinite Demushkin groups have cohomological dimension two; their open subgroups are Demushkin with the rank-index formula.'}
  - {to: demushkin-groups-of-rank-at-least-three-are-elastic, label: uses, note: 'Part 1 proves H^2 vanishing for every closed subgroup of infinite index, including kernels of infinite rank and source groups of rank two.'}
  - {to: geometric-fundamental-groups-of-curves, label: uses, note: 'Maximal pro-ell geometric groups of proper curves in characteristic different from ell are pro-ell surface groups.'}
  - {to: finite-character-kernels-of-open-curve-group-maps, label: uses, note: 'Supplies the geometric surjection and the positive genus defect for a nontrivial kernel of an open constants-compatible arithmetic map.'}
  - {to: properness-and-point-surjectivity-of-fundamental-group-maps, label: addresses, note: 'Constrains the compact Frattini modules of pro-ell quotients of a possible nontrivial kernel; does not prove point-surjectivity.'}
---

**Setting.** Let $\pi:A\twoheadrightarrow B$ be a continuous surjection of infinite [Demushkin pro-$p$ groups](demushkin-group.md). Put $N=\ker\pi$, $\Phi(N)=\overline{N^p[N,N]}$, and $W=N/\Phi(N)$, with its compact topology and conjugation action of $B$. Write $n(P)=\dim_{\mathbb F_p}H^1(P,\mathbb F_p)$. All cohomology is continuous with trivial coefficients $\mathbb F_p$. For an open subgroup $U\subseteq B$, put $A_U=\pi^{-1}(U)$ and
$$
W_U=W/\overline{\langle uw-w:u\in U,\ w\in W\rangle}.
$$

**Theorem (proved here).**

1. If $N\ne1$, it is free pro-$p$ of infinite rank, and $W^U=0$ for every open $U\subseteq B$. Thus no nonzero element of $W$ has finite $B$-orbit.
2. For every open $U\subseteq B$ of index $m$, the compact coinvariant group $W_U$ is finite, with
   $$
   \dim_{\mathbb F_p}W_U=m\bigl(n(A)-n(B)\bigr)+\epsilon_U,\qquad
   \epsilon_U=\dim_{\mathbb F_p}\ker\bigl(H^2(U)\xrightarrow{\mathrm{inf}}H^2(A_U)\bigr)\in\{0,1\}.\tag{1}
   $$
   This formula also holds when $N=1$.

**Input.** Palaisti's 2026 preprint identifies
$$
H^3(E,\mathbb F_p)^\vee\simeq (F/\Phi(F))^Q
$$
for any extension $1\to F\to E\to Q\to1$ with nontrivial free pro-$p$ kernel of arbitrary rank and infinite Demushkin quotient [@palaisti2026freebydemushkin, Theorem 3.2, p. 6]. Here $\vee$ is the continuous dual into $\mathbb F_p$. The cited argument uses the sole total-degree-three term $H^2(Q,H^1(F,\mathbb F_p))$ in the Hochschild–Serre spectral sequence and Demushkin duality; it requires no finite-generation hypothesis on $F$.

**Proof.** Since $B$ is infinite, $N$ has infinite index in $A$. The [infinite-index subgroup theorem](demushkin-groups-of-rank-at-least-three-are-elastic.md), part 1, gives $H^2(N)=0$. The general pro-$p$ cohomological-dimension criterion and freeness criterion therefore make a nontrivial $N$ free pro-$p$, also when its rank is infinite [@palaisti2026freebydemushkin, §2.1, p. 3].

For open $U\subseteq B$, both $U$ and $A_U$ are infinite Demushkin groups [@serre1963, 9.2, pp. 153–154]. In particular $H^3(A_U)=0$, since their cohomological dimension is two [@serre1963, 9.1, p. 153]. Apply the displayed input to
$$1\longrightarrow N\longrightarrow A_U\longrightarrow U\longrightarrow1.$$
Its Frattini module is the same $W$, so $W^U=0$. If a vector had finite $B$-orbit, its stabilizer would be closed of finite index, hence open, contradicting this vanishing. A nontrivial pro-$p$ group has a nonzero continuous character to $\mathbb F_p$, so $W\ne0$. If $N$ were finitely generated, $W$ would be finite and all its orbits finite. This proves part 1.

For part 2, the five-term sequence of the same extension is
$$
0\longrightarrow H^1(U)\longrightarrow H^1(A_U)\longrightarrow H^1(N)^U
\longrightarrow H^2(U)\xrightarrow{\mathrm{inf}}H^2(A_U).
$$
It follows that $\dim H^1(N)^U=n(A_U)-n(U)+\epsilon_U$. Both degree-two spaces have dimension one, so $\epsilon_U\in\{0,1\}$. Moreover $H^1(N)^U=(W_U)^\vee$ by the definitions of characters and coinvariants. Its finite dimension makes $W_U$ finite of that same dimension. The index formula gives
$$
n(A_U)-2=m(n(A)-2),\qquad n(U)-2=m(n(B)-2)
$$
[@serre1963, 9.2, p. 154], proving (1). If $N=1$, inflation is an isomorphism and all terms in (1) are zero. $\square$

**Application to open curve-group maps (proved here).** Let $C,D$ be smooth proper geometrically integral curves over a finite field $k$, with $g(C)\ge2$. Write $\Pi_X=\pi_1(X)$ and $\Delta_X=\pi_1(X_{\bar k})$. Let $\phi:\Pi_D\to\Pi_C$ have open image and commute with projection to $G_k$, and let $Y\to C$ be its finite étale image cover. Put $\delta=g(D)-g(Y)$. For each $\ell\ne\operatorname{char}(k)$, passage to maximal pro-$\ell$ geometric quotients gives
$$
A_\ell=\Delta_D(\ell)\twoheadrightarrow B_\ell=\Delta_Y(\ell),\qquad N_\ell=\ker(A_\ell\to B_\ell).
$$
The [surface presentation](geometric-fundamental-groups-of-curves.md) identifies $A_\ell,B_\ell$ with the pro-$\ell$ surface groups [@grothendieck1971sga1, Exp. XIII, Corollary 2.12, p. 290]. These are infinite Demushkin groups of ranks $2g(D),2g(Y)$ [@serre1963, Remark c following Theorem 3.1, p. 147]. If $\ker\phi\ne1$, the [finite-character theorem](finite-character-kernels-of-open-curve-group-maps.md) gives $\delta>0$. Thus $N_\ell\ne1$, since an isomorphism would preserve these ranks. The theorem above applies with $p=\ell$: $N_\ell$ is free of infinite rank, its compact Frattini module has no nonzero finite orbits, and its coinvariant dimension over an index-$m$ open subgroup of $B_\ell$ is $2m\delta+\epsilon_U$.

There is a natural surjection $\ker\phi\twoheadrightarrow N_\ell$. Indeed, let $J$ be its image in $A_\ell$. It is closed and normal, and $\Delta_D\to A_\ell/J$ factors through $\Delta_Y$. Since this quotient is pro-$\ell$, it factors through $B_\ell$. The resulting maps $A_\ell/J\rightleftarrows B_\ell$ are inverse on the images of $\Delta_D$, proving $J=N_\ell$. No well-behavedness hypothesis was used. These restrictions alone leave the [general point-surjectivity check](properness-and-point-surjectivity-of-fundamental-group-maps.md) open.

**Checks.** The correction $\epsilon_U$ is necessary. Let $A$ be the pro-$p$ genus-two surface group on $a_1,b_1,a_2,b_2$, with relation $[a_1,b_1][a_2,b_2]=1$, and let $B=\mathbb Z_p^2$ with basis $u,v$. Consider these two surjections, both respecting that relation:

- Send $a_1,b_1$ to $u,v$ and the other generators to zero.
- Send $a_1,a_2$ to $u,v$ and both $b_i$ to zero.

The coordinate characters of $B$ have cup product generating $H^2(B)$. Their pulled-back cup vanishes precisely when the map to $\mathbb F_p^2$ lifts to the group of upper unitriangular $3$-by-$3$ matrices over $\mathbb F_p$: the central-coordinate equation for such a lift is the coboundary equation for that cup product. For the first map, every proposed lift sends $[a_1,b_1]$ to the nonidentity central element with upper-right entry $1$, while $a_2,b_2$ have central images. The surface relation forbids a lift, so $\epsilon_B=0$. For the second map, assign the two standard elementary matrices to $a_1,a_2$ and the identity to both $b_i$. This is a lift, so $\epsilon_B=1$. Formula (1) gives coinvariant dimensions two and three, respectively, for every prime $p$. In both examples $W^B=0$. Invariants of compact $W$ must therefore be distinguished from $H^1(N)^B$, the dual of its coinvariants.
