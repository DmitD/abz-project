import React from 'react'
import ReactTooltip from 'react-tooltip'
import defaultAvatar from '../assets/img/photo-cover.svg'
import { formatPhone } from '../utils/format'

type UserProps = {
	id: string
	name: string
	email: string
	phone: string
	position: string
	position_id: string
	registration_timestamp: number
	photo: string
}

const User: React.FC<UserProps> = ({ user }) => {
	return (
		<div className='user'>
			<img
				className='user--photo'
				src={user.photo || defaultAvatar}
				alt={user.name}
			/>
			<div className='user--info'>
				<h3 className='user--info--name'>{user.name}</h3>
				<p className='user--info--position'>{user.position}</p>
				<p className='user--info--email' data-tip={user.email}>
					{user.email}
				</p>
				<ReactTooltip
					border={false}
					place={'bottom'}
					className={'user--info--tooltip'}
				/>
				<p className='user--info--phone'>{formatPhone(user.phone)}</p>
			</div>
		</div>
	)
}

export default User
