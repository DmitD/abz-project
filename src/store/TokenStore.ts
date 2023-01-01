import { makeAutoObservable } from 'mobx'
import TokenService from '../services/TokenService'
import { RootStore } from './RootStore'

export default class TokenStore {
	rootStore

	constructor(root: RootStore) {
		this.rootStore = root
		makeAutoObservable(this)
	}
	setToken(token: string) {
		localStorage.setItem('token', JSON.stringify(token))
	}

	async getToken() {
		try {
			const response = await TokenService.fetchToken()
			if (response.data.success) {
				this.setToken(response.data.token)
				console.log(response.data.token)
				return response.data.token
			}
		} catch (error: any) {
			console.log('API getToken error: ', error.message)
		}
	}
}
