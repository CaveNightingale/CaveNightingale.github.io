---
category: Numerical Analysis
---

# Chebyshev Polynomial

## Definition

Define **Chebyshev polynomial** of the first kind $T_n(x)$ as

$$
T_n(x) = \cos(n \arccos x)
$$

Define a polynomial whose coeffient of highest degree is 1 as a **monic** polynomial.

## Recurrence Relation

Basis Step:

$$
T_0(x) = \cos(0 \arccos x) = 1\\
T_1(x) = \cos(1 \arccos x) = x
$$

Recursive Step:

$$
\cos (n - 1)x = \cos x \cos nx + \sin x \sin nx\\
\cos (n + 1)x = \cos x \cos nx - \sin x \sin nx
$$

Add the two equations above, we get:

$$
\cos (n - 1)x + \cos (n + 1)x = 2 \cos x \cos nx
$$

Replace $x$ with $\arccos x$, we get:

$$
\cos \left[(n - 1)\arccos x\right] + \cos \left[(n + 1)\arccos x\right] = 2 \cos (\arccos x) \cos (n \arccos x) \\
T_{n - 1}(x) + T_{n + 1}(x) = 2xT_n(x)\\
T_{n + 1}(x) = 2xT_n(x) - T_{n - 1}(x)
$$

## Why its zeros help relieve Runge's phenomenon

We only discuss the case when $x \in [-1, 1]$, so $\arccos x$ is real.

We want to prove that, for any positive integer $n$, $\dfrac{1}{2^{n - 1}}T_n(x)$ is a monic polynomial with degree $n$.

Basis Step:

$$
\dfrac{1}{2 ^ {1 - 1}} T_1(x) = x\\
\dfrac{1}{2 ^ {2 - 1}} T_2(x) = \dfrac{1}{2} (2x^2 - 1) = x^2 - \dfrac{1}{2}
$$

Inductive Step:

Assume that $\dfrac{1}{2 ^ {n - 2}} T_{n - 1}(x)$ is a monic polynomial with degree $n - 1$, and $\dfrac{1}{2 ^ {n - 3}} T_{n - 2}(x)$ is a polynomial with degree $n - 2$.

$$
\dfrac{1}{2 ^ {n - 1}} T_n(x) = \dfrac{1}{2 ^ {n - 1}} \cdot 2xT_{n - 1}(x) - \dfrac{1}{2 ^ {n - 1}} T_{n - 2}(x)\\
= x(\dfrac{1}{2 ^ {n - 2}}T_{n - 1}(x)) - \dfrac{1}{2 ^ {n - 1}} T_{n - 2}(x)
$$

The first term provided the monic polynomial with degree $n$, and the second term provided the polynomial with degree $n - 2$, so the sum of the two terms is a monic polynomial with degree $n$.

$\square$ 

From the range of the function $\cos$, we have

$$
T_n(x) = \cos(n \arccos x) \in [-1, 1]
$$

The $w(x)$ in the expression of remainder of lagrange interpolation is:

$$
w(x) = \prod_{i = 1}^n (x - x_i)
$$

$w(x)$ is a monic polynomial with degree $n$. This is trivial.

If we use zeros of chebyshev polynomials as interpolation points, then $w(x)$ shares the same zeros with $T_n(x)$, in another word, shares the same zeros with $\dfrac{1}{2 ^ {n - 1}} T_n(x)$.

When $n > 1$, since both $\dfrac{1}{2 ^ {n - 1}} T_n(x)$ and $w(x)$ are monic polynomials with degree $n$ and exactly same $n$ zeros, they must be the exactly same polynomial.

$$
w(x) = \dfrac{1}{2 ^ {n - 1}} T_n(x)
$$

From the range of $T_n(x)$, we have

$$
w(x) = \dfrac{1}{2 ^ {n - 1}} T_n(x) \in [-\dfrac{1}{2 ^ {n - 1}}, \dfrac{1}{2 ^ {n - 1}}]
$$

And there exist exactly $n + 1$ extrema of $w(x)$, alternating between $-\dfrac{1}{2 ^ {n - 1}}$ and $\dfrac{1}{2 ^ {n - 1}}$.

If we take absolute value of $w(x)$ just as we do when we calculate the error bound of lagrange interpolation, we get:

$$
|w(x)| = |\dfrac{1}{2 ^ {n - 1}} T_n(x)| = \dfrac{1}{2 ^ {n - 1}} |T_n(x)| \le \dfrac{1}{2 ^ {n - 1}}
$$

Now we are going to prove that zeros of chebyshev polynomials are the best interpolation points.

Proof by contradiction:

Suppose that there exist a monic polynomial $p(x)$ with same degree as $w(x)$, which provide a narrower error bound than $w(x)$, and $p(x)$ has $n$ zeros.

We consider the extrema of $w(x)$.

Since $|p(x)| < {1 \over 2 ^ {n - 1}}$

When $w(x) = \dfrac{1}{2 ^ {n - 1}}$, $w(x) - p(x) = \dfrac{1}{2 ^ {n - 1}} - p(x) > 0$

When $w(x) = -\dfrac{1}{2 ^ {n - 1}}$, $w(x) - p(x) = -\dfrac{1}{1 ^ {n - 1}} - p(x) < 0$

Since $w(x) - p(x)$ alternates between positive and negative at $n + 1$ points, there must be at least $n$ zeros of $w(x) - p(x)$.

Since $w(x)$ and $p(x)$ is monic polynomial with degree $n$, $w(x) - p(x)$ is a polynomial with degree $n - 1$.

Polynomial with degree $n - 1$ can't have $n$ zeros, so no such polynomial $p(x)$ exists.

$\square$ 

So this is why we use zeros of chebyshev polynomials as interpolation points.