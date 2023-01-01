import '@testing-library/jest-dom/extend-expect'
import { ScrollToTop } from '../../components'
import { fireEvent, render, screen } from '../customRender'

describe('<ScrollToTop />', () => {
	it('should be on page', async () => {
		render(<ScrollToTop />)

		fireEvent.scroll(window, { target: { scrollY: 501 } })

		expect(await screen.findByTestId('scroll-top')).toBeInTheDocument()
	})
})
