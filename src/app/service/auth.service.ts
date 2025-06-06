import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { catchError, map, Observable, of } from 'rxjs'
import { API_ROUTE } from '../static/global.variables'

type TAuthenticationStatus = {
	isAuthenticated: boolean
}

/**
 * Сервис для работы с текущим авторизованным пользователем
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
	constructor(private readonly http: HttpClient) { }

	// TODO -> Дополнительно сделать проверку на наличие АДМИН прав у пользователя
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
