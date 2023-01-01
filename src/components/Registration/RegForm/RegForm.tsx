import React from 'react'
import { observer } from 'mobx-react-lite'
import { Button } from '../../Button/Button'
import { Radio } from './Radio/Radio'
import { Upload } from './Upload/Upload'
import { useForm } from '../../../hooks/useForm'
import { LoadingPosition } from '../../Loading/LoadingPosition'
import { useStores } from '../../../hooks/useStores'

export const RegForm: React.FC = observer(() => {
	const { positionsStore, authStore, tokenStore } = useStores()
	const { isLoadPositions, positions, errorPositions } = positionsStore
	const { errorCreateUser } = authStore

	const regForm = async () => {
		if (!localStorage.getItem('token')) {
			const token = await tokenStore.getToken()
			if (token) {
				authStore.createUser(values)
				return
			} else {
				authStore.setErrorCreateUser('Sorry, something has gone wrong')
			}
		}
		if (localStorage.getItem('token')) {
			authStore.createUser(values)
		}
		console.log('Callback function when form is submitted!')
		console.log('Form Values ', values)
	}

	const { handleChange, handleSubmit, values, errors } = useForm(regForm)

	const skeletons = [...new Array(3)].map((_, index) => (
		<LoadingPosition key={index} />
	))

	return (
		<form className='reg-form' onSubmit={handleSubmit}>
			<div className='reg-form--text'>
				<label>
					<input
						type='text'
						name='name'
						placeholder='Your name'
						className={errors.name ? 'error-inp' : ''}
						onChange={handleChange}
					/>
					<small className={errors.name ? 'error-txt' : ''}>
						{errors.name ? `${errors.name}` : ''}
					</small>
				</label>
			</div>
			<div className='reg-form--text'>
				<label>
					<input
						type='email'
						name='email'
						placeholder='Email'
						className={errors.email ? 'error-inp' : ''}
						onChange={handleChange}
					/>
					<small className={errors.email ? 'error-txt' : ''}>
						{errors.email ? `${errors.email}` : ''}
					</small>
				</label>
			</div>
			<div className='reg-form--text'>
				<label>
					<input
						type='tel'
						name='phone'
						placeholder='Phone'
						className={errors.phone ? 'error-inp' : ''}
						onChange={handleChange}
					/>
					<small className={errors.phone ? 'error-txt' : ''}>
						{errors.phone ? `${errors.phone}` : `+38 (XXX) XXX - XX - XX`}
					</small>
				</label>
			</div>
			<div className='reg-form--radio'>
				<p>Select your position</p>
				{isLoadPositions ? (
					positions.map(val => (
						<Radio
							key={val.id}
							id={val.id}
							label={val.name}
							radioName='position'
							position={values.position ? Number(values.position) : 1}
							onChange={handleChange}
						/>
					))
				) : errorPositions ? (
					<span style={{ color: '#cd3d40' }}>
						Sorry, something has gone wrong
					</span>
				) : (
					skeletons
				)}
			</div>
			<div className='reg-form--upload'>
				<Upload
					photo={values.photo ?? undefined}
					error={errors.photo ?? ''}
					handleChange={handleChange}
				/>
			</div>
			<Button
				disabled={
					Object.keys(errors).length === 0 &&
					Object.keys(values).length === 5 &&
					!errorPositions
						? false
						: true
				}
				submit
			>
				<span>Sign up</span>
			</Button>
			<div className='reg-form--sign-error'>
				<small className={errorCreateUser ? 'error-txt' : ''}>
					{errorCreateUser ?? ''}
				</small>
			</div>
		</form>
	)
})
