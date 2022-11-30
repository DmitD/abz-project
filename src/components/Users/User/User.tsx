import React from 'react'
import ReactTooltip from 'react-tooltip'
import defaultAvatar from '../../../assets/img/photo-cover.svg'
import { formatPhone } from '../../../utils/format'

type UserProps = {
	user: {
		id: string
		name: string
		email: string
		phone: string
		position: string
		position_id: string
		registration_timestamp: number
		photo: string
	}
}

export const User: React.FC<UserProps> = ({ user }) => {
	return (
		<div className='user'>
			<img
				className='user--photo'
				src={user.photo || defaultAvatar}
				alt={user.name}
				onError={(e: React.ChangeEvent<HTMLImageElement>) => {
					e.target.src = defaultAvatar
				}}
			/>
			<h3 className='user--name'>{user.name}</h3>
			<p className='user--position'>{user.position}</p>
			<p className='user--email' data-tip={user.email}>
				{user.email}
			</p>
			<ReactTooltip border={false} place='bottom' className='user--tooltip' />
			<p className='user--phone'>{formatPhone(user.phone)}</p>
		</div>
	)
}
