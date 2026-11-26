---
title: An unbounded Galois cost for semistable reduction
kind: theorem
summary: 'Over one fixed p-adic field, potentially good abelian varieties can require arbitrarily larger Galois than arbitrary semistabilizing degrees. Weil restrictions along radical extensions give exact minima q^r-1 and r(q^r-1), where q is the residue-field size.'
tags: [abelian-varieties, local-fields, galois-groups, ramification]
edges:
  - {to: minimal-galois-semistabilizing-degree, label: uses, note: 'For cyclic finite monodromy, the Galois minimum is its order times the order of the Frobenius action.'}
  - {to: finite-torsion-recovers-semistable-inertia, label: uses, note: 'Identifies the finite monodromy obstruction and the minimum arbitrary semistabilizing degree.'}
  - {to: neron-ogg-shafarevich-criterion, label: uses, note: 'Good reduction makes the original Tate module unramified and detects good reduction of the constructed varieties.'}
---

**Construction.** Fix a finite extension $K/\mathbb Q_p$, a uniformizer $\pi$, and a positive-dimensional abelian variety $B/K$ with good reduction. Write $q$ for the residue-field size and $d=\dim B$. For every integer $r\ge2$, put
$$
n=q^r-1,\qquad T=K(\pi^{1/n}),\qquad
A_r=\operatorname{Res}_{T/K}(B_T).
$$
Here $\operatorname{Res}$ is Weil restriction. Let $K_r/K$ be the unramified extension of degree $r$, and put $F=K_r(\pi^{1/n})$ inside a fixed algebraic closure.

**Theorem (proved here).** The variety $A_r$ has dimension $dn$ and potentially good reduction. Its minimum semistabilizing degrees are
$$
\min_{E/K\text{ finite},\ (A_r)_E\text{ semistable}}[E:K]=n,
\qquad
\min_{E/K\text{ finite Galois},\ (A_r)_E\text{ semistable}}[E:K]=nr.
\tag{1}
$$
The first is attained by $T/K$, which is totally ramified, and the second by $F/K$, with ramification index $n$ and residue degree $r$. Every Galois semistabilizing extension satisfies $n\mid e(E/K)$ and $r\mid f(E/K)$. Over every finite extension $E/K$, semistable reduction of $A_r$ is equivalent to good reduction.

Thus the ratio of the two minima is unbounded with $K$ and $B$ fixed. The dimension $d(q^r-1)$ varies with $r$.

**Proof.** Weil restriction along a finite separable extension takes abelian varieties to abelian varieties; over an algebraic closure it is the product of the conjugates [@diem2001weilrestrictions, opening of §1.3, p. 25]. This gives $\dim A_r=dn$.

The polynomial $X^n-\pi$ is Eisenstein, and $p\nmid n$, so $T/K$ is totally and tamely ramified of degree $n$. The field $K_r$ contains all $n$th roots of unity: its residue field has multiplicative group of order $q^r-1=n$, and these roots lift uniquely by Hensel's lemma. Thus $F/K_r$ is cyclic, totally ramified of degree $n$. It is the splitting field over $K$ of $X^n-\pi$, because a primitive $n$th root of unity generates the unramified extension of degree $\operatorname{ord}_n(q)=r$. Indeed, $q^r\equiv1\pmod n$, whereas $0<q^s-1<n$ for $1\le s<r$.

Arithmetic Frobenius of $K_r/K$ extends to an automorphism $\sigma$ of $F$ fixing $\pi^{1/n}$, of order $r$. If $\tau(\pi^{1/n})=\zeta_n\pi^{1/n}$ generates inertia, then
$$
\operatorname{Gal}(F/K)=\langle\tau\rangle\rtimes\langle\sigma\rangle
\cong C_n\rtimes C_r,\qquad
\sigma\tau\sigma^{-1}=\tau^q.
\tag{2}
$$
Here $[F:K]=nr$ follows also by Eisenstein over $K_r$. The $n$ embeddings of $T$ correspond to the roots $\zeta_n^j\pi^{1/n}$; inertia acts regularly on them.

Fix $\ell\ne p$ and write $V_\ell$ for the rational Tate module. Weil restriction induces the Tate-module representation [@diem2001weilrestrictions, Proposition 1.21, p. 26]. Since $B$ is defined over $K$, the induction formula becomes
$$
V_\ell(A_r)\cong V_\ell(B)\otimes_{\mathbb Q_\ell}
\mathbb Q_\ell[\operatorname{Hom}_K(T,\bar K)].
\tag{3}
$$
The first factor is unramified by the [Néron–Ogg–Shafarevich criterion](neron-ogg-shafarevich-criterion.md). Inertia therefore acts through the permutation representation of the regular cyclic group in (2). This action is faithful because $V_\ell(B)\ne0$.

In particular the inertia image is finite. A finite-order linear operator over $\mathbb Q_\ell$ is unipotent only if it is the identity: its minimal polynomial divides $X^m-1$ for some $m$, which has distinct roots in characteristic zero. Grothendieck's criterion equates semistability with unipotent inertia [@silverbergzarhin2001etale, Theorem 4.1, p. 148]. Applied after every finite extension, it and the Néron–Ogg–Shafarevich criterion prove the asserted equivalence of semistable and good reduction.

Consequently the [finite monodromy obstruction](finite-torsion-recovers-semistable-inertia.md) is $\Phi_{A_r}=C_n$, with Frobenius acting by $\tau\mapsto\tau^q$. Its kernel $J$ in $I_K$ is the kernel of restriction $I_K\to\operatorname{Gal}(F/K_r)$. The [minimum-degree theorem](minimal-galois-semistabilizing-degree.md), parts 1–3, now gives (1) and both divisibilities: the obstruction order is $n$, and, since it is abelian, its central-lift factor is exactly $\operatorname{ord}_n(q)=r$.

Finally $F/T$ is unramified, being the base change of $K_r/K$. Hence $I_T\subseteq J$, so $A_r$ has good reduction over $T$. Over $F$ all embeddings split and $(A_r)_F\cong B_F^n$, which also has good reduction. These extensions attain the two bounds. $\square$

**A fixed explicit base.** Take $K=\mathbb Q_5$ and $B$ the elliptic curve $y^2=x^3+x+1$. Its discriminant is $-16\cdot31$, a $5$-adic unit, so it has good reduction. Then $A_r$ has dimension $5^r-1$, and the two minima are $5^r-1$ and $r(5^r-1)$. For $r=2,3$, they are respectively $(24,48)$ and $(124,372)$.

This realizes an arbitrarily large Frobenius factor in the minimum-degree formula by abelian varieties. No novelty beyond this deduction is claimed.
