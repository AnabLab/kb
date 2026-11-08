---
title: Reconstructing function fields from Milnor K-theory
kind: theorem
summary: For finitely generated regular $F/k$ of transcendence degree at least $2$ over a perfect field, $F^\times/k^\times$ with the relation of algebraic dependence determines $F/k$ functorially (Cadoret–Pirutka). Over algebraically closed or finite fields, the Milnor K-ring detects that relation.
tags: [milnor-k-theory, function-fields]
edges:
  - {to: milnor-k-ring-does-not-determine-field, label: motivated-by, note: "This paper is motivated by the question recorded there [@cadoretpirutka2019, §1]."}
  - {to: bogomolov-pop-conjecture, label: analogous-to, note: "Milnor K-theory in place of Galois groups. The Bloch–Kato theorem relates the two at finite level [@topaz2016, §1.6]."}
  - {to: milnor-k-ring, label: uses}
---

**Algebraic dependence.** Let $k, k'$ be perfect fields of the same characteristic, and $F/k$, $F'/k'$ finitely generated regular extensions, at least one of transcendence degree $\ge2$. Field isomorphisms carrying $k$ to $k'$ correspond bijectively to isomorphisms $F^\times/k^\times\to F'^\times/k'^\times$ preserving algebraic dependence, modulo inversion on the target [@cadoretpirutka2019, Theorem 4].

**Detecting it.** For a function field $F/k$, call algebraically closed constants type $1$ and finite constants type $2$. Put $Q_*(F)=K^M_*(F)/D_*$, where $D_*$ is the ideal of infinitely $\ell$-divisible elements for a fixed prime $\ell\ne\mathrm{char}(F)$ in type $1$, and the torsion ideal in type $2$ [@cadoretpirutka2019, §§2.2–2.3]. For $x,y\in F^\times$,
$$
\{x,y\}=0\text{ in }Q_2(F)
\quad\Longleftrightarrow\quad
\mathrm{trdeg}_k k(x,y)\le1
$$
[@cadoretpirutka2019, Theorem 7].

For a fixed prime-power modulus, vanishing of a symbol can instead occur for algebraically independent functions with independent Kummer classes; see the [explicit finite-level counterexample](finite-level-cup-vanishing-and-algebraic-dependence.md). That example's symbol survives at the next prime-power level and is not infinitely divisible.

**Consequence.** For function fields of the same type and characteristic, each of transcendence degree $\ge2$, field isomorphisms correspond bijectively to isomorphisms of $Q_*$ modulo the $\mathbb Z/2$ action multiplying degree $n$ by $(-1)^n$. Degrees $1,2$ and their product suffice [@cadoretpirutka2019, Corollary 10(b) and Remark 12].

**Earlier embedding theorem (characteristic $0$).** Let $K/k$, $L/l$ be function fields of transcendence degree $\ge2$ over algebraically closed fields of characteristic $0$. Write $\overline K^M_i$ for Milnor K-theory modulo infinitely divisible elements. Suppose an injective $\psi_1:\overline K^M_1(K)\to\overline K^M_1(L)$ admits a homomorphism $\psi_2$ in degree $2$ satisfying
$$
\psi_2(\{x,y\})=\{\psi_1(x),\psi_1(y)\}.
$$
If the image of $\psi_1$ is not contained in $E^\times/l^\times$ for any subfield $l\subset E\subset L$ of transcendence degree $1$ over $l$, then some rational power of $\psi_1$ is induced by a field embedding $K\to L$ [@bogomolovtschinkel2009milnor, Theorem 4, p. 3].

**Characteristic scope.** The original paper imposes characteristic $0$ before Theorem 2; Remark 3 announces an analogue in positive characteristic [@bogomolovtschinkel2009milnor, p. 2]. The survey states its Theorem 8 without this restriction [@bogomolovtschinkel2012, Theorem 8, p. 14]. The earlier embedding theorem above is recorded only in characteristic $0$; the Cadoret–Pirutka isomorphism theorem allows positive characteristic.
