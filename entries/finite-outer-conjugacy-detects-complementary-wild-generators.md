---
title: Finite outer conjugacy detects the complementary wild generators
kind: theorem
summary: 'For odd $p$ and $[K:\mathbb{Q}_p]\ge3$, a nontrivial tame-trivial finite-order automorphism fixing the complementary generators modulo wild Frattini has infinitely many outer conjugates if its order is prime to $p$. This applies to Nishio''s signed-pair subgroups.'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: addresses, note: "The remaining prime-to-$p$ finite-order automorphisms with finite outer conjugacy must move a complementary generator modulo wild Frattini. This does not exclude all rival copies of type (a)."}
  - {to: rival-copies-of-p-adic-galois-groups-with-index-prime-to-p, label: motivated-by, note: "Its Corollary leaves tame-trivial prime-to-$p$ finite-order automorphisms with finitely many outer conjugates."}
  - {to: tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups, label: uses, note: "The Setting and parts 1 to 3: the module decomposition, the automorphisms induced by units, their composition law, and the trivial centre of the tame quotient."}
  - {to: p-power-order-automorphisms-fix-surface-generators-modulo-the-frattini-subgroup-of-wild-inertia, label: uses, note: "Lemmas 1 and 2, which assume only odd $p$: central topologically nilpotent elements, their annihilator property, and the non-zero-divisor result. The separation argument below extends Step 2 of its proof without a condition on the order."}
  - {to: automorphisms-of-p-adic-galois-groups-mixing-complementary-and-surface-generators, label: uses, note: "Parts 2 and 3 give one mixing automorphism, and its Setting supplies Kondo's integral symplectic changes of the surface generators."}
  - {to: finite-order-local-galois-automorphisms-detected-on-the-frattini-quotient-of-wild-inertia, label: uses, note: "Parts 1 and 2 turn the square-zero conclusion into the finite-order assertions."}
  - {to: finite-subgroups-of-p-adic-outer-automorphism-groups, label: uses, note: "Nishio's signed-pair construction and its finite lifts, checked at [@nishio2026finite, proofs of Theorems 2.7 and 2.8, pp. 11–14], in the application."}
---

**Setting.** Let $p$ be odd, $K/\mathbb Q_p$ have degree $d\ge3$, $G=G_K$, $P=P_K$ its wild inertia, $\Gamma=G/P$, and $\Lambda=\mathbb F_p[[\Gamma]]$. Use the Jannsen–Wingberg presentation and notation of [units of the tame group algebra](tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups.md), with the explicit odd-degree presentation in [mixing complementary and surface generators](automorphisms-of-p-adic-galois-groups-mixing-complementary-and-surface-generators.md). Put
$$\bar V=P/P^{(2)}=L\oplus\bigoplus_{j=1}^d\Lambda\bar x_j,
\qquad L=\mathbb F_p\bar x_0,$$
where $\rho\bar x_0=\omega(\rho)\bar x_0$ and $P^{(2)}=P^p[P,P]$. The complementary generators are $x_0,x_1$ for odd $d$ and $x_0,x_1,x_2$ for even $d$. Write
$$C=\begin{cases}\Lambda\bar x_1,&d\text{ odd},\\
\Lambda\bar x_1\oplus\Lambda\bar x_2,&d\text{ even},\end{cases}
\qquad D=L\oplus C.$$
The remaining generators form surface pairs $(a_i,b_i)$. The first pair $(x_s,x_t)$ is $(x_2,x_3)$ for odd $d$ and $(x_3,x_4)$ for even $d$. An automorphism is *tame-trivial* if it induces the identity on $\Gamma$.

**Theorem.** This is proved here. Let $\theta\in\operatorname{Aut}(G)$ be tame-trivial, with finitely many conjugates of its class in $\operatorname{Out}(G)$, and suppose
$$\bar\theta(\bar x_j)=\bar x_j\quad\text{for every complementary generator }x_j.\tag{1}$$
Then $(\bar\theta-1)\bar V\subseteq L$, and $(\bar\theta-1)^2=0$.

If $\theta$ has finite order, then $\theta^p=1$. Moreover, $\theta=1$ if $p\ge5$ or if the order of $\theta$ is prime to $p$. Thus a nonidentity tame-trivial finite-order automorphism of order prime to $p$ satisfying (1) has infinitely many outer conjugates, also for $p=3$.

**A separation lemma.** Suppose only that $\alpha$ is tame-trivial and has finitely many outer conjugates, without assuming (1) or finite order. Then $\bar\alpha$ is $\Lambda$-linear, preserves $L$ and $D$, and for each surface generator $x_j$ there are $c_j\in\mathbb F_p$ and $z_j\in\Lambda$ with
$$\bar\alpha(\bar x_j)=c_j\bar x_0+z_j\bar x_j.\tag{2}$$

*Proof.* Tame triviality gives $\Lambda$-linearity because $P$ acts trivially on $\bar V$. Let $\gamma=\sigma^{\pi_p}$, where $\pi_p\in\widehat{\mathbb Z}$ has $p$-component $1$ and all other components $0$. It generates an infinite pro-$p$ subgroup and $\omega(\gamma)=1$. By Lemma 2 of [the surface-generator entry](p-power-order-automorphisms-fix-surface-generators-modulo-the-frattini-subgroup-of-wild-inertia.md), $\gamma-1$ annihilates no nonzero element of $\Lambda$, on either side. Consequently the vectors $v$ satisfying $\rho v=\omega(\rho)v$ for all $\rho\in\Gamma$ are exactly $L$: apply $\gamma-1$ to each free coordinate of $v$. This characterizes $L$, so $\bar\alpha$ preserves it.

For the first surface pair, the unit construction supplies a subgroup $\{\bar\psi_\lambda:\lambda\in\Lambda^\times\}$ of $\operatorname{Aut}(G/P^{(2)})$. Its action on the finite set of conjugate outer classes of $\alpha$ has a stabilizer of finite index. Passing to its normal core gives an integer $e\ge1$ such that, for every $\lambda\in\Lambda^\times$, $\bar\psi_{\lambda^e}$ commutes with the induced $\alpha$ up to an inner automorphism. That inner automorphism induces the identity on the centre-free group $\Gamma$, so its conjugating element lies in $\bar V$ and acts trivially on $\bar V$. Hence
$$\Theta_\nu\bar\alpha=\bar\alpha\Theta_\nu\qquad(\nu=\lambda^e),\tag{3}$$
where $\Theta_\nu$ fixes the other summands, acts on $\Lambda\bar x_s$ by right multiplication by $\nu$, and on $\Lambda\bar x_t$ by right multiplication by $\nu'=(\nu^*)^{-1}$.

Here are the central units needed to extract coordinates from (3). They are provided by Lemma 1 of the surface-generator entry, for integers $m$ prime to $p$ and divisible by $p-1$. There are central idempotents $\varepsilon_m\to1$ and central topologically nilpotent elements $\eta_m$ with
$$\eta_m^*=-\eta_m(1+\eta_m)^{-1},\qquad
\eta_m^kz=0\Longrightarrow\varepsilon_mz=0\quad(k\ge1).\tag{4}$$
Write $e=p^be'$ with $p\nmid e'$, choose $c\in\mathbb F_p\setminus\{0,1\}$, and set $\nu=(1+c\eta_m)^e$. Both $\nu-1$ and $\nu'-1$ are $\eta_m^{p^b}$ times central units. Also $\nu-\nu'$ is $\eta_m^{2p^b}$ times a central unit. Indeed,
$$\nu^*\nu=
\left(1+(c-c^2)\eta_m^2(1+\eta_m)^{-1}\right)^e,$$
and $(1+h)^e-1=h^{p^b}(e'+h^{p^b}r)$ for topologically nilpotent central $h$ and a polynomial $r$; the last factor is a unit. The choice of $c$ works for every odd $p$, including $c=2$ for $p=3$.

For $j\ge1$, write $\bar\alpha(\bar x_j)=\mu_{j0}\bar x_0+\sum_{i\ge1}\mu_{ji}\bar x_i$. Comparing free coordinates in (3) gives, with $i,j\ge1$,
$$\begin{aligned}
\mu_{js}(\nu-1)&=\mu_{jt}(\nu'-1)=0&& (j\notin\{s,t\}),\\
(\nu-1)\mu_{si}&=(\nu'-1)\mu_{ti}=0&& (i\notin\{s,t\}),\\
\nu\mu_{st}&=\mu_{st}\nu',&\qquad\nu'\mu_{ts}&=\mu_{ts}\nu.
\end{aligned}\tag{5}$$
Centrality, (4), and the factorizations just proved show that $\varepsilon_m$ kills each off-diagonal coefficient in (5). Letting $m$ tend to infinity along divisibility kills those coefficients themselves. Thus the first surface pair has no free-coordinate interaction with the other generators or between its two members.

Kondo's automorphisms include exchanges of the surface pairs, acting $\Lambda$-linearly on $\bar V$ and fixing the complementary generators. Apply the same argument to the corresponding conjugates of $\alpha$. It follows that every surface generator satisfies (2), and no complementary generator has a surface coordinate. Together with preservation of $L$, this proves preservation of $D$. No condition on the order of $\alpha$ was used. $\square$

**Proof of the Theorem.** Apply the lemma to $\theta$. Put $\nu_0=\gamma^{-1}-1$. Then $\omega(\nu_0)=0$, and left multiplication by $\nu_0$ is injective on $\Lambda$, by the same non-zero-divisor result used above.

Choose a mixing automorphism $\varphi$ from part 3 of [the mixing entry](automorphisms-of-p-adic-galois-groups-mixing-complementary-and-surface-generators.md) for odd $d$, or part 2 for even $d$, with parameter $\nu_0$. It is tame-trivial, fixes $\bar x_0$, and is $\Lambda$-linear on $\bar V$. In both cases,
$$\bar\varphi(\bar x_1)=\bar x_1+\nu_0\bar x_s,$$
and, for even $d$, $\bar\varphi(\bar x_2)=\bar x_2$. Thus every vector of $\bar\varphi(D)$ has its $\bar x_s$-coordinate equal to its $\bar x_1$-coordinate multiplied on the right by $\nu_0$.

The automorphism $\varphi^{-1}\theta\varphi$ is tame-trivial and still has finitely many outer conjugates. The separation lemma applied to it says that $\bar\theta$ preserves $\bar\varphi(D)$. By (1), (2), and $\omega(\nu_0)=0$,
$$\bar\theta\bar\varphi(\bar x_1)=\bar x_1+\nu_0z_s\bar x_s.$$
Its $\bar x_1$-coordinate is $1$, so membership in $\bar\varphi(D)$ forces $\nu_0z_s=\nu_0$. Injectivity of multiplication by $\nu_0$ gives $z_s=1$.

This argument applies to every conjugate $\kappa^{-1}\theta\kappa$ where $\kappa$ is one of Kondo's automorphisms inducing an integral symplectic change of the surface generators. These conjugates still satisfy (1). Exchanges of pairs, and the symplectic change $(a_i,b_i)\mapsto(b_i,-a_i)$ within a pair, place every surface generator in the $x_s$ position. Therefore $z_j=1$ for every surface generator. Together with (1) and (2), this shows that $N:=\bar\theta-1$ maps $\bar V$ into $L$ and kills $L$, so $N^2=0$.

If $\theta$ has finite order, then $\overline{\theta^p}=(1+N)^p=1$. Part 2 of [detection on the wild Frattini quotient](finite-order-local-galois-automorphisms-detected-on-the-frattini-quotient-of-wild-inertia.md) gives $\theta^p=1$. If its order is prime to $p$, it is therefore $1$. If $p\ge5$, its order is now a power of $p$ and $N^{p-2}=0$, so part 1 of the same detection theorem gives $\theta=1$. For $p=3$ the possible order-$3$ case is left open. $\square$

**Applications.** These are proved here.

1. Every nontrivial unit scaling $\theta_\lambda$ from [units of the tame group algebra](tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups.md), $\lambda\ne1$, has infinitely many outer conjugates. Indeed, it satisfies (1); finite outer conjugacy would force its action on every free surface coordinate to be the identity by the Theorem, whereas its $\bar x_s$-coordinate is $\lambda$. This does not require $\theta_\lambda$ to have finite order.
2. Apply Nishio's signed-pair construction to this presentation. Every nonidentity element of each prime-to-$p$ finite subgroup it produces has infinitely many outer conjugates. The source's pair swaps and simultaneous inversions fix all complementary generators; its lifts retain these reductions modulo $P^{p,2,s}\subseteq P^{(2)}$ and induce the identity on $\Gamma$ [@nishio2026finite, proofs of Theorems 2.7 and 2.8, pp. 11–14]. Thus the Theorem applies. The finite subgroup injects into $\operatorname{Out}(G)$ because $\operatorname{Inn}(G)\cong G$ is torsion-free, as recorded in [finite subgroups](finite-subgroups-of-p-adic-outer-automorphism-groups.md), consequence 1. Its image meets every finite normal subgroup trivially. If nontrivial, that image also has infinitely many conjugates as a subgroup: finitely many finite conjugate subgroups would contain only finitely many conjugates of each element.

**Scope.** The prime-to-$p$ finite-order automorphisms left by [the rival-copy reduction](rival-copies-of-p-adic-galois-groups-with-index-prime-to-p.md) need not satisfy (1). The result gives a necessary failure of (1), not their nonexistence. It does not treat $d\le2$ or $p=2$. The presentation and lifting inputs in the linked KB theorems are used as established results; their underlying sources were not reopened here.
