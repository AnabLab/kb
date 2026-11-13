---
title: Bloch–Kato local conditions and the exponential map
kind: theorem
summary: 'Period rings cut out exponential, finite and de Rham subspaces of local Galois cohomology. Bloch–Kato identify their exact annihilators under Tate duality and compute the finite part from Frobenius and the de Rham filtration.'
tags: [local-fields, galois-cohomology, hodge-theory]
edges:
  - {to: local-tate-duality, label: uses, note: 'The annihilator theorem refines local Tate duality for rational p-adic representations.'}
  - {to: p-adic-monodromy-theorem, label: uses, note: 'Berger’s criterion comparing the geometric and exponential parts uses the semistability of de Rham extensions of semistable representations.'}
  - {to: kummer-theory, label: uses, note: 'For formal-group Tate modules, the exponential is the classical exponential followed by the Kummer map.'}
---

**Conditions.** Let $K/\mathbb Q_p$ be finite and $V$ a continuous finite-dimensional $\mathbb Q_p$-representation of $G_K$. Write $H^i(K,-)$ for continuous cohomology, with every tensor product below over $\mathbb Q_p$. Set
$$
H^1_*(K,V)=\ker\bigl(H^1(K,V)\longrightarrow H^1(K,R_*\otimes V)\bigr),
\qquad
R_e=B_{\mathrm{cris}}^{\varphi=1},\quad
R_f=B_{\mathrm{cris}},\quad R_g=B_{\mathrm{dR}}.
$$
Then $H^1_e\subset H^1_f\subset H^1_g$. A class represents an extension $0\to V\to E\to\mathbb Q_p\to0$. If $V$ is crystalline, $E$ is crystalline exactly for classes in $H^1_f$; if $V$ is de Rham, $E$ is de Rham exactly for classes in $H^1_g$ [@blochkato1990tamagawa, (3.7.2) and the remark after (3.7.4), pp. 353–354].

**Exponential.** Assume henceforth that $V$ is de Rham. Put
$$
D_{\mathrm{cris}}(V)=(B_{\mathrm{cris}}\otimes V)^{G_K},\qquad
D_{\mathrm{dR}}(V)=(B_{\mathrm{dR}}\otimes V)^{G_K},\qquad
t_V=D_{\mathrm{dR}}(V)/\operatorname{Fil}^0D_{\mathrm{dR}}(V).
$$
Tensoring the fundamental exact sequence
$$
0\longrightarrow\mathbb Q_p\longrightarrow B_{\mathrm{cris}}^{\varphi=1}
\longrightarrow B_{\mathrm{dR}}/B_{\mathrm{dR}}^+\longrightarrow0
$$
with $V$ gives the connecting map $\exp_{K,V}$ and the exact sequence
$$
0\longrightarrow H^0(K,V)\longrightarrow D_{\mathrm{cris}}(V)^{\varphi=1}
\longrightarrow t_V\xrightarrow{\exp_{K,V}}H^1_e(K,V)\longrightarrow0.
$$
The middle map is reduction modulo $\operatorname{Fil}^0$. Thus the exponential need not inject, nor exhaust $H^1(K,V)$. For a finite-height formal group over $\mathcal O_K$, it agrees with the classical exponential followed by the [Kummer map](kummer-theory.md) on its rational Tate module [@berger2004introduction, §V.2, pp. 35–36].

**Finite part and duality (Bloch–Kato).** There is also an exact sequence of $\mathbb Q_p$-vector spaces
$$
0\longrightarrow H^0(K,V)\longrightarrow D_{\mathrm{cris}}(V)
\xrightarrow{x\mapsto((1-\varphi)x,\bar x)}
D_{\mathrm{cris}}(V)\oplus t_V
\longrightarrow H^1_f(K,V)\longrightarrow0.
$$
This is the sequence of Corollary 3.8.4 with the $\operatorname{Fil}^0D_{\mathrm{dR}}(V)$ summands quotiented out: the source's differential restricts to minus the identity on these summands, so removing them preserves exactness.
In particular,
$$
\dim_{\mathbb Q_p}H^1_f(K,V)=\dim_{\mathbb Q_p}t_V+\dim_{\mathbb Q_p}H^0(K,V),\qquad
H^1_f(K,V)/H^1_e(K,V)\cong
D_{\mathrm{cris}}(V)/(1-\varphi)D_{\mathrm{cris}}(V)
$$
[@blochkato1990tamagawa, Corollary 3.8.4, p. 355]. With $V^\vee=\operatorname{Hom}_{\mathbb Q_p}(V,\mathbb Q_p)$, the perfect Tate pairing
$$
H^1(K,V)\times H^1(K,V^\vee(1))\longrightarrow\mathbb Q_p
$$
satisfies
$$
H^1_e(K,V)^\perp=H^1_g(K,V^\vee(1)),\qquad
H^1_f(K,V)^\perp=H^1_f(K,V^\vee(1))
$$
[@blochkato1990tamagawa, Proposition 3.8, p. 354].

**A semistable criterion (Berger).** Put $D_{\mathrm{st}}(V)=(B_{\mathrm{st}}\otimes V)^{G_K}$. Suppose $V$ is semistable, $1-\varphi$ is surjective on $D_{\mathrm{st}}(V)$, and $D_{\mathrm{st}}(V)^{\varphi=1/p}=0$. Then
$$
H^1_g(K,V)=H^1_e(K,V).
$$
In the source's proof, the [semistable-extension theorem](p-adic-monodromy-theorem.md) supplies a semistable period $x$ for a de Rham extension class. Surjectivity permits adjusting $x$ by an element of $D_{\mathrm{st}}(V)$ until $\varphi(x)=x$. Then $N(x)$ is invariant and lies in the excluded $\varphi=1/p$ eigenspace, so $N(x)=0$ and $x$ is a Frobenius-fixed crystalline period [@berger2002differential, Lemma 6.6 and its proof, p. 64].
