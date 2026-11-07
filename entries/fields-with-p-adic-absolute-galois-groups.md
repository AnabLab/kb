---
title: Fields with the absolute Galois group of a p-adic field
kind: theorem
summary: A field $K$ has $G_K \cong G_F$ for a finite $F/\mathbb{Q}_p$ exactly when $K$ is elementarily equivalent to a finite $F'/\mathbb{Q}_p$ (Koenigsmann). Then $G_K \cong G_{F'}$, but $F'$ need not be $F$. An extension $L/K$ for which restriction $G_L \to G_K$ is bijective is elementary.
tags: [local-fields, galois-groups, valuations, model-theory]
edges:
  - {to: galois-characterization-of-p-adically-closed-fields, label: generalizes, note: "Its case $F = \\mathbb{Q}_p$ is derived in the entry, as Koenigsmann derives it [@koenigsmann1995, Corollary 4.2, p. 179]."}
  - {to: isomorphism-classes-of-p-adic-galois-groups, label: uses, note: "Part 1 there, which holds for every $p$, gives the case of abelian $F$."}
  - {to: nonisomorphic-p-adic-fields-with-isomorphic-galois-groups, label: uses, note: "for fields $K$ with $G_K \\cong G_F$ that are not elementarily equivalent to $F$ as valued fields"}
  - {to: artin-schreier-theorem, label: analogous-to, note: "Koenigsmann presents the theorem as a $p$-adic analogue of the Artin–Schreier characterization of real closed fields [@koenigsmann1995, §4, p. 178]."}
---

**Definitions.** Fix a prime $p$. A valuation $v$ of a field $K$ of characteristic $0$ is $p$-adic if $p$ lies in its maximal ideal and $\mathcal{O}_v/p\mathcal{O}_v$ is finite. Then the maximal ideal is $t\mathcal{O}_v$ for some $t$, with $t^e\mathcal{O}_v = p\mathcal{O}_v$ and residue field of order $p^f$, and $d = ef$ is the $p$-adic rank of $(K, v)$ [@pop1988, pp. 145–146]. Pop calls $(K, v)$ $p$-adically closed if no proper algebraic extension of $K$ carries a $p$-adic valuation that extends $v$ and has the same $p$-adic rank. This holds exactly when $(K, v)$ is henselian and $vK$ is a $\mathbb{Z}$-group, meaning that $vK$ has a smallest positive element $1$ and $vK = n\,vK + \mathbb{Z} \cdot 1$ for every $n \ge 1$ [@pop1988, Theorem E.1 and footnote 1, p. 146].

A field $K$ is $p$-adically closed if it carries such a valuation. It then carries only one henselian $p$-adic valuation up to equivalence [@pop1988, Corollary 1.11, p. 154], called its $p$-adic valuation. Koenigsmann asks instead for a henselian valuation with finite residue field of characteristic $p$, a $\mathbb{Z}$-group as value group and $v(p)$ finite [@koenigsmann1995, §4, p. 178]. This is the same condition. For such a valuation, with $t$ of value $1$, $v(p)$ is finite exactly when $p\mathcal{O}_v = t^n\mathcal{O}_v$ for some $n$, and then the ideals $t^i\mathcal{O}_v$ filter $\mathcal{O}_v/p\mathcal{O}_v$ with $n$ quotients isomorphic to the residue field. Examples include the finite extensions of $\mathbb{Q}_p$, the field $\mathbb{Q}_p \cap \bar{\mathbb{Q}}$ and the field of Puiseux series over $\mathbb{Q}_p$ [@gitinkoenigsmannstock2026, Example 1.6]. The entry on the [Galois characterization of $p$-adically closed fields](galois-characterization-of-p-adically-closed-fields.md) uses the name only for $p$-adic rank $1$, where it means elementarily equivalent to $\mathbb{Q}_p$ [@gitinkoenigsmannstock2026, Theorem 1.5].

The type of a $p$-adically closed field $K$ is the isomorphism class of the completion of $K^{\mathrm{abs}} = K \cap \bar{\mathbb{Q}}$ for the restricted valuation, which is a finite extension of $\mathbb{Q}_p$. Two $p$-adically closed fields are elementarily equivalent as valued fields exactly when they have the same type. The finite extensions of $\mathbb{Q}_p$, up to isomorphism, form a complete system of representatives for this relation [@pop1988, E.5 and Theorem E.6, p. 147].

**Statement.** For a field $K$, the following are equivalent:

1. $K$ is $p$-adically closed.
2. $K$ is elementarily equivalent, in the language of rings, to a finite extension $F'$ of $\mathbb{Q}_p$.
3. $G_K \cong G_F$ for a finite extension $F$ of $\mathbb{Q}_p$.

If 2 holds, then 3 holds with $F = F'$. Koenigsmann lists these equivalences as well known, together with a fourth condition [@koenigsmann2005, Fact 2.1, p. 8].

*Proof.* Koenigsmann states that 1 and 2 are equivalent, citing Prestel and Roquette [@koenigsmann1995, §4, p. 178].

For 2 ⇒ 3, the group $G_{\mathbb{Q}_p}$ has only finitely many open subgroups of each index [@gitinkoenigsmannstock2026, Corollary 3.17 and p. 43]. An open subgroup of index $n$ in $G_{F'}$ has index $n[F':\mathbb{Q}_p]$ in $G_{\mathbb{Q}_p}$, so $G_{F'}$ has the same property. By Klingen's lemma, if a field $E$ has this property and is elementarily equivalent to a field $K$, then $G_E \cong G_K$ [@gitinkoenigsmannstock2026, Lemma 4.27]. Take $E = F'$.

For 3 ⇒ 1, this is Koenigsmann's theorem: if $G_K \cong G_F$ for some finite extension $F$ of $\mathbb{Q}_p$, then $K$ is $p$-adically closed [@koenigsmann1995, Theorem 4.1, p. 178]. $\square$

**Proof of Koenigsmann's theorem.** This summarizes [@koenigsmann1995, §4, pp. 179–180].

1. For each prime $q \ne 2, p$, the field $K$ has a valuation whose value group is not $q$-divisible [@koenigsmann1995, Proposition 4.4, p. 179]. Since $G_K$ has cohomological dimension $2$ at every prime, $K$ has characteristic $0$. Pass to finite extensions $K_q$ of $K$ and $F_q$ of $F$ that contain $\zeta_q$ and have isomorphic absolute Galois groups. Local class field theory shows that $F_q^\times/F_q^{\times q}$ has order $q^2$ and that every element outside $F_q^{\times q}$ is $q$-rigid. With $\zeta_q$ present these are properties of the Galois group, so they hold in $K_q$. Then $K_q$ has a strongly $q$-rigid element by Koenigsmann's Proposition 3.1, and his main theorem turns it into a $q$-henselian valuation of $K_q$ whose value group is not $q$-divisible. Its restriction to $K$ has the same property.
2. The group $G_K$ is prosolvable. Using two primes $q, q'$ from step 1 with $|q - q'| > 1$, a lemma of Neukirch and Pop gives a nontrivial henselian valuation on $K$ [@koenigsmann1995, Lemma 4.3, p. 179].
3. Some henselian valuation $v$ of $K$ has residue characteristic $p$ [@koenigsmann1995, Proposition 4.5, p. 180].
4. A henselian field $(K, v)$ with $\mathrm{char}\, Kv > 0$ whose absolute Galois group is that of a $p$-adically closed field is $p$-adically closed, with $v$ its $p$-adic valuation [@pop1988, Theorem E.9, p. 149]. Koenigsmann concludes with this theorem [@koenigsmann1995, p. 180].

**History.** Neukirch proved Koenigsmann's theorem for subfields of $\bar{\mathbb{Q}}$, and Pop for fields $K$ whose algebraic closure is generated over $K$ by algebraic numbers [@koenigsmann1995, p. 179], [@pop1988, Theorem E.11, p. 149]. Pop conjectured the general case [@pop1988, Conjecture E.7, p. 148]. He also proved a relative form: for any field $K$, the $p$-adically closed algebraic extensions of $K$ are exactly the fixed fields of the closed subgroups $G \subseteq G_K$ that are isomorphic to absolute Galois groups of $p$-adically closed fields and meet the kernel of restriction $G_K \to G_{K^{\mathrm{abs}}}$ trivially [@pop1988, Theorem E.12, p. 149]. For $p \ne 2$, Pop and Efrat each proved the theorem by other methods, and Pop's proof appears as an appendix to Koenigsmann's paper [@koenigsmann1995, p. 166 and Appendix, pp. 180–181]. Efrat's paper has not been opened for this entry.

**What the group does not determine.** In 3, the field $F$ need not be elementarily equivalent to $K$ [@koenigsmann1995, §4, p. 178]. Since $G_K \cong G_{F'}$ for every $F'$ as in 2, the question is which finite extensions of $\mathbb{Q}_p$ have isomorphic absolute Galois groups. They have the same degree and the same maximal subfield abelian over $\mathbb{Q}_p$, and the converse holds for odd $p$ and in some cases for $p = 2$, as the [classification](isomorphism-classes-of-p-adic-galois-groups.md) records. For example, let $F_1$ and $F_2$ be [non-isomorphic finite extensions of $\mathbb{Q}_p$ with isomorphic absolute Galois groups](nonisomorphic-p-adic-fields-with-isomorphic-galois-groups.md). Then $K = F_2$ satisfies 3 with $F = F_1$, but $F_1$ and $F_2$ are not elementarily equivalent as valued fields, by Pop's E.5.

**Abelian $F$.** Let $F$ be a finite extension of $\mathbb{Q}_p$ that is abelian over $\mathbb{Q}_p$. Then for every field $K$,

$$G_K \cong G_F \iff K \text{ is elementarily equivalent to } F.$$

*Proof.* If $K$ is elementarily equivalent to $F$, then $G_K \cong G_F$ by 2 ⇒ 3. Conversely, if $G_K \cong G_F$, then by 3 ⇒ 2 the field $K$ is elementarily equivalent to some finite extension $F'$ of $\mathbb{Q}_p$, and $G_{F'} \cong G_K \cong G_F$ by 2 ⇒ 3. Embed $F$ and $F'$ in an algebraic closure of $\mathbb{Q}_p$. By part 1 of the classification, which holds for every $p$, $[F':\mathbb{Q}_p] = [F:\mathbb{Q}_p]$ and the maximal subfield of $F'$ abelian over $\mathbb{Q}_p$ is that of $F$, which is $F$ itself. So $F \subseteq F'$ with equal degrees, and $F' = F$. $\square$

Koenigsmann observes that, by Jarden–Ritter, Ritter and Jenkner, $G_F$ determines $F$ among the finite extensions inside the maximal abelian extension of $\mathbb{Q}_p$, and deduces the case $F = \mathbb{Q}_p$: $G_K \cong G_{\mathbb{Q}_p}$ exactly when $K$ is elementarily equivalent to $\mathbb{Q}_p$ [@koenigsmann1995, pp. 178–179 and Corollary 4.2]. The argument works for every finite extension $F$ that is, up to isomorphism, the only finite extension of $\mathbb{Q}_p$ with absolute Galois group isomorphic to $G_F$.

**Relative form.** Let $K$ be $p$-adically closed and $L/K$ a field extension, not necessarily algebraic, such that restriction $G_L \to G_K$ is an isomorphism. Then $K$ is an elementary substructure of $L$. This is Koenigsmann's Fact 2.2. He calls it a consequence of the theorem above and notes that it already follows from Pop's relative characterization, without giving the argument [@koenigsmann2005, Fact 2.2, p. 9]. The proof below is written out here from results of Pop. Write $\tilde L$ for an algebraic closure of $L$ and $\tilde K$ for the algebraic closure of $K$ in it.

*Proof.*

1. *$K$ is algebraically closed in $L$, and $\tilde L = L\tilde K$.* For any field extension $E/E_0$, restriction $G_E \to G_{E_0}$ is an isomorphism exactly when $E_0$ is relatively separably closed in $E$ and the separable closure of $E$ is generated over $E$ by that of $E_0$ [@pop1988, Lemma 5.1, p. 173]. Here the characteristic is $0$.
2. *$L$ is $p$-adically closed.* By 1 ⇒ 2 ⇒ 3, $G_L \cong G_K \cong G_F$ for a finite extension $F$ of $\mathbb{Q}_p$, so this follows from Koenigsmann's theorem. Pop's results also give it: $\tilde K = K\bar{\mathbb{Q}}$ for $p$-adically closed $K$ [@pop1988, E.4, p. 147], so $\tilde L = L\bar{\mathbb{Q}}$ by step 1, and Pop's theorem for such fields applies [@pop1988, Theorem E.11, p. 149]. Let $w$ be the $p$-adic valuation of $L$.
3. *$w$ restricts to the $p$-adic valuation $v$ of $K$, and the $p$-adic ranks agree.* If $(L, w)$ is $p$-adically closed and $K \subseteq L$ is algebraically closed in $L$, then $(K, w|_K)$ is $p$-adically closed with the same $p$-adic rank as $(L, w)$ [@pop1988, Theorem E.2, p. 147]. So $w|_K$ is a henselian $p$-adic valuation of $K$, by Theorem E.1. As $K$ has only one up to equivalence [@pop1988, Corollary 1.11, p. 154], $w|_K$ is equivalent to $v$.
4. *Conclusion.* An extension of $p$-adically closed fields of the same $p$-adic rank is elementary. Pop states this, with the resulting model completeness of the theory of $p$-adically closed fields of given $p$-adic rank, from Prestel and Roquette [@pop1988, Theorem E.3, p. 147]. So $(K, v)$ is an elementary substructure of $(L, w)$, and in particular $K$ is one of $L$ in the language of rings. $\square$

Koenigsmann uses this to show that if the restriction map $G_{K(X)} \to G_K$ for a smooth complete curve $X$ over $K$ has a section, then $X(K) \ne \emptyset$. See [Koenigsmann's theorem on birational sections over local fields](birational-sections-over-local-fields.md).
