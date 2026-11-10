---
title: An affine-group count detects the cyclotomic obstruction to tame lifting
kind: theorem
summary: 'For odd p and a p-adic field without the pth roots of unity, one affine target detects exactly which tame automorphisms preserve the mod-p cyclotomic character. Over Q3, the Frobenius shift changes the S3 marked surjection count from 24 to 6.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: local-tate-duality, label: uses, note: 'Duality and the Euler characteristic compute the scalar-character cohomology.'}
  - {to: tame-automorphisms-lift-to-the-absolute-galois-group-for-odd-p, label: uses, note: 'Its lifting criterion identifies preservation of this one count with full tame lifting for odd p.'}
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: motivated-by, note: 'Gives an explicit finite test for the cyclotomic obstruction, including an S3 witness over Q3.'}
---

**Setting.** Let $p$ be odd, let $k/\mathbb Q_p$ have degree $d$, and suppose $\mu_p\not\subset k$. Write $\pi:G_k\twoheadrightarrow\Gamma$ for the tame quotient. The mod-$p$ cyclotomic character factors through it, because $[k(\mu_p):k]$ divides $p-1$. Denote this character by $\bar\chi:\Gamma\twoheadrightarrow C$, where
$$
1\ne C=\operatorname{im}\bar\chi\subseteq\mathbb F_p^\times.
$$
Put $H=\mathbb F_p\rtimes C$, with multiplication $(x,c)(y,t)=(x+cy,ct)$, and let $r:H\twoheadrightarrow C$ be projection. For a continuous epimorphism $\eta:G_k\twoheadrightarrow C$, count actual maps by
$$
e_r(\eta)=\#\{F:G_k\twoheadrightarrow H\text{ continuous}:rF=\eta\}.
$$

**Theorem (proved here).** One has
$$
e_r(\eta)=p\bigl(p^{d+\delta(\eta)}-1\bigr),\qquad
\delta(\eta)=
\begin{cases}
1&\text{if }\eta=\bar\chi\pi,\\
0&\text{otherwise}.
\end{cases}
\tag{1}
$$
Consequently, for every $\beta\in\operatorname{Aut}(\Gamma)$,
$$
e_r(\bar\chi\pi)=e_r(\bar\chi\beta\pi)
\quad\Longleftrightarrow\quad
\bar\chi\beta=\bar\chi.
\tag{2}
$$
Thus this single marked count detects exactly the obstruction in the [odd-$p$ lifting criterion](tame-automorphisms-lift-to-the-absolute-galois-group-for-odd-p.md): equality in (2) is equivalent to $\beta$ lifting to $G_k$. The target has order $p[k(\mu_p):k]\le p(p-1)$.

**Proof of (1).** Let $M=\mathbb F_p(\eta)$, the additive group of $\mathbb F_p$ with $g$ acting by multiplication by $\eta(g)$. A homomorphism above $\eta$ is uniquely of the form $F(g)=(b(g),\eta(g))$, where $b\in Z^1(k,M)$.

Since $C\ne1$ and $\eta$ is onto, $M^{G_k}=0$. The Tate dual $M^D=\operatorname{Hom}(M,\mu_p)$ has character $(\bar\chi\pi)\eta^{-1}$. It therefore has $p$ invariant elements when $\eta=\bar\chi\pi$, and just one otherwise. Local duality gives
$$
|H^2(k,M)|=p^{\delta(\eta)}
$$
[@milne2006adt, I, Corollary 2.3, p. 28]. The Euler characteristic then gives
$$
|H^1(k,M)|=p^{d+\delta(\eta)}
$$
[@milne2006adt, I, Theorem 2.8, p. 31]. There are $p$ coboundaries, since $M^{G_k}=0$, so $|Z^1(k,M)|=p^{d+\delta(\eta)+1}$.

It remains to count the nonsurjective maps. If $J=F(G_k)$, then $J\to C$ is onto and $J\cap\mathbb F_p$ is either $0$ or $\mathbb F_p$. In the latter case $J=H$. In the former case $b$ vanishes on $\ker\eta$, hence factors through a cocycle $C\to\mathbb F_p$. Conversely every such cocycle gives a map with image of order $|C|$.

Every cocycle $z:C\to\mathbb F_p$ is a coboundary: summing $z(ct)=z(c)+cz(t)$ over $t\in C$, and putting $v=|C|^{-1}\sum_{t\in C}z(t)$, gives $z(c)=v-cv$. There are exactly $p$ such cocycles, because the scalar action is nontrivial. Subtracting these $p$ nonsurjective maps proves (1). Equation (2) follows because $\pi$ is onto and $p(p^{d+1}-1)\ne p(p^d-1)$. The equivalence with full lifting uses the cited KB lifting criterion. $\square$

**The Frobenius shift over $\mathbb Q_3$ (proved here).** Take $k=\mathbb Q_3$ and tame generators $\sigma,\tau$ with $\sigma\tau\sigma^{-1}=\tau^3$. Let $\beta(\sigma)=\sigma\tau$, $\beta(\tau)=\tau$. The polynomial
$$
\Phi_3(1+X)=X^2+3X+3
$$
is Eisenstein, so $\mathbb Q_3(\mu_3)/\mathbb Q_3$ is totally ramified quadratic. Hence $C=\{\pm1\}$ and $\bar\chi(\tau)=-1$, giving $\bar\chi\beta\ne\bar\chi$. The faithful affine action on the three elements of $\mathbb F_3$ identifies $H$ with $S_3$, and (1) gives
$$
e_r(\bar\chi\pi)=3(3^2-1)=24,\qquad
e_r(\bar\chi\beta\pi)=3(3-1)=6.
$$
Both embedding problems are solvable; their unequal numbers of actual surjections prevent a lift of $\beta$.

**Checks and scope.** The factor $p$ counts cocycle representatives, and no maps are identified under conjugacy. The subtraction of $p$ removes all complements, including the split map. If $\mu_p\subset k$, the group $C$ is trivial and the nontrivial-action proof does not apply; every tame automorphism already preserves the mod-$p$ character. In particular this construction gives no obstruction at $p=2$ and does not answer the [dyadic Frobenius-shift question](frobenius-shift-lifting-problem.md).
