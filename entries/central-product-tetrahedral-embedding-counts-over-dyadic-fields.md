---
title: Central-product tetrahedral embedding counts over dyadic fields
kind: theorem
summary: 'For central products of SL2(F3) with cyclic 2-groups, marked surjection counts above a cyclic cubic quotient depend only on the dyadic degree and roots of unity. The order-48 target gives 7104 maps for each cubic marking of the unramified quadratic field.'
tags: [local-fields, galois-groups, galois-cohomology]
edges:
  - {to: binary-tetrahedral-embedding-counts-over-dyadic-fields, label: uses, note: 'Its proof counts maps onto A4 above a cyclic cubic quotient and those with vanishing quaternion obstruction.'}
  - {to: local-tate-duality, label: uses, note: 'Duality computes the change of obstruction under enlargement of the central kernel; the Euler characteristic counts central characters.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'The natural cubic markings have equal counts for an infinite family of targets with nonabelian 2-group kernels; no full lift is constructed.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: analogous-to, note: 'Evaluates marked counts for the natural cubic quotient of each target, not for every finite quotient diagram.'}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$, and fix a continuous epimorphism $\epsilon:G_k\to C_3$. Write $B=Q_8\rtimes C_3\cong\mathrm{SL}_2(\mathbb F_3)$ as in the [binary tetrahedral count](binary-tetrahedral-embedding-counts-over-dyadic-fields.md), and denote its central involution by $-1$. For $s\ge1$ put
$$
B_s=(B\times\langle z\rangle)/\langle(-1,z^{2^{s-1}})\rangle,
\qquad |z|=2^s.
$$
The images of $B$ and $\langle z\rangle$ embed in $B_s$; write $Z_s$ for the latter. Then $|B_s|=12\cdot2^s$, $B_1\cong B$, and
$$
1\longrightarrow Z_s\longrightarrow B_s\longrightarrow A_4\longrightarrow1.
$$
The natural map $r_s:B_s\to C_3$ has nonabelian 2-group kernel, the central product of $Q_8$ with $C_{2^s}$.

Put
$$
R=2^{2d}-1,\qquad M=2^{2d-1}+(-1)^d2^{d-1},
\qquad m_s=\#\mu_{2^s}(k),\qquad h_s=2^{s(d+1)}m_s,
$$
and define
$$
t_s=\begin{cases}
M-1,&\mu_{2^s}\subset k,\\
R,&\mu_{2^s}\not\subset k.
\end{cases}
$$
In particular $t_1=M-1$ and $h_1=2^{d+2}$.

**Theorem (proved here).** For every $s\ge2$, the number of continuous epimorphisms $\rho:G_k\to B_s$ with $r_s\rho=\epsilon$ is
$$
N_s(k)=4\bigl(t_sh_s-t_{s-1}h_{s-1}\bigr).
$$
The maps have fixed target and are not identified under conjugation. The count is independent of $\epsilon$, including whether its cyclic cubic extension is ramified.

**Proof.** All cyclic coefficient modules below have trivial Galois action.

*1. The inherited quaternion obstruction.* The proof of the [binary tetrahedral count](binary-tetrahedral-embedding-counts-over-dyadic-fields.md), Steps 2–4, gives exactly $4R$ epimorphisms $a:G_k\to A_4$ above $\epsilon$. Of these, exactly $4(M-1)$ have zero obstruction
$$
o(a)\in H^2(k,C_2)
$$
to lifting through $B\to A_4$. These counts include the four cocycle representatives of each nonzero cohomology class. The zero class does not give an epimorphism to $A_4$ and is excluded throughout.

*2. Enlarging the center.* The extension $B_s\to A_4$ is the pushout of $B\to A_4$ by
$$
j_s:C_2\longrightarrow C_{2^s},\qquad 1\longmapsto2^{s-1}.
$$
Indeed a section of $B\to A_4$, followed by its embedding into $B_s$, has the same factor set with values sent through $j_s$. Thus $a$ lifts to $B_s$ exactly when $(j_s)_*o(a)=0$.

Local duality identifies $H^2(k,C_{2^s})$ with the dual of $\mu_{2^s}(k)$ [@milne2006adt, I, Corollary 2.3, p. 28]. Under these perfect pairings, the transpose of $(j_s)_*$ is
$$
\mu_{2^s}(k)\longrightarrow\mu_2(k),\qquad
\zeta\longmapsto\zeta^{2^{s-1}}.
$$
This follows directly by precomposing the character $C_{2^s}\to\bar k^\times$ with $j_s$, and by naturality of the evaluation cup product. If $m_s<2^s$, this map is zero: the proper subgroup $\mu_{2^s}(k)$ has exponent dividing $2^{s-1}$. If $m_s=2^s$, it is surjective. Consequently $(j_s)_*$ is respectively zero or injective. Step 1 therefore gives $4t_s$ liftable epimorphisms $a$.

For each such $a$, its lifts form a torsor under $H^1(k,C_{2^s})=\operatorname{Hom}_{\mathrm{cont}}(G_k,C_{2^s})$, since the kernel is central. Duality and the Euler characteristic give
$$
\#H^1(k,C_{2^s})
=\#H^0(k,C_{2^s})\,\#H^2(k,C_{2^s})\,2^{sd}
=2^{s(d+1)}m_s=h_s
$$
[@milne2006adt, I, Corollary 2.3, p. 28, and Theorem 2.8, p. 31]. Thus $4t_sh_s$ homomorphisms to $B_s$ have surjective image in $A_4$. They need not yet surject onto $B_s$.

*3. Removing precisely the proper images.* The quaternion relations give $[B,B]=Q_8$: if $c$ cycles $i,j,ij$, then $cic^{-1}i^{-1}=ij$, whose conjugates generate $Q_8$. Since $Z_s$ is central and its involution is $-1\in Q_8$,
$$
B_s^{\mathrm{ab}}\cong C_3\times C_{2^{s-1}}.
$$
For $s\ge2$ there is a unique subgroup of index two,
$$
B_{s-1}=\langle B,z^2\rangle\subset B_s;
$$
for $s=2$ this is the embedded $B$.

If a subgroup $T\subset B_s$ maps onto $A_4$, then $B_s=TZ_s$. Centrality of $Z_s$ makes $T$ normal, and $B_s/T$ is a cyclic 2-group. If $T$ is proper, this quotient has an index-two subgroup, whose preimage is the unique index-two subgroup $B_{s-1}$ of $B_s$. Hence $T\subset B_{s-1}$. Conversely an image contained in $B_{s-1}$ is proper.

Applying Step 2 at $s-1$ counts all homomorphisms into this subgroup whose projection to $A_4$ is surjective: there are $4t_{s-1}h_{s-1}$. Subtracting them proves the formula, with no assumption that these subtracted maps surject onto $B_{s-1}$. $\square$

**The first new target.** At $s=2$, the group has order $48$, and the formula becomes
$$
N_2(k)=\begin{cases}
4\bigl((2^{2d}-1)2^{2d+3}-(M-1)2^{d+2}\bigr),&i\notin k,\\
4(M-1)\bigl(2^{2d+4}-2^{d+2}\bigr),&i\in k.
\end{cases}
$$
For $k=\mathbb Q_2$, $d=1$ and $M=1$, so the count is $384$, although the binary tetrahedral count itself is zero. Enlarging the center has killed its nonzero obstruction. For $k=U_2$, $d=2$, $M=10$ and $i\notin U_2$, giving
$$
N_2(U_2)=4(15\cdot128-9\cdot16)=7104.
$$
Here $i\notin U_2$ follows because $(i-1)^2+2(i-1)+2=0$ is Eisenstein over an unramified dyadic field.

**Frobenius shift and scope.** Every $\epsilon:G_k\to C_3$ factors through the tame quotient, since wild inertia is pro-2. Precomposition by any tame automorphism gives another epimorphism to $C_3$, so the theorem gives equal marked counts for the natural maps $r_s$, for every $s\ge2$. In particular, over $U_2$ it gives $7104$ for each of the three markings $\epsilon_a(\tau)=c$, $\epsilon_a(\sigma)=c^a$ exchanged by the [Frobenius shift](frobenius-shift-lifting-problem.md). This evaluates one family of targets with nonabelian 2-group kernels of unbounded order. Other quotient maps from these targets and the complete finite-quotient criterion remain outside the statement; the full lifting and dyadic classification questions remain open.
