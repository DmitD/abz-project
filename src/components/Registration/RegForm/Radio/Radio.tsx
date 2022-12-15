import React from 'react'

type RadioProps = {
	radioName: string
	label: string
	position: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio: React.FC<RadioProps> = ({
	radioName,
	label,
	position,
	onChange,
}) => {
	return (
		<div className='radio-checkbox'>
			<label>
				<input
					type='radio'
					name={radioName}
					value={label}
					checked={position === label ? true : false}
					onChange={onChange}
				/>
				<span>{label}</span>
			</label>
		</div>
	)
}
