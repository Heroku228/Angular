import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API_ROUTE } from '../static/global.variables'

@Injectable({ providedIn: 'root' })
export class AdminService {
	constructor(private readonly httpClient: HttpClient) { }

	deleteAllUsers() {
		return this.httpClient.delete(API_ROUTE.DELETE_ALL_USERS, { withCredentials: true })
	}
}
