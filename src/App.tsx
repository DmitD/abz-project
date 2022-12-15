import React from 'react'
import {
	Header,
	Banner,
	UsersList,
	Registration,
	ScrollToTop,
} from './components'

import './scss/app.scss'

const App: React.FC = () => {
	const userListRef = React.useRef<HTMLDivElement | null>(null)
	const registrationRef = React.useRef<HTMLDivElement | null>(null)

	return (
		<div className='container'>
			<Header elemRefs={{ userListRef, registrationRef }} />
			<Banner />
			<UsersList sectionRef={userListRef} />
			<Registration sectionRef={registrationRef} />
			<ScrollToTop />
		</div>
	)
}

export default App
