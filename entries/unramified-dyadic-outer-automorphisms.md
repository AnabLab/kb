---
title: Outer automorphisms when adjoining i to a dyadic field is unramified
kind: theorem
summary: 'For finite $k/\mathbb{Q}_2$, Galois or not, with $i\notin k$ and $k(i)/k$ unramified, a Lubin–Tate representation stays Hodge–Tate only for outer automorphisms in a closed subgroup of Haar measure zero. For Galois $k$, $\mathrm{Aut}(k)$ is not normal in $\mathrm{Out}(G_k)$.'
tags: [local-fields, galois-groups, hodge-theory]
edges:
  - {to: local-galois-group-presentations, label: uses, note: "Diekert's presentation in the case where adjoining $i$ is unramified."}
  - {to: local-field-galois-invariants, label: uses, note: "Wild inertia and its image in the abelianization give the action on $k_+$ used below."}
  - {to: non-galois-lubin-tate-representations-are-not-aut-intrinsically-hodge-tate, label: uses, note: "Its Proposition, valid for every finite $k$ and every $p$: Hodge–Tate-ness forces $\\alpha_+$ into an algebra whose elements preserve $\\mathbb{Q}_p$."}
  - {to: field-theoretic-subgroup-of-outer-automorphisms, label: analogous-to, note: "The same non-normality conclusion for a further class of dyadic fields."}
  - {to: aut-intrinsic-hodge-tate-representations, label: analogous-to, note: "The Lubin–Tate measure-zero conclusion for a further class of dyadic fields."}
  - {to: hodge-tate-geometricity-criterion, label: analogous-to, note: "Here one Lubin–Tate representation detects almost every outer automorphism; the criterion there tests all Hodge–Tate representations."}
---

**Statement.** Let $k/\mathbb{Q}_2$ be finite, let $i^2=-1$, and suppose that $i\notin k$ and $k(i)/k$ is unramified. Write $G_k=\mathrm{Gal}(\bar k/k)$ and $V=k_+$. For $\alpha\in\mathrm{Out}(G_k)$, let $\alpha_+$ be its induced $\mathbb{Q}_2$-linear action on $V$. Then:

1. There is an explicit automorphism $\varphi$ of $G_k$ such that $(\varphi^n)_+(\mathbb{Q}_2)\ne\mathbb{Q}_2$ for every nonzero integer $n$.
2. If $k/\mathbb{Q}_2$ is Galois, the finite subgroup $\mathrm{Aut}(k)\subseteq\mathrm{Out}(G_k)$ has infinitely many conjugates, so is not normal.
3. For any uniformizer $\pi_k$ of $k$, let $\rho_{k,\pi_k}:G_k\to\mathcal{O}_k^\times\hookrightarrow\mathrm{GL}_{\mathbb{Q}_2}(k)$ be its Lubin–Tate representation. The outer classes $\alpha$ for which $\rho_{k,\pi_k}\circ\widetilde\alpha$ is Hodge–Tate are contained in a closed subgroup of Haar measure zero. Here $\widetilde\alpha$ is any representative of $\alpha$.

Parts 1 and 3 do not assume that $k/\mathbb{Q}_2$ is Galois. Part 2 does.

**Proof.** Put $d=[k:\mathbb{Q}_2]$. The absolute ramification index of $k(i)$ equals that of $k$ and is divisible by $2$, since $\mathbb{Q}_2(i)/\mathbb{Q}_2$ is totally ramified of degree $2$. Thus $d$ is even. Use [Diekert's presentation](local-galois-group-presentations.md) with generators $\sigma,\tau,x_0,\ldots,x_d$, residue cardinality $2^f$, and relation

$$
\sigma x_0\sigma^{-1}=(x_0\tau)^{\varepsilon g}x_1^{2^s}[x_1,x_2]\cdots[x_{d-1},x_d].
$$

Here $[a,b]=aba^{-1}b^{-1}$, $s\ge2$, and $\varepsilon\in\widehat{\mathbb{Z}}$ is $1$ in its $2$-component and $0$ elsewhere. The Frobenius exponent $g$ satisfies $g\equiv-1\pmod4$, since Frobenius acts nontrivially on $k(i)/k$. In particular $g\ne1$. Diekert assumes only that $k$ is a finite extension of $\mathbb{Q}_2$ for which adjoining $i$ is unramified, the case $i\in k$ included [@diekert1984, §3, p. 166, and Theorem 3.1].

*A basis.* The image $U$ of wild inertia in $G_k^{\mathrm{ab}}$ identifies by local reciprocity with the principal units. The logarithm identifies $U\otimes_{\mathbb{Z}_2}\mathbb{Q}_2$ with $V$. Let $y_j\in V$ be the image of $x_j$. These $d+1$ elements span $V$, since the $x_j$ normally generate wild inertia. The tame relation kills $\tau$ in the torsion-free abelianization, and the displayed relation gives

$$
(1-g)y_0=2^s y_1.
$$

Thus $y_1,\ldots,y_d$ span the $d$-dimensional space $V$, hence form a basis. This repeats the argument of [@nishio2025, Lemmas 1.2–1.3], with the presentation in the larger range above.

*The trace hyperplane.* Put $H=\ker(\mathrm{Tr}_{k/\mathbb{Q}_2})$. Every group-induced automorphism preserves $H$ [@nishio2025, Lemma 2.2(ii)]. That lemma assumes neither a root of unity nor that $k/\mathbb{Q}_2$ is Galois. Although the title of its section names abelian fields containing $i$, the section's standing hypothesis, which the lemma does not strengthen, is only that $k$ is a finite extension of some $\mathbb{Q}_p$ [@nishio2025, §2, p. 8]. On a commutator pair $(a,b)$, the identities $[ab,b]=[a,b]=[a,ba]$ show that each substitution $a\mapsto ab$ or $b\mapsto ba$, fixing the other generator, preserves $[a,b]$. Use $x_2\mapsto x_2x_1$ on the first pair, and both substitutions on each later pair. They fix $x_0$, $x_1$, $\sigma$ and $\tau$, so preserve the tame relation and the displayed wild relation. The transformed wild generators have the same closed normal span as the original ones, so the pro-$2$ condition is preserved too. The substitutions with inverse factors supply inverse continuous homomorphisms, hence automorphisms.

Their actions on $V$ are elementary transvections. If $T=1+N$ is any of these and $H$ is invariant, its action on the one-dimensional quotient $V/H$ is $1$, since $T$ is unipotent. Hence $N(V)\subseteq H$. The first substitution therefore puts $y_1$ in $H$; the later ones put $y_3,\ldots,y_d$ in $H$. Comparing dimensions gives

$$
H=\langle y_1,y_3,\ldots,y_d\rangle_{\mathbb{Q}_2}.
$$

Take $\varphi$ to be the first substitution, fixing all generators except $x_2\mapsto x_2x_1$. Write $1=\sum_j c_jy_j$. Since $\mathrm{Tr}(1)=d\ne0$, we have $c_2\ne0$. For every integer $n$,

$$
(\varphi^n)_+(1)=1+n c_2y_1.
$$

As $\mathbb{Q}_2\cap H=0$, this lies outside $\mathbb{Q}_2$ when $n\ne0$, proving part 1. Nothing so far uses that $k/\mathbb{Q}_2$ is Galois.

*The consequences.* Let $B\subseteq\mathrm{Out}(G_k)$ be the stabilizer of the line $\mathbb{Q}_2\subseteq V$. The action on $V$ is continuous: it comes from the continuous action on the compact principal-unit image in the finitely generated group $G_k^{\mathrm{ab}}$, followed by tensoring with $\mathbb{Q}_2$. Thus $B$ is closed. Part 1 gives infinitely many distinct cosets $\overline\varphi^n B$, so $B$ has infinite index. In the profinite group $\mathrm{Out}(G_k)$, any $N$ distinct cosets of $B$ have total Haar measure $N\mu(B)\le1$. Since $N$ is arbitrary, $\mu(B)=0$.

For part 2, let $k/\mathbb{Q}_2$ be Galois. The normalizer of $\mathrm{Aut}(k)$ fixes $\mathbb{Q}_2$ pointwise [@nishio2025, Lemma 3.1], which assumes only that $k/\mathbb{Q}_2$ is Galois. It is therefore contained in $B$, so it has infinite index, proving part 2.

For part 3, let $k$ be arbitrary. If $\rho_{k,\pi_k}\circ\widetilde\alpha$ is Hodge–Tate, then

$$
\alpha_+(x)=\frac1m\sum_{\sigma}i_\sigma\,\sigma(x)\qquad\text{for all }x\in k,
$$

with integers $i_\sigma$, where $\sigma$ runs over $\mathrm{Gal}(\tilde k/\mathbb{Q}_2)$ for the Galois closure $\tilde k$ of $k$, and $m=[\tilde k:k]$. This is the Proposition of [Lubin–Tate representations of non-Galois fields](non-galois-lubin-tate-representations-are-not-aut-intrinsically-hodge-tate.md), which holds for every finite $k$ and every $p$, including $p=2$ with $i\notin k$. For Galois $k$ it is one direction of [@kondo2026, Theorem 2.6]. Every $\sigma$ fixes $\mathbb{Q}_2$, so $\alpha_+(c)=c\cdot\frac1m\sum_\sigma i_\sigma$ for $c\in\mathbb{Q}_2$. As $\alpha_+$ is injective, $\alpha_+(\mathbb{Q}_2)=\mathbb{Q}_2$, so $\alpha\in B$. Inner automorphisms change a representation only up to isomorphism. This proves part 3.

**Examples.**

- *Galois.* Take $k=\mathbb{Q}_2(\sqrt3)$. Neither $-1$ nor $-3$ is a square in $\mathbb{Q}_2$, since an odd square is $1$ modulo $8$, so $i\notin k$. The extension $\mathbb{Q}_2(\sqrt{-3})/\mathbb{Q}_2$ is unramified: it is generated by a root of $X^2+X+1$, whose reduction is irreducible and separable. Thus $k(i)=k(\sqrt{-3})$ is unramified over $k$, and all three conclusions apply in dimension $2$.
- *Not Galois.* Take $k=\mathbb{Q}_2(\sqrt3,\sqrt[3]{2})$. Here $\mathbb{Q}_2(\sqrt3)/\mathbb{Q}_2$ is ramified quadratic: it is not the unramified quadratic extension $\mathbb{Q}_2(\sqrt{-3})$, because $3\cdot(-3)=-9$ is not a square in $\mathbb{Q}_2$, as $-1$ is not. And $\mathbb{Q}_2(\sqrt[3]2)/\mathbb{Q}_2$ is totally ramified cubic, as $X^3-2$ is Eisenstein. So $k$ has degree $6$ and ramification index divisible by $6$, hence is totally ramified. It therefore does not contain the unramified extension $\mathbb{Q}_2(\sqrt{-3})$. As $\sqrt3\in k$, it follows that $i\notin k$, and $k(i)=k(\sqrt{-3})$ is unramified over $k$. If $k/\mathbb{Q}_2$ were normal, $k$ would contain the other roots $\zeta\sqrt[3]2$ of $X^3-2$, with $\zeta$ a primitive cube root of unity, hence $\zeta$ and $\sqrt{-3}=2\zeta+1$. So $k$ is not Galois, and parts 1 and 3 apply in dimension $6$.

**Scope and attribution.** This is a deduction from the presentation already recorded here and the cited lemmas, rather than a statement quoted from either preprint. Nishio's Proposition 1.1 and Theorems 3.2 and 4.4 assume $i\in k$, and the latter two also assume that $k/\mathbb{Q}_2$ is abelian. His Lemma 2.2 assumes neither, nor that $k$ is Galois; his Lemma 3.1 assumes only that $k$ is Galois. His reduction through $\mathbb{Q}_2(i)$ [@nishio2025, Lemma 2.4] cannot simply be copied when $i\notin k$; the trace-hyperplane argument replaces it. Kondo's Theorem 3.5 assumes $i\in k$ at $p=2$. His Theorem 2.6 needs no root of unity, since his §2 does not use a presentation, but it assumes that $k/\mathbb{Q}_2$ is Galois [@kondo2026, §2, p. 7, and Theorem 2.6, p. 8]. The proof above supplies the additional case with $i\notin k$ and $k(i)/k$ unramified, without an abelian hypothesis, and for parts 1 and 3 without a Galois hypothesis. Both cited papers are preprints. No conclusion is drawn here when $k(i)/k$ is ramified.

*Part 2 for fields that are not Galois.* Its proof needs Nishio's Lemma 3.1, which assumes that $k/\mathbb{Q}_2$ is Galois. Whether $\mathrm{Aut}(k)$ can be normal in $\mathrm{Out}(G_k)$ for such $k$ that are not Galois is not examined here. For the example above, $\mathrm{Aut}(k)$ has order $2$: an automorphism fixes $\sqrt[3]2$, the only root of $X^3-2$ in $k$, and $k$ is quadratic over $\mathbb{Q}_2(\sqrt[3]2)$.
