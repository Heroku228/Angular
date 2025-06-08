import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { map, take } from 'rxjs'
import { ApiAuthService } from '../api/api-auth.service'
import { WEB_ROUTE } from '../static/global.variables'


/**
* Гвард для защиты маршрутов, требующих роли администратора. Проверяет, имеет ли пользователь роль админа. Если имеет, разрешает доступ к маршруту. Если не имеет, перенаправляет на страницу аккаунта. Проверка проводится с помощью сервиса AuthService и метода checkByAdminRole().

@returns — - Возвращает true, если пользователь имеет роль админа, или UrlTree для перенаправления на страницу аккаунта.
 */
export const adminGuard: CanActivateFn = (route, state) => {
	const authService = inject(ApiAuthService)
	const router = inject(Router)

	return authService.checkByAdminRole()
		.pipe(
			map(isAdmin => {
				if (isAdmin) return true
				else return router.createUrlTree([WEB_ROUTE.ME])
			}),
			take(1)
		)
}
