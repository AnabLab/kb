---
title: Symplectic three-torsion does not determine semistability
kind: theorem
summary: 'Over $\mathbb Q_{31}$, every Galois isomorphism between the 3-torsion of $y^2=x^3+31^2$ and of the Tate curve with parameter 31 preserves Weil pairings, yet their monodromy groups are $C_3$ and $1$. So torsion levels 2, 3 and 4 fail to determine monodromy even with Weil pairings.'
tags: [elliptic-curves, local-fields, ramification, reconstruction-algorithms]
edges:
  - {to: three-torsion-does-not-determine-semistable-reduction, label: uses, note: 'Supplies the Galois-module isomorphism, the three-torsion field of A, and the monodromy groups C_3 and 1.'}
  - {to: weil-pairing-and-cyclotomic-character, label: uses, note: 'Uses bilinearity, alternation and nondegeneracy of the Weil pairing, and its primitivity on a basis at level two; isogeny compatibility is cited separately.'}
  - {to: finite-torsion-recovers-semistable-inertia, label: uses, note: 'Its recalled Grothendieck criterion, J and finite monodromy group are used for the 2-isogenous curve; its part 1 gives sufficiency at every level n at least 5 prime to p.'}
  - {to: four-torsion-does-not-determine-semistable-reduction, label: uses, note: 'Parts 1 and 2 supply the level-two pair used in part 3.'}
  - {to: symplectic-four-torsion-does-not-determine-semistability, label: uses, note: 'Supplies the level-four case of the consequence, where an odd-degree isogeny corrects the pairing sign; at level three the original isomorphism already preserves the pairings.'}
---

**Setting.** Put $K=\mathbb Q_{31}$ and $\pi=31$. As in [the three-torsion example](three-torsion-does-not-determine-semistable-reduction.md), let
$$A:\ y^2=x^3+\pi^2,$$
let $T=E_\pi$ be the Tate curve with parameter $\pi$, choose $a$ with $a^3=\pi$, and put $L=K(a)$. That example gives a basis $(e,v)$ of $A[3]$ and a surjective homomorphism $\chi:G_K\to\mathbb F_3$ with
$$g(e)=e,\qquad g(v)=v+\chi(g)e\qquad(g\in G_K).\tag{1}$$

Write $e_{C,n}$ for the Weil pairing on $C[n]$. Let $C/K$ be an elliptic curve and $\psi:A[3]\to C[3]$ a $G_K$-isomorphism. Both $e_{A,3}$ and $(P,Q)\mapsto e_{C,3}(\psi P,\psi Q)$ are alternating bilinear pairings on a two-dimensional $\mathbb F_3$-space, and each takes a generator of $\mu_3$ on a basis, by the [Weil pairing entry](weil-pairing-and-cyclotomic-character.md). So there is a unique $d(\psi)\in\mathbb F_3^\times$ with
$$e_{C,3}(\psi P,\psi Q)=e_{A,3}(P,Q)^{d(\psi)}\qquad(P,Q\in A[3]).\tag{2}$$
This is the multiplier of Freitas and Kraus [@freitaskraus2022symplectic, §3.1, (3.1), p. 9]. The map $\psi$ preserves the Weil pairings exactly when $d(\psi)=1$.

Tate uniformization $\bar K^\times/\pi^{\mathbb Z}\simeq T(\bar K)$ is $G_K$-equivariant [@kedlaya2004tate, Theorem 1, p. 3]. Let $[-1]\in T(\bar K)$ be the class of $-1$, and let $f:T\to T'$ be the quotient isogeny by $\langle[-1]\rangle$, constructed in the proof.

**Theorem (proved here; part 1 applies a cited criterion).**

1. Every $G_K$-isomorphism $\psi:A[3]\to T[3]$ preserves the Weil pairings, that is, $d(\psi)=1$. Such isomorphisms exist, and $\Phi_A\simeq C_3$ while $\Phi_T=1$.
2. The curve $T'$ and the isogeny $f$ are defined over $K$, and $\deg f=2$. The curve $T'$ is semistable with $\Phi_{T'}=1$. Every $G_K$-isomorphism $A[3]\to T'[3]$ inverts the Weil pairings.
3. Let $p$ be odd, let $K_1/\mathbb Q_p$ be finite with $i\in K_1$, and let $E$ and $E'$ be the Tate curve and its ramified quadratic twist from [the level-four example](four-torsion-does-not-determine-semistable-reduction.md). Every group isomorphism $E[2]\to E'[2]$ preserves the Weil pairings. Such $G_{K_1}$-isomorphisms exist, and $\Phi_E=1$ while $\Phi_{E'}\simeq C_2$.

Consequently, for each $n\in\{2,3,4\}$ there are two elliptic curves over a $p$-adic field, with $n$ prime to $p$, whose full $n$-torsion Galois modules are isomorphic compatibly with the Weil pairings but whose finite monodromy groups differ. Level $4$ is [the symplectic four-torsion example](symplectic-four-torsion-does-not-determine-semistability.md). By part 1 of [finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md), inertia on the $n$-torsion of an abelian variety over a $p$-adic field determines its finite monodromy group for every $n\ge5$ prime to $p$. So the bound $n\ge5$ stays sharp when the Weil pairings are added.

**Proof.** *One multiplier for all isomorphisms.* Let $C$ be $T$ or $T'$, and let $\psi,\psi':A[3]\to C[3]$ be $G_K$-isomorphisms. By (1), $G_K$ acts on $A[3]$, in the basis $(e,v)$, through the powers of $N=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, and $N$ itself occurs because $\chi$ is surjective. The automorphism $c=\psi^{-1}\psi'$ of $A[3]$ commutes with $N$, hence with $N-1=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, so its matrix has the form $\begin{pmatrix}\alpha&\beta\\0&\alpha\end{pmatrix}$. Its determinant is $\alpha^2=1$ in $\mathbb F_3$. Bilinearity and alternation give $e_{A,3}(cP,cQ)=e_{A,3}(P,Q)^{\det c}$, as one checks on the basis. Therefore $d(\psi')=d(\psi\circ c)=d(\psi)$.

*Part 1.* We apply [@freitaskraus2022symplectic, Theorem 14, pp. 19–20] with their primes $\ell=31$ and $p=3$, their $E$ equal to $T$ and their $E'$ equal to $A$. Its hypotheses hold.

- $\ell=31\ne3$.
- $T$ has split multiplicative reduction [@kedlaya2004tate, Theorem 2(b), p. 4].
- $A$ has potentially good reduction with semistability defect $3$. Freitas and Kraus define this defect as the degree of $\mathbb Q_\ell^{\mathrm{un}}(A[3])$ over $\mathbb Q_\ell^{\mathrm{un}}$ [@freitaskraus2022symplectic, §4.1, p. 13]. Step 2 of the three-torsion example shows that the three-torsion field of $A$ is $L$, so $\mathbb Q_{31}^{\mathrm{un}}(A[3])=\mathbb Q_{31}^{\mathrm{un}}(a)$. This has degree $3$, because $X^3-\pi$ is still Eisenstein over $\mathbb Q_{31}^{\mathrm{un}}$. Steps 1 and 2 of that example also show that $A$ becomes isomorphic over $L$ to the curve $y^2=x^3+1$, which has good reduction.
- $A[3]\simeq T[3]$ as $G_K$-modules, by isomorphism (1) of the three-torsion example.

Theorem 14 uses the valuations $v_\ell(\Delta_m)$ of the discriminants of minimal Weierstrass models [@freitaskraus2022symplectic, §4, p. 13]. A change of Weierstrass coordinates with scaling factor $u$ multiplies the discriminant by $u^{\pm12}$ [@freitaskraus2022symplectic, §16, (16.2) and the relation $\Delta=u^{12}\Delta'$ after (16.3), p. 55], and an integral model has integral discriminant. Hence an integral model whose discriminant has valuation below $12$ is minimal.

- Kedlaya's model of $T$ is $y^2+xy=x^3+a_4x+a_6$ with $a_4=-s_3(\pi)$ and $a_6=-(5s_3(\pi)+7s_5(\pi))/12$, where $s_k(\pi)=\sum_{n\ge1}n^k\pi^n/(1-\pi^n)$ [@kedlaya2004tate, equation (1) and the preceding definitions, p. 2; Theorem 1, p. 3]. Each $s_k(\pi)$ lies in $\mathbb Z_{31}$ and $12$ is a $31$-adic unit, so the model is integral. Its discriminant $\pi\prod_{n\ge1}(1-\pi^n)^{24}$ [@kedlaya2004tate, equation (2), p. 2] has valuation $1$.
- The integral model $y^2=x^3+\pi^2$ has discriminant $-16\cdot27\cdot\pi^4=-432\cdot31^4$, of valuation $4$.

So $v_{31}(\Delta_m(T))=1$ and $v_{31}(\Delta_m(A))=4$, which agree modulo $3$. Theorem 14 now says that $T[3]$ and $A[3]$ are symplectically isomorphic, and not anti-symplectically isomorphic. In the terminology of [@freitaskraus2022symplectic, §3.1, p. 9, and §4, p. 13], some $G_K$-isomorphism $T[3]\to A[3]$ has multiplier a square in $\mathbb F_3^\times$, which must be $1$, and none has multiplier $-1$. Since $d(\psi^{-1})=d(\psi)^{-1}$, every $G_K$-isomorphism $\psi:A[3]\to T[3]$ has $d(\psi)=1$. The three-torsion example computes $\Phi_A\simeq C_3$ and $\Phi_T=1$.

*Part 2.* The only unit in $\pi^{\mathbb Z}$ is $1$, so $-1\notin\pi^{\mathbb Z}$, while $(-1)^2=1$. Thus $[-1]$ has order $2$; by equivariance it lies in $T(K)$. The subgroup $\langle[-1]\rangle$ is therefore $G_K$-stable. So it is the kernel of a separable isogeny $f:T\to T'$, and $f$ and $T'$ are defined over $K$ [@sutherland2025isogenykernels, Theorem 5.11 and the following paragraph, p. 5]. Since $f$ is separable, its degree equals the order of its kernel, $2$ [@sutherland2025isogenykernels, Theorem 5.8, p. 3]. The dual isogeny satisfies $\widehat ff=[2]$ on $T$ and $f\widehat f=[2]$ on $T'$ [@sutherland2025torsion, Theorem 6.7, p. 3; Lemma 6.10, p. 5].

Let $f_3:T[3]\to T'[3]$ be the restriction of $f$. It is $G_K$-equivariant because $f$ is defined over $K$. It is injective because $\ker f$ has order $2$. It is surjective: for $R'\in T'[3]$, the point $\widehat f(2R')$ lies in $T[3]$, and $f(\widehat f(2R'))=4R'=R'$. For $R,S\in T[3]$, the isogeny compatibility of the Weil pairing and bilinearity give
$$e_{T',3}(fR,fS)=e_{T,3}(R,\widehat ffS)=e_{T,3}(R,S)^2=e_{T,3}(R,S)^{-1}$$
[@sutherland2025weil, Theorem 23.23, p. 10]. Hence, for $\psi$ as in part 1, $f_3\circ\psi:A[3]\to T'[3]$ is a $G_K$-isomorphism with $d(f_3\circ\psi)=-d(\psi)=-1$. By the multiplier argument above, every $G_K$-isomorphism $A[3]\to T'[3]$ has multiplier $-1$.

Multiplication by $2$ is invertible on the $3$-adic Tate modules, so the same identities make $T_3f:T_3T\to T_3T'$ a $G_K$-equivariant isomorphism, with inverse $\tfrac12T_3\widehat f$. Thus an inertia element acts unipotently on $T_3T'$ exactly when it does on $T_3T$. The set $J$ is independent of the auxiliary prime, and Grothendieck's criterion identifies semistability with $J=I_K$; both are recalled in [finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md). Since $T$ is semistable, $J_T=I_K$. Hence $J_{T'}=I_K$, so $\Phi_{T'}=1$ and $T'$ is semistable.

*Part 3.* By alternation and bilinearity, $e_2(P,Q)=1$ if $P=Q$ or if one of them is $0$. Distinct nonzero points $P,Q$ of $E[2]\simeq(\mathbb Z/2)^2$ form a basis, so $e_2(P,Q)$ generates $\mu_2$ by the [Weil pairing entry](weil-pairing-and-cyclotomic-character.md); that is, $e_2(P,Q)=-1$. So $e_2(P,Q)=-1$ exactly when $P$ and $Q$ are distinct and nonzero, on $E$ and on $E'$ alike. A group isomorphism preserves that condition, hence preserves the pairings. Parts 1 and 2 of the level-four example give a $G_{K_1}$-isomorphism $E[2]\simeq E'[2]$ and the two monodromy groups.

The consequence combines parts 1 and 3 with the symplectic four-torsion example. $\square$

**Remarks.**

- *Which case holds.* Independently of Theorem 14, part 2 shows that $d(f_3\circ\psi)=-d(\psi)$ for every $G_K$-isomorphism $\psi:A[3]\to T[3]$. So exactly one of the semistable curves $T$ and $T'$, both with trivial monodromy, has three-torsion isomorphic to $A[3]$ compatibly with the Weil pairings, and part 1 identifies it as $T$. In particular, a semistable partner of $A[3]$ can have either symplectic type. Theorem 14 tells the types apart through $v_\ell(\Delta_m)$ modulo $3$.
- *The cited proof.* Freitas and Kraus prove Theorem 14 in their §29 [@freitaskraus2022symplectic, §29, pp. 84–86]. Its last step checks a basis normalization by a computer calculation of a Weil pairing at $\ell=2$, which is not repeated here. For the multiplicative curve, their formula (29.1) says that in a symplectic basis the inertia element $\sigma$ with $\sigma(\ell^{1/3})=\zeta_3\ell^{1/3}$ acts by $\begin{pmatrix}1&k\\0&1\end{pmatrix}$ with $k\equiv v_\ell(\Delta_m)\pmod 3$. The proof reaches this through two sign slips that cancel.
  - Proposition 12(4) speaks of $j_C^{1/p}$. Its proof, however, takes the upper-right entry $h(\sigma)$ to be the exponent by which $\sigma$ multiplies $q^{1/p}$, and shows that $qj_C$ is a $p$th power [@freitaskraus2022symplectic, Proposition 12 and its proof, pp. 50–51]. So the exponent for $j_C^{1/p}$ is $-h(\sigma)$.
  - §29 writes $j_E=\mu\ell^kc^3$ with $k\equiv v_\ell(\Delta_m)\pmod 3$ [@freitaskraus2022symplectic, §29, p. 84], whereas $v_\ell(j_E)\equiv-v_\ell(\Delta_m)$. For $E=T$, indeed, $v_{31}(j_T)=-1$ by [@kedlaya2004tate, equation (3), p. 2], and $v_{31}(\Delta_m(T))=1$ as shown above.

  Correcting both, (29.1) follows from the proof's description of $h(\sigma)$ through $q^{1/3}$. For $T$, where $q=\ell$, that exponent is $1=v_{31}(\Delta_m(T))$, as (29.1) states.
- *Scope.* Part 1 is one example over $\mathbb Q_{31}$, deduced from a criterion stated over $\mathbb Q_\ell$; other base fields are not treated. All three parts concern finite torsion modules of elliptic curves with their Weil pairings, not polarized Tate modules or higher-dimensional abelian varieties. No novelty is claimed beyond these deductions.
