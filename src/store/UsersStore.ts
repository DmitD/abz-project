import { makeAutoObservable } from 'mobx'
import UsersService from '../services/UsersService'
import { IUser } from '../types'
import { RootStore } from './RootStore'

export default class UsersStore {
	rootStore
	users = [] as IUser[]
	isLoadUsers = false
	errorUsers = ''
	currentPage = 1
	nextUrl: null | string = null

	constructor(root: RootStore) {
		this.rootStore = root
		makeAutoObservable(this)
	}

	setUsers(users: IUser[]) {
		this.users = [...this.users, ...users]
	}

	setIsLoadUsers(bool: boolean) {
		this.isLoadUsers = bool
	}

	setErrorUsers(message: string) {
		this.errorUsers = message
	}

	setPage() {
		this.currentPage += 1
	}

	setNextUrl(url: null | string) {
		this.nextUrl = url
	}

	async getUsers(page: number) {
		try {
			this.setIsLoadUsers(false)
			const response = await UsersService.fetchUsers(page)
			if (response.data.success) {
				this.setUsers(response.data.users)
				this.setIsLoadUsers(true)
				this.setPage()
				this.setNextUrl(response.data.links.next_url)
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
}
