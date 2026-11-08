---
title: Refined Selmer schemes and a finiteness criterion
kind: theorem
summary: 'Local Kummer-image conditions at every prime define Betts–Dogra’s refined Selmer scheme. Its dimension bound can prove finiteness of a Chabauty–Kim locus when the usual dimension test fails, as for the thrice-punctured line with two allowed denominator primes.'
tags: [curves, number-fields, fundamental-groups, galois-cohomology]
edges:
  - {to: hyperbolic-curve, label: uses}
  - {to: kim-nonabelian-tate-shafarevich-conjecture, label: analogous-to, note: "Retains local geometricity at the primes in $S$ in that entry's $S$-integral variant."}
---

**Setting.** Let $S$ be a finite set of primes and $\mathcal X/\mathbb Z[1/S]$ the complement of an étale divisor in a smooth proper curve, with affine [hyperbolic](hyperbolic-curve.md) generic fibre $X$. Choose $b\in\mathcal X(\mathbb Z[1/S])$ and a prime $\ell\notin S$. For $n\ge1$, put
$$U=\pi_1^{\mathbb Q_\ell}(X_{\bar{\mathbb Q}},b),\qquad U_n=U/C^{n+1}U,\qquad T=S\cup\{\ell\},$$
where $C^\bullet$ is the lower central series and $G_{\mathbb Q,T}$ denotes the Galois group unramified outside $T$. The usual $\mathrm{Sel}_{S,n}\subset H^1(G_{\mathbb Q,T},U_n)$ imposes crystallinity at $\ell$. Write $j_{n,q}$ for the local path-torsor Kummer map [@bestetal2024refined, §2.1, pp. 6–7].

**Refinement.** Betts–Dogra's refined scheme is
$$\mathrm{Sel}^{\min}_{S,n}=\mathrm{Sel}_{S,n}\cap\bigcap_{q\in S}\mathrm{loc}_q^{-1}\left(\overline{j_{n,q}(X(\mathbb Q_q))}^{\mathrm{Zar}}\right).$$
Its refined locus is $\mathcal X(\mathbb Z_\ell)^{\min}_{S,n}=j_{n,\ell}^{-1}(\mathrm{Im}_{\mathrm{sch}}(\mathrm{loc}_\ell|_{\mathrm{Sel}^{\min}_{S,n}}))$, using the scheme-theoretic image; the usual locus uses $\mathrm{Sel}_{S,n}$ instead. Thus
$$\mathcal X(\mathbb Z[1/S])\subseteq\mathcal X(\mathbb Z_\ell)^{\min}_{S,n}\subseteq\mathcal X(\mathbb Z_\ell)_{S,n}.$$
Good reduction outside $S$ makes the other local conditions automatic within $\mathrm{Sel}_{S,n}$ [@bestetal2024refined, Definition 2.7 and following paragraph, pp. 16–17].

**Finiteness (Betts–Dogra, preprint).** Each local closure at $q\in S$ has dimension at most $1$ [@bettsdogra2020, Proposition 1.2.1(2), p. 5]. With $V_i=C^iU/C^{i+1}U$,
$$\dim\mathrm{Sel}^{\min}_{S,n}\le |S|+\sum_{i=1}^n\dim_{\mathbb Q_\ell}H^1_f(G_{\mathbb Q,T},V_i).$$
Here global $f$ means crystalline at $\ell$ and unramified at every other prime. The refined locus is finite if
$$|S|+\sum_{i=1}^n\dim_{\mathbb Q_\ell}H^1_f(G_{\mathbb Q,T},V_i)<\sum_{i=1}^n\dim_{\mathbb Q_\ell}H^1_f(G_{\mathbb Q_\ell},V_i)$$
[@bettsdogra2020, Lemma 12.4.1 and proof, pp. 97–98].

**Example.** For $X=\mathbb P^1\setminus\{0,1,\infty\}$, $2\in S$ and $n=2$, the usual, refined and local Selmer dimensions are $2|S|$, $|S|$ and $3$, respectively. Thus $|S|=2$ gives finiteness of the refined locus where the usual dimension inequality fails [@bestetal2024refined, Introduction, p. 4; Lemma 2.11, p. 19]. Their calculation uses a tangential base point; Proposition 2.14(i) and its proof identify the refined schemes and loci under a change of base point [@bestetal2024refined, p. 20].
