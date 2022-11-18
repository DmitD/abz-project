import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner'

import './scss/app.scss'
import UsersList from './components/UsersList'

const App: React.FC = () => {
	return (
		<div className='container'>
			<Header />
			<Banner />
			<UsersList />
		</div>
	)
}

export default App
