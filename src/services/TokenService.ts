import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../api'
import { TokenResponse } from '../types'

export default class TokenService {
	static fetchToken(): Promise<AxiosResponse<TokenResponse>> {
		return axios.get<TokenResponse>(`${API_URL}/token`)
	}
}
