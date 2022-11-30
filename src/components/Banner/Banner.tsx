import React from 'react'
import { Button } from '../Button/Button'

export const Banner: React.FC = () => {
	return (
		<section className='banner'>
			<div className='banner--main'>
				<div className='banner--main--info'>
					<h1>Test assignment for front-end developer</h1>
					<p>
						What defines a good front-end developer is one that has skilled
						knowledge of HTML, CSS, JS with a vast understanding of User design
						thinking as they'll be building web interfaces with accessibility in
						mind. They should also be excited to learn, as the world of
						Front-End Development keeps evolving.
					</p>
					<Button>
						<span>Sign up</span>
					</Button>
				</div>
			</div>
		</section>
	)
}
