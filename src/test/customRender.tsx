import React from 'react'
import { render, RenderOptions } from '@testing-library/react'

import { StoreProvider } from '../store/useStore'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
	return <StoreProvider>{children}</StoreProvider>
}

const customRender = (
	ui: React.ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Wrapper, ...options })

export * from '@testing-library/react'
export { customRender as render }
