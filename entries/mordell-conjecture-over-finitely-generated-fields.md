---
title: Mordell conjecture over fields finitely generated over Q
kind: theorem
summary: 'If K is finitely generated over Q, every curve of genus at least 2 over K has finitely many K-points. Proved here from Faltings'' theorem over number fields and Grauert''s function-field theorem over the algebraic closure of Q. It fails over finitely generated fields of characteristic p.'
tags: [curves, number-fields, function-fields, section-conjecture]
edges:
  - {to: faltings-finiteness-theorems, label: uses, note: "Item 5, Faltings' Satz 7, over the number field to which the points are pushed [@faltings1983, §6, Satz 7, p. 365]."}
  - {to: mordell-conjecture-over-function-fields, label: uses, note: "The characteristic-0 theorem of Grauert, with Samuel's finiteness of the points not coming from the constant field, over the algebraic closure of Q [@samuel1966grauert, p. 55]."}
---

**Theorem.** Let $K$ be a field finitely generated over $\mathbb{Q}$, and let $X$ be a smooth, geometrically connected curve over $K$ whose smooth compactification has genus $g \ge 2$. Then $X(K)$ is finite.

This is proved here by combining two cited theorems. Anabelian papers quote it as Faltings' theorem: Koenigsmann, for instance, applies "Faltings" to fields finite or finitely generated over $\mathbb{Q}$ [@koenigsmann2005, proof of Lemma 1.7, p. 8]. Faltings' 1983 paper treats number fields only (see [Faltings' finiteness theorems](faltings-finiteness-theorems.md)), and no source for fields of positive transcendence degree was opened for this entry, so the deduction is written out.

**Proof.**

*Step 1: reductions.* Let $\bar X$ be the smooth compactification of $X$. It is proper, smooth and geometrically connected of genus $g$, and $X(K) \subseteq \bar X(K)$. So we may assume that $X$ is proper. If $K$ is a number field, $X(K)$ is finite by Faltings' theorem [@faltings1983, §6, Satz 7, p. 365]. Assume from now on that $K$ has positive transcendence degree over $\mathbb{Q}$.

*Step 2: algebraic elements.* If $F$ is finitely generated over $\mathbb{Q}$, its elements algebraic over $\mathbb{Q}$ form a number field. Indeed, let $t = (t_1, \dots, t_n)$ be a transcendence basis of $F/\mathbb{Q}$, so that $d = [F : \mathbb{Q}(t)]$ is finite. Let $\alpha \in F$ be algebraic over $\mathbb{Q}$ with minimal polynomial $m$. The coefficients of a monic factor of $m$ in $\mathbb{Q}(t)[x]$ are polynomials in the roots of $m$, so they are algebraic over $\mathbb{Q}$. As $\mathbb{Q}$ is algebraically closed in the purely transcendental extension $\mathbb{Q}(t)$, a standard fact, they lie in $\mathbb{Q}$. So $m$ stays irreducible over $\mathbb{Q}(t)$, and $[\mathbb{Q}(\alpha) : \mathbb{Q}] = [\mathbb{Q}(t)(\alpha) : \mathbb{Q}(t)] \le d$. By the primitive element theorem, every subfield of $F$ finite over $\mathbb{Q}$ has degree at most $d$. Take one, $E$, of maximal degree. For $\alpha \in F$ algebraic over $\mathbb{Q}$, the field $E(\alpha)$ is another, so $E(\alpha) = E$ and $\alpha \in E$.

*Step 3: passing to $\bar{\mathbb{Q}}$.* Fix an algebraic closure $\bar K$ of $K$, let $\bar{\mathbb{Q}}$ be the algebraic closure of $\mathbb{Q}$ in $\bar K$, and put $\tilde K = K\bar{\mathbb{Q}} \subseteq \bar K$. Generators of $K$ over $\mathbb{Q}$ generate $\tilde K$ over $\bar{\mathbb{Q}}$, so $\tilde K$ is a field of algebraic functions over the algebraically closed field $\bar{\mathbb{Q}}$ of characteristic $0$, as in [Grauert's theorem](mordell-conjecture-over-function-fields.md). The curve $X_{\tilde K}$ is proper, smooth and geometrically connected, and it has genus $g$, because $\dim H^1(X, \mathcal{O}_X)$ is unchanged by flat base change [@stacks2026, Lemma 30.5.2, Tag 02KH].

Suppose that $X(K)$ is infinite. Then so is $X(\tilde K) \supseteq X(K)$. Grauert's theorem gives a curve $C'$ over $\bar{\mathbb{Q}}$ and an isomorphism $f : X_{\tilde K} \to C'_{\tilde K}$ such that all but finitely many points of $X(\tilde K)$ are sent into $C'(\bar{\mathbb{Q}}) \subseteq C'(\tilde K)$ [@samuel1966grauert, p. 55]. So the set $P$ of $x \in X(K)$ with $f(x) \in C'(\bar{\mathbb{Q}})$ is infinite.

*Step 4: descent to a finitely generated field.* The field $\bar{\mathbb{Q}}$ is the directed union of its subfields $L$ finite over $\mathbb{Q}$. The field $\tilde K$ is the directed union of the fields $KL$, since each element of $\tilde K$ is a rational expression in finitely many elements of $K$ and of $\bar{\mathbb{Q}}$. All the schemes here are of finite type over fields, hence of finite presentation, so the following limit statements hold [@stacks2026, Lemma 32.10.1, Tag 01ZM].

- By its part (1), there are a number field $L_1 \subseteq \bar{\mathbb{Q}}$ and a curve $C_1$ over $L_1$ with $C' \cong C_1 \otimes_{L_1} \bar{\mathbb{Q}}$. Then $C'_{\tilde K} = C_1 \otimes_{L_1} \tilde K$.
- By its part (2), applied to the fields $KL$ with $L \supseteq L_1$, both $f$ and $f^{-1}$ are base changes of morphisms $f_L : X_{KL} \to C_1 \otimes_{L_1} KL$ and $g_L$ in the other direction, for some $L$. By its part (3), after enlarging $L$, both $g_L \circ f_L$ and $f_L \circ g_L$ are identities. So $f_L$ is an isomorphism.

*Step 5: the points lie over a number field.* Let $L'$ be the set of elements of $KL$ algebraic over $\mathbb{Q}$. By Step 2 it is a number field, since $KL$ is finitely generated over $\mathbb{Q}$, and $L_1 \subseteq L \subseteq L' \subseteq KL$. Let $x \in P$ and $y = f_L(x) \in C_1(KL)$. Choose an affine open $\mathrm{Spec}\, A \subseteq C_1$ containing the image of $y$, so that $y$ is an $L_1$-algebra homomorphism $A \to KL$. Its composite with $KL \subseteq \tilde K$ is the point $f(x)$. Since $f(x)$ comes from a $\bar{\mathbb{Q}}$-point, this composite has image in $\bar{\mathbb{Q}}$. So the image of $y$ lies in $KL \cap \bar{\mathbb{Q}} = L'$, and $y \in C_1(L')$. As $f_L$ is an isomorphism and $X(K) \to X(KL)$ is injective, $x \mapsto y$ is injective on $P$. Hence $C_1(L')$ is infinite.

*Step 6: contradiction.* Put $C_2 = C_1 \otimes_{L_1} L'$, a curve over the number field $L'$ with $C_2(L') = C_1(L')$ infinite. Its base change $C_2 \otimes_{L'} KL = C_1 \otimes_{L_1} KL$ is isomorphic to $X_{KL}$ by $f_L$.

- *Smooth and proper.* $X_{KL}$ is smooth and proper over $KL$, and $\mathrm{Spec}\, KL \to \mathrm{Spec}\, L'$ is an fpqc covering, so $C_2$ is smooth and proper over $L'$ [@stacks2026, Lemmas 35.23.16 and 35.23.29, Tags 02L1 and 02VL].
- *Geometrically connected.* Let $E$ be a field extension of $L'$. A quotient of $E \otimes_{L'} KL$ by a maximal ideal is a field $\Omega$ containing $E$ and $KL$. Then $C_2 \otimes_{L'} \Omega \cong X_\Omega$ is connected, as $X$ is geometrically connected, and it maps onto $C_2 \otimes_{L'} E$, which is therefore connected.
- *Genus.* By flat base change, $\dim_{L'} H^1(C_2, \mathcal{O}) = \dim_{KL} H^1(X_{KL}, \mathcal{O}) = g$ [@stacks2026, Lemma 30.5.2, Tag 02KH].

So $C_2$ is a smooth, proper, geometrically connected curve of genus $g \ge 2$ over a number field with infinitely many rational points. This contradicts Faltings' theorem [@faltings1983, §6, Satz 7, p. 365]. Hence $X(K)$ is finite. $\square$

**Remarks.** These are checked here.

- *Division of labour.* Grauert's theorem disposes of every curve that does not become isomorphic to a curve over $\bar{\mathbb{Q}}$, and for the others it leaves only points that are algebraic, up to finitely many exceptions. Faltings' theorem controls the algebraic points.
- *An algebraically closed constant field is not allowed.* If $k$ is algebraically closed of characteristic $0$ and $C_0$ is a curve of genus at least $2$ over $k$, then $C_0(k(t)) \supseteq C_0(k)$ is infinite.
- *Characteristic $p$.* The analogue fails for fields finitely generated over $\mathbb{F}_p$. Let $C_0$ be a smooth, proper, geometrically connected curve of genus at least $2$ over $\mathbb{F}_q$, and let $K$ be its function field. For each $n \ge 0$, composing the generic point $\mathrm{Spec}\, K \to C_0$ with $\mathrm{Spec}$ of the embedding $a \mapsto a^{q^n}$ of $K$ into itself gives a point of $C_0(K)$. These points are pairwise distinct: a morphism $\mathrm{Spec}\, K \to C_0$ with image the generic point determines the embedding of the function field into $K$, and the embeddings differ on any $a \in K$ transcendental over $\mathbb{F}_q$. So $C_0(K)$ is infinite. Over an algebraically closed constant field, Samuel's [characteristic-$p$ theorem](mordell-conjecture-over-function-fields.md) traces every exception to curves defined over finite fields, through Frobenius iterates of finitely many points.

**Uses in the graph.**

- *Sections and birational sections.* Over $K$ finitely generated over $\mathbb{Q}$, Koenigsmann's proof that the section conjecture implies its birational form needs $X'(K)$ to be finite for every curve $X'$ of genus at least $2$ in an inverse system of curves [@koenigsmann2005, proof of Lemma 1.7, p. 8]. The [section conjecture](section-conjecture.md) entry writes out the argument. When $K$ has positive transcendence degree, the theorem above supplies this finiteness.
- *Tamagawa's neighbourhood criterion.* Over fields finitely generated over $\mathbb{Q}$, the criterion for a section to be geometric in [Tamagawa's theorem on affine curves](tamagawa-grothendieck-conjecture-for-affine-curves.md) rests on the finiteness of $Y(k)$ for proper curves $Y$ of genus at least $2$, as that entry records.
