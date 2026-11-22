---
title: The minimum degree of a Galois semistabilizing extension
kind: theorem
summary: 'A finite inertia obstruction of order n can be killed over a degree-n extension. Requiring the extension to be Galois raises the sharp minimum to n times the least positive Frobenius power with a central lift. A finite group calculation determines this extra factor.'
tags: [local-fields, galois-groups, hodge-theory, abelian-varieties, reconstruction-algorithms]
edges:
  - {to: finite-torsion-recovers-semistable-inertia, label: uses, note: 'Supplies the finite inertia obstruction for an abelian variety from a bounded level of prime-to-p torsion.'}
  - {to: canonical-weight-filtrations-and-potentially-ordinary-transport, label: uses, note: 'The twisted canonical graded pieces have finite inertia image and detect semistability over every finite extension.'}
  - {to: de-rham-criterion-for-single-weight-filtrations, label: uses, note: 'Pullback along a local Galois isomorphism preserves de Rham representations with a potential single-weight filtration.'}
  - {to: local-field-galois-invariants, label: uses, note: 'Inertia and arithmetic Frobenius are preserved by local Galois isomorphisms.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite. Let $J\subseteq I_K$ be closed, normal in $G_K$, and of finite index in inertia. Put
$$
\Phi=I_K/J,\qquad n=|\Phi|,\qquad Q=G_K/J,
$$
and identify $G_K/I_K$ with $\widehat{\mathbb Z}$ by arithmetic Frobenius. Thus
$$1\longrightarrow\Phi\longrightarrow Q\xrightarrow{\pi}\widehat{\mathbb Z}\longrightarrow1.$$
Choose $x\in Q$ with $\pi(x)=1$ and let $\vartheta=\operatorname{Ad}(x)|_\Phi$. For $a\in\Phi$, write $\operatorname{Int}(a)(b)=aba^{-1}$. Define
$$
\delta=\min\{r\ge1:\text{ there is }a\in\Phi\text{ with }\vartheta(a)=a
\text{ and }\operatorname{Int}(a)\vartheta^r=1\}.
\tag{1}
$$
This is a finite calculation: if $m$ is the order of $\vartheta$ in $\operatorname{Aut}(\Phi)$, then $r=m$, $a=1$ works.

**Theorem (proved here).**

1. The integer $\delta$ is independent of the Frobenius lift $x$ and is characterized by
   $$\pi(Z(Q))=\delta\widehat{\mathbb Z}.\tag{2}$$
   It satisfies $\operatorname{ord}([\vartheta])\mid\delta\mid m$, where $[\vartheta]\in\operatorname{Out}(\Phi)$. If $\Phi$ is abelian, then $\delta=m$. If $Z(\Phi)=1$, then $\delta=\operatorname{ord}([\vartheta])$.
2. Among all finite extensions $E/K$ with $I_E\subseteq J$, the minimum degree and the minimum ramification index are both $n$, attained by a totally ramified extension.
3. Among finite **Galois** extensions $E/K$ with $I_E\subseteq J$, the minimum degree is $n\delta$. Every such extension satisfies
   $$n\mid e(E/K),\qquad\delta\mid f(E/K),\tag{3}$$
   and one attains $e(E/K)=n$, $f(E/K)=\delta$. In particular a totally ramified Galois extension satisfying the condition exists exactly when $\delta=1$.

Here $e$ and $f$ are the ramification index and residue degree. The case $\Phi=1$ has $m=\delta=1$.

**Proof.** For any element $y$ of a profinite group, its integer powers extend to a continuous map $\widehat{\mathbb Z}\to\overline{\langle y\rangle}$. Indeed, the map to every finite quotient factors through a finite cyclic quotient of $\mathbb Z$. For the chosen $x$, the composite with $\pi$ is the identity. Hence $t\mapsto x^t$ is an injective section, and
$$Q=\Phi\rtimes_\vartheta\widehat{\mathbb Z}.$$
In particular $x^m$ is central. The image $\pi(Z(Q))$ is a closed subgroup containing $m\widehat{\mathbb Z}$, so it is $d\widehat{\mathbb Z}$ for a positive divisor $d$ of $m$.

Every lift of an integer $r$ is $a x^r$ for some $a\in\Phi$. It commutes with $\Phi$ exactly when $\operatorname{Int}(a)\vartheta^r=1$, and with $x$ exactly when $\vartheta(a)=a$. Since $\Phi$ and $x$ topologically generate $Q$, these are exactly the centrality conditions. Thus $d$ is the minimum in (1), proving (2), independence of $x$, and the divisibilities in part 1. For abelian $\Phi$, the inner automorphism in (1) is trivial. For centre-free $\Phi$, put $r=\operatorname{ord}([\vartheta])$ and choose $a$ with $\operatorname{Int}(a)\vartheta^r=1$. Commuting this identity with $\vartheta$ gives $\operatorname{Int}(\vartheta(a))=\operatorname{Int}(a)$, so $\vartheta(a)=a$. This proves the remaining assertions of part 1.

Write $H=G_E\subseteq G_K$. The standard inertia and residue indices give
$$
e(E/K)=[I_K:H\cap I_K],\qquad
f(E/K)=[\widehat{\mathbb Z}:\pi(HJ/J)].
$$
If $I_E=H\cap I_K\subseteq J$, then
$$e(E/K)=n[J:I_E],\tag{4}$$
so $n$ divides every possible ramification index. The preimage in $G_K$ of $\overline{\langle x\rangle}$ has inertia $J$ and full residue image, hence defines a totally ramified extension of degree $n$. This proves part 2.

Suppose now that $E/K$ is Galois. The image $C=HJ/J$ is a closed normal subgroup of $Q$, and $C\cap\Phi=1$: if $hj\in I_K$ with $h\in H$, $j\in J$, then $h\in I_E\subseteq J$. For $c\in C$ and $q\in Q$, the commutator belongs to $C$ by normality and to $\Phi$ because $Q/\Phi$ is abelian. It is therefore trivial. Consequently $C\subseteq Z(Q)$, and (2) implies $\pi(C)\subseteq\delta\widehat{\mathbb Z}$. This proves $\delta\mid f(E/K)$, and (4) proves the other divisibility in (3). Thus $[E:K]=ef\ge n\delta$.

Choose $z\in Z(Q)$ with $\pi(z)=\delta$. The power map $t\mapsto z^t$ is injective, since its projection is multiplication by the nonzero integer $\delta$ on $\widehat{\mathbb Z}$. Its image $C_z$ is closed, central, disjoint from $\Phi$, and of index $n\delta$ in $Q$. Its preimage in $G_K$ is therefore open normal and defines a Galois extension with inertia $J$ and residue degree $\delta$. This attains the bound and proves part 3. $\square$

**Semistabilizing applications (deduced here).**

- Let $A/K$ be an abelian variety. Use $J=J_A$ from [finite-torsion reconstruction](finite-torsion-recovers-semistable-inertia.md). That theorem identifies semistability over $E$ with $I_E\subseteq J_A$. Thus the sharp minimum Galois degree is $|\Phi_A|\delta$. At a level $\ell^s$ with $\ell\ne p$ and $s(\ell-1)>2$, put $H=\bar\rho(I_K)$ and $U=\{h\in H:(h-1)^2=0\}$. The full finite Galois module $A[\ell^s]$ determines $\Phi_A=H/U$ and the automorphism induced on it by conjugation by a Frobenius lift. Applying (1) gives $\delta$. The inertia image alone need not supply this Frobenius action.
- Let $V$ be de Rham with a potential single-weight filtration. For its [canonical weight flag](canonical-weight-filtrations-and-potentially-ordinary-transport.md), write $Q_h$ for the piece of weight $h$ and put $U_h=Q_h(-h)$. Then
  $$J_V=\bigcap_h\ker(I_K\longrightarrow\operatorname{GL}(U_h))$$
  is closed, normal in $G_K$ and of finite index in $I_K$. The canonical flag restricts unchanged to every $G_E$, and its semistability criterion gives $V|_{G_E}$ semistable exactly when $I_E\subseteq J_V$. The theorem therefore computes both minimum degrees for $V$ directly from the twisted graded pieces and their Frobenius action.

These constructions are invariant under a local Galois isomorphism $\alpha:G_L\xrightarrow{\sim}G_K$. In the abelian-variety case assume $B[\ell^s]\simeq\alpha^*A[\ell^s]$; finite-torsion reconstruction identifies $J_B$ with $J_A$. In the representation case, [de Rham transport](de-rham-criterion-for-single-weight-filtrations.md) and uniqueness of the canonical flag identify $J_{\alpha^*V}$ with $J_V$. Since $\alpha$ preserves inertia and Frobenius, it identifies the extensions $Q$, their centres and their projected subgroups in (2). Thus $n$, $\delta$ and the minimum Galois degree agree.

**A local example where the Galois requirement costs a factor two (proved here).** Over $K=\mathbb Q_5$, let $F$ be the splitting field of $X^3-5$. The polynomial $X^2+X+1$ is irreducible modulo $5$ with unit discriminant, so $K(\zeta_3)/K$ is unramified quadratic. Over that field $X^3-5$ is Eisenstein and adjoining one root gives a cyclic, totally ramified cubic extension. Consequently
$$\operatorname{Gal}(F/K)=C_3\rtimes C_2\simeq S_3,$$
with inertia $C_3$ and Frobenius acting by inversion, since $\zeta_3^5=\zeta_3^{-1}$.

Let $V$ be the faithful two-dimensional representation on the sum-zero subspace of the permutation representation $\mathbb Q_5^3$ of $S_3$, pulled back to $G_K$. A finite-image $p$-adic representation is semistable exactly when unramified [@brinonconrad2009, Corollary 9.3.2 and its proof, pp. 146–147]. Hence its semistability obstruction has $\Phi=C_3$, $n=3$ and $\delta=2$. The minimum arbitrary degree is $3$, attained over $K(5^{1/3})$: this cubic subfield is totally ramified, so $F/K(5^{1/3})$ is unramified. The minimum Galois degree is $6$, attained over $F$, with $e=3$ and $f=2$.

**Why the centrality correction matters (proved here).** The order of $[\vartheta]$ in $\operatorname{Out}(\Phi)$ need not equal $\delta$ in the abstract group calculation. Take the generalized quaternion group
$$\Phi=\langle a,b\mid a^8=1,\ b^2=a^4,\ bab^{-1}=a^{-1}\rangle$$
of order $16$, and define $\vartheta(a)=a^3$, $\vartheta(b)=ab$. These assignments preserve the relations and generate $\Phi$, so define an automorphism. One computes $\vartheta^2=\operatorname{Int}(a^2)$ and $\vartheta^4=1$. It is not inner, because inner automorphisms send $a$ only to $a$ or $a^{-1}$. Thus $[\vartheta]$ has order two. But the only $c$ with $\operatorname{Int}(c)\vartheta^2=1$ are $a^2,a^6$, since $Z(\Phi)=\{1,a^4\}$. The automorphism exchanges these two elements, so neither is fixed. Equation (1) gives $\delta=4$. This is a check on the general group formula; no realization of this particular action as local inertia is asserted.

Minimizing extensions can depend on the chosen central lift. Their minimum degree and residue degree are intrinsic. The argument is a deduction from the linked results and elementary profinite group calculations; no novelty beyond the knowledgebase is claimed.
