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
	return (
		<div className='container' data-testid='app'>
			<Header />
			<Banner />
			<UsersList />
			<Registration />
			<ScrollToTop />
		</div>
	)
}

export default App
