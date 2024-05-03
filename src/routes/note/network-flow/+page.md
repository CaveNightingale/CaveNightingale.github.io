---
category: Graph Theory
---

<script lang="ts">
	import Proof from '$lib/component/content/Proof.svelte';
	import State from '$lib/component/content/State.svelte';
	import Algor from '$lib/component/content/Algor.svelte';
	import Graph from '$lib/component/content/Graph.svelte';
</script>

# Network Flow

Network flow is an interesting but difficult topic in graph theory. Most algorithm have high time complexity.

## Definition

<State variant="definition">

A **network** is a simple directed graph $G = (V, E)$, where $E$ is anti-symmetric, with a capacity function $c: E \to \mathbb{R}^+$ and two distinguished vertices, the source $s$ and the sink $t$.

</State>

<State variant="example">

<Graph directed>

```
node(50 + 150i, "s");
node(400 + 150i, "t");
node(150 + 150i, "v_1");
node(300 + 150i, "v_2");
node(200 + 250i, "v_3");
node(200 + 50i, "v_4");
edge(s, v_1, 10);
edge(s, v_3, 5);
edge(v_1, v_2, 5);
edge(v_1, v_3, 15);
edge(v_1, v_4, 10);
edge(v_3, v_2, 5);
edge(v_2, t, 10);
edge(v_3, t, 10);
edge(v_4, t, 10);
```

</Graph>

</State>

<State variant="definition">

A **flow** in a graph $(V, E)$ is defined as a real-valued function $f: E \to \mathbb{R}^+$ that satisfies the following conditions:
- Capacity Contraint: $0 \leq f(e) \leq c(e)$ for all $e \in E$.
- Flow conservation: $\sum_{(u, v) \in E} f(u, v) = \sum_{(v, w) \in E} f(v, w)$ for all $v \in (V - \{s, t\})$.

</State>

<State variant="definition">

The **value** of a flow $f$ is defined as the total flow out of the source $s$ minus the total flow into the source $s$, noted as $|f| = \sum_{(s, v) \in E} f(s, v) - \sum_{(v, s) \in E} f(v, s)$.

</State>

## Model Reduction

For non-simple digraphs, we can merge parallel edges into a single edge with the sum of the capacities and remove self-loops.

For non-anti-symmetric digraphs, we can replace $(u, v), (v, u)$ by $(u, v'), (v', v), (v, u)$ where $v'$ is a new vertex, setting the capacity of $(u, v'), (v, v')$ to be the same as $(u, v)$.

For multiple sources and sinks, we can add a new source $s'$, called supersource, and sink $t'$, called supersink, connecting $s'$ to all sources and all sinks to $t'$.

## Agumenting Path and Max-Flow Min-Cut Theorem

<State variant="definition" name="Properly Oriented Edge">

Consider there is path $P = (v_0, v_1, \dots, v_n)$ in the undirected copy of the netwrok $G$, an edge $e = (u, v) \in G$ is called **properly oriented** with respect to $P$ if $u = v_i$ and $v = v_{i + 1}$ for some $i$ and **improperly oriented** if $u = v_{i + 1}$ and $v = v_i$ for some $i$.

</State>

<State variant="example">

<Graph directed>

```
node(50 + 150i, "s");
node(225 + 150i, "v_1");
node(137 + 225i, "'text{properly oriented}", "text");
node(400 + 150i, "t");
node(317 + 225i, "'text{improperly oriented}", "text");
node(225 + 75i, "P = (s, v_1, t)", "text");
edge(s, v_1, 10);
edge(t, v_1, 10);
```

</Graph>

</State>

<State variant="definition" name="Argumenting Path">

Consider a network $G$ with a flow $f$. An **argumenting path** is a simple path $P = (s, v_0, v_1, \dots, v_n, t)$ in the undirected copy of the network $G$ satisfying the following conditions:
- For all edges $e$ properly oriented with respect to $P$, $f(e) < c(e)$.
- For all edges $e$ improperly oriented with respect to $P$, $f(e) > 0$.

</State>

<State variant="theorem">

Suppose there is an argumenting path $P$ in the network $G$ with respect to the flow $f$.

$$
d = \min_{e \in E} \begin{cases}
c(e) - f(e) & \text{if } e \text{ is properly oriented with respect to }P\\
f(e) & \text{if } e \text{ is improperly oriented with respect to }P\\
+\infty & \text{otherwise}
\end{cases}
$$

Then we can construct a new flow $f^*$ with value $|f^*| = |f| + d$.

$$
f^*(e) = \begin{cases}
f(e) + d & \text{if } e \text{ is properly oriented with respect to }P\\
f(e) - d & \text{if } e \text{ is improperly oriented with respect to }P\\
f(e) & \text{otherwise}
\end{cases}
$$

</State>

<Proof>

First by the definition of argumenting path, we have $d > 0$.

And by the formula of $d$, for improperly oriented edges, $f^*(e) = f(e) - d > 0$. For properly oriented edges, $f^*(e) = f(e) + d < c(e)$. Other edges are unchanged. Therefore the adjusted flow $f^*$ is a valid flow.

The since the argument path must pass through the source $s$ and sink $t$, the value of the new flow $|f^*| = |f| + d$.

</Proof>

<State variant="example">

<Graph directed height={400}>

```
node(225 + 20i, "a/b'text{ stands for flow } a 'text{ out of capacity } b", "text");
node(10 + 100i, "f", "text");
node(50 + 150i, "s");
node(175 + 150i, "v_1");
node(300 + 150i, "v_2");
node(425 + 150i, "t");
node(225 + 125i, "'dots", "text");
node(225 + 175i, "'dots$", "text");
edge(s, v_1, "5/10");
edge(v_2, v_1, "3/5");
edge(v_2, t, "0/5");
node(225 + 250i, "d = 3", "text");
node(10 + 300i, "f^*", "text");
node(50 + 350i, "s$");
node(175 + 350i, "v_1$");
node(300 + 350i, "v_2$");
node(425 + 350i, "t$");
node(225 + 325i, "'dots$$", "text");
node(225 + 375i, "'dots$$$", "text");
edge(s$, v_1$, "8/10");
edge(v_2$, v_1$, "0/5");
edge(v_2$, t$, "3/5");
```

</Graph>

</State>

<State variant="definition" name="Cut">

A **cut** is a partition of the vertices $V$ into two sets $P$ and $\overline{P} = V - P$ such that $s \in S$ and $t \in T$.

</State>

<State variant="definition" name="Capacity of a Cut">

The **capacity** of a cut $(P, \overline{P})$ is defined as the sum of the capacities of the edges from $P$ to $\overline{P}$, denoted as $C(P, \overline{P}) = \sum_{(u, v) \in E, u \in P, v \in \overline{P}} c(u, v)$.

</State>

<State variant="example">

<Graph directed>

```
node(50 + 150i, "s");
node(400 + 150i, "t", "light");
node(150 + 150i, "v_1");
node(300 + 150i, "v_2", "light");
node(200 + 250i, "v_3", "light");
node(200 + 50i, "v_4");
edge(s, v_1, 10);
edge(s, v_3, 5);
edge(v_1, v_2, 5);
edge(v_1, v_3, 15);
edge(v_1, v_4, 10);
edge(v_3, v_2, 5);
edge(v_2, t, 10);
edge(v_3, t, 10);
edge(v_4, t, 10);
node(200 + 290i, "C(P, 'overline{P}) = 35", "text");
```

</Graph>

</State>

<State variant="theorem">

For any flow $f$ in the network $G$, and any cut $(P, \overline{P})$, we have

$$
|f| \leq C(P, \overline{P})
$$

</State>

<Proof>

Consider flows enter $P - \{s\}$ and leave $\overline{P} - \{s\}$, we have

$$
0\\
= \sum_{u \in (P - {s})} 0\\
= \sum_{u \in (P - {s})} \left(\sum_{v \in V, (u, v) \in E} f(u, v) - \sum_{v \in V, (v, u) \in E} f(v, u)\right)\\
= \sum_{u \in (P - {s})} \left(\sum_{v \in P, (u, v) \in E} f(u, v) - \sum_{v \in P, (v, u) \in E} f(v, u) + \sum_{v \in \overline{P}, (u, v) \in E} f(u, v) - \sum_{v \in \overline{P}, (v, u) \in E} f(v, u)\right)\\
= \sum_{u \in (P - {s})} \left(\sum_{v \in P, (u, v) \in E} f(u, v) - \sum_{v \in P, (v, u) \in E} f(v, u)\right) + \sum_{u \in (P - {s})}\left(\sum_{v \in \overline{P}, (u, v) \in E} f(u, v) - \sum_{v \in \overline{P}, (v, u) \in E} f(v, u)\right)\\
= \sum_{u \in P, v \in P, (u, v) \in E} f(u, v) - \sum_{u \in P, v \in P, (v, u) \in E} f(v, u) + \sum_{u \in (P - {s})}\left(\sum_{v \in \overline{P}, (u, v) \in E} f(u, v) - \sum_{v \in \overline{P}, (v, u) \in E} f(v, u)\right) \text{(Note: Simple graph.)}\\
= \sum_{u \in (P - {s})}\left(\sum_{v \in \overline{P}, (u, v) \in E} f(u, v) - \sum_{v \in \overline{P}, (v, u) \in E} f(v, u)\right) \text{(Note: First 2 summations have same region.)}\\
= \left(\sum_{u \in P, v \in \overline{P}, (u, v) \in E} f(u, v) - \sum_{u \in P, v \in \overline{P}, (v, u) \in E} f(v, u)\right) - \left(\sum_{v \in \overline{P}, (s, v) \in E} f(s, v) - \sum_{v \in \overline{P}, (v, s) \in E} f(v, s)\right)\\
\le \left(\sum_{u \in P, v \in \overline{P}, (u, v) \in E} f(u, v) - \sum_{u \in P, v \in \overline{P}, (v, u) \in E} f(v, u)\right) - \left(\sum_{v \in V, (s, v) \in E} f(s, v) - \sum_{v \in V, (v, s) \in E} f(v, s)\right) \\
= \sum_{u \in P, v \in \overline{P}, (u, v) \in E} f(u, v) - \sum_{u \in P, v \in \overline{P}, (v, u) \in E} f(v, u) - |f|\\
\le \sum_{u \in P, v \in \overline{P}, (u, v) \in E} c(u, v) - \sum_{u \in P, v \in \overline{P}, (v, u) \in E} c(v, u) - |f|\\
= C(P, \overline{P}) - |f|
$$

And move the $|f|$ to the left side, we have $|f| \leq C(P, \overline{P})$.

</Proof>

<State variant="theorem" name="Max-Flow Min-Cut Theorem">

If the equality $|f| = C(P, \overline{P})$ holds for some flow $f$ and cut $(P, \overline{P})$, then the flow $f$ is a maximum flow and the cut $(P, \overline{P})$ is a minimum cut. And the equality hold if and only if $f(i, j) = c(i, j)$ for all $(i, j) \in E$ with $i \in P$ and $j \in \overline{P}$ and $f(i, j) = 0$ otherwise.

</State>

<Proof>

Obtained from the above reduction when two $\le$ is used in the proof.

</Proof>

## Ford-Fulkerson Method

<State variant="definition" name="Residual Network">

**Resiual Network** $G_f$ of a network $G$ with respect to a flow $f$ is defined as the graph with the same vertices and edges as $G$ and the capacity function $c_f: E \to \mathbb{R}^+$ defined as

$$
c_f(u, v) = \begin{cases}
c(u, v) - f(u, v) & \text{if } (u, v) \in E\\
f(v, u) & \text{if } (v, u) \in E\\
0 & \text{otherwise}
\end{cases}
$$

</State>

<State variant="algorithm" name="Ford-Fulkerson Method">

Coninuously find an argumenting path in the residual network $G_f$ and adjust the flow $f$ until no argumenting path can be found.

</State>

<State variant="theorem">

After the Ford-Fulkerson Method, the flow $f$ is a maximum flow.

</State>

<Proof>

First, after the Ford-Fulkerson Method, the sink $t$ should not be reachable from the source $s$ in the residual network $G_f$. Otherwise, there is an argumenting path in the residual network $G_f$.

Therefore, the vertices reachable from the source $s$ in the residual network $G_f$ form a cut $(P, \overline{P})$ with $s \in P$ and $t \in \overline{P}$. There shouldn't be a edge from $P$ to $\overline{P}$ in the residual network $G_f$, otherwise there exists a vertex in $\overline{P}$ reachable from the source $s$, which leads to a contradiction.

Therefore, the flow $f$ is a maximum flow.

But this does not guarantee the termination of the algorithm. If the capacities are integers, the algorithm obviously terminates since the flow value increases and bounded. But if it is not, the algorithm may not terminate since we know there are some infinate increasing sequences in real numbers.

</Proof>

<State variant="algorithm" name="Dinic's Implementation of Ford-Fulkerson Method">

This algorithm terminates. We will provide the proof later. The time complexity is $O(V^2E)$.

<Algor>

```
$'fn{bfs}(s, t, vertices)$ [
	for $u$ in $vertices$ [
		$u.level = -1$
	]
	$q = {s}$
	$s.level = -1$
	while $'neg 'fn{QUQUE-EMPTY}(q)$ [
		$u = 'fn{QUQUE-POP}(q)$
		for $e$ in $u.edges$ [
			if $e.v.level = -1$ and $e.cap > 0$ [
				$e.v.level = u.level + 1$
				$'fn{QUQUE-PUSH}(q, e.v)$
			]
		]
	]
	return $t.level \neq -1$
]

$'fn{dfs}(u, f, t)$ [
	if $u = t 'lor f 'le 0$ [
		return $f$
	]
	$r = 0$
	while $u.current < |u.edges|$ [
		$e = u.edges(u.current)$
		if $e.cap > 0 'land e.v.level = u.level + 1$ [
			$delta = 'fn{dfs}(e.v, 'min(f - r, e.cap), t)$
			$e.cap -= delta$
			$e.rev.cap += delta$
			$r += delta$
			if $r = f$ [
				return $r$
			]
		]
		$u.current += 1$
	]
	return $r$
]

# d is the digraph of the network, c is the capacity function, s is the source, t is the sink
# Return the maximum flow and the flow function
$'fn{dinic}(d, c, s, t)$ [
	$vertices = 'varnothing$
	$edges = 'varnothing$
	for $u$ in $d.vertices$ [
		$vertices(u) = $ new $'text{Vertex}'{level: -1, edges: 'varnothing, current: 0'}$
	]
	for $e$ in $d.edges$ [
		$u = vertices(e.u)$
		$v = vertices(e.v)$
		$proper = $ new $'text{Edge}'{v: v, cap: c(e), rev: $null$'}$
		$improper = $ new $'text{Edge}'{v: u, cap: 0, rev: proper'}$
		$proper.rev = improper$
		$u.edges(|u.edges|) = proper$
		$v.edges(|v.edges|) = improper$
		$edges(e) = proper$
	]
	$flow = 0$
	$s = vertices(s)$
	$t = vertices(t)$
	while $'fn{bfs}(s, t, vertices)$ [
		for $u$ in $vertices$ [
			$u.current = 0$
		]
		$flow += 'fn{dfs}(s, +'infty, t)$
	]
	$f = 'varnothing$
	for $e$ in $d.edges$ [
		$f(e) = edges(e).rev.cap$
	]
	return $flow, f$
]
```

</Algor>

</State>

<Proof variant="correctness">

To be continued.

</Proof>

## Min-Cost Flow

To be continued.

## Bipartite Matching

To be continued.
