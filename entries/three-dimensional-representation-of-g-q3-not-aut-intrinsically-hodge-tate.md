---
title: A three-dimensional Hodge–Tate representation of G_Q_3 that is not Aut-intrinsically Hodge–Tate
kind: theorem
summary: 'The Lubin–Tate representation of the unramified cubic extension of Q_3 extends to an irreducible three-dimensional Hodge–Tate representation of G_Q_3 that is not Aut-intrinsically Hodge–Tate. A central-unit lift and the units of Z[C_3] prove the failure.'
tags: [local-fields, galois-groups, hodge-theory, pro-p-groups]
edges:
  - {to: automorphisms-of-the-galois-group-of-qp-scale-norm-one-units, label: uses, note: 'Its proof of part 2, especially (c)–(d): the inertia idempotents, the central-unit variant of the corrected lifting argument, and the finite tame-level relations.'}
  - {to: two-dimensional-representation-of-g-qp-not-aut-intrinsically-hodge-tate, label: analogous-to, note: 'Uses an unramified cubic at p = 3 instead of the unramified quadratic at p at least 5. It leaves the two-dimensional question over Q_3 open.'}
  - {to: aut-intrinsic-hodge-tate-representations, label: uses, note: 'The definition and the Lubin–Tate character; Hoshi’s dimension-one theorem gives the lower bound on dimension in the final remark.'}
  - {to: non-galois-lubin-tate-representations-are-not-aut-intrinsically-hodge-tate, label: uses, note: 'Its proof of part 1: Hodge–Tate-ness is preserved by restriction to, and descends from, a finite Galois extension.'}
  - {to: local-field-galois-invariants, label: uses, note: 'Inertia, the unramified Frobenius and the cyclotomic character are preserved by automorphisms.'}
  - {to: local-class-field-theory, label: uses, note: 'Reciprocity identifies units with the image of inertia and is compatible with conjugation.'}
  - {to: multiplicative-group-of-a-p-adic-field, label: uses, note: 'For the unramified cubic K/Q_3, logarithm identifies 1 + 3 O_K with 3 O_K.'}
  - {to: p-adic-cyclotomic-tower, label: uses, note: 'The cyclotomic extension of Q_3 is totally ramified and its principal-unit character has infinite image.'}
  - {to: local-galois-group-presentations, label: uses, note: 'The presentation of G_Q_3 and the corrected lifting theorem (7.5.15), which prescribes agreement only modulo the Frattini subgroup of wild inertia.'}
---

**Setting.** Put $G=G_{\mathbb Q_3}$, let $K/\mathbb Q_3$ be the unramified cubic extension, and let $\varphi$ generate $\operatorname{Gal}(K/\mathbb Q_3)=C_3$ as arithmetic Frobenius. Let $\chi:G_K\to\mathcal O_K^\times$ be inverse reciprocity followed by the projection killing the uniformizer $3$, and let $\rho_K$ be multiplication by $\chi$ on $K_+$. This is the Lubin–Tate representation in [@hoshi2024, Definition 1.7, p. 5]. Write $U=1+3\mathcal O_K$.

**Theorem (proved here).**

1. $\rho_K$ extends to a continuous irreducible three-dimensional Hodge–Tate representation $W$ of $G$.
2. There is $\theta\in\operatorname{Aut}(G)$ whose action through reciprocity on $U/U^3$ is
   $$1+(\varphi-1)^2=2+\varphi+\varphi^2\quad\text{in }\mathbb F_3[C_3].\tag{1}$$
   This quotient is a free rank-one $\mathbb F_3[C_3]$-module.
3. At least one of $W\circ\theta$ and $W\circ\theta^{-1}$ is not Hodge–Tate. Thus $W$ is not Aut-intrinsically Hodge–Tate.

**1. Extending the representation.** Take $s\in G$ lifting $\varphi$. Reciprocity and conjugation give
$$\chi(shs^{-1})=\varphi(\chi(h))\qquad(h\in G_K).\tag{2}$$
This compatibility is part of the reciprocity modulation [@neukirchschmidtwingberg2008, Chapter III, §2, p. 170; (7.1.5), p. 375]. In particular $a=\chi(s^3)$ is fixed by $\varphi$, so $a\in\mathbb Z_3^\times$. The norm on units of an unramified extension is surjective [@milnecft, III, Proposition 1.2, p. 98]. Choose $c\in\mathcal O_K^\times$ with $N_{K/\mathbb Q_3}(c)=a$. Define $W(h)$ to be multiplication by $\chi(h)$ for $h\in G_K$, and define $W(s)x=c\varphi(x)$. Equation (2) and $W(s)^3=a=W(s^3)$ verify the conjugation and power relations for the three cosets of $G_K$. They therefore define a representation of $G$, continuous on each open coset.

The image $\chi(G_K)=\mathcal O_K^\times$ spans $K$ over $\mathbb Q_3$. A stable subspace is consequently a $K$-subspace of $K$, proving irreducibility already on $G_K$. Hoshi’s criterion, with the identity exponent one and the other exponents zero, makes $\rho_K$ Hodge–Tate [@hoshi2024, Lemma 1.8, p. 5]. Finite Galois descent of Hodge–Tate-ness, as in [the Lubin–Tate entry](non-galois-lubin-tate-representations-are-not-aut-intrinsically-hodge-tate.md), makes $W$ Hodge–Tate.

**2. A central unit with a cubic unramified action.** Use the notation and splitting from the proof of part 2 of [norm-one units](automorphisms-of-the-galois-group-of-qp-scale-norm-one-units.md), now at $p=3$:
$$G=V\rtimes\Gamma,\qquad \Gamma=\langle\sigma,\tau:\sigma\tau\sigma^{-1}=\tau^3\rangle,\qquad \Lambda=\mathbb F_3[[\Gamma]].$$
Here $V$ is wild inertia, $\sigma$ fixes $\mu_3$, $\omega(\tau)=-1$ for the mod-$3$ cyclotomic character $\omega$, and $\rho^*=\omega(\rho)\rho^{-1}$ defines the anti-involution of $\Lambda$. Let $T_1,T_\omega$ be the orthogonal central inertia idempotents defined in that proof: at a finite quotient with inertia order $e$ divisible by $2$,
$$T_\xi=\frac1e\sum_{i=0}^{e-1}\xi(\tau)^{-i}\tau^i,\qquad \xi\in\{1,\omega\}.$$
The compatible sums satisfy $T_1^*=T_\omega$, $T_\omega^*=T_1$, and $\tau T_\xi=\xi(\tau)T_\xi$.

Let $\sigma_3=\sigma^{\pi_3}$ be the pro-$3$ component of $\sigma$, and put $t=\sigma_3-1$. The elements $T_\xi\sigma_3$ are central. Indeed, $\tau\sigma=\sigma\tau^{1/3}$ gives $\tau\sigma T_\xi=\sigma T_\xi\tau$, because the character $\xi$ has order at most two and $1/3$ is one modulo that order. Thus $\sigma T_\xi$, and by continuity $\sigma_3T_\xi$, commute with both generators. In every finite quotient the image of $\sigma_3$ has $3$-power order, so $t$ is nilpotent there. Consequently
$$z=1+T_1t^2\in\Lambda^\times,\qquad \varepsilon=z(z^*)^{-1}\in Z(\Lambda)^\times,\qquad \varepsilon\varepsilon^*=1.\tag{3}$$
The inverses exist compatibly at every finite quotient, which justifies (3) in the completed ring.

There is a second condition in the lifting argument. For a finite tamely ramified Galois extension $L/\mathbb Q_3$ containing $K(\mu_3)$, let
$$\kappa_L=\sum_{i=0}^{f_L-1}\sigma^i,\qquad \lambda_L=T_\omega\text{ at the level }\operatorname{Gal}(L/\mathbb Q_3),$$
where $f_L$ is its residue degree. One has $\sigma\kappa_L\lambda_L=\kappa_L\lambda_L$: the extra term is $(\sigma^{f_L}-1)\lambda_L$, and $\sigma^{f_L}=\tau^j$ with $\omega(\tau)^j=1$. Hence $\sigma_3$ fixes this element too. Both $t$ and $\sigma_3^{-1}-1$ annihilate it, so
$$\varepsilon\kappa_L\lambda_L=\kappa_L\lambda_L.\tag{4}$$

The central-unit lifting calculation in [norm-one units](automorphisms-of-the-galois-group-of-qp-scale-norm-one-units.md), proof of part 2(d), now applies to $\varepsilon$. Its three requirements are precisely centrality, $\varepsilon\varepsilon^*=1$, and (4). Write $V^1=V$ and $V^{i+1}=(V^i)^3[V^i,V]$ for the closed $3$-central series, so $V^2=\Phi(V)$. To specify the application, let $F=P_2\rtimes\Gamma$ be the free pro-$3$ operator presentation on $x_0,x_1$. Fix $\Gamma,x_0$ and send $x_1$ to a lift of $\varepsilon\bar x_1$ in $P_2/\Phi(P_2)$. Write $y_1\equiv x_1^\delta$ modulo $\Phi(P_2)$, as in that calculation. The resulting automorphism preserves each tame-level Demushkin relation modulo the third $3$-central term: (4) fixes the power term, while the commutator term changes by $\varepsilon\delta\varepsilon^*=\delta$. These tame levels are cofinal. Thus it induces an automorphism of $G/V^3$ over $\Gamma$, and the corrected lifting theorem gives $\theta\in\operatorname{Aut}(G)$ with
$$\theta(\rho)\in\rho V^2\ (\rho\in\Gamma),\qquad \theta(x_0)\in x_0V^2,\qquad \overline{\theta(x_1)}=\varepsilon\bar x_1\text{ in }V/V^2.\tag{5}$$
The source gives only agreement modulo $V^2$ [@neukirchschmidtwingberg2008, (7.5.15), p. 421, and the calculation on pp. 422–423].

**3. Computing the action on principal units.** The image of $V$ in $G_K^{\mathrm{ab}}$ is exactly $\operatorname{rec}_K(U)$. Indeed inertia is common to $K$ and $\mathbb Q_3$, its quotient by $V$ has order prime to $3$, and its unit image is $\mathcal O_K^\times$ with pro-$3$ Sylow subgroup $U$. Put $M=U/U^3$, written additively. The logarithm identifies $U$ with $3\mathcal O_K$, so $\dim_{\mathbb F_3}M=3$. Conjugation by $\Gamma$ acts on $M$ through $C_3$, with $\sigma$ acting as $\varphi$ and $\tau$ trivially.

Let $v_i\in M$ be the images of $x_i$. Abelianizing the Jannsen–Wingberg relation modulo $3$ gives $\varphi v_0=0$: the power and commutator terms vanish, and the coefficient of $v_0$ in $\langle x_0,\tau\rangle$ is
$$\frac{\bar h+\bar h^2}{2}=0\quad(\bar h=-1\in\mathbb F_3).$$
Thus $v_0=0$. Since $x_0,x_1$ normally generate $V$, the three vectors $v_1,\varphi v_1,\varphi^2v_1$ span $M$ and hence form a basis. This proves the regular-module assertion without assuming semisimplicity in characteristic $3$.

On $M$, $T_1$ acts as one, $T_\omega$ as zero, and $\sigma_3$ as $\varphi$. Equations (3) and (5) therefore give (1). The polynomial in (1) is a unit: if $n=\varphi-1$, then $n^3=0$ and $(1+n^2)^{-1}=1-n^2=2\varphi+2\varphi^2$. Its coefficient vector is $(2,1,1)$, distinct from those of $1,\varphi,\varphi^2$.

**4. Hodge–Tate-ness and integral group-ring units.** Every $\eta\in\operatorname{Aut}(G)$ preserves $G_K$ and induces the identity on $G/G_K$, by invariance of inertia and unramified Frobenius. Its unit action $\eta_K^\times$ therefore commutes with $\varphi$: the conjugating elements for $\sigma$ and $\eta(\sigma)$ differ by an element of $G_K$, which acts trivially on $G_K^{\mathrm{ab}}$. Write $A_\eta$ for its action on $\log U$.

Choose $u_1\in U$ corresponding to the image of $x_1$. Step 3 shows that $\log u_1,\varphi\log u_1,\varphi^2\log u_1$ form a $\mathbb Z_3$-basis of $\log U$: their reductions form a basis modulo $3$. Consequently the commuting action has a unique expression
$$A_\eta=a_0+a_1\varphi+a_2\varphi^2\in\mathbb Z_3[C_3]^\times.\tag{6}$$
Its augmentation is one. To see this without dividing by $3$ integrally, compose the cyclotomic character on $\operatorname{rec}_K(U)$ with logarithm. This gives a nonzero $\varphi$-invariant linear functional $\ell$ on $\log U\otimes\mathbb Q_3$: the cyclotomic extension of $\mathbb Q_3$ is totally ramified, and its principal-unit character has infinite image. Invariance of the cyclotomic character gives $\ell A_\eta=\ell$, while (6) gives $\ell A_\eta=(a_0+a_1+a_2)\ell$. Hence $a_0+a_1+a_2=1$.

By finite restriction and descent, $W\circ\eta$ is Hodge–Tate exactly when $\rho_K\circ\eta|_{G_K}$ is. Hoshi’s criterion [@hoshi2024, Lemma 1.8, p. 5], applied with coefficient field $K$, says this is equivalent to
$$\eta_K^\times(u)=u^{m_0}\varphi(u)^{m_1}\varphi^2(u)^{m_2}$$
on some open subgroup of $U$, for integers $m_i$. Taking logarithms, and then using that this subgroup spans $K$, shows this is equivalent to
$$A_\eta\in\mathbb Z[C_3].\tag{7}$$
Conversely, integral coefficients in (6) give the required identity on all of $U$, by injectivity of logarithm.

Here is the elementary integral-unit calculation. Every augmentation-one unit of $\mathbb Z[C_3]$ is $1,\varphi$ or $\varphi^2$. Evaluate such a unit at a complex primitive cube root $\zeta$. Its image is a unit of $\mathbb Z[\zeta]$. Writing it as $b+c\zeta$, its norm is $b^2-bc+c^2=1$, whose integer solutions give exactly $\{\pm1,\pm\zeta,\pm\zeta^2\}$. Modulo $1-\zeta$, the image equals the augmentation one in $\mathbb F_3$, excluding the minus signs. Evaluation together with augmentation is injective on $\mathbb Z[C_3]$, since $X^3-1=(X-1)(X^2+X+1)$ has distinct factors over $\mathbb Q$. Thus the original unit is the corresponding power of $\varphi$.

If both $W\circ\theta$ and $W\circ\theta^{-1}$ were Hodge–Tate, (7) would put both $A_\theta$ and its inverse in $\mathbb Z[C_3]$. Its augmentation is one, so the preceding calculation would force $A_\theta\in C_3$. Reducing modulo $3$ contradicts (1). This proves part 3. $\square$

**Scope.** The construction supplies dimension three over the base field $\mathbb Q_3$; it does not give dimension two. Together with Hoshi’s dimension-one theorem [@hoshi2024, Theorem 2.7, p. 8], the least dimension over $\mathbb Q_3$ is therefore either two or three. The quadratic norm-one construction for $p\ge5$ cannot detect this example: it sees only $\mathbb F_3^\times=\{\pm1\}$. Here the nontrivial nilpotent element of $\mathbb F_3[C_3]$ supplies the extra action. No claim is made that the chosen lift has finite order, or finitely many outer conjugates.
