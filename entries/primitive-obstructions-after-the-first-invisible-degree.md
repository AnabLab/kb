---
title: Coproducts extend the low-degree kernel-unipotent bound for free products
kind: theorem
summary: 'Free pro-$p$ products of finite-rank free groups, free abelian groups and Demushkin groups, excluding rank two with invariant $q=2$, have the kernel $n$-unipotent property for $n\le p+3$. A coproduct projection excludes the first mixed invisible degree.'
tags: [pro-p-groups, galois-cohomology, galois-groups]
edges:
  - {to: unipotent-detection-in-free-pro-p-products, label: uses, note: "Theorem, part 1, and Lemma 1 identify the obstruction ideal and its intersection with group initial forms; Corollary 2 supplies the factor computations and the previous range."}
  - {to: kernel-unipotent-conjecture, label: addresses, note: 'Proves its equality for $n\le p+3$ for fields whose maximal pro-$p$ Galois group is a free product of the factors specified below. No all-degree conclusion is claimed.'}
  - {to: kernel-unipotent-property-over-large-finite-fields-for-free-products, label: generalizes, note: 'Allows rank-two Demushkin factors with $q\ne2$ and improves its sufficient field bound to $|\mathbb F|\ge n-3$.'}
  - {to: kernel-unipotent-property-in-low-degrees-for-free-products, label: analogous-to, note: "Improves its range by one for odd $p$. At $p=2$ the present theorem excludes rank-two factors with $q=2$, which that theorem allows through $n=4$."}
---

**Theorem (proved here).** Let $\mathbb F$ be a finite field of characteristic $p$, put $Q=|\mathbb F|$, and let $G=G_1*\cdots*G_s$ be a finite free pro-$p$ product. Each factor may be:

- a free pro-$p$ group of finite rank;
- $\mathbb Z_p^a$, with $a\ge2$;
- a Demushkin group of finite rank at least three;
- a Demushkin group of rank two whose classification invariant $q$ is not $2$;
- for $p=2$, the group $\mathbb Z/2$.

Then, for $1\le n\le Q+3$,
$$G_{(n)}=\bigcap_{\rho:G\to U_n(\mathbb F)}\ker\rho,$$
where $G_{(n)}$ is the $p$-Zassenhaus filtration and all homomorphisms are continuous. In particular, over $\mathbb F_p$ the range is $n\le p+3$. For $\mathbb Z_p^2*\mathbb Z_p$ this includes $n=5$ at $p=2$ and $n=6$ at $p=3$.

**Proof.** Use the notation of [unipotent detection in free products](unipotent-detection-in-free-pro-p-products.md), with scalars extended to $\mathbb F$: write $A_i=A(G_i)\otimes\mathbb F$, $A=A(G)\otimes\mathbb F$, and
$$K_{i,k}=\mathrm{Inv}_k(G_i,\mathbb F),\qquad J=(K_{i,k}:i,k)\subseteq A.$$
Here $A(H)=\bigoplus_k I_H^k/I_H^{k+1}$ for the augmentation ideal of the abstract group algebra $\mathbb F_p[H]$. The linked theorem identifies $J$ with $\mathrm{Inv}(G,\mathbb F)$, and its Lemma 1 reduces the assertion to detecting group initial forms in degrees at most $Q+2$. Its Corollary 2 already detects every degree at most $Q+1$. Put $d=Q+1$; only degree $d+1$ remains.

*The algebra and its coproduct.* Multiplication identifies $A$ with the algebra free product of the $A_i$. Indeed, the natural map from that free product onto $A$ is surjective by Lemma 3 of the linked entry. Abstract and completed augmentation gradings have the same dimensions, and the completed graded algebra of a free pro-$p$ product is the algebra coproduct of those of its factors [@minacrogelstadtan2015dimensions, paragraph preceding Theorem 2.1 and proof of Lemma 2.2, p. 4]. Consequently this surjection has equal finite dimensions in each degree and is an isomorphism. In particular, the vector-space normal form is
$$A=\mathbb F\oplus\bigoplus_{r\ge1,\ i_j\ne i_{j+1}} A_{i_1,+}\otimes\cdots\otimes A_{i_r,+},$$
where $A_{i,+}=\bigoplus_{k\ge1}A_{i,k}$. One obtains this normal form by concatenating tensors and multiplying adjacent letters from the same factor; these operations give the algebra coproduct. Thus both the ordered factor sequence and the degree in each factor specify direct summands.

The group-algebra coproduct $h\mapsto h\otimes h$ induces a graded coproduct $\Delta$ on $A$, with ordinary tensor-product multiplication. Every degree-one generator is primitive. More generally, the initial form
$$x=(g-1)+I_G^{m+1},\qquad g\in G_{(m)},$$
is primitive: Jennings' theorem puts $g-1$ in $I_G^m$ [@minacpasiniquadrellitan2022mild, Proposition 3.4, p. 9], and the extra term $(g-1)\otimes(g-1)$ in $\Delta(g-1)$ has total filtration degree at least $2m>m$.

*A coproduct projection detects the first invisible factor degree.* Corollary 2 of the linked entry gives $K_{i,k}=0$ for $k<d$. The only factors that can have $K_{i,d}\ne0$ are the free abelian factors and the rank-two Demushkin factors with $q\ne2$. For each of these, it also identifies
$$A_i=\mathbb F[X_1,\ldots,X_a],\qquad \Delta(X_b)=X_b\otimes1+1\otimes X_b,$$
with $a=2$ in the latter case. If $\Delta_{1,d-1}$ denotes the component of bidegree $(1,d-1)$, then on a homogeneous polynomial $f$ of degree $d$,
$$\delta_i(f):=\Delta_{1,d-1}(f)=\sum_b X_b\otimes\frac{\partial f}{\partial X_b}.$$
Composing with multiplication gives $d f=f$, since $d=Q+1$ equals $1$ in $\mathbb F$. Hence $\delta_i$ is injective on $A_{i,d}$, and therefore on $K_{i,d}$. For the other factors injectivity on $K_{i,d}=0$ is automatic.

*Remove pure components.* Suppose that $g\in G_{(d+1)}$ has invisible initial form $x\in A_{d+1}$, so $x\in J_{d+1}$ and $x$ is primitive. Retract $G$ onto each $G_i$. The retraction sends $J$ into $\mathrm{Inv}(G_i,\mathbb F)$, because this is an ideal and the other factors' positive degrees map to zero. It sends $x$ to the initial form of the image of $g$. Each factor has the kernel $n$-unipotent property over $\mathbb F_p$, hence over $\mathbb F$, for every $n$, as recorded in the proof of Corollary 2 of the linked entry. Its degree-$d+1$ detection therefore makes this retracted initial form zero. In the normal form above the retraction keeps exactly the pure degree-$d+1$ summand of colour $i$. All pure components of $x$ vanish.

*Remove mixed components.* Since $J$ has no generators below degree $d$, its only possible mixed summands in degree $d+1$ are
$$x=\sum_{i\ne j}(u_{ij}+v_{ji}),\qquad
u_{ij}\in K_{i,d}\otimes A_{j,1},\quad
v_{ji}\in A_{j,1}\otimes K_{i,d},$$
where tensors are identified with products in $A$. This expression is unique by the normal form, since $d\ge3$.

Project $\Delta(x)$ onto the direct summand
$$A_{i,1}\otimes\bigl(A_{i,d-1}\otimes A_{j,1}\bigr)\subseteq A_1\otimes A_d.$$
For a term $az$ of $u_{ij}$, with $a\in K_{i,d}$ and $z\in A_{j,1}$, this projection is $\delta_i(a)\otimes z$. The term $za$ instead contributes to the opposite ordered summand $A_{i,1}\otimes(A_{j,1}\otimes A_{i,d-1})$. A term with its degree-one letter sent to the left has a pure right component. Terms whose degree-$d$ letter has a different colour cannot supply a left letter of colour $i$ and this mixed right component. Thus the displayed projection is exactly $(\delta_i\otimes1)(u_{ij})$, with no contribution from another pair of factors.

Primitivity makes this projection zero. Injectivity of $\delta_i$ on $K_{i,d}$, preserved by tensoring over a field, forces $u_{ij}=0$. Projection onto the opposite ordered summand similarly forces $v_{ji}=0$. This holds for every $i\ne j$, so $x=0$.

Jennings' injectivity now gives $g\in G_{(d+2)}$. Thus every nonzero degree-$d+1$ group initial form is detected by a map to $U_{d+2}(\mathbb F)$. Together with the earlier degrees, Lemma 1 of the linked entry gives the asserted equality through $n=d+2=Q+3$. $\square$

**Scope.** This proves one additional degree beyond Corollary 2 of the invisible-ideal theorem. In the next degree the ideal can contain terms with two exterior degree-one letters or a degree-$d+1$ invisible factor letter; the projection above does not establish detection there. At $p=2$, rank-two Demushkin groups with $q=2$ are excluded: the polynomial-algebra factor computation invoked here does not cover them. The earlier [low-degree theorem](kernel-unipotent-property-in-low-degrees-for-free-products.md) still covers them through $n=4$.

**Sources and status.** The coproduct argument and the improved bound are proved here. The factor computations and obstruction-ideal theorem are taken from the linked entry on `main`. The two external inputs were checked at the cited arXiv locations. Lichtman's original paper, cited by Mináč–Rogelstad–Tân for the algebra coproduct assertion, was not independently opened. A targeted literature search in November 2026 found no statement of this refinement; the search was not exhaustive.
