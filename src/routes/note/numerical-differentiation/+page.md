---
category: Numerical Analysis
---

# Numeric Differentiation

## Finite Difference

By defination of differentiation, we have

$$
f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}
$$

By Taylor's Theorem, if $f$ is twice differentiable, we have

$$
f(x+h) = f(x) + hf'(x) + {h^2 \over 2} f''(\xi)
$$

where $\xi$ is a real number between $x$ and $x + h$.

Then we have

$$
f'(x) = \frac{f(x+h) - f(x)}{h} - {h \over 2} f''(\xi) \approx \frac{f(x+h) - f(x)}{h}
$$

In this case $-{h \over 2} f''(\xi)$ become error. 

**Generally, if error is $O(h^k)$, we say the method is of order $k$.**

$$
f(x + h) = f(x) + hf'(x) + {h^2 \over 2}f''(x) + {h^3 \over 6}f'''(\xi_1)\\
f(x - h) = f(x) - hf'(x) + {h^2 \over 2}f''(x) - {h^3 \over 6}f'''(\xi_2)
$$

where $\xi_1$ is a real number between $x$ and $x + h$, and $\xi_2$ is a real number between $x - h$ and $x$.

Then we have

$$
f'(x) = \frac{f(x+h) - f(x - h)}{2h} - {h^2 \over 12} f'''(\xi_1) - {h^2 \over 12} f'''(\xi_2) \approx \frac{f(x+h) - f(x - h)}{2h}
$$

So we obtain a method of order 2. And obviously this can be written as

$$
f'(x) = \frac{f(x+h) - f(x - h)}{2h} -  {h^2 \over 6} f'''(\xi) \approx \frac{f(x+h) - f(x - h)}{2h}
$$

However, we wonder if we can get the derivative from $f(x)$, $f(x+h)$ and $f(x+2h)$.

Consider
$$
\begin{gather}
f(x + 2h) = f(x) + 2hf'(x) + 2h^2 f''(x) + {4h^3 \over 3} f'''(\xi_1)\\
f(x + h) = f(x) + hf'(x) + {h^2 \over 2} f''(x) + {h^3 \over 6} f'''(\xi_2)
\end{gather}
$$

We want ro remove $f''(x)$ so we subtract $4$ times the second equation from the first one and get

$$
f(x + 2h) - 4 f(x + h) = -3 f(x) - 2h f'(x) + {2h^3 \over 3} f'''(\xi_1) - {2h^3 \over 3} f'''(\xi_2)\\
f'(x) = \frac{- 3 f(x) + 4 f(x + h) - f(x + 2h) }{2h} + {h^2 \over 3} f'''(\xi_1) - {h^2 \over 3} f'''(\xi_2) \approx \frac{- 3 f(x) + 4 f(x + h) - f(x + 2h)}{2h}
$$

The error is $O(h^2)$. The $f(x - 2h)$ case is symmetric, so we just skip it.

**Notice that since $h$ is used as denominator, we can't make it too small.**

## Higher Order Derivatives

### Differentiation Matrix

While it's possible to get higher order derivatives by Taylor's Theorem, it's often hard.

So we apply first order derivative many times.

Notice that in the previous section, the first order derivative is a linear combination of $f(x)$ near $x$.

The operation can be written as a matrix multiplication. Let $x_n = x + nh$, then we have

$$
\begin{pmatrix}
f'(x_1)\\
f'(x_2)\\
f'(x_3)\\
f'(x_4)\\
\vdots\\
f'(x_n)
\end{pmatrix}
\approx
\dfrac{1}{2h}
\begin{pmatrix}
-3 & 4 & -1 & 0 & \cdots & 0\\
1 & -2 & 1 & 0 & \cdots & 0\\
0 & 1 & -2 & 1 & \cdots & 0\\
0 & 0 & 1 & -2 & \cdots & 0\\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots\\
0 & 0 & 0 & 0 & \cdots & -3
\end{pmatrix}
\begin{pmatrix}
f(x_1)\\
f(x_2)\\
f(x_3)\\
f(x_4)\\
\vdots\\
f(x_n)
\end{pmatrix}
$$

So we can have a general formula

$$
\begin{pmatrix}
f^{(k)}(x_1)\\
f^{(k)}(x_2)\\
f^{(k)}(x_3)\\
f^{(k)}(x_4)\\
\vdots\\
f^{(k)}(x_n)
\end{pmatrix}
\approx
(\dfrac{1}{2h})^k
\begin{pmatrix}
-3 & 4 & -1 & 0 & \cdots & 0\\
1 & -2 & 1 & 0 & \cdots & 0\\
0 & 1 & -2 & 1 & \cdots & 0\\
0 & 0 & 1 & -2 & \cdots & 0\\
\vdots & \vdots & \vdots & \vdots & \ddots & \vdots\\
0 & 0 & 0 & 0 & \cdots & -3
\end{pmatrix}^k
\begin{pmatrix}
f(x_1)\\
f(x_2)\\
f(x_3)\\
f(x_4)\\
\vdots\\
f(x_n)
\end{pmatrix}
$$

### Interpolation and Differentiation

It's a good idea to interpolate the function first, then differentiate the interpolation.

Typically, we can use Cubic Spline Interpolation for derivative less than 3, since it's first and second order derivative converge to the original function.

For higher order derivative, we can use Chebyshev Polynomial Interpolation or Lagrange Polynomial Interpolation. They are polynomials and easy to differentiate.