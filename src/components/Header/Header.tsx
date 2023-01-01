import React from 'react'
import { observer } from 'mobx-react-lite'
import logo from '../../assets/img/Logo.svg'
import { Button } from '../Button/Button'
import { scrollToSection, scrollTop } from '../../utils/scrollTo'
import { useStores } from '../../hooks/useStores'

export const Header: React.FC = observer(() => {
	const { scrollStore } = useStores()
	const { scrollToUserList, scrollToRegistration } = scrollStore

	return (
		<header className='header'>
			<div className='header--main'>
				<div className='header--main--logo' onClick={scrollTop}>
					<img width='60' height='60' src={logo} alt='logo' />
				</div>
				<div className='header--main--toolbar'>
					<Button onClick={() => scrollToSection(scrollToUserList)}>
						<span>Users</span>
					</Button>
					<Button onClick={() => scrollToSection(scrollToRegistration)}>
						<span>Sign up</span>
					</Button>
				</div>
			</div>
		</header>
	)
})
