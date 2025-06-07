import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API_ROUTE } from '../static/global.variables'

@Injectable({ providedIn: 'root' })
export class AdminService {
	constructor(private readonly httpClient: HttpClient) { }

	deleteAllUsers() {
		return this.httpClient.delete(API_ROUTE.DELETE_ALL_USERS, { withCredentials: true })
	}

	banUser(username: string, reason: string, duration: string) {
		return this.httpClient.patch(`${API_ROUTE.BAN_USER}`,
			{
				username: username,
				reason: reason,
				duration: duration
			},
			{ withCredentials: true }
		)
	}

	unbanUser(username: string) {
		console.log('unbanuser username => ', username)
		return this.httpClient.patch(API_ROUTE.UNBAN_USER, { username }, { withCredentials: true })
	}

	deleteUser(username: string) {
		return this.httpClient.delete(API_ROUTE.DELETE_USER, {
			body: username,
			withCredentials: true
		})
	}

	addAdminRole(username: string) {
		return this.httpClient.patch(API_ROUTE.ADD_ADMIN_ROLE, username, { withCredentials: true })
	}

	deleteAdminRole(username: string) {
		return this.httpClient.patch(API_ROUTE.DELETE_ADMIN_ROLE, username, { withCredentials: true })
	}

	showUserInfo(username: string) {
		return this.httpClient.get(
			`${API_ROUTE.SHOW_USER_INFO}/${username}`, {
			withCredentials: true
		})
	}

	changeUserStatus(username: string) {
		return this.httpClient.patch(API_ROUTE.CHANGE_USER_STATUS, username, { withCredentials: true })
	}
}
