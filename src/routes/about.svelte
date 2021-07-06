<script lang="ts">
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { is_empty, select_option } from 'svelte/internal';
	import { onMount } from 'svelte';

	let _ZAHL: number = 0;

	function _add() {
		_ZAHL += 1;
	}

	function _remove() {
		_ZAHL -= 1;
	}
</script>

<svelte:head>
	<title>Sveltekit_default</title>
</svelte:head>

<div class="pt-72 md:pt-20 h-full w-full bg-cover 	">
	<h3>{_ZAHL}</h3>
	<button
		class="bg-gray-800 text-white rounded-md p-1 m-1 
				hover:bg-gray-200  hover:text-black"
		on:click={() => {
			_add();
		}}>Add</button
	>
	<button
		class="bg-gray-800 text-white rounded-md p-1 m-1
				 hover:bg-gray-200  hover:text-black"
		on:click={() => {
			_remove();
		}}>Remove</button
	>
</div>
