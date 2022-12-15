import React from 'react'
import { Button } from '../../Button/Button'
import { Radio } from './Radio/Radio'
import { Upload } from './Upload/Upload'
import { useForm } from '../../../utils/useForm'
import { IPosition } from '../../../types'
import { LoadingPosition } from '../../Loading/LoadingPosition'

type RegFormProps = {
	positionValues: IPosition[]
	isLoad: boolean
	isError: string
}

export const RegForm: React.FC<RegFormProps> = ({
	positionValues,
	isLoad,
	isError,
}) => {
	const regForm = () => {
		console.log('Callback function when form is submitted!')
		console.log('Form Values ', values)
	}

	const { handleChange, handleSubmit, values, errors } = useForm(regForm)

	const skeletons = [...new Array(3)].map((_, index) => (
		<LoadingPosition key={index} />
	))

	console.log(values)

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
				{isLoad ? (
					positionValues.map(val => (
						<Radio
							key={val.id}
							label={val.name}
							radioName='position'
							position={values.position ?? ''}
							onChange={handleChange}
						/>
					))
				) : isError ? (
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
					!isError
						? false
						: true
				}
				submit
			>
				<span>Sign up</span>
			</Button>
		</form>
	)
}
