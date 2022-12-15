import React from 'react'
import classNames from 'classnames'

type ButtonProps = {
	children?: React.ReactNode
	disabled?: boolean
	submit?: boolean
	onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
	children,
	disabled,
	submit,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			type={submit ? 'submit' : 'button'}
			className={classNames('button', {
				'button-disabled': disabled,
			})}
		>
			{children}
		</button>
	)
}
