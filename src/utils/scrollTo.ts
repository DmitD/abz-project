export const scrollToSection = (
	refToElem: React.MutableRefObject<HTMLDivElement | null> | null
) => {
	if (null !== refToElem?.current) {
		window.scrollTo({
			top: refToElem?.current.offsetTop,
			behavior: 'smooth',
		})
	}
}

export const scrollTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}
