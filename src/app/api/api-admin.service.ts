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
		console.log('username => ', username)
		return this.httpClient.delete(`${API_ROUTE.DELETE_USER}/${username}`, {
			withCredentials: true
		})
	}

	changeUserRole(username: string, role: string) {
		console.table({ username, role })
		return this.httpClient.patch(`${API_ROUTE.CHANGE_USER_ROLE}`,
			{ username, role },
			{ withCredentials: true })
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
