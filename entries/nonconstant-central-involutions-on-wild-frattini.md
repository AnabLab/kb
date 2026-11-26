---
title: Nonconstant central involutions on wild Frattini lift to local Galois automorphisms
kind: theorem
summary: 'For odd p and a p-adic field K of degree at least three, an actual tame-trivial involution of G_K acts on wild Frattini by a nonconstant central unit. This action commutes with every induced automorphism; the boundary-twist theorem shows that the lift has infinite outer conjugacy.'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: central-scalars-in-finite-outer-conjugacy-on-wild-frattini, label: addresses, note: 'Constructs actual prime-to-p torsion with a nonconstant central scalar, without establishing finite outer conjugacy.'}
  - {to: tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups, label: uses, note: 'The presentation, wild Frattini decomposition, Lemma (b) and (c) over Z/p^s, and the Computation correcting x_0.'}
  - {to: automorphisms-of-p-adic-galois-groups-mixing-complementary-and-surface-generators, label: uses, note: 'The p^s-power map, the coefficient delta_s of y_1, and its lifting step.'}
  - {to: wingberg-lifting-for-the-p-s-central-series-of-wild-inertia, label: uses, note: 'Lifts the constructed automorphism modulo the third p^s-central term, with agreement modulo the second term.'}
  - {to: finite-subgroups-of-p-adic-outer-automorphism-groups, label: uses, note: 'Nishio Theorem 1.2 and the splitting argument of Corollary 1.4 give an involution with the prescribed quotient action.'}
  - {to: p-power-order-automorphisms-fix-surface-generators-modulo-the-frattini-subgroup-of-wild-inertia, label: uses, note: 'Lemma 1(a): the normalized Haar idempotent of the subgroup mI of tame inertia; here also used over Z/p^s.'}
  - {to: finite-abelian-subgroups-of-outer-automorphisms-of-tame-p-adic-galois-groups, label: analogous-to, note: 'That construction uses central unitary units for tame extensions of Q_p; this one controls a common scalar on every free wild Frattini summand for arbitrary K in the stated degree range.'}
---

**Setting.** Let $p$ be odd, $K/\mathbb Q_p$ finite of degree $d\ge3$, $G=G_K$, and $P_K$ its wild inertia. Put
$$\Gamma=G/P_K,\qquad \Lambda=\mathbb F_p[[\Gamma]],\qquad
V=P_K/\Phi(P_K)=L\oplus\bigoplus_{i=1}^d\Lambda\bar x_i,$$
where $L=\mathbb F_p\bar x_0$ has character $\omega$ on $\mu_p$, as in [the tame-group-algebra theorem](tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups.md). Write $I\cong\prod_{\ell\ne p}\mathbb Z_\ell$ for tame inertia in $\Gamma$. For a positive $m$ prime to $p$ and divisible by $p-1$, let $\varepsilon_m\in\Lambda$ be the normalized Haar idempotent of $I_m=mI$ and put
$$z_m=2\varepsilon_m-1.$$

**Theorem (proved here).** For each such $m$ there is an automorphism $\alpha_m$ of $G$ of order exactly two, inducing the identity on $\Gamma$, whose action on $V$ is
$$\alpha_m(v)=z_mv\qquad(v\in V).$$
The unit $z_m$ is central and nonconstant, $z_m^*=z_m$, $z_m^2=1$ and $\omega(z_m)=1$. In particular $\alpha_m$ fixes $L$ pointwise and acts on $V/L$ by $z_m$. Moreover its action on $V$ commutes with the action induced by every automorphism of $G$. Thus all conjugates of $\alpha_m$ have exactly the same action on $V$.

The [boundary-twist theorem](boundary-twists-exclude-finite-outer-conjugacy-of-wild-scalars.md) shows that every such $\alpha_m$ has infinitely many conjugates in $\operatorname{Out}(G)$.

**Lifting lemma (proved here).** Put $p^s=|\mu_{p^\infty}(K^{\mathrm{tr}})|$ and $\Lambda_s=(\mathbb Z/p^s)[[\Gamma]]$, with cyclotomic character $\omega_s$ and involution $\rho^*=\omega_s(\rho)\rho^{-1}$. Suppose
$$a\in Z(\Lambda_s)^\times,\qquad a^*a=1,\qquad\omega_s(a)=1.\tag{1}$$
There is a tame-trivial automorphism of $G$ which, modulo $P_K^{p,2,s}$, fixes the tame generators and $x_0$ and sends the class of every $x_i$, $i\ge1$, to $a\tilde x_i$. Here $H^{p,1,s}=H$ and $H^{p,j+1,s}=(H^{p,j,s})^{p^s}[H^{p,j,s},H]$, with closed generated subgroups.

*Proof.* Use the free operator-group presentation $G=F/(\varrho)$ from the tame-group-algebra theorem, with $F=P\rtimes\Gamma$ and
$$\varrho=A(x_0)x_1^{p^s}C,\qquad
A(x_0)=(x_0^\sigma)^{-1}(x_0,\tau)^\kappa.$$
The factors of $C$ are $[x_1,x_2],[x_3,x_4],\ldots$ for even $d$, and $[x_1,y_1],[x_2,x_3],\ldots$ for odd $d$. Set
$$N_s=P/P^{p,2,s},\qquad M=P^{p,2,s}/P^{p,3,s},\qquad
b(\tilde x,\tilde y)=[x,y]P^{p,3,s}.$$
The group $M$ is central in $P/P^{p,3,s}$, and both $N_s$ and $M$ are compact $\Lambda_s$-modules. The cited theorem's Lemma (b),(c) and [the mixing theorem](automorphisms-of-p-adic-galois-groups-mixing-complementary-and-surface-generators.md), Three facts (i),(ii), give
$$\ker\omega_s=u_s\Lambda_s=\Lambda_su_s,\qquad
b(\lambda x,\mu y)\equiv b(x,\lambda^*\mu y)\pmod{u_sM},\tag{2}$$
and a $\Lambda_s$-linear map $\wp:N_s\to M$, $\tilde x\mapsto x^{p^s}P^{p,3,s}$. This uses odd $p$; the class-two power correction is divisible by $p^s$.

Choose $v_i\in P$ with $\tilde v_i=a\tilde x_i$ for every $i\ge1$, and define $\psi_0:F\to F$ by fixing $\Gamma,x_0$ and sending $x_i$ to $v_i$. Such an endomorphism exists by the universal property of $F$.

The change in $x_1^{p^s}$ modulo $P^{p,3,s}$ is
$$(a-1)\wp(\tilde x_1)\in u_sM,$$
by (1),(2). For each ordinary pair, its commutator changes by
$$b(a\tilde x_i,a\tilde x_j)-b(\tilde x_i,\tilde x_j)
\equiv b(\tilde x_i,(a^*a-1)\tilde x_j)=0\pmod{u_sM}.$$
For odd $d$, the mixing theorem's proof of part 3 gives $\delta_s\in\Lambda_s$ with $\tilde y_1=\delta_s\tilde x_1$ for the presentation word $y_1$. Equivariance of $\psi_0$ gives $\widetilde{\psi_0(y_1)}=\delta_sa\tilde x_1$, and centrality of $a$ gives
$$b(a\tilde x_1,\delta_sa\tilde x_1)
\equiv b(\tilde x_1,a^*\delta_sa\tilde x_1)
=b(\tilde x_1,\delta_s\tilde x_1)\pmod{u_sM}.$$
Thus the full relator defect is an element $D\in u_sM$; all these defects add because $M$ is central and every relator factor lies in $P$.

Choose $w\in M$ with $u_sw=-D$, and $t\in P^{p,2,s}$ representing $w$. Replace $\psi_0(x_0)$ by $x_0t$, keeping the other images. The Computation of the tame-group-algebra theorem changes $A(x_0)$ by $u_sw$, so the resulting $\psi$ satisfies $\psi(\varrho)\equiv\varrho$ modulo $P^{p,3,s}$. On $P/\Phi(P)$ it fixes $\bar x_0$ and multiplies the other free generators by the unit $\bar a$. These images generate that module. The mixing theorem's lifting step, using [Wingberg's theorem for the $p^s$-central series](wingberg-lifting-for-the-p-s-central-series-of-wild-inertia.md), therefore gives the required automorphism of $G$. $\square$

**Proof of the theorem.**

*1. The unit over $\mathbb Z/p^s$.* Define $\varepsilon_{m,s}\in\Lambda_s$ by averaging over the image of $I_m$ in each finite quotient of $\Gamma$. These images have order prime to $p$, so their orders are units modulo $p^s$; the averages are compatible. Normality of $I_m$ makes this idempotent central. The character $\omega_s$ on $I$ has order dividing $p-1$, so it is trivial on $I_m$. Consequently
$$\omega_s(\varepsilon_{m,s})=1,\qquad
\varepsilon_{m,s}^*=\varepsilon_{m,s}.$$
For $a=2\varepsilon_{m,s}-1$ we obtain (1) and $a^2=1$.

Its reduction $z_m$ is nonconstant. Indeed $\omega(\varepsilon_m)=1$, whereas $\varepsilon_m\ne1$: choose a finite quotient of $\Gamma$ in which $I_m$ has nontrivial image. The coefficient of any nonidentity element of that image in its normalized average is nonzero in $\mathbb F_p$. Such a quotient exists since $I_m$ is nontrivial and $\Gamma$ is profinite. Thus $z_m\ne1$; since $\omega(z_m)=1$, it cannot be any other constant either.

*2. An actual involution.* Apply the lifting lemma to $a$. Let $f$ be the resulting automorphism of $G/P_K^{p,2,s}$. It fixes the tame generators and $\tilde x_0$, is $\Lambda_s$-linear on the abelian wild kernel, and sends $\tilde x_i$ to $a\tilde x_i$. Therefore $f^2=1$. It is nontrivial already on $V$, because $z_m\ne1$ and $\Lambda\bar x_1$ is free.

Take the inverse image $E$ of $\langle f\rangle$ in $\operatorname{Aut}(G)$. This is a closed profinite group, since $G$ is topologically finitely generated, and it lies in the tame-trivial automorphisms. Its kernel in
$$1\longrightarrow\operatorname{Aut}_{G/P_K^{p,2,s}}(G)
\longrightarrow E\longrightarrow\langle f\rangle\longrightarrow1$$
is pro-$p$ by Nishio's Theorem 1.2 [@nishio2026finite, Theorem 1.2, p. 6]. The splitting argument in his Corollary 1.4 applies to this very inverse image and supplies a subgroup mapping isomorphically onto $\langle f\rangle$ [@nishio2026finite, proof of Corollary 1.4, p. 7]. Its nonidentity element is the required involution $\alpha_m$. On $V$ it fixes $\bar x_0$ and scales every other summand by $z_m$. As $z_m$ acts on $L$ by $\omega(z_m)=1$, this is multiplication by $z_m$ on all of $V$.

*3. Centrality of the Frattini action.* Choose tame generators with $\sigma\tau\sigma^{-1}=\tau^q$. Their closed commutator subgroup is $(q-1)I$: the displayed commutator generates this subgroup topologically, and quotienting by it makes $\Gamma$ abelian. Also
$$I=\{g\in\Gamma:g^n\in[\Gamma,\Gamma]\text{ for some integer }n\ge1\}.$$
One inclusion follows by taking $n=q-1$; the other follows because $\Gamma/I\cong\widehat{\mathbb Z}$ is torsion-free. Hence $I$ and $I_m=mI$ are characteristic in $\Gamma$. Every automorphism $\beta$ of $G$ therefore induces an automorphism $\beta_\Gamma$ of $\Gamma$ fixing the Haar idempotent $\varepsilon_m$, and thus $z_m$. Its action $B$ on $V$ is semilinear:
$$B(\lambda v)=\beta_\Gamma(\lambda)B(v).$$
It follows that $B(z_mv)=z_mB(v)$, as claimed. $\square$

**Scope and checks.** This tests the proposed nonconstant torsion units in [the finite-outer-conjugacy question](central-scalars-in-finite-outer-conjugacy-on-wild-frattini.md), including for wildly ramified $K$. It shows that unitarity, cyclotomic evaluation one, and finite order do not force a central scalar to be one. Finite outer conjugacy is an additional condition on the lift, excluded by the boundary-twist theorem although invisible in the conjugation action on $V$ established here.

For $K=\mathbb Q_p(\mu_{p^2})$, this does not conflict with [the constant-scalar obstruction](ordinary-p-central-truncation-does-not-suffice-for-local-galois-lifting.md): $z_m$ is nonconstant. The construction uses the $p^s$-central series throughout, including the $p^s$-power factor of the relator. At $p=2$ the unit $2\varepsilon_m-1$ reduces to $1$, and the power-map argument above is unavailable. No assertion at that prime is made.

A small finite-quotient check is $p=q=3$, $m=2$, with tame quotient $C_4\rtimes C_2$ in which $\sigma$ inverts $\tau$. The image of $I_m$ is $\{1,\tau^2\}$, so $\varepsilon_{m,s}$ maps to $(1+\tau^2)/2$ and $a$ maps to the nontrivial central involution $\tau^2$, over every $\mathbb Z/3^s$.
