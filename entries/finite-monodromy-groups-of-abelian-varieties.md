---
title: Which finite groups are finite monodromy groups of abelian varieties
kind: theorem
summary: 'A finite group is the finite monodromy group of a g-dimensional abelian variety at a place over p iff it is a Galois group over the maximal unramified extension of a p-adic field and embeds in Aut of a g-dimensional polarized semi-abelian variety over a finite field. The converse is a preprint.'
tags: [abelian-varieties, number-fields, local-fields, ramification, galois-groups]
edges:
  - {to: finite-torsion-recovers-semistable-inertia, label: uses, note: 'Uses its definition of J_A and of the finite monodromy group; Silverberg–Zarhin identify this group with the Galois group of the smallest semistabilizing extension of the maximal unramified extension.'}
---

**Setting.** Let $K$ be a number field, $v$ a finite place of $K$ of residue characteristic $p$, and $A/K$ an abelian variety of dimension $g\ge1$. Let $J_{A,v}\subseteq I_{K_v}$ be the open normal subgroup of inertia elements acting unipotently on $V_\ell A$ for a prime $\ell\ne p$, and $\Phi_{A,v}=I_{K_v}/J_{A,v}$ the [finite monodromy group](finite-torsion-recovers-semistable-inertia.md). Silverberg and Zarhin show that $A$ acquires semistable reduction over a finite extension exactly when that extension's inertia group lies in $J_{A,v}$. They also show that their definition of $J_{A,v}$ agrees with Grothendieck's [@silverbergzarhin1998inertia, §4 and Theorem 4.2(ii)–(iii), p. 5]. So $J_{A,v}$ cuts out the smallest Galois extension $L$ of $K_v^{\mathrm{nr}}$ over which $A$ has semistable reduction [@silverbergzarhin1998inertia, Introduction, p. 1], and
$$\Phi_{A,v}=\operatorname{Gal}(L/K_v^{\mathrm{nr}}).$$
This is Philip's definition of the finite monodromy group [@philip2024monodromy, Définition 1.3, p. 2].

**Polarized semi-abelian varieties.** These are Philip's definitions [@philip2024monodromy, Définitions 1.4–1.5, p. 3]. A semi-abelian variety $A_0$ over a finite field $k$ is an extension
$$0\to T_0\to A_0\to B_0\to0$$
of an abelian variety $B_0$ by a torus $T_0$. A *polarization* of $A_0$ is a morphism $\lambda_0$ from $A_0$ to a semi-abelian variety $A_0^t$, an extension of $B_0^\vee$ by a torus $T_0^t$, compatible with the two extensions. It is required to restrict to an isogeny $\lambda_{T_0}:T_0\to T_0^t$ and to induce a polarization $\lambda_{B_0}$ of $B_0$. The group $\operatorname{Aut}(A_0,\lambda_0)$ consists of the automorphisms of $A_0$ subject to two conditions:

- the induced automorphism $\beta$ of $B_0$ satisfies $\beta^\vee\lambda_{B_0}\beta=\lambda_{B_0}$;
- the induced automorphism $\alpha$ of $T_0$ satisfies $\lambda_{T_0}\alpha=\alpha'\lambda_{T_0}$ for some automorphism $\alpha'$ of $T_0^t$.

**Theorem (Philip).** Let $p$ be a prime, $g\ge1$, and $G$ a finite group. The following are equivalent [@philip2024monodromy, Théorème 1.1, p. 2].

- There are a number field $K$, a finite place $v$ of $K$ of residue characteristic $p$, and an abelian variety $A/K$ of dimension $g$ with $\Phi_{A,v}\simeq G$.
- Both of the following hold:
  1. $G\simeq\operatorname{Gal}(M/F^{\mathrm{nr}})$ for some finite extension $F$ of $\mathbb Q_p$ and some finite Galois extension $M$ of its maximal unramified extension $F^{\mathrm{nr}}$;
  2. $G$ embeds in $\operatorname{Aut}(A_0,\lambda_0)$ for some polarized semi-abelian variety $(A_0,\lambda_0)$ of dimension $g$ over a finite field of characteristic $p$.

**Status.** Philip says that the necessity of conditions 1 and 2 is well known and is used in works of Serre–Tate and of Silverberg–Zarhin [@philip2024monodromy, §1.1.1, p. 2; Proposition 1.6, p. 3]. Their sufficiency is the main result of a preprint, available only as arXiv v1, dated 17 December 2024. Its proof has not been checked here. This entry relies only on the statements and proof outlines cited below.

**Why the conditions are necessary.** Condition 1 holds for $\Phi_{A,v}=\operatorname{Gal}(L/K_v^{\mathrm{nr}})$, by the Setting. Moreover $\Phi_{A,v}$ has a unique Sylow $p$-subgroup, and the quotient by it is cyclic of order prime to $p$ [@silverbergzarhin1998inertia, Remark 5.1, p. 6].

For condition 2, Philip argues as follows [@philip2024monodromy, §1.1.2, pp. 2–3]. Choose a polarization $\lambda$ of $A$. The base change $A_L$ has a canonical descent datum indexed by $\Phi_{A,v}$, which commutes with $\lambda_L$. By the Néron mapping property this datum and $\lambda_L$ extend to the Néron models of $A_L$ and its dual. Since $L/K_v^{\mathrm{nr}}$ is totally ramified, passing to special fibres gives a faithful action of $\Phi_{A,v}$ on the identity component $A_0$ of the special fibre. This $A_0$ is a semi-abelian variety of dimension $g$, and the action is compatible with the reduction $\lambda_0$ of $\lambda_L$. The action also respects the extension $0\to T_0\to A_0\to B_0\to0$, and Philip records an injection of $\Phi_{A,v}$ into the product of the groups of automorphisms of $T_0$ and of $B_0$ that satisfy the two conditions above. So the faithful action embeds $\Phi_{A,v}$ in $\operatorname{Aut}(A_0,\lambda_0)$, which is Philip's Proposition 1.6, stated there over a finite field.

Silverberg and Zarhin prove the faithfulness in the following form. First, $\Phi_{A,v}$ acts faithfully on the $\ell$-adic Tate module of the special fibre over $L$ [@silverbergzarhin1998inertia, Proposition 4.3(ii), p. 6; proof of Theorem 5.3, p. 9]. Second, $\Phi_{A,v}$ acts on a quotient torus $\mathbf T$ of the toric part and on a quotient abelian variety $\mathbf B$ of the abelian part [@silverbergzarhin1998inertia, §5, pp. 6–7]. Let $\delta$ be a $\Phi_{A,v}$-invariant polarization of $\mathbf B$, and $\ell\ne p$ a prime not dividing $\deg\delta$. Then these actions give an injection [@silverbergzarhin1998inertia, Theorem 5.3, p. 9]
$$\Phi_{A,v}\hookrightarrow\operatorname{Aut}(\mathbf T)\times\operatorname{Aut}(\mathbf B,\delta).$$

**The converse in the preprint.** The local form is Théorème 3.10 [@philip2024monodromy, Théorème 3.10, pp. 28–29]. Suppose that $G$ satisfies condition 1 and embeds in $\operatorname{Aut}(A_0,\lambda_0)$ for a polarized semi-abelian variety over a finite field $k$. Then some abelian variety $B$ of dimension $\dim A_0$ over a finite extension of $\mathbb Q_p$ has finite monodromy group $G$. Over the semistabilizing extension, the reduction of $B$ is geometrically isogenous to $A_0$. If $\lambda_0$ has degree $m$, then $B$ has a polarization of degree $mp^n$ for some $n\ge0$.

According to its outline, the proof lifts $(A_0,\lambda_0,G)$ by deformation [@philip2024monodromy, §1.1.3–1.1.4, p. 4]. It proceeds in four steps.

1. Bertapelle–Mazzari's extension of Serre–Tate theory to semi-abelian varieties reduces the deformation problem to $p$-divisible groups.
2. Through Breuil–Kisin modules, the lift becomes a choice of admissible filtration on a $\varphi$-module. This filtration must be compatible with $\lambda_0$ and with a Galois descent datum, and its existence occupies §2.
3. Faltings–Chai degeneration produces a polarized abelian variety with a descent datum [@philip2024monodromy, Proposition 3.8 and proof, pp. 26–27].
4. A descent criterion identifies the finite monodromy group of the descended variety with $G$ [@philip2024monodromy, Théorème 3.9, p. 28].

The passage to a number field is Corollaire 3.11, which gives a place with residue field $k$. Its proof in v1 is a single sentence, invoking an adaptation of Theorem 4.3 of Philip's 2022 paper [@philip2024monodromy, Corollaire 3.11 and proof, p. 29].

**Relation to the degree bound.** Silverberg and Zarhin show that $|\Phi_{A,v}|$ divides $J(2g)$ [@silverbergzarhin1998inertia, Corollary 6.3 and the definition of $J$, p. 11]. Here
$$J(n)=\prod_q q^{s(n,q)},\qquad s(n,q)=\sum_{j\ge0}\left\lfloor\frac{n}{q^j(q-1)}\right\rfloor,$$
with $q$ running over the primes. This is the same formula as the Minkowski number $M(n)$ in the [global semistabilizing degree entry](global-semistabilizing-degree.md). So every finite monodromy group in dimension $g$ has order dividing $M(2g)$.

Philip's proof that $M(2g)$ is attained uses the converse. Let $E$ be a supersingular elliptic curve over $\mathbb F_4$ with its principal polarization. Philip applies Théorème 3.10 to a subgroup $G_g$ of the automorphisms of $E^g$ with the product polarization. Here $G_g$ is a Sylow $2$-subgroup of the wreath product $Q_8\wr\mathfrak S_g$, realized by monomial matrices with entries in $Q_8$ [@philip2024monodromy, §1.1.5, p. 5; Example 2.13, pp. 10–11; Example 3.12, p. 29]. Philip notes that its order is $2^{r(2g,2)}$. Directly, the order of $G_g$ is
$$2^{3g+v_2(g!)}=2^{r(2g,2)},$$
since $r(2g,2)=2g+\sum_{i\ge0}\lfloor g/2^i\rfloor$. This yields a variety over a $2$-adic field. Lemme 4.1 and Corollaire 4.2 replace it, over a tamely ramified extension, by an isogenous principally polarized variety with the same $2$-part of finite monodromy. The proof of Théorème 4.3 reduces the global sharpness to this local case [@philip2024monodromy, Lemme 4.1, Corollaire 4.2 and Théorème 4.3, pp. 30–31].

**Scope.**

- The number field $K$ may depend on $G$.
- The $p$-adic field in condition 1 and the finite field in condition 2 need not be related to each other or to $K$.
- Condition 1 is stated for the abstract group. The necessary structure above, a normal Sylow $p$-subgroup with cyclic quotient of order prime to $p$, is recorded from Silverberg–Zarhin. Whether this structure is also sufficient for condition 1 is not addressed here.
- The trivial group is the case of semistable reduction.
- The v1 bibliography has no entries for the works the preprint cites as "[ST68]" and "[SZ98]" [@philip2024monodromy, Références, p. 32]. Its citations of Théorème 5.2 and Corollaire 6.3 of "[SZ98]" fit Theorem 5.2 and Corollary 6.3 of the Silverberg–Zarhin paper cited here [@philip2024monodromy, p. 3; proof of Théorème 4.8, p. 32].
