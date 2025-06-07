import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map, Observable, of } from 'rxjs'
import { API_ROUTE } from '../static/global.variables'
import { TLoginPayload, TRegisterPayload } from '../types/auth.type'

type TAuthenticationStatus = {
	isAuthenticated: boolean
}


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

		if (payload.icon)
			formData.append('icon', payload.icon)

		return this.http.post(
			API_ROUTE.REGISTER,
			formData,
			{ withCredentials: true }
		)
	}
	checkAuth(): Observable<boolean> {
		return this.http.get<TAuthenticationStatus>(
			API_ROUTE.CHECK_AUTH,
			{
				withCredentials: true
			})
			.pipe(
				map(res => res.isAuthenticated),
				catchError(() => of(false))
			)
	}
}

