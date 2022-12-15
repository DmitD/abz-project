import { AxiosResponse } from 'axios'
import $api from '../api'
import { TokenResponse } from '../types'

export default class TokenService {
	static fetchToken(): Promise<AxiosResponse<TokenResponse>> {
		return $api.get<TokenResponse>('/token')
	}
}
