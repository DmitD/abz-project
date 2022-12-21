import React from 'react'

type RadioProps = {
	id: number
	radioName: string
	label: string
	position: number
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Radio: React.FC<RadioProps> = ({
	id,
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
					value={id}
					checked={position === id ? true : false}
					onChange={onChange}
				/>
				<span>{label}</span>
			</label>
		</div>
	)
}
