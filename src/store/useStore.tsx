import React from 'react'
import { RootStore, rootStore } from '../store/RootStore'

export const StoreContext = React.createContext<RootStore>(rootStore)

export type StoreComponent = React.FC<{
	children: React.ReactNode
}>

export const StoreProvider: StoreComponent = ({
	children,
}): React.ReactElement => {
	return (
		<StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
	)
}
