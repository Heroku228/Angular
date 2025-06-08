import { Routes } from '@angular/router'
import { adminGuard } from './guards/admin.guard'
import { authGuard } from './guards/auth.guard'
import { noAuthGuard } from './guards/noAuth.guard'
import { ProfileCardComponent } from './pages/all-users/all-users.component'
import { AuthComponent } from './pages/auth/auth.component'
import { AccountPageData } from './pages/i/account/account.component'
import { AdminComponent } from './pages/i/admin/admin.component'

export const routes: Routes = [
	{
		path: '',
		component: ProfileCardComponent,
	},
	{
		path: 'auth',
		component: AuthComponent,
		canActivate: [noAuthGuard]
	},
	{
		path: 'i',
		component: AccountPageData,
		canActivate: [authGuard]
	},
	{
		path: 'i/admin',
		component: AdminComponent,
		canActivate: [adminGuard, authGuard,]
	}
]
