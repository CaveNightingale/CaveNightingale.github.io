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