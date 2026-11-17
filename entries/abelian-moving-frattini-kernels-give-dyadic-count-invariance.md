---
title: Abelian moving Frattini kernels give dyadic count invariance
kind: theorem
summary: 'Every tame automorphism preserves marked surjection counts to P semidirect T if T has odd order and the normal closure of its commutators with the Frattini subgroup is abelian. In particular this holds whenever the Frattini subgroup is abelian, without centrality or exponent restrictions.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: dyadic-count-invariance-for-actions-fixing-frattini-subgroups, label: generalizes, note: 'Its pointwise-fixed hypothesis is the case where the moving kernel W is trivial; it supplies the quotient case of the proof.'}
  - {to: dyadic-count-invariance-for-actions-fixing-frattini-subgroups, label: uses, note: 'Proves invariance after the abelian moving kernel has been removed.'}
  - {to: dyadic-central-frattini-counts-at-arbitrary-exponent, label: generalizes, note: 'A central Frattini subgroup makes the moving kernel abelian, but centrality of the full Frattini subgroup is unnecessary here.'}
  - {to: noncentral-frattini-layers-in-dyadic-lift-counts, label: uses, note: 'Applied successively to the elementary quotients of an abelian zero-coinvariant Frattini kernel.'}
  - {to: unitriangular-dyadic-marked-counts, label: analogous-to, note: 'Its UT4 over F4 supplies a noncentral abelian moving kernel, even after taking a product with an arbitrary fixed 2-group.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Excludes every target in this class from all tame marked-count obstructions; gives no full lift.'}
---

**Theorem (proved here).** Let $k/\mathbb Q_2$ have degree $d$, with tame quotient $\pi:G_k\twoheadrightarrow\Gamma$. Let a finite odd-order group $T$ act on a finite $2$-group $P$, and put $H=P\rtimes T$ and $F=\Phi(P)$. Define the normal subgroup
$$
W=\left\langle h\bigl(f^{-1}t(f)\bigr)h^{-1}:
f\in F,\ t\in T,\ h\in H\right\rangle\subseteq F.
\tag{1}
$$
Suppose $W$ is abelian. For all $\alpha\in\operatorname{Aut}(\Gamma)$ and finite epimorphisms $q:\Gamma\twoheadrightarrow D$, $r:H\twoheadrightarrow D$,
$$
\#\{u:G_k\twoheadrightarrow H:ru=q\pi\}
=\#\{u:G_k\twoheadrightarrow H:ru=q\alpha\pi\}.
\tag{2}
$$
All maps are continuous, and actual maps, including conjugates, are counted separately. In particular (2) holds whenever $\Phi(P)$ is abelian, with arbitrary exponent and arbitrary odd-order action.

**Proof.** *1. An abelian zero-coinvariant Frattini kernel can be removed at any exponent.* Let $E$ be a finite group with an abelian normal $2$-subgroup $B\subseteq\Phi(E)$ and zero coinvariants
$$
B_E=B/\langle e(b)-b:e\in E,\ b\in B\rangle=0.
$$
Write $B$ additively, and choose $m$ with $2^mB=0$. For $0\le i<m$, the kernel of
$$
E/2^{i+1}B\longrightarrow E/2^iB
$$
is $B_i=2^iB/2^{i+1}B$, an elementary-abelian group in $\Phi(E/2^{i+1}B)$. Indeed the image of a finite group's Frattini subgroup lies in the Frattini subgroup of any quotient: pull back each maximal subgroup. Multiplication by $2^i$ gives an $E$-equivariant surjection $B\twoheadrightarrow B_i$. Hence $(B_i)_E=0$; conjugation factors through $E/2^{i+1}B$, so these are also the coinvariants for that quotient group.

Apply the [elementary zero-coinvariant lifting theorem](noncentral-frattini-layers-in-dyadic-lift-counts.md) at each step. Starting with an epimorphism $G_k\twoheadrightarrow E/B$, lift successively to $E/2B$, $E/4B$, and finally $E$. Every lift is surjective, and the number of lifts is
$$
\prod_{i=0}^{m-1}|B_i|^{d+1}=|B|^{d+1}.
\tag{3}
$$
Every tame marking $E\twoheadrightarrow D$ kills $B$ as well: the same elementary theorem first kills $2^{m-1}B$, then $2^{m-2}B/2^{m-1}B$, and so on. Thus if $r=\bar r\rho$, where $\rho:E\twoheadrightarrow E/B$, then
$$
\#\{u:G_k\twoheadrightarrow E:ru=q\pi\}
=|B|^{d+1}\#\{v:G_k\twoheadrightarrow E/B:\bar rv=q\pi\}.
\tag{4}
$$
This also proves the assertion for zero counts. The Frattini condition is retained; zero coinvariants alone need not give uniform numbers of surjective lifts.

*2. The moving kernel has zero coinvariants.* Now take $E=H$ and $B=W$ from (1). First, $F\subseteq\Phi(H)$. To check this, if $J\subseteq H$ satisfies $JF=H$, then $(J\cap P)F=P$. The Frattini property in $P$ gives $J\cap P=P$, and then $J=H$. This proves the assertion by applying it to a maximal subgroup missing an element of $F$. In particular $W\subseteq\Phi(H)$.

Let $\eta:W\twoheadrightarrow W_H$ be the coinvariant quotient, with additive notation. For fixed $f\in F$ set $c_f(t)=f^{-1}t(f)\in W$. Direct multiplication gives
$$
c_f(ts)=c_f(t)\,t(c_f(s)).
$$
Conjugation by $t$ acts trivially on $W_H$, so $t\mapsto\eta(c_f(t))$ is a homomorphism from the odd-order group $T$ to the abelian $2$-group $W_H$. It is zero. Every generator in (1) has the same coinvariant class as some $c_f(t)$, so these classes generate $W_H$ and are all zero. Thus $W_H=0$.

*3. Pass to the pointwise-fixed quotient.* Put $\bar P=P/W$ and $\bar H=H/W=\bar P\rtimes T$. The formula $\Phi(P)=P^2[P,P]$ gives
$$
\Phi(\bar P)=F/W.
$$
Definition (1) makes the $T$-action on $F/W$ trivial. The [pointwise-fixed Frattini theorem](dyadic-count-invariance-for-actions-fixing-frattini-subgroups.md) therefore gives (2) for $\bar H$, for every tame marking and every $\alpha$. Step 1 shows that $r$ descends to $\bar H$ and multiplies both marked counts by the same factor $|W|^{d+1}$. This proves (2). If $F$ is abelian then so is its subgroup $W$, proving the final assertion. $\square$

**A noncentral example with nonabelian full Frattini subgroup (proved here).** Let $S=\operatorname{UT}_4(\mathbb F_4)$, write $x_{ij}(a)=I+aE_{ij}$, and let $T=C_3$ act by
$$
t(x_{ij}(a))=x_{ij}(\lambda^{j-i}a),\qquad
\mathbb F_4^\times=\langle\lambda\rangle.
$$
This is conjugation by a diagonal matrix. For $i<j<\ell$, direct multiplication gives $[x_{ij}(a),x_{j\ell}(b)]=x_{i\ell}(ab)$. Thus every root of height at least two is a commutator, and the quotient by these roots is elementary abelian. This proves $\Phi(S)=S_2$, the subgroup generated by roots of height at least two, as in the [unitriangular calculation](unitriangular-dyadic-marked-counts.md). Here $S_2$ is elementary abelian of order $4^3$: products of two matrices of minimum root height two vanish in size four. It is noncentral, since
$$
[x_{13}(a),x_{34}(b)]=x_{14}(ab).
$$
Take $P=A\times S$ for any finite $2$-group $A$, with $T$ fixing $A$ pointwise. Then $F=\Phi(A)\times S_2$. The differences $f^{-1}t(f)$ generate both height-two root groups because $\lambda^2-1\ne0$; their normal closure also contains the height-three root group by the displayed commutator. Consequently $W=1\times S_2$ is abelian and noncentral, so (2) holds for every marking of $P\rtimes C_3$. The height-three group is fixed by all of $H$, so $W^H\ne0$ despite $W_H=0$.

For $A=\operatorname{UT}_5(\mathbb F_2)$, the full $F$ is nonabelian: both $x_{13}(1)$ and $x_{35}(1)$ lie in $\Phi(A)$, while their commutator is $x_{15}(1)\ne1$. Thus neither abelianness of the full Frattini subgroup nor its pointwise fixation by $T$ is necessary for this theorem.

**Scope.** The condition is on the normal closure in (1), not just on the set of differences before conjugation by $P$. For example, the height-two root subspace above is not normal until the fixed height-three root group is included. The proof permits arbitrary exponent for an abelian moving kernel and arbitrary nilpotency class in the fixed factor. It does not handle a nonabelian moving kernel or construct a full tame-automorphism lift; the dyadic classification problem remains open.
