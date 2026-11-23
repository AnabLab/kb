---
title: Néron component groups from integral Tate modules
kind: theorem
summary: 'For semistable abelian varieties over a p-adic field, integral Tate modules recover Neron component groups, with Frobenius action. Inertia cohomology gives the prime-to-p parts; maximal 1-crystalline submodules give the p-part, including at p=2 and arbitrary ramification.'
tags: [abelian-varieties, local-fields, hodge-theory, reconstruction-algorithms]
edges:
  - {to: crystalline-tate-module-good-reduction, label: uses, note: 'Uses its maximal 1-crystalline lattice; the quotient below measures the additional crystalline torsion after reduction modulo a power of p.'}
  - {to: prime-to-p-tate-modules-do-not-bound-component-groups, label: analogous-to, note: 'Integral prime-to-p modules recover every prime-to-p component, while its family varies the p-primary component with those modules and rational p-adic data fixed.'}
  - {to: finite-torsion-recovers-semistable-inertia, label: analogous-to, note: 'Reconstructs Neron components, rather than the finite inertia quotient obstructing semistability.'}
---

**Setting.** Let $K/\mathbb Q_p$ be finite, with residue field $k$, inertia $I_K$ and $G_k=G_K/I_K$. Let $A/K$ have semistable reduction and Néron model $\mathcal A$. Write
$$C_A=(\mathcal A_{\bar k}/\mathcal A^0_{\bar k})(\bar k)$$
for its geometric component group, with its $G_k$-action.

**Prime-to-$p$ formula (Grothendieck).** For $\ell\ne p$ there is a canonical isomorphism of unramified $G_K$-modules
$$C_A[\ell^\infty]\cong H^1_{\mathrm{cont}}(I_K,T_\ell A)_{\mathrm{tors}}.$$
Cohomology uses continuous cochains [@gunton2021crystalline, Proposition 1.1, p. 40].

**Formula at $p$ (Gunton).** Put $T=T_pA$. A finite $\mathbb Z_p[G_K]$-module is *$1$-crystalline* if it is a quotient of a stable lattice in a crystalline representation with weights in $[0,1]$, where $\mathbb Q_p(1)$ has weight $1$. Write $\operatorname{Crys}_1$ for the maximal such submodule; for lattices use the maximal lattice with crystalline rationalization of these weights [@gunton2021crystalline, Definition 3.1(v)–(vi), p. 54; Definition 3.13 and Proposition 3.14, p. 57]. For every $m\ge1$, canonically as unramified $G_K$-modules,
$$C_A[p^m]\cong
\frac{\operatorname{Crys}_1(T/p^mT)}
{\operatorname{Crys}_1(T)/p^m\operatorname{Crys}_1(T)}.$$
The denominator embeds by reduction. This is [@gunton2021crystalline, Lemma 5.7, pp. 78–79]; it includes $p=2$ and arbitrary ramification.

**Recovery (deduced here).** Over this fixed $K$, an isomorphism $T_\ell A\cong T_\ell B$ between semistable abelian varieties identifies $C_A[\ell^\infty]$ and $C_B[\ell^\infty]$ as $G_k$-modules, also when $\ell=p$. Thus the integral Tate modules at all primes determine $C_A$ with Frobenius action, and its rational components $C_A^{G_k}$.

For $\ell\ne p$, apply the first formula functorially. At $p$, an isomorphism of lattices preserves the maximal crystalline submodules and their reductions, hence the displayed quotients for every $m$. These identify the entire $p$-primary groups: choose $m$ killing both finite groups. Finally a finite abelian group is the direct sum of its primary subgroups; taking $G_k$-invariants gives the last assertion.

**Scope.** The [Tate-curve family](prime-to-p-tate-modules-do-not-bound-component-groups.md) has identical paired integral prime-to-$p$ modules and paired rational $p$-adic modules, while $C_{E_r}\cong\mathbb Z/p^{2r}\mathbb Z$. Its integral $p$-adic modules must therefore differ. The $p$-formula above assumes semistable reduction and uses crystallinity over the specified field $K$.
