import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { map } from 'rxjs'
import { AuthService } from '../service/auth.service'
import { WEB_ROUTE } from '../static/global.variables'


export const noAuthGuard: CanActivateFn = (route, state) => {
	const authService = inject(AuthService)
	const router = inject(Router)

	return authService.checkAuth()
		.pipe(
			map(isAuth => {
				if (!isAuth) return true
				else return router.createUrlTree([WEB_ROUTE.ME])
			})
		)
}
