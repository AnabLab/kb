---
title: Boundary twists exclude nontrivial wild scalars in finite outer conjugacy
kind: theorem
summary: 'For odd p and [K:Q_p] at least three, finite outer conjugacy of a tame-trivial automorphism forces its wild Frattini action to be a shear into the cyclotomic line. Finite order prime to p is impossible except for the identity; for p at least five every finite order is excluded.'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: prime-to-p-tame-trivial-finite-outer-conjugacy, label: resolves}
  - {to: central-scalars-in-finite-outer-conjugacy-on-wild-frattini, label: uses, note: 'The theorem gives the common central scalar z on W; Corollary 2 constructs a nontrivial prime-to-p finite subgroup from a rival copy with prime-to-p intersection index.'}
  - {to: unitarity-of-central-scalars-on-wild-frattini, label: uses, note: 'The identities c = omega(z) and aug(z) = 1 determine the scalar coefficient and the action on the cyclotomic line.'}
  - {to: tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups, label: uses, note: 'The Setting supplies a surface pair occurring only in its commutator factor; part 1 gives V = L plus d free tame-group-algebra summands; part 3 gives the trivial centre of the tame group.'}
  - {to: free-pro-p-ia-kernels-are-torsion-free, label: uses, note: 'Its finite free retractions and compactness argument identify lower central quotients of arbitrary-rank free pro-p groups through finite-rank quotients.'}
  - {to: wild-inertia-of-a-p-adic-field, label: uses, note: 'Wild inertia is free pro-p and characteristic.'}
  - {to: finite-order-local-galois-automorphisms-detected-on-the-frattini-quotient-of-wild-inertia, label: uses, note: 'Part 2 excludes prime-to-p torsion after the shear is killed; part 1 excludes p-power torsion with square-zero Frattini difference when p is at least five.'}
  - {to: nonconstant-central-involutions-on-wild-frattini, label: addresses, note: 'Every involution constructed there has infinitely many outer conjugates.'}
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: addresses, note: 'Excludes rival copies meeting G_K openly with index prime to p in degree at least three, hence every open-intersection rival copy for p at least five.'}
---

**Setting.** Let $p$ be odd, $K/\mathbb Q_p$ finite of degree $d\ge3$, $G=G_K$, $P$ its wild inertia, and
$$\Gamma=G/P,\qquad \Lambda=\mathbb F_p[[\Gamma]],\qquad
V=P/\Phi(P)=L\oplus\bigoplus_{i=1}^d\Lambda\bar x_i,\qquad W=V/L.$$
Here $L=\mathbb F_p\bar x_0$ is the cyclotomic line. Use the presentation of [the tame-group-algebra theorem](tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups.md). Its first surface pair $(a,b)$ is $(x_2,x_3)$ for odd $d$ and $(x_3,x_4)$ for even $d$. Each of $a,b$ occurs in the wild relator only in its factor $[a,b]$. The complementary generator $x_1$ is distinct from both.

**Theorem (proved here).** Suppose $\alpha\in\operatorname{Aut}(G)$ induces the identity on $\Gamma$ and has finitely many conjugates in $\operatorname{Out}(G)$. Then its action $A$ on $V$ satisfies
$$A|_L=1,\qquad A|_W=1,\qquad (A-1)^2=0.$$
Consequently:

1. If $\alpha$ has finite order prime to $p$, then $\alpha=1$.
2. If $p\ge5$ and $\alpha$ has any finite order, then $\alpha=1$.
3. Every involution in [the central-involution construction](nonconstant-central-involutions-on-wild-frattini.md) has infinitely many outer conjugates.
4. A closed normal copy $N\ne G$ of $G$ in $\operatorname{Aut}(G)$ cannot meet $G=\operatorname{Inn}(G)$ openly with index prime to $p$. For $p\ge5$, no open-intersection rival copy exists in this degree range.

**Lower central input.** All lower central subgroups below are closed. For a free pro-$p$ group $F$, put $F_1=F$, $F_{j+1}=[F,F_j]$, $H=F/F_2$, and $\mathcal L_j=F_j/F_{j+1}$. In finite rank, these form the free Lie algebra on $H$ over $\mathbb Z_p$, embedded in the tensor algebra; the inner Johnson maps have saturated image [@tsujimura2026freeaut, proof of Proposition 1.2(ii)–(iii), p. 4]. We need the following extension in degrees at most three, proved here.

Choose a free basis converging to $1$. For finite subsets $S$ of that basis, let $r_S:F\to F(S)$ kill the other generators. The compactness argument of [torsion-free IA kernels](free-pro-p-ia-kernels-are-torsion-free.md), Step 1, gives
$$\mathcal L_j\;\cong\;\varprojlim_S F(S)_j/F(S)_{j+1}.$$
Indeed, each coordinate is surjective, and compatible prescribed coordinates have simultaneous lifts in $F_j$ by the finite intersection property. Injectivity follows from that entry's equation (2). Thus the $\mathcal L_j$ are torsion-free compact $\mathbb Z_p$-modules. Reduction modulo $p$ commutes with this limit: compatible residues lift by the same compactness argument, and if every coordinate of an element is divisible by $p$, their unique quotients by $p$ are compatible. Consequently $\mathcal L_j/p$ is the degree-$j$ completed free Lie space on $H/p$. Completed tensor and Lie spaces mean inverse limits over finite-dimensional quotients of their degree-one space. This description is functorial, since the bracket maps are functorial and generate the indicated spaces.

For rank at least two, the maps
$$H\longrightarrow\operatorname{Hom}_{\mathrm{cont}}(H,\mathcal L_2),\qquad
\mathcal L_2\longrightarrow\operatorname{Hom}_{\mathrm{cont}}(H,\mathcal L_3),
\qquad h\longmapsto[v\mapsto[h,v]]\tag{1}$$
are injective also after reduction modulo $p$. In finite rank, a positive-degree Lie element commuting with every generator would be central in the free associative algebra, whose centre consists of scalars. Finite free retractions prove the same assertion in infinite rank. In particular, if $[h,H]\subseteq p^k\mathcal L_3$ for $h\in\mathcal L_2$, then $h\in p^k\mathcal L_2$: reduce modulo $p$, divide by $p$, and repeat. Thus the second map of (1) has saturated image. This argument handles the powers of $p$ that cannot be cancelled in a mod-$p$ Johnson quotient.

**Proof of the theorem.**

*1. An exact boundary twist.* Put $w=[a,b]$. Define $T\in\operatorname{Aut}(G)$ by fixing the tame generators and every $x_i$ other than $a,b$, and setting
$$T(a)=waw^{-1},\qquad T(b)=wbw^{-1}.$$
This preserves $[a,b]=w$, hence the entire defining relator. Substitution with $w^{-1}$ is its inverse. The assertion follows from the presentation itself, with no lifting theorem. The requisite form of the presentation is also stated in [@kondo2025, Theorem 1.1, p. 8].

Write $P_j$ for the ordinary lower central series of $P$, rather than either descending central series involving powers of $p$. Since $w\in P_2$, $T$ acts trivially on $P/P_3$. For an automorphism $\theta$ trivial on $P/P_3$, the map
$$J(\theta)(v)=\theta(x)x^{-1}\pmod{P_4},\qquad v=xP_2,$$
is a continuous homomorphism $P/P_2\to P_3/P_4$. It is additive in $\theta$ and equivariant for conjugation by any automorphism of $P$. These facts follow by multiplying the displayed differences: they are central modulo $P_4$, and such $\theta$ acts identically on every lower central factor. Put $D=J(T)$.

*2. Cancel a power before reducing modulo $p$.* Finite outer conjugacy gives an integer $n>0$ and $g\in G$ with
$$\alpha T^n\alpha^{-1}T^{-n}=c_g,\qquad c_g(x)=gxg^{-1}.$$
The left side is tame-trivial, so $gP\in Z(\Gamma)=1$, giving $g\in P$. It acts trivially on $P/P_3$; the first map of (1) therefore gives $g\in P_2$. Let $A_H$ be the action of $\alpha$ on $H=P/P_2$, and $A_3$ its action on $\mathcal L_3=P_3/P_4$. Additivity and equivariance of $J$ give
$$n\bigl(A_3DA_H^{-1}-D\bigr)=\operatorname{ad}(h),\qquad h=gP_3\in\mathcal L_2.$$
Write $n=p^ku$ with $u\in\mathbb Z_p^\times$. Saturation in (1) gives $h=p^kh_0$. Torsion-freeness then permits cancellation of $p^k$, and division by $u$ gives
$$A_3DA_H^{-1}-D=\operatorname{ad}(h'),\qquad h'=u^{-1}h_0\in\mathcal L_2.\tag{2}$$

*3. Remove the inner ambiguity.* Reduce (2) modulo $p$. The [central-scalar theorem](central-scalars-in-finite-outer-conjugacy-on-wild-frattini.md) gives $A(L)=L$ and $A|_W=z$ for a central unit $z\in\Lambda^\times$. Let $\delta$ be the reduction of $D$. Since $T$ fixes $x_0$ and the tame generators, $\delta(L)=0$. Thus (2) descends to completed free Lie spaces on $W$, after quotienting by the Lie ideal generated by $L$. Write $\delta_W$ for the resulting map, $A_W$ for multiplication by $z$, and $A_{W,3}$ for its degree-three Lie action. We obtain
$$A_{W,3}\delta_W A_W^{-1}-\delta_W=\operatorname{ad}(\bar h)\tag{3}$$
for some degree-two Lie element $\bar h$ on $W$.

The map $\delta_W$ is $\Gamma$-equivariant, because $T$ fixes the tame lifts, and vanishes on the complementary summand $\Lambda e_1$, where $e_i=\bar x_i+L$. Both terms on the left of (3) therefore vanish at $e_1$, since $A_W^{-1}(e_1)=z^{-1}e_1$. Hence $[\bar h,e_1]=0$, which forces $\bar h=0$. Here is the needed single-generator version of the tensor argument: in a finite-dimensional quotient with $e_1$ as one basis vector, a degree-two associative tensor commuting with $e_1$ is a multiple of $e_1^2$, by comparison of words of length three. A degree-two Lie tensor has zero coefficient on that square. Such quotients, preserving $e_1$, detect every tensor. Thus
$$A_{W,3}\delta_W=\delta_W A_W.\tag{4}$$

*4. A cubic diagonal identity.* Write $e_a,e_b$ for the classes of the chosen surface pair. Directly from $T$,
$$\delta_W(e_a)=[[e_a,e_b],e_a],\qquad
\delta_W(\rho e_a)=[[\rho e_a,\rho e_b],\rho e_a]\quad(\rho\in\Gamma).$$
The coefficient of the tensor pattern $e_ae_ae_b$ in $[[e_a,e_b],e_a]$ is $-1$: its full expansion is $2e_ae_be_a-e_be_ae_a-e_ae_ae_b$. Take this pattern in (4) evaluated at $e_a$. Since the surface summands are free copies of $\Lambda$, it gives
$$z\otimes z\otimes z=\Delta_3(z),\qquad
\Delta_3:\Lambda\longrightarrow\mathbb F_p[[\Gamma^3]],\quad
\rho\longmapsto(\rho,\rho,\rho).\tag{5}$$
The tensor product is completed. The right side follows from $\Gamma$-equivariance of $\delta_W$; the left side comes from applying $A_W$ to each of the three inputs. These operations are continuous, so the computation on finite sums extends to $\Lambda$.

In a finite quotient $Q$ of $\Gamma$, write $\bar z=\sum_{q\in Q}a_qq$. Equation (5) says $a_ra_sa_t=0$ unless $r=s=t$, and $a_q^3=a_q$. Since $\bar z$ is a unit, some $a_q\ne0$. If two coefficients $a_r,a_s$ were nonzero, the coefficient $a_r^2a_s$ at $(r,r,s)$ would contradict (5). Hence $\bar z=\lambda_Qq_Q$ with $\lambda_Q^2=1$. The [unitarity theorem](unitarity-of-central-scalars-on-wild-frattini.md) gives $\operatorname{aug}(z)=1$, so $\lambda_Q=1$. Uniqueness makes the $q_Q$ compatible; thus $z=\gamma$ for some $\gamma\in\Gamma$. Centrality of $z$ implies $\gamma\in Z(\Gamma)=1$. Therefore $z=1$.

*5. Consequences.* The same unitarity theorem gives $A|_L=\omega(z)=1$. Thus $E=A-1$ maps $V$ into $L$ and kills $L$, so $E^2=0$ and $A^p=1$. If $\alpha$ has order $m$ prime to $p$, then $1=A^m=1+mE$, giving $E=0$; [finite-order detection](finite-order-local-galois-automorphisms-detected-on-the-frattini-quotient-of-wild-inertia.md), part 2, gives $\alpha=1$.

For any finite order $p^rm$, $p\nmid m$, the automorphism $\alpha^{p^r}$ is trivial by the preceding conclusion. Hence $\alpha$ has $p$-power order. If $p\ge5$, then $E^{p-2}=0$ because $E^2=0$, and part 1 of finite-order detection gives $\alpha=1$. This proves conclusions 1–3. For conclusion 4, Corollary 2 of the central-scalar theorem constructs from such a rival copy a nontrivial finite prime-to-$p$ subgroup of tame-trivial automorphisms with finite outer conjugacy. Conclusion 1 excludes it. That corollary also supplies the automatic prime-to-$p$ index for $p\ge5$. $\square$

**Scope and checks.** The cancellation in step 2 uses the integral ordinary lower central series of the free wild group before reducing modulo $p$. It does not replace the $p^s$-central filtration in any lifting theorem. Step 3 uses a complementary free generator, available already in degree three; a twist which were inner on the whole wild group would not give this argument. The coefficient $-1$ in step 4 remains nonzero at $p=3$, even though the coefficient $2$ in another tensor pattern changes. The constant scalar $-1$ satisfies the cubic identity but fails augmentation one; this is exactly where unitarity is needed.

The involutions with scalar $2\varepsilon_m-1$ fail (5) in a finite quotient where the image of $I_m$ has order greater than two, since at least two nonidentity group coefficients are nonzero. For example, take $p=q=3$, $m=2$ and the tame quotient $C_8\rtimes C_2$ with $\sigma\tau\sigma^{-1}=\tau^3$. The unit is $1+2\tau^2+2\tau^4+2\tau^6$, so the coefficient of $(1,1,\tau^2)$ on the left of (5) is $2$, whereas it is zero on the right. The smaller quotient with inertia $C_4$ gives $z_m=\tau^2$ and satisfies (5); one finite quotient need not detect the obstruction.

For $p=3$, this proof does not exclude finite order divisible by $3$, since a nonzero shear has cube one. [The shear-vanishing theorem](tame-trivial-automorphisms-with-finite-outer-conjugacy-act-trivially-on-wild-frattini.md) shows that the shear is zero, which excludes it. Degree at most two, residue characteristic two, nontrivial tame action, and rival copies with infinite-index intersection are outside the theorem. The proof and its consequences are proved here, with no novelty claim. Nishio's finite-subgroup construction and its final consequences were also opened [@nishio2026finite, Theorem 2.8 and Corollaries 3.4 and 3.6, pp. 13–15]; those statements do not impose finite outer conjugacy. The other inputs are used through the linked entries on main.
