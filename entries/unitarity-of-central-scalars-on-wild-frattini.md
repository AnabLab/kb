---
title: Central scalars on wild Frattini are unitary, with cyclotomic value equal to the action on the cyclotomic line
kind: theorem
summary: 'For odd p and every p-adic field K, if a tame-trivial automorphism of G_K acts on wild Frattini modulo the cyclotomic line by a central unit z and on that line by c, then z*z = c = ω(z). So a constant scalar must be 1, and c = 1 when K contains μ_p.'
tags: [local-fields, galois-groups, pro-p-groups]
edges:
  - {to: central-scalars-in-finite-outer-conjugacy-on-wild-frattini, label: addresses, note: 'Constrains the pair (c, z) of its theorem by z*z = c = ω(z). In its Corollary 1, the group B therefore embeds through z alone, into the units with z*z = ω(z). Finite outer conjugacy itself is not decided.'}
  - {to: tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups, label: uses, note: 'Part 1, the structure of wild Frattini, for K and for tame extensions of K; the form of the Jannsen–Wingberg relator in its Setting; the involution *.'}
  - {to: local-galois-group-presentations, label: uses, note: 'The Jannsen–Wingberg presentation of G_{K''} for tame K'' containing the p-power roots of unity of the tame closure, which has even degree.'}
  - {to: finite-order-local-galois-automorphisms-detected-on-the-frattini-quotient-of-wild-inertia, label: uses, note: 'Part 2, in Corollary 1.'}
  - {to: ordinary-p-central-truncation-does-not-suffice-for-local-galois-lifting, label: analogous-to, note: 'Its corollary is the case K = Q_p(μ_{p^2}) of Corollary 1 here. Lemma 1 follows its maximal pro-p argument, applied at every tame level.'}
  - {to: automorphisms-of-demushkin-groups-modulo-q, label: analogous-to, note: 'Lemma 1 is the mod-p form, for the Jannsen–Wingberg relator, of its part 1: the multiplier of an automorphism equals its eigenvalue on the torsion line.'}
  - {to: nonconstant-central-involutions-on-wild-frattini, label: uses, note: 'Only in the remark on sharpness: its lifting lemma realizes every z with z*z = 1 and ω(z) = 1 when s = 1 and d ≥ 3.'}
  - {to: nontrivial-cyclotomic-line-actions-on-wild-frattini, label: uses, note: 'Only in the remark on sharpness: realizes nonidentity square multipliers when p is at least five, d is at least three and K does not contain the pth roots of unity.'}
  - {to: prime-to-p-abelian-subgroups-of-outer-automorphisms-of-tame-p-adic-galois-groups, label: analogous-to, note: 'For K = Q_p, its three properties of a unit (central, unitary, fixing the ω-eigenvector) are the conditions shown necessary here when c = 1.'}
---

**Setting.** Let $p$ be odd and $K/\mathbb Q_p$ finite of degree $d\ge1$. Put $G=G_K$, let $P$ be its wild inertia group, and
$$\Gamma=G/P=\mathrm{Gal}(K^{\mathrm{tr}}/K),\qquad \Lambda=\mathbb F_p[[\Gamma]],\qquad V=P/P^{(2)},$$
where $P^{(2)}=P^p[P,P]$. Let $\omega:\Lambda\to\mathbb F_p$ be the continuous ring homomorphism extending the action of $\Gamma$ on $\mu_p$, let $\mathrm{aug}:\Lambda\to\mathbb F_p$ be the augmentation, and let $*$ be the continuous anti-involution of $\Lambda$ with $\rho^*=\omega(\rho)\rho^{-1}$ for $\rho\in\Gamma$, as in [units of the tame group algebra](tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups.md). Part 1 of that theorem gives
$$V=L\oplus\bigoplus_{i=1}^d\Lambda\bar x_i,\qquad L=\mathbb F_p\bar x_0,\qquad \rho\bar x_0=\omega(\rho)\bar x_0,$$
with each $\Lambda\bar x_i$ free of rank one, for every degree $d$. Put $W=V/L$ and $e_i=\bar x_i+L$. Let $p^s=|\mu_{p^\infty}(K^{\mathrm{tr}})|$. An automorphism of $G$ is *tame-trivial* if it induces the identity on $\Gamma$; it then acts $\Lambda$-linearly on $V$.

**Lemma 0 (proved here).** For every open subgroup $\Gamma'$ of $\Gamma$, the free module $\Lambda$ has no nonzero $\Gamma'$-invariants. Hence $L=\{v\in V:\rho v=\omega(\rho)v\text{ for all }\rho\in\Gamma\}$, and $L=V^{\Gamma'}$ whenever $\Gamma'\subseteq\ker\omega$. Every tame-trivial automorphism preserves $L$.

**Theorem (proved here).** Let $\alpha$ be a tame-trivial automorphism of $G$, acting on $L$ by $c\in\mathbb F_p^\times$. Suppose that some $z\in Z(\Lambda)^\times$ satisfies $\alpha(w)=zw$ for all $w\in W$. (If some $z\in\Lambda$ has this property, $\Lambda$-linearity and freeness of $W$ force $z$ to be central.) Then
$$z^*z=c\quad\text{in }\Lambda,\qquad\qquad \omega(z)=c.$$
Consequently $\mathrm{aug}(z)=1$. No finite-order or finite-outer-conjugacy assumption is made, there is no condition on $d$, and shears $\alpha(\bar x_i)-z\bar x_i\in L$ are allowed.

**Corollary 1 (constant scalars, proved here).** If $z=\lambda\in\mathbb F_p^\times$ is constant, then $\lambda=c=1$. If moreover $\alpha$ has finite order prime to $p$, then $\alpha=1$. In particular, for no $K$ does a tame-trivial automorphism of $G_K$ act on $W$ by $-1$.

**Corollary 2 (proved here).** If $\zeta_p\in K$, then $c=1$, $\mathrm{aug}(z)=1$, and $z^*z=1$, where now $\rho^*=\rho^{-1}$.

**Corollary 3 (proved here).** Let $d\ge3$, and let $B$ be a finite subgroup of $\mathrm{Aut}(G)$ of order prime to $p$ whose elements are tame-trivial and have finitely many conjugates in $\mathrm{Out}(G)$. By [the central-scalar theorem](central-scalars-in-finite-outer-conjugacy-on-wild-frattini.md), each $\alpha\in B$ acts on $W$ by some $z_\alpha\in Z(\Lambda)^\times$ and on $L$ by some $c_\alpha$. Then $c_\alpha=\omega(z_\alpha)$, and $\alpha\mapsto z_\alpha$ embeds $B$ into the abelian group
$$U_\omega=\{z\in Z(\Lambda)^\times: z^*z=\omega(z)\}.$$

**Sharpness when $s=1$.** Let $d\ge3$ and $s=1$, so that $(\mathbb Z/p^s)[[\Gamma]]=\Lambda$ and the second term $P^{p,2,s}$ of the $p^s$-central series is $P^{(2)}$. Take $z\in Z(\Lambda)^\times$ with $z^*z=1$ and $\omega(z)=1$. The lifting lemma of [nonconstant central involutions](nonconstant-central-involutions-on-wild-frattini.md), applied with $a=z$, gives a tame-trivial automorphism that fixes $\bar x_0$ and sends each $\bar x_i$ to $z\bar x_i$. So it has $c=1$ and acts on $W$ by $z$. For $d\ge3$ and $s=1$, the central actions on $W$ with $c=1$ are therefore exactly the $z$ with $z^*z=1$ and $\omega(z)=1$. When $p\ge5$ and $\zeta_p\notin K$, [central actions moving the cyclotomic line](nontrivial-cyclotomic-line-actions-on-wild-frattini.md) realize every nonidentity square $c\in\mathbb F_p^\times$, for every $s$, by a tame-trivial automorphism of finite order dividing $p-1$. Nonsquare multipliers are not decided there; at $p=3$ there is no nonidentity square. When $s\ge2$, it is still open whether every $z$ with $z^*z=1$ and $\omega(z)=1$ lifts to a unit of $(\mathbb Z/p^s)[[\Gamma]]$ satisfying the multiplier-one lifting lemma's hypotheses.

**Proof of Lemma 0.** Let $\Lambda'=\mathbb F_p[[\Gamma']]$. Coset representatives make $\Lambda$ a free left $\Lambda'$-module of finite rank, so it suffices to show $\Lambda'^{\Gamma'}=0$. Let $\lambda\in\Lambda'$ be $\Gamma'$-invariant, and let $U$ be an open normal subgroup of $\Gamma'$. The image of $\lambda$ in $\mathbb F_p[\Gamma'/U]$ is invariant under left multiplication by $\Gamma'/U$. So it is $a_UN_U$ with $a_U\in\mathbb F_p$, where $N_U$ is the sum of all elements of $\Gamma'/U$. Let $I$ be tame inertia. Then $\Gamma'/(\Gamma'\cap I)$ is isomorphic to an open subgroup of $\Gamma/I\cong\widehat{\mathbb Z}$, hence to $\widehat{\mathbb Z}$. So $\Gamma'$ has an open normal subgroup $U_k$ with cyclic quotient of order $p^k$, for every $k$. Since $[\Gamma':UU_k]\le[\Gamma':U]$, the index $[U:U\cap U_k]=|UU_k/U_k|$ is a power of $p$ at least $p^k/[\Gamma':U]$. Fix $k$ with $p^k>[\Gamma':U]$, and put $U'=U\cap U_k$. Then $p$ divides $[U:U']$, and the projection $\mathbb F_p[\Gamma'/U']\to\mathbb F_p[\Gamma'/U]$ sends $N_{U'}$ to $[U:U']N_U=0$. Hence the image of $\lambda$ in $\mathbb F_p[\Gamma'/U]$ is the image of $a_{U'}N_{U'}$, which is $0$. As $U$ was arbitrary, $\lambda=0$.

If $\rho v=\omega(\rho)v$ for all $\rho$, write $v=l+\sum_i\lambda_i\bar x_i$. Then each $\lambda_i$ is an $\omega$-eigenvector, hence invariant under the open subgroup $\ker\omega$, so $\lambda_i=0$. Conversely $L$ consists of such vectors. If $\Gamma'\subseteq\ker\omega$, then $V^{\Gamma'}=L\oplus\bigoplus_i(\Lambda\bar x_i)^{\Gamma'}=L$. A tame-trivial automorphism is $\Lambda$-linear on $V$, so it preserves the $\omega$-eigenspace $L$. $\square$

**Proof of the theorem.**

*1. Tame levels.* Let $\Gamma'$ be an open normal subgroup of $\Gamma$ contained in $\mathrm{Gal}(K^{\mathrm{tr}}/K(\mu_{p^s}))$. Here $K(\mu_{p^s})\subseteq K^{\mathrm{tr}}$ by the definition of $s$. Such $\Gamma'$ are cofinal among open normal subgroups. Let $K'$ be the fixed field, $G'=G_{K'}$ the inverse image of $\Gamma'$ in $G$, and $\Delta=\Gamma/\Gamma'$. Then $d'=[K':\mathbb Q_p]=d|\Delta|$, and $d'$ is even because $p-1$ divides it. Since $\Gamma'\subseteq\ker\omega$, the maps $\omega$ and $*$ descend along $\Lambda\to\mathbb F_p[\Delta]$, $\lambda\mapsto\bar\lambda$, with $\delta^*=\omega(\delta)\delta^{-1}$ there. The field $K'$ has the same tame closure as $K$, so the same $p^s$, and $\mu_{p^s}\subseteq K'$.

*2. The maximal pro-$p$ quotient of $G'$.* Apply the Jannsen–Wingberg presentation to $K'$, in the form of the Setting of [units of the tame group algebra](tame-group-algebra-units-give-automorphisms-of-p-adic-galois-groups.md), from [the presentations](local-galois-group-presentations.md). It has generators $\sigma',\tau',x_0',\dots,x_{d'}'$ and relator
$$\varrho'=\big((x_0')^{\sigma'}\big)^{-1}(x_0',\tau')^{\kappa'}\,(x_1')^{p^s}\,[x_1',x_2']\cdots[x_{d'-1}',x_{d'}'],$$
with $x^y=yxy^{-1}$ and $[x,y]=xyx^{-1}y^{-1}$. Since $\Gamma'$ fixes $\mu_{p^s}\subseteq K'$, the exponents satisfy $h'\equiv\kappa'\equiv1\pmod{p^s}$.

Let $F$ be free pro-$p$ on $t,x_0,\dots,x_{d'}$, and put
$$r=(tx_0t^{-1})^{-1}x_0^{\eta}x_1^{p^s}[x_1,x_2]\cdots[x_{d'-1},x_{d'}],\qquad \eta=\kappa'\cdot\frac{h'^{\,p-1}+\cdots+h'}{p-1}\in1+p^s\mathbb Z_p.$$
Let $N$ be the closed normal subgroup generated by $r$. Then $D'=F/N$ is the maximal pro-$p$ quotient of $G'$, via $\sigma'\mapsto t$, $\tau'\mapsto1$ and $x_i'\mapsto x_i$. Indeed, $\tau'$ generates tame inertia, whose order is prime to $p$, so it dies in every pro-$p$ quotient. The $\mathbb Z_p$-component of $\pi/(p-1)$ is $1/(p-1)$, so $(x_0',\tau')^{\kappa'}$ becomes $x_0^\eta$. Conversely, $F/N$ satisfies all defining conditions with $\sigma'\mapsto t$ and $\tau'\mapsto1$. This is the argument of step 2 of [the ordinary-truncation entry](ordinary-p-central-truncation-does-not-suffice-for-local-galois-lifting.md).

As $\eta\equiv1\pmod p$, we have $r\in\Phi(F)$. So $E'=D'/\Phi(D')=F/\Phi(F)$ has a basis $y_t,y_0,\dots,y_{d'}$, the images of the generators. The image of $P$ in $E'$ is $\hat V=\langle y_0,\dots,y_{d'}\rangle$, since $P$ is the closed normal subgroup generated by the $x_i'$. Let $\chi\in(E')^\vee$ be the functional with kernel $\hat V$ and $\chi(y_t)=1$. Write $\eta-1=p^s\nu$ with $\nu\in\mathbb Z_p$, and let $f=\bar\nu y_0+y_1\in E'$. Put
$$R=-y_t\wedge y_0+\sum_{j=1}^{d'/2}y_{2j-1}\wedge y_{2j}\in{\textstyle\bigwedge^2}E'.$$

*3. Lemma 1 (proved here).* For every automorphism $\phi$ of $D'$, with induced map $\bar\phi$ on $E'$, there is $m(\phi)\in\mathbb F_p^\times$ such that
$$({\textstyle\bigwedge^2}\bar\phi)R=m(\phi)R\qquad\text{and}\qquad\bar\phi(f)=m(\phi)f.$$

*Proof.* Let $Q=E'\oplus\bigwedge^2E'$ with $(v,w)(v',w')=(v+v',w+w'+\tfrac12v\wedge v')$. This is a group of exponent $p$ and class two, with $(v,w)^n=(nv,nw)$, commutator $[(v,w),(v',w')]=(0,v\wedge v')$, and $(v,w)(v',w')(v,w)^{-1}=(v',w'+v\wedge v')$. Let $\vartheta:F\to Q$ send each generator to its basis vector with second coordinate $0$. Since $\eta\equiv1\pmod p$ and $Q$ has exponent $p$, one computes $\vartheta(r)=(0,R)$. As $(0,R)$ is central, $\vartheta(N)=\mathbb F_p(0,R)$.

In $F^{\mathrm{ab}}\cong\mathbb Z_p^{d'+2}$, with basis the images of the generators, $r$ has image $(\eta-1)y_0+p^sy_1=p^s\tilde f$, where $\tilde f=\nu y_0+y_1$. Conjugates of $r$ have the same image, so $N$ maps onto $p^s\mathbb Z_p\tilde f$. Define $a:N\to\mathbb Z_p$ by $n^{\mathrm{ab}}=p^sa(n)\tilde f$. Both $a\bmod p$ and the coefficient of $(0,R)$ in $\vartheta|_N$ are continuous homomorphisms, invariant under conjugation by $F$, taking the value $1$ at $r$. Hence they agree on $N$:
$$\vartheta(n)=\big(0,(a(n)\bmod p)R\big)\qquad(n\in N).$$

Lift $\phi$ to an endomorphism $\psi$ of $F$, which is possible as $F$ is free. Then $\psi(N)\subseteq N$, and $\psi$ induces $\bar\phi$ on $E'=F/\Phi(F)$. Put $m=a(\psi(r))\bmod p$. Abelianizing,
$$\psi(r)^{\mathrm{ab}}=(\eta-1)\psi(x_0)^{\mathrm{ab}}+p^s\psi(x_1)^{\mathrm{ab}}=p^s\psi^{\mathrm{ab}}(\tilde f),$$
because $(\psi(t)\psi(x_0)\psi(t)^{-1})^{-1}\psi(x_0)$ and the commutators abelianize to $0$. Since $F^{\mathrm{ab}}$ is torsion-free, $\psi^{\mathrm{ab}}(\tilde f)=a(\psi(r))\tilde f$. Reducing modulo $p$ gives $\bar\phi(f)=mf$. Next, write $\vartheta(\psi(x))=(\bar\phi(y_x),w_x)$ for each generator $x$. The displayed identities in $Q$ give
$$\vartheta(\psi(r))=\big(0,-\bar\phi(y_t)\wedge\bar\phi(y_0)+\textstyle\sum_j\bar\phi(y_{2j-1})\wedge\bar\phi(y_{2j})\big)=\big(0,({\textstyle\bigwedge^2}\bar\phi)R\big).$$
The $p^s$-th power dies, and the $\eta$-th power of an element of $Q$ is that element. Comparing with $\vartheta(\psi(r))=(0,mR)$ gives $(\bigwedge^2\bar\phi)R=mR$. Finally $m\ne0$, because $\bar\phi$ is invertible and $f\ne0$. $\square$

*4. Two families of automorphisms of $D'$.* Let $\alpha'$ be the restriction of $\alpha$ to $G'$. It preserves $G'$, since $\alpha$ is the identity on $\Gamma$. For $g\in G$, let $c_g$ be conjugation by $g$ on $G'$, which is normal in $G$. Both induce automorphisms of the characteristic quotient $D'$. Both preserve $P$, so their induced maps preserve $\hat V$.

Both also fix $\chi$. The quotient $E'/\hat V$ is the Frattini quotient of the maximal pro-$p$ quotient of $\Gamma'$, which is a quotient of $\Gamma'/(\Gamma'\cap I)$. On $\Gamma$, $\alpha'$ induces the identity. Conjugation by $g$ acts trivially on $\Gamma'/(\Gamma'\cap I)\subseteq\Gamma/I$, which is abelian. So $\chi\circ\bar\phi=\chi$ for $\phi\in\{\alpha',c_g\}$.

For such $\phi$, Lemma 1 and the identity $\iota_\chi\big((\bigwedge^2A)R\big)=A\,\iota_{\chi\circ A}(R)$ give
$$m(\phi)\,\iota_\chi(R)=\bar\phi\big(\iota_\chi(R)\big),\qquad \iota_\chi(R)=-y_0.$$
Here $\iota_\chi(u\wedge v)=\chi(u)v-\chi(v)u$. So $\bar\phi(y_0)=m(\phi)y_0$.

*5. Comparison with $V$.* The surjection $V\to\hat V$ factors through the coinvariants $V_{\Gamma'}$, because $\Gamma'$ acts by conjugation inside $G'$. The space $V_{\Gamma'}=L\oplus\bigoplus_i\mathbb F_p[\Delta]\bar x_i$ has dimension $1+d|\Delta|=1+d'=\dim\hat V$, so $V_{\Gamma'}\to\hat V$ is an isomorphism. Here $L$ survives, since $\Gamma'$ acts trivially on it. By part 1 of the tame-group-algebra theorem for $K'$, $\Gamma'$ acts on $\bar x_0'$ through $\omega|_{\Gamma'}=1$. So $\bar x_0'\in V^{\Gamma'}=L$ by Lemma 0. As $\bar x_0'\ne0$, $L=\mathbb F_p\bar x_0'$, and the image of $L$ in $E'$ is $\mathbb F_py_0$. Hence
$$\hat W:=\hat V/\mathbb F_py_0\;\cong\;W_{\Gamma'}=\bigoplus_{i=1}^d\mathbb F_p[\Delta]e_i,$$
a free $\mathbb F_p[\Delta]$-module of rank $d$. Under this isomorphism, $\alpha'$ acts on $\mathbb F_py_0$ by $c$ and on $\hat W$ by multiplication by $\bar z$. The map $c_g$ acts on $\hat V\cong V_{\Gamma'}$ through the module action of $\bar g\in\Delta$. So it acts on $\mathbb F_py_0$ by $\omega(g)$ and on $\hat W$ by $\bar g$. By step 4,
$$m(\alpha')=c,\qquad m(c_g)=\omega(g).$$

*6. Proof that $z^*z=c$.* The image $\tilde R$ of $R$ in $\bigwedge^2(E'/\mathbb F_py_0)$ is $\sum_j\tilde y_{2j-1}\wedge\tilde y_{2j}$, where $\tilde y_i$ is the class of $y_i$. It lies in $\bigwedge^2\hat W$, and it is nondegenerate, as $\tilde y_1,\dots,\tilde y_{d'}$ is a basis of $\hat W$. Each $\phi\in\{\alpha',c_g\}$ preserves $\mathbb F_py_0$ and $\hat V$, so Lemma 1 gives $(\bigwedge^2\phi_{\hat W})\tilde R=m(\phi)\tilde R$, where $\phi_{\hat W}$ is the induced map. Write $\tilde R=\sum_{a<b}M_{ab}\tilde y_a\wedge\tilde y_b$, with $M$ alternating and invertible. For a matrix $A$ in this basis, $(\bigwedge^2A)\tilde R$ has coefficient matrix $AMA^{\mathsf T}$, by the computation of identity (2) in [automorphisms of Demushkin groups modulo $q$](automorphisms-of-demushkin-groups-modulo-q.md), which works for any alternating $M$. So $AMA^{\mathsf T}=m(\phi)M$. Inverting gives $A^{\mathsf T}M^{-1}A=m(\phi)M^{-1}$. Thus the nondegenerate alternating form $b(x,y)=x^{\mathsf T}M^{-1}y$ on $\hat W$ satisfies
$$b(\bar gx,\bar gy)=\omega(g)\,b(x,y),\qquad b(\bar zx,\bar zy)=c\,b(x,y).$$
The first identity gives $b(\delta x,y)=\omega(\delta)b(x,\delta^{-1}y)=b(x,\delta^*y)$ for $\delta\in\Delta$. By linearity, $b(\lambda x,y)=b(x,\lambda^*y)$ for every $\lambda\in\mathbb F_p[\Delta]$. Hence $b(x,\bar z^*\bar zy)=b(\bar zx,\bar zy)=c\,b(x,y)$ for all $x,y$. By nondegeneracy, $\bar z^*\bar z-c$ kills $\hat W$. As $\hat W$ is free of positive rank over $\mathbb F_p[\Delta]$, $\overline{z^*z}=\bar z^*\bar z=c$ in $\mathbb F_p[\Delta]$. This holds for a cofinal family of $\Gamma'$, and $\Lambda=\varprojlim\mathbb F_p[\Gamma/\Gamma']$, so $z^*z=c$.

*7. Proof that $\omega(z)=c$.* Let $u\in\hat W$ be the class of $f=\bar\nu y_0+y_1$, namely $u=\tilde y_1\ne0$. By Lemma 1 and step 5,
$$\bar gu=\omega(g)u\quad(g\in G),\qquad \bar zu=cu.$$
By linearity, the first gives $\lambda u=\omega(\lambda)u$ for every $\lambda\in\mathbb F_p[\Delta]$. With $\lambda=\bar z$ this gives $\omega(z)u=cu$, so $\omega(z)=c$.

*8. The augmentation.* On group elements $\omega(\rho^*)=\omega(\rho)\omega(\rho)^{-1}=1=\mathrm{aug}(\rho)$, so $\omega\circ*=\mathrm{aug}$ by linearity and continuity. Applying $\omega$ to $z^*z=c$ gives $\mathrm{aug}(z)\,\omega(z)=c$. With $\omega(z)=c$, this gives $\mathrm{aug}(z)=1$. $\square$

**Proof of Corollary 1.** For a constant, $\lambda^*=\lambda$ and $\omega(\lambda)=\lambda$. The theorem gives $\lambda^2=c$ and $\lambda=c$, so $\lambda=c=1$. Then $D=\alpha-1$ on $V$ has image in $L$ and kills $L$, so $D^2=0$. If the order $n$ of $\alpha$ is prime to $p$, then $1=(1+D)^n=1+nD$, so $D=0$. Part 2 of [finite-order detection](finite-order-local-galois-automorphisms-detected-on-the-frattini-quotient-of-wild-inertia.md) gives $\alpha=1$. $\square$

**Proof of Corollary 2.** If $\zeta_p\in K$, then $\omega$ is trivial on $\Gamma$, so $\omega=\mathrm{aug}$. The theorem gives $c=\omega(z)=\mathrm{aug}(z)=1$, and $\rho^*=\rho^{-1}$. $\square$

**Proof of Corollary 3.** The theorem gives $c_\alpha=\omega(z_\alpha)$ and $z_\alpha^*z_\alpha=c_\alpha$, so $z_\alpha\in U_\omega$. Corollary 1 of the central-scalar entry says that $\alpha\mapsto(c_\alpha,z_\alpha)$ is injective on $B$, and $c_\alpha$ is determined by $z_\alpha$. The set $U_\omega$ is a group, by centrality: $(zz')^*(zz')=z'^*(z^*z)z'=\omega(z)\omega(z')$, and $(z^{-1})^*z^{-1}=(z^*z)^{-1}=\omega(z^{-1})$. $\square$

**Scope and checks.**

- *Consistency with known examples.* The unit $z_m=2\varepsilon_m-1$ of [nonconstant central involutions](nonconstant-central-involutions-on-wild-frattini.md) has $z_m^*=z_m$, $z_m^2=1$ and $\omega(z_m)=1$, with $c=1$. For $K=\mathbb Q_p$, the units of [the prime-to-$p$ construction](prime-to-p-abelian-subgroups-of-outer-automorphisms-of-tame-p-adic-galois-groups.md) are central and unitary, and fix the $\omega$-eigenvector at each level, so $\omega(u)=1$. The excluded value $z=-1$ agrees with the counterexample for $\mathbb Q_p(\mu_{p^2})$: there the quotient involution with $z=-1$ has no lift.
- *What is used.* The proof uses only $\Gamma$-equivariance, the Jannsen–Wingberg relator at the tame levels containing $\mu_{p^s}$, and the class-two exponent-$p$ quotient of their maximal pro-$p$ quotients. The condition $\mu_{p^s}\subseteq K'$ is used in step 7: it puts the torsion line $\mathbb F_pf$ outside $\mathbb F_py_0$. Step 6 needs only $\zeta_p\in K'$. The result says nothing about finite outer conjugacy, which remains the open part of the question in [the central-scalar entry](central-scalars-in-finite-outer-conjugacy-on-wild-frattini.md). It concerns only the action on $P/P^{(2)}$, not on deeper quotients.
- *Not covered.* The case $p=2$ is not treated. Nor are automorphisms whose action on $W$ is not a central scalar.
- *Sources.* The statement and proof are not taken from a source. The presentation and the structure of $V$ are used through the linked entries on main, and their underlying sources were not reopened here. No novelty is claimed.
