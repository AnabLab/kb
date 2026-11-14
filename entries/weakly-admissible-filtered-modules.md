---
title: Colmez–Fontaine classification of semistable representations
kind: theorem
summary: 'Over a p-adic field, semistable rational Galois representations are equivalent to weakly admissible filtered Frobenius-monodromy modules. The period module recovers the representation; weak admissibility tests every Frobenius- and monodromy-stable subspace.'
tags: [local-fields, galois-groups, hodge-theory, reconstruction]
edges:
  - {to: p-adic-monodromy-theorem, label: analogous-to, note: 'That theorem characterizes representations that become semistable after finite extension; this one classifies semistable representations over the given field.'}
  - {to: crystalline-lattices-and-p-divisible-groups, label: analogous-to, note: 'Both describe a category of Galois representations through other data: rational filtered modules here, integral Tate modules and p-divisible groups there.'}
---

**Data.** Let $K/\mathbb Q_p$ be finite, $K_0$ its maximal unramified subfield, and $\sigma$ the Frobenius of $K_0$. A filtered $(\varphi,N)$-module is a finite-dimensional $K_0$-space $D$ with a bijective $\sigma$-semilinear $\varphi$, a nilpotent $K_0$-linear $N$ satisfying $N\varphi=p\varphi N$, and an exhaustive separated decreasing filtration on $D_K=K\otimes_{K_0}D$. Morphisms are $K_0$-linear maps commuting with $\varphi,N$ and preserving the filtration [@brinonconrad2009, Definition 8.2.5 and Lemma 8.2.8, pp. 112–113].

Set
$$
t_H(D)=\sum_i i\dim_K\operatorname{gr}^i(D_K),\qquad
t_N(D)=v_p(a),\quad \varphi(e)=ae\text{ on }\det D,
$$
where $e$ generates $\det D$ and $v_p(p)=1$; both numbers are zero for $D=0$. Here $\operatorname{gr}^i=\operatorname{Fil}^i/\operatorname{Fil}^{i+1}$. These are the Hodge and Newton numbers [@colmezfontaine2000, §§3.1–3.2, pp. 19–20]. The module is *weakly admissible* if
$$
t_H(D)=t_N(D),\qquad t_H(D')\le t_N(D')
$$
for every $\varphi,N$-stable $K_0$-subspace $D'\subseteq D$, with its induced filtration. Stability under both operators is required [@brinonconrad2009, Definition 8.2.9, p. 114].

**Theorem (Colmez–Fontaine).** Fix the usual embedding of Fontaine's $B_{\mathrm{st}}$ into $B_{\mathrm{dR}}$ using $\log_p(p)=0$ [@berger2004introduction, §II.3.3, p. 15]. Then
$$
V\longmapsto D_{\mathrm{st}}(V)=(B_{\mathrm{st}}\otimes_{\mathbb Q_p}V)^{G_K}
$$
is an exact tensor equivalence from continuous finite-dimensional [semistable](p-adic-monodromy-theorem.md) $\mathbb Q_p$-representations of $G_K$ to weakly admissible filtered $(\varphi,N)$-modules over $K$. Every such module is admissible, meaning that it occurs as $D_{\mathrm{st}}(V)$ [@colmezfontaine2000, Theorem A, p. 2; Proposition 4.2 and following paragraph, p. 23].

Its inverse is
$$
V_{\mathrm{st}}(D)=
\{x\in B_{\mathrm{st}}\otimes_{K_0}D:
\varphi(x)=x,\ N(x)=0,\ x\in\operatorname{Fil}^0(B_{\mathrm{dR}}\otimes_K D_K)\}.
$$
Here $\varphi$ acts on both tensor factors, $N=N_{B_{\mathrm{st}}}\otimes1+1\otimes N_D$, and the filtration is the tensor-product filtration. The $G_K$-action is on the period-ring factor. For weakly admissible $D$, this space has dimension $\dim_{K_0}D$ and recovers $D$ under $D_{\mathrm{st}}$ [@colmezfontaine2000, §4.1, p. 23 and Corollary (i)–(iii), p. 24].

**Crystalline case and scope.** The crystalline representations correspond exactly to $N=0$ [@brinonconrad2009, Lemma 9.2.12, p. 145]. The equivalence is rational and includes $p=2$, arbitrary ramification and arbitrary filtration range. It does not specify a stable integral lattice. For geometric realization of lattices with Hodge–Tate weights $0$ and $1$, see [crystalline lattices and p-divisible groups](crystalline-lattices-and-p-divisible-groups.md).
