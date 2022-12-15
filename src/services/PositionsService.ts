import { AxiosResponse } from 'axios'
import $api from '../api'
import { PositionsResponse } from '../types'

export default class PositionsService {
	static fetchPositions(): Promise<AxiosResponse<PositionsResponse>> {
		return $api.get<PositionsResponse>('/positions')
	}
}
