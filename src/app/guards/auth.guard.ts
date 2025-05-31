import { inject } from '@angular/core'
import { Router } from '@angular/router'
import { catchError, map, of } from 'rxjs'
import { AuthService } from '../service/auth.service'

/**
 * Guard для проверки на авторизованность пользователя. Делает запрос на сервер
 * @returns Возвращает булевое значение, если авторизован, то: True, а в ином случае False
 */
export const authGuard = () => {
	const authService = inject(AuthService)
	const router = inject(Router)

	return authService.checkAuth()
		.pipe(
			map(isAuthenticated => {
				if (!isAuthenticated) {
					router.navigate(['/auth'])
					return false
				}
				return true
			}),
			catchError(() => {
				router.navigate(['/auth'])
				return of(false)
			})
		)
}
