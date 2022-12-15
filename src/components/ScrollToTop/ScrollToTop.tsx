import React from 'react'
import { HiChevronDoubleUp } from 'react-icons/hi2'
import { scrollTop } from '../../utils/scrollTo'

export const ScrollToTop: React.FC = () => {
	const [showScrollTopButton, setShowScrollTopButton] = React.useState(false)

	React.useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 500) {
				setShowScrollTopButton(true)
			} else {
				setShowScrollTopButton(false)
			}
		})
	}, [])

	return (
		<div>
			{showScrollTopButton && (
				<HiChevronDoubleUp
					className='top-btn-position top-btn-style'
					onClick={scrollTop}
				/>
			)}
		</div>
	)
}
