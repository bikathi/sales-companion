<template>
	<div class="flex-grow flex flex-col items-center p-2">
		<h1 class="mt-5 font-roboto text-2xl tracking-wide">
			Record A New Product
		</h1>
		<ProductUploadForm />
	</div>
</template>

<script setup>
	import ProductUploadForm from '~/components/forms/ProductUploadForm.vue';

	definePageMeta({
		layout: 'dashboard-layout',
		name: 'product-upload',
	});
</script>
