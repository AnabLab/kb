---
title: Exact descent of finite Kummer classes to a curve subfield
kind: theorem
summary: 'An infinite-dimensional space of mod-$\ell$ classes descends from a curve field after a finite extension to a unique curve subfield of the original function field, provided the extension is the compositum with that curve field. No division by the extension degree is used.'
tags: [function-fields, curves, kummer-theory, reconstruction-algorithms]
edges:
  - {to: kummer-theory, label: uses, note: "Bounds the kernel on classes under a finitely generated extension."}
  - {to: hilbert-theorem-90, label: uses, note: "Descent of a Kummer class through a regular extension."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks the algebraic descent in Lemmas 5.1–5.2 and Theorem 5.4 of the mod-ell manuscript [@openai2026modl, pp. 20–24]."}
---

**Setting.** Fix a prime $\ell$, put $\Lambda=\mathbb F_\ell$, and write $V_F=F^\times/F^{\times\ell}$ additively. Let $L/l$ be a finitely generated extension of an algebraically closed field with $\operatorname{char}l\ne\ell$. A *curve subfield* of $L/l$ contains $l$, is relatively algebraically closed in $L$, and has transcendence degree one over $l$. Its map $V_P\to V_L$ is injective: an $\ell$-th root in $L$ of an element of $P$ is algebraic over $P$.

**Statement.** Let $H\subseteq V_L$ be infinite dimensional. Suppose $M/L$ is finite and $P_0\subseteq M$ is a one-variable function field over $l$ such that
$$M=LP_0,\qquad M/P_0\text{ is regular},\qquad
\operatorname{im}(H\to V_M)\subseteq\operatorname{im}(V_{P_0}\to V_M).$$
Then there is a unique curve subfield $P\subseteq L$ with $H\subseteq V_P$.

This isolates the descent step of the October 2026 manuscript's Theorem 5.4 [@openai2026modl, proof of Theorem 5.4, pp. 23–24]. The auxiliary facts below are its Lemmas 4.1, 5.1 and 5.2, with their proofs made explicit.

**Auxiliary facts.**

1. *Finite kernels.* For a finitely generated extension $F/B$ with $\operatorname{char}B\ne\ell$ and $\mu_\ell\subseteq B$, the kernel of $V_B\to V_F$ is finite dimensional [@openai2026modl, Lemma 4.1, p. 15]. Indeed the relative algebraic closure $B'$ of $B$ in $F$ is finite: if $F$ has degree $N$ over $B(\mathbf x)$ for a transcendence basis $\mathbf x$, every finite $B_1/B$ in $B'$ satisfies $[B_1:B]=[B_1(\mathbf x):B(\mathbf x)]\le N$. A member of maximal degree in this directed family contains all the others. Roots of $r$ independent classes in the kernel generate a Kummer extension of degree $\ell^r$ inside $B'$, so $\ell^r\le[B':B]$.
2. *Intersections.* If $P\ne Q$ are curve subfields of a function field $F/l$, then $V_P\cap V_Q\subseteq V_F$ is finite dimensional [@openai2026modl, Lemma 5.2, pp. 20–21]. The compositum $PQ$ has transcendence degree two, since otherwise relative algebraic closedness would give $P=Q$. It is the function field of $C_P\times C_Q$: the multiplication map from the domain $P\otimes_l Q$ has zero kernel, since a nonzero prime kernel would lower the transcendence degree. Both factor fields are relatively algebraically closed in $PQ$, so their maps on $V$ are injective. A common class in $V_{PQ}$ has zero order along every $\{x\}\times C_Q$, since its representative from $Q$ has order zero there. Its representative from $P$ is therefore in the common point-order kernel of $V_P$, isomorphic to $\operatorname{Pic}(C_P)[\ell]$ of dimension $2g(C_P)$ [@openai2026modl, Lemma 3.4, p. 13] [@stacks2026, Lemma 53.17.1, Tag 0C1Z]. The kernel $J$ of $V_{PQ}\to V_F$ is finite dimensional by fact 1. On the pairs $(a,b)\in V_P\oplus V_Q$ whose images agree in $V_F$, the difference map $(a,b)\mapsto a-b$ has image in $J$ and kernel the already bounded intersection in $V_{PQ}$. This bounds the intersection in $V_F$ too.
3. *Infinite dimension.* Every $V_P$ for a curve subfield is infinite dimensional. For $t\in P\setminus l$, the classes $[t-a]$, $a\in l$, are independent in $V_{l(t)}$ by their orders at $t=a$. Only finitely many independent combinations can disappear in $V_P$, by fact 1. Consequently an inclusion $V_P\subseteq V_Q$ for two curve subfields forces $P=Q$.
4. *Regular descent.* If $F/B$ is finitely generated and regular, $\operatorname{char}B\ne\ell$ and $\mu_\ell\subseteq B$, then a $g\in F^\times$ with an $\ell$-th root in $F\overline B$ has class from $V_B$ [@openai2026modl, Lemma 5.1, p. 20]. The root $r$ belongs to $FB'$ for a finite Galois $B'/B$: it is separable over $F$, so a purely inseparable constant extension is unnecessary. Regularity identifies $\operatorname{Gal}(FB'/F)$ with $\operatorname{Gal}(B'/B)$. The cocycle $\sigma\mapsto\sigma(r)/r\in\mu_\ell$ is $\sigma(b)/b$ for $b\in B'^\times$, by [Hilbert 90](hilbert-theorem-90.md). Then $r/b\in F$, $b^\ell\in B$, and $g=b^\ell(r/b)^\ell$.

**Proof of the statement.** Choose a finite normal extension $N/L$ containing $M$, allowing inseparability, and let $P_N$ be the relative algebraic closure of $P_0$ in $N$. This is a curve subfield of $N/l$. By fact 1 the image $H_N$ of $H$ in $V_N$ is infinite dimensional, and by hypothesis it lies in $V_{P_N}$. Every $\gamma\in G=\operatorname{Aut}_L(N)$ fixes $H_N$ pointwise, so
$$H_N\subseteq V_{P_N}\cap V_{\gamma(P_N)}.$$
Fact 2 gives $\gamma(P_N)=P_N$.

Put $P=P_N\cap L$. An element of $L$ algebraic over $P$ is algebraic over $P_N$, hence lies in $P_N\cap L$; thus $P$ is relatively algebraically closed in $L$. The invariant field $P_N^G$ has transcendence degree one and lies in $N^G$. If the characteristic is zero, $N^G=L$. In characteristic $p>0$, $N^G/L$ is finite purely inseparable; a uniform $p^r$-th power therefore takes $P_N^G$ into $P$. This preserves transcendence degree, so $P/l$ has transcendence degree one in both cases. It is finitely generated: the relative algebraic closure in $L$ of $l(u)$ for any $u\in P\setminus l$ is finite over $l(u)$ by the argument of fact 1 and equals $P$. Thus $P$ is a curve subfield.

Since $P\subseteq L\subseteq M$ and $P$ is algebraic over $P_0$ inside $N$, relative algebraic closedness of $P_0$ in $M$ gives $P\subseteq P_0$. Hence $P_0/P$ is finite algebraic. Choose algebraic closures inside one algebraically closed overfield. The compositum hypothesis gives the exact identity
$$M\overline{P_0}=LP_0\overline{P_0}=L\overline P.\tag{1}$$

The extension $L/P$ is regular. Only separability needs checking. In characteristic $p>0$, $[P:P^p]=p$, because $P$ is a one-variable function field over the perfect field $l$. Choose $u\in P\setminus P^p$. Relative algebraic closedness gives $u\notin L^p$. Thus $P^{1/p}=P(u^{1/p})$ and
$$L\otimes_P P^{1/p}\cong L[T]/(T^p-u)$$
is a field. Its reducedness proves separability [@stacks2026, Lemma 10.44.2, Tag 030W].

For $[g]\in H$, the hypothesis on its image in $V_M$ writes $g=b m^\ell$ with $b\in P_0^\times$, $m\in M^\times$. It has an $\ell$-th root in $M\overline{P_0}=L\overline P$. Fact 4 applied to the regular extension $L/P$ now gives $[g]\in V_P$, with no lost classes. If also $H\subseteq V_Q$ for a curve subfield $Q$, fact 2 forces $Q=P$. $\square$

**Checks and scope.** A norm would only give $[M:L]H\subseteq V_P$, which is empty information if $\ell\mid[M:L]$. Identity (1) avoids that step, and fact 1 only discards a finite-dimensional kernel when proving $H_N$ infinite dimensional. For $F=l(x,y)$, $P=l(x)$ and $Q=l(y)$, their intersection is zero already in $V_F$, by the vertical and horizontal orders. The argument allows arbitrary cardinality of $l$, $\ell=2$, and finite extensions with inseparability. It is an algebraic component of [the manuscript](manuscripts-claiming-bogomolov-pop.md), which is not peer reviewed; it supplies no valuation or pencil correspondence.
