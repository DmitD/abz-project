import React from 'react'
import { RegForm } from './RegForm/RegForm'

export const Registration: React.FC = () => {
	return (
		<section className='registration'>
			<div className='registration--main'>
				<h2>Working with POST request</h2>
				<div className='registration--main--form'>
					<RegForm />
				</div>
			</div>
		</section>
	)
}
