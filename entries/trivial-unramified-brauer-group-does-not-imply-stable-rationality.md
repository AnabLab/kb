---
title: Vanishing unramified Brauer groups do not imply stable rationality
kind: theorem
summary: For every odd prime p, explicit class-two groups of order p^9 have complex invariant fields with trivial unramified Brauer group but nonzero degree-three unramified cohomology. These fields are not stably rational.
tags: [function-fields, galois-cohomology, rationality]
edges:
  - {to: unramified-cohomology, label: uses}
  - {to: unramified-brauer-group-from-abelian-by-central-galois-group, label: analogous-to, note: "The recovered Brauer invariant can vanish while a degree-three unramified obstruction to stable rationality survives."}
---

**Explicit example (Hoshi–Kang–Yamasaki).** Fix an odd prime $p$. Let $G$ be the exponent-$p$, class-two group with central subgroup
$$
V=Z(G)=[G,G]=\langle v_1,v_2,v_3\rangle\cong\mathbb F_p^3,
\qquad U=G/V\cong\mathbb F_p^6,
$$
whose quotient basis lifts to $u_1,\ldots,u_6$, with
$$
\begin{aligned}
[u_1,u_2]=[u_3,u_4]&=v_1,\\
[u_1,u_4]=[u_2,u_5]=[u_3,u_6]&=v_2,\\
[u_3,u_5]=[u_4,u_6]&=v_3.
\end{aligned}
$$
Here $[a,b]=aba^{-1}b^{-1}$, and the other commutators $[u_i,u_j]$ with $i<j$ are trivial. This is the order-$p^9$ group in [@hoshikangyamasaki2016, Theorems 1.4 and 2.4, pp. 3–4].

Put $F=\mathbb C(x_g:g\in G)^G$, with independent variables and action $h(x_g)=x_{hg}$. Then
$$
\operatorname{Br}_{\mathrm{nr}}(F/\mathbb C)=0,
\qquad H^3_{\mathrm{nr}}(F/\mathbb C,\mathbb Q/\mathbb Z)\ne0
$$
[@hoshikangyamasaki2016, Theorem 2.4, p. 4]. Unramified cohomology uses residues at divisorial valuations trivial on $\mathbb C$, with Tate twists suppressed. Stable rationality means that adjoining finitely many independent variables makes $F$ purely transcendental over $\mathbb C$. Such a field has zero unramified cohomology in every degree at least two, so $F$ is not stably rational [@hoshikangyamasaki2016, §1 and Theorem 1.4, pp. 2–3].

**Cited mechanism.** The commutator map $\gamma:\bigwedge^2U\to V$ defines
$$
K^2=\gamma^*(V^*),\qquad K^3=K^2\wedge U^*,\qquad S^d=(K^d)^\perp\quad(d=2,3).
$$
Let $S^d_{\mathrm{dec}}$ be spanned by the elements of $S^d$ of the form $a\wedge b$, with $a\in\bigwedge^{d-1}U$ and $b\in U$, and put $K^d_{\max}=(S^d_{\mathrm{dec}})^\perp$. Peyre's criterion identifies $K^2_{\max}/K^2$ with the unramified Brauer group and embeds $K^3_{\max}/K^3$ into $H^3_{\mathrm{nr}}(F/\mathbb C,\mathbb Q/\mathbb Z)$ [@hoshikangyamasaki2016, Definition 2.2 and Theorem 2.3, p. 4]. The cited calculation gives
$$
S^2=S^2_{\mathrm{dec}},\qquad
\dim_{\mathbb F_p}(S^3/S^3_{\mathrm{dec}})=1
$$
[@hoshikangyamasaki2016, proof of Theorem 2.4, Steps 2–4, pp. 5–6]. This supplies a degree-three obstruction beyond the [recoverable unramified Brauer invariant](unramified-brauer-group-from-abelian-by-central-galois-group.md).
