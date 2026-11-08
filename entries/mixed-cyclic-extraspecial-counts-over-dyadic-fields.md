---
title: Mixed cyclic extraspecial counts over dyadic fields
kind: theorem
summary: 'Central products with pairwise nonisomorphic irreducible odd cyclic constituents have explicit marked counts depending only on the dyadic degree and constituent dimensions. Component obstructions can cancel; every tame marking has invariant counts.'
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: irreducible-cyclic-extraspecial-counts-over-dyadic-fields, label: generalizes, note: 'Uses its cohomology spaces and quadratic obstruction Gauss sums; one constituent recovers its formula.'}
  - {to: repeated-cubic-extraspecial-counts-over-dyadic-fields, label: analogous-to, note: 'Both add central obstruction classes, but here distinct irreducible constituents make componentwise nonvanishing sufficient for surjectivity.'}
  - {to: local-tate-duality, label: uses, note: 'Supplies the central lift factor and the identification of degree-two obstructions with F2.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Uses its marked surjection counts.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes every tame marking of these mixed-constituent targets from count obstructions; constructs no automorphism lift.'}
---

**Targets.** For $1\le i\le t$, let $E_i$ be an extraspecial $2$-group with
$$
Z(E_i)=[E_i,E_i]=\langle z_i\rangle\cong C_2,
\qquad V_i=E_i/\langle z_i\rangle\cong\mathbb F_2^{2n_i},
\quad n_i\ge1.
$$
Suppose an odd cyclic group $C_{m_i}$, with $m_i>1$, acts faithfully and irreducibly on $V_i$ through an action on $E_i$. Choose an odd integer $m$ divisible by every $m_i$ and epimorphisms $C_m\twoheadrightarrow C_{m_i}$. Inflate the actions to $C_m$, and assume that the resulting $\mathbb F_2[C_m]$-modules $V_i$ are pairwise nonisomorphic. In particular, distinct $m_i$ suffice, because the action kernels then differ.

Form the central product and its diagonal semidirect product
$$
E=\Bigl(\prod_i E_i\Bigr)/K,\qquad
K=\left\{(z_1^{a_1},\ldots,z_t^{a_t}):\sum_i a_i=0\right\},
\qquad H=E\rtimes C_m.
$$
Here $a_i\in\mathbb F_2$. Write $z$ for the common central involution, $N=\sum_i n_i$, $V=\bigoplus_i V_i$, and $r_0:H\twoheadrightarrow C_m$ for the projection. The commutator form on $V$ is the orthogonal sum of the nondegenerate commutator forms of the $E_i$. Consequently $E$ is extraspecial of order $2^{2N+1}$, with $E/\langle z\rangle=V$.

**Theorem (proved here).** Let $k/\mathbb Q_2$ have degree $d$, and let $\epsilon:G_k\twoheadrightarrow C_m$ be any continuous epimorphism. Put
$$
M_d=\frac12\left(
\prod_{i=1}^t(2^{2n_i d}-1)
+\prod_{i=1}^t\bigl((-1)^d2^{n_i d}-1\bigr)
\right).
$$
Then
$$
\#\{\rho:G_k\twoheadrightarrow H:r_0\rho=\epsilon\}
=2^{2N+d+2}M_d.\tag{1}
$$
Maps are continuous and counted individually, without identifying conjugates. The formula is independent of the cyclic extension specified by $\epsilon$, including its ramification.

Moreover, let $\pi:G_k\twoheadrightarrow\Gamma$ be the tame quotient. For every $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$, $r:H\twoheadrightarrow D$, the marked surjection counts satisfy
$$
e_r(q\pi)=e_r(q\alpha\pi),\qquad
e_r(\eta)=\#\{\rho:G_k\twoheadrightarrow H:r\rho=\eta\}.\tag{2}
$$

**Proof.** Identify $\langle z\rangle=\mathbb F_2=\mu_2$ and $H^2(k,\mathbb F_2)=\mathbb F_2$ by the local invariant. All cohomology is continuous. Let $L/k$ be cut out by $\epsilon$, and let $\epsilon_i:G_k\twoheadrightarrow C_{m_i}$ be its quotient markings.

*1. The component obstruction data.* Regard $V_i$ as a $G_k$-module through $\epsilon_i$, and put $W_i=H^1(k,V_i)$. Steps 1–3 of the [irreducible cyclic count](irreducible-cyclic-extraspecial-counts-over-dyadic-fields.md) give
$$
\dim_{\mathbb F_2}W_i=2n_i d,
\qquad Q_i:W_i\longrightarrow\mathbb F_2,
\qquad \sum_{w\in W_i}(-1)^{Q_i(w)}=(-1)^d2^{n_i d}.\tag{3}
$$
Here $Q_i(0)=0$, and $Q_i$ is the central obstruction for $E_i\rtimes C_{m_i}\to V_i\rtimes C_{m_i}$. Its polarization is nondegenerate. These are data of the full obstruction space, before the zero class is removed to count surjections. They apply because each $\epsilon_i$ is an epimorphism and each quotient action satisfies that theorem's faithful irreducibility hypothesis.

The same obstruction governs $E_i\rtimes C_m\to V_i\rtimes C_m$: this extension is the pullback of the preceding one along $V_i\rtimes C_m\to V_i\rtimes C_{m_i}$.

*2. Surjectivity to the central quotient.* Maps to $A=V\rtimes C_m$ above $\epsilon$ are cocycles, whose classes are tuples $w=(w_i)\in\bigoplus_i W_i$. Inflation-restriction gives
$$
H^1(k,V)\cong\operatorname{Hom}_{C_m}(G_L,V).
$$
Indeed, $G_L$ acts trivially on $V$, and positive-degree cohomology of the odd group $C_m$ on an $\mathbb F_2$-module vanishes, as in step 1 of the irreducible count. Let $S\subseteq V$ be the image of the restricted homomorphism. It is $C_m$-stable. Its projection onto $V_i$ is nonzero exactly when $w_i\ne0$, and then that projection is surjective by irreducibility.

To see why these projections suffice, let $f_i$ be the irreducible minimal polynomial of a generator of $C_m$ on $V_i$. The $f_i$ are distinct. The Chinese remainder theorem gives polynomials $p_i$ with $p_i\equiv1\pmod{f_i}$ and $p_i\equiv0\pmod{f_j}$ for $j\ne i$. Thus $p_i(s)$ is the projection $V\to V_i$ and preserves $S$. It follows that $S$ is the direct sum of its component projections. Therefore a map to $A$ is surjective precisely when every $w_i$ is nonzero.

Each tuple has $2^{2N}$ cocycle representatives, because $V^{G_k}=0$ and the group of coboundaries has order $|V|$. These representatives are conjugate by $V$.

*3. The central obstruction adds.* Before quotienting by $K$, the fiber product of the extensions $E_i\rtimes C_m\to V_i\rtimes C_m$ over their common $C_m$ has central kernel $\mathbb F_2^t$. Quotienting that kernel by $K$ pushes it forward by summation. Taking products of sections shows that the factor set of the resulting extension $H\to A$ is the sum of the component factor sets. Its obstruction is consequently
$$
Q(w)=\sum_i Q_i(w_i).\tag{4}
$$
In particular, vanishing of each component obstruction separately is unnecessary. Conjugation by $V$ lifts to conjugation by $E$, so every representative of a tuple has the same obstruction.

For any tuple with $Q(w)=0$, every representative has exactly $2^{d+2}$ lifts through the central kernel: the lifts form a torsor under $\operatorname{Hom}(G_k,\mathbb F_2)$, whose order follows from [local Tate duality and the Euler characteristic](local-tate-duality.md). Every lift of a surjection to $A$ is surjective to $H$. Its image on $G_L$ projects onto $V$. Two image elements whose vectors have commutator pairing one have commutator $z$, so this image contains the central kernel and hence all of $E$. Its cyclic quotient image is already $C_m$.

*4. Counting the unobstructed tuples.* Among nonzero elements of $W_i$ there are $2^{2n_i d}-1$ choices, and their signed sum is $(-1)^d2^{n_i d}-1$ by (3). Using (4), the indicator for $Q(w)=0$ is $(1+(-1)^{Q(w)})/2$. Summing this indicator over the product of the nonzero component sets gives exactly $M_d$. Multiplying by the representative and central-lift factors proves (1).

*5. Every tame marking.* A finite dyadic tame quotient $D$ has a normal cyclic odd-order inertia image and a cyclic quotient by it. Each Sylow $2$-subgroup injects into this cyclic quotient and is cyclic. Thus $r(E)$ is cyclic. Any such image kills $[E,E]=\langle z\rangle$ and factors through $V$, so has order at most two. If nontrivial, it would define a nonzero $C_m$-invariant functional $V\to\mathbb F_2$, since conjugation acts trivially on a group of order two. But $V$ is a sum of nontrivial irreducibles and has no such functional. Hence $r(E)=1$, and $r=\bar r\,r_0$ for an epimorphism $\bar r:C_m\to D$.

Every map $G_k\to C_m$ kills wild inertia and factors through $\Gamma$. Thus $e_r(q\pi)$ is the sum of the common value (1) over all epimorphisms $\epsilon_0:\Gamma\to C_m$ with $\bar r\epsilon_0=q$. Precomposition by $\alpha$ bijects this set with the set satisfying $\bar r\epsilon_0=q\alpha$. This proves (2), including proper cyclic markings and trivial $D$. $\square$

**A mixed cubic–quintic example (proved here).** Take $E_1=Q_8$ with its cubic action and $E_2$ with the explicit quintic action in the [order-160 count](extraspecial-quintic-embedding-counts-over-dyadic-fields.md). Inflate both to $C_{15}$. Their dimensions differ, so they are nonisomorphic. Here $N=3$ and $H$ has order $128\cdot15=1920$. For every cyclic degree-fifteen marking over $\mathbb Q_2$,
$$
M_1=\frac{(4-1)(16-1)+(-2-1)(-4-1)}2=30,
\qquad e_{r_0}(\epsilon)=2^9\cdot30=15\,360.
$$
Such markings exist, for example from the unramified extension. At degree one all three nonzero cubic classes have obstruction one, while ten of the fifteen nonzero quintic classes have obstruction one. Precisely these $3\cdot10$ pairs cancel. There are no surjections to the binary tetrahedral group above a cubic marking over $\mathbb Q_2$. There is no contradiction: a retraction from $E$ to its embedded $E_1$ would map the commuting $E_2$ into $Z(E_1)$ and hence kill $[E_2,E_2]=\langle z\rangle$, whereas a retraction fixes $z\in E_1$.

For $d=2$, the nonzero cubic classes have zero/one obstruction counts $9,6$; the nonzero quintic classes have counts $135,120$. Thus $M_2=9\cdot135+6\cdot120=1935$, and (1) gives $1\,981\,440$ maps.

**Checks and scope.** At $t=1$, (1) is the irreducible cyclic formula, including its zero count for $n_1=d=1$. Pairwise nonisomorphism is essential to the surjectivity argument. If two identical cubic constituents are used with $d=1$, the expression for $M_d$ would count nine nonzero unobstructed pairs, but every pair is $\mathbb F_4$-dependent and fails to surject onto $V_1\oplus V_1$. The [repeated cubic count](repeated-cubic-extraspecial-counts-over-dyadic-fields.md) instead gives zero.

The theorem treats central products of distinct self-dual irreducible constituents with the specified diagonal action. It leaves repeated constituents, paired non-self-dual constituents and general wild kernels outside its scope. Equalities (1)–(2) provide no compatible finite lifts or automorphism of $G_k$; the full Frobenius-shift and dyadic classification questions remain open.
