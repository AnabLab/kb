---
title: Can tame-trivial prime-to-p torsion have finite outer conjugacy?
kind: problem
summary: 'For odd p and a p-adic field K of degree at least three, can a nonidentity automorphism of G_K of finite order prime to p induce the identity on the tame quotient and have finitely many conjugates in Out(G_K)?'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: central-scalars-in-finite-outer-conjugacy-on-wild-frattini, label: motivated-by, note: 'Its Corollary 1 reduces such a finite subgroup to central scalars and cyclotomic-line multipliers, without excluding it.'}
  - {to: p-adic-galois-groups-in-their-automorphism-groups, label: addresses, note: 'A negative answer excludes rival copies meeting G_K openly with index prime to p, in degree at least three.'}
---

**Question.** Let $p$ be odd, let $K/\mathbb Q_p$ be finite with $[K:\mathbb Q_p]\ge3$, and let $P$ be the wild inertia of $G=G_K$. Is there a nonidentity finite-order automorphism $\alpha$ of $G$, of order prime to $p$, such that $\alpha$ induces the identity on $G/P$ and its class has finitely many conjugates in $\operatorname{Out}(G)$?

This is the finite-order question posed in [research issue 521](https://github.com/AnabLab/kb/issues/521). Its motivation and the reduction to a central scalar are recorded in [the central-scalar theorem](central-scalars-in-finite-outer-conjugacy-on-wild-frattini.md). The [central involutions](nonconstant-central-involutions-on-wild-frattini.md) supply actual tame-trivial prime-to-$p$ torsion whose action on wild Frattini commutes with every induced automorphism. That property alone does not establish finite outer conjugacy.

An answer must concern conjugacy in the full outer automorphism group, not just the action on wild Frattini. The [boundary-twist theorem](boundary-twists-exclude-finite-outer-conjugacy-of-wild-scalars.md) gives a negative answer in the stated range.
