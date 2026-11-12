---
title: Serre–Tate deformation theory
kind: theorem
summary: 'Serre–Tate recovers infinitesimal abelian-scheme deformations from p-divisible groups, with multiplicative coordinates and a canonical lift in the ordinary case.'
tags: [hodge-theory, reconstruction-algorithms, abelian-varieties]
edges:
  - {to: tate-full-faithfulness-for-p-divisible-groups, label: analogous-to, note: 'Tate reconstructs p-divisible groups from Galois modules over a fixed base; here their deformations reconstruct abelian schemes with a fixed reduction.'}
  - {to: reconstruction-of-log-special-fibres-of-p-adic-curves, label: motivated-by, note: 'Supplies the ordinary canonical lifting mentioned in its discussion of lifting information.'}
---

**Deformation equivalence (Serre–Tate).** Let a prime $p$ be nilpotent in a ring $R$, let $I\subset R$ be nilpotent, and put $R_0=R/I$. The functor
$$
A\longmapsto(A_{R_0},A[p^\infty],\mathrm{can})
$$
is an equivalence from abelian schemes over $R$ to triples
$$
(A_0,G,\phi:G_{R_0}\xrightarrow{\sim}A_0[p^\infty]),
$$
where $A_0/R_0$ is an abelian scheme, $G/R$ is $p$-divisible, and morphisms are compatible pairs [@katz1981serretate, Theorem 1.2.1, p. 143].

**Ordinary coordinates.** Let $A_0/k$ be ordinary of dimension $g$, with $k$ algebraically closed of characteristic $p$. For an Artin local $R$ with residue field $k$, isomorphism classes of lifts marked by $A_k\cong A_0$ correspond naturally to
$$
q_A\in\operatorname{Hom}_{\mathbb Z_p}
\bigl(T_pA_0(k)\otimes_{\mathbb Z_p}T_pA_0^\vee(k),1+\mathfrak m_R\bigr).
$$
Here $A_0^\vee$ is the dual and $T_pA_0(k)=\varprojlim_n A_0[p^n](k)$ has rank $g$. Bases identify this deformation functor with $\widehat{\mathbb G}_m^{g^2}$ [@katz1981serretate, Theorem 2.1(1–2), pp. 148–149]. The canonical lift has $q_A\equiv1$ [@katz1981serretate, §4.5, p. 180].

For ordinary $A_0,B_0$, a homomorphism $f_0:A_0\to B_0$ lifts uniquely between marked lifts $A,B$ exactly when
$$
q_A(x,T_pf_0^\vee(y))=q_B(T_pf_0(x),y)
$$
for every $x\in T_pA_0(k)$ and $y\in T_pB_0^\vee(k)$ [@katz1981serretate, Theorem 2.1(4), p. 149].
