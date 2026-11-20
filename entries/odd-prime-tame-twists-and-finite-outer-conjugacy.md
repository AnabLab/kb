---
title: Tame twists and finite outer conjugacy for every odd residue characteristic
kind: theorem
summary: 'For odd p and [K:Q_p] at least three, finite outer conjugacy forces a tame twist to be a power of p. A finite-order automorphism is the identity. Finite normal outer subgroups have order prime to p, and a distinct normal copy of G_K cannot meet it openly.'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: tame-twists-of-automorphisms-with-finitely-many-outer-conjugates, label: generalizes, note: 'Extends the tame-twist restriction from p at least five to every odd p.'}
  - {to: tame-twists-of-automorphisms-with-finitely-many-outer-conjugates, label: uses, note: 'For p at least five, its theorem. For p = 3, only its Setting, idempotent properties (i)-(v), and Step 1 of the proof of part 1, whose argument works for every odd p.'}
  - {to: tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups, label: uses, note: 'Parts 1-3 give the free surface summands and the automorphisms associated to arbitrary units, acting by right multiplication by lambda and by (lambda*) inverse.'}
  - {to: tame-trivial-automorphisms-with-finite-outer-conjugacy-act-trivially-on-wild-frattini, label: uses, note: 'Its finite-order consequence excludes a tame-trivial finite-order automorphism with finite outer conjugacy.'}
  - {to: finite-normal-subgroups-of-p-adic-outer-automorphism-groups, label: uses, note: 'Part 3(a) lifts an order-p outer class with finitely many conjugates to an automorphism of order p.'}
  - {to: rival-copies-of-p-adic-galois-groups-with-index-prime-to-p, label: uses, note: 'Its Setting identifies the intersection index with the order of a finite normal outer subgroup; part 4 gives tame-trivial finite-order representatives once that index is prime to p.'}
  - {to: prime-to-p-tame-trivial-finite-outer-conjugacy, label: resolves, note: 'Conclusion 1 excludes every nonidentity finite-order automorphism with finite outer conjugacy in the stated range, in particular the prime-to-p tame-trivial case.'}
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: addresses, note: 'Excludes a distinct normal copy meeting G_K openly for every odd p and degree at least three; infinite-index intersection remains open.'}
---

**Setting.** Let $p$ be odd, $K/\mathbb Q_p$ finite of degree $d\ge3$, $G=G_K$, $P$ its wild inertia, $\Gamma=G/P$, and $I=\overline{\langle\tau\rangle}\cong\prod_{\ell\ne p}\mathbb Z_\ell$ its tame inertia. Use the notation of [tame twists](tame-twists-of-automorphisms-with-finitely-many-outer-conjugates.md). Thus $\Gamma$ has generators $\sigma,\tau$, with $\sigma\tau\sigma^{-1}=\tau^q$, where $q$ is the residue cardinality. An automorphism $\theta$ of $G$ induces $\beta=\beta_{u,a}$ on $\Gamma$, with $\beta(\tau)=\tau^u$ and $\beta(\sigma)=\sigma\tau^a$. Its *tame twist* is $u\in(\prod_{\ell\ne p}\mathbb Z_\ell)^\times$.

Put $\Lambda=\mathbb F_p[[\Gamma]]$ and $V=P/\Phi(P)$. The action $A$ of $\theta$ on $V$ is semilinear: $A(\lambda v)=\beta_\Lambda(\lambda)A(v)$. The [unit theorem](tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups.md) supplies a surface pair with free summands $\Lambda e_s,\Lambda e_t$ and a decomposition
$$V=W\oplus\Lambda e_s\oplus\Lambda e_t.$$
For every $\lambda\in\Lambda^\times$ it supplies a tame-trivial automorphism whose action $\Theta_\lambda$ fixes $W$ and sends
$$b e_s\longmapsto b\lambda e_s,\qquad b e_t\longmapsto b(\lambda^*)^{-1}e_t.$$
Here $\rho^*=\omega(\rho)\rho^{-1}$, with $\omega$ the character on $\mu_p$. These are right multiplications on the coefficient $b$; $\lambda$ need not be central.

**Theorem (proved here).** If the class of $\theta\in\operatorname{Aut}(G)$ has finitely many conjugates in $\operatorname{Out}(G)$, then
$$u\in\overline{\langle p\rangle}=\{p^\nu:\nu\in\widehat{\mathbb Z}\}.$$
Consequently:

1. Every finite-order automorphism of $G$ with finitely many outer conjugates is the identity.
2. No nonidentity element of $p$-power order in $\operatorname{Out}(G)$ has finitely many conjugates. Every finite normal subgroup of $\operatorname{Out}(G)$ has order prime to $p$.
3. If $N\subseteq\operatorname{Aut}(G)$ is a closed normal subgroup isomorphic to $G$ and $N\cap G$ is open in $G=\operatorname{Inn}(G)$, then $N=G$.

**Proof of the tame-twist restriction.** For $p\ge5$ this is part 1 of the tame-twist theorem. We prove the remaining case $p=3$.

*1. A finite-index family of commuting actions.* Step 1 of that theorem's proof uses only the unit theorem and $Z(\Gamma)=1$, so it applies at $p=3$. It gives a subgroup $L_0\subseteq\Lambda^\times$ of finite index such that
$$A\Theta_\lambda=\Theta_\lambda A\qquad(\lambda\in L_0).\tag{1}$$
Indeed, stabilize the outer class of $\theta$ modulo $\Phi(P)$ under the subgroup formed by the unit automorphisms. For an element in the stabilizer the commutator is inner. Both compositions induce $\beta$ on $\Gamma$, so the conjugating element has central image in $\Gamma$ and therefore lies in $V$. Its conjugation acts trivially on the abelian group $V$, giving (1). The anti-homomorphism $\lambda\mapsto\bar\psi_\lambda$ of the unit theorem pulls this stabilizer back to a subgroup of finite index.

*2. Characters with distinct reciprocal orbits.* Suppose $u\notin\overline{\langle3\rangle}$. Choose $m_0$ prime to $3$ with $u\bmod m_0\notin\langle3\bmod m_0\rangle$.

There are infinitely many odd primes $\ell$ for which $\operatorname{ord}_\ell(3)$ is odd. To see this, for each odd prime $r$ take a prime divisor $\ell$ of $(3^r-1)/2$. This integer is odd and prime to $3$, and $\operatorname{ord}_\ell(3)$ divides $r$. Order one would force $\ell\mid2$, so the order equals $r$. Distinct $r$ give distinct such primes. Choose distinct $\ell_j\nmid6m_0$ with this property, and put $M_j=m_0\ell_j$.

Choose a character $\chi_j:I\to\overline{\mathbb F}_3^\times$ of order $M_j$ and let $O_j=\{\chi_j^{3^b}:b\ge0\}$. Write $O^{-1}=\{\chi^{-1}:\chi\in O\}$. Then $O_j\cap O_j^{-1}=\varnothing$: an intersection would give $3^b\equiv-1\pmod{\ell_j}$ for some $b$, impossible in the subgroup of odd order generated by $3$ modulo $\ell_j$. Orbits or reciprocal orbits with different indices are disjoint, since their characters have different orders $M_j$.

Let $h_j=h_{O_j}$ be the central idempotent constructed in the tame-twist entry. Its properties give
$$h_j\ne0,\quad h_jh_k=0\ (j\ne k),\quad h_j^*=h_{O_j^\vee},\quad O_j^\vee=\{\omega|_I\chi^{-1}:\chi\in O_j\}.$$
Also $\beta_\Lambda(h_j)=h_{\{\chi^{u^{-1}}:\chi\in O_j\}}$, so
$$\beta_\Lambda(h_j)h_j=0.\tag{2}$$
Otherwise equality of two characters in these orbits would give $u\equiv3^b\pmod{M_j}$ for some integer $b$, contradicting the choice of $m_0$.

*3. Units and a polynomial kernel.* Put
$$\lambda_j=1-h_j+\tau h_j\in\Lambda^\times,\qquad\lambda_j^{-1}=1-h_j+\tau^{-1}h_j.$$
There are distinct $j,k$ with $\lambda_jL_0=\lambda_kL_0$, since $L_0$ has finite index. Therefore
$$\nu=\lambda_j^{-1}\lambda_k=1-h_j-h_k+\tau^{-1}h_j+\tau h_k\in L_0.$$
Writing $w=\omega(\tau)$, the coefficient for the partner summand is
$$ (\nu^*)^{-1}=1-h_j^*-h_k^*+w\tau^{-1}h_j^*+w^{-1}\tau h_k^*.$$

For any finite Frobenius orbit $O$ of characters of $I$, define
$$f_O(T)=\prod_{\chi\in O}(T-\chi(\tau))\in\mathbb F_3[T].$$
This polynomial is irreducible, since its roots are one Frobenius orbit. Character evaluation in the finite cyclic inertia quotients defining $h_O$ gives $f_O(\tau)h_O=0$. Thus right multiplication by $\tau$ on $h_O\Lambda$ is annihilated by $f_O$; this assertion does not require $\tau$ to be central in $\Lambda$.

The following table lists annihilating polynomials for $\Theta_\nu$ on its invariant summands:

| Summand | Annihilating polynomial |
|---|---|
| $h_j\Lambda e_s$ | $f_{O_j^{-1}}$ |
| $h_k\Lambda e_s$ | $f_{O_k}$ |
| $h_j^*\Lambda e_t$ | $f_{O_j}$ |
| $h_k^*\Lambda e_t$ | $f_{O_k^{-1}}$ |
| $W\oplus(1-h_j-h_k)\Lambda e_s\oplus(1-h_j^*-h_k^*)\Lambda e_t$ | $T-1$ |

For example, a character on $h_j^*$ is $\psi=\omega|_I\chi^{-1}$ with $\chi\in O_j$, and the multiplier $w\tau^{-1}$ evaluates to $w\psi(\tau)^{-1}=\chi(\tau)$. This gives the third row; the other rows follow in the same way. The five displayed summands form a direct sum decomposition of $V$.

By step 2, $f_{O_j^{-1}}$ is coprime to each polynomial in the other rows, including $T-1$. Bezout's identity makes $f_{O_j^{-1}}(\Theta_\nu)$ invertible on each of those other summands. Hence its kernel is exactly
$$E=\ker f_{O_j^{-1}}(\Theta_\nu)=h_j\Lambda e_s.\tag{3}$$
This uses polynomial identities on compact modules, rather than a finite-dimensional diagonalization.

*4. Contradiction.* By (1), the $\mathbb F_3$-linear map $A$ preserves $E$. Take the nonzero vector $v=h_je_s\in E$. Semilinearity and $h_jv=v$ give $A(v)=\beta_\Lambda(h_j)A(v)$. But $A(v)\in h_j\Lambda e_s$ by (3), so (2) gives $A(v)=0$, contradicting injectivity. Thus $u\in\overline{\langle3\rangle}$. $\square$

**Proof of the consequences.** If $\theta$ has finite order $n$, write $u=p^\nu$. The injectivity of $\nu\mapsto p^\nu$ from the tame-twist Setting gives $n\nu=0$ from $u^n=1$, hence $u=1$. The composition rule for $\beta_{u,a}$ now gives $\beta^n=\beta_{1,na}=1$, hence $a=0$ since $\prod_{\ell\ne p}\mathbb Z_\ell$ is torsion-free. Thus $\theta$ is tame-trivial. The finite-order consequence of [shear vanishing](tame-trivial-automorphisms-with-finite-outer-conjugacy-act-trivially-on-wild-frattini.md) gives $\theta=1$, proving conclusion 1.

If an outer class $f$ of order $p^b>1$ has finitely many conjugates, then $f^{p^{b-1}}$ has order $p$ and finitely many conjugates. Part 3(a) of [finite normal subgroups](finite-normal-subgroups-of-p-adic-outer-automorphism-groups.md) supplies a representative of order $p$ in $\operatorname{Aut}(G)$. Conclusion 1 excludes it. Cauchy's theorem then excludes a finite normal outer subgroup of order divisible by $p$, proving conclusion 2.

For conclusion 3, suppose $N\ne G$. The Setting of [rival copies with prime-to-$p$ index](rival-copies-of-p-adic-galois-groups-with-index-prime-to-p.md) gives a finite normal subgroup $NG/G$ of $\operatorname{Out}(G)$ of order $[G:N\cap G]>1$. Conclusion 2 makes this index prime to $p$. Part 4 there then supplies a nonidentity tame-trivial automorphism of finite order whose outer class lies in $NG/G$ and therefore has finitely many conjugates. Conclusion 1 again gives a contradiction. $\square$

**Scope.** At $p=3$ the constant scalars have only the values $1,-1$, so they cannot distinguish a scalar from its inverse in the earlier tame-twist proof. The units above instead give distinct reciprocal irreducible polynomials. For example, $3$ has order three modulo $13$, and the inverse of the orbit $\{1,3,9\}$ of exponents is the disjoint orbit $\{12,10,4\}$.

The theorem leaves open rival copies with infinite-index intersection, finite outer classes of order prime to $p$ without finite-order representatives, and whether a tame-trivial automorphism with finite outer conjugacy must be inner. It does not settle [Tsujimura's full question](p-adic-galois-groups-in-their-automorphism-groups.md). Degree at most two and $p=2$ are outside the statement. The proof and its consequences are established here from the linked entries; no novelty is claimed.
