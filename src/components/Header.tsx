import React from 'react'
import logo from '../assets/img/Logo.svg'
import Button from './Button'

const Header: React.FC = () => {
	return (
		<div className='header'>
			<div className='header--logo'>
				<img width='60' height='60' src={logo} alt='logo' />
			</div>
			<div className='header--toolbar'>
				<Button>Users</Button>
				<Button>Sign up</Button>
			</div>
		</div>
	)
}

export default Header
