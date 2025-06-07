const BASE_API_URL = 'http://localhost:3000/api/v1'

export const API_ROUTE = {
	REGISTER: `${BASE_API_URL}/auth/register`,
	LOGIN: `${BASE_API_URL}/auth/login`,
	ME: `${BASE_API_URL}/users/me`,
	ALL_USERS: `${BASE_API_URL}/public/users/all-users`,
	LOGOUT: `${BASE_API_URL}/auth/logout`,
	CHECK_AUTH: `${BASE_API_URL}/auth/check-auth`,
	DELETE_ALL_USERS: `${BASE_API_URL}/admin/delete-all-users`,
} as const


export const WEB_ROUTE = {
	AUTH: 'auth',
	ME: 'i',
	ALL_USERS: '/users',
	HOME: '/'
}
