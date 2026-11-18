---
title: Dyadic counts for the quaternion wreath target
kind: theorem
summary: 'For H = (Q8 wr C2) ⋊ C3 and a dyadic field of degree d, each pair of surjections onto C3 and C2 has exactly 2^(4d+6)(2^(2d)-1) surjective lifts to H, whatever their ramification. So all tame marked counts are invariant, although the moving Frattini kernel of H is not layered.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: smallest-moving-frattini-kernel-without-zero-coinvariant-layers, label: uses, note: 'Uses its target and its identification of the Frattini subgroup of Q8 wr C2.'}
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: uses, note: 'Steps 1–5 over the quadratic extension give the cocycle classes, the quaternion obstruction with nondegenerate polarization, and the number of lifts.'}
  - {to: noncentral-frattini-layers-in-dyadic-lift-counts, label: uses, note: 'Only its comparison paragraph, giving Φ(P) ⊆ Φ(H).'}
  - {to: layered-zero-coinvariant-frattini-kernels-give-dyadic-count-invariance, label: analogous-to, note: 'Reaches the same count invariance for a target to which that criterion does not apply.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes the smallest target without a layered moving kernel from tame marked-count obstructions; constructs no lift.'}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$, with tame quotient $\pi:G_k\twoheadrightarrow\Gamma$. All maps are continuous, and counts distinguish actual maps, including conjugate ones. Let $B=Q_8\rtimes\langle c\rangle\cong\operatorname{SL}_2(\mathbb F_3)$, where $c$ cycles $i,j,ij$, and let $\rho_B:B\twoheadrightarrow C_3$ have kernel $Q_8$, as in the [binary tetrahedral count](binary-tetrahedral-embedding-counts-over-dyadic-fields.md). Put $V=Q_8/\{\pm1\}$, a $C_3$-module without nonzero fixed vectors, and $A_4=B/\{\pm1\}=V\rtimes C_3$. In $B\wr C_2=(B\times B)\rtimes\langle s\rangle$, with $s(b_1,b_2)s^{-1}=(b_2,b_1)$, let
$$
H=\{(b_1,b_2)s^e:\ \rho_B(b_1)=\rho_B(b_2)\}.
$$
Its normal subgroup $P=Q_8\wr C_2$ has index three, and $T=\langle(c,c)\rangle$ is a complement acting diagonally and commuting with $s$. So $H$ is the target of order $384$ in [the smallest moving kernel without zero-coinvariant layers](smallest-moving-frattini-kernel-without-zero-coinvariant-layers.md), whose moving kernel $M=\Phi(P)\cong Q_8\times C_2$ is not layered. Put $B_0=Q_8\times Q_8$ and
$$
\kappa:H\twoheadrightarrow H/B_0=C_3\times C_2,\qquad (b_1,b_2)s^e\mapsto(\rho_B(b_1),e).
$$

**Theorem (proved here).** Let $\epsilon:G_k\twoheadrightarrow C_3$ and $\delta:G_k\twoheadrightarrow C_2$ be epimorphisms. The number of epimorphisms $F:G_k\twoheadrightarrow H$ with $\kappa F=(\epsilon,\delta)$ is
$$
S_d=2^{4d+6}\bigl(2^{2d}-1\bigr).
\tag{1}
$$
It does not depend on $\epsilon$ or $\delta$, in particular not on whether either is ramified. Consequently, for finite epimorphisms $q:\Gamma\twoheadrightarrow D$ and $r:H\twoheadrightarrow D$ and every $\alpha\in\operatorname{Aut}(\Gamma)$,
$$
\#\{F:G_k\twoheadrightarrow H:\ rF=q\pi\}=\#\{F:G_k\twoheadrightarrow H:\ rF=q\alpha\pi\}.
\tag{2}
$$
For $d=1$, (1) gives $S_1=3072$, so these counts are nonzero for every $d$.

**Proof.** Let $k'$ be the fixed field of $\ker\delta$, put $N=G_{k'}$, and fix $\sigma\in G_k\smallsetminus N$. The restriction $\epsilon|_N$ is still surjective, since $[k':k]=2$ is prime to three. Write $V_\epsilon$ for $V$ with $G_k$ acting through $\epsilon$. Let $L'$ be the fixed field of $\ker\epsilon\cap\ker\delta$, a cyclic extension of $k$ of degree six.

*1. Induction from the quadratic extension.* Homomorphisms $F:G_k\to H$ with $\kappa F=(\epsilon,\delta)$ correspond bijectively to pairs $(\psi,a)$, where $\psi:N\to B$ is a homomorphism with $\rho_B\psi=\epsilon|_N$ and $a\in B$ satisfies $\rho_B(a)=\epsilon(\sigma)$, through
$$
F(n)=\bigl(\psi(n),\,a^{-1}\psi(\sigma n\sigma^{-1})a\bigr),\quad n\in N,\qquad
F(\sigma)=\bigl(a,\,a^{-1}\psi(\sigma^2)\bigr)s.
\tag{3}
$$
Indeed, given $F$, let $\psi$ and $a$ be the first coordinates of $F|_N$ and of $F(\sigma)$. Comparing first coordinates in $F(\sigma n\sigma^{-1})=F(\sigma)F(n)F(\sigma)^{-1}$ forces the second coordinate of $F(n)$, and comparing first coordinates in $F(\sigma)^2=F(\sigma^2)$ forces the second coordinate of $F(\sigma)$. Conversely, the formulas (3) define a homomorphism $N\to B\times B$. They satisfy $F(\sigma)F(n)F(\sigma)^{-1}=F(\sigma n\sigma^{-1})$ and $F(\sigma)^2=F(\sigma^2)$, as direct multiplication shows, and these identities are exactly what is needed to extend $F$ to $G_k=N\sqcup N\sigma$. Both coordinates have the same image under $\rho_B$, because $C_3$ is abelian, so $F$ takes values in $H$, and $\kappa F=(\epsilon,\delta)$. There are $|Q_8|=8$ choices of $a$.

*2. Surjectivity.* By part 1 of [the smallest moving kernel theorem](smallest-moving-frattini-kernel-without-zero-coinvariant-layers.md), $M=\Phi(P)=\{(x,y)\in B_0:\bar x=\bar y\}$, where bars denote images in $V$. The comparison paragraph of the [noncentral layer theorem](noncentral-frattini-layers-in-dyadic-lift-counts.md) gives $\Phi(P)\subseteq\Phi(H)$. So $F$ is surjective exactly when its image $J$ in $H/M$ is everything. The map $(x,y)\mapsto\bar x+\bar y$ identifies $B_0/M$ with $V$. Conjugation by an element of $H$ above $\gamma\in C_3$ acts on it as $\gamma$, since $Q_8$ acts trivially on $V$ and the swap does not change $\bar x+\bar y$. The group $J$ maps onto $C_3\times C_2$, because $\epsilon$ and $\delta$ are surjective of coprime orders. So $J\cap V$ is a $C_3$-submodule of the irreducible module $V$. If it is $V$, then $J=H/M$; if it is $0$, then $|J|=6<24$. Moreover $J\cap V$ is the image of $\ker(\epsilon,\delta)=G_{L'}$. Thus $F$ is surjective exactly when
$$
G_{L'}\longrightarrow V,\qquad n\longmapsto\overline{\psi(n)}+\overline{a^{-1}\psi(\sigma n\sigma^{-1})a}
\tag{4}
$$
is nonzero.

Write $\psi\bmod\{\pm1\}$ as $n\mapsto(\xi(n),\epsilon(n))\in A_4$, with $\xi$ a $1$-cocycle of $N$ in $V_\epsilon$, and let $x=[\xi]\in W:=H^1(k',V_\epsilon)$. Conjugation by $a^{-1}$ acts on $V$ as $\epsilon(\sigma)^{-1}$. So (4) is the restriction to $G_{L'}$ of the cocycle $\xi+\sigma^{-1}{*}\xi$, where $(g{*}\xi)(n)=g\,\xi(g^{-1}ng)$ is the conjugation action of $G_k$ on cocycles of $N$. On cohomology this action factors through $\operatorname{Gal}(k'/k)=\langle\bar\sigma\rangle$, and $\sigma$ and $\sigma^{-1}$ induce the same involution, again written $\sigma$. Coboundaries vanish on $G_{L'}$, which acts trivially on $V$. Restriction from $k'$ to $L'$ is injective on $W$, because its kernel $H^1(\operatorname{Gal}(L'/k'),V)$ is killed by both $3$ and $2$ [@milnecft, II, Proposition 1.34, p. 71, Corollary 1.31, p. 70, and the continuous-cohomology discussion, p. 88]. Hence (4) is nonzero exactly when $(1+\sigma)x\ne0$, that is, when $x$ is not fixed by $\sigma$. Since $V^{N}=0$, the inflation-restriction sequence identifies the fixed space:
$$
\Lambda:=W^{\sigma}=\operatorname{res}H^1(k,V_\epsilon),
\tag{5}
$$
with restriction injective [@milnecft, II, Proposition 1.34, p. 71; Remark 1.35(a), p. 72; continuous-cohomology discussion, p. 88]. So $F$ is surjective exactly when $x\notin\Lambda$.

*3. The quadratic space over $k'$.* Apply Steps 1–3, the polarization identity at the start of Step 4, and Step 5 of the [binary tetrahedral count](binary-tetrahedral-embedding-counts-over-dyadic-fields.md) to $k'$, of degree $2d$, and to $\epsilon|_N$. They give the following. The space $W$ has dimension $4d$. The obstruction to lifting the map to $A_4$ given by a cocycle in the class $x$ to a homomorphism into $B$ depends only on $x$; it is a function $q:W\to H^2(k',\mathbb F_2)=\mathbb F_2$ whose polarization $\beta(x,y)=q(x+y)+q(x)+q(y)$ is a nondegenerate symmetric bilinear form. Each class has exactly $4$ cocycle representatives. Every unobstructed cocycle has exactly $|H^1(k',\mathbb F_2)|=2^{2d+2}$ lifts. The same steps over $k$ give $\dim H^1(k,V_\epsilon)=2d$, so $\dim\Lambda=2d$ by (5).

The form $q$ vanishes on $\Lambda$. If $x=\operatorname{res}y$, a cocycle in $y$ defines a map $G_k\to A_4$ whose restriction to $N$ represents $x$. The lifting obstruction of the restriction is the restriction of the obstruction over $k$, since both are pullbacks of the class of $B\to A_4$. Restriction $H^2(k,\mathbb F_2)\to H^2(k',\mathbb F_2)$ is zero: under the Kummer identification $H^2(\cdot,\mu_2)=\operatorname{Br}(\cdot)[2]$ it multiplies local invariants by $[k':k]=2$ [@milnecft, III, Theorem 2.1 and diagram (28), p. 103]. Hence $\beta$ vanishes on $\Lambda\times\Lambda$. As $\beta$ is nondegenerate and $\dim\Lambda=\tfrac12\dim W$, the subspace $\Lambda$ is its own orthogonal.

*4. Counting the admissible classes.* We claim
$$
\#\{x\in W\smallsetminus\Lambda:\ q(x)=0\}=2^{2d-1}\bigl(2^{2d}-1\bigr).
\tag{6}
$$
Choose a complement $S$ of $\Lambda$. Since $\Lambda^\perp=\Lambda$, the pairing $\beta:S\times\Lambda\to\mathbb F_2$ is perfect. Choose a basis $e_1,\dots,e_{2d}$ of $S$, and let $\gamma$ be the bilinear form on $S$ with $\gamma(e_i,e_i)=q(e_i)$, $\gamma(e_i,e_j)=\beta(e_i,e_j)$ for $i<j$, and $\gamma(e_i,e_j)=0$ for $i>j$. Expanding in the basis gives $q(u)=\gamma(u,u)$ for $u\in S$. Define a linear map $\ell:S\to\Lambda$ by $\beta(u',\ell(u))=\gamma(u',u)$ for all $u'\in S$. Then $S'=\{u+\ell(u):u\in S\}$ is again a complement of $\Lambda$, and
$$
q(u+\ell(u))=q(u)+q(\ell(u))+\beta(u,\ell(u))=\gamma(u,u)+0+\gamma(u,u)=0.
$$
Thus $q(u'+\lambda)=\beta(u',\lambda)$ for $u'\in S'$ and $\lambda\in\Lambda$. A vector $u'+\lambda$ lies outside $\Lambda$ exactly when $u'\ne0$, and then $\beta(u',\cdot)$ is a nonzero functional on $\Lambda$, vanishing on $2^{2d-1}$ vectors. This proves (6).

*5. The total.* By parts 1–4, the number of surjections $F$ above $(\epsilon,\delta)$ is
$$
8\cdot4\cdot2^{2d+2}\cdot2^{2d-1}\bigl(2^{2d}-1\bigr)=2^{4d+6}\bigl(2^{2d}-1\bigr),
$$
which is (1).

*6. Markings.* The finite quotient $D$ of $\Gamma$ has a normal cyclic subgroup of odd order, the image of tame inertia, with cyclic quotient. So its Sylow $2$-subgroups are cyclic, and the normal $2$-subgroup $r(P)$ is cyclic. The odd-order group $r(T)$ acts on it trivially, since automorphism groups of cyclic $2$-groups are $2$-groups. Thus $r(P)$ is central in $D=r(P)r(T)$ and $D/r(P)$ is cyclic, so $D$ is abelian. The commutator subgroup $[H,H]$ contains $[P,P]=M$ and the commutators $x^{-1}(c,c)x(c,c)^{-1}$ with $x\in B_0$. Their images in $B_0/M\cong V$ are the vectors $(c-1)\bar x$, which span $V$ because $c$ fixes no nonzero vector. So $[H,H]\supseteq B_0$, with equality because $H/B_0$ is abelian. Hence $r=\bar r\kappa$ for an epimorphism $\bar r:C_3\times C_2\twoheadrightarrow D$. Write $D=D_3\times D_2$ for its Sylow decomposition. A surjection $F$ satisfies $rF=q\pi$ exactly when $\kappa F=(\epsilon,\delta)$ with $\bar r(\epsilon,\delta)=q\pi$. If $D_3\cong C_3$, this determines $\epsilon$; otherwise $\epsilon$ ranges over all epimorphisms $G_k\twoheadrightarrow C_3$. Likewise, $\delta$ is determined if $D_2\cong C_2$ and ranges over all epimorphisms $G_k\twoheadrightarrow C_2$ otherwise. The same description holds for $q\alpha$, which is again an epimorphism. So both sides of (2) equal $S_d$ times the same number of pairs. $\square$

**Checks.** For $d=1$, the field $k'$ has degree two and $W$ has dimension four. The binary tetrahedral entry finds ten zeros of $q$ in this case. Four of them form the plane $\Lambda$, and six lie outside it, matching (6). Over a degree-one dyadic field there is no surjection onto $B$ above $\epsilon$ at all, by the same entry; surjections onto $H$ still exist, because they come from surjections of $G_{k'}$ onto $B$.

**Scope.** The calculation is specific to this target, whose wreath structure reduces it to counts over the quadratic extension cut out by the swap. It shows that the [layered criterion](layered-zero-coinvariant-frattini-kernels-give-dyadic-count-invariance.md) is not necessary for count invariance. It gives no compatible system of finite lifts and no automorphism of $G_k$, so the [Frobenius-shift lifting problem](frobenius-shift-lifting-problem.md) and the dyadic classification remain open.
