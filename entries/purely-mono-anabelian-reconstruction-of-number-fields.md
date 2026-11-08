---
title: Purely mono-anabelian reconstruction of number fields
kind: theorem
summary: Tachihara–Tsujimura (2026 preprint) give a group-theoretic algorithm that recovers a solvably closed Galois extension of a number field, with its Galois action, from the abstract Galois group, and whose proof does not use Neukirch–Uchida. Uchida's theorem follows as a corollary.
tags: [number-fields, galois-groups, mono-anabelian, solvable-quotients]
edges:
  - {to: uchida-solvably-closed-theorem, label: implies, note: "Deduced formally from the algorithm, so this gives a proof that does not go through Uchida's [@tachiharatsujimura2026, Corollary 4.7 and Remark 4.7.1, pp. 47–48]."}
  - {to: mono-anabelian-reconstruction-number-fields, label: motivated-by, note: "Steps (1) and (2) of the algorithm are Hoshi's. The new Step (3) is what removes his use of Uchida's theorem [@tachiharatsujimura2026, pp. 8 and 42–43]."}
  - {to: neukirch-local-theory, label: uses, note: "Decomposition subgroups are the maximal closed subgroups isomorphic to absolute Galois groups of p-adic fields [@tachiharatsujimura2026, Theorem 3.4, pp. 31–32]."}
  - {to: local-field-galois-invariants, label: uses, note: "The local reconstructions of the multiplicative group, the units and the cyclotome are reviewed in [@tachiharatsujimura2026, Lemmas 2.3–2.5, pp. 25–28]."}
  - {to: m-step-mono-anabelian-reconstruction, label: analogous-to, note: "The finite-step version here, proved only in outline, starts from $\\mathrm{Gal}(F_{m+4}/F)$ for $m \\ge 1$ instead of $m+9$, and does not use the bi-anabelian theorem [@tachiharatsujimura2026, pp. 49–50]."}
---

**Setting.** A profinite group is of *GSC-type* if it is isomorphic to $\mathrm{Gal}(E/F)$ for some number field $F$ and some solvably closed Galois extension $E/F$ [@tachiharatsujimura2026, Definition 3.1, p. 30]. A field is solvably closed if it has no nontrivial finite abelian extension [@tachiharatsujimura2026, §0, p. 13]. Absolute Galois groups of number fields are of GSC-type.

**Statement.** There is a group-theoretic algorithm that takes a profinite group $G$ of GSC-type and constructs a field $\widetilde{\mathbf F}(G)$ with an action of $G$. For every number field $F$ and solvably closed Galois extension $E/F$ there is a canonical $\mathrm{Gal}(E/F)$-equivariant isomorphism $\widetilde{\mathbf F}(\mathrm{Gal}(E/F)) \cong E$ [@tachiharatsujimura2026, Theorem 4.5 (5) and Theorem 4.6, p. 46]. The algorithm first constructs a number field $\mathbf F(G)$ with a canonical isomorphism $\mathbf F(\mathrm{Gal}(E/F)) \cong F$ [@tachiharatsujimura2026, Theorem 4.5 (2), pp. 44–45]. It then applies the same construction to every open normal subgroup and takes the inductive limit [@tachiharatsujimura2026, Theorem 4.5 (3)–(5), pp. 45–46].

The authors call the algorithm *purely* mono-anabelian: neither the construction nor its verification uses the Neukirch–Uchida theorem [@tachiharatsujimura2026, Theorem A, p. 4].

**Consequence.** For solvably closed Galois extensions $E_1/F_1$ and $E_2/F_2$ of number fields, every isomorphism $\mathrm{Gal}(E_1/F_1) \cong \mathrm{Gal}(E_2/F_2)$ is induced by a unique field isomorphism $E_1 \cong E_2$ carrying $F_1$ to $F_2$. This is [Uchida's theorem](uchida-solvably-closed-theorem.md), and here it follows formally from the algorithm [@tachiharatsujimura2026, Corollary 4.7, pp. 47–48]. [Hoshi's earlier algorithm](mono-anabelian-reconstruction-number-fields.md) does not give this, because its verification uses the Neukirch–Uchida theorem, so deducing the theorem from it would be circular [@tachiharatsujimura2026, Introduction, p. 3]. The authors describe the new algorithm as, to their knowledge, the first purely mono-anabelian version of the Neukirch–Uchida theorem for general number fields [@tachiharatsujimura2026, Remark 4.7.1, p. 48].

**Levels of reconstruction.** The authors arrange anabelian results in four levels [@tachiharatsujimura2026, Introduction, pp. 4–5]:

1. *Bi-anabelian:* every isomorphism of Galois groups comes from a unique isomorphism of fields.
2. *Pseudo mono-anabelian:* a bi-anabelian result together with a group-theoretic construction of a container for the field. A reference model is then transported along an isomorphism.
3. *Impurely mono-anabelian:* the algorithm itself is intrinsic, but its verification uses the bi-anabelian result. Hoshi's algorithm and Mao–Saïdi's are of this kind.
4. *Purely mono-anabelian:* neither the algorithm nor its verification uses the bi-anabelian result.

They ask whether every bi-anabelian result can be lifted to a purely mono-anabelian one, and suspect that the answer is no in general. As evidence they note that in settings where decomposition subgroups degenerate, even constructing a container may fail [@tachiharatsujimura2026, Introduction, Q.4 and (C1), pp. 5–7].

**Method.** Write $\mathcal V_F^{d=1}$ for the primes $\mathfrak p$ of $F$ with $F_{\mathfrak p} = \mathbb Q_p$. Write $\widehat M = \varprojlim_n M/nM$ for the *Kummer completion* of an abelian group $M$ [@tachiharatsujimura2026, Definition 1.1, p. 15]. The construction of $\mathbf F(G)$ has three steps [@tachiharatsujimura2026, Introduction, pp. 7–9]:

1. *Global cyclotome.* Reconstruct a cyclotome $\Lambda^{\mathrm{gl}}(G)$ with canonical isomorphisms to the local cyclotome of every decomposition subgroup. Because $E$ is solvably closed, Kummer theory identifies $H^1(G, \Lambda^{\mathrm{gl}}(G))$ with $\widehat{F^\times}$ [@tachiharatsujimura2026, Lemma 1.3 (2), p. 17, and Lemma 3.7, pp. 35–36].
2. *Containers.* Reconstruct the Kummer container $\mathcal H^\times(F) = F^\times \cdot \widehat{\mathcal O_F^\times} \subset \widehat{F^\times}$ [@tachiharatsujimura2026, Lemma 1.8, p. 22, and Lemma 3.8, pp. 36–37]. Also reconstruct the ring $\prod_{\mathfrak p \in \mathcal V_F^{d=1}} F_{\mathfrak p}$ and an injection of the container into it [@tachiharatsujimura2026, Theorem 4.5 (1)–(2), pp. 44–45]. The ring structure comes from Hoshi's reconstruction of the field $\mathbb Q_p$ from $G_{\mathbb Q_p}$ [@tachiharatsujimura2026, Lemma 2.7, p. 30]. Steps 1 and 2 are due to Hoshi and rest on [Neukirch's characterization of decomposition subgroups](neukirch-local-theory.md) [@tachiharatsujimura2026, Introduction, p. 8].
3. *Cutting out $F^\times$.* This step is new. An element $a$ of $\prod_{\mathfrak p \in \mathcal V_F^{d=1}} F_{\mathfrak p}$ lies in $F$ exactly when (i) $a$ lies in the image of $\mathcal H^\times(F) \cup \{0\}$, (ii) $a$ is algebraic over $\mathbb Q$, (iii) $\mathbb Q[a]$ is a field, and (iv) every prime that splits completely in $F$ splits completely in $\mathbb Q[a]$ [@tachiharatsujimura2026, Lemma 4.4, pp. 40–41].

The proof of Lemma 4.4 first reduces to $F$ Galois over $\mathbb Q$. Conditions (iii) and (iv), together with a splitting-set criterion derived from the Chebotarev density theorem, then embed $\mathbb Q[a]$ into $F$ [@tachiharatsujimura2026, Introduction, p. 9, and Lemma 4.3, p. 40], so the minimal polynomial of $a$ has roots $b_1, \dots, b_n$ in $F$. At each prime of $\mathcal V_F^{d=1}$, $a$ agrees with some $b_i$, which partitions $\mathcal V_F^{d=1}$ into finitely many pieces. A consequence of Grunewald and Segal's theorem on congruence topologies shows that one piece detects the profinite completion of a group of $S$-units. This forces $a = b_i$ [@tachiharatsujimura2026, Lemma 4.2, p. 39, and proof of Lemma 4.4, pp. 41–42].

**How pure.** The authors say the meaning of "purely" is not completely fixed. The verification uses the Neukirch–Uchida theorem nowhere, and uses no bi-anabelian result of the first level above. But other kinds of bi-anabelian result exist, and Lemma 4.3 may be regarded as one of them, a weak Hom-version. So calling the algorithm purely mono-anabelian is offered as a proposal [@tachiharatsujimura2026, Remarks 4.6.1 and 4.6.2, pp. 46–47].

**Open questions.** The authors ask two questions about Lemma 4.4, open to their knowledge when they wrote the paper [@tachiharatsujimura2026, Remark 4.4.2, p. 43]:

- (Q-1) Do conditions (i) and (ii) alone characterize $F$?
- (Q-2) Can (i) be weakened? The weaker condition is that $a$, if nonzero, lies in $\prod_{\mathfrak p} F_{\mathfrak p}^\times$, and its image in $\prod_{\mathfrak p} \widehat{F_{\mathfrak p}^\times}$ comes from $\widehat{F^\times}$.

They add that the two modifications may also be considered together.

**Finite-step solvable variant.** Let $m \ge 1$, let $F_{m+4}$ be a maximal $(m+4)$-step solvable extension of $F$, and let $F_m \subset F_{m+4}$ be the maximal $m$-step solvable subextension. The authors state a purely mono-anabelian algorithm that reconstructs $F_m$ with its $\mathrm{Gal}(F_m/F)$-action from the abstract group $\mathrm{Gal}(F_{m+4}/F)$ [@tachiharatsujimura2026, Theorem B, p. 11, and Theorem 5.6, p. 57].

- *Proof status.* They give only an outline of its proof, and leave the definitive treatment to a sequel in preparation [@tachiharatsujimura2026, §5, p. 49].
- *Inputs.* The algorithm starts from Saïdi and Tamagawa's group-theoretic reconstruction of the decomposition subgroups [@tachiharatsujimura2026, Theorem 5.5, p. 54], from the work behind the [m-step solvable Neukirch–Uchida theorem](m-step-solvable-neukirch-uchida.md).
- *A sharper version.* A refinement of that step, announced by Tamagawa but not public when the paper was written, would lower $m+4$ to $m+3$ [@tachiharatsujimura2026, Remarks 5.5.1 and 5.6.2, pp. 54 and 57].
- *Why $m \ge 1$.* The argument needs $F_m^\times \subset (F_{m+1}^\times)^n$ for all $n$, which fails for $m = 0$. For example, $2^{1/3}$ does not lie in the maximal abelian extension of $\mathbb Q$ [@tachiharatsujimura2026, Lemma 5.2 and Remark 5.2.1, p. 53].

For comparison, [Mao and Saïdi's algorithm](m-step-mono-anabelian-reconstruction.md) needs $\mathrm{Gal}(F_{m+9}/F)$ with $m \ge 3$, and depends on Saïdi and Tamagawa's bi-anabelian theorem [@tachiharatsujimura2026, §5, p. 50].

**Source status.** This is RIMS Preprint 2002, dated 3 September 2026. The authors declare that the first author used an AI assistant for English exposition and to find typographical and notational errors, and that all mathematical ideas and arguments are the authors' own [@tachiharatsujimura2026, Declaration on the Use of AI Tools, p. 57].
