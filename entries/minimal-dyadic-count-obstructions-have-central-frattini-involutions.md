---
title: Minimal dyadic count obstructions have central Frattini involutions
kind: theorem
summary: 'In a smallest finite marked-count obstruction to lifting a dyadic tame automorphism, every minimal normal 2-subgroup is a central involution in the Frattini subgroup. Counting complements removes nontrivial irreducible wild kernels without a Frattini hypothesis.'
tags: [local-fields, galois-groups, galois-cohomology, embedding-problems]
edges:
  - {to: finite-quotient-criterion-for-frobenius-shift-lifting, label: uses, note: 'Failure of lifting has a finite marked-count witness, whose target order can be minimized.'}
  - {to: noncentral-frattini-layers-in-dyadic-lift-counts, label: motivated-by, note: 'For irreducible nontrivial kernels, subtracting complements removes its Frattini hypothesis; reducible zero-coinvariant kernels are not treated here.'}
  - {to: local-tate-duality, label: uses, note: 'Duality and the Euler characteristic count all lifts before the nonsurjective ones are subtracted.'}
  - {to: frobenius-shift-lifting-problem, label: addresses, note: 'Restricts the structure of a smallest finite obstruction; no obstruction or full lift is constructed.'}
---

**Setting.** Let $k/\mathbb Q_2$ have degree $d$, let $G=G_k$, and let $\pi:G\twoheadrightarrow\Gamma$ be the tame quotient. All homomorphisms are continuous. For finite epimorphisms $q:\Gamma\twoheadrightarrow D$ and $a:H\twoheadrightarrow D$, put
$$
N_k(H,a;q)=\#\{F:G\twoheadrightarrow H:aF=q\pi\}.
$$
These are the [marked surjection counts](finite-quotient-criterion-for-frobenius-shift-lifting.md), counting actual maps, including conjugate ones. Write $O_2(H)$ for the largest normal $2$-subgroup of $H$ and $\Phi(H)$ for the intersection of its maximal proper subgroups.

**Theorem (proved here).** Fix $\alpha\in\operatorname{Aut}(\Gamma)$. If $\alpha$ does not lift to $G$, choose a witness
$$
N_k(H,a;q)\ne N_k(H,a;q\alpha)
\tag{1}
$$
with $|H|$ as small as possible, allowing all $D,a,q$. Then $O_2(H)\ne1$, and every nontrivial normal subgroup $W\triangleleft H$ contained in $O_2(H)$ that is minimal among nontrivial normal subgroups of $H$ satisfies
$$
W\cong C_2,\qquad W\subseteq Z(H)\cap\Phi(H).
\tag{2}
$$
In particular, a smallest witness has a central involution and a nonsplit central extension $1\to C_2\to H\to H/C_2\to1$.

**Proof.** The finite-quotient criterion supplies a witness if lifting fails. If $O_2(H)=1$, every epimorphism $G\twoheadrightarrow H$ kills wild inertia, since its image is a normal $2$-subgroup. Such maps factor through $\Gamma$, where precomposition with $\alpha$ bijects the two marked solution sets. Thus (1) forces $O_2(H)\ne1$.

Choose $W$ as in the statement. The subgroup of elements of order dividing two in the centre of the nontrivial finite $2$-group $W$ is nontrivial and characteristic in $W$, hence normal in $H$. Minimality makes it all of $W$. Thus $W$ is elementary abelian and irreducible as an $\mathbb F_2[H]$-module. Put $Q=H/W$ and let $\rho:H\to Q$ be projection. The action on $W$ factors through $Q$.

*1. Nontrivial irreducible actions.* Suppose this action is nontrivial. Irreducibility gives $W_Q=0$. For each epimorphism $f:G\twoheadrightarrow Q$, give $W$ the action through $f$. Its Tate dual has no invariants, since $\mu_2\subset k$ and
$$
(W^\vee)^G=\operatorname{Hom}_{\mathbb F_2}(W_Q,\mathbb F_2)=0.
$$
Consequently $H^2(k,W)=0$ by local duality [@milne2006adt, I, Corollary 2.3, p. 28]. The extension class of $H$ pulls back to zero, so $f$ has a lift to $H$. After fixing one lift, all lifts are parametrized by $Z^1(k,W)$. Indeed, a set-theoretic section of $\rho$ gives a factor set; correcting its pullback by a continuous cochain makes a lift, and the difference of two corrections is a cocycle.

The Euler characteristic and the formula $|B^1(k,W)|=|W|/|H^0(k,W)|$ give
$$
|Z^1(k,W)|=|W|^{d+1}
\tag{3}
$$
[@milne2006adt, I, Theorem 2.8, p. 31]. This counts all lifts, before imposing surjectivity.

Let $J$ be the image of a lift. Then $JW=H$, and $J\cap W$ is normalized by both $J$ and $W$, since $W$ is abelian. It is therefore normal in $H$, so minimality gives $J\cap W=1$ or $W$. A nonsurjective lift has image exactly a complement to $W$. Conversely, each complement supplies exactly one lift of $f$, by inverting its isomorphism to $Q$. If $c(H,W)$ is the number of complements, every $f$ has exactly
$$
|W|^{d+1}-c(H,W)
\tag{4}
$$
surjective lifts. If the extension is nonsplit then $c(H,W)=0$; if a section is fixed then its complements are the graphs of $Z^1(Q,W)$, so $c(H,W)=|Z^1(Q,W)|$.

Every tame marking $a$ kills $W$. To see this, let $C\triangleleft D$ be the odd cyclic image of tame inertia, with $D/C$ cyclic. The normal elementary-abelian $2$-group $a(W)$ intersects $C$ trivially, and
$$
[D,a(W)]\subseteq C\cap a(W)=1.
$$
Also $a(W)$ injects into $D/C$, so it is trivial or central of order two. The second possibility would give a nonzero trivial quotient of $W$, contradicting $W_Q=0$. Thus $a=\bar a\rho$, and (4) yields
$$
N_k(H,a;q)=\bigl(|W|^{d+1}-c(H,W)\bigr)N_k(Q,\bar a;q).
\tag{5}
$$
The same multiplier works for $q\alpha$. Since $|Q|<|H|$, minimality of the witness rules out (1). No positivity of the multiplier is assumed: if it is zero, both counts vanish.

*2. A complemented central involution killed by the marking.* The only remaining irreducible action is trivial, so $W=C_2\subseteq Z(H)$. If $W\not\subseteq\Phi(H)$, a maximal subgroup missing $W$ is a complement, and $H=W\times Q$. Fix the corresponding section $s:Q\to H$. Suppose first that $a(W)=1$, and set $a_0=as$. Above each epimorphism $f:G\twoheadrightarrow Q$, lifts are pairs $(\chi,f)$ with $\chi:G\to C_2$. Duality and the Euler characteristic give
$$
|\operatorname{Hom}(G,C_2)|=2^{d+2}.
$$
A lift is nonsurjective exactly when $\chi=\lambda f$ for some $\lambda:Q\to C_2$. These lifts are distinct because $f$ is surjective. Hence
$$
N_k(H,a;q)=\bigl(2^{d+2}-|\operatorname{Hom}(Q,C_2)|\bigr)N_k(Q,a_0;q).
\tag{6}
$$
Once again smaller-target count invariance contradicts (1).

*3. A complemented central involution detected by the marking.* It remains to treat $H=W\times Q$ with $a(W)\ne1$; here the marking does not descend to $Q$. Put $R=a(W)$ and $j=a|_W:W\xrightarrow{\sim}R$. The group $R$ is central of order two in $D$. Let $b:D\to D/R$ be projection, $a_0=as$, $\bar a=ba_0$ and $\bar q=bq$. Both $\bar a$ and $\bar q$ are epimorphisms.

For each epimorphism $f:G\twoheadrightarrow Q$ with $\bar a f=\bar q\pi$, there is exactly one homomorphism $F:G\to W\times Q$ above $f$ with $aF=q\pi$. Its first coordinate $\chi$ is determined by
$$
j\chi(g)=q\pi(g)\bigl(a_0 f(g)\bigr)^{-1}\in R.
$$
The right side is a continuous homomorphism because it is the central difference of two homomorphisms. Such an $F$ is nonsurjective exactly when $\chi=\lambda f$ for some $\lambda\in\operatorname{Hom}(Q,W)$. Define
$$
a_\lambda(x)=j\lambda(x)a_0(x):Q\longrightarrow D.
$$
The complement given by $\lambda$ contributes precisely the epimorphisms counted by $N_k(Q,a_\lambda;q)$; if $a_\lambda$ is not surjective it contributes none. Distinct complements give disjoint sets of maps. Therefore
$$
N_k(H,a;q)=N_k(Q,\bar a;\bar q)
-\sum_{\substack{\lambda\in\operatorname{Hom}(Q,W)\\a_\lambda\text{ surjective}}}N_k(Q,a_\lambda;q).
\tag{7}
$$
Every target on the right has smaller order. Replacing $q$ by $q\alpha$ also replaces $\bar q$ by $\bar q\alpha$, so minimality makes every term invariant and contradicts (1).

Thus $W$ is central of order two and cannot have a complement. For this $W$, being outside $\Phi(H)$ would provide a complement as in step 2. Hence $W\subseteq\Phi(H)$, proving (2). $\square$

**Checks and scope.** Formula (4) removes a Frattini hypothesis only for irreducible nontrivial modules. For example, for $H=A_4$, its normal $W=C_2^2$ has four complements, the point stabilizers in its action on four letters. Above any fixed cyclic cubic quotient map, (4) gives $4^{d+1}-4$ epimorphisms, whereas the count of all lifts is $4^{d+1}$. At $d=1$ these are twelve and sixteen. For $H=W=C_2$ and $Q=1$, (6) gives $2^{d+2}-1$ for the trivial marking; (7) gives one for a prescribed nontrivial marking. These check both marking cases and the subtraction of proper images.

The theorem concerns a target of smallest order among all unequal-count witnesses for the fixed $k,\alpha$. It does not say that every witness has a central involution, or that a central Frattini involution suffices to obstruct lifting. It gives no full lift and leaves the Frobenius-shift problem open.
