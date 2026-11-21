---
title: Finite torsion can hide multiplicative reduction
kind: theorem
summary: 'For a Tate curve with parameter of valuation d, inertia on n-torsion has order n/gcd(n,d). Arbitrarily deep finite torsion can therefore hide multiplicative reduction; even the full finite Galois module leaves the Neron component group unbounded.'
tags: [elliptic-curves, local-fields, ramification, reconstruction-algorithms]
edges:
  - {to: neron-ogg-shafarevich-criterion, label: uses, note: 'Good reduction makes every prime-to-p torsion module unramified, as used in the comparison below.'}
  - {to: finite-torsion-recovers-semistable-inertia, label: analogous-to, note: 'Finite torsion recovers the obstruction to semistability, but cannot uniformly detect good reduction or the Neron component group.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: analogous-to, note: 'Both use Tate uniformization; here the valuation controls finite prime-to-p inertia rather than p-adic periods.'}
---

**Setting and checked inputs.** Let $K/\mathbb Q_p$ be finite, let $v_K(K^\times)=\mathbb Z$, and let $\pi$ be a uniformizer. For $q\in K^\times$ with $d=v_K(q)>0$, Tate uniformization gives a $G_K$-equivariant group isomorphism
$$E_q(\bar K)\simeq\bar K^\times/q^{\mathbb Z}$$
[@kedlaya2004tate, Theorem 1, p. 3]. The curve has split multiplicative reduction [@kedlaya2004tate, Theorem 2(b), p. 4]. Its group of rational Néron components is
$$E_q(K)/E_q^0(K)\simeq\mathbb Z/d\mathbb Z,$$
where $E_q^0(K)$ consists of points reducing to the identity component [@cremona2008component, §2.1, theorem and proof, p. 2]. Below, component groups mean these groups of rational components. They differ from the finite inertia quotient that obstructs semistability.

**Theorem (deduced here).** Let $n\ge2$ be prime to $p$, and write $\rho_n$ for the action on $E_q[n]$.

1. The inertia image is cyclic and
   $$|\rho_n(I_K)|=\frac{n}{\gcd(n,d)},\qquad |E_q[n]^{I_K}|=n\gcd(n,d).$$
   In particular, $E_q[n]$ is unramified exactly when $n\mid d$. For a prime $\ell\ne p$, the first ramified level of the tower $E_q[\ell^m]$, $m\ge1$, is $m=v_\ell(d)+1$.
2. For fixed $K,n$ and every integer $r\ge1$, put $C_r=E_{\pi^{nr}}$. Then
   $$C_r[n]\simeq\mu_n\oplus\mathbb Z/n\mathbb Z$$
   as $G_K$-modules, with trivial action on the second summand. Their Néron component groups have orders $nr$, which are unbounded although this full finite Galois module is fixed.
3. Given an elliptic curve $B/K$ with good reduction, there is a finite unramified extension $F/K$ such that
   $$B_F[n]\simeq(C_r)_F[n]\simeq(\mathbb Z/n\mathbb Z)^2$$
   as trivial $G_F$-modules, for every $r\ge1$. The curves on the two sides have toric ranks $0$ and $1$, respectively.

**Proof.** Write $q=\pi^d u$ with $u\in\mathcal O_K^\times$, and put $K^{\mathrm{nr}}=\bar K^{I_K}$. Every unit of $K^{\mathrm{nr}}$ has an $n$th root there: its residue has an $n$th root over the algebraic closure of the finite residue field, and Hensel's lemma lifts that root since $n$ is prime to $p$. The same argument gives $\mu_n\subset K^{\mathrm{nr}}$. Fix $w\in K^{\mathrm{nr}}$ with $w^n=u$, a primitive $\zeta\in\mu_n$, and $t\in\bar K$ with $t^n=\pi$.

The extension $K^{\mathrm{nr}}(t)/K^{\mathrm{nr}}$ has degree $n$: the valuation of $t$ is $1/n$, while the value group of $K^{\mathrm{nr}}$ is $\mathbb Z$, so the ramification index is at least $n$ and the defining polynomial bounds the degree by $n$. Since all $\zeta^a t$ lie in this extension, its Galois group is cyclic and every substitution $t\mapsto\zeta^a t$ occurs.

Under uniformization, the classes $e=[\zeta]$ and $f=[w t^d]$ form a basis of $E_q[n]$ over $\mathbb Z/n\mathbb Z$. Indeed, an element whose $n$th power lies in $q^{\mathbb Z}$ is a product of these classes. A relation $\zeta^a(wt^d)^b\in q^{\mathbb Z}$ first forces $n\mid b$ by valuation, and then $n\mid a$.

Inertia fixes $w,\zeta$, and its matrices in this basis are exactly
$$\left\{\begin{pmatrix}1&da\\0&1\end{pmatrix}:a\in\mathbb Z/n\mathbb Z\right\}.$$
Thus the image is the additive subgroup $d(\mathbb Z/n\mathbb Z)$, of order $n/\gcd(n,d)$. A vector $ae+bf$ is fixed exactly when $db=0$, giving $n\gcd(n,d)$ fixed vectors. Taking $n=\ell^m$ proves the first-ramified-level assertion.

For $q=\pi^{nr}$, choose $q^{1/n}=\pi^r\in K$. The map
$$\mu_n\oplus\mathbb Z/n\mathbb Z\longrightarrow C_r[n],\qquad(\eta,b)\longmapsto[\eta\pi^{rb}]$$
is a well-defined $G_K$-equivariant isomorphism by the same basis argument. The checked component-group formula gives order $nr$, proving part 2.

Finally, good reduction makes $B[n]$ unramified by the [Néron–Ogg–Shafarevich criterion](neron-ogg-shafarevich-criterion.md). Its finite Galois action is therefore killed by a finite unramified extension. Enlarge that extension unramifiedly to contain $\mu_n$. Part 2 now gives the trivial module for every $(C_r)_F[n]$ as well. Good reduction persists under base change, and the split multiplicative Tate curves still have toric rank $1$, proving part 3. $\square$

**Scope.** For fixed $K$ and a good-reduction elliptic curve $B/K$, any finite collection of its prime-to-$p$ inertia modules also occurs for a split multiplicative Tate curve: choose $n$ divisible by all their levels and use $C_1$. For comparison of full Galois modules with a good-reduction curve, part 3 allows $F$ to depend on $n$; it asserts no such indistinguishability at every level over one fixed field. In contrast, the first ramified level in part 1 is finite for each fixed Tate curve. All the Tate curves above are semistable, so their finite semistability obstruction is trivial, consistently with [its reconstruction from finite torsion](finite-torsion-recovers-semistable-inertia.md).
