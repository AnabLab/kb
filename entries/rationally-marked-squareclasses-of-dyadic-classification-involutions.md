---
title: Rational squareclass marks do not distinguish dyadic classification involutions
kind: theorem
summary: 'For dyadic fields without i, the cup-paired squareclass diagram of K and K(i), marked by every rational squareclass and the class of i upstairs, depends only on the degree and the rational squareclasses becoming squares in K. Equal maximal abelian subfields give the same marks.'
tags: [local-fields, galois-groups, galois-cohomology, kummer-theory]
edges:
  - {to: cup-paired-squareclasses-of-dyadic-classification-involutions, label: uses, note: 'Its proof supplies the characteristic vector, the Lagrangian restriction image and norm adjunction. Here the base isometry is chosen to preserve every rational squareclass.'}
  - {to: dyadic-galois-groups-from-outer-involutions, label: addresses, note: 'Adding rational squareclass marks, rational norms and the class of i to the paired linear test gives no obstruction for the classification candidates.'}
  - {to: isomorphism-classes-of-p-adic-galois-groups, label: addresses, note: 'The remaining dyadic candidates have equal degree and maximal abelian subfield, hence identical diagrams of the kind proved here. No new absolute Galois-group isomorphism is constructed.'}
  - {to: local-class-field-theory, label: uses, note: 'Norm compatibility of reciprocity and its Hilbert-symbol description give adjunction for the norms to Q2.'}
---

**Setting.** Let $K/\mathbb Q_2$ be finite of degree $n$, with $i\notin K$, and put $L=K(i)$. Write
$$
R=\mathbb Q_2^\times/\mathbb Q_2^{\times2},\qquad
B=K^\times/K^{\times2},\qquad V=L^\times/L^{\times2}.
$$
Use additive notation over $\mathbb F_2$, and let $b_F$ be the additive quadratic Hilbert pairing on the squareclasses of $F$. Let
$$
j:R\longrightarrow B,\qquad r:B\longrightarrow V,\qquad
\nu:V\longrightarrow B,\qquad m:B\longrightarrow R
$$
be induced by the two inclusions, $N_{L/K}$ and $N_{K/\mathbb Q_2}$, respectively. Let $\sigma$ be the nonidentity element of $\operatorname{Gal}(L/K)$ acting on $V$, put $a=[-1]_K$, and set $J_K=\ker j$.

**Theorem (proved here).** Suppose $K'/\mathbb Q_2$ also has degree $n$, does not contain $i$, and has $J_{K'}=J_K$ as subspaces of the fixed space $R$. Mark its corresponding data with primes. There are isometries
$$
f:(B,b_K)\longrightarrow(B',b_{K'}),\qquad
g:(V,b_L)\longrightarrow(V',b_{L'})
$$
such that
$$
fj=j',\qquad gr=r'f,\qquad f\nu=\nu'g,\qquad
g\sigma=\sigma'g,\qquad m'f=m.
\tag{1}
$$
They also preserve the norm from $L$ to $\mathbb Q_2$, every rational squareclass upstairs, and $[i]_L$:
$$
m'\nu'g=m\nu,\qquad grj=r'j',\qquad g([i]_L)=[i]_{L'}.
\tag{2}
$$
Consequently, these diagrams over the fixed paired space $R$ are classified by $(n,J_K)$. In particular they agree whenever $K$ and $K'$ have equal degree and equal maximal subfield abelian over $\mathbb Q_2$.

**Linear algebra lemma (proved here).** Let $(E,b)$ and $(E',b')$ be nondegenerate symmetric bilinear spaces over $\mathbb F_2$ of the same dimension. Their characteristic vectors $c,c'$ are defined by
$$
b(x,x)=b(x,c),\qquad b'(x',x')=b'(x',c').
$$
Assume $c,c'\ne0$. Any isometry $h:U\to U'$ between subspaces containing these vectors, with $h(c)=c'$, extends to an isometry $E\to E'$.

*Proof.* First recall the extension argument for alternating nondegenerate spaces. Split a subspace as the orthogonal sum of a nondegenerate part and its radical. After splitting off the nondegenerate part of the ambient space, a basis $e_1,\ldots,e_s$ of the radical is an independent isotropic set. Choose dual vectors $v_j$ with $b(e_i,v_j)=\delta_{ij}$ using nondegeneracy. Put $C_{ij}=b(v_i,v_j)$, and replace $v_j$ by $v_j+\sum_{i<j}C_{ij}e_i$. Their mutual pairings become zero, while their pairings with the $e_i$ stay unchanged. These vectors form hyperbolic planes, whose orthogonal complement has a symplectic basis. Perform the same construction starting with the images under the given subspace isometry. Mapping the resulting symplectic bases extends that isometry, including when its domain is degenerate.

If $b(c,c)=1$, split off the nondegenerate line $\langle c\rangle$. Its orthogonal complement is alternating, because it is orthogonal to the characteristic vector. Since $U$ contains $c$, the given isometry splits accordingly, and the alternating extension argument applies to the complementary subspaces.

Suppose instead that $b(c,c)=0$. If $U\not\subseteq c^\perp$, choose $u\in U$ with $b(c,u)=1$. The plane $P=\langle c,u\rangle$ has Gram matrix
$$
\begin{pmatrix}0&1\\1&1\end{pmatrix},
$$
since $b(u,u)=b(u,c)=1$. It is nondegenerate and lies in $U$. Its image has the same Gram matrix. Split off these planes; their orthogonal complements are alternating, and again extend the remaining subspace isometry.

If $U\subseteq c^\perp$, choose a vector-space complement $C$ to $\langle c\rangle$ in $U$. Nondegeneracy supplies $u\in E$ with $b(u,c)=1$ and $b(u,C)=0$: these prescribe a linear functional on the subspace $\langle c\rangle\oplus C$. Choose $u'$ similarly, using $c'$ and $h(C)$. The planes $\langle c,u\rangle$ and $\langle c',u'\rangle$ have the displayed Gram matrix, and $C,h(C)$ lie in their alternating orthogonal complements. Extend $h|_C$ there and map $c,u$ to $c',u'$. This gives the required extension. $\square$

**Proof of the theorem.** The [paired squareclass computation](cup-paired-squareclasses-of-dyadic-classification-involutions.md), proof, Steps 1–3, gives
$$
\dim B=n+2,\qquad b_K(x,x)=b_K(x,a),\qquad
\ker r=\langle a\rangle,\qquad W:=r(B)=W^\perp\subset V.
\tag{3}
$$
The pairings are nondegenerate, $b_L$ is alternating, and $\sigma-1=r\nu$. In particular $a\ne0$ is the characteristic vector of $b_K$.

*1. Match the rational subspaces.* Norm compatibility of reciprocity, together with its action on square roots, gives
$$
b_K(x,jz)=b_{\mathbb Q_2}(mx,z)
\qquad(x\in B,\ z\in R).
\tag{4}
$$
Indeed, both sides give the sign by which the Artin image of a representative of $x$ acts on a square root of a representative of $z$. For a possibly non-Galois $K/\mathbb Q_2$, apply norm compatibility inside a finite Galois extension containing $K$ and this square root [@milnecft, Chapter III, Lemma 3.2, p. 107; Remark 4.5, p. 114]. Since $mjz=nz$, it follows that
$$
b_K(jz,jw)=(n\bmod2)b_{\mathbb Q_2}(z,w).
\tag{5}
$$

The common kernel assumption makes
$$
h:j(R)\longrightarrow j'(R),\qquad h(jz)=j'z
$$
well-defined and bijective. Equation (5) makes it an isometry. Its domain contains $a=j([-1])$, and $h(a)=a'$. The lemma therefore extends $h$ to an isometry $f:B\to B'$, giving $fj=j'$.

*2. Extend upstairs.* By (3), $f$ induces an isomorphism $\bar f:W\to W'$ with $\bar f r=r'f$. Both subspaces are Lagrangian, so the alternating extension argument in the lemma gives an isometry $g:V\to V'$ extending $\bar f$. Norm adjunction from Step 1 of the paired computation says
$$
b_K(\nu x,z)=b_L(x,rz).
$$
Together with $gr=r'f$ and nondegeneracy, this forces $f\nu=\nu'g$. The identity $\sigma-1=r\nu$ then forces $g\sigma=\sigma'g$.

*3. Norms and the cyclotomic mark.* For every $x\in B$ and $z\in R$, (4) gives
$$
b_{\mathbb Q_2}(m'fx,z)
=b_{K'}(fx,j'z)=b_K(x,jz)
=b_{\mathbb Q_2}(mx,z).
$$
Nondegeneracy of the rational Hilbert pairing implies $m'f=m$ [@milnecft, Chapter III, Theorem 4.4(c), p. 113]. Transitivity of field norms gives the first equality of (2), and the others follow from $gr=r'f$, $fj=j'$ and
$$
[i]_L=[2]_L=rj([2]),
\tag{6}
$$
because $(1+i)^2=2i$. Thus all asserted compatibilities hold.

Conversely, the dimension of $B$ recovers $n$, and an isomorphism commuting with $j$ preserves its kernel, so these are complete invariants of this diagram. Finally, a nonsquare $d\in\mathbb Q_2^\times$ lies in $J_K$ exactly when $\mathbb Q_2(\sqrt d)\subseteq K$. Every such quadratic field is abelian over $\mathbb Q_2$, so equal maximal abelian subfields give equal kernels. $\square$

**Checks and limits.** If $n$ is odd, $J_K=0$, since a quadratic subfield would make $n$ even. For $K=\mathbb Q_2$, the map $j$ is the identity, so the result allows $f=1$ and still gives the upstairs extension. Equation (6) also shows that $[i]_L=0$ exactly when $2$ or $-2$ is a square in $K$: by (3), $r([2]_K)=0$ exactly when $[2]_K$ is $0$ or $[-1]_K$. For example this mark vanishes for $K=\mathbb Q_2(\sqrt2)$, but not for $K=\mathbb Q_2(\sqrt5)$: the latter's kernel $J_K$ is $\langle[5]\rangle$, containing neither $[2]$ nor $[-2]$, as valuation parity shows. Thus the cyclotomic mark already varies in degree two, but its variation is recorded by the rational quadratic subfields.

For the remaining [dyadic classification candidates](isomorphism-classes-of-p-adic-galois-groups.md), equality of maximal abelian subfields supplies exactly the kernel equality needed here. These additional marks therefore give no obstruction to conjugacy of the induced squareclass involutions. The isometries are not shown to arise from absolute Galois-group isomorphisms. No claim is made about higher coefficients, higher cohomology operations, or compatibility with all squareclasses of $\mathbb Q_2(i)$; the latter includes elements beyond the rational classes and $[i]$ considered here.
