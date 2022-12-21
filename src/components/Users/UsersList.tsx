import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button } from '../Button/Button'
import { User } from './User/User'
import { Context } from '../../index'

type UserListProps = {
	sectionRef: React.MutableRefObject<HTMLDivElement | null>
}

export const UsersList: React.FC<UserListProps> = observer(({ sectionRef }) => {
	const { store } = React.useContext(Context)
	const { users, currentPage } = store

	React.useEffect(() => {
		store.getUsers(currentPage)
	}, [])

	console.log(store.users)

	return (
		<section ref={sectionRef} className='users-list'>
			<div className='users-list--main'>
				<h2>Working with GET request</h2>
				<div className='users-list--main--wrapper'>
					{users.map(user => (
						<User key={user.id} user={user} />
					))}
				</div>
				<Button onClick={() => store.getUsers(currentPage)}>
					<span>Show more</span>
				</Button>
			</div>
		</section>
	)
})
