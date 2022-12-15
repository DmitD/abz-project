// useForm
export type ValuesFormType = {
	name?: string
	email?: string
	phone?: string
	position?: string
	photo?: File
}

export type ErrorsFormType = {
	name?: string
	email?: string
	phone?: string
	position?: string
	photo?: string
}

// PositionsService
export interface PositionsResponse {
	success: boolean
	positions: IPosition[]
}

export interface IPosition {
	id: number
	name: string
}

// UsersService
export interface UsersResponse {
	success: boolean
	page: number
	total_pages: number
	total_users: number
	count: number
	links: {
		next_url: string | null
		prev_url: string | null
	}
	users: IUser[]
}

export interface IUser {
	id: number
	name: string
	email: string
	phone: string
	position: string
	position_id: string
	registration_timestamp: number
	photo: string
}

//TokenService
export interface TokenResponse {
	success: boolean
	token: string
}
