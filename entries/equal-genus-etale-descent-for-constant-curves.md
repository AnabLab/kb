---
title: Equal-genus étale descent for constant curves
kind: theorem
summary: 'For proper curves C and D of equal genus at least two over a finite field, the full étale descent locus of C over k(D) equals the reductions of limits of k-morphisms D to C. Every nonconstant descent tuple is one common constants-Galois translate of a morphism.'
tags: [curves, fundamental-groups, function-fields, finite-fields]
edges:
  - {to: etale-descent-conjecture-for-constant-curves, label: addresses, note: 'Proves its full equality when g(C)=g(D)>=2, rather than only its existence clause.'}
  - {to: geometric-interpolation-for-constant-curve-descent, label: uses, note: 'Supplies a constants-compatible homomorphism interpolating every point section up to geometric conjugacy.'}
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: uses, note: 'Part 3 makes the interpolating map open when the adelic point is nonconstant.'}
  - {to: genus-bound-and-equality-for-open-fundamental-group-maps, label: uses, note: 'Equal genus forces image index one and realizes the given full homomorphism by a scheme isomorphism and an equivariant universal-cover isomorphism.'}
  - {to: local-point-sections-determine-well-behaved-maps, label: uses, note: 'Uses only its rational-point separation fact, over each residue field.'}
---

**Setting.** Let $k=\mathbb F_q$, where $q=p^a$, and let $C,D$ be smooth, proper, geometrically integral curves over $k$ with $g(C)=g(D)\ge2$. Put $K=k(D)$, $\Gamma=G_k$, $\Pi_X=\pi_1(X)$, and $\Delta_X=\pi_1(X_{\bar k})$. Fix the residue embeddings and decomposition sections $t_v:G_{k(v)}\to\Pi_D$ as in [the descent entry](etale-descent-and-fundamental-group-maps-over-finite-fields.md). Write $v\in D(k(v))$ also for the corresponding point. Let
$$R=r\bigl(\overline{C(K)}\bigr),\qquad S=C(\mathbb A_{K,k})^{\mathrm{\acute et}},$$
where the closure is in $C(\mathbb A_K)$ and $S$ tests every torsor under every finite étale $K$-group scheme. The reductions are tuples in $\prod_v C(k(v))$. The set $R$ is closed and $R\subseteq S$ [@creutzvoloch2024, §1.1, p. 3].

**Theorem (proved here).**
$$R=S=C(k)\ \cup\ \left\{\bigl(\sigma(g(v))\bigr)_v:\ g:D\to C\text{ a nonconstant }k\text{-morphism},\ \sigma\in\Gamma\right\}.\tag{1}$$
Here $\sigma$ acts on the values of the $k(v)$-point, using $k(v)\subset\bar k$. The same $\sigma$ is used at every place. Thus Creutz–Voloch's Conjecture 1.1 holds in equal genus at least two. This is only one case of their conjecture, so the arrow to it is `addresses`.

**Proof.** Constant tuples belong to $R$, by constant morphisms. Take $x=(x_v)\in S\setminus C(k)$.

*1. The full interpolating map is an isomorphism.* [Geometric interpolation](geometric-interpolation-for-constant-curve-descent.md) gives a continuous $\phi:\Pi_D\to\Pi_C$ over $\Gamma$, with
$$\phi t_v=\delta_v s_{x_v}\delta_v^{-1},\qquad\delta_v\in\Delta_C.\tag{2}$$
It is well behaved. By part 3 of [the checked dichotomy](etale-descent-and-fundamental-group-maps-over-finite-fields.md), it has open image: otherwise its attached tuple would be constant. The [genus-bound theorem](genus-bound-and-equality-for-open-fundamental-group-maps.md) gives
$$[\Pi_C:\phi(\Pi_D)](g(C)-1)\le g(D)-1=g(C)-1.$$
Thus the index is one and the bound is an equality. That theorem makes this particular $\phi$ a full isomorphism, realized by a scheme isomorphism $f:D\to C$ and a $\phi$-equivariant isomorphism $\tilde f:\widetilde D\to\widetilde C$ of profinite étale universal covers. Its realization uses Mochizuki's theorem [@mochizuki2007cuspidal, Theorem 3.2, p. 86].

*2. Keep track of algebraic constants.* The isomorphism $f$ need not be over $k$. Write $f^*|_k=(z\mapsto z^{p^r})$, and choose $s\ge0$ with $r+s\equiv0\pmod a$. Set
$$g=f\circ F_D^s,\qquad A=\tilde f\circ F_{\widetilde D}^s,$$
where $F$ denotes absolute $p$-Frobenius. Then $g$ is a nonconstant $k$-morphism and $A$ covers it. Absolute Frobenius commutes with every scheme morphism, hence with every deck transformation [@stacks2026, Lemma 33.36.2, tag 0CC7]. Consequently
$$A\circ d=\phi(d)\circ A\quad(d\in\Pi_D).\tag{3}$$
On the fixed algebraic closures of constants, the pullback of $A$ is an automorphism
$$\alpha=A^*|_{\bar k}:\bar k\xrightarrow{\sim}\bar k.$$
It restricts to the identity on $k$, since $A$ covers $g$, so $\alpha\in\Gamma$. There is no reason for $\alpha$ itself to be the identity.

Here is the residue-field calculation. Choose an underlying pro-point of $\widetilde D$ with stabilizer $t_v(G_{k(v)})$ and image the specified $v$ on $D_{\bar k}$. Its residue field is $\bar k$: it is a union of finite residue fields and contains all algebraic constants. It therefore has a unique $\bar k$-point $z_v:\operatorname{Spec}\bar k\to\widetilde D$ over the fixed constants. Write $b_{\alpha^{-1}}=\operatorname{Spec}(\alpha^{-1})$. The composite
$$w_v=A\circ z_v\circ b_{\alpha^{-1}}:\operatorname{Spec}\bar k\longrightarrow\widetilde C$$
is over the fixed $\bar k$: its pullback on constants is $\alpha^{-1}\alpha=1$. Its image on $C$ is
$$g\circ v\circ b_{\alpha^{-1}},\quad\text{that is,}\quad y_v=\alpha^{-1}(g(v))\in C(k(v)).\tag{4}$$
This formula follows directly on coordinate rings: evaluation is $\alpha^{-1}\circ v^*\circ g^*$. In particular it retains the residue embedding, rather than just the underlying closed point.

By (3), $\phi t_v$ fixes the underlying pro-point of $w_v$. Its projection to $\Gamma$ is the identity on $G_{k(v)}$. The decomposition group of $w_v$ projects injectively to $\Gamma$, so $\phi t_v$ is a point section of $y_v$. This is the stabilizer construction of the local point [@creutzvoloch2024, Construction 3.5, p. 7]. Equation (2) says that it is geometrically conjugate to a point section of $x_v$. The [rational-point separation fact](local-point-sections-determine-well-behaved-maps.md), applied to $C_{k(v)}$, gives $x_v=y_v$. With $\sigma=\alpha^{-1}$, equation (4) proves that every nonconstant element of $S$ has the form on the right of (1).

*3. Approximate the common action by Frobenius.* Conversely, let $g:D\to C$ be a nonconstant $k$-morphism and $\sigma\in\Gamma$. Identify $\Gamma\simeq\widehat{\mathbb Z}$ by arithmetic $q$-Frobenius, and write $m$ for $\sigma$. Choose nonnegative integers $n_j$ with $n_j\equiv m\pmod{j!}$. Put $Q_C=F_C^a$, the $k$-endomorphism whose pullback raises functions to the $q$th power. Each $Q_C^{n_j}\circ g$ is a $k$-morphism, hence a point of $C(K)$, and
$$r(Q_C^{n_j}\circ g)_v=\operatorname{Fr}_q^{n_j}(g(v)).$$
For any finite set of places, all degrees $[k(v):k]$ divide $j!$ for sufficiently large $j$. On that set these values then equal $\sigma(g(v))$. Thus the reductions converge in $\prod_v C(k(v))$ to $(\sigma(g(v)))_v$. Closedness of $R$ and $r(C(K))\subseteq R$ put that tuple in $R$.

If $N$ denotes the right side of (1), we have proved $S\subseteq N\subseteq R\subseteq S$. This proves (1). $\square$

**Scope and checks.** The argument uses full descent to obtain the geometric conjugacy in (2). Tests under constant groups alone do not supply it. Equal genus is used only to make the open interpolating map an isomorphism; the assertion for unequal genus is not proved here. The result imposes no rational-point hypothesis on $C$ or $D$.

The common action in (4) cannot simply be discarded: even an arithmetic inner conjugation of a morphism's fundamental-group map changes all residue values by a common constants action. As a sign check, for $C=D$, $\phi=1$, $f=1$, and $s=a$, we have $g=Q_D$ and $\alpha=\operatorname{Fr}_q$, so (4) gives $y_v=v$, as required. Step 3 also covers inverse Frobenius and nonintegral exponents in $\widehat{\mathbb Z}$, because only their restrictions to finite residue fields are approximated. If there are no nonconstant $k$-morphisms, (1) reduces to $S=C(k)$, including when both sets are empty.

Creutz and Voloch explicitly seek a proof of the equal-genus case [@creutzvoloch2024, Remark 4.1, p. 9]. The proof here combines the linked checked entries with the constants calculation and Frobenius approximation; no novelty is claimed.
