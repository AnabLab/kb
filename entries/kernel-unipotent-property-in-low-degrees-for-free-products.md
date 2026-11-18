---
title: Low-degree kernel unipotence for free products including rank-two Demushkin groups
kind: theorem
summary: 'Every finite free pro-$p$ product of finite-rank free groups and Demushkin groups of any rank has the kernel $n$-unipotent property for $n\le p+2$. Factor projections handle the first rank-two chain defect; in particular $\mathbb Z_p^2*\mathbb Z_p$ has the property throughout this range.'
tags: [pro-p-groups, galois-cohomology, galois-groups]
edges:
  - {to: kernel-unipotent-conjecture, label: addresses, note: "Proves the equality for $n\\le p+2$ for fields whose maximal pro-$p$ Galois group is a finite free product of finite-rank free and Demushkin groups, including rank-two factors."}
  - {to: kernel-unipotent-property-for-free-products-of-demushkin-and-free-groups, label: uses, note: "Its representation, finite-quotient and colour-run constructions are used below; the new conclusion permits rank-two factors in the stated range."}
  - {to: kernel-unipotent-property-for-demushkin-groups, label: uses, note: "Every factor has the property; Step 1 of its proof realizes chains for Demushkin groups of every rank, by strong Massey vanishing."}
  - {to: isotropic-chains-detect-the-quadratic-algebra-of-a-nondegenerate-form, label: uses, note: "part 1 for factors of rank at least three"}
  - {to: strong-massey-vanishing-for-demushkin-groups-and-p-adic-fields, label: uses, note: "part 1, including rank two"}
---

**Theorem (proved here).** Let $p$ be a prime and $G=G_1*\cdots*G_s$ a free pro-$p$ product of finitely many finite-rank free pro-$p$ groups and [Demushkin groups](demushkin-group.md), with rank-two factors allowed. For every $1\le n\le p+2$,
$$
G_{(n)}=\bigcap_{\rho:G\to U_n(\mathbb F_p)}\ker\rho,
$$
where $G_{(n)}$ is the $p$-Zassenhaus filtration and the homomorphisms are continuous, as in [the kernel-unipotent conjecture](kernel-unipotent-conjecture.md). In particular this holds for $D*F$, with $D$ any rank-two Demushkin group and $F$ any finite-rank free pro-$p$ group, and for $\mathbb Z_p^2*\mathbb Z_p$. At $p=2$ the range includes $n=4$.

The result does not decide any of these free products in all degrees. Without rank-two factors the [existing free-product theorem](kernel-unipotent-property-for-free-products-of-demushkin-and-free-groups.md) gives every $n$.

**Proof.** Trivial factors may be omitted; if none remain the assertion is immediate. Put $k=\mathbb F_p$. Choose minimal generators of each factor, let $V_i$ have the corresponding basis, put $U_i=V_i^*=H^1(G_i,k)$, and let $T(V_i)$ be the tensor algebra. For a Demushkin factor choose $H^2(G_i,k)\cong k$, write $\omega_i$ for its cup pairing and $\xi_i\in V_i^{\otimes2}$ for its tensor. For a free factor put $\omega_i=0$ and $\xi_i=0$. A chain in $U_i$ is a sequence $a_1,\ldots,a_l$ with $\omega_i(a_j,a_{j+1})=0$. Write $C_{i,l}$ for the span of its tensors and $R_{i,l}$ for the degree-$l$ part of the ideal $(\xi_i)$.

*1. Factor chains span through degree $p$.* We claim
$$
C_{i,l}^{\perp}=R_{i,l}\qquad(1\le l\le p).
$$
For a free factor every sequence is a chain. For a Demushkin factor of rank at least three this is part 1 of [the chain theorem](isotropic-chains-detect-the-quadratic-algebra-of-a-nondegenerate-form.md). The rank-one case is $p=2$, $G_i=\mathbb Z/2$, with $\xi_i=X^2$; its chain tensors and its quadratic quotient both vanish in degrees at least two.

For rank two and odd $p$, the pairing is alternating, so $T(V_i)/(\xi_i)\cong k[X,Y]$. Every nonzero chain tensor is a scalar multiple of $a^{\otimes l}$, since adjacent nonzero vectors in a two-dimensional alternating space are orthogonal precisely when they are dependent. A homogeneous polynomial $f(X,Y)$ of degree $l\le p$ that annihilates these tensors satisfies $f(t,1)=0$ for every $t\in k$ and $f(1,0)=0$. The last equality removes its $X^l$ coefficient, so $f(t,1)$ has degree at most $l-1<p$. Its $p$ roots force it to be zero, hence $f=0$. This proves the claim.

For rank two at $p=2$ only $l=1,2$ is needed. The first is immediate. More generally, for any nondegenerate bilinear form $\omega$ on a finite-dimensional space, the tensors $a\otimes b$ with $\omega(a,b)=0$ span $\xi^{\perp}$. Indeed, if a bilinear form $\beta$ vanishes on all these pairs, then for each $a\ne0$, $\beta(a,-)$ is a scalar multiple of $\omega(a,-)$, since it vanishes on its kernel. The linear map $a\mapsto\beta(a,-)$ composed with the inverse of $a\mapsto\omega(a,-)$ preserves every line. It is scalar: compare its values on two independent vectors and their sum. Thus $\beta$ is a scalar multiple of $\omega$, proving $C_{i,2}^{\perp}=k\xi_i$ even for a nonalternating cup pairing.

*2. Chains and the graded algebra of the product.* Put $V=\bigoplus_iV_i$, $U=V^*=\bigoplus_iU_i$, $T=T(V)$ and $R=(\xi_1,\ldots,\xi_s)\subseteq T$. A product chain is a sequence $a_1,\ldots,a_m\in U$ whose $i$-components form a chain for every $i$. Let $C_m$ be the span of its tensors.

Every product chain is the first superdiagonal of a continuous representation $\rho:G\to U_{m+1}(k)$. For Demushkin factors, this is Step 1 of [the Demushkin proof](kernel-unipotent-property-for-demushkin-groups.md), whose construction uses [strong Massey vanishing](strong-massey-vanishing-for-demushkin-groups-and-p-adic-fields.md) and does not require rank at least three. For free factors choose images of the generators with the specified superdiagonal. The free-product universal property combines the factor maps. This also covers $\mathbb Z/2$: its chain gives $N=\sum_j a_j(x)E_{j,j+1}$ with $N^2=0$, so $x\mapsto1+N$ is a homomorphism.

Fix $m\ge1$. The finite-quotient construction in Step 2 of [the free-product proof](kernel-unipotent-property-for-free-products-of-demushkin-and-free-groups.md) applies to these finitely generated factors. Thus $P=G/G_{(m+1)}$ is finite, and, for its augmentation ideal $I$, there is a surjection
$$
\mu:T\longrightarrow\bigoplus_{j\ge0}I^j/I^{j+1},\qquad X_{i,h}\longmapsto(\bar x_{i,h}-1)+I^2.
$$
Jennings' theorem detects a nonzero class of $G_{(m)}/G_{(m+1)}$ by $g-1$ in $I^m/I^{m+1}$ [@minacpasiniquadrellitan2022mild, Proposition 3.4, p. 9]. For a representation realizing a chain, the corner entry of $\rho(g)-1$, for $g\in G_{(m)}$, is the pairing of any $t\in T_m$ with $\mu(t)=(\bar g-1)+I^{m+1}$ against that chain tensor. This follows by multiplying $m$ strictly upper triangular matrices: their $(1,m+1)$ entry uses exactly the consecutive first-superdiagonal entries. Consequently chain pairings vanish on $\ker\mu\cap T_m$.

Also $R_m\subseteq\ker\mu$. This is automatic for $m=1$, since $R_1=0$. For $m\ge2$, free factors have no relation, and for $\mathbb Z/2$ the relation is $(\bar x-1)^2=0$. For any other Demushkin factor a minimal presentation has one relator with nonzero quadratic initial form, by surjectivity of its cup product [@minacpasiniquadrellitan2022mild, (4.2) and Proposition 4.1, pp. 9–10]. The initial form evaluates to zero in degree two of the graded algebra of $P_i=G_i/(G_i)_{(m+1)}$. Every length-two factor-chain representation factors through $P_i$, because it kills $(G_i)_{(3)}$. The length-two corner argument therefore puts the initial form in $C_{i,2}^{\perp}=k\xi_i$, so it is a nonzero multiple of $\xi_i$. This is Step 4 of the Demushkin proof with Step 1 above also permitting rank two. The factor inclusion $P_i\to P$ shows $\mu(\xi_i)=0$ for the product, and hence the ideal $R$ maps to zero.

*3. Mixed colour components through degree $p+1$.* Decompose
$$
T_m=\bigoplus_{c\in\{1,\ldots,s\}^m}V_c,\qquad V_c=V_{c_1}\otimes\cdots\otimes V_{c_m}.
$$
Projection of a product-chain tensor to one colour component is again a product-chain tensor: consecutive entries of different colours have disjoint factor support. Moreover $R_m$ splits by colours. If $c$ has maximal constant runs of colours $i_1,\ldots,i_r$ and lengths $l_1,\ldots,l_r$, then
$$
R_m\cap V_c=\sum_{q=1}^r V_{i_1}^{\otimes l_1}\otimes\cdots\otimes R_{i_q,l_q}\otimes\cdots\otimes V_{i_r}^{\otimes l_r}.
$$
Indeed each quadratic relation occupies two adjacent places of a single run. The annihilator of this sum is the tensor product of the annihilators $R_{i_q,l_q}^{\perp}$; choose in each dual run space a basis extending a basis of $R_{i_q,l_q}^{\perp}$ and compare the resulting product bases. This is the colour-run argument of Step 5 of the free-product proof.

Call $c$ mixed if at least two colours occur. When $m\le p+1$, every run of a mixed component has length at most $p$. By Step 1 each run annihilator is spanned by its factor chains. Concatenating such chains gives product chains, since consecutive runs have different colours. Therefore
$$
t\in C_m^{\perp},\quad c\text{ mixed},\quad m\le p+1
\quad\Longrightarrow\quad t_c\in R_m.
$$
The conclusion concerns mixed components only; no assertion about rank-two chains in degree $p+1$ is being made.

*4. Factor projections remove pure components.* Let $g\in G_{(m)}\setminus G_{(m+1)}$, $m\le p+1$, and choose $t\in T_m$ with $\mu(t)=(\bar g-1)+I^{m+1}\ne0$. Write $\pi_i:G\to G_i$ for the retraction killing the other factors. Every factor has the kernel $(m+1)$-unipotent property: use [the Demushkin theorem and its corollary](kernel-unipotent-property-for-demushkin-groups.md), and for free factors [@minactan2015kernel, Theorem 2.6(a), p. 7]. If some $\pi_i(g)\notin(G_i)_{(m+1)}$, a factor representation composed with $\pi_i$ detects $g$.

Suppose instead that every $\pi_i(g)\in(G_i)_{(m+1)}$. Put $P_i=G_i/(G_i)_{(m+1)}$ and let $I_i$ be its augmentation ideal. Functoriality of the filtration gives maps $P_i\to P\to P_i$ induced by the factor inclusion and retraction. The induced graded algebra map sends $\mu(t)$ to zero in $I_i^m/I_i^{m+1}$, since the image of $g$ in $P_i$ is $1$. On $T_m$ the retraction discards all components except the pure component $t_i\in V_i^{\otimes m}$. Hence $t_i$ evaluates to zero in $I_i^m/I_i^{m+1}$; its image under the inclusion also vanishes in $I^m/I^{m+1}$. Thus $\mu(t_i)=0$ for every $i$.

If no chain representation detected $g$, the corner formula of Step 2 would give $t\in C_m^{\perp}$. By Step 3 every mixed component of $t$ would lie in $R_m\subseteq\ker\mu$. Its pure components also map to zero by the preceding paragraph. This contradicts $\mu(t)\ne0$. So some representation to $U_{m+1}(k)$ detects $g$.

Finally, for $g\notin G_{(n)}$, choose the largest $m<n$ with $g\in G_{(m)}$. If $n\le p+2$, then $m\le p+1$ and the preceding construction, followed by the block inclusion $U_{m+1}(k)\subseteq U_n(k)$, detects $g$. The opposite inclusion holds for every pro-$p$ group [@minactan2015kernel, Lemma 2.5(b), p. 6]. $\square$

**Boundary of the argument.** For an alternating rank-two factor, degree $p+1$ chains annihilate the nonzero polynomial $X^pY-XY^p$ in $k[X,Y]$, as in [the chain theorem's rank-two warning](isotropic-chains-detect-the-quadratic-algebra-of-a-nondegenerate-form.md). Step 4 bypasses this defect when it is an entire pure component. In degree $p+2$ a mixed word can already have a run of length $p+1$, so this proof supplies no conclusion at matrix size $p+3$. This is a limitation of the proof, not a counterexample to the group-theoretic equality.
