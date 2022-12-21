import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import TokenService from '../services/TokenService'

export const API_URL = `https://frontend-test-assignment-api.abz.agency/api/v1`

export const $api = axios.create({
	baseURL: API_URL,
})

//interceptors
$api.interceptors.request.use((config: AxiosRequestConfig) => {
	config.headers = config.headers ?? {}
	config.headers.Token = localStorage.getItem('token')
	return config
})

$api.interceptors.response.use(
	(config: AxiosResponse) => {
		return config
	},
	async error => {
		const originalRequest = error.config
		if (error.response.status === 401 && error.config) {
			try {
				const response = await TokenService.fetchToken()
				localStorage.setItem('token', response.data.token)
				return $api.request(originalRequest)
			} catch (e) {
				console.log(e)
			}
		}
		throw error
	}
)
