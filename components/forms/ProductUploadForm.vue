<template>
	<form class="h-fit p-2 w-[45%] space-y-2">
		<div class="flex flex-col space-y-2">
			<label
				class="product-upload-labels after:content-['*'] after:text-error"
				for="product-id"
				>Product Id(Auto Generated)</label
			>
			<input
				type="text"
				class="product-upload-inputs"
				placeholder="Product Id"
				id="product-id" />
		</div>
		<div class="flex space-x-4">
			<div class="flex flex-col space-y-2 w-1/2">
				<label
					class="product-upload-labels after:content-['*'] after:text-error"
					for="product-name"
					>Product Name</label
				>
				<input
					type="text"
					class="product-upload-inputs"
					placeholder="Product Name"
					id="product-name" />
			</div>
			<div class="flex flex-col space-y-2 w-1/2">
				<label
					class="product-upload-labels"
					for="product-id"
					>Product Category</label
				>
				<select
					id="product-category"
					class="product-upload-inputs bg-transparent">
					<option
						class="hover:bg-gray-300 p-2 rounded-md"
						v-for="(category, index) in [
							'Baby Products',
							'Beauty',
							'Books',
							'Cameras and Photos',
							'Cellphones & Accessories',
							'Music & DVD',
						]"
						:key="index"
						:value="category">
						{{ category }}
					</option>
				</select>
			</div>
		</div>
		<div class="flex space-x-2">
			<div class="flex flex-col space-y-2 w-1/2">
				<label
					class="product-upload-labels"
					for="product-weight"
					>Product Weight(KGs)</label
				>
				<input
					type="text"
					datatype="number"
					pattern="[0-...]"
					class="product-upload-inputs"
					placeholder="Product Weight"
					id="product-weight" />
			</div>
			<div class="flex flex-col space-y-2 w-1/2">
				<label
					class="product-upload-labels"
					for="product-color"
					>Product Color</label
				>
				<input
					type="text"
					datatype="number"
					pattern="[0-...]"
					class="product-upload-inputs"
					placeholder="Product Color"
					id="product-color" />
			</div>
		</div>
		<div class="flex flex-col space-y-2">
			<label
				class="product-upload-labels after:content-['*'] after:text-error"
				for="product-base-price"
				>Product Base Price</label
			>
			<input
				type="text"
				datatype="number"
				pattern="[0-...]"
				class="product-upload-inputs"
				placeholder="Product Base Price"
				id="product-base-price" />
		</div>
		<div class="flex flex-col space-y-2">
			<label
				class="product-upload-labels after:content-['*'] after:text-error"
				for="product-asignee"
				>Product Asignee</label
			>
			<input
				type="text"
				class="product-upload-inputs"
				placeholder="Product Id"
				id="product-asignee" />
		</div>
		<div class="w-full">
			<label
				for="photos"
				class="product-upload-labels after:content-['*'] after:text-error"
				>Upload Product Photo</label
			>
			<label
				for="dropzone-file"
				class="mt-2 h-52 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100">
				<div
					class="flex flex-col items-center justify-center pt-5 pb-6">
					<FileUploadIcon />
					<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
						<span class="font-semibold">Click to upload</span>
						or drag and drop
					</p>
				</div>
				<input
					id="dropzone-file"
					type="file"
					class="hidden" />
			</label>
		</div>
		<div class="flex justify-center p-2">
			<button class="generic-button p-2">Upload Product</button>
		</div>
	</form>
</template>

<script setup></script>
