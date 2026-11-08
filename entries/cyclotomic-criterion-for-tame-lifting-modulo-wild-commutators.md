---
title: A cyclotomic criterion for tame automorphisms modulo wild commutators
kind: theorem
summary: For any finite extension of Q_p, an automorphism of its tame Galois group lifts modulo wild commutators exactly when it preserves the mod-p cyclotomic character. Jannsen's module classification supplies the criterion; at p = 2 every tame automorphism qualifies.
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: tame-automorphisms-lift-modulo-wild-commutators, label: generalizes, note: "Allows fields without the pth roots of unity, and identifies exactly which tame automorphisms lift."}
  - {to: local-tate-duality, label: uses, note: "The duality input in Jannsen's local module classification."}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: "Recovers the lift modulo wild commutators; gives no lift to the full absolute Galois group."}
---

**Setting.** Let $k/\mathbb Q_p$ be finite, let $T=k_{tr}$ be its maximal tamely ramified extension, and put
$$
P=\operatorname{Gal}(\bar k/T),\quad
\Gamma=\operatorname{Gal}(T/k),\quad
M=P^{ab},\quad E=G_k/[P,P].
$$
Commutator subgroups are closed. Write $\pi:E\to\Gamma$ for restriction. The extension $k(\mu_p)/k$ has degree dividing $p-1$, so lies in $T$. Thus the mod-$p$ cyclotomic character factors as $\bar\chi:\Gamma\to\mathbb F_p^\times$.

**Theorem (proved here).** For $\beta\in\operatorname{Aut}(\Gamma)$, there exists $\widetilde\beta\in\operatorname{Aut}(E)$ with $\pi\widetilde\beta=\beta\pi$ if and only if
$$
\bar\chi\circ\beta=\bar\chi.
$$
All automorphisms are continuous. In particular, if $\mu_p\subset k$, every $\beta$ lifts, recovering [the earlier lifting theorem](tame-automorphisms-lift-modulo-wild-commutators.md). This includes every $2$-adic field.

**Proof.** Put $U=\mu_{p^\infty}(T)$ and $\Lambda=\mathbb Z_p[[\Gamma]]$. For a $\Gamma$-module $A$, write $\beta^*A$ for the same group with action $\gamma\cdot a=\beta(\gamma)a$.

*1. Reduction to $M$.* Let $I=\operatorname{Gal}(T/k^{ur})$. Steps 1–2 of the earlier entry prove that every $\beta$ preserves $I$, induces the identity on $\Gamma/I$, and that $\operatorname{cd}_p\Gamma\le1$. Those steps use no roots-of-unity hypothesis: the kernel of $\Gamma\to\mathbb Z_p$ is pro-prime-to-$p$, and the quotient is $\mathbb Z_p$. They also prove that $E\to\Gamma$ splits, since its kernel $M$ is pro-$p$. Choose a splitting, so $E=M\rtimes\Gamma$.

A lift restricts to an isomorphism $M\to\beta^*M$. Conversely, any such isomorphism $\varphi$ gives the lift $(m,\gamma)\mapsto(\varphi(m),\beta(\gamma))$. Consequently, liftability is equivalent to $M\cong\beta^*M$.

*2. The root-of-unity module.* Apply Jannsen's local module theorem to $T/k$, taking his $\Omega=\bar k$ and $X=M$. With the base degree fixed, $M$ is determined up to isomorphism by $\Gamma$, $U$, and the image of the dual inflation map into $H^2(\Gamma,U)^\vee$ [@jannsen1989iwasawa, MPI/88-15 version, Theorem 5.1(c),(e), pp. 43–45]. The last group vanishes by step 1. Moreover,
$$
\operatorname{Ext}^1_\Lambda(M,\Lambda)\cong U^\vee
$$
[@jannsen1989iwasawa, MPI/88-15 version, Example 5.2(b), p. 46]. Here $\vee$ denotes Pontryagin duality; the right action on Ext is converted to a left action by $\gamma\mapsto\gamma^{-1}$ [@jannsen1989iwasawa, MPI/88-15 version, Remark 2.7(b), p. 21].

These statements give
$$
M\cong\beta^*M\quad\Longleftrightarrow\quad U\cong\beta^*U.
$$
For the forward implication, twist the Ext calculation along the ring automorphism induced by $\beta$, and dualize. For the reverse implication, mark the same quotient $G_k\to\Gamma$ by $\beta^{-1}\circ\pi_k$, where $\pi_k:G_k\to\Gamma$ is restriction. Its module and root-of-unity data become $\beta^*M$ and $\beta^*U$, while the degree is unchanged and the cohomological datum is still zero. Jannsen's determination up to isomorphism therefore applies. This uses the theorem's full isomorphism statement, including projective summands, rather than only a stable isomorphism.

*3. Reduction to $\mu_p$.* Write $\chi_U:\Gamma\to\operatorname{Aut}(U)$ for the action. The group $U$ is either finite cyclic of $p$-power order or $\mu_{p^\infty}$, and contains $\mu_p$. Its automorphism group is abelian, and restriction $\operatorname{Aut}(U)\to\operatorname{Aut}(\mu_p)$ has pro-$p$ kernel. The image $\chi_U(I)$ is pro-prime-to-$p$, so restriction to $\mu_p$ is injective on that image.

Since $\beta$ is the identity on $\Gamma/I$, each $\beta(\gamma)\gamma^{-1}$ lies in $I$. If $\bar\chi\beta=\bar\chi$, its action on $\mu_p$ is trivial, hence so is its action on $U$. Thus $\chi_U\beta=\chi_U$, which gives $U=\beta^*U$. Conversely, an isomorphism $U\cong\beta^*U$ restricts to one on their order-$p$ subgroups; two one-dimensional $\mathbb F_p$-characters are isomorphic only when equal. Steps 1–2 prove the theorem. $\square$

**Explicit test (proved here).** Choose tame generators with $\sigma\tau\sigma^{-1}=\tau^q$, where $q$ is the residue cardinality. By step 1, $\beta(\tau)=\tau^u$ and $\beta(\sigma)=\sigma\tau^a$, with $u\in(\prod_{\ell\ne p}\mathbb Z_\ell)^\times$ and $a\in\prod_{\ell\ne p}\mathbb Z_\ell$. If $d$ is the order of $\bar\chi(\tau)$, the criterion is exactly
$$
u\equiv1\pmod d,\qquad a\equiv0\pmod d.
$$
These are precisely the equalities of the characters on $\tau$ and $\sigma$. Thus the Frobenius shift lifts to $E$ exactly when tame inertia acts trivially on $\mu_p$. For $k=\mathbb Q_3$ it acts by inversion, and the shift fails this test, agreeing with the earlier entry's counterexample.

**Limit.** The theorem describes automorphisms of $E$, not of $G_k$. It supplies no further lift in the open $2$-adic Frobenius-shift problem.
