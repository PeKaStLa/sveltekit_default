<script lang="ts">
	import Nested from './nested.svelte';
	let todo: string[] = ['code', 'eat', 'sleep', 'repeat'];
</script>

<div class="pt-72 md:pt-20 h-full w-full bg-cover 	">
	<h2>ToDo:</h2>
	{#each todo as item}
		<Nested {item} />
	{/each}
</div>
