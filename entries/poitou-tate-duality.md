---
title: Poitou–Tate duality for finite Galois modules
kind: theorem
summary: 'For finite G_{K,S}-modules with order invertible outside S, Poitou–Tate duality gives a nine-term sequence and pairs the degree-one and degree-two localization kernels. Degree-two classes can be prescribed at a subset of S omitting one finite place.'
tags: [number-fields, galois-cohomology, local-fields]
edges:
  - {to: local-tate-duality, label: uses, note: "Local duality identifies the duals of the local terms and the maps adjoint to localization [@milne2006adt, I, p. 56, before Theorem 4.10]."}
---

**Setting.** Let $K$ be a number field, $S$ a finite set containing all archimedean places, and $G_{K,S}=\operatorname{Gal}(K_S/K)$, where $K_S$ is the maximal extension unramified outside $S$. Let $M$ be a finite discrete continuous $G_{K,S}$-module, with every prime dividing $\#M$ invertible in $\mathcal O_{K,S}$. Put $M^D=\operatorname{Hom}(M,\bar K^\times)$, with its natural Galois action, and $A^\vee=\operatorname{Hom}(A,\mathbb Q/\mathbb Z)$ for a finite abelian group $A$.

Write $H_S^i(M)=H^i(G_{K,S},M)$ and $P_S^i(M)=\prod_{v\in S}H_v^i(M)$. At finite places, $H_v^i(M)=H^i(K_v,M)$; at archimedean places use Tate cohomology. Thus $H_v^0(M)=M^{G_{K_v}}/(1+c)M$ at a real place, where $c$ is complex conjugation; all complex-place terms vanish [@milne2006adt, I, pp. 55–56].

**Duality (Poitou–Tate).** The following sequence is exact; all its groups are finite:
$$
\begin{aligned}
0&\longrightarrow H_S^0(M)\longrightarrow P_S^0(M)
\longrightarrow H_S^2(M^D)^\vee\\
&\longrightarrow H_S^1(M)\longrightarrow P_S^1(M)
\longrightarrow H_S^1(M^D)^\vee\\
&\longrightarrow H_S^2(M)\longrightarrow P_S^2(M)
\longrightarrow H_S^0(M^D)^\vee\longrightarrow0.
\end{aligned}
$$
The maps $P_S^i(M)\to H_S^{2-i}(M^D)^\vee$ are adjoint to localization under [local Tate duality](local-tate-duality.md). For $\mathcal X_S^i(M)=\ker(H_S^i(M)\to P_S^i(M))$, there is a canonical perfect pairing
$$\mathcal X_S^1(M)\times\mathcal X_S^2(M^D)\longrightarrow\mathbb Q/\mathbb Z$$
[@milne2006adt, I, Theorem 4.10, pp. 56–57; Corollary 4.15, p. 62].

**Prescription.** If $T\subseteq S$ omits at least one finite place of $S$, localization is surjective:
$$H_S^2(M)\longrightarrow\prod_{v\in T}H_v^2(M)$$
[@milne2006adt, I, Corollary 4.16, p. 62].

**Anabelian use.** Ivanov uses the pairing to identify the degree-two localization kernel with an $S$-class-group quotient in the [boundary decomposition-group argument](local-correspondence-at-the-boundary.md). This is the obstruction recorded in [local-global degree-two cohomology](brauer-local-global-principle.md) [@ivanov2014, proof of Proposition 3.5, p. 12].
