---
title: Pop reconstruction from total decomposition graphs and rational quotients
kind: theorem
summary: A total decomposition graph with a Bertini family of rational quotients determines the perfect closure of a function field over algebraically closed constants. Compatible graph isomorphisms are geometric up to one global unit, also in transcendence degree two.
tags: [function-fields, galois-groups, valuations]
edges:
  - {to: total-decomposition-graph-from-divisorial-inertia, label: uses, note: "Supplies the graph isomorphism in the application to the 2026 manuscript."}
  - {to: divisoriality-from-completed-curve-subfields, label: uses, note: "Supplies the actual rational quotient squares and their point inertia in that application."}
  - {to: bogomolov-pop-conjecture, label: addresses, note: "Conditional on supplying the decomposition graph and compatible rational quotients."}
  - {to: manuscripts-claiming-bogomolov-pop, label: addresses, note: "Checks the external input in Proposition 7.1(2) and its use of the recovered quotient diagrams, assuming the preceding correspondences."}
---

**Pop's Isom theorem.** Let $K/k$ and $L/l$ be function fields of transcendence degree greater than one over algebraically closed fields of characteristic different from $\ell$. Endow their total decomposition graphs with Bertini-type families $\mathcal A$ and $\mathcal B$ of rational quotients. If an isomorphism $\Phi$ of these graphs is compatible with the two families, there are an isomorphism $\iota:L^i/l\to K^i/k$ of perfect closures and a unit $\epsilon\in\mathbb Z_\ell^\times$ such that
$$\Phi=\epsilon\,\Phi_\iota.$$
The field isomorphism is unique up to Frobenius twists; in characteristic zero it is unique. There is no restriction to constants algebraic over a finite field or to transcendence degree greater than two [@pop2012bogomolov, Theorem 2.1(2), author version p. 6].

Here a rational quotient is the actual restriction map $q_E:\Pi^a_K\to\Pi^a_E$ for a relatively algebraically closed subfield $E=k(u)$, including its morphism of decomposition graphs. The target retains every point inertia subgroup, its equal decomposition subgroup, and the zero residual group. Compatibility requires commuting squares of graph morphisms with target isomorphisms, rather than merely a bijection of quotient kernels [@pop2012bogomolov, §2, pp. 4–6].

**The family required.** Call $u\in K$ general if $k(u)$ is relatively algebraically closed in $K$. For algebraically independent $x,t\in K$, with $x$ separating (in characteristic $p>0$, $x\notin K^p$), Pop considers
$$t_a=ax+t,\qquad t_{a',a}=\frac{t}{a'x+a},\qquad
t_{a'',a',a}=\frac{a''t+a'x+a+1}{t+a'x+a}.$$
Fact/Definition 43(1) specifies when these are general: almost all $a$ in the first family; every $a'\ne0$ and almost all $a$ in the second; and every $a''$ and almost all $a',a$ in the third. A Bertini set contains the resulting general elements for every such pair $x,t$, and a Bertini-type quotient family contains the quotients from some Bertini set [@pop2012decomposition, Fact/Definition 43(1)–(2), author version pp. 55–56]. In particular, the family of **all** rational quotients meets this requirement. The Main Theorem uses total graphs with these families; Theorem 45(2) gives the more general version for open homomorphisms inducing proper morphisms of complete regular-like graphs. Neither introduces a stronger restriction on the constants or the transcendence degree [@pop2012decomposition, Main Theorem, p. 8 and Theorem 45, p. 58].

**Application to the 2026 manuscript (checked here).** Assume the preceding correspondences give the [total graph isomorphism](total-decomposition-graph-from-divisorial-inertia.md) and the [rational quotient squares](divisoriality-from-completed-curve-subfields.md). Write the latter, in one direction, as
$$q_F\phi=\psi_Eq_E,\qquad
\phi:\Pi^a_K\longrightarrow\Pi^a_L,\quad
\psi_E:\Pi^a_E\longrightarrow\Pi^a_F,$$
where $E\subset K$ and $F\subset L$ range bijectively over the relatively algebraically closed rational subfields, and $\psi_E$ matches their point inertia. These are precisely the input squares of Proposition 6.7 and the proof on p. 24 [@openai2026bp, pp. 23–24].

The same fixed maps give commuting squares on the whole graphs. Indeed, at corresponding flags $v,w$, the graph isomorphism on the residue groups is induced by $\phi:Z_v\to Z_w$ modulo $T_v\to T_w$. Restricting the displayed equality to these decomposition groups preserves equality. If the flag restricts trivially to $E$, then $q_E(T_v)=0$, so the equality descends to $Z_v/T_v$ and $Z_w/T_w$. Otherwise its image is a point of the rational target: the nonzero inertia image lies in its unique point line, matched by $\psi_E$, and the target residue group is zero. Iterating these restriction and quotient operations handles successive flag vertices. These are the operations in Pop's definition of a graph morphism [@pop2012decomposition, Definition/Remark 24 and Definition 25, pp. 33–34]. They retain the actual subgroup images, including finite-index inertia images; replacing those images by their saturations would not suffice.

Thus the quotient squares satisfy Pop's graph compatibility, and the full rational families satisfy his Bertini requirement. His Isom theorem proves precisely the conditional statement of Proposition 7.1(2), with one global unit and with surfaces included. This checks the external input and the passage from the stated recovered diagrams to that input; it does not independently establish those preceding correspondences or verify the full manuscript.
