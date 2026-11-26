---
title: Finite torsion recovers the semistable inertia obstruction
kind: theorem
summary: 'For an abelian variety over a p-adic field, inertia on A[n] for every n at least five, prime to p, determines its finite monodromy group, including at composite level six. The group order is the minimum semistabilizing degree, attained by a totally ramified extension.'
tags: [abelian-varieties, local-fields, galois-groups, reconstruction-algorithms]
edges:
  - {to: tate-modules-and-geometric-fundamental-groups, label: uses, note: 'Uses the integral Tate module and its finite torsion quotients.'}
  - {to: local-field-galois-invariants, label: uses, note: 'For the transport conclusion, a local Galois isomorphism preserves inertia, including in matched finite extensions.'}
  - {to: neron-ogg-shafarevich-criterion, label: analogous-to, note: 'That criterion detects good reduction by trivial inertia; here unipotent inertia detects semistable reduction.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite and $A/K$ an abelian variety of positive dimension. Write $I_K\subset G_K$ for inertia and $\rho_\ell:G_K\to\operatorname{Aut}_{\mathbb Z_\ell}(T_\ell A)$, where $\ell\ne p$. Semistable reduction means that the identity component of the special fibre of the Néron model is an extension of an abelian variety by a torus.

**Known inputs.** Grothendieck's criterion identifies semistable reduction with unipotent inertia action, equivalently $(\rho_\ell(\sigma)-1)^2=0$ for every $\sigma\in I_K$. For an individual inertia element, unipotence also implies this square-zero identity [@silverbergzarhin2001etale, Theorem 4.1 and Lemma 4.2, p. 148]. The set
$$J_A=\{\sigma\in I_K:\rho_\ell(\sigma)\text{ is unipotent}\}$$
is an open normal subgroup of $I_K$, independent of $\ell$ [@silverbergzarhin2001etale, proof of Theorem 5.5, formula (2), p. 151; Remark 7.5, p. 156]. It is normal in $G_K$ as well, because unipotence is preserved by conjugation. Put $\Phi_A=I_K/J_A$, the *finite monodromy group*.

**Finite reconstruction and consequences (deduced here).** Choose any integer $n\ge5$ prime to $p$, and let
$$\bar\rho:G_K\longrightarrow\operatorname{Aut}(A[n]),\qquad H=\bar\rho(I_K),\qquad U=\{h\in H:(h-1)^2=0\}.$$

1. $U$ is a normal subgroup, $J_A=(\bar\rho|_{I_K})^{-1}(U)$, and $\Phi_A\simeq H/U$. Thus levels $5$, $6$, $7$, $8$, $9$, and every larger integer suffice whenever prime to $p$; no prime-power hypothesis is needed.
2. For every finite extension $E/K$ inside $\bar K$,
   $$A_E\text{ is semistable}\quad\Longleftrightarrow\quad I_E\subseteq J_A\quad\Longleftrightarrow\quad\bar\rho(I_E)\subseteq U.$$
   If these conditions hold, $|\Phi_A|$ divides $e(E/K)$. There is a totally ramified extension $E/K$ of degree exactly $|\Phi_A|$ satisfying them. Consequently both the minimum ramification index and the minimum degree of a semistable extension equal $|\Phi_A|$.
3. Let $L/\mathbb Q_p$ be finite, $\alpha:G_L\xrightarrow{\sim}G_K$ continuous, and $B/L$ an abelian variety. If $B[n]\simeq\alpha^*A[n]$ as Galois modules, then $\alpha(J_B)=J_A$ and $\Phi_B\simeq\Phi_A$. Every pair of finite extensions matched by $\alpha$ gives semistable reduction simultaneously; the minimum degree and ramification index agree for $A$ and $B$.

**Proof.** We use the pointwise argument of [@silverbergzarhin2001etale, proof of Theorem 5.8, pp. 152–153], on Tate modules rather than their duals. Fix $\sigma\in I_K$. Its characteristic polynomial on $T_\ell A$ has integer coefficients independent of $\ell\ne p$, as recalled there. Consequently the characteristic polynomial $P(t)$ of $(\rho_\ell(\sigma)-1)^2/n$ belongs to $\mathbb Z[1/n][t]$ and is independent of $\ell$.

If $(\bar\rho(\sigma)-1)^2=0$, then for every prime $\ell\mid n$ this operator preserves $T_\ell A$, so $P(t)\in\mathbb Z_\ell[t]$. Hence $P(t)\in\mathbb Z[t]$. Each eigenvalue $\lambda$ of $\rho_\ell(\sigma)$ is a root of unity by potential semistability, and $(\lambda-1)^2/n$ is an algebraic integer because it is a root of $P$. The root-of-unity criterion [@silverbergzarhin2001etale, Definition 2.1 and Theorem 3.3, p. 144] gives $\lambda=1$, since $n\ge5$ excludes $N(2)=\{1,2,3,4\}$. Thus $\sigma\in J_A$.

Conversely, $\sigma\in J_A$ gives the integral square-zero identity on every $T_\ell A$, hence on $A[n]$ by its prime-power decomposition. Therefore $U=\bar\rho(J_A)$; normality and the quotient formula follow. This proves part 1.

For part 2, $I_E=G_E\cap I_K$, so the criterion applied over $E$ gives the equivalences. If $I_E\subseteq J_A$, then
$$e(E/K)=[I_K:I_E]=[I_K:J_A][J_A:I_E],$$
which gives the divisibility even for non-Galois $E/K$.

To attain the bound, form the profinite group $Q=G_K/J_A$. Its exact sequence is
$$1\longrightarrow\Phi_A\longrightarrow Q\xrightarrow{\pi}\widehat{\mathbb Z}\longrightarrow1.$$
Choose $x\in Q$ mapping to the arithmetic Frobenius $1\in\widehat{\mathbb Z}$. The continuous power map $s:\widehat{\mathbb Z}\to Q$, $n\mapsto x^n$, satisfies $\pi\circ s=\mathrm{id}_{\widehat{\mathbb Z}}$. Its image $C$ is therefore a closed complement to $\Phi_A$, of index $|\Phi_A|$. The preimage of $C$ in $G_K$ is an open subgroup $G_E$, with $I_E=J_A$ and full image in $G_K/I_K$. Thus $E/K$ has residue degree one, degree $|\Phi_A|$, and semistable reduction. This also proves the assertion about both minima.

For part 3, $\alpha(I_L)=I_K$. The torsion-module isomorphism identifies their finite inertia images and the square-zero subsets, so part 1 identifies $J_B$ and $J_A$. For matched $G_{L'}=\alpha^{-1}(G_{K'})$, intersecting with inertia gives $\alpha(I_{L'})=I_{K'}$. Apply part 2. $\square$

**Scope.** This is a finite procedure once the inertia action on the specified torsion module is given. It does not construct $B$ from a transported module. The totally ramified extension attaining the bound need not be Galois or unique. Finally, $\Phi_A=1$ means semistable reduction; good reduction requires the stronger trivial-inertia condition in the [Néron–Ogg–Shafarevich criterion](neron-ogg-shafarevich-criterion.md).

**Why level six suffices.** When $p\ne2,3$, the pair of inertia modules $A[2]$ and $A[3]$ determines $A[6]$ by the Chinese remainder decomposition, and therefore determines $J_A$ and $\Phi_A$. Either level alone can fail, as shown by the [four-torsion example and its restriction to two-torsion](four-torsion-does-not-determine-semistable-reduction.md) and the [three-torsion example](three-torsion-does-not-determine-semistable-reduction.md). The common integral characteristic polynomial is what permits the proof to combine information at different primes; level six has no prime-power divisor satisfying $m(\ell-1)>2$.
