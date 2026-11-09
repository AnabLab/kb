---
title: Genus bounds and equality for open fundamental-group maps
kind: theorem
summary: 'An open constants-compatible fundamental-group map of proper finite-field curves has image index e with e(g(C)-1) <= g(D)-1. At equality it is an isomorphism onto its image, realized by a scheme isomorphism to the image cover. This gives the equal-genus existence clause of constant-curve descent.'
tags: [curves, fundamental-groups, function-fields, finite-fields]
edges:
  - {to: geometric-fundamental-groups-of-curves, label: uses, note: 'The geometric prime-to-p group of a proper genus-g curve has the surface presentation, and its full geometric group is finitely generated.'}
  - {to: prime-to-p-anabelian-curves-over-finite-fields, label: uses, note: 'An isomorphism of the geometrically prime-to-p arithmetic groups identifies the source with the finite étale image cover as schemes.'}
  - {to: mochizuki-grothendieck-conjecture-proper-curves-finite-fields, label: uses, note: 'After Hopficity upgrades the given map to a full isomorphism, the full theorem realizes that particular map on universal covers.'}
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: uses, note: 'The open-image versus rational-point dichotomy gives the descent consequence.'}
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: addresses, note: 'Checks the geometric-point surjectivity of Creutz–Voloch Proposition 3.9 when the genus bound is an equality.'}
  - {to: etale-descent-conjecture-for-constant-curves, label: addresses, note: 'Proves its existence clause unconditionally when the two genera are equal and at least two; does not prove equality of the entire descent locus with the closure of morphisms.'}
---

**Setting.** Let $C,D$ be smooth, proper, geometrically integral curves over a finite field $k$ of characteristic $p$, with $g(C)\ge2$. Write $\Pi_X=\pi_1(X)$, $\Delta_X=\pi_1(X_{\bar k})$, $\Gamma=G_k$, and $p_X:\Pi_X\to\Gamma$. Let $\phi:\Pi_D\to\Pi_C$ be continuous with open image $H$, and assume $p_C\phi=p_D$. Put $e=[\Pi_C:H]$, and let $c:C_H\to C$ be the connected finite étale cover corresponding to $H$.

**Theorem (proved here).**

1. The cover $C_H$ is geometrically integral over $k$, and
   $$e(g(C)-1)=g(C_H)-1\le g(D)-1.\tag{1}$$
2. If equality holds in (1), then $\phi:\Pi_D\to H$ is an isomorphism. It arises from a scheme isomorphism $D\xrightarrow{\sim}C_H$ and an isomorphism of their profinite étale universal covers. The scheme isomorphism may act nontrivially on $k$. There is a nonconstant $k$-morphism $D\to C$, obtained by composing a power of absolute Frobenius, that scheme isomorphism, and $c$.
3. In this equality case, $\phi$ is well behaved, and the associated $\Gamma$-equivariant map $D(\bar k)\to C(\bar k)$ is surjective. This checks the surjectivity assertion of Creutz–Voloch in this case [@creutzvoloch2024, Construction 3.5, p. 7, and Proposition 3.9, p. 8].

Here *well behaved* means that every decomposition group maps to an open subgroup of a decomposition group. No such hypothesis is needed in parts 1 and 2.

**Proof.** Since $p_C(H)=\Gamma$, the cover $C_H$ is geometrically connected. Indeed, $\Delta_C$ acts transitively on the coset set $\Pi_C/H$: every element of $\Pi_C$ is a product of an element of $\Delta_C$ and one of $H$. Smoothness makes this geometric connectedness geometric integrality. Constants compatibility gives
$$\phi(\Delta_D)=H\cap\Delta_C=\Delta_{C_H}.\tag{2}$$
For the nontrivial inclusion, lift an element of $H\cap\Delta_C$ through $\phi$; its lift projects to $1\in\Gamma$. Thus (2) is a surjection of geometric groups. Their maximal abelian pro-$\ell$ quotients, for $\ell\ne p$, are free $\mathbb Z_\ell$-modules of ranks $2g(D)$ and $2g(C_H)$ by the [surface presentation](geometric-fundamental-groups-of-curves.md) [@grothendieck1971sga1, Exp. XIII, Corollary 2.12, p. 290]. It follows that $g(C_H)\le g(D)$. The unramified Riemann–Hurwitz formula gives $g(C_H)-1=e(g(C)-1)$, proving part 1.

Suppose now $g(D)=g(C_H)=g$. For a profinite group $A$, write $A^{p'}$ for its maximal pro-prime-to-$p$ quotient. The surface presentation identifies both $\Delta_D^{p'}$ and $\Delta_{C_H}^{p'}$ with
$$S_g^{p'}=\left\langle a_1,b_1,\ldots,a_g,b_g\ \middle|\ \prod_{i=1}^g[a_i,b_i]=1\right\rangle_{p'}.$$
They are therefore isomorphic finitely generated profinite groups, and the surjection induced by (2) is an isomorphism by Hopficity.

For completeness, a finitely generated profinite group $A$ is Hopfian as follows. There are only finitely many open normal subgroups of each index $n$, since maps to a fixed finite group are determined by finitely many generators. For a surjective endomorphism $u$ of $A$, $N\mapsto u^{-1}(N)$ injects, hence permutes, the open normal subgroups of index $n$. Every open normal $N$ is consequently the preimage of another such subgroup, and contains $\ker u$. Intersecting all $N$ gives $\ker u=1$. This also proves the assertion about a surjection between two isomorphic finitely generated profinite groups; compare [@saiditamagawa2017, Lemma 3.2 and proof, p. 6].

Put $N_X=\ker(\Delta_X\to\Delta_X^{p'})$ for $X=D,C_H$. These are characteristic in $\Delta_X$ and normal in $\Pi_X$. The map $\phi$ sends $N_D$ into $N_{C_H}$ by the universal property of the maximal prime-to-$p$ quotient. It induces a map
$$\Pi_D/N_D\longrightarrow\Pi_{C_H}/N_{C_H}.$$
This is an isomorphism: it is an isomorphism on the geometric kernels, as just proved, and the identity on their quotient $\Gamma$. These are the *geometrically* pro-prime-to-$p$ arithmetic groups; the entire $\Gamma$ is retained [@saiditamagawa2009, §0, p. 137]. Saïdi–Tamagawa's isomorphism theorem gives a scheme isomorphism $D\simeq C_H$ [@saiditamagawa2009, Theorem 1, p. 137]. In particular their full arithmetic fundamental groups $\Pi_D$ and $H$ are isomorphic.

The group $\Pi_D$ is finitely generated: $\Delta_D$ is generated by at most $2g$ elements by SGA 1, Corollary 2.12 cited above, and adjoining a lift of a topological generator of $\Gamma\simeq\widehat{\mathbb Z}$ generates $\Pi_D$. Since $\phi:\Pi_D\to H$ is a surjection between these now known isomorphic groups, Hopficity shows that this *given full map* is an isomorphism. Mochizuki's full isomorphism theorem realizes it by a scheme isomorphism $f:D\to C_H$ and a $\phi$-equivariant isomorphism of universal covers [@mochizuki2007cuspidal, Theorem 3.2, p. 86]. This second Hopficity step is needed: equality of the prime-to-$p$ quotients alone does not identify the full groups or the original map.

Write $k=\mathbb F_{p^a}$. On global constants, $f^*:k\to k$ is $t\mapsto t^{p^r}$ for some $0\le r<a$. Choose $s\ge0$ with $r+s\equiv0\pmod a$. If $F_D$ is absolute $p$-Frobenius, then
$$c\circ f\circ F_D^s:D\longrightarrow C$$
is a $k$-morphism: its pullback on constants is $t\mapsto t^{p^{r+s}}=t$. It is nonconstant because each factor is finite and surjective. This proves part 2 without presuming that $f$ was $k$-linear.

For part 3, the equivariant isomorphism of universal covers sends decomposition groups of $D$ onto those of $C_H$. Under $H\subset\Pi_C$, each is an intersection of $H$ with a target decomposition group, hence open in that group. Thus $\phi$ is well behaved. On pro-points, quotient the universal-cover isomorphism by $\Delta_D$ and $\Delta_{C_H}$, which correspond by (2). This gives a bijection $D(\bar k)\to C_H(\bar k)$; the identifications with geometric points use the fixed algebraic closures of constants. It is $\Gamma$-equivariant because $\phi$ is over $\Gamma$. Composing with the surjection $C_H(\bar k)\to C(\bar k)$ gives the map of Construction 3.5, so that map is surjective. $\square$

**Equal-genus descent consequence (proved here).** If $g(D)=g(C)\ge2$ and $K=k(D)$, then
$$C(\mathbb A_{K,k})^{\mathrm{\acute et}}\ne C(k)
\quad\Longleftrightarrow\quad
\text{there is a nonconstant }k\text{-morphism }D\to C.\tag{3}$$
Indeed, a nonconstant locally constant adelic point surviving full étale descent survives all torsors defined over $k$. Part 4 of the [checked descent theorem](etale-descent-and-fundamental-group-maps-over-finite-fields.md) supplies an open well-behaved map over $\Gamma$. Equation (1) forces $e=1$ and equality, so part 2 supplies the required morphism. Conversely, a nonconstant morphism gives a $K$-rational point; its reduction survives étale descent and is nonconstant. The latter follows because a nonconstant morphism of proper curves is surjective on geometric points. Reduction preserves survival as recorded in [the descent conjecture](etale-descent-conjecture-for-constant-curves.md) [@creutzvoloch2024, §1.1, p. 3].

The paper proves (3) assuming its Conjecture 1.4 on Hilbert-class-field towers [@creutzvoloch2024, Theorem 1.5, p. 4]. The proof here instead combines the checked open-image argument with the prime-to-$p$ isomorphism theorem. No novelty is claimed. Equation (3) is only the existence clause of the general descent conjecture. Neither equality of its entire descent locus with the closure of morphisms nor geometric-point surjectivity when the genus inequality is strict is proved here.
