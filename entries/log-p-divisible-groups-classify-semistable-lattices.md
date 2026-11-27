---
title: Log p-divisible groups classify semistable lattices with weights 0 and 1
kind: theorem
summary: 'Over a p-adic field, Tate modules identify dual representable log p-divisible groups with Galois-stable lattices in semistable representations with Hodge–Tate weights 0 and 1. On p^n-torsion, Galois acts by a finite flat action twisted by the Kummer cocycle of a uniformizer.'
tags: [local-fields, hodge-theory, galois-representations]
edges:
  - {to: crystalline-lattices-and-p-divisible-groups, label: uses, note: 'Bertapelle–Wang–Zhao use the crystalline classification, their Theorem A, to show that the Tate module of a log p-divisible group is semistable with weights 0 and 1 [@bertapellewangzhao2026log, Proposition 6.7 and proof, p. 32].'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, with any prime $p$ and any ramification, let $\pi$ be a uniformizer, and let $S=\operatorname{Spec}\mathcal O_K$ with its canonical log structure and the chart $\mathbb N\to\mathcal M_S$, $1\mapsto\pi$. Log $p$-divisible groups over $S$ are Kato's [@bertapellewangzhao2026log, Definition 3.2, p. 9], and "dual representable" means that each $p^n$-torsion subgroup has a Cartier dual that is again a finite Kummer log flat group log scheme [@bertapellewangzhao2026log, Definition 3.1 and (3.3), p. 9]. Hodge–Tate weights are normalized so that $\mathbb Q_p(1)$ has weight $1$, as in the source: its category of semistable lattices with weights in $\{0,1\}$ contains the Tate module of the Tate curve, an extension of $\mathbb Q_p$ by $\mathbb Q_p(1)$, and its filtered modules satisfy $\operatorname{Fil}^{-1}D_K=D_K$ and $\operatorname{Fil}^1D_K=0$ for the covariant $D_{\mathrm{st}}$ [@bertapellewangzhao2026log, §6.5, p. 36].

**Theorem (Bertapelle–Wang–Zhao).** For a dual representable log $p$-divisible group $H$ over $S$, the generic fibre $H_K=H\times_S\operatorname{Spec}K$ is a classical $p$-divisible group over $K$ [@bertapellewangzhao2026log, proof of Theorem 5.19, p. 28]. The functor $H\mapsto T_p(H):=T_p(H_K)$ is fully faithful, and its essential image consists exactly of the finite free $\mathbb Z_p$-modules $T$ with continuous $G_K$-action such that $T\otimes\mathbb Q_p$ is semistable with Hodge–Tate weights in $\{0,1\}$ [@bertapellewangzhao2026log, Theorem 6.12, p. 35]. The hypotheses there are that the residue field is perfect and $K$ is finite over $W(k)[1/p]$ [@bertapellewangzhao2026log, Introduction, condition (*), p. 2]; there is no condition on $p$.

**Kato's description.** Let $0\to H^\circ\to H\to H^{\mathrm{et}}\to0$ be the connected-étale sequence of $H$. Both $H^\circ$ and $H^{\mathrm{et}}$ are classical $p$-divisible groups over $\mathcal O_K$, and $H^{\mathrm{et}}$ is étale [@bertapellewangzhao2026log, §3.2.1, (3.17), p. 13]. By Kato's classification [@bertapellewangzhao2026log, Theorem 3.15, p. 13] there are a classical $p$-divisible group $H^{\mathrm{cl}}$ over $\mathcal O_K$ that is an extension of $H^{\mathrm{et}}$ by $H^\circ$, and a homomorphism $\beta:H^{\mathrm{et}}(1)\to H^\circ$, the Kato monodromy map, such that $H\cong\Phi(H^{\mathrm{cl}},\beta)$ [@bertapellewangzhao2026log, §6.1, p. 30]. Here $\Phi(H^{\mathrm{cl}},\beta)$ is the direct limit of the level-$n$ extensions below, built from the torsion subgroups $H^{\mathrm{cl}}[p^n]$ and the maps $\beta_n$ [@bertapellewangzhao2026log, §3.2, pp. 12–13]. At level $n$,
$$
H[p^n]\cong H^{\mathrm{cl}}[p^n]+_{\mathrm{Baer}}\Phi_2^n(\beta_n)
$$
as extensions of $H^{\mathrm{et}}[p^n]$ by $H^\circ[p^n]$ for the Kummer log flat topology. Here $\beta_n:H^{\mathrm{et}}[p^n](1)\to H^\circ[p^n]$ is induced by $\beta$, and $\Phi_2^n(\beta_n)$ is the pushout along $\beta_n$ of
$$
0\to H^{\mathrm{et}}[p^n](1)\to E_{\pi,p^n}\otimes_{\mathbb Z/p^n}H^{\mathrm{et}}[p^n]\to H^{\mathrm{et}}[p^n]\to0,
$$
where $E_{\pi,p^n}=H^{-1}(M_\pi\otimes^{\mathbb L}\mathbb Z/p^n)$ for the log 1-motive $M_\pi=[\mathbb Z\to\mathbb G_{m,\log}]$, $1\mapsto\pi$, is an extension of $\mathbb Z/p^n$ by $\mathbb Z/p^n(1)=\mu_{p^n}$ [@bertapellewangzhao2026log, (3.7)–(3.9), p. 11; (3.14), p. 13; §5.3 and diagram (5.9), p. 25]. The first summand is finite flat over $\mathcal O_K$ and killed by $p^n$, being the $p^n$-torsion of a classical $p$-divisible group.

**Galois action on torsion (deduced here).** Fix $n\ge1$ and $\varpi\in\bar K$ with $\varpi^{p^n}=\pi$, and put $\delta(g)=g(\varpi)/\varpi\in\mu_{p^n}$ for $g\in G_K$. Write
$$
A=H^\circ[p^n](\bar K),\qquad B=H^{\mathrm{cl}}[p^n](\bar K),\qquad X=H^{\mathrm{et}}[p^n](\bar K),
$$
so that $0\to A\xrightarrow{j}B\xrightarrow{q}X\to0$ is an exact sequence of $G_K$-modules, and let $b:\mu_{p^n}\otimes X\to A$ be the map induced by $\beta_n$. Then there is an isomorphism of abelian groups $B\cong T_p(H)/p^nT_p(H)$ under which $g\in G_K$ acts on $B$ by
$$
g*x=g x+j\bigl(b(\delta(g)\otimes q(gx))\bigr).
$$
Here $g x$ is the usual action on the points of the finite flat group scheme $H^{\mathrm{cl}}[p^n]$ over $\mathcal O_K$, which is killed by $p^n$. By the theorem, this describes $L/p^nL$ for every $G_K$-stable lattice $L$ in a semistable representation with Hodge–Tate weights in $\{0,1\}$.

*Proof.* (i) *Points.* Give $\operatorname{Spec}\bar K$ the log structure pulled back from $S$, which is trivial because $\pi$ is invertible. A Kummer morphism to a log scheme with trivial log structure is strict, as the source also notes for $H[p^n]\times_S\operatorname{Spec}K$ [@bertapellewangzhao2026log, proof of Theorem 5.19, p. 28]. So every Kummer log flat covering of $\operatorname{Spec}\bar K$ is an fppf covering, and it has a section because $\bar K$ is algebraically closed. Hence sheafification does not change sections over $\operatorname{Spec}\bar K$, so taking these sections is an exact functor on abelian sheaves and commutes with tensor products of sheaves of $\mathbb Z/p^n$-modules. It therefore carries the Baer sum, pushout and tensor product above to the same constructions on $G_K$-modules. Also $T_p(H)/p^n\cong H_K[p^n](\bar K)=H[p^n](\bar K)$, since $H_K$ is a $p$-divisible group.

(ii) *The Kummer extension.* On $\operatorname{Spec}\bar K$ the sheaf $\mathbb G_{m,\log}$ is $\mathbb G_m$, since the log structure is trivial. The triangle $M_\pi\xrightarrow{p^n}M_\pi\to M_\pi\otimes^{\mathbb L}\mathbb Z/p^n$ gives an exact sequence
$$
H^{-1}(M_\pi)(\bar K)\xrightarrow{p^n}H^{-1}(M_\pi)(\bar K)\to E_{\pi,p^n}(\bar K)\to H^0(M_\pi)(\bar K)\xrightarrow{p^n}H^0(M_\pi)(\bar K).
$$
Here $H^{-1}(M_\pi)(\bar K)=\{k:\pi^k=1\}=0$ and $H^0(M_\pi)(\bar K)=\bar K^\times/\pi^{\mathbb Z}$. So
$$
E_{\pi,p^n}(\bar K)=\{x\in\bar K^\times:x^{p^n}\in\pi^{\mathbb Z}\}/\pi^{\mathbb Z},
$$
with the natural $G_K$-action. It contains $\mu_{p^n}$, and $[x]\mapsto k\bmod p^n$, where $x^{p^n}=\pi^k$, maps it onto $\mathbb Z/p^n$ with kernel $\mu_{p^n}$. The class $\varepsilon=[\varpi]$ maps to $1$ and has order $p^n$. So, writing the group additively, $E_{\pi,p^n}(\bar K)=\mu_{p^n}\oplus(\mathbb Z/p^n)\varepsilon$, and $g\varepsilon=[\delta(g)\varpi]=\varepsilon+\delta(g)$.

(iii) *The pushout.* Hence $E_{\pi,p^n}(\bar K)\otimes X=(\mu_{p^n}\otimes X)\oplus(\varepsilon\otimes X)$, with $g(\varepsilon\otimes x)=\varepsilon\otimes gx+\delta(g)\otimes gx$. The pushout $P$ along $b$ is therefore $A\oplus X$ as a group, where $x\in X$ stands for the image $\sigma(x)$ of $\varepsilon\otimes x$, and
$$
g\bigl(a+\sigma(x)\bigr)=ga+b(\delta(g)\otimes gx)+\sigma(gx).
$$

(iv) *The Baer sum.* The Baer sum is $Y=\{(y,z)\in B\times P: q(y)=\bar z\}/\{(j(a),-a):a\in A\}$, where $\bar z$ is the image of $z$ in $X$. The map $\theta:B\to Y$, $y\mapsto[(y,\sigma(q(y)))]$, is a homomorphism, restricts to the canonical inclusion of $A$ and is compatible with the maps to $X$. By the five lemma it is an isomorphism. Using $q(gy)=g\,q(y)$ and the relation $(j(a),0)\sim(0,a)$,
$$
g\,\theta(y)=\bigl[\bigl(gy,\ b(\delta(g)\otimes q(gy))+\sigma(q(gy))\bigr)\bigr]=\bigl[\bigl(gy+j(b(\delta(g)\otimes q(gy))),\ \sigma(q(gy))\bigr)\bigr]=\theta(g*y).\qquad\square
$$

**Example.** Take $H^{\mathrm{cl}}=\mu_{p^\infty}\times\mathbb Q_p/\mathbb Z_p$ and let $\beta$ be the identity of $\mu_{p^\infty}=(\mathbb Q_p/\mathbb Z_p)(1)$. Then $B=\mu_{p^n}\oplus\mathbb Z/p^n$, and the formula reads $g*(\zeta,k)=(g(\zeta)\delta(g)^k,k)$. This is the reduction modulo $p^n$ of the lattice $\mathbb Z_pe\oplus\mathbb Z_pf$ in the extension of $\mathbb Q_p$ by $\mathbb Q_p(1)$ with Kummer class $\pi$, the Tate module of the Tate curve with parameter $\pi$, on which $g(e)=\chi_{\mathrm{cyc}}(g)e$ and $g(f)=f+c_\pi(g)e$ (see [Kummer extensions and Tate curves](kummer-extensions-and-tate-curve-periods.md)): take $\varpi$ and $\zeta_{p^n}$ to be the $n$th members of the compatible systems defining $c_\pi$, so that $\delta(g)=\zeta_{p^n}^{c_\pi(g)}$, and send $e$ to $(\zeta_{p^n},0)$ and $f$ to $(1,1)$.
