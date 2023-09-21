<template>
	<div
		:class="alertType === 'info' ? 'bg-secondary/80' : 'bg-alert'"
		class="flex absolute bottom-4 left-4 text-white w-fit p-2 rounded-md items-center space-x-2">
		<span class="font-nunito font">{{ alertMessage }}</span>
		<div
			class="radial-progress text-base-200"
			style="--value: 80; --size: 1.5rem; --thickness: 4px"></div>
	</div>
</template>

<script setup>
	defineProps({
		alertMessage: {
			type: String,
			default: 'Alert Message Here',
			required: true,
		},
		alertType: {
			type: String,
			default: 'info',
			required: true,
		},
	});
</script>
