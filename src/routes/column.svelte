<script lang="ts">
	import Item from './item.svelte';
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { is_empty, select_option } from 'svelte/internal';
	import { onMount } from 'svelte';

	export let _TITLE = 'default empty';
	export let _URL_PARAM = 'no URL-Param';

	let _URL = 'http://localhost:8000/';
	let _ARR: string[] = [];

	let _DIV: HTMLDivElement;
	let _AUTOSCROLL: boolean;

	let _TEXTFIELD_VALUE: string;
	let _TEXTFIELD: HTMLInputElement;

	async function _get_init_items(_URL: string, _URL_PARAM: string) {
		const _RES = await fetch(_URL + _URL_PARAM);
		const _RES_JSON = await _RES.json();
		if (_RES.status == 200) {
			return _RES_JSON[0].text;
		}
		if (_RES.status == 400) {
			console.log(_URL_PARAM + ' - status: ', _RES.status, ' - error: ', _RES_JSON);
			return '400_ERROR_NO_INIT_ITEM';
		}
	}

	onMount(async () => {
		_ARR[0] = await _get_init_items(_URL, _URL_PARAM);
		if (_ARR[0] == '400_ERROR_NO_INIT_ITEM') {
			_ARR = [];
		}
	});

	beforeUpdate(() => {
		_AUTOSCROLL = _DIV && _DIV.offsetHeight + _DIV.scrollTop > _DIV.scrollHeight - 20;
	});

	afterUpdate(() => {
		if (_AUTOSCROLL) _DIV.scrollTo(0, _DIV.scrollHeight);
	});

	function _add(_ITEM: string) {
		if (_ITEM != undefined && _ITEM != '') {
			_ARR = [..._ARR, _ITEM];
			_TEXTFIELD_VALUE = '';
		}
	}

	const _on_key_press = (e) => {
		if (e.charCode === 13) _add(_TEXTFIELD_VALUE);
	};
</script>

<div class=" p-1 sm:w-1/3  flex-auto sm:h-36/40	">
	<div
		class=" relative truncate text-white  rounded-t-md 
     py-1     bg-gray-800 text-center  text-2xl "
	>
		<div class=" inline-block"><h2>{_TITLE}</h2></div>
		<div class="inline-block ">
			<div
				class="absolute top-1 right-1 text-center  w-min rounded-md hover:text-gray-200
		text-transparent hover:bg-gray-500 bg-transparent pr-2 pb-0.5 pl-1"
			>
				<button>
					<svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
						<path stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>
	</div>
	{#if !is_empty(_ARR)}
		<div
			bind:this={_DIV}
			class="bg-gray-300 border-r-2 border-l-2 
            sm:max-h-full sm:overflow-y-auto
        border-gray-200 py-1"
		>
			{#each _ARR as _ITEM}
				<Item {_ITEM} />
			{/each}
		</div>
	{/if}
	<div class="text-center  rounded-b-md  bg-gray-400  p-1">
		<div class="inline 	   rounded-sm p-1">
			<input
				bind:this={_TEXTFIELD}
				class="rounded-sm w-1/2 "
				on:keypress={_on_key_press}
				bind:value={_TEXTFIELD_VALUE}
				placeholder="enter an Item"
			/>
		</div>
		<div class="inline 	">
			<button
				class="bg-gray-800 text-white rounded-md p-1 m-1 hover:bg-gray-200  hover:text-black"
				on:click={() => {
					_add(_TEXTFIELD_VALUE);
					_TEXTFIELD.focus();
				}}>Add Item</button
			>
		</div>
	</div>
</div>
