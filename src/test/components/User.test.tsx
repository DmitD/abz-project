import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import { User } from '../../components/Users/User/User'
import { render, screen } from '../customRender'

describe('<User />', () => {
	const props = {
		user: {
			id: '36',
			name: 'Joshua',
			email: 'joshua.dean@example.com',
			phone: '+380542161925',
			position: 'Designer',
			position_id: '4',
			registration_timestamp: 1537661281,
			photo:
				'https://frontend-test-assignment-api.abz.agency/images/users/5b977ba1e527036.jpeg',
		},
	}

	it('should be correct renders User component', () => {
		render(<User key={props.user.id} user={props.user} />)

		expect(screen.getByText(props.user.name)).toBeInTheDocument()
		expect(screen.getByRole('img')).toBeInTheDocument()
		expect(screen.getByText(props.user.position)).toBeInTheDocument()
		expect(screen.getByText(props.user.email)).toBeInTheDocument()
		expect(screen.getByText('+380 54 216 19 25')).toBeInTheDocument()
	})
	it('should be correct renders Tooltip', async () => {
		render(<User key={props.user.id} user={props.user} />)

		userEvent.hover(screen.getByText(props.user.email))

		expect(await screen.findByRole('tooltip')).toBeVisible()
	})
})
