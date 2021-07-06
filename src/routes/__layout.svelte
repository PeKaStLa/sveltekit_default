<!-- src/routes/__layout.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	let page: number;
	let mobileMenuVisible: boolean = true;
	onMount(async () => {
		const urlParams = new URLSearchParams(window.location.pathname);

		if (urlParams.has('/')) {
			page = 1;
		}
		if (urlParams.has('/kanban')) {
			page = 2;
		}
		if (urlParams.has('/test')) {
			page = 3;
		}
		if (urlParams.has('/about')) {
			page = 4;
		}
	});
</script>

<div class=" md:pb-0 " class:pb-0={mobileMenuVisible}>
	<div class=" md:pb-0 {mobileMenuVisible ? 'pb-0' : 'pb-0'}">
		<nav class="bg-gray-800 fixed w-full z-50  ">
			<div class=" px-8 sm:px-8 lg:px-8 ">
				<div class="flex items-center justify-between h-16  ">
					<div class="flex items-center ">
						<div class="flex-shrink-0 ">
							<img
								class="h-8 w-8"
								src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
								alt="Workflow"
							/>
						</div>
						<div class="hidden md:block">
							<div class="ml-10 flex items-baseline space-x-4">
								<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

								<a
									href="."
									on:click={() => (page = 1)}
									class="{page === 1
										? 'bg-gray-900 text-white '
										: 'text-gray-300  hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium"
									>Home</a
								>

								<a
									href="kanban"
									on:click={() => (page = 2)}
									class="{page === 2
										? 'bg-gray-900 text-white '
										: 'text-gray-300  hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium"
									>Kanban</a
								>

								<a
									href="test"
									on:click={() => (page = 3)}
									class="{page === 3
										? 'bg-gray-900 text-white '
										: 'text-gray-300  hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium"
									>Test</a
								>

								<a
									href="about"
									on:click={() => (page = 4)}
									class="{page === 4
										? 'bg-gray-900 text-white '
										: 'text-gray-300  hover:bg-gray-700 hover:text-white'} px-3 py-2 rounded-md text-sm font-medium "
									>About</a
								>
							</div>
						</div>
					</div>
					<div class="-mr-2 flex md:hidden">
						<!-- Mobile menu button -->
						<button
							type="button"
							on:click={() => (mobileMenuVisible = !mobileMenuVisible)}
							class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span class="sr-only">Open main menu</span>
							<!--
              Heroicon name: outline/menu
              Menu open: "hidden", Menu closed: "block"
            -->

							<svg
								class="{mobileMenuVisible ? 'hidden' : 'block'} h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>

							<!--
              Heroicon name: outline/x
              Menu open: "block", Menu closed: "hidden"
            -->

							<svg
								class=" h-6 w-6 {mobileMenuVisible ? 'block' : 'hidden'}"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			<!-- Mobile menu, show/hide based on menu state. -->

			<div class="md:hidden {mobileMenuVisible ? 'block' : 'hidden'} " id="mobile-menu">
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

					<a
						href="."
						on:click={() => (page = 1)}
						class=" {page === 1
							? 'bg-gray-900 text-white '
							: 'text-gray-300  hover:bg-gray-700 hover:text-white'} 
				 px-3 py-2 block rounded-md text-base font-medium">Home</a
					>

					<a
						href="kanban"
						on:click={() => (page = 2)}
						class=" {page === 2
							? 'bg-gray-900 text-white '
							: 'text-gray-300  hover:bg-gray-700 hover:text-white'}
						 block px-3 py-2 rounded-md text-base font-medium">Kanban</a
					>

					<a
						href="test"
						on:click={() => (page = 3)}
						class=" {page === 3
							? 'bg-gray-900 text-white '
							: 'text-gray-300  hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium"
						>Test</a
					>

					<a
						href="about"
						on:click={() => (page = 4)}
						class=" {page === 4
							? 'bg-gray-900 text-white '
							: 'text-gray-300  hover:bg-gray-700 hover:text-white'} block px-3 py-2 rounded-md text-base font-medium"
						>About</a
					>
				</div>
			</div>
		</nav>
	</div>
</div>

<slot />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
