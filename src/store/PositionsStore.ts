import { makeAutoObservable } from 'mobx'
import PositionsService from '../services/PositionsService'
import { IPosition } from '../types'
import { RootStore } from './RootStore'

export default class PositionsStore {
	rootStore
	positions = [] as IPosition[]
	isLoadPositions = false
	errorPositions = ''

	constructor(root: RootStore) {
		this.rootStore = root
		makeAutoObservable(this)
	}

	setPositions(positions: IPosition[]) {
		this.positions = positions
	}

	setIsLoadPositions(bool: boolean) {
		this.isLoadPositions = bool
	}

	setErrorPositions(message: string) {
		this.errorPositions = message
	}

	async getPositions() {
		try {
			const response = await PositionsService.fetchPositions()
			if (response.data.success) {
				this.setPositions(response.data.positions)
				this.setIsLoadPositions(true)
			}
		} catch (error: any) {
			if (error.response.status === 404) {
				this.setErrorPositions(error.response.data.message)
			}
			if (error.response.status === 422) {
				this.setErrorPositions(error.response.data.message)
			} else {
				this.setErrorPositions(error.message)
			}
			console.log('API getPositions error: ', error.message)
		}
	}
}
