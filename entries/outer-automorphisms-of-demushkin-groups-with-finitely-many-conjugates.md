---
title: Outer automorphisms of Demushkin groups with finitely many conjugates act trivially on the abelianization modulo torsion
kind: theorem
summary: 'For odd $p$ and a Demushkin group $D$ of rank $n \ge 3$ with $q \ne 0$, $\mathrm{Out}(D)$ acts on $V = D^{\mathrm{ab}}/\mathrm{torsion}$ through a group with no nontrivial element of finite conjugacy class. So every finite normal subgroup of $\mathrm{Out}(D)$ acts trivially on $V$.'
tags: [pro-p-groups, galois-groups]
edges:
  - {to: demushkin-groups-inside-their-automorphism-groups, label: addresses, note: "Corollary 1: for odd $p$, $q \\ne 0$ and rank at least $3$, in case (a) of the reduction a rival copy $N$ of $D$, and $ND$, act trivially on $D^{\\mathrm{ab}}$ modulo torsion. It does not exclude case (a), and says nothing about case (b)."}
  - {to: automorphisms-of-demushkin-groups-modulo-q, label: uses, note: "the standard form of $D$, and part 2, for an automorphism acting on $D/D^q(D,D)$ by a prescribed matrix"}
  - {to: demushkin-group, label: uses, note: "uniqueness of the canonical character, and that $q$ is the largest power of $p$ with $\\mathrm{Im}(\\chi) \\subseteq 1 + q\\mathbb{Z}_p$, in Step 2"}
  - {to: demushkin-groups-of-rank-at-least-three-are-elastic, label: uses, note: "only Corollary 2, to place Corollary 1 in case (a) of Tsujimura's question"}
  - {to: maximal-pro-p-galois-groups-of-p-adic-fields, label: uses, note: "only for Corollary 2, that $G_K(p)$ is a Demushkin group of rank $[K:\\mathbb{Q}_p] + 2$"}
---

**Setting.** Let $p$ be an odd prime and $D$ a [Demushkin group](demushkin-group.md) of rank $n \ge 3$ with invariant $q \ne 0$. Let $T$ be the torsion subgroup of $D^{\mathrm{ab}}$ and $V = D^{\mathrm{ab}}/T$. Every automorphism of $D$ acts on $D^{\mathrm{ab}}$, preserves $T$, and so acts on $V$; inner automorphisms act trivially on $D^{\mathrm{ab}}$. This gives a homomorphism $\rho : \mathrm{Out}(D) \to \mathrm{GL}(V)$, and we write $\Gamma = \rho(\mathrm{Out}(D))$.

By [automorphisms modulo $q$](automorphisms-of-demushkin-groups-modulo-q.md), Setting, we may take $D = F/(r)$, where $F$ is the free pro-$p$ group on $x_1, \dots, x_n$, $n = 2g$ is even, $q = p^m$ with $m \ge 1$, and
$$r = x_1^q(x_1, x_2)(x_3, x_4) \cdots (x_{n-1}, x_n), \qquad (x, y) = xyx^{-1}y^{-1}.$$
In particular $n \ge 4$. Since $r \equiv x_1^q$ modulo $(F, F)$, the image of the closed normal subgroup $(r)$ in $F^{\mathrm{ab}} = \mathbb{Z}_p^n$ is $q\mathbb{Z}_p e_1$, where $e_i$ is the class of $x_i$. So $D^{\mathrm{ab}} = \mathbb{Z}_p^n/q\mathbb{Z}_pe_1$, $T = (\mathbb{Z}/q)e_1$, and $V$ is free over $\mathbb{Z}_p$ with basis $v_2, \dots, v_n$, the classes of $x_2, \dots, x_n$. Put
$$W = \mathbb{Z}_pv_3 \oplus \cdots \oplus \mathbb{Z}_pv_n, \qquad P_i = \mathbb{Z}_pv_{2i-1} \oplus \mathbb{Z}_pv_{2i} \quad (2 \le i \le g),$$
so that $V = \mathbb{Z}_pv_2 \oplus W$ and $W = P_2 \oplus \cdots \oplus P_g$.

**Theorem.** This is proved here.

1. *An invariant form.* There is a nonzero $\mathbb{Z}_p$-linear map $\varphi : V \to \mathbb{Z}_p$ with $\varphi \circ \gamma = \varphi$ for all $\gamma \in \Gamma$, and $\ker\varphi = W$. So every $\gamma \in \Gamma$ satisfies $\gamma(W) = W$ and $\gamma(v_2) \in v_2 + W$.
2. *No elements of finite conjugacy class.* Let $f \in \Gamma$ commute with some positive power of each element of $\Gamma$. Then $f = 1$. This applies to every $f \in \Gamma$ with only finitely many conjugates in $\Gamma$. In particular $\Gamma$ has trivial centre and no nontrivial finite normal subgroup.
3. *Consequence for $\mathrm{Out}(D)$.* If $\theta \in \mathrm{Out}(D)$ has only finitely many conjugates in $\mathrm{Out}(D)$, then $\rho(\theta) = 1$. In particular every finite normal subgroup of $\mathrm{Out}(D)$ lies in $\ker\rho$.

Part 2 is not vacuous: $\Gamma$ is infinite and not abelian, since it contains the matrices $1 + E_i$ and $1 + E'_i$ of Step 1 below, which have infinite order and do not commute. The proof of part 2 uses only that $f$ commutes with a power of each of $2g - 1$ explicit elements of $\Gamma$.

**Corollary 1 (Tsujimura's question, case (a)).** Let $p$, $D$ be as above, and let $N$ be a closed normal subgroup of $\mathrm{Aut}(D)$ with $ND/D$ finite, where $D$ is identified with $\mathrm{Inn}(D)$. Then every element of $ND$, in particular of $N$, acts trivially on $V$.

This applies in case (a) of [the reduction](demushkin-groups-of-rank-at-least-three-are-elastic.md), Corollary 2, where $N \cong D$, $N \ne D$, and $N \cap D$ is open in both. So for odd $p$ and $q \ne 0$, case (a) requires a nontrivial finite normal $p$-subgroup of $\mathrm{Out}(D)$ inside $\ker\rho$. The corollary does not exclude this, because $\ker\rho$ is not trivial: the automorphism of $D$ induced by $x_2 \mapsto x_2x_1$, fixing the other $x_i$, acts nontrivially on $D/\Phi(D)$ ([automorphisms modulo $q$](automorphisms-of-demushkin-groups-modulo-q.md), example after the theorem), so it is not inner, and it acts trivially on $V$ since the class of $x_1$ lies in $T$. See [the problem](demushkin-groups-inside-their-automorphism-groups.md).

*Proof.* $ND/D$ is a finite normal subgroup of $\mathrm{Out}(D) = \mathrm{Aut}(D)/D$, so each of its elements has only finitely many conjugates, and part 3 applies. $\square$

**Corollary 2 ($p$-adic fields).** Let $p$ be odd and $K/\mathbb{Q}_p$ finite with $\zeta_p \in K$. Then $G_K(p)$ is a Demushkin group of rank $[K : \mathbb{Q}_p] + 2 \ge 3$ whose invariant $q$ is the largest power of $p$ with $\mu_q \subset K$, so $q \ne 0$ ([maximal pro-$p$ Galois groups](maximal-pro-p-galois-groups-of-p-adic-fields.md); [automorphisms modulo $q$](automorphisms-of-demushkin-groups-modulo-q.md), Corollary). So the theorem and Corollary 1 apply to $D = G_K(p)$, for which $V$ is $G_K(p)^{\mathrm{ab}}$ modulo torsion.

**Proof.**

*Step 1: some elements of $\Gamma$.*

(a) For $2 \le i \le g$, let $\sigma_i$ and $\sigma'_i$ be the continuous endomorphisms of $F$ with $\sigma_i(x_{2i-1}) = x_{2i-1}x_{2i}$ and $\sigma'_i(x_{2i}) = x_{2i}x_{2i-1}$, each fixing the other generators. They are automorphisms, with inverses given by $x_{2i-1} \mapsto x_{2i-1}x_{2i}^{-1}$ and $x_{2i} \mapsto x_{2i}x_{2i-1}^{-1}$. Both fix $r$, because
$$(ab, b) = ab\,b\,b^{-1}a^{-1}b^{-1} = (a, b), \qquad (a, ba) = a\,ba\,a^{-1}a^{-1}b^{-1} = (a, b).$$
So each maps $(r)$ onto $(r)$ and induces an automorphism of $D$. Let $E_i, E'_i \in \mathrm{End}(V)$ be given by $E_i(v_{2i-1}) = v_{2i}$ and $E'_i(v_{2i}) = v_{2i-1}$, each killing the other basis vectors. Then $\rho(\sigma_i) = 1 + E_i$ and $\rho(\sigma'_i) = 1 + E'_i$. As $E_i^2 = E_i'^2 = 0$, $\rho(\sigma_i)^N = 1 + NE_i$ and $\rho(\sigma'_i)^N = 1 + NE'_i$ for $N \ge 1$.

(b) Put $w_0 = v_3 + v_5 + \cdots + v_{n-1} \in W$, and let $t \in \mathrm{GL}(V)$ fix $W$ pointwise with $t(v_2) = v_2 + w_0$. There is $g_0 \in \Gamma$ with $g_0 \equiv t \pmod{q}$, that is, $g_0 - t \in q\,\mathrm{End}(V)$. Indeed, $D/D^q(D, D) = D^{\mathrm{ab}}/qD^{\mathrm{ab}}$ is free over $\mathbb{Z}/q$ on the classes $y_i$ of the $x_i$. In the parametrization of [automorphisms modulo $q$](automorphisms-of-demushkin-groups-modulo-q.md), Lemma 3 (1), the tuple with multiplier $1$, identity on the span of $y_3, \dots, y_n$, vector $y_3 + y_5 + \cdots + y_{n-1}$ and $\gamma = 0$ gives the matrix $B \in H(\mathbb{Z}/q)$ with $By_1 = y_1$, $By_2 = y_2 + y_3 + y_5 + \cdots + y_{n-1}$, and $By_k \equiv y_k$ modulo $y_1$ for $k \ge 3$. By part 2 of that theorem, $B$ is induced by an automorphism $\alpha$ of $D$. The kernel of $D^{\mathrm{ab}} \to V/qV$ is $T + qD^{\mathrm{ab}}$, so $V/qV = (D/D^q(D, D))/(\mathbb{Z}/q)y_1$, compatibly with automorphisms, with $v_k$ corresponding to the class of $y_k$. So $g_0 = \rho(\alpha)$ acts on $V/qV$ as $t$ does.

*Step 2: the invariant form (part 1).* Let $\chi : D \to \mathbb{Z}_p^\times$ be the canonical character, characterized by the surjectivity of $H^1(D, I_j(\chi)) \to H^1(D, I_1(\chi))$ for all $j \ge 1$ ([Demushkin group](demushkin-group.md)). For $\alpha \in \mathrm{Aut}(D)$, $c \mapsto c \circ \alpha$ takes $1$-cocycles for the action through $\chi$ to $1$-cocycles for the action through $\chi \circ \alpha$, since $c(\alpha(x)\alpha(y)) = c(\alpha(x)) + \chi(\alpha(x))c(\alpha(y))$. This gives isomorphisms $H^1(D, I_j(\chi)) \to H^1(D, I_j(\chi \circ \alpha))$ compatible with reduction, so $\chi \circ \alpha$ has the characterizing property and $\chi \circ \alpha = \chi$. The same argument is in the proof of part 4 (b) of [automorphisms modulo $q$](automorphisms-of-demushkin-groups-modulo-q.md).

As $q$ is the largest power of $p$ with $\mathrm{Im}(\chi) \subseteq 1 + q\mathbb{Z}_p$ and $q \ne 0$, $\chi$ is nontrivial with values in $1 + q\mathbb{Z}_p$. For odd $p$ the $p$-adic logarithm is an isomorphism of topological groups $1 + q\mathbb{Z}_p \to q\mathbb{Z}_p$, so $\log\chi$ is a nonzero continuous homomorphism from $D$ to a torsion-free abelian group. It factors through $D^{\mathrm{ab}}$, kills $T$, and so induces a nonzero continuous homomorphism $\varphi : V \to \mathbb{Z}_p$, which is $\mathbb{Z}_p$-linear. From $\chi \circ \alpha = \chi$ we get $\varphi \circ \rho(\alpha) = \varphi$.

Applying this to $\sigma_i$ and $\sigma'_i$ gives $\varphi(E_iv) = \varphi(E'_iv) = 0$ for all $v$, so $\varphi(v_{2i}) = \varphi(v_{2i-1}) = 0$. Hence $W \subseteq \ker\varphi$, and as $\varphi \ne 0$ and $V = \mathbb{Z}_pv_2 \oplus W$, $\varphi(v_2) \ne 0$ and $\ker\varphi = W$. For $\gamma \in \Gamma$, $\gamma(W) \subseteq \ker\varphi = W$, with equality as $\gamma^{-1}(W) \subseteq W$ too, and $\varphi(\gamma(v_2) - v_2) = 0$ gives $\gamma(v_2) \in v_2 + W$. This proves part 1.

For $\gamma \in \Gamma$ write $\gamma(v_2) = v_2 + w_\gamma$ with $w_\gamma \in W$, and $C_\gamma = \gamma|_W \in \mathrm{GL}(W)$. By induction on $N$,
$$\gamma^N(v_2) = v_2 + S_N(\gamma)\,w_\gamma, \qquad S_N(\gamma) = \textstyle\sum_{k=0}^{N-1} C_\gamma^k. \tag{1}$$

*Step 3: the centralizer of the $\sigma$'s.* Let $f \in \mathrm{End}(V)$ commute with $1 + NE_i$ and $1 + NE'_i$ for $2 \le i \le g$ and some $N \ge 1$. As $\mathrm{End}(V)$ is torsion-free, $f$ commutes with every $E_i$ and $E'_i$. Write $v_k^*$ for the coordinate functions of the basis $v_2, \dots, v_n$. Evaluating $fE_i = E_if$ at $v_{2i-1}$ gives $f(v_{2i}) = v_{2i-1}^*(f(v_{2i-1}))\,v_{2i}$, and at $v_k$ with $k \ne 2i-1$ it gives $v_{2i-1}^*(f(v_k)) = 0$. Likewise $fE'_i = E'_if$ gives $f(v_{2i-1}) = v_{2i}^*(f(v_{2i}))\,v_{2i-1}$, and $v_{2i}^*(f(v_k)) = 0$ for $k \ne 2i$. So $f(v_{2i-1}) = \mu_iv_{2i-1}$ and $f(v_{2i}) = \lambda_iv_{2i}$, where $\lambda_i = v_{2i-1}^*(f(v_{2i-1})) = \mu_i$. Also every coordinate of $f(v_2)$ other than $v_2^*$ vanishes. Hence
$$f(v_2) = cv_2 \quad\text{and}\quad f|_{P_i} = \lambda_i \cdot \mathrm{id}_{P_i} \quad (2 \le i \le g) \tag{2}$$
for some $c, \lambda_2, \dots, \lambda_g \in \mathbb{Z}_p$.

*Step 4: a lemma on (1).* Let $C \in \mathrm{End}(W)$ with $C \equiv 1 \pmod{q}$, and $N \ge 1$. Then $\sum_{k=0}^{N-1} C^k = N(1 + Y)$ for some $Y \in p\,\mathrm{End}(W)$.

*Proof.* Write $C = 1 + qX$. By the binomial theorem and $\sum_{k=j}^{N-1}\binom{k}{j} = \binom{N}{j+1}$,
$$\textstyle\sum_{k=0}^{N-1} C^k = \sum_{j=0}^{N-1}\binom{N}{j+1}q^jX^j = N + N\sum_{j=1}^{N-1}\binom{N-1}{j}\dfrac{q^j}{j+1}X^j,$$
using $\binom{N}{j+1} = \frac{N}{j+1}\binom{N-1}{j}$. For $j \ge 1$, $j + 1 < 3^j \le p^j$, so the $p$-adic valuation of $j + 1$ is at most $j - 1$, while that of $q^j$ is at least $j$. So each coefficient $\binom{N-1}{j}q^j/(j+1)$ lies in $p\mathbb{Z}_p$. $\square$

*Step 5: proof of part 2.* Let $f \in \Gamma$ commute with a positive power of each element of $\Gamma$. Replacing the exponents by their product, there is one $N \ge 1$ such that $f$ commutes with $\rho(\sigma_i)^N = 1 + NE_i$, $\rho(\sigma'_i)^N = 1 + NE'_i$ ($2 \le i \le g$) and $g_0^N$, with $g_0$ from Step 1 (b). By Step 3, $f$ has the form (2). By part 1, $\varphi(v_2) = \varphi(f(v_2)) = c\varphi(v_2)$ with $\varphi(v_2) \ne 0$, so $c = 1$.

By (1), $g_0^N(v_2) = v_2 + s$ with $s = S_N(g_0)w_{g_0} \in W$. Then $f(g_0^N(v_2)) = v_2 + f(s)$ and $g_0^N(f(v_2)) = v_2 + s$, so $f(s) = s$, that is, $\lambda_is_i = s_i$ for the component $s_i$ of $s$ in $P_i$. Now $g_0 \equiv t \pmod q$, so $C_{g_0} \equiv 1 \pmod q$ and $w_{g_0} \equiv w_0 \pmod{qW}$, as $g_0(w) - w$ and $w_{g_0} - w_0$ lie in $qV \cap W = qW$. By Step 4, $s = N(1 + Y)w_{g_0}$ with $(1 + Y)w_{g_0} \equiv w_0 \pmod{pW}$. The component of $w_0$ in $P_i$ is $v_{2i-1}$, which is not in $pP_i$. So $s_i \ne 0$, and since $P_i$ is torsion-free, $\lambda_i = 1$. Hence $f = 1$.

If $f \in \Gamma$ has finitely many conjugates, its centralizer $Z$ has finite index in $\Gamma$. Each $\gamma \in \Gamma$ permutes the finitely many cosets $\Gamma/Z$ by left multiplication, so some power $\gamma^N$ with $N \ge 1$ fixes the coset $Z$, that is, $\gamma^N \in Z$. So the first assertion applies. Central elements and elements of finite normal subgroups have finitely many conjugates. $\square$

*Proof of part 3.* The conjugates of $\rho(\theta)$ in $\Gamma$ are the images of the conjugates of $\theta$ in $\mathrm{Out}(D)$, so there are finitely many, and $\rho(\theta) = 1$ by part 2. A finite normal subgroup consists of elements with finitely many conjugates. $\square$

**Remarks.**

- *Contrast with $q = 0$.* For a pro-$p$ surface group the image of $\mathrm{Aut}(D)$ in $\mathrm{GL}(D^{\mathrm{ab}})$ is the full group of symplectic similitudes ([symplectic similitudes lift](symplectic-similitudes-lift-to-pro-p-surface-groups.md)), whose centre contains every scalar in $\mathbb{Z}_p^\times$. So part 2 is special to $q \ne 0$, where the invariant form $\varphi$ of part 1 rules out scalars other than $1$.
- *What is left for case (a).* For odd $p$ and $q \ne 0$, case (a) of Tsujimura's question needs a nontrivial finite normal $p$-subgroup of $\mathrm{Out}(D)$ contained in $\ker\rho$. In Tsujimura's proof for free pro-$p$ groups, the corresponding steps after the action on the abelianization go through a filtration of $\mathrm{Aut}(F)$ by the lower central series ([the problem](demushkin-groups-inside-their-automorphism-groups.md), items 4 and 5). Whether such an argument works for $q \ne 0$ is not known here.
- *Scope.* The proof uses $p$ odd in the standard form of $D$, in Step 2, where $1 + q\mathbb{Z}_p$ must be torsion-free, and in Step 4. Demushkin groups with $p = 2$ and $q \ne 0$ are not treated.
- *Sources.* The statement and proof are not taken from a source. No novelty is claimed; a short literature search did not find the statement.
