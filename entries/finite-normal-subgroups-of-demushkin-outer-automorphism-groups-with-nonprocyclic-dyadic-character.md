---
title: Finite normal subgroups of Demushkin outer automorphism groups with nonprocyclic dyadic character act trivially modulo torsion
kind: theorem
summary: 'For pro-$2$ Demushkin groups with infinite nonprocyclic canonical image, finite normal outer subgroups act trivially modulo torsion and no nontrivial finite normal $2$-subgroup exists. This excludes Tsujimura''s finite-index intersection case, including for $G_{\mathbb Q_2}(2)$.'
tags: [pro-p-groups, galois-groups]
edges:
  - {to: classification-of-demushkin-groups, label: uses, note: "the odd-rank normal form and the even-rank normal form with nonprocyclic canonical image"}
  - {to: demushkin-group, label: uses, note: "uniqueness of the canonical character"}
  - {to: outer-automorphisms-of-demushkin-groups-with-finitely-many-conjugates, label: analogous-to, note: "The finite-normal-subgroup conclusion is proved here for the nonprocyclic $q=2$ cases. The stronger conclusion that every finite-conjugacy element acts trivially is not asserted here."}
  - {to: demushkin-groups-inside-their-automorphism-groups, label: addresses, note: "The corollary excludes case (a) of the reduction for the two $q=2$ normal forms with infinite nonprocyclic canonical image, including $G_{\\mathbb Q_2}(2)$. Case (b) remains open."}
  - {to: demushkin-groups-of-rank-at-least-three-are-elastic, label: uses, note: "only Corollary 2, to interpret the application"}
  - {to: involutions-of-demushkin-groups-with-infinite-canonical-image, label: uses, note: "only its Theorem, excluding finite $2$-power torsion in the outer kernel, in part 3"}
  - {to: maximal-pro-p-galois-groups-of-p-adic-fields, label: uses, note: "only the example $G_{\\mathbb Q_2}(2)$ in Scope"}
---

**Setting.** Let $D$ be a pro-$2$ [Demushkin group](demushkin-group.md) of rank $n\ge3$ whose canonical character has image
$$\operatorname{Im}(\chi)=\{\pm1\}\times(1+2^f\mathbb Z_2),\qquad 2\le f<\infty.$$
Put $k=2^f$ and $h=k/2$. With $[a,b]=a^{-1}b^{-1}ab$, the [classification](classification-of-demushkin-groups.md) gives $D=F/(r)$, where $F$ is free pro-$2$ on $x_1,\ldots,x_n$ and
$$r=x_1^2x_2^k[x_2,x_3][x_4,x_5]\cdots[x_{n-1},x_n]\quad(n\text{ odd}),$$
$$r=x_1^2[x_1,x_2]x_3^k[x_3,x_4][x_5,x_6]\cdots[x_{n-1},x_n]\quad(n\text{ even})$$
[@labute1967, Theorem 3 (2), p. 118, and Theorem 1, p. 107].

Let $T$ be the torsion subgroup of $D^{\mathrm{ab}}$, $V=D^{\mathrm{ab}}/T$, and $V_{\mathbb Q}=V\otimes_{\mathbb Z_2}\mathbb Q_2$. Abelianizing the relation gives $2(e_1+he_j)=0$, where $j=2$ in odd rank and $j=3$ in even rank. The vector $e_1+he_j$ is primitive, so $T$ has order two and $V$ has basis $v_2,\ldots,v_n$, with $v_1=-hv_j$. Inner automorphisms act trivially on $V$; write $\Gamma$ for the image of $\operatorname{Out}(D)$ in $\operatorname{GL}(V_{\mathbb Q})$.

**Theorem.** This is proved here.

1. If $g\in\Gamma$ has finitely many conjugates in $\Gamma$, then $(g-1)^2=0$.
2. An element of $\Gamma$ having both finite order and finitely many conjugates is the identity. Consequently $\Gamma$ has no nontrivial finite normal subgroup, and every finite normal subgroup of $\operatorname{Out}(D)$ acts trivially on $V$.
3. The group $\operatorname{Out}(D)$ has no nontrivial finite normal $2$-subgroup.

**Corollary (Tsujimura's question).** This is proved here. For a centre-free $D$ as above, identify $D$ with $\operatorname{Inn}(D)$. If $N\ne D$ is a closed normal subgroup of $\operatorname{Aut}(D)$ isomorphic to $D$, then $N\cap D$ has infinite index in both groups and is not topologically finitely generated.

*Proof.* In case (a) of [the reduction](demushkin-groups-of-rank-at-least-three-are-elastic.md), Corollary 2, $ND/D$ would be a nontrivial finite normal $2$-subgroup of $\operatorname{Out}(D)$, contradicting part 3. The remaining possibility is precisely case (b), as stated here. $\square$

**Proof.** All linear calculations below take place over $\mathbb Q_2$.

*An invariant functional.* Uniqueness of the canonical character implies $\chi\circ\alpha=\chi$ for every $\alpha\in\operatorname{Aut}(D)$: precomposition identifies the cohomology groups for $\chi$ and $\chi\circ\alpha$ and preserves the reduction-surjectivity property characterizing $\chi$ [@labute1967, Theorem 4, p. 120]. Project $\mathbb Z_2^\times=\{\pm1\}\times(1+4\mathbb Z_2)$ to its second factor and take its logarithm. The logarithm is injective on $1+4\mathbb Z_2$ [@labute1967, Remarks after the Corollary to Theorem 4, p. 121]. Its composite with $\chi$ is therefore nonzero, is invariant under every automorphism, and kills $T$. It induces a nonzero linear functional
$$\varphi:V_{\mathbb Q}\longrightarrow\mathbb Q_2,\qquad \varphi\gamma=\varphi\quad(\gamma\in\Gamma). \tag{1}$$

*Automorphisms preserving the relation.* For each pair $(a,b)$ of generators appearing in a commutator, the substitution $b\mapsto ab$, fixing the other generators, preserves that commutator, since $[a,ab]=[a,b]$. If neither generator occurs in a power term of $r$, the substitution $a\mapsto ba$ also preserves $r$, since $[ba,b]=[a,b]$. Their inverses are the substitutions with the added factor inverted.

We also need a substitution on four consecutive generators forming two adjacent commutators. Put
$$\ell=bc^{-1}d^{-1}c,\qquad B=\ell dc,\qquad D'=\ell^{-1}a\ell d.$$
The endomorphism $\alpha$ sending $b$ to $B$ and $d$ to $D'$, fixing $a,c$ and all other generators, preserves $[a,b][c,d]$. Indeed, direct cancellation gives
$$[a,B][c,D']=a^{-1}c^{-1}d^{-1}\ell^{-1}a\ell dc\,c^{-1}d^{-1}\ell^{-1}a^{-1}\ell c\ell^{-1}a\ell d=[a,b][c,d]. \tag{2}$$
It is an automorphism, not merely an endomorphism. To check this explicitly, put
$$L=abc^{-1}d^{-1},\qquad d'=dcb^{-1}a^{-1}bc^{-1},\qquad b'=Lc^{-1}d'c.$$
The substitution $\beta(b)=b'$, $\beta(d)=d'$, fixing the other generators, satisfies $\beta(\ell)=L$, $\beta(B)=b$, $\beta(D')=d$, and $\alpha(L)=\ell$, $\alpha(d')=d$, $\alpha(b')=b$, by cancellation. Thus $\alpha\beta=\beta\alpha=1$.

The action of $\alpha$ on abelianization is
$$b\longmapsto b+c,\qquad d\longmapsto d+a,\qquad a\longmapsto a,\qquad c\longmapsto c. \tag{3}$$
Apply it only to neighboring pairs in the following ordered lists:
$$ (x_2,x_3),(x_4,x_5),\ldots,(x_{n-1},x_n)\quad(n\text{ odd}),$$
$$ (x_3,x_4),(x_5,x_6),\ldots,(x_{n-1},x_n)\quad(n\text{ even}). \tag{4}$$
Their commutators are adjacent in $r$. There are no power terms between them, and every generator occurring in a power term is fixed. Thus (2) gives automorphisms of $D$ in every instance. All the linear actions just constructed have the form $1+E$ with $E^2=0$, so $(1+E)^m=1+mE$ for positive integers $m$.

*The common centralizer.* Suppose $g\in\Gamma$ has finitely many conjugates. Its centralizer has finite index, so for each $\gamma\in\Gamma$ some positive power $\gamma^m$ commutes with $g$: let the cyclic group generated by $\gamma$ act on the finitely many cosets of the centralizer. Applying this to the constructed matrices $1+E$ shows $gE=Eg$, since $m\ne0$ in $\mathbb Q_2$.

For each pair $(x_s,x_{s+1})$ after the first pair in (4), we have both elementary operators $v_s\mapsto v_{s+1}$ and $v_{s+1}\mapsto v_s$, zero on the other basis vectors. Commuting with both forces $g$ to act on their span $P$ as a scalar $\lambda_P$ and have no matrix entries between $P$ and its complementary coordinate subspace. For example, commuting with the first operator forces $g(v_{s+1})$ to be a multiple of $v_{s+1}$ and forces the $v_s$ coordinate of $g(v_i)$ to vanish for $i\ne s$; the reversed operator gives the other assertions and equates the two diagonal entries. Thus it remains to examine the initial coordinate subspace and the scalars on the later pairs.

In odd rank this initial subspace is $U=\langle v_2,v_3\rangle$. The twist $x_3\mapsto x_2x_3$ supplies the operator $v_3\mapsto v_2$. Its centralizer on $U$ has the form
$$g(v_2)=cv_2,\qquad g(v_3)=cv_3+tv_2. \tag{5}$$
In even rank take $U=\langle v_2,v_3,v_4\rangle$. The twists $x_2\mapsto x_1x_2$ and $x_4\mapsto x_3x_4$ supply respectively
$$v_2\longmapsto-hv_3,\qquad v_4\longmapsto v_3,$$
with other basis vectors sent to zero. Since $h\ne0$, commuting with both gives
$$g(v_3)=cv_3,\qquad g(v_2)=cv_2+sv_3,\qquad g(v_4)=cv_4+tv_3. \tag{6}$$
For completeness, the two commutation equations first force $g(v_3)$ to be a multiple of $v_3$, and then force the $v_2$ and $v_4$ coordinate functions composed with $g$ to equal $c$ times themselves. These are exactly (6).

The bridges (3) equate all scalars. For the first bridge, let $a,b$ be the first pair in (4), and $c',d$ the next pair, with classes denoted by the corresponding $v$'s. Its operator sends $v_b$ to $v_{c'}$ and $v_d$ to $v_a$. In (5) or (6), $g(v_b)=cv_b+tv_a$. Evaluating $gE=Eg$ at $v_b$ gives $\lambda_Pv_{c'}=cv_{c'}$, hence $\lambda_P=c$. The same calculation between two later pairs equates their scalars. If there are no later pairs, this step is empty.

Consequently $g=c\,1+Z$, where $Z^2=0$ and $\operatorname{Im}(Z)$ lies in the line $\mathbb Q_2v_2$ in odd rank, or $\mathbb Q_2v_3$ in even rank. Also $Z$ kills that line. Equation (1) applied to the initial twist shows that $\varphi$ kills the same line. Therefore
$$\varphi=\varphi g=c\varphi,$$
so $c=1$ and $(g-1)^2=0$. This proves part 1, including ranks three and four, where there are no later commutator pairs.

If $g$ also has finite order $m$, then $1=g^m=(1+Z)^m=1+mZ$, so $Z=0$ and $g=1$. Every element of a finite normal subgroup has finite order and finitely many conjugates. The image of a finite normal subgroup of $\operatorname{Out}(D)$ is finite and normal in $\Gamma$, hence trivial. Finally, an automorphism of the free module $V$ acting trivially on $V_{\mathbb Q}$ acts trivially on $V$. This proves part 2.

For part 3, the [involution rigidity theorem](involutions-of-demushkin-groups-with-infinite-canonical-image.md) applies because $n\ge3$ and $\operatorname{Im}(\chi)$ is infinite. It says that the kernel of $\operatorname{Out}(D)\to\operatorname{GL}(V)$ contains no nonidentity element of finite $2$-power order. Part 2 places any finite normal $2$-subgroup in this kernel, so that subgroup is trivial. $\square$

**Scope.** The argument treats both nonprocyclic $q=2$ normal forms, including $G_{\mathbb Q_2}(2)$ by the rank-three presentation with $f=2$ recorded in [maximal pro-$p$ Galois groups of $p$-adic fields](maximal-pro-p-galois-groups-of-p-adic-fields.md). The finite-conjugacy calculation itself does not assert that every such element acts trivially. The exclusion of finite normal $2$-subgroups combines that calculation with the linked involution theorem; it does not exclude finite normal subgroups of odd order. The hypothesis $f<\infty$ supplies the nonzero invariant functional; in even rank it also supplies $h\ne0$. Groups with finite canonical image are outside the statement. No novelty is claimed.
