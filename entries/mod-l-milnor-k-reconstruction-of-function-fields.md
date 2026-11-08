---
title: Function fields from mod-ℓ Milnor K-theory in degrees one and two
kind: theorem
summary: 'Over algebraically closed fields of characteristic not $\ell$, in transcendence degree at least $2$, every isomorphism of $K^\times/\ell$ compatible with the Milnor product is a scalar times the map of a field isomorphism of perfect closures. So Topaz’s mod-$\ell$ conjecture holds.'
tags: [function-fields, milnor-k-theory, galois-groups, reconstruction-algorithms]
edges:
  - {to: mod-l-bogomolov-pop-conjecture, label: resolves, note: "Part 3, through the Milnor–Galois comparison, for every pair of fields the conjecture concerns."}
  - {to: bogomolov-pop-conjecture, label: addresses, note: "Part 4: for each pair of fields, the conjecture holds exactly when reduction modulo ℓ is injective on pairing-compatible isomorphisms of Π^a up to scalars."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks that the component checks of §§2–8 of the October 2026 mod-ℓ manuscript compose into its Theorem 1.1 [@openai2026modl, Theorem 1.1, p. 2], each step's hypotheses being outputs of the earlier steps."}
  - {to: mod-l-quasi-divisor-chains-from-alternating-characters, label: uses, note: "Step 1: transcendence degree and quasi-prime r-divisors with their residual character spaces."}
  - {to: mod-l-recognition-of-finite-constant-residual-curves, label: uses, note: "Step 2: finite residual constants and point lines."}
  - {to: uniform-support-bound-for-mod-l-kummer-pencils, label: uses, note: "Step 3: bounded pencil supports, for the map and its inverse."}
  - {to: mod-l-curve-subfield-correspondence, label: uses, note: "Step 4: the bijection of curve subfields."}
  - {to: mod-l-divisoriality-from-curve-subfields, label: uses, note: "Step 5: true prime divisors."}
  - {to: mod-l-good-rational-subfields-and-point-values, label: uses, note: "Step 6: good rational subfields, point bijections and condition (D)."}
  - {to: field-recovery-from-simultaneous-point-values, label: uses, note: "Step 7: the field isomorphism of perfect closures."}
  - {to: kummer-automorphisms-preserving-rational-subfields-are-scalars, label: uses, note: "Step 8: the given map is the field map up to a scalar."}
  - {to: field-automorphisms-acting-by-scalars-on-kummer-classes, label: uses, note: "Injectivity, up to Frobenius."}
  - {to: milnor-and-galois-forms-of-mod-l-bogomolov-pop, label: uses, note: "Its corollary passes from the Milnor form to Topaz's Conjecture 2, in part 3."}
---

**Setting.** Fix a prime $\ell$ and put $\Lambda=\mathbb F_\ell$. For a field $F$ of characteristic different from $\ell$, let $V_F=F^\times/F^{\times\ell}$, and let $R_F\subseteq V_F\otimes V_F$ be spanned by the $[x]\otimes[1-x]$, so that $(V_F\otimes V_F)/R_F=K^M_2(F)/\ell$. A linear isomorphism $\Theta:V_K\to V_L$ is *compatible* if $(\Theta\otimes\Theta)(R_K)=R_L$, and $\mathrm{Isom}_M(V_K,V_L)$ is the set of these. For finitely generated extensions $K|k$ and $L|l$ of algebraically closed fields, $\mathrm{Isom}^i_F(K,L)$ is the set of field isomorphisms $\alpha:K^i\to L^i$ of perfect closures with $\alpha(k)=l$, modulo Frobenius twists. Such an $\alpha$ induces a compatible $\alpha_1:V_K\to V_L$, giving the canonical map
$$\mathrm{Isom}^i_F(K,L)\longrightarrow\mathrm{Isom}_M(V_K,V_L)/\Lambda^\times\tag{1.1}$$
[@openai2026modl, §1.1, p. 2]. Write $A_F=\mathrm{Hom}(V_F,\Lambda)$ with the topology of pointwise convergence, $\Phi=\Theta^*:A_L\to A_K$ for the dual, $\Phi(g)=g\circ\Theta$, and $I_v\subseteq D_v$ for the annihilators of the units and principal units of a valuation $v$, as in [mod-ℓ quasi-divisor chains](mod-l-quasi-divisor-chains-from-alternating-characters.md).

**Theorem.** Let $K|k$ and $L|l$ be finitely generated extensions of algebraically closed fields with $\mathrm{char}\,k,\mathrm{char}\,l\ne\ell$ and $\mathrm{trdeg}(K|k),\mathrm{trdeg}(L|l)\ge2$.

1. For every compatible $\Theta:V_K\to V_L$ there are a field isomorphism $\alpha:K^i\to L^i$ with $\alpha(k)=l$ and a scalar $a\in\Lambda^\times$ with $\Theta=a\,\alpha_1$. The class of $\alpha$ modulo Frobenius is unique.
2. The map (1.1) is bijective. In particular a compatible isomorphism forces $\mathrm{char}\,k=\mathrm{char}\,l$ and $\mathrm{trdeg}(K|k)=\mathrm{trdeg}(L|l)$. This is Theorem 1.1 of the October 2026 mod-$\ell$ manuscript [@openai2026modl, Theorem 1.1, p. 2].
3. Topaz's Conjecture 2, as stated in [the mod-ℓ Bogomolov–Pop conjecture](mod-l-bogomolov-pop-conjecture.md), holds. That is, for function fields $K|k$ and $L|l$ over algebraically closed fields with $\mathrm{char}\,K\ne\ell$ and $\mathrm{trdeg}(K|k)\ge2$, the canonical map $\mathrm{Isom}^i_F(K,L)\to\overline{\mathrm{Isom}}^c(G^a_L,G^a_K)$ is a bijection.
4. For each such pair, the map of the [Bogomolov–Pop conjecture](bogomolov-pop-conjecture.md) is bijective if and only if the reduction map $\overline{\mathrm{Isom}}^c(\Pi^a_L,\Pi^a_K)\to\overline{\mathrm{Isom}}^c(G^a_L,G^a_K)$ is injective.

**Proof of part 1.** Fix a compatible $\Theta$. Then $\Theta^{-1}$ is compatible too, since $(\Theta^{-1}\otimes\Theta^{-1})(R_L)=R_K$. So each step below also applies to $\Theta^{-1}$, with $K$ and $L$ exchanged. Each step quotes a theorem on `main` and checks that its hypotheses are outputs of the earlier steps.

*Step 0: alternating pairs.* By the Milnor input of [mod-ℓ quasi-divisor chains](mod-l-quasi-divisor-chains-from-alternating-characters.md), $\Phi$ is a continuous linear isomorphism that preserves alternating pairs in both directions.

*Step 1: quasi-divisorial data.* Part 4 of the chains theorem applies to $\Phi$. Both transcendence degrees equal some $d\ge2$. For each $1\le r\le d-1$ there is a bijection $w\mapsto v$ from the quasi-prime $r$-divisors of $L|l$ to those of $K|k$ with $\Phi(I_w)=I_v$ and $\Phi(D_w)=D_v$, and the induced map $\bar\Phi:A_{Lw}=D_w/I_w\to D_v/I_v=A_{Kv}$ is a topological linear isomorphism. By part 3 of that theorem, $I_v$ determines $v$, so the bijection obtained from $\Theta^{-1}$ is the inverse one.

*Step 2: residual point lines.* As $\mathrm{char}\,k,\mathrm{char}\,l\ne\ell$, part 5 of [mod-ℓ recognition of residual curves](mod-l-recognition-of-finite-constant-residual-curves.md) applies to $\Phi$. For matched quasi-prime $(d-1)$-divisors $w\mapsto v$, $lw$ is algebraic over a finite field exactly when $kv$ is, and then $\bar\Phi$ maps the point lines $\Lambda\,\mathrm{ord}_P$ of the curve of $Lw$ bijectively onto those of the curve of $Kv$.

*Step 3: bounded pencils.* Steps 1 and 2 are hypotheses 1 and 2 of [the mod-ℓ support bound](uniform-support-bound-for-mod-l-kummer-pencils.md), for the same $\Phi$ and $\bar\Phi$. Fix normal integral projective models $X$ of $L|l$ and $Y$ of $K|k$, obtained by normalizing a projective closure of an affine model. That theorem gives, for every $t\in K\setminus k$, a bound on the total degree of the divisors of $X$ at which $\Theta[t-a]$ has nonzero order modulo $\ell$, uniform in $a\in k$. Applied to $\Theta^{-1}$, it gives the same for every $s\in L\setminus l$, the classes $\Theta^{-1}[s-b]$ and $Y$. These are condition (B) of [the mod-ℓ curve-subfield correspondence](mod-l-curve-subfield-correspondence.md).

*Step 4: curve subfields.* Condition (Q) of the same entry asks that $\Phi$ map the pairs $(I_w,D_w)$ of the quasi prime divisors of $L|l$ onto those of $K|k$. This is step 1 with $r=1$, since quasi-prime $1$-divisors are the quasi prime divisors. That theorem gives a bijection $E\mapsto P$ of curve subfields with $\Theta(V_E)=V_P$.

*Step 5: true divisors.* Step 1 with $r=1$ and step 4 are the two hypotheses of [true divisors from mod-ℓ curve subfields](mod-l-divisoriality-from-curve-subfields.md). So the bijection of quasi prime divisors restricts to a bijection $w\mapsto v$ between the prime divisors of $L|l$ and those of $K|k$, still with $\Phi(I_w)=I_v$ and $\Phi(D_w)=D_v$.

*Step 6: good subfields and point values.* The same hypotheses are those of [good rational subfields and point values](mod-l-good-rational-subfields-and-point-values.md). So the bijection of step 4 matches good subfields. Let $\mathcal T$ be the set of good functions of $K$. For $t\in\mathcal T$ that entry chooses a generator $t'$ of the good subfield matched with $k(t)$, and a bijection $B_t:\mathbb P^1(k)\to\mathbb P^1(l)$ with $B_t(\infty)=\infty$, such that condition (D) holds for the bijection of prime divisors of step 5. It also gives $\mathcal T_0(K)\subseteq\mathcal T\subseteq\mathcal T_{\mathrm{rac}}(K)$ and $L=l(t':t\in\mathcal T)$, and each $l(t')$ is relatively algebraically closed in $L$, being a curve subfield.

*Step 7: the field isomorphism.* These are the hypotheses of [field recovery from simultaneous point values](field-recovery-from-simultaneous-point-values.md), with (SV) supplied by (D) through its part 3. So there are a field isomorphism $\sigma:k\to l$ and an isomorphism $\alpha:K^i\to L^i$ with $\alpha|_k=\sigma$ and $\alpha(k(t)^i)=l(t')^i$ for every $t\in\mathcal T$. In particular $\alpha(k)=l$, and $\mathrm{char}\,k=\mathrm{char}\,l$.

*Step 8: compatibility.* Apply part 2 of [Kummer automorphisms preserving rational subfields](kummer-automorphisms-preserving-rational-subfields-are-scalars.md) with $n=1$, to $\alpha$ and $\Theta$. It needs $\mathrm{char}\,k\ne\ell$ and $\alpha(k)=l$, which hold, and two conditions on $\Theta$.

- For $t\in\mathcal T_0(K)\subseteq\mathcal T$, step 4 gives $\Theta(V_{k(t)})=V_{l(t')}$, since $l(t')$ is the curve subfield matched with $k(t)$. As $\alpha(k(t)^i)=l(t')^i$, that entry gives $\alpha_1(V_{k(t)})=V_{l(t')}$. So $\Theta(V_{k(t)})=\alpha_1(V_{k(t)})$.
- For a prime divisor $v$ of $K|k$, let $w$ be the prime divisor of $L|l$ matched with it in step 5. The image $U_v\subseteq V_K$ of the $v$-units is the kernel of $\mathrm{ord}_v$ modulo $\ell$. Its annihilator is the line $I_v$, so $U_v=I_v^\perp$, and likewise $U_w=I_w^\perp$. For $x\in V_K$, $x\in I_v^\perp$ means $g(\Theta x)=0$ for all $g\in I_w$, because $I_v=\Phi(I_w)$. So $\Theta(U_v)=U_w$.

That entry then gives $\Theta=a\,\alpha_1$ for a unique $a\in\Lambda^\times$.

*Uniqueness.* If also $\Theta=a'\alpha'_1$, then $\alpha_1\in\Lambda^\times\alpha'_1$. Part 2 of [field automorphisms acting by scalars](field-automorphisms-acting-by-scalars-on-kummer-classes.md) gives $\alpha=\mathrm{Frob}^m\circ\alpha'$ for some $m\in\mathbb Z$. $\square$

**Proof of part 2.** By part 1, the class of every compatible $\Theta$ is the image of the class of $\alpha$, so (1.1) is surjective. It is injective by part 2 of [field automorphisms acting by scalars](field-automorphisms-acting-by-scalars-on-kummer-classes.md) with $n=1$. Steps 1 and 7 give the equalities of transcendence degrees and characteristics. $\square$

**Proof of part 3.** Let $K|k$ and $L|l$ be as in the conjecture. By the corollary of [the Milnor–Galois comparison](milnor-and-galois-forms-of-mod-l-bogomolov-pop.md), if $\mathrm{char}\,l=\ell$ or $\mathrm{trdeg}(L|l)\le1$, both sets are empty and the map is a bijection. Otherwise both fields satisfy the hypotheses of part 2, and the same corollary says Topaz's map is bijective if and only if (1.1) is, which part 2 proves. $\square$

**Proof of part 4.** As recorded in [the mod-ℓ conjecture](mod-l-bogomolov-pop-conjecture.md), Topaz's mod-$\ell$ map is the composite $\rho\circ\pi$ of the map $\pi$ of the Bogomolov–Pop conjecture with the reduction map $\rho$. By part 3, $\rho\circ\pi$ is bijective. If $\rho$ is injective and $\varphi$ lies in the target of $\pi$, write $\rho(\varphi)=\rho(\pi(\alpha))$; then $\varphi=\pi(\alpha)$, so $\pi$ is onto, and $\pi$ is injective because $\rho\circ\pi$ is. Conversely, if $\pi$ is bijective, then $\rho=(\rho\circ\pi)\circ\pi^{-1}$ is bijective. $\square$

**What the proof rests on.** Parts 1 and 2 rest only on the entries linked above, all on `main`, and on what those entries cite without re-proving. The main cited inputs are:

- Topaz's local theory of alternating subspaces of character groups and the approximation theorem for independent valuations, in the chains entry.
- Pop's density theorem for minimized inertia, in the residual-curve entry.
- Standard spreading-out results and a Bertini theorem, in [the finite residual tests](uniform-support-bound-for-kummer-pencils.md). The Bertini step is checked in [Bertini irreducibility for quasi-finite maps](bertini-irreducibility-for-quasi-finite-maps.md).
- Grothendieck's limited families and Quot schemes, in Lemma D of [completed curve subfields](completed-curve-subfield-correspondence.md), which the curve-subfield entry uses.

Parts 1 and 2 need no Merkurjev–Suslin theorem, because modulo $\ell$ the alternating relation is read off the Milnor product directly. They use no pro-$\ell$ reconstruction theorem of Pop either. Part 3 adds Topaz's comparison of the commutator pairing with $K^M_2/\ell$, whose proof uses the degree-two norm residue isomorphism.

**Checks.**

- *Transcendence degree $2$ is needed.* Let $K=L=k(x)$. Then $K^M_2(K)/\ell=0$, as recorded in the Milnor–Galois comparison, so $R_K=V_K\otimes V_K$ and every linear automorphism of $V_K$ is compatible. For a point $v$ of $\mathbb P^1_k$, a class has nonzero order at $v$ modulo $\ell$ exactly when it lies outside the image $U_v$ of the $v$-units. A field automorphism $\alpha$ of $K^i$ with $\alpha(k)=k$ carries $v$-units to $\alpha_*v$-units, so $a\,\alpha_1$ preserves the number of points at which a class has nonzero order. The classes $[x]$ and $[(x-1)/(x-2)]$ are independent, as their divisors have disjoint supports. Extend them to a basis, and let $\Theta$ fix every basis vector except $[x]\mapsto[x]+[(x-1)/(x-2)]$. Then $\Theta$ is compatible, but it sends a class with nonzero orders at the two points $0,\infty$ to one with nonzero orders at the four points $0,1,2,\infty$. So $\Theta$ is not in the image of (1.1).
- *The prime $2$.* All steps include $\ell=2$, where $\Lambda^\times$ is trivial and $\Theta=\alpha_1$.

**Status.** This composes component checks made by AI agents and reviewed in this knowledgebase; neither the components nor this composition has been peer reviewed, and neither has the [manuscript](manuscripts-claiming-bogomolov-pop.md). The composition found no mismatch between the outputs of one step and the hypotheses of the next. The pro-$\ell$ claim of the September 2026 manuscript is not addressed here, beyond part 4.
