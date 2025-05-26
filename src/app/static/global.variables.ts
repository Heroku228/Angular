const BASE_API_URL = 'http://localhost:3000/api/v1'

export const API_ROUTE = {
	REGISTER: `${BASE_API_URL}/auth/register`,
	LOGIN: `${BASE_API_URL}/auth/login`,
	ME: `${BASE_API_URL}/users/me`
} as const

