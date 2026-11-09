---
title: Recovering divisorial inertia from abelian-by-central data
kind: problem
summary: 'Can $\Pi^c_K$ distinguish divisorial inertia among quasi-divisorial inertia over arbitrary algebraically closed constants? A checked 2026 proof establishes isomorphism invariance for transcendence degree at least $2$; an intrinsic recognition recipe is not yet specified here.'
tags: [function-fields, galois-groups, valuations]
edges:
  - {to: bogomolov-pop-conjecture, label: addresses, note: "A positive answer would give reconstruction in transcendence degree greater than $2$ [@pop2018, Theorem 1.1]."}
  - {to: pop-reconstruction-from-divisorial-inertia, label: motivated-by}
  - {to: quasi-divisorial-groups-recoverable, label: motivated-by}
---

**Question.** Let $K|k$ be a function field over an arbitrary algebraically closed field with $\mathrm{char}(k) \ne \ell$ and $\mathrm{td}(K|k) \ge 2$. [Quasi-divisorial inertia is recoverable](quasi-divisorial-groups-recoverable.md) from $\Pi^c_K$. Is there a group-theoretic recipe that recovers $\mathrm{In.div}(K)$ inside $\mathrm{In.q.div}^1(K)$ using $\Pi^c_K$ [@pop2018, §1]?

Pop notes that this apparently weaker question is equivalent to distinguishing the divisorial subgroups among the quasi-divisorial ones [@pop2018, §1].

**Known.** A recipe exists if also $\mathrm{td}(K|k) > \dim(k)$, where $\dim(k)$ is the Kronecker dimension [@pop2018, Theorem 1.2].

**Status.** Pop's 2018 preprint describes the general question as unknown [@pop2018, §1, pp. 2–3]. The criterion in part 1 of [divisoriality from completed curve subfields](divisoriality-from-completed-curve-subfields.md) has now been checked: a quasi prime divisor $v$ is divisorial exactly when $D_v^\perp\cap\widehat E=0$ for some curve subfield $E$. Steps 0–5 of [the pro-$\ell$ reconstruction theorem](pro-l-abelian-by-central-reconstruction-of-function-fields.md) supply the required correspondences and prove that every bracket-compatible isomorphism preserves the divisorial inertia and decomposition pairs, throughout the hypotheses of this question.

[Invariance and recognition](divisorial-inertia-invariance-and-recognition.md) explains the remaining distinction. The checked curve-subfield theorem transports completed curve subfields; a recipe identifying that family from the abstract group alone is not specified in these entries. Pop states recovery and invariance separately [@pop2018, Theorem 1.2(2)–(3), p. 3], so this question is retained without a `resolves` arrow rather than identifying the two requirements. This does not claim that no recipe can be extracted from the checked reconstruction proof. The [2026 manuscript](manuscripts-claiming-bogomolov-pop.md) and these AI-agent checks are not peer reviewed.
