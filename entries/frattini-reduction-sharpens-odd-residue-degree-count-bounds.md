---
title: Frattini reduction sharpens odd-residue-degree count bounds
kind: theorem
summary: 'For odd f at least 3, every unequal marked count for the Frobenius shift over U_f needs target order at least min over primes l dividing 2^f-1 of l times 2^(2 ord_l(2)+2). Frattini reduction doubles the earlier bound, giving 1792 for f=3 and 126976 for f=5.'
tags: [local-fields, galois-groups, embedding-problems, group-theory]
edges:
  - {to: odd-residue-degree-tame-shifts-require-large-count-obstructions, label: uses, note: 'Its proof supplies a prime l dividing 2^f-1, the bound on the two-core, and divisibility of its index by l.'}
  - {to: abelian-moving-frattini-kernels-give-dyadic-count-invariance, label: uses, note: 'Excludes the boundary target when its Sylow two-subgroup has abelian Frattini subgroup.'}
  - {to: dyadic-count-invariance-for-actions-fixing-frattini-subgroups, label: uses, note: 'Excludes the other boundary case, where the prime-order complement fixes the Frattini subgroup pointwise.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Doubles the known odd-residue-degree target-order bound; gives neither an unequal count nor a full lift.'}
---

**Setting.** Let $f\ge3$ be odd, let $U_f/\mathbb Q_2$ be unramified of degree $f$, and let $\pi:G_{U_f}\twoheadrightarrow\Gamma_f$ be its tame quotient. For tame generators with $\sigma\tau\sigma^{-1}=\tau^{2^f}$, put $\alpha(\sigma)=\sigma\tau$ and $\alpha(\tau)=\tau$. For finite epimorphisms $a:H\twoheadrightarrow D$ and $q:\Gamma_f\twoheadrightarrow D$, write
$$
N(H,a;q)=\#\{F:G_{U_f}\twoheadrightarrow H:aF=q\pi\}.
$$
All maps are continuous, and actual maps, including conjugates, are counted separately.

**Theorem (proved here).** Every unequal-count witness
$$N(H,a;q)\ne N(H,a;q\alpha)$$
has
$$
|H|\ge B_f:=
\min_{\substack{\ell\text{ prime}\\\ell\mid2^f-1}}
\ell\,2^{2\operatorname{ord}_\ell(2)+2}.
\tag{1}
$$
In particular $B_3=1792$, $B_5=126976$, and $B_7=8323072$.

**Frattini lemma (proved here).** Let $\ell>2$ be prime and suppose $r=\operatorname{ord}_\ell(2)$ is odd. If a finite $2$-group $S$ with $|S|\le2^{2r+1}$ has an automorphism $b$ of order $\ell$, then either $b$ fixes $\Phi(S)$ pointwise or $\Phi(S)$ is abelian.

*Proof.* First, an automorphism of order $\ell$ of any finite $2$-group $A$ acts nontrivially on $A/\Phi(A)$. Otherwise each $\Phi(A)$-coset is stable under the automorphism. Its orbits have sizes one or $\ell$, while its cardinality is a power of two, so it contains a fixed element. Fixed lifts of a basis of $A/\Phi(A)$ generate $A$, forcing the automorphism to be the identity.

Every nontrivial irreducible $\mathbb F_2[C_\ell]$-module has dimension $r$: its eigenvalues are primitive $\ell$th roots, whose orbits under squaring have length $r$. Such a module $V$ is not isomorphic to $V^*$. An isomorphism would put an eigenvalue and its inverse in the same squaring orbit, giving $2^j\equiv-1\pmod\ell$ for some $j$. This is impossible because $\langle2\bmod\ell\rangle$ has odd order. Consequently every invariant bilinear form $V\times V\to\mathbb F_2$ is zero: a nonzero form would give an isomorphism $V\to V^*$ by irreducibility. Also $r\ge3$, since $r=1$ would require $\ell\mid2-1$.

We claim that a finite $2$-group $A$ of order at most $2^{r+1}$ admitting an automorphism of order $\ell$ is abelian. Put $t=\dim_{\mathbb F_2}A/\Phi(A)$. The first paragraph and semisimplicity give $t\ge r$. Semisimplicity here follows by averaging a linear projection over the odd-order group $C_\ell$. Thus $|\Phi(A)|\le2$. If $\Phi(A)=1$, the group is elementary abelian. Otherwise $\Phi(A)=C_2$ is central, $t=r$, and $A/\Phi(A)$ is irreducible. Commutators give an invariant bilinear form
$$
(A/\Phi(A))\times(A/\Phi(A))\longrightarrow\Phi(A)=\mathbb F_2.
$$
The target is fixed because $C_2$ has no nonidentity automorphism. The form is well-defined since $\Phi(A)$ is central; it is bilinear since all commutators lie in that central subgroup of exponent two. The preceding paragraph makes it zero, proving the claim.

Now apply the first paragraph to $S$. It gives $\dim S/\Phi(S)\ge r$, hence $|\Phi(S)|\le2^{r+1}$. If the restriction of $b$ to $\Phi(S)$ is nontrivial, it has order $\ell$, and the claim with $A=\Phi(S)$ makes $\Phi(S)$ abelian. Otherwise the restriction is the identity. This proves the lemma. $\square$

**Count consequence of the lemma.** Let $k/\mathbb Q_2$ be any finite extension and $H=S\rtimes C_\ell$ with $|S|\le2^{2r+1}$ and odd $r=\operatorname{ord}_\ell(2)$. Every tame automorphism preserves every marked surjection count to $H$. For a trivial action, the complement fixes $\Phi(S)$. For a nontrivial action, a generator acts with order $\ell$, and the lemma gives either pointwise fixation or abelianness of $\Phi(S)$. The [fixed-Frattini theorem](dyadic-count-invariance-for-actions-fixing-frattini-subgroups.md) handles the first alternative; the [abelian moving-kernel theorem](abelian-moving-frattini-kernels-give-dyadic-count-invariance.md) handles the second, since the normal closure of the moving differences is then contained in the abelian subgroup $\Phi(S)$. Both theorems include every tame marking and zero counts.

**Proof of (1).** If any unequal-count witness exists, choose one with $|H|$ minimal among all targets and markings. Put $R=O_2(H)$. The proof of the [earlier odd-residue-degree bound](odd-residue-degree-tame-shifts-require-large-count-obstructions.md), specifically its construction of the prime-order inertia complement, supplies a prime $\ell\mid2^f-1$ such that
$$
r=\operatorname{ord}_\ell(2)\mid f,\qquad
|R|\ge2^{2r+1},\qquad \ell\mid[H:R].
\tag{2}
$$
In particular $r$ is odd. Suppose $|H|<\ell\,2^{2r+2}$. Since $|R|$ is a power of two, (2) forces $|R|=2^{2r+1}$ and $[H:R]=\ell$: the next possible power of two for $|R|$, or the next positive multiple of $\ell$ for the index, already reaches the proposed bound. An element of order $\ell$ exists by Cauchy's theorem, intersects $R$ trivially, and maps onto $H/R$. Hence $H=R\rtimes C_\ell$. The count consequence of the lemma rules out this witness. Therefore
$$|H|\ge\ell\,2^{2r+2}\ge B_f.$$
This holds for a smallest witness, hence for every witness, proving (1). For $f=3,5,7$, the integers $2^f-1$ are respectively the primes $7,31,127$, and their orders of two are $3,5,7$. Substitution gives the displayed values. $\square$

**Checks and scope.** The lemma permits arbitrary action on $Z(S)$ and retains both the abelian and pointwise-fixed Frattini alternatives. Oddness of $r$ is needed for the intermediate claim about $A$. For example, $Q_8$ has order $2^{r+1}$ and a cubic automorphism when $r=\operatorname{ord}_3(2)=2$, but is nonabelian. At $\ell=7$, an irreducible three-dimensional binary module has no invariant pairing with itself; its dual is a distinct constituent, which is precisely what the small-order argument uses.

The earlier bound is sharp for its fixed-centre group lemma, but its boundary example is not an unequal-count witness. The argument here excludes every target at that first possible boundary. It gives no witness at $B_f$, no bound for even $f$, and no compatible finite lifts or full lift of the Frobenius shift. The dyadic classification problem remains open.
