---
title: Tate's finite-field Tate-module and isogeny theorems
kind: theorem
summary: Over a finite field, Tate modules recover completed Hom groups of abelian varieties, and Frobenius polynomials determine their isogeny classes. For proper curves over a fixed finite field, rational geometric abelianization detects the Jacobian's isogeny class.
tags: [finite-fields, galois-groups, fundamental-groups, curves]
edges:
  - {to: faltings-tate-isogeny-theorem, label: analogous-to, note: "The same completed Hom and rational isogeny statements over number fields."}
  - {to: tate-full-faithfulness-for-p-divisible-groups, label: analogous-to, note: "Another recovery of morphisms from Tate modules; here Hom is completed and the base field is finite."}
  - {to: prime-to-p-anabelian-curves-over-finite-fields, label: analogous-to, note: "The final comparison describes the rational geometric abelian quotient of that theorem's input over a fixed base field."}
---

**Setting.** Let $k=\mathbb F_q$ have characteristic $p$, let $A,B/k$ be abelian varieties, and let $\ell\ne p$. Put $G_k=\operatorname{Gal}(\bar k/k)$,
$$
T_\ell A=\varprojlim_n A[\ell^n](\bar k),\qquad
V_\ell A=T_\ell A\otimes_{\mathbb Z_\ell}\mathbb Q_\ell.
$$

**Theorem (Tate).** The natural map
$$
\operatorname{Hom}_k(A,B)\otimes_{\mathbb Z}\mathbb Z_\ell
\xrightarrow{\sim}
\operatorname{Hom}_{\mathbb Z_\ell[G_k]}(T_\ell A,T_\ell B)
$$
is an isomorphism [@tate1966finite, §1, Main Theorem, p. 134]. Frobenius acts semisimply on $V_\ell A$ [@tate1966finite, §2, pp. 138–139]. Write $f_A(T)=\det(T-\mathrm{Frob}_q\mid V_\ell A)$, using arithmetic Frobenius. Then
$$
A\text{ and }B\text{ are }k\text{-isogenous}
\quad\Longleftrightarrow\quad
V_\ell A\cong V_\ell B\text{ as }G_k\text{-modules}
\quad\Longleftrightarrow\quad f_A=f_B
$$
[@tate1966finite, §3, Theorem 1(b)–(c), p. 139]. Tate also proves equivalence with equality of the point counts over every finite extension of $k$ [@tate1966finite, Theorem 1(c), p. 139].

**Geometric abelianization (deduced here).** Fix $k$ and $\ell\ne p$. For a smooth proper geometrically connected curve $X/k$ of genus at least $2$, let $\Delta_{X,\ell}^{\mathrm{ab}}$ be the maximal abelian pro-$\ell$ quotient of $\pi_1(X_{\bar k})$, with its conjugation action of $G_k$, and put
$$W_\ell(X)=\Delta_{X,\ell}^{\mathrm{ab}}\otimes_{\mathbb Z_\ell}\mathbb Q_\ell.$$
For two such curves $X,Y$ with Jacobians $J_X,J_Y$,
$$W_\ell(X)\cong W_\ell(Y)\text{ as }G_k\text{-modules}
\quad\Longleftrightarrow\quad J_X\text{ and }J_Y\text{ are }k\text{-isogenous}.$$
Indeed, $\Delta_{X,\ell}^{\mathrm{ab}}\cong T_\ell J_X$ canonically as $G_k$-modules [@saiditamagawa2009, proof of Proposition 1.8(vi), p. 146]. Tensor this identification for $X$ and $Y$ with $\mathbb Q_\ell$ and apply Tate's isogeny criterion above. $\square$

This identifies what the rational geometric abelian quotient detects in [prime-to-$p$ curve reconstruction](prime-to-p-anabelian-curves-over-finite-fields.md), with the base field and its Galois action fixed.
