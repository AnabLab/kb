---
title: The p-adic monodromy theorem
kind: theorem
summary: 'For finite $K/\mathbb Q_p$, a continuous p-adic representation is de Rham exactly when it becomes semistable over a finite extension. A de Rham extension of two semistable representations is already semistable over $K$.'
tags: [local-fields, galois-groups, hodge-theory]
edges:
  - {to: fontaine-wintenberger-field-of-norms, label: uses, note: 'The proof uses cyclotomic $(\varphi,\Gamma)$-modules, constructed through the field of norms [@berger2004introduction, §§III.2.1–III.2.2, pp. 22–23].'}
  - {to: sen-operator-hodge-tate-criterion, label: analogous-to, note: 'Criteria for two different levels of p-adic Hodge regularity.'}
  - {to: crystalline-tate-module-good-reduction, label: analogous-to, note: 'Crystallinity of an abelian variety’s Tate module detects good reduction over the given field; the monodromy theorem concerns semistability after finite extension.'}
---

**Data.** Let $K/\mathbb Q_p$ be finite, $K_0$ its maximal unramified subfield, and $V$ a continuous $d$-dimensional $\mathbb Q_p$-representation of $G_K$. For Fontaine's period rings put
$$
D_{\mathrm{dR},K}(V)=(B_{\mathrm{dR}}\otimes_{\mathbb Q_p}V)^{G_K},\qquad
D_{\mathrm{st},K}(V)=(B_{\mathrm{st}}\otimes_{\mathbb Q_p}V)^{G_K}.
$$
The representation is *de Rham* if $\dim_K D_{\mathrm{dR},K}(V)=d$, and *semistable* if $\dim_{K_0}D_{\mathrm{st},K}(V)=d$. It is *potentially semistable* if $V|_{G_L}$ is semistable for some finite extension $L/K$ [@berger2004introduction, §I.2.3, pp. 6–7; §II.3.3, pp. 14–15; §II.5.2, p. 20].

**Theorem (p-adic monodromy).** One has
$$
V\text{ is de Rham}\quad\Longleftrightarrow\quad
V\text{ is potentially semistable}.
$$
The forward implication is Berger's theorem, using the differential-equation monodromy theorem of André, Kedlaya and Mebkhout [@berger2002differential, Theorems 5.19–5.20 and proof of Theorem 5.19, pp. 56–58]. The reverse inclusion is part of the period-ring hierarchy [@berger2004introduction, §I.3, p. 7]. The theorem includes $p=2$, with no ramification or weight bound.

**Proof mechanism in the source.** Berger associates to de Rham $V$ a differential equation $N_{\mathrm{dR}}(V)$ over a Robba ring with Frobenius. Differential monodromy supplies a basis of solutions after a finite extension and adjoining a logarithm. After a further finite cyclotomic extension, these solutions give $d$ semistable periods [@berger2002differential, §5.5, proof of Theorem 5.19, p. 58]. The construction of the underlying $(\varphi,\Gamma)$-module uses the [field of norms](fontaine-wintenberger-field-of-norms.md).

**Semistable extensions (Hyodo–Berger).** For an exact sequence of $G_K$-representations
$$
0\longrightarrow V_1\longrightarrow E\longrightarrow V_2\longrightarrow0
$$
with $V_1,V_2$ semistable, if $E$ is de Rham then $E$ is semistable over $K$ itself [@berger2002differential, Theorem 6.2 and Lemma 6.4, pp. 62–63]. For finite residue fields, the source credits Hyodo [@berger2002differential, opening of §6, p. 62].

**Reduction distinction.** Semistability allows nonzero monodromy: a Tate elliptic curve has a semistable, noncrystalline Tate module [@berger2004introduction, §II.3.3, p. 14]. The [good-reduction criterion](crystalline-tate-module-good-reduction.md) requires crystallinity over the field in question.
