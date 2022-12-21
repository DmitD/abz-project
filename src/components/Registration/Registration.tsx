import React from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../..'
import { RegForm } from './RegForm/RegForm'
import { RegSuccess } from './RegSuccess/RegSuccess'

type RegistrationProps = {
	sectionRef: React.MutableRefObject<HTMLDivElement | null>
}

export const Registration: React.FC<RegistrationProps> = observer(
	({ sectionRef }) => {
		const { store } = React.useContext(Context)
		const { userId } = store

		React.useEffect(() => {
			store.getPositions()
		}, [store])

		return (
			<section ref={sectionRef} className='registration'>
				<div className='registration--main'>
					<h2>
						{userId
							? 'User successfully registered'
							: 'Working with POST request'}
					</h2>
					<div className='registration--main--form'>
						{userId ? <RegSuccess /> : <RegForm />}
					</div>
				</div>
			</section>
		)
	}
)
