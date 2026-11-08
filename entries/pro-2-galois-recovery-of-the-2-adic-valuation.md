---
title: Recovering a 2-adic valuation from the maximal pro-2 Galois group
kind: theorem
summary: 'If $G_K(2) \cong G_{\mathbb{Q}_2}(2)$, then $K$ has characteristic $0$ and a $2$-henselian valuation with residue field $\mathbb{F}_2$, least positive value $v(2)$ and $[vK:2vK]=2$ (Koenigsmann–Strommen). Their application proves the pro-$2$ birational section theorem over $\mathbb{Q}_2$.'
tags: [local-fields, galois-groups, pro-p-groups, valuations, section-conjecture]
edges:
  - {to: galois-characterization-of-p-adically-closed-fields, label: analogous-to}
  - {to: birational-sections-over-local-fields, label: analogous-to, note: 'The application uses maximal pro-$2$ groups over $\mathbb{Q}_2$.'}
---

**Setting.** Write $K(2)$ for the maximal pro-$2$ Galois extension of $K$ and [$G_K(2)=\mathrm{Gal}(K(2)/K)$](maximal-pro-p-galois-groups-of-p-adic-fields.md). A valuation is $2$-henselian if it extends uniquely to $K(2)$ [@koenigsmannstrommen2024, Definition 2.1].

**Theorem.** For any field $K$ with $G_K(2)\cong G_{\mathbb{Q}_2}(2)$, one has $\mathrm{char}(K)=0$ and a nontrivial $2$-henselian valuation $v$ satisfying

$$Kv=\mathbb{F}_2,\qquad v(2)=\min\{\gamma\in vK:\gamma>0\},\qquad [vK:2vK]=2$$

[@koenigsmannstrommen2024, Lemma 3.4 and Theorem 4.15].

**Construction.** Put $N=N_{K(\sqrt{5})/K}(K(\sqrt{5})^\times)$. The valuation ring is

$$\mathcal{O}_v=O_1\cup O_2,\qquad O_1=\{x\in K\setminus N:1+x\in N\},\qquad O_2=\{x\in N:xO_1\subseteq O_1\}$$

[@koenigsmannstrommen2024, equations (4.1)–(4.2), Corollary 4.7 and Theorem 4.15]. For $K=\mathbb{Q}_2$, this gives $\mathbb{Z}_2$ [@koenigsmannstrommen2024, §4, p. 17]. Neither henselianity nor $vK\cong\mathbb{Z}$ is asserted [@koenigsmannstrommen2024, Remark 1.1 and the footnote on p. 2].

**Birational application.** For a smooth proper geometrically integral curve $X/\mathbb{Q}_2$, every continuous section of $G_{\mathbb{Q}_2(X)}(2)\to G_{\mathbb{Q}_2}(2)$ has image in a decomposition group at a unique point of $X(\mathbb{Q}_2)$ [@koenigsmannstrommen2024, Corollary 5.4].
