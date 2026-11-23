---
title: Three-torsion does not determine semistable reduction
kind: theorem
summary: 'Over $\mathbb Q_{31}$, a potentially good elliptic curve and a split multiplicative Tate curve have isomorphic full 3-torsion Galois modules. Their finite monodromy groups have orders 3 and 1, so three-torsion does not determine semistability or the minimum semistabilizing degree.'
tags: [elliptic-curves, local-fields, ramification, reconstruction-algorithms]
edges:
  - {to: finite-torsion-recovers-semistable-inertia, label: uses, note: 'Its inertia-index formula gives the minimum semistabilizing degrees after the monodromy groups are computed here; this example shows that its reconstruction conclusion cannot extend to level 3.'}
  - {to: neron-ogg-shafarevich-criterion, label: uses, note: 'The good-reduction curve used for the cubic twist has unramified Tate modules.'}
  - {to: finite-torsion-does-not-determine-good-reduction, label: analogous-to, note: 'That example hides good versus multiplicative reduction at arbitrary finite levels while keeping both curves semistable; here level 3 also hides failure of semistability.'}
---

**Construction.** Put $K=\mathbb Q_{31}$, $\pi=31$, and let
$$
B:\ y^2=x^3+1,\qquad A:\ y^2=x^3+\pi^2.
$$
Let $T=E_\pi$ be the Tate elliptic curve with parameter $\pi$. Choose $a$ with $a^3=\pi$ and put $L=K(a)$.

**Theorem (proved here).** There is an isomorphism of full $G_K$-modules
$$A[3]\simeq T[3].\tag{1}$$
Both modules cut out the same totally ramified cyclic cubic extension $L/K$. Nevertheless, $A$ is potentially good and is not semistable over $K$, whereas $T$ has split multiplicative reduction. Their finite monodromy groups are
$$\Phi_A\simeq C_3,\qquad\Phi_T=1.$$
The minimum degrees of semistabilizing extensions, both arbitrary and Galois, are respectively $3$ and $1$.

**Proof.** We compute the full Galois actions, including their unramified parts.

*1. Rational three-torsion on the good-reduction curve.* Hensel's lemma gives elements $\zeta,b,c\in K$ with
$$\zeta^2+\zeta+1=0,\qquad b^3=-4,\qquad c^2=-3.$$
Indeed, the reductions $5,3,11$ are simple roots of the respective polynomials modulo $31$. In particular $\zeta$ is a primitive cube root of unity. Thus $X^3-\pi$ is Eisenstein and splits over $L$, proving that $L/K$ is cyclic, totally ramified and of degree three. Choose its generator $\sigma$ by $\sigma(a)=\zeta a$, and define
$$\chi:G_K\longrightarrow\mathbb F_3,\qquad g(a)=\zeta^{\chi(g)}a.$$

All nine points of $B[3]$ are $K$-rational. To check this directly, for a finite point $(x,y)$ with $y\ne0$, the doubling formula gives
$$x(2P)=\left(\frac{3x^2}{2y}\right)^2-2x.$$
The condition $3P=0$ is equivalent to $x(2P)=x(P)$, hence to $x(x^3+4)=0$. Points with $y=0$ have order two. The eight nonzero three-torsion points are therefore
$$ (0,\pm1),\qquad (b\zeta^j,\pm c)\quad(0\le j\le2).$$
Finally $B$ has good reduction: its integral equation has discriminant $-432$, a $31$-adic unit.

*2. The cubic twist.* Over $L$ the map
$$f:A_L\xrightarrow{\sim}B_L,\qquad (x,y)\longmapsto(x/a^2,y/\pi)$$
is an isomorphism of elliptic curves. Put $u(x,y)=(\zeta^2x,y)$, an automorphism of $B$ of order three. Transporting the action along $f$ gives, on every prime-to-$31$ Tate module and torsion module,
$$\rho_A(g)=u^{\chi(g)}\rho_B(g).\tag{2}$$
This follows by applying $g$ to the inverse change of coordinates $(X,Y)\mapsto(a^2X,\pi Y)$.

On $B[3]$, the factor $\rho_B(g)$ is the identity by step 1. The automorphism $u$ is nontrivial there: it moves $(b,c)$. Thus the action on $A[3]$ factors faithfully through $\chi$, and its three-torsion field is exactly $L$.

Let $M$ be the action of $\sigma$ on the two-dimensional $\mathbb F_3$-space $A[3]$. Since $M^3=1$ and $M\ne1$, its minimal polynomial is $(X-1)^2$. Choose $v$ with $e=(M-1)v\ne0$. Then $e,v$ are a basis and
$$g(e)=e,\qquad g(v)=v+\chi(g)e\quad(g\in G_K).\tag{3}$$

*3. The Tate curve.* Tate uniformization is a Galois-equivariant isomorphism
$$T(\bar K)\simeq\bar K^\times/\pi^{\mathbb Z}$$
[@kedlaya2004tate, Theorem 1, p. 3]. The classes $e_T=[\zeta]$ and $v_T=[a]$ form a basis of $T[3]$: an element whose cube is in $\pi^{\mathbb Z}$ is a product of these classes, and valuation shows that they are independent. They satisfy
$$g(e_T)=e_T,\qquad g(v_T)=v_T+\chi(g)e_T.$$
This proves (1) by comparison with (3), and also shows that the three-torsion field of $T$ is $L$. The Tate curve has split multiplicative reduction [@kedlaya2004tate, Theorem 2(b), p. 4].

*4. The semistable obstruction.* By good reduction and the [Néron–Ogg–Shafarevich criterion](neron-ogg-shafarevich-criterion.md), inertia acts trivially on $T_3B$. Equation (2) therefore identifies its action on $T_3A$ with $u^{\chi(g)}$. The automorphism $u$ has order three on this characteristic-zero module and is nontrivial, as its reduction on $B[3]$ is nontrivial. Its two nonidentity powers cannot be unipotent: a finite-order unipotent operator in characteristic zero is the identity. Grothendieck's criterion now shows that $A$ is not semistable [@silverbergzarhin2001etale, Theorem 4.1, p. 148]. Its unipotent-inertia subgroup is exactly
$$J_A=I_K\cap G_L,\qquad [I_K:J_A]=3.$$
The curve $A_L\simeq B_L$ has good reduction. Thus $\Phi_A=C_3$, while semistability of $T$ gives $\Phi_T=1$. The inertia-index formula in [finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md), part 2, makes every semistabilizing ramification index for $A$ divisible by three. The cyclic cubic extension $L/K$ attains the bound for both arbitrary and Galois extensions. For $T$ the base field already attains degree one. $\square$

**Scope.** Isomorphism (1) concerns Galois modules; no compatibility with Weil pairings is asserted. In particular even the full unramified action at level three cannot repair its failure to detect semistability. At this level every inertia matrix in (3) satisfies $(g-1)^2=0$ for both curves, but the characteristic-zero inertia action on $A$ is not unipotent. This lies exactly at the excluded equality $1\cdot(3-1)=2$ in the strict bound used by [finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md). The example does not address level four, or alter that entry's conclusions at levels $8$, $9$, and primes at least $5$. No novelty beyond this explicit deduction is claimed.
