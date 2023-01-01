import { IUser } from '../types'

const makeTestUsers = (n: number) => {
	const num = n || 6
	const users = []
	for (let i = 0; i < num; i++) {
		users.push({
			id: `${i}`,
			name: `User ${i}`,
			email: `angel.williams${i}@example.com`,
			phone: `+38049654002${i}`,
			position: 'Designer',
			position_id: `${i}`,
			registration_timestamp: 1537777441,
			photo:
				'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg',
		})
	}
	return users
}

export const mockUsers: IUser[] = makeTestUsers(6)
