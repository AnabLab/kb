---
title: Uniform bounds on finite flat morphism extension
kind: theorem
summary: 'For ramification index e, multiplying a generic finite flat group-scheme morphism by p^s makes it integral, with s=floor(log_p(pe/(p-1))). Maps between truncated p-divisible groups extend after losing s levels. Cyclotomic fields make both bounds sharp, including at p=2.'
tags: [local-fields, group-schemes, galois-representations, reconstruction]
edges:
  - {to: raynaud-full-faithfulness-for-finite-flat-group-schemes, label: generalizes, note: 'The uniform exponent is zero when e < p-1, recovering generic-fibre full faithfulness; positive exponents allow arbitrary ramification.'}
  - {to: tate-full-faithfulness-for-p-divisible-groups, label: analogous-to, note: 'The finite-level extension theorem below yields Tate full faithfulness over local integer rings by passage to compatible truncations.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, $R=\mathcal O_K$, $e=v_K(p)$ for the normalized valuation, and
$$s=\left\lfloor\log_p\left(\frac{pe}{p-1}\right)\right\rfloor.$$
All group schemes below are commutative. A truncated Barsotti–Tate group of level $n$ is a truncated $p$-divisible group, such as $D[p^n]$ for a $p$-divisible group $D/R$.

**Bounded fullness (Bondarko).** For finite flat $p$-primary $R$-group schemes $G,H$, the injective restriction map
$$\operatorname{Hom}_R(G,H)\longrightarrow
\operatorname{Hom}_{G_K}\bigl(G(\bar K),H(\bar K)\bigr)$$
has cokernel killed by $p^s$. Thus every generic-fibre morphism $h:G_K\to H_K$ has a unique integral extension after multiplication by $p^s$ [@bondarko2005finite, notation, p. 2; Theorem 1.1, p. 3]. Here subscripts $K$ denote generic fibres. The bound is independent of height and torsion exponent, and includes $p=2$.

**Losing a bounded number of levels.** If $G,H$ are truncated Barsotti–Tate groups of level $n>s$, every $h:G_K\to H_K$ restricts to a uniquely extending morphism
$$h[p^{n-s}]:G_K[p^{n-s}]\longrightarrow H_K[p^{n-s}],
\qquad
\widetilde h:G[p^{n-s}]\longrightarrow H[p^{n-s}].$$
Consequently a generic-fibre isomorphism at level $n$ determines an integral isomorphism at level $n-s$. Vasiu–Zink state the extension result with a uniform constant and prove it from bounded fullness [@vasiuzink2012boundedness, Corollary 3, p. 3; §5.1, proof of Corollary 3, p. 21]. The following argument makes Bondarko's displayed value of $s$ explicit.

*Proof.* Extend $p^s h$ to $u:G\to H$. Its restriction to the finite flat subgroup $G[p^s]$ is zero: this holds generically, and morphisms from a flat scheme to an affine scheme are determined on the generic fibre. Likewise $[p^{n-s}]u=0$. Hence $u$ descends through the fppf quotient and factors through the indicated target:
$$G/G[p^s]\longrightarrow H[p^{n-s}].$$
Multiplication by $p^s$ identifies $G/G[p^s]$ with $G[p^{n-s}]$. Under this identification the generic map is $h[p^{n-s}]$, since $p^s h=h\circ[p^s]$. Flatness gives uniqueness. For an isomorphism $h$, apply the same argument to $h^{-1}$; the composites are identities because they are identities generically. $\square$

In particular, for $p$-divisible groups $D,E/R$, a generic morphism extends on $D[p^m]$ by applying this result at level $m+s$. The extensions for different $m$ agree on overlaps by uniqueness and therefore assemble to $D\to E$. This recovers the local case of [Tate full faithfulness](tate-full-faithfulness-for-p-divisible-groups.md).

**Cyclotomic sharpness (proved here).** For every prime $p$ and $r\ge1$, take
$$K_r=\mathbb Q_p(\zeta_{p^r}),\qquad
C_r=(\mathbb Z/p^r\mathbb Z)_{\mathcal O_{K_r}},\qquad
M_r=\mu_{p^r,\mathcal O_{K_r}}.$$
Then $e=p^{r-1}(p-1)$ and $s=r$. The polynomial $\Phi_{p^r}(1+X)$ is Eisenstein: its reduction is $X^{p^{r-1}(p-1)}$ and its constant term is $p$, proving the ramification assertion.

Both generic fibres are constant cyclic groups of order $p^r$, so their generic Hom group has exponent $p^r$. But
$$\operatorname{Hom}_{\mathcal O_{K_r}}(M_r,C_r)=0.$$
Indeed, $M_r$ has connected special fibre, with coordinate ring $k[T]/((T-1)^{p^r})$, and is itself connected. To see the latter, an idempotent of its finite coordinate algebra reduces to $0$ or $1$; Nakayama's lemma applied to the corresponding summand or its complement forces the original idempotent to be $0$ or $1$. A map from this connected scheme to the constant scheme $C_r$ lands in one component, and a group homomorphism must land in the identity component. Thus the Hom cokernel has exponent exactly $p^r$, making the fullness bound sharp at these ramification indices.

The generic isomorphism $M_{r,K_r}\cong C_{r,K_r}$ cannot extend on any nonzero lower truncation: the same Hom-vanishing argument applies to $\mu_{p^j}\to(\mathbb Z/p^j\mathbb Z)_{\mathcal O_{K_r}}$ for every $1\le j\le r$. Since $M_r$ and $C_r$ are level-$r$ truncated Barsotti–Tate groups, no loss smaller than $r$ works uniformly over $K_r$. This includes $K_1=\mathbb Q_2$ when $p=2$.

**Scope.** The result controls morphisms between models already known to exist. It neither supplies a finite flat model for an arbitrary Galois module nor makes the original level-$n$ models unique when $s>0$.
