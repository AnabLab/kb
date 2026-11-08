---
title: Filtered abelianized Galois groups do not determine p-adic fields
kind: theorem
summary: 'The non-isomorphic local fields $\mathbb Q_5(\sqrt5)$ and $\mathbb Q_5(\sqrt{10})$ have isomorphic abelianized Galois groups preserving every upper ramification group and unramified Frobenius. Thus the metabelian threshold in filtered local reconstruction is sharp.'
tags: [local-fields, galois-groups, ramification, counterexample]
edges:
  - {to: ramification-filtration, label: uses}
  - {to: m-step-solvable-filtered-local-fields, label: motivated-by, note: "The example proves that the metabelian quotient in the target's weak form cannot be replaced by the abelian quotient."}
  - {to: abelian-galois-group-does-not-determine-number-field, label: analogous-to, note: "Here the fields are local and even the full ramification filtration on the abelianization is retained."}
---

**Statement.** Put $K=\mathbb Q_5(\pi)$ with $\pi^2=5$, and $L=\mathbb Q_5(\rho)$ with $\rho^2=10$. These local fields are not isomorphic, but there is a continuous isomorphism

$$\alpha:G_K^{\mathrm{ab}}\longrightarrow G_L^{\mathrm{ab}}$$

carrying $(G_K^{\mathrm{ab}})^u$ onto $(G_L^{\mathrm{ab}})^u$ for every real $u\ge-1$, for the quotient upper-numbering filtrations. It also matches arithmetic Frobenius in the unramified quotients. The example and the proof below are established here from local reciprocity and the $5$-adic logarithm.

**Proof.** Both defining polynomials are Eisenstein, so both fields have ramification index $2$ and residue field $\mathbb F_5$. For either pair $(F,\varpi)=(K,\pi)$ or $(L,\rho)$, normalize $v_F(\varpi)=1$. The two terms of $a+b\varpi$, for $a,b\in\mathbb Q_5$, have valuations $2v_5(a)$ and $2v_5(b)+1$, which cannot cancel. Consequently

$$\begin{aligned}
\mathcal O_F&=\mathbb Z_5\oplus\mathbb Z_5\varpi,\\
\mathfrak m_F^{2r}&=5^r\mathbb Z_5\oplus5^r\mathbb Z_5\varpi,\\
\mathfrak m_F^{2r+1}&=5^{r+1}\mathbb Z_5\oplus5^r\mathbb Z_5\varpi\quad(r\ge0).
\end{aligned}$$

Here $\mathfrak m_F=(\varpi)$ and $(\varpi^2)=(5)$. Thus the additive $\mathbb Z_5$-linear homeomorphism $T:K\to L$ given by $T(a+b\pi)=a+b\rho$ carries $\mathfrak m_K^n$ onto $\mathfrak m_L^n$ for every $n\ge0$.

Write $U_F^n=1+\mathfrak m_F^n$ for $n\ge1$. With the absolute value extending $|5|_5=1/5$, every element of $\mathfrak m_F$ has absolute value at most $5^{-1/2}<5^{-1/4}$. The logarithm is a group homomorphism, isometric and inverse to the exponential on this disc [@conradinfinitepadic, Theorems 8.5, 8.7 and 8.13, pp. 27–30]. Therefore

$$h=\exp_L\circ T\circ\log_K:U_K^1\longrightarrow U_L^1$$

is a topological group isomorphism with $h(U_K^n)=U_L^n$ for every $n\ge1$.

Hensel lifting identifies the fourth roots of unity $\mu_4\subset\mathbb Q_5$ with $\mathbb F_5^\times$. Hence $F^\times=\varpi^{\mathbb Z}\times\mu_4\times U_F^1$. The map

$$\pi^j\zeta u\longmapsto\rho^j\zeta h(u)\qquad(j\in\mathbb Z,\ \zeta\in\mu_4,\ u\in U_K^1)$$

is a topological multiplicative-group isomorphism preserving units and every principal-unit subgroup. Local reciprocity identifies the profinite completion $\widehat{F^\times}=\varpi^{\widehat{\mathbb Z}}\times\mathcal O_F^\times$ with $G_F^{\mathrm{ab}}$ [@milnecft, Chapter I, Remark 1.10, p. 23]. Units correspond to inertia and $U_F^n$ to $(G_F^{\mathrm{ab}})^n$ [@milnecft, Chapter I, Remark 1.11, p. 24]. Completing the displayed map therefore gives $\alpha$, matching these groups at every nonnegative integer. Hasse–Arf and the quotient compatibility of upper numbering extend this to all positive real indices [@milnecft, Chapter I, Proposition 4.4 and Theorem 4.6, pp. 46–47]. At $-1$ the group is the whole Galois group, and between $-1$ and $0$ it is inertia. Uniformizers map to arithmetic Frobenius on the unramified quotient [@milnecft, Chapter I, Theorem 1.1(a), p. 20], so $\alpha$ matches it as well.

Finally, a continuous field isomorphism would fix $\mathbb Q_5$, by density of $\mathbb Q$. If $\sqrt5=a+b\rho$ in $L$, squaring gives $2ab=0$ and $a^2+10b^2=5$. The case $b=0$ is impossible by the odd valuation of $5$; the case $a=0$ would make $1/2$ a square in $\mathbb Q_5$, although its residue $3$ is nonsquare in $\mathbb F_5$. Thus $K$ and $L$ are not isomorphic. $\square$

**Consequence.** Hyeon's theorem says that the filtered maximal metabelian quotient determines the isomorphism class of a $p$-adic field [@hyeon2025, Theorem 1.2, p. 2]. The example shows that solvable length $2$ is minimal for that statement. The obstruction at length $1$ persists through every ramification depth in these two fixed fields.
