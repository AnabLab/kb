---
title: Galois subextension discriminants suffice to recover ramification
kind: theorem
summary: Discriminant exponents attached only to normal subgroups of a finite local Galois group recover its full ramification filtration by normal-closure inversion. Thus geometricity of p-adic Galois isomorphisms can be tested on finite Galois extensions alone.
tags: [local-fields, ramification, reconstruction-algorithms]
edges:
  - {to: discriminants-recover-ramification-filtrations, label: uses, note: "Uses its normalized different tower identity; the reconstruction here needs only the normal-subgroup data."}
  - {to: ramification-filtration, label: uses, note: "Normality of the lower groups makes displacement constant on elements with the same normal closure."}
  - {to: mochizuki-local-fields-theorem, label: uses, note: "Converts the reconstructed upper filtration into the geometricity criterion."}
---

**Finite reconstruction (proved here).** Let $L/K$ be a finite Galois extension of nonarchimedean local fields with finite residue fields, with group $G$ and normalized valuations. Suppose the input consists of $G$ and the integers
$$
\Delta(N)=v_K\bigl(\operatorname{disc}(\mathcal O_{L^N}/\mathcal O_K)\bigr)
\qquad(N\trianglelefteq G).
$$
These are the discriminants of the intermediate fields that are Galois over $K$, attached to their normal subgroups. They determine the entire lower and upper ramification filtrations, and also $\Delta(H)$ for every subgroup $H\le G$.

Here is a finite recursive algorithm. First put
$$
I=\bigcap_{\substack{N\trianglelefteq G\\\Delta(N)=0}}N,
\qquad f=[G:I],\qquad
B(N)=\frac{\Delta(1)-|N|\Delta(N)}{f}.
\tag{1}
$$
Process the normal subgroups in increasing order of size, defining
$$
a(N)=|N|-1-\sum_{\substack{M\trianglelefteq G\\M\subsetneq N}}a(M),
\qquad
b(N)=B(N)-\sum_{\substack{M\trianglelefteq G\\M\subsetneq N}}b(M).
\tag{2}
$$
In particular, $a(1)=b(1)=0$. For $g\ne1$, let $C_g$ be its normal closure in $G$. Then $a(C_g)>0$, and
$$
i(g)=\frac{b(C_g)}{a(C_g)},\qquad
G_j=\{1\}\cup\{g\ne1:i(g)\ge j+1\}\quad(j\ge0),
\qquad G_{-1}=G.
\tag{3}
$$
All subgroups in the sums in (2) are normal in the ambient $G$, rather than merely normal in $N$.

**Proof.** The discriminant exponent vanishes exactly for unramified extensions [@sutherland2025different, Theorem 12.19, p. 7]. Thus $\Delta(N)=0$ exactly when $N$ contains inertia $G_0$. Since $G_0$ is normal, it occurs in the intersection in (1); hence $I=G_0$ and $f=f(L/K)$.

For $g\ne1$ write
$$
i_G(g)=\min_{x\in\mathcal O_L}v_L(g(x)-x).
$$
The [normalized different tower identity](discriminants-recover-ramification-filtrations.md), equation (3), gives
$$
\Delta(1)-|H|\Delta(H)
=f\sum_{h\in H\setminus\{1\}}i_G(h)
\qquad(H\le G).
\tag{4}
$$
Its normalization uses that discriminants are norms of differents [@sutherland2025different, Theorem 12.17, p. 6] and that differents multiply in towers [@sutherland2025different, Proposition 12.28, p. 10]. In particular, $B(N)$ is the sum of displacements on $N\setminus\{1\}$.

For a normal subgroup $N$, let
$$
X_N=\{g\in G\setminus\{1\}:C_g=N\}.
$$
Every nonidentity element of $N$ has exactly one normal closure contained in $N$. Consequently the sets $X_M$, for $M\trianglelefteq G$ contained in $N$, partition $N\setminus\{1\}$. Induction in (2) now proves
$$
a(N)=|X_N|,\qquad b(N)=\sum_{g\in X_N}i_G(g).
\tag{5}
$$

The lower ramification groups are normal: conjugation preserves their defining valuation inequalities, since every element of $G$ preserves $\mathcal O_L$ and $v_L$. Hence, for every $j\ge0$,
$$
g\in G_j\quad\Longleftrightarrow\quad C_g\subseteq G_j.
$$
It follows that $i_G$ is constant on each nonempty $X_N$: its integer value is the number of indices $j\ge0$ for which $g\in G_j$. If $g\ne1$, then $g\in X_{C_g}$, so (5) gives $a(C_g)>0$ and $b(C_g)/a(C_g)=i_G(g)$. This proves (3). Normal subgroups with $X_N$ empty have $a(N)=b(N)=0$ and require no division. Herbrand's change of numbering recovers the upper groups. Finally (4) recovers every remaining discriminant by
$$
\Delta(H)=\frac{\Delta(1)-f\sum_{h\in H\setminus\{1\}}i(h)}{|H|}.
\qquad\square
$$

**Geometricity from Galois extensions (proved here).** Let $K,K'$ be finite extensions of the same $\mathbb Q_p$, and let $\alpha:G_K\xrightarrow{\sim}G_{K'}$ be a continuous isomorphism. Define $\Delta_K(U)$ to be the discriminant exponent of $\bar K^U/K$. The outer class of $\alpha$ comes from a unique $\mathbb Q_p$-isomorphism of fields if and only if
$$
\Delta_K(U)=\Delta_{K'}(\alpha(U))
\qquad\text{for every open normal }U\trianglelefteq G_K.
\tag{6}
$$

*Proof.* Fix an open normal $V\trianglelefteq G_K$. Every normal subgroup of $G_K/V$ has an open normal inverse image in $G_K$. Thus (6) supplies matching normal-subgroup discriminants in the corresponding finite Galois quotients. The finite reconstruction identifies their upper filtrations. Passing to inverse limits identifies the absolute upper filtrations, and [Mochizuki's theorem](mochizuki-local-fields-theorem.md) gives the unique field isomorphism [@mochizuki1997, Theorem 4.2, pp. 7–8]. Conversely, a field isomorphism preserves normalized valuations and integral trace pairings, hence the discriminants in (6). The condition depends only on the outer class because each $U$ is normal. $\square$

**Checks.** If $L/K$ is unramified, every input is zero, $I=1$, and every reconstructed displacement is zero. The trivial extension gives an empty displacement function.

For the splitting field of $X^3-2$ over $\mathbb Q_2$, the [checked example](discriminants-recover-ramification-filtrations.md) has $G=S_3$ and normal-subgroup data
$$
\Delta(1)=4,\qquad\Delta(A_3)=\Delta(S_3)=0.
$$
The algorithm gives $I=A_3$, $f=2$, $B(A_3)=B(S_3)=2$, and
$$
(a(A_3),b(A_3))=(2,2),\qquad
(a(S_3),b(S_3))=(3,0).
$$
Thus $i=1$ on nonidentity $3$-cycles and $i=0$ on transpositions, even though each transposition normally generates the noncyclic group $S_3$. Equation (4) then recovers $\Delta(C_2)=2$ without that non-Galois cubic discriminant as input.

For $G=C_2\times C_2$, the three order-two subgroups each have $a=1$, whereas $a(G)=0$: no single element normally generates $G$. This illustrates why (3) divides only at a normal closure $C_g$, not at every normal subgroup.

For the wild quadratic extension $\mathbb Q_2(\sqrt{-1})/\mathbb Q_2$ in the same linked example, $\Delta(1)=2$ and $\Delta(G)=0$. Thus $I=G$, $f=1$, $a(G)=1$, $b(G)=2$, and (3) recovers lower break $1$.

**Scope.** This strengthens the input requirement of [intermediate-field discriminant reconstruction](discriminants-recover-ramification-filtrations.md). It is a deduction from that entry and normality of ramification groups, with no claim of novelty beyond the knowledgebase. Numerical discriminants remain additional structure, and (6) still tests infinitely many extensions of the base field.
