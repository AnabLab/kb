---
title: Ordinary p-central truncation does not suffice for local Galois lifting
kind: theorem
summary: 'For odd p and K = Q_p(mu_{p^2}), an involution of G_K/P^(3) over the tame quotient has no lift to G_K even modulo P^(2), for the ordinary p-central series of wild inertia. The lifting theorem instead uses the p^s-central series.'
tags: [local-fields, galois-groups, pro-p-groups, embedding-problems]
edges:
  - {to: local-galois-group-presentations, label: uses, note: 'The even-degree Jannsen–Wingberg presentation, with trivial tame action on the p-power roots of unity and the constant lift of that action.'}
  - {to: p-adic-cyclotomic-tower, label: uses, note: 'Its finite-layer ramification formula gives degree p(p-1) and exactly p^2 roots of p-power order in the tame closure of Q_p(mu_{p^2}).'}
  - {to: finite-subgroups-of-p-adic-outer-automorphism-groups, label: uses, note: 'Only its account of the correct lifting theorem: the filtration is the p^s-central series [@nishio2026finite, Proposition 2.6, p. 11].'}
  - {to: finite-order-local-galois-automorphisms-detected-on-the-frattini-quotient-of-wild-inertia, label: uses, note: 'Only part 2, in the corollary: a finite-order automorphism trivial on wild Frattini is the identity.'}
  - {to: tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups, label: refutes, note: 'Only the general lifting assertion in its proof of part 2 with the ordinary p-central series at arbitrary s; this does not refute the surface-unit conclusion.'}
  - {to: automorphisms-of-p-adic-galois-groups-mixing-complementary-and-surface-generators, label: refutes, note: 'Only its general A lifting step using the ordinary p-central series when s exceeds one; this does not refute the stated mixing conclusions.'}
  - {to: central-scalars-in-finite-outer-conjugacy-on-wild-frattini, label: addresses, note: 'An obstruction to using the ordinary third wild quotient to test central scalar candidates; its unit and mixing inputs invoke the lifting assertion refuted here.'}
---

**Setting and source distinction.** Let $p$ be odd, $K=\mathbb Q_p(\mu_{p^2})$, $G=G_K$, and $P$ its wild inertia. Put
$$P^{(1)}=P,\qquad P^{(i+1)}=(P^{(i)})^p[P^{(i)},P],$$
with closed generated subgroups. This is the ordinary $p$-central series. The lifting theorem uses instead $P^{p,1,s}=P$ and
$$P^{p,i+1,s}=(P^{p,i,s})^{p^s}[P^{p,i,s},P],$$
where $p^s=|\mu_{p^\infty}(K^{\mathrm{tr}})|$: an automorphism over the tame quotient at level $P^{p,3,s}$ is realized by an automorphism of $G$ at level $P^{p,2,s}$ [@nishio2026finite, §0, p. 4; Proposition 2.6, p. 11]. Here $s=2$. Indeed, cyclotomic layers over $\mathbb Q_p$ are totally ramified of degree $p^{m-1}(p-1)$, so adjoining $\mu_{p^3}$ to $K$ is wild of degree $p$ [@fesenkovostokov2002, Chapter IV, (1.3), pp. 113–114].

**Theorem (proved here).** There is an involution $\jmath$ of $G/P^{(3)}$ inducing the identity on $G/P$ such that no automorphism of $G$ agrees with $\jmath$ on $G/P^{(2)}$.

**Proof.** Write $d=p(p-1)$. The [Jannsen–Wingberg presentation](local-galois-group-presentations.md), choosing the constant lift $1$ of the trivial tame character on $\mu_{p^2}$, gives generators $\sigma,\tau,x_0,\ldots,x_d$, the tame relation, the pro-$p$ normal-closure condition, and
$$\sigma x_0\sigma^{-1}=(x_0\tau)^\pi x_1^{p^2}C,
\qquad C=[x_1,x_2]\cdots[x_{d-1},x_d].\tag{1}$$
Here $[a,b]=aba^{-1}b^{-1}$ and $\pi$ has $p$-component $1$ and all other components $0$. The presentation allows this choice of lift [@jannsenwingberg1982, §1.2, p. 74; Theorem 2, p. 75; §1.4(a), p. 76].

*1. The quotient involution.* In the free semidirect product preceding (1), fix $\sigma,\tau,x_0$ and replace every $x_i$, $i\ge1$, by $x_i^{-1}$. Its pro-$p$ kernel will be denoted $P_0$. The universal property gives an involution of that semidirect product. Modulo $P_0^{(3)}$, commutators in $P_0$ are central,
$$[x_i^{-1},x_j^{-1}]=[x_i,x_j],\qquad x_1^{p^2}=1.$$
Thus the substitution preserves the relator modulo $P_0^{(3)}$ and descends to $\jmath$ on $G/P^{(3)}$. It is nontrivial: the character sending $x_1$ to $1\in\mathbb F_p$ and all other generators to $0$ respects (1), and detects inversion on $G/P^{(2)}$.

*2. A necessary condition in the maximal pro-$p$ quotient.* The maximal pro-$p$ quotient $D=G(p)$ has presentation
$$D=F/N,\qquad N=\overline{\langle\!\langle r\rangle\!\rangle},
\qquad r=(t x_0t^{-1})^{-1}x_0x_1^{p^2}C,\tag{2}$$
where $F$ is free pro-$p$ on $t,x_0,\ldots,x_d$. Indeed, $\tau$ has order prime to $p$ and disappears in every pro-$p$ quotient; (1) then becomes (2). Conversely, the group (2) satisfies all the defining conditions after setting $\sigma=t$ and $\tau=1$, so it is the maximal pro-$p$ quotient.

Let $E=F/\Phi(F)$ with basis $e_t,e_0,\ldots,e_d$, and set
$$R=-e_t\wedge e_0+\sum_{j=1}^{d/2}e_{2j-1}\wedge e_{2j}\ne0.$$
Consider the finite group $Q=E\oplus\bigwedge^2E$ with multiplication
$$ (v,w)(v',w')=(v+v',w+w'+\tfrac12v\wedge v').$$
It has exponent $p$ and class two, and commutator $(0,v\wedge v')$. Send each free generator to its basis vector with second coordinate zero. The resulting homomorphism $\vartheta:F\to Q$ sends $r$ to $(0,R)$, since $x_1^{p^2}$ disappears. Hence $\vartheta(N)$ is the central line generated by $(0,R)$.

Use the same basis symbols for the corresponding $\mathbb Z_p$-basis of $F^{\mathrm{ab}}$. There the relator has image $p^2e_1$, so the image of $N$ is exactly $p^2\mathbb Z_pe_1$. Define $a:N\to\mathbb Z_p$ by $n^{\mathrm{ab}}=p^2a(n)e_1$. Both $a\bmod p$ and the coefficient of $R$ in $\vartheta|_N$ are continuous homomorphisms invariant under conjugation by $F$, and take value $1$ on $r$. They therefore agree on its closed normal closure:
$$\vartheta(n)=(0,(a(n)\bmod p)R)\qquad(n\in N).\tag{3}$$

*3. The contradiction.* Suppose an automorphism of $G$ agreed with $\jmath$ modulo $P^{(2)}$. Its induced automorphism of $D$ acts on $D/\Phi(D)=E$ by
$$e_t\mapsto e_t,\qquad e_0\mapsto e_0,\qquad
e_i\mapsto-e_i\quad(i\ge1),\tag{4}$$
since the image of $P^{(2)}$ lies in $\Phi(D)$. Lift the images of the free generators to obtain an endomorphism $\psi:F\to F$ inducing this automorphism of $D$. Then $\psi(r)\in N$. Abelianizing (2) gives
$$\psi(r)^{\mathrm{ab}}=p^2\psi(x_1)^{\mathrm{ab}},$$
so (4) gives $a(\psi(r))\equiv-1\pmod p$. But (4) preserves every wedge in $R$. Central corrections to generator images in $Q$ do not affect commutators, and all $p^2$-powers vanish there. Thus $\vartheta(\psi(r))=(0,R)$, contradicting (3), since $1\ne-1$ for odd $p$. $\square$

**Corollary (proved here).** For this $K$, use $V=P/P^{(2)}$, $L=\mathbb F_p\bar x_0$ and $W=V/L$ as in the [central-scalar entry](central-scalars-in-finite-outer-conjugacy-on-wild-frattini.md). Suppose $\alpha\in\operatorname{Aut}(G)$ is tame-trivial, preserves $L$, and acts on $W$ by a constant scalar $\lambda\in\mathbb F_p^\times$. Then $\lambda=1$ and $\alpha|_L=1$. If $\alpha$ has finite order prime to $p$, it is the identity. No finite outer-conjugacy hypothesis is needed for this corollary.

*Proof.* Write $\alpha|_L=c$. Its induced action on $E$ has the shape
$$e_t\mapsto e_t+v,\quad e_0\mapsto ce_0,\quad
e_i\mapsto\lambda e_i+\ell_i e_0\ (i\ge1),$$
where $v$ is in the span of $e_0,\ldots,e_d$. Lift it to $\psi:F\to F$ as above. Put $m=a(\psi(r))\bmod p$. Equation (3) gives $(\bigwedge^2\psi)R=mR$. Comparing the $e_t\wedge e_0$ coefficient gives $m=c$, and comparing $e_1\wedge e_2$ gives $m=\lambda^2$. Abelianizing $\psi(r)$ as before gives $m=\lambda$. Thus $\lambda^2=\lambda$, so $\lambda=c=1$. On $V$, $B=\alpha-1$ now has image in $L$ and kills $L$, so $B^2=0$. If the order is $r$ prime to $p$, $(1+B)^r=1+rB$ forces $B=0$. The [finite-order detection theorem](finite-order-local-galois-automorphisms-detected-on-the-frattini-quotient-of-wild-inertia.md), part 2, then gives $\alpha=1$. $\square$

**Scope.** This refutes the ordinary-$p$ general lifting step in the [surface-unit proof](tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups.md) and in the [mixing proof](automorphisms-of-p-adic-galois-groups-mixing-complementary-and-surface-generators.md) when $s>1$. Those conclusions may admit proofs with the correct filtration; the counterexample does not decide them. When $s=1$ the two filtrations coincide. The quotient involution has $c=1$ and $z=-1$, while the corollary excludes any actual tame-trivial automorphism with $z=-1$ for this $K$, even allowing shears into $L$ and changes to the tame lifts. Arbitrary central units $z\in Z(\mathbb F_p[[G/P]])^\times$ remain untreated, and no answer to the rival-copy problem is asserted.
