---
title: Binary tetrahedral embedding counts over dyadic fields
kind: theorem
summary: 'For a dyadic field of degree d, the number of marked surjections onto SL2(F3) above a fixed cyclic cubic quotient depends only on d. Over the unramified quadratic field it is 576, so this count agrees for the three tame cubic markings exchanged by the Frobenius shift.'
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: local-tate-duality, label: uses, note: 'Duality and the Euler characteristic give the dimensions and the nondegenerate cup-product pairing.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'The three marked cyclic cubic quotients over the unramified quadratic field have equal binary tetrahedral lifting counts; no automorphism of the absolute Galois group is constructed.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: analogous-to, note: 'Tests one finite target by marked surjection counts, rather than constructing automorphisms of canonical finite quotient diagrams.'}
---

**Setting.** Let $k/\mathbb Q_2$ be finite of degree $d$, and fix a continuous epimorphism $\epsilon:G_k\to C_3$. Let $L$ be its fixed field. Put
$$
B=Q_8\rtimes C_3,\qquad r:B\longrightarrow C_3,
$$
where a generator of $C_3$ cycles $i,j,ij$ in $Q_8=\{\pm1,\pm i,\pm j,\pm ij\}$, with $i^2=j^2=-1$ and $ji=-ij$. This is the binary tetrahedral group, isomorphic to $\mathrm{SL}_2(\mathbb F_3)$: the matrices
$$
i=\begin{pmatrix}0&1\\2&0\end{pmatrix},\quad
j=\begin{pmatrix}1&1\\1&2\end{pmatrix},\quad
c=\begin{pmatrix}0&1\\2&2\end{pmatrix}
$$
satisfy these relations, $c^3=1$, and generate $24=|\mathrm{SL}_2(\mathbb F_3)|$ elements.

**Theorem (proved here).** The number of continuous epimorphisms $\rho:G_k\to B$ satisfying $r\rho=\epsilon$ is
$$
2^{d+4}\bigl(2^{2d-1}+(-1)^d2^{d-1}-1\bigr).
$$
These are homomorphisms to the fixed group, without identifying conjugate maps. The count depends only on $d$, even when $L/k$ is ramified.

**Proof.** All cohomology is continuous, and $\mathbb F_2=\mu_2$ has trivial Galois action.

*1. The cubic square-class space.* Write $H=H^1(L,\mathbb F_2)$ and let $s$ be a generator of $\operatorname{Gal}(L/k)$ acting on $H$. Averaging over $C_3$ gives
$$
H=H^{C_3}\oplus W,\qquad W=\ker(1+s+s^2).
$$
Restriction identifies $H^{C_3}$ with $H^1(k,\mathbb F_2)$: the positive-degree cohomology of $C_3$ with any $\mathbb F_2$-module vanishes by averaging, so the inflation-restriction sequence gives this assertion. The same argument will apply to nontrivial coefficients below [@milnecft, II, Remark 1.35(a), p. 72, and the continuous-cohomology discussion, p. 88].

Local duality and the Euler characteristic give $H^2(F,\mathbb F_2)=\mathbb F_2$ and $\dim H^1(F,\mathbb F_2)=[F:\mathbb Q_2]+2$ for $F=k,L$. They also make the cup-product pairing $b:H\times H\to H^2(L,\mathbb F_2)=\mathbb F_2$ nondegenerate [@milne2006adt, I, Corollary 2.3, p. 28, and Theorem 2.8, p. 31]. Thus $\dim W=2d$. The pairing is symmetric and $s$-invariant. Its two displayed summands are orthogonal, since $b(v,w)=b(v,(1+s+s^2)w)=0$ for invariant $v$ and $w\in W$. Consequently $b|_W$ is nondegenerate. The map $w\mapsto b(w,w)$ is an invariant linear functional on $W$. It vanishes: $W$ has no trivial constituent, since $s^2+s+1=0$ there. Hence $b|_W$ is alternating.

*2. Maps to $A_4$.* The central quotient $B/\{\pm1\}$ is $V\rtimes C_3\cong A_4$, with $V=\mathbb F_2^2$ the irreducible $C_3$-module. Homomorphisms $a:G_k\to A_4$ above $\epsilon$ correspond to $1$-cocycles with coefficients in $V$. Restriction identifies
$$
H^1(k,V)\cong\operatorname{Hom}_{C_3}(G_L,V)\cong W.
$$
For the last identification, choose a nonzero coordinate on $V$. The two coordinates of an equivariant map can be written $x,sx$, replacing $s$ by its inverse if necessary; the relation $x+sx+s^2x=0$ is exactly equivariance. A nonzero $x\in W$ has $x,sx$ independent, so the corresponding restriction surjects onto $V$ and $a$ surjects onto $A_4$. The zero class gives a conjugate of the complement $C_3$. Each cohomology class has exactly $|V/V^{G_k}|=4$ cocycle representatives.

*3. The quaternion obstruction.* For $x\in W$, the obstruction to lifting $a$ to $B$ is a class in $H^2(k,\mathbb F_2)$. Restriction to $L$ is injective: corestriction after restriction is multiplication by $3$, hence the identity on this group [@milnecft, II, Proposition 1.30, p. 70, and the continuous-cohomology discussion, p. 88]. Over $L$ the central extension is $Q_8\to V$.

Here the obstruction can be computed directly. The section $(u,v)\mapsto i^u j^v$ of $Q_8\to V$ has factor set
$$
((u,v),(u',v'))\longmapsto uu'+vv'+vu'\quad\text{in }\mathbb F_2.
$$
For coordinate characters $x,y$, its pullback represents $x\cup x+y\cup y+y\cup x$. A lift exists precisely when this factor set is a continuous coboundary. Step 1 shows that the two square terms vanish for $x,y\in W$. Taking $y=sx$, the obstruction is therefore
$$
q(x)=b(x,sx).
$$
Conjugation in $A_4$ lifts to conjugation in $B$, so the obstruction is unchanged by conjugating the map to $A_4$ and depends only on its cohomology class. Also $b(x,s^2x)=b(sx,x)=b(x,sx)$, so the choice of generator of $C_3$ does not affect $q$.

*4. Counting zeros.* The function $q$ is $s$-invariant and has polarization
$$
q(x+y)+q(x)+q(y)
=b(x,sy)+b(y,sx)=b(x,(s+s^2)y)=b(x,y).
$$
Its zero count follows without a quadratic-form classification. On any nonzero nondegenerate $s$-stable summand, $q$ cannot vanish identically, because its polarization is nonzero. Choose $x$ with $q(x)=1$. The plane spanned by $x,sx$ is nondegenerate and all three of its nonzero vectors have $q=1$. Its orthogonal complement is $s$-stable. Repeating decomposes $W$ into $d$ such planes. On each plane $\sum_x(-1)^{q(x)}=-2$; orthogonal sums multiply these sums. Thus
$$
\#q^{-1}(0)=\frac{2^{2d}+(-2)^d}{2}
=2^{2d-1}+(-1)^d2^{d-1}.
$$

*5. Counting lifts.* Remove the zero class to ensure surjectivity to $A_4$, and multiply by four cocycles per class. Every unobstructed map has exactly $|H^1(k,\mathbb F_2)|=2^{d+2}$ lifts, since two lifts differ by a character into the central kernel. Every such lift is surjective: a proper image mapping onto $A_4$ would give a section of $B\to A_4$, whose restriction to $V$ would embed $V$ into $Q_8$; $Q_8$ has only one involution. Multiplying gives the stated formula. $\square$

**The Frobenius-shift test.** Take $k=U_2$, the unramified quadratic extension of $\mathbb Q_2$. In its tame quotient choose $\sigma,\tau$ with $\sigma\tau\sigma^{-1}=\tau^4$. For $a\in\mathbb Z/3$, the maps
$$
\epsilon_a(\tau)=c,\qquad\epsilon_a(\sigma)=c^a
$$
define cyclic cubic quotients. The [Frobenius shift](frobenius-shift-lifting-problem.md) sends $\epsilon_a$ to $\epsilon_{a+1}$ by precomposition. The theorem gives $2^6(8+2-1)=576$ marked surjections to $B$ for each of them. Thus this target's marked surjection counts agree under the shift, including its nonabelian wild kernel $Q_8$.

**Checks and limit.** At $d=1$ the formula is zero, so no cyclic cubic quotient over a degree-one dyadic field admits a surjective lift to $B$. At $d=2$, the quadratic space has $10$ zeros: one zero vector and nine nonzero unobstructed classes. The result compares counts; it neither matches all finite quotient diagrams nor supplies compatible automorphisms. It leaves the Frobenius-shift problem and the remaining [dyadic Galois classification](isomorphism-classes-of-p-adic-galois-groups.md) open.
