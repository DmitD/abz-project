import React from 'react'
import classNames from 'classnames'

type ButtonProps = {
	children?: React.ReactNode
	disabled?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, disabled }) => {
	return (
		<button
			className={classNames('button', {
				'button-disabled': disabled,
			})}
		>
			{children}
		</button>
	)
}
