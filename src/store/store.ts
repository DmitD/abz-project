import { makeAutoObservable } from 'mobx'
import PositionsService from '../services/PositionsService'
import TokenService from '../services/TokenService'
import { IUser, IPosition } from '../types'

export default class Store {
	users = [] as IUser[]
	positions = [] as IPosition[]
	isLoadPositions = false
	errorPositions = ''

	constructor() {
		makeAutoObservable(this)
	}

	setUsers(users: IUser[]) {
		this.users = users
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

	setToken(token: string) {
		localStorage.setItem('token', JSON.stringify(token))
	}

	async getPositions() {
		try {
			const response = await PositionsService.fetchPositions()
			if (response.data.success) {
				this.setPositions(response.data.positions)
				this.setIsLoadPositions(true)
			}
		} catch (error: any) {
			this.setErrorPositions(error.message)
			console.log('API getPositions error: ', error.message)
		}
	}

	async getToken() {
		try {
			const response = await TokenService.fetchToken()
			if (response.data.success) {
				this.setToken(response.data.token)
			}
		} catch (error: any) {
			console.log('API getToken error: ', error.message)
		}
	}
}
