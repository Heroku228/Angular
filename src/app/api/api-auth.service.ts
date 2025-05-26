import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { API_ROUTE } from '../static/global.variables'
import { TLoginPayload, TRegisterPayload } from '../types/auth.type'

@Injectable({
	providedIn: 'root'
})
export class ApiAuthService {
	constructor(private readonly http: HttpClient) { }

	login(payload: TLoginPayload) {

		return this.http.post(
			API_ROUTE.LOGIN,
			JSON.stringify(payload),
			{
				withCredentials: true,
				headers: { 'content-type': 'application/json' }
			}
		)
	}

	register(payload: TRegisterPayload) {
		const formData = new FormData()

		formData.append('username', payload.username)
		formData.append('password', payload.password)
		formData.append('email', payload.email)
		formData.append('icon', payload.icon)

		return this.http.post(
			API_ROUTE.REGISTER,
			formData,
			{ withCredentials: true }
		)
	}
}

