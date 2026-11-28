---
title: Right-angled Artin pro-p groups of spider complements fail the kernel (|V|+1)-unipotent property
kind: theorem
summary: 'If the complement of a graph on $V$ is a spider with $s$ legs of length one and $t\ge2$ of length two, $s+t\ge3$, its right-angled Artin pro-$p$ group fails the kernel $(|V|+1)$-unipotent property over every finite field, for every $p$. So a six-vertex graph fails in size $7$.'
tags: [pro-p-groups, galois-cohomology]
edges:
  - {to: small-induced-subgraphs-decide-the-kernel-unipotent-property, label: uses, note: "its Setting (the algebra $A(G)$, $\\mathrm{in}_k$, $\\mu$ and Jennings' theorem), the commutator formula in the proof of Lemma 2(b), Lemma 4(b), the only-if direction of part 2, and part 3 with corollary (c) for the first failing size"}
  - {to: unipotent-detection-in-free-pro-p-products, label: uses, note: "the corner functionals $\\kappa_\\rho$ and formula (1) of its Setting"}
  - {to: p-zassenhaus-filtration, label: uses, note: "the recursive definition, for $[G_{(i)},G_{(j)}]\\subseteq G_{(i+j)}$, and item 3"}
  - {to: kernel-unipotent-property-for-right-angled-artin-pro-p-groups, label: uses, note: "the definition and universal property of $G_\\Gamma$, and the equivalent forms of complete multipartiteness"}
  - {to: no-fixed-finite-field-detects-every-zassenhaus-degree-of-zp2-free-product-zp, label: uses, note: "Corollary 2(ii), for the failure for $n\\ge n_0(q)$ in corollary (c)"}
  - {to: right-angled-artin-pro-p-galois-groups, label: uses, note: "the Snopce–Zalesskii classification, only in the remark that these groups are not Galois groups"}
---

**Setting.** Fix a prime $p$ and a finite field $\mathbb F$ of characteristic $p$. For a finite simple graph $\Gamma=(V,E)$, $G_\Gamma$ is its right-angled Artin pro-$p$ group, as in [the classification](kernel-unipotent-property-for-right-angled-artin-pro-p-groups.md). Adjacent vertices commute in it, and a continuous homomorphism from $G_\Gamma$ to a pro-$p$ group is the same as a map on $V$ sending adjacent vertices to commuting elements.

The following are as in the Setting of [induced subgraphs decide the property](small-induced-subgraphs-decide-the-kernel-unipotent-property.md): the kernel $n$-unipotent property over $\mathbb F$; the graded algebra $A(G)=\bigoplus_kI_G^k/I_G^{k+1}$ of the abstract group algebra $\mathbb F_p[G]$; the initial forms $\mathrm{in}_k$; and the surjection $\mu:T\to A(G)$ from the free algebra $T=\mathbb F_p\langle X_v:v\in V\rangle$ with $\mu(X_v)=\mathrm{in}_1(v)$. Three facts are used from that entry:
- Jennings' theorem: $h-1\in I_G^k$ for $h\in G_{(k)}$, and $\mathrm{in}_k(h)\ne0$ if moreover $h\notin G_{(k+1)}$.
- The commutator formula $\mathrm{in}_{i+j}([x,y])=\mathrm{in}_i(x)\mathrm{in}_j(y)-\mathrm{in}_j(y)\mathrm{in}_i(x)$ for $x\in G_{(i)}$ and $y\in G_{(j)}$, from the proof of its Lemma 2(b), with $[x,y]=x^{-1}y^{-1}xy$.
- Its Lemma 4(b): $\mu(X_u)$ and $\mu(X_v)$ commute for adjacent $u,v$.

For a continuous $\rho:G\to U_{k+1}(\mathbb F)$, the linear extension $\tilde\rho$ and the corner functional $\kappa_\rho$ are as in the Setting of [the invisible-ideal theorem](unipotent-detection-in-free-pro-p-products.md). Its formula (1) says that $\rho(h)=1+\kappa_\rho(\mathrm{in}_k(h))E_{1,k+1}$ for $h\in G_{(k)}$.

*Spiders.* Let $s\ge0$ and $t\ge2$ with $s+t\ge3$. Let $T_{s,t}$ be the tree with vertices $a,y_1,\ldots,y_s,u_1,v_1,\ldots,u_t,v_t$ and edges $ay_i$, $au_j$ and $u_jv_j$. It is a spider with centre $a$, with $s$ legs $\{y_i\}$ of length one and $t$ legs $\{u_j,v_j\}$ of length two. Let $\Gamma_{s,t}$ be its complement, on the same $d=1+s+2t$ vertices, and $G=G_{\Gamma_{s,t}}$. So two distinct vertices are adjacent in $\Gamma_{s,t}$ exactly when they are not joined in $T_{s,t}$. In particular, any two vertices on different legs are adjacent, and so commute in $G$. The smallest case is $\Gamma_{1,2}$, on six vertices. Numbered $0,\ldots,5$ with $a=0$, $y_1=1$, $(u_1,v_1)=(2,3)$ and $(u_2,v_2)=(4,5)$, its complement is the tree with edges $01,02,23,04,45$.

Put $b_j=[u_j,v_j]$, and define the left-normed commutator
$$g_{s,t}=[\cdots[[\cdots[a,y_1],\ldots,y_s],b_1],\ldots,b_t]\in G.$$
In $T$, with $[P,Q]=PQ-QP$ and $B_j=[X_{u_j},X_{v_j}]$, put
$$L_{s,t}=[\cdots[[\cdots[X_a,X_{y_1}],\ldots,X_{y_s}],B_1],\ldots,B_t].$$

**Theorem.** This is proved here. Let $d=1+s+2t$.

1. $g_{s,t}\in G_{(d)}$, $\mathrm{in}_d(g_{s,t})=\mu(L_{s,t})$, and $g_{s,t}\notin G_{(d+1)}$.
2. Every continuous $\rho:G\to U_{d+1}(\mathbb F)$ has $\rho(g_{s,t})=1$.
3. Hence $G$ fails the kernel $(d+1)$-unipotent property over every finite field of characteristic $p$. So does $G_{\Gamma'}$ for every finite graph $\Gamma'$ with an induced subgraph isomorphic to $\Gamma_{s,t}$.

Part 3 follows from parts 1 and 2, and for $\Gamma'$ from the only-if direction of part 2 of [induced subgraphs decide the property](small-induced-subgraphs-decide-the-kernel-unipotent-property.md), whose proof applies to any induced subgraph.

**Corollaries.** These are proved here.

- (a) *The six-vertex case.* In $G_{\Gamma_{1,2}}$, numbered as above, write $x_i$ for vertex $i$. The commutator $g=[[[[[x_0,x_1],x_2],x_3],x_4],x_5]$ lies in $G_{(6)}\setminus G_{(7)}$, and every continuous $\rho:G_{\Gamma_{1,2}}\to U_7(\mathbb F)$ has $\rho(g)=1$.
- (b) *The first failing size.* Let $n_{\min}(p)$ be as in corollary (c) of [induced subgraphs decide the property](small-induced-subgraphs-decide-the-kernel-unipotent-property.md). Then $6\le n_{\min}(p)\le7$ for every prime $p$. The lower bound is part 3 there, and the upper bound is the theorem for $\Gamma_{1,2}$. The same bounds hold with $\mathbb F_p$ replaced by any finite field of characteristic $p$.
- (c) *Every size from $7$ on.* For every $n\ge7$, $G_{\Gamma_{n-6,2}}$, on $n-1$ vertices, fails the kernel $n$-unipotent property over every finite field of characteristic $p$. Moreover, let $q$ be a power of $p$ and $n_0(q)$ as in [no fixed finite field detects every Zassenhaus degree](no-fixed-finite-field-detects-every-zassenhaus-degree-of-zp2-free-product-zp.md). If $s\ge n_0(q)-7$, then $G_{\Gamma_{s,2}}$ fails the kernel $n$-unipotent property over $\mathbb F_q$ for every $n\ge7$. For $q=2$, $s=11$ suffices, which gives a graph on $16$ vertices.

**Proof of part 1.** By the recursive definition of [the $p$-Zassenhaus filtration](p-zassenhaus-filtration.md), $[G_{(i)},G_{(j)}]\subseteq G_{(i+j)}$. So $b_j\in G_{(2)}$, the partial commutator ending with $y_i$ lies in $G_{(1+i)}$, and each $b_j$ raises the index by $2$, giving $g_{s,t}\in G_{(d)}$. The commutator formula gives $\mathrm{in}_2(b_j)=\mu(B_j)$ and then, step by step, $\mathrm{in}_d(g_{s,t})=\mu(L_{s,t})$, as $\mu$ is an algebra homomorphism.

*A finite target.* Let $J\subseteq T$ be the two-sided ideal generated by the $X_uX_v-X_vX_u$ with $u,v$ adjacent, let $T_{\ge d+1}$ be the span of the words of length at least $d+1$, and put $\bar A=T/(J+T_{\ge d+1})$. Since $J$ is generated by homogeneous elements, $\bar A$ is graded, with $\bar A_k=T_k/J_k$ for $k\le d$. Here $J_d$ is spanned by the products $X_w(X_uX_v-X_vX_u)X_{w'}$ with $w,w'$ words and $u,v$ adjacent. Write $\bar X_v$ for the image of $X_v$. The ideal $\bar A_{\ge1}$ satisfies $(\bar A_{\ge1})^{d+1}=0$, so $U=1+\bar A_{\ge1}$ is a group, with $(1+\xi)^{-1}=\sum_{i=0}^d(-\xi)^i$, and its order $|\bar A_{\ge1}|$ is a power of $p$. For adjacent $u,v$ the elements $1+\bar X_u$ and $1+\bar X_v$ commute. So there is a continuous homomorphism $\bar\rho:G\to U$ with $\bar\rho(v)=1+\bar X_v$.

Its linear extension $\tilde{\bar\rho}:\mathbb F_p[G]\to\bar A$ is an algebra homomorphism with $\tilde{\bar\rho}(h-1)=\bar\rho(h)-1\in\bar A_{\ge1}$. As $I_G$ is spanned by the $h-1$, $\tilde{\bar\rho}(I_G^k)\subseteq\bar A_{\ge k}$, and in particular $\tilde{\bar\rho}(I_G^{d+1})=0$. Let $L_{s,t}(v-1)\in\mathbb F_p[G]$ be the result of substituting $v-1$ for each $X_v$. Since $\mu(X_v)=(v-1)+I_G^2$, the equality $\mathrm{in}_d(g_{s,t})=\mu(L_{s,t})$ says that $g_{s,t}-1-L_{s,t}(v-1)\in I_G^{d+1}$. Applying $\tilde{\bar\rho}$ gives $\bar\rho(g_{s,t})-1=\bar L$, the image of $L_{s,t}$ in $\bar A_d$. If $g_{s,t}\in G_{(d+1)}$, Jennings' theorem gives $g_{s,t}-1\in I_G^{d+1}$, so $\bar L=0$. It remains to show that $L_{s,t}\notin J_d$.

*A functional.* Let $C$ be the set of words obtained from
$$w^*=a\,y_1\cdots y_s\,u_1v_1\cdots u_tv_t$$
by repeatedly exchanging two neighbouring letters that are adjacent vertices of $\Gamma_{s,t}$. Let $\varphi:T_d\to\mathbb F_p$ be the linear map with $\varphi(X_w)=1$ for $w\in C$ and $\varphi(X_w)=0$ otherwise. For words $w,w'$ and adjacent $u,v$, the words $wuvw'$ and $wvuw'$ are either both in $C$ or both outside it, so $\varphi(J_d)=0$. An exchange never swaps two letters joined in $T_{s,t}$, so for each edge $\{x,x'\}$ of $T_{s,t}$, the relative order of $x$ and $x'$ is the same in every word of $C$. In $w^*$, $a$ precedes each $y_i$ and each $u_j$, and $u_j$ precedes $v_j$. So every word of $C$ begins with $a$ and has each $u_j$ before $v_j$.

Let $(Q_1,\ldots,Q_m)=(X_{y_1},\ldots,X_{y_s},B_1,\ldots,B_t)$, with $m=s+t$. Expanding each bracket $[M,Q]=MQ-QM$ in turn gives
$$L_{s,t}=\sum_{E}(-1)^{|E|}\,Q_{e_r}\cdots Q_{e_1}\,X_a\,Q_{f_1}\cdots Q_{f_{m-r}},\tag{2}$$
where $E=\{e_1<\cdots<e_r\}$ runs over the subsets of $\{1,\ldots,m\}$ and $f_1<\cdots<f_{m-r}$ lists its complement. If $E\ne\emptyset$, every word of that term begins with a letter of the leg of $Q_{e_r}$, not with $a$, so $\varphi$ vanishes on the term. The term with $E=\emptyset$ is $X_aX_{y_1}\cdots X_{y_s}B_1\cdots B_t$. Expanding each $B_j=X_{u_j}X_{v_j}-X_{v_j}X_{u_j}$ shows that $w^*$ occurs in it once, with coefficient $1$, and that each of its other words has $v_j$ before $u_j$ for some $j$. Hence $\varphi(L_{s,t})=1$, so $L_{s,t}\notin J_d$. $\square$

**Proof of part 2.** Let $\rho:G\to U_{d+1}(\mathbb F)$ be continuous, put $N_v=\rho(v)-1$, which is strictly upper triangular, and let $a_k(v)=\rho(v)_{k,k+1}$ for $1\le k\le d$. For adjacent $u,v$ we have $N_uN_v=N_vN_u$, and the $(k,k+2)$ entries give
$$a_k(u)\,a_{k+1}(v)=a_k(v)\,a_{k+1}(u)\qquad(u,v\text{ adjacent},\ 1\le k\le d-1).\tag{3}$$
By formula (1) and part 1, $\rho(g_{s,t})=1+\kappa_\rho(\mu(L_{s,t}))E_{1,d+1}$. Here $\kappa_\rho(\mu(L_{s,t}))=\tilde\rho(L_{s,t}(v-1))_{1,d+1}$, the corner entry of $L_{s,t}$ with $N_v$ substituted for $X_v$. The corner entry of a product of $d$ strictly upper triangular matrices of size $d+1$ is the product of the $(k,k+1)$ entries of the $k$th factors. So if $D_v=\sum_ka_k(v)E_{k,k+1}$, the corner entry of $L_{s,t}$ at the $N_v$ equals the corner entry of $L_{s,t}$ at the $D_v$. It remains to show that the latter is $0$.

*Pieces.* For each $j$,
$$P_j=[D_{u_j},D_{v_j}]=\sum_{k=1}^{d-1}\pi_{j,k}E_{k,k+2},\qquad\pi_{j,k}=a_k(u_j)a_{k+1}(v_j)-a_k(v_j)a_{k+1}(u_j).$$
For a vertex $x$ and $1\le k\le d-1$, put $\gamma_k(x)=(a_k(x),a_{k+1}(x))\in\mathbb F^2$. Then (3) says that $\det(\gamma_k(u),\gamma_k(v))=0$ for adjacent $u,v$, and $\pi_{j,k}=\det(\gamma_k(u_j),\gamma_k(v_j))$.

*Lemma 1.* If $\pi_{j,k}\ne0$, then $\gamma_k(z)=0$ for every vertex $z$ on a leg other than leg $j$. Moreover $a_k(x)\ne0$ for some $x\in\{u_j,v_j\}$, and $a_{k+1}(x')\ne0$ for some $x'\in\{u_j,v_j\}$.

*Proof.* The vectors $\gamma_k(u_j),\gamma_k(v_j)$ form a basis of $\mathbb F^2$. Such a $z$ is adjacent to $u_j$ and $v_j$, so by (3) the linear form $\det(\gamma_k(z),-)$ vanishes on this basis. Hence it is zero, which forces $\gamma_k(z)=0$. If $a_k(u_j)=a_k(v_j)=0$, or $a_{k+1}(u_j)=a_{k+1}(v_j)=0$, then $\pi_{j,k}=0$. $\square$

*Lemma 2.* Let $z$ be a vertex on a leg other than leg $j$, and let $j'\ne j$. Then, whenever the indices lie in range,

- (i) $a_k(z)\,\pi_{j,k+1}=0$,
- (ii) $\pi_{j,k}\,a_{k+2}(z)=0$,
- (iii) $\pi_{j,k}\,\pi_{j',k+2}=0$.

*Proof.* (i) Suppose $a_k(z)\ne0$ and $\pi_{j,k+1}\ne0$. Lemma 1 at $k+1$ gives $a_{k+1}(z)=0$ and $a_{k+1}(x)\ne0$ for some $x\in\{u_j,v_j\}$. As $z$ and $x$ are adjacent, (3) at $k$ gives $a_k(z)a_{k+1}(x)=a_k(x)a_{k+1}(z)=0$, a contradiction.

(ii) Suppose $\pi_{j,k}\ne0$ and $a_{k+2}(z)\ne0$. Lemma 1 at $k$ gives $a_{k+1}(z)=0$ and $a_{k+1}(x)\ne0$ for some $x\in\{u_j,v_j\}$. Then (3) at $k+1$ gives $a_{k+1}(x)a_{k+2}(z)=a_{k+1}(z)a_{k+2}(x)=0$, a contradiction.

(iii) Suppose $\pi_{j,k}\ne0$ and $\pi_{j',k+2}\ne0$. Lemma 1 at $k$ gives $x\in\{u_j,v_j\}$ with $a_{k+1}(x)\ne0$. Lemma 1 at $k+2$ gives $x'\in\{u_{j'},v_{j'}\}$ with $a_{k+2}(x')\ne0$, and also $a_{k+2}(x)=0$, since $x$ is not on leg $j'$. As $x$ and $x'$ lie on different legs, they are adjacent, and (3) at $k+1$ gives $a_{k+1}(x)a_{k+2}(x')=a_{k+1}(x')a_{k+2}(x)=0$, a contradiction. $\square$

*Lemma 3.* In every ordering, in a row, of the $m+1$ pieces $D_a,D_{y_1},\ldots,D_{y_s},P_1,\ldots,P_t$, some $P_j$ is next to a piece other than $D_a$.

*Proof.* Suppose not. There are $m+1\ge4$ pieces, so each $P_j$ has a neighbour, and all its neighbours are $D_a$. As $D_a$ occupies one place, each $P_j$ has exactly one neighbour, so it sits at an end of the row next to $D_a$. As $t\ge2$, $P_1$ and $P_2$ occupy the two ends, both next to $D_a$, so the row is $P_1D_aP_2$ or $P_2D_aP_1$, with three pieces. This contradicts $m+1\ge4$. $\square$

*Conclusion.* Substituting $D_v$ for $X_v$ in (2), the corner entry of $L_{s,t}$ at the $D_v$ is a signed sum of the corner entries of products $S_1\cdots S_{m+1}$, where $S_1,\ldots,S_{m+1}$ is an ordering of the pieces of Lemma 3. Let $\delta_l$ be $1$ if $S_l$ is some $D_v$ and $2$ if it is some $P_j$, so that $S_l$ is supported on the entries $(k,k+\delta_l)$ and $\sum_l\delta_l=d$. Put $\sigma_1=1$ and $\sigma_{l+1}=\sigma_l+\delta_l$. Then the corner entry of the product is $\prod_l(S_l)_{\sigma_l,\sigma_l+\delta_l}$. The entry of $D_v$ at $(k,k+1)$ is $a_k(v)$, and that of $P_j$ at $(k,k+2)$ is $\pi_{j,k}$.

By Lemma 3, some neighbouring $S_l,S_{l+1}$ are a $P_j$ together with a $D_{y_i}$ or a $P_{j'}$, $j'\ne j$. With $k=\sigma_l$, the product of their two entries is $a_k(y_i)\pi_{j,k+1}$, $\pi_{j,k}a_{k+2}(y_i)$ or $\pi_{j,k}\pi_{j',k+2}$. Each is $0$ by Lemma 2, since $y_i$ is not on leg $j$. So every product has corner entry $0$, and $\rho(g_{s,t})=1$. $\square$

**Proof of corollary (a).** Write $\xi_i=\mu(X_i)$. By the commutator formula, $g\in G_{(6)}$ and $\mathrm{in}_6(g)=[[[[[\xi_0,\xi_1],\xi_2],\xi_3],\xi_4],\xi_5]$, with commutator brackets in $A(G)$. By Lemma 4(b) of the induced-subgraph entry, $\xi_3$ commutes with $\xi_0$ and $\xi_1$, and $\xi_5$ commutes with $\xi_0,\ldots,\xi_3$, since the pairs $03$, $13$, $05$, $15$, $25$ and $35$ are not edges of the tree, so they are edges of $\Gamma_{1,2}$. The centralizer of an element of an associative algebra is a subalgebra. So $\xi_3$ commutes with $\alpha=[\xi_0,\xi_1]$, and $\xi_5$ commutes with everything in the subalgebra generated by $\xi_0,\ldots,\xi_3$. Every associative algebra satisfies the identity $[[x,y],z]=[x,[y,z]]+[[x,z],y]$. So
$$[[\alpha,\xi_2],\xi_3]=[\alpha,[\xi_2,\xi_3]]=:\beta,\qquad[[\beta,\xi_4],\xi_5]=[\beta,[\xi_4,\xi_5]].$$
Hence $\mathrm{in}_6(g)=[[[\xi_0,\xi_1],[\xi_2,\xi_3]],[\xi_4,\xi_5]]=\mu(L_{1,2})=\mathrm{in}_6(g_{1,2})$. As $\mathrm{in}_6$ is a homomorphism on $G_{(6)}$, $\mathrm{in}_6(gg_{1,2}^{-1})=0$, so $gg_{1,2}^{-1}\in G_{(7)}$ by Jennings' theorem. Then $g\notin G_{(7)}$, because $g_{1,2}\notin G_{(7)}$ by part 1. Every continuous $\rho:G\to U_7(\mathbb F)$ kills $G_{(7)}$, by item 3 of the filtration entry, so $\rho(g)=\rho(g_{1,2})=1$ by part 2. $\square$

**Proof of corollary (c).** For $n\ge7$, apply part 3 with $(s,t)=(n-6,2)$, so that $d+1=n$. Now let $s\ge n_0(q)-7$ and $n\ge7$. If $n\le s+6$, then $\Gamma_{n-6,2}$ is the induced subgraph of $\Gamma_{s,2}$ on all vertices except $y_{n-5},\ldots,y_s$, because its complement is the corresponding induced subgraph of $T_{s,2}$. So part 3 applies with $\Gamma'=\Gamma_{s,2}$. If $n\ge n_0(q)$, use Corollary 2(ii) of [no fixed finite field detects every Zassenhaus degree](no-fixed-finite-field-detects-every-zassenhaus-degree-of-zp2-free-product-zp.md). It applies because $\Gamma_{s,2}$ is not complete multipartite: its complement $T_{s,2}$ is connected but not complete, so it is not a disjoint union of complete graphs. Since $s+6\ge n_0(q)-1$, the two ranges cover every $n\ge7$. For $q=p=2$, $n_0(2)=18$. $\square$

**Remarks.**

- *Where the hypotheses enter.* The conditions $t\ge2$ and $s+t\ge3$ are used only in Lemma 3. For $t=1$ the row $P_1D_aD_{y_1}\cdots D_{y_s}$ escapes it, and for $(s,t)=(0,2)$ so does $P_1D_aP_2$. In those cases the argument proves nothing. Part 1 holds for all $s,t\ge0$.
- *Galois groups.* $\Gamma_{s,t}$ has an induced path on four vertices. The tree $T_{s,t}$ contains the induced path $u_2,a,u_1,v_1$, and the complement of a path on four vertices is again such a path. So by the [Snopce–Zalesskii classification](right-angled-artin-pro-p-galois-groups.md), neither $G$ nor any $G_{\Gamma'}$ in part 3 is $G_K(p)$ for a field $K$ containing a primitive $p$th root of unity. The theorem therefore says nothing directly about the [kernel-unipotent conjecture](kernel-unipotent-conjecture.md). Whether some Galois-realizable right-angled Artin pro-$p$ group fails the property in a size below $n_0$ is not decided here.
- *Open.* This entry does not decide whether $n_{\min}(p)$ is $6$ or $7$, that is, whether every finite graph has the kernel $6$-unipotent property. Nor does it decide whether $G_{\Gamma_{1,2}}$ has the property in the sizes $8\le n<n_0$.
- *Checks.* These were not used in the proofs. Take all sequences $(a_1,\ldots,a_d)$ of nonzero vectors in $\mathbb F^V$ satisfying (3), up to scaling each $a_k$, which does not affect vanishing. A machine enumeration evaluated the corner entry of $L_{s,t}$ at the $D_v$ on every such sequence and found $0$ every time. It covered $\Gamma_{1,2}$ over $\mathbb F_2$ ($74{,}593$ sequences), $\mathbb F_3$ and $\mathbb F_5$, $\Gamma_{0,3}$ over $\mathbb F_2$ and $\mathbb F_3$, and $\Gamma_{2,2}$ over $\mathbb F_2$. The same enumeration found detecting sequences in the excluded cases $(s,t)=(0,2)$ and $(2,1)$.

**Status.** The theorem and corollaries are proved here. They were not found in a brief web search in November 2026.
