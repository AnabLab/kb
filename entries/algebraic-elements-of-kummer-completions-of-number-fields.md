---
title: Algebraic elements of Kummer completions of number fields
kind: theorem
summary: Let $F$ be a number field. An element of the Kummer completion of $F^\times$ whose components at all degree-one primes are $p$-adic numbers satisfying one rational polynomial lies in $F^\times$. This answers both questions in Tachihara–Tsujimura's Remark 4.4.2 affirmatively.
tags: [number-fields, mono-anabelian, kummer-theory]
edges:
  - {to: purely-mono-anabelian-reconstruction-of-number-fields, label: motivated-by, note: "Answers (Q-1) and (Q-2) of [@tachiharatsujimura2026, Remark 4.4.2, p. 43]. Conditions (iii) and (iv) of their Lemma 4.4 can be dropped, and (i) weakened."}
---

**Notation.** Let $F$ be a number field. Let $\mathcal V^{d=1}$ be the set of nonarchimedean primes $v$ of $F$ with $F_v = \mathbb Q_p$, where $p$ is the residue characteristic of $v$, and write $\iota_v : F \to F_v$. For an abelian group $M$, written multiplicatively, its *Kummer completion* is $\widehat M = \varprojlim_n M/M^n$, with projections $\pi_n : \widehat M \to M/M^n$ [@tachiharatsujimura2026, Definition 1.1, p. 15]. For $v \in \mathcal V^{d=1}$ we have $F_v^\times \cong \mathbb Z \times \mathcal O_v^\times$, and $\mathcal O_v^\times \cong \mathbb Z_p^\times$ is a finite group times $\mathbb Z_p$, hence already Kummer complete. So $\widehat{F_v^\times} \cong \widehat{\mathbb Z} \times \mathcal O_v^\times$, and $F_v^\times \to \widehat{F_v^\times}$ is injective with image $\mathbb Z \times \mathcal O_v^\times$ [@tachiharatsujimura2026, Remark 1.1.6, p. 16].

**Theorem.** Let $a = (a_v) \in \prod_{v \in \mathcal V^{d=1}} F_v^\times$, and suppose:

- (A) $a$ is algebraic over $\mathbb Q$, that is, $g(a_v) = 0$ for all $v$, for one nonzero $g \in \mathbb Q[X]$;
- (B) some $\hat a \in \widehat{F^\times}$ maps to $(a_v)$ under $\widehat{F^\times} \to \prod_v \widehat{F_v^\times}$.

Then there is $b \in F^\times$ with $a_v = \iota_v(b)$ for every $v$.

Conversely, every $b \in F^\times$ gives such an element. So $F^\times$ is exactly the set of elements of $\prod_v F_v^\times$ satisfying (A) and (B).

**Consequence for the reconstruction algorithm.** Tachihara and Tsujimura cut $F$ out of $\prod_{v \in \mathcal V^{d=1}} F_v$ by four conditions [@tachiharatsujimura2026, Lemma 4.4, pp. 40–41]:

- (i) $a$ lies in the image of $\mathcal H^\times(F) \cup \{0\}$, where $\mathcal H^\times(F) = F^\times \cdot \widehat{\mathcal O_F^\times} \subset \widehat{F^\times}$ is their Kummer container [@tachiharatsujimura2026, Lemma 1.8, p. 22];
- (ii) $a$ is algebraic over $\mathbb Q$;
- (iii) $\mathbb Q[a]$ is a field;
- (iv) every prime that splits completely in $F$ splits completely in $\mathbb Q[a]$.

They ask whether (i) and (ii) suffice (Q-1). They also ask whether (i) can be weakened to: $a = 0$, or $a \in \prod_v F_v^\times$ and (B) holds (Q-2) [@tachiharatsujimura2026, Remark 4.4.2, p. 43]. For nonzero $a$, condition (i) implies (B), since $\mathcal H^\times(F)$ maps into $\prod_v F_v^\times$ through $\widehat{F^\times}$ [@tachiharatsujimura2026, Definition 1.7, p. 21]. So the theorem answers both questions affirmatively, also when the two modifications are made together.

Their lemma allows any index set $S$ with a surjection $S \to \mathcal V^{d=1}$. Condition (B), or (i), forces $a_s$ to depend only on the image of $s$, so this reduces to $S = \mathcal V^{d=1}$, as in the first step of their proof [@tachiharatsujimura2026, proof of Lemma 4.4, p. 41]. Hence the subring $\mathbf F(G)$ of their reconstruction, defined by the group-theoretic versions of (i)–(iv), is already cut out by the versions of (i) and (ii) [@tachiharatsujimura2026, Theorem 4.5 (2), pp. 44–45]. The proof below uses neither their Lemma 4.2, which rests on Grunewald and Segal's theorem, nor their Lemma 4.3. The authors single out Lemma 4.3 as a weak Hom-version bi-anabelian input [@tachiharatsujimura2026, Remark 4.6.1, pp. 46–47]. The proof below uses the Chebotarev density theorem and Kummer theory instead.

**Proof.**

*Step 0: setup.* Each $a_v$ is a nonzero root of $g$. So we may replace $g$ by the product of its distinct monic irreducible factors other than $X$. Then $g$ has distinct nonzero roots $\alpha_1, \dots, \alpha_k \in \bar{\mathbb Q}$, with $k = \deg g \ge 1$. Let $L \subset \bar{\mathbb Q}$ be a finite Galois extension of $\mathbb Q$ containing $F$ and all $\alpha_j$. Put $D = [L : \mathbb Q]$. Let $C$ be the least common multiple of the finitely many $m \ge 1$ with $\varphi(m) \le D$, where $\varphi$ is Euler's function, and put $c = k! \cdot C$. For each $n \ge 1$, choose $a_n \in F^\times$ representing $\pi_n(\hat a) \in F^\times/F^{\times n}$.

*Step 1: local $n$-th powers.* For every $n$ and every $v \in \mathcal V^{d=1}$, $a_v\,\iota_v(a_n)^{-1} \in F_v^{\times n}$.

Kummer completion is functorial, so $\pi_n(a_v)$ is the class of $\iota_v(a_n)$ in $F_v^\times/F_v^{\times n}$. The kernel of $\pi_n$ on $\widehat{F_v^\times} \cong \widehat{\mathbb Z} \times \mathcal O_v^\times$ is $n\widehat{\mathbb Z} \times \mathcal O_v^{\times n}$, which is the group of $n$-th powers. So $a_v = \iota_v(a_n)\, y^n$ with $y \in \widehat{F_v^\times}$. Here $y^n \in F_v^\times$, so the $\widehat{\mathbb Z}$-component $t$ of $y$ has $nt \in \mathbb Z$. Since $n\widehat{\mathbb Z} \cap \mathbb Z = n\mathbb Z$ and $\widehat{\mathbb Z}$ is torsion-free, $t \in \mathbb Z$, so $y \in F_v^\times$.

*Step 2: Chebotarev.* Fix $n$. Put $K = L(\mu_n)$, $\beta_j = \alpha_j a_n^{-1} \in L^\times$, $M_j = K(\beta_j^{1/n})$, and let $M$ be the compositum of the $M_j$. We show that $[M_j : K] \le k$ for some $j$.

Let $\sigma \in \mathrm{Gal}(M/K)$. By the Chebotarev density theorem, the primes of $K$ unramified in $M$ with Frobenius $\sigma$ have Dirichlet density $1/[M:K] > 0$. The primes of $K$ that are unramified over $\mathbb Q$ and of residue degree $1$ over $\mathbb Q$ have Dirichlet density $1$ [@tachiharatsujimura2026, §0, p. 14]. So some prime $P$ of $K$ lies in both sets.

- *The prime $P$.* Let $p$ be the prime below $P$. Then $K_P = \mathbb Q_p$, giving an embedding $\iota_P : K \to \mathbb Q_p$. Let $v$ be the prime of $F$ below $P$. Then $F_v \subseteq K_P = \mathbb Q_p$, so $v \in \mathcal V^{d=1}$, and $\iota_P$ restricts to $\iota_v$ on $F$.
- *Matching a root.* The numbers $\iota_P(\alpha_1), \dots, \iota_P(\alpha_k)$ are $k$ distinct roots of $g$ in $\mathbb Q_p$, so they are all of its roots there. Hence $a_v = \iota_P(\alpha_j)$ for some $j$.
- *Splitting.* By Step 1, $\iota_P(\beta_j) = a_v\,\iota_v(a_n)^{-1}$ is an $n$-th power in $K_P$. Since $\mu_n \subset K$, the polynomial $X^n - \beta_j$ splits into linear factors over $K_P$. So $P$ splits completely in $M_j$, and $\sigma$ restricts to the identity on $M_j$.

Thus $\mathrm{Gal}(M/K)$ is the union of the subgroups $\mathrm{Gal}(M/M_j)$. Counting elements gives $\sum_j 1/[M_j : K] \ge 1$, so $[M_j : K] \le k$ for some $j$.

*Step 3: Kummer descent.* Since $\mu_n \subset K$, Kummer theory says that $[K(\beta^{1/n}) : K]$ is the order of $\beta$ in $K^\times/K^{\times n}$. So by Step 2, $\beta_j^{k!} \in K^{\times n}$ for some $j$. We show that $b^C \in L^{\times n}$ for every $b \in L^\times \cap K^{\times n}$. It follows that $(\alpha_j a_n^{-1})^c \in L^{\times n}$ for some $j$, which depends on $n$.

Write $b = \gamma^n$ with $\gamma \in K$. The group $G = \mathrm{Gal}(K/L)$ is abelian and acts on $\mu_n$ through a character $\chi : G \to (\mathbb Z/n)^\times$. The map $f(\tau) = \tau(\gamma)/\gamma$ is a 1-cocycle $G \to \mu_n$.

- *A relation.* For $\sigma, \tau \in G$, since $\sigma\tau = \tau\sigma$, we have $f(\sigma)\, f(\tau)^{\chi(\sigma)} = f(\sigma\tau) = f(\tau\sigma) = f(\tau)\, f(\sigma)^{\chi(\tau)}$. Hence $f(\tau)^{\chi(\sigma) - 1} = \tau(f(\sigma))/f(\sigma)$, so $f^{\chi(\sigma)-1}$ is a coboundary. So is $f^n = 1$.
- *Descent.* Let $d = \gcd(n, \chi(\sigma) - 1 : \sigma \in G)$. Then $f^d$ is a coboundary: there is $\zeta \in \mu_n$ with $\tau(\gamma^d)/\gamma^d = \tau(\zeta)/\zeta$ for all $\tau$. So $\gamma^d \zeta^{-1} \in L$, and $b^d = (\gamma^d \zeta^{-1})^n \in L^{\times n}$.
- *Bounding $d$.* Every element of $\chi(G)$ is $\equiv 1 \bmod d$. So $\chi(G)$ lies in the kernel of the surjection $(\mathbb Z/n)^\times \to (\mathbb Z/d)^\times$, which has index $\varphi(d)$. But $\chi(G)$ is the image of $\mathrm{Gal}(\mathbb Q(\mu_n)/L \cap \mathbb Q(\mu_n))$, of index $[L \cap \mathbb Q(\mu_n) : \mathbb Q] \le D$. So $\varphi(d) \le D$, hence $d \mid C$, and $b^C \in L^{\times n}$.

*Step 4: one root for all $n$.* Let $J(n)$ be the set of $j$ with $(\alpha_j a_n^{-1})^c \in L^{\times n}$. It is nonempty by Step 3. It does not depend on the choice of $a_n$, since two choices differ by an element of $F^{\times n}$. If $n \mid n'$, then $a_{n'}$ also represents $\pi_n(\hat a)$, so $J(n') \subseteq J(n)$. The sets $J(1!) \supseteq J(2!) \supseteq \cdots$ are nonempty subsets of $\{1, \dots, k\}$, so they have a common element $j$. Since $n \mid n!$, this $j$ lies in every $J(n)$. With $\alpha = \alpha_j$, we get $(\alpha a_n^{-1})^c \in L^{\times n}$ for all $n \ge 1$.

*Step 5: $\alpha^c \in F$.* First, $\bigcap_n L^{\times n} = \{1\}$. An element that is an $n$-th power for every $n$ has all valuations zero, so it lies in $\mathcal O_L^\times$. It then lies in $(\mathcal O_L^\times)^n$ for every $n$, because $\mathcal O_L$ is integrally closed. The intersection of these groups is trivial because $\mathcal O_L^\times$ is finitely generated.

Now let $\tau \in \mathrm{Gal}(L/F)$. Then $\tau$ fixes $a_n$, so dividing $\tau((\alpha a_n^{-1})^c)$ by $(\alpha a_n^{-1})^c$ gives $(\tau(\alpha)/\alpha)^c \in L^{\times n}$ for all $n$. Hence $\tau(\alpha^c) = \alpha^c$, so $h = \alpha^c$ lies in $F^\times$.

*Step 6: back to $\widehat{F^\times}$.* Put $D' = [L : F]$ and $e = cD'$.

- *Norms.* For each $n$, $h a_n^{-c} = \gamma^n$ for some $\gamma \in L^\times$. Taking norms, $(h a_n^{-c})^{D'} = N_{L/F}(\gamma)^n \in F^{\times n}$.
- *Identifying $\hat a^e$.* So $\pi_n(h^{D'}) = \pi_n(\hat a^{e})$ for every $n$, that is, $\hat a^e = h^{D'}$ in $\widehat{F^\times}$. Here $F^\times \to \widehat{F^\times}$ is injective, by the argument of Step 5 applied to $F$.
- *Extracting a root.* Then $\pi_e(h^{D'}) = \pi_e(\hat a^e) = 1$, so $h^{D'} = b_0^e$ for some $b_0 \in F^\times$. Hence $(\hat a\, b_0^{-1})^e = 1$ in $\widehat{F^\times}$.

*Step 7: torsion of $\widehat{F^\times}$.* We have $F^\times \cong \mu(F) \times P$ with $P$ free abelian. Indeed, the valuations embed $F^\times/\mathcal O_F^\times$ into a free abelian group, and $\mathcal O_F^\times \cong \mu(F) \times \mathbb Z^r$. Kummer completion commutes with finite products, and $\widehat{\mu(F)} = \mu(F)$.

$\widehat P$ is torsion-free. Suppose $x = (x_n)_n \in \widehat P$, with $x_n \in P/nP$ written additively, and $ex = 0$. Lift $x_{ne}$ to $y \in P$. Then $ey \in neP$, say $ey = nez$, and $y = nz$ since $P$ is torsion-free. So $x_n$, the image of $x_{ne}$, is $0$ for every $n$.

Hence the torsion of $\widehat{F^\times}$ is $\mu(F)$, so $\hat a = b_0\zeta$ for some $\zeta \in \mu(F)$. Put $b = b_0\zeta \in F^\times$.

*Step 8: conclusion.* The image of $\hat a = b$ in $\prod_v \widehat{F_v^\times}$ is $(\iota_v(b))_v$, and by (B) it is $(a_v)_v$. Since $F_v^\times \to \widehat{F_v^\times}$ is injective, $a_v = \iota_v(b)$ for every $v$. $\square$

**Where the hypotheses enter.** Algebraicity gives the finite set of candidate values $\alpha_j$. Step 2 needs a component at the prime below every degree-one prime $P$ of $K$, which is why all of $\mathcal V^{d=1}$ is used. Condition (A) alone is not enough: the element with $a_v = -1$ at one prime $v$ and $a_v = 1$ at all others is a root of $X^2 - 1$ but is not of the form $(\iota_v(b))_v$.
