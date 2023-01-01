import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button } from '../Button/Button'
import { User } from './User/User'
import { useStores } from '../../hooks/useStores'
import { LoadingUsers } from '../Loading/LoadingUsers'

export const UsersList: React.FC = observer(() => {
	const { usersStore, scrollStore } = useStores()
	const { users, currentPage, isLoadUsers, errorUsers, nextUrl } = usersStore
	const userListRef = React.useRef<HTMLDivElement | null>(null)

	React.useEffect(() => {
		usersStore.getUsers(currentPage)
		scrollStore.setRefUserList(userListRef)
	}, [userListRef])

	const skeletons = [...new Array(6)].map((_, index) => (
		<LoadingUsers key={index} />
	))

	return (
		<section ref={userListRef} className='users-list'>
			<div className='users-list--main'>
				<h2>Working with GET request</h2>
				<div className='users-list--main--wrapper'>
					{!!users.length &&
						users.map(user => <User key={user.id} user={user} />)}
					{!isLoadUsers && !errorUsers && skeletons}
				</div>
				{!!errorUsers && (
					<div
						style={{
							color: '#cd3d40',
							textAlign: 'center',
							paddingBottom: '50px',
						}}
					>
						<p>Sorry, something has gone wrong</p>
						<p>{errorUsers}</p>
					</div>
				)}
				<Button
					disabled={nextUrl ? false : true}
					onClick={() => usersStore.getUsers(currentPage)}
				>
					<span>Show more</span>
				</Button>
			</div>
		</section>
	)
})
