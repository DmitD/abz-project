import React from 'react'
import logo from '../../assets/img/Logo.svg'
import { Button } from '../Button/Button'

export const Header: React.FC = () => {
	return (
		<header className='header'>
			<div className='header--main'>
				<div className='header--main--logo'>
					<img width='60' height='60' src={logo} alt='logo' />
				</div>
				<div className='header--main--toolbar'>
					<Button>
						<span>Users</span>
					</Button>
					<Button>
						<span>Sign up</span>
					</Button>
				</div>
			</div>
		</header>
	)
}
