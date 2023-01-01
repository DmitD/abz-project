import { useContext } from 'react'
import { StoreContext } from '../store/useStore'
import { RootStore } from '../store/RootStore'

export const useStores = (): RootStore => useContext(StoreContext)
