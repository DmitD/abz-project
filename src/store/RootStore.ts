import AuthStore from './AuthStore'
import TokenStore from './TokenStore'
import UsersStore from './UsersStore'
import PositionsStore from './PositionsStore'

export class RootStore {
	authStore: AuthStore
	tokenStore: TokenStore
	usersStore: UsersStore
	positionsStore: PositionsStore

	constructor() {
		this.authStore = new AuthStore(this)
		this.tokenStore = new TokenStore(this)
		this.usersStore = new UsersStore(this)
		this.positionsStore = new PositionsStore(this)
	}
}

export const rootStore = new RootStore()
