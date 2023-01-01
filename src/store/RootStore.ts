import AuthStore from './AuthStore'
import TokenStore from './TokenStore'
import UsersStore from './UsersStore'
import PositionsStore from './PositionsStore'
import ScrollStore from './ScrollStore'

export class RootStore {
	authStore: AuthStore
	tokenStore: TokenStore
	usersStore: UsersStore
	positionsStore: PositionsStore
	scrollStore: ScrollStore

	constructor() {
		this.authStore = new AuthStore(this)
		this.tokenStore = new TokenStore(this)
		this.usersStore = new UsersStore(this)
		this.positionsStore = new PositionsStore(this)
		this.scrollStore = new ScrollStore(this)
	}
}

export const rootStore = new RootStore()
