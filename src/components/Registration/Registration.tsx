import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStores } from '../../hooks/useStores'
import { RegForm } from './RegForm/RegForm'
import { RegSuccess } from './RegSuccess/RegSuccess'
import { LoadingReg } from '../Loading/LoadingReg'

export const Registration: React.FC = observer(() => {
	const { authStore, positionsStore, scrollStore } = useStores()
	const { userId, isLoadingUser } = authStore
	const registrationRef = React.useRef<HTMLDivElement | null>(null)

	React.useEffect(() => {
		positionsStore.getPositions()
		scrollStore.setRefRegistration(registrationRef)
	}, [positionsStore, registrationRef])

	return (
		<section ref={registrationRef} className='registration'>
			<div className='registration--main'>
				<h2>
					{userId
						? 'User successfully registered'
						: 'Working with POST request'}
				</h2>
				<div className='registration--main--form'>
					{/* {userId ? <RegSuccess /> : <RegForm />} */}
					{!isLoadingUser && !userId && <RegForm />}
					{isLoadingUser && <LoadingReg />}
					{!!userId && <RegSuccess />}
				</div>
			</div>
		</section>
	)
})
