import React from 'react'

type RadioProps = {
	radioName: string
	label: string
	currentValue: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio: React.FC<RadioProps> = ({
	radioName,
	label,
	currentValue,
	onChange,
}) => {
	return (
		<div>
			<label className='custom-radio'>
				<input
					type='radio'
					name={radioName}
					value={label}
					checked={currentValue === label ? true : false}
					onChange={onChange}
				/>
				<span>{label}</span>
			</label>
		</div>
	)
}
