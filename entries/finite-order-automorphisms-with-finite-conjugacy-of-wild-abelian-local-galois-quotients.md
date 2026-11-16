---
title: Finite outer conjugacy excludes p-power-order automorphisms of wild-abelian local Galois quotients
kind: theorem
summary: 'For odd p and a p-adic field K containing the pth roots of unity, every nonidentity automorphism of G_K/[P,P] of p-power order has infinitely many outer conjugates. In particular its full automorphism group has no finite normal subgroup of order divisible by p.'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: tame-inertia-twists-have-infinitely-many-outer-conjugates-modulo-wild-commutators, label: uses, note: 'Part 2 and the centre calculation in its proof: finite order and finite outer conjugacy force identity on the tame quotient, whose centre is trivial.'}
  - {to: tame-automorphisms-lift-as-a-group-modulo-wild-commutators, label: uses, note: 'Its Setting, (F1) and (F3), and Theorem, part 1 give the splitting, the averaging idempotent e, and freeness of (1-e)M.'}
  - {to: p-adic-galois-groups-modulo-wild-commutators, label: uses, note: 'Theorem, part 1 identifies the complementary module eM with a torsion-free module of rank [K:Q_p] over Z_p[[Z_p]]; the identification with eM is written out below.'}
  - {to: free-pro-p-ia-kernels-are-torsion-free, label: uses, note: 'Step 1 in degree one gives torsion-freeness of the abelianization of free wild inertia.'}
  - {to: finite-normal-subgroups-of-p-adic-outer-automorphism-groups, label: analogous-to, note: 'Here finite conjugacy is in the full outer automorphism group of the wild-abelian quotient. No lift of the conjugating module automorphisms to G_K is asserted.'}
---

**Setting.** Let $p$ be odd, let $K/\mathbb Q_p$ be finite of degree $n$ with $\mu_p\subset K$, and let $P$ be wild inertia. Put
$$
E=G_K/[P,P],\qquad M=P^{\mathrm{ab}},\qquad
\Gamma=G_K/P,\qquad \Lambda=\mathbb Z_p[[\Gamma]].
$$
All maps are continuous and all commutator subgroups are closed. Use the splitting and module decomposition from [the group lifting theorem](tame-automorphisms-lift-as-a-group-modulo-wild-commutators.md):
$$
E=M\rtimes s(\Gamma),\qquad
M=eM\oplus\varepsilon M,\qquad
\varepsilon M\cong(\varepsilon\Lambda)^n,\qquad \varepsilon=1-e.
\tag{1}
$$
Here $N=\ker(\Gamma\to\mathbb Z_p)$, with the map obtained from the unramified quotient, is pro-prime-to-$p$, and $e$ averages over $N$. The module $M$ is characteristic and torsion-free over $\mathbb Z_p$, since $P$ is free pro-$p$; see Step 1 of [the arbitrary-rank IA theorem](free-pro-p-ia-kernels-are-torsion-free.md). Also $n\ge p-1\ge2$: the polynomial $((1+X)^p-1)/X$ is Eisenstein over $\mathbb Z_p$.

**Theorem (proved here).** If $\alpha\in\operatorname{Aut}(E)$ has $p$-power order and its class has finitely many conjugates in $\operatorname{Out}(E)$, then $\alpha=1$.

Consequently every nonidentity automorphism of $E$ of $p$-power order has infinitely many outer conjugates, and every finite normal subgroup of $\operatorname{Aut}(E)$ has order prime to $p$.

**Algebra lemma (proved here).** The centre of $\mathbb F_p[[\Gamma]]$ is reduced. Consequently, for every central idempotent $f\in\Lambda$, the group $Z(f\Lambda)^\times$ has no nonidentity element of $p$-power order.

*Proof.* Write tame inertia as $I\cong\prod_{\ell\ne p}\mathbb Z_\ell$, and choose $\sigma$ with $\sigma\tau\sigma^{-1}=\tau^q$, where $q$ is the residue cardinality. For $m$ prime to $p$, quotient $I$ by $mI$ and put
$$H_m=C_m\rtimes\widehat{\mathbb Z},$$
where $\sigma$ acts on $C_m$ by the $q$th power. These quotients separate $\mathbb F_p[[\Gamma]]$: every finite quotient of $\Gamma$ factors through some $H_m$.

Choose a finite field $F/\mathbb F_p$ containing $\mu_m$. In $F[C_m]$, the primitive character idempotents are permuted by $\sigma$. Fix one orbit of length $r$ and an idempotent $t$ in it. For $0\le i,j<r$, the elements $\sigma^it\sigma^{-j}$ are matrix units, with diagonal sum the orbit idempotent. The corner $tF[[H_m]]t$ is $F[[r\widehat{\mathbb Z}]]$: in the decomposition by the cosets $\sigma^j(r\widehat{\mathbb Z})$, multiplication on both sides by $t$ kills exactly the cosets with $j\not\equiv0\pmod r$, and evaluates the $C_m$ coefficient at its character. Thus the orbit block is
$$\mathrm M_r\bigl(F[[r\widehat{\mathbb Z}]]\bigr).$$
This also follows directly from the displayed matrix units and their corner. Multiplication by $r$ identifies $\widehat{\mathbb Z}$ topologically with $r\widehat{\mathbb Z}$.

The commutative ring $F[[\widehat{\mathbb Z}]]$ is reduced. Indeed, using $\widehat{\mathbb Z}=\mathbb Z_p\times\prod_{\ell\ne p}\mathbb Z_\ell$, it is the inverse limit, over positive $a$ prime to $p$, of
$$F[C_a][[T]].$$
Each $F[C_a]$ is a finite product of finite fields, because $X^a-1$ is separable, so each of these power series rings is reduced. Their inverse limit is reduced as well. The centre of each matrix block above, hence of $F[[H_m]]$, is reduced. Extension from $\mathbb F_p$ to $F$ is injective, so $Z(\mathbb F_p[[H_m]])$ is reduced. Projecting a central nilpotent to every $H_m$ now proves the first assertion.

For the consequence put $R=f\Lambda$, with identity $f$. This ring is $p$-torsion-free and $p$-adically separated, and $R/pR$ is the direct factor $\bar f\mathbb F_p[[\Gamma]]$. A central nilpotent in this factor extends by zero to one in the whole ring, so its centre is reduced. If $c\in Z(R)^\times$ has $p$-power order, then $(\bar c-\bar f)^{p^b}=0$ for some $b$, hence $c\in f+pR$. There is no nonidentity $p$-power torsion in $f+pR$ for odd $p$. To check this, if $c=f+p^kd$ with $k\ge1$ and $d\notin pR$, the binomial expansion gives
$$c^p=f+p^{k+1}(d+ph)\quad\text{for some }h\in R.$$
Thus taking a $p$th power raises the exact $p$-divisibility of $c-f$ by one without making it zero. Iteration proves the claim. $\square$

**Proof of the theorem.** By [the finite-conjugacy theorem on tame twists](tame-inertia-twists-have-infinitely-many-outer-conjugates-modulo-wild-commutators.md), part 2, $\alpha$ induces the identity on $\Gamma$. Its restriction $A=\alpha|_M$ is therefore $\Lambda$-linear and preserves both summands of (1).

*1. Finite outer conjugacy gives finite orbits of module actions.* Every $\Lambda$-linear automorphism $B$ of either summand in (1) extends to an automorphism $\rho_B$ of $E$, acting as the identity on the other summand and on $s(\Gamma)$. The conjugates $\rho_B\alpha\rho_B^{-1}$ all induce the identity on $\Gamma$. If two differ by an inner automorphism $c_x$, the image of $x$ in $\Gamma$ is central. Since $Z(\Gamma)=1$ (the centre calculation in the cited tame-twist theorem), $x\in M$, and $c_x$ is the identity on $M$. Thus the restrictions $BAB^{-1}$ take only finitely many values.

Here is a useful consequence. If $D$ is an endomorphism of one summand with $D^2=0$, then $1+D$ is such a $B$. Finite orbit implies that $A$ commutes with $(1+D)^k=1+kD$ for some positive integer $k$. Torsion-freeness over $\mathbb Z_p$ allows cancellation of $k$, giving $AD=DA$.

*2. The free summand.* Put $R=\varepsilon\Lambda$ and identify $\varepsilon M$ with the left module $R^n$. Apply Step 1 to all elementary off-diagonal maps, which multiply one coordinate on the right by any $b\in R$ and insert the result in another coordinate. Each squares to zero. Commutation with these maps for $b=\varepsilon$ forces $A|_{\varepsilon M}$ to be a scalar diagonal matrix, and allowing every $b$ forces its scalar $c$ to lie in $Z(R)$. Explicitly the endomorphism ring is $\mathrm M_n(R^{\mathrm{op}})$, and commuting with all off-diagonal elementary matrices, for $n\ge2$, kills off-diagonal entries and equates the diagonal entries. Since $A$ has $p$-power order, so does $c$. The algebra lemma gives $c=\varepsilon$, hence $A|_{\varepsilon M}=1$.

*3. The complementary summand.* Put $R_0=\mathbb Z_p[[\Gamma/N]]\cong\mathbb Z_p[[T]]$ and $X=eM$. The module $X_K$ in [the quotient reconstruction theorem](p-adic-galois-groups-modulo-wild-commutators.md) is precisely $X$: its defining group is $E_N=M\rtimes s(N)$, and every abelian pro-$p$ quotient kills $s(N)$ and the relations $(v-1)m$ for $v\in N$. Averaging identifies the resulting module $M_N$ with $eM$. Part 1 of its Theorem gives
$$
X\cong R_0^{n-1}\oplus J,\qquad
0\ne J\subseteq R_0\text{ an ideal}.
\tag{2}
$$
In particular $X$ is a finitely generated torsion-free $R_0$-module of rank $n\ge2$.

Let $F_0=\operatorname{Frac}(R_0)$. A choice of basis of $F_0\otimes_{R_0}X$, followed by clearing finitely many denominators in both directions, identifies $X$ with a submodule satisfying
$$dR_0^n\subseteq X\subseteq R_0^n$$
for some nonzero $d\in R_0$. For $i\ne j$, the operator $D=dE_{ij}$ preserves $X$ and squares to zero, so Step 1 gives $AD=DA$ on $X$. After tensoring with $F_0$ and cancelling $d$, $A$ commutes with all the $E_{ij}$. Thus its action on $F_0\otimes X$ is a scalar $c\in F_0^\times$ of $p$-power order.

There is no nonidentity such scalar. Embed $F_0$ in $\mathbb Q_p((T))$. A root of unity in this Laurent series field has $T$-valuation zero and constant term a root of unity in $\mathbb Q_p$. A $p$-power root there is $1$, since $\Phi_p(1+Y)$ is Eisenstein and any nontrivial $p$-power root would give a primitive $p$th root. Finally $1+T\mathbb Q_p[[T]]$ is torsion-free: a positive power multiplies the first nonzero higher coefficient by that positive integer. Hence $c=1$, and torsion-freeness of $X$ gives $A|_X=1$.

*4. The section.* We have proved $\alpha|_M=1$ as well as identity on $\Gamma$. Write
$$\alpha(s(\gamma))=z_\gamma s(\gamma),\qquad z_\gamma\in M.$$
If $\alpha^{p^b}=1$, iteration, using that $\alpha$ fixes $M$ pointwise, gives $p^bz_\gamma=0$. Torsion-freeness of $M$ implies $z_\gamma=0$ for every $\gamma$. Thus $\alpha=1$. If a finite normal subgroup of $\operatorname{Aut}(E)$ had order divisible by $p$, Cauchy's theorem would supply an automorphism of order $p$ with finitely many conjugates, contradicting what was proved. $\square$

**Scope and checks.** The order hypothesis concerns the automorphism itself. No assertion is made about lifting an outer class of finite order to a representative of that order, so the consequence is about finite normal subgroups of $\operatorname{Aut}(E)$, not of $\operatorname{Out}(E)$. The proof uses the full module automorphism groups on both summands. Their lifts to $G_K$ are not established; finite conjugacy in $\operatorname{Out}(G_K)$ gives finite conjugacy only under its image in $\operatorname{Out}(E)$. Thus the remaining full-$G_K$ finite-normal-subgroup problem is open.

The smallest odd case $p=3$, $K=\mathbb Q_3(\zeta_3)$ has $n=2$, so both elementary-matrix arguments still apply. Two boundary tests explain the restrictions. For $p=2$, $-1\in\mathbb Z_2^\times$ already invalidates both scalar torsion arguments. Also a single finite tame quotient can have a nontrivial central $p$-element and a nilpotent central reduction, as in $\mathbb F_p[C_p]$; the reduced-centre lemma retains the entire unramified $\widehat{\mathbb Z}$ direction before passing to its finite quotients.
