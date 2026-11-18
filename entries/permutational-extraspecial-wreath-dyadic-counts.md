---
title: Dyadic counts for permutational extraspecial wreath targets
kind: theorem
summary: 'For an extraspecial 2-group with irreducible odd cyclic action, permutation wreath targets without singleton orbits have explicit dyadic surjection counts. Transfer over possibly non-Galois fields and independence over a finite field give invariance for every tame marking.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: regular-wreath-tetrahedral-dyadic-counts, label: generalizes, note: 'Its theorem is the quaternion base with one regular orbit; here stabilizers, several orbits and larger extraspecial bases are allowed.'}
  - {to: irreducible-cyclic-extraspecial-counts-over-dyadic-fields, label: uses, note: 'Steps 1–2 supply the cohomology dimensions and quadratic obstruction; the count here uses transfer fibres instead of its total zero count.'}
  - {to: local-tate-duality, label: uses, note: 'Duality identifies transfer as the adjoint of restriction and counts central lifts.'}
  - {to: noncentral-frattini-layers-in-dyadic-lift-counts, label: uses, note: 'Its comparison paragraph gives the Frattini inclusion used to test surjectivity.'}
  - {to: tame-automorphisms-lift-modulo-wild-commutators, label: uses, note: 'Step 1 shows that every tame automorphism fixes the unramified quotient.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes these permutation wreath targets from all finite tame marked-count obstructions; constructs no full lift.'}
---

**Setting.** Let $E$ be an extraspecial $2$-group, with
$$
Z(E)=[E,E]=\langle z\rangle\cong C_2,\qquad
V=E/\langle z\rangle\cong\mathbb F_2^m.
$$
Let an odd cyclic group $T=\langle c\rangle$ act on $E$, faithfully and irreducibly on $V$. In particular $m\ge2$. Put $B=E\rtimes T$, with projection $\rho:B\twoheadrightarrow T$. The minimal polynomial of $c$ on $V$ is irreducible of degree $m$, so $\mathbb F_2[c]=\mathbb F_Q$, where $Q=2^m$, and $V$ is one-dimensional over this field. Consequently $\operatorname{End}_T(V)=\mathbb F_Q$.

Let a finite $2$-group $S$ act on a finite nonempty set $\Omega$ on the right. Write its orbits as $\Omega_1,\ldots,\Omega_r$, with sizes $n_i>1$, and put $M=|\Omega|$. Thus every $n_i$ is even. Let $S$ permute the coordinates of $E^\Omega$ by $(s\cdot b)_\omega=b_{\omega s}$, and let $T$ act diagonally. Set
$$
P=E^\Omega\rtimes S,\qquad H=P\rtimes T,\qquad
\kappa:H\twoheadrightarrow T\times S.
$$
Equivalently, $H$ is the subgroup of $B^\Omega\rtimes S$ whose coordinate images under $\rho$ are all equal. The permutation action need not be faithful, transitive or regular.

**Theorem (proved here).** Let $k/\mathbb Q_2$ have degree $d$. For any continuous epimorphisms $\epsilon:G_k\twoheadrightarrow T$ and $\delta:G_k\twoheadrightarrow S$, the number of epimorphisms $F:G_k\twoheadrightarrow H$ with $\kappa F=(\epsilon,\delta)$ is zero if $r>d$, and otherwise is
$$
2^{((m+1)M-mr)d+(m+1)M}
\prod_{j=0}^{r-1}(Q^d-Q^j).
\tag{1}
$$
Maps are counted individually, without identifying conjugates. The count is independent of the two quotient maps and their ramification.

Moreover, for the tame quotient $\pi:G_k\twoheadrightarrow\Gamma$, every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$, $a:H\twoheadrightarrow D$ satisfy
$$
\#\{F:G_k\twoheadrightarrow H:aF=q\pi\}
=\#\{F:G_k\twoheadrightarrow H:aF=q\alpha\pi\}.
\tag{2}
$$

**Proof.** Give $V$ its $G_k$-action through $\epsilon$. For each $i$, choose $o_i\in\Omega_i$, put
$$
N_i=\delta^{-1}(\operatorname{Stab}_S(o_i)),
$$
and let $L_i$ be its fixed field. Then $[L_i:k]=n_i$, although $L_i/k$ need not be Galois. The normal subgroup $\ker\delta$ still surjects onto $T$ under $\epsilon$: the quotient of $T$ by its image would have $2$-power order. Consequently $\epsilon(N_i)=T$ as well.

*1. Induction on each orbit.* Choose $t_\omega\in G_k$ with $o_i\delta(t_\omega)=\omega$ and $t_{o_i}=1$. Then
$$
h_{\omega,g}=t_\omega g t_{\omega\delta(g)}^{-1}\in N_i.
$$
All homomorphisms above $(\epsilon,\delta)$ are uniquely specified by homomorphisms $\psi_i:N_i\to B$ above $\epsilon|_{N_i}$ and elements $b_\omega\in B$ with $b_{o_i}=1$ and $\rho(b_\omega)=\epsilon(t_\omega)$, through
$$
F(g)=\bigl(b_\omega^{-1}\psi_i(h_{\omega,g})b_{\omega\delta(g)}\bigr)_{\omega\in\Omega}\,\delta(g).
\tag{3}
$$
Indeed $h_{\omega,gg'}=h_{\omega,g}h_{\omega\delta(g),g'}$, which verifies multiplication. Conversely recover $\psi_i$ from the $o_i$ coordinate of $F|_{N_i}$ and $b_\omega$ from the $o_i$ coordinate of $F(t_\omega)$. The identity $t_\omega g=h_{\omega,g}t_{\omega\delta(g)}$ then gives (3). This argument uses coset representatives, without requiring normal stabilizers. The number of choices of the $b_\omega$ is
$$
|E|^{M-r}=2^{(m+1)(M-r)}.
\tag{4}
$$

*2. Surjectivity and transferred classes.* Write $\psi_i\bmod\langle z\rangle=(\xi_i,\epsilon|_{N_i})$ and $x_i=[\xi_i]\in W_i=H^1(L_i,V)$. In $P^{\mathrm{ab}}$, coordinate copies of $E$ become $V$, with all copies in each orbit identified. Hence
$$
H/\Phi(P)\cong(V^r\rtimes T)\times S/\Phi(S).
\tag{5}
$$
Also $\Phi(P)\subseteq\Phi(H)$, by the comparison paragraph of the [noncentral layer theorem](noncentral-frattini-layers-in-dyadic-lift-counts.md). Thus surjectivity can be tested in (5).

Summing the vector coordinates of (3) over $\Omega_i$ gives a cocycle whose class is
$$
y_i=\operatorname{cor}_{L_i/k}x_i\in W_0:=H^1(k,V).
\tag{6}
$$
Explicitly, writing $b_\omega\bmod\langle z\rangle=(u_\omega,\epsilon(t_\omega))$, the sum is
$$
\sum_{\omega\in\Omega_i}\epsilon(t_\omega)^{-1}\xi_i(h_{\omega,g})+(g-1)w_i,
\qquad
w_i=\sum_{\omega\in\Omega_i}\epsilon(t_\omega)^{-1}u_\omega.
$$
The first term is the transfer cocycle, obtained from the sum map on the induced module [@milnecft, II, Example 1.29, p. 70; continuous-cohomology discussion, p. 88].

The map to $V^r\rtimes T$ is surjective exactly when the $y_i$ are linearly independent over $\mathbb F_Q$. To see this, the intersection of its image with $V^r$ is a $T$-submodule. If proper, averaging over odd $T$ supplies a nonzero $T$-linear functional $V^r\to V$ annihilating that submodule. The resulting image in $V\rtimes T$ is a complement, so its cohomology class is zero: $H^1(T,V)=0$ by averaging. This gives a nontrivial $\mathbb F_Q$-linear relation among the $y_i$. Conversely, such a relation gives a map to $V\rtimes T$ with zero class and hence image in a conjugate complement, excluding surjectivity.

The projection onto $S/\Phi(S)$ is already surjective. A subgroup of the product in (5) surjecting onto both factors is the full product: otherwise the factors have a common nontrivial quotient, which would be an elementary-abelian $2$-quotient of $V^r\rtimes T$. There is none, since $[V^r,T]=V^r$ and $T$ is odd. We conclude that
$$
F\text{ is surjective}\quad\Longleftrightarrow\quad
y_1,\ldots,y_r\text{ are independent over }\mathbb F_Q.
\tag{7}
$$

*3. Obstruction on a nonzero transfer fibre.* Commutators in $E$ give a nondegenerate $T$-invariant alternating form $j:V\times V\to\mathbb F_2$. The first two steps of [irreducible extraspecial counts](irreducible-cyclic-extraspecial-counts-over-dyadic-fields.md), applied over $k$ and $L_i$, give
$$
\dim_{\mathbb F_2}W_0=md,\qquad
\dim_{\mathbb F_2}W_i=mn_id,
$$
and a quadratic lifting obstruction $Q_i:W_i\to\mathbb F_2$. Its polarization is the perfect local pairing $\beta_i(x,x')=j_*(x\cup x')$. These facts use local duality and the Euler characteristic [@milne2006adt, I, Corollary 2.3, p. 28; Theorem 2.8, p. 31]. In particular $W_0$ has dimension $d$ over $\mathbb F_Q$.

For clarity, the obstruction is that of $B\to V\rtimes T$. An ordered section of $E\to V$ has a bilinear factor set $f$ with $f(v,w)+f(w,v)=j(v,w)$. Over the odd-degree extension trivializing $V$, polarizing the pulled-back factor set gives $j_*(x\cup x')$, up to a coboundary. Restriction on degree-two $\mathbb F_2$ cohomology to that odd extension is injective, proving this polarization before restriction as well. The zero class lifts through $T$. Each class in $W_i$ has $2^m$ cocycle representatives, and an unobstructed representative has $2^{n_id+2}$ lifts to $B$, since two central lifts differ by a character into $\langle z\rangle$.

Let $U_i=\operatorname{res}_{L_i/k}W_0\subseteq W_i$. Restriction is injective even for these non-Galois fields. Indeed it is injective after further restricting to $\ker\delta$: inflation-restriction has kernel $H^1(S,V^{\ker\delta})=0$, since $V^{\ker\delta}=0$ [@milnecft, II, Proposition 1.34, p. 71; continuous-cohomology discussion, p. 88]. Thus $\dim U_i=md$.

Naturality of the obstruction and the even degree $n_i$ give $Q_i|_{U_i}=0$. Here restriction on $2$-torsion Brauer groups multiplies the local invariant by $n_i$, also for non-Galois extensions [@milnecft, III, equation (29), p. 105]. The projection formula and compatibility of corestriction with local invariants give
$$
\beta_i(x,\operatorname{res}v)
=\beta_0(\operatorname{cor}x,v)
\tag{8}
$$
[@milnecft, II, Proposition 1.39(d), p. 74; III, equation (30), p. 105]. Hence $\operatorname{cor}:W_i\to W_0$ is surjective, being adjoint to an injection between spaces with perfect pairings. Its kernel has dimension $m(n_i-1)d$. Moreover $U_i$ lies in this kernel, since $\operatorname{cor}\operatorname{res}=n_i=0$ on these binary spaces [@milnecft, II, Proposition 1.30, p. 70].

Fix any $y\ne0$ in $W_0$. The fibre $\operatorname{cor}^{-1}(y)$ is partitioned into cosets of $U_i$. On each such coset $x+U_i$,
$$
Q_i(x+\operatorname{res}v)=Q_i(x)+\beta_0(y,v).
$$
The second term is a nonzero linear functional of $v$, by perfectness. Exactly half the fibre is therefore unobstructed:
$$
\#\{x\in W_i:\operatorname{cor}x=y,\ Q_i(x)=0\}
=2^{m(n_i-1)d-1}.
\tag{9}
$$
No sign or total zero count of $Q_i$ is needed.

*4. Count independent frames.* By (7), choose an ordered independent frame $(y_1,\ldots,y_r)$ in the $d$-dimensional $\mathbb F_Q$-space $W_0$. There are $\prod_{j=0}^{r-1}(Q^d-Q^j)$ such frames when $r\le d$, and none otherwise. Every $y_i$ is nonzero, so (9) applies to each orbit independently. For each chosen $y_i$, the factors from its transfer fibre, cocycle representatives, central lifts and coordinate choices in (3) multiply to
$$
2^{m(n_i-1)d-1}\,2^m\,2^{n_id+2}\,2^{(m+1)(n_i-1)}
=2^{((m+1)n_i-m)d+(m+1)n_i}.
$$
Multiplying over the orbits proves (1).

*5. Every tame marking.* A finite quotient of $\Gamma$ has cyclic Sylow $2$-subgroups, since its odd cyclic inertia image has cyclic quotient. Thus $a(P)$ is cyclic. The odd group $a(T)$ centralizes $a(P)$, because a cyclic $2$-group has a $2$-group of automorphisms. In each coordinate, $[E,T]$ maps onto $V$ and hence equals $E$ by the Frattini property. Therefore $a$ kills $E^\Omega$ and factors through $\kappa$, as a product of epimorphisms
$$
\gamma:T\twoheadrightarrow D_o,\qquad
\lambda:S\twoheadrightarrow D_2,\qquad D=D_o\times D_2.
$$
Every epimorphism $G_k\to T$ factors through $\Gamma$, because wild inertia is pro-$2$. Sum (1) over all pairs $(\epsilon_0\pi,\delta)$ with $\gamma\epsilon_0=q_o$ and $\lambda\delta=q_2\pi$. Precomposition by $\alpha$ bijects the permitted $\epsilon_0$ with those for $q_o\alpha$. The permitted $\delta$ remain the same: $q_2$ factors through the unramified quotient, which every tame automorphism fixes by Step 1 of [the tame lifting theorem](tame-automorphisms-lift-modulo-wild-commutators.md). Each summand is independent of the pair, proving (2). $\square$

**Checks and scope.** With $E=Q_8$, $T=C_3$ and one regular orbit, (1) is $2^{(3M-2)d+3M}(2^{2d}-1)$, the existing [regular wreath formula](regular-wreath-tetrahedral-dyadic-counts.md). For a nonregular example with the same base, take $S=D_8$ acting on the four vertices of a square: its point stabilizer is nonnormal, but (1) still gives $2^{10d+12}(2^{2d}-1)$ above every pair of quotient epimorphisms. With $S=C_2$ swapping two disjoint pairs instead, $r=2$ and $M=4$; the count is zero at $d=1$, and $2^{28}\cdot15\cdot12$ at $d=2$.

For a larger base, take $|E|=32$ with its irreducible quintic action from the extraspecial entry, and let $S=C_2$ swap two coordinates. Formula (1) gives $2^{6d+10}(2^{4d}-1)$, which is $983040$ at $d=1$. These checks are consequences of the proof, not computer enumerations.

Singleton orbits are excluded essentially: the obstruction need not vanish on the restriction subspace in odd degree. For example, $Q_8\rtimes C_3$ itself has zero surjective lifts above a cubic quotient at $d=1$, whereas the even-degree fibre calculation would give a positive number if incorrectly applied. Faithful irreducibility is imposed on the cyclic action on $V$; existence of such bases in every even dimension is proved in the irreducible extraspecial entry. No compatible infinite system or automorphism of $G_k$ is constructed. The full Frobenius-shift and dyadic classification questions remain open.
