---
title: Finite-order local Galois automorphisms are detected modulo wild commutators
kind: theorem
summary: 'For every p-adic field K, a nontrivial finite-order automorphism of G_K stays non-inner on G_K/[P,P], where P is wild inertia. For odd p, every finite normal p-subgroup of Out(G_K) injects into the outer automorphism group of this quotient.'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: free-pro-p-ia-kernels-are-torsion-free, label: uses, note: 'The arbitrary-rank theorem applies to the infinitely generated wild inertia group.'}
  - {to: wild-inertia-of-a-p-adic-field, label: uses, note: 'Wild inertia is characteristic and free pro-p, and tame inertia is torsion-free procyclic.'}
  - {to: finite-normal-subgroups-of-p-adic-outer-automorphism-groups, label: uses, note: 'Part 3(a) gives an order-p automorphism representative for each order-p outer class with finitely many conjugates, when p is odd.'}
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: addresses, note: 'Reduces detection of finite normal p-subgroups, for odd p, to the quotient modulo wild commutators; does not exclude such subgroups.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite and put
$$
G=G_K,\qquad P=P_K,\qquad M=P^{\mathrm{ab}},\qquad
E=G/[P,P],\qquad\Gamma=G/P.
$$
Commutator subgroups are closed, and automorphisms are continuous. Wild inertia $P$ is characteristic and free pro-$p$ of infinite rank [@minamidetsujimura2026quasifinite, Proposition 1.5(ii), p. 14; proof of Proposition 1.7, p. 16; Remark 1.7.1(i), pp. 16–17]. Thus the quotient induces maps
$$
\rho:\operatorname{Aut}(G)\longrightarrow\operatorname{Aut}(E),
\qquad
\bar\rho:\operatorname{Out}(G)\longrightarrow\operatorname{Out}(E).
$$

**Theorem (proved here).**

1. The kernel of $\rho$ is torsion-free. More strongly, if $\alpha\in\operatorname{Aut}(G)$ has finite order and $\rho(\alpha)$ is inner, then $\alpha=1$. Consequently every finite subgroup of $\operatorname{Aut}(G)$ injects into $\operatorname{Out}(E)$.
2. Suppose $p$ is odd. For every finite normal subgroup $F\trianglelefteq\operatorname{Out}(G)$, the kernel of $\bar\rho|_F$ has order prime to $p$. In particular, $\bar\rho$ is injective on every finite normal $p$-subgroup of $\operatorname{Out}(G)$.

**Proof of part 1.** First let $\alpha$ have finite order and induce the identity on $E$. Its restriction to $P$ has finite order and acts trivially on $M$. The [arbitrary-rank IA theorem](free-pro-p-ia-kernels-are-torsion-free.md) implies $\alpha|_P=1$. For $g\in G$, write $\alpha(g)=g d_g$ with $d_g\in[P,P]$. For $x\in P$, both $x$ and $gxg^{-1}$ are fixed by $\alpha$, so
$$
g d_g x d_g^{-1}g^{-1}=\alpha(gxg^{-1})=gxg^{-1}.
$$
Hence $d_g\in Z(P)=1$, and $\alpha=1$. Here a nonabelian free pro-$p$ group has trivial centre: the finite-rank case is recalled in [@tsujimura2026freeaut, Introduction, p. 2], and the finite free retractions used in the IA entry reduce the general case to finite subsets of a free basis having at least two elements. A central element has central image in every such quotient, so it is trivial.

To strengthen this from the identity to an inner automorphism of $E$, it suffices to show that $\operatorname{Inn}(E)$ is torsion-free. The tame group fits into
$$
1\longrightarrow I^t\longrightarrow\Gamma
\longrightarrow\widehat{\mathbb Z}\longrightarrow1,
\qquad I^t\cong\prod_{\ell\ne p}\mathbb Z_\ell(1),
$$
where Frobenius acts by multiplication by the residue cardinality $q$ [@minamidetsujimura2026quasifinite, Proposition 1.5(i), p. 14]. Both kernel and quotient are torsion-free, hence so is $\Gamma$. Also $Z(\Gamma)=1$. Indeed, if a central element has image $b\in\widehat{\mathbb Z}$, its action on $I^t$ gives $q^b=1$. Reducing modulo $q^m-1$ for $m\ge2$, where $q$ has order $m$, shows $b\in m\widehat{\mathbb Z}$ for every $m$, hence $b=0$. The element then lies in $I^t$, and commuting with Frobenius gives $(q-1)b'=0$ there, so it is trivial.

The module $M$ is torsion-free by Step 1 of the IA entry, in degree one. Suppose $e\in E$ and $e^r\in Z(E)$ for a positive integer $r$. Its image $\gamma\in\Gamma$ satisfies $\gamma^r\in Z(\Gamma)=1$, hence $\gamma=1$ and $e\in M$. For every $x\in E$, the elements $xex^{-1}$ and $e$ lie in the abelian group $M$, and
$$
(xex^{-1}e^{-1})^r=xe^rx^{-1}e^{-r}=1.
$$
Torsion-freeness of $M$ gives $xex^{-1}=e$. Thus $e\in Z(E)$, proving that $E/Z(E)\cong\operatorname{Inn}(E)$ is torsion-free. If $\rho(\alpha)$ is inner and $\alpha$ has finite order, then $\rho(\alpha)=1$, and the first argument finishes the proof. Restricting the map to $\operatorname{Out}(E)$ to any finite subgroup now gives the last assertion. $\square$

**Proof of part 2.** Let $C=F\cap\ker\bar\rho$. If $p\mid|C|$, Cauchy's theorem gives $f\in C$ of order $p$. Since $F$ is finite and normal, $f$ has finitely many conjugates in $\operatorname{Out}(G)$. Part 3(a) of [the finite-normal-subgroup reduction](finite-normal-subgroups-of-p-adic-outer-automorphism-groups.md) supplies an automorphism $\alpha$ of $G$ of order $p$ representing $f$. Since $\bar\rho(f)=1$, its image on $E$ is inner. Part 1 gives $\alpha=1$, a contradiction. $\square$

**Limit.** This is a detection result. It neither rules out a nontrivial finite normal $p$-subgroup of $\operatorname{Out}(G_K)$ nor lifts any finite-order automorphism from $E$ to $G_K$. In particular, identity on the maximal pro-$p$ quotient of $G_K$ does not supply the identity on $E$ required by the first step.
