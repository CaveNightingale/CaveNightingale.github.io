# Euler's Totient Function

## Definition

The Euler's Totient Function, denoted as $\phi(n)$, is defined as the number of positive integers less than or equal to $n$ that are relatively prime to $n$.

## Properties

### Property 1. $\phi(n) = n - 1$, if $n$ is prime

**Proof**

It's easy to see that all numbers less than $n$ are relatively prime to $n$ if $n$ is prime. 

Therefore, $\phi(n) = n - 1$.

Done.

### Property 2. $\phi(pq) = (p - 1)(q - 1)$, if $p$ and $q$ are distinct primes

**Proof**

Since $p$ is prime, $gcd(p, k) \neq 1$ gives $p | k$. Hence, numbers less than $pq$ that are not relatively prime to $pq$ are $p, 2p, \dots, (q - 1)p$. It's easy to see that there are $q - 1$ such numbers. 

Similarly, there are $p - 1$ numbers less than $pq$ that are not relatively prime to $pq$ and the union of these 2 sets is empty since there is no such $x$ that satisfy $p | x$, $q | x$ and $x < pq$. 

Therefore, $\phi(pq) = pq - 1 - (p - 1) - (q - 1) = (p - 1)(q - 1)$. 

Done.

### Property 3. $\phi(p^k) = p^k - p^{k - 1}$, if $p$ is prime

**Proof**

Since $p$ is prime, $gcd(p, k) \neq 1$ gives $p | k$. 

Hence, numbers less than $p^k$ that are not relatively prime to $p^k$ are $p, 2p, \dots, (p^{k - 1} - 1)p$. It's easy to see that there are $\lfloor {p ^{k} \over p } \rfloor - 1 = p^{k - 1} - 1$ such numbers.

Therefore, $\phi(p^k) = p^k - 1 - (p^{k - 1} - 1) = p^k - p^{k - 1}$. 

Done.

### Property 4. $\phi(n)$ is multiplicative

**Proof**

Let $a$ and $b$ be two arbitrary coprime positive integers. We want to show that $\phi(ab) = \phi(a)\phi(b)$.

From [CRT](/note/number-theory/chinese-remainder-theorem), we know that for each pair of number $m, n$ that is coprime to $a, b$, there is a unique number $x$ such that $0 \leq x < ab$ and $x \equiv m \pmod{a}$ and $x \equiv n \pmod{b}$.

Since
$$
gcd(x, ab) = 1 \iff gcd(x, a) = 1 \land gcd(x, b) = 1
$$
we know such $x$ is also coprime to $ab$.

It's easy to see echo $x$ which is coprime to $a, b$ can be mapped to a unique pair of numbers $(m, n)$ that is coprime to $ab$ s.t $0 \leq m < a$ and $0 \leq n < b$.

Therefore, there are $\phi(a)\phi(b)$ numbers less than $ab$ that are coprime to $ab$.

Done.

### Property 5. $\phi(n) = n\prod_{p|n}(1 - \frac{1}{p})$

**Proof**

Let a positive number $n = \prod_{i = 1}^k p_i^{a_i}$ where $p_i$ are distinct primes and $a_i$ are positive integers.

$$
\begin{gather*}
\phi(n) \\
= \phi(\prod_{i = 1}^k p_i^{a_i}) \\
= \prod_{i = 1}^k \phi(p_i^{a_i}) \\
= \prod_{i = 1}^k p_i^{a_i} - p_i^{a_i - 1} \\
= n\prod_{i = 1}^k(1 - \frac{1}{p_i})
\end{gather*}
$$

Done.

## Euler's Theorem

Euler's Theorem states that if $a$ and $n$ are coprime positive integers, then
$$
a^{\phi(n)} \equiv 1 \pmod{n}
$$

**Proof**

Let $B = \{b_1, b_2, \dots, b_{\phi(n)}\}$ be the set of numbers less than $n$ that are coprime to $n$.

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

Therefore, $\{a b_1, a b_2, \dots, a b_{\phi(n)}\}$ is a permutation of $B$.

Hence,
$$
\begin{gather*}
\prod_{i = 1}^{\phi(n)} ab_i &\equiv \prod_{i = 1}^{\phi(n)} b_i \pmod{n} \\
a^{\phi(n)} \prod_{i = 1}^{\phi(n)} b_i &\equiv \prod_{i = 1}^{\phi(n)} b_i \pmod{n} \\
a^{\phi(n)} &\equiv 1 \pmod{n}
\end{gather*}
$$

Done.

## Fermat's Little Theorem

Fermat's Little Theorem states that if $p$ is a prime and $a$ is a positive integer that is not divisible by $p$, then
$$
a^{p - 1} \equiv 1 \pmod{p}
$$

**Proof**

Since $p$ is a prime, $\phi(p) = p - 1$.

Since $a$ is less than $p$ and $p$ is a prime, $a$ must be coprime to $p$.

Apply Euler's Theorem and get $a^{p - 1} \equiv 1 \pmod{p}$.

Done.

## Wilson's Theorem

Wilson's Theorem states that
$$
(p - 1)! \equiv -1 \pmod{p} \iff p \text{ is prime}
$$

where $p$ is an integer greater than $1$.

**Proof**

We need to prove two things:
1. $p \text{ is prime} \implies (p - 1)! \equiv -1 \pmod{p}$
2. $(p - 1)! \equiv -1 \pmod{p} \implies p \text{ is prime}$

### 1. $p \text{ is prime} \implies (p - 1)! \equiv -1 \pmod{p}$

When $p = 2$, $(p - 1)! = 1 \equiv -1 \pmod{p}$, which is obviously true, so we are only going to prove the case where $p$ is an odd prime.

We are going to prove a lemma first.

#### Lemma 1. $x ^ 2 \equiv 1 \pmod{p}$  has only 2 solutions where $p$ is a odd prime, and they are $1$ and $ p - 1$ 

**Proof**

$$
\begin{gather*}
x ^ 2 \equiv 1 \pmod{p} \\
x ^ 2 - 1 \equiv 0 \pmod{p} \\
(x - 1)(x + 1) \equiv 0 \pmod{p}
\end{gather*}
$$

Since $p$ is a prime, $p | (x - 1)(x + 1)$ gives $p | x - 1$ or $p | x + 1$.

Therefore, the only solutions are $1$ and $p - 1$.

Done.

Then we go back to the proof of Wilson's Theorem.

Consider Euler's Theorem's proof. We know that $\{a b_1, a b_2, \dots, a b_{\phi(n)}\}$ is a permutation of $B$, which gives the inverse of $a$ modulo $n$ is unique if $n$ is prime and $0 < a < n$.

Thus, we can pair up each number in $B$ with its inverse modulo $p$ except $1$ and $p - 1$, whose inverse is themselves.

Therefore, we have
$$
\begin{gather*}
\prod_{i = 1}^{p - 1} i \equiv 1 \cdot (p - 1) \equiv -1 \pmod{p} \\
(p - 1)! \equiv -1 \pmod{p}
\end{gather*}

$$

Done.

### 2. $(p - 1)! \equiv -1 \pmod{p} \implies p \text{ is prime}$

We want to prove that non-prime $p$ can't satisfy $(p - 1)! \equiv -1 \pmod{p}$.

Then minimum integer $p$ that is not a prime is $4$, so we start from $p = 4$.

When $p >= 4$, $(p - 1)! \equiv (p - 1)(p - 2)!$

Since $p$ is composite, let its minimum divisor be $d$.

Then $d \leq \sqrt{p} \leq p - 2$.

We obtain $(p - 2)! \equiv d \cdot {(p - 2)! \over d} \pmod{p}$.

Since $d$ has no inverse modulo $p$ (by applying CRT), we have $d \cdot {(p - 2)! \over d} \not\equiv 1 \pmod{p}$.

Therefore, $(p - 1)! \equiv (p - 1)(p - 2)! \not\equiv -1 \pmod{p}$.

Done.

## Miscellaneous

### Answer to the question "Prove the proposition '$2 ^ {2 ^ n} + 1 \text{ is prime}$ for every positive integer $n$' is false" on the Chinese Senior High School Mathematics Textbook PEP 2003 Edition

Take an anti-example $n = 5$.

$3 ^ {2 ^ {2 ^ 5}} \equiv 3029026160 \pmod{2 ^ {2 ^ 5} + 1}$

This disagrees with Fermat's Little Theorem, so the proposition is false.

Done.