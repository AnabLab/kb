---
title: Finite-character kernels of open curve-group maps
kind: theorem
summary: 'For an open constants-compatible map of proper finite-field curve groups, a nontrivial kernel has infinitely many mod-ell characters for every ell different from p. A finite character space forces an isomorphism onto the image and geometric-point surjectivity.'
tags: [curves, fundamental-groups, finite-fields, function-fields]
edges:
  - {to: geometric-fundamental-groups-of-curves, label: uses, note: 'The geometric mod-ell character rank is twice the genus; the geometric abelianization supplies cyclic covers of unbounded ell-power degree.'}
  - {to: genus-bound-and-equality-for-open-fundamental-group-maps, label: uses, note: 'Equality of the source and image-cover genera makes the original full arithmetic map an isomorphism onto its image and gives point-surjectivity.'}
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: addresses, note: 'Checks geometric-point surjectivity in Creutz–Voloch Proposition 3.9 when the kernel has a finite-dimensional mod-ell character space for some ell different from p.'}
  - {to: properness-and-point-surjectivity-of-fundamental-group-maps, label: addresses, note: 'Any failure of point-surjectivity in its proper-source setting must have a kernel of infinite mod-ell character rank for every ell different from p.'}
---

**Setting.** Let $C,D$ be smooth, proper, geometrically integral curves over a finite field $k$ of characteristic $p$, with $g(C)\ge2$. Write $\Pi_X=\pi_1(X)$, $\Delta_X=\pi_1(X_{\bar k})$, and $p_X:\Pi_X\to\Gamma=G_k$. Let $\phi:\Pi_D\to\Pi_C$ be continuous with open image $H$ and satisfy $p_C\phi=p_D$. Let $Y\to C$ be the connected finite étale cover corresponding to $H$, and put
$$
e=[\Pi_C:H],\qquad N=\ker\phi,\qquad
\delta=g(D)-g(Y)=g(D)-1-e(g(C)-1).
$$
For a profinite group $A$ and a prime $\ell$, write
$$d_\ell(A)=\dim_{\mathbb F_\ell}\operatorname{Hom}_{\mathrm{cont}}(A,\mathbb F_\ell),$$
allowing infinite dimension. The coefficient group has trivial action.

**Theorem (proved here).** No well-behavedness assumption on $\phi$ is needed.

1. The cover $Y$ is geometrically integral, $N\subseteq\Delta_D$, and $\phi$ restricts to a surjection $q:\Delta_D\twoheadrightarrow\Delta_Y$ with kernel $N$. For every open subgroup $V\subseteq\Delta_Y$ of index $m$, set $A_V=q^{-1}(V)$. For every $\ell\ne p$,
   $$
   \dim_{\mathbb F_\ell}\operatorname{im}\left(
   \operatorname{Hom}_{\mathrm{cont}}(A_V,\mathbb F_\ell)
   \xrightarrow{\mathrm{res}}\operatorname{Hom}_{\mathrm{cont}}(N,\mathbb F_\ell)
   \right)=2m\delta.\tag{1}
   $$
   In particular $\delta\ge0$.
2. The following are equivalent: $N=1$; $\delta=0$; and $d_\ell(N)<\infty$ for at least one prime $\ell\ne p$. In these cases $\phi:\Pi_D\to H$ is an isomorphism, is well behaved as a map to $\Pi_C$, and its associated map $D(\bar k)\to C(\bar k)$ is surjective.
3. If $N\ne1$, then $d_\ell(N)$ is infinite for every $\ell\ne p$. Thus $N$ is neither topologically finitely generated nor pro-$r$ for any single prime $r$.

**Proof.** Constants compatibility gives $p_C(H)=\Gamma$. Hence the cover $Y$ is geometrically connected: $\Delta_C$ acts transitively on $\Pi_C/H$. Smoothness makes it geometrically integral. Also $N\subseteq\Delta_D$ and
$$\phi(\Delta_D)=H\cap\Delta_C=\Delta_Y.$$
Indeed, any preimage of an element of $H\cap\Delta_C$ has trivial image in $\Gamma$. These assertions also appear in the [genus-bound theorem](genus-bound-and-equality-for-open-fundamental-group-maps.md). Unramified Riemann–Hurwitz gives $g(Y)-1=e(g(C)-1)$, so $g(Y)\ge2$ [@stacks2026, Section 53.12, tag 0C1B, Riemann–Hurwitz formula].

Fix $V$ as in part 1. The groups $A_V$ and $V$ correspond to connected degree-$m$ finite étale covers $D_V\to D_{\bar k}$ and $Y_V\to Y_{\bar k}$. They need not be defined over $k$. Their genera satisfy
$$g(D_V)-1=m(g(D)-1),\qquad g(Y_V)-1=m(g(Y)-1)$$
by the same unramified formula. The [geometric surface presentation](geometric-fundamental-groups-of-curves.md) gives
$$d_\ell(A_V)=2g(D_V),\qquad d_\ell(V)=2g(Y_V)$$
for $\ell\ne p$: abelianizing its prime-to-$p$ presentation gives $\mathbb Z_\ell^{2g}$ as maximal abelian pro-$\ell$ quotient [@grothendieck1971sga1, Exp. XIII, Corollary 2.12, p. 290].

A character of $A_V$ restricts to zero on $N$ exactly when it factors through $A_V/N=V$. The factor is continuous because a continuous surjection of profinite groups is a quotient map. Thus the kernel of restriction is precisely the inflated copy of $\operatorname{Hom}_{\mathrm{cont}}(V,\mathbb F_\ell)$. Subtracting the two finite dimensions gives
$$
\dim\operatorname{im}(\mathrm{res})
=2g(D_V)-2g(Y_V)=2m\delta,
$$
which proves (1). Taking $V=\Delta_Y$ shows $\delta\ge0$.

For each fixed $\ell\ne p$, the geometric abelianization of $\Delta_Y$ has a quotient $\mathbb Z_\ell$, again by the cited presentation. The kernels of the resulting surjections to $\mathbb Z/\ell^a$ give open subgroups $V_a$ of index $\ell^a$ for all $a\ge1$. Equation (1) therefore implies
$$d_\ell(N)\ge2\ell^a\delta\qquad(a\ge1).\tag{2}$$
If $d_\ell(N)$ is finite for even one such $\ell$, then $\delta=0$. Conversely, if $\delta=0$, the equality case of the [genus-bound theorem](genus-bound-and-equality-for-open-fundamental-group-maps.md), parts 2 and 3, applies to the original full arithmetic map $\phi$. It makes $\phi:\Pi_D\to H$ an isomorphism and proves well-behavedness and geometric-point surjectivity. In particular $N=1$, which has $d_\ell(N)=0$ for every $\ell$. This proves part 2. The equality theorem is essential here; equality of character ranks alone would not establish injectivity of $\phi$.

If $N\ne1$, part 2 and $\delta\ge0$ give $\delta>0$. Inequality (2) then proves the infinite dimensions in part 3. A group with $t$ topological generators has at most $t$ independent characters to any $\mathbb F_\ell$, so $N$ cannot be finitely generated. If $N$ were pro-$r$, choose a prime $\ell$ distinct from both $p$ and $r$. Every character $N\to\mathbb F_\ell$ would have image both an $r$-group and an $\ell$-group, hence would be zero, a contradiction. $\square$

**Scope.** In particular a topologically finitely generated kernel, or a pro-$p$ kernel, forces point-surjectivity. This checks that case of Creutz–Voloch's assertion [@creutzvoloch2024, Proposition 3.9, p. 8]. Any failure in the [remaining proper-source problem](properness-and-point-surjectivity-of-fundamental-group-maps.md) must instead have infinitely many kernel characters at every prime different from $p$. The proof supplies no finite-dimensionality bound for a general well-behaved map, so the general surjectivity check remains open. Identity maps and maps identifying the source group with a finite étale image-cover group have $\delta=0$ and zero restriction images, as (1) requires. All character spaces used for the growth argument belong to geometric groups, without taking Frobenius invariants; no analogous growth is asserted for arithmetic character groups or for $\ell=p$.
