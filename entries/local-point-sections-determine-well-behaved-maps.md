---
title: Local point sections determine well-behaved fundamental-group maps
kind: theorem
summary: 'For proper curves over a finite field, with target genus at least two, constants-compatible well-behaved fundamental-group maps giving the same local point sections are globally geometrically conjugate. The proof uses the isomorphism theorem on their open images.'
tags: [curves, fundamental-groups, function-fields, finite-fields]
edges:
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: addresses, note: 'Supplies the injectivity argument missing from the proof of Creutz–Voloch Theorem 3.8; uses the checked open-image versus rational-point dichotomy.'}
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: uses, note: 'Part 3 supplies the dichotomy for well-behaved maps over the constants quotient.'}
  - {to: mochizuki-grothendieck-conjecture-proper-curves-finite-fields, label: uses, note: 'An isomorphism between the two open images comes from an isomorphism of their finite étale covering curves.'}
  - {to: chebotarev-density-for-arithmetic-schemes, label: uses, note: 'Extends local geometric conjugacy to elementwise geometric conjugacy, and detects every modulus in the constants quotient.'}
  - {to: etale-descent-conjecture-for-constant-curves, label: addresses, note: 'Proves uniqueness of the fundamental-group map interpolating a locally constant adelic point, when such a map exists.'}
---

**Setting.** Let $C,D$ be smooth, proper, geometrically integral curves over a finite field $k$, with $g(C)\ge2$. Write $\Pi_X=\pi_1(X)$, $\Delta_X=\pi_1(X_{\bar k})$, $\Gamma=G_k$, and $p_X:\Pi_X\to\Gamma$. Fix decomposition sections $t_v:G_{k(v)}\to\Pi_D$ for the closed points $v$ of $D$, as in [the descent entry](etale-descent-and-fundamental-group-maps-over-finite-fields.md). A map is *well behaved* if it sends every decomposition group into a decomposition group as an open subgroup.

**Theorem (proved here).** Suppose $\phi,\psi:\Pi_D\to\Pi_C$ are continuous, well behaved, and satisfy $p_C\phi=p_D=p_C\psi$. If, for every closed point $v$ of $D$, there is $\delta_v\in\Delta_C$ such that
$$
\psi t_v=\delta_v(\phi t_v)\delta_v^{-1},
\tag{1}
$$
then a single $\delta\in\Delta_C$ satisfies $\psi=\delta\phi\delta^{-1}$.

In particular, the locally constant adelic point attached to a well-behaved map over $\Gamma$ determines its $\Delta_C$-conjugacy class. This proves the injectivity step asserted in Creutz–Voloch's correspondence [@creutzvoloch2024, Theorem 3.8 and its proof, p. 8], with compatibility with $\Gamma$ imposed. It does not prove the geometric-point surjectivity asserted in their Proposition 3.9.

**Two separation facts.** We give proofs to keep the decomposition-group input explicit.

*Rational points have distinct section classes.* Let $X$ be a smooth proper geometrically integral curve of positive genus over a finite field $l$, and let $x,y\in X(l)$. If their point sections are geometrically conjugate, then $x=y$.

Indeed, use $x$ to define $i:X\to J_X$, $z\mapsto[z-x]$. This is injective on geometric points: a principal divisor $z-x$ with $z\ne x$ would give a degree-one map to $\mathbb P^1$, contradicting positive genus. The map $L=\mathrm{Fr}_l-1:J_X\to J_X$ is finite étale and surjective. Its differential is $-1$, so its kernel is zero-dimensional; properness and the dimension of its image then make it an étale isogeny. Its kernel is the constant group $J_X(l)$. The associated cohomology sequence gives an injection
$$
J_X(l)\longrightarrow H^1(l,J_X(l)),
$$
since $L$ is zero on $J_X(l)$. Pulling this torsor back by $i$ distinguishes $x$ and $y$ unless $i(y)=0$. Geometrically conjugate sections give the same evaluation of a finite étale torsor, so $x=y$.

*Distinct pro-points have noncommensurable decomposition groups.* For such an $X$, let $\widetilde X$ be its profinite étale universal cover. If decomposition groups $D_{\tilde x},D_{\tilde y}\subset\Pi_X$ share an open subgroup, then $\tilde x=\tilde y$.

To prove this, put $S=D_{\tilde x}\cap D_{\tilde y}$. Both decomposition groups project injectively to open subgroups of $G_l$, so openness in one implies openness in both. Let $U$ be any open normal subgroup of $\Pi_X$, corresponding to a connected finite étale cover $X_U\to X$. The image of $S\cap U$ in $G_l$ is $G_{l'}$ for some finite extension $l'/l$ containing the constants of $X_U$. The images of $\tilde x,\tilde y$ in $X_U$ are $l'$-rational, and their sections over $G_{l'}$ coincide: both are the inverse of the projection on $S\cap U$. The preceding fact, applied to $X_U$ over its constants and then to $l'$, shows that these images are equal. Every connected finite étale cover has positive genus by Riemann–Hurwitz. Varying $U$ proves equality of the pro-points. In particular a nontrivial open subgroup of a decomposition group determines its pro-point uniquely.

**Proof of the theorem.**

*1. From local agreement to equal kernels.* Consider
$$
Z=\{h\in\Pi_D:\psi(h)=a\phi(h)a^{-1}\text{ for some }a\in\Delta_C\}.
$$
It is closed: it is the projection of the closed subset of the compact space $\Pi_D\times\Delta_C$ defined by the displayed equality. Condition (1) puts every $t_v(G_{k(v)})$ in $Z$. It also puts all their conjugates in $Z$. Explicitly, the conjugator at $b t_v(u)b^{-1}$ is $\psi(b)\delta_v\phi(b)^{-1}$, whose projection to $\Gamma$ is trivial because both maps are over $\Gamma$.

Chebotarev says that these conjugates have dense union: in every finite quotient every conjugacy class occurs as a closed-point Frobenius [@jardenrazon2023transfer, Theorem 2.4, p. 497]. Thus $Z=\Pi_D$. In particular
$$
\ker\phi=\ker\psi=:N.
\tag{2}
$$
Consequently $H_\phi=\phi(\Pi_D)$ and $H_\psi=\psi(\Pi_D)$ are isomorphic by the continuous isomorphism
$$
\theta:H_\phi\xrightarrow{\sim}H_\psi,\qquad \theta(\phi(h))=\psi(h).
\tag{3}
$$
Every $a\in H_\phi$ and $\theta(a)$ are conjugate by an element of $\Delta_C$.

*2. The rational-point case.* By the [checked dichotomy](etale-descent-and-fundamental-group-maps-over-finite-fields.md), part 3, each image is either open or a rational-point decomposition group, and in the latter case the map is a point section composed with $p_D$. These alternatives cannot mix in (3): a point decomposition group is procyclic, whereas an open subgroup of $\Pi_C$ is the fundamental group of a proper curve $Y$ of genus at least two. Its geometric subgroup has a quotient $T_\ell J_Y\cong\mathbb Z_\ell^{2g(Y)}$ for $\ell\ne\operatorname{char}(k)$, so it is not procyclic. If both maps factor through rational points $x,y\in C(k)$, (1) and rational-point separation over any $k(v)$ give $x=y$. Sections of the same rational point are geometrically conjugate, proving the assertion in this case.

*3. Open images give an isomorphism of covers.* Suppose both images are open. Since $p_C(H_\phi)=p_C(H_\psi)=\Gamma$, the corresponding connected finite étale covers
$$
c_\phi:C_\phi\to C,\qquad c_\psi:C_\psi\to C
$$
are geometrically connected over $k$. They have genus at least two. Mochizuki's isomorphism theorem realizes (3) by an isomorphism of schemes $f:C_\phi\to C_\psi$ together with an isomorphism of their universal covers inducing exactly $\theta$ [@mochizuki2007cuspidal, Theorem 3.2, p. 86]. The theorem allows an isomorphism of the finite constants fields; no $k$-linearity of $f$ is presumed here.

For a closed point $z$ of $C_\phi$, choose a pro-point above it, with decomposition group $S\subset H_\phi$. Its image under $\theta$ is the decomposition group above $f(z)$. A topological generator $a$ of $S$ is geometrically conjugate to $\theta(a)$ by step 1, so $S$ and $\theta(S)$ are conjugate in $\Pi_C$. They are open subgroups of the decomposition groups associated to their images on $C$. Pro-point separation therefore gives
$$
c_\phi(z)=c_\psi(f(z)).
$$
Both maps are dominant, so they agree also on the generic point. They have the same underlying topological map.

Stix's topological-coincidence theorem now says that $c_\phi$ and $c_\psi f$ differ by a power of absolute Frobenius [@stix2002affine, Proposition 2.3, p. 2]. Both are finite étale, so both function-field embeddings have inseparable degree one. A nonzero Frobenius power would change that degree. Hence
$$
c_\phi=c_\psi f
\tag{4}
$$
as scheme morphisms, including their maps on constants.

The upper isomorphism of universal covers supplied by Mochizuki is consequently over $C$. Identify both universal covers with $\widetilde C$ using the covers $c_\phi,c_\psi$. An automorphism of $\widetilde C$ over $C$ is a deck transformation $g\in\Pi_C$. The induced map on deck groups is thus
$$
\theta(a)=gag^{-1}\quad(a\in H_\phi),\qquad \psi=g\phi g^{-1}.
\tag{5}
$$

*4. The conjugator is geometric.* Fix any pro-point $\tilde w$ of $\widetilde C$ over a closed point $w$ of $C$. Since $H_\phi$ is open,
$$
S=D_{\tilde w}\cap H_\phi
$$
is open in $D_{\tilde w}$. For a topological generator $a$ of $S$, step 1 supplies $\delta_a\in\Delta_C$ with $gag^{-1}=\delta_a a\delta_a^{-1}$. Taking closed cyclic subgroups gives
$$
gSg^{-1}=\delta_a S\delta_a^{-1}.
$$
This is open in the decomposition groups of both $g\tilde w$ and $\delta_a\tilde w$. Pro-point separation gives $g\tilde w=\delta_a\tilde w$, so $\delta_a^{-1}g\in D_{\tilde w}$. In particular
$$
p_C(g)\in p_C(D_{\tilde w})=[k(w):k]\widehat{\mathbb Z}.
\tag{6}
$$
This holds for every closed point $w$ of $C$. For each positive integer $n$, Chebotarev applied to the connected constant-field cover $C_{k_n}\to C$, with $[k_n:k]=n$, supplies a closed point splitting completely in that cover. Its degree is divisible by $n$. Thus (6) puts $p_C(g)$ in $n\widehat{\mathbb Z}$ for every $n$, whence $p_C(g)=0$. Equation (5) has the required conjugator $g\in\Delta_C$. $\square$

**Checks and scope.** The proof uses local conjugacy only to obtain geometric elementwise conjugacy and then equal kernels; it does not assume that arbitrary elementwise-conjugate maps to a finite group are conjugate. The passage to open images is where the proper hyperbolic isomorphism theorem applies. Finite étaleness in (4) removes Frobenius ambiguity, and step 4 separately removes arithmetic conjugators. Constants compatibility is essential already in step 1: without it, rational-point sections composed with distinct automorphisms of $\Gamma$ give the counterexample in the earlier audit.

Two maps giving the same locally constant adelic point satisfy (1), because the sections of each $k(v)$-point form one $\Delta_C$-conjugacy class. The separation facts also make the assigned local point unique. This entry proves uniqueness independently of an existence or full-descent argument; it supplies no surjectivity statement about $D(\bar k)\to C(\bar k)$.
