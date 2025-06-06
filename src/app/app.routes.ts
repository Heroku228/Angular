import { Routes } from '@angular/router'
import { authGuard } from './guards/auth.guard'
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
		component: AuthComponent
	},
	{
		path: 'i',
		component: AccountPageData,
		canActivate: [authGuard]
	},
	{
		path: 'i/admin',
		component: AdminComponent,
		canActivate: [authGuard]
	}
]
