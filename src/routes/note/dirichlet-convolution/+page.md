---
category: Number Theory
---

<script lang="ts">
	import Proof from '$lib/component/content/Proof.svelte';
	import State from '$lib/component/content/State.svelte';
</script>

# Dirichlet convolution

<State variant="definition">

The Dirichlet convolution of two arithmetic functions $f$ and $g$ is defined as
$$
(f*g)(n) = \sum_{d|n} f(d)g(\frac{n}{d})
$$

</State>