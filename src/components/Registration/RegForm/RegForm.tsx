import React from 'react'
import { Button } from '../../Button/Button'
import { Radio } from './Radio/Radio'
import { Upload } from './Upload/Upload'

export const RegForm: React.FC = () => {
	const [position, setPosition] = React.useState('Frontend developer')

	const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPosition(event.target.value)
	}

	return (
		<form className='reg-form'>
			<div className='reg-form--text'>
				<label>
					<input type='text' name='name' placeholder='Your name' />
				</label>
			</div>
			<div className='reg-form--text'>
				<label>
					<input type='email' name='email' placeholder='Email' />
				</label>
			</div>
			<div className='reg-form--text'>
				<label>
					<input type='tel' name='phone' placeholder='Phone' />
					<small>+38 (XXX) XXX - XX - XX</small>
				</label>
			</div>
			<div className='reg-form--radio'>
				<p className='reg-form--radio--label'>Select your position</p>
				<Radio
					label='Frontend developer'
					radioName='position'
					currentValue={position}
					onChange={radioHandler}
				/>
				<Radio
					label='Backend developer'
					radioName='position'
					currentValue={position}
					onChange={radioHandler}
				/>
				<Radio
					label='Designer'
					radioName='position'
					currentValue={position}
					onChange={radioHandler}
				/>
				<Radio
					label='QA'
					radioName='position'
					currentValue={position}
					onChange={radioHandler}
				/>
			</div>
			<div className='reg-form--upload'>
				<Upload />
			</div>
			<Button disabled>
				<span>Sign up</span>
			</Button>
		</form>
	)
}
