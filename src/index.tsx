import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RootStore, rootStore } from './store/RootStore'
//import Store from './store/store'

// interface State {
// 	store: Store
// }

export interface Store {
	rootStore: RootStore
}

//const store = new Store()

export const Context = createContext<RootStore>(rootStore)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Context.Provider value={rootStore}>
		<App />
	</Context.Provider>
)
