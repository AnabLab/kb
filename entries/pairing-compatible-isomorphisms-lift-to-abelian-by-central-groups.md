---
title: Pairing-compatible isomorphisms lift to abelian-by-central Galois groups
kind: theorem
summary: If $L$ contains all $\ell$-power roots of unity, an isomorphism $\Pi^a_L \to \Pi^a_K$ is compatible with the commutator pairing exactly when it is the abelianization of an isomorphism $\Pi^c_L \to \Pi^c_K$. So Pop's isomorphism sets match those of the Bogomolov–Pop conjecture.
tags: [galois-groups, function-fields]
edges:
  - {to: abelian-by-central-galois-group, label: uses}
  - {to: kummer-theory, label: uses, note: "Only to show that every character of $\\Pi^a_L$ to $\\mathbb{Q}_\\ell/\\mathbb{Z}_\\ell$ is $\\ell$ times another."}
  - {to: bogomolov-pop-conjecture, label: motivated-by, note: "Identifies the pairing-compatible isomorphisms in the conjecture with the abelianizations of isomorphisms of $\\Pi^c$ used by Pop [@pop2018, §1, p. 2]."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Proves Lemma 2.3 of the September 2026 manuscript, for more general fields, with a fibre-product argument like its own [@openai2026bp, Lemma 2.3, p. 5]."}
---

**Statement.** Fix a prime $\ell$. Let $K$ and $L$ be fields of characteristic different from $\ell$, and suppose that $L$ contains all $\ell$-power roots of unity, as every function field over an algebraically closed field of characteristic different from $\ell$ does. Use the notation of [abelian-by-central Galois groups](abelian-by-central-galois-group.md): $\Pi^c_L \to \Pi^a_L$ is a central extension with kernel $\Delta_L$, and commutators of lifts give the pairing $[\sigma,\tau] \in \Delta_L$. Let $\varphi : \Pi^a_L \to \Pi^a_K$ and $\psi : \Delta_L \to \Delta_K$ be isomorphisms of profinite groups. The following are equivalent:

1. $\psi[\sigma,\tau] = [\varphi\sigma,\varphi\tau]$ for all $\sigma,\tau \in \Pi^a_L$.
2. There is an isomorphism $f : \Pi^c_L \to \Pi^c_K$ that induces $\varphi$ on $\Pi^a$ and $\psi$ on $\Delta$.

In particular, an isomorphism $\Pi^a_L \to \Pi^a_K$ is compatible with the pairing if and only if it is the abelianization of an isomorphism $\Pi^c_L \to \Pi^c_K$.

**The two Isom sets.** Pop writes $\mathrm{Isom}^c(\Pi_K,\Pi_L)$ for the abelianizations of the isomorphisms $\Pi^c_K \to \Pi^c_L$, modulo $\ell$-adic units [@pop2018, §1, p. 2]. Topaz, and the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md) as stated here, use the isomorphisms $\Pi^a_L \to \Pi^a_K$ compatible with the pairing, modulo $\mathbb{Z}_\ell^\times$ [@topaz2016, §1, p. 2]. For function fields over algebraically closed fields, the theorem says that these are the same isomorphisms once $K$ and $L$ are exchanged. So [Pop's reconstruction theorems](pop-reconstruction-from-divisorial-inertia.md) apply to the conjecture in the form stated here.

**Proof that 2 implies 1.** The quotient $\Pi^c_L/\Delta_L = \Pi^a_L$ is the maximal abelian quotient of $\Pi^c_L$, so $\Delta_L$ is the closed commutator subgroup of $\Pi^c_L$. Any isomorphism $f$ therefore maps $\Delta_L$ onto $\Delta_K$, and induces isomorphisms on $\Pi^a$ and on $\Delta$. If these are $\varphi$ and $\psi$, and $\tilde\sigma,\tilde\tau$ lift $\sigma,\tau$, then $f(\tilde\sigma), f(\tilde\tau)$ lift $\varphi\sigma, \varphi\tau$, so $[\varphi\sigma,\varphi\tau] = f([\tilde\sigma,\tilde\tau]) = \psi[\sigma,\tau]$. This also proves the "if" direction of the last sentence of the statement.

**Proof that 1 implies 2.** Write $\bar x$ for the image of $x$ in $\Pi^a$.

*Step 1: characters of $\Pi^a_L$ are divisible.* Let $\chi : \Pi^a_L \to \mathbb{Q}_\ell/\mathbb{Z}_\ell$ be a continuous homomorphism. Its image is finite, so it lies in $\ell^{-n}\mathbb{Z}/\mathbb{Z}$ for some $n$. Fix roots of unity $\omega_m$ of exact order $\ell^m$ in $L$ with $\omega_{m+1}^\ell = \omega_m$, and identify the group $\mu_{\ell^m}$ of $\ell^m$-th roots of unity with $\ell^{-m}\mathbb{Z}/\mathbb{Z}$ by $\omega_m^i \mapsto i/\ell^m$. Composing with the projection from the absolute Galois group $G_L$, view $\chi$ as a continuous homomorphism $G_L \to \mu_{\ell^n}$. Since $\mu_{\ell^n} \subset L$, the action of $G_L$ on $\mu_{\ell^n}$ is trivial, so $H^1(G_L,\mu_{\ell^n})$ is the group of such homomorphisms. By [Kummer theory](kummer-theory.md), every class there is the image of some $a \in L^\times$, namely $\sigma \mapsto \sigma(\alpha)/\alpha$ with $\alpha^{\ell^n} = a$. So $\chi(\sigma) = \sigma(\alpha)/\alpha$ for such an $\alpha$ in a separable closure. Choose $\beta$ there with $\beta^\ell = \alpha$, and put $\chi'(\sigma) = \sigma(\beta)/\beta$. Since $\beta^{\ell^{n+1}} = a$, the value lies in $\mu_{\ell^{n+1}} \subset L$, which every $\sigma$ fixes, so $\chi'$ is a continuous homomorphism $G_L \to \mu_{\ell^{n+1}}$. Its image is abelian of $\ell$-power order, so $\chi'$ factors through the maximal abelian pro-$\ell$ quotient $\Pi^a_L$. Finally $\chi'(\sigma)^\ell = \sigma(\alpha)/\alpha = \chi(\sigma)$. Since $(\omega_{n+1}^j)^\ell = \omega_n^j$ and $j/\ell^n = \ell \cdot j/\ell^{n+1}$, this says $\ell\chi' = \chi$ in $\mathbb{Q}_\ell/\mathbb{Z}_\ell$. So the Pontryagin dual $(\Pi^a_L)^\vee = \mathrm{Hom}_{\mathrm{cont}}(\Pi^a_L, \mathbb{Q}_\ell/\mathbb{Z}_\ell)$ is a divisible abelian group, hence an injective abelian group.

*Step 2: the difference of the two extensions.* Put
$$P = \{(x,y) \in \Pi^c_L \times \Pi^c_K : \varphi(\bar x) = \bar y\}, \qquad D = \{(b,\psi(b)) : b \in \Delta_L\}.$$
Then $P$ is a closed subgroup, hence a pro-$\ell$ group, and $D$ is a closed subgroup that is central in $P$, because $\Delta_L$ and $\Delta_K$ are central. For $(x,y), (x',y') \in P$, put $c = [\bar x, \bar x']$. The commutator of the two pairs is $([x,x'],[y,y']) = (c, [\varphi\bar x, \varphi\bar x'])$, which is $(c, \psi(c)) \in D$ by 1. So $Q = P/D$ is an abelian pro-$\ell$ group. The map $P \to \Pi^a_L$, $(x,y) \mapsto \bar x$, is surjective, because $\Pi^c_K \to \Pi^a_K$ is, and its kernel is $\Delta_L \times \Delta_K$. It induces a continuous surjection $\pi : Q \to \Pi^a_L$ with kernel $(\Delta_L \times \Delta_K)/D$. Modulo $D$, each $(b,b')$ in this kernel is congruent to $(1, \psi(b)^{-1}b')$ and to $(b\,\psi^{-1}(b')^{-1}, 1)$.

*Step 3: a section.* The dual of the surjection $\pi$ is an injection $(\Pi^a_L)^\vee \to Q^\vee$. Since $(\Pi^a_L)^\vee$ is injective, this injection has a retraction. Dualizing the retraction gives a continuous homomorphism $s : \Pi^a_L \to Q$ with $\pi \circ s = \mathrm{id}$.

*Step 4: the lift.* Let $S \subset P$ be the preimage of $s(\Pi^a_L)$. It is a closed subgroup containing $D$. The projection $p_1 : S \to \Pi^c_L$ is bijective:

- Injective: if $(1,y) \in S$, then $\bar y = \varphi(1) = 1$, so $(1,y)$ maps into $\ker \pi \cap s(\Pi^a_L) = 1$. Thus $(1,y) \in D$, which forces $y = \psi(1) = 1$.
- Surjective: given $x$, choose $y$ with $\bar y = \varphi(\bar x)$. The image $q$ of $(x,y)$ in $Q$ and $s(\bar x)$ both lie over $\bar x$, so $s(\bar x)q^{-1} \in \ker\pi$. By Step 2 it is the image of some $(1,b')$ with $b' \in \Delta_K$. Then $(x, yb')$ maps to $s(\bar x)$, so it lies in $S$.

The same argument with $\varphi^{-1}$ and $\psi^{-1}$, using the representatives $(b,1)$ of Step 2, shows that the projection $p_2 : S \to \Pi^c_K$ is bijective. Continuous bijective homomorphisms of profinite groups are isomorphisms, so $f = p_2 \circ p_1^{-1} : \Pi^c_L \to \Pi^c_K$ is an isomorphism. Since $(x, f(x)) \in P$, the map $f$ induces $\varphi$ on $\Pi^a$. Since $D \subset S$, we have $f(b) = \psi(b)$ for $b \in \Delta_L$. $\square$

The proof does not divide by $2$, so it covers $\ell = 2$.

**Standard facts used.** Pontryagin duality between abelian pro-$\ell$ groups and discrete $\ell$-primary torsion abelian groups. Divisible abelian groups are injective (Baer). A continuous bijection between compact Hausdorff spaces is a homeomorphism.

**The root-of-unity hypothesis.** Step 1 is the only place it is used, and some hypothesis on $\Pi^a_L$ is needed there. The dihedral and quaternion groups of order $8$ have nilpotency class $2$, so each is its own maximal abelian-by-central quotient. Each has abelianization $(\mathbb{Z}/2)^2$ and commutator subgroup $\mathbb{Z}/2$, and in both the commutator pairing is the unique nondegenerate alternating form on $(\mathbb{F}_2)^2$. So a pairing-compatible isomorphism between the abelianizations exists, yet the groups are not isomorphic. The example concerns abstract finite $2$-groups, not Galois groups of fields.

**Source.** A 2026 manuscript credited to OpenAI, not peer reviewed, proves this for function fields over algebraically closed fields as its Lemma 2.3, with the same fibre-product argument [@openai2026bp, Lemma 2.3, p. 5]. It uses the lemma to apply Pop's reconstruction theorems, which are stated for isomorphisms of $\Pi^c$ [@openai2026bp, §7, p. 24]. The proof above is written out and checked here.
