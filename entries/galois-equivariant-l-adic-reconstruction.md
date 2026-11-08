---
title: Reconstruction from integral ℓ-adic cohomology and a Galois action
kind: theorem
summary: 'For a regular function field of transcendence degree at least 3 over a perfect non-local field, Topaz recovers the field and constants up to perfect closure from integral ℓ-adic H1, zero cup products and the Galois action modulo unit scalars.'
tags: [function-fields, galois-cohomology, valuations, reconstruction]
edges:
  - {to: pop-reconstruction-from-divisorial-inertia, label: uses, note: "The final reconstruction applies Pop's theorem [@topaz2019galois, Theorem 5.5 and §5.3]."}
  - {to: quasi-prime-divisor, label: uses}
  - {to: divisorial-inertia-recovery-problem, label: addresses, note: "Distinguishes divisorial valuations using an additional Galois action over a perfect non-local field."}
  - {to: torelli-theorem-function-fields, label: analogous-to, note: "An arithmetic Galois action plays the role of the mixed Hodge structure."}
---

**Setting.** Fix a prime $\ell$. Let $k_0$ be perfect of characteristic different from $\ell$, neither real closed nor henselian for any nontrivial valuation. Let $K_0/k_0$ be a regular function field of transcendence degree $d \ge 3$, let $k = \overline{k_0}$ and put $K = K_0k$. Write
$$
\Gamma = \mathrm{Gal}(k/k_0), \qquad
V = H^1(K,\mathbb{Z}_\ell(1)), \qquad
R = \{(x,y)\in V^2 : x\cup y=0\}.
$$
Here cohomology is continuous Galois cohomology [@topaz2019galois, §1].

**Reconstruction.** The profinite group $\Gamma$, the complete $\mathbb{Z}_\ell$-module $V$, the subset $R$, and the $\Gamma$-action on the set $V/\mathbb{Z}_\ell^\times$ of unit-scalar orbits determine $K^i$, $K_0^i$, $k$, $k_0$ and their natural inclusions, uniquely up to Frobenius twists. Here $F^i$ denotes the perfect closure of $F$ [@topaz2019galois, Theorem A].

For another pair $L_0/l_0$ satisfying the same assumptions, suppose $\eta:\Gamma_K\to\Gamma_L$ is a profinite isomorphism and $\phi:V_K\to V_L$ an isomorphism of complete $\mathbb{Z}_\ell$-modules preserving $R$ in both directions, whose induced bijection on unit-scalar orbits is $\eta$-equivariant. Then, after rescaling $\phi$ by an $\ell$-adic unit, these maps are induced by a field isomorphism $K^i\to L^i$ carrying $K_0^i$ to $L_0^i$, unique up to Frobenius twists [@topaz2019galois, Theorem B].

**Detecting divisors.** For a [quasi-divisorial valuation](quasi-prime-divisor.md) $v$, let $\mathbb{U}_v\subset V$ be the closure of the Kummer image of $\mathcal{O}_v^\times$. The local theory recovers these submodules from $V$ and $R$ [@topaz2019galois, Theorem 3.3 and §5.3, step (2)]. Moreover,
$$
v\text{ is divisorial}\quad\Longleftrightarrow\quad
\mathrm{Stab}_\Gamma(\mathbb{U}_v)\text{ is open in }\Gamma
$$
[@topaz2019galois, Key Lemma 4.5]. This parameterization and criterion already work for $d\ge2$; the full reconstruction above uses $d\ge3$ [@topaz2019galois, §1.1].
