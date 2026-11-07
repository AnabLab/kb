---
title: Prime divisors, quasi prime divisors and minimized inertia
kind: definition
summary: Prime divisors of a function field come from Weil prime divisors on normal models. Quasi prime divisors generalize them to valuations possibly nontrivial on the constants. Minimized inertia and decomposition groups replace the usual ones when the residue characteristic may be $\ell$.
tags: [function-fields, valuations]
---

**Prime divisors.** Let $K|k$ be a function field over an algebraically closed field, with $\mathrm{char}(k) \ne \ell$. Its prime divisors are the valuations defined by Weil prime divisors of normal models of $K|k$. A valuation $v$ of $K$ is a prime divisor if and only if it is trivial on $k$ and $\mathrm{td}(K|k) = \mathrm{td}(Kv|k) + 1$ [@pop2018, §1].

**Quasi prime divisors.** These are the valuations $v$ of $K$, not necessarily trivial on $k$, that are minimal among the valuations satisfying $\mathrm{td}(K|k) = \mathrm{td}(Kv|kv) + 1$ and $vK/vk \cong \mathbb{Z}$. The prime divisors are exactly the quasi prime divisors that are trivial on $k$ [@pop2018, §1]. Over an algebraic closure of a finite field, quasi-divisorial valuations are exactly the divisorial ones [@topaz2016, §1.1].

**Minimized groups.** Let $U_v$ be the $v$-units in $K^\times$, and $U^1_v = 1 + \mathfrak{m}_v$ the principal units. Let $K'$ be the maximal pro-$\ell$ abelian extension of $K$. The field $K[\sqrt[\ell^\infty]{U^1_v}]$ contains the decomposition field of $v$, and $K[\sqrt[\ell^\infty]{U_v}]$ contains its inertia field. The minimized groups are $Z^1_v = \mathrm{Gal}(K'|K[\sqrt[\ell^\infty]{U^1_v}])$ and $T^1_v = \mathrm{Gal}(K'|K[\sqrt[\ell^\infty]{U_v}])$, so that $T^1_v \subseteq Z^1_v \subseteq \Pi^a_K$. They agree with the usual inertia and decomposition groups if the residue characteristic of $v$ is not $\ell$ [@pop2018, §2].
