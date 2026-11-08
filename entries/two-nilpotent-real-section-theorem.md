---
title: Wickelgren's two-nilpotent real section theorem
kind: theorem
summary: 'For a smooth geometrically connected real curve with a real base point, Wickelgren recovers its real connected components as the abelian section classes that lift to the geometric class-two quotient. A quadratic cohomological obstruction detects exactly these classes.'
tags: [curves, fundamental-groups, section-conjecture, galois-cohomology]
edges:
  - {to: section-conjecture, label: analogous-to, note: "Over the real numbers, components replace individual rational points; this theorem identifies their abelian section classes using a class-two lifting condition."}
  - {to: abelian-by-central-galois-group, label: analogous-to, note: "The same lower-central construction, applied here to a geometric fundamental group with its real Galois action."}
---

**Setting.** Let $X/\mathbb{R}$ be a smooth geometrically connected curve with $b\in X(\mathbb{R})$. Put $G=\mathrm{Gal}(\mathbb{C}/\mathbb{R})$, $\pi=\pi_1(X_{\mathbb{C}},\bar b)$ and $\Pi=\pi_1(X,\bar b)$. Define $\Gamma_1=\pi$, $\Gamma_{n+1}=\overline{[\pi,\Gamma_n]}$. For $n=1,2$, let $S_n$ be the continuous sections of
$$1\longrightarrow\pi/\Gamma_{n+1}\longrightarrow\Pi/\Gamma_{n+1}\longrightarrow G\longrightarrow1$$
modulo conjugation by $\pi/\Gamma_{n+1}$.

**Theorem (Wickelgren).** Point sections induce a natural bijection
$$\pi_0(X(\mathbb{R}))\xrightarrow{\ \sim\ }\operatorname{im}(S_2\longrightarrow S_1).$$
Here $\pi_0$ uses the real analytic topology [@wickelgren2014real, Theorem 1.1, p. 2].

**Obstruction.** The base point supplies the $G$-actions and identifies $S_1$ with $H^1(G,A)$, where $A=\pi/\Gamma_2$. Put $C=\Gamma_2/\Gamma_3$. The central extension $1\to C\to\pi/\Gamma_3\to A\to1$ gives the continuous-cohomology obstruction
$$\delta_2:H^1(G,A)\longrightarrow H^2(G,C).$$
Its zero set is exactly the image above [@wickelgren2014real, §3, p. 11; Theorem 3.5, p. 13]. For the commutator pairing $c:A\times A\to C$,
$$\delta_2(u+v)=\delta_2(u)+\delta_2(v)+c_*(u\smile v)$$
[@wickelgren2014real, Proposition 3.1, p. 11].

**Scope.** The quotient retains the real Galois action. Two-nilpotent means nilpotency class at most two; $\pi$ is the full profinite geometric fundamental group. The classified objects lie in $S_1$, rather than being all of $S_2$.
