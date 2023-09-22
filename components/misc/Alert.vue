<template>
	<div
		:class="alertType === 'info' ? 'bg-secondary/80' : 'bg-alert'"
		class="flex absolute bottom-4 left-4 text-white w-fit p-2 rounded-md items-center space-x-2 shadow-md">
		<span class="font-nunito font">{{ alertMessage }}</span>
		<div class="radial-progress text-base-200 spinner-styles"></div>
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

	const componentEmits = defineEmits(['closeAlert']);

	const alertClosesAfter = ref(100);
	onMounted(() => {
		let alertHideCountdown = setInterval(function () {
			alertClosesAfter.value -= 20;
			if (alertClosesAfter.value === 0) {
				componentEmits('closeAlert');
				clearInterval(alertHideCountdown);
			}
		}, 1000);
	});
</script>

<style scoped>
	.spinner-styles {
		--value: v-bind(alertClosesAfter);
		--size: 1.5rem;
		--thickness: 4px;
	}
</style>
