---
category: Number Theory
---

<script lang="ts">
	import Proof from '$lib/component/content/Proof.svelte';
	import State from '$lib/component/content/State.svelte';
</script>

# Mobius Function

## Pre-requisite Number Theory

<State variant="assertion">

We can reorder the items in a summation if the region of summation is finate, or countable but the sum is absolutely convergent.

</State>

This is a well-known calculus theorem so we are not going to prove it here.

<State variant="lemma">

$$
\sum_{d | n} f(d) = \sum_{d | n} f\left(\frac{n}{d}\right)
$$

</State>

<Proof>

Reverse the order of summation.

</Proof>

<State variant="lemma">

$$
\sum_{d | n} \sum_{e | d} f(d, e) = \sum_{e | n} \sum_{k | (n / e)} f(ke, e)
$$

</State>

<Proof>

We just proof the two regions are the same, since the order of summation makes no difference.

$$
d | n \wedge e | d \\
\iff n=k_1d \wedge d=k_2e, \text{ where }k_1, k_2 \text{ are integers} \\
\iff n=k_1k_2e \wedge d = k_2e \\
\iff e | n \wedge k_1k_2= (n / e) \wedge d = k_2e \\
\iff e | n \wedge k_2 | (n / e) \wedge d = k_2e
$$

</Proof>

<State variant="lemma">

If $f(n)$ is a multiplicative function, then so is $g(n) = \sum_{d | n} f(d)$.

</State>

<Proof>

Suppose $\gcd(n_1, n_2) = 1$ 
$$
g(n_1n_2)
= \sum_{d | n_1n_2} f(d)
$$

Since $\gcd(n_1, n_2) = 1$, every divisor of $n_1n_2$ is a unique product of a divisor of $n_1$ and a divisor of $n_2$, because for any prime $p$ that divides $n_1n_2$, it can only divide one of $n_1$ or $n_2$.

$$
= \sum_{d_1 | n_1} \sum_{d_2 | n_2} f(d_1d_2)\\
$$

Since $f(n)$ is multiplicative, $f(d_1d_2) = f(d_1)f(d_2)$.

$$
= \sum_{d_1 | n_1} \sum_{d_2 | n_2} f(d_1)f(d_2)\\
= \left(\sum_{d_1 | n_1} f(d_1)\right) \left(\sum_{d_2 | n_2} f(d_2)\right)\\
= g(n_1)g(n_2)
$$

</Proof>

<State variant="lemma">

If $g(n) = \sum_{d | n} f(d)$ is a multiplicative function, then so is $f(n)$.

</State>

<Proof>

If $n = 1$, then $g(1) = f(1) = f(1 \times 1) = g(1)g(1) = g(1)^2$, which gives either $g(1) = f(1) = 0$ or $g(1) = f(1) = 1$.

If $n$ is prime, then $g(n) = f(n) + f(1)$.

If $n = n_1n_2$ where $\gcd(n_1, n_2) = 1$, then we prove by induction.

Suppose $f$ is multiplicative for all $d < n$.

$$
g(n) \\
= g(n_1n_2) \\
= \sum_{d | n_1n_2} f(d) \\
= \sum_{d_1 | n_1} \sum_{d_2 | n_2} f(d_1d_2) \\
$$

Only $f(n_1n_2)$ is out of the induction hypothesis, so we apply the multiplicative property of $f$ for all other terms.

$$
= \sum_{d_1 | n_1} \sum_{d_2 | n_2} f(d_1)f(d_2) - f(n_1)(n_2) + f(n_1n_2) \\
= \left(\sum_{d_1 | n_1} f(d_1)\right) \left(\sum_{d_2 | n_2} f(d_2)\right) - f(n_1)f(n_2) + f(n_1n_2) \\
= g(n_1)g(n_2) - f(n_1)f(n_2) + f(n_1n_2) \\
$$

Move $g(n_1)g(n_2)$ to the left hand side.

$$
g(n) - g(n_1)g(n_2) = f(n_1n_2) - f(n_1)f(n_2) \\
$$

Apply the multiplicative property of $g$.

$$
0 = f(n_1n_2) - f(n_1)f(n_2) \\
$$

Hence, $f$ is multiplicative.

</Proof>

## Definition

<State variant="definition">

The Mobius Function, denoted as $\mu(n)$, is defined by the following rules:
$$
\sum_{d | n} \mu(d) = [n = 1]
$$

</State>

## Properties

<State variant="theorem" name="Inversion Principle">

$$
f(n) = \sum_{d | n} g(d) \iff g(n) = \sum_{d | n} \mu(d) f\left(\frac{n}{d}\right)
$$

</State>

<Proof>

Left to right:
$$
\sum_{d | m} \mu(d) f\left(\frac{m}{d}\right) \\
= \sum_{d | m} \mu\left(\frac{m}{d}\right) f(d) \\
= \sum_{d | m} \mu\left(\frac{m}{d}\right) \sum_{k | d} g(k) \\
= \sum_{d | m} \sum_{k | d} \mu\left(\frac{m}{d}\right) g(k) \\
= \sum_{k | m} \sum_{d | (m / k)} \mu\left(\frac{m}{kd}\right) g(k) \\
= \sum_{k | m} g(k) \sum_{d | (m / k)} \mu\left(\frac{m}{kd}\right) \\
= \sum_{k | m} g(k) \sum_{d | (m / k)} \mu\left(\frac{m}{k} / \frac{m}{kd}\right) \\
= \sum_{k | m} g(k) \sum_{d | (m / k)} \mu(d) \\
= \sum_{k | m} g(k) [m / k = 1] \\
= g(m)
$$

Right to left:
$$
\sum_{d | m} g(d) \\
= \sum_{d | m} \sum_{k | d} \mu(k) f\left(\frac{d}{k}\right) \\
= \sum_{k | m} \sum_{d | (m / k)} \mu(k) f(d)\\
= \sum_{k | m} f(k) \sum_{d | (m / k)} \mu(k) \\
= \sum_{k | m} f(k) [m / k = 1] \\
= f(m)
$$

</Proof>

<State variant="theorem" name="Multiplicative Property">

The Mobius Function is a multiplicative function.

</State>

<Proof>

$[n = 1]$ is multiplicative. Immediately apply the lemma above.

</Proof>

<State variant="theorem" name="General Term">

$$
\mu(n) = \begin{cases}
	0 & \text{if $n$ has a squared prime factor} \\
	1 & \text{if $n = 1$} \\
	(-1)^k & \text{if $n$ is a product of $k$ distinct primes}
\end{cases}
$$

</State>

<Proof>

If $n = 1$

$$
\sum_{d|1}\mu(d) = \mu(1) = [1 = 1] = 1
$$

If $n = p$, where $p$ is a prime number.

$$
\mu(p) = \sum_{d|p}\mu(d) - \mu(1) = [p = 1] - 1 = -1\\
$$

If $n = p^k$, where $p$ is a prime number and $k > 1$.

$$
\mu(p^k) = \sum_{d|p^k}\mu(d) - \sum_{d|p^{k-1}}\mu(d) = [p^k = 1] - [p^{k-1} = 1] = 0
$$

If $n$ has more than one prime factors, we can apply multiplicative property. Therefore,

$$
\mu(n)\\
= \mu(p_1^{a_1}p_2^{a_2}\cdots p_k^{a_k}) \\
= \mu(p_1^{a_1})\mu(p_2^{a_2})\cdots\mu(p_k^{a_k})\\
= \begin{cases}
	0 & \mu(p_i^{a_i}) = 0 \text{ for some }i \\
	(-1)^k & \mu(p_i^{a_i}) = -1 \text{ for all }i
\end{cases}\\
= \begin{cases}
	0 & \max{a_i} > 1 \\
	(-1)^k & \max{a_i} = 1
\end{cases}
$$

Combining all cases, we get the general term.

</Proof>

<State variant="theorem" name="Relation to Eular's Totient Function">

$$
\varphi(n) = \sum_{d | n} \mu(d)\frac{n}{d}
$$

</State>

<Proof>

Immediate from applying the inversion principle on Propterty 7 of [Euler's Totient Function](/note/eulers-totient-function).

</Proof>