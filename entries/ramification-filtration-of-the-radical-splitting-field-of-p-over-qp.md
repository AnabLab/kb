---
title: Ramification filtration of the radical splitting field of p over the p-adic rationals
kind: theorem
summary: 'For odd p, F = Q_p(p^(1/p^s)) and N = F(ζ_(p^s)), every upper ramification group of N/Q_p has explicit order. So N/Q_p has last lower break (p^(2s)+p^(2s-2)+2p)/(p+1) in Čoupek’s numbering, and d(N/F) exceeds its tame value by (p-1)(p^(2s-2)-1)/(p+1).'
tags: [local-fields, ramification]
edges:
  - {to: ramification-of-uniformizer-radical-splitting-fields, label: uses, note: 'Its last upper break j+1/(p-1) at each level j ≤ s locates the drops of the Kummer part.'}
  - {to: p-adic-cyclotomic-tower, label: uses, note: 'Total ramification, uniformizer and ring of integers of Q_p(ζ_(p^m)), used for the cyclotomic part.'}
  - {to: ramification-filtration, label: uses, note: 'Compatibility of upper numbering with quotients.'}
  - {to: last-lower-break-of-the-uniformizer-radical-splitting-field, label: uses, note: 'Its identity turns the last lower break into d(N/F); this entry evaluates it for K = Q_p, π = p and every s.'}
  - {to: prismatic-ramification-bound-for-mod-p-cohomology, label: motivated-by, note: 'Decides, over Q_p with π = p, for which degrees i the printed route to Čoupek’s upper cutoff gives the stated bound.'}
---

**Setting.** Let $p$ be an odd prime, $s\ge1$ and $\varepsilon=1/(p-1)$. Fix a root $\pi_s$ of $X^{p^s}-p$ and a primitive $p^s$th root of unity $\zeta$, and for $1\le j\le s$ put $\pi_j=\pi_s^{p^{s-j}}$ and $\zeta_{p^j}=\zeta^{p^{s-j}}$. Set
$$F=\mathbb Q_p(\pi_s),\qquad C=\mathbb Q_p(\zeta),\qquad N=F(\zeta),$$
$G=\operatorname{Gal}(N/\mathbb Q_p)$, $H=\operatorname{Gal}(N/C)$ and $E=e_{N/\mathbb Q_p}$. This is the case $K=\mathbb Q_p$, $\pi=p$, $e=1$ of the [last lower break entry](last-lower-break-of-the-uniformizer-radical-splitting-field.md). From there come the different exponents $d_{M'/M}$ and, in Čoupek's numbering $G_{(\lambda)}=G_{\lambda-1}$, the last lower break $\lambda_{N/\mathbb Q_p}$ and $\mu_{N/\mathbb Q_p}=1+s+\varepsilon$. Otherwise $G_x$ and $G^v$ are Serre's lower and [upper ramification groups](ramification-filtration.md), and $\varphi$, $\psi$ are Serre's Herbrand functions of $N/\mathbb Q_p$. Čoupek defines $\varphi_{N/\mathbb Q_p}(t)=\int_0^t dx/[G_{(1)}:G_{(x)}]$ [@coupek2022crystalline, §5.1, p. 27]. As $G_{(x)}=G_{x-1}$ [@coupek2022crystalline, Remark 5.1, p. 28], which is $G_0$ for $0<x\le1$, this function is $t\mapsto1+\varphi(t-1)$ for $t\ge1$; call it $\varphi_{\mathrm C}$.

**Theorem (proved here).**

(a) $N/\mathbb Q_p$ is totally ramified of degree $E=p^{2s-1}(p-1)$. For $v>0$,
$$|G^v|=p^{a(v)+c(v)},\qquad a(v)=\#\{1\le j\le s:\ j\ge v-\varepsilon\},\qquad c(v)=\max\{s-\lceil v\rceil,0\}.$$
So $|G^v|=p^{2s-1}$ for $0<v\le1$. For $1\le i\le s-1$, $|G^v|=p^{2s-2i}$ for $i<v\le i+\varepsilon$ and $|G^v|=p^{2s-2i-1}$ for $i+\varepsilon<v\le i+1$. Finally $|G^v|=p$ for $s<v\le s+\varepsilon$, and $G^v=1$ for $v>s+\varepsilon$. The upper breaks are therefore $0$, the integers $1,\dots,s-1$, and the numbers $i+\varepsilon$ with $1\le i\le s$.

(b) Their lower indices are
$$\psi(i)=\frac{(p-1)(p^{2i-1}+1)}{p+1},\qquad \psi(i+\varepsilon)=\frac{2p^{2i}+p-1}{p+1},\qquad \psi(s+\varepsilon)=\frac{p^{2s}+p^{2s-2}+p-1}{p+1},$$
for $1\le i\le s-1$. Hence, in Čoupek's numbering,
$$\lambda_{N/\mathbb Q_p}=\frac{p^{2s}+p^{2s-2}+2p}{p+1}.$$

(c) Put $w_s=(p-1)(p^{2s-2}-1)/(p+1)$, an integer. Then
$$d_{N/F}=p^{s-1}(p-1)-1+w_s,\qquad d_{N/\mathbb Q_p}=(s+1)p^{2s-1}(p-1)-1+w_s,$$
$$\frac{d_{N/F}}{E}=\frac1{p^s}+\frac1{p(p+1)}-\frac2{p^{2s-2}(p^2-1)}.$$
As $e_{N/F}=p^{s-1}(p-1)$, the number $w_s=d_{N/F}-(e_{N/F}-1)$ is the excess of $d_{N/F}$ over its tame value. It vanishes exactly when $s=1$, and $d_{N/F}/E\to1/(p(p+1))$ as $s\to\infty$.

**Proof.** *Step 1: the group.* By the [cyclotomic tower entry](p-adic-cyclotomic-tower.md), $C/\mathbb Q_p$ is totally ramified of degree $p^{s-1}(p-1)$. So $g\mapsto c(g)$, where $g\zeta=\zeta^{c(g)}$, identifies $\operatorname{Gal}(C/\mathbb Q_p)$ with $(\mathbb Z/p^s)^\times$. Next, $p$ is not a $p$th power in $C$. Otherwise $C$ contains a root $r$ of $X^p-p$. As $C/\mathbb Q_p$ is abelian, $\mathbb Q_p(r)/\mathbb Q_p$ is then Galois, so it contains $\zeta_p$, a ratio of two roots. But $[\mathbb Q_p(r):\mathbb Q_p]=p$, since $X^p-p$ is Eisenstein, and $p-1$ does not divide $p$.

For $g\in G$, $g\pi_s$ is a root of $X^{p^s}-p$, so $g\pi_s=\zeta^{b(g)}\pi_s$ for a unique $b(g)\in\mathbb Z/p^s$. On $H$, $b$ is an injective homomorphism. If $b(H)$ were proper, it would lie in $p\mathbb Z/p^s$, so $H$ would fix $\pi_1=\pi_s^{p^{s-1}}$, and $p=\pi_1^p$ would be a $p$th power in $C$. Hence $b:H\to\mathbb Z/p^s$ is an isomorphism and $|G|=p^{2s-1}(p-1)$. The map $g\mapsto(b(g),c(g))$ is injective, hence a bijection onto $\mathbb Z/p^s\times(\mathbb Z/p^s)^\times$, and $(b,c)(b',c')=(b+cb',cc')$. The subgroups of $H$ are $H_k=\{g\in H:p^k\mid b(g)\}$ for $0\le k\le s$, with $|H_k|=p^{s-k}$. Each $g\in G$ sends $\pi_j$ to $\zeta_{p^j}^{b(g)}\pi_j$ and $\zeta_{p^j}$ to $\zeta_{p^j}^{c(g)}$. So $g$ is trivial on $S_j=\mathbb Q_p(\pi_j,\zeta_{p^j})\subseteq N$ if and only if $p^j\mid b(g)$ and $c(g)\equiv1\pmod{p^j}$.

*Step 2: the cyclotomic part.* Claim: for $1\le m\le s$ and $v>0$, the image of $G^v$ in $\operatorname{Gal}(\mathbb Q_p(\zeta_{p^m})/\mathbb Q_p)$ is $\{c\equiv1\pmod{p^{\min\{\lceil v\rceil,m\}}}\}$. By compatibility with quotients this image is $\Gamma^v$, where $\Gamma=\operatorname{Gal}(C_m/\mathbb Q_p)$ and $C_m=\mathbb Q_p(\zeta_{p^m})$. By the cyclotomic tower entry, $C_m/\mathbb Q_p$ is totally ramified, $\varpi=1-\zeta_{p^m}$ is a uniformizer and $\mathcal O_{C_m}=\mathbb Z_p[\varpi]$. For $\sigma\in\Gamma$, $\sigma\ne1$, every $\sigma x-x$ with $x\in\mathbb Z_p[\varpi]$ is a multiple of $\sigma\varpi-\varpi$, so $i(\sigma)=\min_{x\in\mathcal O_{C_m}}v_{C_m}(\sigma x-x)$ equals $v_{C_m}(\sigma\varpi-\varpi)$. Let $c=c(\sigma)$ and $k=v_p(c-1)<m$. Then $\sigma\varpi-\varpi=\zeta_{p^m}(1-\zeta_{p^m}^{c-1})$, and $\zeta_{p^m}^{c-1}$ is a primitive $p^{m-k}$th root of unity. By the valuation of $1-\xi$ computed in the [radical splitting-field entry](ramification-of-uniformizer-radical-splitting-fields.md), $i(\sigma)=p^{m-1}(p-1)/(p^{m-k-1}(p-1))=p^k$. As $\Gamma_x=\{\sigma:i(\sigma)\ge x+1\}$, we get $\Gamma_x=\{c\equiv1\pmod{p^k}\}$ for $p^{k-1}-1<x\le p^k-1$ and $1\le k\le m$. On this interval, of length $p^{k-1}(p-1)$, the index $[\Gamma:\Gamma_x]$ is $p^{k-1}(p-1)$, so $\varphi_{C_m/\mathbb Q_p}(p^k-1)=k$. Hence $\Gamma^v=\Gamma_{\psi_{C_m/\mathbb Q_p}(v)}$ is $\{c\equiv1\pmod{p^k}\}$ for $k-1<v\le k$, and it is trivial for $v>m-1$.

*Step 3: the Kummer part.* Claim: for $1\le j\le s$ and $v>0$, $G^v\cap H\not\subseteq H_j$ if and only if $v\le j+\varepsilon$. Apply the [radical splitting-field theorem](ramification-of-uniformizer-radical-splitting-fields.md) with $K=\mathbb Q_p$, $\pi=p$ and $m=j$. It gives $\operatorname{Gal}(S_j/\mathbb Q_p)^{j+\varepsilon}\ne1$ and $\operatorname{Gal}(S_j/\mathbb Q_p)^v=1$ for $v>j+\varepsilon$.

If $g\in(G^v\cap H)\setminus H_j$, then $p^j\nmid b(g)$, so $g$ is nontrivial on $S_j$ by Step 1. Its restriction lies in $\operatorname{Gal}(S_j/\mathbb Q_p)^v$, so $v\le j+\varepsilon$.

Conversely, since $G^{j+\varepsilon}\subseteq G^v$ for $v\le j+\varepsilon$, it suffices to treat $v=j+\varepsilon$. By compatibility with quotients, some $g\in G^{j+\varepsilon}$ is nontrivial on $S_j$. As $j+\varepsilon>j-1$, Step 2 with $m=j$ gives $c(g)\equiv1\pmod{p^j}$, so $p^j\nmid b(g)$ by Step 1. Let $h\in G$ correspond to $(0,2)$; this needs $p$ odd. Ramification groups are normal, because $v_N(hgh^{-1}x-x)=v_N(gy-y)$ with $y=h^{-1}x$. So $k=hgh^{-1}g^{-1}\in G^{j+\varepsilon}$. In coordinates, with $(b,c)=(b(g),c(g))$,
$$hgh^{-1}g^{-1}=(2b,c)\,(-c^{-1}b,c^{-1})=(b,1).$$
So $k\in H$ and $b(k)=b(g)$, hence $k\in(G^{j+\varepsilon}\cap H)\setminus H_j$.

*Step 4: orders and total ramification.* Let $v>0$. Then $G^v\cap H=H_k$ for some $k$, and $H_k\not\subseteq H_j$ exactly when $j>k$. By Step 3, $\{k+1,\dots,s\}=\{1\le j\le s:j\ge v-\varepsilon\}$, so $|G^v\cap H|=p^{a(v)}$. The image of $G^v$ in $\operatorname{Gal}(C/\mathbb Q_p)$ has order $p^{c(v)}$ by Step 2 with $m=s$. This gives $|G^v|$. For $0<v\le1+\varepsilon$ one has $a(v)=s$, so $H\subseteq G^v\subseteq G_0$. By compatibility with quotients at $v=0$, the image of $G_0=G^0$ in $\operatorname{Gal}(C/\mathbb Q_p)$ is its inertia group, which is everything. So $G_0=G$, and $N/\mathbb Q_p$ is totally ramified. Evaluating $a$ and $c$ on each interval gives the list in (a). For instance, if $i<v\le i+\varepsilon$ with $1\le i\le s-1$, then $j\ge v-\varepsilon$ means $j\ge i$, as $i-1<i-\varepsilon<v-\varepsilon\le i$. So $a(v)=s-i+1$ and $c(v)=s-i-1$.

*Step 5: lower numbering.* As $G_0=G$, $\varphi'(x)=1/[G:G_x]$ away from the breaks, so $\psi'(w)=[G:G^w]$ and $\psi(v)=\int_0^v[G:G^w]\,dw$. By (a), $[G:G^w]$ is $p-1$ on $(0,1]$, $p^{2i-1}(p-1)$ on $(i,i+\varepsilon]$, $p^{2i}(p-1)$ on $(i+\varepsilon,i+1]$, and $p^{2s-2}(p-1)$ on $(s,s+\varepsilon]$. So $\psi(1)=p-1$, and for $1\le i\le s-1$
$$\psi(i+\varepsilon)=\psi(i)+p^{2i-1},\qquad\psi(i+1)=\psi(i+\varepsilon)+p^{2i}(p-2),$$
while $\psi(s+\varepsilon)=\psi(s)+p^{2s-2}$. Induction on $i$ gives the closed forms in (b). For instance, $(2p^{2i}+p-1)+(p+1)p^{2i}(p-2)=(p-1)(p^{2i+1}+1)$. The last upper break $s+\varepsilon$ has lower index $\psi(s+\varepsilon)$. So $G_{(\lambda)}=G_{\lambda-1}$ is trivial exactly when $\lambda>1+\psi(s+\varepsilon)$, which gives $\lambda_{N/\mathbb Q_p}$.

*Step 6: differents.* The identity of the last lower break entry, with $e=1$, reads $\lambda_{N/\mathbb Q_p}=E/(p-1)+E/p^s-d_{N/F}$. So
$$d_{N/F}=p^{2s-1}+p^{s-1}(p-1)-\frac{p^{2s}+p^{2s-2}+2p}{p+1}=p^{s-1}(p-1)-1+\frac{p^{2s-1}-p^{2s-2}-p+1}{p+1},$$
and the last fraction is $w_s$. It is an integer because $p+1$ divides $p^{2s-2}-1$. The same entry gives $d_{N/\mathbb Q_p}=d_{N/F}+e_{N/F}d_{F/\mathbb Q_p}$ with $d_{F/\mathbb Q_p}=(s+1)p^s-1$, which gives the formula for $d_{N/\mathbb Q_p}$. Finally,
$$\frac{d_{N/F}}{E}=\frac1{p^s}-\frac1{p^{2s-1}(p-1)}+\frac{p^{2s-2}-1}{p^{2s-1}(p+1)},$$
and $\frac1{p^{2s-1}(p-1)}+\frac1{p^{2s-1}(p+1)}=\frac2{p^{2s-2}(p^2-1)}$. $\square$

**Checks.** For $s=1$, (b) gives $\lambda_{N/\mathbb Q_p}=p+1$ and (c) gives $d_{N/F}=p-2=e_{N/F}-1$. This agrees with part (b) of the last lower break entry, where $N/F$ is tame.

For $p=3$ and $s=2$: $E=54$, and $|G^v|$ is $27$, $9$, $3$ on $(0,1]$, $(1,3/2]$, $(3/2,5/2]$. The positive Serre lower breaks are $2$, $5$ and $23$, so $\lambda_{N/\mathbb Q_3}=24$, $d_{N/F}=9=5+w_2$ and $d_{N/\mathbb Q_3}=165$. The arithmetic of Step 6 can be checked against the [sum of the displacements](discriminants-recover-ramification-filtrations.md). By (a) and (b), the $27$ elements outside the $3$-Sylow subgroup have $i(g)=1$. Inside it, $18$ elements have $i(g)=3$, $6$ have $i(g)=6$ and $2$ have $i(g)=24$, and $27+54+36+48=165$. This check is not independent of (a), since the identity used in Step 6 is proved from the same sum. For $p=3$ and $s=3$: $\lambda_{N/\mathbb Q_3}=204$ and $d_{N/F}=57$.

**Comparison with Viviani.** The case $a=p$, $r=s$ of [@viviani2004ramification, §6] treats this extension. Corollary 6.2 there gives total ramification [@viviani2004ramification, Corollary 6.2, p. 26]. For $s\ge2$, Corollary 6.10 lists the upper groups with the orders in (a), and their lower indices $p-1$, $(2p^{2i}+p-1)/(p+1)$, $(2p^{2s-2}+p-1)/(p+1)$ and $(p^{2s}+p^{2s-2}+p-1)/(p+1)$ agree with (b) [@viviani2004ramification, Corollary 6.10, p. 28]. Its row for $G^{i+1}$, $1\le i\le s-2$, prints the lower index $(p-1)(p^{2i}+1)/(p+1)$. This is not an integer for $p=5$, $i=1$. Integrating the orders in the same table gives $(p-1)(p^{2i+1}+1)/(p+1)$, as in (b), so the printed exponent $2i$ should be $2i+1$. Viviani states the lemmas behind his Theorem 6.5 without proof, as following the steps of his Theorem 5.8 [@viviani2004ramification, p. 27]. The proof above does not use them.

Theorem 6.13 gives the $p$-adic valuation of the discriminant as $sp^{2s-1}(p-1)+p(p^{2s}-1)/(p+1)-p(p^{2s-3}+1)/(p+1)$ [@viviani2004ramification, Theorem 6.13, p. 29]. The discriminant is the norm of the different [@sutherland2025different, Theorem 12.17, p. 6]. As $N/\mathbb Q_p$ is totally ramified, the valuation of that norm is $d_{N/\mathbb Q_p}$. Both expressions equal $sp^{2s-1}(p-1)+(p^{2s+1}-p^{2s-2}-2p)/(p+1)$, for every $s\ge1$.

**Application to Čoupek's printed route.** Fix $i\ge1$, and let $\alpha$ and $\beta$ be as in the [prismatic entry](prismatic-ramification-bound-for-mod-p-cohomology.md) for $K=\mathbb Q_p$. As $e=1$, $\alpha$ is the least integer with $p^\alpha>ip/(p-1)$. So $1\le i\le p-2$ when $\alpha=1$, and $(p-1)p^{\alpha-2}\le i<(p-1)p^{\alpha-1}$ when $\alpha\ge2$. Take $\pi=p$ and $s=\alpha$, so that $F$ and $N$ are the fields $K_\alpha$ and $N_\alpha$ of that entry, and put $\delta_\alpha=d_{N/F}/E$. With $L$ as in that entry and $M_\alpha=LN$, the printed proof bounds $\mu_{M_\alpha/\mathbb Q_p}$ by $\max\{\mu_{N/\mathbb Q_p},\varphi_{\mathrm C}(t)\}$ with $t=Ea/p^\alpha=ip^\alpha$, where $a=ip/(p-1)$ [@coupek2022crystalline, proof of Theorem 5.15(2), pp. 33–34]. Let $A(t)=\mu_{N/\mathbb Q_p}+(t-\lambda_{N/\mathbb Q_p})/E$. The last lower break entry shows that $\varphi_{\mathrm C}\le A$, with equality for $t\ge\lambda_{N/\mathbb Q_p}$, and that $A(ip^\alpha)=1+\alpha+\beta+\delta_\alpha$.

- If $ip^\alpha\le\lambda_{N/\mathbb Q_p}$, then $\varphi_{\mathrm C}(ip^\alpha)\le\mu_{N/\mathbb Q_p}=1+\alpha+\varepsilon$. So the printed route, with the exact $\varphi_{\mathrm C}$, proves the upper cutoff of the prismatic entry. Here $\beta+\delta_\alpha\le\varepsilon$, so $\max\{\beta,\varepsilon\}=\varepsilon$.
- If $ip^\alpha>\lambda_{N/\mathbb Q_p}$, then $\varphi_{\mathrm C}(ip^\alpha)=1+\alpha+\beta+\delta_\alpha>\mu_{N/\mathbb Q_p}$. So the route yields exactly $1+\alpha+\beta+\delta_\alpha$. This exceeds the stated $1+\alpha+\max\{\beta,\varepsilon\}$ by $\min\{\delta_\alpha,\beta+\delta_\alpha-\varepsilon\}>0$. The restriction argument of the prismatic entry still proves the stated cutoff.

So the outer maximum absorbs $\delta_\alpha$, that is $\beta+\delta_\alpha\le\varepsilon$, exactly when $ip^\alpha\le\lambda_{N/\mathbb Q_p}$. By (b),
$$\frac{\lambda_{N/\mathbb Q_p}}{p^\alpha}=\frac{p^\alpha+p^{\alpha-2}+2p^{1-\alpha}}{p+1}=(p-1)p^{\alpha-2}+\frac{2p^{\alpha-2}+2p^{1-\alpha}}{p+1}.$$
For $\alpha=1$ this is $1+1/p$, so only $i=1$ is absorbed. For $\alpha\ge2$, $2p^{\alpha-2}\equiv2(-1)^\alpha\pmod{p+1}$. So the fractional part of $2p^{\alpha-2}/(p+1)$ is $2/(p+1)$ for even $\alpha$ and $(p-1)/(p+1)$ for odd $\alpha$. Adding $2p^{1-\alpha}/(p+1)\le2/(p(p+1))$ keeps it below $1$. Hence the absorbed degrees with this $\alpha$ are exactly
$$(p-1)p^{\alpha-2}\le i\le(p-1)p^{\alpha-2}+\Bigl\lfloor\frac{2p^{\alpha-2}}{p+1}\Bigr\rfloor.$$
This is $1+\lfloor2p^{\alpha-2}/(p+1)\rfloor$ of the $(p-1)^2p^{\alpha-2}$ degrees with this $\alpha$. For $p=3$ the absorbed degrees begin $1$, $2$, $6$, $7$, $18,\dots,22$, and for $p=5$ they begin $1$, $4$, $20$, $21$.

Examples: for $p=3$ and $i=1$, $t=3\le\lambda=4$ and $\beta+\delta_1=1/6+1/6=1/3<1/2$. For $p=3$ and $i=3$, $\alpha=2$ and $t=27>\lambda=24$. The route yields $\beta+\delta_2=7/18+1/6=5/9$ against the stated $1/2$. For $p=5$ and $i=2$, $t=10>\lambda=6$, and the route yields $\beta+\delta_1=3/10+3/20=9/20$ against the stated $\max\{3/10,1/4\}$.
