import { makeAutoObservable } from 'mobx'
import PositionsService from '../services/PositionsService'
import TokenService from '../services/TokenService'
import UsersService from '../services/UsersService'
import { IUser, IPosition, ValuesFormType } from '../types'

export default class Store {
	users = [] as IUser[]
	errorUsers = ''
	currentPage = 1
	positions = [] as IPosition[]
	isLoadPositions = false
	errorPositions = ''
	userId: null | number = null
	errorCreateUser = ''

	constructor() {
		makeAutoObservable(this)
	}

	setUsers(users: IUser[]) {
		this.users = [...this.users, ...users]
	}

	setErrorUsers(message: string) {
		this.errorUsers = message
	}

	setPage() {
		this.currentPage += 1
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

	setUserId(id: number) {
		this.userId = id
	}

	setErrorCreateUser(message: string) {
		this.errorCreateUser = message
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

	async getToken() {
		try {
			const response = await TokenService.fetchToken()
			if (response.data.success) {
				this.setToken(response.data.token)
				console.log(response.data.token)
			}
		} catch (error: any) {
			console.log('API getToken error: ', error.message)
		}
	}

	async getUsers(page: number) {
		try {
			const response = await UsersService.fetchUsers(page)
			if (response.data.success) {
				this.setUsers(response.data.users)
				this.setPage()
				console.log(response.data)
			}
		} catch (error: any) {
			if (error.response.status === 404) {
				this.setErrorUsers(error.response.data.message)
			}
			if (error.response.status === 422) {
				this.setErrorUsers(error.response.data.message)
			} else {
				this.setErrorUsers(error.message)
			}
			console.log('API getUsers error: ', error)
		}
	}

	async createUser(values: ValuesFormType) {
		try {
			const formData = new FormData()
			formData.append('position_id', values.position ?? '')
			formData.append('name', values.name ?? '')
			formData.append('email', values.email ?? '')
			formData.append('phone', values.phone ?? '')
			formData.append('photo', values.photo ?? '')
			const response = await UsersService.postUser(formData as any)
			if (response.data.success) {
				this.setUserId(response.data.user_id)
				console.log(response.data)
			}
		} catch (error: any) {
			if (error.response.status === 409) {
				this.setErrorCreateUser(error.response.data.message)
			} else {
				this.setErrorCreateUser(error.message)
			}
			console.log('API createUser error: ', error.message)
		}
	}
}
