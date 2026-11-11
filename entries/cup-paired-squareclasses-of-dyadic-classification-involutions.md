---
title: Cup-paired squareclasses of dyadic classification involutions
kind: theorem
summary: 'For finite K/Q2 without i, the squareclasses of K and K(i), both cup pairings, restriction, norm and the quadratic involution depend only on the degree of K. Thus these paired mod-2 data still cannot distinguish the remaining classification candidates.'
tags: [local-fields, galois-groups, galois-cohomology, kummer-theory]
edges:
  - {to: squareclass-action-of-dyadic-classification-involutions, label: uses, note: 'Supplies the dimensions, the restriction kernel, and the rank of the involution minus the identity.'}
  - {to: dyadic-galois-groups-from-outer-involutions, label: addresses, note: 'The induced mod-2 involutions are conjugate by cup isometries preserving the restriction image for fields of the same degree.'}
  - {to: isomorphism-classes-of-p-adic-galois-groups, label: addresses, note: 'Removes the cup-paired version of this linear test for the remaining dyadic classification question; no new Galois-group isomorphism is proved.'}
  - {to: local-class-field-theory, label: uses, note: 'Norm compatibility of reciprocity gives the norm identity for Hilbert symbols used in the proof.'}
  - {to: local-tate-duality, label: uses, note: 'The quadratic cup pairings on both fields are nondegenerate.'}
  - {to: kummer-theory, label: uses, note: 'Identifies the paired squareclass space and the restriction image with mod-2 Galois cohomology.'}
---

**Setting.** Let $K/\mathbb Q_2$ be finite of degree $n$, with $i\notin K$, and put $L=K(i)$. Write $\sigma$ for the nonidentity element of $\operatorname{Gal}(L/K)$, and set
$$
B=K^\times/K^{\times2},\qquad V=L^\times/L^{\times2},\qquad
r:B\longrightarrow V,\qquad \nu:V\longrightarrow B,\qquad W=r(B),\qquad T=\sigma-1,
$$
where $r$ is restriction and $\nu$ is induced by $N_{L/K}$.
All vector spaces are over $\mathbb F_2$. For a finite extension $F/\mathbb Q_2$, let $b_F$ be its quadratic Hilbert symbol in additive notation: $(u,v)_F=(-1)^{b_F([u],[v])}$. This is the cup pairing on $H^1(G_F,\mathbb F_2)$, with the nonzero element of $H^2(G_F,\mathbb F_2)$ identified with $1$ [@milnecft, Chapter III, §4, Step 4, p. 113]. Local duality makes $b_K$ and $b_L$ nondegenerate [@milne2006adt, I, Corollary 2.3, p. 28].

**Theorem (proved here).** The diagram $(B,b_K;V,b_L;r,\nu,\sigma)$ depends only on $n$. Precisely, for two such fields of the same degree, mark the second diagram with primes. There are linear isometries $f:B\to B'$ and $g:V\to V'$ such that
$$
gr=r'f,\qquad f\nu=\nu'g,\qquad g\sigma=\sigma'g.
\tag{1}
$$
In particular, $g(W)=W'$. Moreover, the tuple $(V,b_L,\sigma,W)$ is an orthogonal sum of the following marked blocks:

- If $n$ is odd, $(n+1)/2$ copies of a four-dimensional block $Q$.
- If $n$ is even, $n/2$ copies of $Q$ and one fixed hyperbolic plane $H$.

In $Q$, take a basis $e_1,e_2,f_1,f_2$ with $b_L(e_j,f_k)=\delta_{jk}$ and all $e$-$e$ and $f$-$f$ pairings zero. Its marked subspace is $\langle e_1,e_2\rangle$, and
$$
\sigma(e_j)=e_j,\qquad
\sigma(f_1)=f_1+e_2,\qquad \sigma(f_2)=f_2+e_1.
\tag{2}
$$
In $H$, take a basis $e,f$ with $b_L(e,f)=1$; the involution is the identity and the marked subspace is $\langle e\rangle$. The marked subspace of the sum is the sum of these indicated subspaces.

**Proof.** The [unpaired computation](squareclass-action-of-dyadic-classification-involutions.md) gives, with $a=[-1]\in B$,
$$
\dim B=n+2,\quad\ker r=\langle a\rangle,\quad
\dim V=2n+2,\quad \dim W=n+1,\quad
T=r\nu,\quad \operatorname{im}T\subseteq W\subseteq\ker T,
\quad t:=\operatorname{rank}T=
\begin{cases}n+1,&n\text{ odd},\\n,&n\text{ even}.\end{cases}
\tag{3}
$$

*1. The norm identity.* For $x\in V$ and $z\in B$,
$$
b_L(x,r(z))=b_K(\nu(x),z).
\tag{4}
$$
Indeed, choose representatives $u\in L^\times$ and $v\in K^\times$. By the reciprocity description of the Hilbert symbol, $(v,u)_L$ is the sign by which $\operatorname{rec}_L(u)$ acts on $\sqrt v$. Norm compatibility in the Galois tower $L(\sqrt v)\supseteq L\supseteq K$ identifies this with the action of $\operatorname{rec}_K(N_{L/K}u)$, namely $(v,N_{L/K}u)_K$. Symmetry proves (4) [@milnecft, Chapter III, Lemma 3.2, p. 107; Theorem 4.4(b) and Remark 4.5, pp. 113–114].

For every such $F$,
$$
b_F(z,z)=b_F(z,[-1]).
\tag{5}
$$
For a nonsquare representative $u$, the element $-u$ is the norm of $\sqrt u$ from $F(\sqrt u)$. Thus $b_F([u],[-u])=0$ by the norm criterion for the Hilbert symbol, which gives (5) by bilinearity. For a square representative both sides vanish [@milnecft, Chapter III, Theorem 4.4(a),(d), pp. 113–114].

The form $b_L$ is nondegenerate, and (5) makes it alternating because $-1$ is a square in $L$. Equation (4) and $\nu r=0$ give $b_L(r(z),r(z'))=0$ for all $z,z'\in B$. By (3), $W$ is therefore Lagrangian: it is isotropic of half the dimension of $V$.

*2. The base pairing.* The nonzero vector $a$ is the characteristic vector of $b_K$: by (5), $b_K(z,z)=b_K(z,a)$ for every $z$. Since $b_K$ is nondegenerate and $a\ne0$, it is nonalternating. Every nondegenerate nonalternating symmetric form of dimension $d$ over $\mathbb F_2$ is isometric to the dot product on $\mathbb F_2^d$. Here is a proof. Split off vectors of norm one orthogonally until the complement is alternating; decompose that complement into hyperbolic planes. A norm-one line with basis $e$ absorbs a hyperbolic plane with basis $u,v$: the three vectors $e+u,e+v,e+u+v$ are an orthonormal basis of their sum. Repeating gives an orthonormal basis of the entire space.

Thus $b_K$ depends only on $\dim B=n+2$. Choose an isometry $f:B\to B'$. Characteristic vectors are unique by nondegeneracy, so $f(a)=a'$. By (3), $f$ therefore induces an isomorphism $h:W\to W'$ with $hr=r'f$.

*3. Extension across the Lagrangian.* Every such $h$ extends to an isometry $g:(V,b_L)\to(V',b_{L'})$. To check this, choose a basis $e_1,\ldots,e_{n+1}$ of $W$ and vectors $f_j$ with $b_L(e_i,f_j)=\delta_{ij}$. They form a basis of $V$ together. They can be adjusted by vectors of $W$ to make all $f$-$f$ pairings zero: the matrix $C=(b_L(f_i,f_j))$ is symmetric with zero diagonal, and replacing $f_j$ by $f_j+\sum_i d_{ij}e_i$ replaces $C$ by $C+D+D^{\mathrm t}$. Set $d_{ij}=C_{ij}$ for $i<j$ and all other entries zero. Do the same starting with $h(e_i)$ in $V'$, and map the resulting dual bases to one another. This gives $g$ and $gr=r'f$.

For $x\in V$ and $z'\in B'$, equation (4) now gives
$$
b_{K'}(f\nu x,z')=b_K(\nu x,f^{-1}z')
=b_L(x,rf^{-1}z')
=b_{L'}(gx,r'z')=b_{K'}(\nu'gx,z').
$$
Nondegeneracy implies $f\nu=\nu'g$. Using $T=r\nu$ and $T'=r'\nu'$ then gives $gT=T'g$, and hence (1).

*4. The explicit blocks.* The additional identity needed for the block form in characteristic two is
$$
b_L(x,Tx)=b_L(x,r\nu(x))
=b_K(\nu(x),\nu(x))
=b_K(\nu(x),[-1])=0.
\tag{6}
$$
The last equality holds because every representative of $\nu(x)$ is a norm from $K(i)$, so the norm criterion gives $b_K([-1],\nu(x))=0$. Consequently the bilinear form $c(x,y)=b_L(x,Ty)$ is alternating, not merely symmetric.

Choose an adapted symplectic basis as in step 3, and write $Tf_j=\sum_i a_{ij}e_i$. Then
$$
a_{ij}=b_L(f_i,Tf_j)=c(f_i,f_j).
$$
By (6), the matrix $A=(a_{ij})$ is alternating, and by (3) it has rank $t$.

An alternating matrix of rank $t$ is congruent to $t/2$ copies of $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and a zero block: whenever the form is nonzero, choose two vectors pairing to one, split off their nondegenerate plane, and continue in its orthogonal complement; the remaining space is its radical. A change of basis among the $f_j$, with the dual change among the $e_i$, preserves $b_L$ and $W$ and makes precisely this congruence change to $A$.

Each two-by-two block of $A$ gives (2), hence a copy of $Q$. Each zero coordinate gives a copy of $H$. Equation (3) gives $(n+1-t)=0$ zero coordinates for odd $n$, and one for even $n$, completing the proof. $\square$

**Checks and scope.** For $K=\mathbb Q_2$ the model is one $Q$; in degree $2$ it is $Q\perp H$; in degree $4$ it is $Q\perp Q\perp H$. Forgetting the pairings recovers exactly the regular and trivial module counts in (3). Identity (6) is essential to the block form: replacing (2) by $Tf_j=e_j$ gives the same unpaired module and marked subspace in dimension four and still preserves $b_L$, but has $b_L(f_1,Tf_1)=1$, so it is not equivariantly isometric to $Q$.

Under Kummer theory, $W$ is the restriction image from $H^1(G_K,\mathbb F_2)$, and $\sigma$ is the action of the [classification involution](dyadic-galois-groups-from-outer-involutions.md). Thus even both cup pairings together with restriction and norm add no distinction to this mod-$2$ test, without a ramification assumption on $L/K$. The isometry constructed here is not shown to be induced by an automorphism of $G_L$. No compatibility is asserted for higher cohomology operations or additional cyclotomic data, such as the squareclass of $i$ in $L$. The remaining conjugacy question in the full outer automorphism group stays open.
