---
title: Galois Bockstein as cup product with a root of unity
kind: theorem
summary: 'With a primitive $q$th root of unity in a field, the mod-$q$ Bockstein is cup product with its Kummer class. It obstructs lifting characters to $\mathbb Z/q^2$ and vanishes if $\mu_{q^2}$ is contained in the field. At $q=2$ it is the cup square.'
tags: [galois-cohomology, galois-groups, roots-of-unity]
---

Let $q=p^s$ with $s\ge1$, and let $F$ have characteristic different from $p$ and contain a primitive $q$th root of unity $\zeta_q$. Put $G=G_F$. All cohomology is continuous. Use $1\mapsto\zeta_q$ to identify $\mathbb Z/q$ with $\mu_q$, and write
$$
\xi=[\zeta_q]\in F^\times/(F^\times)^q=H^1(G,\mathbb Z/q).
$$

**Bockstein formula.** Give every module in
$$
0\longrightarrow\mathbb Z/q
\xrightarrow{\,\times q\,}\mathbb Z/q^2
\longrightarrow\mathbb Z/q\longrightarrow0
$$
the trivial $G$-action. Its connecting homomorphism satisfies
$$
\beta:H^1(G,\mathbb Z/q)\longrightarrow H^2(G,\mathbb Z/q),
\qquad \beta(a)=a\cup\xi
$$
[@efratminac2017functors, Theorem 2.4(ii) and its proof, pp. 6–7]. The same formula holds for $G_F(p)$, by inflation [@efratminac2017functors, Remark 2.6, p. 7].

**Lifting characters.** For any profinite $G$ with these trivial coefficients,
$$
\beta(a)=0
\quad\Longleftrightarrow\quad
a:G\longrightarrow\mathbb Z/q
\text{ lifts to a continuous homomorphism }G\longrightarrow\mathbb Z/q^2.
$$
Indeed, $H^1$ with trivial coefficients is continuous $\mathrm{Hom}$, and exactness of the cohomology sequence identifies $\ker\beta$ with the image of reduction from $H^1(G,\mathbb Z/q^2)$.

**Enough roots of unity.** If $\mu_{q^2}\subset F$, then $\zeta_q$ is a $q$th power in $F$, so $\xi=0$. The formula gives $\beta=0$, and every mod-$q$ character lifts as above.

**At $q=2$.** Here $\zeta_2=-1$, and
$$
\beta(a)=a\cup[-1]=a\cup a.
$$
The last equality is the general mod-$2$ Bockstein identity [@cheboluefratminac2012, §2, p. 3]. In particular, $\sqrt{-1}\in F$ forces every degree-one cup square to vanish.
