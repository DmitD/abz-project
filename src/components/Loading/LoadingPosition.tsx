import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoadingPosition: React.FC = () => (
	<div>
		<ContentLoader
			speed={2}
			width={160}
			height={26}
			viewBox='0 0 160 26'
			backgroundColor='#f3f3f3'
			foregroundColor='#dad7d7'
		>
			<circle cx='13' cy='14' r='10' />
			<rect x='34' y='2' rx='0' ry='0' width='125' height='25' />
		</ContentLoader>
	</div>
)
