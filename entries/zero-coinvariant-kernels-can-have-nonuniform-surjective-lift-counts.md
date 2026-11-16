---
title: Zero-coinvariant kernels can have nonuniform surjective lift counts
kind: theorem
summary: 'For an explicit split extension of A4 by its three-dimensional binary augmentation module, epimorphisms from the unramified quadratic dyadic field have 512 lifts each, but either 256 or 384 surjective lifts, even above one fixed cubic quotient.'
tags: [local-fields, galois-cohomology, embedding-problems, representation-theory]
edges:
  - {to: noncentral-frattini-layers-in-dyadic-lift-counts, label: motivated-by, note: 'Shows that zero coinvariants alone do not give uniform surjective counts if the Frattini hypothesis is removed.'}
  - {to: minimal-dyadic-count-obstructions-have-central-frattini-involutions, label: motivated-by, note: 'Its uniform complement subtraction for irreducible kernels does not extend to arbitrary reducible kernels with zero coinvariants.'}
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: uses, note: 'Steps 2 and 5 supply both kinds of A4 epimorphism above the same cubic quotient.'}
  - {to: local-tate-duality, label: uses, note: 'Counts all cocycle lifts and the characters into the central involution.'}
---

**Setting.** Let $k=U_2$ be the unramified quadratic extension of $\mathbb Q_2$, and put $G=G_k$. Let $Q=A_4$ act by permuting the coordinates of $\mathbb F_2^4$. Set
$$
W=\{(x_1,x_2,x_3,x_4):\textstyle\sum_i x_i=0\},\qquad
c=(1,1,1,1),\qquad C=\mathbb F_2c,\qquad V=W/C.
$$
Put $H=W\rtimes Q$, of order $96$, and let $r:H\to Q$ be projection. For an epimorphism $f:G\twoheadrightarrow Q$, write $\beta(f)\in H^2(k,\mathbb F_2)=\mathbb F_2$ for its obstruction to lifting through the binary tetrahedral extension
$$
1\longrightarrow C_2\longrightarrow \mathrm{SL}_2(\mathbb F_3)
\longrightarrow A_4\longrightarrow1.
$$
All homomorphisms are continuous; counts distinguish actual maps, including conjugate maps.

**Theorem (proved here).** The module $W$ has zero $Q$-coinvariants and $W^Q=C$, but $W\not\subseteq\Phi(H)$. Every epimorphism $f:G\twoheadrightarrow Q$ has exactly $512$ lifts to $H$, of which
$$
\#\{F:G\twoheadrightarrow H:rF=f\}
=
\begin{cases}
256,&\beta(f)=0,\\
384,&\beta(f)=1.
\end{cases}
\tag{1}
$$
For any fixed epimorphism $\epsilon:G\twoheadrightarrow C_3$, the $60$ epimorphisms $f$ with composite $G\to A_4\to C_3$ equal to $\epsilon$ include $36$ with $\beta(f)=0$ and $24$ with $\beta(f)=1$. Thus both counts in (1) occur over the same field and the same cubic quotient.

**Proof.** *1. The module and its proper submodules.* The pair sums $e_i+e_j$ span $W$ and form one $A_4$-orbit. Their coinvariant classes are therefore equal. The relation
$$
(e_1+e_2)+(e_2+e_3)+(e_1+e_3)=0
$$
makes this common class zero, so $W_Q=0$. Invariant vectors have all coordinates equal, giving $W^Q=C$.

Let $N=\{1,a,b,ab\}$ be the normal Klein four-group of $Q$, with
$$
a=(12)(34),\qquad b=(13)(24),\qquad s=(234).
$$
Put $u=e_1+e_2$ and $v=e_1+e_3$. The vectors $u,v,c$ form a basis of $W$, and
$$
au=u,\quad av=v+c,\quad bu=u+c,\quad bv=v,\qquad
s\bar u=\bar v,\quad s\bar v=\bar u+\bar v.
\tag{2}
$$
Bars denote classes in $V$. Thus $N$ acts trivially on $V$, which is an irreducible two-dimensional $C_3$-module. Moreover, $C$ is the unique maximal proper $Q$-submodule of $W$. Indeed, a one-dimensional quotient of $W$ would be trivial, contrary to $W_Q=0$. Any simple quotient must consequently have dimension two: dimension three would make $W$ simple, contrary to $C\ne0$. Its kernel is an invariant line, necessarily $C$.

The complement $Q\subset H$ is proper and satisfies $QW=H$. If $W\subseteq\Phi(H)$, a maximal subgroup containing this complement would contain $W$ as well, a contradiction.

*2. The finite connecting map.* The module sequence $0\to C\to W\to V\to0$, with $C=\mathbb F_2$, has connecting map
$$
\delta:H^1(Q,V)\longrightarrow H^2(Q,C).
$$
Concretely, lift a $V$-valued cocycle to a $W$-valued cochain and take its coboundary [@milnecft, II, Remark 1.21, p. 66]. This also describes its pullback along $f$.

Each cohomology class has a unique cocycle representative vanishing on $s$: subtract a coboundary, using that $s-1$ is invertible on $V$. Such a representative is exactly a $C_3$-equivariant homomorphism $N\to V$. These form the four-element field $\operatorname{End}_{C_3}(V)$, as an additive group. A basis of the resulting two-dimensional $\mathbb F_2$-space consists of $t_0,t_1$ given by
$$
t_0(a)=\bar u,\quad t_0(b)=\bar v,\qquad
t_1(a)=\bar v,\quad t_1(b)=\bar u+\bar v.
\tag{3}
$$
There are four coboundaries, since $V^Q=0$; hence $|Z^1(Q,V)|=16$.

The class $\delta(t)$ is the central extension obtained by pulling $W\rtimes Q\to V\rtimes Q$ back along the graph of $t$. For $t_0$, its restriction to $N$ splits: the lifts $(u,a),(v,b)$ are commuting involutions by (2). For $t_1$, the lifts $(v,a),(u+v,b)$ both square to $c$ and have commutator $c$. Their subgroup is $Q_8$, so this restriction is the quaternion extension of $N$.

Restriction $H^2(Q,C)\to H^2(N,C)$ is injective, since its composite with corestriction is multiplication by $[Q:N]=3$ [@milnecft, II, Proposition 1.30, p. 70]. The binary tetrahedral class $\nu$ restricts to precisely this quaternion extension. Consequently
$$
\delta(t_0)=0,\qquad \delta(t_1)=\nu.
\tag{4}
$$
Linearity and the four coboundaries show that among the $16$ actual cocycles, eight have connecting class zero and eight have connecting class $\nu$.

*3. All lifts and their proper images.* Give $W$ its $G$-action through $f$. A lift of $f$ to the split extension $H$ has the unique form $F(g)=(z(g),f(g))$ for $z\in Z^1(k,W)$. The [local duality and Euler characteristic theorem](local-tate-duality.md) gives
$$
H^2(k,W)=0,\qquad
|H^1(k,W)|=|W^G|\,|W|^2=128,\qquad
|B^1(k,W)|=|W|/|W^G|=4.
$$
The first equality uses $(W^\vee)^G=(W_G)^\vee=0$. Thus there are $512$ lifts. The same theorem gives $|\operatorname{Hom}(G,C)|=2^{2+2}=16$.

For a lift with image $J$, one has $JW=H$. Its intersection $J\cap W$ is normalized by $J$ and by the abelian group $W$, hence is a $Q$-submodule. If $J$ is proper this intersection lies in $C$, by step 1. The image of $J$ in $H/C=V\rtimes Q$ is therefore a complement to $V$. Conversely, a lift whose image modulo $C$ is such a complement is not surjective. Complements to $V$ are exactly the graphs of the cocycles $t\in Z^1(Q,V)$.

It follows that $F$ is nonsurjective exactly when its cocycle modulo $C$ is $t\circ f$ for one of these $16$ cocycles. This $t$ is unique since $f$ is onto. A prescribed $t\circ f$ lifts to a $W$-valued cocycle precisely when $f^*\delta(t)=0$: its lifted cochain can be corrected by a $C$-valued cochain exactly in that case. If a lift exists, there are $|\operatorname{Hom}(G,C)|=16$ choices, since two differ by a $C$-valued cocycle. This is the continuous version of the cochain construction in step 2 [@milnecft, II, §4, pp. 87–88].

If $\beta(f)=f^*\nu=0$, all $16$ cocycles $t$ lift, giving $16\cdot16=256$ nonsurjective lifts. If $\beta(f)=1$, only the eight with zero connecting class lift, giving $8\cdot16=128$ nonsurjective lifts. Subtraction from $512$ proves (1).

*4. Both cases occur.* Steps 2 and 5 of the [binary tetrahedral count](binary-tetrahedral-embedding-counts-over-dyadic-fields.md) give $4(2^4-1)=60$ epimorphisms to $A_4$ above $\epsilon$ and $576$ epimorphisms to $\mathrm{SL}_2(\mathbb F_3)$ above it. Each $f$ with $\beta(f)=0$ has $16$ lifts to the latter group, all surjective. Hence there are $576/16=36$ such $f$, leaving $24$ with $\beta(f)=1$. This proves the existence assertion. $\square$

**Scope and check.** Zero coinvariants still give a constant count of all lifts in this example. The varying subtraction comes from proper images with nontrivial intersection with $W$; subtracting only complements to $W$ misses them. Thus one cannot remove both the Frattini condition in the [zero-coinvariant lifting theorem](noncentral-frattini-layers-in-dyadic-lift-counts.md) and the irreducibility condition in the [complement-subtraction argument](minimal-dyadic-count-obstructions-have-central-frattini-involutions.md) while retaining a uniform number of surjective lifts over each quotient map.

The aggregate count above $\epsilon$ is $36\cdot256+24\cdot384=18\,432$, independent of $\epsilon$. The quotient maps $f:G\to A_4$ used in (1) do not factor through the tame quotient: their wild image contains its normal Klein four-group, since a tame dyadic quotient has cyclic Sylow two-subgroups. These unequal individual counts are therefore not an obstruction to lifting a tame automorphism, and do not settle the Frobenius-shift problem.
