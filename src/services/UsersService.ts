import { AxiosResponse } from 'axios'
import $api from '../api'
import { UsersResponse } from '../types'

export default class UsersService {
	static fetchPositions(): Promise<AxiosResponse<UsersResponse>> {
		return $api.get<UsersResponse>('/users')
	}
}
