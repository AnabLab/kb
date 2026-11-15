---
title: Galois isomorphisms transport ordinary p-divisible groups
kind: theorem
summary: 'An isomorphism of absolute Galois groups of p-adic fields induces an equivalence between ordinary p-divisible groups over their integer rings, preserving integral Tate modules, height, dimension, Cartier duality and the connected–étale sequence.'
tags: [local-fields, galois-groups, hodge-theory, reconstruction]
edges:
  - {to: galois-isomorphisms-preserve-crystalline-ordinary-representations, label: uses, note: 'Crystallinity survives pullback for the two-step filtration with inertia characters cyclotomic and trivial.'}
  - {to: crystalline-lattices-and-p-divisible-groups, label: uses, note: 'Realizes the transported integral lattice over the target integer ring, without a ramification bound or a restriction on p.'}
  - {to: tate-full-faithfulness-for-p-divisible-groups, label: uses, note: 'Recovers morphisms and realizes an unramified Tate-module quotient as a map to an étale p-divisible group.'}
  - {to: potentially-ordinary-representations-are-aut-intrinsically-hodge-tate, label: uses, note: 'Its part 2 computes the weight multiplicities of a filtration with inertia characters cyclotomic and trivial.'}
  - {to: local-field-galois-invariants, label: uses, note: 'Pullback preserves inertia and the cyclotomic character.'}
---

**Setting.** Let $K,L$ be finite extensions of $\mathbb Q_p$. For a $p$-divisible group $G/\mathcal O_K$, write $G^0$ and $G^{\mathrm{et}}$ for its connected part and étale quotient. Call $G$ *ordinary* if
$$\mathrm{ht}(G^0)=\dim G.$$
Equivalently, $G^0$ is of multiplicative type: its Cartier dual is étale. This includes étale groups and groups of multiplicative type. Let $\mathrm{BT}_{\mathrm{ord}}(\mathcal O_K)$ have these objects and all their homomorphisms.

**Theorem (proved here).** A continuous isomorphism $\alpha:G_L\to G_K$ induces an equivalence
$$\Phi_\alpha:\mathrm{BT}_{\mathrm{ord}}(\mathcal O_K)\xrightarrow{\sim}\mathrm{BT}_{\mathrm{ord}}(\mathcal O_L),\qquad T_p\Phi_\alpha(G)\simeq\alpha^*T_pG.$$
Here $\alpha^*T$ is the same integral lattice with action pulled back along $\alpha$. With the displayed identification as part of the data, the functor is unique up to a unique compatible natural isomorphism. It preserves height, dimension, Cartier duality and connected–étale sequences. There is no ramification bound, and $p=2$ is allowed.

**Inputs about integral groups.** The connected–étale sequence and the formal-group description imply that dimension zero is equivalent to being étale [@tate1967pdivisible, §2.2, Proposition 1 and sequence (4), pp. 162–164]. Height equals the sum of the dimensions of a group and its dual [@tate1967pdivisible, §2.3, Proposition 3, p. 166]. Thus the two definitions of ordinary above agree. Étale $p$-divisible groups correspond to finite free unramified $\mathbb Z_p$-representations, by applying the finite étale classification level by level [@tate1967pdivisible, §1.4, p. 160].

The Tate module has rank equal to height [@tate1967pdivisible, §2.4, p. 169], and
$$T_p(G^D)\simeq(T_pG)^\vee(1)$$
for the Cartier dual $G^D$ [@tate1967pdivisible, proof of Proposition 11, Step 1, p. 178]. In $V_pG$, with $\mathbb Q_p(1)$ of weight $1$, that weight has multiplicity $\dim G$ [@tate1967pdivisible, §4.1, Theorem 3, Corollary 2, p. 180]. We use the [crystalline essential-image equivalence](crystalline-lattices-and-p-divisible-groups.md) for integral lattices [@scholzeweinstein2013moduli, Corollary 6.2.3 and its proof, p. 58].

**A criterion for ordinarity.** A $p$-divisible group $H/\mathcal O_K$ is ordinary if and only if its Tate module has an exact sequence of finite free $\mathbb Z_p$-modules with $G_K$-action
$$0\longrightarrow T_1\longrightarrow T_pH\longrightarrow T_0\longrightarrow0,$$
where $T_0$ and $T_1(-1)$ are unramified. When it exists, $\operatorname{rank}T_1=\dim H$.

*Proof.* If $H$ is ordinary, take $T_1=T_pH^0$ and $T_0=T_pH^{\mathrm{et}}$. The Tate-module sequence is exact: the finite-level generic fibres give exact sequences of finite groups, and inverse limits preserve their exactness. The quotient is unramified, and $T_1(-1)$ is unramified by Cartier duality and the étaleness of $(H^0)^D$.

Conversely, suppose such a sequence exists, and put $h=\mathrm{ht}(H)$ and $d=\operatorname{rank}T_1$. The two pieces have weights $1$ and $0$, with multiplicities $d$ and $h-d$, by part 2 of [the potentially ordinary theorem](potentially-ordinary-representations-are-aut-intrinsically-hodge-tate.md); omit a zero piece. Tate's weight formula therefore gives $\dim H=d$.

Realize $T_0$ as the Tate module of an étale group $E/\mathcal O_K$. [Full faithfulness](tate-full-faithfulness-for-p-divisible-groups.md) turns the surjection $T_pH\to T_0$ into a homomorphism $H\to E$. It factors through $H^{\mathrm{et}}$, since every map from a connected finite-level group to an étale one is zero. Consequently $T_pH^{\mathrm{et}}\to T_0$ is surjective, and
$$\mathrm{ht}(H^{\mathrm{et}})\ge h-d,\qquad \mathrm{ht}(H^0)\le d.$$
But $\dim H^0=\dim H=d$ and $\dim H^0\le\mathrm{ht}(H^0)$ by the dimension formula for duals. Equality follows, proving ordinarity. $\square$

**Proof of the theorem.** Let $G$ be ordinary of height $h$ and dimension $d$. Its integral sequence in the criterion gives an ordinary filtration of $V_pG$, with inertia characters $\chi_K$ and $1$. Also $V_pG$ is crystalline, by the crystalline essential-image theorem. The [transport theorem for ordinary representations](galois-isomorphisms-preserve-crystalline-ordinary-representations.md), part 3, shows that $\alpha^*V_pG$ is crystalline. Since $\alpha(I_L)=I_K$ and $\chi_K\alpha=\chi_L$, its transported filtration has weights $1$ and $0$, with multiplicities $d$ and $h-d$.

The essential-image theorem over $L$ now realizes the entire lattice $\alpha^*T_pG$ by a $p$-divisible group $H/\mathcal O_L$. The transported integral sequence satisfies the criterion, so $H$ is ordinary, of height $h$ and dimension $d$. Full faithfulness transports every morphism uniquely and makes this assignment a functor $\Phi_\alpha$. Applying the construction to $\alpha^{-1}$ gives a quasi-inverse, and full faithfulness gives the asserted uniqueness.

The functor restricts to an equivalence on étale groups, because their lattices are exactly the unramified ones. Cartier duality preserves ordinary groups: dualizing their connected–étale sequence gives a multiplicative kernel and an étale quotient, hence again a connected–étale sequence. Choose an identification $\alpha^*\mathbb Z_p(1)_K\simeq\mathbb Z_p(1)_L$, which exists because $\chi_K\alpha=\chi_L$. Pullback then commutes with $T\mapsto T^\vee(1)$, so full faithfulness identifies $\Phi_\alpha(G^D)$ with $\Phi_\alpha(G)^D$ naturally in $G$. Finally the étale quotient is universal among maps to étale $p$-divisible groups. The equivalence on ordinary groups and its restriction to étale groups preserve this universal property, and preserve its kernel. They therefore identify the transported connected–étale sequence with that of $H$. $\square$

**Checks and scope.** For $d=0$ this is the étale classification, and for $d=h$ its Cartier dual. For $G=\mu_{p^\infty}^d\times(\mathbb Q_p/\mathbb Z_p)^{h-d}$, the transported group is the same split group over $\mathcal O_L$. In general the construction retains the integral extension class, since it transports $T_pG$ itself. It constructs a $p$-divisible group; realization by an abelian scheme requires additional data.
