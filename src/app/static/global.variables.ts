const BASE_API_URL = 'http://localhost:3000/api/v1'

export const API_ROUTE = {
	REGISTER: `${BASE_API_URL}/auth/register`,
	LOGIN: `${BASE_API_URL}/auth/login`,
	ME: `${BASE_API_URL}/users/me`,
	ALL_USERS: `${BASE_API_URL}/public/users/all-users`,
	LOGOUT: `${BASE_API_URL}/auth/logout`,
	CHECK_AUTH: `${BASE_API_URL}/auth/check-auth`,
	DELETE_ALL_USERS: `${BASE_API_URL}/admin/delete-all-users`,
	BAN_USER: `${BASE_API_URL}/admin/ban-user`,
	UNBAN_USER: `${BASE_API_URL}/admin/unban-user`,
	DELETE_USER: `${BASE_API_URL}/admin/delete-user`,
	ADD_ADMIN_ROLE: `${BASE_API_URL}/admin/add-admin-role`,
	DELETE_ADMIN_ROLE: `${BASE_API_URL}/admin/delete-admin-role`,
	SHOW_USER_INFO: `${BASE_API_URL}/admin/show-user-info`,
	CHANGE_USER_STATUS: `${BASE_API_URL}/admin/change-user-status`,

} as const


export const WEB_ROUTE = {
	AUTH: 'auth',
	ME: 'i',
	ALL_USERS: '/users',
	HOME: '/'
}
