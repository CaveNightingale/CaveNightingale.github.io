<script lang="ts">
	import Avatar from "$lib/component/McbbsUserAvatar.svelte";
	import katex from 'katex';
</script>
<style>
	:global(#rational-examples) {
		border-collapse: collapse;
	}
	:global(#rational-examples-div) {
		position: relative;
	}
	:global(#rational-examples td) {
		height: 6em;
		width: 6em;
		position: relative;
	}
	:global(#rational-examples td .katex-display > .katex ) {
		padding-left: 0 !important;
	}
</style>

# 标题测试
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

# 正文测试

正文1

正文2

**加粗**

- a
	- c
* b
	* c

# Katex测试
$$
\begin{align}
1 + 1 = 2 \\
333 + 2 = 335
\end{align}
$$

$p$ is a prime number.

# 内嵌Svelte测试

混乱头像

<Avatar username="混乱" uid={3038} />

# 代码块测试

> 代码块还没做好

```python
def gcd(a, b):
	"""
	Input should garrantee that a >= b >= 0
	"""
	return a if b == 0 else gcd(b, a % b) # Euclid's algorithm

def is_true(a):
	if a == True:
		return True
	else if a == "True":
		return True
	else if a == 1:
		return True
	else if a == "1":
		return True
	else:
		return False

```

```rust
fn main() {
	let x = |y: i8| y + 1;
	println!("{}", x(1));
}
```
