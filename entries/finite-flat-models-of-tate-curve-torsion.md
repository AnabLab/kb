---
title: Finite flat models of Tate-curve torsion
kind: theorem
summary: 'For every prime p and finite K/Q_p, the p^n-torsion of the Tate curve E_q has a finite flat model over O_K exactly when p^n divides v_K(q), equivalently when it is a quotient of crystalline lattices of weights 0,1. So E_{pi^p}[p^n] has none for n >= 2.'
tags: [local-fields, ramification, hodge-theory, elliptic-curves]
edges:
  - {to: fontaine-ramification-bound-for-finite-flat-torsion, label: uses, note: 'Its level-one cutoff over K(zeta_p), applied to a subquotient, is the obstruction to finite flatness.'}
  - {to: crystalline-lattices-and-p-divisible-groups, label: uses, note: 'Crystalline lattices of weights 0,1 are Tate modules of p-divisible groups; used in both directions.'}
  - {to: kummer-extensions-and-tate-curve-periods, label: uses, note: 'The Kummer extension attached to a unit is crystalline with weights 0,1.'}
  - {to: ramification-filtration, label: uses, note: 'The obstruction is an upper ramification group, computed from lower groups and compatible with quotients.'}
  - {to: fontaine-ramification-bounds-do-not-detect-crystallinity, label: motivated-by, note: 'The torsion of that curve E_{pi^p} satisfies the Fontaine cutoff for its own exponent at every level; here its torsion of each level n >= 2 has no finite flat model.'}
  - {to: torsion-crystalline-quotients-detect-crystallinity, label: analogous-to, note: 'For Tate curves this finds exactly the levels at which the realization condition with r = 1 fails.'}
---

**Setting.** Let $p$ be any prime, $K/\mathbb Q_p$ finite, $v_K$ its valuation with $v_K(K^\times)=\mathbb Z$, $e=v_K(p)$, $\pi$ a uniformizer and $\chi$ the cyclotomic character. Fix compatible primitive roots of unity $\zeta_{p^j}$, with $\zeta_{p^{j+1}}^p=\zeta_{p^j}$. For $q\in K$ with $0<|q|<1$, the Tate curve $E_q$ comes with a $G_K$-equivariant surjective homomorphism $\bar K^\times\to E_q(\bar K)$ with kernel $q^{\mathbb Z}$ [@kedlaya2004tate, Theorem 1, p. 3].

A *finite flat model* of a finite $G_K$-module $M$ is a finite flat commutative group scheme $\mathcal G/\mathcal O_K$ with $\mathcal G(\bar K)\cong M$ as $G_K$-modules. Commutativity is automatic, and $\mathcal G$ is killed by every integer that kills $M$, because $\mathcal O(\mathcal G)$ embeds in $\mathcal O(\mathcal G)\otimes K$.

**Theorem (deduced here).** For every $n\ge1$ the following are equivalent:

1. $p^n$ divides $v_K(q)$.
2. $E_q[p^n]\cong F[p^n](\bar K)$ for a $p$-divisible group $F/\mathcal O_K$.
3. $E_q[p^n]\cong L/L'$ for $G_K$-stable full $\mathbb Z_p$-lattices $L'\subseteq L$ in a crystalline representation of $G_K$ with Hodge–Tate weights in $\{0,1\}$, where $\mathbb Q_p(1)$ has weight $1$.
4. $E_q[p^n]$ has a finite flat model.

**Corollary.** For every $p$, every $K$ and every $k\ge1$, the module $E_{\pi^{p^k}}[p^n]$ has a finite flat model exactly when $n\le k$. In particular $E_{\pi^p}[p^n]$ has none for $n\ge2$. For odd $p$, the torsion of $E_{\pi^p}$ at every level satisfies [Fontaine's cutoff](fontaine-ramification-bounds-do-not-detect-crystallinity.md) for its own exponent, and attains it exactly at each $n\ge2$ when $K$ is unramified. So the cutoff at a module's own exponent does not imply finite flatness at any single level $n\ge2$, even where it is attained. In Liu's [torsion criterion](torsion-crystalline-quotients-detect-crystallinity.md) with $r=1$, the levels of $E_q$ that fail are exactly those with $p^n\nmid v_K(q)$; for $E_{\pi^p}$ the first is $n=2$.

The obstruction in the proof is a subquotient. For $q=\pi^p$, Step 6 below exhibits a subquotient of $E_{\pi^p}[p^2]$ isomorphic to $E_\pi[p]$, and this subquotient violates Fontaine's level-one cutoff over $K(\zeta_p)$.

**Notation.** For $N\ge1$ and a continuous map $c:G_K\to\mathbb Z/p^N$ with $c(gh)=c(g)+\chi(g)c(h)$, let $M_N(c)$ be free over $\mathbb Z/p^N$ on $a,b$, with
$$g(a)=\chi(g)a,\qquad g(b)=b+c(g)a.$$
For $x\in K^\times$ and a chosen root $x_N$ of $X^{p^N}=x$, define $\kappa_x:G_K\to\mathbb Z/p^N$ by $g(x_N)/x_N=\zeta_{p^N}^{\kappa_x(g)}$. Taking $x_Ny_N$ as the root for $xy$ gives $\kappa_{xy}=\kappa_x+\kappa_y$, and a root lying in $K$ gives $\kappa_x=0$.

**Step 1 (torsion as a cocycle module).** For $N\ge1$ and any root $q_N$ of $X^{p^N}=q$, the classes $a=[\zeta_{p^N}]$ and $b=[q_N]$ identify $E_q[p^N]$ with $M_N(\kappa_q)$. Indeed, $E_q[p^N]$ consists of the classes of those $x$ with $x^{p^N}\in q^{\mathbb Z}$. If $x^{p^N}=q^l$, then $x=\zeta_{p^N}^iq_N^l$ for some $i$, so $a,b$ generate. If $\zeta_{p^N}^iq_N^j\in q^{\mathbb Z}$, comparing valuations gives $p^N\mid j$, since $v_K(q)\ne0$. Then $\zeta_{p^N}^i\in q^{\mathbb Z}$, which contains no root of unity other than $1$, so $p^N\mid i$. Finally $g(\zeta_{p^N})=\zeta_{p^N}^{\chi(g)}$ and $g(q_N)=q_N\zeta_{p^N}^{\kappa_q(g)}$.

**Step 2 (subquotients and sums).** If $M$ has a finite flat model $\mathcal G$, so do its $G_K$-stable submodules and quotients. A direct sum of modules with models has a model, namely the product. Finite étale $K$-group schemes correspond to finite $G_K$-modules, so a stable submodule $M_1$ is $Y(\bar K)$ for a closed subgroup scheme $Y\subseteq X=\mathcal G_K$. Its schematic closure $\mathcal Y$ in $\mathcal G$ is a closed subgroup scheme, finite and flat over $\mathcal O_K$, with $\mathcal Y_K=Y$. The fppf quotient $\mathcal G/\mathcal Y$ is represented by a finite $\mathcal O_K$-scheme $Q$ [@raynaud1974schemas, §2.1, pp. 259–260].

The map $\mathcal G\to Q$ is an epimorphism of fppf sheaves. So the identity of $Q$ lifts to $\mathcal G$ on an fppf covering of $Q$. Such a covering is jointly faithfully flat, so $\mathcal O(Q)\to\mathcal O(\mathcal G)$ is injective. Hence $\mathcal O(Q)$ is torsion-free, and $Q$ is finite flat. A $K$-scheme has the same fppf coverings over $K$ as over $\mathcal O_K$, so $Q_K$ represents the quotient sheaf $X/Y$. A $\bar K$-point of $X/Y$ lifts to $X$ over some fppf covering of $\operatorname{Spec}\bar K$. That covering has a $\bar K$-point, since a nonempty $\bar K$-scheme locally of finite type has one. Therefore $Q(\bar K)=X(\bar K)/Y(\bar K)\cong M/M_1$.

**Step 3 (sums of cocycles).** $M_N(c_1+c_2)$ is a subquotient of $M_N(c_1)\oplus M_N(c_2)$. With bases $a_i,b_i$, the submodule $S=\langle a_1,a_2,b_1+b_2\rangle$ is stable, because $g(b_1+b_2)=b_1+b_2+c_1(g)a_1+c_2(g)a_2$. It contains the stable submodule $D=\langle a_1-a_2\rangle$. The vectors $a_1-a_2,\,a_2,\,b_1+b_2,\,b_2$ form a basis of the sum. So $S/D$ is free on the images $\bar a$ of $a_2$ and $\bar b$ of $b_1+b_2$, and $g(\bar b)=\bar b+(c_1+c_2)(g)\bar a$.

**Step 4 (unit classes).** Let $u\in\mathcal O_K^\times$, and choose compatible roots $u_j$, with $u_0=u$ and $u_{j+1}^p=u_j$. Define $c_u:G_K\to\mathbb Z_p$ by $g(u_j)/u_j=\zeta_{p^j}^{c_u(g)}$. The representation $V_u=\mathbb Q_pe\oplus\mathbb Q_pf$ with $g(e)=\chi(g)e$ and $g(f)=f+c_u(g)e$ is the Kummer extension with class $u$. Since $u$ is a unit, it is [crystalline, with weights $0,1$](kummer-extensions-and-tate-curve-periods.md). The lattice $T_u=\mathbb Z_pe\oplus\mathbb Z_pf$ is stable. By the [integral classification](crystalline-lattices-and-p-divisible-groups.md), $T_u\cong T_pF$ for a $p$-divisible group $F/\mathcal O_K$. Projection from the Tate module identifies $T_pF/p^NT_pF$ with $F[p^N](\bar K)$, since multiplication by $p$ is surjective on the geometric torsion points. With the root $u_N$ one has $\kappa_u=c_u\bmod p^N$, so
$$M_N(\kappa_u)\cong T_u/p^NT_u\cong F[p^N](\bar K).$$

**Step 5 (the level-one obstruction).** Let $K'=K(\zeta_p)$, $e'=v_{K'}(p)$ and $t=v_{K'}(\pi)$, both for the normalized valuation of $K'$. Then $t=e(K'/K)$ divides $[K':K]$, which divides $p-1$, so $p\nmid t$. Choose $\pi_1$ with $\pi_1^p=\pi$ and put $L=K'(\pi_1)$. Then $p\,v_L(\pi_1)=e(L/K')\,t$, so $p$ divides $e(L/K')$. As $[L:K']\le p$, the extension $L/K'$ is totally ramified of degree $p$, with $v_L(\pi_1)=t$.

Choose integers $\alpha,\beta$ with $\alpha t+\beta p=1$ and a uniformizer $\varpi'$ of $K'$. Then $\Pi=\pi_1^\alpha\varpi'^\beta$ is a uniformizer of $L$, and $\mathcal O_L=\mathcal O_{K'}[\Pi]$. For $1\ne\sigma\in H=\operatorname{Gal}(L/K')$ one has $\sigma(\pi_1)=\xi\pi_1$ with $1\ne\xi\in\mu_p$, so $\sigma(\Pi)=\xi^\alpha\Pi$. Here $\xi^\alpha\ne1$ because $\alpha t\equiv1\pmod p$. Every primitive $p$th root of unity $\zeta$ has $v_{K'}(\zeta-1)=e'/(p-1)$, since $\prod_{i=1}^{p-1}(1-\zeta^i)=p$ and the factors are unit multiples of each other. Hence
$$v_L(\sigma(\Pi)-\Pi)=1+\frac{pe'}{p-1}.$$
Thus the lower [ramification groups](ramification-filtration.md) satisfy $H_x=H$ for $x\le\lambda:=pe'/(p-1)$, and $H_x=1$ for $x>\lambda$. Then $\varphi_{L/K'}(x)=x$ on $[0,\lambda]$, so $H^\lambda=H\ne1$.

Let $m$ be prime to $p$, and compute $\kappa_{\pi^m}$ modulo $p$ with the root $\pi_1^m$. The group $G_{K'}$ fixes $\zeta_p$. So $g\in G_{K'}$ acts trivially on $M_1(\kappa_{\pi^m})$ exactly when it fixes $\pi_1^m$, equivalently $\pi_1$, because $\pi_1=(\pi_1^m)^{a}\pi^{-b}$ when $am-bp=1$. Thus $G_{K'}$ acts on $M_1(\kappa_{\pi^m})$ through $H$. By compatibility with quotients, $G_{K'}^{\lambda}$ acts nontrivially. But
$$\lambda=e'\Bigl(1+\frac1{p-1}\Bigr)>e'\Bigl(1+\frac1{p-1}\Bigr)-1,$$
which is Fontaine's level-one cutoff over $K'$. So $M_1(\kappa_{\pi^m})$ has no finite flat model over $\mathcal O_K$: base change to $\mathcal O_{K'}$ would give a model over $\mathcal O_{K'}$ killed by $p$, contradicting [Fontaine's bound](fontaine-ramification-bound-for-finite-flat-torsion.md) over $K'$.

**Step 6 (proof of the theorem).**

*(1)⇒(2).* Write $v_K(q)=p^ns$ and $q=u\pi^{p^ns}$ with $u\in\mathcal O_K^\times$. With the roots $q_n=u_n\pi^s$ and $u_n$, one has $\kappa_q=\kappa_u$. By Steps 1 and 4, $E_q[p^n]\cong M_n(\kappa_u)\cong F[p^n](\bar K)$.

*(2)⇒(3).* Take $L=T_pF$ and $L'=p^nL$. By the [integral classification](crystalline-lattices-and-p-divisible-groups.md), $T_pF\otimes\mathbb Q_p$ is crystalline with weights in $\{0,1\}$, and $L/L'\cong F[p^n](\bar K)$.

*(3)⇒(4).* Choose $j$ with $p^jL\subseteq L'$. Multiplication by $p^j$ identifies $L/L'$ with the stable submodule $p^jL/p^jL'$ of $L'/p^jL'$. By the integral classification, $L'\cong T_pF'$ for a $p$-divisible group $F'/\mathcal O_K$, so $L'/p^jL'\cong F'[p^j](\bar K)$ has a finite flat model. Step 2 gives one for $L/L'$.

*(4)⇒(1).* Write $v_K(q)=p^km$ with $p\nmid m$, and suppose that $k<n$. Put $N=k+1$. By Step 2, the submodule $E_q[p^N]$ of $E_q[p^n]$ has a finite flat model. Write $q=u\pi^{p^km}$ with $u\in\mathcal O_K^\times$. Use the roots $q_N=u_N\pi_1^m$, $u_N$ and $u_N^{-1}$, with $\pi_1^p=\pi$ as in Step 5. Then $\kappa_q=\kappa_u+\kappa_{\pi^{p^km}}$ and $\kappa_{u^{-1}}=-\kappa_u$. By Step 3,
$$M:=M_N(\kappa_{\pi^{p^km}})=M_N(\kappa_q+\kappa_{u^{-1}})$$
is a subquotient of $M_N(\kappa_q)\oplus M_N(\kappa_{u^{-1}})$. Both summands have models, by Steps 1 and 4. So $M$ has one, by Step 2.

Define $\delta:G_K\to\mathbb Z/p$ by $g(\pi_1)/\pi_1=\zeta_p^{\delta(g)}$. Since $\zeta_p=\zeta_{p^N}^{p^k}$, one has $\kappa_{\pi^{p^km}}=p^km\delta$. In $M$, the submodule $S'=\langle p^ka,b\rangle$ is stable, because
$$g(p^ka)=\chi(g)\,p^ka,\qquad g(b)=b+m\delta(g)\,p^ka.$$
It contains the stable submodule $pS'=\langle pb\rangle$, as $p^{k+1}a=0$. So $S'/pS'$ is free over $\mathbb F_p$ on the images of $p^ka$ and $b$, with the same formulas. Since $g(\pi_1^m)/\pi_1^m=\zeta_p^{m\delta(g)}$, this gives $S'/pS'\cong M_1(\kappa_{\pi^m})$, computed with the root $\pi_1^m$. By Step 2 it has a finite flat model, contradicting Step 5. Hence $k\ge n$. $\square$

*Corollary.* Here $v_K(\pi^{p^k})=p^k$, which is divisible by $p^n$ exactly when $n\le k$. For $q=\pi^p$ and $n=2$, in Step 6 one has $u=1$ and $k=m=1$, so $M\cong E_{\pi^p}[p^2]$ by Step 1, and Step 3 is not needed. So $S'/pS'\cong M_1(\kappa_\pi)\cong E_\pi[p]$ is a subquotient of $E_{\pi^p}[p^2]$ itself.

**Scope.** No ramification hypothesis is needed. In particular, the proof does not use Raynaud's uniqueness of finite flat prolongations, which requires $e<p-1$ [@raynaud1974schemas, Théorème 3.3.3, p. 268]. The implication (3)⇒(4) holds for every finite $G_K$-module, by the same argument. The converse for general finite modules is neither used nor claimed here. Step 5 works over $K(\zeta_p)$; the entry does not compute the upper breaks of $L/K$.
