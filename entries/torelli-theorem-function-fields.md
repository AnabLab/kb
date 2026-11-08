---
title: A Torelli theorem for higher-dimensional function fields
kind: theorem
summary: 'For complex-embeddable algebraically closed constants and transcendence degree at least two, Hodge-theoretic H1 and zero cup products recover the function field. Hodge classes identify its multiplicative group modulo constants, tensored with any subring of Q, including Q.'
tags: [function-fields, milnor-k-theory, hodge-theory, reconstruction-algorithms]
edges:
  - {to: bogomolov-pop-conjecture, label: analogous-to, note: "Mixed Hodge structures replace Galois groups, with the cup product as the two-step nilpotent data."}
  - {to: pro-l-strategy-for-bogomolov-pop, label: motivated-by, note: "It combines 1-motives with reconstruction methods from birational anabelian geometry [@topaz2025, §1.2]."}
  - {to: galois-equivariant-l-adic-reconstruction, label: analogous-to, note: "There an arithmetic Galois action distinguishes divisorial valuations; here a mixed Hodge structure identifies Kummer classes and rational subfields."}
---

**Statement.** Let $k$ be an algebraically closed field with an embedding into $\mathbb{C}$, let $\Lambda$ be a subring of $\mathbb{Q}$, and let $K|k$ be a function field with $\mathrm{trdeg}(K|k) \ge 2$. Define $H^i(K|k, \Lambda(j))$ as the colimit of Betti cohomology over nonempty open subvarieties of a model. The isomorphism type of $K|k$ is determined by the mixed Hodge structure $H^1(K|k, \Lambda(1))$ together with the set of pairs $(x, y)$ of its elements with $x \cup y = 0$ [@topaz2025, Theorem A].

More precisely, fix the embedding $\sigma:k\hookrightarrow\mathbb C$. For another function field $L|l$ with $l$ algebraically closed, an isomorphism $K\cong L$ carrying $k$ onto $l$ exists if and only if there are an embedding $\tau:l\hookrightarrow\mathbb C$ and an isomorphism of mixed Hodge structures
$$
\phi:H^1(K|k,\Lambda(1))\longrightarrow H^1(L|l,\Lambda(1))
$$
preserving zero cup products in both directions. The two Hodge structures are computed using $\sigma$ and $\tau$, respectively. Thus the constants may be carried by a field isomorphism; the statement does not fix them pointwise [@topaz2025, Theorem 6.1, p. 19].

**Recognizing functions.** Put $V=H^1(K|k,\Lambda(1))$ and $K_\Lambda(K|k)=(K^\times/k^\times)\otimes_{\mathbb Z}\Lambda$. The Kummer map $\kappa_K:K_\Lambda(K|k)\hookrightarrow V$ is injective, and its image is exactly
$$
\{\gamma(1):\gamma\in\operatorname{Hom}_{\mathrm{MHS}}(\Lambda(0),V)\}.
$$
Consequently the mixed Hodge structure singles out the multiplicative module inside $V$. For $\Lambda=\mathbb Z$ this is $K^\times/k^\times$; for $\Lambda=\mathbb Q$ it is its rationalization [@topaz2025, §6.1 and Lemma 6.2, pp. 19–20]. The converse direction of this recognition uses the Picard 1-motive of a smooth open model and Deligne's full faithfulness: its morphisms from $[\mathbb Z\to0]$ are precisely units on that model modulo constants [@topaz2025, proof of Lemma 6.2, p. 20].

**Recovering dependence and rational subfields.** For $f,g\in K^\times$,
$$
\kappa_K(f)\cup\kappa_K(g)=0
\quad\Longleftrightarrow\quad
f,g\text{ are algebraically dependent over }k
$$
[@topaz2025, Lemma 3.2, p. 7]. The resulting dependence structure identifies the multiplicative submodules of relatively algebraically closed subfields of transcendence degree one [@topaz2025, Lemma 5.3, p. 12; Lemma 6.3, p. 20]. For such a subfield $E$, its cohomology inside $V$ is the annihilator, under cup product, of $K_\Lambda(E|k)$. Moreover, $E|k$ is rational exactly when its Kummer map onto that cohomology is surjective. These tests ensure that $\phi$ also preserves the rational submodules [@topaz2025, Lemmas 6.4–6.5, pp. 20–21].

Theorem 5.1 identifies field isomorphisms with isomorphisms of the multiplicative modules preserving dependence and rational submodules, modulo a common scalar in $\Lambda^\times$. Its final geometric step recovers projective lines in $K^\times/k^\times$ and applies projective geometry [@topaz2025, Theorem 5.1, p. 11; Proposition 5.9 and Lemma 5.10, pp. 16–18]. This explains why the theorem still works with rational coefficients: it recognizes rational subfields as well as dependence, without relying on a distinction between divisible and nondivisible elements [@topaz2025, §1.2 and discussion following Theorem 5.1, pp. 2–3 and 11].

**Source version.** All locations above refer to arXiv:1705.01084v3, as specified in the bibliography.
