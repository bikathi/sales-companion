<template>
	<div class="flex-grow flex flex-col items-center px-2 pt-2">
		<div
			class="mx-2 px-2 h-fit p-2 shadow-md border-[0.5px] rounded-md w-full mt-2 flex items-center justify-between">
			<h1 class="font-roboto text-2xl tracking-wide">Product Listings</h1>
			<div class="w-[30%]">
				<div class="w-full flex">
					<input
						type="text"
						id="search-query"
						class="product-search-input"
						placeholder="Search by Product ID or Name" />
					<button
						class="generic-button rounded-r-full inline-flex items-center space-x-1">
						<span>Search</span>
						<SearchMagnifyIcon />
					</button>
				</div>
				<div
					class="font-nunito text-sm my-1 flex justify-center items-center space-x-2">
					<span>Search by: </span>
					<label for="search-by-name">Name</label>
					<input
						type="radio"
						name="radio-1"
						class="radio-sm hover:cursor-pointer"
						id="search-by-name"
						checked />
					<label for="search-by-id">ID</label>
					<input
						type="radio"
						name="radio-1"
						class="radio-sm hover:cursor-pointer"
						id="search-by-id"
						checked />
				</div>
			</div>
			<div>
				<span title="New Product Entry">
					<NuxtLink :to="{ name: 'product-upload' }">
						<NewProductIcon />
					</NuxtLink>
				</span>
			</div>
		</div>
		<div class="h-full w-full">
			<div class="overflow-x-auto h-full">
				<table class="table">
					<!-- head -->
					<thead>
						<tr>
							<th>Product Name</th>
							<th>Product Description</th>
							<th>Product Color & Weight</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<!-- row 1 -->
						<tr>
							<td>
								<div class="flex items-center space-x-3">
									<div class="avatar">
										<div
											class="mask mask-squircle w-12 h-12">
											<img
												src="/tailwind-css-component-profile-2@56w.png"
												alt="Avatar Tailwind CSS Component" />
										</div>
									</div>
									<div>
										<div class="font-bold">
											Hart Hagerty
										</div>
										<div class="text-sm opacity-50">
											United States
										</div>
									</div>
								</div>
							</td>
							<td>
								Zemlak, Daniel and Leannon
								<br />
								<span class="badge badge-ghost badge-sm"
									>Desktop Support Technician</span
								>
							</td>
							<td>Purple</td>
							<th>
								<div class="dropdown dropdown-right">
									<label
										tabindex="0"
										class="btn m-1 btn-sm"
										>Actions</label
									>
									<ul
										tabindex="0"
										class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
										<li><button>Sell Product</button></li>
										<li>
											<button class="hover:bg-warning">
												Delete Product
											</button>
										</li>
									</ul>
								</div>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>

	<!-- Initiate sales screen -->
	<InitiateSaleModal />
</template>

<script setup>
	definePageMeta({
		layout: 'dashboard-layout',
	});
	const displayInitiateSaleScreen = ref(false);
</script>
