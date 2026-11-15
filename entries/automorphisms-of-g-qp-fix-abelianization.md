---
title: Automorphisms of the absolute Galois group of Q_p fix its abelianization
kind: theorem
summary: 'For every prime p, every continuous automorphism of G_Qp induces the identity on its full abelianization. Hence it fixes every abelian representation exactly, in every dimension, and every closed subgroup with abelian quotient is characteristic.'
tags: [local-fields, galois-groups, hodge-theory, mono-anabelian]
edges:
  - {to: local-field-galois-invariants, label: uses, note: 'Automorphisms preserve inertia, the unramified Frobenius and the full p-adic cyclotomic character.'}
  - {to: local-class-field-theory, label: uses, note: 'Over Q_p, the maximal abelian extension is the compositum of the unramified extension and the p-power cyclotomic tower.'}
  - {to: aut-intrinsic-hodge-tate-representations, label: addresses, note: 'Every abelian Hodge–Tate representation of G_Qp is Aut-intrinsically Hodge–Tate, with no dimension or semisimplicity restriction.'}
  - {to: automorphisms-of-the-galois-group-of-qp-scale-norm-one-units, label: analogous-to, note: 'The action on the base group’s abelianization is trivial, although the action on the abelianization of its unramified quadratic open subgroup need not be.'}
---

**Setting.** Fix any prime $p$, put $G=G_{\mathbb Q_p}$, and let $I\subseteq G$ be inertia. Normalize the unramified quotient
$$\nu:G\longrightarrow G/I\xrightarrow{\sim}\widehat{\mathbb Z}$$
by sending arithmetic Frobenius to $1$. Write $\chi:G\to\mathbb Z_p^\times$ for the full $p$-adic cyclotomic character, including its finite-order part.

**Theorem (proved here).**

1. The pair $(\nu,\chi)$ induces a canonical topological isomorphism
   $$G^{\mathrm{ab}}\xrightarrow{\sim}\widehat{\mathbb Z}\times\mathbb Z_p^\times.$$
2. Every continuous automorphism $\alpha$ of $G$ satisfies $\alpha^{\mathrm{ab}}=\operatorname{id}$.
3. If $B$ is a Hausdorff abelian topological group and $r:G\to B$ is a continuous homomorphism, then $r\circ\alpha=r$. Every closed subgroup of $G$ containing the closed commutator subgroup is characteristic.

In particular, for any continuous finite-dimensional $\mathbb Q_p$-representation $\rho$ of $G$ with abelian image,
$$\rho\circ\alpha=\rho.$$
Thus an abelian Hodge–Tate representation of $G$ is [Aut-intrinsically Hodge–Tate](aut-intrinsic-hodge-tate-representations.md) in every dimension. The equality also preserves crystallinity and de Rham admissibility whenever these hold. Neither semisimplicity nor a Hodge–Tate hypothesis is needed for the equality itself.

**Proof.** Local class field theory gives
$$\mathbb Q_p^{\mathrm{ab}}=\mathbb Q_p^{\mathrm{ur}}\,\mathbb Q_p(\mu_{p^\infty}),$$
with the two factors linearly disjoint over $\mathbb Q_p$: the cyclotomic tower is totally ramified. This is the specialization to the uniformizer $p$ of the compositum decomposition in [@milnecft, Chapter I, §1.11, p. 24]. Restriction to the two factors identifies their Galois groups with $\widehat{\mathbb Z}$ through Frobenius and $\mathbb Z_p^\times$ through the action on roots of unity. These restrictions are precisely $\nu$ and $\chi$, proving part 1.

The [functorial local invariants](local-field-galois-invariants.md) identify $I$ and arithmetic Frobenius in $G/I$ invariantly under $\alpha$ [@hoshi2019, Theorem 1.4, (3)–(4) and (ii), pp. 9–11]. Since Frobenius topologically generates $G/I$, the induced automorphism of that quotient is the identity, so $\nu\circ\alpha=\nu$. The cyclotomic character is also invariant: $\chi\circ\alpha=\chi$ [@mochizuki1997, Proposition 1.1, p. 3]. Hence $(\nu,\chi)\circ\alpha=(\nu,\chi)$, and the injectivity in part 1 proves part 2.

Every continuous homomorphism to a Hausdorff abelian group kills the closed commutator subgroup, so factors through $G^{\mathrm{ab}}$. Part 2 proves the first assertion of part 3. A closed subgroup containing that commutator subgroup is the inverse image of its image in $G^{\mathrm{ab}}$, so part 2 preserves it. Applying the same factorization to $\rho$, viewed as a homomorphism to its abelian image, proves the representation assertion. $\square$

**Scope.** The proof includes $p=2$ and all torsion in $G^{\mathrm{ab}}$; using only $\log_p\chi$ would lose that information. It does not assert triviality of the action on abelianizations of proper open subgroups: [norm-one units in an unramified quadratic extension](automorphisms-of-the-galois-group-of-qp-scale-norm-one-units.md) can move. Accordingly, the [two-dimensional Hodge–Tate counterexample over $\mathbb Q_p$](two-dimensional-representation-of-g-qp-not-aut-intrinsically-hodge-tate.md) has nonabelian image. The abelian Lubin–Tate counterexamples in the [overview](aut-intrinsic-hodge-tate-representations.md) are over larger base fields.
