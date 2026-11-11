---
title: Odd residue degree forces large dyadic tame-shift count obstructions
kind: theorem
summary: 'For odd f at least 3, a smallest count obstruction to the tame Frobenius shift over U_f has order at least min over primes l dividing 2^f-1 of l times 2^(2 ord_l(2)+1). This gives 896 for f=3 and 63488 for f=5, using a bound for odd-order automorphisms fixing a 2-group centre.'
tags: [local-fields, galois-groups, embedding-problems, pro-p-groups]
edges:
  - {to: conjugacy-classes-of-finite-tame-markings, label: uses, note: 'A shift witness has a tame inertia image whose order shares a prime factor with 2^f-1.'}
  - {to: minimal-tame-lifting-count-obstructions-have-trivial-prime-to-p-core, label: uses, note: 'A smallest witness has trivial odd-order core.'}
  - {to: minimal-dyadic-count-obstructions-have-central-frattini-involutions, label: uses, note: 'Every minimal normal subgroup inside its two-core is central of order two.'}
  - {to: dyadic-central-frattini-counts-at-arbitrary-exponent, label: uses, note: 'Excludes the boundary example from actual count obstructions; it illustrates sharpness only of the group-theoretic lemma.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Gives residue-degree-dependent lower bounds for a smallest finite count witness, without constructing a lift or an obstruction.'}
---

**Setting.** Let $f\ge3$ be odd, let $U_f/\mathbb Q_2$ be unramified of degree $f$, and write $\pi:G_{U_f}\twoheadrightarrow\Gamma_f$ for its tame quotient. With tame generators satisfying $\sigma\tau\sigma^{-1}=\tau^{2^f}$, put $\alpha(\sigma)=\sigma\tau$ and $\alpha(\tau)=\tau$. For finite epimorphisms $a:H\twoheadrightarrow D$ and $q:\Gamma_f\twoheadrightarrow D$, write
$$
N(H,a;q)=\#\{F:G_{U_f}\twoheadrightarrow H:aF=q\pi\}.
$$
Maps are continuous and conjugate maps are counted separately. Write $R=O_2(H)$ for the largest normal $2$-subgroup of $H$.

**Theorem (proved here).** Suppose $\alpha$ does not lift to $G_{U_f}$, and choose a witness
$$N(H,a;q)\ne N(H,a;q\alpha)$$
with $|H|$ smallest among all targets and markings. There is a prime $\ell\mid 2^f-1$ such that, for $r=\operatorname{ord}_\ell(2)$,
$$
|R|\ge 2^{2r+1},\qquad
|H|\ge\ell\,2^{2r+1}.
\tag{1}
$$
Consequently every unequal-count witness has target order at least
$$
\min_{\substack{\ell\text{ prime}\\\ell\mid 2^f-1}}
\ell\,2^{2\operatorname{ord}_\ell(2)+1}.
\tag{2}
$$
For $f=3,5,7$ these bounds are respectively $896$, $63488$ and $4161536$. If $f$ is an odd prime, every $\operatorname{ord}_\ell(2)$ in (2) equals $f$.

**A group-theoretic lemma (proved here).** Let $S$ be a finite $2$-group with an automorphism $b$ of prime order $\ell>2$ that fixes $Z(S)$ pointwise. If $r=\operatorname{ord}_\ell(2)$ is odd, then
$$|S|\ge2^{2r+1}.$$

*Proof.* A nonidentity automorphism of order $\ell$ acts nontrivially on $S/\Phi(S)$. Indeed, if it acts trivially there, it permutes each $\Phi(S)$-coset, whose power-of-two cardinality is not divisible by $\ell$. Each coset therefore contains a fixed element. Fixed lifts of a basis generate $S$ by the Frattini property, forcing the automorphism to be the identity.

Every nontrivial irreducible $\mathbb F_2[C_\ell]$-module has dimension $r$: its eigenvalues are primitive $\ell$th roots, and their orbits under squaring have length $r$. Such a module is not self-dual when $r$ is odd. Otherwise an eigenvalue and its inverse would lie in the same orbit, giving $2^j\equiv-1\pmod\ell$ for some $j$, impossible in the odd-order subgroup $\langle2\rangle$. In particular, every invariant bilinear form from such a module to the trivial module $\mathbb F_2$ is zero.

Suppose, for a contradiction, that $|S|\le2^{2r}$. Put $V=S/\Phi(S)$, $t=\dim V$, and $|\Phi(S)|=2^s$. The preceding argument gives $t\ge r$, so $s\le r$. Also $S$ is nonabelian, since $b$ fixes its centre and is nonidentity; hence $s\ge1$ and $t<2r$.

We first show that $b$ fixes $\Phi(S)$ pointwise. If $s<r$, a nontrivial action on $\Phi(S)$ would, by the same Frattini argument, require at least $r$ generators for that group, contradicting its order. If $s=r$ and the action is nontrivial, the same argument forces $\Phi(S)$ to be elementary abelian of dimension $r$, with irreducible $b$-action. The fixed subspace $\Phi(S)^S$ is nonzero: a finite $2$-group acting on a nonzero $\mathbb F_2$-space has a nonzero fixed vector, by counting its orbits on the vector set. This fixed subspace is $b$-stable, so irreducibility makes it all of $\Phi(S)$. Then $\Phi(S)\subseteq Z(S)$, contradicting the nontrivial action there. Thus $b$ fixes $\Phi(S)$ in both cases.

Let $N=[S,b]=\langle x^{-1}b(x):x\in S\rangle$. It is normal in $S$ and $b$-stable, as follows from the identity
$$
(xy)^{-1}b(xy)=y^{-1}(x^{-1}b(x))y\,(y^{-1}b(y)).
$$
We need the identities
$$S=C_S(b)N,\qquad N=[N,b].\tag{3}$$
For the first, $b$ preserves every $N$-coset and its orbits have length one or $\ell$; each coset has a fixed representative. For the second, $M=[N,b]$ is normal in $N$ by the same identity and is normalized by $C_S(b)$. Thus it is normal in $S$. The automorphism $b$ fixes both $N/M$ and the image of $C_S(b)$, so it fixes $S/M$. This gives $N\subseteq M$, proving (3).

Since $b$ fixes $\Phi(S)$, the elements $x$ and $b(x)$ induce the same conjugation on $\Phi(S)$. Hence $N$ centralizes $\Phi(S)$. Put $K=N\cap\Phi(S)$, which is central in $N$ and fixed by $b$. The image $N/K$ is $(b-1)V$. Averaging over $C_\ell$ makes $V$ semisimple; since $r\le t<2r$, its nontrivial part is exactly one irreducible module of dimension $r$. Thus $N/K$ is that module.

Commutators give an invariant bilinear map
$$
(N/K)\times(N/K)\longrightarrow\Omega_1(K),
\qquad (xK,yK)\longmapsto[x,y],
\tag{4}
$$
where $\Omega_1$ denotes the elements of order dividing two. Indeed $K$ is central in $N$, $[N,N]\subseteq K$, and $x^2\in K$ gives $[x,y]^2=[x^2,y]=1$. The target in (4) is fixed by $b$. Non-self-duality, applied to each $\mathbb F_2$ coordinate of the target, makes (4) zero. Therefore $N$ is abelian.

Now $N=[N,b]$ says that $b-1$ is surjective on the finite abelian group $N$, hence injective. Since $K$ is fixed, $K=1$. Normality of $N$ gives $[N,S]\subseteq N\cap\Phi(S)=1$, so $N\subseteq Z(S)$. But $b$ fixes $Z(S)$ and $N=[N,b]\ne1$, a contradiction. This proves the lemma. $\square$

**Proof of the theorem.** The [prime-to-two-core theorem](minimal-tame-lifting-count-obstructions-have-trivial-prime-to-p-core.md) gives $R\ne1$ and $O_{2'}(H)=1$. The [minimal-normal-subgroup theorem](minimal-dyadic-count-obstructions-have-central-frattini-involutions.md) says that every minimal nontrivial normal subgroup of $H$ contained in $R$ is central of order two.

Put $m=|q(\tau)|$. By the [conjugacy classification of tame markings](conjugacy-classes-of-finite-tame-markings.md), an unequal count for the unit shift requires $\gcd(m,2^f-1)>1$. Choose a prime $\ell$ dividing this gcd. At least one count is positive. Choose a surjection $F$ from that count, and let $q_*$ be its marking, either $q$ or $q\alpha$. Both have the same inertia image.

Since $F(P)\subseteq R$ for wild inertia $P$, the induced map to $B=H/R$ factors as $t\pi$ for an epimorphism $t:\Gamma_f\twoheadrightarrow B$. Thus $C=t(I)$ is cyclic, normal and of odd order. The marking $a$ induces $B\to D/a(R)$, and $a(R)$ is a $2$-group. Its intersection with the odd-order group $q_*(I)$ is trivial. Consequently $\ell\mid|C|$.

Let $E\triangleleft H$ be the inverse image of the unique subgroup of order $\ell$ in $C$. A Sylow $\ell$-subgroup $A$ of $E$ has order $\ell$, and $E=R\rtimes A$. Its action on $R$ is nontrivial: otherwise $E=R\times A$, whose unique Sylow $\ell$-subgroup is characteristic in $E$ and hence normal in $H$, contradicting $O_{2'}(H)=1$.

We claim that $A$ fixes $Z=Z(R)$ pointwise. The action of $E/R$ on $Z$ is well-defined because $R$ centralizes $Z$. As $E\triangleleft H$, the image of $E/R$ in $\operatorname{Aut}(Z)$ is normalized by $H$. On the finite abelian $2$-group $Z$, let
$$e=\ell^{-1}\sum_{a\in A}a,\qquad W=(1-e)Z,$$
where multiplication by odd $\ell$ is invertible. Averaging gives $W^A=0$, and $W$ is $H$-stable since $H$ normalizes the action of $A$. If $W\ne0$, it contains a minimal nontrivial normal subgroup of $H$. This subgroup lies in $R$, so it is central in $H$, contradicting $W^A=0$. Thus $W=0$, proving the claim.

A generator of $A$ therefore acts on $R$ with order $\ell$ and fixes its centre. Since $\ell\mid2^f-1$, the integer $r=\operatorname{ord}_\ell(2)$ divides odd $f$. The lemma gives $|R|\ge2^{2r+1}$. Also $\ell\mid[H:R]$, proving (1). The bound (2) follows for a smallest witness, hence for every witness. When $f$ is prime, $r\mid f$ and $r\ne1$, giving $r=f$. The displayed numerical bounds follow from $2^3-1=7$, $2^5-1=31$ and $2^7-1=127$. $\square$

**Checks and scope.** The lemma needs both odd $r$ and the fixed-centre hypothesis. Cycling the quaternion directions gives an automorphism of $Q_8$ of order three fixing its centre, but $\operatorname{ord}_3(2)=2$ is even. Multiplication by a nonidentity element of $\mathbb F_8^\times$ acts with order seven on the additive group of $\mathbb F_8$, of order eight, but does not fix its centre.

The group-theoretic threshold $128$ for $\ell=7$ is attained. On $S=\mathbb F_8\times\mathbb F_8\times\mathbb F_2$, use the multiplication
$$
(x,y,z)(x',y',z')=(x+x',y+y',z+z'+\operatorname{Tr}_{\mathbb F_8/\mathbb F_2}(xy')).
$$
Bilinearity gives associativity. Nondegeneracy of the trace pairing gives $Z(S)=\{(0,0,z)\}$, and squares and commutators give $\Phi(S)=Z(S)$. For $\lambda\in\mathbb F_8^\times$ of order seven, $(x,y,z)\mapsto(\lambda x,\lambda^{-1}y,z)$ is an automorphism of order seven fixing the centre. Nevertheless $S\rtimes C_7$, of order $896$, is excluded from actual count obstructions by the [central-Frattini count theorem](dyadic-central-frattini-counts-at-arbitrary-exponent.md). Thus sharpness of the group lemma asserts no witness at the numerical boundary.

The minimal-target hypotheses are essential to the proof. No claim that every larger witness has trivial odd-order core or a centre-fixing inertia action is made. The result gives no bound for even $f$, no unequal count and no full lift; the Frobenius-shift and dyadic classification problems remain open.
