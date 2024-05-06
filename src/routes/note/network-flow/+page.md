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

## Argumenting Path and Max-Flow Min-Cut Theorem

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

The since the argumenting path must pass through the source $s$ and sink $t$, the value of the new flow $|f^*| = |f| + d$.

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

But the existence of the maximum flow is not guaranteed in this theorem. Although we will construct a maximum flow in the next section. A common error is to derive the existence of the maximum flow by the fact that the value of the flow is bounded above, which is nonsense since boundedness does not guarantee the existence of the maximum value but only the existence of the supremum.

</Proof>

## Ford-Fulkerson Method

<State variant="definition" name="Residual Network">

**Residual Network** $G_f$ of a network $G$ with respect to a flow $f$ is defined as the graph with the same vertices and edges are defined as follows:

- For each edge $(u, v) \in E$, if $f(u, v) < c(u, v)$, then add an edge $(u, v)$ with capacity $c(u, v) - f(u, v)$.
- For each edge $(u, v) \in E$, if $f(u, v) > 0$, then add an edge $(v, u)$ with capacity $f(u, v)$.

The residual network actually tells how much flow can be added or removed from the original network.

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

This algorithm terminates. We will provide the proof later. The time complexity is $O(|V|^2|E|)$.

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

We explain the algorithm first.

The algorithm create a residual network $G_f$ with the same vertices and edges as the original network $G$.

Then it performs a BFS from the source $s$ to the sink $t$ in the residual network $G_f$ to find the level of each vertex. If the sink $t$ is not reachable from the source $s$, the algorithm terminates. Level is assign as the shortest path length from the source $s$.

Then it performs a DFS from the source $s$ to the sink $t$ in the residual network $G_f$ to find the argumenting path. Actually, DFS go back to a vertex that has extra capacity and retry on another edge if the current edge does not exaust the flow instead of directly go back to the source $s$.

And since it's possible to reach the sink $t$ from the source $s$, DFS always makes progress.

As we see this algorithm is an implementation of the Ford-Fulkerson Method. So if it terminates, then it's correct and only thing to prove is the termination.

We define the distance of a vertex $v$ from the source $s$ as the level of $v$. And the subgraph of the residual network $G_f$ with vertices with level is denoted as $G_L$, where $V(G_L) = V(G_f)$ and $E(G_L) = \{(u, v) \in E(G_f) | u.level = v.level - 1\}$. It's easy to see that DFS exhausts the flow in $G_L$ before relabeling the vertices.

We want to prove that the level of sink $t$ is strictly increasing in each iteration of the BFS. Since the levels are integers and bounded by $|V|$, this lead to the conclusion that the number of iterations is finite and bounded by $|V|$.

Let'ss define the concept of height label $h$. A function $h: V \to \mathbb{N}$ is a height label if $h(s) = |V|$ and $h(u) \le h(v) + 1$ for all $(u, v) \in E(G_f)$.

Let the level before relabeling be $d$ and the level after relabeling be $d'$. Consider all element $(u, v)$ in $E_{f'}$.

- If $(u, v) \in E_f$, that means the capacity of $(u, v)$ is not exhausted. Therefore $d(v) \le d(u) + 1$ from the definition of shortest path.
- If $(u, v) \notin E_f$, that means the edge is added because the reverse edge is used. Therefore $d(u) = d(v) - 1$.

Therefore, the level $h$ found in previous BFS is a height label in $G_{f'}$ and of course in $G_{L'}$.

Consider an argumenting path $P = (s, v_1, v_2, \dots, v_n, t)$ in $G_{L'}$. Obviously $d'(t)$ is the length of the path. And since $d$ is a valid height label on $G_{L'}$, we have $d(v_{i + 1}) \le d(v_{i}) + 1$. Sum them up for all vertices in the path, we have $d(t) \le d(s) + d'(t)$ or simply $d(t) \le d'(t)$ since $d(s) = 0$.

But we are going to show that the equality never holds. Suppose the equality holds, then there is an argumenting path $P$ in $G_{L'}$ with length $d(t)$.

There should be an edge that does not exists in $G_f$ but in path $P$. Otherwise, since the equality holds, all edges in the path are make up of a pair of vertices with level difference $1$, which means the path is also in $G_L$. But this contradicts the fact that the flow is exhausted in $G_L$ before relabeling.

Let's say the edge in $P$ that does not exists in $G_f$ is $(u, v)$. Since the equality $d(v) = d(u) + 1$ holds, the edge should be in $G_L$ if it exists in $G_f$. Hence the edge does not exists in $G_f$, which gives that $(u, v)$ is added because the reverse edge is used. Therefore, the edge $(v, u)$ is in $G_L$. But this derives $d(v) = d(u) - 1$ and not $d(v) = d(u) + 1$, which is a contradiction.

Therefore, $d(t) < d'(t)$ or in another word the level of the sink $t$ is strictly increasing in each iteration of the BFS.

Since the level of the sink $t$ is strictly increasing, the length of the path is strictly increasing. Therefore, the number of iterations is finite and bounded by $|V|$.

Therefore the algorithm terminates.

</Proof>

<State variant="collary">

The Max-Flow exists.

</State>

<Proof>

Combine the fact that Dinic's Algorithm terminates and previous theorem that the flow is maximum if the algorithm terminates.

</Proof>

We continue the proof of Dinic's Algorithm now.

<Proof variant="time">

For each DFS attempt, it either make some progress or find somewhere with capacity $0$. For the case that it make progress, it clear the capacity of at least one edge, and by the property of $G_L$, the reverse edge is never used, which gives that the capacity never recover before relabeling. For the case that it find somewhere with capacity $0$, it moves the $current$ pointer from the edge with $0$ capacity to the next edge, which gives that the edge with $0$ capacity is never visited again. Therefore we make $O(|E|)$ attempts to find an argumenting path.

The depth of each attempt is at most the number of vertices $|V|$.

Therefore, the DFS operation between two consecutive BFS operations takes $O(|V||E|)$ time.

Combine the previous proof that the number of BFS operations is $O(|V|)$, we have the total time complexity is $O(|V|^2|E|)$.

</Proof>

<State variant="property">

For any integer-valued capacity function, Dinic's Algorithm gives an integer-valued maximum flow.

</State>

<Proof>

We see that Dinic's Algorithm only uses $+, -, \min$ operations, and the closure property of integers under these operations gives the result.

</Proof>

## Bipartite Matching

Bipartite matching problem is a special case of network flow problem. Let describe the problem formally first.

<State variant="definition">

Given a bipartite graph $G = (U, V, E)$, where $U$ and $V$ are two disjoint sets of vertices and $E$ is the set of edges connecting vertices in $U$ and $V$. The **bipartite matching** is a subset of edges $M \subseteq E$ such that no two edges in $M$ share a common vertex.

</State>

<State variant="example">

<Graph>

```
node(100 + 75i, "u_1");
node(200 + 75i, "u_2");
node(300 + 75i, "u_3");
node(400 + 75i, "u_4");
node(50 + 225i, "v_1");
node(150 + 225i, "v_2");
node(250 + 225i, "v_3");
node(350 + 225i, "v_4");
node(450 + 225i, "v_5");
edge(u_1, v_1);
edge(u_1, v_2, "", 0, "bold");
edge(u_2, v_2);
edge(u_2, v_4, "", 0, "bold");
edge(u_3, v_3);
edge(u_3, v_1, "", 0, "bold");
edge(u_3, v_5);
edge(u_4, v_2);
edge(u_4, v_3, "", 0, "bold");
edge(u_4, v_5);
```

</Graph>

To make things clear, we draw the source $s$ and sink $t$ explicitly. All edges have capacity $1$ and is from top to bottom. Bold edges are the edges in the bipartite matching, or in another word, the edges with flow $1$. And for any integer-valued flow, there is a corresponding bipartite matching $M = \{(u, v) \in E| f(u, v) = 1\}$.

<Graph>

<!--
Notice that dictionary order is required for edge (u, v) in jsGraph library.
Actually I hate this.
-->
```
node(250 + 25i, "s");
node(100 + 75i, "u_1");
node(200 + 75i, "u_2");
node(300 + 75i, "u_3");
node(400 + 75i, "u_4");
node(50 + 225i, "v_1");
node(150 + 225i, "v_2");
node(250 + 225i, "v_3");
node(350 + 225i, "v_4");
node(450 + 225i, "v_5");
node(250 + 275i, "t");
edge(s, u_1, "", 0, "bold");
edge(s, u_2, "", 0, "bold");
edge(s, u_3, "", 0, "bold");
edge(s, u_4, "", 0, "bold");
edge(u_1, v_1);
edge(u_1, v_2, "", 0, "bold");
edge(u_2, v_2);
edge(u_2, v_4, "", 0, "bold");
edge(u_3, v_3);
edge(u_3, v_1, "", 0, "bold");
edge(u_3, v_5);
edge(u_4, v_2);
edge(u_4, v_3, "", 0, "bold");
edge(u_4, v_5);
edge(t, v_1, "", 0, "bold");
edge(t, v_2, "", 0, "bold");
edge(t, v_3, "", 0, "bold");
edge(t, v_4, "", 0, "bold");
edge(t, v_5);
```

</Graph>

</State>

<State variant="theorem">

Dinic's Algorithm can terminate in $O(\sqrt{|V|}|E|)$ time for bipartite matching problem.

</State>

To be continued.

## Min-Cost Flow

To be continued.
