---
title: Crystalline Tate modules detect good reduction of abelian varieties
kind: theorem
summary: An abelian variety over a p-adic field has good reduction exactly when its rational p-adic Tate module is crystalline. Under semistable reduction, the maximal 1-crystalline submodule is the Tate module of its Raynaud extension.
tags: [local-fields, hodge-theory, abelian-varieties]
edges:
  - {to: oda-good-reduction-criterion, label: analogous-to, note: 'Both detect good reduction through Galois data; abelian varieties require only a Tate module, whereas curves require nonabelian data.'}
  - {to: neron-ogg-shafarevich-criterion, label: analogous-to, note: 'Crystallinity of $V_pA$ replaces unramifiedness of $T_\ell A$ for $\ell\ne p$ [@andreattaiovitakim2015, Theorems 1.1–1.2, p. 2].'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite and $A/K$ an abelian variety. Put
$$
T_pA=\varprojlim_n A[p^n](\bar K),\qquad V_pA=T_pA\otimes_{\mathbb Z_p}\mathbb Q_p,
$$
with transition maps multiplication by $p$ and the natural $G_K$-action. Crystallinity of $T_pA$ means crystallinity of $V_pA$ [@gunton2021crystalline, Definition 3.1(v), p. 54]. Good reduction means that $A$ extends to an abelian scheme over $\mathcal O_K$.

**Criterion (Coleman–Iovita).** One has
$$
A\text{ has good reduction}\quad\Longleftrightarrow\quad V_pA\text{ is crystalline}.
$$
No semistability or bound on the ramification index is assumed. The original statement even allows any complete discretely valued characteristic-zero field with perfect residue field of characteristic $p$ [@colemaniovita1999, Introduction, unnumbered theorem and following paragraph, p. 3]. The case $p=2$ is included [@gunton2021crystalline, §5, p. 75]. Gunton gives a later proof phrased as $1$-crystallinity [@gunton2021crystalline, Corollary 5.5, p. 77]. This agrees with crystallinity here because $V_pA$ always has Hodge–Tate weights in $[0,1]$ [@gunton2021crystalline, Definition 3.1(v) and Example 3.4, p. 54].

**Semistable refinement.** If $A$ has semistable reduction, its Raynaud extension fits into
$$
0\longrightarrow T\longrightarrow\widetilde A\longrightarrow B\longrightarrow0,
$$
where $T/\mathcal O_K$ is a torus and $B/\mathcal O_K$ an abelian scheme [@gunton2021crystalline, §2.1, equation (2.3), pp. 46–47]. Let $\operatorname{Crys}_1(T_pA)$ be the largest $G_K$-stable submodule whose rationalization is crystalline with Hodge–Tate weights in $[0,1]$, using the convention that $\mathbb Q_p(1)$ has weight $1$ [@gunton2021crystalline, §3.1 and Definition 3.1, pp. 53–54; Definition 3.13 and Proposition 3.14, p. 57]. The natural inclusion identifies
$$
T_p(\widetilde A_K)\cong\operatorname{Crys}_1(T_pA)
$$
[@gunton2021crystalline, Theorem 5.3, p. 76].

**Role for curves.** Andreatta–Iovita–Kim remark that crystallinity of their second universal unipotent object makes the Jacobian's Tate module crystalline, so the Jacobian has good reduction by this theorem [@andreattaiovitakim2015, paragraph following Theorem 1.9, p. 5]. That alone does not force good reduction of the curve [@andreattaiovitakim2015, §1, p. 2]. Their proof of the [nonabelian crystalline criterion](crystalline-fundamental-group-good-reduction.md) proceeds through monodromy, residues of logarithmic connections, and Oda's degeneration criterion [@andreattaiovitakim2015, §6.2, Lemma 6.2 and Proposition 6.3, pp. 30–32].
