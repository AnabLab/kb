---
title: Four-torsion does not determine semistable reduction
kind: theorem
summary: 'Over a p-adic field containing i, p odd, a Tate curve and its ramified quadratic twist have isomorphic full 4-torsion Galois modules but finite monodromy groups 1 and C_2. At level four, no elliptic curve with potentially good reduction can occur in such a pair.'
tags: [elliptic-curves, local-fields, ramification, reconstruction-algorithms]
edges:
  - {to: finite-torsion-recovers-semistable-inertia, label: uses, note: 'Its definition of the finite monodromy group and its part 2 give the minimum semistabilizing degrees; this example shows that its reconstruction conclusion cannot extend to levels 4 and 2.'}
  - {to: weil-pairing-and-cyclotomic-character, label: uses, note: 'Inertia matrices on the 2-adic Tate module have determinant 1, as used in part 3; part 1 also uses the primitivity of the Weil pairing on a basis.'}
  - {to: neron-ogg-shafarevich-criterion, label: uses, note: 'Potentially good reduction means finite inertia image (Serre–Tate), as used in part 4.'}
  - {to: three-torsion-does-not-determine-semistable-reduction, label: analogous-to, note: 'The level-three example pairs a potentially good curve with a Tate curve; part 4 shows that no potentially good curve can play that role at level four.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite with $p$ odd, let $I_K\subset G_K$ be inertia, and let $\pi$ be a uniformizer. In parts 1 and 2 assume also that $K$ contains a primitive fourth root of unity $i$, for example $K=\mathbb Q_5$ and $\pi=5$. For an elliptic curve $C/K$ write $\rho_C:G_K\to\operatorname{Aut}(T_2C)$. As in [finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md), $J_C$ is the set of $\sigma\in I_K$ with $\rho_C(\sigma)$ unipotent, and $\Phi_C=I_K/J_C$ is the finite monodromy group.

Let $E=E_\pi$ be the Tate curve
$$E:\ y^2+xy=x^3+a_4(\pi)x+a_6(\pi)$$
[@kedlaya2004tate, equation (1), p. 2, and Theorem 1, p. 3]. Since $2$ is invertible, $Y=y+x/2$ gives the model $Y^2=f(x)$ with $f(x)=x^3+x^2/4+a_4(\pi)x+a_6(\pi)$. Since $E$ is smooth, $f$ has distinct roots, so the quadratic twist $E':\ \pi Y^2=f(x)$ is an elliptic curve over $K$. Fix $\varpi\in\bar K$ with $\varpi^4=\pi$, put $\sqrt\pi=\varpi^2$, and define
$$t:G_K\to\mathbb Z/4,\qquad g(\varpi)=i^{t(g)}\varpi,\qquad \varepsilon=(-1)^t,$$
so that $g(\sqrt\pi)=\varepsilon(g)\sqrt\pi$.

**Theorem (proved here).**

1. There is an isomorphism of full $G_K$-modules $E[4]\simeq E'[4]$, hence also $E[2]\simeq E'[2]$. Both four-torsion fields equal $K(\varpi)$. Every $G_K$-isomorphism $\psi:E[4]\to E'[4]$ satisfies $e'_4(\psi P,\psi Q)=e_4(P,Q)^{-1}$ for the Weil pairings, so none respects them.
2. $E$ has split multiplicative reduction and $\Phi_E=1$. $E'$ is not semistable: $J_{E'}=I_K\cap G_{K(\sqrt\pi)}$ and $\Phi_{E'}\simeq C_2$. The minimum degree of a semistabilizing extension, arbitrary or Galois, is $1$ for $E$ and $2$ for $E'$.
3. Let $C/K$ be any elliptic curve, $\sigma\in I_K$, and $h$ the action of $\sigma$ on $C[4]$.
   - (a) If $h=1$, then $\rho_C(\sigma)$ is unipotent.
   - (b) If $h=-1$, or if $(h-1)^2\ne0$, then $\rho_C(\sigma)$ is not unipotent.
   - (c) If $(h-1)^2=0$, then $\rho_C(\sigma)$ or $-\rho_C(\sigma)$ is unipotent. If moreover $\rho_C(\sigma)$ has finite order, then $h=\pm1$.

   Consequently, $(h-1)^2=0$ holds for every $\sigma\in I_K$ exactly when $C$ is semistable or briefly unstable, that is, purely additive and semistable over a quadratic extension.
4. Let $A,B$ be elliptic curves over $K$ with $A[4]\simeq B[4]$ as $I_K$-modules. If $A$ has potentially good reduction, then $J_A=J_B$, and both equal the kernel of the action of $I_K$ on $A[4]$. In particular $\Phi_A\simeq\Phi_B$. So in any pair as in part 1, with isomorphic four-torsion and different monodromy, neither curve has potentially good reduction.

**Proof.** *1. The torsion modules.* The polynomial $X^4-\pi$ is Eisenstein, so $K(\varpi)/K$ is totally ramified of degree $4$. It contains every root $i^k\varpi$, and $i\in K$, so $t$ is a homomorphism, and it is surjective even on $I_K$.

Tate uniformization is a $G_K$-equivariant surjective homomorphism $\bar K^\times\to E(\bar K)$ with kernel $\pi^{\mathbb Z}$ [@kedlaya2004tate, Theorem 1, p. 3]. The classes $e=[i]$ and $v=[\varpi]$ form a basis of $E[4]$. Indeed, if $x^4=\pi^n$ then $x\varpi^{-n}\in\mu_4$, and a relation $i^a\varpi^b\in\pi^{\mathbb Z}$ forces $4\mid b$ by valuation and then $4\mid a$. Since $i\in K$,
$$g(e)=e,\qquad g(v)=v+t(g)\,e\qquad(g\in G_K).\tag{1}$$
In this basis $g$ acts by $N^{t(g)}$ with $N=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. As $N$ has order $4$, the kernel of the action is $\ker t=G_{K(\varpi)}$.

Over $K(\sqrt\pi)$ the map $\varphi:E'\to E$, $(x,Y)\mapsto(x,\sqrt\pi\,Y)$, is an isomorphism of elliptic curves. It is a change of Weierstrass coordinates fixing the point at infinity, hence a group isomorphism on $\bar K$-points. Negation on $E$ is $(x,Y)\mapsto(x,-Y)$, so $g(\sqrt\pi)=\varepsilon(g)\sqrt\pi$ gives
$$\varphi(gP)=\varepsilon(g)\,g(\varphi(P))\qquad(g\in G_K,\ P\in E'(\bar K)).\tag{2}$$

Put $e'=\varphi^{-1}(2v-e)$ and $v'=\varphi^{-1}(v)$. They form a basis of $E'[4]$, because $(2v-e,v)$ is a basis of $E[4]$. For $g\in G_K$ with $t=t(g)$, (1) and (2) give
$$\varphi(ge')-\varphi(e')=\varepsilon(g)\bigl(2v+(2t-1)e\bigr)-(2v-e),$$
$$\varphi(gv')-\varphi(v'+te')=\varepsilon(g)(v+te)-(1+2t)v+te.$$
If $t$ is even, then $\varepsilon(g)=1$ and $2t\equiv0\pmod4$, and both right-hand sides are $2te$ and $2t(e-v)$, which vanish. If $t$ is odd, then $\varepsilon(g)=-1$ and $2t\equiv2\pmod4$, and the right-hand sides are $-4v+(2-2t)e$ and $-(2+2t)v$, which vanish. So $g(e')=e'$ and $g(v')=v'+t(g)e'$, and $e\mapsto e'$, $v\mapsto v'$ is a $G_K$-isomorphism $\psi_0:E[4]\to E'[4]$. It restricts to the $2$-torsion, which is the kernel of multiplication by $2$, and the two four-torsion fields agree.

*Weil pairings.* The image of $G_K$ in $\operatorname{Aut}E[4]$ is generated by $N$. A matrix over $\mathbb Z/4$ commutes with $N$ exactly when it commutes with $N-1=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, that is, when it has the form $\begin{pmatrix}a&b\\0&a\end{pmatrix}$. Its determinant is $a^2$, which is $1$ for a unit $a$ of $\mathbb Z/4$. So every $G_K$-isomorphism has the form $\psi=\psi_0\circ c$, where $c=\psi_0^{-1}\psi$ is a $G_K$-automorphism of $E[4]$ and $\det c=1$. In the basis $(e,v)$, the matrix of $\varphi\circ\psi_0$ is $\begin{pmatrix}-1&0\\2&1\end{pmatrix}$, so $\det(\varphi\circ\psi)=-1$. For any endomorphism $D$ of $E[4]$, bilinearity and alternation give $e_4(DP,DQ)=e_4(P,Q)^{\det D}$. Finally $\varphi$ carries $e'_4$ to $e_4$. This follows from the definition $e_4(P,Q)=(g_Q\circ\tau_P)/g_Q$, where $\operatorname{div}g_Q=\sum_{4Q_1=Q}[Q_1]-\sum_{4P_1=0}[P_1]$ [@sutherland2025weil, §23.5, definition of $D_Q$ and $e_n$, pp. 9–10]. Pulling back along $\varphi$ is compatible with divisors, $\operatorname{div}(f\circ\varphi)=\varphi^*\operatorname{div}f$ [@sutherland2025weil, §23.4, p. 9]. As $\varphi$ is also a group isomorphism, $g_{\varphi Q}\circ\varphi$ has the divisor required of $g_Q$ on $E'$, and $\tau_{\varphi P}\circ\varphi=\varphi\circ\tau_P$. Hence
$$e'_4(\psi P,\psi Q)=e_4(\varphi\psi P,\varphi\psi Q)=e_4(P,Q)^{-1}.$$
On a basis $(P,Q)$ the value $e_4(P,Q)$ has order $4$, by the [Weil pairing entry](weil-pairing-and-cyclotomic-character.md), so it differs from its inverse.

*2. Reduction types.* The Tate curve has split multiplicative reduction [@kedlaya2004tate, Theorem 2(b), p. 4], so it is semistable and $\Phi_E=1$. Grothendieck's criterion then makes $\rho_E(\sigma)$ unipotent for all $\sigma\in I_K$ [@silverbergzarhin2001etale, Theorem 4.1, p. 148]. By (2), $\varphi$ induces an isomorphism $T_2E'\simeq T_2E$ carrying $\rho_{E'}(g)$ to $\varepsilon(g)\rho_E(g)$. For $\sigma\in I_K$ with $\varepsilon(\sigma)=1$, $\rho_{E'}(\sigma)$ is unipotent. With $\varepsilon(\sigma)=-1$ all its eigenvalues are $-1$, so it is not. Thus $J_{E'}=I_K\cap\ker\varepsilon=I_K\cap G_{K(\sqrt\pi)}$. Since $\varepsilon$ is surjective on $I_K$, $\Phi_{E'}\simeq C_2$, and $E'$ is not semistable by the same criterion. As $I_{K(\sqrt\pi)}=J_{E'}$, part 2 of [finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md) shows that $E'$ becomes semistable over $K(\sqrt\pi)$. It also shows that every semistabilizing extension has ramification index divisible by $2$. The Galois extension $K(\sqrt\pi)/K$ of degree $2$ attains this bound.

*3. Inertia matrices at level four.* Put $g=\rho_C(\sigma)$, a matrix in $\operatorname{GL}_2(\mathbb Z_2)$ after choosing a basis of $T_2C$, with reduction $h$ modulo $4$. Two facts are used throughout.

- $\det g=1$. Indeed $\det\rho_C$ is the $2$-adic cyclotomic character, by the [Weil pairing entry](weil-pairing-and-cyclotomic-character.md). Since $p$ is odd, $X^{2^n}-1$ is separable modulo $p$, so Hensel's lemma puts $\mu_{2^n}$ in an unramified extension of $K$, which $\sigma$ fixes.
- The eigenvalues of $g$ are roots of unity, since a positive power of $g$ is unipotent [@silverbergzarhin2001etale, proof of Lemma 4.2, p. 148].

The estimate [@silverbergzarhin2001etale, Theorem 3.2, p. 144] applies to a matrix $g$ with $(g-1)^r\in\ell^m\operatorname{M}_2(\mathbb Z_\ell)$ and an eigenvalue $\lambda$ that is a root of unity. If $r<m(\ell-1)$ it gives $\lambda=1$, and if $r=m(\ell-1)$ it gives $\lambda^\ell=1$. Here $\ell=2$ and $m=2$.

(a) If $h=1$, take $r=1$. Every eigenvalue is $1$, so $g$ is unipotent.

(b) A unipotent $g$ satisfies $(g-1)^2=0$ [@silverbergzarhin2001etale, Lemma 4.2(i), p. 148], so $(h-1)^2=0$. If $h=-1$, write $g-1=-2(1-2X)$ with $X\in\operatorname{M}_2(\mathbb Z_2)$. Then $1-2X$ is invertible and $(g-1)^2=4(1-2X)^2\ne0$, so $g$ is not unipotent.

(c) If $(h-1)^2=0$, take $r=2$. Every eigenvalue satisfies $\lambda^2=1$. The two eigenvalues have product $\det g=1$, so they are both $1$ or both $-1$, and $g$ or $-g$ is unipotent. If $g$ has finite order it is diagonalizable over $\bar{\mathbb Q}_2$, so $g=\pm1$ and $h=\pm1$.

For the consequence, suppose first that $(h-1)^2=0$ for every $\sigma\in I_K$. By (c), $\rho_C(\sigma)$ or $-\rho_C(\sigma)$ is unipotent for every $\sigma$. Silverberg and Zarhin show that this is equivalent to $C$ being semistable or briefly unstable [@silverbergzarhin2001etale, Definition 5.2 and Theorem 5.5, p. 149]. Conversely, for such $C$ their theorem makes $g$ or $-g$ unipotent. Then either $(g-1)^2=0$, or $(g+1)^2=0$ [@silverbergzarhin2001etale, Lemma 4.2(ii), p. 148] and $(g-1)^2=(g+1)^2-4g\in4\operatorname{M}_2(\mathbb Z_2)$.

*4. Potentially good curves.* Since $A$ has potentially good reduction, $\rho_A(I_K)$ is finite by the [Néron–Ogg–Shafarevich criterion](neron-ogg-shafarevich-criterion.md), part on potentially good reduction. Let $\psi:A[4]\to B[4]$ be an $I_K$-isomorphism and $\sigma\in I_K$. Write $h_A,h_B$ for the actions of $\sigma$, so that $h_B=\psi h_A\psi^{-1}$. By (c) for $A$, either $h_A=\pm1$ or $(h_A-1)^2\ne0$. Conjugation by $\psi$ preserves each alternative, including the sign. By (a) and (b), applied to both curves,
$$\sigma\in J_A\iff h_A=1\iff h_B=1\iff\sigma\in J_B.$$
So $J_A=J_B$ is the kernel of the action of $I_K$ on $A[4]$. $\square$

**Remarks.**

- *Sharpness.* [Finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md) needs a level $\ell^m$ with $m(\ell-1)>2$, which excludes exactly the prime-power levels $2$, $3$ and $4$. Part 1 shows that levels $4$ and $2$ fail, and the [three-torsion example](three-torsion-does-not-determine-semistable-reduction.md) shows that level $3$ fails, in each case for elliptic curves and full Galois modules. This is consistent with the remark of Silverberg and Zarhin that their exceptional sets cannot be made smaller in the case of $H^1$ [@silverbergzarhin2001etale, Introduction, p. 143]; that remark is not used here.
- *What level four detects.* At level four, every inertia element of $E'$ passes the square-zero test: in the basis $(e',v')$ its matrices are powers of $N$, and $(N^k-1)^2=0$. Part 3 identifies what the test detects for elliptic curves: semistable or briefly unstable reduction. The curve $E'$ is briefly unstable. An inertia element with $\varepsilon(\sigma)=-1$ has no eigenvalue $1$, so $V_2(E')^{I_K}=0$ and $E'$ is purely additive [@silverbergzarhin2001etale, Proposition 4.4, p. 149], and it becomes semistable over $K(\sqrt\pi)$.
- *Potentially good partners.* For a ramified quadratic twist $A$ of a good-reduction curve, inertia acts on $A[4]$ through $\{\pm1\}$. Part 4 shows that every elliptic curve $B$ with $B[4]\simeq A[4]$ as $I_K$-modules has $\Phi_B\simeq C_2$. So such curves cannot give a level-four example, with any partner.
- *Scope.* Parts 1 and 2 assume $i\in K$; fields without $i$ are not treated. Parts 3 and 4 use $\dim C=1$ through the determinant, and are not claimed for higher-dimensional abelian varieties. The isomorphisms of part 1 are isomorphisms of Galois modules and invert the Weil pairings. No novelty is claimed beyond these deductions.
