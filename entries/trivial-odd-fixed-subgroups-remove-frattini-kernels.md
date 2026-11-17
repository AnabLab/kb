---
title: Trivial odd fixed subgroups remove nonabelian Frattini kernels
kind: theorem
summary: 'A normal Frattini kernel R of a finite 2-group contributes exactly |R|^(d+1) dyadic lifts if an odd complement has trivial fixed subgroup on R. The kernel may be nonabelian. If the complement fixes the remaining Frattini quotient, every tame marked count is invariant.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: noncentral-frattini-layers-in-dyadic-lift-counts, label: uses, note: 'Applies its uniform lifting and tame-marking theorem to a series of elementary Frattini layers with zero coinvariants.'}
  - {to: dyadic-count-invariance-for-actions-fixing-frattini-subgroups, label: uses, note: 'Supplies count invariance after the kernel has been removed.'}
  - {to: dyadic-count-invariance-for-actions-fixing-frattini-subgroups, label: generalizes, note: 'Its pointwise-fixed hypothesis is the case R=1; here a nonabelian moving Frattini kernel can first be removed.'}
  - {to: abelian-moving-frattini-kernels-give-dyadic-count-invariance, label: analogous-to, note: 'Uses triviality of the odd fixed subgroup in place of abelianness of the moving kernel; neither kernel hypothesis implies the other.'}
  - {to: unitriangular-dyadic-marked-counts, label: uses, note: 'Its root calculation identifies the Frattini subgroup used in the example; its first-quotient calculation counts maps to two scalar generator modules.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes another class of nonabelian moving Frattini kernels from every tame marked-count obstruction, without producing a full lift.'}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$, with tame quotient $\pi:G_k\twoheadrightarrow\Gamma$. Let an odd-order finite group $T$ act on a finite $2$-group $P$, put $H=P\rtimes T$, and let $R\trianglelefteq H$ satisfy
$$
R\subseteq\Phi(P),\qquad C_R(T)=\{1\}.
\tag{1}
$$
The second condition concerns the common fixed subgroup of the entire group $T$. It does not require every nonidentity element of $T$ to act without fixed points. Write $\rho:H\twoheadrightarrow\bar H=H/R$. All maps below are continuous, and counts distinguish actual maps, including conjugate ones.

**Theorem (proved here).**

1. Every epimorphism $G_k\twoheadrightarrow\bar H$ has exactly $|R|^{d+1}$ lifts to $H$, all epimorphisms.
2. Every epimorphism $r:H\twoheadrightarrow D$ to a finite quotient of $\Gamma$ kills $R$. Writing $r=\bar r\rho$ and
   $$E_k(H,r;q)=\#\{u:G_k\twoheadrightarrow H:ru=q\pi\}$$
   for $q:\Gamma\twoheadrightarrow D$, one has
   $$E_k(H,r;q)=|R|^{d+1}E_k(\bar H,\bar r;q).\tag{2}$$
3. If $T$ fixes $\Phi(P)/R$ pointwise, every $\alpha\in\operatorname{Aut}(\Gamma)$ preserves these counts:
   $$E_k(H,r;q)=E_k(H,r;q\alpha).\tag{3}$$

In particular, define $M$ to be the normal closure in $H$ of all $f^{-1}t(f)$ with $f\in\Phi(P)$ and $t\in T$. If $C_M(T)=1$, then (3) holds, without assuming $M$ abelian.

**Proof.** *1. Fixed points lift through coprime quotients.* For a finite $2$-group $X$ with a $T$-action and a $T$-stable normal subgroup $N$, the map
$$C_X(T)\longrightarrow C_{X/N}(T)\tag{4}$$
is surjective. Here is a proof, including the nonabelian case. Induct on $|N|$, the case $N=1$ being immediate. For $N\ne1$, let $A$ be the subgroup of elements of order dividing two in $Z(N)$. It is nontrivial, elementary abelian and characteristic in $N$, hence normal in $X$ and $T$-stable. Induction in $X/A$ lifts a fixed coset of $X/N$ to a fixed coset $xA$.

Write $t(x)=xc_t$ with $c_t\in A$, using additive notation in $A$. Then
$$c_{ts}=c_t+t(c_s).$$
Set $b=|T|^{-1}\sum_{t\in T}c_t$, where the inverse exists on $A$. Summing the cocycle identity gives $c_s=b-s(b)$. Consequently $xb$ is fixed by $T$ and lifts the original coset. This proves (4). In particular, (1) implies
$$C_{R/N}(T)=1$$
for every $T$-stable normal subgroup $N\trianglelefteq R$.

*2. Build removable elementary layers.* If $R\ne1$, its normality in the $2$-group $P$ implies $R\cap Z(P)\ne1$: the conjugation orbits of $P$ on $R$ have powers of two as sizes, so their fixed set has even cardinality. Let $A$ be the subgroup of elements of order dividing two in $R\cap Z(P)$. Then $A$ is nonzero, elementary abelian, central in $P$ and normal in $H$. Moreover $A^T=0$ by (1). Averaging on the $\mathbb F_2[T]$-module $A$ identifies invariants with coinvariants, so
$$A_H=A_T=0.\tag{5}$$

Also $\Phi(P)\subseteq\Phi(H)$. Indeed, if $J\Phi(P)=H$ for a subgroup $J\subseteq H$, intersecting with $P$ gives $(J\cap P)\Phi(P)=P$. The Frattini property forces $J\cap P=P$, and then $J=H$. Applying this to maximal subgroups proves the inclusion. Thus $A\subseteq\Phi(H)$.

The [elementary zero-coinvariant lifting theorem](noncentral-frattini-layers-in-dyadic-lift-counts.md) applies to $H\to H/A$. It gives exactly $|A|^{d+1}$ surjective lifts of each quotient epimorphism, and every tame marking kills $A$. Its cohomological inputs are local duality and the Euler characteristic: $A_H=0$ gives $H^2(k,A)=0$, and the number of cocycles is $|A|^{d+1}$ [@milne2006adt, I, Corollary 2.3, p. 28; Theorem 2.8, p. 31].

Now $H/A=(P/A)\rtimes T$, and
$$R/A\subseteq\Phi(P/A),\qquad C_{R/A}(T)=1$$
by $\Phi(P/A)=\Phi(P)/A$ and (4). Induct on $|R|$, removing $A$ first and then $R/A$ in the quotient. Each step uses an elementary Frattini kernel with zero coinvariants. The lift factors multiply to
$$|A|^{d+1}|R/A|^{d+1}=|R|^{d+1}.$$
The tame marking first kills $A$ and then kills $R/A$, hence kills $R$. This proves parts 1 and 2, including cases where the quotient has no epimorphisms.

*3. The residual count.* Under the extra hypothesis of part 3, $T$ fixes
$$\Phi(P/R)=\Phi(P)/R$$
pointwise. The [pointwise-fixed Frattini theorem](dyadic-count-invariance-for-actions-fixing-frattini-subgroups.md) gives (3) for $\bar H$. Equation (2) multiplies both sides by the same factor, proving (3) for $H$. Finally $M\subseteq\Phi(P)$ is normal in $H$, and its definition makes $T$ fix $\Phi(P)/M$. Taking $R=M$ proves the last assertion. $\square$

**A nonabelian moving kernel (proved here).** Let $S=\operatorname{UT}_5(\mathbb F_8)$, let $J$ be the matrix with ones on the antidiagonal, and define the automorphism
$$\beta(g)=J(g^{-1})^{\mathrm t}J,\qquad \beta^2=1.$$
Put $P=S\rtimes\langle\beta\rangle$. Take a generator $\lambda$ of $\mathbb F_8^\times$, and let $T=C_7$ act on $S$ by conjugation with
$$\operatorname{diag}(\lambda^4,\lambda^3,\lambda^2,\lambda,1).$$
For $x_{ij}(a)=I+aE_{ij}$ the two actions are
$$t(x_{ij}(a))=x_{ij}(\lambda^{j-i}a),\qquad
\beta(x_{ij}(a))=x_{6-j,6-i}(a).$$
These root elements generate $S$, and the displayed actions commute since $\beta$ preserves $j-i$. Thus $T$ acts on $P$ while fixing $\beta$.

No nonidentity matrix of $S$ is fixed by $T$: its entry of height $h$ would have to satisfy $a=\lambda^h a$, with $1\le h\le4<7$. Set $R=\Phi(P)$. Since $P/S=C_2$ is elementary abelian, $R\subseteq S$, so $C_R(T)=1$. Both $x_{13}(1)$ and $x_{35}(1)$ belong to $[S,S]\subseteq R$, while
$$[x_{13}(1),x_{35}(1)]=x_{15}(1)\ne1,$$
where $[x,y]=xyx^{-1}y^{-1}$. In particular $R$ is nonabelian.

More explicitly, the [unitriangular root computation](unitriangular-dyadic-marked-counts.md), proof, Step 1, gives $\Phi(S)=S_2$ of order $8^6$ and $S/S_2=\mathbb F_8^4$. The involution $\beta$ reverses these four simple-root coordinates. In $P/S_2=\mathbb F_8^4\rtimes C_2$, squares and commutators generate $(1+\beta)\mathbb F_8^4$, of dimension two over $\mathbb F_8$. Since $S_2\subseteq\Phi(P)$, this proves
$$|R|=8^8,\qquad H/R\cong(\mathbb F_8^2\rtimes C_7)\times C_2,\qquad |H|=7\cdot2^{31}.\tag{6}$$
Here $C_7$ acts by the scalar $\lambda$ on both coordinates. Thus every quotient epimorphism lifts by the factor $8^{8(d+1)}$, and every tame marking has invariant counts by part 3.

These assertions are nonvacuous for $d\ge2$. Above any fixed epimorphism $\epsilon:\Gamma\twoheadrightarrow C_7$, the scalar first-quotient calculation in Step 2 of the unitriangular theorem gives $8^2(8^d-1)(8^d-8)$ surjections to $\mathbb F_8^2\rtimes C_7$. This group has no quotient $C_2$, since its abelianization is $C_7$. Pairing any such surjection with any nonzero character $G_k\to C_2$ therefore surjects onto its product with $C_2$: a proper subdirect product would be the graph of a surjection to $C_2$. Local duality and the Euler characteristic give $2^{d+2}-1$ nonzero characters [@milne2006adt, I, Corollary 2.3, p. 28; Theorem 2.8, p. 31]. Hence the number of surjections to $H$ above $\epsilon$ is exactly
$$8^{8(d+1)+2}(8^d-1)(8^d-8)(2^{d+2}-1),\tag{7}$$
positive for $d\ge2$ and zero for $d=1$.

Finally the normal closure $M$ of the differences on $R$ equals $R$. Its quotient $R/M$ is fixed pointwise by $T$, but (4) and $C_R(T)=1$ force $C_{R/M}(T)=1$, so $R/M=1$. Thus the example has a nonabelian moving kernel and is outside the abelian moving-kernel theorem.

**Limits.** The quotient argument (4) is essential; vanishing of only the coinvariants of the abelianization of $R$ does not justify removing its later layers. The abelian moving-kernel theorem allows nontrivial fixed subgroups and is not subsumed here. No compatible system of finite lifts or automorphism of $G_k$ is constructed, so the full dyadic lifting and classification questions remain open.
