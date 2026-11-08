---
title: Recognizing divisorial henselizations by Galois cohomology
kind: theorem
summary: 'Efrat characterizes henselizations at 1-defectless valuations of finitely generated infinite fields as minimal p-divisorial extensions, using Sylow subgroups and degree-one and degree-two cohomology. This gives an algebraic proof of the local step in birational reconstruction.'
tags: [function-fields, number-fields, valuations, galois-cohomology, reconstruction-algorithms]
edges:
  - {to: neukirch-local-theory, label: analogous-to, note: "Both recognize decomposition groups inside absolute Galois groups; here the base field may have higher transcendence degree."}
  - {to: norm-residue-isomorphism-theorem, label: uses, note: "Only the degree-two Merkurjev–Suslin case in the valuation construction [@efrat2000higher, §7.3, p. 276]."}
---

**Valuations.** Write $d(F)$ for the Kronecker dimension: $\operatorname{trdeg}(F/\mathbb F_p)$ in characteristic $p>0$, and $1+\operatorname{trdeg}(F/\mathbb Q)$ in characteristic zero. A valuation $v$ is *1-defectless* if
$$d(F)=d(Fv)+1,$$
where $Fv$ is its residue field [@efrat2000higher, §7.2, p. 274].

**Cohomological test.** Fix a prime $\ell\ne\operatorname{char}F$ and $n=d(F)<\infty$. The field $F$ is *$\ell$-divisorial* if there are intermediate fields
$$F\subseteq E\subseteq M\subseteq F^{\mathrm{sep}}$$
such that:

1. $M/F$ is Galois.
2. Every $\ell$-Sylow subgroup of $G_M$ is isomorphic to $\mathbb Z_\ell$.
3. $\operatorname{vcd}_\ell(G_F)=n+1$.
4. Either $n=1$, or $\operatorname{Gal}(M/F)$ has no nontrivial closed normal prosolvable subgroup.
5. For every finite separable $E'/E$, with trivial coefficients,
$$
H^1(G_{E'},\mathbb F_\ell)\cong\mathbb F_\ell^{n+1},
\qquad
\bigwedge^2 H^1(G_{E'},\mathbb F_\ell)
\xrightarrow{\smile}H^2(G_{E'},\mathbb F_\ell)
\text{ is an isomorphism}.
$$

Here $\operatorname{vcd}_\ell(G_F)$ means $\operatorname{cd}_\ell(G_{F(\sqrt{-1})})$ in characteristic zero, and $\operatorname{cd}_\ell(G_F)$ otherwise [@efrat2000higher, §7.4, Definition, pp. 276–277].

**Recognition theorem (Efrat).** Let $K$ be finitely generated and infinite, let $\ell\ne\operatorname{char}K$, and let $K\subseteq L\subseteq K^{\mathrm{sep}}$. Then
$$
L=K_v^h\text{ for a 1-defectless valuation }v
\quad\Longleftrightarrow\quad
L\text{ is a minimal }\ell\text{-divisorial extension of }K.
$$
Minimality means that no proper intermediate extension is $\ell$-divisorial [@efrat2000higher, §7.4, Theorem 2, p. 277].

**Local correspondence.** With $n=d(K)$, this criterion is a condition on the closed subgroup $G_L\subseteq G_K$. Isomorphisms between absolute Galois groups of finitely generated infinite fields therefore preserve decomposition groups at 1-defectless valuations. This is the local step in [Pop's reconstruction theorem](pop-mochizuki-finitely-generated-fields.md) [@efrat2000higher, §7.2, p. 274; §7.4, p. 277].

**Source.** Efrat's published account states the criterion and sketches its algebraic proof. His full IMRN proof, cited there as [E3], has not been independently opened here.
