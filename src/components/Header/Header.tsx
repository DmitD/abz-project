import React from 'react'
import logo from '../../assets/img/Logo.svg'
import { Button } from '../Button/Button'
import { scrollToSection, scrollTop } from '../../utils/scrollTo'

type HeaderProps = {
	elemRefs: {
		userListRef: React.MutableRefObject<HTMLDivElement | null>
		registrationRef: React.MutableRefObject<HTMLDivElement | null>
	}
}

export const Header: React.FC<HeaderProps> = ({ elemRefs }) => {
	return (
		<header className='header'>
			<div className='header--main'>
				<div className='header--main--logo' onClick={scrollTop}>
					<img width='60' height='60' src={logo} alt='logo' />
				</div>
				<div className='header--main--toolbar'>
					<Button onClick={() => scrollToSection(elemRefs.userListRef)}>
						<span>Users</span>
					</Button>
					<Button onClick={() => scrollToSection(elemRefs.registrationRef)}>
						<span>Sign up</span>
					</Button>
				</div>
			</div>
		</header>
	)
}
