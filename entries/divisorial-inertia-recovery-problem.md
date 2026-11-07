---
title: Recovering divisorial inertia from abelian-by-central data
kind: problem
summary: 'Given $\Pi^c_K$ for a function field $K|k$ over an arbitrary algebraically closed field, can one recover the inertia of prime divisors inside the recoverable quasi-divisorial inertia? By Pop, a recipe would give the Bogomolov–Pop reconstruction when $\mathrm{td}(K|k) > 2$.'
tags: [function-fields, galois-groups, valuations]
edges:
  - {to: bogomolov-pop-conjecture, label: addresses, note: "A positive answer would give reconstruction in transcendence degree greater than $2$ [@pop2018, Theorem 1.1]."}
  - {to: pop-reconstruction-from-divisorial-inertia, label: motivated-by}
  - {to: quasi-divisorial-groups-recoverable, label: motivated-by}
---

**Question.** Let $K|k$ be a function field over an arbitrary algebraically closed field with $\mathrm{char}(k) \ne \ell$ and $\mathrm{td}(K|k) \ge 2$. [Quasi-divisorial inertia is recoverable](quasi-divisorial-groups-recoverable.md) from $\Pi^c_K$. Is there a group-theoretic recipe that recovers $\mathrm{In.div}(K)$ inside $\mathrm{In.q.div}^1(K)$ using $\Pi^c_K$ [@pop2018, §1]?

Pop notes that this apparently weaker question is equivalent to distinguishing the divisorial subgroups among the quasi-divisorial ones [@pop2018, §1].

**Known.** A recipe exists if also $\mathrm{td}(K|k) > \dim(k)$, where $\dim(k)$ is the Kronecker dimension [@pop2018, Theorem 1.2].

**Status.** Pop's 2018 preprint describes the general question as unknown [@pop2018, §1]. A [2026 manuscript](manuscripts-claiming-bogomolov-pop.md) that claims the Bogomolov–Pop conjecture also claims a criterion for a quasi-prime divisor to be divisorial, and that bracket-compatible isomorphisms preserve divisorial inertia and decomposition groups [@openai2026bp, Proposition 6.6]. It is not peer reviewed, and this entry does not record the question as settled.
