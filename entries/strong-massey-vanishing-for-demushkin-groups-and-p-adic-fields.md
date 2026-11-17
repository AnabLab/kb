---
title: Strong Massey vanishing for Demushkin groups and p-adic fields
kind: theorem
summary: 'If cup product with each nonzero class maps $H^1(G,\mathbb F_p)$ onto $H^2$, as for Demushkin groups, zero adjacent cup products make every Massey product defined and contain $0$ (Pál–Szabó for Demushkin groups). By local duality this holds for $G_K$, $K/\mathbb Q_p$ finite, at every prime.'
tags: [galois-cohomology, local-fields, pro-p-groups]
edges:
  - {to: massey-vanishing-conjecture, label: addresses, note: "Proves it for every finite extension of $\\mathbb Q_p$, at every prime and every length, in the strong form."}
  - {to: strong-massey-vanishing, label: uses, note: "the definition of the strong property"}
  - {to: demushkin-group, label: uses, note: "Demushkin groups satisfy the hypothesis (S) of part 1 by definition."}
  - {to: local-tate-duality, label: uses, note: "gives the hypothesis (S) for $G_K$ at every prime"}
---

**Setting.** Let $G$ be a profinite group and $p$ a prime. Cohomology is continuous, with trivial coefficients $\mathbb F_p$, computed by inhomogeneous continuous cochains. With the cup product these form a differential graded algebra, so $\partial(x\cup y)=\partial x\cup y-x\cup\partial y$ for $x$ of degree $1$ [@minactan2017, §2, p. 6, and §3, p. 7]. Since the coefficients are trivial, $H^1(G,\mathbb F_p)$ is the group of continuous homomorphisms $G\to\mathbb F_p$, and these are exactly the $1$-cocycles [@quadrelli2024, (2.1), p. 5].

For $a_1,\ldots,a_n\in H^1(G,\mathbb F_p)$ with $n\ge3$, a *defining system* for the Massey product $\langle a_1,\ldots,a_n\rangle$ is a family of cochains $a_{ij}$ of degree $1$, for $1\le i<j\le n+1$ and $(i,j)\ne(1,n+1)$, such that $a_{i,i+1}=a_i$ and
$$
\partial a_{ij}=\sum_{i<l<j}a_{il}\cup a_{lj}\qquad(j>i+1).
$$
Its value is the class of $\sum_{1<l<n+1}a_{1l}\cup a_{l,n+1}$, and $\langle a_1,\ldots,a_n\rangle\subseteq H^2(G,\mathbb F_p)$ is the set of all values [@minactan2017, Definition 2.1, pp. 6–7]. Call a family that satisfies the displayed equation for every pair $1\le i<j\le n+1$, including $(1,n+1)$, a *full system*. Forgetting $a_{1,n+1}$ turns a full system into a defining system with value $[\partial a_{1,n+1}]=0$, and conversely. So a full system exists exactly when the product is defined and contains $0$. In matrix terms, by Dwyer's theorem, a full system amounts to a homomorphism from $G$ to the upper unitriangular group $U_{n+1}(\mathbb F_p)$ with prescribed first superdiagonal [@minactan2017, Theorem 3.1, pp. 7–8].

A defining system contains $a_{i,i+2}$ with $\partial a_{i,i+2}=a_i\cup a_{i+1}$, so a defined product has $a_i\cup a_{i+1}=0$ for every $i$. The [strong property](strong-massey-vanishing.md) asks for the converse, together with vanishing.

**Theorem.**

1. *Surjective cup products.* Suppose that $G$ satisfies

   (S) for every nonzero $a\in H^1(G,\mathbb F_p)$, the map $H^1(G,\mathbb F_p)\to H^2(G,\mathbb F_p)$, $b\mapsto a\cup b$, is surjective.

   Let $n\ge3$, and let $a_1,\ldots,a_n\in H^1(G,\mathbb F_p)$ satisfy $a_i\cup a_{i+1}=0$ for $1\le i<n$. Then $\langle a_1,\ldots,a_n\rangle$ is defined and contains $0$. Condition (S) holds when $H^2(G,\mathbb F_p)=0$, and for every pro-$p$ [Demushkin group](demushkin-group.md): there $H^2(G,\mathbb F_p)$ has order $p$ and the cup product pairing is nondegenerate, so $b\mapsto a\cup b$ is a nonzero linear map onto a line when $a\ne0$.
2. *$p$-adic fields.* Let $K/\mathbb Q_p$ be finite and let $\ell$ be any prime, $\ell=p$ allowed. Then $G_K$ satisfies (S) with respect to $\ell$. Hence $G_K$ has strong $n$-fold Massey vanishing with respect to $\ell$ for every $n\ge3$, and the [Massey vanishing conjecture](massey-vanishing-conjecture.md) holds for $K$ at every prime and every length.

**Sources, and what is checked here.**

- Pál and Szabó prove part 1 for Demushkin groups [@palszabo2022arxiv, Theorem 3.5, p. 7] and for groups with $H^2(G,\mathbb F_p)=0$ [@palszabo2022arxiv, Lemma 3.3, pp. 6–7]. In the Demushkin case their proof uses only nondegeneracy and $\dim H^2=1$, through a descending induction on central embedding problems [@palszabo2022arxiv, Lemmas 3.6–3.8 and the argument after them, pp. 7–9]. The proof below is the same argument, written with defining systems and stated under (S). Quadrelli cites their theorem for the Demushkin case of his theorem on groups of elementary type [@quadrelli2024, proof of Theorem 4.4, p. 19].
- Ordinary vanishing for Demushkin groups, that every defined product contains $0$, is due to Mináč and Tân, by the same surjectivity [@minactan2017, Theorem 4.3, p. 10]. They recall that for $K/\mathbb Q_p$ finite, $G_K(p)$ is Demushkin if $\zeta_p\in K$ and free pro-$p$ otherwise [@minactan2017, Remark 4.4, p. 11]. They note that vanishing for $G_K$ and for $G_K(p)$ are equivalent [@minactan2017, Corollary 3.5, p. 8], and that their Theorem 4.3 proves their conjecture for every local field [@minactan2017, §1, p. 5]. That conjecture, in that paper, assumes a primitive $p$-th root of unity in the field [@minactan2017, Conjecture 1.6, p. 5].
- For fields $K$ containing a primitive $\ell$-th root of unity, and $\sqrt{-1}$ if $\ell=2$, with $K^\times/K^{\times\ell}$ finite, Quadrelli states strong vanishing for $G_K(\ell)$ at every length when $K$ is a local field [@quadrelli2024, Corollary 1.3 (a), pp. 3–4]. Pál and Szabó show that, for every prime $\ell$, the maximal pro-$\ell$ quotient of $G_{\mathbb Q_p}$ is Demushkin or has $H^2=0$ [@palszabo2022arxiv, Lemma 3.9, p. 9].
- The formulation of part 1 under (S), part 2 for every finite $K/\mathbb Q_p$ and every $\ell$, including $\ell=2$ with $\sqrt{-1}\notin K$ and $K\ne\mathbb Q_2$, and the proof of part 2 directly on $G_K$ through local duality, are checked here. I did not find them stated in the sources opened. Part 2 could also be reached through $G_K(\ell)$, which is Demushkin or has $H^2=0$, but that route needs a comparison of the cohomology of $G_K(\ell)$ and $G_K$ in degree $2$, and for $\ell\ne p$ a description of $G_K(\ell)$; working on $G_K$ avoids both.

**Proof of part 1.** Fix $a_1,\ldots,a_n$ with $a_i\cup a_{i+1}=0$ for all $i$. We build a full system.

*Step 1: zero entries.* Call a pair $(i,j)$ with $i<j$ *split* if $i\le m<j$ for some $m$ with $a_m=0$. The nonzero entries fall into maximal runs $a_s,a_{s+1},\ldots,a_t$ of consecutive nonzero entries. Suppose that each run has a full system on the indices $s,\ldots,t+1$; Step 3 provides one, for runs of every length, since adjacent cup products vanish inside a run. Use these for the pairs inside a run, and put $a_{ij}=0$ for every split pair. This includes $a_{m,m+1}=0=a_m$. Every pair is either split or inside one run. For a split pair $(i,j)$, with $i\le m<j$ and $a_m=0$, each term $a_{il}\cup a_{lj}$, $i<l<j$, vanishes: if $l\le m$ then $(l,j)$ is split, and if $l>m$ then $(i,l)$ is split. So both sides of its equation are $0$. For a pair inside a run, every intermediate pair lies in the same run, and the run's full system gives the equation. Quadrelli makes the same reduction with block-diagonal matrices [@quadrelli2024, Proposition 2.8, pp. 7–8].

*Step 2: a cocycle identity.* Suppose that the cochains $a_{ij}$ with $j-i\le k$ satisfy their equations, for some $k\ge1$. For $j-i=k+1$ put $c_{ij}=\sum_{i<l<j}a_{il}\cup a_{lj}$. By the Leibniz rule and the equations,
$$
\partial c_{ij}=\sum_{i<l<j}\bigl(\partial a_{il}\cup a_{lj}-a_{il}\cup\partial a_{lj}\bigr)
=\sum_{i<u<v<j}a_{iu}\cup a_{uv}\cup a_{vj}-\sum_{i<u<v<j}a_{iu}\cup a_{uv}\cup a_{vj}=0,
$$
using associativity of the cup product of cochains, and $\partial a_{l,l+1}=0$, which matches the empty sum. So $c_{ij}$ is a $2$-cocycle, and cochains $a_{ij}$ with $\partial a_{ij}=c_{ij}$ for all pairs with $j-i=k+1$ exist exactly when every class $[c_{ij}]$ is $0$.

*Step 3: a run of nonzero entries.* Suppose that all $a_i$ are nonzero; here $n\ge1$ is arbitrary. We construct the $a_{ij}$ by induction on $k=j-i$. For $k=1$, $a_{i,i+1}=a_i$. For $k=2$, the class of $c_{i,i+2}=a_i\cup a_{i+1}$ is $0$ by hypothesis. Now let $2\le k<n$, and suppose that all entries with $j-i\le k$ have been chosen. For homomorphisms $z_1,\ldots,z_{n+1-k}:G\to\mathbb F_p$, replace $a_{j,j+k}$ by $a_{j,j+k}+z_j$. All equations for pairs with $j-i\le k$ still hold, because $\partial z_j=0$ and $a_{j,j+k}$ occurs only in equations for pairs with $j-i>k$. For $1\le j\le n-k$, the sum $c_{j,j+k+1}$ contains exactly two terms with an entry of level $k$, namely $a_{j,j+k}\cup a_{j+k}$, for $l=j+k$, and $a_j\cup a_{j+1,j+k+1}$, for $l=j+1$. They are distinct because $k\ge2$. No term contains two such entries, since $2k>k+1$. So after the replacement the class of $c_{j,j+k+1}$ becomes
$$
[c_{j,j+k+1}]+z_j\cup a_{j+k}+a_j\cup z_{j+1}.
$$
Put $z_1=0$. For $j=1,2,\ldots,n-k$ in turn, choose $z_{j+1}$ with $a_j\cup z_{j+1}=-[c_{j,j+k+1}]-z_j\cup a_{j+k}$, which (S) allows because $a_j\ne0$. Then every class of level $k+1$ is $0$, and Step 2 gives the entries of level $k+1$. The last step, $k+1=n$, produces $a_{1,n+1}$, so we have a full system.

Steps 1 and 3 give a full system for every $a_1,\ldots,a_n$ with zero adjacent cup products. $\square$

**Proof of part 2.** Write $H^i(K,M)=H^i(G_K,M)$ and let $\mu_\ell$ be the group of $\ell$-th roots of unity in $\bar K$. [Local Tate duality](local-tate-duality.md) for $M=\mathbb Z/\ell$, whose Tate dual is $\mu_\ell$, gives perfect pairings
$$
H^2(K,\mathbb Z/\ell)\times H^0(K,\mu_\ell)\to\tfrac1\ell\mathbb Z/\mathbb Z,
\qquad
H^1(K,\mathbb Z/\ell)\times H^1(K,\mu_\ell)\to H^2(K,\mu_\ell)\cong\tfrac1\ell\mathbb Z/\mathbb Z,
$$
the second given by cup product. No restriction relating $\ell$ and $p$ is needed there.

- If $\mu_\ell\not\subset K$, then $H^0(K,\mu_\ell)=\mu_\ell(K)$ is trivial, so $H^2(K,\mathbb Z/\ell)=0$ and (S) holds.
- If $\mu_\ell\subset K$, choose a generator $\zeta$ of $\mu_\ell$. Then $\iota:\mathbb Z/\ell\to\mu_\ell$, $x\mapsto\zeta^x$, is an isomorphism of $G_K$-modules, since $G_K$ fixes $\zeta$. Multiplication $\mathbb Z/\ell\otimes\mathbb Z/\ell\to\mathbb Z/\ell$ followed by $\iota$ equals the evaluation pairing $\mathbb Z/\ell\otimes\mu_\ell\to\mu_\ell$, $x\otimes\eta\mapsto\eta^x$, applied to $x\otimes\iota(y)$, as both send $x\otimes y$ to $\zeta^{xy}$. By naturality of cup products, $\iota_*(a\cup b)=a\cup\iota_*(b)$ for $a,b\in H^1(K,\mathbb Z/\ell)$. Now let $a\ne0$. By perfectness there is $b'\in H^1(K,\mu_\ell)$ with $a\cup b'\ne0$. Put $b=\iota_*^{-1}(b')$. Then $\iota_*(a\cup b)\ne0$, so $a\cup b\ne0$ in $H^2(K,\mathbb Z/\ell)$, which $\iota_*$ maps isomorphically onto $H^2(K,\mu_\ell)$, a group of order $\ell$. So $b\mapsto a\cup b$ is onto, and (S) holds.

Part 1 now gives strong vanishing for every $n\ge3$. Since a defined product has zero adjacent cup products, every defined product contains $0$. $\square$

**The hypothesis cannot be dropped.** For odd $p$ and $G=\mathbb Z/p$, the $p$-fold product $\langle\chi,\ldots,\chi\rangle$ of the identity character $\chi$ is defined but does not contain $0$ [@minactan2017, Example 4.7, p. 12]. Its adjacent cup products vanish, because $\chi\cup\chi=0$ for odd $p$ by graded commutativity [@quadrelli2024, Remark 2.1, p. 5]. So (S) fails for $\mathbb Z/p$, as one also sees directly: $\chi\cup H^1=0$, while $H^2(\mathbb Z/p,\mathbb F_p)\ne0$ because it contains a nonempty set not containing $0$. For $p=2$ the group $\mathbb Z/2=G_{\mathbb R}$ is a Demushkin group [@palszabo2022arxiv, p. 7], so part 1 applies to it.
