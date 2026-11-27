---
title: Prismatic ramification bounds for mod-p cohomology
kind: theorem
summary: 'For odd p, Čoupek bounds upper ramification and the different for smooth proper mod-p cohomology over arbitrarily ramified p-adic fields, with no lattice realization assumed. The printed proof of the upper cutoff has a gap; Caruso–Liu restriction to K(π^(1/p^s)) closes it.'
tags: [local-fields, ramification, hodge-theory, galois-representations]
edges:
  - {to: ramification-filtration, label: uses}
  - {to: ramification-bounds-for-torsion-semistable-representations, label: analogous-to, note: 'Geometric torsion is treated directly, without a semistable lattice realization.'}
  - {to: wach-module-ramification-bound-for-mod-p-crystalline-representations, label: analogous-to, note: 'That theorem covers unramified bases and includes p=2.'}
---

**Setting.** Let $p>2$, let $K/\mathbb Q_p$ be finite, normalize $v_K(K^\times)=\mathbb Z$, and put $e=v_K(p)$. Let $X$ be a smooth proper $p$-adic formal scheme over $\mathcal O_K$, and $i\ge1$. Write
$$T=H^i_{\mathrm{\acute et}}(X_{\mathbb C_K},\mathbb Z/p\mathbb Z),$$
and let $L/K$ be the finite Galois extension cut out by $T$.

**Theorem (Čoupek).** Put
$$
\alpha=\left\lfloor\log_p\left(\max\left\{\frac{ip}{p-1},\frac{(i-1)e}{p-1}\right\}\right)\right\rfloor+1,
\qquad
\beta=\frac{iep/(p-1)-1}{p^\alpha}.
$$
Then $G_K^u$ acts trivially on $T$ in Serre [upper numbering](ramification-filtration.md) whenever
$$u>e\alpha+\max\left\{\beta,\frac{e}{p-1}\right\},$$
and, extending $v_K$ to $L$,
$$v_K(\mathfrak D_{L/K})<1+e\alpha+\beta$$
[@coupek2022crystalline, Theorem 1.1, p. 2; Theorem 5.15, pp. 33–34]. The source uses $G_K^{(\mu)}=G_K^{\mu-1}$ [@coupek2022crystalline, Remark 5.1, p. 28]. The different bound is proved by transitivity of differents through $K(\pi^{1/p^\alpha})$ [@coupek2022crystalline, p. 33]. The printed proof of the upper cutoff has a gap, described below; the proof given here closes it.

**Proof of the upper cutoff.** Use the numbering $G^{(\mu)}=G^{\mu-1}$ of [@coupek2022crystalline, pp. 27–28], which is also that of [@carusoliu2011ramification, §4.2, p. 17]. For a finite Galois extension $M/F$, let $\mu_{M/F}$ be the infimum of the $\mu$ with $\mathrm{Gal}(M/F)^{(\mu)}=1$. Put $s=\alpha$ and $a=iep/(p-1)$. Fix a uniformizer $\pi$ of $K$ and a root $\pi_s$ of $X^{p^s}-\pi$, and set $K_s=K(\pi_s)$, $N_s=K_s(\zeta_{p^s})$ and $L_s=LK_s$. Then $K_s/K$ is totally ramified of degree $p^s$, $N_s$ is the Galois closure of $K_s/K$, and $L_s/K_s$ is Galois.

1. *Over $K_s$.* By definition $\alpha$ exceeds the threshold $M_0$ of [@coupek2022crystalline, Theorem 5.13, p. 31]. So Fontaine's property $(P_m^{L_s/K_s})$ holds for $m=a/p^s$ [@coupek2022crystalline, Proposition 5.14, p. 32]. Proposition 5.3(1) of the source then gives $\mu_{L_s/K_s}\le e_{K_s/K}\,m=a$ [@coupek2022crystalline, Proposition 5.3, p. 28]. Hence $G_{K_s}^{(\mu)}$ fixes $L_s$ for every $\mu>a$.
2. *Restriction to $G_{K_s}$.* One has $\mu_{N_s/K}=1+es+e/(p-1)$ [@coupek2022crystalline, proof of Theorem 5.15, p. 33]. So $G_K^{(\nu)}\subseteq G_{N_s}\subseteq G_{K_s}$ for $\nu>1+es+e/(p-1)$. Caruso and Liu extend $\varphi_{F_1/F_0}$ and its inverse $\psi_{F_1/F_0}$ to finite extensions that are not Galois, and prove that $G_{F_1}^{(\mu)}=G_{F_1}\cap G_{F_0}^{(\varphi_{F_1/F_0}(\mu))}$ for all $\mu\ge0$ [@carusoliu2011ramification, Lemma 4.3.1, p. 19]. Now take $\nu>\max\{1+es+e/(p-1),\ \varphi_{K_s/K}(a)\}$. Then $G_K^{(\nu)}=G_{K_s}\cap G_K^{(\nu)}=G_{K_s}^{(\psi_{K_s/K}(\nu))}$ with $\psi_{K_s/K}(\nu)>a$. By step 1 this group fixes $L_s$, and hence $L$. This is the argument behind [@carusoliu2011ramification, (4.3.1), p. 19].
3. *The function $\varphi_{K_s/K}$.* It is concave, its last slope is $1/p^s$, and its final segment passes through $(1+ep^s/(p-1),\,1+es+e/(p-1))$. Hence $\varphi_{K_s/K}(\lambda)\le 1+es+(\lambda-1)/p^s$ for all $\lambda\ge0$ [@carusoliu2011ramification, pp. 19–20]. In particular $\varphi_{K_s/K}(a)\le 1+e\alpha+(a-1)/p^\alpha=1+e\alpha+\beta$.

So $G_K^{(\nu)}$ acts trivially on $T$ for $\nu>1+e\alpha+\max\{\beta,e/(p-1)\}$. With $u=\nu-1$, this is the stated cutoff.

**The gap in the printed proof.** That proof bounds the last lower break $\lambda_{N_s/K}$ from below by the displacement $v(\sigma\pi_s-\pi_s)$ of the single element $\pi_s$ [@coupek2022crystalline, p. 34]. Lower ramification groups are defined by the displacements of all integers, so the displacement of one element only bounds the break of $\sigma$ from above. The inequality fails already for $p=3$, $K=\mathbb Q_3$, $i=1$, where $\alpha=1$. Take $s=1$, $\pi=3$ and $r=3^{1/3}$, so that $N_1=\mathbb Q_3(r,\zeta_3)$ is totally ramified of degree $6$. Then $v_{N_1}(\zeta_3-1)=3$ and $v_{N_1}(r)=2$, so $w=(\zeta_3-1)/r$ is a uniformizer and $\mathcal O_{N_1}=\mathbb Z_3[w]$. An element $\sigma$ of order $3$ fixes $\zeta_3$ and sends $r$ to $\zeta_3^{\pm1}r$, so $\sigma w=\zeta_3^{\mp1}w$ and $v_{N_1}(\sigma w-w)=4$. Elements of order $2$ lie in no lower group of index above $1$. So $\lambda_{N_1/K}=4$ in the source's numbering, whereas the printed inequality asserts $\lambda_{N_1/K}\ge 6(1/2+1/3)=5$.

**Scope.** No restriction on $e$ or $i$, or torsion-freeness of integral cohomology, is imposed. A [semistable lattice quotient](ramification-bounds-for-torsion-semistable-representations.md) with weights in $[0,i]$ is not assumed [@coupek2022crystalline, Introduction, p. 3; Remark 5.16(1), p. 35].
