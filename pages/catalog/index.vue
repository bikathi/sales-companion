<template>
	<div class="flex-grow flex flex-col items-center px-2 pt-2">
		<div
			class="mx-2 px-2 h-fit p-2 shadow-md border-[0.5px] rounded-md w-full mt-2 flex items-center justify-between">
			<h1 class="font-roboto text-2xl tracking-wide">Product Listings</h1>
			<div class="w-[30%] flex">
				<input
					type="text"
					id="search-query"
					class="product-search-input"
					placeholder="Search by Product ID" />
				<button
					class="generic-button rounded-r-full inline-flex items-center space-x-1">
					<span>Search</span>
					<SearchMagnifyIcon />
				</button>
			</div>

			<div>
				<span title="New Product Entry">
					<NuxtLink :to="{ name: 'product-upload' }">
						<NewProductIcon />
					</NuxtLink>
				</span>
			</div>
		</div>
		<!-- <div class="bg-red-500 h-full w-full">
			<h1>hello world</h1>
		</div> -->
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'dashboard-layout',
	});
</script>
