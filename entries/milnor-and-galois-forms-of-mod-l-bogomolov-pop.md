---
title: The Milnor K-theory and Galois forms of the mod-ℓ Bogomolov–Pop conjecture agree
kind: theorem
summary: 'Over algebraically closed fields of characteristic not $\ell$, Kummer duality matches product-compatible isomorphisms of $K^\times/\ell$ with pairing-compatible isomorphisms of $G^a$, up to scalars. So the Milnor form claimed in a 2026 manuscript is equivalent to Topaz’s Conjecture 2.'
tags: [function-fields, galois-groups, milnor-k-theory, galois-cohomology]
edges:
  - {to: mod-l-bogomolov-pop-conjecture, label: addresses, note: "Shows that the conjecture is equivalent to the Milnor K-theory statement [@openai2026modl, Theorem 1.1], and that it holds trivially when the second field has characteristic ℓ or transcendence degree at most 1."}
  - {to: abelian-by-central-galois-group, label: uses}
  - {to: kummer-theory, label: uses, note: "The perfect Kummer pairing of $G^a_K$ with $K^\\times/\\ell$ [@topaz2016, §8.3, p. 37]."}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "Only its degree-two case, through [@topaz2016, Theorem 8.6]."}
  - {to: milnor-k-ring, label: uses}
  - {to: manuscripts-claiming-bogomolov-pop, label: motivated-by, note: "It places the claim of the second manuscript relative to the Galois form of the conjecture."}
---

**Milnor data.** Fix a prime $\ell$. For a function field $F$ over an algebraically closed field of characteristic different from $\ell$, put $V_F=F^\times/\ell$ and $W_F=K^M_2(F)/\ell$. Since $-1$ is an $\ell$-th power, $\{x,x\}=\{x,-1\}=0$, and the product gives a surjection $\wedge^2V_F\to W_F$ [@topaz2016, §8.3, p. 38]; let $N_F\subseteq\wedge^2V_F$ be its kernel. The manuscript writes $R_F\subseteq V_F\otimes V_F$ for the span of the $[x]\otimes[1-x]$, so that $W_F=(V_F\otimes V_F)/R_F$. A linear isomorphism $\Theta:V_K\to V_L$ is *compatible* if $(\Theta\otimes\Theta)(R_K)=R_L$, and $\mathrm{Isom}_M(V_K,V_L)$ is the set of these, with $\mathbb F_\ell^\times$ acting by multiplication [@openai2026modl, §1.1, p. 2].

**Galois data.** Let $G^a_F$, $Z^0_F$, the commutator pairing and $\overline{\mathrm{Isom}}^c(G^a_L,G^a_K)$ be as in [abelian-by-central Galois groups](abelian-by-central-galois-group.md), built from the maximal pro-$\ell$ Galois group [@topaz2016, §1.2, pp. 4–5]. The commutator gives a continuous homomorphism $[\bullet,\bullet]:\widehat\wedge^2G^a_F\to G^{(2)}_F/G^{(3)}_F$ on the completed exterior square, with image $Z^0_F$ [@topaz2016, §8, p. 35, and §8.3, p. 38]. Let $C_F$ be its kernel.

**Field data.** For function fields $K|k$ and $L|l$ over algebraically closed fields, $\mathrm{Isom}^i_F(K,L)$ is the set of field isomorphisms $K^i\to L^i$ of perfect closures modulo Frobenius twists. The manuscript has a canonical map $\mathrm{Isom}^i_F(K,L)\to\mathrm{Isom}_M(V_K,V_L)/\mathbb F_\ell^\times$, its map (1.1) [@openai2026modl, §1.1, p. 2]. Topaz has a canonical map $\mathrm{Isom}^i_F(K,L)\to\overline{\mathrm{Isom}}^c(G^a_L,G^a_K)$ [@topaz2016, §1.2, p. 5].

**Theorem.** Let $K|k$ and $L|l$ be function fields over algebraically closed fields of characteristic different from $\ell$, of any transcendence degrees.

1. Choose primitive $\ell$-th roots of unity $\omega_K\in K$ and $\omega_L\in L$, with Kummer pairings $(\bullet,\bullet)_{\omega_K}$ and $(\bullet,\bullet)_{\omega_L}$. The adjoint $\Theta\mapsto\Theta^\vee$, defined by $(\sigma,\Theta x)_{\omega_L}=(\Theta^\vee\sigma,x)_{\omega_K}$, is a bijection from $\mathrm{Isom}_M(V_K,V_L)$ onto the pairing-compatible isomorphisms $G^a_L\to G^a_K$, and $(a\Theta)^\vee=a\,\Theta^\vee$ for $a\in\mathbb F_\ell^\times$.
2. The induced bijection $\mathrm{Isom}_M(V_K,V_L)/\mathbb F_\ell^\times\to\overline{\mathrm{Isom}}^c(G^a_L,G^a_K)$ does not depend on $\omega_K,\omega_L$. Composed with the manuscript's map (1.1), it gives Topaz's map from $\mathrm{Isom}^i_F(K,L)$.

Topaz proves this with an extra compatibility with rational subgroups on both sides, while deducing his Theorem A from his Theorem B. His argument for that step uses only his Theorem 8.6 and Kummer theory [@topaz2016, §9, pp. 40–41], and neither needs the bound $\mathrm{trdeg}\ge5$ of Theorems A and B.

**Corollary.** Let $K|k$ and $L|l$ be function fields over algebraically closed fields, with $\mathrm{char}\,k\ne\ell$ and $\mathrm{trdeg}(K|k)\ge2$, as in the [mod-$\ell$ conjecture](mod-l-bogomolov-pop-conjecture.md).

- (a) If $\mathrm{char}\,l=\ell$ or $\mathrm{trdeg}(L|l)\le1$, then $\mathrm{Isom}^i_F(K,L)$ and $\overline{\mathrm{Isom}}^c(G^a_L,G^a_K)$ are both empty.
- (b) Otherwise, Topaz's map is bijective if and only if the manuscript's map (1.1) is.

Hence the manuscript's Theorem 1.1, over all pairs it covers, is equivalent to Topaz's Conjecture 2 over all pairs it covers.

*Proof of the theorem.*

1. *Duality.* The Kummer pairing $(\sigma,x)_\omega=i$ when $\sigma(\sqrt[\ell]x)/\sqrt[\ell]x=\omega^i$ is perfect, so $G^a_K$ is the Pontryagin dual of the discrete space $V_K$ [@topaz2016, §8.3, p. 37]. Hence $\Theta\mapsto\Theta^\vee$ is a bijection from linear isomorphisms $V_K\to V_L$ to continuous isomorphisms $G^a_L\to G^a_K$, and clearly $(a\Theta)^\vee=a\,\Theta^\vee$.
2. *Exterior squares.* The pairing $(\sigma\wedge\tau,x\wedge y)=(\sigma,x)(\tau,y)-(\sigma,y)(\tau,x)$ between $\widehat\wedge^2G^a$ and $\wedge^2V$ is perfect [@topaz2016, §8, p. 35]. Directly from the definition, $(\sigma\wedge\tau,\Theta x\wedge\Theta y)_L=(\Theta^\vee\sigma\wedge\Theta^\vee\tau,x\wedge y)_K$. By linearity and continuity, $\wedge^2\Theta^\vee$ is adjoint to $\wedge^2\Theta$. For a subspace $S\subseteq\wedge^2V_K$ with annihilator $S^\perp$, adjointness gives $\wedge^2\Theta^\vee\big((\wedge^2\Theta(S))^\perp\big)=S^\perp$.
3. *The Milnor condition.* $R_K$ is the kernel of $V_K\otimes V_K\to W_K$, and it contains every $x\otimes x$ because $\{x,x\}=0$. So $R_K=\pi_K^{-1}(N_K)$, where $\pi_K:V_K\otimes V_K\to\wedge^2V_K$ is the projection, whose kernel is spanned by the $x\otimes x$. Now $\Theta\otimes\Theta$ maps $\ker\pi_K$ onto $\ker\pi_L$, and $\pi_L\circ(\Theta\otimes\Theta)=\wedge^2\Theta\circ\pi_K$. Hence $(\Theta\otimes\Theta)(R_K)=\pi_L^{-1}(\wedge^2\Theta(N_K))$, and $\Theta$ is compatible if and only if $\wedge^2\Theta(N_K)=N_L$.
4. *The Galois condition.* Suppose $\psi:Z^0_L\to Z^0_K$ is an isomorphism with $\psi[\sigma,\tau]=[\Theta^\vee\sigma,\Theta^\vee\tau]$. Then $[\bullet,\bullet]_K\circ\wedge^2\Theta^\vee=\psi\circ[\bullet,\bullet]_L$ on the elements $\sigma\wedge\tau$. These topologically generate $\widehat\wedge^2G^a_L$, so the identity holds everywhere, and injectivity of $\psi$ gives $\wedge^2\Theta^\vee(C_L)=C_K$. Conversely, if $\wedge^2\Theta^\vee(C_L)=C_K$, then $\wedge^2\Theta^\vee$ induces an isomorphism $\widehat\wedge^2G^a_L/C_L\to\widehat\wedge^2G^a_K/C_K$. The commutator identifies each quotient with $Z^0$, since a continuous bijection of compact groups is an isomorphism. This gives the required $\psi$. So $\Theta^\vee$ is pairing-compatible if and only if $\wedge^2\Theta^\vee(C_L)=C_K$.
5. *Comparison.* Topaz's Theorem 8.6 applies because $\mu_{\ell^2}\subset k$. It says that the inclusion $C_K\subseteq\widehat\wedge^2G^a_K$ is $(\bullet,\bullet)_{\omega_K}$-dual to the surjection $\wedge^2V_K\to W_K$, that is, $C_K=N_K^\perp$, and likewise for $L$ [@topaz2016, Theorem 8.6]. Apply step 2 to $S=(\wedge^2\Theta)^{-1}(N_L)$: it gives $\wedge^2\Theta^\vee(C_L)=\big((\wedge^2\Theta)^{-1}(N_L)\big)^\perp$. By Pontryagin duality, $S\mapsto S^\perp$ is injective on subspaces. So $\wedge^2\Theta^\vee(C_L)=C_K$ if and only if $(\wedge^2\Theta)^{-1}(N_L)=N_K$, that is, $\wedge^2\Theta(N_K)=N_L$. By steps 3 and 4, $\Theta$ is compatible exactly when $\Theta^\vee$ is pairing-compatible. This proves part 1.
6. *Roots of unity.* If $\omega'=\omega^b$ with $b\in\mathbb F_\ell^\times$, then $(\sigma,x)_{\omega'}=b^{-1}(\sigma,x)_\omega$. So changing $\omega_K$ or $\omega_L$ multiplies $\Theta^\vee$ by a scalar, and the bijection on orbits is canonical.
7. *Field isomorphisms.* The inclusion $K\subseteq K^i$ induces isomorphisms $V_K\to V_{K^i}$ [@openai2026modl, §1.1, p. 2] and $G^a_{K^i}\to G^a_K$. These respect the Kummer pairings, because $\ell$-th roots of elements of $K$ already lie in $K(\ell)$. So we may replace $K,L$ by $K^i,L^i$. Let $\alpha:K^i\to L^i$ be an isomorphism, and extend it to $\tilde\alpha$ between the maximal pro-$\ell$ extensions. The manuscript's map sends $\alpha$ to $\alpha_1:x\mapsto\alpha(x)$ on $V$. Topaz's map sends it to $\varphi_\alpha:\sigma\mapsto\tilde\alpha^{-1}\sigma\tilde\alpha$ on $G^a$. Write $\tilde\alpha(\omega_K)=\omega_L^c$, with $c\in\mathbb F_\ell^\times$. For $y^\ell=x\in K^{i\times}$, the element $\tilde\alpha(y)$ is an $\ell$-th root of $\alpha(x)$, and
$$
\frac{\varphi_\alpha(\sigma)(y)}{y}=\tilde\alpha^{-1}\Big(\frac{\sigma(\tilde\alpha y)}{\tilde\alpha y}\Big).
$$
Since $\tilde\alpha^{-1}(\omega_L^i)=\omega_K^{i/c}$, this gives $(\varphi_\alpha\sigma,x)_{\omega_K}=c^{-1}(\sigma,\alpha_1x)_{\omega_L}$, that is, $\alpha_1^\vee=c\,\varphi_\alpha$. Topaz states this compatibility for his version with rational subgroups [@topaz2016, §9, p. 41]. $\square$

*Proof of the corollary.* Lemma 3.5 of Topaz gives $\{t_1-a_1,t_2-a_2\}\ne0$ in $W_K$ for suitable $a_i\in k$, whenever $t_1,t_2\in K$ are algebraically independent over $k$. So $W_K\ne0$ [@topaz2016, Lemma 3.5, p. 16].

- (a) A field isomorphism $K^i\to L^i$ maps $k$ onto $l$ [@topaz2016, §1, p. 2]. So it preserves the characteristic and the transcendence degree, and $\mathrm{Isom}^i_F(K,L)$ is empty in both cases.
  - Suppose $\mathrm{char}\,l=\ell$. Topaz shows that a pairing-compatible isomorphism forces $\mathrm{char}\,L\ne\ell$. In characteristic $\ell$ the maximal pro-$\ell$ Galois group of $L$ is free, so its $H^2$ vanishes, and then $[\bullet,\bullet]_L$ is injective on $\widehat\wedge^2G^a_L$. A compatible isomorphism would make $C_K=0$, as in step 4, and then Theorem 8.6 would give $W_K=0$ [@topaz2016, §9, p. 40]. Topaz makes this argument under his standing bound $\mathrm{trdeg}(K|k)\ge5$, but it uses only $W_K\ne0$.
  - Suppose $\mathrm{char}\,l\ne\ell$ and $\mathrm{trdeg}(L|l)\le1$. Then $W_L=0$, because $k^M_s$ of a function field over an algebraically closed field vanishes above its transcendence degree [@topaz2016, Lemma 3.3, p. 16]. A compatible $\Theta$ induces an isomorphism $W_K\to W_L$ [@openai2026modl, §1.1, p. 2], so $\mathrm{Isom}_M(V_K,V_L)$ is empty, and so is $\overline{\mathrm{Isom}}^c(G^a_L,G^a_K)$ by part 1.
- (b) Here both $K|k$ and $L|l$ satisfy the hypotheses of the manuscript's Theorem 1.1. In the triangle of part 2, the map between the two isomorphism sets is a bijection, so one map from $\mathrm{Isom}^i_F(K,L)$ is bijective exactly when the other is.

Theorem 1.1 therefore gives Conjecture 2 for every pair, by (a) or (b). Conversely, Conjecture 2 gives Theorem 1.1 by (b). The last sentence of Theorem 1.1, that compatible isomorphisms force equal characteristics and transcendence degrees, follows from its bijectivity. $\square$

**Remark on $\ell=2$.** Here $Z^0_F$ can be properly contained in the kernel of $G^c_F\to G^a_F$ [@topaz2016, §1.2, p. 5]. The pairing sees only commutators of lifts, not their squares. On the Milnor side this matches the fact that $R_F$ already contains every $x\otimes x$.

**Status.** The theorem without rational subgroups and the corollary are proved here from the cited results of Topaz. Neither the manuscript's Theorem 1.1 nor Conjecture 2 is recorded as established. Only the definitions and statement in §1.1 of the manuscript are used, and none of its proofs has been checked here; see the [note on the manuscripts](manuscripts-claiming-bogomolov-pop.md).
