# Chinese Remainder Theorem (CRT)

## Definition
CRT is a theorem that gives a unique solution to simultaneous linear congruences with pairwise coprime moduli.

$$
\begin{cases}
x \equiv a_1 \pmod {m_1} \\
x \equiv a_2 \pmod {m_2} \\
\vdots \\
x \equiv a_n \pmod {m_n}
\end{cases}
$$

The theorem states that the solution is given by
$$
x \equiv \sum_{i = 1}^{n} a_i M_i y_i \pmod M
$$
where
$$
\begin{gather}
M \equiv \prod_{i = 1}^{n} m_i \\
M_i \equiv {M \over m_j} \\
y_i \equiv M_i^{-1} \pmod {m_i}
\end{gather}
$$

To prove CRT, we are going to two things:
- $x \equiv \sum_{i = 1}^{n} a_i M_i y_i \pmod M$ is a solution
- There is no other solution under modulo $M$

## Lemma. $a$ has a multiplicative inverse modulo $m$ if and only if $gcd(a, m) = 1$

**Proof**

Let the inverse be $r$

$ra \equiv 1 \pmod m$ implies $ra + km = 1$ for some integer $k$. 

According to Bezout's Lemma, $gcd(a, m) = 1$.

Done.

## 1. $x \equiv \sum_{i = 1}^{n} a_i M_i y_i \pmod M$ is a solution

Since $m_1, m_2, ... m_n$ are pairwise coprime, we have $gcd(m_i, m_j) = 1$ for all $i \neq j$.

Then for each $j$ from $1$ to $n$, we have $M_j = \prod_{i = 1, i \neq j}^{n} m_i$ is coprime to $m_j$, which means $M_j$ has a multiplicative inverse modulo $m_j$.

**Proof**

For each $j$ from $1$ to $n$, we have

$$
\sum_{i = 1}^{n} a_i M_i y_i = \sum_{i = 1, i \neq j}^{n} a_i M_i y_i + a_j M_j y_j
$$
Since $M_1 = \prod_{i = 1, i \neq j}^{n} m_i$ is divisible by $m_i$ for all $i \neq j$, we have
$$
\sum_{i = 1, i \neq j}^{n} a_i M_i y_i \equiv 0 \pmod {m_j}
$$
Hence,
$$
\sum_{i = 1}^{n} a_i M_i y_i \equiv a_j M_j y_j \equiv a_j M_j M_j^{-1} \equiv a_j \pmod {m_j}
$$

So the equation holds.

Done.

## 2. There is no other solution under modulo $M$

Suppose there are two solutions $x_1$ and $x_2$.

Then, for each $j$ from $1$ to $n$, we have $x_1 - x_2 \equiv 0 \pmod {m_j}$ or $m_j | x_1 - x_2$.

As $m_1, m_2, ... , m_n$ are pairwise coprime, $lcm(m_1, m_2, ... ,m_n) = M$, which means $M | x_1 - x_2$.

Hence, $x_1 \equiv x_2 \pmod M$.

Done.