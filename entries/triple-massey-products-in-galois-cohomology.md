---
title: Triple Massey products vanish in Galois cohomology
kind: theorem
summary: 'For every field and prime $p$, each defined triple Massey product in $H^1(G_F,\mathbb{F}_p)$ contains zero. Equivalently, three characters admitting a representation into $\overline{U}_4(\mathbb{F}_p)$ also admit one into $U_4(\mathbb{F}_p)$. This excludes certain pro-$p$ presentations.'
tags: [galois-groups, galois-cohomology]
edges:
  - {to: massey-vanishing-conjecture, label: addresses, note: "Settles the conjecture for n = 3 over every field and at every prime."}
  - {to: norm-residue-isomorphism-theorem, label: analogous-to, note: "Both constrain realizable absolute Galois groups through cohomology; Massey products use the cochain algebra."}
---

**Definition.** Let $G$ be profinite, with trivial coefficients $\mathbb{F}_p$, and write $H^i=H^i(G,\mathbb{F}_p)$ for continuous cohomology. For $a,b,c\in H^1=\mathrm{Hom}_{\mathrm{cont}}(G,\mathbb{F}_p)$, the triple Massey product is defined exactly when $a\cup b=b\cup c=0$. Choose continuous $1$-cochains $u,v$ with

$$\delta u=a\cup b,\qquad \delta v=b\cup c.$$

Then $a\cup v+u\cup c$ is a $2$-cocycle, and

$$\langle a,b,c\rangle=\{[a\cup v+u\cup c]:\delta u=a\cup b,\ \delta v=b\cup c\}\subseteq H^2.$$

It is a coset of $a\cup H^1+H^1\cup c$ [@efratmatzri2017, §1 and Proposition 1.1]. Thus *vanishing* means that the set contains zero; it need not be the singleton $\{0\}$.

**Theorem (Mináč–Tân).** For every field $F$ and every prime $p$,

$$a\cup b=b\cup c=0\quad\Longrightarrow\quad0\in\langle a,b,c\rangle\quad(a,b,c\in H^1(G_F,\mathbb{F}_p)).$$

No characteristic or root-of-unity hypothesis is needed [@minactan2016, Theorem 4.15, p. 20]. The same holds for the maximal pro-$p$ quotient $G_F(p)$ [@minactan2017, Corollary 3.5, p. 8]. Efrat and Matzri give another proof, initially with a primitive $p$-th root of unity, and remove that assumption in their addendum [@efratmatzri2017, Main Theorem and Addendum, pp. 2–4].

**Matrix interpretation.** Let $U=U_4(\mathbb{F}_p)$ be the upper triangular unipotent matrix group and $\overline U=U/Z$, where $Z=\{1+tE_{14}:t\in\mathbb{F}_p\}$. Here $E_{ij}$ is a matrix unit. For arbitrary profinite $G$:

- $\langle a,b,c\rangle$ is defined exactly when there is a continuous homomorphism $G\to\overline U$ with coordinates $(12,23,34)=(a,b,c)$.
- It contains zero exactly when such a homomorphism $G\to U$ exists.

Indeed, use the convention $\delta f(g,h)=f(g)+f(h)-f(gh)$. Matrix multiplication for

$$\rho(g)=\begin{pmatrix}1&a(g)&-u(g)&t(g)\\0&1&b(g)&-v(g)\\0&0&1&c(g)\\0&0&0&1\end{pmatrix}$$

gives the two defining equations above and $\delta t=a\cup v+u\cup c$; omitting coordinate $14$ removes the last equation. Consequently, for $G_F$, every $\overline\rho:G_F\to\overline U$ admits a $\rho:G_F\to U$ with the same first superdiagonal [@minactan2016, Lemma 4.13, pp. 18–19]. Coordinates $13$ and $24$ may change: this does not assert a lift of the fixed $\overline\rho$.

**An excluded presentation.** For any prime $p$, let $S$ be free pro-$p$ on $x_1,\ldots,x_5$ and put

$$G=S/\langle[x_4,x_5][[x_2,x_3],x_1]\rangle,$$

where $\langle\cdot\rangle$ denotes closed normal closure and $[x,y]=x^{-1}y^{-1}xy$. This group fails triple vanishing [@minactan2017, Lemma 7.1 and Example 7.2, pp. 17–18]. Here is the matrix check. Send $x_1,x_2,x_3$ to $1+E_{12},1+E_{23},1+E_{34}$ in $\overline U$ and $x_4,x_5$ to $1$. The relator dies. Any homomorphism to $U$ with these first superdiagonals sends $x_4,x_5$ into $1+J^2$, where $J$ is the strictly upper triangular matrix algebra. They commute since $J^4=0$. The triple commutator is always $1-E_{14}$: modulo $J^3$ the inner commutator is $1+E_{24}$, and its commutator with $1+E_{12}$ is $1-E_{14}$. Higher entries contribute only terms in $J^4$. Thus the relator cannot die in $U$. By the theorem, $G$ is neither an absolute Galois group nor a maximal pro-$p$ Galois group of any field.

**Role.** The [norm residue theorem](norm-residue-isomorphism-theorem.md) constrains the cohomology ring. Triple Massey vanishing supplies a constraint formulated in its continuous cochain algebra, with an explicit test on group presentations.
