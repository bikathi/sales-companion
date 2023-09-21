<template>
	<div class="h-screen min-h-screen flex flex-col relative">
		<Alert
			v-if="displayAlert"
			:alert-message="alertMessage"
			:alert-type="alertType" />
		<nav
			class="h-[8%] flex flex-row justify-center items-center px-2 border-b">
			<h1 class="self-center text-2xl">{{ organizationName }}</h1>
			<div
				class="w-14 h-14 border-2 rounded-full p-4 flex justify-center items-center hover:border-[4px] transition-all duration-200 ease-in-out hover:cursor-pointer">
				BM
			</div>
		</nav>
		<slot />
		<footer class="p-4 text-center">
			<i>Some footer content here</i>
		</footer>
	</div>
</template>

<script setup>
	const runtimeConfig = useRuntimeConfig();
	const organizationName = runtimeConfig.public.ORGANIZATION_NAME;

	// alert properties
	const displayAlert = ref(false);
	const alertMessage = ref('Test Message Here');
	const alertType = ref('info');
</script>
