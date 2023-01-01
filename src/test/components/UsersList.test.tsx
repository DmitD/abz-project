import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { UsersList } from '../../components/Users/UsersList'
import { render, screen } from '../customRender'

describe('<UsersList />', () => {
	it('should be 6 users', async () => {
		render(<UsersList />)

		expect(await screen.findAllByTestId('user')).toHaveLength(6)
	})
	it('should be 6 users on click Load More', async () => {
		render(<UsersList />)

		userEvent.click(screen.getByRole('button'))
		expect(await screen.findAllByTestId('user')).toHaveLength(6)
	})
	it('error renders', () => {
		render(<UsersList />)

		expect(screen.queryByText(/sorry, something/i)).not.toBeInTheDocument()
	})
})
