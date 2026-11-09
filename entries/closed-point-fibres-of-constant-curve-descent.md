---
title: Closed-point fibres of constant-curve descent
kind: theorem
summary: 'For a proper finite-field curve of genus at least two, full-descent tuples with the same closed-point values differ by one common Galois action. Arithmetic conjugacy gives exactly these fibres. Constant-group torsors miss a change to one residue embedding on the identity tuple.'
tags: [curves, fundamental-groups, function-fields, finite-fields]
edges:
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: addresses, note: 'Checks the closed-point row of Creutz–Voloch Theorem 3.8 with constants compatibility imposed, and separates constant-group tests from full descent.'}
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: uses, note: 'Uses the open-image versus rational-point dichotomy for constants-compatible well-behaved maps.'}
  - {to: geometric-interpolation-for-constant-curve-descent, label: uses, note: 'Identifies full descent with geometric interpolation, also for torsors under nonconstant finite étale group schemes over the constants.'}
  - {to: local-point-sections-determine-well-behaved-maps, label: uses, note: 'Supplies geometric injectivity, rational-point separation, and uniqueness of the pro-point containing an open decomposition subgroup.'}
  - {to: mochizuki-grothendieck-conjecture-proper-curves-finite-fields, label: uses, note: 'Realizes the isomorphism between the open images by an equivariant isomorphism of universal covers.'}
  - {to: chebotarev-density-for-arithmetic-schemes, label: uses, note: 'Gives density of source decomposition groups and closed points of degree divisible by any chosen integer, outside a finite set.'}
---

**Setting.** Let $C,D$ be smooth, proper, geometrically integral curves over a finite field $k=\mathbb F_q$, with $g(C)\ge2$, and put $K=k(D)$. Write $\Pi_X=\pi_1(X)$, $\Delta_X=\pi_1(X_{\bar k})$, $\Gamma=G_k$, and $p_X:\Pi_X\to\Gamma$. Fix the local embeddings, residue fields $k_v\subset\bar k$, and decomposition sections $t_v:G_{k_v}\to\Pi_D$ as in [the descent entry](etale-descent-and-fundamental-group-maps-over-finite-fields.md).

Let $\mathcal H$ be the set of continuous homomorphisms $\phi:\Pi_D\to\Pi_C$ satisfying $p_C\phi=p_D$ and sending every decomposition group to an open subgroup of a decomposition group. Let
$$S=C(\mathbb A_{K,k})^{\mathrm{\acute et}}\subseteq\prod_{v\in D^1}C(k_v)$$
be the points surviving every finite étale function-field torsor. Write
$$u:\prod_v C(k_v)\longrightarrow\operatorname{Map}(D^1,C^1)$$
for the map forgetting the residue embeddings and retaining each component's underlying closed point. The group $\Gamma$ acts diagonally on the product by its usual action on $\bar k$-points. Here $\mathcal H/\Delta_C$ and $\mathcal H/\Pi_C$ mean quotients by conjugation in the target.

**Theorem (proved here).**

1. The point assignment of a well-behaved homomorphism gives bijections
   $$\mathcal H/\Delta_C\simeq S,\qquad
   \mathcal H/\Pi_C\simeq u(S).\tag{1}$$
   The first is equivariant for $\Pi_C/\Delta_C=\Gamma$. Consequently each nonempty fibre of $u|_S$ is exactly one diagonal $\Gamma$-orbit. In particular, two full-descent tuples with the same closed-point values differ by a *single* element of $\Gamma$ acting on every component.
2. If $D=C$, choose a closed point $v_0$ of degree $m>1$. For each $v$, let $x_v\in C(k_v)$ be the point given by the identity map of $C$ and the fixed residue embedding. Set
   $$y_v=x_v\ (v\ne v_0),\qquad y_{v_0}=\operatorname{Frob}_q(x_{v_0}).\tag{2}$$
   Then $y$ survives every torsor over $C$ under a finite constant $k$-group, but $y\notin S$. In particular, some torsor over $C$ under a nonconstant finite étale $k$-group scheme obstructs $y$.

Part 1 verifies the closed-point row of Creutz–Voloch's correspondence, with constants compatibility included [@creutzvoloch2024, Theorem 3.8, p. 8]. Part 2 shows why constant-group torsors alone cannot replace all finite étale group schemes over $k$ in geometric interpolation. Neither part proves geometric-point surjectivity for general open homomorphisms.

**Proof of part 1.** [Geometric interpolation](geometric-interpolation-for-constant-curve-descent.md) gives the surjection $\mathcal H/\Delta_C\to S$, and [local point sections determine well-behaved maps](local-point-sections-determine-well-behaved-maps.md) proves both well-definedness and injectivity. Conjugating $\phi$ by $g\in\Pi_C$ sends its target pro-points to their translates by $g$, so it sends its tuple to $p_C(g)x$. Thus $S$ is $\Gamma$-stable and the bijection is equivariant. Since $u$ is constant on $\Gamma$-orbits, it remains to prove injectivity of the second map in (1).

Suppose $\phi,\psi\in\mathcal H$ have tuples with identical underlying closed points at every $v$. The two $k_v$-points over a given closed point of $C$ are conjugate by an element of $\Gamma$. Lifting that element to $\Pi_C$, and using geometric conjugacy of sections of the same $k_v$-point, gives $g_v\in\Pi_C$ with
$$\psi t_v=g_v(\phi t_v)g_v^{-1}.\tag{3}$$
Consider the closed subset
$$Z=\{h\in\Pi_D:\psi(h)=a\phi(h)a^{-1}\text{ for some }a\in\Pi_C\}.$$
It is closed by compactness of $\Pi_D\times\Pi_C$. Equation (3) puts every source decomposition group in $Z$. It also puts its conjugate by $b\in\Pi_D$ in $Z$, using conjugator $\psi(b)g_v\phi(b)^{-1}$. By Chebotarev these conjugates have dense union, so $Z=\Pi_D$ [@jardenrazon2023transfer, Theorem 2.4, p. 497]. It follows that
$$\ker\phi=\ker\psi=:N,$$
and therefore
$$\theta:H_\phi\xrightarrow{\sim}H_\psi,\qquad
\theta(\phi(h))=\psi(h),\quad H_\phi=\phi(\Pi_D),\quad H_\psi=\psi(\Pi_D),\tag{4}$$
is a continuous isomorphism. Each $a\in H_\phi$ is conjugate in $\Pi_C$ to $\theta(a)$.

By the [checked dichotomy](etale-descent-and-fundamental-group-maps-over-finite-fields.md), each image is open or is a rational-point decomposition group. The two cases cannot mix in (4): a rational-point group is procyclic, whereas an open image is the fundamental group of a proper genus-at-least-two curve, whose geometric subgroup has nonprocyclic abelian pro-$\ell$ quotient for $\ell\ne\operatorname{char}(k)$. If both images are rational-point groups, the tuples are constant. Equality of their closed-point values makes their rational points equal, and their sections are geometrically conjugate. This proves the assertion in that case.

Suppose both images are open. They define finite étale covers
$$c_\phi:C_\phi\to C,\qquad c_\psi:C_\psi\to C.$$
Both are geometrically connected over $k$, since $p_C(H_\phi)=p_C(H_\psi)=\Gamma$, and both have genus at least two by Riemann–Hurwitz. Mochizuki realizes (4) by an isomorphism $f:C_\phi\to C_\psi$ and a $\theta$-equivariant isomorphism of universal covers [@mochizuki2007cuspidal, Theorem 3.2, p. 86]. The isomorphism $f$ is initially an isomorphism of schemes; $k$-linearity is not assumed.

Let $z$ be a closed point of $C_\phi$, and $T\subset H_\phi$ the decomposition group of a pro-point above $z$. The universal-cover isomorphism sends $T$ to a decomposition group above $f(z)$ in $C_\psi$. For a topological generator $a$ of $T$, the elementwise conjugacy above gives $\theta(a)=gag^{-1}$ for some $g\in\Pi_C$, hence $\theta(T)=gTg^{-1}$. Each is open in the corresponding decomposition group of $\Pi_C$. The pro-point separation proved in [the local-uniqueness entry](local-point-sections-determine-well-behaved-maps.md) implies
$$c_\phi(z)=c_\psi(f(z)).$$
Both maps are dominant and also agree at the generic point, so they have identical underlying topological maps. Stix's theorem says they differ by a power of absolute $p$-Frobenius, where $p=\operatorname{char}(k)$ [@stix2002affine, Proposition 2.3, p. 2]. Both maps are finite étale, so their function-field embeddings have inseparable degree one. A nonzero Frobenius power would change that degree. Consequently
$$c_\phi=c_\psi f$$
as scheme morphisms. After identifying both universal covers with $\widetilde C$, the isomorphism above $f$ is therefore an automorphism over $C$, hence a deck transformation $g\in\Pi_C$. Its equivariance gives $\theta(a)=gag^{-1}$ on $H_\phi$, and thus $\psi=g\phi g^{-1}$. This proves arithmetic injectivity and the second bijection in (1). Equivariance of the first bijection identifies its arithmetic quotient with $S/\Gamma$, proving the assertion about fibres. $\square$

**Proof of part 2.** Closed points of degree greater than one exist: apply Chebotarev to the connected constant-field cover of degree two to obtain a closed point splitting completely, whose degree is even. The tuple $x$ is the reduction of the generic $K$-point of $C$, so $x\in S$. Its component $x_{v_0}$ has Frobenius orbit of length $m$, and therefore $y_{v_0}\ne x_{v_0}$.

Let $P\to C$ be any torsor under a finite constant $k$-group $A$. Its class is represented by a homomorphism $\rho:\Pi_C\to A$, up to $A$-conjugacy. Over $K=k(C)$ its generic fibre supplies the global class interpolating the evaluations at $x_v$. Replacing $x_{v_0}$ by a Galois conjugate conjugates its point section in $\Pi_C$, and hence conjugates the evaluated homomorphism in $A$. Its class in $H^1(k_{v_0},A)$, and after inflation in $H^1(K_{v_0},A)$, stays the same. Every evaluation class at $y$ thus equals that at $x$. This proves survival of every such torsor, without a connectedness assumption on $P$.

Suppose $y\in S$. Since $u(y)=u(x)$, part 1 gives $y=\gamma x$ for one $\gamma\in\Gamma\simeq\widehat{\mathbb Z}$, with arithmetic $q$-Frobenius corresponding to $1$. For $v\ne v_0$, the component $x_v$ has orbit length $\deg(v)$ and is fixed by $\gamma$. Hence
$$\gamma\in\deg(v)\widehat{\mathbb Z}\qquad(v\ne v_0).$$
For every positive integer $n$, Chebotarev for the connected constant-field cover of degree $n$ supplies a closed point $v\ne v_0$ splitting completely, so $n\mid\deg(v)$. There are infinitely many such points: the splitting set has positive density, and a finite set has density zero [@jardenrazon2023transfer, Lemma 2.3(f), p. 495, and Theorem 2.4, p. 497]. Therefore $\gamma\in n\widehat{\mathbb Z}$ for every $n$, forcing $\gamma=0$. This contradicts $y_{v_0}\ne x_{v_0}$. Thus $y\notin S$.

Finally, geometric interpolation identifies $S$ with survival of all torsors over $C$ under finite étale $k$-group schemes. Some such torsor consequently obstructs $y$, and its group scheme cannot be constant by the preceding argument. This proves existence of an obstruction without identifying a particular torsor. $\square$

**Scope.** Constants compatibility and the genus bound on $C$ are retained throughout part 1. The bottom row forgets residue embeddings only on the full-descent locus $S$; no assertion is made that fibres of $u$ on the whole product are diagonal orbits. In fact (2) lies in the same fibre as $x$ and passes all constant-group tests while lying outside $S$. The proof does not use a Hom reconstruction theorem or any pending equal-genus rigidity claim.
