---
category: Number Theory
---

<script lang="ts">
	import State from "$lib/component/content/State.svelte";
	import Proof from "$lib/component/content/Proof.svelte";
	import Algor from "$lib/component/content/Algor.svelte";
</script>

# Euler's Totient Function

<State variant="definition">

The Euler's Totient Function, denoted as $\varphi(n)$, is defined as the number of natural number strictly less than to $n$ that are relatively prime to $n$.

</State>

## Properties

<State variant="property" number={1}>

$\varphi(1) = 1$

</State>

<Proof>

Only $0$ is less than $1$ and relatively prime to $1$.

</Proof>

<State variant="property" number={2}>

$\varphi(n) = n - 1$, if $n$ is prime

</State>

<Proof>

It's easy to see that all positive intergers less than $n$ are relatively prime to $n$ if $n$ is prime. 

Therefore, $\varphi(n) = n - 1$.

</Proof>

<State variant="property" number={3}>

$\varphi(pq) = (p - 1)(q - 1)$, if $p$ and $q$ are distinct primes

</State>

<Proof>

Since $p$ is prime, $\operatorname{gcd}(p, k) \neq 1$ gives $p | k$. Hence, numbers less than $pq$ that are not relatively prime to $pq$ are $p, 2p, \dots, (q - 1)p$. It's easy to see that there are $q - 1$ such numbers. 

Similarly, there are $p - 1$ numbers less than $pq$ that are not relatively prime to $pq$ and the union of these 2 sets is empty since there is no such $x$ that satisfy $p | x$, $q | x$ and $x < pq$. 

Therefore, $\varphi(pq) = pq - 1 - (p - 1) - (q - 1) = (p - 1)(q - 1)$. 

</Proof>

<State variant="property" number={4}>

$\varphi(p^k) = p^k - p^{k - 1}$, if $p$ is prime

</State>

<Proof>

Since $p$ is prime, $\operatorname{gcd}(p, k) \neq 1$ gives $p | k$. 

Hence, numbers less than $p^k$ that are not relatively prime to $p^k$ are $p, 2p, \dots, (p^{k - 1} - 1)p$. It's easy to see that there are $\lfloor \dfrac{p ^{k}}{p} \rfloor - 1 = p^{k - 1} - 1$ such numbers.

Therefore, $\varphi(p^k) = p^k - 1 - (p^{k - 1} - 1) = p^k - p^{k - 1}$. 

</Proof>

<State variant="property" number={5}>

$\varphi(n)$ is multiplicative

</State>

<Proof>

Let $a$ and $b$ be two arbitrary coprime positive integers. We want to show that $\varphi(ab) = \varphi(a)\varphi(b)$.

From [CRT](/note/chinese-remainder-theorem), we know that for each pair of number $m, n$ that is coprime to $a, b$, there is a unique number $x$ such that $0 \leq x < ab$ and $x \equiv m \pmod{a}$ and $x \equiv n \pmod{b}$.

Since
$$
\operatorname{gcd}(x, ab) = 1 \iff \operatorname{gcd}(x, a) = 1 \land \operatorname{gcd}(x, b) = 1
$$
we know such $x$ is also coprime to $ab$.

It's easy to see echo $x$ which is coprime to $a, b$ can be mapped to a unique pair of numbers $(m, n)$ that is coprime to $ab$ s.t $0 \leq m < a$ and $0 \leq n < b$.

Therefore, there are $\varphi(a)\varphi(b)$ numbers less than $ab$ that are coprime to $ab$.

</Proof>

<State variant="property" number={6}>

$\varphi(n) = n\prod_{p|n}(1 - \frac{1}{p})$

</State>

<Proof>

Let a positive number $n = \prod_{i = 1}^k p_i^{a_i}$ where $p_i$ are distinct primes and $a_i$ are positive integers.

$$
\begin{gather*}
\varphi(n) \\
= \varphi(\prod_{i = 1}^k p_i^{a_i}) \\
= \prod_{i = 1}^k \varphi(p_i^{a_i}) \\
= \prod_{i = 1}^k p_i^{a_i} - p_i^{a_i - 1} \\
= n\prod_{i = 1}^k(1 - \frac{1}{p_i})
\end{gather*}
$$

</Proof>

<State variant="property" number={7}>

$\sum_{d|n} \varphi(d) = n$

</State>

<Proof>

Consider $n-1$ fractions $\dfrac{1}{n}, \dfrac{2}{n}, \dots, \dfrac{n-1}{n}$.

After reducing each fraction to its simplest form, we get $n$ fractions, each of which has a denominator that is a divisor of $n$, and the numerator of each fraction is coprime to the denominator.

Therefore $\sum_{d|n, n \ne 1} \varphi(d) = n - 1$. And apply property 1, we get $\sum_{d|n} \varphi(d) = n$.

</Proof>

## Euler's Theorem

<State variant="theorem" name="Euler's theorem">

If $a$ and $n$ are coprime positive integers, then
$$
a^{\varphi(n)} \equiv 1 \pmod{n}
$$

</State>

<Proof>

Let $B = \{b_1, b_2, \dots, b_{\varphi(n)}\}$ be the set of numbers less than $n$ that are coprime to $n$.

Assume that there are two such numbers $b_i$ and $b_j$ such that $a b_i \equiv a b_j \pmod{n}$ and $b_i \neq b_j$.
$$
\begin{gather*}
a b_i &\equiv a b_j \pmod{n} \\
a b_i - a b_j &\equiv 0 \pmod{n} \\
a (b_i - b_j) &\equiv 0 \pmod{n}
\end{gather*}
$$

Since $a$ and $n$ are coprime, $n | a (b_i - b_j)$ gives $n | b_i - b_j$ or $b_i \equiv b_j \pmod{n}$, which contradicts with the assumption that $b_i \neq b_j$.

What's more, since both $a$ and $b_i$ are coprime to $n$, $a b_i$ is also coprime to $n$.

Therefore, $\{a b_1, a b_2, \dots, a b_{\varphi(n)}\}$ is a permutation of $B$.

Hence,
$$
\begin{gather*}
\prod_{i = 1}^{\varphi(n)} ab_i &\equiv \prod_{i = 1}^{\varphi(n)} b_i \pmod{n} \\
a^{\varphi(n)} \prod_{i = 1}^{\varphi(n)} b_i &\equiv \prod_{i = 1}^{\varphi(n)} b_i \pmod{n} \\
a^{\varphi(n)} &\equiv 1 \pmod{n}
\end{gather*}
$$

</Proof>

## Fermat's Little Theorem

<State variant="theorem" name="Fermat's Little Theorem">

If $p$ is a prime and $a$ is a positive integer that is not divisible by $p$, then
$$
a^{p - 1} \equiv 1 \pmod{p}
$$

</State>

<Proof>

Since $p$ is a prime, $\varphi(p) = p - 1$.

Since $a$ is less than $p$ and $p$ is a prime, $a$ must be coprime to $p$.

Apply Euler's Theorem and get $a^{p - 1} \equiv 1 \pmod{p}$.

</Proof>

## Wilson's Theorem

<State variant="theorem" name="Wilson's Theorem">

$$
(p - 1)! \equiv -1 \pmod{p} \iff p \text{ is prime}
$$

where $p$ is an integer greater than $1$.

</State>

We need to prove two goals:
1. $p \text{ is prime} \implies (p - 1)! \equiv -1 \pmod{p}$
2. $(p - 1)! \equiv -1 \pmod{p} \implies p \text{ is prime}$

<State variant="goal" number={1}>

$p \text{ is prime} \implies (p - 1)! \equiv -1 \pmod{p}$

When $p = 2$, $(p - 1)! = 1 \equiv -1 \pmod{p}$, which is obviously true, so we are only going to prove the case where $p$ is an odd prime.

We are going to prove a lemma first.

</State>

<State variant="lemma">

$x ^ 2 \equiv 1 \pmod{p}$  has only 2 solutions where $p$ is a odd prime, and they are $1$ and $p - 1$ 

</State>

<Proof>

$$
\begin{gather*}
x ^ 2 \equiv 1 \pmod{p} \\
x ^ 2 - 1 \equiv 0 \pmod{p} \\
(x - 1)(x + 1) \equiv 0 \pmod{p}
\end{gather*}
$$

Since $p$ is a prime, $p | (x - 1)(x + 1)$ gives $p | x - 1$ or $p | x + 1$.

Therefore, the only solutions are $1$ and $p - 1$.

</Proof>

Then we go back to the proof of Wilson's Theorem.

<Proof>

Consider Euler's Theorem's proof. We know that $\{a b_1, a b_2, \dots, a b_{\varphi(n)}\}$ is a permutation of $B$, which gives the inverse of $a$ modulo $n$ is unique if $n$ is prime and $0 < a < n$.

Thus, we can pair up each number in $B$ with its inverse modulo $p$ except $1$ and $p - 1$, whose inverse is themselves.

Therefore, we have
$$
\begin{gather*}
\prod_{i = 1}^{p - 1} i \equiv 1 \cdot (p - 1) \equiv -1 \pmod{p} \\
(p - 1)! \equiv -1 \pmod{p}
\end{gather*}

$$

</Proof>

<State variant="goal" number={2}>

$(p - 1)! \equiv -1 \pmod{p} \implies p \text{ is prime}$

</State>

<Proof>

We want to prove that non-prime $p$ can't satisfy $(p - 1)! \equiv -1 \pmod{p}$.

Then minimum integer $p$ that is not a prime is $4$, so we start from $p = 4$.

When $p >= 4$, $(p - 1)! \equiv (p - 1)(p - 2)!$

Since $p$ is composite, let its minimum divisor be $d$.

Then $d \leq \sqrt{p} \leq p - 2$.

We obtain $(p - 2)! \equiv d \cdot \dfrac{(p - 2)!}{d} \pmod{p}$.

Since $d$ has no inverse modulo $p$ (by applying CRT), we have $d \cdot \dfrac{(p - 2)!}{d} \not\equiv 1 \pmod{p}$.

Therefore, $(p - 1)! \equiv (p - 1)(p - 2)! \not\equiv -1 \pmod{p}$.

</Proof>

## Euler's Sieve

<State variant="algorithm" name="Euler's Sieve">

Euler's Sieve is an algorithm to calculate $\varphi(x)$ for all $x \leq n$ and give the list of prime numbers less than $n$ in $O(n)$ time.

<Algor>

```pesudo
$'fn[INIT-PHI](n)$ [
	$p = 'varnothing$
	$'varphi = 'varnothing$
	$'varphi(1) = 1$
	for $i = 2$ to $n$ [
		$'varphi(i) = 0$
	]	
	for $i = 2$ to $m$ [
		if $'varphi(i) = 0$ [
			$'varphi(i) = i - 1$
			$p(|p|) = i$
		]
		for $j$ in $p$ [
			if $i 'cdot j > n$ [
				break
			]
			if $i 'bmod j = 0$ [
				$'varphi(i 'cdot j) = 'varphi(i) 'cdot j$
				break
			]
			$'varphi(i 'cdot j) = 'varphi(i) 'cdot (j - 1)$
		]
	]
	return $'varphi, p$
]
```

</Algor>

</State>

<Proof variant="correctness">

By the property of $\varphi$, we know that $\varphi(x) = x - 1$ if $x$ is prime.

And for composite $x$, suppose its minimum divisor is $d$, then we have

$$
\varphi(x) = \begin{cases}
	\varphi\left(\dfrac{x}{d}\right) \cdot d & x \mod d = 0 \\
	\varphi\left(\dfrac{x}{d}\right) \cdot (d - 1) & x \mod d \neq 0
\end{cases}
$$

$\varphi(1)=1$ is satisfied by the algorithm at the beginning and does not change.

Then consider an $x > 1$.

If $x$ is composite, then there must be a minimum prime divisor $d$, such that $d \leq \dfrac{x}{d}$. (If this is not the case, then we can make a smaller prime divisor from $\dfrac{x}{d}$, which leads to a contradiction.)

This means $d$ is in the prime list $p$ when we reach $\dfrac{x}{d}$. And by the condition of the loop, we know that $\varphi(x)$ has been calculated correctly.

If $x$ is prime, then $\varphi(x)$ cannot be reached by previous iterations, so when we reach $x$, $\varphi(x) = 0$ and we set $\varphi(x) = x - 1$.

Therefore, the algorithm is correct.

</Proof>

<Proof variant="time">

By the proof of correctness, we know that $\varphi(x)$ is assigned exactly once for each $x$ except for the initial assignment.

And there are assignment statement in all loops, so the other parts will have at most the same order of time complexity as the assignment statement.

Therefore, the time complexity is $O(n)$.

</Proof>

## Miscellaneous

### Disproof of $2^{2^n} + 1$ is prime for all $n$

Take an anti-example $n = 5$.

$3 ^ {2 ^ {2 ^ 5}} \equiv 3029026160 \pmod{2 ^ {2 ^ 5} + 1}$

This disagrees with Fermat's Little Theorem, so the proposition is false.

