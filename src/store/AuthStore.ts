import { makeAutoObservable } from 'mobx'
import UsersService from '../services/UsersService'
import { ValuesFormType } from '../types'
import { RootStore } from './RootStore'

export default class AuthStore {
	rootStore
	userId: null | number = null
	errorCreateUser = ''

	constructor(root: RootStore) {
		this.rootStore = root
		makeAutoObservable(this)
	}

	setUserId(id: number) {
		this.userId = id
	}

	setErrorCreateUser(message: string) {
		this.errorCreateUser = message
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
