import React from 'react'
import { Header, Banner, UsersList, Registration } from './components'

import './scss/app.scss'

const App: React.FC = () => {
	return (
		<div className='container'>
			<Header />
			<Banner />
			<UsersList />
			<Registration />
		</div>
	)
}

export default App
