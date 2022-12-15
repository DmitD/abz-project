import React from 'react'
import { Button } from '../Button/Button'
import { User } from './User/User'

const user = {
	id: '30',
	name: 'Angel',
	email: 'angel.williams@example.com',
	phone: '+380496540023',
	position: 'Designer',
	position_id: '4',
	registration_timestamp: 1537777441,
	photo:
		'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba13fb3330.jpeg',
}

type UserListProps = {
	sectionRef: React.MutableRefObject<HTMLDivElement | null>
}

export const UsersList: React.FC<UserListProps> = ({ sectionRef }) => {
	return (
		<section ref={sectionRef} className='users-list'>
			<div className='users-list--main'>
				<h2>Working with GET request</h2>
				<div className='users-list--main--wrapper'>
					<User user={user} />
					<User user={user} />
					<User user={user} />
					<User user={user} />
					<User user={user} />
					<User user={user} />
				</div>
				<Button>
					<span>Show more</span>
				</Button>
			</div>
		</section>
	)
}
