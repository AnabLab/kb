---
title: Isotropic chains detect the quadratic algebra of a nondegenerate form
kind: theorem
summary: 'If $\omega$ is a nondegenerate alternating form, or symmetric over $\mathbb F_2$, on $U$ with $\dim U\ge3$, the tensors $a_1\otimes\cdots\otimes a_m$ with all $\omega(a_j,a_{j+1})=0$ span the dual of $T_m(U^*)/(\xi)_m$, $\xi$ the tensor of $\omega$. This fails over $\mathbb F_p$ if $\dim U=2$.'
tags: [pro-p-groups, galois-cohomology]
edges:
  - {to: kernel-unipotent-conjecture, label: motivated-by, note: "It is the linear-algebra input of the kernel-unipotent property for Demushkin groups, with $\\omega$ the cup product."}
---

**Setting.** Let $k$ be a field, $U$ a $k$-vector space of finite dimension $d$, and $\omega:U\times U\to k$ a nondegenerate bilinear form with $\omega(b,a)=\varepsilon\,\omega(a,b)$ for all $a,b$, where $\varepsilon\in\{1,-1\}$. Put $V=U^*$ and $T_m=V^{\otimes m}$, and pair $T_m$ with $U^{\otimes m}$ by $\langle y_1\otimes\cdots\otimes y_m,a_1\otimes\cdots\otimes a_m\rangle=\prod_j y_j(a_j)$. For a basis $e_1,\ldots,e_d$ of $U$ with dual basis $X_1,\ldots,X_d$, $T=\bigoplus_m T_m$ is the free algebra $k\langle X_1,\ldots,X_d\rangle$ graded by degree. Let $\xi\in T_2$ be the element with $\langle\xi,a\otimes b\rangle=\omega(a,b)$, that is, $\xi=\sum_{i,j}\omega(e_i,e_j)X_iX_j$. Let $(\xi)$ be the two-sided ideal it generates, $(\xi)_m=(\xi)\cap T_m$, $A=T/(\xi)$ and $A_m=T_m/(\xi)_m$.

For $b\in U$ define $v_b\in V$ by $v_b(a)=\omega(a,b)$, and put $b^\perp=\ker v_b$. As $\omega$ is nondegenerate, $b\mapsto v_b$ is a linear isomorphism $U\to V$, and $b^\perp$ is a hyperplane when $b\ne0$.

A *chain* of length $m$ is a sequence $(a_1,\ldots,a_m)$ in $U$ with $\omega(a_j,a_{j+1})=0$ for $1\le j<m$. For a subspace $L\subseteq U$ let $C_m(L)\subseteq U^{\otimes m}$ be the span of the tensors $a_1\otimes\cdots\otimes a_m$ of chains with $a_m\in L$, and $C_m=C_m(U)$. For a subspace $C\subseteq U^{\otimes m}$ write $C^\perp\subseteq T_m$ for its annihilator.

Consider the hypothesis

(H) there are $e_1,e_2\in U$ with $\omega(e_1,e_1)=\omega(e_2,e_2)=0$ and $\omega(e_1,e_2)\ne0$.

It holds when $\omega$ is alternating: take any $e_2\ne0$ and $e_1$ with $\omega(e_1,e_2)\ne0$. Step 0 below shows that it holds when $k=\mathbb F_2$, $\omega$ is symmetric and $d\ge3$.

**Theorem.** This is proved here. Assume (H) and $d\ge3$. Then for every $m\ge1$:

1. $C_m^\perp=(\xi)_m$. Equivalently $C_m=((\xi)_m)^\perp$: the chain tensors span the dual of $A_m$. So every element of $T_m$ outside $(\xi)_m$ pairs nontrivially with $a_1\otimes\cdots\otimes a_m$ for some chain.
2. For every $b\ne0$, $C_m(b^\perp)^\perp=(\xi)_m+T_{m-1}v_b$.

**Rank two fails over finite fields.** Let $d=2$, $\omega$ alternating and $k=\mathbb F_p$. Two vectors with $\omega(a,b)=0$ are linearly dependent, so every nonzero chain tensor is a multiple of $v^{\otimes m}$ for one of the $p+1$ lines $kv$, and $\dim C_m\le p+1$. Here $\xi$ is a nonzero multiple of $X_1X_2-X_2X_1$, so $A=k[X_1,X_2]$ and $\dim A_m=m+1$. Hence part 1 fails for $m\ge p+1$. Besides Step 0, the proof below uses $d\ge3$ only in the step for part 1.

**Proof.**

*Step 0: (H) for symmetric forms over $\mathbb F_2$, $d\ge3$.* If $\omega$ is alternating, (H) holds. Otherwise $q(a)=\omega(a,a)$ is additive, since $q(a+b)=q(a)+q(b)+2\omega(a,b)$, hence linear and nonzero. So $q=v_{c_0}$ for a unique $c_0\ne0$, and $\ker q$ is a hyperplane with $2^{d-1}\ge4$ elements. Choose $e_2\in\ker q$ outside $\{0,c_0\}$. Then $v_{e_2}\ne v_{c_0}$, and over $\mathbb F_2$ distinct nonzero functionals have distinct kernels, so the hyperplanes $e_2^\perp$ and $\ker q$ differ. Hence some $e_1\in\ker q$ has $\omega(e_1,e_2)\ne0$, and $\omega(e_2,e_2)=q(e_2)=0$.

*Step 1: normal words.* Take $e_1,e_2$ as in (H). The hyperplane $e_2^\perp$ contains $e_2$ but not $e_1$; extend $e_2$ to a basis $e_2,\ldots,e_d$ of $e_2^\perp$. In the basis $e_1,\ldots,e_d$, with dual basis $X_i$, we have $\omega(e_1,e_1)=0$, $c:=\omega(e_1,e_2)\ne0$, and $\omega(e_l,e_2)=0$ for $l\ge2$. Call a word in the $X_i$ *normal* if it does not contain $X_1X_2$ as two consecutive letters, and let $N_m$ be the number of normal words of length $m$. Then $N_0=1$, $N_1=d$ and $N_m=dN_{m-1}-N_{m-2}$ for $m\ge2$: of the $dN_{m-1}$ words formed by a normal word of length $m-1$ and one more letter, those that are not normal end in $X_1X_2$, and they correspond to the normal words of length $m-2$, each followed by $X_1X_2$.

*Claim: the normal words of length $m$ form a basis of $A_m$.* Spanning: order words of equal length lexicographically, with $X_1>X_2>\cdots>X_d$. The coefficient of $X_iX_j$ in $\xi$ is $\omega(e_i,e_j)$. Each $X_iX_j\ne X_1X_2$ with nonzero coefficient is smaller than $X_1X_2$: if $i=1$ then $j\ne1$ because $\omega(e_1,e_1)=0$, so $j\ge3$; if $i\ge2$ its first letter is smaller. In $A$, $X_1X_2=-c^{-1}\sum_{(i,j)\ne(1,2)}\omega(e_i,e_j)X_iX_j$. Substituting this at an occurrence of $X_1X_2$ writes a word as a combination of smaller words of the same length, and as there are finitely many words of length $m$, repetition writes every word in terms of normal words.

Independence: let $N$ be the vector space with basis all normal words, including the empty word $\varnothing$. Define linear maps $R_1,\ldots,R_d$ on $N$, on normal words $w$, by induction on length: $R_i(w)=wX_i$ if $wX_i$ is normal; otherwise $w=w'X_1$ and $i=2$, and
$$R_2(w'X_1)=-c^{-1}\sum_{(l,l')\ne(1,2)}\omega(e_l,e_{l'})\,R_{l'}(R_l(w')).$$
This is a valid definition: $R_l(w')$ is already defined, as $w'$ is shorter. A term with $l'=2$ has $l\ne1$, hence coefficient $\omega(e_l,e_2)=0$. For $l'\ne2$, $R_{l'}$ just appends $X_{l'}$, because that never creates $X_1X_2$. Let $T$ act on $N$ on the right with $X_i$ acting by $R_i$, so $w\cdot X_lX_{l'}=R_{l'}(R_l(w))$. For each normal word $w$, $w\cdot\xi=c\,R_2(wX_1)+\sum_{(l,l')\ne(1,2)}\omega(e_l,e_{l'})R_{l'}(R_l(w))=0$ by the definition of $R_2(wX_1)$. The annihilator of a right module is a two-sided ideal, so $(\xi)$ acts as $0$ and $N$ is a right $A$-module. Every prefix of a normal word $w$ is normal, so $\varnothing\cdot w=w$. Hence the normal words are linearly independent in $A$. $\square$

*Step 2: exactness.* Let $\mu:A_{m-1}\otimes V\to A_m$ be multiplication. Since $\langle\sum_iv_{e_i}\otimes X_i,a\otimes b\rangle=\sum_i\omega(a,e_i)X_i(b)=\omega(a,b)$, we have $\xi=\sum_iv_{e_i}\otimes X_i$; this holds for every basis. For $m\ge2$ let $\iota:A_{m-2}\to A_{m-1}\otimes V$, $z\mapsto\sum_izv_{e_i}\otimes X_i$, the map $z\mapsto z\xi$.

*Claim: $\ker\mu=\iota(A_{m-2})$ for $m\ge2$, and $\mu$ is injective for $m=1$.* The case $m=1$ is the identity of $V$. Let $m\ge2$. $\mu$ is onto, since $A$ is generated in degree $1$, so $\dim\ker\mu=dN_{m-1}-N_m=N_{m-2}$ by Step 1. $\mu\iota(z)$ is the class of $z\xi$, which is $0$. If $\iota(z)=0$ then $zv_{e_i}=0$ for all $i$, so $zx=0$ for all $x\in V$, as the $v_{e_i}$ span $V$; in particular $zX_1=0$. Appending $X_1$ maps distinct normal words to distinct normal words, so $z=0$. Thus $\iota$ is injective with image of dimension $N_{m-2}$ inside $\ker\mu$. $\square$

Two consequences, for an arbitrary basis $f_1,\ldots,f_d$ of $U$ with dual basis $Y_1,\ldots,Y_d$:

- (a) $\xi=\sum_i\varepsilon\,Y_i\otimes v_{f_i}$, since $\langle\sum_i\varepsilon Y_i\otimes v_{f_i},a\otimes b\rangle=\varepsilon\,\omega(b,a)=\omega(a,b)$. So if $y_1,\ldots,y_d\in A_{m-1}$ satisfy $\sum_iy_iv_{f_i}=0$ in $A_m$, then $\sum_iy_i\otimes v_{f_i}\in\ker\mu$, and comparing coefficients in the basis $(v_{f_i})$ of $V$ gives $z\in A_{m-2}$ with $y_i=\varepsilon zY_i$ for all $i$; for $m=1$ all $y_i=0$.
- (b) For $x\in V$ nonzero, $z\mapsto zx$ is injective on $A$. Induct on the degree $n$ of $z$; $n=0$ is clear. Choose the basis with $v_{f_1}=x$ and apply (a) to $y_1=z$, $y_i=0$ for $i\ge2$: $z=\varepsilon wY_1$ and $wY_2=0$ for some $w$ of degree $n-1$. By induction $w=0$, so $z=0$.

*Step 3: a recursion.* For $h\in T_m$ and $b\in U$ let $h_b\in T_{m-1}$ be the contraction of the last factor with $b$, so $(y_1\otimes\cdots\otimes y_m)_b=y_m(b)\,y_1\otimes\cdots\otimes y_{m-1}$. It is linear in $b$, and $h=\sum_ih_{f_i}Y_i$.

- (O) If $h\in C_m(L)^\perp$ and $b\in L$, then $h_b\in C_{m-1}(b^\perp)^\perp$. Indeed, for a chain $(a_1,\ldots,a_{m-1})$ with $a_{m-1}\in b^\perp$, the sequence $(a_1,\ldots,a_{m-1},b)$ is a chain ending in $L$, so $\langle h_b,a_1\otimes\cdots\otimes a_{m-1}\rangle=\langle h,a_1\otimes\cdots\otimes a_{m-1}\otimes b\rangle=0$.
- (Q) Let $m\ge2$, and suppose that $h_b\equiv u_bv_b$ in $A_{m-1}$, with $u_b\in A_{m-2}$, for $b\in\{f_i,f_j,f_i+f_j\}$, where $i\ne j$. If some index $l\notin\{i,j\}$ exists, then $u_{f_i}=u_{f_j}$. Indeed, with $u=u_{f_i+f_j}$, linearity gives $(u_{f_i}-u)v_{f_i}+(u_{f_j}-u)v_{f_j}=0$ in $A_{m-1}$. By (a), $u_{f_i}-u=\varepsilon zY_i$, $u_{f_j}-u=\varepsilon zY_j$ and $0=\varepsilon zY_l$ for some $z$, so $z=0$ by (b), and $u_{f_i}=u=u_{f_j}$. For $m=2$, (a) gives $u_{f_i}-u=u_{f_j}-u=0$ directly.

*Step 4: induction on $m$.* The inclusions $\supseteq$ always hold. A chain tensor kills $(\xi)_m$, since $\langle s\xi t,a_1\otimes\cdots\otimes a_m\rangle$ contains the factor $\omega(a_j,a_{j+1})=0$, where $s$ and $t$ are words and $\xi$ occupies places $j,j+1$. $T_{m-1}v_b$ kills the chain tensors with $a_m\in\ker v_b=b^\perp$, and $C_m(b^\perp)\subseteq C_m$.

For $m=1$, $C_1(L)=L$, so $C_1^\perp=0=(\xi)_1$ and $C_1(b^\perp)^\perp=kv_b$.

Let $m\ge2$ and assume part 2 for $m-1$. Let $h\in C_m(L)^\perp$. By (O) and part 2 for $m-1$, for every nonzero $b'\in L$ there is $u_{b'}\in A_{m-2}$ with $h_{b'}\equiv u_{b'}v_{b'}$ in $A_{m-1}$.

- *Part 1, $L=U$.* Take any basis $f_i$. As $d\ge3$, (Q) applies to every pair $i\ne j$, so all $u_{f_i}$ equal one $u$. Then, modulo $(\xi)_m$, $h=\sum_ih_{f_i}Y_i\equiv\sum_iu\,v_{f_i}Y_i=u\xi\equiv0$, using $\xi=\sum_iv_{f_i}\otimes Y_i$ from Step 2.
- *Part 2, $L=b^\perp$.* Take a basis with $f_1,\ldots,f_{d-1}\in b^\perp$. Then $Y_d$ vanishes on $b^\perp$, so $v_b=\lambda Y_d$ with $\lambda\ne0$. For $i\ne j$ below $d$, (Q) applies with $l=d$, so $u_{f_i}=u$ for all $i<d$. Modulo $(\xi)_m$, $h\equiv u\,(\xi-v_{f_d}Y_d)+h_{f_d}Y_d$, so $h\in(\xi)_m+T_{m-1}v_b$. $\square$

**Status.** The theorem and its proof are written here. I found no statement of it in the sources opened for [the kernel-unipotent conjecture](kernel-unipotent-conjecture.md). It is the linear-algebra input to [the kernel-unipotent property for Demushkin groups](kernel-unipotent-property-for-demushkin-groups.md).
