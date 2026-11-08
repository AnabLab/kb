---
title: Tangential morphisms and their logarithmic construction
kind: definition
summary: Chosen equations for a normal-crossing boundary stratum define a tangential pullback on tame finite étale covers. Adjoining all prime-to-characteristic roots of the equations gives a logarithmic construction; the curve case recovers Deligne's tangential base points.
tags: [fundamental-groups, log-geometry, curves]
---

**Setting.** Here is the characteristic-zero local case. Let $k\subseteq\mathbb{C}$, let $U$ be a smooth affine $k$-variety, and let $D_1,\ldots,D_l$ be smooth principal divisors meeting transversely, with chosen equations $t_1,\ldots,t_l$. Put $Z=\bigcap_iD_i\ne\varnothing$ and $V=U\setminus\bigcup_iD_i$. These data specify a *tangential morphism* from $Z$ toward $V$, inducing a pullback of finite étale covers to $Z$. For $Z=\operatorname{Spec}k$ it is a rational tangential base point [@matsumoto1997tangential, publisher's chapter summary].

**Logarithmic construction.** Give $U$ its boundary log structure and $Z$ the pullback log structure, denoted $Z^{\log}$. Form the pro-fine-saturated log scheme
$$
\widetilde Z=Z^{\log}\mathbin{\times}_{\operatorname{Spec}\mathbb{Z}[\mathbb{N}^l]}
\operatorname{Spec}\mathbb{Z}[\mathbb{Q}_{\geq0}^l].
$$
The monoid extension means adjoining compatible roots of the boundary equations. Writing $\widetilde Z^{\mathrm{cl}}$ for the underlying pro-scheme with trivial log structure gives
$$
Z\longrightarrow\widetilde Z^{\mathrm{cl}}
\longleftarrow\widetilde Z\longrightarrow U^{\log},
\qquad
\pi_1(Z)\simeq\pi_1^{\log}(\widetilde Z)
\longrightarrow\pi_1^{\log}(U^{\log})\simeq\pi_1(V).
$$
Here the leftmost $Z$ has trivial log structure; fundamental groups require compatible base points, or may be read as groupoids. The first comparison uses invariance under nilpotent thickenings; the root tower makes Kummer étale covers strict étale. Pullback through this diagram gives Matsumoto's tangential functor $\tau^*:\operatorname{FEt}(V)\to\operatorname{FEt}(Z)$, where $\operatorname{FEt}$ denotes the category of finite étale covers [@hoshimatsumotonakayama2026tangential, §1 and Proposition 1, pp. 1–2].

Replacing $t_i$ by $s_i$ with $t_i=s_i u_i$ and $u_i|_Z=1$ preserves the construction. Also, infinitesimal homotopies give homotopies (natural isomorphisms) of tangential functors. For composable tangential morphisms with compatible boundary data, composition is compatible up to a canonical natural isomorphism [@hoshimatsumotonakayama2026tangential, §2, Proposition 2 and Remark 1, p. 2; §3, Proposition 3, p. 3]. In positive characteristic $p$, the source uses only roots of orders prime to $p$ and the boundary-tame covering category [@hoshimatsumotonakayama2026tangential, §1, pp. 1–2].

**Curve case.** Let $X$ be a smooth geometrically connected curve over $k$ and $z$ a $k$-rational missing point of its smooth completion. A local parameter $t$ at $z$ specifies a nonzero tangent vector by $dt(v)=1$. The associated tangential base point gives a section of
$$
1\longrightarrow\pi_1(X_{\bar k})\longrightarrow\pi_1(X)\longrightarrow G_k\longrightarrow1.
$$
In the Puiseux description, its section lets $\sigma\in G_k$ act on coefficients while fixing the compatible formal powers of $t$:
$$
\sum_i a_i t^{i/N}\longmapsto\sum_i\sigma(a_i)t^{i/N}.
$$
Rescaling the parameter can change the section. For a generator $\gamma$ of the particular geometric inertia subgroup at $z$ selected by this tangential base point, the resulting action is $\sigma(\gamma)=\gamma^{\chi(\sigma)}$, where $\chi$ is the cyclotomic character [@matsumoto2005lectures, §4.1, pp. 17–20, equation (11)].

For $X=\mathbb{P}^1\setminus\{0,1,\infty\}$, the parameter $t$ at $0$ gives $\overrightarrow{01}$, the base point used for the Galois action in the [Grothendieck–Teichmüller group](grothendieck-teichmuller-group.md) [@matsumoto2005lectures, §4.2, pp. 20–22]. See also the affine formulation of the [section conjecture](section-conjecture.md).
