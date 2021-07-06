<script lang="ts">
	export let _ITEM = 'default empty';
</script>

<div
	class="relative overflow-ellipsis text-center overflow-hidden  
border-gray-300 border-2 rounded-md  m-1.5 p-1.5 break-words bg-gray-100 shadow-md "
>
	{_ITEM}
	<div
		class="absolute top-1 right-1    text-center  w-min rounded-md hover:text-white
	text-transparent hover:bg-gray-400 bg-transparent  pr-1.5 pt-0.5 pl-0.5  "
	>
		<button>
			<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
				<path stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			</svg>
		</button>
	</div>
</div>
