import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { map } from 'rxjs'
import { AuthService } from '../service/auth.service'
import { WEB_ROUTE } from '../static/global.variables'


/**
 * Гвард для защиты маршрутов, требующих авторизации.
 * Проверяет, авторизован ли пользователь.
 * Если авторизован, разрешает доступ к маршруту.
 * Если не авторизован, перенаправляет на страницу авторизации.
 * Проверка проводится с помощью сервиса AuthService и метода checkAuth().
 * @returns {boolean | UrlTree} - Возвращает true, если пользователь авторизован, или UrlTree для перенаправления на страницу авторизации.
 */
export const authGuard: CanActivateFn = (route, state) => {
	const authService = inject(AuthService)
	const router = inject(Router)

	return authService.checkAuth()
		.pipe(
			map(isAuth => {
				if (isAuth) return true
				else return router.createUrlTree([WEB_ROUTE.AUTH])
			})
		)
}
