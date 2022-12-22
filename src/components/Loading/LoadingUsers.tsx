import React from 'react'
import ContentLoader from 'react-content-loader'

export const LoadingUsers: React.FC = () => (
	<div style={{ textAlign: 'center' }}>
		<ContentLoader
			speed={2}
			width={282}
			height={254}
			viewBox='0 0 282 254'
			backgroundColor='#f3f3f3'
			foregroundColor='#dad7d7'
		>
			<circle cx='141' cy='55' r='35' />
			<rect x='56' y='111' rx='0' ry='0' width='170' height='22' />
			<rect x='90' y='156' rx='0' ry='0' width='100' height='22' />
			<rect x='46' y='182' rx='0' ry='0' width='190' height='22' />
			<rect x='51' y='208' rx='0' ry='0' width='180' height='22' />
		</ContentLoader>
	</div>
)
