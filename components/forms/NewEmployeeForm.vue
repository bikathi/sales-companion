<template>
	<form class="h-fit p-2 w-[45%] space-y-2">
		<div class="w-full">
			<label
				for="photos"
				class="product-upload-labels"
				>Upload Employee Photo</label
			>
			<label
				for="dropzone-file"
				class="mt-2 h-48 flex flex-col items-center justify-center border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 hover:bg-gray-100">
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
		<div class="flex space-x-2">
			<div class="flex flex-col space-y-2 w-1/2">
				<label
					class="product-upload-labels after:content-['*'] after:text-error"
					for="employee-id"
					>Employee ID</label
				>
				<input
					type="text"
					class="product-upload-inputs"
					placeholder="Employee ID"
					id="employee-id" />
			</div>
			<div class="flex flex-col space-y-2 w-1/2">
				<label
					class="product-upload-labels after:content-['*'] after:text-error"
					for="employee-name"
					>Employee Name</label
				>
				<input
					type="text"
					class="product-upload-inputs"
					placeholder="Employee Name"
					id="employee-name" />
			</div>
		</div>
		<div class="flex space-x-2">
			<div class="flex flex-col w-1/2">
				<label
					class="product-upload-labels after:content-['*'] after:text-error"
					for="email-address"
					>Email Address</label
				>
				<input
					type="email"
					class="product-upload-inputs"
					placeholder="Enter Email Address"
					id="email-address" />
			</div>
			<div class="flex flex-col w-1/2">
				<label
					class="product-upload-labels after:content-['*'] after:text-error"
					for="password"
					>Password</label
				>
				<input
					type="password"
					class="product-upload-inputs"
					placeholder="Enter A Password"
					id="password" />
			</div>
		</div>
		<div class="flex flex-col space-y-2">
			<label
				class="product-upload-labels after:content-['*'] after:text-error"
				for="phone-number"
				>Phone Number</label
			>
			<input
				type="tel"
				class="product-upload-inputs"
				placeholder="Format 254..."
				id="phone-number" />
		</div>
		<div class="flex flex-col space-y-2 w-full">
			<label
				class="product-upload-labels after:content-['*'] after:text-error"
				for="working-location"
				>Employee's Working Location</label
			>
			<select
				id="working-location"
				class="product-upload-inputs bg-transparent">
				<option
					class="hover:bg-gray-300 p-2 rounded-md"
					v-for="(category, index) in [
						'Nairobi',
						'Mombasa',
						'Eldoret',
						'Kisumu',
						'Nakuru',
					]"
					:key="index"
					:value="category">
					{{ category }}
				</option>
			</select>
		</div>
		<div>
			<h1 class="font-roboto tracking-wide text-2xl">
				Select Privilege for Employee
			</h1>
			<div class="flex justify-center space-x-2 font-nunito mt-2">
				<div>
					<input
						type="radio"
						name="employee-role"
						id="role-admin"
						value="ADMIN"
						class="sr-only peer" />
					<label
						for="role-admin"
						class="sr-radio-btns"
						>Administrator</label
					>
				</div>
				<div>
					<input
						type="radio"
						name="employee-role"
						id="role-viewer"
						value="VIEWER"
						class="sr-only peer"
						checked />
					<label
						for="role-viewer"
						class="sr-radio-btns"
						>Viewer/ Seller</label
					>
				</div>
			</div>
		</div>
		<div class="flex justify-center p-2">
			<button
				type="submit"
				class="generic-button p-2">
				Save New Record
			</button>
		</div>
	</form>
</template>
