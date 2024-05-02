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

## Definition

<State variant="definition">

A network is a simple directed graph $G = (V, E)$, where $E$ is anti-symmetric, with a capacity function $c: E \to \mathbb{R}^+$ and two distinguished vertices, the source $s$ and the sink $t$.

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

TODO: add more