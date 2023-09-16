<template>
	<div class="flex-grow flex flex-col items-center p-2">
		<h1 class="mt-5 font-roboto text-2xl tracking-wide">
			Add a New Employee
		</h1>
		<NewEmployeeForm />
	</div>
</template>

<script setup>
	definePageMeta({
		layout: 'dashboard-layout',
		name: 'employee-creation',
	});
</script>
