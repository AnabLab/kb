---
title: Noncentral Frattini layers with zero coinvariants in dyadic lift counts
kind: theorem
summary: 'An elementary-abelian Frattini kernel W with zero conjugation coinvariants contributes exactly |W|^(d+1) lifts per quotient surjection over a dyadic field of degree d. Centrality and vanishing of invariant vectors are unnecessary; every tame marking kills W.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: nontrivial-central-action-in-dyadic-lift-counts, label: generalizes, note: 'Replaces centrality and fixed-vector vanishing under an odd complement by vanishing of coinvariants under the whole target.'}
  - {to: local-tate-duality, label: uses, note: 'The dual invariant space is the dual of the coinvariant space; the Euler characteristic counts actual lifts.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Removes noncentral elementary-abelian Frattini layers with zero coinvariants from the search for a marked-count obstruction.'}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$, and let $H$ be a finite group with a normal elementary-abelian $2$-subgroup $W$. Write $W$ additively. Suppose
$$
W\subseteq\Phi(H),\qquad
W_H=W/\operatorname{span}_{\mathbb F_2}\{hwh^{-1}-w:h\in H,\ w\in W\}=0,
\tag{1}
$$
where $\Phi(H)$ is the intersection of the maximal proper subgroups of $H$. Put $\bar H=H/W$ and let $\rho:H\twoheadrightarrow\bar H$ be projection. Conjugation on $W$ factors through $\bar H$ because $W$ is abelian. All maps below are continuous, and counts distinguish actual maps, including conjugate ones.

**Theorem (proved here).** Every epimorphism $f:G_k\twoheadrightarrow\bar H$ has exactly
$$
|W|^{d+1}
\tag{2}
$$
lifts to $H$, and all are epimorphisms.

Moreover, let $\pi:G_k\twoheadrightarrow\Gamma$ be the tame quotient. Every epimorphism $a:H\twoheadrightarrow D$ to a finite quotient of $\Gamma$ kills $W$, so $a=\bar a\rho$. With
$$
E_k(H,a;q)=\#\{F:G_k\twoheadrightarrow H:aF=q\pi\}
$$
for an epimorphism $q:\Gamma\twoheadrightarrow D$, one has
$$
E_k(H,a;q)=|W|^{d+1}E_k(\bar H,\bar a;q).
\tag{3}
$$
Thus preservation of every tame marked count by a tame automorphism is equivalent for $H$ and $\bar H$.

**Proof.** Give $W$ its $G_k$-action through $f$. Since $\mu_2\subset k$, its Tate dual is $W^\vee=\operatorname{Hom}_{\mathbb F_2}(W,\mathbb F_2)$. Surjectivity of $f$ and (1) give
$$
(W^\vee)^{G_k}=(W^\vee)^H
=\operatorname{Hom}_{\mathbb F_2}(W_H,\mathbb F_2)=0.
$$
Local Tate duality therefore gives $H^2(k,W)=0$ [@milne2006adt, I, Corollary 2.3, p. 28]. No assertion about $W^{G_k}$ is needed.

Choose a section $u$ of the finite map $\rho$, and write its factor set additively as $u(x)u(y)=c(x,y)u(xy)$. Associativity gives the $2$-cocycle identity for the conjugation action. A map $F(g)=b(g)u(f(g))$ is a homomorphism precisely when
$$
b(gh)=b(g)+g b(h)+c(f(g),f(h)).
$$
The pulled-back factor set has zero class in $H^2(k,W)$, so a continuous cochain $b$ solving this equation exists. The difference of any two solutions is a cocycle. Thus, after fixing one lift, all lifts are obtained uniquely by multiplying it by a cocycle in $Z^1(k,W)$.

The Euler characteristic gives
$$
|H^1(k,W)|=|H^0(k,W)|\,|W|^d
$$
[@milne2006adt, I, Theorem 2.8, p. 31]. Since the group of coboundaries has order $|W|/|H^0(k,W)|$, it follows that
$$
|Z^1(k,W)|=|W|^{d+1}.
$$
The invariant factor cancels, even when it is nontrivial. If a lift has image $J$, then $JW=H$. A proper $J$ would lie in a maximal subgroup of $H$, which contains $W$ by (1), contradicting $JW=H$. This proves (2).

A finite dyadic tame quotient has a cyclic normal subgroup of odd order, the image of tame inertia, with cyclic quotient. Each Sylow $2$-subgroup injects into that cyclic quotient and is cyclic. Thus the normal elementary-abelian subgroup $a(W)$ is trivial or has order two. A normal subgroup of order two is central. In the latter case, $a|_W$ would consequently be a nonzero $H$-invariant functional $W\to\mathbb F_2$, contradicting $W_H=0$. Hence $a(W)=1$. Each map counted for $\bar H$ in (3) has precisely the lifts in (2), all with the prescribed marking, which proves (3). Markings of $H$ and $\bar H$ correspond and the multiplier is positive, giving the last assertion. $\square$

**Comparison with the central case (proved here).** Suppose $H=P\rtimes T$, with $P$ a finite $2$-group, $T$ of odd order, and $W\subseteq\Phi(P)$ normal in $H$. Then $W\subseteq\Phi(H)$: if $JW=H$, intersecting with $P$ gives $(J\cap P)W=P$; the defining property of $\Phi(P)$ gives $J\cap P=P$, and hence $J=H$. When $P$ centralizes $W$, averaging over $T$ identifies $W_T$ with $W^T$. Thus the hypotheses of the [central-action theorem](nontrivial-central-action-in-dyadic-lift-counts.md) imply (1).

**Scope.** The theorem allows a nonsemisimple action of the $2$-part of $H$ on $W$. In particular $W^H$ can be nonzero while $W_H=0$, as in the $\operatorname{UT}_4(\mathbb F_4)$ example in [unitriangular counts](unitriangular-dyadic-marked-counts.md). The elementary-abelian and Frattini hypotheses are retained. This reduction constructs no compatible lifts through an infinite sequence of finite quotients and does not settle full Frobenius-shift lifting.
