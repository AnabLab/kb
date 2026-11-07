---
title: Classification of p-adic fields with isomorphic absolute Galois groups
kind: theorem
summary: 'For odd $p$, finite $K, L/\mathbb{Q}_p$ have $G_K \cong G_L$ exactly when they have the same degree and the same maximal subfield abelian over $\mathbb{Q}_p$, with no hypothesis on roots of unity. The forward direction holds for every $p$.'
tags: [local-fields, galois-groups]
edges:
  - {to: jarden-ritter-theorem, label: generalizes, note: "For odd $p$. For $p = 2$ the converse direction is known here only when $\\zeta_4 \\in K$."}
  - {to: local-galois-group-presentations, label: uses, note: "The converse direction uses the Jannsen–Wingberg presentation [@jannsenwingberg1982, Theorem 2]."}
  - {to: local-field-galois-invariants, label: uses, note: "The degree is recovered from $G_K$ by local class field theory [@jardenritter1979, Lemma 1]."}
---

**Statement.** Let $K, L$ be finite extensions of $\mathbb{Q}_p$ in a fixed algebraic closure, and let $K^0, L^0$ be their maximal subfields abelian over $\mathbb{Q}_p$.

1. For every $p$, if $G_K \cong G_L$, then $[K:\mathbb{Q}_p] = [L:\mathbb{Q}_p]$ [@jardenritter1979, Lemma 1] and $K^0 = L^0$ [@jenkner1992, Théorème].
2. For odd $p$, if $[K:\mathbb{Q}_p] = [L:\mathbb{Q}_p]$ and $K^0 = L^0$, then $G_K \cong G_L$.

So for odd $p$, the isomorphism type of $G_K$ carries exactly the information of the pair $([K:\mathbb{Q}_p], K^0)$.

**Attribution.** Jarden and Ritter proved both parts when $\zeta_p \in K$, and $\zeta_4 \in K$ if $p = 2$ (the [Jarden–Ritter theorem](jarden-ritter-theorem.md)). Joshi states the equivalence for odd $p$ with no hypothesis on roots of unity, and credits Ritter's 1978 paper in Mathematische Annalen with removing the hypothesis $\zeta_p \in K$ for $p \ne 2$ [@joshi2020, §3.5 and Theorem 3.5.1]. Jenkner also credits Ritter with removing it for $p \ne 2$ in part 1 [@jenkner1992, p. 221]. Ritter's paper has not been opened for this entry. Jenkner's proof of part 1 uses only local class field theory and works for every $p$ [@jenkner1992, pp. 221–225]. The proof of part 2 below is written out here from the Jannsen–Wingberg presentation.

**Proof of part 2.** Let $p$ be odd. For a finite extension $K/\mathbb{Q}_p$, write $f_K$ for its residue degree and $N_K = N_{K/\mathbb{Q}_p}(K^\times) \subseteq \mathbb{Q}_p^\times$ for its norm group. Let $T_K$ be its maximal tamely ramified extension, $\mathcal{G}_K = \mathrm{Gal}(T_K/K)$ and $I_K^t = \mathrm{Gal}(T_K/K^{\mathrm{ur}})$. Let $p^{s_K}$ be the order of the group of $p$-power roots of unity in $T_K$, and $\alpha_K : \mathcal{G}_K \to (\mathbb{Z}/p^{s_K})^\times$ the character by which $\mathcal{G}_K$ acts on it. Put $H_K = \alpha_K(I_K^t)$, and let $\Phi_K$ be the set of values $\alpha_K(\sigma)$ for $\sigma \in \mathcal{G}_K$ a lift of Frobenius. Write $\phi$ for local Artin maps, $\chi$ for the $p$-adic cyclotomic character, and $c = \chi \circ \phi_{\mathbb{Q}_p} : \mathbb{Q}_p^\times \to \mathbb{Z}_p^\times$.

*Step 1: $f_K$, $s_K$, $H_K$ and $\Phi_K$ depend only on $K^0$.* Since $v_p(N_{K/\mathbb{Q}_p}(x)) = f_K v_K(x)$, we get $v_p(N_K) = f_K \mathbb{Z}$, $N_{K/\mathbb{Q}_p}(\mathcal{O}_K^\times) = N_K \cap \mathbb{Z}_p^\times$, and $N_{K/\mathbb{Q}_p}(\pi_K \mathcal{O}_K^\times) = \{y \in N_K : v_p(y) = f_K\}$ for a uniformizer $\pi_K$. In $\mathrm{Gal}(K^{\mathrm{ab}}/K)$, the image of inertia is $\phi_K(\mathcal{O}_K^\times)$, and the elements acting as Frobenius on $K^{\mathrm{ur}}$ form $\phi_K(\pi_K \mathcal{O}_K^\times)$ [@milnecft, I, Theorem 1.1 and 1.10–1.11]. Moreover $\chi(\phi_K(x)) = c(N_{K/\mathbb{Q}_p}(x))$ for $x \in K^\times$ [@milnecft, III, Lemma 3.2]. Hence:

- $f_K$ is the positive generator of $v_p(N_K)$.
- $\mu_{p^\nu} \subset T_K$ exactly when the inertia group of $K(\mu_{p^\nu})/K$ has order prime to $p$. The character $\chi$ maps that inertia group isomorphically onto the image of $c(N_K \cap \mathbb{Z}_p^\times)$ in $(\mathbb{Z}/p^\nu)^\times$. So $s_K$ is the largest $\nu$ for which this image has order prime to $p$.
- $H_K$ is the image of $c(N_K \cap \mathbb{Z}_p^\times)$ in $(\mathbb{Z}/p^{s_K})^\times$, and $\Phi_K$ is the image of $c(\{y \in N_K : v_p(y) = f_K\})$, a coset of $H_K$.

So these data depend only on $N_K$, and $N_K = N_{K^0}$ by the norm limitation theorem [@milnecft, III, Theorem 3.5].

*Step 2: choice of generators.* The group $\mathcal{G}_K$ has a presentation with generators $\sigma_0, \tau_0$ and the single relation $\sigma_0 \tau_0 \sigma_0^{-1} = \tau_0^q$, where $q = p^{f_K}$, $\tau_0$ generates $I_K^t$ and $\sigma_0$ lifts Frobenius [@luo2024, Proposition 2.15], which cites Neukirch–Schmidt–Wingberg, Theorem 7.5.3. Any other lift of Frobenius is $\sigma_0 \tau_0^a$, and any other generator of $I_K^t$ is $\tau_0^u$, with $a \in \widehat{\mathbb{Z}}$ and $u \in \widehat{\mathbb{Z}}^\times$. The substitution $\sigma \mapsto \sigma\tau^a$, $\tau \mapsto \tau^u$ preserves the relation and has inverse $\sigma \mapsto \sigma\tau^{-a/u}$, $\tau \mapsto \tau^{1/u}$. So any lift of Frobenius together with any generator of $I_K^t$ gives such a presentation.

*Step 3: matching.* Suppose $[K:\mathbb{Q}_p] = [L:\mathbb{Q}_p] = n$ and $K^0 = L^0$. By Step 1, $f_K = f_L$, $s_K = s_L = s$, $H_K = H_L = H$ and $\Phi_K = \Phi_L$. Choose a generator $\tau_K$ of $I_K^t$. The images $\alpha_K(\tau_K)$ and $\alpha_L(\tau_L)$ of any generators both generate the cyclic group $H$, so after replacing $\tau_L$ by a power $\tau_L^u$ with $u \in \widehat{\mathbb{Z}}^\times$, we have $\alpha_L(\tau_L) = \alpha_K(\tau_K)$. Choose a lift $\sigma_K$ of Frobenius. Since $\Phi_L = \Phi_K$, there is a lift $\sigma_L$ of Frobenius with $\alpha_L(\sigma_L) = \alpha_K(\sigma_K)$. By Step 2 there is an isomorphism $\psi : \mathcal{G}_K \to \mathcal{G}_L$ with $\psi(\sigma_K) = \sigma_L$ and $\psi(\tau_K) = \tau_L$, and $\alpha_L \circ \psi = \alpha_K$ because both sides agree on generators.

*Step 4: conclusion.* Jannsen and Wingberg present $G_K$ by the generators $\sigma_K, \tau_K, x_0, \dots, x_n$ with relations built from $n$, $s$, the pair $(\sigma_K, \tau_K)$ and a lift $\beta_K : \mathcal{G}_K \to \mathbb{Z}_p^\times$ of $\alpha_K^{-1}$ [@jannsenwingberg1982, Theorem 2]. Taking $\beta_L = \beta_K \circ \psi^{-1}$, the isomorphism $\psi$ carries the data for $K$ to the data for $L$, so $G_K \cong G_L$.

**The case $p = 2$.** Part 1 holds, and part 2 holds when $\zeta_4 \in K$, by the Jarden–Ritter theorem. The proof above needs a presentation of $G_K$. Diekert's presentation for $p = 2$, which requires $K(\sqrt{-1})/K$ to be unramified [@jardenshusterman2023, §1], might allow the same argument, but it has not been opened for this entry. The sources opened here do not settle part 2 for $p = 2$ when $\zeta_4 \notin K$.

**Example.** Let $p$ be odd, $K = \mathbb{Q}_p(\sqrt[p]{p})$ and $L = \mathbb{Q}_p(\sqrt[p]{p + p^2})$. Both have degree $p$, so neither contains $\zeta_p$, whose degree $p - 1$ does not divide $p$, and the Jarden–Ritter theorem does not apply. Neither is normal over $\mathbb{Q}_p$, since a normal one would contain the ratio $\zeta_p$ of two roots of its defining polynomial $x^p - a$. Having prime degree and not being abelian, both satisfy $K^0 = L^0 = \mathbb{Q}_p$. By part 2, $G_K \cong G_L$.

The fields are not isomorphic, as checked here. A field isomorphism between finite extensions of $\mathbb{Q}_p$ is a $\mathbb{Q}_p$-algebra isomorphism [@hyeon2025, §1], so it would give $K(\zeta_p) = L(\zeta_p)$, because $K(\zeta_p)$ is normal over $\mathbb{Q}_p$. Over $F = \mathbb{Q}_p(\zeta_p)$, Kummer theory and $v_F(p) = p - 1$ would then force $1 + p \in F^{\times p}$. In that case $(1 + p)^{p-1} = N_{F/\mathbb{Q}_p}(1 + p)$ would be a $p$-th power in $\mathbb{Q}_p$. This is impossible: $p$-th powers in $1 + p\mathbb{Z}_p$ lie in $1 + p^2\mathbb{Z}_p$, while $(1 + p)^{p-1} \equiv 1 - p \pmod{p^2}$.
