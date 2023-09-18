import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
	console.log('Save product event received');
	const productDetails = await readBody(event);

	const newProduct = await prisma.product
		.create({
			data: {
				id: productDetails.id,
				name: productDetails.name,
				category: productDetails.category,
				color: productDetails.color,
				weight: productDetails.weight,
				image: productDetails.image,
				// assignee: ,
				employeeId: productDetails.employeeId,
				status: 'IN_STOCK',
				price: productDetails.basePrice,
			},
		})
		.catch((err) => {
			console.err(`prisma error: ${err}`);
			return {};
		});

	if (newProduct) {
		console.log('Saved new employee details');
		return {};
	} else {
		console.log('Failed to save new employee details');
		return {};
	}
});
