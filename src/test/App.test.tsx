import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from './customRender'
import App from '../App'

describe('<App />', () => {
	it('Renders <App /> component correctly', () => {
		render(<App />)
		expect(
			screen.getByText(/Test assignment for front-end developer/i)
		).toBeInTheDocument()
	})
})
