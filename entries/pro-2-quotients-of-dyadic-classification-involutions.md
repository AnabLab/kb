---
title: Full pro-2 quotients of dyadic classification involutions
kind: theorem
summary: 'For dyadic fields without i, the full maximal pro-2 extension diagram, including the outer involution and every cyclotomic layer, is determined by the degree and cyclotomic intersection. Thus it cannot distinguish candidates with equal maximal abelian subfields.'
tags: [local-fields, galois-groups, pro-p-groups, reconstruction-algorithms]
edges:
  - {to: dyadic-galois-groups-from-outer-involutions, label: addresses, note: 'The images of its classification involutions in the full maximal pro-2 quotients are conjugate for every pair of classification candidates; this does not lift the conjugacy to the absolute groups.'}
  - {to: isomorphism-classes-of-p-adic-galois-groups, label: addresses, note: 'Rules out the full unfiltered pro-2 diagram as an obstruction when the degrees and maximal abelian subfields agree; the remaining dyadic absolute-group classification is not settled.'}
  - {to: maximal-pro-p-galois-groups-of-p-adic-fields, label: uses, note: 'The isomorphism criterion by degree and cyclotomic intersection.'}
  - {to: demushkin-group, label: uses, note: 'Uniqueness of the canonical character makes every group isomorphism preserve it.'}
  - {to: subgroups-of-demushkin-groups-of-rank-at-least-three, label: uses, note: 'Part 4 gives trivial centralizers of the index-two subgroups, used to recover the extension from its outer involution.'}
---

**Setting.** Fix an algebraic closure of $\mathbb Q_2$. For a finite extension $K/\mathbb Q_2$ without $i=\sqrt{-1}$, put
$$
K'=K\cap\mathbb Q_2(\mu_{2^\infty}),\qquad
D_K=G_K(2),\qquad H_K=G_{K(i)}(2).
$$
Here $F(2)$ is the maximal Galois pro-$2$ extension of a field $F$, and $G_F(2)=\operatorname{Gal}(F(2)/F)$. All groups and maps below are profinite and continuous. The cyclotomic character $\chi_K:D_K\to\mathbb Z_2^\times$ is the canonical Demushkin character [@labute1967, §5, pp. 130–131].

**Theorem (proved here).**

1. Inclusion identifies $H_K$ with the characteristic index-two subgroup
   $$H_K=\ker(\chi_K\bmod4)\subset D_K.$$
   For $s\in D_K\setminus H_K$, let $j_K=[c_s|_{H_K}]\in\operatorname{Out}(H_K)$. This is independent of $s$ and has order exactly two. It is the image of the [absolute classification involution](dyadic-galois-groups-from-outer-involutions.md) under passage to the maximal pro-$2$ quotient.
2. For two such fields $K,L$, the following are equivalent:
   - $[K:\mathbb Q_2]=[L:\mathbb Q_2]$ and $K'=L'$;
   - $D_K\cong D_L$;
   - there is an isomorphism $\psi:H_K\to H_L$ with $\psi j_K\psi^{-1}=j_L$ in $\operatorname{Out}(H_L)$.
   Every isomorphism $\Theta:D_K\to D_L$ preserves the characters, $\chi_L\Theta=\chi_K$, restricts to such a $\psi$, and induces the identity on the quotients $D_K/H_K=D_L/H_L=C_2$.
3. The same $\Theta$ preserves every subgroup
   $$G_{K(\mu_{2^m})}(2)=\ker(\chi_K\bmod2^m)\subset D_K\qquad(m\ge1),$$
   and all inclusions and quotient conjugation actions among these subgroups. Thus the whole cyclotomic tower of maximal pro-$2$ groups, with its inclusions and cyclotomic characters, depends only on the invariants in part 2.

**Proof.** First check the passage to the relevant open subgroups. If $E/K$ is a finite Galois $2$-extension, then
$$E(2)=K(2).\tag{1}$$
Indeed, let $M/E$ be finite Galois of $2$-power degree. The compositum $N$ of its finitely many $K$-conjugates is Galois over $K$, and $\operatorname{Gal}(N/E)$ embeds in the product of their Galois groups over $E$. It is therefore a $2$-group; so is $\operatorname{Gal}(N/K)$, an extension by $\operatorname{Gal}(E/K)$. Hence $M\subset K(2)$, proving $E(2)\subseteq K(2)$. Conversely $K(2)/E$ is Galois pro-$2$, which gives the other inclusion. Restriction consequently identifies $G_E(2)$ with $\operatorname{Gal}(K(2)/E)\subset D_K$.

Apply (1) to $E=K(i)$. The subgroup fixing $i$ is exactly $\ker(\chi_K\bmod4)$. To see that it is characteristic, recall that the canonical character of a Demushkin group is the unique character whose associated cyclic modules have the cohomological lifting property in Labute's Theorem 4 [@labute1967, Theorem 4, p. 120; Proposition 6, p. 119]. Pullback under a group isomorphism preserves that property. Since the character is cyclotomic here, every $\Theta:D_K\to D_L$ satisfies $\chi_L\Theta=\chi_K$.

The group $D_K$ is Demushkin of rank $[K:\mathbb Q_2]+2\ge3$ [@labute1967, §5, pp. 130–131]. By part 4 of [the subgroup theorem](subgroups-of-demushkin-groups-of-rank-at-least-three.md), $C_{D_K}(H_K)=1$. Changing $s$ multiplies its conjugation action by an inner automorphism of $H_K$, and $s^2\in H_K$, so $j_K^2=1$. If $j_K=1$, some $h\in H_K$ has $c_s|_{H_K}=c_h|_{H_K}$, contradicting the trivial centralizer. This proves the order assertion. The quotient map $G_K\to D_K$ is onto on the two cosets and carries conjugation to conjugation; by (1) its restriction is the maximal pro-$2$ quotient map of $G_{K(i)}$. This proves the compatibility with the absolute involution.

The equivalence of the first two conditions in part 2 is the [maximal pro-$p$ isomorphism criterion](maximal-pro-p-galois-groups-of-p-adic-fields.md), here with $p=2$. It follows from the Demushkin classification by rank and canonical-character image [@labute1967, p. 107, Remark (3); §5, p. 131]. Character preservation shows that every $\Theta$ restricts as asserted. The quotient $C_2=(\mathbb Z/4)^\times$ has no nonidentity automorphism.

For the reverse implication from the third condition, conjugation embeds $D_K$ in $\operatorname{Aut}(H_K)$ by the trivial-centralizer assertion. Its image is precisely the preimage of $\langle j_K\rangle$ under
$$\operatorname{Aut}(H_K)\longrightarrow\operatorname{Out}(H_K):$$
it contains every inner automorphism, and its other coset represents $j_K$. Conjugation by $\psi$ identifies this preimage with the corresponding one for $L$, giving an isomorphism $D_K\to D_L$.

Finally $\operatorname{Gal}(K(\mu_{2^m})/K)$ is a subgroup of the finite $2$-group $(\mathbb Z/2^m)^\times$. Equation (1) applies and identifies its pro-$2$ group with the stated kernel. Character preservation carries all these kernels onto their counterparts; a single ambient isomorphism respects inclusions and conjugation. This proves part 3. $\square$

**Hypothesis check.** The cyclotomic intersection cannot be omitted, even if the upstairs field is fixed. Let
$$K_+=\mathbb Q_2(\sqrt2),\qquad K_-=\mathbb Q_2(\sqrt{-2}),\qquad F=\mathbb Q_2(\zeta_8).$$
Both $K_+(i)$ and $K_-(i)$ equal $F$: use $\sqrt2=\zeta_8+\zeta_8^{-1}$ and $\sqrt{-2}=\zeta_8+\zeta_8^3$. The three classes $2,-2,-1$ are distinct nonzero squareclasses of $\mathbb Q_2$: valuation parity handles $\pm2$, and $-1$ is not a square modulo $4$. Thus $K_+,K_-$ are distinct quadratic subfields of $F$, neither containing $i$, and each equals its own cyclotomic intersection. Therefore $D_{K_+}\not\cong D_{K_-}$, and part 2 makes their two involutions nonconjugate in $\operatorname{Out}(G_F(2))$. Their [cup-paired mod-$2$ diagrams](cup-paired-squareclasses-of-dyadic-classification-involutions.md) nevertheless agree, since both downstairs fields have degree two.

**Scope for the open classification.** If $K^0=L^0$ are the maximal subfields abelian over $\mathbb Q_2$, then $K'=L'$ because the cyclotomic extension is abelian. Thus every equal-degree candidate pair has isomorphic full pro-$2$ diagrams as above, whether adjoining $i$ is ramified or unramified. This covers their finite $2$-group quotients and the cohomology, restriction and transfer maps constructed from this tower, with coefficients transported by the same isomorphism. It does not assert preservation of all rational squareclass marks, as studied in the [separate marked calculation](rationally-marked-squareclasses-of-dyadic-classification-involutions.md), or of ramification filtrations. A conjugating isomorphism of maximal pro-$2$ quotients has not been lifted to an isomorphism of absolute groups, so this settles no new case of their classification.
