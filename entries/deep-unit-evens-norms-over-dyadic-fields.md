---
title: Deep-unit Evens norms over dyadic fields
kind: theorem
summary: 'For an unramified quadratic extension of dyadic local fields, the index-two Evens norm vanishes on squareclasses represented by units of depth v(2)+1. An explicit class over the unramified quadratic extension of Q2 shows that depth v(2) need not suffice.'
tags: [local-fields, galois-cohomology, embedding-problems]
edges:
  - {to: roe-turturean-dyadic-presentation-manuscript, label: addresses, note: 'Checks Lemma 6.16 and its trace-form normalization (6.53), independently of the claimed presentation.'}
  - {to: frobenius-shift-lifting-problem, label: motivated-by, note: 'A quadratic obstruction calculation available over general dyadic fields; it supplies no full lift or unequal marked count.'}
---

**Setting.** Let $L/k$ be an unramified quadratic extension of finite extensions of $\mathbb Q_2$. Normalize $v_k$ and $v_L$ to have value group $\mathbb Z$, and put $e=v_k(2)=v_L(2)$. Let $\overline U_j(L)$ be the image of $1+\mathfrak p_L^j$ in $L^\times/L^{\times2}=H^1(L,\mathbb F_2)$. Write
$$
N^{\mathrm{Ev}}_{L/k}:H^1(L,\mathbb F_2)\longrightarrow H^2(k,\mathbb F_2)
$$
for the index-two Evens multiplicative transfer, which differs from the field norm and from additive corestriction.

**Vanishing.** One has
$$
N^{\mathrm{Ev}}_{L/k}(\alpha)=0\qquad(\alpha\in\overline U_{e+1}(L)).
\tag{1}
$$
This is [@roeturturean2026, Lemma 6.16, pp. 48–49]. The proof below checks this particular input to the [presentation manuscript](roe-turturean-dyadic-presentation-manuscript.md).

**Normalization and proof.** For a diagonal quadratic form $q=\langle c_1,\ldots,c_r\rangle$, use $w(q)=\prod_i(1+[c_i])$, with Kummer classes $[c_i]$. Kahn's transfer formula, and the expansion of the index-two multiplicative transfer, give
$$
w(\operatorname{Tr}_{L/k}\langle a\rangle)
=w(\operatorname{Tr}_{L/k}\langle1\rangle)
\bigl(1+[N_{L/k}(a)]+N^{\mathrm{Ev}}_{L/k}([a])\bigr)
\tag{2}
$$
[@kahn1984stiefelwhitney, Théorème 2, p. 224; §I.2.3–2.4, pp. 230–231]. Here $\operatorname{Tr}_{L/k}\langle a\rangle$ means $x\mapsto\operatorname{Tr}_{L/k}(ax^2)$.

Write $(x,y)=[x]\cup[y]$ additively in $\operatorname{Br}(k)[2]=H^2(k,\mathbb F_2)$. The Hilbert symbol is symmetric and bilinear, and $(x,y)=0$ precisely when $y$ is a norm from $k(\sqrt x)$ [@milnecft, III, Theorem 4.4, pp. 113–114]. Thus $(x,-x)=0$ and $(x,1-x)=0$: the relevant norms are those of $\sqrt x$ and $1+\sqrt x$. Consequently $(x,x)=(x,-1)$.

Represent $\alpha$ by $a=1+2b$, with $b\in\mathfrak p_L$. Write $L=k(\sqrt d)$, $a=u+v\sqrt d$, and $n=N_{L/k}(a)$. Then
$$
u=1+\operatorname{Tr}_{L/k}(b)\in\mathcal O_k^\times,
\qquad n=2u-1+4N_{L/k}(b).
$$
Completing the square in the trace form gives $\langle2u,2dn/u\rangle$, while the untwisted form is $\langle2,2d\rangle$. Taking degree two in (2) and simplifying by bilinearity gives
$$
N^{\mathrm{Ev}}_{L/k}([a])
=(2u,2dn/u)+(2,2d)+(d,n)
=(u,-d)+(2du,n).
\tag{3}
$$
Every unit is a norm from an unramified extension [@milnecft, III, Proposition 1.2, p. 98]. Hence $(u,d)=(d,n)=0$, and (3) becomes $(u,-1)+(2u,n)$.

Since $v_k(N_{L/k}(b))\ge2$, the ratio $n/(2u-1)$ lies in $1+\mathfrak p_k^{2e+2}$ and is a square: Hensel's criterion for $X^2-n/(2u-1)$ at $1$ applies because $2e+2>2v_k(2)$. Therefore
$$
N^{\mathrm{Ev}}_{L/k}([a])
=(u,-1)+(2u,2u-1)
=(u,-1)+(2u,-1)=(2,-1)=0.
$$
The last equality follows from $2=N_{k(i)/k}(1+i)$ if $i\notin k$, and is immediate otherwise. This proves (1).

**The preceding depth can fail (proved here).** Take $k=\mathbb Q_2$ and $L=k(\omega)$ with $\omega^2+\omega+1=0$. This extension is unramified quadratic. Put $s=1+2\omega$, so $s^2=-3$, $N_{L/k}(s)=3$, and $s\in1+2\mathcal O_L$. The form $x\mapsto\operatorname{Tr}_{L/k}(sx^2)$ is hyperbolic: in coordinates $x=X+Ys$ it is $-12XY$. Its $w_2$ is zero. The untwisted trace form is $\langle2,-6\rangle$, so (2) gives
$$
N^{\mathrm{Ev}}_{L/k}([s])
=(2,-6)+(-3,3)=(2,-3)\ne0.
$$
Indeed $(-3,3)=0$ and $(2,2)=(2,-1)=0$, while $2$ is not a norm from the unramified quadratic extension $k(\sqrt{-3})$: every such norm has even valuation. Thus $\overline U_e(L)$ cannot replace $\overline U_{e+1}(L)$ uniformly.

**Scope.** The unramified hypothesis is used both in the valuation estimates and in norm surjectivity on units. No assertion about ramified quadratic transfer, the full presentation of $G_{\mathbb Q_2}$, or the dyadic classification follows from this check alone.
