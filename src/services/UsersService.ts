import { AxiosResponse } from 'axios'
import { $api } from '../api'
import { UsersResponse, UserResponse } from '../types'

export default class UsersService {
	static fetchUsers(page: number): Promise<AxiosResponse<UsersResponse>> {
		return $api.get<UsersResponse>(`/users?page=${page}&count=6`)
	}

	static postUser(newUser: any): Promise<AxiosResponse<UserResponse>> {
		return $api.post<UserResponse>('/users', newUser)
	}
}
