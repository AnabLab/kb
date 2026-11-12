---
title: No rival copies of type (a) for the rank-three pro-2 Demushkin group with canonical image of order two
kind: theorem
summary: 'For the pro-$2$ Demushkin group $D = \langle x_1, x_2, x_3 \mid x_1^2(x_2, x_3)\rangle$, an outer class of order $2$ acting as $-1$ on $V_D$ has involutions in both cosets of $\ker\chi$. So no rival normal copy of $D$ in $\mathrm{Aut}(D)$ meets $D$ openly.'
tags: [pro-p-groups, galois-groups]
edges:
  - {to: rival-copies-of-demushkin-groups-with-canonical-image-of-order-two, label: uses, note: "part 1 (central classes act by scalars), part 2 (finite normal $2$-subgroups) and the Corollary (admissible classes correspond to rival copies of type (a))"}
  - {to: involutions-of-demushkin-groups-with-finite-canonical-image, label: uses, note: "part 3 (no nontrivial $2$-power torsion in the kernel of $\\mathrm{Out}(D) \\to \\mathrm{GL}(V_D)$), and the proof of part 1 for odd $n$, which shows $\\ker\\chi = \\ker\\theta_1$"}
  - {to: classification-of-demushkin-groups, label: uses, note: "item 2 with $n = 3$ and $f = \\infty$, and the criterion that rank and canonical image determine the group"}
  - {to: subgroups-of-demushkin-groups-of-rank-at-least-three, label: uses, note: "part 1, torsion-freeness, and part 4, centre-freeness"}
  - {to: demushkin-groups-of-rank-at-least-three-are-elastic, label: uses, note: "Corollary 2, the two cases for a rival copy"}
  - {to: demushkin-groups-inside-their-automorphism-groups, label: addresses, note: "Excludes case (a) of the reduction for the pro-$2$ Demushkin group of rank $3$ with $\\mathrm{Im}(\\chi) = \\{\\pm 1\\}$. Case (b) is untouched, so the question stays open for this group."}
---

**Setting.** Let $D$ be a pro-$2$ [Demushkin group](demushkin-group.md) of rank $3$ whose canonical character $\chi$ has image $\{\pm 1\}$. With $(a, b) = a^{-1}b^{-1}ab$ and $F$ the free pro-$2$ group on $x_1, x_2, x_3$, the [classification](classification-of-demushkin-groups.md), item 2 with $n = 3$ and $f = \infty$, gives a Demushkin group $F/(r)$ with
$$r = x_1^2(x_2, x_3)$$
and canonical image $\{\pm 1\}$. Rank and canonical image determine the group (same entry, Statement), so $D \cong F/(r)$. Everything below is invariant under isomorphism, so take $D = F/(r)$, and write $x_k$ also for the image of $x_k$ in $D$.

Use the notation of [rival copies for canonical image of order two](rival-copies-of-demushkin-groups-with-canonical-image-of-order-two.md). $V_D = D^{\mathrm{ab}}/\mathrm{torsion}$ has basis $v_2, v_3$, the images of $x_2, x_3$. $D^+ = \ker\chi$, which every automorphism of $D$ preserves. $D$ is torsion-free and centre-free ([subgroups of Demushkin groups](subgroups-of-demushkin-groups-of-rank-at-least-three.md), parts 1 and 4). Identify $D$ with $\mathrm{Inn}(D)$ inside $A = \mathrm{Aut}(D)$ through $d \mapsto c_d$, $c_d(g) = dgd^{-1}$, so that $\alpha c_d \alpha^{-1} = c_{\alpha(d)}$. $\Gamma$ is the image of $A$, or of $\mathrm{Out}(D)$, in $\mathrm{GL}(V_D \otimes \mathbb{Q}_2)$. A class $\varphi \in \mathrm{Out}(D)$ is a coset $Dy$ in $A$, the union of the two cosets $D^+y$ and $(D \setminus D^+)y$ of $D^+$. It is *admissible* if it is central of order $2$ and its elements of order $2$ form a nonempty subset of one of these two cosets.

Let $\theta_1 \in \mathrm{Hom}(D, \mathbb{F}_2)$ send $x_1$ to $1$ and $x_2, x_3$ to $0$. The proof of part 1 of [the involution theorem for finite canonical image](involutions-of-demushkin-groups-with-finite-canonical-image.md), case $n$ odd, shows that $D^+ = \ker\theta_1$. So $x_2, x_3 \in D^+$ and $x_1 \notin D^+$.

Put
$$w = x_3x_2, \qquad d = x_1x_2^{-1}x_3^{-1}.$$

**Theorem.** This is proved here.

1. *Two involutions in one outer class.* The substitution
$$y : \quad x_1 \mapsto wx_1w^{-1}, \qquad x_2 \mapsto x_2^{-1}, \qquad x_3 \mapsto x_3^{-1}$$
induces an automorphism $\bar y$ of $D$ with $\bar y^2 = 1$, acting on $V_D$ as $-1$. Its class $\varphi_0 \in \mathrm{Out}(D)$ has order $2$. The automorphism $c_d \circ \bar y$ also has order $2$, and $d \notin D^+$. So $\varphi_0$ has elements of order $2$ in both of its cosets $D^+\bar y$ and $(D \setminus D^+)\bar y$.
2. *Central $2$-torsion.* Every element of finite $2$-power order in the centre of $\mathrm{Out}(D)$ is $1$ or $\varphi_0$. $\mathrm{Out}(D)$ has a nontrivial finite normal $2$-subgroup if and only if $\varphi_0$ is central, and then $\{1, \varphi_0\}$ is the only one.
3. *Case (a).* $\mathrm{Out}(D)$ has no admissible class. Hence, if $N \ne D$ is a closed normal subgroup of $A$ isomorphic to $D$, then $N \cap D$ has infinite index in both $D$ and $N$, and is not topologically finitely generated.

**Proof of part 1.**

*$y$ is an automorphism of $F$.* Let $y'$ be the endomorphism of $F$ with $y'(x_1) = (x_2x_3)x_1(x_2x_3)^{-1}$, $y'(x_2) = x_2^{-1}$ and $y'(x_3) = x_3^{-1}$. Both $y \circ y'$ and $y' \circ y$ fix $x_2$ and $x_3$. Since $y(x_2x_3) = x_2^{-1}x_3^{-1} = w^{-1}$,
$$y(y'(x_1)) = w^{-1}\cdot wx_1w^{-1}\cdot w = x_1,$$
and since $y'(w) = x_3^{-1}x_2^{-1} = (x_2x_3)^{-1}$,
$$y'(y(x_1)) = (x_2x_3)^{-1}\cdot(x_2x_3)x_1(x_2x_3)^{-1}\cdot(x_2x_3) = x_1.$$
So $y' = y^{-1}$.

*$y$ preserves $(r)$.* In every group, $(ba)(a, b)(ba)^{-1} = ba\cdot a^{-1}b^{-1}ab\cdot a^{-1}b^{-1} = aba^{-1}b^{-1} = (a^{-1}, b^{-1})$. With $a = x_2$, $b = x_3$ this gives $y((x_2, x_3)) = (x_2^{-1}, x_3^{-1}) = w(x_2, x_3)w^{-1}$. Also $y(x_1^2) = wx_1^2w^{-1}$. So
$$y(r) = wx_1^2w^{-1}\cdot w(x_2, x_3)w^{-1} = wrw^{-1}.$$
The automorphism $y$ maps the closed normal subgroup $(r)$ generated by $r$ onto the closed normal subgroup generated by $wrw^{-1}$, which is $(r)$. So $y$ induces an automorphism $\bar y$ of $D$.

*$\bar y^2 = 1$.* $y^2$ fixes $x_2$ and $x_3$. As $y(w) = x_3^{-1}x_2^{-1}$,
$$y^2(x_1) = y(w)\,y(x_1)\,y(w)^{-1} = (x_3^{-1}x_2^{-1}x_3x_2)\,x_1\,(x_3^{-1}x_2^{-1}x_3x_2)^{-1} = (x_3, x_2)\,x_1\,(x_3, x_2)^{-1}.$$
In $D$, $r = 1$ gives $(x_2, x_3) = x_1^{-2}$, so $(x_3, x_2) = (x_2, x_3)^{-1} = x_1^2$, and $\bar y^2(x_1) = x_1^2x_1x_1^{-2} = x_1$. So $\bar y^2$ fixes the topological generators $x_1, x_2, x_3$ of $D$, and $\bar y^2 = 1$.

*Action on $V_D$.* $\bar y$ sends $v_2 \mapsto -v_2$ and $v_3 \mapsto -v_3$, so it acts on $V_D$ as $-1$. Inner automorphisms act trivially on $D^{\mathrm{ab}}$, so $\bar y$ is not inner, and $\varphi_0$ has order exactly $2$.

*The second involution.* In $F$, using $w^{-1}x_2x_3 = x_2^{-1}x_3^{-1}x_2x_3 = (x_2, x_3)$ and $x_2^{-1}x_3^{-1} = w^{-1}$,
$$y(d)\,d = (wx_1w^{-1}x_2x_3)(x_1x_2^{-1}x_3^{-1}) = w\,x_1(x_2, x_3)x_1\,w^{-1}.$$
In $D$, $(x_2, x_3) = x_1^{-2}$, so $x_1(x_2, x_3)x_1 = 1$ and $\bar y(d)\,d = 1$, that is, $\bar y(d) = d^{-1}$; then also $d\,\bar y(d) = 1$. Hence
$$(c_d\bar y)^2 = c_d\,(\bar y c_d \bar y^{-1})\,\bar y^2 = c_d\,c_{\bar y(d)} = c_{d\bar y(d)} = 1.$$
And $c_d\bar y \ne 1$, as it acts on $V_D$ as $-1$. Since $\theta_1(d) = 1$, $d \notin D^+$. So $\bar y \in D^+\bar y$ and $c_d\bar y = d\bar y \in (D \setminus D^+)\bar y$ are elements of order $2$ of $\varphi_0$ in its two cosets of $D^+$. $\square$

**Proof of part 2.** Let $\varphi$ be central in $\mathrm{Out}(D)$ of order $2^k$. Since $\mathrm{Out}(D) \to \Gamma$ is onto, the image of $\varphi$ is central in $\Gamma$, so it has one conjugate there, and by part 1 of [the rival-copies theorem](rival-copies-of-demushkin-groups-with-canonical-image-of-order-two.md) it is multiplication by some $c \in \mathbb{Z}_2^\times$. Then $c^{2^k} = 1$, so $c = \pm 1$, the only roots of unity in $\mathbb{Z}_2^\times$.

- If $c = 1$, then $\varphi$ lies in the kernel of $\mathrm{Out}(D) \to \mathrm{GL}(V_D)$ and has finite $2$-power order, so $\varphi = 1$ by part 3 of [the involution theorem](involutions-of-demushkin-groups-with-finite-canonical-image.md).
- If $c = -1$, put $\psi = \varphi\varphi_0$. As $\varphi$ is central, $\psi^{2^k} = \varphi^{2^k}\varphi_0^{2^k} = 1$, and $\psi$ acts on $V_D$ as $(-1)(-1) = 1$. By the same part 3, $\psi = 1$, so $\varphi = \varphi_0^{-1} = \varphi_0$.

For the second claim, let $\Phi$ be a nontrivial finite normal $2$-subgroup of $\mathrm{Out}(D)$. By part 2 of the rival-copies theorem, $\Phi = \{1, \varphi\}$ with $\varphi$ central of order $2$, so $\varphi = \varphi_0$ by the first claim, and $\varphi_0$ is central. Conversely, if $\varphi_0$ is central, $\{1, \varphi_0\}$ is a normal subgroup of order $2$. $\square$

**Proof of part 3.** An admissible class is central of order $2$, so by part 2 it would be $\varphi_0$. By part 1, the elements of order $2$ of $\varphi_0$ include $\bar y \in D^+\bar y$ and $c_d\bar y \in (D \setminus D^+)\bar y$, so they do not lie in one coset of $D^+$, and $\varphi_0$ is not admissible. So there is no admissible class. By the Corollary of the rival-copies theorem, no closed normal subgroup $N \ne D$ of $A$ with $N \cong D$ meets $D$ in an open subgroup of $D$. By Corollary 2 of [elasticity](demushkin-groups-of-rank-at-least-three-are-elastic.md), such an $N$ therefore meets $D$ as in its case (b): in a subgroup of infinite index in both $D$ and $N$ that is not topologically finitely generated. $\square$

**Remarks.**

- *What is left open.* Case (b) is untouched, so Tsujimura's question for this $D$ is still open: whether $D$ is the only closed normal copy of itself in $A$, whether it is characteristic, and whether $\mathrm{Out}(A) = 1$. Whether $\varphi_0$ is central in $\mathrm{Out}(D)$ is not decided here. It is central if the kernel of $\mathrm{Out}(D) \to \mathrm{GL}(V_D)$ is trivial, because $-1$ is central in $\Gamma$, but that kernel is not determined here. Nor is whether $\Gamma$ contains scalars other than $\pm 1$.
- *The method in other ranks.* The proofs of parts 2 and 3 use only that some class of order $2$ acting on $V_D$ as $-1$ has elements of order $2$ in both of its cosets of $D^+$: an admissible class $\varphi$ commutes with such a class $\varphi_0$, so $\varphi\varphi_0$ is a class of order at most $2$ acting trivially on $V_D$, hence trivial. The same argument applies in any rank $n \ge 3$ with $\mathrm{Im}(\chi) = \{\pm 1\}$ once such a class is found; it is constructed here only for $n = 3$.
- *Comparison with the earlier lift of $-1$.* For $n = 3$, part 1 of the rival-copies theorem lifts $-1 \in \Gamma$ to $(L \circ R^{-1} \circ L)^2$, which is not shown there to have finite order. Part 1 here gives a lift of order $2$.
- *Sources.* The statements and proofs are not taken from a source, and no literature search was made. No novelty is claimed.
