import '@testing-library/jest-dom/extend-expect'
import { RegForm } from '../../components/Registration/RegForm/RegForm'
import { render, screen } from '../customRender'

describe('<RegForm />', () => {
	it('should be all components', () => {
		render(<RegForm />)

		expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
		expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
		expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
		expect(screen.getByLabelText('Upload')).toBeInTheDocument()
	})
	it('should be disabled button', () => {
		render(<RegForm />)

		expect(screen.getByRole('button')).toHaveClass('button-disabled')
	})
	it('should not have error class', () => {
		render(<RegForm />)

		expect(screen.getByPlaceholderText('Your name')).not.toHaveClass(
			'error-txt'
		)
		expect(screen.getByPlaceholderText('Email')).not.toHaveClass('error-txt')
		expect(screen.getByPlaceholderText('Phone')).not.toHaveClass('error-txt')
	})
})
