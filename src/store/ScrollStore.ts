import { makeAutoObservable } from 'mobx'
import { RootStore } from './RootStore'

export default class ScrollStore {
	rootStore
	scrollToUserList: null | React.MutableRefObject<HTMLDivElement | null> = null
	scrollToRegistration: null | React.MutableRefObject<HTMLDivElement | null> =
		null

	constructor(root: RootStore) {
		this.rootStore = root
		makeAutoObservable(this)
	}

	setRefUserList(ref: React.MutableRefObject<HTMLDivElement | null>) {
		this.scrollToUserList = ref
	}

	setRefRegistration(ref: React.MutableRefObject<HTMLDivElement | null>) {
		this.scrollToRegistration = ref
	}
}
