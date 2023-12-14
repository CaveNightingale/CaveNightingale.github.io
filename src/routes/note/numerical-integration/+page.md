---
category: Numerical Analysis
---

# Numeric Integration

## Newton-Cotes Formula

The general idea of Newton-Cotes formula is to first interpolate the function, then integrate the interpolation.

$$
f(x) \approx I f(x)\\
\int_a^b f(x) dx \approx \int_a^b I f(x) dx
$$

We substitute Lagrange interpolation polynomial into the formula. Let $n$ be **the number of points we use**. (Not the degree of the polynomial)

$$
f(x) = \sum_{i=1}^n f(x_i) \prod_{j=1, j \neq i}^n\dfrac{x-x_j}{x_i-x_j} + \dfrac{f^{(n)}(\xi)}{n!} \prod_{i=1}^n (x-x_i)\\
\int_a^b f(x) dx = \sum_{i=1}^n f(x_i) \int_a^b \prod_{j=1, j \neq i}^n\dfrac{x-x_j}{x_i-x_j} dx + \int_a^b \dfrac{f^{(n)}(\xi)}{n!} \prod_{i=1}^n (x-x_i) dx
$$

The part $\int_a^b \dfrac{f^{(n)}(\xi)}{n!} \prod_{i=1}^n (x-x_i) dx$ is called the remainder term, denoted as $E(f)$.

The $\int_a^b \prod_{j=1, j \neq i}^n\dfrac{x-x_j}{x_i-x_j} dx$ part is unrelated to $f(x)$, so we can precompute it and store it in a table.

As for the remainder term, sadly we have no way to find a closed form. So we just keep the ugly form.

### Degree of Precision

**The degree of precision of a numerical integration formula is the largest integer $n$ such that the formula is exact for all polynomials of degree $n$ or less.**

To find out a formula's degree of precision, we can verify it on $1, x, x^2, \cdots$. Since integration is a linear operator, if the formula is exact for $1, x, x^2, \cdots, x^n$, then it's exact for their linear combination. If they are not exact, of course its degree of precision is less than $n$ since the counterexample exists.

**Theorem. If we use $n$ points in Lagrange Interpolation, then the degree of precision is at least $n-1$.**

**Proof**

For any polynomial $f(x)$ of degree $n-1$, Lagrange Interpolation restores $f(x)$ exactly. So the degree of precision is at least $n-1$.

$\square$

**Theorem. If we use $n$ equally spaced points, then the degree of precision is at least $n$ when $n$ is odd, and $n-1$ when $n$ is even.**

This is obvious since the points are symmetric, so the odd degree terms are cancelled out.

### Trapezoidal Rule
If we just take the two end points, we get the Trapezoidal Rule.

$$
f(x) = f(a)\dfrac{x-b}{a-b} + f(b)\dfrac{x-a}{b-a} + \dfrac{f''(\xi)}{2}(x-a)(x-b)\\
\int_a^b f(x) dx = \dfrac{b-a}{2}(f(a) + f(b)) - \dfrac{f''(\xi)}{12}(b-a)^3
$$

The degree of precision is $1$.

**Proof**
When $f(x) = 1$, $\int_a^b f(x) dx = b-a$. The formula is exact.

When $f(x) = x$, $\int_a^b f(x) dx = \dfrac{b^2-a^2}{2}$. The formula is exact.

When $f(x) = x^2$, $\int_a^b f(x) dx = \dfrac{b^3-a^3}{3}$. The formula is not exact.

$\square$

### Simpson's Rule

If we take the $3$ points, we get the Simpson's Rule.

$$
\int_a^b f(x) dx = \dfrac{b-a}{6}(f(a) + 4f(\dfrac{a + b}{2}) + f(b)) - \dfrac{f^{(3)}(\xi)}{90}(b-a)^5
$$

The degree of precision is $3$. Proof is trivial.

### Boole's Rule

If we take the $5$ points, we get the Boole's Rule.

$$
\int_a^b f(x) dx = \dfrac{b-a}{90}(7f(a) + 32f(\dfrac{3a + b}{4}) + 12f(\dfrac{a + b}{2}) + 32f(\dfrac{a + 3b}{4}) + 7f(b)) - \dfrac{f^{(5)}(\xi)}{2880}(b-a)^7
$$

The degree of precision is $5$. Proof is trivial.

### Composite Newton-Cotes Formula
When the number of points exceeds $9$, some of the coefficients become negative. This is not good for numerical computation. So we can divide the interval into subintervals, and apply the Newton-Cotes formula on each subinterval.

Take composite Simpson's Rule as an example.

$$
\int_a^b f(x) dx = \sum_{i=0}^{(n - 1)/2} \dfrac{b - a}{3n}(f(x_{2i}) + 4f(x_{2i+1}) + f(x_{2i+2})) - \dfrac{f^{(3)}(\xi)}{90}(b-a)^5
$$

The error term is the sum of the error terms of each subinterval, whose form is exactly the same as the error term of the original Simpson's Rule.

### Open Newton-Cotes Formula

Some functions are not defined at the end points, such as $\dfrac{\sin x}{x}$. If we want to integrate it from $0$ to $1$, we can use the Open Newton-Cotes Formula.

The idea of Open Newton-Cotes Formula is simply avoiding the end points.

Midpoint Rule is the simplest Open Newton-Cotes Formula.

$$
\int_a^b f(x) dx = (b - a)f(\dfrac{a + b}{2}) - \dfrac{f''(\xi)}{24}(b-a)^3
$$

### Adaptive Quadrature

Some part of the function changes rapidly, while some part changes slowly. If we use the same number of points in the whole interval, we may get Time Limit Exceeded. So we can use Adaptive Quadrature to use more points in the rapidly changing part, and less points in the slowly changing part.

We first start recursion with the whole interval, then divide the interval into two subintervals, and recurse on each subinterval. The key is comparing the difference between the integral of the whole interval and the sum of the integrals of the two subintervals. If the difference is small enough, we can stop the recursion. 

## Gaussian Quadrature

The idea of Gaussian Quadrature is to choose the points $x_i$ and weights $w_i$ such that the degree of precision is as high as possible.

**Theorem. If we use $n$ points in Newton-Cotes formula, then the degree of precision is at most $2n-1$.**

**Proof**

Proof by contradiction. Suppose that some one choose points $x_i$ and weights $w_i$ such that the degree of precision is $2n$.

Then let $f(x) = \prod_{i = 1}^n (x - x_i)^2$, which is a polynomial of degree $2n$. Then the formula is exact for $f(x)$.

Hence

$$
\int_a^b f(x) dx = \sum_{i=1}^n w_i f(x_i) = \sum_{i = 1}^n w_i \cdot 0 = 0
$$

However, $f(x) = 0$ holds only when $x = x_i$ for all $i$, and $f(x) > 0$ for all other places. So the integral is positive. Contradiction.

$\square$

**Definition. If $n$ points $x_i$ and weights $w_i$ satisfy the degree of precision is $2n-1$, then the intergation formula is called Gaussian Quadrature.**

### Legendre-Gauss Quadrature

The idea is picking $x_i$ as the roots of Legendre polynomial $P_n(x)$. In this way, the degree of precision is exactly $2n-1$.

To make life easier, we can normalize the interval to $[-1, 1]$. This do no harm to the generality of the formula.

**Proof**

Let $f(x)$ be a polynomial of degree $2n-1$. Then $f(x) = P_n(x)g(x) + r(x)$, where $g(x)$, $r(x)$ are two polynomial of degree less than $n$.

It's trival that $g(x)$ can be express as a linear combination of $P_0(x), P_1(x), \cdots, P_{n-1}(x)$.

By the othogonality of Legendre polynomial and linearity of integration, we have

$$
\int_{-1}^1 f(x) dx = \int_{-1}^1 P_n(x)g(x) dx + \int_{-1}^1 r(x) dx = \int_{-1}^1 r(x) dx
$$

By the previous theorem, we know that the the integration formula is at least for $r(x)$, so the degree of precision is at least $2n-1$.

Since the degree of precision is at most $2n-1$, the degree of precision is exactly $2n-1$.

$\square$

The error term is
$$
E(f) = \dfrac{f^{(2n)}(\xi)}{(2n)!}\int_{-1}^1 \prod_{i=1}^n (x - x_i)^2 dx = \dfrac{f^{(2n)}(\xi)}{(2n)!}\int_a^b(\pi(x))^2dx
$$
where $\pi(x) = \prod_{i=1}^n (x - x_i)$.

**Proof**

Consider Hermite Interpolation Polynomial $H(x)$ of $f(x)$ at $x_i$.

$$
H(x_i) = f(x_i)\\
H'(x_i) = f'(x_i)
$$

Then $H(x)$ is a polynomial of degree at most $2n-1$.

$$
f(x) = H(x) + \dfrac{f^{(2n)}(\xi)}{(2n)!}(\pi(x))^2 \\
\int_{-1}^1 f(x) dx = \int_{-1}^1 H(x) dx + \dfrac{f^{(2n)}(\xi)}{(2n)!}\int_{-1}^1 (\pi(x))^2 dx
$$

Since $H(x)$ is a polynomial of degree at most $2n-1$, the integration formula is exact for $H(x)$.

By the condition of Hermite Interpolation Polynomial, we know that $H(x_i) = f(x_i)$.

$$
\int_{-1}^1 H(x) dx = \sum_{i=1}^n w_i H(x_i) = \sum_{i=1}^n w_i f(x_i)
$$

Substitute it into the previous equation, we get

$$
f(x) = H(x) + \dfrac{f^{(2n)}(\xi)}{(2n)!}(\pi(x))^2 \\
\int_{-1}^1 f(x) dx = \sum_{i=1}^n w_i f(x_i) + \dfrac{f^{(2n)}(\xi)}{(2n)!}\int_{-1}^1 (\pi(x))^2 dx
$$

$\square$

### Weights of Legendre-Gauss Quadrature

The weights of Legendre-Gauss Quadrature can be calculated by the following formula.

$$
w_i = \int_{-1}^1 (\pi(x))^2 = \dfrac{2}{(1 - x_i^2)[P_n'(x_i)]^2}
$$

**Proof**

We first find $\pi'(x)$ and $\pi'(x_i)$ for $i = 1, 2, \cdots, n$.

$$
\pi(x) = \prod_{j=1}^n (x - x_j) = (x - x_i) \prod_{j=1, j \neq i}^n (x - x_j)\\
\pi'(x) = \prod_{j=1, j \neq i}^n (x - x_j) + (x - x_i)(\prod_{j=1, j \neq i}^n (x - x_j))'\\
\pi'(x_i) = \prod_{j=1, j \neq i}^n (x_i - x_j) + (x_i - x_i)(\prod_{j=1, j \neq i}^n (x_i - x_j))' = \prod_{j=1, j \neq i}^n (x_i - x_j)
$$

Consider the Lagrange Interpolation Polynomial $l_i(x)$ of $\pi(x)$ at $x_i$.

It can be expressed as

$$
l_i(x) = \dfrac{\pi(x)}{(x - x_i)\pi'(x_i)} = \dfrac{P_n(x)}{(x - x_i)P_n'(x_i)}
$$

Since $l_i(x)P_n'(x)$ is a polynomial of degree $2n - 2$, we have

$$
\int_{-1}^1 l_i(x)P_n'(x) dx = \sum_{j=1}^n w_j l_i(x_j) P_n'(x_j)
$$

Since $l_i(x_j) = 0$ for $j \neq i$, and $l_i(x_i) = 1$, we have

$$
\int_{-1}^1 l_i(x)P_n'(x) dx = w_i l_i(x_i) P_n'(x_i) = w_i P_n'(x_i)
$$

On the other hand,

$$
\int_{-1}^1 l_i(x)P_n'(x) dx = \int_{-1}^1 \dfrac{P_n(x)P_n'(x)}{(x - x_i)P_n'(x_i)} dx
$$

Hence,

$$
w_i = \dfrac{1}{(P_n'(x))^2} \int_{-1}^1 \dfrac{P_n(x)P_n'(x)}{x - x_j} dx
$$

Similarly, we move on to the next step.

$$
\int_{-1}^1 (l_i(x))^2\\
= \int_{-1}^1 \dfrac{(P_n(x))^2}{(x - x_i)^2(P_n'(x_i))^2} dx\\
= \dfrac{1}{(P_n'(x_i))^2}\int_{-1}^1 \dfrac{(P_n(x))^2}{(x - x_i)^2} dx\\
= \dfrac{1}{(P_n'(x_i))^2}\int_{-1}^1 -(P_n(x))^2 d \dfrac{1}{x - x_i}\\
= \dfrac{1}{(P_n'(x_i))^2} ((\dfrac{-(P_n(x))^2}{x - x_i})|_{-1}^1 + \int_{-1}^1 \dfrac{1}{x - x_i} d(P_n(x))^2)\\
= \dfrac{1}{(P_n'(x_i))^2} ((\dfrac{-(P_n(1))^2}{1 - x_i} - \dfrac{-(P_n(-1))^2}{-1 - x_i}) + 2\int_{-1}^1 \dfrac{P_n(x)P_n'(x)}{x - x_i} dx)\\
= -\dfrac{1}{(P_n'(x_i))^2} (\dfrac{1}{1 + x_i} + \dfrac{1}{1 - x_i}) + \dfrac{2}{(P_n'(x_i))^2}\int_{-1}^1 \dfrac{P_n(x)P_n'(x)}{x - x_i} dx\\
= -\dfrac{2}{(1 - x_i^2)(P_n'(x_i))^2} + 2w_i\\
$$

On the other hand, since $(l_i(x))^2$ is a polynomial of degree $2n - 2$, we have

$$
\int_{-1}^1 (l_i(x))^2 dx = \sum_{j=1}^n w_j (l_i(x_j))^2 = w_i (l_i(x_i))^2 = w_i
$$

Combine the two equations, we get

$$
w_i = \int_{-1}^1 (l_i(x))^2 dx = -\dfrac{2}{(1 - x_i^2)(P_n'(x_i))^2} + 2w_i\\
w_i = \dfrac{2}{(1 - x_i^2)(P_n'(x_i))^2}
$$

$\square$

### Weighted Gaussian Quadrature

Consider we want to integrate $\int_a^b \rho(x)f(x) dx$, where $\rho(x)$ is a weight function. We can use the same idea to get the weighted Gaussian Quadrature.

Here we only discuss the case where $\rho(x) = \dfrac{1}{\sqrt {1 + x^2}}$.

In this case, we use Chebyshev Zeroes as the points $x_i$. The proof is similar to the proof of Gauss-Legendre Quadrature, we omit it here.

### Lobatto Quadrature

Lobatto's idea is use $a$, $b$ and the roots of $P'_{n-2}(x)$ as the points $x_i$.

In this way, it uses the end points as information.

