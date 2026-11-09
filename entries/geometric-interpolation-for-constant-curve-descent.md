---
title: Geometric interpolation and full étale descent for constant curves
kind: theorem
summary: 'For proper curves over a finite field, a locally constant adelic point survives every finite étale function-field torsor exactly when one constants-compatible fundamental-group map interpolates its point sections up to geometric conjugacy.'
tags: [curves, fundamental-groups, function-fields, finite-fields]
edges:
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: addresses, note: "Repairs the geometric-conjugacy step of Proposition 3.3 and the function-field torsor step of Lemma 3.7 of Creutz–Voloch; does not prove the injectivity in Theorem 3.8."}
  - {to: chebotarev-density-for-arithmetic-schemes, label: uses, note: "Applied to finite étale covers of the source curve to prove finiteness of local cohomology fibres."}
  - {to: descent-obstructions-for-galois-sections, label: analogous-to, note: "Adapts the twisted finite-kernel argument of Harari–Stix to maps over the finite constants field, rather than directly invoking their number-field theorem."}
  - {to: etale-descent-conjecture-for-constant-curves, label: addresses, note: "Identifies its descent locus with the points admitting geometric interpolation; does not identify that locus with limits of morphisms."}
---

**Setting.** Let $\mathbb F$ be finite and let $C,D$ be smooth, proper, geometrically integral curves over $\mathbb F$. Put $K=\mathbb F(D)$, $\Gamma=G_{\mathbb F}$, $\Pi_X=\pi_1(X)$, and $\Delta_X=\pi_1(X_{\bar{\mathbb F}})$. Write $p_X:\Pi_X\to\Gamma$. Fix the local embeddings and decomposition sections $t_v:G_{\mathbb F_v}\to\Pi_D$ as in [the existing descent entry](etale-descent-and-fundamental-group-maps-over-finite-fields.md). For $x=(x_v)\in\prod_v C(\mathbb F_v)$, choose point sections $s_{x_v}:G_{\mathbb F_v}\to\Pi_C$, up to $\Delta_C$-conjugacy.

Write $S_{\mathbb F}$ for the points $x$ surviving all torsors $P\to C$ under finite étale $\mathbb F$-group schemes: the evaluations of the base-changed torsor must lie in the image of $H^1(K,G)\to\prod_v H^1(K_v,G)$. Write $S_{\mathrm{\acute et}}$ for survival against every torsor over $C_K$ under every finite étale $K$-group scheme, including those not defined over $\mathbb F$.

**Theorem (proved here).** The following conditions on $x$ are equivalent:

1. $x\in S_{\mathrm{\acute et}}$.
2. $x\in S_{\mathbb F}$.
3. There is a continuous $\phi:\Pi_D\to\Pi_C$ with $p_C\phi=p_D$ and, for every $v$, a $\gamma_v\in\Delta_C$ such that
   $$\phi t_v=\gamma_v s_{x_v}\gamma_v^{-1}.$$

Such a $\phi$ is well behaved: it sends each decomposition group to an open subgroup of a decomposition group. Conversely, any well-behaved $\phi$ over $\Gamma$, together with any choices of containing decomposition groups, gives a point in $S_{\mathrm{\acute et}}$. No genus bound is needed for these assertions. In genus at least two, this checks the existence and full-descent steps of the correspondence asserted in Creutz–Voloch, but does not prove uniqueness of $\phi$ modulo $\Delta_C$ [@creutzvoloch2024, Proposition 3.3 and Lemma 3.7, pp. 6–8; Theorem 3.8, p. 8].

**Proof.** The implication 1 $\Rightarrow$ 2 is immediate. We prove the other implications, including the finiteness needed to pass to a limit. The finite-kernel construction is adapted from Harari–Stix [@hararistix2012, Proposition 1.2, pp. 6–7]. Their introduction assumes characteristic zero; the argument below uses only finite étale torsors and proves the needed positive-characteristic assertions explicitly.

*A finiteness fact.* Let $A$ be a finite group with continuous $\Pi_D$-action. Each fibre of
$$H^1(\Pi_D,A)\longrightarrow\prod_v H^1(G_{\mathbb F_v},A)$$
is finite, where restriction uses $t_v$. To see this, twist by one class in a nonempty fibre. This identifies that fibre with the kernel of the local restriction map for a possibly different action on the same finite group. Choose an open normal subgroup $L\subset\Pi_D$ acting trivially on the twisted group. A cocycle locally cohomologous to $1$ restricts to a homomorphism on $L$ that vanishes on every $L\cap g t_v(G_{\mathbb F_v})g^{-1}$. These are the decomposition groups of the connected finite étale cover of $D$ associated to $L$. Their conjugates have dense union by [Chebotarev](chebotarev-density-for-arithmetic-schemes.md), even if the cover has a larger constants field. Thus the restriction to $L$ is trivial, and the cocycle factors through the finite group $\Pi_D/L$. There are only finitely many such cocycles. This also proves finiteness of actual cocycle representatives in each original fibre, since $A$ is finite. It is the twisting argument of Harari–Stix's finiteness lemma, applied to unramified groups [@hararistix2012, Lemma 1.4, pp. 8–9].

*2 $\Rightarrow$ 3: finite kernels.* Choose a section $\sigma:\Gamma\to\Pi_C$. It exists without a rational point: a lift of the arithmetic Frobenius defines a homomorphism from $\widehat{\mathbb Z}=\Gamma$, and its projection is the identity. Let $N$ run over the subgroups $\Delta_C\cap U$ for open normal $U\subset\Pi_C$. They are normal in $\Pi_C$, open in $\Delta_C$, and cofinal among its neighbourhoods of $1$. Put
$$A_N=\Delta_C/N,\qquad E_N=\Pi_C/N=A_N\rtimes\Gamma,$$
using $\sigma$, and let $q_N:\Pi_C\to E_N$. Give $A_N$ the $\Gamma$-action by conjugation through $\sigma$. It defines a finite étale $\mathbb F$-group scheme, usually nonconstant. The function
$$a_N(g)=q_N(g)q_N(\sigma(p_C(g)))^{-1}\in A_N$$
is a continuous cocycle. It therefore defines a torsor over $C$ under that group scheme. This classification and its functorial evaluation follow from the equivalence between finite étale covers and finite fundamental-group sets, valid in every characteristic [@stacks2026, Theorem 58.6.2, tag 0BND].

If $x\in S_{\mathbb F}$, its evaluations give a class $b_N\in H^1(K,A_N)$ restricting at every $v$ to the inflation of $s_{x_v}^*a_N$. The coefficient action factors through $\Gamma$, so inertia at every $v$ acts trivially. A cocycle representing $b_N$ kills that inertia: locally it is cohomologous to an unramified cocycle, and conjugating a cocycle cannot change whether its restriction to a subgroup acting trivially is $1$. The coefficient action and cocycle consequently factor through the everywhere unramified quotient $G_K\twoheadrightarrow\Pi_D$. Write $b_N$ also for the resulting cocycle on $\Pi_D$.

Twisting the homomorphism $q_N\sigma p_D$ by such a representative gives
$$\phi_N(d)=b_N(d)q_N(\sigma(p_D(d)))\in E_N.$$
It is a continuous homomorphism over $\Gamma$. Equality of the local cohomology classes means exactly that $\phi_Nt_v$ and $q_Ns_{x_v}$ are conjugate by $A_N$. Here inflation $H^1(\mathbb F_v,A_N)\to H^1(K_v,A_N)$ is injective: cocycles inflated from the residue quotient are cohomologous precisely when their residue cocycles are, since inertia acts trivially and the residue map is surjective.

Let $T_N$ be the set of all such $\phi_N$. It is nonempty, and finite by the finiteness fact, since maps over $\Gamma$ are cocycles relative to $q_N\sigma p_D$. Quotient maps give transition maps between these sets. An inverse system of nonempty finite sets over a directed index set has nonempty limit, by compactness; surjectivity of the transition maps is unnecessary. Its limit gives a continuous
$$\phi:\Pi_D\longrightarrow\varprojlim_N E_N=\Pi_C$$
over $\Gamma$. For each fixed $v$, the nonempty finite sets of conjugating elements in $A_N$ also form an inverse system. Their limit is an element $\gamma_v\in\varprojlim_N A_N=\Delta_C$ giving the required equality. Thus this step retains geometric, rather than only arithmetic, conjugacy.

*3 $\Rightarrow$ 1: all function-field torsors.* For any extension $k/\mathbb F$, proper geometric base change and the arithmetic fundamental exact sequence give
$$\pi_1(C_k)\simeq\Pi_C\times_\Gamma G_k.$$
Indeed, the natural map of the two arithmetic exact sequences is the identity on $G_k$ and an isomorphism on geometric kernels [@stacks2026, Lemma 58.9.3, tag 0A49] [@stacks2026, Lemma 58.14.3, tag 0BTX]. These isomorphisms are compatible with further field extension and point sections.

Let $r:G_K\twoheadrightarrow\Pi_D$ be the unramified quotient. Then
$$s:G_K\longrightarrow\pi_1(C_K),\qquad g\longmapsto(\phi(r(g)),g)$$
is a section. On $G_{K_v}$ its first component is $\phi t_v$ composed with the residue map, whereas the section of the constant local point $x_v$ has first component $s_{x_v}$ composed with that map. Condition 3 therefore makes these local sections conjugate by $\gamma_v\in\Delta_C$, embedded as $(\gamma_v,1)$.

Now let $P\to C_K$ be any torsor under a finite étale $K$-group scheme $G$, and put $M=G(K^{\mathrm{sep}})$. Its class is a cocycle class $\alpha\in H^1(\pi_1(C_K),M)$, with coefficient action through $G_K$. Pullback along $s$ gives a single class $s^*\alpha\in H^1(K,G)$. Geometric conjugation acts trivially on these pullback classes, since $\Delta_C$ acts trivially on $M$. Its localization at every $v$ is consequently the evaluation $\alpha(x_v)$. This proves survival of $P$, including ramified coefficient actions and torsors that do not descend to $\mathbb F$.

*Well-behaved maps.* A point section $s_{x_v}$ has image equal to a decomposition group intersected with $p_C^{-1}(G_{\mathbb F_v})$, an open subgroup of that decomposition group. Condition 3 implies the asserted property for $\phi$. Conversely, if $\phi$ is well behaved over $\Gamma$ and $\phi(t_v(G_{\mathbb F_v}))\subseteq D_{\tilde w}$, the projection $p_C$ is injective on $D_{\tilde w}$ and maps the left side onto $G_{\mathbb F_v}$. Hence
$$\phi(t_v(G_{\mathbb F_v}))=D_{\tilde w}\cap p_C^{-1}(G_{\mathbb F_v}).$$
The image of $\tilde w$ on $C_{\mathbb F_v}$ is an $\mathbb F_v$-point $x_v$ whose section is $\phi t_v$. The implication 3 $\Rightarrow$ 1 applies. $\square$

**Scope and checks.** No claim that two interpolating homomorphisms are globally geometrically conjugate follows from this argument. That injectivity step of Theorem 3.8, and the geometric-point surjectivity in Proposition 3.9, remain separate. The counterexample to subgroup-cohomology injectivity in the [earlier audit](etale-descent-and-fundamental-group-maps-over-finite-fields.md) is avoided: here the conjugation group is the kernel $A_N$ from the outset. Torsors under constant groups over $\mathbb F$ alone are not substituted for all finite étale $\mathbb F$-group schemes.

Properness supplies both geometric base change for $C$ and the everywhere unramified quotient associated to the complete source curve $D$. When $C=\mathbb P^1$, $\Delta_C=1$ and every tuple satisfies condition 3, consistently with all finite étale torsors on $C_K$ coming from $K$. When $x_v=x\in C(\mathbb F)$ is constant, $\phi=s_xp_D$ supplies condition 3 and the section $s$ above is the section of the $K$-point $x$.
