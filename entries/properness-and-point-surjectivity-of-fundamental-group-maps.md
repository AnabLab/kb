---
title: Properness and point-surjectivity of fundamental-group maps
kind: note
summary: 'Deleting a point gives an open well-behaved fundamental-group map whose point map misses it. Proper finite-field curve groups cannot map openly to affine curve groups. This isolates a missing lifting step in the general Creutz–Voloch surjectivity check.'
tags: [curves, fundamental-groups, finite-fields, function-fields]
edges:
  - {to: etale-descent-and-fundamental-group-maps-over-finite-fields, label: addresses, note: 'Isolates the remaining geometric-point surjectivity inference in Creutz–Voloch Proposition 3.9, p. 8; supplies a counterexample with nonproper source and an obstruction to open punctured-target lifts.'}
  - {to: local-point-sections-determine-well-behaved-maps, label: uses, note: 'Its pro-point separation identifies the point map of the open immersion from its decomposition groups.'}
  - {to: artin-schreier-and-pro-p-galois-groups, label: uses, note: 'The pole-order test for independent Artin–Schreier classes also applies to functions regular on an affine curve.'}
  - {to: genus-bound-and-equality-for-open-fundamental-group-maps, label: analogous-to, note: 'That entry proves point-surjectivity at equality in the genus bound; the remaining check concerns general open well-behaved maps.'}
---

**The remaining check.** Let $C,D$ be smooth, proper, geometrically integral curves over a finite field $k$, with $g(C)\ge2$. Write $\Pi_X=\pi_1(X)$, $\Delta_X=\pi_1(X_{\bar k})$, and $p_X:\Pi_X\to\Gamma=G_k$. A continuous homomorphism $\phi:\Pi_D\to\Pi_C$ is *well behaved* if each point decomposition group maps to an open subgroup of a point decomposition group. Assume $p_C\phi=p_D$.

For a nonconstant descent tuple, Creutz–Voloch assert that $\phi$ has open image and that its associated $\Gamma$-equivariant point map
$$\psi:D(\bar k)\longrightarrow C(\bar k)$$
is surjective [@creutzvoloch2024, Proposition 3.9, p. 8]. Their final argument observes that an open image contains a finite-index subgroup of every target decomposition group, then infers point-surjectivity [@creutzvoloch2024, proof of Proposition 3.9 and Corollary 3.10, p. 8]. The following example shows why this inference needs further input involving the proper source curve.

**A nonproper-source example (proved here).** Choose any closed point $w$ of $C$, put $U=C\setminus\{w\}$, and let $j:U\hookrightarrow C$. Then
$$j_*:\Pi_U\twoheadrightarrow\Pi_C$$
is surjective, is over $\Gamma$, and sends every source point decomposition group isomorphically onto a target point decomposition group. Its associated point map is the inclusion
$$U(\bar k)\hookrightarrow C(\bar k),$$
which omits all geometric points over $w$.

Indeed, a connected finite étale cover of the smooth integral curve $C$ is integral. Its restriction to the nonempty open $U$ remains connected. The finite-cover criterion for surjectivity therefore gives the displayed epimorphism; compare [@stacks2026, Lemma 58.10.7, tag 0BQI]. At a closed point $v\in U$, the residue fields before and after applying $j$ coincide. Both decomposition groups project isomorphically to $G_{k(v)}$, and $j_*$ commutes with these projections, so its map on them is an isomorphism. The containing target pro-point, and hence the associated geometric point, is unique by [pro-point separation](local-point-sections-determine-well-behaved-maps.md). Thus the point map is exactly $j$.

Here the image is the entire target group, including every decomposition group above $w$, although no source point maps to $w$. The example has affine source, so it leaves the proper-source assertion undecided.

**An open-lifting obstruction (proved here).** Let $D/k$ be a smooth proper geometrically integral curve, and let $U/k$ be a smooth affine geometrically integral curve. There is no continuous open homomorphism
$$f:\Pi_D\longrightarrow\Pi_U.\tag{1}$$
No constants compatibility or well-behavedness is needed for this assertion.

*Proof.* Put $p=\operatorname{char}(k)$. For any connected curve $X$, constant-group torsors identify
$$H^1_{\mathrm{\acute et}}(X,\mathbb F_p)=\operatorname{Hom}_{\mathrm{cont}}(\Pi_X,\mathbb F_p).$$
The Artin–Schreier sequence, with $\wp(a)=a^p-a$, gives an exact sequence
$$H^0(X,\mathcal O_X)\xrightarrow{\wp}H^0(X,\mathcal O_X)\longrightarrow H^1_{\mathrm{\acute et}}(X,\mathbb F_p)\longrightarrow H^1(X,\mathcal O_X).$$
Here étale cohomology of $\mathcal O_X$ agrees with its ordinary coherent cohomology [@stacks2026, Section 59.63, tag 0A3J, opening sequence and proof of Lemma 59.63.1]. For proper $D$, the two coherent cohomology spaces are finite-dimensional over the finite field $k$, hence finite sets [@stacks2026, Lemma 30.19.2, tag 02O6]. It follows that $H^1_{\mathrm{\acute et}}(D,\mathbb F_p)$ is finite.

In contrast, let $Y$ be any smooth connected affine curve over a finite field, and let $l$ be its finite field of constants. Choose a closed point $z$ of its smooth proper compactification $\bar Y$ outside $Y$. Riemann–Roch and duality give, for all sufficiently large $n$,
$$\dim_l H^0(\bar Y,\mathcal O(nz))=n\deg_l(z)+1-g(\bar Y)$$
[@stacks2026, Lemma 53.5.2, tag 0BS6]. Thus for every sufficiently large $n$ with $p\nmid n$ one can choose $a_n\in\mathcal O(Y)$ with its only pole at $z$, of exact order $n$. Indeed, the dimensions for $n$ and $n-1$ differ by $\deg_l(z)>0$.

The classes of the $a_n$ in $\mathcal O(Y)/\wp(\mathcal O(Y))$ are linearly independent over $\mathbb F_p$. A nonzero finite combination has pole order its largest occurring $n$, whereas any $b^p-b$ with a pole at $z$ has pole order divisible by $p$. This is the [Artin–Schreier pole-order test](artin-schreier-and-pro-p-galois-groups.md). The exact sequence injects this quotient into $H^1_{\mathrm{\acute et}}(Y,\mathbb F_p)$, which is therefore infinite.

If (1) existed, its open image would be $\Pi_Y$ for a connected finite étale cover $Y\to U$. Such $Y$ is a smooth connected affine curve over a finite field, even if its constants enlarge. The surjection $\Pi_D\twoheadrightarrow\Pi_Y$ would inject the infinite character group $H^1_{\mathrm{\acute et}}(Y,\mathbb F_p)$ into the finite one of $D$, a contradiction. $\square$

In particular this excludes every open lift from a proper source to $\Pi_{C\setminus S}$ for nonempty finite $S\subset C$. The use of the full fundamental group matters: the obstruction detects wild Artin–Schreier torsors, and no analogous assertion for tame or prime-to-$p$ quotients is established by this proof.

**The missing bridge.** A possible surjectivity proof would start with a point omitted by $\psi$ and construct an *open*, constants-compatible lift of $\phi$ to the fundamental group of the target with that closed point removed. The obstruction above would rule out such a lift. Neither existence nor openness of this lift follows here from omission by the point map. Saïdi–Tamagawa's birational argument does construct punctured-target maps, but starts with homomorphisms of function-field Galois groups [@saiditamagawa2011hom, Lemma 2.9 and proof, pp. 151–152]; that input is absent from a map of proper-curve fundamental groups.

The corrected [geometric correspondence](geometric-interpolation-for-constant-curve-descent.md), its [injectivity](local-point-sections-determine-well-behaved-maps.md), and its [closed-point fibres](closed-point-fibres-of-constant-curve-descent.md) are already checked independently. Point-surjectivity is also checked [at equality in the genus bound](genus-bound-and-equality-for-open-fundamental-group-maps.md). For general proper $C,D$, this note isolates an unchecked step; it neither proves nor refutes the claimed point-surjectivity, so its arrow to the source audit is `addresses`.
