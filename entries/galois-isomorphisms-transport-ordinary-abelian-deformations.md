---
title: Galois isomorphisms transport polarized ordinary abelian deformations
kind: theorem
summary: 'An isomorphism of p-adic absolute Galois groups transports marked principally polarized lifts of a fixed ordinary abelian variety over the common residue field. It preserves integral Tate modules at every prime and which special-fibre endomorphisms lift.'
tags: [local-fields, galois-groups, abelian-varieties, hodge-theory, reconstruction]
edges:
  - {to: galois-isomorphisms-transport-ordinary-p-divisible-groups, label: uses, note: 'Transports the integral p-divisible group, its connected and étale parts, morphisms and Cartier duality.'}
  - {to: serre-tate-deformation-theory, label: uses, note: 'The deformation equivalence lifts the marked special abelian variety and its polarization from the transported p-divisible group.'}
  - {to: local-field-galois-invariants, label: uses, note: 'Inertia, residue cardinality, Frobenius and the cyclotomic character are preserved.'}
---

**Setting.** Let $K,L$ be finite extensions of $\mathbb Q_p$, and let $\alpha:G_L\xrightarrow{\sim}G_K$ be continuous. Identify their residue fields with a finite field $k$, and their unramified Galois quotients with $G_k$ by Frobenius. Fix also an equivariant identification
$$t:\alpha^*\mathbb Z_p(1)_K\xrightarrow{\sim}\mathbb Z_p(1)_L.$$
These choices are possible by the [group-theoretic local invariants](local-field-galois-invariants.md). Write $\Phi_\alpha$ for the [ordinary p-divisible-group equivalence](galois-isomorphisms-transport-ordinary-p-divisible-groups.md), with its Cartier-duality compatibility determined by $t$.

Fix an ordinary principally polarized abelian variety $(A_0,\lambda_0)/k$. A *marked polarized lift* over $\mathcal O_K$ is $(A,\lambda,\iota)$, where $A/\mathcal O_K$ is an abelian scheme, $\lambda$ is a principal polarization, and $\iota:(A_k,\lambda_k)\xrightarrow{\sim}(A_0,\lambda_0)$. Morphisms are polarized isomorphisms compatible with $\iota$. Define the corresponding groupoid over $\mathcal O_L$ in the same way.

**Theorem (proved here).** The choices above give an equivalence between these two groupoids. If $(B,\mu,\jmath)$ corresponds to $(A,\lambda,\iota)$, then
$$
B[p^\infty]\simeq\Phi_\alpha(A[p^\infty]),\qquad
T_pB\simeq\alpha^*T_pA,
$$
compatibly with the polarizations and $t$. For every prime $\ell\ne p$, also $T_\ell B\simeq\alpha^*T_\ell A$.

Moreover, under the markings the subrings of $\operatorname{End}_k(A_0)$ consisting of endomorphisms that lift to $A$ and to $B$ coincide. The theorem allows $p=2$ and arbitrary ramification.

**Deformation inputs.** Serre–Tate gives an equivalence between abelian schemes over a nilpotent thickening in which $p$ is nilpotent and the corresponding special abelian schemes with lifted p-divisible groups [@katz1981serretate, Theorem 1.2.1, p. 143]. Its full-faithfulness statement includes compatible homomorphisms. The polarized version and the algebraization of polarized formal abelian schemes over complete local rings are recalled in [@oort2005newton, §1.5, pp. 258–259]. This last input is needed when passing from the Artinian quotients to the integer ring.

**Proof.**

*1. Reduction of the transport.* An ordinary p-divisible group $D$ over the perfect field $k$ has a functorial splitting
$$D\simeq D^0\times D^{\mathrm{et}}.$$
Indeed, at each finite level the reduced subscheme is a subgroup, since products of reduced finite $k$-schemes are reduced. It maps isomorphically to the étale quotient: after algebraic closure each connected component has exactly one reduced point. These splittings are compatible with the level inclusions. There are no nonzero homomorphisms between a multiplicative p-divisible group and an étale one in either direction, as is checked at finite levels by connectedness and reducedness. Thus the splitting is natural. Here $D^0$ is the Cartier dual of an étale group.

On étale groups, $\Phi_\alpha$ is the equivalence on unramified $\mathbb Z_p$-representations. Since $\alpha$ induces the identity on $G_k$ under the chosen identifications, reduction of this equivalence is naturally the identity. Cartier duality gives the same assertion on multiplicative groups. Splitting over $k$ therefore supplies, for every ordinary $G/\mathcal O_K$, natural isomorphisms
$$\rho_G:(\Phi_\alpha G)_k\xrightarrow{\sim}G_k.$$
These commute with morphisms and Cartier duality. More explicitly, if $\delta_G:\Phi_\alpha(G^D)\xrightarrow{\sim}(\Phi_\alpha G)^D$ is the duality isomorphism, then
$$\rho_G^D\rho_{G^D}=(\delta_G)_k.$$
Duality exchanges the two factors, and this equality holds on each factor because the multiplicative identification was defined from the étale one using $\delta$.

*2. Transporting the polarized deformation.* Put $G=A[p^\infty]$ and $H=\Phi_\alpha G$. The map $\iota[p^\infty]\rho_G$ marks $H_k$ by $A_0[p^\infty]$. Transport the principal quasi-polarization $\lambda[p^\infty]$ to $H$ using Cartier duality. On Tate modules this transports the perfect alternating Weil pairing by $\alpha$ and $t$, so its perfectness and alternation are preserved, including at $p=2$. By Step 1 its reduction, with the marking, is $\lambda_0[p^\infty]$.

The pairing identities hold on the finite flat groups $H[p^r]$: their coordinate rings inject into their generic fibres, where the identities follow from the transported Tate-module pairing. Apply polarized Serre–Tate theory to $H$ over each $\mathcal O_L/\mathfrak m_L^n$, marked by $(A_0,\lambda_0)$. Full faithfulness identifies successive reductions, producing a polarized formal abelian scheme. Polarized algebraization gives an abelian scheme $(B,\mu)/\mathcal O_L$ with that formal completion and marking. Its polarization is principal because its special-fibre polarization is principal. At every finite torsion level, completeness identifies $B[p^r]$ with $H[p^r]$ from their compatible Artinian reductions; hence $B[p^\infty]\simeq H$. This proves the claimed integral $p$-adic identification.

Serre–Tate full faithfulness and formal GAGA transport marked polarized isomorphisms. Performing the construction with $\alpha^{-1}$ and the inverse choices recovers the marked polarized p-divisible group, hence the marked polarized abelian scheme. This proves the equivalence.

*3. Other Tate modules and endomorphisms.* For $\ell\ne p$, each $A[\ell^n]$ is finite étale over $\mathcal O_K$, and is the unique finite étale lift of $A_0[\ell^n]$ with the specified marking. The same holds for $B$ over $\mathcal O_L$. Their Galois actions factor through $G_k$, where $\alpha$ is the identity, proving the $\ell$-adic assertion by inverse limits.

For $f_0\in\operatorname{End}_k(A_0)$, Serre–Tate full faithfulness says that $f_0$ lifts precisely when $f_0[p^\infty]$ lifts compatibly to the marked p-divisible group. This equivalence first holds at each Artinian level; uniqueness makes those lifts compatible, and formal GAGA algebraizes them. Since $\Phi_\alpha$ is fully faithful and Step 1 is natural, this condition is identical for $G$ and $H$. Uniqueness of lifting identifies the resulting endomorphism rings with the same subring of $\operatorname{End}_k(A_0)$. $\square$

**Scope.** The construction retains the polarized special fibre as additional data. It does not recover that abelian variety from its p-divisible group alone. The polarization supplies algebraization; the statement is about lifts over the two complete integer rings, not an isomorphism of their deformation functors on arbitrary Artin rings.
