import { prisma } from '~/prisma/db';

export default defineEventHandler(async (event) => {
	const employeeDetails = await readBody(event);

	const newEmployeeDetails = await prisma.employee
		.create({
			data: {
				email: employeeDetails.email,
				employeeId: employeeDetails.id,
				employeeName: employeeDetails.email,
				mobileNumber: Number(employeeDetails.phoneNumber),
				workingLocation: employeeDetails.location,
				role:
					employeeDetails.privilege === 'VIEWER'
						? 'ROLE_VIEWER'
						: 'ROLE_ADMIN',
			},
		})
		.catch((err) => {
			console.err(`prisma error: ${err}`);
			return {
				
			}
		});

	if (newEmployeeDetails) {
		console.log('Saved new employee details');
	} else {
		console.log('Failed to save new employee details');
	}
});
