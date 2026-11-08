---
title: Pop's elementary metabelian birational p-adic section theorem
kind: theorem
summary: 'For a smooth proper curve over a finite $k/\mathbb{Q}_p$ containing $\mu_p$, every section on elementary abelian mod-$p$ Galois quotients that lifts to elementary metabelian quotients comes from a unique $k$-point. Each point gives a family of such sections (Pop).'
tags: [curves, local-fields, galois-groups, solvable-quotients, section-conjecture]
edges:
  - {to: birational-section-conjecture, label: addresses, note: "A local analogue using elementary mod-p quotients and a lifting condition."}
  - {to: birational-sections-over-local-fields, label: analogous-to, note: "Pop's Theorem $A^0$ implies the full birational section theorem over finite extensions of Q_p, while the converse fails [@pop2010sections, p. 623]."}
  - {to: abelian-birational-sections, label: analogous-to}
---

**Quotients.** Let $k/\mathbb{Q}_p$ be finite with $\mu_p\subset k$, and $K=k(X)$ for a smooth proper geometrically integral curve $X/k$. For $F=k,K$, let $F'/F$ and $F''/F'$ be successive maximal elementary abelian $p$-extensions. Restriction gives

$$r':\operatorname{Gal}(K'/K)\longrightarrow\operatorname{Gal}(k'/k),\qquad
r'':\operatorname{Gal}(K''/K)\longrightarrow\operatorname{Gal}(k''/k).$$

A continuous section $s'$ of $r'$ is *liftable* if a continuous section $s''$ of $r''$ induces $s'$ under the natural quotient maps [@pop2010sections, §1, p. 622].

**Theorem (Pop).** Every liftable $s'$ has image in the decomposition group in $\operatorname{Gal}(K'/K)$ of a unique $x\in X(k)$. Conversely, each $x\in X(k)$ gives a family of liftable section classes parametrized by

$$H^1\bigl(\operatorname{Gal}(k'/k),\mathbb{Z}/p(1)\bigr)$$

[@pop2010sections, Theorem A, p. 622].

**Scope.** Both arithmetic and geometric groups are quotiented here, whereas [abelian birational sections](abelian-birational-sections.md) retain $G_k$. The roots-of-unity hypothesis matters: without it, Pop exhibits liftable sections even when $X(k)=\varnothing$ [@pop2010sections, §1, Remark (1), pp. 622–623].

Pop's Theorem $A^0$ handles the missing roots of unity by forming the elementary quotients after a finite Galois base extension containing $\mu_p$, while retaining descent to the original field. He deduces the [full birational section theorem](birational-sections-over-local-fields.md) over every finite extension of $\mathbb{Q}_p$ from this variant; the converse does not hold [@pop2010sections, §1, p. 623].
