---
title: Nonzero p-adic boundary twists of the first surface pair have infinite outer conjugacy
kind: theorem
summary: 'For odd p and d = [K:Q_p] at least three, twists along (x_2,x_3) for odd d and (x_3,x_4) for even d form a closed Z_p in Out(G_K), every nonidentity element having infinitely many outer conjugates. These are the pairs of the tame-group-algebra theorem.'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: boundary-twists-exclude-finite-outer-conjugacy-of-wild-scalars, label: uses, note: 'The exact surface-pair twist, its degree-two Johnson map, and the lower central input: torsion-free factors, completed free Lie spaces and saturation of inner Johnson maps.'}
  - {to: tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups, label: uses, note: 'Part 2 supplies the conjugating automorphism for the unit 1 + (gamma - 1)^2. Parts 1 and 3 give the free surface and complementary summands of wild Frattini and the trivial centre of the tame quotient.'}
  - {to: tame-trivial-automorphisms-with-finite-outer-conjugacy-act-trivially-on-wild-frattini, label: addresses, note: 'Answers the boundary-twist question in its Inner or not remark for the first surface pair; the general infinite-order innerness question remains open.'}
---

**Setting.** Let $p$ be odd, $K/\mathbb Q_p$ finite of degree $d\ge3$, $G=G_K$, $P$ its wild inertia, $\Gamma=G/P$ and $\Lambda=\mathbb F_p[[\Gamma]]$. Use the presentation and involution $*$ of [the tame-group-algebra theorem](tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups.md). Fix the first surface pair, namely its pair $(a,b)=(x_2,x_3)$ for odd $d$ and $(x_3,x_4)$ for even $d$, and put $w=[a,b]$. Each of $a,b$ occurs in the wild relator only in this commutator, and $x_1$ is a distinct complementary generator. This form of the presentation is also stated in [@kondo2025, Theorem 1.1, p. 8].

For $t\in\mathbb Z_p$, define $T_t$ by fixing the tame generators and every $x_i$ outside this pair and setting
$$T_t(a)=w^taw^{-t},\qquad T_t(b)=w^tbw^{-t}.$$
It fixes $w$, hence preserves the relator, and $T_{-t}$ is its inverse. Also $T_tT_{t'}=T_{t+t'}$. Thus these are exact automorphisms, inducing the identity on both $\Gamma$ and $V=P/\Phi(P)$.

**Theorem (proved here).** For the fixed first surface pair, there is an automorphism $\beta$ of $G$, independent of $t$, such that for every $0\ne t\in\mathbb Z_p$ the classes
$$[\beta^jT_t\beta^{-j}]\in\operatorname{Out}(G),\qquad j=0,1,2,\ldots,$$
are pairwise distinct. Consequently $t\mapsto[T_t]$ embeds $\mathbb Z_p$ as a closed subgroup of $\operatorname{Out}(G)$, and every nonidentity element of this subgroup has infinitely many outer conjugates.

**Proof.**

*1. A unit with no group-like positive power.* Write $\pi\in\widehat{\mathbb Z}$ for the element with $p$-component $1$ and all other prime components $0$, and put $\gamma=\sigma^\pi\in\Gamma$. Its closed subgroup is pro-$p$, and its image in the unramified pro-$p$ quotient of $\Gamma$ is a topological generator. Put
$$z=\gamma-1,\qquad \lambda=1+z^2\in\Lambda^\times.$$
Indeed, $z$ is nilpotent in every finite group-algebra quotient: the image of $\gamma$ has $p$-power order, so $(\gamma-1)^{p^r}=0$ for some $r$. Hence $\sum_{i\ge0}(-z^2)^i$ converges in $\Lambda$ and is the inverse of $\lambda$. The mod-$p$ cyclotomic character $\omega:\Gamma\to\mathbb F_p^\times$ kills the pro-$p$ element $\gamma$, so $\gamma^*=\gamma^{-1}$. With $\epsilon$ denoting augmentation, this gives $\epsilon(\lambda)=\epsilon(\lambda^*)=1$.

Part 2 of the tame-group-algebra theorem gives $\beta$ whose action $B$ on $V$ is $\Lambda$-linear and fixes every generator class except
$$B\bar a=\lambda\bar a,\qquad B\bar b=(\lambda^*)^{-1}\bar b.$$
In particular it fixes $\bar x_1$. For a positive integer $n$, the action $C=B^n$ has the same form with
$$u=\lambda^n,\qquad v=(u^*)^{-1},\qquad C\bar a=u\bar a,\qquad C\bar b=v\bar b,\qquad \epsilon(v)=1.$$
Only one lift $\beta$ is chosen; no homomorphism from units to $\operatorname{Aut}(G)$ is needed.

*2. Cancel the twist parameter integrally.* Let $P_j$ be the ordinary closed lower central series of $P$, $H=P/P_2$ and $\mathcal L_j=P_j/P_{j+1}$. The lower central input of [the boundary-twist theorem](boundary-twists-exclude-finite-outer-conjugacy-of-wild-scalars.md) gives torsion-free $\mathbb Z_p$-modules $\mathcal L_j$, the completed free Lie description modulo $p$, and injectivity modulo $p$ of the inner bracket maps in degrees one and two. In particular the map $h\mapsto\operatorname{ad}(h)$ from $\mathcal L_2$ to $\operatorname{Hom}_{\mathrm{cont}}(H,\mathcal L_3)$ has saturated image. Its finite-rank counterpart is proved in [@tsujimura2026freeaut, proof of Proposition 1.2(ii)–(iii), p. 4]; the linked entry supplies the arbitrary-rank extension used here.

The same entry defines the additive, conjugation-equivariant Johnson map $J$ for automorphisms acting trivially on $P/P_3$. Put $D=J(T_1):H\to\mathcal L_3$. Since $w\in P_2$, all $T_t$ lie in its domain, and
$$J(T_t)=tD.$$
This follows first for integer $t$ by additivity and then for $t\in\mathbb Z_p$ by continuity, or directly by computing $[w^t,a]$ and $[w^t,b]$ modulo $P_4$.

Suppose that for some $n>0$ and $t\ne0$,
$$\beta^nT_t\beta^{-n}T_{-t}=c_g,\qquad g\in G.$$
Both sides act trivially on $\Gamma$, whose centre is trivial, so $g\in P$. They also act trivially on $P/P_3$, so injectivity of $H\to\operatorname{Hom}(H,\mathcal L_2)$ gives $g\in P_2$. Let $C_H,C_3$ be the actions of $\beta^n$ on $H,\mathcal L_3$. Equivariance gives
$$t\big(C_3DC_H^{-1}-D\big)=\operatorname{ad}(h),\qquad h=gP_3\in\mathcal L_2.$$
Write $t=p^kq$ with $q\in\mathbb Z_p^\times$. If $k>0$, reduction modulo $p$ and injectivity of the inner bracket map give $h\in p\mathcal L_2$. Divide by $p$ using torsion-freeness and repeat $k$ times. Dividing by $q$ then gives
$$C_3DC_H^{-1}-D=\operatorname{ad}(h')\quad\text{for some }h'\in\mathcal L_2.\tag{1}$$
This cancellation takes place before reducing modulo $p$, including when $t\in p\mathbb Z_p$.

*3. A complementary generator removes inner derivations.* Let $\delta$ be the reduction of $D$ on $V=H/pH$. It is $\Gamma$-equivariant, vanishes at $\bar x_1$, and satisfies
$$\delta(\bar a)=[[\bar a,\bar b],\bar a].$$
Reduce (1) modulo $p$ and evaluate it at $\bar x_1$. Since $C^{-1}\bar x_1=\bar x_1$, its left side is zero, so $[\bar h',\bar x_1]=0$. A degree-two free Lie element commuting with a nonzero degree-one vector vanishes: in the free associative algebra its tensor must be a multiple of the square of that vector, while a degree-two Lie tensor has zero square coefficient. Finite-dimensional quotients preserving that vector prove the same assertion in the completed spaces, as in step 3 of the boundary-twist proof. Thus $\bar h'=0$ and
$$C_3\delta=\delta C.\tag{2}$$

Use the direct summands $\Lambda\bar a$ and $\Lambda\bar b$ of $V$ to compare the tensor pattern $aab$ in (2) at $\bar a$. The coefficient of that pattern in $[[\bar a,\bar b],\bar a]$ is $-1$. On the left of (2) its coefficient is therefore $-u\otimes u\otimes v$. On the right, $\Gamma$-equivariance of $\delta$ gives $-\Delta_3(u)$, where $\Delta_3(\rho)=\rho\otimes\rho\otimes\rho$. These computations extend from finite sums to the completed group algebras by continuity. Hence
$$u\otimes u\otimes v=\Delta_3(u).$$
Applying augmentation in the third factor and using $\epsilon(v)=1$ gives
$$u\otimes u=\Delta_2(u).\tag{3}$$

*4. A coefficient contradicts (3).* Project $\Gamma$ to its unramified pro-$p$ quotient $\mathbb Z_p$. Identify its group algebra with $\mathbb F_p[[X]]$ by sending the image of $\gamma$ to $1+X$; this follows by taking the inverse limit of $\mathbb F_p[X]/(X^{p^r})$ for the cyclic quotients of order $p^r$. The image of $u$ is
$$f(X)=(1+X^2)^n.$$
The diagonal sends $X$ to $X+Y+XY$, so (3) would give
$$f(X)f(Y)=f(X+Y+XY).\tag{4}$$
Write $n=p^rm$ with $p\nmid m$ and set $N=p^r$. Then
$$f(X)=(1+X^{2N})^m=1+\bar m X^{2N}+\text{terms of degree at least }4N.$$
The coefficient of $X^NY^N$ on the left of (4) is zero. On the right it is $2\bar m$: only $\bar m(X+Y+XY)^{2N}$ contributes in total degree $2N$, and
$$ (X+Y+XY)^{2N}=(X^N+Y^N+X^NY^N)^2.$$
Since $p$ is odd and $\bar m\ne0$, this is a contradiction.

Thus no positive power of $[\beta]$ centralizes $[T_t]$ for $t\ne0$. Equality of two of the displayed conjugates would give exactly such a power, proving their distinctness. It also follows that $[T_t]\ne1$ for $t\ne0$. The homomorphism $t\mapsto[T_t]$ is continuous, since its values on the finite generating set are continuous in $t$. Its injective image is closed, by compactness of $\mathbb Z_p$ and the Hausdorff profinite topology on $\operatorname{Out}(G)$. $\square$

**Scope.** This excludes every nonidentity element of the subgroup $\{[T_t]:t\in\mathbb Z_p\}$ for the first surface pair, $(x_2,x_3)$ for odd $d$ and $(x_3,x_4)$ for even $d$, as a source of noninner automorphisms with finite outer conjugacy. Twists along the other surface pairs, when $d\ge5$, are not covered by this theorem: the conjugating automorphism supplied by part 2 of the tame-group-algebra theorem acts on this fixed pair. [A later theorem](boundary-twists-of-every-surface-pair-have-infinite-outer-conjugacy.md) extends the result to them and to their products, conjugating this automorphism by exact swaps of adjacent pairs. Whether every tame-trivial automorphism with finite outer conjugacy is inner remains a question in [research issue 535](https://github.com/AnabLab/kb/issues/535). No novelty is claimed. The proof applies already with one surface pair, including $d=3$ and $p=3$. It uses both the coefficient $-1$ of the tensor pattern and the coefficient $2$ in the final calculation; the latter does not extend to $p=2$. Degree at most two is not covered.
