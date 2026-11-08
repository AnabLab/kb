---
title: Fields from Milnor K-theory modulo the characteristic
kind: theorem
summary: 'In characteristic $p$, if $p^2\le[F:F^p]<\infty$ for both fields, an isomorphism of $K^M_1/p$ preserving vanishing of degree-two symbols is a nonzero scalar times the map of a unique field isomorphism. Checks a 2026 manuscript on function fields and extends its proof.'
tags: [milnor-k-theory, positive-characteristic, function-fields, reconstruction-algorithms]
edges:
  - {to: milnor-k-ring, label: uses}
  - {to: fundamental-theorem-of-projective-geometry, label: uses, note: "In finite dimension with its uniqueness clause, which the manuscript proves directly [@openai2026modp, Proposition 5.1, pp. 8–9]."}
  - {to: characteristic-two-reconstruction-from-milnor-symbols, label: generalizes, note: "The general form proved here, at p = 2, is that entry's statement. The manuscript's Theorem 1.1 alone covers only function fields over algebraically closed fields."}
  - {to: milnor-k-reconstruction-function-fields, label: analogous-to, note: "Here vanishing mod-p symbols detect p-dependence over F^p rather than algebraic dependence over the constants, so the projective geometry is over F^p."}
  - {to: mod-l-bogomolov-pop-conjecture, label: analogous-to, note: "The same scalar-quotient form of the Milnor K-theory statement, with ℓ equal to the characteristic, a case that conjecture excludes."}
---

**Notation.** For a field $F$ of characteristic $p$, put $V_F=F^\times/(F^\times)^p=K^M_1(F)/p$, written additively, so that $[f]+[g]=[fg]$. Let $R_F\subset V_F\otimes_{\mathbb F_p}V_F$ be spanned by the Steinberg elements $[f]\otimes[1-f]$. Then $(V_F\otimes V_F)/R_F=K^M_2(F)/p$ by the presentation of the [Milnor K-ring](milnor-k-ring.md); write $\{f,g\}_F$ for the image of $[f]\otimes[g]$. An $\mathbb F_p$-linear isomorphism $\Theta:V_K\to V_L$ is *compatible* if $(\Theta\otimes\Theta)(R_K)=R_L$. These form a set $\mathrm{Isom}_M(V_K,V_L)$ on which $\mathbb F_p^\times$ acts, and a field isomorphism $\alpha$ induces a compatible $\alpha_*([f])=[\alpha(f)]$ [@openai2026modp, §1, p. 1].

**Theorem (manuscript).** Let $K/k$ and $L/l$ be finitely generated extensions of algebraically closed fields of characteristic $p$, with $\operatorname{trdeg}(K/k)\ge2$ and $\operatorname{trdeg}(L/l)\ge2$. Then $\alpha\mapsto[\alpha_*]$ is a bijection from the field isomorphisms $\alpha:K\to L$ with $\alpha(k)=l$ onto $\mathrm{Isom}_M(V_K,V_L)/\mathbb F_p^\times$ [@openai2026modp, Theorem 1.1, p. 1]. The condition $\alpha(k)=l$ is automatic, because $\bigcap_{m\ge1}K^{p^m}=k$ [@openai2026modp, Lemma 5.2, pp. 9–10].

**General form, proved here.** Let $K$ and $L$ be fields of characteristic $p$ with $p^2\le[K:K^p]<\infty$ and $p^2\le[L:L^p]<\infty$. Let $\Theta:V_K\to V_L$ be an $\mathbb F_p$-linear isomorphism such that
$$
\{x,y\}_K=0\iff\{\Theta x,\Theta y\}_L=0\qquad(x,y\in V_K).
$$
Then $n\Theta=\alpha_*$ for a unique $n\in\mathbb F_p^\times$ and a unique field isomorphism $\alpha:K\to L$. In particular $\Theta$ is compatible, and $\alpha\mapsto[\alpha_*]$ is a bijection from all field isomorphisms $K\to L$ onto $\mathrm{Isom}_M(V_K,V_L)/\mathbb F_p^\times$, since a compatible isomorphism satisfies the displayed equivalence.

*Proof.* The manuscript's proof, outlined below, gives this. Its transcendence-degree hypotheses enter only through $[F:F^p]=p^{\operatorname{trdeg}}$ [@openai2026modp, Lemma 2.1, p. 3] and, for $\alpha(k)=l$, through Lemma 5.2. Its compatibility hypothesis enters only through the displayed equivalence, for $\Theta$ in step 4 and for $\Theta^{-1}$ in the inverse construction there; scalar multiples inherit it, since $\{cx,cy\}=c^2\{x,y\}$. Steps 1–3 hold for any field with $[F:F^p]$ finite, and step 3 also needs $F\ne F^p$. Step 4 uses $[L:L^p]\ge p^2$ for the graph, and $[K:K^p]\ge p^2$ for the inverse. Step 5 needs $\dim_{K^p}K\ge3$.

**Examples, checked here.**
- If $F$ is finitely generated of transcendence degree $d$ over a perfect field, then $[F:F^p]=p^d$: the proof of Lemma 2.1 uses only that the base is perfect.
- If $F=\mathbb F_q((s))((t))$, then $F^p=\mathbb F_q((s^p))((t^p))$, because Frobenius is bijective on $\mathbb F_q$. Grouping the exponents of $t$, and then those of $s$ in each coefficient, modulo $p$ gives the $F^p$-basis $s^it^j$ with $0\le i,j<p$, so $[F:F^p]=p^2$.
- At $p=2$ the general form is the [characteristic-two theorem](characteristic-two-reconstruction-from-milnor-symbols.md). Its example $\mathbb F_2(t)$, $\mathbb F_4(t)$ shows that $[F:F^2]=2$ does not suffice.

**Outline of the proof, with checks.** Write $C=F^p$, so that the underlying set of $V_F$ is the projective space $\mathbb P_C(F)$ of the $C$-vector space $F$. A $p$-basis $s_1,\dots,s_e$ of $F/C$ has a basis of monomials $s^I$ with exponents below $p$. Its Euler derivations $D_j(s^I)=i_js^I$ are commuting $C$-linear derivations. On $C(s_j)$ the kernel of $D_j$ is $C$, and the solutions of $D_jf=\lambda f$ with $f\ne0$ and $\lambda\in C$ are the $cs_j^i$ [@openai2026modp, Lemma 2.2, p. 3].

1. *Vanishing symbols* [@openai2026modp, Lemmas 2.3–2.4, p. 4]. If $s\notin C$ and $\{s,t\}_F=0$, then $t\in C(s)$. Otherwise $s,t$ extend to a $p$-basis, and
$$
\beta([f],[g])=\frac{D_sf}{f}\,\frac{D_tg}{g}-\frac{D_tf}{f}\,\frac{D_sg}{g}
$$
is a bilinear map $V_F\times V_F\to F$ that kills Steinberg elements and has $\beta([s],[t])=1$. Conversely, $\{t,c+dt\}_F=\{q,1-q\}_F=0$ for $c,d\in C^\times$, where $q=-dt/c$. The first statement is one direction of the [Bloch–Gabber–Kato criterion](bloch-gabber-kato-theorem.md), proved directly.
2. *An exponent from an intersection* [@openai2026modp, Proposition 3.1, pp. 5–6]. Let $X,Y\in F^\times$ be $p$-independent, and let $U\in C(X)^\times$ and $V\in C(Y)^\times$ with $[U]\notin\mathbb F_p[X]$ and $[V]\notin\mathbb F_p[Y]$. If $X\,C(Y/X)^\times\cap U\,C(V/U)^\times$ is nonempty, there is a unique $1\le n<p$ with
$$
U^n\in C+CX^n,\qquad V^n\in C+CY^n,
$$
and either inclusion alone determines $n$. Since $U$ is not a multiple of a power of $X$, the eigenvector description gives $D_XU\ne0$ and puts $A_X=U/D_XU-1$ in $C(X)\setminus C$; define $A_Y$ likewise. For $Z$ in the intersection, the derivations $D_X+D_Y$ and $(A_X+1)D_X+(A_Y+1)D_Y$ both fix $Z$. So $q_X=D_XZ/Z$ and $q_Y=D_YZ/Z$ satisfy $q_X+q_Y=1$ and $A_Xq_X+A_Yq_Y=0$, and both are killed by $D_X+D_Y$. Hence $D_XA_X/A_X=D_YA_Y/A_Y$ lies in $C(X)\cap C(Y)=C$. By the eigenvector description this forces $A_X=c_XX^m$ and $A_Y=c_YY^m$ with $c_X,c_Y\in C^\times$ and one exponent $m$, and $m\ne0$ because $A_X\notin C$. With $n=p-m$, the quotient $U^n/(X^n+c_XX^p)$ is killed by $D_X$, so it lies in $C^\times$. Conversely, $U^r=h+jX^r$ with $h,j\in C$ gives $A_X=h/(jX^r)$, a multiple of $X^{p-r}$, so $r=n$.
3. *No other scalar preserves lines* [@openai2026modp, Lemma 4.1, p. 6]. If $F\ne C$ and multiplication by $r\in\mathbb F_p^\times$ on $V_F$ maps lines into lines, then $r=1$. Indeed, the collinear points $[1],[x],[x+1]$ would force $(x+1)^r\in C+Cx^r$, but for $1<r<p$ the coefficient of $x^{r-1}$ is $r\ne0$.
4. *One scalar for all lines* [@openai2026modp, Proposition 4.2, pp. 7–8]. Put $H=K^p$ and $C=L^p$. Join two vertices $[x],[y]$ of $V_K\setminus\{0\}$ when representatives $X,Y$ of $\Theta[x],\Theta[y]$ are $p$-independent. The graph is complete multipartite, with a part for each field $C(X)$, and it has at least two parts because $[L:C]\ge p^2$; so it is connected. Along an edge, $1,x,y$ are $H$-independent: since $x,y\notin H$ and $[x]\ne[y]$, a dependence would be $y=c+dx$ with $c,d\in H^\times$, which would give $\{x,y\}_K=0$ by step 1, hence $\{X,Y\}_L=0$ and $Y\in C(X)$. For $a,b\in H^\times$ put
$$
u=x+a,\qquad v=y+b,\qquad z=bx-ay=bu-av.
$$
Step 1 gives $\{x,u\}_K=\{y,v\}_K=\{y/x,z/x\}_K=\{v/u,z/u\}_K=0$. Transporting these by $\Theta$ and applying step 1 in $L$ puts the images $U,V,Z$ of $u,v,z$ in the position of step 2, which gives $n$ with $U^n\in C+CX^n$ and $V^n\in C+CY^n$. The $V$-inclusion fixes $n$ as $a$ varies, and the $U$-inclusion at $a=1$ fixes it as the neighbour and $b$ vary, so $n$ depends only on the vertex. Adjacent vertices share it, so one $n$ serves for every vertex. Then $\Psi=n\Theta$ maps the line through $[1]$ and $[x]$, which is $\{[1],[x]\}\cup\{[x+a]:a\in H^\times\}$, into the line through $[1]$ and $\Psi[x]$, and multiplicative translation gives every line. Running the construction for $\Psi^{-1}$ gives $r$ with $r\Psi^{-1}$ preserving lines; then $r\Psi^{-1}\circ\Psi$ is multiplication by $r$ on $V_K$, so $r=1$ by step 3. Since neither of two lines properly contains the other, $\Psi$ maps lines onto lines. Step 3 also makes $n$ unique.
5. *The field* [@openai2026modp, Proposition 5.1 and proof of Theorem 1.1, pp. 8–10]. Since $\dim_HK\ge p^2\ge4$, the [fundamental theorem of projective geometry](fundamental-theorem-of-projective-geometry.md) lifts $\Psi$ to an additive bijection $S:K\to L$, semilinear over a field isomorphism $H\to C$ and unique up to $C^\times$. Normalize $S(1)=1$. For $f\in K^\times$, the semilinear maps $w\mapsto S(fw)$ and $w\mapsto S(f)S(w)$ both induce $[w]\mapsto\Psi[f]+\Psi[w]$, and they agree at $w=1$, so they are equal. Thus $S$ is a field isomorphism with $S_*=n\Theta$. For injectivity, if $\beta_*=r\alpha_*$, then multiplication by $r$ preserves lines, so $r=1$ by step 3. Then $\alpha$ and $\beta$ lift the same projective map and agree at $1$, so $\alpha=\beta$.

**What the check covered.** Every step of the manuscript was rebuilt, including the eigenvector descriptions, the four uses of the Steinberg relation in step 4, the independence of $n$ from the chosen representatives, neighbour and $b$, and the coordinate proof of Proposition 5.1. No gap was found. The statement in step 2 is unchanged when $X,Y,U,V$ are multiplied by elements of $C^\times$, which is why $n$ depends only on projective points.

**Status.** The manuscript is credited to OpenAI and is not peer reviewed; [the overview](manuscripts-claiming-bogomolov-pop.md) records its companions on the Bogomolov–Pop conjecture. This check was made by an AI agent and is no substitute for peer review. The manuscript compares its line recovery with differential arguments of Rovinsky and of Cadoret–Pirutka, and notes that its passage from lines to the field also appears in Cadoret–Pirutka [@openai2026modp, §1.1, p. 2, and §5, p. 8]. Those sources were not opened for this entry.
