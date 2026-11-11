---
title: Minimal tame-lifting count obstructions have trivial prime-to-p core
kind: theorem
summary: 'For a finitely generated profinite group with a pro-p kernel, a smallest marked-count witness to failure of lifting has no nontrivial normal subgroup of order prime to p. Coprime kernels make compatible quotient surjections surjective, retaining every marking.'
tags: [local-fields, galois-groups, embedding-problems, reconstruction-algorithms]
edges:
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Supplies a finite marked-count witness whenever an automorphism of the quotient fails to lift.'}
  - {to: minimal-dyadic-count-obstructions-have-central-frattini-involutions, label: uses, note: 'Only the dyadic corollary uses its central Frattini involution theorem; the prime-to-p-core argument is independent.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'A smallest dyadic witness has trivial odd-order core as well as a central Frattini involution; no full lift or obstruction is constructed.'}
---

**Setting.** Let $G$ be a topologically finitely generated profinite group, let $\pi:G\twoheadrightarrow\Gamma$ have pro-$p$ kernel $P$, and fix $\alpha\in\operatorname{Aut}(\Gamma)$. All maps are continuous. For finite epimorphisms $a:H\twoheadrightarrow D$ and $q:\Gamma\twoheadrightarrow D$, write
$$
N(H,a;q)=\#\{F:G\twoheadrightarrow H:aF=q\pi\}.
$$
These are [marked surjection counts](finite-quotient-criterion-for-frobenius-shift-lifting.md), with conjugate maps counted separately. Write $O_p(H)$ for the largest normal $p$-subgroup of $H$ and $O_{p'}(H)$ for its largest normal subgroup of order prime to $p$.

**Theorem (proved here).** If $\alpha$ does not lift to an automorphism of $G$, choose a witness
$$
N(H,a;q)\ne N(H,a;q\alpha)
\tag{1}
$$
with $|H|$ smallest among all finite targets and all markings. Then
$$
O_p(H)\ne1,\qquad O_{p'}(H)=1.
\tag{2}
$$

**Proof.** The finite-quotient criterion supplies a witness. All counts below are finite: maps from a finitely generated profinite group to a finite group are determined by finitely many generator images. This also applies to $\Gamma$.

*1. Consequence of minimality for smaller targets.* If $|L|<|H|$, $r:L\to E$ is any homomorphism of finite groups and $v:\Gamma\to E$ any homomorphism, the count
$$
\#\{f:G\twoheadrightarrow L:rf=v\pi\}
\tag{3}
$$
is unchanged on replacing $v$ by $v\alpha$. It is zero unless $r(L)=v(\Gamma)$, and composing $v$ with $\alpha$ preserves its image. When these images agree, restrict the codomain to their common image and apply minimality to these epimorphic markings. Thus (3) also handles markings that are not onto $E$.

Put $R=O_p(H)$. Every epimorphism $F:G\twoheadrightarrow H$ sends $P$ into $R$, since $F(P)$ is a normal $p$-subgroup of $H$. If $R=1$, every such $F$ factors through $\Gamma$. Precomposition with $\alpha$ then bijects the two marked sets in (1), a contradiction. Thus $R\ne1$.

Suppose $O\triangleleft H$ is nontrivial of order prime to $p$. Then $O\cap R=1$, and $[O,R]\subseteq O\cap R$, so these subgroups commute. Put
$$
A=H/O,\qquad B=H/R,\qquad C=H/(OR),
$$
with projections $u:H\to A$, $b:H\to B$, $c_A:A\to C$ and $c_B:B\to C$. There is an isomorphism
$$
H\xrightarrow{\sim}A\times_C B.
\tag{4}
$$
Indeed the map is injective by $O\cap R=1$, and its target has order
$|A||B|/|C|=|H|$. Both $A$ and $B$ have smaller order than $H$.

For a subgroup $J\le H$ projecting onto both $A$ and $B$, one has $JO=JR=H$. Consequently $[H:J]$ divides both $|O|$ and $|R|$, so $J=H$. Thus compatible surjections to $A$ and $B$ give a surjection to $H$ under (4).

*2. Retain both parts of the marking.* Set $M=a(O)$ and $T=a(R)$. They are normal subgroups of $D$ of coprime orders, hence $M\cap T=1$. Let $q_M,q_T$ be the composites of $q$ with $D\to D/M,D/T$, and let
$$
a_A:A\to D/M,\qquad a_B:B\to D/T
$$
be induced by $a$. For every epimorphism $F:G\twoheadrightarrow H$, its $B$-coordinate kills $P$ because $F(P)\subseteq R$. Thus $bF=t\pi$ for a unique epimorphism $t:\Gamma\twoheadrightarrow B$. If $aF=q\pi$, then $a_Bt=q_T$.

For a fixed epimorphism $t$ satisfying this last condition, marked epimorphisms $F$ correspond exactly to epimorphisms $f:G\twoheadrightarrow A$ satisfying
$$
(c_A,a_A)f=(c_Bt,q_M)\pi.
\tag{5}
$$
Indeed (5) supplies the fiber-product compatibility, and the coprime-index argument makes the resulting $F$ surjective. Equation (5) also gives $aF=q\pi$ modulo $M$, and $a_Bt=q_T$ gives it modulo $T$. Since $M\cap T=1$, these equalities imply $aF=q\pi$ in $D$ itself. The reverse construction is $(uF,t)$, so this is a bijection of actual maps.

*3. Compare the counts.* We have proved the exact identity
$$
N(H,a;q)=
\sum_{\substack{t:\Gamma\twoheadrightarrow B\\a_Bt=q_T}}
\#\{f:G\twoheadrightarrow A:(c_A,a_A)f=(c_Bt,q_M)\pi\}.
\tag{6}
$$

Precomposition $t\mapsto t\alpha$ bijects the indexing sets for $q$ and $q\alpha$. It replaces $(c_Bt,q_M)$ by $(c_Bt,q_M)\alpha$. Since $|A|<|H|$, assertion (3), with codomain $C\times D/M$, makes each summand invariant, even if the two maps in (5) are not onto that codomain. Equation (6) therefore contradicts (1). No nontrivial normal prime-to-$p$ subgroup $O$ exists, proving (2). $\square$

**Dyadic consequence.** For $G=G_k$ with finite $k/\mathbb Q_2$ and $\Gamma$ its tame quotient, a smallest witness has trivial odd-order core. By the [central Frattini involution theorem](minimal-dyadic-count-obstructions-have-central-frattini-involutions.md), each minimal nontrivial normal subgroup contained in $O_2(H)$ is also central of order two and lies in $\Phi(H)$. These are simultaneous necessary conditions on a smallest witness.

**Checks and scope.** Coprimality is essential to the surjectivity argument. In $H=C_2\times C_2$, take $O,R$ to be the two coordinate subgroups. Then $O\cap R=1$ and (4) holds, but the diagonal is a proper subgroup projecting onto both quotients. These kernels are not coprime, so the index argument does not apply. For $H=C_2^2\times C_3$ with $R=C_2^2$ and $O=C_3$, by contrast, the index divides both four and three, forcing surjectivity.

No hypothesis that $a(O)=1$ is used: the quotients by both $M=a(O)$ and $T=a(R)$ retain markings that detect $O$. No splitting of $H$ over $O$ or $R$ is assumed. Equation (3) handles zero summands as well as positive ones.

The result excludes a prime-to-$p$ normal subgroup only in a witness of smallest order; it makes no such assertion for larger witnesses. It gives no numerical count formula, no full lift, and no counterexample to lifting. The argument uses the pro-$p$ kernel and finite generation, rather than a presentation or duality theorem for local Galois groups.
