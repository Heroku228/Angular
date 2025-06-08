import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API_ROUTE } from '../static/global.variables'
import { IResponseUser } from '../types/user.type'

@Injectable({
	providedIn: 'root'
})
export class ApiUsersService {

	constructor(private readonly http: HttpClient) { }

	me() {
		return this.http.get<IResponseUser>(API_ROUTE.ME, { withCredentials: true })
	}

	getUsers() {
		return this.http.get<IResponseUser[]>(API_ROUTE.ALL_USERS)
	}

	logout() {
		return this.http.post(API_ROUTE.LOGOUT, {}, { withCredentials: true })
	}

	updateUserData(formData: FormData) {
		return this.http.patch(API_ROUTE.UPDATE_USER_DATA,
			formData,
			{ withCredentials: true })
	}
}
