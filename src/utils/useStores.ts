import { useContext } from 'react'
import { Context } from '../index'
import { RootStore } from '../store/RootStore'

export const useStores = (): RootStore => useContext(Context)
