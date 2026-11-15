---
title: Bloch–Kato local conditions for Tate twists are group-theoretic
kind: theorem
summary: 'Every isomorphism of p-adic absolute Galois groups preserves the exponential, crystalline and de Rham local conditions in H1 with rational Tate coefficients. Only twists 0 and 1 need a proper nonzero subspace: unramified characters and their cup-product annihilator.'
tags: [local-fields, galois-cohomology, hodge-theory, reconstruction]
edges:
  - {to: bloch-kato-local-conditions, label: uses, note: 'Specializes the local conditions and their exact-annihilator duality to rational Tate twists.'}
  - {to: local-field-galois-invariants, label: uses, note: 'Transport uses functorial recovery of inertia and the cyclotomic character.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: analogous-to, note: 'At twist 1, the crystalline Kummer subspace is the annihilator of unramified characters.'}
---

**Data.** Let $K/\mathbb Q_p$ be finite, write $H^i(K,-)$ for continuous Galois cohomology, and put
$$
U_K=\operatorname{Hom}_{\mathrm{cont}}(G_K/I_K,\mathbb Q_p)
\subset H^1(K,\mathbb Q_p).
$$
Define its annihilator using cup product, without choosing a local invariant map:
$$
U_K^\perp=\{c\in H^1(K,\mathbb Q_p(1)):
u\cup c=0\text{ in }H^2(K,\mathbb Q_p(1))\text{ for every }u\in U_K\}.
$$
Use the [Bloch–Kato conditions](bloch-kato-local-conditions.md) $H^1_e,H^1_f,H^1_g$.

**Explicit description.** For an integer $r$, set $H_r=H^1(K,\mathbb Q_p(r))$. The local conditions are:

- If $r<0$, all three subspaces are zero.
- If $r=0$, then $H^1_e=0$ and $H^1_f=H^1_g=U_K$.
- If $r=1$, then $H^1_e=H^1_f=U_K^\perp$ and $H^1_g=H_1$.
- If $r\ge2$, all three subspaces equal $H_r$.

The vanishing and whole-space assertions, the equality $H^1_f(K,\mathbb Q_p)=U_K$, and the dimensions needed for the remaining equalities are given in [@blochkato1990tamagawa, Example 3.9, p. 359]. Indeed, the nested spaces $H^1_f,H^1_g$ at $r=0$ both have dimension one, while $H^1_e,H^1_f$ at $r=1$ both have dimension $[K:\mathbb Q_p]$. Exact-annihilator duality gives $H^1_f(K,\mathbb Q_p(1))=U_K^\perp$ [@blochkato1990tamagawa, Proposition 3.8, p. 354]. This proves the description.

**Transport theorem (proved here).** For finite $L/\mathbb Q_p$, let $\alpha:G_L\xrightarrow{\sim}G_K$ be a continuous isomorphism. For every $r\in\mathbb Z$ and $*\in\{e,f,g\}$, pullback satisfies
$$
\alpha^*H^1_*(K,\mathbb Q_p(r))=H^1_*(L,\mathbb Q_p(r)).
$$
This includes $p=2$.

*Proof.* Inertia and the cyclotomic character are functorially determined by the group: $\alpha(I_L)=I_K$ and $\chi_K\circ\alpha=\chi_L$ [@mochizuki1997, Proposition 1.1 and Corollary 1.3, p. 3]. The character equality identifies the pulled-back coefficient module with $\mathbb Q_p(r)$ over $L$, for every $r$. The inertia equality identifies the characters vanishing on inertia, so $\alpha^*U_K=U_L$.

Pullback commutes with cup product and induces an isomorphism on $H^2$ with coefficients $\mathbb Q_p(1)$. Hence $u\cup c$ vanishes exactly when $\alpha^*u\cup\alpha^*c$ vanishes. Since pullback also bijects $U_K$ with $U_L$, it carries $U_K^\perp$ onto $U_L^\perp$. Apply the explicit description: every subspace occurring there is zero, the whole cohomology group, $U_K$, or $U_K^\perp$. $\square$

**Extension consequence (proved here).** For any $r$, pulling back an extension
$$
0\longrightarrow\mathbb Q_p(r)\longrightarrow E\longrightarrow\mathbb Q_p\longrightarrow0
$$
along $\alpha$ preserves whether $E$ is crystalline and whether it is de Rham. Its extension class belongs to $H^1_f$ exactly in the crystalline case, and to $H^1_g$ exactly in the de Rham case [@blochkato1990tamagawa, remark after (3.7.4), p. 354]. Apply the transport theorem.

For $r=1$, this gives an intrinsic description of the crystalline [Kummer subspace](kummer-extensions-and-tate-curve-periods.md), namely the rationalized completion of $\mathcal O_K^\times$ [@brinonconrad2009, Lemma 8.3.9 and proof, p. 125]. The transport statement recovers these local-condition subspaces; it makes no assertion about transporting exponential maps or filtered period modules.
